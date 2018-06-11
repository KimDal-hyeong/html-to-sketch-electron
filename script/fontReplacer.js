const {options} = require(__dirname + '/getElements');
const fontManager = require('font-manager');

function getFontReplacerValues() {
  const fontReplacerSelectors = document.getElementsByClassName('Option__font-selector');
  return Array.from(fontReplacerSelectors).map(select => {
    return {
      origin: select.getAttribute('name'),
      replace: select.value !== '' ? select.value : select.getAttribute('name')
    }
  })
}

function drawFontReplacer(fontFamilies) {
  options.innerHTML = '';

  const systemFontFamilies = fontManager.getAvailableFontsSync().map(font => {return font.family}).sort();

  let systemFontSelector = document.createElement('select');
  systemFontSelector.classList.add('Option__font-selector');
  systemFontSelector.setAttribute('required', true);
  let option = document.createElement('option');
  option.innerHTML = 'Replace Font';
  option.setAttribute('value', '');
  option.setAttribute('selected', true);
  systemFontSelector.appendChild(option);

  systemFontFamilies.forEach(fontFamily => {
    let option = document.createElement('option');
    option.setAttribute('value', fontFamily);
    option.innerHTML = fontFamily;
    systemFontSelector.appendChild(option);
  });

  let li = document.createElement('li');
  let div = document.createElement('div');
  div.classList.add('Option__font-label');
  div.innerHTML = 'All';
  li.appendChild(div);

  let clonedSystemFontSelector = systemFontSelector.cloneNode(true);
  clonedSystemFontSelector.addEventListener('change', e => {
    Array.from(document.getElementsByClassName('Option__font-selector')).forEach(select => {
      select.value = e.target.value;
    });
  });

  li.appendChild(clonedSystemFontSelector);
  options.appendChild(li);

  let html = document.createElement('div');
  fontFamilies.forEach(fontFamily => {
    let li = document.createElement('li');
    let div = document.createElement('div');
    div.classList.add('Option__font-label');
    div.innerHTML = fontFamily;
    li.appendChild(div);
    let clonedSystemFontSelector = systemFontSelector.cloneNode(true);
    clonedSystemFontSelector.setAttribute('name', fontFamily);
    li.appendChild(clonedSystemFontSelector);
    html.appendChild(li);
  });
  options.appendChild(html);
}

function findFont(webview) {
  webview.executeJavaScript('webviewScript.findFont()', false, fontFamilies => {
    drawFontReplacer(fontFamilies);
  });
}

function replaceFont(string) {
  getFontReplacerValues().forEach(setting => {
    string = string.replace(new RegExp(setting.origin, 'g'), setting.replace);
  });

  return string;
}

module.exports = {findFont, replaceFont};