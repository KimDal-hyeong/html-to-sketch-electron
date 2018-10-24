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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_USER_INFO_SCOPE = 'html-sketchapp';

var Base = function () {
  function Base() {
    _classCallCheck(this, Base);

    this._class = null;
    this._layers = [];
    this._style = null;
    this._objectID = (0, _utils.generateID)();
    this._name = '';
    this._userInfo = null;
    this.setResizingConstraint(_utils.RESIZING_CONSTRAINTS.NONE);
    this.setHasClippingMask(false);
  }

  _createClass(Base, [{
    key: 'setFixedWidthAndHeight',
    value: function () {
      function setFixedWidthAndHeight() {
        this.setResizingConstraint(_utils.RESIZING_CONSTRAINTS.WIDTH, _utils.RESIZING_CONSTRAINTS.HEIGHT);
      }

      return setFixedWidthAndHeight;
    }()
  }, {
    key: 'setResizingConstraint',
    value: function () {
      function setResizingConstraint() {
        this._resizingConstraint = _utils.calculateResizingConstraintValue.apply(undefined, arguments);
      }

      return setResizingConstraint;
    }()
  }, {
    key: 'getID',
    value: function () {
      function getID() {
        return this._objectID;
      }

      return getID;
    }()

    // scope defines which Sketch plugin will have access to provided data via Settings.setLayerSettingForKey
    // you should set it to the plugin ID e.g. "com.bohemiancoding.sketch.testplugin"
    // by default however we use "html-sketchapp" here which won't work directly with any plugin
    // but can still be accessed via native API: layer.userInfo()['html-sketchapp']

  }, {
    key: 'setUserInfo',
    value: function () {
      function setUserInfo(key, value) {
        var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_USER_INFO_SCOPE;

        this._userInfo = this._userInfo || {};
        this._userInfo[scope] = this._userInfo[scope] || {};
        this._userInfo[scope][key] = value;
      }

      return setUserInfo;
    }()
  }, {
    key: 'getUserInfo',
    value: function () {
      function getUserInfo(key) {
        var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_USER_INFO_SCOPE;

        return this._userInfo && this._userInfo[scope] && this._userInfo[scope][key];
      }

      return getUserInfo;
    }()
  }, {
    key: 'setName',
    value: function () {
      function setName(name) {
        this._name = name;
      }

      return setName;
    }()
  }, {
    key: 'addLayer',
    value: function () {
      function addLayer(layer) {
        this._layers.push(layer);
      }

      return addLayer;
    }()
  }, {
    key: 'setStyle',
    value: function () {
      function setStyle(style) {
        this._style = style;
      }

      return setStyle;
    }()
  }, {
    key: 'setHasClippingMask',
    value: function () {
      function setHasClippingMask(hasClippingMask) {
        this._hasClippingMask = hasClippingMask;
      }

      return setHasClippingMask;
    }()
  }, {
    key: 'toJSON',
    value: function () {
      function toJSON() {
        if (!this._class) {
          throw new Error('Class not set.');
        }

        var result = {
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
          'resizingConstraint': this._resizingConstraint,
          'resizingType': 0,
          'rotation': 0,
          'shouldBreakMaskChain': false,
          'layers': this._layers.map(function (layer) {
            return layer.toJSON();
          }),
          'clippingMaskMode': 0,
          'hasClippingMask': this._hasClippingMask
        };

        if (this._userInfo) {
          result.userInfo = this._userInfo;
        }

        if (this._style) {
          result.style = this._style.toJSON();
        }

        return result;
      }

      return toJSON;
    }()
  }]);

  return Base;
}();

exports['default'] = Base;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RESIZING_CONSTRAINTS = exports.calculateResizingConstraintValue = exports.makeImageFill = exports.makeColorFill = exports.makeColorFromCSS = undefined;
exports.generateID = generateID;

var _normalizeCssColor = __webpack_require__(15);

var _normalizeCssColor2 = _interopRequireDefault(_normalizeCssColor);

var _sketchConstants = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var lut = [];

for (var i = 0; i < 256; i += 1) {
  lut[i] = (i < 16 ? '0' : '') + i.toString(16);
}

// http://stackoverflow.com/a/21963136
function e7() {
  var d0 = Math.random() * 0xffffffff | 0;
  var d1 = Math.random() * 0xffffffff | 0;
  var d2 = Math.random() * 0xffffffff | 0;
  var d3 = Math.random() * 0xffffffff | 0;

  return String(lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff]) + '-' + String(lut[d1 & 0xff]) + String(lut[d1 >> 8 & 0xff]) + '-' + String(lut[d1 >> 16 & 0x0f | 0x40]) + String(lut[d1 >> 24 & 0xff]) + '-' + String(lut[d2 & 0x3f | 0x80]) + String(lut[d2 >> 8 & 0xff]) + '-' + String(lut[d2 >> 16 & 0xff]) + String(lut[d2 >> 24 & 0xff]) + String(lut[d3 & 0xff]) + String(lut[d3 >> 8 & 0xff]) + String(lut[d3 >> 16 & 0xff]) + String(lut[d3 >> 24 & 0xff]);
}

function generateID() {
  return e7();
}

var safeToLower = function safeToLower(input) {
  if (typeof input === 'string') {
    return input.toLowerCase();
  }

  return input;
};

// Takes colors as CSS hex, name, rgb, rgba, hsl or hsla
var makeColorFromCSS = exports.makeColorFromCSS = function makeColorFromCSS(input) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var nullableColor = (0, _normalizeCssColor2['default'])(safeToLower(input));
  var colorInt = nullableColor === null ? 0x00000000 : nullableColor;

  var _normalizeColor$rgba = _normalizeCssColor2['default'].rgba(colorInt),
      r = _normalizeColor$rgba.r,
      g = _normalizeColor$rgba.g,
      b = _normalizeColor$rgba.b,
      a = _normalizeColor$rgba.a;

  return {
    _class: 'color',
    red: r / 255,
    green: g / 255,
    blue: b / 255,
    alpha: a * alpha
  };
};

// Solid color fill
var makeColorFill = exports.makeColorFill = function makeColorFill(cssColor, alpha) {
  return {
    _class: 'fill',
    isEnabled: true,
    color: makeColorFromCSS(cssColor, alpha),
    fillType: 0,
    noiseIndex: 0,
    noiseIntensity: 0,
    patternFillType: 1,
    patternTileScale: 1
  };
};

var ensureBase64DataURL = function ensureBase64DataURL(url) {
  var imageData = url.match(/data:(.+?)(;(.+))?,(.+)/i);

  if (imageData && imageData[3] !== 'base64') {
    // Solve for an NSURL bug that can't handle plaintext data: URLs
    var type = imageData[1];
    var data = decodeURIComponent(imageData[4]);
    var encodingMatch = imageData[3] && imageData[3].match(/^charset=(.*)/);
    var buffer = void 0;

    if (encodingMatch) {
      buffer = Buffer.from(data, encodingMatch[1]);
    } else {
      buffer = Buffer.from(data);
    }

    return 'data:' + String(type) + ';base64,' + String(buffer.toString('base64'));
  }

  return url;
};

// patternFillType - 0 1 2 3
var makeImageFill = exports.makeImageFill = function makeImageFill(url) {
  var patternFillType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return {
    _class: 'fill',
    isEnabled: true,
    fillType: _sketchConstants.FillType.Pattern,
    image: {
      _class: 'MSJSONOriginalDataReference',
      _ref_class: 'MSImageData',
      _ref: 'images/' + String(generateID()),
      url: url.indexOf('data:') === 0 ? ensureBase64DataURL(url) : url
    },
    noiseIndex: 0,
    noiseIntensity: 0,
    patternFillType: patternFillType,
    patternTileScale: 1
  };
};

var containsAllItems = function containsAllItems(needles, haystack) {
  return needles.every(function (needle) {
    return haystack.includes(needle);
  });
};

var calculateResizingConstraintValue = exports.calculateResizingConstraintValue = function calculateResizingConstraintValue() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var noHeight = [RESIZING_CONSTRAINTS.TOP, RESIZING_CONSTRAINTS.BOTTOM, RESIZING_CONSTRAINTS.HEIGHT];
  var noWidth = [RESIZING_CONSTRAINTS.LEFT, RESIZING_CONSTRAINTS.RIGHT, RESIZING_CONSTRAINTS.WIDTH];
  var validValues = Object.values(RESIZING_CONSTRAINTS);

  if (!args.every(function (arg) {
    return validValues.includes(arg);
  })) {
    throw new Error('Unknown resizing constraint');
  } else if (containsAllItems(noHeight, args)) {
    throw new Error('Can\'t fix height when top & bottom are fixed');
  } else if (containsAllItems(noWidth, args)) {
    throw new Error('Can\'t fix width when left & right are fixed');
  }

  return args.length > 0 ? args.reduce(function (acc, item) {
    return acc & item;
  }, args[0]) : RESIZING_CONSTRAINTS.NONE;
};

var RESIZING_CONSTRAINTS = exports.RESIZING_CONSTRAINTS = {
  TOP: 31,
  RIGHT: 62,
  BOTTOM: 55,
  LEFT: 59,
  WIDTH: 61,
  HEIGHT: 47,
  NONE: 63
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10).Buffer))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_Base) {
  _inherits(Group, _Base);

  function Group(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Group);

    var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this));

    _this._class = 'group';
    _this._x = x;
    _this._y = y;
    _this._width = width;
    _this._height = height;
    return _this;
  }

  _createClass(Group, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(Group.prototype.__proto__ || Object.getPrototypeOf(Group.prototype), 'toJSON', this).call(this);

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

      return toJSON;
    }()
  }]);

  return Group;
}(_base2['default']);

exports['default'] = Group;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _convertAngleToFromAndTo = __webpack_require__(19);

var _convertAngleToFromAndTo2 = _interopRequireDefault(_convertAngleToFromAndTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Style = function () {
  function Style() {
    _classCallCheck(this, Style);

    this._fills = [];
    this._borders = [];
    this._shadows = [];
    this._innerShadows = [];
    this._opacity = '1';
  }

  _createClass(Style, [{
    key: 'addColorFill',
    value: function () {
      function addColorFill(color, opacity) {
        this._fills.push((0, _utils.makeColorFill)(color, opacity));
      }

      return addColorFill;
    }()
  }, {
    key: 'addGradientFill',
    value: function () {
      function addGradientFill(_ref) {
        var angle = _ref.angle,
            stops = _ref.stops;

        var _convertAngleToFromAn = (0, _convertAngleToFromAndTo2['default'])(angle),
            from = _convertAngleToFromAn.from,
            to = _convertAngleToFromAn.to;

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
            from: '{' + String(from.x) + ', ' + String(from.y),
            gradientType: 0,
            shouldSmoothenOpacity: false,
            stops: stops.map(function (stopColor, index) {
              return {
                _class: 'gradientStop',
                color: (0, _utils.makeColorFromCSS)(stopColor),
                position: index
              };
            }),
            to: '{' + String(to.x) + ', ' + String(to.y) + '}'
          },
          noiseIndex: 0,
          noiseIntensity: 0,
          patternFillType: 1,
          patternTileScale: 1
        });
      }

      return addGradientFill;
    }()
  }, {
    key: 'addImageFill',
    value: function () {
      function addImageFill(image) {
        var fill = (0, _utils.makeImageFill)(image);

        this._fills.push(fill);
      }

      return addImageFill;
    }()
  }, {
    key: 'addBorder',
    value: function () {
      function addBorder(_ref2) {
        var color = _ref2.color,
            thickness = _ref2.thickness;

        this._borders.push({
          _class: 'border',
          isEnabled: true,
          color: (0, _utils.makeColorFromCSS)(color),
          fillType: 0,
          position: 1,
          thickness: thickness
        });
      }

      return addBorder;
    }()
  }, {
    key: 'addShadow',
    value: function () {
      function addShadow(_ref3) {
        var _ref3$color = _ref3.color,
            color = _ref3$color === undefined ? '#000' : _ref3$color,
            _ref3$blur = _ref3.blur,
            blur = _ref3$blur === undefined ? 1 : _ref3$blur,
            _ref3$offsetX = _ref3.offsetX,
            offsetX = _ref3$offsetX === undefined ? 0 : _ref3$offsetX,
            _ref3$offsetY = _ref3.offsetY,
            offsetY = _ref3$offsetY === undefined ? 0 : _ref3$offsetY,
            _ref3$spread = _ref3.spread,
            spread = _ref3$spread === undefined ? 0 : _ref3$spread;

        this._shadows.push({
          _class: 'shadow',
          isEnabled: true,
          blurRadius: blur,
          color: (0, _utils.makeColorFromCSS)(color),
          contextSettings: {
            _class: 'graphicsContextSettings',
            blendMode: 0,
            opacity: 1
          },
          offsetX: offsetX,
          offsetY: offsetY,
          spread: spread
        });
      }

      return addShadow;
    }()
  }, {
    key: 'addInnerShadow',
    value: function () {
      function addInnerShadow(_ref4) {
        var _ref4$color = _ref4.color,
            color = _ref4$color === undefined ? '#000' : _ref4$color,
            _ref4$blur = _ref4.blur,
            blur = _ref4$blur === undefined ? 0 : _ref4$blur,
            _ref4$offsetX = _ref4.offsetX,
            offsetX = _ref4$offsetX === undefined ? 0 : _ref4$offsetX,
            _ref4$offsetY = _ref4.offsetY,
            offsetY = _ref4$offsetY === undefined ? 0 : _ref4$offsetY,
            _ref4$spread = _ref4.spread,
            spread = _ref4$spread === undefined ? 0 : _ref4$spread;

        this._innerShadows.push({
          _class: 'innerShadow',
          isEnabled: true,
          blurRadius: blur,
          color: (0, _utils.makeColorFromCSS)(color),
          contextSettings: {
            _class: 'graphicsContextSettings',
            blendMode: 0,
            opacity: 1
          },
          offsetX: offsetX,
          offsetY: offsetY,
          spread: spread
        });
      }

      return addInnerShadow;
    }()
  }, {
    key: 'addOpacity',
    value: function () {
      function addOpacity(opacity) {
        this._opacity = opacity;
      }

      return addOpacity;
    }()
  }, {
    key: 'toJSON',
    value: function () {
      function toJSON() {
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

      return toJSON;
    }()
  }]);

  return Style;
}();

exports['default'] = Style;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTextVisible = isTextVisible;
exports.isNodeVisible = isNodeVisible;
function isTextVisible(_ref) {
  var textIndent = _ref.textIndent,
      overflowX = _ref.overflowX,
      overflowY = _ref.overflowY;

  // NOTE overflow:hidden is not needed if text-indent is huge, but how to define 'huge'?
  if (parseFloat(textIndent) < 0 && overflowX === 'hidden' && overflowY === 'hidden') {
    return false;
  }

  return true;
}

function isNodeVisible(node) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node.getBoundingClientRect(),
      width = _ref2.width,
      height = _ref2.height;

  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getComputedStyle(node),
      position = _ref3.position,
      overflowX = _ref3.overflowX,
      overflowY = _ref3.overflowY,
      opacity = _ref3.opacity,
      visibility = _ref3.visibility,
      display = _ref3.display,
      clip = _ref3.clip;

  // skip node when display is set to none for itself or an ancestor
  // helps us catch things such as <noscript>
  // HTMLSlotElement has a null offsetParent, but should still be visible
  if (node.tagName !== 'BODY' && node.offsetParent === null && position !== 'fixed' && node.tagName.toLowerCase() !== 'slot') {
    return false;
  }

  if ((width === 0 || height === 0) && overflowX === 'hidden' && overflowY === 'hidden') {
    return false;
  }

  if (display === 'none' || visibility === 'hidden' || visibility === 'collapse' || parseFloat(opacity) < 0.1) {
    return false;
  }

  if (clip === 'rect(0px, 0px, 0px, 0px)' && position === 'absolute') {
    return false;
  }

  // node is detached from the DOM
  if (!node.isConnected) {
    return false;
  }

  var parent = node.parentElement;

  if (parent && parent.nodeName !== 'HTML' && !isNodeVisible(parent)) {
    return false;
  }

  return true;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findFont = exports.stopPicker = exports.startPicker = exports.page2layers = undefined;

var _page2layers = __webpack_require__(7);

var _page2layers2 = _interopRequireDefault(_page2layers);

var _picker = __webpack_require__(34);

var _findFont = __webpack_require__(36);

var _findFont2 = _interopRequireDefault(_findFont);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.page2layers = _page2layers2['default'];
exports.startPicker = _picker.startPicker;
exports.stopPicker = _picker.stopPicker;
exports.findFont = _findFont2['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeTreeToSketchPage = __webpack_require__(8);

var _nodeTreeToSketchPage2 = _interopRequireDefault(_nodeTreeToSketchPage);

var _pseudoToElement = __webpack_require__(33);

var _pseudoToElement2 = _interopRequireDefault(_pseudoToElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getLayerName(node) {
  return node.getAttribute('id') || node.getAttribute('class') || node.nodeName;
}

exports['default'] = function () {
  async function run() {
    (0, _pseudoToElement2['default'])();
    var page = (0, _nodeTreeToSketchPage2['default'])(window.htmlToSketch.selectedElement || document.body, {
      getGroupName: getLayerName,
      getRectangleName: getLayerName
    });

    return page.toJSON();
  }

  return run;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = nodeTreeToSketchPage;

var _artboard = __webpack_require__(9);

var _artboard2 = _interopRequireDefault(_artboard);

var _page = __webpack_require__(17);

var _page2 = _interopRequireDefault(_page);

var _nodeTreeToSketchGroup = __webpack_require__(18);

var _nodeTreeToSketchGroup2 = _interopRequireDefault(_nodeTreeToSketchGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function nodeTreeToSketchPage(node, options) {
  var rootGroup = (0, _nodeTreeToSketchGroup2['default'])(node, options);

  var bcr = node.getBoundingClientRect();
  var page = new _page2['default']({
    width: bcr.right - bcr.left,
    height: bcr.bottom - bcr.top
  });

  if (options && options.addArtboard) {
    var artboard = new _artboard2['default']({
      x: 0,
      y: 0,
      width: rootGroup._width,
      height: rootGroup._height
    });

    artboard.addLayer(rootGroup);

    if (options.artboardName) {
      artboard.setName(options.artboardName);
    }

    page.addLayer(artboard);
  } else {
    page.addLayer(rootGroup);
  }

  if (options && options.pageName) {
    page.setName(options.pageName);
  }

  return page;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Artboard = function (_Base) {
  _inherits(Artboard, _Base);

  function Artboard(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Artboard);

    var _this = _possibleConstructorReturn(this, (Artboard.__proto__ || Object.getPrototypeOf(Artboard)).call(this));

    _this._class = 'artboard';
    _this._x = x;
    _this._y = y;
    _this._width = width;
    _this._height = height;
    return _this;
  }

  _createClass(Artboard, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(Artboard.prototype.__proto__ || Object.getPrototypeOf(Artboard.prototype), 'toJSON', this).call(this);

        obj.frame = {
          '_class': 'rect',
          'constrainProportions': false,
          'height': this._height,
          'width': this._width,
          'x': this._x,
          'y': this._y
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

      return toJSON;
    }()
  }]);

  return Artboard;
}(_base2['default']);

exports['default'] = Artboard;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(12);
var ieee754 = __webpack_require__(13);
var isArray = __webpack_require__(14);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () {
        function foo() {
          return 42;
        }

        return foo;
      }() };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }
  return createBuffer(that, size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }
  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}

Buffer.isBuffer = function () {
  function isBuffer(b) {
    return !!(b != null && b._isBuffer);
  }

  return isBuffer;
}();

Buffer.compare = function () {
  function compare(a, b) {
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError('Arguments must be Buffers');
    }

    if (a === b) return 0;

    var x = a.length;
    var y = b.length;

    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
      }
    }

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  }

  return compare;
}();

Buffer.isEncoding = function () {
  function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;
      default:
        return false;
    }
  }

  return isEncoding;
}();

Buffer.concat = function () {
  function concat(list, length) {
    if (!isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    if (list.length === 0) {
      return Buffer.alloc(0);
    }

    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }

    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for (i = 0; i < list.length; ++i) {
      var buf = list[i];
      if (!Buffer.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      buf.copy(buffer, pos);
      pos += buf.length;
    }
    return buffer;
  }

  return concat;
}();

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function () {
  function swap16() {
    var len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits');
    }
    for (var i = 0; i < len; i += 2) {
      swap(this, i, i + 1);
    }
    return this;
  }

  return swap16;
}();

Buffer.prototype.swap32 = function () {
  function swap32() {
    var len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits');
    }
    for (var i = 0; i < len; i += 4) {
      swap(this, i, i + 3);
      swap(this, i + 1, i + 2);
    }
    return this;
  }

  return swap32;
}();

Buffer.prototype.swap64 = function () {
  function swap64() {
    var len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits');
    }
    for (var i = 0; i < len; i += 8) {
      swap(this, i, i + 7);
      swap(this, i + 1, i + 6);
      swap(this, i + 2, i + 5);
      swap(this, i + 3, i + 4);
    }
    return this;
  }

  return swap64;
}();

Buffer.prototype.toString = function () {
  function toString() {
    var length = this.length | 0;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  }

  return toString;
}();

Buffer.prototype.equals = function () {
  function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
  }

  return equals;
}();

Buffer.prototype.inspect = function () {
  function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max) str += ' ... ';
    }
    return '<Buffer ' + str + '>';
  }

  return inspect;
}();

Buffer.prototype.compare = function () {
  function compare(target, start, end, thisStart, thisEnd) {
    if (!Buffer.isBuffer(target)) {
      throw new TypeError('Argument must be a Buffer');
    }

    if (start === undefined) {
      start = 0;
    }
    if (end === undefined) {
      end = target ? target.length : 0;
    }
    if (thisStart === undefined) {
      thisStart = 0;
    }
    if (thisEnd === undefined) {
      thisEnd = this.length;
    }

    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index');
    }

    if (thisStart >= thisEnd && start >= end) {
      return 0;
    }
    if (thisStart >= thisEnd) {
      return -1;
    }
    if (start >= end) {
      return 1;
    }

    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;

    if (this === target) return 0;

    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);

    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);

    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
      }
    }

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  }

  return compare;
}();

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function () {
  function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  }

  return includes;
}();

Buffer.prototype.indexOf = function () {
  function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  }

  return indexOf;
}();

Buffer.prototype.lastIndexOf = function () {
  function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  }

  return lastIndexOf;
}();

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function () {
  function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
      // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
      // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
      offset = offset | 0;
      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined) encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
      // legacy write(string, encoding, offset, length) - remove in v0.13
    } else {
      throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    }

    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;

    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds');
    }

    if (!encoding) encoding = 'utf8';

    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);

        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);

        case 'ascii':
          return asciiWrite(this, string, offset, length);

        case 'latin1':
        case 'binary':
          return latin1Write(this, string, offset, length);

        case 'base64':
          // Warning: maxLength not taken into account in base64Write
          return base64Write(this, string, offset, length);

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length);

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }

  return write;
}();

Buffer.prototype.toJSON = function () {
  function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  }

  return toJSON;
}();

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}

Buffer.prototype.slice = function () {
  function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;

    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }

    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }

    if (end < start) end = start;

    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = this.subarray(start, end);
      newBuf.__proto__ = Buffer.prototype;
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer(sliceLen, undefined);
      for (var i = 0; i < sliceLen; ++i) {
        newBuf[i] = this[i + start];
      }
    }

    return newBuf;
  }

  return slice;
}();

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function () {
  function readUIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }

    return val;
  }

  return readUIntLE;
}();

Buffer.prototype.readUIntBE = function () {
  function readUIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }

    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }

    return val;
  }

  return readUIntBE;
}();

Buffer.prototype.readUInt8 = function () {
  function readUInt8(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
  }

  return readUInt8;
}();

Buffer.prototype.readUInt16LE = function () {
  function readUInt16LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  }

  return readUInt16LE;
}();

Buffer.prototype.readUInt16BE = function () {
  function readUInt16BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  }

  return readUInt16BE;
}();

Buffer.prototype.readUInt32LE = function () {
  function readUInt32LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
  }

  return readUInt32LE;
}();

Buffer.prototype.readUInt32BE = function () {
  function readUInt32BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  }

  return readUInt32BE;
}();

Buffer.prototype.readIntLE = function () {
  function readIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val;
  }

  return readIntLE;
}();

Buffer.prototype.readIntBE = function () {
  function readIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val;
  }

  return readIntBE;
}();

Buffer.prototype.readInt8 = function () {
  function readInt8(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
  }

  return readInt8;
}();

Buffer.prototype.readInt16LE = function () {
  function readInt16LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  }

  return readInt16LE;
}();

Buffer.prototype.readInt16BE = function () {
  function readInt16BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  }

  return readInt16BE;
}();

Buffer.prototype.readInt32LE = function () {
  function readInt32LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  }

  return readInt32LE;
}();

Buffer.prototype.readInt32BE = function () {
  function readInt32BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  }

  return readInt32BE;
}();

Buffer.prototype.readFloatLE = function () {
  function readFloatLE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
  }

  return readFloatLE;
}();

Buffer.prototype.readFloatBE = function () {
  function readFloatBE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
  }

  return readFloatBE;
}();

Buffer.prototype.readDoubleLE = function () {
  function readDoubleLE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
  }

  return readDoubleLE;
}();

Buffer.prototype.readDoubleBE = function () {
  function readDoubleBE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
  }

  return readDoubleBE;
}();

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function () {
  function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
  }

  return writeUIntLE;
}();

Buffer.prototype.writeUIntBE = function () {
  function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
  }

  return writeUIntBE;
}();

Buffer.prototype.writeUInt8 = function () {
  function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    this[offset] = value & 0xff;
    return offset + 1;
  }

  return writeUInt8;
}();

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function () {
  function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  }

  return writeUInt16LE;
}();

Buffer.prototype.writeUInt16BE = function () {
  function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 8;
      this[offset + 1] = value & 0xff;
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  }

  return writeUInt16BE;
}();

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function () {
  function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  }

  return writeUInt32LE;
}();

Buffer.prototype.writeUInt32BE = function () {
  function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  }

  return writeUInt32BE;
}();

Buffer.prototype.writeIntLE = function () {
  function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }

    return offset + byteLength;
  }

  return writeIntLE;
}();

Buffer.prototype.writeIntBE = function () {
  function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }

    return offset + byteLength;
  }

  return writeIntBE;
}();

Buffer.prototype.writeInt8 = function () {
  function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
  }

  return writeInt8;
}();

Buffer.prototype.writeInt16LE = function () {
  function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  }

  return writeInt16LE;
}();

Buffer.prototype.writeInt16BE = function () {
  function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 8;
      this[offset + 1] = value & 0xff;
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  }

  return writeInt16BE;
}();

Buffer.prototype.writeInt32LE = function () {
  function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  }

  return writeInt32LE;
}();

Buffer.prototype.writeInt32BE = function () {
  function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  }

  return writeInt32BE;
}();

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function () {
  function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  }

  return writeFloatLE;
}();

Buffer.prototype.writeFloatBE = function () {
  function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  }

  return writeFloatBE;
}();

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function () {
  function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  }

  return writeDoubleLE;
}();

Buffer.prototype.writeDoubleBE = function () {
  function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  }

  return writeDoubleBE;
}();

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function () {
  function copy(target, targetStart, start, end) {
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;

    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;

    // Fatal error conditions
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');

    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }

    var len = end - start;
    var i;

    if (this === target && start < targetStart && targetStart < end) {
      // descending copy from end
      for (i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      // ascending copy from start
      for (i = 0; i < len; ++i) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
    }

    return len;
  }

  return copy;
}();

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function () {
  function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === 'string') {
        encoding = end;
        end = this.length;
      }
      if (val.length === 1) {
        var code = val.charCodeAt(0);
        if (code < 256) {
          val = code;
        }
      }
      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string');
      }
      if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding);
      }
    } else if (typeof val === 'number') {
      val = val & 255;
    }

    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index');
    }

    if (end <= start) {
      return this;
    }

    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;

    if (!val) val = 0;

    var i;
    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
      var len = bytes.length;
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }

    return this;
  }

  return fill;
}();

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;

  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;

  return [validLen, placeHoldersLen];
}

// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));

  var curByte = 0;

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;

  for (var i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 15 */
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
  if (match = matchers.hex6.exec(color)) {
    return parseInt(match[1] + 'ff', 16) >>> 0;
  }

  if (names.hasOwnProperty(color)) {
    return names[color];
  }

  if (match = matchers.rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff // a
    ) >>> 0;
  }

  if (match = matchers.rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4]) // a
    ) >>> 0;
  }

  if (match = matchers.hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  }

  // https://drafts.csswg.org/css-color-4/#hex-notation
  if (match = matchers.hex8.exec(color)) {
    return parseInt(match[1], 16) >>> 0;
  }

  if (match = matchers.hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = matchers.hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff // a
    ) >>> 0;
  }

  if (match = matchers.hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4]) // a
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

  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
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
  hex8: /^#([0-9a-fA-F]{8})$/
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
  return (int % 360 + 360) % 360 / 360;
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
  yellowgreen: 0x9acd32ff
};

function rgba(colorInt) {
  var r = Math.round((colorInt & 0xff000000) >>> 24);
  var g = Math.round((colorInt & 0x00ff0000) >>> 16);
  var b = Math.round((colorInt & 0x0000ff00) >>> 8);
  var a = ((colorInt & 0x000000ff) >>> 0) / 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
};

normalizeColor.rgba = rgba;

module.exports = normalizeColor;

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_Base) {
  _inherits(Page, _Base);

  function Page(_ref) {
    var width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));

    _this._class = 'page';
    _this._width = width;
    _this._height = height;
    return _this;
  }

  _createClass(Page, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), 'toJSON', this).call(this);

        obj.frame = {
          '_class': 'rect',
          'constrainProportions': false,
          'height': this._height,
          'width': this._width,
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

      return toJSON;
    }()
  }]);

  return Page;
}(_base2['default']);

exports['default'] = Page;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = nodeTreeToSketchGroup;

var _group = __webpack_require__(2);

var _group2 = _interopRequireDefault(_group);

var _style = __webpack_require__(3);

var _style2 = _interopRequireDefault(_style);

var _nodeToSketchLayers = __webpack_require__(20);

var _nodeToSketchLayers2 = _interopRequireDefault(_nodeToSketchLayers);

var _visibility = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function nodeTreeToSketchGroup(node, options) {
  var bcr = node.getBoundingClientRect();
  var left = bcr.left,
      top = bcr.top;

  var width = bcr.right - bcr.left;
  var height = bcr.bottom - bcr.top;

  // Collect layers for the node level itself
  var layers = (0, _nodeToSketchLayers2['default'])(node, Object.assign({}, options, { layerOpacity: false })) || [];

  if (node.nodeName !== 'svg') {
    // Recursively collect child groups for child nodes
    Array.from(node.children).filter(function (node) {
      return (0, _visibility.isNodeVisible)(node);
    }).forEach(function (childNode) {
      layers.push(nodeTreeToSketchGroup(childNode, options));

      // Traverse the shadow DOM if present
      if (childNode.shadowRoot) {
        Array.from(childNode.shadowRoot.children).filter(function (node) {
          return (0, _visibility.isNodeVisible)(node);
        }).map(nodeTreeToSketchGroup).forEach(function (layer) {
          return layers.push(layer);
        });
      }
    });
  }

  // Now build a group for all these children

  var styles = getComputedStyle(node);
  var opacity = styles.opacity;


  var group = new _group2['default']({ x: left, y: top, width: width, height: height });
  var groupStyle = new _style2['default']();

  groupStyle.addOpacity(opacity);
  group.setStyle(groupStyle);

  layers.forEach(function (layer) {
    // Layer positions are relative, and as we put the node position to the group,
    // we have to shift back the layers by that distance.
    layer._x -= left;
    layer._y -= top;

    group.addLayer(layer);
  });

  // Set the group name to the node's name, unless there is a name provider in the options

  if (options && options.getGroupName) {
    group.setName(options.getGroupName(node));
  } else {
    group.setName('(' + String(node.nodeName.toLowerCase()) + ')');
  }

  return group;
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = convertAngleToFromAndTo;
// Keep this pure for easy testing in the future.
function convertAngleToFromAndTo(angle) {
  // default 180deg
  var from = { x: 0.5, y: 0 };
  var to = { x: 0.5, y: 1 };

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
    from: from,
    to: to
  };
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = nodeToSketchLayers;

var _rectangle = __webpack_require__(21);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _bitmap = __webpack_require__(22);

var _bitmap2 = _interopRequireDefault(_bitmap);

var _svg = __webpack_require__(23);

var _svg2 = _interopRequireDefault(_svg);

var _shapeGroup = __webpack_require__(24);

var _shapeGroup2 = _interopRequireDefault(_shapeGroup);

var _group = __webpack_require__(2);

var _group2 = _interopRequireDefault(_group);

var _style = __webpack_require__(3);

var _style2 = _interopRequireDefault(_style);

var _text = __webpack_require__(25);

var _text2 = _interopRequireDefault(_text);

var _textStyle = __webpack_require__(26);

var _textStyle2 = _interopRequireDefault(_textStyle);

var _createXPathFromElement = __webpack_require__(27);

var _createXPathFromElement2 = _interopRequireDefault(_createXPathFromElement);

var _background = __webpack_require__(28);

var _shadow = __webpack_require__(29);

var _svg3 = __webpack_require__(30);

var _bcr = __webpack_require__(31);

var _text3 = __webpack_require__(32);

var _visibility = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var DEFAULT_VALUES = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  backgroundImage: 'none',
  borderWidth: '0px',
  boxShadow: 'none'
};

function hasOnlyDefaultStyles(styles) {
  return Object.keys(DEFAULT_VALUES).every(function (key) {
    var defaultValue = DEFAULT_VALUES[key];
    var value = styles[key];

    return defaultValue === value;
  });
}

function fixBorderRadius(borderRadius, width, height) {
  var matches = borderRadius.match(/^([0-9.]+)(.+)$/);

  // Sketch uses 'px' units for border radius, so we need to convert % to px
  if (matches && matches[2] === '%') {
    var baseVal = Math.max(width, height);
    var percentageApplied = baseVal * (parseInt(matches[1], 10) / 100);

    return Math.round(percentageApplied);
  }
  return parseInt(borderRadius, 10);
}

function isSVGDescendant(node) {
  return node instanceof SVGElement && node.matches('svg *');
}

/**
 * @param {string} fontWeight font weight as provided by the browser
 * @return {number} normalized font weight
 */
function parseFontWeight(fontWeight) {
  // Support 'bold' and 'normal' for Electron compatibility.
  if (fontWeight === 'bold') {
    return 700;
  } else if (fontWeight === 'normal') {
    return 400;
  }
  return parseInt(fontWeight, 10);
}

function nodeToSketchLayers(node, options) {
  var layers = [];
  var bcr = node.getBoundingClientRect();
  var left = bcr.left,
      top = bcr.top;

  var width = bcr.right - bcr.left;
  var height = bcr.bottom - bcr.top;

  var styles = getComputedStyle(node);
  var backgroundColor = styles.backgroundColor,
      backgroundImage = styles.backgroundImage,
      backgroundPositionX = styles.backgroundPositionX,
      backgroundPositionY = styles.backgroundPositionY,
      backgroundSize = styles.backgroundSize,
      borderColor = styles.borderColor,
      borderWidth = styles.borderWidth,
      borderTopWidth = styles.borderTopWidth,
      borderRightWidth = styles.borderRightWidth,
      borderBottomWidth = styles.borderBottomWidth,
      borderLeftWidth = styles.borderLeftWidth,
      borderTopColor = styles.borderTopColor,
      borderRightColor = styles.borderRightColor,
      borderBottomColor = styles.borderBottomColor,
      borderLeftColor = styles.borderLeftColor,
      borderTopLeftRadius = styles.borderTopLeftRadius,
      borderTopRightRadius = styles.borderTopRightRadius,
      borderBottomLeftRadius = styles.borderBottomLeftRadius,
      borderBottomRightRadius = styles.borderBottomRightRadius,
      fontFamily = styles.fontFamily,
      fontWeight = styles.fontWeight,
      fontSize = styles.fontSize,
      lineHeight = styles.lineHeight,
      letterSpacing = styles.letterSpacing,
      color = styles.color,
      textTransform = styles.textTransform,
      textDecorationLine = styles.textDecorationLine,
      textAlign = styles.textAlign,
      justifyContent = styles.justifyContent,
      display = styles.display,
      boxShadow = styles.boxShadow,
      opacity = styles.opacity,
      whiteSpace = styles.whiteSpace;

  // skip SVG child nodes as they are already covered by `new SVG(…)`

  if (isSVGDescendant(node)) {
    return layers;
  }

  if (!(0, _visibility.isNodeVisible)(node, bcr, styles)) {
    return layers;
  }

  var shapeGroup = new _shapeGroup2['default']({ x: left, y: top, width: width, height: height });

  if (options && options.getRectangleName) {
    shapeGroup.setName(options.getRectangleName(node));
  } else {
    shapeGroup.setName((0, _createXPathFromElement2['default'])(node));
  }

  var isImage = node.nodeName === 'IMG' && node.currentSrc;
  var isSVG = node.nodeName === 'svg';

  // if layer has no background/shadow/border/etc. skip it
  if (isImage || !hasOnlyDefaultStyles(styles)) {
    var style = new _style2['default']();

    if (backgroundColor) {
      style.addColorFill(backgroundColor);
    }

    if (isImage) {
      var absoluteUrl = new URL(node.currentSrc, location.href);

      style.addImageFill(absoluteUrl.href);
      shapeGroup.setFixedWidthAndHeight();
    }

    if (boxShadow !== DEFAULT_VALUES.boxShadow) {
      var shadowStrings = (0, _shadow.splitShadowString)(boxShadow);

      shadowStrings.forEach(function (shadowString) {
        var shadowObject = (0, _shadow.shadowStringToObject)(shadowString);

        if (shadowObject.inset) {
          if (borderWidth.indexOf(' ') === -1) {
            shadowObject.spread += parseFloat(borderWidth);
          }
          style.addInnerShadow(shadowObject);
        } else {
          style.addShadow(shadowObject);
        }
      });
    }

    // support for one-side borders (using inner shadow because Sketch doesn't support that)
    if (borderWidth.indexOf(' ') === -1) {
      style.addBorder({ color: borderColor, thickness: parseFloat(borderWidth) });
    } else {
      var borderTopWidthFloat = parseFloat(borderTopWidth);
      var borderRightWidthFloat = parseFloat(borderRightWidth);
      var borderBottomWidthFloat = parseFloat(borderBottomWidth);
      var borderLeftWidthFloat = parseFloat(borderLeftWidth);

      if (borderTopWidthFloat !== 0) {
        style.addInnerShadow({ color: borderTopColor, offsetY: borderTopWidthFloat });
      }
      if (borderRightWidthFloat !== 0) {
        style.addInnerShadow({ color: borderRightColor, offsetX: -borderRightWidthFloat });
      }
      if (borderBottomWidthFloat !== 0) {
        style.addInnerShadow({ color: borderBottomColor, offsetY: -borderBottomWidthFloat });
      }
      if (borderLeftWidthFloat !== 0) {
        style.addInnerShadow({ color: borderLeftColor, offsetX: borderLeftWidthFloat });
      }
    }

    if (!options || options.layerOpacity !== false) {
      style.addOpacity(opacity);
    }

    shapeGroup.setStyle(style);

    //TODO borderRadius can be expressed in different formats and use various units - for simplicity we assume "X%"
    var cornerRadius = {
      topLeft: fixBorderRadius(borderTopLeftRadius, width, height),
      topRight: fixBorderRadius(borderTopRightRadius, width, height),
      bottomLeft: fixBorderRadius(borderBottomLeftRadius, width, height),
      bottomRight: fixBorderRadius(borderBottomRightRadius, width, height)
    };

    var rectangle = new _rectangle2['default']({ width: width, height: height, cornerRadius: cornerRadius });

    shapeGroup.addLayer(rectangle);

    // This should return a array once multiple background-images are supported
    var backgroundImageResult = (0, _background.parseBackgroundImage)(backgroundImage);

    var layer = shapeGroup;

    if (backgroundImageResult) {

      switch (backgroundImageResult.type) {
        case 'Image':
          {
            var img = new Image();

            img.src = backgroundImageResult.value;

            // TODO add support for % values
            var bitmapX = parseFloat(backgroundPositionX);
            var bitmapY = parseFloat(backgroundPositionY);

            var actualImgSize = (0, _background.getActualImageSize)(backgroundSize, { width: img.width, height: img.height }, { width: width, height: height });

            if (bitmapX === 0 && bitmapY === 0 && actualImgSize.width === img.width && actualImgSize.height === img.height) {
              // background image fits entirely inside the node, so we can represent it with a (cheaper) image fill
              style.addImageFill(backgroundImageResult.value);
            } else {
              // use a Group(Shape + Bitmap) to correctly represent clipping of the background image
              var bm = new _bitmap2['default']({
                url: backgroundImageResult.value,
                x: bitmapX,
                y: bitmapY,
                width: actualImgSize.width,
                height: actualImgSize.height
              });

              bm.setName('background-image');
              shapeGroup.setHasClippingMask(true);

              var group = new _group2['default']({ x: left, y: top, width: width, height: height });

              // position is relative to the group
              shapeGroup.setPosition({ x: 0, y: 0 });
              group.addLayer(shapeGroup);
              group.addLayer(bm);

              layer = group;
            }

            break;
          }
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

    layers.push(layer);
  }

  if (isSVG) {
    // sketch ignores padding and centerging as defined by viewBox and preserveAspectRatio when
    // importing SVG, so instead of using BCR of the SVG, we are using BCR of its children
    var childrenBCR = (0, _bcr.getGroupBCR)(Array.from(node.children));
    var svgLayer = new _svg2['default']({
      x: childrenBCR.left,
      y: childrenBCR.top,
      width: childrenBCR.width,
      height: childrenBCR.height,
      rawSVGString: (0, _svg3.getSVGString)(node)
    });

    layers.push(svgLayer);

    return layers;
  }

  if (!(0, _visibility.isTextVisible)(styles)) {
    return layers;
  }

  var textStyle = new _textStyle2['default']({
    fontFamily: fontFamily,
    fontSize: parseInt(fontSize, 10),
    lineHeight: lineHeight !== 'normal' ? parseInt(lineHeight, 10) : undefined,
    letterSpacing: letterSpacing !== 'normal' ? parseFloat(letterSpacing) : undefined,
    fontWeight: parseFontWeight(fontWeight),
    color: color,
    textTransform: textTransform,
    textDecoration: textDecorationLine,
    textAlign: display === 'flex' || display === 'inline-flex' ? justifyContent : textAlign,
    skipSystemFonts: options && options.skipSystemFonts
  });

  var rangeHelper = document.createRange();

  // Text
  Array.from(node.childNodes).filter(function (child) {
    return child.nodeType === 3 && child.nodeValue.trim().length > 0;
  }).forEach(function (textNode) {
    rangeHelper.selectNodeContents(textNode);
    var textRanges = Array.from(rangeHelper.getClientRects());
    var numberOfLines = textRanges.length;
    var textBCR = rangeHelper.getBoundingClientRect();
    var lineHeightInt = parseInt(lineHeight, 10);
    var textBCRHeight = textBCR.bottom - textBCR.top;
    var fixY = 0;

    // center text inside a box
    // TODO it's possible now in sketch - fix it!
    if (lineHeightInt && textBCRHeight !== lineHeightInt * numberOfLines) {
      fixY = (textBCRHeight - lineHeightInt * numberOfLines) / 2;
    }

    var textValue = (0, _text3.fixWhiteSpace)(textNode.nodeValue, whiteSpace);

    var text = new _text2['default']({
      x: textBCR.left,
      y: textBCR.top + fixY,
      width: textBCR.right - textBCR.left,
      height: textBCRHeight,
      text: textValue,
      style: textStyle,
      multiline: numberOfLines > 1
    });

    layers.push(text);
  });

  return layers;
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rectangle = function (_Base) {
  _inherits(Rectangle, _Base);

  function Rectangle(_ref) {
    var width = _ref.width,
        height = _ref.height,
        _ref$cornerRadius = _ref.cornerRadius,
        cornerRadius = _ref$cornerRadius === undefined ? { topLeft: 0, bottomLeft: 0, topRight: 0, bottomRight: 0 } : _ref$cornerRadius;

    _classCallCheck(this, Rectangle);

    var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this));

    _this._class = 'rectangle';
    _this._width = width;
    _this._height = height;
    _this._cornerRadius = cornerRadius;
    return _this;
  }

  _createClass(Rectangle, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(Rectangle.prototype.__proto__ || Object.getPrototypeOf(Rectangle.prototype), 'toJSON', this).call(this);

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
          'points': [{
            '_class': 'curvePoint',
            'cornerRadius': this._cornerRadius.topLeft,
            'curveFrom': '{0, 0}',
            'curveMode': 1,
            'curveTo': '{0, 0}',
            'hasCurveFrom': false,
            'hasCurveTo': false,
            'point': '{0, 0}'
          }, {
            '_class': 'curvePoint',
            'cornerRadius': this._cornerRadius.topRight,
            'curveFrom': '{1, 0}',
            'curveMode': 1,
            'curveTo': '{1, 0}',
            'hasCurveFrom': false,
            'hasCurveTo': false,
            'point': '{1, 0}'
          }, {
            '_class': 'curvePoint',
            'cornerRadius': this._cornerRadius.bottomRight,
            'curveFrom': '{1, 1}',
            'curveMode': 1,
            'curveTo': '{1, 1}',
            'hasCurveFrom': false,
            'hasCurveTo': false,
            'point': '{1, 1}'
          }, {
            '_class': 'curvePoint',
            'cornerRadius': this._cornerRadius.bottomLeft,
            'curveFrom': '{0, 1}',
            'curveMode': 1,
            'curveTo': '{0, 1}',
            'hasCurveFrom': false,
            'hasCurveTo': false,
            'point': '{0, 1}'
          }]
        };

        obj.hasConvertedToNewRoundCorners = true;
        obj.fixedRadius = 0;
        obj.edited = false;
        obj.booleanOperation = -1;

        return obj;
      }

      return toJSON;
    }()
  }]);

  return Rectangle;
}(_base2['default']);

exports['default'] = Rectangle;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bitmap = function (_Base) {
  _inherits(Bitmap, _Base);

  function Bitmap(_ref) {
    var url = _ref.url,
        x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Bitmap);

    var _this = _possibleConstructorReturn(this, (Bitmap.__proto__ || Object.getPrototypeOf(Bitmap)).call(this));

    _this._class = 'bitmap';
    _this._url = url;
    _this._x = x;
    _this._y = y;
    _this._width = width;
    _this._height = height;
    return _this;
  }

  _createClass(Bitmap, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(Bitmap.prototype.__proto__ || Object.getPrototypeOf(Bitmap.prototype), 'toJSON', this).call(this);

        obj.frame = {
          '_class': 'rect',
          'constrainProportions': false,
          'x': this._x,
          'y': this._y,
          'height': this._height,
          'width': this._width
        };

        obj.image = {
          _class: 'MSJSONOriginalDataReference',
          _ref_class: 'MSImageData',
          _ref: 'images/' + String((0, _utils.generateID)()),
          url: this._url
        };

        return obj;
      }

      return toJSON;
    }()
  }]);

  return Bitmap;
}(_base2['default']);

exports['default'] = Bitmap;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_Base) {
  _inherits(SVG, _Base);

  function SVG(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height,
        rawSVGString = _ref.rawSVGString;

    _classCallCheck(this, SVG);

    var _this = _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).call(this));

    _this._rawSVGString = rawSVGString;
    _this._width = width;
    _this._height = height;
    _this._x = x;
    _this._y = y;
    return _this;
  }

  _createClass(SVG, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        // NOTE: this is a non-standard extension of the .sketch format
        return {
          _class: 'svg',
          rawSVGString: this._rawSVGString,
          width: this._width,
          height: this._height,
          x: this._x,
          y: this._y,
          resizingConstraint: this._resizingConstraint,
          hasClippingMask: this._hasClippingMask
        };
      }

      return toJSON;
    }()
  }]);

  return SVG;
}(_base2['default']);

exports['default'] = SVG;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShapeGroup = function (_Base) {
  _inherits(ShapeGroup, _Base);

  function ShapeGroup(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, ShapeGroup);

    var _this = _possibleConstructorReturn(this, (ShapeGroup.__proto__ || Object.getPrototypeOf(ShapeGroup)).call(this));

    _this._class = 'shapeGroup';
    _this._width = width;
    _this._height = height;
    _this.setPosition({ x: x, y: y });
    return _this;
  }

  _createClass(ShapeGroup, [{
    key: 'setPosition',
    value: function () {
      function setPosition(_ref2) {
        var x = _ref2.x,
            y = _ref2.y;

        this._x = x;
        this._y = y;
      }

      return setPosition;
    }()
  }, {
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(ShapeGroup.prototype.__proto__ || Object.getPrototypeOf(ShapeGroup.prototype), 'toJSON', this).call(this);

        obj.frame = {
          '_class': 'rect',
          'constrainProportions': false,
          'height': this._height,
          'width': this._width,
          'x': this._x,
          'y': this._y
        };

        obj.hasClickThrough = false;
        obj.windingRule = 1;

        return obj;
      }

      return toJSON;
    }()
  }]);

  return ShapeGroup;
}(_base2['default']);

exports['default'] = ShapeGroup;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_Base) {
  _inherits(Text, _Base);

  function Text(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height,
        text = _ref.text,
        style = _ref.style,
        multiline = _ref.multiline;

    _classCallCheck(this, Text);

    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));

    _this._class = 'text';
    _this._x = x;
    _this._y = y;
    _this._width = width;
    _this._height = height;
    _this._text = text;
    _this._name = text;
    _this._style = style;
    _this._multiline = multiline;
    _this.setResizingConstraint(_utils.RESIZING_CONSTRAINTS.HEIGHT);
    return _this;
  }

  _createClass(Text, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), 'toJSON', this).call(this);

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

        // text nodes don't have child layers
        delete obj.layers;

        obj.automaticallyDrawOnUnderlyingPath = false;
        obj.dontSynchroniseWithSymbol = false;
        obj.lineSpacingBehaviour = 2;
        // 1 - width is set to Fixed
        // 0 - width is set to Auto - this helps us avoid issues with browser setting too small width causing line to break
        obj.textBehaviour = this._multiline ? 1 : 0;

        return obj;
      }

      return toJSON;
    }()
  }]);

  return Text;
}(_base2['default']);

exports['default'] = Text;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Some websites or component libraries use font-family lists starting with OS-specific fonts.
// If the option 'skipSystemFonts' is enabled, we skip those fonts to choose a font
// Sketch is capable of.

var SYSTEM_FONTS = [
// Apple
'-apple-system', 'BlinkMacSystemFont',

// Microsoft
'Segoe UI',

// Android
'Roboto'];

// INPUT: -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif
// OUTPUT: Helvetica Neue
function getFirstFont(fonts, skipSystemFonts) {
  var regularFont = undefined;
  var systemFont = undefined;

  fonts.split(',').forEach(function (font) {
    font = font.trim().replace(/^["']+|["']+$/g, '');
    if (font === '') {
      return;
    }

    // See above for a note on OS-specific fonts
    if (!regularFont && (!skipSystemFonts || SYSTEM_FONTS.indexOf(font) < 0)) {
      regularFont = font;
    }
    if (!systemFont) {
      systemFont = font;
    }
  });

  if (regularFont) {
    return regularFont;
  }

  if (systemFont) {
    return systemFont;
  }

  return '-apple-system';
}

var TextStyle = function () {
  function TextStyle(_ref) {
    var color = _ref.color,
        fontSize = _ref.fontSize,
        fontFamily = _ref.fontFamily,
        fontWeight = _ref.fontWeight,
        lineHeight = _ref.lineHeight,
        letterSpacing = _ref.letterSpacing,
        textTransform = _ref.textTransform,
        textDecoration = _ref.textDecoration,
        textAlign = _ref.textAlign,
        skipSystemFonts = _ref.skipSystemFonts;

    _classCallCheck(this, TextStyle);

    this._color = color;
    this._fontSize = fontSize;
    this._fontFamily = getFirstFont(fontFamily, skipSystemFonts);
    this._lineHeight = lineHeight;
    this._letterSpacing = letterSpacing;
    this._fontWeight = fontWeight;
    this._textTransform = textTransform;
    this._textDecoration = textDecoration;
    this._textAlign = textAlign;
  }

  _createClass(TextStyle, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var result = {
          'color': this._color,
          'fontSize': this._fontSize,
          'fontFamily': this._fontFamily,
          'fontWeight': this._fontWeight,
          'lineHeight': this._lineHeight,
          'textDecoration': this._textDecoration,
          'textAlign': this._textAlign
        };

        if (this._letterSpacing !== undefined) {
          result.letterSpacing = this._letterSpacing;
        }

        if (this._textTransform !== undefined) {
          result.textTransform = this._textTransform;
        }

        return result;
      }

      return toJSON;
    }()
  }]);

  return TextStyle;
}();

exports['default'] = TextStyle;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = createXPathFromElement;
//https://stackoverflow.com/a/5178132
function createXPathFromElement(elm) {
  var allNodes = document.getElementsByTagName('*');
  var segs = void 0;

  for (segs = []; elm && elm.nodeType === 1; elm = elm.parentNode) {
    if (elm.hasAttribute('id')) {
      var uniqueIdCount = 0;

      for (var n = 0; n < allNodes.length; n++) {
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
      var i = 1;

      for (var sib = elm.previousSibling; sib; sib = sib.previousSibling) {
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
/* 28 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
var parseBackgroundImage = function parseBackgroundImage(value) {
  if (value === 'none') {
    return;
  }

  var urlMatches = value.match(/^url\("(.+)"\)$/i);
  var linearGradientMatches = value.match(/^linear-gradient\((.+)\)$/i);

  if (urlMatches && urlMatches.length === 2) {
    // Image
    return {
      type: 'Image',
      value: urlMatches[1]
    };
  } else if (linearGradientMatches && linearGradientMatches.length === 2) {
    // Linear gradient
    var linearGradientConfig = parseLinearGradient(linearGradientMatches[1]);

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
var parseLinearGradient = function parseLinearGradient(value) {
  var parts = [];
  var currentPart = [];
  var i = 0;
  var skipComma = false;

  // There can be commas in colors, carefully break apart the value
  while (i < value.length) {
    var char = value.substr(i, 1);

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
    var angle = parts[0],
        stops = parts.slice(1);


    return {
      angle: angle,
      stops: stops
    };
  }

  // Syntax is wrong
  return null;
};

/**
 * @param {string} backgroundSize value of background-size CSS property
 * @param {{width: number, height: number}} imageSize natural size of the image
 * @param {{width: number, height: number}} containerSize size of the container
 * @return {{width: number, height: number}} actual image size
 */
var getActualImageSize = function getActualImageSize(backgroundSize, imageSize, containerSize) {
  var width = void 0,
      height = void 0;

  // sanity check
  if (imageSize.width === 0 || imageSize.height === 0 || containerSize.width === 0 || containerSize.height === 0) {
    width = 0;
    height = 0;
  } else if (backgroundSize === 'cover') {
    if (imageSize.width > imageSize.height) {
      height = containerSize.height;
      width = height / imageSize.height * imageSize.width;
    } else {
      width = containerSize.width;
      height = width / imageSize.width * imageSize.height;
    }
  } else if (backgroundSize === 'contain') {
    if (imageSize.width > imageSize.height) {
      width = containerSize.width;
      height = width / imageSize.width * imageSize.height;
    } else {
      height = containerSize.height;
      width = height / imageSize.height * imageSize.width;
    }
  } else if (backgroundSize === 'auto') {
    width = imageSize.width;
    height = imageSize.height;
  } else {
    // we currently don't support multiple backgrounds
    var _backgroundSize$split = backgroundSize.split(','),
        _backgroundSize$split2 = _slicedToArray(_backgroundSize$split, 1),
        singleBackgroundSize = _backgroundSize$split2[0];

    var _singleBackgroundSize = singleBackgroundSize.trim().split(' '),
        _singleBackgroundSize2 = _slicedToArray(_singleBackgroundSize, 2),
        backgroundSizeWidth = _singleBackgroundSize2[0],
        backgroundSizeHeight = _singleBackgroundSize2[1];

    if (backgroundSizeWidth === 'auto' || backgroundSizeWidth === undefined) {
      backgroundSizeWidth = null;
    } else if (backgroundSizeWidth.endsWith('%')) {
      backgroundSizeWidth = parseFloat(backgroundSizeWidth) / 100 * containerSize.width;
    } else if (backgroundSizeWidth.endsWith('px')) {
      backgroundSizeWidth = parseFloat(backgroundSizeWidth);
    }

    if (backgroundSizeHeight === 'auto' || backgroundSizeHeight === undefined) {
      backgroundSizeHeight = null;
    } else if (backgroundSizeHeight.endsWith('%')) {
      backgroundSizeHeight = parseFloat(backgroundSizeHeight) / 100 * containerSize.height;
    } else if (backgroundSizeHeight.endsWith('px')) {
      backgroundSizeHeight = parseFloat(backgroundSizeHeight);
    }

    if (backgroundSizeWidth !== null && backgroundSizeHeight === null) {
      width = backgroundSizeWidth;
      height = width / imageSize.width * imageSize.height;
    } else if (backgroundSizeWidth === null && backgroundSizeHeight !== null) {
      height = backgroundSizeHeight;
      width = height / imageSize.height * imageSize.width;
    } else if (backgroundSizeWidth !== null && backgroundSizeHeight !== null) {
      width = backgroundSizeWidth;
      height = backgroundSizeHeight;
    }
  }

  return {
    width: width,
    height: height
  };
};

exports.parseBackgroundImage = parseBackgroundImage;
exports.getActualImageSize = getActualImageSize;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var splitShadowString = function splitShadowString(boxShadow) {
  var shadowStrings = boxShadow.split(/x, |t, /).map(function (str, i, array) {
    if (i + 1 < array.length) {
      if (str.match(/inse$/)) {
        return str + 't';
      } else if (str.match(/p$/)) {
        return str + 'x';
      }
    }
    return str;
  }).filter(function (shadow) {
    return shadow.length > 0;
  });

  return shadowStrings;
};

var shadowStringToObject = function shadowStringToObject(shadowString) {
  var matches = shadowString.match(/^([a-z0-9#., ()]+) ([-]?[0-9.]+)px ([-]?[0-9.]+)px ([-]?[0-9.]+)px ([-]?[0-9.]+)px ?(inset)?$/i);

  if (matches && matches.length === 7) {
    return {
      color: matches[1],
      offsetX: parseFloat(matches[2]),
      offsetY: parseFloat(matches[3]),
      blur: parseFloat(matches[4]),
      spread: parseFloat(matches[5]),
      inset: matches[6] !== undefined
    };
  }
};

exports.splitShadowString = splitShadowString;
exports.shadowStringToObject = shadowStringToObject;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSVGString = getSVGString;
// based on https://www.w3.org/TR/SVG2/styling.html and defaults taken from Chrome
var SVG_STYLE_PROPERTIES = [
//name, default value
['cx', '0px'], ['cy', '0px'], ['height', 'auto'], ['width', 'auto'], ['x', '0px'], ['y', '0px'], ['r', '0px'], ['rx', 'auto'], ['ry', 'auto'], ['d', 'none'], ['fill', 'rgb(0, 0, 0)'], ['transform', 'none'], ['alignment-baseline', 'auto'], ['baseline-shift', '0px'], ['clip', 'auto'], ['clip-path', 'none'], ['clip-rule', 'nonzero'], ['color', 'rgb(0, 0, 0)'], ['color-interpolation', 'sRGB'], ['color-interpolation-filters', 'linearRGB'], ['color-rendering', 'auto'], ['cursor', 'auto'], ['direction', 'ltr'], ['display', 'inline'], ['dominant-baseline', 'auto'], ['fill-opacity', '1'], ['fill-rule', 'nonzero'], ['filter', 'none'], ['flood-color', 'rgb(0, 0, 0)'], ['flood-opacity', '1'], ['font-family', 'Times'], ['font-size', '16px'], ['font-size-adjust', 'none'], ['font-stretch', '100%'], ['font-style', 'normal'], ['font-variant', 'normal'], ['font-weight', '400'], ['glyph-orientation-horizontal', undefined], ['glyph-orientation-vertical', undefined], ['image-rendering', 'auto'], ['letter-spacing', 'normal'], ['lighting-color', 'rgb(255, 255, 255)'], ['marker-end', 'none'], ['marker-mid', 'none'], ['marker-start', 'none'], ['mask', 'none'], ['opacity', '1'], ['overflow', 'visible'], ['pointer-events', 'auto'], ['shape-rendering', 'auto'], ['solid-color', undefined], ['solid-opacity', undefined], ['stop-color', 'rgb(0, 0, 0)'], ['stop-opacity', '1'], ['stroke', 'none'], ['stroke-dasharray', 'none'], ['stroke-dashoffset', '0px'], ['stroke-linecap', 'butt'], ['stroke-linejoin', 'miter'], ['stroke-miterlimit', '4'], ['stroke-opacity', '1'], ['stroke-width', '1px'], ['text-anchor', 'start'], ['text-decoration', 'none solid rgb(0, 0, 0)'], ['text-overflow', 'clip'], ['text-rendering', 'auto'], ['unicode-bidi', 'normal'], ['vector-effect', 'none'], ['visibility', 'visible'], ['white-space', 'normal'], ['word-spacing', '0px'], ['writing-mode', 'horizontal-tb']];

function inlineStyles(node) {
  var styles = getComputedStyle(node);

  SVG_STYLE_PROPERTIES.forEach(function (prop) {
    var propName = prop[0];
    var propDefaultValue = prop[1];
    var propCurrentValue = styles[propName];
    var propAttributeValue = node.getAttribute(propName);

    if (propCurrentValue !== propDefaultValue && propCurrentValue !== propAttributeValue) {
      node.style[propName] = propCurrentValue;
    }
  });
}

function getUseReplacement(node) {
  var href = node.href.baseVal;
  // TODO this will only work for internal references
  var refNode = null;
  var resultNode = null;

  try {
    refNode = document.querySelector(href);
  } catch (e) {
    // ignore
  }

  if (refNode) {
    if (refNode instanceof SVGSymbolElement) {
      resultNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      Array.from(refNode.attributes).forEach(function (attr) {
        return resultNode.setAttribute(attr.name, attr.value);
      });
      Array.from(refNode.cloneNode(true).children).forEach(function (child) {
        return resultNode.appendChild(child);
      });
    } else {
      resultNode = refNode.cloneNode(true);
    }
  }

  return resultNode;
}

// NOTE: this code modifies the original node by inlining all styles
// this is not ideal and probably fixable
function getSVGString(svgNode) {
  var queue = Array.from(svgNode.children);

  while (queue.length) {
    var node = queue.pop();

    if (!(node instanceof SVGElement) || node instanceof SVGDefsElement || node instanceof SVGTitleElement) {
      continue;
    }

    if (node instanceof SVGUseElement) {
      var replacement = getUseReplacement(node);

      if (replacement) {
        node.parentNode.replaceChild(replacement, node);
        queue.push(replacement);
      }
      continue;
    }

    inlineStyles(node);

    Array.from(node.children).forEach(function (child) {
      return queue.push(child);
    });
  }

  return svgNode.outerHTML;
}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupBCR = getGroupBCR;
// TODO: should probably also take into account children of each node
function getGroupBCR(nodes) {
  var groupBCR = nodes.reduce(function (result, node) {
    var bcr = node.getBoundingClientRect();
    var left = bcr.left,
        top = bcr.top,
        right = bcr.right,
        bottom = bcr.bottom;

    var width = bcr.right - bcr.left;
    var height = bcr.bottom - bcr.top;

    if (width === 0 && height === 0) {
      return result;
    }

    if (!result) {
      return { left: left, top: top, right: right, bottom: bottom };
    }

    if (left < result.left) {
      result.left = left;
    }

    if (top < result.top) {
      result.top = top;
    }

    if (right > result.right) {
      result.right = right;
    }

    if (bottom > result.bottom) {
      result.bottom = bottom;
    }

    return result;
  }, null);

  if (groupBCR === null) {
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0
    };
  }

  return {
    left: groupBCR.left,
    top: groupBCR.top,
    right: groupBCR.right,
    bottom: groupBCR.bottom,
    width: groupBCR.right - groupBCR.left,
    height: groupBCR.bottom - groupBCR.top
  };
}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixWhiteSpace = fixWhiteSpace;
function fixWhiteSpace(text, whiteSpace) {
  switch (whiteSpace) {
    case 'normal':
    case 'nowrap':
      return text.trim().replace(/\n/g, ' ') // replace newline characters with space
      .replace(/\s+/g, ' '); // collapse whitespace
    case 'pre-line':
      return text.replace(/(^[^\S\n]+)|([^\S\n]+$)/g, '') // trim but leave \n
      .replace(/[^\S\n]+/g, ' ') // collapse whitespace (except \n)
      .replace(/[^\S\n]?\n[^\S\n]?/g, '\n'); // remove whitespace before & after \n
    default:
    // pre, pre-wrap
  }

  return text;
}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = pseudoToElement;
function pseudoToElement() {

  // after and before to element
  var css = '.before-reset::before, .after-reset::after { content: none !important; }';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');

  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);

  var allElements = document.getElementsByTagName('*');

  Array.from(allElements).forEach(function (elm) {
    var elementBeforeStyles = getComputedStyle(elm, ':before');
    var elementAfterStyles = getComputedStyle(elm, ':after');
    var elementBeforeContent = elementBeforeStyles.content;
    var elementAfterContent = elementAfterStyles.content;

    if (elementBeforeContent) {
      var virtualBefore = document.createElement('span');

      virtualBefore.setAttribute('style', elementBeforeStyles.cssText);
      virtualBefore.innerHTML = elementBeforeStyles.content.split('"').join('');
      elm.className += ' before-reset';
      elm.prepend(virtualBefore);
    }

    if (elementAfterContent) {
      var virtualAfter = document.createElement('span');

      virtualAfter.setAttribute('style', elementAfterStyles.cssText);
      virtualAfter.innerHTML = elementAfterStyles.content.split('"').join('');
      elm.className += ' after-reset';
      elm.appendChild(virtualAfter);
    }
  });

  // value and placeholder in inputs to element
  function selectorsToElements(selectors) {
    var elements = [];
    selectors.forEach(function (selector) {
      elements = elements.concat(Array.from(document.querySelectorAll(selector)));
    });
    return elements;
  }

  var selectors = ['input[type=submit]', 'input[type=text]', 'input[type=number]', 'input[type=tel]', 'input[type=url]', 'input[type=password]', 'input[type=email]', 'input[type=search]', 'select', 'textarea'];
  var allFields = selectorsToElements(selectors);

  Array.from(allFields).forEach(function (elm) {
    var elementStyles = getComputedStyle(elm);
    var elementValue = elm.value;
    var elementPlaceholder = elm.placeholder;
    var virtualField = elm.nodeName === 'textarea' ? document.createElement('div') : document.createElement('button');

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
  });
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startPicker = startPicker;
exports.stopPicker = stopPicker;

var _sendToHost = __webpack_require__(35);

var _sendToHost2 = _interopRequireDefault(_sendToHost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var guide = document.createElement('div');
guide.classList.add('guide');
guide.style.position = 'fixed';
guide.style.border = '1px solid #3880ff';
guide.style.zIndex = '99999999';
guide.style.pointerEvents = 'none';

var eventCover = document.createElement('div');
eventCover.classList.add('eventCover');
eventCover.style.position = 'fixed';
eventCover.style.left = 0;
eventCover.style.top = 0;
eventCover.style.right = 0;
eventCover.style.bottom = 0;
eventCover.style.zIndex = '99999999';
eventCover.style.pointerEvents = 'none';

document.body.appendChild(guide);
document.body.appendChild(eventCover);

var nowElement = void 0;

function windowResizeInPicked() {
  (0, _sendToHost2['default'])('window-resize');
}

function windowScrollInPicked() {
  (0, _sendToHost2['default'])('window-scroll');
}

function pickerMouseOver(e) {
  nowElement = e.target;

  var _nowElement$getBoundi = nowElement.getBoundingClientRect(),
      width = _nowElement$getBoundi.width,
      height = _nowElement$getBoundi.height,
      top = _nowElement$getBoundi.top,
      left = _nowElement$getBoundi.left;

  guide.style.width = width + 'px';
  guide.style.height = height + 'px';
  guide.style.top = top + 'px';
  guide.style.left = left + 'px';
}

function pickerMouseDown(e) {
  window.htmlToSketch.selectedElement = nowElement;
  eventCover.style.pointerEvents = 'auto';
  eventCover.style.visibility = 'visible';
  guide.style.pointerEvents = 'auto';
  guide.style.background = 'rgba(0, 0, 0, 0)';
  guide.style.outline = '20000px solid rgba(0, 0, 0, 0.4)';
  document.body.removeEventListener('mouseover', pickerMouseOver);
  document.body.removeEventListener('mousedown', pickerMouseDown);
  (0, _sendToHost2['default'])('picker-picked');
  window.addEventListener('resize', windowResizeInPicked);
  window.addEventListener('scroll', windowScrollInPicked);
}

function startPicker() {
  guide.style.visibility = 'visible';
  document.body.addEventListener('mouseover', pickerMouseOver);
  document.body.addEventListener('mousedown', pickerMouseDown);
}

function stopPicker() {
  window.h2s_SelectedElement = false;
  guide.style.left = '-9999999px';
  guide.style.visibility = 'hidden';
  guide.style.outline = 0;
  guide.style.pointerEvents = 'none';
  eventCover.style.pointerEvents = 'none';
  eventCover.style.visibility = 'hidden';
  document.body.removeEventListener('mouseover', pickerMouseOver);
  document.body.removeEventListener('mousedown', pickerMouseDown);
  window.removeEventListener('resize', windowResizeInPicked);
  window.removeEventListener('scroll', windowScrollInPicked);
}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = window.htmlToSketch.sendToHost;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = findFont;
// INPUT: -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif
// OUTPUT: Helvetica Neue
function getFirstFont(fonts, skipSystemFonts) {
  var regularFont = undefined;
  var systemFont = undefined;

  fonts.split(',').forEach(function (font) {
    font = font.trim().replace(/^["']+|["']+$/g, '');
    if (font === '') {
      return;
    }

    // See above for a note on OS-specific fonts
    if (!regularFont && (!skipSystemFonts || SYSTEM_FONTS.indexOf(font) < 0)) {
      regularFont = font;
    }
    if (!systemFont) {
      systemFont = font;
    }
  });

  if (regularFont) {
    return regularFont;
  }

  if (systemFont) {
    return systemFont;
  }

  return '-apple-system';
}

function findFont() {
  var allElement = window.document.querySelectorAll('*');
  var fontFamilies = Array.from(allElement).reduce(function (acc, cur) {
    var fontFamily = getFirstFont(window.getComputedStyle(cur).fontFamily);
    if (acc.indexOf(fontFamily) === -1) {
      acc.push(fontFamily);
    }
    return acc;
  }, []);
  return fontFamilies;
}

/***/ })
/******/ ]);