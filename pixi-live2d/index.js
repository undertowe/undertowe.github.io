/*!
 * The following license applies to some parts of the software which is from Live2D Inc.
 * 
 * This is a Software Development Kit (SDK) for developing Live2D-Cubism-powered applications on WebGL.
 * The SDK contains proprietary libraries and sample projects.
 * Read this document when using the SDK.
 * 
 * 	Read Live2D License Agreement
 * 	for business
 * 	http://live2d.com/en/sdk_license_cubism
 * 
 * 	for indie
 * 	http://live2d.com/en/sdk_license_cubism_indie
 * 
 * 	After agree and accept Live2D SDK License Agreement, the content in the following folders may be placed in the server which you control
 * 
 * ==========================
 * 
 * The following license applies to pixi.js.
 * 
 * https://github.com/pixijs/pixi.js/blob/master/LICENSE
 * 
 * ==========================
 * 
 * The following license applies to the other parts of the software.
 * 
 * MIT License
 * 
 * Copyright (c) 2016 Icemic Jia <bingfeng.web@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _live2d = __webpack_require__(1);

	var _LAppModel = __webpack_require__(2);

	var _LAppModel2 = _interopRequireDefault(_LAppModel);

	var _Live2DFramework = __webpack_require__(3);

	var _MatrixStack = __webpack_require__(5);

	var _MatrixStack2 = _interopRequireDefault(_MatrixStack);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class
	 * @memberof PIXI
	 * @param modelDefine {object} Content of {name}.model.js file
	 * @param [options] {object} The optional parameters
	 * @param [options.eyeBlink=true] {boolean}
	 * @param [options.lipSyncWithSound=true] {boolean}
	 * @param [options.debugLog=false] {boolean}
	 * @param [options.debugMouseLog=false] {boolean}
	 * @param [options.randomMotion=true] {boolean}
	 * @param [options.defaultMotionGroup="idle"] {string}
	 * @param [options.priorityDefault=1] {number}
	 * @param [options.priorityForce=3] {number}
	 * @param [options.audioPlayer=3] {function} Custom audio player, pass (filename, rootPath) as parameters
	 *
	 */
	var Live2DSprite = function (_PIXI$Sprite) {
	  _inherits(Live2DSprite, _PIXI$Sprite);

	  function Live2DSprite(modelDefine, options) {
	    _classCallCheck(this, Live2DSprite);

	    var _this = _possibleConstructorReturn(this, (Live2DSprite.__proto__ || Object.getPrototypeOf(Live2DSprite)).call(this));

	    _this.interactive = true;

	    _this.platform = window.navigator.platform.toLowerCase();

	    var fullOptions = Object.assign({
	      priorityForce: 3,
	      priorityDefault: 1,
	      debugLog: false,
	      debugMouseLog: false,
	      eyeBlink: true,
	      lipSyncWithSound: true,
	      randomMotion: true,
	      defaultMotionGroup: "idle",
	      audioPlayer: null
	    }, options);

	    _live2d.Live2D.init();
	    _this.model = new _LAppModel2.default(fullOptions);

	    _this.gl = null;
	    _this.canvas = null;

	    _this.dragMgr = null; /*new L2DTargetPoint();*/
	    _this.viewMatrix = null; /*new L2DViewMatrix();*/
	    _this.projMatrix = null; /*new L2DMatrix44()*/
	    _this.deviceToScreen = null; /*new L2DMatrix44();*/

	    _this.texture = null;

	    _this.modelReady = false;
	    _this.onModelReady = [];
	    _this.modelDefine = modelDefine;

	    return _this;
	  }

	  /**
	   * @private
	   */


	  _createClass(Live2DSprite, [{
	    key: 'init',
	    value: function init() {
	      var _this2 = this;

	      var width = this.canvas.width;
	      var height = this.canvas.height;

	      this.texture = PIXI.RenderTexture.create(width, height);

	      this.canvasWidth = this.canvas.width;
	      this.canvasHeight = this.canvas.height;

	      this.dragMgr = new _Live2DFramework.L2DTargetPoint();

	      var ratio = height / width;
	      var left = -1;
	      var right = 1;
	      var bottom = -ratio;
	      var top = ratio;

	      this.viewMatrix = new _Live2DFramework.L2DViewMatrix();
	      this.viewMatrix.setMaxScreenRect(-2, 2, -2, 2);
	      this.viewMatrix.setScreenRect(left, right, bottom, top);
	      // this.viewMatrix.setMaxScale(2);
	      // this.viewMatrix.setMinScale(0.5);
	      // this.viewMatrix.adjustScale(0, 0, 0.7);

	      this.projMatrix = new _Live2DFramework.L2DMatrix44();
	      this.projMatrix.multScale(ratio, 1); // flip for rtt

	      this.deviceToScreen = new _Live2DFramework.L2DMatrix44();
	      this.deviceToScreen.multTranslate(-width / 2.0, -height / 2.0);
	      this.deviceToScreen.multScale(2 / width, -2 / height);

	      _live2d.Live2D.setGL(this.gl);

	      this.x = width / 2;
	      this.y = height / 2;
	      this.anchor.x = 0.5;
	      this.anchor.y = 0.5;
	      this.scale.y = -1;

	      this.gl.clearColor(0.0, 0.0, 0.0, 0.0);
	      this.model.load(this.gl, this.modelDefine, function () {
	        _this2.modelReady = true;
	      });
	    }

	    /**
	     * @private
	     */

	  }, {
	    key: 'draw',
	    value: function draw() {
	      _MatrixStack2.default.reset();
	      _MatrixStack2.default.loadIdentity();

	      this.dragMgr.update();
	      this.model.setDrag(this.dragMgr.getX(), this.dragMgr.getY());

	      // this.viewMatrix.adjustTranslate(-this.x / this.canvasWidth, -this.y / this.canvasHeight);
	      // this.viewMatrix.adjustScale(this.anchor.x, this.anchor.y, this.scale.x, this.scale.y);

	      _MatrixStack2.default.multMatrix(this.projMatrix.getArray());
	      _MatrixStack2.default.multMatrix(this.viewMatrix.getArray());
	      // MatrixStack.multMatrix(this.deviceToScreen.getArray());
	      _MatrixStack2.default.push();

	      this.model.update();
	      this.model.draw(this.gl);

	      _MatrixStack2.default.pop();
	    }
	  }, {
	    key: '_renderWebGL',
	    value: function _renderWebGL(renderer) {
	      if (!this.gl) {
	        this.gl = renderer.gl;
	        this.canvas = renderer.view;
	        this.modelDefine && this.init(this.modelDefine);
	      }

	      if (!this.modelReady) {
	        return;
	      }

	      while (this.onModelReady.length) {
	        var func = this.onModelReady.shift();
	        func();
	      }

	      if (!this.visible) {
	        return;
	      }

	      renderer.flush();

	      var gl = renderer.gl;

	      var arrayBuffer = gl.getParameter(gl.ARRAY_BUFFER_BINDING);
	      var elementArrayBuffer = gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
	      var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);
	      var activeTexture = gl.getParameter(gl.ACTIVE_TEXTURE);

	      gl.activeTexture(gl.TEXTURE0);
	      var texture0 = gl.getParameter(gl.TEXTURE_BINDING_2D);
	      gl.activeTexture(gl.TEXTURE1);
	      var texture1 = gl.getParameter(gl.TEXTURE_BINDING_2D);

	      var frontFace = gl.getParameter(gl.FRONT_FACE);
	      var colorWhiteMask = gl.getParameter(gl.COLOR_WRITEMASK);

	      var vertexAttr0Enabled = gl.getVertexAttrib(0, gl.VERTEX_ATTRIB_ARRAY_ENABLED);
	      var vertexAttr1Enabled = gl.getVertexAttrib(1, gl.VERTEX_ATTRIB_ARRAY_ENABLED);
	      var vertexAttr2Enabled = gl.getVertexAttrib(2, gl.VERTEX_ATTRIB_ARRAY_ENABLED);
	      var vertexAttr3Enabled = gl.getVertexAttrib(3, gl.VERTEX_ATTRIB_ARRAY_ENABLED);
	      var scissorTestEnabled = gl.isEnabled(gl.SCISSOR_TEST);
	      var stencilTestEnabled = gl.isEnabled(gl.STENCIL_TEST);
	      var depthTestEnabled = gl.isEnabled(gl.DEPTH_TEST);
	      var cullFaceEnabled = gl.isEnabled(gl.CULL_FACE);
	      var blendEnabled = gl.isEnabled(gl.BLEND);

	      var _activeTextureLocation = renderer._activeTextureLocation;
	      var _activeRenderTarget = renderer._activeRenderTarget;

	      renderer.bindRenderTexture(this.texture);
	      gl.clearColor(0.0, 0.0, 0.0, 0.0);
	      gl.clear(gl.COLOR_BUFFER_BIT);
	      gl.frontFace(gl.CW);
	      this.draw();
	      renderer._activeTextureLocation = _activeTextureLocation;
	      gl.activeTexture(gl.TEXTURE0 + _activeTextureLocation);
	      gl.bindTexture(gl.TEXTURE_2D, null);
	      gl.useProgram(currentProgram);
	      renderer.bindRenderTarget(_activeRenderTarget);

	      gl.bindBuffer(gl.ARRAY_BUFFER, arrayBuffer);
	      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementArrayBuffer);

	      gl.activeTexture(gl.TEXTURE0);
	      gl.bindTexture(gl.TEXTURE_2D, texture0);
	      gl.activeTexture(gl.TEXTURE1);
	      gl.bindTexture(gl.TEXTURE_2D, texture1);

	      gl.activeTexture(activeTexture);
	      gl.frontFace(frontFace);
	      gl.colorMask.apply(gl, _toConsumableArray(colorWhiteMask));
	      //
	      vertexAttr0Enabled ? gl.enableVertexAttribArray(0) : gl.disableVertexAttribArray(0);
	      vertexAttr1Enabled ? gl.enableVertexAttribArray(1) : gl.disableVertexAttribArray(1);
	      vertexAttr2Enabled ? gl.enableVertexAttribArray(2) : gl.disableVertexAttribArray(2);
	      vertexAttr3Enabled ? gl.enableVertexAttribArray(3) : gl.disableVertexAttribArray(3);
	      scissorTestEnabled ? gl.enable(gl.SCISSOR_TEST) : gl.disable(gl.SCISSOR_TEST);
	      stencilTestEnabled ? gl.enable(gl.STENCIL_TEST) : gl.disable(gl.STENCIL_TEST);
	      depthTestEnabled ? gl.enable(gl.DEPTH_TEST) : gl.disable(gl.DEPTH_TEST);
	      cullFaceEnabled ? gl.enable(gl.CULL_FACE) : gl.disable(gl.CULL_FACE);
	      blendEnabled ? gl.enable(gl.BLEND) : gl.disable(gl.BLEND);

	      _get(Live2DSprite.prototype.__proto__ || Object.getPrototypeOf(Live2DSprite.prototype), '_renderWebGL', this).call(this, renderer);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _get2;

	      this.model.release();

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      (_get2 = _get(Live2DSprite.prototype.__proto__ || Object.getPrototypeOf(Live2DSprite.prototype), 'destroy', this)).call.apply(_get2, [this].concat(args));
	    }
	  }, {
	    key: 'containsPoint',
	    value: function containsPoint(point) {
	      if (this.modelReady) {
	        return this.hitTest(null, point.x, point.y);
	      }
	      return false;
	    }

	    /* Live2D methods */

	    /* Transforms */

	  }, {
	    key: 'adjustScale',
	    value: function adjustScale(cx, cy, scale) {
	      var _this3 = this;

	      this.onModelReady.push(function () {
	        _this3.viewMatrix.adjustScale(cx, cy, scale);
	      });
	    }
	  }, {
	    key: 'adjustTranslate',
	    value: function adjustTranslate(shiftX, shiftY) {
	      var _this4 = this;

	      this.onModelReady.push(function () {
	        _this4.viewMatrix.adjustTranslate(shiftX, -shiftY);
	      });
	    }

	    /**
	     * specify `PARAM_MOUTH_OPEN_Y` of Live2D model.
	     * @param value {Number} between 0~1, set to `null` will disable it.
	     */

	  }, {
	    key: 'setLipSync',
	    value: function setLipSync(value) {
	      if (value === null) {
	        this.model.setLipSync(false);
	      } else {
	        this.model.setLipSync(true);
	        this.model.setLipSyncValue(value);
	      }
	    }
	  }, {
	    key: 'setRandomExpression',
	    value: function setRandomExpression() {
	      var _this5 = this;

	      this.onModelReady.push(function () {
	        _this5.model.setRandomExpression();
	      });
	    }
	  }, {
	    key: 'startRandomMotion',
	    value: function startRandomMotion(name, priority) {
	      var _this6 = this;

	      this.onModelReady.push(function () {
	        _this6.model.startRandomMotion(name, priority);
	      });
	    }
	  }, {
	    key: 'startRandomMotionOnce',
	    value: function startRandomMotionOnce(name, priority) {
	      var _this7 = this;

	      this.onModelReady.push(function () {
	        _this7.model.startRandomMotionOnce(name, priority);
	      });
	    }
	  }, {
	    key: 'stopRandomMotion',
	    value: function stopRandomMotion() {
	      var _this8 = this;

	      this.onModelReady.push(function () {
	        _this8.model.stopRandomMotion();
	      });
	    }
	  }, {
	    key: 'startMotion',
	    value: function startMotion(name, no, priority) {
	      var _this9 = this;

	      this.onModelReady.push(function () {
	        _this9.model.startMotion(name, no, priority);
	      });
	    }
	  }, {
	    key: 'playSound',
	    value: function playSound(filename) {
	      var _this10 = this;

	      var host = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

	      this.onModelReady.push(function () {
	        _this10.model.playSound(filename, host);
	      });
	    }

	    /* Event methods */

	  }, {
	    key: 'hitTest',
	    value: function hitTest(id, x, y) {
	      return this.model.hitTest(id, this.viewMatrix.invertTransformX(this.deviceToScreen.transformX(x)), this.viewMatrix.invertTransformY(this.deviceToScreen.transformY(y)));
	    }
	  }, {
	    key: 'setViewPoint',
	    value: function setViewPoint(x, y) {
	      this.dragMgr.setPoint(this.viewMatrix.invertTransformX(this.deviceToScreen.transformX(x)), this.viewMatrix.invertTransformY(this.deviceToScreen.transformY(y)));
	    }

	    /* Some raw methods of Live2D */

	  }, {
	    key: 'getParamFloat',
	    value: function getParamFloat(key) {
	      return this.model.getLive2DModel().getParamFloat(key);
	    }
	  }, {
	    key: 'setParamFloat',
	    value: function setParamFloat(key, value) {
	      var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	      this.model.getLive2DModel().setParamFloat(key, value, weight);
	    }
	  }, {
	    key: 'addToParamFloat',
	    value: function addToParamFloat(key, value) {
	      var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	      this.model.getLive2DModel().addToParamFloat(key, value, weight);
	    }
	  }, {
	    key: 'multParamFloat',
	    value: function multParamFloat(key, value) {
	      var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	      this.model.getLive2DModel().multParamFloat(key, value, weight);
	    }
	  }]);

	  return Live2DSprite;
	}(PIXI.Sprite);

	exports.default = Live2DSprite;


	if (PIXI) {
	  PIXI.Live2DSprite = Live2DSprite;
	} else {
	  console.error('Error: Cannot find global variable `PIXI`, Live2D plguin will not be installed.');
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// const log = console.log;
	// console.log = () => {};
	// const __ = require('./live2dsdk');
	// console.log = log;

	exports.UtSystem = UtSystem;
	exports.UtDebug = UtDebug;
	exports.LDTransform = LDTransform;
	exports.LDGL = LDGL;
	exports.Live2D = Live2D;
	exports.Live2DModelWebGL = Live2DModelWebGL;
	exports.Live2DModelJS = Live2DModelJS;
	exports.Live2DMotion = Live2DMotion;
	exports.MotionQueueManager = MotionQueueManager;
	exports.PhysicsHair = PhysicsHair;
	exports.AMotion = AMotion;
	exports.PartsDataID = PartsDataID;
	exports.DrawDataID = DrawDataID;
	exports.BaseDataID = BaseDataID;
	exports.ParamID = ParamID;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = LAppModel;

	var _Live2DFramework = __webpack_require__(3);

	var _MatrixStack = __webpack_require__(5);

	var _MatrixStack2 = _interopRequireDefault(_MatrixStack);

	var _ModelSettingJson = __webpack_require__(6);

	var _ModelSettingJson2 = _interopRequireDefault(_ModelSettingJson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function LAppModel(options) {
	    //L2DBaseModel.apply(this, arguments);
	    _Live2DFramework.L2DBaseModel.prototype.constructor.call(this);

	    this.options = options;

	    this.randomMotion = this.options.randomMotion;
	    this.randomMotionGroup = null;
	    this.randomMotionPriority = null;

	    this.modelHomeDir = "";
	    this.modelSetting = null;
	    this.tmpMatrix = [];

	    this.audioElement = null;
	    this.audioContext = null;
	    this.audioAnalyser = null;
	} //============================================================
	//============================================================
	//  class LAppModel     extends L2DBaseModel
	//============================================================
	//============================================================

	LAppModel.prototype = new _Live2DFramework.L2DBaseModel();

	LAppModel.prototype.load = function (gl, modelDefine, callback) {
	    this.setUpdating(true);
	    this.setInitialized(false);

	    this.modelHomeDir = './';

	    this.modelSetting = new _ModelSettingJson2.default(modelDefine);

	    var thisRef = this;

	    // this.modelSetting.loadModelSetting(modelSettingPath, function(){

	    var path = thisRef.modelHomeDir + thisRef.modelSetting.getModelFile();
	    thisRef.loadModelData(path, function (model) {

	        for (var i = 0; i < thisRef.modelSetting.getTextureNum(); i++) {

	            var texPaths = thisRef.modelHomeDir + thisRef.modelSetting.getTextureFile(i);

	            thisRef.loadTexture(gl, i, texPaths, function () {

	                if (thisRef.isTexLoaded) {

	                    if (thisRef.modelSetting.getExpressionNum() > 0) {

	                        thisRef.expressions = {};

	                        for (var j = 0; j < thisRef.modelSetting.getExpressionNum(); j++) {
	                            var expName = thisRef.modelSetting.getExpressionName(j);
	                            var expFilePath = thisRef.modelHomeDir + thisRef.modelSetting.getExpressionFile(j);

	                            thisRef.loadExpression(expName, expFilePath);
	                        }
	                    } else {
	                        thisRef.expressionManager = null;
	                        thisRef.expressions = {};
	                    }

	                    if (!thisRef.eyeBlink) {
	                        thisRef.eyeBlink = new _Live2DFramework.L2DEyeBlink();
	                    }

	                    if (thisRef.modelSetting.getPhysicsFile()) {
	                        thisRef.loadPhysics(thisRef.modelHomeDir + thisRef.modelSetting.getPhysicsFile());
	                    } else {
	                        thisRef.physics = null;
	                    }

	                    if (thisRef.modelSetting.getPoseFile()) {
	                        thisRef.loadPose(thisRef.modelHomeDir + thisRef.modelSetting.getPoseFile(), function () {
	                            thisRef.pose.updateParam(thisRef.live2DModel);
	                        });
	                    } else {
	                        thisRef.pose = null;
	                    }

	                    if (thisRef.modelSetting.getLayout()) {
	                        var layout = thisRef.modelSetting.getLayout();
	                        if (layout["width"] != null) thisRef.modelMatrix.setWidth(layout["width"]);
	                        if (layout["height"] != null) thisRef.modelMatrix.setHeight(layout["height"]);

	                        if (layout["x"] != null) thisRef.modelMatrix.setX(layout["x"]);
	                        if (layout["y"] != null) thisRef.modelMatrix.setY(layout["y"]);
	                        if (layout["center_x"] != null) thisRef.modelMatrix.centerX(layout["center_x"]);
	                        if (layout["center_y"] != null) thisRef.modelMatrix.centerY(layout["center_y"]);
	                        if (layout["top"] != null) thisRef.modelMatrix.top(layout["top"]);
	                        if (layout["bottom"] != null) thisRef.modelMatrix.bottom(layout["bottom"]);
	                        if (layout["left"] != null) thisRef.modelMatrix.left(layout["left"]);
	                        if (layout["right"] != null) thisRef.modelMatrix.right(layout["right"]);
	                    }

	                    for (var j = 0; j < thisRef.modelSetting.getInitParamNum(); j++) {

	                        thisRef.live2DModel.setParamFloat(thisRef.modelSetting.getInitParamID(j), thisRef.modelSetting.getInitParamValue(j));
	                    }

	                    for (var j = 0; j < thisRef.modelSetting.getInitPartsVisibleNum(); j++) {

	                        thisRef.live2DModel.setPartsOpacity(thisRef.modelSetting.getInitPartsVisibleID(j), thisRef.modelSetting.getInitPartsVisibleValue(j));
	                    }

	                    thisRef.live2DModel.saveParam();
	                    // thisRef.live2DModel.setGL(gl);


	                    thisRef.preloadMotionGroup(thisRef.options.defaultMotionGroup);
	                    thisRef.mainMotionManager.stopAllMotions();

	                    thisRef.setUpdating(false);
	                    thisRef.setInitialized(true);

	                    if (typeof callback == "function") callback();
	                }
	            });
	        }
	    });
	    // });
	};

	LAppModel.prototype.release = function (gl) {
	    // this.live2DModel.deleteTextures();
	    // var pm = Live2DFramework.getPlatformManager();
	    //
	    // gl.deleteTexture(pm.texture);
	};

	LAppModel.prototype.preloadMotionGroup = function (name) {
	    var thisRef = this;

	    for (var i = 0; i < this.modelSetting.getMotionNum(name); i++) {
	        var file = this.modelSetting.getMotionFile(name, i);
	        this.loadMotion(file, this.modelHomeDir + file, function (motion) {
	            motion.setFadeIn(thisRef.modelSetting.getMotionFadeIn(name, i));
	            motion.setFadeOut(thisRef.modelSetting.getMotionFadeOut(name, i));
	        });
	    }
	};

	LAppModel.prototype.update = function () {
	    // console.log("--> LAppModel.update()");

	    if (!this.live2DModel) {
	        if (this.options.debugLog) console.error("Failed to update.");

	        return;
	    }

	    var timeMSec = UtSystem.getUserTimeMSec() - this.startTimeMSec;
	    var timeSec = timeMSec / 1000.0;
	    var t = timeSec * 2 * Math.PI;

	    if (this.mainMotionManager.isFinished() && this.randomMotion) {
	        this.startRandomMotion(this.randomMotionGroup || this.options.defaultMotionGroup, this.randomMotionPriority || this.options.priorityDefault);
	    }

	    //-----------------------------------------------------------------


	    this.live2DModel.loadParam();

	    var update = this.mainMotionManager.updateParam(this.live2DModel);
	    if (!update) {

	        if (this.eyeBlink && this.options.eyeBlink) {
	            this.eyeBlink.updateParam(this.live2DModel);
	        }
	    }

	    this.live2DModel.saveParam();

	    //-----------------------------------------------------------------


	    if (this.expressionManager && this.expressions && !this.expressionManager.isFinished()) {
	        this.expressionManager.updateParam(this.live2DModel);
	    }

	    this.live2DModel.addToParamFloat("PARAM_ANGLE_X", this.dragX * 30, 1);
	    this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", this.dragY * 30, 1);
	    this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", this.dragX * this.dragY * -30, 1);

	    this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", this.dragX * 10, 1);

	    this.live2DModel.addToParamFloat("PARAM_EYE_BALL_X", this.dragX, 1);
	    this.live2DModel.addToParamFloat("PARAM_EYE_BALL_Y", this.dragY, 1);

	    // this.live2DModel.addToParamFloat("PARAM_ANGLE_X",
	    //                                  Number((15 * Math.sin(t / 6.5345))), 0.5);
	    // this.live2DModel.addToParamFloat("PARAM_ANGLE_Y",
	    //                                  Number((8 * Math.sin(t / 3.5345))), 0.5);
	    // this.live2DModel.addToParamFloat("PARAM_ANGLE_Z",
	    //                                  Number((10 * Math.sin(t / 5.5345))), 0.5);
	    // this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X",
	    //                                  Number((4 * Math.sin(t / 15.5345))), 0.5);
	    // this.live2DModel.setParamFloat("PARAM_BREATH",
	    //                                Number((0.5 + 0.5 * Math.sin(t / 3.2345))), 1);


	    if (this.physics) {
	        this.physics.updateParam(this.live2DModel);
	    }

	    if (this.lipSync) {
	        this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y", this.lipSyncValue);
	    }

	    if (this.pose) {
	        this.pose.updateParam(this.live2DModel);
	    }

	    this.live2DModel.update();
	};

	LAppModel.prototype.setRandomExpression = function () {
	    var tmp = [];
	    for (var name in this.expressions) {
	        tmp.push(name);
	    }

	    var no = parseInt(Math.random() * tmp.length);

	    this.setExpression(tmp[no]);
	};

	LAppModel.prototype.startRandomMotion = function (name, priority) {
	    var max = this.modelSetting.getMotionNum(name);
	    var no = parseInt(Math.random() * max);
	    this.startMotion(name, no, priority);
	    this.randomMotion = true;
	    this.randomMotionGroup = name;
	    this.randomMotionPriority = priority;
	};
	LAppModel.prototype.startRandomMotionOnce = function (name, priority) {
	    var max = this.modelSetting.getMotionNum(name);
	    var no = parseInt(Math.random() * max);
	    this.startMotion(name, no, priority);
	};

	LAppModel.prototype.stopRandomMotion = function () {
	    this.randomMotion = false;
	    this.randomMotionGroup = null;
	    this.randomMotionPriority = null;
	};

	LAppModel.prototype.startMotion = function (name, no, priority) {
	    // console.log("startMotion : " + name + " " + no + " " + priority);

	    var motionName = this.modelSetting.getMotionFile(name, no);

	    if (motionName == null || motionName == "") {
	        if (this.options.debugLog) console.warn("Failed to motion.");
	        return;
	    }

	    if (priority == this.options.priorityForce) {
	        this.mainMotionManager.setReservePriority(priority);
	    } else if (!this.mainMotionManager.reserveMotion(priority)) {
	        if (this.options.debugLog) console.log("Motion is running.");
	        return;
	    }

	    var thisRef = this;
	    var motion;

	    if (this.motions[name] == null) {
	        this.loadMotion(null, this.modelHomeDir + motionName, function (mtn) {
	            motion = mtn;

	            thisRef.setFadeInFadeOut(name, no, priority, motion);
	        });
	    } else {
	        motion = this.motions[name];

	        thisRef.setFadeInFadeOut(name, no, priority, motion);
	    }
	};

	LAppModel.prototype.setFadeInFadeOut = function (name, no, priority, motion) {
	    var motionName = this.modelSetting.getMotionFile(name, no);

	    motion.setFadeIn(this.modelSetting.getMotionFadeIn(name, no));
	    motion.setFadeOut(this.modelSetting.getMotionFadeOut(name, no));

	    if (this.options.debugLog) console.log("Start motion : " + motionName);

	    if (this.modelSetting.getMotionSound(name, no) == null) {
	        this.mainMotionManager.startMotionPrio(motion, priority);
	    } else {
	        var soundName = this.modelSetting.getMotionSound(name, no);
	        // var player = new Sound(this.modelHomeDir + soundName);

	        if (this.options.debugLog) console.log("Start sound : " + soundName);

	        this.playSound(soundName, this.modelHomeDir);

	        this.mainMotionManager.startMotionPrio(motion, priority);
	    }
	};

	LAppModel.prototype.playSound = function (filename, host) {
	    var _this = this;

	    if (this.options.audioPlayer) {
	        this.options.audioPlayer(filename, host);
	    } else {
	        var audio = this.audioElement || document.createElement("audio");
	        !this.audioElement && (this.audioElement = audio);
	        audio.src = host + filename;

	        var AudioContext = window.AudioContext || window.webkitAudioContext;
	        if (AudioContext && this.options.lipSyncWithSound) {
	            var bufferLength;

	            (function () {
	                var context = _this.audioContext || new AudioContext();
	                if (!_this.audioContext) {
	                    _this.audioContext = context;
	                    _this.audioElementSource = context.createMediaElementSource(audio);
	                }
	                var source = _this.audioElementSource;
	                var analyser = _this.audioAnalyser || context.createAnalyser();
	                !_this.audioAnalyser && (_this.audioAnalyser = analyser);

	                analyser.fftSize = 32;
	                bufferLength = analyser.frequencyBinCount;

	                var cache = [];
	                var lastTime = Date.now();
	                var intervalId = setInterval(function () {
	                    var dataArray = new Uint8Array(bufferLength);
	                    analyser.getByteFrequencyData(dataArray);
	                    var value = (dataArray[9] + dataArray[10] + dataArray[11]) / 3;
	                    if (Date.now() - lastTime < 33) {
	                        cache.push(value);
	                    } else {
	                        var lipValue = cache.length ? cache.reduce(function (previous, current) {
	                            return current += previous;
	                        }) / cache.length / 100 : _this.lipSyncValue;
	                        _this.lipSync = true;
	                        _this.lipSyncValue = lipValue;
	                        lastTime = Date.now();
	                        cache = [];
	                    }
	                }, 0);
	                audio.addEventListener('ended', function () {
	                    clearInterval(intervalId);
	                    _this.lipSyncValue = 0;
	                });
	                source.connect(analyser);
	                analyser.connect(context.destination);
	            })();
	        }
	        audio.play();
	    }
	};

	LAppModel.prototype.setExpression = function (name) {
	    var motion = this.expressions[name];

	    if (this.options.debugLog) console.log("Expression : " + name);

	    this.expressionManager.startMotion(motion, false);
	};

	LAppModel.prototype.draw = function (gl) {
	    //console.log("--> LAppModel.draw()");

	    // if(this.live2DModel == null) return;


	    _MatrixStack2.default.push();

	    _MatrixStack2.default.multMatrix(this.modelMatrix.getArray());

	    this.tmpMatrix = _MatrixStack2.default.getMatrix();
	    this.live2DModel.setMatrix(this.tmpMatrix);
	    this.live2DModel.draw();

	    _MatrixStack2.default.pop();
	};

	LAppModel.prototype.hitTest = function (id, testX, testY) {
	    var len = this.modelSetting.getHitAreaNum();
	    var hit = false;
	    for (var i = 0; i < len; i++) {
	        // NOTE: id == null means to test all ids.
	        if (id == null) {
	            var drawID = this.modelSetting.getHitAreaID(i);
	            hit = this.hitTestSimple(drawID, testX, testY);
	            if (hit) {
	                return hit;
	            }
	        } else if (id == this.modelSetting.getHitAreaName(i)) {
	            var drawID = this.modelSetting.getHitAreaID(i);

	            return this.hitTestSimple(drawID, testX, testY);
	        }
	    }

	    return false;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.L2DBaseModel = L2DBaseModel;
	exports.L2DExpressionMotion = L2DExpressionMotion;
	exports.L2DExpressionParam = L2DExpressionParam;
	exports.L2DEyeBlink = L2DEyeBlink;
	exports.L2DMatrix44 = L2DMatrix44;
	exports.L2DModelMatrix = L2DModelMatrix;
	exports.L2DMotionManager = L2DMotionManager;
	exports.L2DPhysics = L2DPhysics;
	exports.L2DPose = L2DPose;
	exports.L2DPartsParam = L2DPartsParam;
	exports.L2DTargetPoint = L2DTargetPoint;
	exports.L2DViewMatrix = L2DViewMatrix;

	var _live2d = __webpack_require__(1);

	var _netUtils = __webpack_require__(4);

	//============================================================
	//============================================================
	//  class L2DBaseModel
	//============================================================
	//============================================================
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */

	function L2DBaseModel() {
	    this.live2DModel = null; // ALive2DModel
	    this.modelMatrix = null; // L2DModelMatrix
	    this.eyeBlink = null; // L2DEyeBlink
	    this.physics = null; // L2DPhysics
	    this.pose = null; // L2DPose
	    this.debugMode = false;
	    this.initialized = false;
	    this.updating = false;
	    this.alpha = 1;
	    this.accAlpha = 0;
	    this.lipSync = false;
	    this.lipSyncValue = 0;
	    this.accelX = 0;
	    this.accelY = 0;
	    this.accelZ = 0;
	    this.dragX = 0;
	    this.dragY = 0;
	    this.startTimeMSec = null;
	    this.mainMotionManager = new L2DMotionManager(); //L2DMotionManager
	    this.expressionManager = new L2DMotionManager(); //L2DMotionManager
	    this.motions = {};
	    this.expressions = {};

	    this.isTexLoaded = false;
	}

	var texCounter = 0;

	//============================================================
	//    L2DBaseModel # getModelMatrix()
	//============================================================
	L2DBaseModel.prototype.getModelMatrix = function () {
	    return this.modelMatrix;
	};

	//============================================================
	//    L2DBaseModel # setAlpha()
	//============================================================
	L2DBaseModel.prototype.setAlpha = function (a /*float*/) {
	    if (a > 0.999) a = 1;
	    if (a < 0.001) a = 0;
	    this.alpha = a;
	};

	//============================================================
	//    L2DBaseModel # getAlpha()
	//============================================================
	L2DBaseModel.prototype.getAlpha = function () {
	    return this.alpha;
	};

	//============================================================
	//    L2DBaseModel # isInitialized()
	//============================================================
	L2DBaseModel.prototype.isInitialized = function () {
	    return this.initialized;
	};

	//============================================================
	//    L2DBaseModel # setInitialized()
	//============================================================
	L2DBaseModel.prototype.setInitialized = function (v /*boolean*/) {
	    this.initialized = v;
	};

	//============================================================
	//    L2DBaseModel # isUpdating()
	//============================================================
	L2DBaseModel.prototype.isUpdating = function () {
	    return this.updating;
	};

	//============================================================
	//    L2DBaseModel # setUpdating()
	//============================================================
	L2DBaseModel.prototype.setUpdating = function (v /*boolean*/) {
	    this.updating = v;
	};

	//============================================================
	//    L2DBaseModel # getLive2DModel()
	//============================================================
	L2DBaseModel.prototype.getLive2DModel = function () {
	    return this.live2DModel;
	};

	//============================================================
	//    L2DBaseModel # setLipSync()
	//============================================================
	L2DBaseModel.prototype.setLipSync = function (v /*boolean*/) {
	    this.lipSync = v;
	};

	//============================================================
	//    L2DBaseModel # setLipSyncValue()
	//============================================================
	L2DBaseModel.prototype.setLipSyncValue = function (v /*float*/) {
	    this.lipSyncValue = v;
	};

	//============================================================
	//    L2DBaseModel # setAccel()
	//============================================================
	L2DBaseModel.prototype.setAccel = function (x /*float*/, y /*float*/, z /*float*/) {
	    this.accelX = x;
	    this.accelY = y;
	    this.accelZ = z;
	};

	//============================================================
	//    L2DBaseModel # setDrag()
	//============================================================
	L2DBaseModel.prototype.setDrag = function (x /*float*/, y /*float*/) {
	    this.dragX = x;
	    this.dragY = y;
	};

	//============================================================
	//    L2DBaseModel # getMainMotionManager()
	//============================================================
	L2DBaseModel.prototype.getMainMotionManager = function () {
	    return this.mainMotionManager;
	};

	//============================================================
	//    L2DBaseModel # getExpressionManager()
	//============================================================
	L2DBaseModel.prototype.getExpressionManager = function () {
	    return this.expressionManager;
	};

	//============================================================
	//    L2DBaseModel # loadModelData()
	//============================================================
	L2DBaseModel.prototype.loadModelData = function (path /*String*/, callback) {
	    /*
	    if( this.live2DModel != null ) {
	        this.live2DModel.deleteTextures();
	    }
	    */
	    // var pm = Live2DFramework.getPlatformManager(); //IPlatformManager
	    if (this.debugMode) console.log("Load model : " + path);

	    var thisRef = this;
	    (0, _netUtils.loadBytes)(path, 'arraybuffer', function (buf) {
	        thisRef.live2DModel = _live2d.Live2DModelWebGL.loadModel(buf);
	        thisRef.live2DModel.saveParam();

	        var _err = _live2d.Live2D.getError();

	        if (_err != 0) {
	            console.error("Error : Failed to loadModelData().");
	            return;
	        }

	        thisRef.modelMatrix = new L2DModelMatrix(thisRef.live2DModel.getCanvasWidth(), thisRef.live2DModel.getCanvasHeight()); //L2DModelMatrix
	        thisRef.modelMatrix.setWidth(2);
	        thisRef.modelMatrix.setCenterPosition(0, 0);

	        callback(thisRef.live2DModel);
	    });
	};

	//============================================================
	//    L2DBaseModel # loadTexture()
	//============================================================
	L2DBaseModel.prototype.loadTexture = function (gl, no /*int*/, path /*String*/, callback) {
	    texCounter++;

	    // var pm = Live2DFramework.getPlatformManager(); //IPlatformManager

	    if (this.debugMode) console.log("Load Texture : " + path);

	    var thisRef = this;
	    this._loadTexture(gl, this.live2DModel, no, path, function () {
	        texCounter--;
	        if (texCounter == 0) thisRef.isTexLoaded = true;
	        if (typeof callback == "function") callback();
	    });
	};

	L2DBaseModel.prototype._loadTexture = function (gl, model, no, path, callback) {
	    // load textures
	    var loadedImage = new Image();
	    loadedImage.src = path;

	    var thisRef = this;
	    loadedImage.onload = function () {

	        // create texture
	        //  var canvas = document.getElementById("glcanvas");
	        // var gl = getWebGLContext(canvas, {premultipliedAlpha : true});
	        var texture = gl.createTexture();
	        if (!texture) {
	            console.error("Failed to generate gl texture name.");return -1;
	        }

	        if (model.isPremultipliedAlpha() == false) {
	            // 乗算済アルファテクスチャ以外の場合
	            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
	        }
	        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
	        gl.activeTexture(gl.TEXTURE0);
	        gl.bindTexture(gl.TEXTURE_2D, texture);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, loadedImage);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
	        gl.generateMipmap(gl.TEXTURE_2D);
	        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);

	        model.setTexture(no, texture);

	        if (typeof callback == "function") callback();
	    };

	    loadedImage.onerror = function () {
	        console.error("Failed to load image : " + path);
	    };
	};

	//============================================================
	//    L2DBaseModel # loadMotion()
	//============================================================
	L2DBaseModel.prototype.loadMotion = function (name /*String*/, path /*String*/, callback) {
	    // var pm = Live2DFramework.getPlatformManager(); //IPlatformManager

	    if (this.debugMode) console.log("Load Motion : " + path);

	    var motion = null; //Live2DMotion

	    var thisRef = this;
	    (0, _netUtils.loadBytes)(path, 'arraybuffer', function (buf) {
	        motion = _live2d.Live2DMotion.loadMotion(buf);
	        if (name != null) {
	            thisRef.motions[name] = motion;
	        }
	        callback(motion);
	    });
	};

	//============================================================
	//    L2DBaseModel # loadExpression()
	//============================================================
	L2DBaseModel.prototype.loadExpression = function (name /*String*/, path /*String*/, callback) {
	    // var pm = Live2DFramework.getPlatformManager(); //IPlatformManager

	    if (this.debugMode) console.log("Load Expression : " + path);

	    var thisRef = this;
	    (0, _netUtils.loadBytes)(path, 'json', function (json) {
	        if (name != null) {
	            thisRef.expressions[name] = L2DExpressionMotion.loadJson(json);
	        }
	        if (typeof callback == "function") callback();
	    });
	};

	//============================================================
	//    L2DBaseModel # loadPose()
	//============================================================
	L2DBaseModel.prototype.loadPose = function (path /*String*/, callback) {
	    // var pm = Live2DFramework.getPlatformManager(); //IPlatformManager
	    if (this.debugMode) console.log("Load Pose : " + path);
	    var thisRef = this;
	    try {
	        (0, _netUtils.loadBytes)(path, 'json', function (json) {
	            thisRef.pose = L2DPose.load(json);
	            if (typeof callback == "function") callback();
	        });
	    } catch (e) {
	        console.warn(e);
	    }
	};

	//============================================================
	//    L2DBaseModel # loadPhysics()
	//============================================================
	L2DBaseModel.prototype.loadPhysics = function (path /*String*/) {
	    // var pm = Live2DFramework.getPlatformManager(); //IPlatformManager
	    if (this.debugMode) console.log("Load Physics : " + path);
	    var thisRef = this;
	    try {
	        (0, _netUtils.loadBytes)(path, 'json', function (json) {
	            thisRef.physics = L2DPhysics.load(json);
	        });
	    } catch (e) {
	        console.warn(e);
	    }
	};

	//============================================================
	//    L2DBaseModel # hitTestSimple()
	//============================================================
	L2DBaseModel.prototype.hitTestSimple = function (drawID, testX, testY) {
	    var drawIndex = this.live2DModel.getDrawDataIndex(drawID);

	    if (drawIndex < 0) return false;

	    var points = this.live2DModel.getTransformedPoints(drawIndex);
	    var left = this.live2DModel.getCanvasWidth();
	    var right = 0;
	    var top = this.live2DModel.getCanvasHeight();
	    var bottom = 0;

	    for (var j = 0; j < points.length; j = j + 2) {
	        var x = points[j];
	        var y = points[j + 1];

	        if (x < left) left = x;
	        if (x > right) right = x;
	        if (y < top) top = y;
	        if (y > bottom) bottom = y;
	    }
	    var tx = this.modelMatrix.invertTransformX(testX);
	    var ty = this.modelMatrix.invertTransformY(testY);
	    //  console.log(left << 0, right << 0, tx << 0)
	    //  console.log(bottom << 0, top << 0, ty << 0)
	    return left <= tx && tx <= right && top <= ty && ty <= bottom;
	};

	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */

	//============================================================
	//============================================================
	//  class L2DExpressionMotion  extends     AMotion
	//============================================================
	//============================================================
	function L2DExpressionMotion() {
	    _live2d.AMotion.prototype.constructor.call(this);
	    this.paramList = new Array(); //ArrayList<L2DExpressionParam>
	}

	L2DExpressionMotion.prototype = new _live2d.AMotion(); // L2DExpressionMotion extends AMotion

	//============================================================
	L2DExpressionMotion.EXPRESSION_DEFAULT = "DEFAULT";
	L2DExpressionMotion.TYPE_SET = 0;
	L2DExpressionMotion.TYPE_ADD = 1;
	L2DExpressionMotion.TYPE_MULT = 2;

	//============================================================
	//    static L2DExpressionMotion.loadJson()
	//============================================================
	L2DExpressionMotion.loadJson = function (json) {
	    var ret = new L2DExpressionMotion();

	    // var pm = Live2DFramework.getPlatformManager();
	    //  var json = jsonParseFromBytes(buf);

	    ret.setFadeIn(parseInt(json.fade_in) > 0 ? parseInt(json.fade_in) : 1000);
	    ret.setFadeOut(parseInt(json.fade_out) > 0 ? parseInt(json.fade_out) : 1000);

	    if (json.params == null) {
	        return ret;
	    }

	    var params = json.params;
	    var paramNum = params.length;
	    ret.paramList = []; //ArrayList<L2DExpressionParam>
	    for (var i = 0; i < paramNum; i++) {
	        var param = params[i];
	        var paramID = param.id.toString();
	        var value = parseFloat(param.val);
	        var calcTypeInt = L2DExpressionMotion.TYPE_ADD;
	        var calc = param.calc != null ? param.calc.toString() : "add";
	        if (calc === "add") {
	            calcTypeInt = L2DExpressionMotion.TYPE_ADD;
	        } else if (calc === "mult") {
	            calcTypeInt = L2DExpressionMotion.TYPE_MULT;
	        } else if (calc === "set") {
	            calcTypeInt = L2DExpressionMotion.TYPE_SET;
	        } else {
	            calcTypeInt = L2DExpressionMotion.TYPE_ADD;
	        }
	        if (calcTypeInt == L2DExpressionMotion.TYPE_ADD) {
	            var defaultValue = param.def == null ? 0 : parseFloat(param.def);
	            value = value - defaultValue;
	        } else if (calcTypeInt == L2DExpressionMotion.TYPE_MULT) {
	            var defaultValue = param.def == null ? 1 : parseFloat(param.def);
	            if (defaultValue == 0) defaultValue = 1;
	            value = value / defaultValue;
	        }

	        var item = new L2DExpressionParam();
	        item.id = paramID;
	        item.type = calcTypeInt;
	        item.value = value;

	        ret.paramList.push(item);
	    }

	    return ret;
	};

	//============================================================
	//    L2DExpressionMotion # updateParamExe()
	//============================================================
	L2DExpressionMotion.prototype.updateParamExe = function (model /*ALive2DModel*/, timeMSec /*long*/, weight /*float*/, motionQueueEnt /*MotionQueueEnt*/) {
	    for (var i = this.paramList.length - 1; i >= 0; --i) {
	        var param = this.paramList[i]; //L2DExpressionParam
	        // if (!param || !param.type) continue;
	        if (param.type == L2DExpressionMotion.TYPE_ADD) {
	            model.addToParamFloat(param.id, param.value, weight);
	        } else if (param.type == L2DExpressionMotion.TYPE_MULT) {
	            model.multParamFloat(param.id, param.value, weight);
	        } else if (param.type == L2DExpressionMotion.TYPE_SET) {
	            model.setParamFloat(param.id, param.value, weight);
	        }
	    }
	};

	//============================================================
	//============================================================
	//  class L2DExpressionParam
	//============================================================
	//============================================================
	function L2DExpressionParam() {
	    this.id = "";
	    this.type = -1;
	    this.value = null;
	}

	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */

	//============================================================
	//============================================================
	//  class L2DEyeBlink
	//============================================================
	//============================================================
	function L2DEyeBlink() {
	    this.nextBlinkTime = null /* TODO NOT INIT */; //
	    this.stateStartTime = null /* TODO NOT INIT */; //
	    this.blinkIntervalMsec = null /* TODO NOT INIT */; //
	    this.eyeState = EYE_STATE.STATE_FIRST;
	    this.blinkIntervalMsec = 4000;
	    this.closingMotionMsec = 100;
	    this.closedMotionMsec = 50;
	    this.openingMotionMsec = 150;
	    this.closeIfZero = true;
	    this.eyeID_L = "PARAM_EYE_L_OPEN";
	    this.eyeID_R = "PARAM_EYE_R_OPEN";
	}

	//============================================================
	//    L2DEyeBlink # calcNextBlink()
	//============================================================
	L2DEyeBlink.prototype.calcNextBlink = function () {
	    var time /*long*/ = _live2d.UtSystem.getUserTimeMSec();
	    var r /*Number*/ = Math.random();
	    return (/*(long)*/time + r * (2 * this.blinkIntervalMsec - 1)
	    );
	};

	//============================================================
	//    L2DEyeBlink # setInterval()
	//============================================================
	L2DEyeBlink.prototype.setInterval = function (blinkIntervalMsec /*int*/) {
	    this.blinkIntervalMsec = blinkIntervalMsec;
	};

	//============================================================
	//    L2DEyeBlink # setEyeMotion()
	//============================================================
	L2DEyeBlink.prototype.setEyeMotion = function (closingMotionMsec /*int*/, closedMotionMsec /*int*/, openingMotionMsec /*int*/) {
	    this.closingMotionMsec = closingMotionMsec;
	    this.closedMotionMsec = closedMotionMsec;
	    this.openingMotionMsec = openingMotionMsec;
	};

	//============================================================
	//    L2DEyeBlink # updateParam()
	//============================================================
	L2DEyeBlink.prototype.updateParam = function (model /*ALive2DModel*/) {
	    var time /*:long*/ = _live2d.UtSystem.getUserTimeMSec();
	    var eyeParamValue /*:Number*/;
	    var t /*:Number*/ = 0;
	    switch (this.eyeState) {
	        case EYE_STATE.STATE_CLOSING:
	            t = (time - this.stateStartTime) / this.closingMotionMsec;
	            if (t >= 1) {
	                t = 1;
	                this.eyeState = EYE_STATE.STATE_CLOSED;
	                this.stateStartTime = time;
	            }
	            eyeParamValue = 1 - t;
	            break;
	        case EYE_STATE.STATE_CLOSED:
	            t = (time - this.stateStartTime) / this.closedMotionMsec;
	            if (t >= 1) {
	                this.eyeState = EYE_STATE.STATE_OPENING;
	                this.stateStartTime = time;
	            }
	            eyeParamValue = 0;
	            break;
	        case EYE_STATE.STATE_OPENING:
	            t = (time - this.stateStartTime) / this.openingMotionMsec;
	            if (t >= 1) {
	                t = 1;
	                this.eyeState = EYE_STATE.STATE_INTERVAL;
	                this.nextBlinkTime = this.calcNextBlink();
	            }
	            eyeParamValue = t;
	            break;
	        case EYE_STATE.STATE_INTERVAL:
	            if (this.nextBlinkTime < time) {
	                this.eyeState = EYE_STATE.STATE_CLOSING;
	                this.stateStartTime = time;
	            }
	            eyeParamValue = 1;
	            break;
	        case EYE_STATE.STATE_FIRST:
	        default:
	            this.eyeState = EYE_STATE.STATE_INTERVAL;
	            this.nextBlinkTime = this.calcNextBlink();
	            eyeParamValue = 1;
	            break;
	    }
	    if (!this.closeIfZero) eyeParamValue = -eyeParamValue;
	    model.setParamFloat(this.eyeID_L, eyeParamValue);
	    model.setParamFloat(this.eyeID_R, eyeParamValue);
	};

	//== enum EYE_STATE ==
	var EYE_STATE = function EYE_STATE() {};

	EYE_STATE.STATE_FIRST = "STATE_FIRST";
	EYE_STATE.STATE_INTERVAL = "STATE_INTERVAL";
	EYE_STATE.STATE_CLOSING = "STATE_CLOSING";
	EYE_STATE.STATE_CLOSED = "STATE_CLOSED";
	EYE_STATE.STATE_OPENING = "STATE_OPENING";
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */

	//============================================================
	//============================================================
	//  class L2DMatrix44
	//============================================================
	//============================================================
	function L2DMatrix44() {
	    this.tr = new Float32Array(16); //
	    this.identity();
	}

	//============================================================
	//    static L2DMatrix44.mul()
	//============================================================
	L2DMatrix44.mul = function (a /*float[]*/, b /*float[]*/, dst /*float[]*/) {
	    var c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	    var n = 4;
	    var i, j, k;
	    for (i = 0; i < n; i++) {
	        for (j = 0; j < n; j++) {
	            for (k = 0; k < n; k++) {
	                c[i + j * 4] += a[i + k * 4] * b[k + j * 4];
	            }
	        }
	    }
	    for (i = 0; i < 16; i++) {
	        dst[i] = c[i];
	    }
	};

	//============================================================
	//    L2DMatrix44 # identity()
	//============================================================
	L2DMatrix44.prototype.identity = function () {
	    for (var i /*:int*/ = 0; i < 16; i++) {
	        this.tr[i] = i % 5 == 0 ? 1 : 0;
	    }
	};

	//============================================================
	//    L2DMatrix44 # getArray()
	//============================================================
	L2DMatrix44.prototype.getArray = function () {
	    return this.tr;
	};

	//============================================================
	//    L2DMatrix44 # getCopyMatrix()
	//============================================================
	L2DMatrix44.prototype.getCopyMatrix = function () {
	    return new Float32Array(this.tr); // this.tr.clone();
	};

	//============================================================
	//    L2DMatrix44 # setMatrix()
	//============================================================
	L2DMatrix44.prototype.setMatrix = function (tr /*float[]*/) {
	    if (this.tr == null || this.tr.length != this.tr.length) return;
	    for (var i /*:int*/ = 0; i < 16; i++) {
	        this.tr[i] = tr[i];
	    }
	};

	//============================================================
	//    L2DMatrix44 # getScaleX()
	//============================================================
	L2DMatrix44.prototype.getScaleX = function () {
	    return this.tr[0];
	};

	//============================================================
	//    L2DMatrix44 # getScaleY()
	//============================================================
	L2DMatrix44.prototype.getScaleY = function () {
	    return this.tr[5];
	};

	//============================================================
	//    L2DMatrix44 # transformX()
	//============================================================
	L2DMatrix44.prototype.transformX = function (src /*float*/) {
	    return this.tr[0] * src + this.tr[12];
	};

	//============================================================
	//    L2DMatrix44 # transformY()
	//============================================================
	L2DMatrix44.prototype.transformY = function (src /*float*/) {
	    return this.tr[5] * src + this.tr[13];
	};

	//============================================================
	//    L2DMatrix44 # invertTransformX()
	//============================================================
	L2DMatrix44.prototype.invertTransformX = function (src /*float*/) {
	    return (src - this.tr[12]) / this.tr[0];
	};

	//============================================================
	//    L2DMatrix44 # invertTransformY()
	//============================================================
	L2DMatrix44.prototype.invertTransformY = function (src /*float*/) {
	    return (src - this.tr[13]) / this.tr[5];
	};

	//============================================================
	//    L2DMatrix44 # multTranslate()
	//============================================================
	L2DMatrix44.prototype.multTranslate = function (shiftX /*float*/, shiftY /*float*/) {
	    var tr1 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, shiftX, shiftY, 0, 1];
	    L2DMatrix44.mul(tr1, this.tr, this.tr);
	};

	//============================================================
	//    L2DMatrix44 # translate()
	//============================================================
	L2DMatrix44.prototype.translate = function (x /*float*/, y /*float*/) {
	    this.tr[12] = x;
	    this.tr[13] = y;
	};

	//============================================================
	//    L2DMatrix44 # translateX()
	//============================================================
	L2DMatrix44.prototype.translateX = function (x /*float*/) {
	    this.tr[12] = x;
	};

	//============================================================
	//    L2DMatrix44 # translateY()
	//============================================================
	L2DMatrix44.prototype.translateY = function (y /*float*/) {
	    this.tr[13] = y;
	};

	//============================================================
	//    L2DMatrix44 # multScale()
	//============================================================
	L2DMatrix44.prototype.multScale = function (scaleX /*float*/, scaleY /*float*/) {
	    var tr1 = [scaleX, 0, 0, 0, 0, scaleY, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    L2DMatrix44.mul(tr1, this.tr, this.tr);
	};

	//============================================================
	//    L2DMatrix44 # scale()
	//============================================================
	L2DMatrix44.prototype.scale = function (scaleX /*float*/, scaleY /*float*/) {
	    this.tr[0] = scaleX;
	    this.tr[5] = scaleY;
	};
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */

	//============================================================
	//============================================================
	//  class L2DModelMatrix       extends     L2DMatrix44
	//============================================================
	//============================================================
	function L2DModelMatrix(w /*float*/, h /*float*/) {
	    L2DMatrix44.prototype.constructor.call(this);
	    this.width = w;
	    this.height = h;
	}

	//L2DModelMatrix extends L2DMatrix44
	L2DModelMatrix.prototype = new L2DMatrix44();

	//============================================================
	//    L2DModelMatrix # setPosition()
	//============================================================
	L2DModelMatrix.prototype.setPosition = function (x /*float*/, y /*float*/) {
	    this.translate(x, y);
	};

	//============================================================
	//    L2DModelMatrix # setCenterPosition()
	//============================================================
	L2DModelMatrix.prototype.setCenterPosition = function (x /*float*/, y /*float*/) {
	    var w = this.width * this.getScaleX();
	    var h = this.height * this.getScaleY();
	    this.translate(x - w / 2, y - h / 2);
	};

	//============================================================
	//    L2DModelMatrix # top()
	//============================================================
	L2DModelMatrix.prototype.top = function (y /*float*/) {
	    this.setY(y);
	};

	//============================================================
	//    L2DModelMatrix # bottom()
	//============================================================
	L2DModelMatrix.prototype.bottom = function (y /*float*/) {
	    var h = this.height * this.getScaleY();
	    this.translateY(y - h);
	};

	//============================================================
	//    L2DModelMatrix # left()
	//============================================================
	L2DModelMatrix.prototype.left = function (x /*float*/) {
	    this.setX(x);
	};

	//============================================================
	//    L2DModelMatrix # right()
	//============================================================
	L2DModelMatrix.prototype.right = function (x /*float*/) {
	    var w = this.width * this.getScaleX();
	    this.translateX(x - w);
	};

	//============================================================
	//    L2DModelMatrix # centerX()
	//============================================================
	L2DModelMatrix.prototype.centerX = function (x /*float*/) {
	    var w = this.width * this.getScaleX();
	    this.translateX(x - w / 2);
	};

	//============================================================
	//    L2DModelMatrix # centerY()
	//============================================================
	L2DModelMatrix.prototype.centerY = function (y /*float*/) {
	    var h = this.height * this.getScaleY();
	    this.translateY(y - h / 2);
	};

	//============================================================
	//    L2DModelMatrix # setX()
	//============================================================
	L2DModelMatrix.prototype.setX = function (x /*float*/) {
	    this.translateX(x);
	};

	//============================================================
	//    L2DModelMatrix # setY()
	//============================================================
	L2DModelMatrix.prototype.setY = function (y /*float*/) {
	    this.translateY(y);
	};

	//============================================================
	//    L2DModelMatrix # setHeight()
	//============================================================
	L2DModelMatrix.prototype.setHeight = function (h /*float*/) {
	    var scaleX = h / this.height;
	    var scaleY = -scaleX;
	    this.scale(scaleX, scaleY);
	};

	//============================================================
	//    L2DModelMatrix # setWidth()
	//============================================================
	L2DModelMatrix.prototype.setWidth = function (w /*float*/) {
	    var scaleX = w / this.width;
	    var scaleY = -scaleX;
	    this.scale(scaleX, scaleY);
	};

	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */

	//============================================================
	//============================================================
	//  class L2DMotionManager     extends     MotionQueueManager
	//============================================================
	//============================================================
	function L2DMotionManager() {
	    _live2d.MotionQueueManager.prototype.constructor.call(this);
	    this.currentPriority = null;
	    this.reservePriority = null;

	    this.super = _live2d.MotionQueueManager.prototype;
	}

	L2DMotionManager.prototype = new _live2d.MotionQueueManager();

	//============================================================
	//    L2DMotionManager # getCurrentPriority()
	//============================================================
	L2DMotionManager.prototype.getCurrentPriority = function () {
	    return this.currentPriority;
	};

	//============================================================
	//    L2DMotionManager # getReservePriority()
	//============================================================
	L2DMotionManager.prototype.getReservePriority = function () {
	    return this.reservePriority;
	};

	//============================================================
	//    L2DMotionManager # reserveMotion()
	//============================================================
	L2DMotionManager.prototype.reserveMotion = function (priority /*int*/) {
	    if (this.reservePriority >= priority) {
	        return false;
	    }
	    if (this.currentPriority >= priority) {
	        return false;
	    }

	    this.reservePriority = priority;

	    return true;
	};

	//============================================================
	//    L2DMotionManager # setReservePriority()
	//============================================================
	L2DMotionManager.prototype.setReservePriority = function (val /*int*/) {
	    this.reservePriority = val;
	};

	//============================================================
	//    L2DMotionManager # updateParam()
	//============================================================
	L2DMotionManager.prototype.updateParam = function (model /*ALive2DModel*/) {
	    var updated = _live2d.MotionQueueManager.prototype.updateParam.call(this, model);

	    if (this.isFinished()) {
	        this.currentPriority = 0;
	    }

	    return updated;
	};

	//============================================================
	//    L2DMotionManager # startMotionPrio()
	//============================================================
	L2DMotionManager.prototype.startMotionPrio = function (motion /*AMotion*/, priority /*int*/) {
	    if (priority == this.reservePriority) {
	        this.reservePriority = 0;
	    }
	    this.currentPriority = priority;
	    return this.startMotion(motion, false);
	};

	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */

	//============================================================
	//============================================================
	//  class L2DPhysics
	//============================================================
	//============================================================
	function L2DPhysics() {
	    this.physicsList = new Array(); //ArrayList<PhysicsHair>
	    this.startTimeMSec = _live2d.UtSystem.getUserTimeMSec();
	}

	//============================================================
	//    static L2DPhysics.load()
	//============================================================
	L2DPhysics.load = function (json) {
	    var ret = new L2DPhysics(); //L2DPhysicsL2DPhysics
	    // var pm = Live2DFramework.getPlatformManager();
	    //  var json = jsonParseFromBytes(buf);
	    var params = json.physics_hair;
	    var paramNum = params.length;
	    for (var i = 0; i < paramNum; i++) {
	        var param = params[i]; //Value
	        var physics = new _live2d.PhysicsHair(); //PhysicsHairPhysicsHair
	        var setup = param.setup; //Value
	        var length = parseFloat(setup.length);
	        var resist = parseFloat(setup.regist);
	        var mass = parseFloat(setup.mass);
	        physics.setup(length, resist, mass);
	        var srcList = param.src; //Value
	        var srcNum = srcList.length;
	        for (var j = 0; j < srcNum; j++) {
	            var src = srcList[j]; //Value
	            var id = src.id; //String
	            var type = _live2d.PhysicsHair.Src.SRC_TO_X;
	            var typeStr = src.ptype; //String
	            if (typeStr === "x") {
	                type = _live2d.PhysicsHair.Src.SRC_TO_X;
	            } else if (typeStr === "y") {
	                type = _live2d.PhysicsHair.Src.SRC_TO_Y;
	            } else if (typeStr === "angle") {
	                type = _live2d.PhysicsHair.Src.SRC_TO_G_ANGLE;
	            } else {
	                _live2d.UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Src");
	            }
	            var scale = parseFloat(src.scale);
	            var weight = parseFloat(src.weight);
	            physics.addSrcParam(type, id, scale, weight);
	        }
	        var targetList = param.targets; //Value
	        var targetNum = targetList.length;
	        for (var j = 0; j < targetNum; j++) {
	            var target = targetList[j]; //Value
	            var id = target.id; //String
	            var type = _live2d.PhysicsHair.Target.TARGET_FROM_ANGLE;
	            var typeStr = target.ptype; //String
	            if (typeStr === "angle") {
	                type = _live2d.PhysicsHair.Target.TARGET_FROM_ANGLE;
	            } else if (typeStr === "angle_v") {
	                type = _live2d.PhysicsHair.Target.TARGET_FROM_ANGLE_V;
	            } else {
	                _live2d.UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Target");
	            }
	            var scale = parseFloat(target.scale);
	            var weight = parseFloat(target.weight);
	            physics.addTargetParam(type, id, scale, weight);
	        }
	        ret.physicsList.push(physics);
	    }
	    return ret;
	};

	//============================================================
	//    L2DPhysics # updateParam()
	//============================================================
	L2DPhysics.prototype.updateParam = function (model /*ALive2DModel*/) {
	    var timeMSec = _live2d.UtSystem.getUserTimeMSec() - this.startTimeMSec;
	    for (var i = 0; i < this.physicsList.length; i++) {
	        this.physicsList[i].update(model, timeMSec);
	    }
	};

	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */

	//============================================================
	//============================================================
	//  class L2DPose
	//============================================================
	//============================================================
	function L2DPose() {
	    this.lastTime = 0;
	    this.lastModel = null; //ALive2DModel
	    this.partsGroups = new Array(); //ArrayList<L2DPartsParam[]>
	}

	//============================================================
	//    static L2DPose.load()
	//============================================================
	L2DPose.load = function (json) {
	    var ret = new L2DPose(); //L2DPose
	    // var pm = Live2DFramework.getPlatformManager();
	    //  var json = jsonParseFromBytes(buf);
	    var poseListInfo = json.parts_visible; //Value
	    var poseNum = poseListInfo.length;
	    for (var i_pose = 0; i_pose < poseNum; i_pose++) {
	        var poseInfo = poseListInfo[i_pose]; //Value
	        var idListInfo = poseInfo.group; //Value
	        var idNum = idListInfo.length;
	        var partsGroup /*L2DPartsParam*/ = new Array();
	        for (var i_group = 0; i_group < idNum; i_group++) {
	            var partsInfo = idListInfo[i_group]; //Value
	            var parts = new L2DPartsParam(partsInfo.id); //L2DPartsParamL2DPartsParam
	            partsGroup[i_group] = parts;
	            if (partsInfo.link == null) continue;
	            var linkListInfo = partsInfo.link; //Value
	            var linkNum = linkListInfo.length;
	            parts.link = new Array(); //ArrayList<L2DPartsParam>
	            for (var i_link = 0; i_link < linkNum; i_link++) {
	                var linkParts = new L2DPartsParam(linkListInfo[i_link]); //L2DPartsParamL2DPartsParam
	                parts.link.push(linkParts);
	            }
	        }
	        ret.partsGroups.push(partsGroup);
	    }

	    return ret;
	};

	//============================================================
	//    L2DPose # updateParam()
	//============================================================
	L2DPose.prototype.updateParam = function (model /*ALive2DModel*/) {
	    if (model == null) return;

	    if (!(model == this.lastModel)) {
	        this.initParam(model);
	    }
	    this.lastModel = model;

	    var curTime = _live2d.UtSystem.getUserTimeMSec();
	    var deltaTimeSec = this.lastTime == 0 ? 0 : (curTime - this.lastTime) / 1000.0;
	    this.lastTime = curTime;
	    if (deltaTimeSec < 0) deltaTimeSec = 0;
	    for (var i = 0; i < this.partsGroups.length; i++) {
	        this.normalizePartsOpacityGroup(model, this.partsGroups[i], deltaTimeSec);
	        this.copyOpacityOtherParts(model, this.partsGroups[i]);
	    }
	};

	//============================================================
	//    L2DPose # initParam()
	//============================================================
	L2DPose.prototype.initParam = function (model /*ALive2DModel*/) {
	    if (model == null) return;
	    for (var i = 0; i < this.partsGroups.length; i++) {
	        var partsGroup = this.partsGroups[i]; //L2DPartsParam
	        for (var j = 0; j < partsGroup.length; j++) {
	            partsGroup[j].initIndex(model);
	            var partsIndex = partsGroup[j].partsIndex;
	            var paramIndex = partsGroup[j].paramIndex;
	            if (partsIndex < 0) continue;
	            var v /*:Boolean*/ = model.getParamFloat(paramIndex) != 0;
	            model.setPartsOpacity(partsIndex, v ? 1.0 : 0.0);
	            model.setParamFloat(paramIndex, v ? 1.0 : 0.0);
	            if (partsGroup[j].link == null) continue;
	            for (var k = 0; k < partsGroup[j].link.length; k++) {
	                partsGroup[j].link[k].initIndex(model);
	            }
	        }
	    }
	};

	//============================================================
	//    L2DPose # normalizePartsOpacityGroup()
	//============================================================
	L2DPose.prototype.normalizePartsOpacityGroup = function (model /*ALive2DModel*/, partsGroup /*L2DPartsParam[]*/, deltaTimeSec /*float*/) {
	    var visibleParts = -1;
	    var visibleOpacity = 1.0;
	    var CLEAR_TIME_SEC = 0.5;
	    var phi = 0.5;
	    var maxBackOpacity = 0.15;
	    for (var i = 0; i < partsGroup.length; i++) {
	        var partsIndex = partsGroup[i].partsIndex;
	        var paramIndex = partsGroup[i].paramIndex;
	        if (partsIndex < 0) continue;if (model.getParamFloat(paramIndex) != 0) {
	            if (visibleParts >= 0) {
	                break;
	            }
	            visibleParts = i;
	            visibleOpacity = model.getPartsOpacity(partsIndex);
	            visibleOpacity += deltaTimeSec / CLEAR_TIME_SEC;
	            if (visibleOpacity > 1) {
	                visibleOpacity = 1;
	            }
	        }
	    }
	    if (visibleParts < 0) {
	        visibleParts = 0;
	        visibleOpacity = 1;
	    }
	    for (var i = 0; i < partsGroup.length; i++) {
	        var partsIndex = partsGroup[i].partsIndex;
	        if (partsIndex < 0) continue;if (visibleParts == i) {
	            model.setPartsOpacity(partsIndex, visibleOpacity);
	        } else {
	            var opacity = model.getPartsOpacity(partsIndex);
	            var a1;
	            if (visibleOpacity < phi) {
	                a1 = visibleOpacity * (phi - 1) / phi + 1;
	            } else {
	                a1 = (1 - visibleOpacity) * phi / (1 - phi);
	            }
	            var backOp = (1 - a1) * (1 - visibleOpacity);
	            if (backOp > maxBackOpacity) {
	                a1 = 1 - maxBackOpacity / (1 - visibleOpacity);
	            }
	            if (opacity > a1) {
	                opacity = a1;
	            }
	            model.setPartsOpacity(partsIndex, opacity);
	        }
	    }
	};

	//============================================================
	//    L2DPose # copyOpacityOtherParts()
	//============================================================
	L2DPose.prototype.copyOpacityOtherParts = function (model /*ALive2DModel*/, partsGroup /*L2DPartsParam[]*/) {
	    for (var i_group = 0; i_group < partsGroup.length; i_group++) {
	        var partsParam = partsGroup[i_group]; //L2DPartsParam
	        if (partsParam.link == null) continue;
	        if (partsParam.partsIndex < 0) continue;
	        var opacity = model.getPartsOpacity(partsParam.partsIndex);
	        for (var i_link = 0; i_link < partsParam.link.length; i_link++) {
	            var linkParts = partsParam.link[i_link]; //L2DPartsParam
	            if (linkParts.partsIndex < 0) continue;
	            model.setPartsOpacity(linkParts.partsIndex, opacity);
	        }
	    }
	};

	//============================================================
	//============================================================
	//  class L2DPartsParam
	//============================================================
	//============================================================
	function L2DPartsParam(id /*String*/) {
	    this.paramIndex = -1;
	    this.partsIndex = -1;
	    this.link = null; // ArrayList<L2DPartsParam>
	    this.id = id;
	}

	//============================================================
	//    L2DPartsParam # initIndex()
	//============================================================
	L2DPartsParam.prototype.initIndex = function (model /*ALive2DModel*/) {
	    this.paramIndex = model.getParamIndex("VISIBLE:" + this.id);
	    this.partsIndex = model.getPartsDataIndex(_live2d.PartsDataID.getID(this.id));
	    model.setParamFloat(this.paramIndex, 1);
	};
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */

	//============================================================
	//============================================================
	//  class L2DTargetPoint
	//============================================================
	//============================================================
	function L2DTargetPoint() {
	    this.EPSILON = 0.01; // 変化の最小値（この値以下は無視される）
	    this.faceTargetX = 0;
	    this.faceTargetY = 0;
	    this.faceX = 0;
	    this.faceY = 0;
	    this.faceVX = 0;
	    this.faceVY = 0;
	    this.lastTimeSec = 0;
	}

	//============================================================
	L2DTargetPoint.FRAME_RATE = 30;

	//============================================================
	//    L2DTargetPoint # set()
	//============================================================
	L2DTargetPoint.prototype.setPoint = function (x /*float*/, y /*float*/) {
	    this.faceTargetX = x;
	    this.faceTargetY = y;
	};

	//============================================================
	//    L2DTargetPoint # getX()
	//============================================================
	L2DTargetPoint.prototype.getX = function () {
	    return this.faceX;
	};

	//============================================================
	//    L2DTargetPoint # getY()
	//============================================================
	L2DTargetPoint.prototype.getY = function () {
	    return this.faceY;
	};

	//============================================================
	//    L2DTargetPoint # update()
	//============================================================
	L2DTargetPoint.prototype.update = function () {
	    var TIME_TO_MAX_SPEED = 0.15;
	    var FACE_PARAM_MAX_V = 40.0 / 7.5;
	    var MAX_V = FACE_PARAM_MAX_V / L2DTargetPoint.FRAME_RATE;
	    if (this.lastTimeSec == 0) {
	        this.lastTimeSec = _live2d.UtSystem.getUserTimeMSec();
	        return;
	    }
	    var curTimeSec = _live2d.UtSystem.getUserTimeMSec();
	    var deltaTimeWeight = (curTimeSec - this.lastTimeSec) * L2DTargetPoint.FRAME_RATE / 1000.0;
	    this.lastTimeSec = curTimeSec;
	    var FRAME_TO_MAX_SPEED = TIME_TO_MAX_SPEED * L2DTargetPoint.FRAME_RATE;
	    var MAX_A = deltaTimeWeight * MAX_V / FRAME_TO_MAX_SPEED;
	    var dx = this.faceTargetX - this.faceX;
	    var dy = this.faceTargetY - this.faceY;
	    // if(dx == 0 && dy == 0) return;
	    if (Math.abs(dx) <= this.EPSILON && Math.abs(dy) <= this.EPSILON) return;
	    var d = Math.sqrt(dx * dx + dy * dy);
	    var vx = MAX_V * dx / d;
	    var vy = MAX_V * dy / d;
	    var ax = vx - this.faceVX;
	    var ay = vy - this.faceVY;
	    var a = Math.sqrt(ax * ax + ay * ay);
	    if (a < -MAX_A || a > MAX_A) {
	        ax *= MAX_A / a;
	        ay *= MAX_A / a;
	        a = MAX_A;
	    }
	    this.faceVX += ax;
	    this.faceVY += ay;
	    {
	        var max_v = 0.5 * (Math.sqrt(MAX_A * MAX_A + 16 * MAX_A * d - 8 * MAX_A * d) - MAX_A);
	        var cur_v = Math.sqrt(this.faceVX * this.faceVX + this.faceVY * this.faceVY);
	        if (cur_v > max_v) {
	            this.faceVX *= max_v / cur_v;
	            this.faceVY *= max_v / cur_v;
	        }
	    }
	    this.faceX += this.faceVX;
	    this.faceY += this.faceVY;
	};
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */

	//============================================================
	//============================================================
	//  class L2DViewMatrix        extends     L2DMatrix44
	//============================================================
	//============================================================
	function L2DViewMatrix() {
	    L2DMatrix44.prototype.constructor.call(this);
	    this.screenLeft = null;
	    this.screenRight = null;
	    this.screenTop = null;
	    this.screenBottom = null;
	    this.maxLeft = null;
	    this.maxRight = null;
	    this.maxTop = null;
	    this.maxBottom = null;
	    this.max = Number.MAX_VALUE;
	    this.min = 0;
	}

	L2DViewMatrix.prototype = new L2DMatrix44(); //L2DViewMatrix extends L2DMatrix44

	//============================================================
	//    L2DViewMatrix # getMaxScale()
	//============================================================
	L2DViewMatrix.prototype.getMaxScale = function () {
	    return this.max;
	};

	//============================================================
	//    L2DViewMatrix # getMinScale()
	//============================================================
	L2DViewMatrix.prototype.getMinScale = function () {
	    return this.min;
	};

	//============================================================
	//    L2DViewMatrix # setMaxScale()
	//============================================================
	L2DViewMatrix.prototype.setMaxScale = function (v /*float*/) {
	    this.max = v;
	};

	//============================================================
	//    L2DViewMatrix # setMinScale()
	//============================================================
	L2DViewMatrix.prototype.setMinScale = function (v /*float*/) {
	    this.min = v;
	};

	//============================================================
	//    L2DViewMatrix # isMaxScale()
	//============================================================
	L2DViewMatrix.prototype.isMaxScale = function () {
	    return this.getScaleX() == this.max;
	};

	//============================================================
	//    L2DViewMatrix # isMinScale()
	//============================================================
	L2DViewMatrix.prototype.isMinScale = function () {
	    return this.getScaleX() == this.min;
	};

	//============================================================
	//    L2DViewMatrix # adjustTranslate()
	//============================================================
	L2DViewMatrix.prototype.adjustTranslate = function (shiftX /*float*/, shiftY /*float*/) {
	    // comment them, for don't know their function
	    //
	    //  if(this.tr[0] * this.maxLeft + (this.tr[12] + shiftX) > this.screenLeft)
	    //      shiftX = this.screenLeft - this.tr[0] * this.maxLeft - this.tr[12];
	    //  if(this.tr[0] * this.maxRight + (this.tr[12] + shiftX) < this.screenRight)
	    //      shiftX = this.screenRight - this.tr[0] * this.maxRight - this.tr[12];
	    //  if(this.tr[5] * this.maxTop + (this.tr[13] + shiftY) < this.screenTop)
	    //      shiftY = this.screenTop - this.tr[5] * this.maxTop - this.tr[13];
	    //  if(this.tr[5] * this.maxBottom + (this.tr[13] + shiftY) > this.screenBottom)
	    //      shiftY = this.screenBottom - this.tr[5] * this.maxBottom - this.tr[13];

	    var tr1 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, shiftX, shiftY, 0, 1];
	    L2DMatrix44.mul(tr1, this.tr, this.tr);
	};

	//============================================================
	//    L2DViewMatrix # adjustScale()
	//============================================================
	L2DViewMatrix.prototype.adjustScale = function (cx /*float*/, cy /*float*/, scaleX /*float*/, scaleY) {
	    if (!scaleY) {
	        scaleY = scaleX;
	    }
	    //  var targetScaleX = scaleX * this.tr[0];
	    //  if(targetScaleX < this.min) {
	    //      if(this.tr[0] > 0) scaleX = this.min / this.tr[0];
	    //  }
	    //  else if(targetScaleX > this.max) {
	    //      if(this.tr[0] > 0) scaleX = this.max / this.tr[0];
	    //  }
	    //  var targetScaleY = scaleY * this.tr[0];
	    //  if(targetScaleY < this.min) {
	    //      if(this.tr[0] > 0) scaleY = this.min / this.tr[0];
	    //  }
	    //  else if(targetScaleY > this.max) {
	    //      if(this.tr[0] > 0) scaleY = this.max / this.tr[0];
	    //  }
	    var tr1 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, cx, cy, 0, 1];
	    var tr2 = [scaleX, 0, 0, 0, 0, scaleY, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    var tr3 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -cx, -cy, 0, 1];
	    L2DMatrix44.mul(tr3, this.tr, this.tr);
	    L2DMatrix44.mul(tr2, this.tr, this.tr);
	    L2DMatrix44.mul(tr1, this.tr, this.tr);
	};

	//============================================================
	//    L2DViewMatrix # setScreenRect()
	//============================================================
	L2DViewMatrix.prototype.setScreenRect = function (left /*float*/, right /*float*/, bottom /*float*/, top /*float*/) {
	    this.screenLeft = left;
	    this.screenRight = right;
	    this.screenTop = top;
	    this.screenBottom = bottom;
	};

	//============================================================
	//    L2DViewMatrix # setMaxScreenRect()
	//============================================================
	L2DViewMatrix.prototype.setMaxScreenRect = function (left /*float*/, right /*float*/, bottom /*float*/, top /*float*/) {
	    this.maxLeft = left;
	    this.maxRight = right;
	    this.maxTop = top;
	    this.maxBottom = bottom;
	};

	//============================================================
	//    L2DViewMatrix # getScreenLeft()
	//============================================================
	L2DViewMatrix.prototype.getScreenLeft = function () {
	    return this.screenLeft;
	};

	//============================================================
	//    L2DViewMatrix # getScreenRight()
	//============================================================
	L2DViewMatrix.prototype.getScreenRight = function () {
	    return this.screenRight;
	};

	//============================================================
	//    L2DViewMatrix # getScreenBottom()
	//============================================================
	L2DViewMatrix.prototype.getScreenBottom = function () {
	    return this.screenBottom;
	};

	//============================================================
	//    L2DViewMatrix # getScreenTop()
	//============================================================
	L2DViewMatrix.prototype.getScreenTop = function () {
	    return this.screenTop;
	};

	//============================================================
	//    L2DViewMatrix # getMaxLeft()
	//============================================================
	L2DViewMatrix.prototype.getMaxLeft = function () {
	    return this.maxLeft;
	};

	//============================================================
	//    L2DViewMatrix # getMaxRight()
	//============================================================
	L2DViewMatrix.prototype.getMaxRight = function () {
	    return this.maxRight;
	};

	//============================================================
	//    L2DViewMatrix # getMaxBottom()
	//============================================================
	L2DViewMatrix.prototype.getMaxBottom = function () {
	    return this.maxBottom;
	};

	//============================================================
	//    L2DViewMatrix # getMaxTop()
	//============================================================
	L2DViewMatrix.prototype.getMaxTop = function () {
	    return this.maxTop;
	};

	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */

	//============================================================
	//============================================================
	//  class Live2DFramework
	//============================================================
	//============================================================
	// export function Live2DFramework()
	// {
	// }
	//
	// //============================================================
	// Live2DFramework.platformManager  = null;
	//
	// //============================================================
	// //    static Live2DFramework.getPlatformManager()
	// //============================================================
	// Live2DFramework.getPlatformManager = function()
	// {
	//     return Live2DFramework.platformManager;
	// }
	//
	// //============================================================
	// //    static Live2DFramework.setPlatformManager()
	// //============================================================
	// Live2DFramework.setPlatformManager = function( platformManager /*IPlatformManager*/ )
	// {
	//     Live2DFramework.platformManager = platformManager;
	// }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.loadBytes = loadBytes;

	var _live2d = __webpack_require__(1);

	function loadBytes(path, type, callback) {
	  var request = new XMLHttpRequest();
	  request.open('GET', path, true);
	  request.responseType = type;
	  request.onload = function () {
	    switch (request.status) {
	      case 200:
	        callback(request.response);
	        break;
	      default:
	        console.error('Failed to load (' + request.status + ') : ' + path);
	        break;
	    }
	  };
	  request.send(null);
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = MatrixStack;
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */

	function MatrixStack() {}

	MatrixStack.matrixStack = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

	MatrixStack.depth = 0;

	MatrixStack.currentMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

	MatrixStack.tmp = new Array(16);

	MatrixStack.reset = function () {
	    this.depth = 0;
	};

	MatrixStack.loadIdentity = function () {
	    for (var i = 0; i < 16; i++) {
	        this.currentMatrix[i] = i % 5 == 0 ? 1 : 0;
	    }
	};

	MatrixStack.push = function () {
	    var offset = this.depth * 16;
	    var nextOffset = (this.depth + 1) * 16;

	    if (this.matrixStack.length < nextOffset + 16) {
	        this.matrixStack.length = nextOffset + 16;
	    }

	    for (var i = 0; i < 16; i++) {
	        this.matrixStack[nextOffset + i] = this.currentMatrix[i];
	    }

	    this.depth++;
	};

	MatrixStack.pop = function () {
	    this.depth--;
	    if (this.depth < 0) {
	        myError("Invalid matrix stack.");
	        this.depth = 0;
	    }

	    var offset = this.depth * 16;
	    for (var i = 0; i < 16; i++) {
	        this.currentMatrix[i] = this.matrixStack[offset + i];
	    }
	};

	MatrixStack.getMatrix = function () {
	    return this.currentMatrix;
	};

	MatrixStack.multMatrix = function (matNew) {
	    var i, j, k;

	    for (i = 0; i < 16; i++) {
	        this.tmp[i] = 0;
	    }

	    for (i = 0; i < 4; i++) {
	        for (j = 0; j < 4; j++) {
	            for (k = 0; k < 4; k++) {
	                this.tmp[i + j * 4] += this.currentMatrix[i + k * 4] * matNew[k + j * 4];
	            }
	        }
	    }
	    for (i = 0; i < 16; i++) {
	        this.currentMatrix[i] = this.tmp[i];
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ModelSettingJson;
	function ModelSettingJson(json) {
	    this.NAME = "name";
	    this.ID = "id";
	    this.MODEL = "model";
	    this.TEXTURES = "textures";
	    this.HIT_AREAS = "hit_areas";
	    this.PHYSICS = "physics";
	    this.POSE = "pose";
	    this.EXPRESSIONS = "expressions";
	    this.MOTION_GROUPS = "motions";
	    this.SOUND = "sound";
	    this.FADE_IN = "fade_in";
	    this.FADE_OUT = "fade_out";
	    this.LAYOUT = "layout";
	    this.INIT_PARAM = "init_param";
	    this.INIT_PARTS_VISIBLE = "init_parts_visible";
	    this.VALUE = "val";
	    this.FILE = "file";

	    this.json = json || {};
	}

	// ModelSettingJson.prototype.loadModelSetting = function(path, callback)
	// {
	//     var thisRef = this;
	//     var pm = Live2DFramework.getPlatformManager();
	//     pm.loadBytes(path, function(buf) {
	//         var str = String.fromCharCode.apply(null,new Uint8Array(buf));
	//         thisRef.json = JSON.parse(str);
	//         callback();
	//     });
	// };


	ModelSettingJson.prototype.getTextureFile = function (n) {
	    if (this.json[this.TEXTURES] == null || this.json[this.TEXTURES][n] == null) return null;

	    return this.json[this.TEXTURES][n];
	};

	ModelSettingJson.prototype.getModelFile = function () {
	    return this.json[this.MODEL];
	};

	ModelSettingJson.prototype.getTextureNum = function () {
	    if (this.json[this.TEXTURES] == null) return 0;

	    return this.json[this.TEXTURES].length;
	};

	ModelSettingJson.prototype.getHitAreaNum = function () {
	    if (this.json[this.HIT_AREAS] == null) return 0;

	    return this.json[this.HIT_AREAS].length;
	};

	ModelSettingJson.prototype.getHitAreaID = function (n) {
	    if (this.json[this.HIT_AREAS] == null || this.json[this.HIT_AREAS][n] == null) return null;

	    return this.json[this.HIT_AREAS][n][this.ID];
	};

	ModelSettingJson.prototype.getHitAreaName = function (n) {
	    if (this.json[this.HIT_AREAS] == null || this.json[this.HIT_AREAS][n] == null) return null;

	    return this.json[this.HIT_AREAS][n][this.NAME];
	};

	ModelSettingJson.prototype.getPhysicsFile = function () {
	    return this.json[this.PHYSICS];
	};

	ModelSettingJson.prototype.getPoseFile = function () {
	    return this.json[this.POSE];
	};

	ModelSettingJson.prototype.getExpressionNum = function () {
	    return this.json[this.EXPRESSIONS] == null ? 0 : this.json[this.EXPRESSIONS].length;
	};

	ModelSettingJson.prototype.getExpressionFile = function (n) {
	    if (this.json[this.EXPRESSIONS] == null) return null;
	    return this.json[this.EXPRESSIONS][n][this.FILE];
	};

	ModelSettingJson.prototype.getExpressionName = function (n) {
	    if (this.json[this.EXPRESSIONS] == null) return null;
	    return this.json[this.EXPRESSIONS][n][this.NAME];
	};

	ModelSettingJson.prototype.getLayout = function () {
	    return this.json[this.LAYOUT];
	};

	ModelSettingJson.prototype.getInitParamNum = function () {
	    return this.json[this.INIT_PARAM] == null ? 0 : this.json[this.INIT_PARAM].length;
	};

	ModelSettingJson.prototype.getMotionNum = function (name) {
	    if (this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][name] == null) return 0;

	    return this.json[this.MOTION_GROUPS][name].length;
	};

	ModelSettingJson.prototype.getMotionFile = function (name, n) {
	    if (this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][name] == null || this.json[this.MOTION_GROUPS][name][n] == null) return null;

	    return this.json[this.MOTION_GROUPS][name][n][this.FILE];
	};

	ModelSettingJson.prototype.getMotionSound = function (name, n) {
	    if (this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][name] == null || this.json[this.MOTION_GROUPS][name][n] == null || this.json[this.MOTION_GROUPS][name][n][this.SOUND] == null) return null;

	    return this.json[this.MOTION_GROUPS][name][n][this.SOUND];
	};

	ModelSettingJson.prototype.getMotionFadeIn = function (name, n) {
	    if (this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][name] == null || this.json[this.MOTION_GROUPS][name][n] == null || this.json[this.MOTION_GROUPS][name][n][this.FADE_IN] == null) return 1000;

	    return this.json[this.MOTION_GROUPS][name][n][this.FADE_IN];
	};

	ModelSettingJson.prototype.getMotionFadeOut = function (name, n) {
	    if (this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][name] == null || this.json[this.MOTION_GROUPS][name][n] == null || this.json[this.MOTION_GROUPS][name][n][this.FADE_OUT] == null) return 1000;

	    return this.json[this.MOTION_GROUPS][name][n][this.FADE_OUT];
	};

	ModelSettingJson.prototype.getInitParamID = function (n) {
	    if (this.json[this.INIT_PARAM] == null || this.json[this.INIT_PARAM][n] == null) return null;

	    return this.json[this.INIT_PARAM][n][this.ID];
	};

	ModelSettingJson.prototype.getInitParamValue = function (n) {
	    if (this.json[this.INIT_PARAM] == null || this.json[this.INIT_PARAM][n] == null) return NaN;

	    return this.json[this.INIT_PARAM][n][this.VALUE];
	};

	ModelSettingJson.prototype.getInitPartsVisibleNum = function () {
	    return this.json[this.INIT_PARTS_VISIBLE] == null ? 0 : this.json[this.INIT_PARTS_VISIBLE].length;
	};

	ModelSettingJson.prototype.getInitPartsVisibleID = function (n) {
	    if (this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][n] == null) return null;
	    return this.json[this.INIT_PARTS_VISIBLE][n][this.ID];
	};

	ModelSettingJson.prototype.getInitPartsVisibleValue = function (n) {
	    if (this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][n] == null) return NaN;

	    return this.json[this.INIT_PARTS_VISIBLE][n][this.VALUE];
	};

/***/ }
/******/ ])
});
;