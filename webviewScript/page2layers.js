import nodeTreeToSketchPage from '@brainly/html-sketchapp/html2asketch/nodeTreeToSketchPage';
import pseudoToElement from './pseudoToElement';
import changingBackgroudImages from './backgroundImage';

function getLayerName(node) {
  return node.getAttribute('id') || node.getAttribute('class') || node.nodeName;
}

export default async function run() {
  pseudoToElement();
  await changingBackgroudImages();
  const page = nodeTreeToSketchPage(window.htmlToSketch.selectedElement || document.body, {
    getGroupName: getLayerName,
    getRectangleName: getLayerName,
  });

  return page.toJSON();
}
