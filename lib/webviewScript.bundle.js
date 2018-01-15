var webviewScript =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_utils__ = __webpack_require__(1);


class Base {
  constructor() {
    this._layers = [];
    this._style = null;
    this._objectID = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utils__["a" /* generateID */])();
    this._name = '';
    this._resizingConstant = 63;
  }

  setFixedWidthAndHeight() {
    this._resizingConstant = 12;
  }

  getID() {
    return this._objectID;
  }

  setName(name) {
    this._name = name;
  }

  addLayer(layer) {
    this._layers.push(layer);
  }

  setStyle(style) {
    this._style = style;
  }

  toJSON() {
    if (!this._class) {
      throw new Error('Class not set.');
    }

    return {
      '_class': this._class,
      'do_objectID': this._objectID,
      'exportOptions': {
        '_class': 'exportOptions',
        'exportFormats': [],
        'includedLayerIds': [],
        'layerOptions': 0,
        'shouldTrim': false
      },
      'isFlippedHorizontal': false,
      'isFlippedVertical': false,
      'isLocked': false,
      'isVisible': true,
      'layerListExpandedType': 0,
      'name': this._name || this._class,
      'nameIsFixed': false,
      'resizingConstraint': this._resizingConstant,
      'resizingType': 0,
      'rotation': 0,
      'shouldBreakMaskChain': false,
      style: this._style ? this._style.toJSON() : undefined,
      layers: this._layers.map(layer => layer.toJSON())
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Base);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = generateID;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css_color__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalize_css_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sketch_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sketch_constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sketch_constants__);



// https://stackoverflow.com/a/20285053
const toDataURL = url => fetch(url, {mode: 'cors'})
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  }));

const lut = [];

for (let i = 0; i < 256; i += 1) {
  lut[i] = (i < 16 ? '0' : '') + i.toString(16);
}

// http://stackoverflow.com/a/21963136
function e7() {
  const d0 = (Math.random() * 0xffffffff) | 0;
  const d1 = (Math.random() * 0xffffffff) | 0;
  const d2 = (Math.random() * 0xffffffff) | 0;
  const d3 = (Math.random() * 0xffffffff) | 0;

  return `${lut[d0 & 0xff] +
  lut[(d0 >> 8) & 0xff] +
  lut[(d0 >> 16) & 0xff] +
  lut[(d0 >> 24) & 0xff]}-${lut[d1 & 0xff]}${lut[(d1 >> 8) & 0xff]}-${lut[
    ((d1 >> 16) & 0x0f) | 0x40
  ]}${lut[(d1 >> 24) & 0xff]}-${lut[(d2 & 0x3f) | 0x80]}${lut[
    (d2 >> 8) & 0xff
  ]}-${lut[(d2 >> 16) & 0xff]}${lut[(d2 >> 24) & 0xff]}${lut[d3 & 0xff]}${lut[
    (d3 >> 8) & 0xff
  ]}${lut[(d3 >> 16) & 0xff]}${lut[(d3 >> 24) & 0xff]}`;
}

function generateID() {
  return e7();
}

const safeToLower = input => {
  if (typeof input === 'string') {
    return input.toLowerCase();
  }

  return input;
};

// Takes colors as CSS hex, name, rgb, rgba, hsl or hsla
const makeColorFromCSS = (input, alpha = 1) => {
  const nullableColor = __WEBPACK_IMPORTED_MODULE_0_normalize_css_color___default()(safeToLower(input));
  const colorInt = nullableColor === null ? 0x00000000 : nullableColor;
  const {r, g, b, a} = __WEBPACK_IMPORTED_MODULE_0_normalize_css_color___default.a.rgba(colorInt);

  return {
    _class: 'color',
    red: r / 255,
    green: g / 255,
    blue: b / 255,
    alpha: a * alpha
  };
};
/* harmony export (immutable) */ __webpack_exports__["c"] = makeColorFromCSS;


// Solid color fill
const makeColorFill = (cssColor, alpha) => ({
  _class: 'fill',
  isEnabled: true,
  color: makeColorFromCSS(cssColor, alpha),
  fillType: 0,
  noiseIndex: 0,
  noiseIntensity: 0,
  patternFillType: 1,
  patternTileScale: 1
});
/* harmony export (immutable) */ __webpack_exports__["b"] = makeColorFill;


// patternFillType - 0 1 2 3
const makeImageFill = async(url, patternFillType = 1) => {
  let dataURL = '';

  if (url.indexOf('data:') === 0) {
    dataURL = url;
  } else {
    try {
      dataURL = await toDataURL(url + '?cache');
    } catch (e) {
      console.error('Issue downloading ' + url + ' (' + e.message + ')');
    }
  }

  const result = {
    _class: 'fill',
    isEnabled: true,
    fillType: __WEBPACK_IMPORTED_MODULE_1_sketch_constants__["FillType"].Pattern,
    image: {
      _class: 'MSJSONOriginalDataReference',
      _ref_class: 'MSImageData',
      _ref: `images/${generateID()}`
    },
    noiseIndex: 0,
    noiseIntensity: 0,
    patternFillType,
    patternTileScale: 1
  };

  if (dataURL) {
    const imageData = dataURL.match(/data:.+;base64,(.+)/i);

    if (imageData && imageData[1]) {
      result.image.data = {_data: imageData[1]};
    } else {
      return null;
    }
  } else {
    result.image.url = url;
  }

  return result;
};
/* harmony export (immutable) */ __webpack_exports__["d"] = makeImageFill;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page2layers__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picker__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "runPage2layers", function() { return __WEBPACK_IMPORTED_MODULE_0__page2layers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "startPicker", function() { return __WEBPACK_IMPORTED_MODULE_1__picker__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stopPicker", function() { return __WEBPACK_IMPORTED_MODULE_1__picker__["b"]; });





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = run;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_sketchapp_html2asketch_page__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_html_sketchapp_html2asketch_nodeToSketchLayers__ = __webpack_require__(7);



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
      const svgString = await toTextCotent(src).catch(e => {
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

  // value and placement to element
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

async function run() {

  await imgToSvg();
  groupSVGChildren();
  pseudoToElement();

  const page = new __WEBPACK_IMPORTED_MODULE_0_html_sketchapp_html2asketch_page__["a" /* default */]({
    width: document.body.offsetWidth,
    height: document.body.offsetHeight
  });

  page.setName(document.title);

  if (!window.h2s_SelectedElement) {
    window.h2s_SelectedElement = document.body;
  }

  const elements = Array.from(window.h2s_SelectedElement.querySelectorAll('*'));
  elements.unshift(window.h2s_SelectedElement);

  const waitingForDescendant = elements.map(__WEBPACK_IMPORTED_MODULE_1_html_sketchapp_html2asketch_nodeToSketchLayers__["a" /* default */]);


  return Promise.all(waitingForDescendant)
    .then(layers => {
      layers
        .reduce((prev, current) => prev.concat(current), [])//single node can produce multiple layers - concatenate them
        .forEach(layer => page.addLayer(layer));

      return page.toJSON();
    });
}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);


class Page extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {

  constructor({width, height}) {
    super();
    this._class = 'page';
    this._width = width;
    this._height = height;
  }

  toJSON() {
    const obj = super.toJSON();

    obj.frame = {
      '_class': 'rect',
      'constrainProportions': false,
      'height': this._width,
      'width': this._height,
      'x': 0,
      'y': 0
    };

    obj.style = {
      '_class': 'style',
      'endDecorationType': 0,
      'miterLimit': 10,
      'startDecorationType': 0
    };

    obj.horizontalRulerData = {
      '_class': 'rulerData',
      'base': 0,
      'guides': []
    };
    obj.verticalRulerData = {
      '_class': 'rulerData',
      'base': 0,
      'guides': []
    };

    obj.hasClickThrough = true;
    obj.includeInCloudUpload = true;

    return obj;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Page);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }
    return null;
  }

  // Ordered based on occurrences on Facebook codebase
  if ((match = matchers.hex6.exec(color))) {
    return parseInt(match[1] + 'ff', 16) >>> 0;
  }

  if (names.hasOwnProperty(color)) {
    return names[color];
  }

  if ((match = matchers.rgb.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.rgba.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        parse1(match[4]) // a
      ) >>> 0;
  }

  if ((match = matchers.hex3.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        'ff', // a
        16
      ) >>> 0;
  }

  // https://drafts.csswg.org/css-color-4/#hex-notation
  if ((match = matchers.hex8.exec(color))) {
    return parseInt(match[1], 16) >>> 0;
  }

  if ((match = matchers.hex4.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        match[4] + match[4], // a
        16
      ) >>> 0;
  }

  if ((match = matchers.hsl.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.hsla.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        parse1(match[4]) // a
      ) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);

  return (
    Math.round(r * 255) << 24 |
    Math.round(g * 255) << 16 |
    Math.round(b * 255) << 8
  );
}

// var INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
}

function call() {
  return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var matchers = {
  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/,
};

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (((int % 360) + 360) % 360) / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}

var names = {
  transparent: 0x00000000,

  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff,
};

function rgba(colorInt) {
  var r = Math.round(((colorInt & 0xff000000) >>> 24));
  var g = Math.round(((colorInt & 0x00ff0000) >>> 16));
  var b = Math.round(((colorInt & 0x0000ff00) >>> 8));
  var a = ((colorInt & 0x000000ff) >>> 0) / 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a,
  };
};

normalizeColor.rgba = rgba;

module.exports = normalizeColor;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FillType = exports.FillType = {
    Solid: 0,
    Gradient: 1,
    Pattern: 4,
    Noise: 5
};

var GradientType = exports.GradientType = {
    Linear: 0,
    Radial: 1,
    Circular: 2
};

var PatternFillType = exports.PatternFillType = {
    Tile: 0,
    Fill: 1,
    Stretch: 2,
    Fit: 3
};

var NoiseFillType = exports.NoiseFillType = {
    Original: 0,
    Black: 1,
    White: 2,
    Color: 3
};

var BorderLineCapsStyle = exports.BorderLineCapsStyle = {
    Butt: 0,
    Round: 1,
    Square: 2
};

var BorderLineJoinStyle = exports.BorderLineJoinStyle = {
    Miter: 0,
    Round: 1,
    Bevel: 2
};

var LineDecorationType = exports.LineDecorationType = {
    None: 0,
    OpenedArrow: 1,
    ClosedArrow: 2,
    Bar: 3
};

var BlurType = exports.BlurType = {
    GaussianBlur: 0,
    MotionBlur: 1,
    ZoomBlur: 2,
    BackgroundBlur: 3
};

var BorderPosition = exports.BorderPosition = {
    Center: 0,
    Inside: 1,
    Outside: 2
};

var MaskMode = exports.MaskMode = {
    Outline: 0,
    Alpha: 1
};

var BooleanOperation = exports.BooleanOperation = {
    None: -1,
    Union: 0,
    Subtract: 1,
    Intersect: 2,
    Difference: 3
};

var ExportOptionsFormat = exports.ExportOptionsFormat = {
    PNG: 'png',
    JPG: 'jpg',
    TIFF: 'tiff',
    PDF: 'pdf',
    EPS: 'eps',
    SVG: 'svg'
};

var BlendingMode = exports.BlendingMode = {
    Normal: 0,
    Darken: 1,
    Multiply: 2,
    ColorBurn: 3,
    Lighten: 4,
    Screen: 5,
    ColorDodge: 6,
    Overlay: 7,
    SoftLight: 8,
    HardLight: 9,
    Difference: 10,
    Exclusion: 11,
    Hue: 12,
    Saturation: 13,
    Color: 14,
    Luminosity: 15
};

var TextAlignment = exports.TextAlignment = {
    Left: 0,
    Right: 1,
    Center: 2,
    Justified: 3
};

var TextBehaviour = exports.TextBehaviour = {
    Auto: 0,
    Fixed: 1
};

var CurvePointMode = exports.CurvePointMode = {
    Straight: 1,
    Mirrored: 2,
    Disconnected: 4,
    Asymmetric: 3
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nodeToSketchLayers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shapeGroup__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rectangle__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_createXPathFromElement__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__text__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__textStyle__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_background__ = __webpack_require__(16);









const DEFAULT_VALUES = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  backgroundImage: 'none',
  borderWidth: '0px',
  boxShadow: 'none'
};

function shadowStringToObject(shadowStr) {
  let shadowObj = {};
  const matches =
    shadowStr.match(/^([a-z0-9#., ()]+) ([-]?[0-9.]+)px ([-]?[0-9.]+)px ([-]?[0-9.]+)px ([-]?[0-9.]+)px ?(inset)?$/i);

  if (matches && matches.length === 7) {
    shadowObj = {
      color: matches[1],
      offsetX: matches[2],
      offsetY: matches[3],
      blur: matches[4],
      spread: matches[5]
    };
  }

  return shadowObj;
}

function hasOnlyDefaultStyles(styles) {
  return Object.keys(DEFAULT_VALUES).every(key => {
    const defaultValue = DEFAULT_VALUES[key];
    const value = styles[key];

    return defaultValue === value;
  });
}

function fixBorderRadius(borderRadius) {
  const matches = borderRadius.match(/^([0-9.]+)(.+)$/);

  if (matches && matches[2] === '%') {
    const value = parseInt(matches[1], 10);

    // not sure about this, but border-radius: 50% should be fully rounded
    return value >= 50 ? 100 : value;
  }

  return parseInt(borderRadius, 10);
}

function isSVGDescendant(node) {
  if (node.nodeName === 'HTML') {
    return false;
  }

  let parent = node.parentNode;

  while (parent.nodeName !== 'svg') {
    parent = parent.parentNode;
    if (parent === document) {
      return false;
    }
  }
  return true;
}

async function nodeToSketchLayers(node) {
  const layers = [];
  const {width, height, left, top} = node.getBoundingClientRect();

  const styles = getComputedStyle(node);
  const {
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundSize,
    backgroundRepeat,
    borderColor,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderTopColor,
    borderRightColor,
    borderBottomColor,
    borderLeftColor,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    color,
    textTransform,
    textDecorationStyle,
    textAlign,
    justifyContent,
    display,
    boxShadow,
    visibility,
    opacity,
    overflowX,
    overflowY,
    position,
    clip,
    whiteSpace
  } = styles;

  if (isSVGDescendant(node)) {
    return layers;
  }

  // Skip node when display is set to none for itself or an ancestor
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent
  if (node.offsetParent === null && position !== 'fixed') {
    return layers;
  }

  if ((width === 0 || height === 0) && overflowX === 'hidden' && overflowY === 'hidden') {
    return layers;
  }

  if (display === 'none' || visibility === 'hidden' || parseFloat(opacity) === 0) {
    return layers;
  }

  if (clip === 'rect(0px 0px 0px 0px)' && position === 'absolute') {
    return layers;
  }

  const leaf = new __WEBPACK_IMPORTED_MODULE_0__shapeGroup__["a" /* default */]({left, top, width, height});
  const isImage = node.nodeName === 'IMG' && node.attributes.src;
  const isSVG = node.nodeName.toLowerCase() === 'svg';

  if (isSVG) {
    const pathData = {};
    let BCRNode = node;

    if (node.childNodes.length === 1) {
      BCRNode = node.childNodes[0];
    }

    const {width, height, left, top} = BCRNode.getBoundingClientRect();

    pathData.width = width;
    pathData.height = height;
    pathData.x = left;
    pathData.y = top;

    layers.push(new __WEBPACK_IMPORTED_MODULE_6__svg__["a" /* default */](Object.assign({rawSVGString: node.outerHTML}, pathData)));
  }

  // if layer has no background/shadow/border/etc. skip it
  if (isImage || !hasOnlyDefaultStyles(styles)) {
    const style = new __WEBPACK_IMPORTED_MODULE_3__style__["a" /* default */]();

    if (backgroundColor) {
      style.addColorFill(backgroundColor);
    }

    if (isImage) {
      const absoluteUrl = new URL(node.attributes.src.value, location.href);

      await style.addImageFill(absoluteUrl.href);
      leaf.setFixedWidthAndHeight();
    }

    // This should return a array when multiple background-images are supported
    const backgroundImageResult = Object(__WEBPACK_IMPORTED_MODULE_7__helpers_background__["b" /* parseBackgroundImage */])(backgroundImage);

    if (backgroundImageResult) {
      switch (backgroundImageResult.type) {
        case 'Image':
          await style.addImageFill(
            await Object(__WEBPACK_IMPORTED_MODULE_7__helpers_background__["a" /* fixBackgroundImage */])(
              backgroundImageResult.value,
              width,
              height,
              backgroundSize,
              backgroundPosition,
              backgroundRepeat
            )
          );
          break;
        case 'LinearGradient':
          style.addGradientFill(backgroundImageResult.value);
          break;
        default:
          // Unsupported types:
          // - radial gradient
          // - multiple background-image
          break;
      }
    }

    if (boxShadow !== DEFAULT_VALUES.boxShadow) {
      const shadowObj = shadowStringToObject(boxShadow);

      if (boxShadow.indexOf('inset') !== -1) {
        if (borderWidth.indexOf(' ') === -1) {
          shadowObj.spread += parseInt(borderWidth, 10);
        }
        style.addInnerShadow(shadowObj);
      } else {
        style.addShadow(shadowObj);
      }
    }

    // support for one-side borders (using inner shadow because Sketch doesn't support that)
    if (borderWidth.indexOf(' ') === -1) {
      style.addBorder({color: borderColor, thickness: parseInt(borderWidth, 10)});
    } else {
      if (borderTopWidth !== '0px') {
        style.addInnerShadow(shadowStringToObject(borderTopColor + ' 0px ' + borderTopWidth + ' 0px 0px inset'));
      }
      if (borderRightWidth !== '0px') {
        style.addInnerShadow(shadowStringToObject(borderRightColor + ' -' + borderRightWidth + ' 0px 0px 0px inset'));
      }
      if (borderBottomWidth !== '0px') {
        style.addInnerShadow(shadowStringToObject(borderBottomColor + ' 0px -' + borderBottomWidth + ' 0px 0px inset'));
      }
      if (borderLeftWidth !== '0px') {
        style.addInnerShadow(shadowStringToObject(borderLeftColor + ' ' + borderLeftWidth + ' 0px 0px 0px inset'));
      }
    }

    style.addOpacity(opacity);

    leaf.setStyle(style);

    //TODO borderRadius can be expressed in different formats and use various units - for simplicity we assume "X%"
    const cornerRadius = {
      topLeft: fixBorderRadius(borderTopLeftRadius),
      topRight: fixBorderRadius(borderTopRightRadius),
      bottomLeft: fixBorderRadius(borderBottomLeftRadius),
      bottomRight: fixBorderRadius(borderBottomRightRadius)
    };

    const rectangle = new __WEBPACK_IMPORTED_MODULE_1__rectangle__["a" /* default */]({width, height, cornerRadius});

    leaf.addLayer(rectangle);
    leaf.setName(Object(__WEBPACK_IMPORTED_MODULE_2__helpers_createXPathFromElement__["a" /* default */])(node));

    layers.push(leaf);
  }

  const textStyle = new __WEBPACK_IMPORTED_MODULE_5__textStyle__["a" /* default */]({
    fontFamily,
    fontSize: parseInt(fontSize, 10),
    lineHeight: lineHeight !== 'normal' ? parseInt(lineHeight, 10) : undefined,
    letterSpacing: letterSpacing !== 'normal' ? parseFloat(letterSpacing) : undefined,
    fontWeight: parseInt(fontWeight, 10),
    color,
    textTransform,
    textDecoration: textDecorationStyle,
    textAlign: display === 'flex' || display === 'inline-flex' ? justifyContent : textAlign
  });

  const rangeHelper = document.createRange();

  // Text
  Array.from(node.childNodes)
    .filter(child => child.nodeType === 3 && child.nodeValue.trim().length > 0)
    .forEach(textNode => {
      rangeHelper.selectNodeContents(textNode);
      const textRanges = Array.from(rangeHelper.getClientRects());
      const numberOfLines = textRanges.length;
      const textBCR = rangeHelper.getBoundingClientRect();
      const lineHeightInt = parseInt(lineHeight, 10);
      let fixY = 0;

      // center text inside a box
      // TODO it's possible now in sketch - fix it!
      if (lineHeightInt && textBCR.height !== lineHeightInt * numberOfLines) {
        fixY = (textBCR.height - lineHeightInt * numberOfLines) / 2;
      }

      let textValue = textNode.nodeValue;

      switch (whiteSpace) {
        case 'normal':
        case 'nowrap':
          textValue = textValue.trim().replace(/\n/g, ' ').replace(/[^\S\n]+/g, ' ');
          break;
        case 'pre-line':
          textValue = textValue.replace(/ *\n{1} */g, '\n').replace(/[^\S\n]+/g, ' ');
          break;
        default:
          // pre, pre-wrap
          break;
      }

      const text = new __WEBPACK_IMPORTED_MODULE_4__text__["a" /* default */]({
        x: textBCR.left,
        y: textBCR.top + fixY,
        width: textBCR.width + 0.1,
        height: textBCR.height,
        text: textValue,
        style: textStyle,
        multiline: numberOfLines > 1
      });

      layers.push(text);
    });

  return layers;
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);


class ShapeGroup extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
  constructor({left, top, width, height}) {
    super();
    this._class = 'shapeGroup';
    this._x = left;
    this._y = top;
    this._width = width;
    this._height = height;
  }

  toJSON() {
    const obj = super.toJSON();

    obj.frame = {
      '_class': 'rect',
      'constrainProportions': false,
      'height': this._height,
      'width': this._width,
      'x': this._x,
      'y': this._y
    };

    obj.hasClickThrough = false;
    obj.clippingMaskMode = 0;
    obj.hasClippingMask = false;
    obj.windingRule = 1;

    return obj;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ShapeGroup);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);


class Rectangle extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
  constructor({width, height, cornerRadius = {topLeft: 0, bottomLeft: 0, topRight: 0, bottomRight: 0}}) {
    super();
    this._class = 'rectangle';
    this._width = width;
    this._height = height;
    this._cornerRadius = cornerRadius;
  }

  toJSON() {
    const obj = super.toJSON();

    obj.frame = {
      '_class': 'rect',
      'constrainProportions': false,
      'height': this._height,
      'width': this._width,
      'x': 0,
      'y': 0
    };

    obj.path = {
      '_class': 'path',
      'isClosed': true,
      'pointRadiusBehaviour': 1,
      'points': [
        {
          '_class': 'curvePoint',
          'cornerRadius': this._cornerRadius.topLeft,
          'curveFrom': '{0, 0}',
          'curveMode': 1,
          'curveTo': '{0, 0}',
          'hasCurveFrom': false,
          'hasCurveTo': false,
          'point': '{0, 0}'
        },
        {
          '_class': 'curvePoint',
          'cornerRadius': this._cornerRadius.topRight,
          'curveFrom': '{1, 0}',
          'curveMode': 1,
          'curveTo': '{1, 0}',
          'hasCurveFrom': false,
          'hasCurveTo': false,
          'point': '{1, 0}'
        },
        {
          '_class': 'curvePoint',
          'cornerRadius': this._cornerRadius.bottomRight,
          'curveFrom': '{1, 1}',
          'curveMode': 1,
          'curveTo': '{1, 1}',
          'hasCurveFrom': false,
          'hasCurveTo': false,
          'point': '{1, 1}'
        },
        {
          '_class': 'curvePoint',
          'cornerRadius': this._cornerRadius.bottomLeft,
          'curveFrom': '{0, 1}',
          'curveMode': 1,
          'curveTo': '{0, 1}',
          'hasCurveFrom': false,
          'hasCurveTo': false,
          'point': '{0, 1}'
        }
      ]
    };

    obj.hasConvertedToNewRoundCorners = true;
    obj.fixedRadius = 0;
    obj.edited = false;
    obj.booleanOperation = -1;

    return obj;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Rectangle);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createXPathFromElement;
//https://stackoverflow.com/a/5178132
function createXPathFromElement(elm) {
  const allNodes = document.getElementsByTagName('*');
  let segs;

  for (segs = []; elm && elm.nodeType === 1; elm = elm.parentNode) {
    if (elm.hasAttribute('id')) {
      let uniqueIdCount = 0;

      for (let n = 0; n < allNodes.length; n++) {
        if (allNodes[n].hasAttribute('id') && allNodes[n].id === elm.id) {
          uniqueIdCount++;
        }
        if (uniqueIdCount > 1) {
          break;
        }
      }
      if (uniqueIdCount === 1) {
        segs.unshift('id("' + elm.getAttribute('id') + '")');
        return segs.join('/');
      } else {
        segs.unshift(elm.localName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]');
      }
    } else if (elm.hasAttribute('class')) {
      segs.unshift(elm.localName.toLowerCase() + '[@class="' + elm.getAttribute('class') + '"]');
    } else {
      let i = 1;

      for (let sib = elm.previousSibling; sib; sib = sib.previousSibling) {
        if (sib.localName === elm.localName) {
          i++;
        }
      }
      segs.unshift(elm.localName.toLowerCase() + '[' + i + ']');
    }
  }
  return segs.length ? '/' + segs.join('/') : null;
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_convertAngleToFromAndTo__ = __webpack_require__(12);



class Style {
  constructor() {
    this._fills = [];
    this._borders = [];
    this._shadows = [];
    this._innerShadows = [];
    this._opacity = 1;
  }

  addColorFill(color, opacity) {
    this._fills.push(Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utils__["b" /* makeColorFill */])(color, opacity));
  }

  addGradientFill({angle, stops}) {
    const {from, to} = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_convertAngleToFromAndTo__["a" /* default */])(angle);

    this._fills.push({
      _class: 'fill',
      isEnabled: true,
      // Not sure why there is a color here
      color: {
        _class: 'color',
        alpha: 1,
        blue: 0.847,
        green: 0.847,
        red: 0.847
      },
      fillType: 1,
      gradient: {
        _class: 'gradient',
        elipseLength: 0,
        from: `{${from.x}, ${from.y}`,
        gradientType: 0,
        shouldSmoothenOpacity: false,
        stops: stops.map((stopColor, index) => ({
          _class: 'gradientStop',
          color: Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utils__["c" /* makeColorFromCSS */])(stopColor),
          position: index
        })),
        to: `{${to.x}, ${to.y}}`
      },
      noiseIndex: 0,
      noiseIntensity: 0,
      patternFillType: 1,
      patternTileScale: 1
    });
  }

  async addImageFill(image) {
    const fill = await Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utils__["d" /* makeImageFill */])(image);

    this._fills.push(fill);
  }

  addBorder({color, thickness}) {
    this._borders.push({
      _class: 'border',
      isEnabled: true,
      color: Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utils__["c" /* makeColorFromCSS */])(color),
      fillType: 0,
      position: 1,
      thickness
    });
  }

  addShadow({color = '#000', blur = 1, offsetX = 0, offsetY = 0, spread = 0}) {
    this._shadows.push({
      _class: 'shadow',
      isEnabled: true,
      blurRadius: blur,
      color: Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utils__["c" /* makeColorFromCSS */])(color),
      contextSettings: {
        _class: 'graphicsContextSettings',
        blendMode: 0,
        opacity: 1
      },
      offsetX,
      offsetY,
      spread
    });
  }

  addInnerShadow({color = '#000', blur = 1, offsetX = 0, offsetY = 0, spread = 0}) {
    this._innerShadows.push({
      _class: 'innerShadow',
      isEnabled: true,
      blurRadius: blur,
      color: Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utils__["c" /* makeColorFromCSS */])(color),
      contextSettings: {
        _class: 'graphicsContextSettings',
        blendMode: 0,
        opacity: 1
      },
      offsetX,
      offsetY,
      spread
    });
  }

  addOpacity(opacity) {
    this._opacity = opacity;
  }

  toJSON() {
    return {
      _class: 'style',
      fills: this._fills,
      borders: this._borders,
      shadows: this._shadows,
      innerShadows: this._innerShadows,
      endDecorationType: 0,
      miterLimit: 10,
      startDecorationType: 0,
      contextSettings: {
        _class: 'graphicsContextSettings',
        blendMode: 0,
        opacity: this._opacity
      }
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Style);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = convertAngleToFromAndTo;
// Keep this pure for easy testing in the future.
function convertAngleToFromAndTo(angle) {
  // default 180deg
  const from = {x: 0.5, y: 0};
  const to = {x: 0.5, y: 1};

  // Learn math or find someone smarter to figure this out correctly
  switch (angle) {
    case 'to top':
    case '360deg':
    case '0deg':
      from.y = 1;
      to.y = 0;
      break;
    case 'to right':
    case '90deg':
      from.x = 0;
      from.y = 0.5;
      to.x = 1;
      to.y = 0.5;
      break;
    case 'to left':
    case '270deg':
      from.x = 1;
      from.y = 0.5;
      to.x = 0;
      to.y = 0.5;
      break;
    case 'to bottom':
    case '180deg':
    default:
      break;
  }

  return {
    from,
    to
  };
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);


class Text extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
  constructor({x, y, width, height, text, style, multiline}) {
    super();
    this._class = 'text';
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
    this._text = text;
    this._name = text;
    this._style = style;
    this._multiline = multiline;
  }

  toJSON() {
    const obj = super.toJSON();

    obj.frame = {
      '_class': 'rect',
      'constrainProportions': false,
      'height': this._height,
      'width': this._width,
      'x': this._x,
      'y': this._y
    };

    obj.text = this._text;
    obj.style = this._style.toJSON();

    obj.resizingConstraint = 47;
    obj.automaticallyDrawOnUnderlyingPath = false;
    obj.dontSynchroniseWithSymbol = false;
    obj.glyphBounds = '';
    obj.heightIsClipped = false;
    obj.lineSpacingBehaviour = 2;
    // 1 - width is set to Fixed
    // 0 - width is set to Auto - this helps us avoid issues with browser setting too small width causing line to break
    obj.textBehaviour = this._multiline ? 1 : 0;
    return obj;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Text);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// INPUT: "Helvetica Neue", Helvetica, Arial, sans-serif
// OUTPUT: Helvetica Neue
function getFirstFont(fonts) {
  let font = fonts.split(',')[0].trim();

  font = font.replace(/^["']+|["']+$/g, '');

  return font;
}

class TextStyle {
  constructor({
    color,
    fontSize,
    fontFamily,
    fontWeight,
    lineHeight,
    letterSpacing,
    textTransform,
    textDecoration,
    textAlign
  }) {
    this._color = color;
    this._fontSize = fontSize;
    this._fontFamily = getFirstFont(fontFamily);
    this._lineHeight = lineHeight;
    this._letterSpacing = letterSpacing;
    this._fontWeight = fontWeight;
    this._textTransform = textTransform;
    this._textDecoration = textDecoration;
    this._textAlign = textAlign;
  }

  toJSON() {
    return {
      'color': this._color,
      'fontSize': this._fontSize,
      'fontFamily': this._fontFamily,
      'fontWeight': this._fontWeight,
      'lineHeight': this._lineHeight,
      'letterSpacing': this._letterSpacing,
      'textTransform': this._textTransform,
      'textDecoration': this._textDecoration,
      'textAlign': this._textAlign
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TextStyle);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);


class SVG extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
  constructor({rawSVGString, width, height, x, y}) {
    super();
    this._rawSVGString = rawSVGString;
    this._width = width;
    this._height = height;
    this._x = x;
    this._y = y;
  }

  toJSON() {
    return {
      _class: 'svg',
      rawSVGString: this._rawSVGString,
      width: this._width,
      height: this._height,
      x: this._x,
      y: this._y
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (SVG);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseBackgroundImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fixBackgroundImage; });
// Parses the background-image. The structure is as follows:
// (Supports images and gradients)
// ---
// <background-image> = <bg-image> [ , <bg-image> ]*
// <bg-image> = <image> | none
// <image> = <url> | <image-list> | <element-reference> | <image-combination> | <gradient>
// ---
// Source: https://www.w3.org/TR/css-backgrounds-3/#the-background-image
// ---
// These functions should be pure to make it easy
// to write test cases in the future.
const parseBackgroundImage = value => {
  if (value === 'none') {
    return;
  }

  const urlMatches = value.match(/^url\("(.+)"\)$/i);
  const linearGradientMatches = value.match(/^linear-gradient\((.+)\)$/i);

  if (urlMatches && urlMatches.length === 2) {
    // Image
    return {
      type: 'Image',
      value: urlMatches[1]
    };
  } else if (linearGradientMatches && linearGradientMatches.length === 2) {
    // Linear gradient
    const linearGradientConfig = parseLinearGradient(linearGradientMatches[1]);

    if (linearGradientConfig) {
      return {
        type: 'LinearGradient',
        value: linearGradientConfig
      };
    }
  }
};

// Parser for a linear gradient:
// ---
// <linear-gradient> = linear-gradient(
//   [ [ <angle> | to <side-or-corner> ] ,]?
//   <color-stop>[, <color-stop>]+
// )
//
// <side-or-corner> = [left | right] || [top | bottom]
// ---
// Source: https://www.w3.org/TR/css3-images/#linear-gradients
// ---
// Example: "to top, rgba(67, 90, 111, 0.04), white"
const parseLinearGradient = value => {
  const parts = [];
  let currentPart = [];
  let i = 0;
  let skipComma = false;

  // There can be commas in colors, carefully break apart the value
  while (i < value.length) {
    const char = value.substr(i, 1);

    if (char === '(') {
      skipComma = true;
    } else if (char === ')') {
      skipComma = false;
    }

    if (char === ',' && !skipComma) {
      parts.push(currentPart.join('').trim());
      currentPart = [];
    } else {
      currentPart.push(char);
    }

    if (i === value.length - 1) {
      parts.push(currentPart.join('').trim());
    }
    i++;
  }

  if (parts.length === 2) {
    // Assume 2 color stops
    return {
      angle: '180deg',
      stops: [parts[0], parts[1]]
    };
  } else if (parts.length > 2) {
    // angle + n stops
    const [angle, ...stops] = parts;

    return {
      angle,
      stops
    };
  }

  // Syntax is wrong
  return null;
};

async function toImageObj(url) {
  const imageObj = new Image();

  if (url.indexOf('data:') !== 0) {
    url += '?cache';
  }

  imageObj.crossOrigin = 'anonymous';
  await new Promise((resolve, reject) => {
    imageObj.src = url;
    imageObj.onload = resolve;
    imageObj.onerror = reject;
  });

  return imageObj;
}

async function fixBackgroundImage(url, width, height, backgroundSize, backgroundPosition, backgroundRepeat) {
  let imageData = url;

  try {
    let imageObj = await toImageObj(url);

    if (imageObj) {
      const imageW = imageObj.naturalWidth;
      const imageH = imageObj.naturalHeight;
      let x, y, w, h;

      if (backgroundSize === 'cover' && imageW >= imageH || backgroundSize === 'contain' && imageW < imageH) {
        w = imageW * height / imageH;
        h = height;
      } else if (backgroundSize === 'cover' && imageW < imageH || backgroundSize === 'contain' && imageW >= imageH) {
        w = width;
        h = imageH * width / imageW;
      } else if (backgroundSize === 'auto') {
        w = imageW;
        h = imageH;
      } else {
        const backgroundSizeMatches = backgroundSize.match(/([-]?[0-9.]+)([^ ]+)? ?(?:([-]?[0-9.]+)([^ ])?)?/i);

        if (backgroundSizeMatches) {
          switch (backgroundSizeMatches[2]) {
            case 'px':
              w = backgroundSizeMatches[1];
              break;
            case '%':
              w = width / 100 * backgroundSizeMatches[1];
              break;
            default:
              w = 0;
          }
          switch (backgroundSizeMatches[4]) {
            case 'px':
              h = backgroundSizeMatches[3];
              break;
            case '%':
              h = height / 100 * backgroundSizeMatches[3];
              break;
            default:
              h = imageH * w / imageW;
          }
        }
      }

      const backgroundPositionMatches = backgroundPosition.match(/([-]?[0-9.]+)([^ ]+)? ([-]?[0-9.]+)([^ ]+)?/i);

      if (backgroundPositionMatches) {
        switch (backgroundPositionMatches[2]) {
          case 'px':
            x = backgroundPositionMatches[1];
            break;
          case '%':
            x = (width - w) / 100 * backgroundPositionMatches[1];
            break;
          default:
            x = 0;
        }
        switch (backgroundPositionMatches[4]) {
          case 'px':
            y = backgroundPositionMatches[3];
            break;
          case '%':
            y = (height - h) / 100 * backgroundPositionMatches[3];
            break;
          default:
            y = 0;
        }
      }

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (backgroundRepeat !== 'no-repeat') {
        // draw patternSource;
        canvas.width = w;
        canvas.height = h;
        context.drawImage(imageObj, 0, 0, imageW, imageH, 0, 0, w, h);
        imageObj = await toImageObj(canvas.toDataURL('image/png'));

        // draw pattern;
        context.clearRect(0, 0, canvas.width, canvas.height);
        const patternWidth = x >= 0 ? width + x - Math.ceil(x / w) * w : width - x;
        const patternHeight = y >= 0 ? height + y - Math.ceil(y / h) * h : height - y;

        canvas.width = patternWidth;
        canvas.height = patternHeight;
        const pattern = context.createPattern(imageObj, backgroundRepeat);

        context.fillStyle = pattern;
        context.fillRect(0, 0, patternWidth, patternHeight);

        imageObj = await toImageObj(canvas.toDataURL('image/png'));

        // draw background image;
        context.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = width;
        canvas.height = height;
        const patternX = x >= 0 && backgroundRepeat !== 'repeat-y' ? x - Math.ceil(x / w) * w : x;
        const patternY = y >= 0 && backgroundRepeat !== 'repeat-x' ? y - Math.ceil(y / h) * h : y;

        context.drawImage(
          imageObj,
          0,
          0,
          imageObj.naturalWidth,
          imageObj.naturalHeight,
          patternX,
          patternY,
          imageObj.naturalWidth,
          imageObj.naturalHeight
        );
      } else {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(imageObj, 0, 0, imageW, imageH, x, y, w, h);
      }
      imageData = canvas.toDataURL('image/png');
    }
  } catch (e) {
    console.error(e);
    return imageData;
  }

  return imageData;
}




/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startPicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return stopPicker; });
const { ipcRenderer } = window.require('electron');

const guide = document.createElement('div');
guide.style.position = 'fixed';
guide.style.border = '1px solid #3880ff';
guide.style.zIndex = '99999999';
guide.style.pointerEvents = 'none';

const eventCover = document.createElement('div');
eventCover.style.position = 'fixed';
eventCover.style.left = 0;
eventCover.style.top = 0;
eventCover.style.right = 0;
eventCover.style.bottom = 0;
eventCover.style.zIndex = '99999999';
eventCover.style.pointerEvents = 'none';

document.body.appendChild(guide);
document.body.appendChild(eventCover);

let nowElement;

function windowResizeInPicked() {
  ipcRenderer.sendToHost('window-resize');
}

function windowScrollInPicked() {
  ipcRenderer.sendToHost('window-scroll');
}

function pickerMouseOver(e) {
  nowElement = e.target;
  const {width, height, top, left} = nowElement.getBoundingClientRect();
  guide.style.width = width + 'px';
  guide.style.height = height + 'px';
  guide.style.top = top + 'px';
  guide.style.left = left + 'px';
}

function pickerMouseDown(e) {
  eventCover.style.pointerEvents = 'auto';
  guide.style.pointerEvents = 'auto';
  guide.style.background = 'rgba(0, 0, 0, 0)';
  guide.style.outline = '20000px solid rgba(0, 0, 0, 0.4)';
  window.h2s_SelectedElement = nowElement;
  console.log(window.h2s_SelectedElement);
  document.body.removeEventListener('mouseover', pickerMouseOver);
  document.body.removeEventListener('mousedown', pickerMouseDown);
  ipcRenderer.sendToHost('picker-picked');
  window.addEventListener('resize', windowResizeInPicked);
  window.addEventListener('scroll', windowScrollInPicked);
}

function startPicker() {
  document.body.addEventListener('mouseover', pickerMouseOver);
  document.body.addEventListener('mousedown', pickerMouseDown);
}

function stopPicker() {
  guide.style.left = '-9999999px';
  guide.style.outline = 0;
  guide.style.pointerEvents = 'none';
  eventCover.style.pointerEvents = 'none';
  document.body.removeEventListener('mouseover', pickerMouseOver);
  document.body.removeEventListener('mousedown', pickerMouseDown);
  window.removeEventListener('resize', windowResizeInPicked);
  window.removeEventListener('scroll', windowScrollInPicked);
}



/***/ })
/******/ ]);