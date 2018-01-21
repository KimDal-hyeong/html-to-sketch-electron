import Page from 'html-sketchapp/html2asketch/page';
import nodeToSketchLayers from 'html-sketchapp/html2asketch/nodeToSketchLayers';

async function imgToSvg() {
  const toTextCotent = url => fetch(url, {mode: 'cors'})
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsText(blob);
    }));

  const tempIterable = Array.from(document.querySelectorAll('img')).map(async elm => {
    const src = elm.src;

    if (src.indexOf('.svg') !== -1) {
      const svgString = await toTextCotent(src + '?cache').catch(e => {
        console.error(e);
      });
      const elementStyle = getComputedStyle(elm);
      const svgContainer = document.createElement('span');
      svgContainer.setAttribute('style', elementStyle.cssText);
      svgContainer.style.display = 'inline-block';
      svgContainer.innerHTML = svgString;
      elm.insertAdjacentElement('afterEnd', svgContainer);
      elm.remove();
    }
    return 1;
  });

  return Promise.all(tempIterable);
}

function groupSVGChildren() {
  Array.from(document.querySelectorAll('svg')).forEach(function (elm) {
    elm.innerHTML = '<g>' + elm.innerHTML + '</g>';
  });
}

function pseudoToElement() {

  // after and before to element
  const css = '.before-reset::before, .after-reset::after { content: none !important; }';
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');

  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);

  const allElements = document.getElementsByTagName('*');

  Array.from(allElements).forEach(function (elm) {
    const elementBeforeStyles = getComputedStyle(elm, ':before');
    const elementAfterStyles = getComputedStyle(elm, ':after');
    const elementBeforeContent = elementBeforeStyles.content;
    const elementAfterContent = elementAfterStyles.content;

    if (elementBeforeContent) {
      const virtualBefore = document.createElement('span');

      virtualBefore.setAttribute('style', elementBeforeStyles.cssText);
      virtualBefore.innerHTML = elementBeforeStyles.content.split('"').join('');
      elm.className += ' before-reset';
      elm.prepend(virtualBefore);
    }

    if (elementAfterContent) {
      const virtualAfter = document.createElement('span');

      virtualAfter.setAttribute('style', elementAfterStyles.cssText);
      virtualAfter.innerHTML = elementAfterStyles.content.split('"').join('');
      elm.className += ' after-reset';
      elm.appendChild(virtualAfter);
    }
  });

  // value and placeholder in inputs to element
  function selectorsToElements(selectors) {
    let elements = [];
    selectors.forEach(function (selector) {
      elements = elements.concat(Array.from(document.querySelectorAll(selector)));
    });
    return elements;
  }

  const selectors = ['input[type=submit]', 'input[type=text]', 'input[type=number]', 'input[type=tel]', 'input[type=url]', 'input[type=password]', 'input[type=email]', 'input[type=search]', 'select', 'textarea'];
  const allFields = selectorsToElements(selectors);

  Array.from(allFields).forEach(function (elm) {
    const elementStyles = getComputedStyle(elm);
    const elementValue = elm.value;
    const elementPlaceholder = elm.placeholder;
    const virtualField = elm.nodeName === 'textarea' ? document.createElement('div') : document.createElement('button') ;

    virtualField.setAttribute('style', elementStyles.cssText);

    if (elementPlaceholder !== '' && elementPlaceholder !== undefined) {
      virtualField.innerText = elementPlaceholder;
      virtualField.style.color = '#9E9E9E';
    }

    if (elementValue) {
      virtualField.innerText = elementValue;
    }

    elm.insertAdjacentElement('afterEnd', virtualField);
    elm.style.display = 'none';
  })
}

export async function run() {

  await imgToSvg();
  groupSVGChildren();
  pseudoToElement();

  const page = new Page({
    width: document.body.offsetWidth,
    height: document.body.offsetHeight
  });

  page.setName(document.title);
  
  if (!window.h2s_SelectedElement) {
    window.h2s_SelectedElement = document.body;
  }

  const elements = Array.from(window.h2s_SelectedElement.querySelectorAll('*'));
  elements.unshift(window.h2s_SelectedElement);

  const waitingForDescendant = elements.map(nodeToSketchLayers);


  return Promise.all(waitingForDescendant)
    .then(layers => {
      layers
        .reduce((prev, current) => prev.concat(current), [])//single node can produce multiple layers - concatenate them
        .forEach(layer => page.addLayer(layer));

      return page.toJSON();
    });
}

