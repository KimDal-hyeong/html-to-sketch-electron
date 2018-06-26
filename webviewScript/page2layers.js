import nodeTreeToSketchPage from '@brainly/html-sketchapp/html2asketch/nodeTreeToSketchPage';
import pseudoToElement from './pseudoToElement';

function getLayerName(node) {
  return node.getAttribute('id') || node.getAttribute('class') || node.nodeName;
}

export default async function run() {
  pseudoToElement();
  const page = nodeTreeToSketchPage(window.htmlToSketch.selectedElement || document.body, {
    getGroupName: getLayerName,
    getRectangleName: getLayerName,
  });

  return page.toJSON();
}
