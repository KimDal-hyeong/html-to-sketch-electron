var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
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
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(console, global) {/* globals log */
if (!console._skpmEnabled) {
  if (true) {
    var sketchDebugger = __webpack_require__(4)
    var actions = __webpack_require__(6)

    function getStack() {
      return sketchDebugger.prepareStackTrace(new Error().stack)
    }
  }

  console._skpmPrefix = 'console> '

  function logEverywhere(type, args) {
    var values = Array.prototype.slice.call(args)

    // log to the System logs
    values.forEach(function(v) {
      try {
        log(console._skpmPrefix + indentString() + v)
      } catch (e) {
        log(v)
      }
    })

    if (true) {
      if (!sketchDebugger.isDebuggerPresent()) {
        return
      }

      var payload = {
        ts: Date.now(),
        type: type,
        plugin: String(context.scriptPath),
        values: values.map(sketchDebugger.prepareValue),
        stack: getStack(),
      }

      sketchDebugger.sendToDebugger(actions.ADD_LOG, payload)
    }
  }

  var indentLevel = 0
  function indentString() {
    var indent = ''
    for (var i = 0; i < indentLevel; i++) {
      indent += '  '
    }
    if (indentLevel > 0) {
      indent += '| '
    }
    return indent
  }

  var oldGroup = console.group

  console.group = function() {
    // log to the JS context
    oldGroup && oldGroup.apply(this, arguments)
    indentLevel += 1
    if (true) {
      sketchDebugger.sendToDebugger(actions.GROUP, {
        plugin: String(context.scriptPath),
        collapsed: false,
      })
    }
  }

  var oldGroupCollapsed = console.groupCollapsed

  console.groupCollapsed = function() {
    // log to the JS context
    oldGroupCollapsed && oldGroupCollapsed.apply(this, arguments)
    indentLevel += 1
    if (true) {
      sketchDebugger.sendToDebugger(actions.GROUP, {
        plugin: String(context.scriptPath),
        collapsed: true
      })
    }
  }

  var oldGroupEnd = console.groupEnd

  console.groupEnd = function() {
    // log to the JS context
    oldGroupEnd && oldGroupEnd.apply(this, arguments)
    indentLevel -= 1
    if (indentLevel < 0) {
      indentLevel = 0
    }
    if (true) {
      sketchDebugger.sendToDebugger(actions.GROUP_END, {
        plugin: context.scriptPath,
      })
    }
  }

  var counts = {}
  var oldCount = console.count

  console.count = function(label) {
    label = typeof label !== 'undefined' ? label : 'Global'
    counts[label] = (counts[label] || 0) + 1

    // log to the JS context
    oldCount && oldCount.apply(this, arguments)
    return logEverywhere('log', [label + ': ' + counts[label]])
  }

  var timers = {}
  var oldTime = console.time

  console.time = function(label) {
    // log to the JS context
    oldTime && oldTime.apply(this, arguments)

    label = typeof label !== 'undefined' ? label : 'default'
    if (timers[label]) {
      return logEverywhere('warn', ['Timer "' + label + '" already exists'])
    }

    timers[label] = Date.now()
    return
  }

  var oldTimeEnd = console.timeEnd

  console.timeEnd = function(label) {
    // log to the JS context
    oldTimeEnd && oldTimeEnd.apply(this, arguments)

    label = typeof label !== 'undefined' ? label : 'default'
    if (!timers[label]) {
      return logEverywhere('warn', ['Timer "' + label + '" does not exist'])
    }

    var duration = Date.now() - timers[label]
    delete timers[label]
    return logEverywhere('log', [label + ': ' + (duration / 1000) + 'ms'])
  }

  var oldLog = console.log

  console.log = function() {
    // log to the JS context
    oldLog && oldLog.apply(this, arguments)
    return logEverywhere('log', arguments)
  }

  var oldWarn = console.warn

  console.warn = function() {
    // log to the JS context
    oldWarn && oldWarn.apply(this, arguments)
    return logEverywhere('warn', arguments)
  }

  var oldError = console.error

  console.error = function() {
    // log to the JS context
    oldError && oldError.apply(this, arguments)
    return logEverywhere('error', arguments)
  }

  var oldAssert = console.assert

  console.assert = function(condition, text) {
    // log to the JS context
    oldAssert && oldAssert.apply(this, arguments)
    if (!condition) {
      return logEverywhere('assert', [text])
    }
    return undefined
  }

  var oldInfo = console.info

  console.info = function() {
    // log to the JS context
    oldInfo && oldInfo.apply(this, arguments)
    return logEverywhere('info', arguments)
  }

  var oldClear = console.clear

  console.clear = function() {
    oldClear && oldClear()
    if (true) {
      return sketchDebugger.sendToDebugger(actions.CLEAR_LOGS)
    }
  }

  console._skpmEnabled = true

  // polyfill the global object
  var commonjsGlobal = typeof global !== 'undefined' ? global : this

  commonjsGlobal.console = console
}

module.exports = console

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(3)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appVersionSupported = appVersionSupported;
exports.toSJSON = toSJSON;
exports.fromSJSON = fromSJSON;
exports.fromSJSONDictionary = fromSJSONDictionary;

var _invariant = __webpack_require__(7);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
This is pretty simplistic at the moment, since it doesn't handle references. More work is needed to actually
*/

/*
Versions based on discussion info: http://sketchplugins.com/d/316-sketch-version
*/
// Internal Sketch Version (ex: 95 => v47 and below)
var SKETCH_HIGHEST_COMPATIBLE_VERSION = '95';
// External Sketch Version
var SKETCH_LOWEST_COMPATIBLE_APP_VERSION = '43';

var envOK = typeof MSJSONDataArchiver !== 'undefined' && typeof MSJSONDictionaryUnarchiver !== 'undefined';

function appVersion() {
  if (typeof NSBundle !== 'undefined') {
    return NSBundle.mainBundle().infoDictionary().CFBundleShortVersionString;
  } else {
    return undefined;
  }
}

var _checkEnv = function _checkEnv() {
  return (0, _invariant2.default)(envOK, 'sketchapp-json-plugin needs to run within Sketch v' + SKETCH_LOWEST_COMPATIBLE_APP_VERSION + '+. You are running ' + appVersion());
};

function appVersionSupported() {
  return envOK;
}

// Converts an object, eg from context.selection into its JSON string representation
function toSJSON(sketchObject) {
  _checkEnv();
  if (!sketchObject) {
    return null;
  }
  var imm = sketchObject.immutableModelObject();
  return MSJSONDataArchiver.archiveStringWithRootObject_error_(imm, null);
}

function fromSJSON(json) {
  _checkEnv();
  var dict = JSON.parse(json);
  if (!dict) return null;
  if (dict._class.length <= 0) {
    return null;
  }
  return fromSJSONDictionary(dict);
}

// Takes a Sketch JSON tree and turns it into a native object. May throw on invalid data
function fromSJSONDictionary(jsonTree) {
  _checkEnv();
  var decoded = MSJSONDictionaryUnarchiver.unarchiveObjectFromDictionary_asVersion_corruptionDetected_error(jsonTree, SKETCH_HIGHEST_COMPATIBLE_VERSION, null, null);
  var mutableClass = decoded.class().mutableClass();
  return mutableClass.alloc().initWithImmutableModelObject(decoded);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(console) {Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = asketch2sketch;

var _sketchappJsonPlugin = __webpack_require__(1);

var _fixFont = __webpack_require__(8);

var _fixImageFill = __webpack_require__(16);

var _fixImageFill2 = _interopRequireDefault(_fixImageFill);

var _makeSVGLayer = __webpack_require__(17);

var _makeSVGLayer2 = _interopRequireDefault(_makeSVGLayer);

var _pageAsketch = __webpack_require__(18);

var _pageAsketch2 = _interopRequireDefault(_pageAsketch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function removeExistingLayers(context) {
  if (context.containsLayers()) {
    var loop = context.children().objectEnumerator();
    var currLayer = loop.nextObject();

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
    (0, _fixFont.fixTextLayer)(layer);
  } else {
    (0, _fixImageFill2['default'])(layer);
  }

  if (layer.layers) {
    layer.layers.forEach(fixLayer);
  }
}

function getNativeLayer(layer) {
  if (layer['_class'] === 'svg') {
    return (0, _makeSVGLayer2['default'])(layer);
  } else {
    fixLayer(layer);
    return (0, _sketchappJsonPlugin.fromSJSONDictionary)(layer);
  }
}

function removeSharedTextStyles(document) {
  document.documentData().layerTextStyles().setObjects([]);
}

function addSharedTextStyle(document, style) {
  var textStyles = document.documentData().layerTextStyles();

  textStyles.addSharedStyleWithName_firstInstance(style.name, (0, _sketchappJsonPlugin.fromSJSONDictionary)(style.value));
}

function removeSharedColors(document) {
  var assets = document.documentData().assets();

  assets.removeAllColors();
}

function addSharedColor(document, colorJSON) {
  var assets = document.documentData().assets();
  var color = (0, _sketchappJsonPlugin.fromSJSONDictionary)(colorJSON);

  assets.addColor(color);
}

function asketch2sketch(context) {
  var document = context.document;
  var page = document.currentPage();

  removeExistingLayers(page);

  page.name = _pageAsketch2['default'].name;

  _pageAsketch2['default'].layers.forEach(function (layer) {
    var nativeLayer = getNativeLayer(layer);

    try {
      page.addLayer(nativeLayer);
    } catch (e) {
      console.log('Layer couldn\'t be created');
      console.log(e);
      console.log(layer);
    }
  });

  console.log('Layers added: ' + _pageAsketch2['default'].layers.length);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign, no-var, vars-on-top, prefer-template, prefer-arrow-callback, func-names, prefer-destructuring, object-shorthand */
var remoteWebview = __webpack_require__(5)

module.exports.identifier = 'skpm.debugger'

function toArray(object) {
  if (Array.isArray(object)) {
    return object
  }
  var arr = []
  for (var j = 0; j < object.count(); j += 1) {
    arr.push(object.objectAtIndex(j))
  }
  return arr
}

module.exports.prepareStackTrace = function(stackTrace) {
  var stack = stackTrace.split('\n')
  stack = stack.map(function(s) {
    return s.replace(/\sg/, '')
  })

  // pop the last 2 frames as it's ours here
  stack.splice(0, 2)

  stack = stack.map(function(entry) {
    var line = null
    var column = null
    var file = null
    var split = entry.split('@')
    var fn = split[0]
    var filePath = split[1]

    if (filePath) {
      split = filePath.split(':')
      filePath = split[0]
      line = split[1]
      column = split[2]
      file = filePath.split('/')
      file = file[file.length - 1]
    }
    return {
      fn: fn,
      file: file,
      filePath: filePath,
      line: line,
      column: column,
    }
  })

  return stack
}

function prepareArray(array, skipMocha) {
  return array.map(function(i) {
    return module.exports.prepareValue(i, skipMocha)
  })
}

module.exports.prepareObject = function(object, skipMocha) {
  const deep = {}
  Object.keys(object).forEach(function(key) {
    deep[key] = module.exports.prepareValue(object[key], skipMocha)
  })
  return deep
}

function getName(x) {
  return {
    type: 'String',
    primitive: 'String',
    value: String(x.name()),
  }
}

function getSelector(x) {
  return {
    type: 'String',
    primitive: 'String',
    value: String(x.selector()),
  }
}

function introspectMochaObject(value) {
  var mocha = value.class().mocha()
  var introspection = {
    properties: {
      type: 'Array',
      primitive: 'Array',
      value: toArray(mocha.propertiesWithAncestors()).map(getName),
    },
    classMethods: {
      type: 'Array',
      primitive: 'Array',
      value: toArray(mocha.classMethodsWithAncestors()).map(getSelector),
    },
    instanceMethods: {
      type: 'Array',
      primitive: 'Array',
      value: toArray(mocha.instanceMethodsWithAncestors()).map(getSelector),
    },
    protocols: {
      type: 'Array',
      primitive: 'Array',
      value: toArray(mocha.protocolsWithAncestors()).map(getName),
    },
  }
  // if (mocha.treeAsDictionary) {
  //   introspection.treeAsDictionary = mocha.treeAsDictionary()
  // }
  return introspection
}

module.exports.prepareValue = function prepareValue(value, skipMocha) {
  var type = 'String'
  var primitive = 'String'
  const typeOf = typeof value
  if (value instanceof Error) {
    type = 'Error'
    primitive = 'Error'
    value = {
      message: value.message,
      name: value.name,
      stack: module.exports.prepareStackTrace(value.stack),
    }
  } else if (Array.isArray(value)) {
    type = 'Array'
    primitive = 'Array'
    value = prepareArray(value, skipMocha)
  } else if (value === null || value === undefined || Number.isNaN(value)) {
    type = 'Empty'
    primitive = 'Empty'
    value = String(value)
  } else if (typeOf === 'object') {
    if (value.isKindOfClass && typeof value.class === 'function') {
      type = String(value.class())
      // TODO: Here could come some meta data saved as value
      if (
        type === 'NSDictionary' ||
        type === '__NSDictionaryM' ||
        type === '__NSSingleEntryDictionaryI' ||
        type === '__NSDictionaryI' ||
        type === '__NSCFDictionary'
      ) {
        primitive = 'Object'
        value = module.exports.prepareObject(Object(value), skipMocha)
      } else if (
        type === 'NSArray' ||
        type === 'NSMutableArray' ||
        type === '__NSArrayM' ||
        type === '__NSSingleObjectArrayI' ||
        type === '__NSArray0'
      ) {
        primitive = 'Array'
        value = prepareArray(toArray(value), skipMocha)
      } else if (
        type === 'NSString' ||
        type === '__NSCFString' ||
        type === 'NSTaggedPointerString' ||
        type === '__NSCFConstantString'
      ) {
        primitive = 'String'
        value = String(value)
      } else if (type === '__NSCFNumber' || type === 'NSNumber') {
        primitive = 'Number'
        value = 0 + value
      } else if (type === 'MOStruct') {
        type = String(value.name())
        primitive = 'Object'
        value = value.memberNames().reduce(function(prev, k) {
          prev[k] = module.exports.prepareValue(value[k], skipMocha)
          return prev
        }, {})
      } else if (value.class().mocha && !skipMocha) {
        primitive = 'Mocha'
        value = introspectMochaObject(value)
      } else {
        primitive = 'Unknown'
        value = type
      }
    } else {
      type = 'Object'
      primitive = 'Object'
      value = module.exports.prepareObject(value, skipMocha)
    }
  } else if (typeOf === 'function') {
    type = 'Function'
    primitive = 'Function'
    value = String(value)
  } else if (value === true || value === false) {
    type = 'Boolean'
    primitive = 'Boolean'
  } else if (typeOf === 'number') {
    primitive = 'Number'
    type = 'Number'
  }

  return {
    value,
    type,
    primitive,
  }
}

module.exports.isDebuggerPresent = remoteWebview.isWebviewPresent.bind(
  this,
  module.exports.identifier
)

module.exports.sendToDebugger = function sendToDebugger(name, payload) {
  return remoteWebview.sendToWebview(
    module.exports.identifier,
    'sketchBridge(' +
      JSON.stringify({
        name: name,
        payload: payload,
      }) +
      ');'
  )
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* globals NSThread */

var threadDictionary = NSThread.mainThread().threadDictionary()

module.exports.isWebviewPresent = function isWebviewPresent (identifier) {
  return !!threadDictionary[identifier]
}

module.exports.sendToWebview = function sendToWebview (identifier, evalString) {
  if (!module.exports.isWebviewPresent(identifier)) {
    throw new Error('Webview ' + identifier + ' not found')
  }

  var webview = threadDictionary[identifier]
    .contentView()
    .subviews()
  webview = webview[webview.length - 1]

  return webview.stringByEvaluatingJavaScriptFromString(evalString)
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports.SET_TREE = 'elements/SET_TREE'
module.exports.SET_PAGE_METADATA = 'elements/SET_PAGE_METADATA'
module.exports.SET_LAYER_METADATA = 'elements/SET_LAYER_METADATA'
module.exports.ADD_LOG = 'logs/ADD_LOG'
module.exports.CLEAR_LOGS = 'logs/CLEAR_LOGS'
module.exports.GROUP = 'logs/GROUP'
module.exports.GROUP_END = 'logs/GROUP_END'
module.exports.TIMER_START = 'logs/TIMER_START'
module.exports.TIMER_END = 'logs/TIMER_END'
module.exports.ADD_REQUEST = 'network/ADD_REQUEST'
module.exports.SET_RESPONSE = 'network/SET_RESPONSE'
module.exports.ADD_ACTION = 'actions/ADD_ACTION'
module.exports.SET_SCRIPT_RESULT = 'playground/SET_SCRIPT_RESULT'


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixTextLayer = fixTextLayer;
exports.fixSharedTextStyle = fixSharedTextStyle;

var _utils = __webpack_require__(9);

var _sketchConstants = __webpack_require__(11);

var _sketchappJsonPlugin = __webpack_require__(1);

var _findFont = __webpack_require__(12);

var _findFont2 = _interopRequireDefault(_findFont);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// taken from https://github.com/airbnb/react-sketchapp/blob/master/src/jsonUtils/hacksForJSONImpl.js
var TEXT_ALIGN = {
  auto: _sketchConstants.TextAlignment.Left,
  left: _sketchConstants.TextAlignment.Left,
  right: _sketchConstants.TextAlignment.Right,
  center: _sketchConstants.TextAlignment.Center,
  justify: _sketchConstants.TextAlignment.Justified
};

var TEXT_DECORATION_UNDERLINE = {
  none: 0,
  underline: 1,
  double: 9
};

var TEXT_DECORATION_LINETHROUGH = {
  none: 0,
  'line-through': 1
};

// this doesn't exist in constants
var TEXT_TRANSFORM = {
  uppercase: 1,
  lowercase: 2,
  initial: 0,
  inherit: 0,
  none: 0,
  capitalize: 0
};

function makeParagraphStyle(textStyle) {
  var pStyle = NSMutableParagraphStyle.alloc().init();

  if (textStyle.lineHeight !== undefined) {
    pStyle.minimumLineHeight = textStyle.lineHeight;
    pStyle.lineHeightMultiple = 1.0;
    pStyle.maximumLineHeight = textStyle.lineHeight;
  }

  if (textStyle.textAlign) {
    pStyle.alignment = TEXT_ALIGN[textStyle.textAlign];
  }

  return pStyle;
}

function encodeSketchJSON(sketchObj) {
  var encoded = (0, _sketchappJsonPlugin.toSJSON)(sketchObj);

  return JSON.parse(encoded);
}

// This shouldn't need to call into Sketch, but it does currently, which is bad for perf :(
function createStringAttributes(textStyles) {
  var font = (0, _findFont2['default'])(textStyles);

  var color = (0, _utils.makeColorFromCSS)(textStyles.color || 'black');

  var attribs = {
    MSAttributedStringFontAttribute: font.fontDescriptor(),
    NSFont: font,
    NSParagraphStyle: makeParagraphStyle(textStyles),
    NSColor: NSColor.colorWithDeviceRed_green_blue_alpha(color.red, color.green, color.blue, color.alpha),
    NSUnderline: TEXT_DECORATION_UNDERLINE[textStyles.textDecoration] || 0,
    NSStrikethrough: TEXT_DECORATION_LINETHROUGH[textStyles.textDecoration] || 0
  };

  if (textStyles.letterSpacing !== undefined) {
    attribs.NSKern = textStyles.letterSpacing;
  }

  if (textStyles.textTransform !== undefined) {
    attribs.MSAttributedStringTextTransformAttribute = TEXT_TRANSFORM[textStyles.textTransform] * 1;
  }

  return attribs;
}

function createAttributedString(textNode) {
  var content = textNode.content,
      textStyles = textNode.textStyles;


  var attribs = createStringAttributes(textStyles);

  return NSAttributedString.attributedStringWithString_attributes_(content, attribs);
}

function makeEncodedAttributedString(textNodes) {
  var fullStr = NSMutableAttributedString.alloc().init();

  textNodes.forEach(function (textNode) {
    var newString = createAttributedString(textNode);

    fullStr.appendAttributedString(newString);
  });

  var encodedAttribStr = MSAttributedString.encodeAttributedString(fullStr);

  var msAttribStr = MSAttributedString.alloc().initWithEncodedAttributedString(encodedAttribStr);

  return encodeSketchJSON(msAttribStr);
}

function makeTextStyle(textStyle) {
  var pStyle = makeParagraphStyle(textStyle);

  var font = (0, _findFont2['default'])(textStyle);

  var color = (0, _utils.makeColorFromCSS)(textStyle.color || 'black');

  var value = {
    _class: 'textStyle',
    encodedAttributes: {
      MSAttributedStringFontAttribute: encodeSketchJSON(font.fontDescriptor()),
      NSFont: font,
      NSColor: encodeSketchJSON(NSColor.colorWithDeviceRed_green_blue_alpha(color.red, color.green, color.blue, color.alpha)),
      NSParagraphStyle: encodeSketchJSON(pStyle),
      NSKern: textStyle.letterSpacing || 0,
      MSAttributedStringTextTransformAttribute: TEXT_TRANSFORM[textStyle.textTransform || 'initial'] * 1
    }
  };

  return {
    _class: 'style',
    sharedObjectID: (0, _utils.generateID)(),
    miterLimit: 10,
    startDecorationType: 0,
    endDecorationType: 0,
    textStyle: value
  };
}

function fixTextLayer(layer) {
  layer.attributedString = makeEncodedAttributedString([{ content: layer.text, textStyles: layer.style }]);
  delete layer.style;
  delete layer.text;
}

function fixSharedTextStyle(sharedStyle) {
  sharedStyle.value = makeTextStyle(sharedStyle.style);
  delete sharedStyle.style;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeColorFromCSS = undefined;
exports.generateID = generateID;

var _normalizeCssColor = __webpack_require__(10);

var _normalizeCssColor2 = _interopRequireDefault(_normalizeCssColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var lut = [];

for (var i = 0; i < 256; i += 1) {
  lut[i] = (i < 16 ? '0' : '') + i.toString(16);
}

// Hack (http://stackoverflow.com/a/21963136)
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

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(console) {Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashStyle = __webpack_require__(13);

var _hashStyle2 = _interopRequireDefault(_hashStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Font displayed if San Francisco fonts are not found
var APPLE_BROKEN_SYSTEM_FONT = '.AppleSystemUIFont';

// this borrows heavily from react-native's RCTFont class
// thanks y'all
// https://github.com/facebook/react-native/blob/master/React/Views/RCTFont.mm

// taken from https://github.com/airbnb/react-sketchapp/blob/master/src/utils/findFont.js
var FONT_STYLES = {
  normal: false,
  italic: true,
  oblique: true
};

var FONT_WEIGHTS = {
  normal: NSFontWeightRegular,
  bold: NSFontWeightBold,
  '100': NSFontWeightUltraLight,
  '200': NSFontWeightThin,
  '300': NSFontWeightLight,
  '400': NSFontWeightRegular,
  '500': NSFontWeightMedium,
  '600': NSFontWeightSemibold,
  '700': NSFontWeightBold,
  '800': NSFontWeightHeavy,
  '900': NSFontWeightBlack
};

var isItalicFont = function isItalicFont(font) {
  var traits = font.fontDescriptor().objectForKey(NSFontTraitsAttribute);
  var symbolicTraits = traits[NSFontSymbolicTrait].unsignedIntValue();

  return (symbolicTraits & NSFontItalicTrait) !== 0;
};

var isCondensedFont = function isCondensedFont(font) {
  var traits = font.fontDescriptor().objectForKey(NSFontTraitsAttribute);
  var symbolicTraits = traits[NSFontSymbolicTrait].unsignedIntValue();

  return (symbolicTraits & NSFontCondensedTrait) !== 0;
};

var weightOfFont = function weightOfFont(font) {
  var traits = font.fontDescriptor().objectForKey(NSFontTraitsAttribute);

  var weight = traits[NSFontWeightTrait].doubleValue();

  if (weight === 0.0) {
    var weights = Object.keys(FONT_WEIGHTS);

    for (var i = 0; i < weights.length; i += 1) {
      var w = weights[i];

      if (font.fontName().toLowerCase().endsWith(w)) {
        return FONT_WEIGHTS[w];
      }
    }
  }

  return weight;
};

var fontNamesForFamilyName = function fontNamesForFamilyName(familyName) {
  var manager = NSFontManager.sharedFontManager();
  var members = NSArray.arrayWithArray(manager.availableMembersOfFontFamily(familyName));
  var results = [];

  for (var i = 0; i < members.length; i += 1) {
    results.push(members[i][0]);
  }

  return results;
};

var useCache = true;
var _cache = new Map();

var getCached = function getCached(key) {
  if (!useCache) {
    return undefined;
  }
  return _cache.get(key);
};

var findFont = function findFont(style) {
  var cacheKey = (0, _hashStyle2['default'])(style);

  var font = getCached(cacheKey);

  if (font) {
    return font;
  }
  var defaultFontFamily = NSFont.systemFontOfSize(14).familyName();
  var defaultFontWeight = NSFontWeightRegular;
  var defaultFontSize = 14;

  var fontSize = defaultFontSize;
  var fontWeight = defaultFontWeight;
  // Default to Helvetica if fonts are missing
  var familyName =
  // Must use two equals (==) for compatibility with Cocoascript
  // eslint-disable-next-line eqeqeq
  defaultFontFamily == APPLE_BROKEN_SYSTEM_FONT ? 'Helvetica' : defaultFontFamily;
  var isItalic = false;
  var isCondensed = false;

  if (style.fontSize) {
    fontSize = style.fontSize;
  }

  if (style.fontFamily) {
    familyName = style.fontFamily;
  }

  if (style.fontStyle) {
    isItalic = FONT_STYLES[style.fontStyle] || false;
  }

  if (style.fontWeight) {
    fontWeight = FONT_WEIGHTS[style.fontWeight] || NSFontWeightRegular;
  }

  var didFindFont = false;

  // Handle system font as special case. This ensures that we preserve
  // the specific metrics of the standard system font as closely as possible.
  if (familyName === defaultFontFamily || familyName === 'System') {
    font = NSFont.systemFontOfSize_weight(fontSize, fontWeight);

    if (font) {
      didFindFont = true;

      if (isItalic || isCondensed) {
        var fontDescriptor = font.fontDescriptor();
        var symbolicTraits = fontDescriptor.symbolicTraits();

        if (isItalic) {
          symbolicTraits |= NSFontItalicTrait;
        }

        if (isCondensed) {
          symbolicTraits |= NSFontCondensedTrait;
        }

        fontDescriptor = fontDescriptor.fontDescriptorWithSymbolicTraits(symbolicTraits);
        font = NSFont.fontWithDescriptor_size(fontDescriptor, fontSize);
      }
    }
  }

  var fontNames = fontNamesForFamilyName(familyName);

  // Gracefully handle being given a font name rather than font family, for
  // example: "Helvetica Light Oblique" rather than just "Helvetica".
  if (!didFindFont && fontNames.length === 0) {
    font = NSFont.fontWithName_size(familyName, fontSize);
    if (font) {
      // It's actually a font name, not a font family name,
      // but we'll do what was meant, not what was said.
      familyName = font.familyName();
      fontWeight = style.fontWeight ? fontWeight : weightOfFont(font);
      isItalic = style.fontStyle ? isItalic : isItalicFont(font);
      isCondensed = isCondensedFont(font);
    } else {
      console.log('Unrecognized font family \'' + String(familyName) + '\'');
      font = NSFont.systemFontOfSize_weight(fontSize, fontWeight);
    }
  }

  // Get the closest font that matches the given weight for the fontFamily
  var closestWeight = Infinity;

  for (var i = 0; i < fontNames.length; i += 1) {
    var match = NSFont.fontWithName_size(fontNames[i], fontSize);

    if (isItalic === isItalicFont(match) && isCondensed === isCondensedFont(match)) {
      var testWeight = weightOfFont(match);

      if (Math.abs(testWeight - fontWeight) < Math.abs(closestWeight - fontWeight)) {
        font = match;

        closestWeight = testWeight;
      }
    }
  }

  // If we still don't have a match at least return the first font in the fontFamily
  // This is to support built-in font Zapfino and other custom single font families like Impact
  if (!font) {
    if (fontNames.length > 0) {
      font = NSFont.fontWithName_size(fontNames[0], fontSize);
    }
  }

  // TODO(gold): support opentype features: small-caps & number types

  if (font) {
    _cache.set(cacheKey, font);
  }

  return font;
};

exports['default'] = findFont;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _murmur2js = __webpack_require__(14);

var _murmur2js2 = _interopRequireDefault(_murmur2js);

var _sortObjectKeys = __webpack_require__(15);

var _sortObjectKeys2 = _interopRequireDefault(_sortObjectKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var hashStyle = function hashStyle(obj) {
  return (0, _murmur2js2['default'])(JSON.stringify((0, _sortObjectKeys2['default'])(obj)));
};

exports['default'] = hashStyle;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 * JS Implementation of MurmurHash2
 *
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 *
 * @param {string} str ASCII only
 * @return {int} hash result
 */
module.exports = function murmur2js(str) {
  var l = str.length;
  var h = l;
  var i = 0;
  var k;

  while (l >= 4) {
    k = ((str.charCodeAt(i) & 0xff)) |
      ((str.charCodeAt(++i) & 0xff) << 8) |
      ((str.charCodeAt(++i) & 0xff) << 16) |
      ((str.charCodeAt(++i) & 0xff) << 24);

    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));
    k ^= k >>> 24;
    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));

    h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k;

    l -= 4;
    ++i;
  }

  switch (l) {
    case 3: h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2: h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1: h ^= (str.charCodeAt(i) & 0xff);
      h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
  }

  h ^= h >>> 13;
  h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
  h ^= h >>> 15;

  return h >>> 0;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sortObjectKeys = function sortObjectKeys(obj) {
  var keys = Object.keys(obj).sort();

  return keys.reduce(function (acc, key) {
    return Object.assign({}, acc, _defineProperty({}, key, obj[key]));
  }, {});
};

exports["default"] = sortObjectKeys;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = fixImageFill;
// taken from https://github.com/airbnb/react-sketchapp/blob/master/src/jsonUtils/hacksForJSONImpl.js
var makeImageDataFromUrl = exports.makeImageDataFromUrl = function makeImageDataFromUrl(url) {
  var fetchedData = NSData.dataWithContentsOfURL(NSURL.URLWithString(url));

  if (fetchedData) {
    var firstByte = fetchedData.subdataWithRange(NSMakeRange(0, 1)).description();

    // Check for first byte. Must use non-type-exact matching (!=).
    // 0xFF = JPEG, 0x89 = PNG, 0x47 = GIF, 0x49 = TIFF, 0x4D = TIFF
    if (
    /* eslint-disable eqeqeq */
    firstByte != '<ff>' && firstByte != '<89>' && firstByte != '<47>' && firstByte != '<49>' && firstByte != '<4d>'
    /* eslint-enable eqeqeq */
    ) {
        fetchedData = null;
      }
  }

  var image = void 0;

  if (!fetchedData) {
    // eslint-disable-next-line max-len
    var errorUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8w8DwHwAEOQHNmnaaOAAAAABJRU5ErkJggg==';

    image = NSImage.alloc().initWithContentsOfURL(NSURL.URLWithString(errorUrl));
  } else {
    image = NSImage.alloc().initWithData(fetchedData);
  }

  if (MSImageData.alloc().initWithImage_convertColorSpace !== undefined) {
    return MSImageData.alloc().initWithImage_convertColorSpace(image, false);
  }
  return MSImageData.alloc().initWithImage(image);
};

function fixImageFill(layer) {
  if (!layer.style || !layer.style.fills) {
    return;
  }

  layer.style.fills.forEach(function (fill) {
    if (!fill.image || !fill.image.url) {
      return;
    }

    var img = makeImageDataFromUrl(fill.image.url);

    var data = img.data().base64EncodedStringWithOptions(NSDataBase64EncodingEndLineWithCarriageReturn);
    var sha1 = img.sha1().base64EncodedStringWithOptions(NSDataBase64EncodingEndLineWithCarriageReturn);

    fill.image.data = { _data: data };
    fill.image.sha1 = { _data: sha1 };

    delete fill.image.url;
  });
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeSVGLayer;
function makeSVGLayer(layer) {
  var svgString = NSString.stringWithString(layer.rawSVGString);
  // eslint-disable-next-line no-undef
  var svgData = svgString.dataUsingEncoding(NSUTF8StringEncoding);
  // eslint-disable-next-line no-undef
  var svgImporter = MSSVGImporter.svgImporter();

  svgImporter.prepareToImportFromData(svgData);
  var svgLayer = svgImporter.importAsLayer();

  svgLayer.frame().setX(layer.x);
  svgLayer.frame().setY(layer.y);
  svgLayer.frame().setHeight(layer.height);
  svgLayer.frame().setWidth(layer.width);

  return svgLayer;
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {"_class":"page","do_objectID":"722eeb15-710e-402c-be48-6bb14b3b6368","exportOptions":{"_class":"exportOptions","exportFormats":[],"includedLayerIds":[],"layerOptions":0,"shouldTrim":false},"frame":{"_class":"rect","constrainProportions":false,"height":1130,"width":778,"x":0,"y":0},"hasClickThrough":true,"horizontalRulerData":{"_class":"rulerData","base":0,"guides":[]},"includeInCloudUpload":true,"isFlippedHorizontal":false,"isFlippedVertical":false,"isLocked":false,"isVisible":true,"layerListExpandedType":0,"layers":[{"_class":"shapeGroup","clippingMaskMode":0,"do_objectID":"8efe83da-0c08-47c1-b604-108ad3e67a70","exportOptions":{"_class":"exportOptions","exportFormats":[],"includedLayerIds":[],"layerOptions":0,"shouldTrim":false},"frame":{"_class":"rect","constrainProportions":false,"height":57,"width":202,"x":23,"y":61},"hasClickThrough":false,"hasClippingMask":false,"isFlippedHorizontal":false,"isFlippedVertical":false,"isLocked":false,"isVisible":true,"layerListExpandedType":0,"layers":[{"_class":"rectangle","booleanOperation":-1,"do_objectID":"f2833219-020e-454b-b1b1-9ecb7f715241","edited":false,"exportOptions":{"_class":"exportOptions","exportFormats":[],"includedLayerIds":[],"layerOptions":0,"shouldTrim":false},"fixedRadius":0,"frame":{"_class":"rect","constrainProportions":false,"height":57,"width":202,"x":0,"y":0},"hasConvertedToNewRoundCorners":true,"isFlippedHorizontal":false,"isFlippedVertical":false,"isLocked":false,"isVisible":true,"layerListExpandedType":0,"layers":[],"name":"rectangle","nameIsFixed":false,"path":{"_class":"path","isClosed":true,"pointRadiusBehaviour":1,"points":[{"_class":"curvePoint","cornerRadius":0,"curveFrom":"{0, 0}","curveMode":1,"curveTo":"{0, 0}","hasCurveFrom":false,"hasCurveTo":false,"point":"{0, 0}"},{"_class":"curvePoint","cornerRadius":0,"curveFrom":"{1, 0}","curveMode":1,"curveTo":"{1, 0}","hasCurveFrom":false,"hasCurveTo":false,"point":"{1, 0}"},{"_class":"curvePoint","cornerRadius":0,"curveFrom":"{1, 1}","curveMode":1,"curveTo":"{1, 1}","hasCurveFrom":false,"hasCurveTo":false,"point":"{1, 1}"},{"_class":"curvePoint","cornerRadius":0,"curveFrom":"{0, 1}","curveMode":1,"curveTo":"{0, 1}","hasCurveFrom":false,"hasCurveTo":false,"point":"{0, 1}"}]},"resizingConstraint":63,"resizingType":0,"rotation":0,"shouldBreakMaskChain":false}],"name":"id(\"PM_ID_ct\")/div[@class=\"header\"]/div[@class=\"special_bg\"]/div[@class=\"area_flex\"]/div[@class=\"area_logo\"]/h1[1]/a[1]/span[@class=\"naver_logo\"]","nameIsFixed":false,"resizingConstraint":63,"resizingType":0,"rotation":0,"shouldBreakMaskChain":false,"style":{"_class":"style","borders":[{"_class":"border","color":{"_class":"color","alpha":1,"blue":0.9333333333333333,"green":0,"red":0},"fillType":0,"isEnabled":true,"position":1,"thickness":0}],"contextSettings":{"_class":"graphicsContextSettings","blendMode":0,"opacity":"1"},"endDecorationType":0,"fills":[{"_class":"fill","color":{"_class":"color","alpha":0,"blue":0,"green":0,"red":0},"fillType":0,"isEnabled":true,"noiseIndex":0,"noiseIntensity":0,"patternFillType":1,"patternTileScale":1},{"_class":"fill","fillType":4,"image":{"_class":"MSJSONOriginalDataReference","_ref":"images/96dc5638-566f-4178-b608-2bc2eedeffcf","_ref_class":"MSImageData","data":{"_data":"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"}},"isEnabled":true,"noiseIndex":0,"noiseIntensity":0,"patternFillType":1,"patternTileScale":1}],"innerShadows":[],"miterLimit":10,"shadows":[],"startDecorationType":0},"windingRule":1},{"_class":"text","automaticallyDrawOnUnderlyingPath":false,"do_objectID":"887499b6-9f6e-46a8-bb6a-4954dbec5519","dontSynchroniseWithSymbol":false,"exportOptions":{"_class":"exportOptions","exportFormats":[],"includedLayerIds":[],"layerOptions":0,"shouldTrim":false},"frame":{"_class":"rect","constrainProportions":false,"height":28,"width":62.365625,"x":227.015625,"y":61},"glyphBounds":"","heightIsClipped":false,"isFlippedHorizontal":false,"isFlippedVertical":false,"isLocked":false,"isVisible":true,"layerListExpandedType":0,"layers":[],"lineSpacingBehaviour":2,"name":"네이버","nameIsFixed":false,"resizingConstraint":47,"resizingType":0,"rotation":0,"shouldBreakMaskChain":false,"style":{"color":"rgb(0, 0, 238)","fontFamily":"Dotum","fontSize":24,"fontWeight":0,"textAlign":"start","textDecoration":"solid","textTransform":"none"},"text":"네이버","textBehaviour":0}],"name":"NAVER","nameIsFixed":false,"resizingConstraint":63,"resizingType":0,"rotation":0,"shouldBreakMaskChain":false,"style":{"_class":"style","endDecorationType":0,"miterLimit":10,"startDecorationType":0},"verticalRulerData":{"_class":"rulerData","base":0,"guides":[]}}

/***/ })
/******/ ]);
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')
