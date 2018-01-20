import {fromSJSONDictionary} from 'sketchapp-json-plugin';
import {fixTextLayer} from 'html-sketchapp/asketch2sketch/helpers/fixFont';
import fixImageFill from 'html-sketchapp/asketch2sketch/helpers/fixImageFill';
import makeSVGLayer from 'html-sketchapp/asketch2sketch/helpers/makeSVGLayer';

const jsonContent = require('./page.asketch.json');

function removeExistingLayers(context) {
  if (context.containsLayers()) {
    const loop = context.children().objectEnumerator();
    let currLayer = loop.nextObject();

    while (currLayer) {
      if (currLayer !== context) {
        currLayer.removeFromParent();
      }
      currLayer = loop.nextObject();
    }
  }
}

function fixLayer(layer) {
  if (layer['_class'] === 'text') {
    fixTextLayer(layer);
  } else {
    fixImageFill(layer);
  }

  if (layer.layers) {
    layer.layers.forEach(fixLayer);
  }
}

function getNativeLayer(layer) {
  if (layer['_class'] === 'svg') {
    return makeSVGLayer(layer);
  } else {
    fixLayer(layer);
    return fromSJSONDictionary(layer);
  }
}

export default function asketch2sketch(context) {
  const document = context.document;
  const page = document.currentPage();

  removeExistingLayers(page);

  page.name = jsonContent.name;

  jsonContent.layers.forEach(layer => {
    const nativeLayer = getNativeLayer(layer);

    try {
      page.addLayer(nativeLayer);
    } catch (e) {
      console.log('Layer couldn\'t be created');
      console.log(e);
      console.log(layer);
    }
  });

  console.log('Layers added: ' + jsonContent.layers.length);
}
