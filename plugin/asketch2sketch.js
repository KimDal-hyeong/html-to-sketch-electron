import UI from 'sketch/ui';
import {fromSJSONDictionary} from 'sketchapp-json-plugin';
import {fixTextLayer} from '@brainly/html-sketchapp/asketch2sketch/helpers/fixFont';
import fixImageFillsInLayer from '@brainly/html-sketchapp/asketch2sketch/helpers/fixImageFill';
import fixBitmap from '@brainly/html-sketchapp/asketch2sketch/helpers/fixBitmap';
import fixSVGLayer from '@brainly/html-sketchapp/asketch2sketch/helpers/fixSVG';

function getNativeLayer(failingLayers, layer) {
  // debug
  // console.log('Processing ' + layer.name + ' (' + layer._class + ')');

  if (layer._class === 'text') {
    fixTextLayer(layer);
  } else if (layer._class === 'svg') {
    fixSVGLayer(layer);
  } else if (layer._class === 'bitmap') {
    fixBitmap(layer);
  } else {
    fixImageFillsInLayer(layer);
  }

  // Create native object for the current layer, ignore the children for now
  // this alows us to catch and ignore failing layers and finish the import
  const children = layer.layers;
  let nativeObj = null;

  layer.layers = [];

  try {
    nativeObj = fromSJSONDictionary(layer);
  } catch (e) {
    failingLayers.push(layer.name);

    console.log('Layer failed to import: ' + layer.name);
    return null;
  }

  // Get native object for all child layers and append them to the current object
  if (children && children.length) {
    children.forEach(child => {
      const nativeChild = getNativeLayer(failingLayers, child);

      if (nativeChild) {
        nativeObj.addLayer(nativeChild);
      }
    });
  }

  return nativeObj;
}

function getCurrentView(doc) {
  if (doc.currentView) {
    return doc.currentView();
  } else if (doc.contentDrawView) {
    return doc.contentDrawView();
  }
  console.log('can not get the currentView');
  return null;
}

export default function asketch2sketch(context) {
  const document = context.document;
  const page = document.currentPage();

  // "jsonContentString"은 script/runPlugin.js을 통해 번들링 과정에서 주입.
  let asketchPage = JSON.parse(jsonContentString);

  const viewRect = getCurrentView(document).visibleContentRect();
  const viewRectOrigin = viewRect.origin;
  const viewRectSize = viewRect.size;
  asketchPage.layers[0].frame.x = viewRectOrigin.x + viewRectSize.width / 2 - asketchPage.layers[0].frame.width / 2;
  asketchPage.layers[0].frame.y = viewRectOrigin.y + viewRectSize.height / 2 - asketchPage.layers[0].frame.height / 2;

  const failingLayers = [];

  asketchPage.layers
    .map(getNativeLayer.bind(null, failingLayers))
    .forEach(layer => layer && page.addLayer(layer));

  if (failingLayers.length === 1) {
    UI.alert('asketch2sketch', 'One layer couldn\'t be imported and was skipped.');
  } else if (failingLayers.length > 1) {
    UI.alert('asketch2sketch', `${failingLayers.length} layers couldn't be imported and were skipped.`);
  } else {
    const emojis = ['👌', '👍', '✨', '😍', '🍾', '🤩', '🎉', '👏', '💪', '🤘', '💅', '🏆', '🚀'];

    UI.message(`Import successful ${emojis[Math.floor(emojis.length * Math.random())]}`);
  }
}
