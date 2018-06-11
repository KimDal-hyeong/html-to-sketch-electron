export default function pseudoToElement() {

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