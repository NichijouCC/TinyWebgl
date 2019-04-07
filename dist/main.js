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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/GLConstant.ts":
/*!***************************!*\
  !*** ./src/GLConstant.ts ***!
  \***************************/
/*! exports provided: GLConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLConstants", function() { return GLConstants; });
var GLConstants;
(function (GLConstants) {
    GLConstants[GLConstants["DEPTH_BUFFER_BIT"] = 256] = "DEPTH_BUFFER_BIT";
    GLConstants[GLConstants["STENCIL_BUFFER_BIT"] = 1024] = "STENCIL_BUFFER_BIT";
    GLConstants[GLConstants["COLOR_BUFFER_BIT"] = 16384] = "COLOR_BUFFER_BIT";
    GLConstants[GLConstants["POINTS"] = 0] = "POINTS";
    GLConstants[GLConstants["LINES"] = 1] = "LINES";
    GLConstants[GLConstants["LINE_LOOP"] = 2] = "LINE_LOOP";
    GLConstants[GLConstants["LINE_STRIP"] = 3] = "LINE_STRIP";
    GLConstants[GLConstants["TRIANGLES"] = 4] = "TRIANGLES";
    GLConstants[GLConstants["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
    GLConstants[GLConstants["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
    GLConstants[GLConstants["ZERO"] = 0] = "ZERO";
    GLConstants[GLConstants["ONE"] = 1] = "ONE";
    GLConstants[GLConstants["SRC_COLOR"] = 768] = "SRC_COLOR";
    GLConstants[GLConstants["ONE_MINUS_SRC_COLOR"] = 769] = "ONE_MINUS_SRC_COLOR";
    GLConstants[GLConstants["SRC_ALPHA"] = 770] = "SRC_ALPHA";
    GLConstants[GLConstants["ONE_MINUS_SRC_ALPHA"] = 771] = "ONE_MINUS_SRC_ALPHA";
    GLConstants[GLConstants["DST_ALPHA"] = 772] = "DST_ALPHA";
    GLConstants[GLConstants["ONE_MINUS_DST_ALPHA"] = 773] = "ONE_MINUS_DST_ALPHA";
    GLConstants[GLConstants["DST_COLOR"] = 774] = "DST_COLOR";
    GLConstants[GLConstants["ONE_MINUS_DST_COLOR"] = 775] = "ONE_MINUS_DST_COLOR";
    GLConstants[GLConstants["SRC_ALPHA_SATURATE"] = 776] = "SRC_ALPHA_SATURATE";
    GLConstants[GLConstants["FUNC_ADD"] = 32774] = "FUNC_ADD";
    GLConstants[GLConstants["BLEND_EQUATION"] = 32777] = "BLEND_EQUATION";
    GLConstants[GLConstants["BLEND_EQUATION_RGB"] = 32777] = "BLEND_EQUATION_RGB";
    GLConstants[GLConstants["BLEND_EQUATION_ALPHA"] = 34877] = "BLEND_EQUATION_ALPHA";
    GLConstants[GLConstants["FUNC_SUBTRACT"] = 32778] = "FUNC_SUBTRACT";
    GLConstants[GLConstants["FUNC_REVERSE_SUBTRACT"] = 32779] = "FUNC_REVERSE_SUBTRACT";
    GLConstants[GLConstants["BLEND_DST_RGB"] = 32968] = "BLEND_DST_RGB";
    GLConstants[GLConstants["BLEND_SRC_RGB"] = 32969] = "BLEND_SRC_RGB";
    GLConstants[GLConstants["BLEND_DST_ALPHA"] = 32970] = "BLEND_DST_ALPHA";
    GLConstants[GLConstants["BLEND_SRC_ALPHA"] = 32971] = "BLEND_SRC_ALPHA";
    GLConstants[GLConstants["CONSTANT_COLOR"] = 32769] = "CONSTANT_COLOR";
    GLConstants[GLConstants["ONE_MINUS_CONSTANT_COLOR"] = 32770] = "ONE_MINUS_CONSTANT_COLOR";
    GLConstants[GLConstants["CONSTANT_ALPHA"] = 32771] = "CONSTANT_ALPHA";
    GLConstants[GLConstants["ONE_MINUS_CONSTANT_ALPHA"] = 32772] = "ONE_MINUS_CONSTANT_ALPHA";
    GLConstants[GLConstants["BLEND_COLOR"] = 32773] = "BLEND_COLOR";
    GLConstants[GLConstants["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
    GLConstants[GLConstants["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
    GLConstants[GLConstants["ARRAY_BUFFER_BINDING"] = 34964] = "ARRAY_BUFFER_BINDING";
    GLConstants[GLConstants["ELEMENT_ARRAY_BUFFER_BINDING"] = 34965] = "ELEMENT_ARRAY_BUFFER_BINDING";
    GLConstants[GLConstants["STREAM_DRAW"] = 35040] = "STREAM_DRAW";
    GLConstants[GLConstants["STATIC_DRAW"] = 35044] = "STATIC_DRAW";
    GLConstants[GLConstants["DYNAMIC_DRAW"] = 35048] = "DYNAMIC_DRAW";
    GLConstants[GLConstants["BUFFER_SIZE"] = 34660] = "BUFFER_SIZE";
    GLConstants[GLConstants["BUFFER_USAGE"] = 34661] = "BUFFER_USAGE";
    GLConstants[GLConstants["CURRENT_VERTEX_ATTRIB"] = 34342] = "CURRENT_VERTEX_ATTRIB";
    GLConstants[GLConstants["FRONT"] = 1028] = "FRONT";
    GLConstants[GLConstants["BACK"] = 1029] = "BACK";
    GLConstants[GLConstants["FRONT_AND_BACK"] = 1032] = "FRONT_AND_BACK";
    GLConstants[GLConstants["CULL_FACE"] = 2884] = "CULL_FACE";
    GLConstants[GLConstants["BLEND"] = 3042] = "BLEND";
    GLConstants[GLConstants["DITHER"] = 3024] = "DITHER";
    GLConstants[GLConstants["STENCIL_TEST"] = 2960] = "STENCIL_TEST";
    GLConstants[GLConstants["DEPTH_TEST"] = 2929] = "DEPTH_TEST";
    GLConstants[GLConstants["SCISSOR_TEST"] = 3089] = "SCISSOR_TEST";
    GLConstants[GLConstants["POLYGON_OFFSET_FILL"] = 32823] = "POLYGON_OFFSET_FILL";
    GLConstants[GLConstants["SAMPLE_ALPHA_TO_COVERAGE"] = 32926] = "SAMPLE_ALPHA_TO_COVERAGE";
    GLConstants[GLConstants["SAMPLE_COVERAGE"] = 32928] = "SAMPLE_COVERAGE";
    GLConstants[GLConstants["NO_ERROR"] = 0] = "NO_ERROR";
    GLConstants[GLConstants["INVALID_ENUM"] = 1280] = "INVALID_ENUM";
    GLConstants[GLConstants["INVALID_VALUE"] = 1281] = "INVALID_VALUE";
    GLConstants[GLConstants["INVALID_OPERATION"] = 1282] = "INVALID_OPERATION";
    GLConstants[GLConstants["OUT_OF_MEMORY"] = 1285] = "OUT_OF_MEMORY";
    GLConstants[GLConstants["CW"] = 2304] = "CW";
    GLConstants[GLConstants["CCW"] = 2305] = "CCW";
    GLConstants[GLConstants["LINE_WIDTH"] = 2849] = "LINE_WIDTH";
    GLConstants[GLConstants["ALIASED_POINT_SIZE_RANGE"] = 33901] = "ALIASED_POINT_SIZE_RANGE";
    GLConstants[GLConstants["ALIASED_LINE_WIDTH_RANGE"] = 33902] = "ALIASED_LINE_WIDTH_RANGE";
    GLConstants[GLConstants["CULL_FACE_MODE"] = 2885] = "CULL_FACE_MODE";
    GLConstants[GLConstants["FRONT_FACE"] = 2886] = "FRONT_FACE";
    GLConstants[GLConstants["DEPTH_RANGE"] = 2928] = "DEPTH_RANGE";
    GLConstants[GLConstants["DEPTH_WRITEMASK"] = 2930] = "DEPTH_WRITEMASK";
    GLConstants[GLConstants["DEPTH_CLEAR_VALUE"] = 2931] = "DEPTH_CLEAR_VALUE";
    GLConstants[GLConstants["DEPTH_FUNC"] = 2932] = "DEPTH_FUNC";
    GLConstants[GLConstants["STENCIL_CLEAR_VALUE"] = 2961] = "STENCIL_CLEAR_VALUE";
    GLConstants[GLConstants["STENCIL_FUNC"] = 2962] = "STENCIL_FUNC";
    GLConstants[GLConstants["STENCIL_FAIL"] = 2964] = "STENCIL_FAIL";
    GLConstants[GLConstants["STENCIL_PASS_DEPTH_FAIL"] = 2965] = "STENCIL_PASS_DEPTH_FAIL";
    GLConstants[GLConstants["STENCIL_PASS_DEPTH_PASS"] = 2966] = "STENCIL_PASS_DEPTH_PASS";
    GLConstants[GLConstants["STENCIL_REF"] = 2967] = "STENCIL_REF";
    GLConstants[GLConstants["STENCIL_VALUE_MASK"] = 2963] = "STENCIL_VALUE_MASK";
    GLConstants[GLConstants["STENCIL_WRITEMASK"] = 2968] = "STENCIL_WRITEMASK";
    GLConstants[GLConstants["STENCIL_BACK_FUNC"] = 34816] = "STENCIL_BACK_FUNC";
    GLConstants[GLConstants["STENCIL_BACK_FAIL"] = 34817] = "STENCIL_BACK_FAIL";
    GLConstants[GLConstants["STENCIL_BACK_PASS_DEPTH_FAIL"] = 34818] = "STENCIL_BACK_PASS_DEPTH_FAIL";
    GLConstants[GLConstants["STENCIL_BACK_PASS_DEPTH_PASS"] = 34819] = "STENCIL_BACK_PASS_DEPTH_PASS";
    GLConstants[GLConstants["STENCIL_BACK_REF"] = 36003] = "STENCIL_BACK_REF";
    GLConstants[GLConstants["STENCIL_BACK_VALUE_MASK"] = 36004] = "STENCIL_BACK_VALUE_MASK";
    GLConstants[GLConstants["STENCIL_BACK_WRITEMASK"] = 36005] = "STENCIL_BACK_WRITEMASK";
    GLConstants[GLConstants["VIEWPORT"] = 2978] = "VIEWPORT";
    GLConstants[GLConstants["SCISSOR_BOX"] = 3088] = "SCISSOR_BOX";
    GLConstants[GLConstants["COLOR_CLEAR_VALUE"] = 3106] = "COLOR_CLEAR_VALUE";
    GLConstants[GLConstants["COLOR_WRITEMASK"] = 3107] = "COLOR_WRITEMASK";
    GLConstants[GLConstants["UNPACK_ALIGNMENT"] = 3317] = "UNPACK_ALIGNMENT";
    GLConstants[GLConstants["PACK_ALIGNMENT"] = 3333] = "PACK_ALIGNMENT";
    GLConstants[GLConstants["MAX_TEXTURE_SIZE"] = 3379] = "MAX_TEXTURE_SIZE";
    GLConstants[GLConstants["MAX_VIEWPORT_DIMS"] = 3386] = "MAX_VIEWPORT_DIMS";
    GLConstants[GLConstants["SUBPIXEL_BITS"] = 3408] = "SUBPIXEL_BITS";
    GLConstants[GLConstants["RED_BITS"] = 3410] = "RED_BITS";
    GLConstants[GLConstants["GREEN_BITS"] = 3411] = "GREEN_BITS";
    GLConstants[GLConstants["BLUE_BITS"] = 3412] = "BLUE_BITS";
    GLConstants[GLConstants["ALPHA_BITS"] = 3413] = "ALPHA_BITS";
    GLConstants[GLConstants["DEPTH_BITS"] = 3414] = "DEPTH_BITS";
    GLConstants[GLConstants["STENCIL_BITS"] = 3415] = "STENCIL_BITS";
    GLConstants[GLConstants["POLYGON_OFFSET_UNITS"] = 10752] = "POLYGON_OFFSET_UNITS";
    GLConstants[GLConstants["POLYGON_OFFSET_FACTOR"] = 32824] = "POLYGON_OFFSET_FACTOR";
    GLConstants[GLConstants["TEXTURE_BINDING_2D"] = 32873] = "TEXTURE_BINDING_2D";
    GLConstants[GLConstants["SAMPLE_BUFFERS"] = 32936] = "SAMPLE_BUFFERS";
    GLConstants[GLConstants["SAMPLES"] = 32937] = "SAMPLES";
    GLConstants[GLConstants["SAMPLE_COVERAGE_VALUE"] = 32938] = "SAMPLE_COVERAGE_VALUE";
    GLConstants[GLConstants["SAMPLE_COVERAGE_INVERT"] = 32939] = "SAMPLE_COVERAGE_INVERT";
    GLConstants[GLConstants["COMPRESSED_TEXTURE_FORMATS"] = 34467] = "COMPRESSED_TEXTURE_FORMATS";
    GLConstants[GLConstants["DONT_CARE"] = 4352] = "DONT_CARE";
    GLConstants[GLConstants["FASTEST"] = 4353] = "FASTEST";
    GLConstants[GLConstants["NICEST"] = 4354] = "NICEST";
    GLConstants[GLConstants["GENERATE_MIPMAP_HINT"] = 33170] = "GENERATE_MIPMAP_HINT";
    GLConstants[GLConstants["BYTE"] = 5120] = "BYTE";
    GLConstants[GLConstants["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
    GLConstants[GLConstants["SHORT"] = 5122] = "SHORT";
    GLConstants[GLConstants["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    GLConstants[GLConstants["INT"] = 5124] = "INT";
    GLConstants[GLConstants["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
    GLConstants[GLConstants["FLOAT"] = 5126] = "FLOAT";
    GLConstants[GLConstants["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
    GLConstants[GLConstants["ALPHA"] = 6406] = "ALPHA";
    GLConstants[GLConstants["RGB"] = 6407] = "RGB";
    GLConstants[GLConstants["RGBA"] = 6408] = "RGBA";
    GLConstants[GLConstants["LUMINANCE"] = 6409] = "LUMINANCE";
    GLConstants[GLConstants["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
    GLConstants[GLConstants["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
    GLConstants[GLConstants["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
    GLConstants[GLConstants["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
    GLConstants[GLConstants["FRAGMENT_SHADER"] = 35632] = "FRAGMENT_SHADER";
    GLConstants[GLConstants["VERTEX_SHADER"] = 35633] = "VERTEX_SHADER";
    GLConstants[GLConstants["MAX_VERTEX_ATTRIBS"] = 34921] = "MAX_VERTEX_ATTRIBS";
    GLConstants[GLConstants["MAX_VERTEX_UNIFORM_VECTORS"] = 36347] = "MAX_VERTEX_UNIFORM_VECTORS";
    GLConstants[GLConstants["MAX_varying_VECTORS"] = 36348] = "MAX_varying_VECTORS";
    GLConstants[GLConstants["MAX_COMBINED_TEXTURE_IMAGE_UNITS"] = 35661] = "MAX_COMBINED_TEXTURE_IMAGE_UNITS";
    GLConstants[GLConstants["MAX_VERTEX_TEXTURE_IMAGE_UNITS"] = 35660] = "MAX_VERTEX_TEXTURE_IMAGE_UNITS";
    GLConstants[GLConstants["MAX_TEXTURE_IMAGE_UNITS"] = 34930] = "MAX_TEXTURE_IMAGE_UNITS";
    GLConstants[GLConstants["MAX_FRAGMENT_UNIFORM_VECTORS"] = 36349] = "MAX_FRAGMENT_UNIFORM_VECTORS";
    GLConstants[GLConstants["SHADER_TYPE"] = 35663] = "SHADER_TYPE";
    GLConstants[GLConstants["DELETE_STATUS"] = 35712] = "DELETE_STATUS";
    GLConstants[GLConstants["LINK_STATUS"] = 35714] = "LINK_STATUS";
    GLConstants[GLConstants["VALIDATE_STATUS"] = 35715] = "VALIDATE_STATUS";
    GLConstants[GLConstants["ATTACHED_SHADERS"] = 35717] = "ATTACHED_SHADERS";
    GLConstants[GLConstants["ACTIVE_UNIFORMS"] = 35718] = "ACTIVE_UNIFORMS";
    GLConstants[GLConstants["ACTIVE_ATTRIBUTES"] = 35721] = "ACTIVE_ATTRIBUTES";
    GLConstants[GLConstants["SHADING_LANGUAGE_VERSION"] = 35724] = "SHADING_LANGUAGE_VERSION";
    GLConstants[GLConstants["CURRENT_PROGRAM"] = 35725] = "CURRENT_PROGRAM";
    GLConstants[GLConstants["NEVER"] = 512] = "NEVER";
    GLConstants[GLConstants["LESS"] = 513] = "LESS";
    GLConstants[GLConstants["EQUAL"] = 514] = "EQUAL";
    GLConstants[GLConstants["LEQUAL"] = 515] = "LEQUAL";
    GLConstants[GLConstants["GREATER"] = 516] = "GREATER";
    GLConstants[GLConstants["NOTEQUAL"] = 517] = "NOTEQUAL";
    GLConstants[GLConstants["GEQUAL"] = 518] = "GEQUAL";
    GLConstants[GLConstants["ALWAYS"] = 519] = "ALWAYS";
    GLConstants[GLConstants["KEEP"] = 7680] = "KEEP";
    GLConstants[GLConstants["REPLACE"] = 7681] = "REPLACE";
    GLConstants[GLConstants["INCR"] = 7682] = "INCR";
    GLConstants[GLConstants["DECR"] = 7683] = "DECR";
    GLConstants[GLConstants["INVERT"] = 5386] = "INVERT";
    GLConstants[GLConstants["INCR_WRAP"] = 34055] = "INCR_WRAP";
    GLConstants[GLConstants["DECR_WRAP"] = 34056] = "DECR_WRAP";
    GLConstants[GLConstants["VENDOR"] = 7936] = "VENDOR";
    GLConstants[GLConstants["RENDERER"] = 7937] = "RENDERER";
    GLConstants[GLConstants["VERSION"] = 7938] = "VERSION";
    GLConstants[GLConstants["NEAREST"] = 9728] = "NEAREST";
    GLConstants[GLConstants["LINEAR"] = 9729] = "LINEAR";
    GLConstants[GLConstants["NEAREST_MIPMAP_NEAREST"] = 9984] = "NEAREST_MIPMAP_NEAREST";
    GLConstants[GLConstants["LINEAR_MIPMAP_NEAREST"] = 9985] = "LINEAR_MIPMAP_NEAREST";
    GLConstants[GLConstants["NEAREST_MIPMAP_LINEAR"] = 9986] = "NEAREST_MIPMAP_LINEAR";
    GLConstants[GLConstants["LINEAR_MIPMAP_LINEAR"] = 9987] = "LINEAR_MIPMAP_LINEAR";
    GLConstants[GLConstants["TEXTURE_MAG_FILTER"] = 10240] = "TEXTURE_MAG_FILTER";
    GLConstants[GLConstants["TEXTURE_MIN_FILTER"] = 10241] = "TEXTURE_MIN_FILTER";
    GLConstants[GLConstants["TEXTURE_WRAP_S"] = 10242] = "TEXTURE_WRAP_S";
    GLConstants[GLConstants["TEXTURE_WRAP_T"] = 10243] = "TEXTURE_WRAP_T";
    GLConstants[GLConstants["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
    GLConstants[GLConstants["TEXTURE"] = 5890] = "TEXTURE";
    GLConstants[GLConstants["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
    GLConstants[GLConstants["TEXTURE_BINDING_CUBE_MAP"] = 34068] = "TEXTURE_BINDING_CUBE_MAP";
    GLConstants[GLConstants["TEXTURE_CUBE_MAP_POSITIVE_X"] = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
    GLConstants[GLConstants["TEXTURE_CUBE_MAP_NEGATIVE_X"] = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
    GLConstants[GLConstants["TEXTURE_CUBE_MAP_POSITIVE_Y"] = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
    GLConstants[GLConstants["TEXTURE_CUBE_MAP_NEGATIVE_Y"] = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
    GLConstants[GLConstants["TEXTURE_CUBE_MAP_POSITIVE_Z"] = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
    GLConstants[GLConstants["TEXTURE_CUBE_MAP_NEGATIVE_Z"] = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
    GLConstants[GLConstants["MAX_CUBE_MAP_TEXTURE_SIZE"] = 34076] = "MAX_CUBE_MAP_TEXTURE_SIZE";
    GLConstants[GLConstants["TEXTURE0"] = 33984] = "TEXTURE0";
    GLConstants[GLConstants["TEXTURE1"] = 33985] = "TEXTURE1";
    GLConstants[GLConstants["TEXTURE2"] = 33986] = "TEXTURE2";
    GLConstants[GLConstants["TEXTURE3"] = 33987] = "TEXTURE3";
    GLConstants[GLConstants["TEXTURE4"] = 33988] = "TEXTURE4";
    GLConstants[GLConstants["TEXTURE5"] = 33989] = "TEXTURE5";
    GLConstants[GLConstants["TEXTURE6"] = 33990] = "TEXTURE6";
    GLConstants[GLConstants["TEXTURE7"] = 33991] = "TEXTURE7";
    GLConstants[GLConstants["TEXTURE8"] = 33992] = "TEXTURE8";
    GLConstants[GLConstants["TEXTURE9"] = 33993] = "TEXTURE9";
    GLConstants[GLConstants["TEXTURE10"] = 33994] = "TEXTURE10";
    GLConstants[GLConstants["TEXTURE11"] = 33995] = "TEXTURE11";
    GLConstants[GLConstants["TEXTURE12"] = 33996] = "TEXTURE12";
    GLConstants[GLConstants["TEXTURE13"] = 33997] = "TEXTURE13";
    GLConstants[GLConstants["TEXTURE14"] = 33998] = "TEXTURE14";
    GLConstants[GLConstants["TEXTURE15"] = 33999] = "TEXTURE15";
    GLConstants[GLConstants["TEXTURE16"] = 34000] = "TEXTURE16";
    GLConstants[GLConstants["TEXTURE17"] = 34001] = "TEXTURE17";
    GLConstants[GLConstants["TEXTURE18"] = 34002] = "TEXTURE18";
    GLConstants[GLConstants["TEXTURE19"] = 34003] = "TEXTURE19";
    GLConstants[GLConstants["TEXTURE20"] = 34004] = "TEXTURE20";
    GLConstants[GLConstants["TEXTURE21"] = 34005] = "TEXTURE21";
    GLConstants[GLConstants["TEXTURE22"] = 34006] = "TEXTURE22";
    GLConstants[GLConstants["TEXTURE23"] = 34007] = "TEXTURE23";
    GLConstants[GLConstants["TEXTURE24"] = 34008] = "TEXTURE24";
    GLConstants[GLConstants["TEXTURE25"] = 34009] = "TEXTURE25";
    GLConstants[GLConstants["TEXTURE26"] = 34010] = "TEXTURE26";
    GLConstants[GLConstants["TEXTURE27"] = 34011] = "TEXTURE27";
    GLConstants[GLConstants["TEXTURE28"] = 34012] = "TEXTURE28";
    GLConstants[GLConstants["TEXTURE29"] = 34013] = "TEXTURE29";
    GLConstants[GLConstants["TEXTURE30"] = 34014] = "TEXTURE30";
    GLConstants[GLConstants["TEXTURE31"] = 34015] = "TEXTURE31";
    GLConstants[GLConstants["ACTIVE_TEXTURE"] = 34016] = "ACTIVE_TEXTURE";
    GLConstants[GLConstants["REPEAT"] = 10497] = "REPEAT";
    GLConstants[GLConstants["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
    GLConstants[GLConstants["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
    GLConstants[GLConstants["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
    GLConstants[GLConstants["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
    GLConstants[GLConstants["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
    GLConstants[GLConstants["INT_VEC2"] = 35667] = "INT_VEC2";
    GLConstants[GLConstants["INT_VEC3"] = 35668] = "INT_VEC3";
    GLConstants[GLConstants["INT_VEC4"] = 35669] = "INT_VEC4";
    GLConstants[GLConstants["BOOL"] = 35670] = "BOOL";
    GLConstants[GLConstants["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
    GLConstants[GLConstants["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
    GLConstants[GLConstants["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
    GLConstants[GLConstants["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
    GLConstants[GLConstants["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
    GLConstants[GLConstants["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
    GLConstants[GLConstants["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
    GLConstants[GLConstants["SAMPLER_CUBE"] = 35680] = "SAMPLER_CUBE";
    GLConstants[GLConstants["VERTEX_ATTRIB_ARRAY_ENABLED"] = 34338] = "VERTEX_ATTRIB_ARRAY_ENABLED";
    GLConstants[GLConstants["VERTEX_ATTRIB_ARRAY_SIZE"] = 34339] = "VERTEX_ATTRIB_ARRAY_SIZE";
    GLConstants[GLConstants["VERTEX_ATTRIB_ARRAY_STRIDE"] = 34340] = "VERTEX_ATTRIB_ARRAY_STRIDE";
    GLConstants[GLConstants["VERTEX_ATTRIB_ARRAY_TYPE"] = 34341] = "VERTEX_ATTRIB_ARRAY_TYPE";
    GLConstants[GLConstants["VERTEX_ATTRIB_ARRAY_NORMALIZED"] = 34922] = "VERTEX_ATTRIB_ARRAY_NORMALIZED";
    GLConstants[GLConstants["VERTEX_ATTRIB_ARRAY_POINTER"] = 34373] = "VERTEX_ATTRIB_ARRAY_POINTER";
    GLConstants[GLConstants["VERTEX_ATTRIB_ARRAY_BUFFER_BINDING"] = 34975] = "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING";
    GLConstants[GLConstants["IMPLEMENTATION_COLOR_READ_TYPE"] = 35738] = "IMPLEMENTATION_COLOR_READ_TYPE";
    GLConstants[GLConstants["IMPLEMENTATION_COLOR_READ_FORMAT"] = 35739] = "IMPLEMENTATION_COLOR_READ_FORMAT";
    GLConstants[GLConstants["COMPILE_STATUS"] = 35713] = "COMPILE_STATUS";
    GLConstants[GLConstants["LOW_FLOAT"] = 36336] = "LOW_FLOAT";
    GLConstants[GLConstants["MEDIUM_FLOAT"] = 36337] = "MEDIUM_FLOAT";
    GLConstants[GLConstants["HIGH_FLOAT"] = 36338] = "HIGH_FLOAT";
    GLConstants[GLConstants["LOW_INT"] = 36339] = "LOW_INT";
    GLConstants[GLConstants["MEDIUM_INT"] = 36340] = "MEDIUM_INT";
    GLConstants[GLConstants["HIGH_INT"] = 36341] = "HIGH_INT";
    GLConstants[GLConstants["FRAMEBUFFER"] = 36160] = "FRAMEBUFFER";
    GLConstants[GLConstants["RENDERBUFFER"] = 36161] = "RENDERBUFFER";
    GLConstants[GLConstants["RGBA4"] = 32854] = "RGBA4";
    GLConstants[GLConstants["RGB5_A1"] = 32855] = "RGB5_A1";
    GLConstants[GLConstants["RGB565"] = 36194] = "RGB565";
    GLConstants[GLConstants["DEPTH_COMPONENT16"] = 33189] = "DEPTH_COMPONENT16";
    GLConstants[GLConstants["STENCIL_INDEX"] = 6401] = "STENCIL_INDEX";
    GLConstants[GLConstants["STENCIL_INDEX8"] = 36168] = "STENCIL_INDEX8";
    GLConstants[GLConstants["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
    GLConstants[GLConstants["RENDERBUFFER_WIDTH"] = 36162] = "RENDERBUFFER_WIDTH";
    GLConstants[GLConstants["RENDERBUFFER_HEIGHT"] = 36163] = "RENDERBUFFER_HEIGHT";
    GLConstants[GLConstants["RENDERBUFFER_INTERNAL_FORMAT"] = 36164] = "RENDERBUFFER_INTERNAL_FORMAT";
    GLConstants[GLConstants["RENDERBUFFER_RED_SIZE"] = 36176] = "RENDERBUFFER_RED_SIZE";
    GLConstants[GLConstants["RENDERBUFFER_GREEN_SIZE"] = 36177] = "RENDERBUFFER_GREEN_SIZE";
    GLConstants[GLConstants["RENDERBUFFER_BLUE_SIZE"] = 36178] = "RENDERBUFFER_BLUE_SIZE";
    GLConstants[GLConstants["RENDERBUFFER_ALPHA_SIZE"] = 36179] = "RENDERBUFFER_ALPHA_SIZE";
    GLConstants[GLConstants["RENDERBUFFER_DEPTH_SIZE"] = 36180] = "RENDERBUFFER_DEPTH_SIZE";
    GLConstants[GLConstants["RENDERBUFFER_STENCIL_SIZE"] = 36181] = "RENDERBUFFER_STENCIL_SIZE";
    GLConstants[GLConstants["FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE"] = 36048] = "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE";
    GLConstants[GLConstants["FRAMEBUFFER_ATTACHMENT_OBJECT_NAME"] = 36049] = "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME";
    GLConstants[GLConstants["FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL"] = 36050] = "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL";
    GLConstants[GLConstants["FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE"] = 36051] = "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE";
    GLConstants[GLConstants["COLOR_ATTACHMENT0"] = 36064] = "COLOR_ATTACHMENT0";
    GLConstants[GLConstants["DEPTH_ATTACHMENT"] = 36096] = "DEPTH_ATTACHMENT";
    GLConstants[GLConstants["STENCIL_ATTACHMENT"] = 36128] = "STENCIL_ATTACHMENT";
    GLConstants[GLConstants["DEPTH_STENCIL_ATTACHMENT"] = 33306] = "DEPTH_STENCIL_ATTACHMENT";
    GLConstants[GLConstants["NONE"] = 0] = "NONE";
    GLConstants[GLConstants["FRAMEBUFFER_COMPLETE"] = 36053] = "FRAMEBUFFER_COMPLETE";
    GLConstants[GLConstants["FRAMEBUFFER_INCOMPLETE_ATTACHMENT"] = 36054] = "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
    GLConstants[GLConstants["FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"] = 36055] = "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
    GLConstants[GLConstants["FRAMEBUFFER_INCOMPLETE_DIMENSIONS"] = 36057] = "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
    GLConstants[GLConstants["FRAMEBUFFER_UNSUPPORTED"] = 36061] = "FRAMEBUFFER_UNSUPPORTED";
    GLConstants[GLConstants["FRAMEBUFFER_BINDING"] = 36006] = "FRAMEBUFFER_BINDING";
    GLConstants[GLConstants["RENDERBUFFER_BINDING"] = 36007] = "RENDERBUFFER_BINDING";
    GLConstants[GLConstants["MAX_RENDERBUFFER_SIZE"] = 34024] = "MAX_RENDERBUFFER_SIZE";
    GLConstants[GLConstants["INVALID_FRAMEBUFFER_OPERATION"] = 1286] = "INVALID_FRAMEBUFFER_OPERATION";
    GLConstants[GLConstants["UNPACK_FLIP_Y_WEBGL"] = 37440] = "UNPACK_FLIP_Y_WEBGL";
    GLConstants[GLConstants["UNPACK_PREMULTIPLY_ALPHA_WEBGL"] = 37441] = "UNPACK_PREMULTIPLY_ALPHA_WEBGL";
    GLConstants[GLConstants["CONTEXT_LOST_WEBGL"] = 37442] = "CONTEXT_LOST_WEBGL";
    GLConstants[GLConstants["UNPACK_COLORSPACE_CONVERSION_WEBGL"] = 37443] = "UNPACK_COLORSPACE_CONVERSION_WEBGL";
    GLConstants[GLConstants["BROWSER_DEFAULT_WEBGL"] = 37444] = "BROWSER_DEFAULT_WEBGL";
    GLConstants[GLConstants["COMPRESSED_RGB_S3TC_DXT1_EXT"] = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT";
    GLConstants[GLConstants["COMPRESSED_RGBA_S3TC_DXT1_EXT"] = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT";
    GLConstants[GLConstants["COMPRESSED_RGBA_S3TC_DXT3_EXT"] = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT";
    GLConstants[GLConstants["COMPRESSED_RGBA_S3TC_DXT5_EXT"] = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT";
    GLConstants[GLConstants["COMPRESSED_RGB_PVRTC_4BPPV1_IMG"] = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG";
    GLConstants[GLConstants["COMPRESSED_RGB_PVRTC_2BPPV1_IMG"] = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG";
    GLConstants[GLConstants["COMPRESSED_RGBA_PVRTC_4BPPV1_IMG"] = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG";
    GLConstants[GLConstants["COMPRESSED_RGBA_PVRTC_2BPPV1_IMG"] = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG";
    GLConstants[GLConstants["COMPRESSED_RGB_ETC1_WEBGL"] = 36196] = "COMPRESSED_RGB_ETC1_WEBGL";
    GLConstants[GLConstants["DOUBLE"] = 5130] = "DOUBLE";
    GLConstants[GLConstants["READ_BUFFER"] = 3074] = "READ_BUFFER";
    GLConstants[GLConstants["UNPACK_ROW_LENGTH"] = 3314] = "UNPACK_ROW_LENGTH";
    GLConstants[GLConstants["UNPACK_SKIP_ROWS"] = 3315] = "UNPACK_SKIP_ROWS";
    GLConstants[GLConstants["UNPACK_SKIP_PIXELS"] = 3316] = "UNPACK_SKIP_PIXELS";
    GLConstants[GLConstants["PACK_ROW_LENGTH"] = 3330] = "PACK_ROW_LENGTH";
    GLConstants[GLConstants["PACK_SKIP_ROWS"] = 3331] = "PACK_SKIP_ROWS";
    GLConstants[GLConstants["PACK_SKIP_PIXELS"] = 3332] = "PACK_SKIP_PIXELS";
    GLConstants[GLConstants["COLOR"] = 6144] = "COLOR";
    GLConstants[GLConstants["DEPTH"] = 6145] = "DEPTH";
    GLConstants[GLConstants["STENCIL"] = 6146] = "STENCIL";
    GLConstants[GLConstants["RED"] = 6403] = "RED";
    GLConstants[GLConstants["RGB8"] = 32849] = "RGB8";
    GLConstants[GLConstants["RGBA8"] = 32856] = "RGBA8";
    GLConstants[GLConstants["RGB10_A2"] = 32857] = "RGB10_A2";
    GLConstants[GLConstants["TEXTURE_BINDING_3D"] = 32874] = "TEXTURE_BINDING_3D";
    GLConstants[GLConstants["UNPACK_SKIP_IMAGES"] = 32877] = "UNPACK_SKIP_IMAGES";
    GLConstants[GLConstants["UNPACK_IMAGE_HEIGHT"] = 32878] = "UNPACK_IMAGE_HEIGHT";
    GLConstants[GLConstants["TEXTURE_3D"] = 32879] = "TEXTURE_3D";
    GLConstants[GLConstants["TEXTURE_WRAP_R"] = 32882] = "TEXTURE_WRAP_R";
    GLConstants[GLConstants["MAX_3D_TEXTURE_SIZE"] = 32883] = "MAX_3D_TEXTURE_SIZE";
    GLConstants[GLConstants["UNSIGNED_INT_2_10_10_10_REV"] = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
    GLConstants[GLConstants["MAX_ELEMENTS_VERTICES"] = 33000] = "MAX_ELEMENTS_VERTICES";
    GLConstants[GLConstants["MAX_ELEMENTS_INDICES"] = 33001] = "MAX_ELEMENTS_INDICES";
    GLConstants[GLConstants["TEXTURE_MIN_LOD"] = 33082] = "TEXTURE_MIN_LOD";
    GLConstants[GLConstants["TEXTURE_MAX_LOD"] = 33083] = "TEXTURE_MAX_LOD";
    GLConstants[GLConstants["TEXTURE_BASE_LEVEL"] = 33084] = "TEXTURE_BASE_LEVEL";
    GLConstants[GLConstants["TEXTURE_MAX_LEVEL"] = 33085] = "TEXTURE_MAX_LEVEL";
    GLConstants[GLConstants["MIN"] = 32775] = "MIN";
    GLConstants[GLConstants["MAX"] = 32776] = "MAX";
    GLConstants[GLConstants["DEPTH_COMPONENT24"] = 33190] = "DEPTH_COMPONENT24";
    GLConstants[GLConstants["MAX_TEXTURE_LOD_BIAS"] = 34045] = "MAX_TEXTURE_LOD_BIAS";
    GLConstants[GLConstants["TEXTURE_COMPARE_MODE"] = 34892] = "TEXTURE_COMPARE_MODE";
    GLConstants[GLConstants["TEXTURE_COMPARE_FUNC"] = 34893] = "TEXTURE_COMPARE_FUNC";
    GLConstants[GLConstants["CURRENT_QUERY"] = 34917] = "CURRENT_QUERY";
    GLConstants[GLConstants["QUERY_RESULT"] = 34918] = "QUERY_RESULT";
    GLConstants[GLConstants["QUERY_RESULT_AVAILABLE"] = 34919] = "QUERY_RESULT_AVAILABLE";
    GLConstants[GLConstants["STREAM_READ"] = 35041] = "STREAM_READ";
    GLConstants[GLConstants["STREAM_COPY"] = 35042] = "STREAM_COPY";
    GLConstants[GLConstants["STATIC_READ"] = 35045] = "STATIC_READ";
    GLConstants[GLConstants["STATIC_COPY"] = 35046] = "STATIC_COPY";
    GLConstants[GLConstants["DYNAMIC_READ"] = 35049] = "DYNAMIC_READ";
    GLConstants[GLConstants["DYNAMIC_COPY"] = 35050] = "DYNAMIC_COPY";
    GLConstants[GLConstants["MAX_DRAW_BUFFERS"] = 34852] = "MAX_DRAW_BUFFERS";
    GLConstants[GLConstants["DRAW_BUFFER0"] = 34853] = "DRAW_BUFFER0";
    GLConstants[GLConstants["DRAW_BUFFER1"] = 34854] = "DRAW_BUFFER1";
    GLConstants[GLConstants["DRAW_BUFFER2"] = 34855] = "DRAW_BUFFER2";
    GLConstants[GLConstants["DRAW_BUFFER3"] = 34856] = "DRAW_BUFFER3";
    GLConstants[GLConstants["DRAW_BUFFER4"] = 34857] = "DRAW_BUFFER4";
    GLConstants[GLConstants["DRAW_BUFFER5"] = 34858] = "DRAW_BUFFER5";
    GLConstants[GLConstants["DRAW_BUFFER6"] = 34859] = "DRAW_BUFFER6";
    GLConstants[GLConstants["DRAW_BUFFER7"] = 34860] = "DRAW_BUFFER7";
    GLConstants[GLConstants["DRAW_BUFFER8"] = 34861] = "DRAW_BUFFER8";
    GLConstants[GLConstants["DRAW_BUFFER9"] = 34862] = "DRAW_BUFFER9";
    GLConstants[GLConstants["DRAW_BUFFER10"] = 34863] = "DRAW_BUFFER10";
    GLConstants[GLConstants["DRAW_BUFFER11"] = 34864] = "DRAW_BUFFER11";
    GLConstants[GLConstants["DRAW_BUFFER12"] = 34865] = "DRAW_BUFFER12";
    GLConstants[GLConstants["DRAW_BUFFER13"] = 34866] = "DRAW_BUFFER13";
    GLConstants[GLConstants["DRAW_BUFFER14"] = 34867] = "DRAW_BUFFER14";
    GLConstants[GLConstants["DRAW_BUFFER15"] = 34868] = "DRAW_BUFFER15";
    GLConstants[GLConstants["MAX_FRAGMENT_UNIFORM_COMPONENTS"] = 35657] = "MAX_FRAGMENT_UNIFORM_COMPONENTS";
    GLConstants[GLConstants["MAX_VERTEX_UNIFORM_COMPONENTS"] = 35658] = "MAX_VERTEX_UNIFORM_COMPONENTS";
    GLConstants[GLConstants["SAMPLER_3D"] = 35679] = "SAMPLER_3D";
    GLConstants[GLConstants["SAMPLER_2D_SHADOW"] = 35682] = "SAMPLER_2D_SHADOW";
    GLConstants[GLConstants["FRAGMENT_SHADER_DERIVATIVE_HINT"] = 35723] = "FRAGMENT_SHADER_DERIVATIVE_HINT";
    GLConstants[GLConstants["PIXEL_PACK_BUFFER"] = 35051] = "PIXEL_PACK_BUFFER";
    GLConstants[GLConstants["PIXEL_UNPACK_BUFFER"] = 35052] = "PIXEL_UNPACK_BUFFER";
    GLConstants[GLConstants["PIXEL_PACK_BUFFER_BINDING"] = 35053] = "PIXEL_PACK_BUFFER_BINDING";
    GLConstants[GLConstants["PIXEL_UNPACK_BUFFER_BINDING"] = 35055] = "PIXEL_UNPACK_BUFFER_BINDING";
    GLConstants[GLConstants["FLOAT_MAT2x3"] = 35685] = "FLOAT_MAT2x3";
    GLConstants[GLConstants["FLOAT_MAT2x4"] = 35686] = "FLOAT_MAT2x4";
    GLConstants[GLConstants["FLOAT_MAT3x2"] = 35687] = "FLOAT_MAT3x2";
    GLConstants[GLConstants["FLOAT_MAT3x4"] = 35688] = "FLOAT_MAT3x4";
    GLConstants[GLConstants["FLOAT_MAT4x2"] = 35689] = "FLOAT_MAT4x2";
    GLConstants[GLConstants["FLOAT_MAT4x3"] = 35690] = "FLOAT_MAT4x3";
    GLConstants[GLConstants["SRGB"] = 35904] = "SRGB";
    GLConstants[GLConstants["SRGB8"] = 35905] = "SRGB8";
    GLConstants[GLConstants["SRGB8_ALPHA8"] = 35907] = "SRGB8_ALPHA8";
    GLConstants[GLConstants["COMPARE_REF_TO_TEXTURE"] = 34894] = "COMPARE_REF_TO_TEXTURE";
    GLConstants[GLConstants["RGBA32F"] = 34836] = "RGBA32F";
    GLConstants[GLConstants["RGB32F"] = 34837] = "RGB32F";
    GLConstants[GLConstants["RGBA16F"] = 34842] = "RGBA16F";
    GLConstants[GLConstants["RGB16F"] = 34843] = "RGB16F";
    GLConstants[GLConstants["VERTEX_ATTRIB_ARRAY_INTEGER"] = 35069] = "VERTEX_ATTRIB_ARRAY_INTEGER";
    GLConstants[GLConstants["MAX_ARRAY_TEXTURE_LAYERS"] = 35071] = "MAX_ARRAY_TEXTURE_LAYERS";
    GLConstants[GLConstants["MIN_PROGRAM_TEXEL_OFFSET"] = 35076] = "MIN_PROGRAM_TEXEL_OFFSET";
    GLConstants[GLConstants["MAX_PROGRAM_TEXEL_OFFSET"] = 35077] = "MAX_PROGRAM_TEXEL_OFFSET";
    GLConstants[GLConstants["MAX_varying_COMPONENTS"] = 35659] = "MAX_varying_COMPONENTS";
    GLConstants[GLConstants["TEXTURE_2D_ARRAY"] = 35866] = "TEXTURE_2D_ARRAY";
    GLConstants[GLConstants["TEXTURE_BINDING_2D_ARRAY"] = 35869] = "TEXTURE_BINDING_2D_ARRAY";
    GLConstants[GLConstants["R11F_G11F_B10F"] = 35898] = "R11F_G11F_B10F";
    GLConstants[GLConstants["UNSIGNED_INT_10F_11F_11F_REV"] = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
    GLConstants[GLConstants["RGB9_E5"] = 35901] = "RGB9_E5";
    GLConstants[GLConstants["UNSIGNED_INT_5_9_9_9_REV"] = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
    GLConstants[GLConstants["TRANSFORM_FEEDBACK_BUFFER_MODE"] = 35967] = "TRANSFORM_FEEDBACK_BUFFER_MODE";
    GLConstants[GLConstants["MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS"] = 35968] = "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS";
    GLConstants[GLConstants["TRANSFORM_FEEDBACK_varyingS"] = 35971] = "TRANSFORM_FEEDBACK_varyingS";
    GLConstants[GLConstants["TRANSFORM_FEEDBACK_BUFFER_START"] = 35972] = "TRANSFORM_FEEDBACK_BUFFER_START";
    GLConstants[GLConstants["TRANSFORM_FEEDBACK_BUFFER_SIZE"] = 35973] = "TRANSFORM_FEEDBACK_BUFFER_SIZE";
    GLConstants[GLConstants["TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN"] = 35976] = "TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN";
    GLConstants[GLConstants["RASTERIZER_DISCARD"] = 35977] = "RASTERIZER_DISCARD";
    GLConstants[GLConstants["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS"] = 35978] = "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS";
    GLConstants[GLConstants["MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS"] = 35979] = "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS";
    GLConstants[GLConstants["INTERLEAVED_ATTRIBS"] = 35980] = "INTERLEAVED_ATTRIBS";
    GLConstants[GLConstants["SEPARATE_ATTRIBS"] = 35981] = "SEPARATE_ATTRIBS";
    GLConstants[GLConstants["TRANSFORM_FEEDBACK_BUFFER"] = 35982] = "TRANSFORM_FEEDBACK_BUFFER";
    GLConstants[GLConstants["TRANSFORM_FEEDBACK_BUFFER_BINDING"] = 35983] = "TRANSFORM_FEEDBACK_BUFFER_BINDING";
    GLConstants[GLConstants["RGBA32UI"] = 36208] = "RGBA32UI";
    GLConstants[GLConstants["RGB32UI"] = 36209] = "RGB32UI";
    GLConstants[GLConstants["RGBA16UI"] = 36214] = "RGBA16UI";
    GLConstants[GLConstants["RGB16UI"] = 36215] = "RGB16UI";
    GLConstants[GLConstants["RGBA8UI"] = 36220] = "RGBA8UI";
    GLConstants[GLConstants["RGB8UI"] = 36221] = "RGB8UI";
    GLConstants[GLConstants["RGBA32I"] = 36226] = "RGBA32I";
    GLConstants[GLConstants["RGB32I"] = 36227] = "RGB32I";
    GLConstants[GLConstants["RGBA16I"] = 36232] = "RGBA16I";
    GLConstants[GLConstants["RGB16I"] = 36233] = "RGB16I";
    GLConstants[GLConstants["RGBA8I"] = 36238] = "RGBA8I";
    GLConstants[GLConstants["RGB8I"] = 36239] = "RGB8I";
    GLConstants[GLConstants["RED_INTEGER"] = 36244] = "RED_INTEGER";
    GLConstants[GLConstants["RGB_INTEGER"] = 36248] = "RGB_INTEGER";
    GLConstants[GLConstants["RGBA_INTEGER"] = 36249] = "RGBA_INTEGER";
    GLConstants[GLConstants["SAMPLER_2D_ARRAY"] = 36289] = "SAMPLER_2D_ARRAY";
    GLConstants[GLConstants["SAMPLER_2D_ARRAY_SHADOW"] = 36292] = "SAMPLER_2D_ARRAY_SHADOW";
    GLConstants[GLConstants["SAMPLER_CUBE_SHADOW"] = 36293] = "SAMPLER_CUBE_SHADOW";
    GLConstants[GLConstants["UNSIGNED_INT_VEC2"] = 36294] = "UNSIGNED_INT_VEC2";
    GLConstants[GLConstants["UNSIGNED_INT_VEC3"] = 36295] = "UNSIGNED_INT_VEC3";
    GLConstants[GLConstants["UNSIGNED_INT_VEC4"] = 36296] = "UNSIGNED_INT_VEC4";
    GLConstants[GLConstants["INT_SAMPLER_2D"] = 36298] = "INT_SAMPLER_2D";
    GLConstants[GLConstants["INT_SAMPLER_3D"] = 36299] = "INT_SAMPLER_3D";
    GLConstants[GLConstants["INT_SAMPLER_CUBE"] = 36300] = "INT_SAMPLER_CUBE";
    GLConstants[GLConstants["INT_SAMPLER_2D_ARRAY"] = 36303] = "INT_SAMPLER_2D_ARRAY";
    GLConstants[GLConstants["UNSIGNED_INT_SAMPLER_2D"] = 36306] = "UNSIGNED_INT_SAMPLER_2D";
    GLConstants[GLConstants["UNSIGNED_INT_SAMPLER_3D"] = 36307] = "UNSIGNED_INT_SAMPLER_3D";
    GLConstants[GLConstants["UNSIGNED_INT_SAMPLER_CUBE"] = 36308] = "UNSIGNED_INT_SAMPLER_CUBE";
    GLConstants[GLConstants["UNSIGNED_INT_SAMPLER_2D_ARRAY"] = 36311] = "UNSIGNED_INT_SAMPLER_2D_ARRAY";
    GLConstants[GLConstants["DEPTH_COMPONENT32F"] = 36012] = "DEPTH_COMPONENT32F";
    GLConstants[GLConstants["DEPTH32F_STENCIL8"] = 36013] = "DEPTH32F_STENCIL8";
    GLConstants[GLConstants["FLOAT_32_UNSIGNED_INT_24_8_REV"] = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
    GLConstants[GLConstants["FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING"] = 33296] = "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING";
    GLConstants[GLConstants["FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE"] = 33297] = "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE";
    GLConstants[GLConstants["FRAMEBUFFER_ATTACHMENT_RED_SIZE"] = 33298] = "FRAMEBUFFER_ATTACHMENT_RED_SIZE";
    GLConstants[GLConstants["FRAMEBUFFER_ATTACHMENT_GREEN_SIZE"] = 33299] = "FRAMEBUFFER_ATTACHMENT_GREEN_SIZE";
    GLConstants[GLConstants["FRAMEBUFFER_ATTACHMENT_BLUE_SIZE"] = 33300] = "FRAMEBUFFER_ATTACHMENT_BLUE_SIZE";
    GLConstants[GLConstants["FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE"] = 33301] = "FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE";
    GLConstants[GLConstants["FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE"] = 33302] = "FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE";
    GLConstants[GLConstants["FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE"] = 33303] = "FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE";
    GLConstants[GLConstants["FRAMEBUFFER_DEFAULT"] = 33304] = "FRAMEBUFFER_DEFAULT";
    GLConstants[GLConstants["UNSIGNED_INT_24_8"] = 34042] = "UNSIGNED_INT_24_8";
    GLConstants[GLConstants["DEPTH24_STENCIL8"] = 35056] = "DEPTH24_STENCIL8";
    GLConstants[GLConstants["UNSIGNED_NORMALIZED"] = 35863] = "UNSIGNED_NORMALIZED";
    GLConstants[GLConstants["DRAW_FRAMEBUFFER_BINDING"] = 36006] = "DRAW_FRAMEBUFFER_BINDING";
    GLConstants[GLConstants["READ_FRAMEBUFFER"] = 36008] = "READ_FRAMEBUFFER";
    GLConstants[GLConstants["DRAW_FRAMEBUFFER"] = 36009] = "DRAW_FRAMEBUFFER";
    GLConstants[GLConstants["READ_FRAMEBUFFER_BINDING"] = 36010] = "READ_FRAMEBUFFER_BINDING";
    GLConstants[GLConstants["RENDERBUFFER_SAMPLES"] = 36011] = "RENDERBUFFER_SAMPLES";
    GLConstants[GLConstants["FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER"] = 36052] = "FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER";
    GLConstants[GLConstants["MAX_COLOR_ATTACHMENTS"] = 36063] = "MAX_COLOR_ATTACHMENTS";
    GLConstants[GLConstants["COLOR_ATTACHMENT1"] = 36065] = "COLOR_ATTACHMENT1";
    GLConstants[GLConstants["COLOR_ATTACHMENT2"] = 36066] = "COLOR_ATTACHMENT2";
    GLConstants[GLConstants["COLOR_ATTACHMENT3"] = 36067] = "COLOR_ATTACHMENT3";
    GLConstants[GLConstants["COLOR_ATTACHMENT4"] = 36068] = "COLOR_ATTACHMENT4";
    GLConstants[GLConstants["COLOR_ATTACHMENT5"] = 36069] = "COLOR_ATTACHMENT5";
    GLConstants[GLConstants["COLOR_ATTACHMENT6"] = 36070] = "COLOR_ATTACHMENT6";
    GLConstants[GLConstants["COLOR_ATTACHMENT7"] = 36071] = "COLOR_ATTACHMENT7";
    GLConstants[GLConstants["COLOR_ATTACHMENT8"] = 36072] = "COLOR_ATTACHMENT8";
    GLConstants[GLConstants["COLOR_ATTACHMENT9"] = 36073] = "COLOR_ATTACHMENT9";
    GLConstants[GLConstants["COLOR_ATTACHMENT10"] = 36074] = "COLOR_ATTACHMENT10";
    GLConstants[GLConstants["COLOR_ATTACHMENT11"] = 36075] = "COLOR_ATTACHMENT11";
    GLConstants[GLConstants["COLOR_ATTACHMENT12"] = 36076] = "COLOR_ATTACHMENT12";
    GLConstants[GLConstants["COLOR_ATTACHMENT13"] = 36077] = "COLOR_ATTACHMENT13";
    GLConstants[GLConstants["COLOR_ATTACHMENT14"] = 36078] = "COLOR_ATTACHMENT14";
    GLConstants[GLConstants["COLOR_ATTACHMENT15"] = 36079] = "COLOR_ATTACHMENT15";
    GLConstants[GLConstants["FRAMEBUFFER_INCOMPLETE_MULTISAMPLE"] = 36182] = "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE";
    GLConstants[GLConstants["MAX_SAMPLES"] = 36183] = "MAX_SAMPLES";
    GLConstants[GLConstants["HALF_FLOAT"] = 5131] = "HALF_FLOAT";
    GLConstants[GLConstants["HALF_FLOAT_OES"] = 36193] = "HALF_FLOAT_OES";
    GLConstants[GLConstants["RG"] = 33319] = "RG";
    GLConstants[GLConstants["RG_INTEGER"] = 33320] = "RG_INTEGER";
    GLConstants[GLConstants["R8"] = 33321] = "R8";
    GLConstants[GLConstants["RG8"] = 33323] = "RG8";
    GLConstants[GLConstants["R16F"] = 33325] = "R16F";
    GLConstants[GLConstants["R32F"] = 33326] = "R32F";
    GLConstants[GLConstants["RG16F"] = 33327] = "RG16F";
    GLConstants[GLConstants["RG32F"] = 33328] = "RG32F";
    GLConstants[GLConstants["R8I"] = 33329] = "R8I";
    GLConstants[GLConstants["R8UI"] = 33330] = "R8UI";
    GLConstants[GLConstants["R16I"] = 33331] = "R16I";
    GLConstants[GLConstants["R16UI"] = 33332] = "R16UI";
    GLConstants[GLConstants["R32I"] = 33333] = "R32I";
    GLConstants[GLConstants["R32UI"] = 33334] = "R32UI";
    GLConstants[GLConstants["RG8I"] = 33335] = "RG8I";
    GLConstants[GLConstants["RG8UI"] = 33336] = "RG8UI";
    GLConstants[GLConstants["RG16I"] = 33337] = "RG16I";
    GLConstants[GLConstants["RG16UI"] = 33338] = "RG16UI";
    GLConstants[GLConstants["RG32I"] = 33339] = "RG32I";
    GLConstants[GLConstants["RG32UI"] = 33340] = "RG32UI";
    GLConstants[GLConstants["VERTEX_ARRAY_BINDING"] = 34229] = "VERTEX_ARRAY_BINDING";
    GLConstants[GLConstants["R8_SNORM"] = 36756] = "R8_SNORM";
    GLConstants[GLConstants["RG8_SNORM"] = 36757] = "RG8_SNORM";
    GLConstants[GLConstants["RGB8_SNORM"] = 36758] = "RGB8_SNORM";
    GLConstants[GLConstants["RGBA8_SNORM"] = 36759] = "RGBA8_SNORM";
    GLConstants[GLConstants["SIGNED_NORMALIZED"] = 36764] = "SIGNED_NORMALIZED";
    GLConstants[GLConstants["COPY_READ_BUFFER"] = 36662] = "COPY_READ_BUFFER";
    GLConstants[GLConstants["COPY_WRITE_BUFFER"] = 36663] = "COPY_WRITE_BUFFER";
    GLConstants[GLConstants["COPY_READ_BUFFER_BINDING"] = 36662] = "COPY_READ_BUFFER_BINDING";
    GLConstants[GLConstants["COPY_WRITE_BUFFER_BINDING"] = 36663] = "COPY_WRITE_BUFFER_BINDING";
    GLConstants[GLConstants["UNIFORM_BUFFER"] = 35345] = "UNIFORM_BUFFER";
    GLConstants[GLConstants["UNIFORM_BUFFER_BINDING"] = 35368] = "UNIFORM_BUFFER_BINDING";
    GLConstants[GLConstants["UNIFORM_BUFFER_START"] = 35369] = "UNIFORM_BUFFER_START";
    GLConstants[GLConstants["UNIFORM_BUFFER_SIZE"] = 35370] = "UNIFORM_BUFFER_SIZE";
    GLConstants[GLConstants["MAX_VERTEX_UNIFORM_BLOCKS"] = 35371] = "MAX_VERTEX_UNIFORM_BLOCKS";
    GLConstants[GLConstants["MAX_FRAGMENT_UNIFORM_BLOCKS"] = 35373] = "MAX_FRAGMENT_UNIFORM_BLOCKS";
    GLConstants[GLConstants["MAX_COMBINED_UNIFORM_BLOCKS"] = 35374] = "MAX_COMBINED_UNIFORM_BLOCKS";
    GLConstants[GLConstants["MAX_UNIFORM_BUFFER_BINDINGS"] = 35375] = "MAX_UNIFORM_BUFFER_BINDINGS";
    GLConstants[GLConstants["MAX_UNIFORM_BLOCK_SIZE"] = 35376] = "MAX_UNIFORM_BLOCK_SIZE";
    GLConstants[GLConstants["MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS"] = 35377] = "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS";
    GLConstants[GLConstants["MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS"] = 35379] = "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS";
    GLConstants[GLConstants["UNIFORM_BUFFER_OFFSET_ALIGNMENT"] = 35380] = "UNIFORM_BUFFER_OFFSET_ALIGNMENT";
    GLConstants[GLConstants["ACTIVE_UNIFORM_BLOCKS"] = 35382] = "ACTIVE_UNIFORM_BLOCKS";
    GLConstants[GLConstants["UNIFORM_TYPE"] = 35383] = "UNIFORM_TYPE";
    GLConstants[GLConstants["UNIFORM_SIZE"] = 35384] = "UNIFORM_SIZE";
    GLConstants[GLConstants["UNIFORM_BLOCK_INDEX"] = 35386] = "UNIFORM_BLOCK_INDEX";
    GLConstants[GLConstants["UNIFORM_OFFSET"] = 35387] = "UNIFORM_OFFSET";
    GLConstants[GLConstants["UNIFORM_ARRAY_STRIDE"] = 35388] = "UNIFORM_ARRAY_STRIDE";
    GLConstants[GLConstants["UNIFORM_MATRIX_STRIDE"] = 35389] = "UNIFORM_MATRIX_STRIDE";
    GLConstants[GLConstants["UNIFORM_IS_ROW_MAJOR"] = 35390] = "UNIFORM_IS_ROW_MAJOR";
    GLConstants[GLConstants["UNIFORM_BLOCK_BINDING"] = 35391] = "UNIFORM_BLOCK_BINDING";
    GLConstants[GLConstants["UNIFORM_BLOCK_DATA_SIZE"] = 35392] = "UNIFORM_BLOCK_DATA_SIZE";
    GLConstants[GLConstants["UNIFORM_BLOCK_ACTIVE_UNIFORMS"] = 35394] = "UNIFORM_BLOCK_ACTIVE_UNIFORMS";
    GLConstants[GLConstants["UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES"] = 35395] = "UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES";
    GLConstants[GLConstants["UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER"] = 35396] = "UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER";
    GLConstants[GLConstants["UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER"] = 35398] = "UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER";
    GLConstants[GLConstants["INVALID_INDEX"] = 4294967295] = "INVALID_INDEX";
    GLConstants[GLConstants["MAX_VERTEX_OUTPUT_COMPONENTS"] = 37154] = "MAX_VERTEX_OUTPUT_COMPONENTS";
    GLConstants[GLConstants["MAX_FRAGMENT_INPUT_COMPONENTS"] = 37157] = "MAX_FRAGMENT_INPUT_COMPONENTS";
    GLConstants[GLConstants["MAX_SERVER_WAIT_TIMEOUT"] = 37137] = "MAX_SERVER_WAIT_TIMEOUT";
    GLConstants[GLConstants["OBJECT_TYPE"] = 37138] = "OBJECT_TYPE";
    GLConstants[GLConstants["SYNC_CONDITION"] = 37139] = "SYNC_CONDITION";
    GLConstants[GLConstants["SYNC_STATUS"] = 37140] = "SYNC_STATUS";
    GLConstants[GLConstants["SYNC_FLAGS"] = 37141] = "SYNC_FLAGS";
    GLConstants[GLConstants["SYNC_FENCE"] = 37142] = "SYNC_FENCE";
    GLConstants[GLConstants["SYNC_GPU_COMMANDS_COMPLETE"] = 37143] = "SYNC_GPU_COMMANDS_COMPLETE";
    GLConstants[GLConstants["UNSIGNALED"] = 37144] = "UNSIGNALED";
    GLConstants[GLConstants["SIGNALED"] = 37145] = "SIGNALED";
    GLConstants[GLConstants["ALREADY_SIGNALED"] = 37146] = "ALREADY_SIGNALED";
    GLConstants[GLConstants["TIMEOUT_EXPIRED"] = 37147] = "TIMEOUT_EXPIRED";
    GLConstants[GLConstants["CONDITION_SATISFIED"] = 37148] = "CONDITION_SATISFIED";
    GLConstants[GLConstants["WAIT_FAILED"] = 37149] = "WAIT_FAILED";
    GLConstants[GLConstants["SYNC_FLUSH_COMMANDS_BIT"] = 1] = "SYNC_FLUSH_COMMANDS_BIT";
    GLConstants[GLConstants["VERTEX_ATTRIB_ARRAY_DIVISOR"] = 35070] = "VERTEX_ATTRIB_ARRAY_DIVISOR";
    GLConstants[GLConstants["ANY_SAMPLES_PASSED"] = 35887] = "ANY_SAMPLES_PASSED";
    GLConstants[GLConstants["ANY_SAMPLES_PASSED_CONSERVATIVE"] = 36202] = "ANY_SAMPLES_PASSED_CONSERVATIVE";
    GLConstants[GLConstants["SAMPLER_BINDING"] = 35097] = "SAMPLER_BINDING";
    GLConstants[GLConstants["RGB10_A2UI"] = 36975] = "RGB10_A2UI";
    GLConstants[GLConstants["INT_2_10_10_10_REV"] = 36255] = "INT_2_10_10_10_REV";
    GLConstants[GLConstants["TRANSFORM_FEEDBACK"] = 36386] = "TRANSFORM_FEEDBACK";
    GLConstants[GLConstants["TRANSFORM_FEEDBACK_PAUSED"] = 36387] = "TRANSFORM_FEEDBACK_PAUSED";
    GLConstants[GLConstants["TRANSFORM_FEEDBACK_ACTIVE"] = 36388] = "TRANSFORM_FEEDBACK_ACTIVE";
    GLConstants[GLConstants["TRANSFORM_FEEDBACK_BINDING"] = 36389] = "TRANSFORM_FEEDBACK_BINDING";
    GLConstants[GLConstants["COMPRESSED_R11_EAC"] = 37488] = "COMPRESSED_R11_EAC";
    GLConstants[GLConstants["COMPRESSED_SIGNED_R11_EAC"] = 37489] = "COMPRESSED_SIGNED_R11_EAC";
    GLConstants[GLConstants["COMPRESSED_RG11_EAC"] = 37490] = "COMPRESSED_RG11_EAC";
    GLConstants[GLConstants["COMPRESSED_SIGNED_RG11_EAC"] = 37491] = "COMPRESSED_SIGNED_RG11_EAC";
    GLConstants[GLConstants["COMPRESSED_RGB8_ETC2"] = 37492] = "COMPRESSED_RGB8_ETC2";
    GLConstants[GLConstants["COMPRESSED_SRGB8_ETC2"] = 37493] = "COMPRESSED_SRGB8_ETC2";
    GLConstants[GLConstants["COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2";
    GLConstants[GLConstants["COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2";
    GLConstants[GLConstants["COMPRESSED_RGBA8_ETC2_EAC"] = 37496] = "COMPRESSED_RGBA8_ETC2_EAC";
    GLConstants[GLConstants["COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"] = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC";
    GLConstants[GLConstants["TEXTURE_IMMUTABLE_FORMAT"] = 37167] = "TEXTURE_IMMUTABLE_FORMAT";
    GLConstants[GLConstants["MAX_ELEMENT_INDEX"] = 36203] = "MAX_ELEMENT_INDEX";
    GLConstants[GLConstants["TEXTURE_IMMUTABLE_LEVELS"] = 33503] = "TEXTURE_IMMUTABLE_LEVELS";
    GLConstants[GLConstants["MAX_TEXTURE_MAX_ANISOTROPY_EXT"] = 34047] = "MAX_TEXTURE_MAX_ANISOTROPY_EXT";
})(GLConstants || (GLConstants = {}));


/***/ }),

/***/ "./src/GeometryInfo.ts":
/*!*****************************!*\
  !*** ./src/GeometryInfo.ts ***!
  \*****************************/
/*! exports provided: GeometryInfo, createGeometryInfoFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeometryInfo", function() { return GeometryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryInfoFromArray", function() { return createGeometryInfoFromArray; });
/* harmony import */ var _VertexIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VertexIndex */ "./src/VertexIndex.ts");
/* harmony import */ var _VertexAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VertexAttribute */ "./src/VertexAttribute.ts");


var GeometryInfo = (function () {
    function GeometryInfo() {
        this.atts = {};
    }
    return GeometryInfo;
}());

function createGeometryInfoFromArray(gl, atts, indices, primitiveType) {
    var info = new GeometryInfo();
    info.primitiveType = primitiveType ? primitiveType : gl.TRIANGLES;
    if (indices != null) {
        info.indices = Object(_VertexIndex__WEBPACK_IMPORTED_MODULE_0__["createIndexBufferInfo"])(gl, indices);
        if (info.count == null) {
            info.count = info.indices.length;
        }
    }
    for (var attName in atts) {
        info.atts[attName] = Object(_VertexAttribute__WEBPACK_IMPORTED_MODULE_1__["createAttributeBufferInfo"])(gl, attName, atts[attName]);
        if (info.count == null) {
            info.count = info.atts[attName].length;
        }
    }
    return info;
}


/***/ }),

/***/ "./src/Helper.ts":
/*!***********************!*\
  !*** ./src/Helper.ts ***!
  \***********************/
/*! exports provided: getGLTypeForTypedArray, getArrayTypeForGLtype, getbytesForGLtype, getTypedArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGLTypeForTypedArray", function() { return getGLTypeForTypedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayTypeForGLtype", function() { return getArrayTypeForGLtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbytesForGLtype", function() { return getbytesForGLtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypedArray", function() { return getTypedArray; });
/* harmony import */ var _GLConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GLConstant */ "./src/GLConstant.ts");

function getGLTypeForTypedArray(typedArray) {
    if (typedArray instanceof Int8Array) {
        return _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].BYTE;
    }
    if (typedArray instanceof Uint8Array) {
        return _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].UNSIGNED_BYTE;
    }
    if (typedArray instanceof Uint8ClampedArray) {
        return _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].UNSIGNED_BYTE;
    }
    if (typedArray instanceof Int16Array) {
        return _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].SHORT;
    }
    if (typedArray instanceof Uint16Array) {
        return _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].UNSIGNED_SHORT;
    }
    if (typedArray instanceof Int32Array) {
        return _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].INT;
    }
    if (typedArray instanceof Uint32Array) {
        return _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].UNSIGNED_INT;
    }
    if (typedArray instanceof Float32Array) {
        return _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].FLOAT;
    }
    throw "unsupported typed array to gl type";
}
function getArrayTypeForGLtype(glType) {
    if (glType == _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].BYTE) {
        return Int8Array;
    }
    if (glType == _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].UNSIGNED_BYTE) {
        return Uint8Array;
    }
    if (glType == _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].UNSIGNED_BYTE) {
        return Uint8ClampedArray;
    }
    if (glType == _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].SHORT) {
        return Int16Array;
    }
    if (glType == _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].UNSIGNED_SHORT) {
        return Uint16Array;
    }
    if (glType == _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].INT) {
        return Int32Array;
    }
    if (glType == _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].UNSIGNED_INT) {
        return Uint32Array;
    }
    if (glType == _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].FLOAT) {
        return Float32Array;
    }
    throw "unsupported gltype to array type";
}
function getbytesForGLtype(glType) {
    switch (glType) {
        case _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].BYTE: return 1;
        case _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].UNSIGNED_BYTE: return 1;
        case _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].SHORT: return 2;
        case _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].UNSIGNED_SHORT_4_4_4_4: return 2;
        case _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].UNSIGNED_SHORT: return 2;
        case _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].INT: return 4;
        case _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].UNSIGNED_INT: return 4;
        case _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].HALF_FLOAT: return 2;
        case _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].HALF_FLOAT_OES: return 2;
        case _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].FLOAT: return 4;
        default:
            throw "unsupported gltype to bytesPerElement";
    }
}
function getTypedArray(data, gltype) {
    var type = typeof data;
    if (type == "number") {
        var type_1 = getArrayTypeForGLtype(gltype);
        return new type_1(data);
    }
    else if (data instanceof Array) {
        var type_2 = getArrayTypeForGLtype(gltype);
        return new type_2(data);
    }
    return null;
}


/***/ }),

/***/ "./src/ProgramInfo.ts":
/*!****************************!*\
  !*** ./src/ProgramInfo.ts ***!
  \****************************/
/*! exports provided: ShaderTypeEnum, createProgramInfo, createBassProgramInfo, getAttributesInfo, getUniformsInfo, createShader, getUniformSetter, getAttributeSetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderTypeEnum", function() { return ShaderTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgramInfo", function() { return createProgramInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBassProgramInfo", function() { return createBassProgramInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttributesInfo", function() { return getAttributesInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniformsInfo", function() { return getUniformsInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShader", function() { return createShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniformSetter", function() { return getUniformSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttributeSetter", function() { return getAttributeSetter; });
/* harmony import */ var _GLConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GLConstant */ "./src/GLConstant.ts");

var ShaderTypeEnum;
(function (ShaderTypeEnum) {
    ShaderTypeEnum[ShaderTypeEnum["VS"] = 0] = "VS";
    ShaderTypeEnum[ShaderTypeEnum["FS"] = 1] = "FS";
})(ShaderTypeEnum || (ShaderTypeEnum = {}));
function createProgramInfo(gl, op) {
    var info;
    if (op.program.program != null) {
        var bassprogram = op.program;
        info = {};
        info.program = bassprogram.program;
        info.attsDic = bassprogram.attsDic;
        info.uniformsDic = bassprogram.uniformsDic;
    }
    else {
        var bassprogramOp = op.program;
        ;
        info = createBassProgramInfo(gl, bassprogramOp.vs, bassprogramOp.fs, bassprogramOp.name);
    }
    if (op.uniforms) {
        info.uniforms = op.uniforms;
    }
    if (op.states) {
        info.states = op.states;
    }
    return info;
}
function createBassProgramInfo(gl, vs, fs, name) {
    var vsShader = createShader(gl, ShaderTypeEnum.VS, vs, name + "_vs");
    var fsShader = createShader(gl, ShaderTypeEnum.FS, fs, name + "_fs");
    if (vsShader && fsShader) {
        var item = gl.createProgram();
        gl.attachShader(item, vsShader.shader);
        gl.attachShader(item, fsShader.shader);
        gl.linkProgram(item);
        var check = gl.getProgramParameter(item, gl.LINK_STATUS);
        if (check == false) {
            var debguInfo = "ERROR: compile program Error!" + "VS:" + vs + "   FS:" + fs + "\n" + gl.getProgramInfoLog(item);
            console.error(debguInfo);
            gl.deleteProgram(item);
            return null;
        }
        else {
            var attsInfo = getAttributesInfo(gl, item);
            var uniformsInfo = getUniformsInfo(gl, item);
            return { program: item, programName: name, uniformsDic: uniformsInfo, attsDic: attsInfo };
        }
    }
}
function getAttributesInfo(gl, program) {
    var attdic = {};
    var numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
    for (var i = 0; i < numAttribs; i++) {
        var attribInfo = gl.getActiveAttrib(program, i);
        if (!attribInfo)
            break;
        var attName = attribInfo.name;
        var attlocation = gl.getAttribLocation(program, attName);
        var func = getAttributeSetter(gl, attlocation);
        attdic[attName] = { name: attName, location: attlocation, setter: func };
    }
    return attdic;
}
function getUniformsInfo(gl, program) {
    var uniformDic = {};
    var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    gl["bindpoint"] = 0;
    for (var i = 0; i < numUniforms; i++) {
        var uniformInfo = gl.getActiveUniform(program, i);
        if (!uniformInfo)
            break;
        var name_1 = uniformInfo.name;
        var type = uniformInfo.type;
        var location_1 = gl.getUniformLocation(program, name_1);
        var beArray = false;
        if (name_1.substr(-3) === "[0]") {
            beArray = true;
        }
        if (location_1 == null)
            continue;
        var bindpoint = gl["bindpoint"];
        var func = getUniformSetter(gl, type, beArray, location_1, bindpoint);
        uniformDic[name_1] = { name: name_1, location: location_1, type: type, setter: func };
    }
    return uniformDic;
}
function createShader(gl, type, source, name) {
    if (name === void 0) { name = null; }
    var target = type == ShaderTypeEnum.VS ? _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].VERTEX_SHADER : _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].FRAGMENT_SHADER;
    var item = gl.createShader(target);
    gl.shaderSource(item, source);
    gl.compileShader(item);
    var check = gl.getShaderParameter(item, gl.COMPILE_STATUS);
    if (check == false) {
        var debug = type == ShaderTypeEnum.VS ? "ERROR: compile  VS Shader Error! VS:" : "ERROR: compile FS Shader Error! FS:";
        debug = debug + name + ".\n";
        console.error(debug + gl.getShaderInfoLog(item));
        gl.deleteShader(item);
        return null;
    }
    else {
        return { shaderType: type, shaderName: name, shader: item };
    }
}
function getUniformSetter(gl, uniformType, beArray, location, bindpoint) {
    switch (uniformType) {
        case gl.FLOAT:
            if (beArray) {
                return function (value) {
                    gl.uniform1f(location, value);
                };
            }
            else {
                return function (value) {
                    gl.uniform1fv(location, value);
                };
            }
            break;
        case gl.FLOAT_VEC2:
            return function (value) {
                gl.uniform2fv(location, value);
            };
            break;
        case gl.FLOAT_VEC3:
            return function (value) {
                gl.uniform3fv(location, value);
            };
            break;
        case gl.FLOAT_VEC4:
            return function (value) {
                gl.uniform4fv(location, value);
            };
            break;
        case gl.INT:
        case gl.BOOL:
            if (beArray) {
                return function (value) {
                    gl.uniform1iv(location, value);
                };
            }
            else {
                return function (value) {
                    gl.uniform1i(location, value);
                };
            }
            break;
        case gl.INT_VEC2:
        case gl.BOOL_VEC2:
            return function (value) {
                gl.uniform2iv(location, value);
            };
            break;
        case gl.INT_VEC3:
        case gl.BOOL_VEC3:
            return function (value) {
                gl.uniform3iv(location, value);
            };
            break;
        case gl.INT_VEC4:
        case gl.BOOL_VEC4:
            return function (value) {
                gl.uniform4fv(location, value);
            };
            break;
        case gl.FLOAT_MAT2:
            return function (value) {
                gl.uniformMatrix2fv(location, false, value);
            };
        case gl.FLOAT_MAT3:
            return function (value) {
                gl.uniformMatrix3fv(location, false, value);
            };
            break;
        case gl.FLOAT_MAT4:
            return function (value) {
                gl.uniformMatrix4fv(location, false, value);
            };
            break;
        case gl.SAMPLER_2D:
            return function (value) {
                gl.activeTexture(gl.TEXTURE0 + bindpoint);
                gl.bindTexture(gl.TEXTURE_2D, value);
                gl.uniform1i(location, bindpoint);
                gl["bindpoint"] = gl["bindpoint"] + 1;
            };
        default:
            console.error("uniformSetter not handle type:" + uniformType + " yet!");
            break;
    }
}
function getAttributeSetter(gl, location) {
    return function (value) {
        gl.bindBuffer(gl.ARRAY_BUFFER, value.buffer);
        gl.enableVertexAttribArray(location);
        gl.vertexAttribPointer(location, value.componentSize, value.componentDataType, value.normalize, value.strideInBytes, value.offsetInBytes);
        if (value.divisor !== undefined) {
            gl.vertexAttribDivisor(location, value.divisor);
        }
    };
}


/***/ }),

/***/ "./src/State.ts":
/*!**********************!*\
  !*** ./src/State.ts ***!
  \**********************/
/*! exports provided: setProgramState, deduceFullShderState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProgramState", function() { return setProgramState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deduceFullShderState", function() { return deduceFullShderState; });
/* harmony import */ var _GLConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GLConstant */ "./src/GLConstant.ts");

function setProgramState(gl, state) {
    if (state.beDeduce != true) {
        deduceFullShderState(state);
    }
    if (state.enableCullFace) {
        gl.enable(gl.CULL_FACE);
        gl.cullFace(state.cullBack ? gl.BACK : gl.FRONT);
    }
    else {
        gl.disable(gl.CULL_FACE);
    }
    gl.depthMask(state.depth_Write);
    if (state.depth_Test) {
        gl.enable(gl.DEPTH_TEST);
    }
    else {
        gl.disable(gl.DEPTH_TEST);
    }
    if (state.enableBlend) {
        gl.enable(gl.BLEND);
        gl.blendEquation(state.blend_Equation);
        gl.blendFunc(state.blend_Src, state.blend_Dst);
    }
    if (state.enableStencilTest) {
        gl.enable(gl.STENCIL_TEST);
        gl.stencilFunc(state.stencilFunc, state.stencil_refValue, state.stencil_Mask);
        gl.stencilOp(state.stencil_Fail, state.stencil_PassZfail, state.stencil_FaileZpass);
    }
}
function deduceFullShderState(state) {
    if (state.enableCullFace == null) {
        state.enableCullFace = true;
    }
    if (state.enableCullFace) {
        if (state.cullBack == null) {
            state.cullBack = true;
        }
    }
    if (state.depth_Write == null) {
        state.depth_Write = true;
    }
    if (state.depth_Test == null) {
        state.depth_Test = true;
    }
    if (state.depth_Test) {
        if (state.depth_TestFuc == null) {
            state.depth_TestFuc = _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].LEQUAL;
        }
    }
    if (state.enableBlend == true) {
        if (state.blend_Equation == null) {
            state.blend_Equation = _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].FUNC_ADD;
        }
        if (state.blend_Src == null) {
            state.blend_Src = _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].ONE;
        }
        if (state.blend_Dst == null) {
            state.blend_Dst = _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].ONE_MINUS_SRC_ALPHA;
        }
    }
    if (state.enableStencilTest == true) {
        if (state.stencilFunc == null) {
            state.stencilFunc = _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].ALWAYS;
        }
        if (state.stencil_Fail == null) {
            state.stencil_Fail = _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].KEEP;
        }
        if (state.stencil_FaileZpass == null) {
            state.stencil_FaileZpass = _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].KEEP;
        }
        if (state.stencil_PassZfail == null) {
            state.stencil_PassZfail = _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].REPLACE;
        }
        if (state.stencil_refValue == null) {
            state.stencil_refValue = 1;
        }
        if (state.stencil_Mask == null) {
            state.stencil_Mask = 0xFF;
        }
    }
    return state;
}


/***/ }),

/***/ "./src/Texture.ts":
/*!************************!*\
  !*** ./src/Texture.ts ***!
  \************************/
/*! exports provided: createTextureFromTypedArray, createTextureFromHtml, deduceTextureTypedArrayOption, deduceTextureHtmlOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextureFromTypedArray", function() { return createTextureFromTypedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextureFromHtml", function() { return createTextureFromHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deduceTextureTypedArrayOption", function() { return deduceTextureTypedArrayOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deduceTextureHtmlOption", function() { return deduceTextureHtmlOption; });
/* harmony import */ var _GLConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GLConstant */ "./src/GLConstant.ts");
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helper */ "./src/Helper.ts");


function createTextureFromTypedArray(gl, data, texOP) {
    deduceTextureTypedArrayOption(gl, data, texOP);
    var tex = gl.createTexture();
    gl.bindTexture(texOP.target, tex);
    gl.texParameteri(texOP.target, gl.TEXTURE_MAG_FILTER, texOP.filter_max);
    gl.texParameteri(texOP.target, gl.TEXTURE_MIN_FILTER, texOP.filter_min);
    gl.texParameteri(texOP.target, gl.TEXTURE_WRAP_S, texOP.wrap_s);
    gl.texParameteri(texOP.target, gl.TEXTURE_WRAP_T, texOP.wrap_t);
    gl.texImage2D(texOP.target, 0, texOP.pixelFormat, texOP.width, texOP.height, 0, texOP.pixelFormat, texOP.pixelDatatype, data);
}
function createTextureFromHtml(gl, data, texOP) {
    texOP = texOP != null ? texOP : {};
    deduceTextureHtmlOption(gl, data, texOP);
    var tex = gl.createTexture();
    gl.bindTexture(texOP.target, tex);
    gl.texParameteri(texOP.target, gl.TEXTURE_MAG_FILTER, texOP.filter_max);
    gl.texParameteri(texOP.target, gl.TEXTURE_MIN_FILTER, texOP.filter_min);
    gl.texParameteri(texOP.target, gl.TEXTURE_WRAP_S, texOP.wrap_s);
    gl.texParameteri(texOP.target, gl.TEXTURE_WRAP_T, texOP.wrap_t);
    gl.texImage2D(texOP.target, 0, texOP.pixelFormat, texOP.pixelFormat, texOP.pixelDatatype, data);
    return tex;
}
function dedeuceBaseTextureOption(gl, texOP) {
    texOP.target = texOP.target ? texOP.target : _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].TEXTURE_2D;
    texOP.pixelFormat = texOP.pixelFormat ? texOP.pixelFormat : _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].RGBA;
    if (texOP.enableMipMap && canGenerateMipmap(gl, texOP.width, texOP.height)) {
        texOP.enableMipMap = true;
    }
    else {
        texOP.enableMipMap = false;
    }
    if (texOP.filter_max == null) {
        texOP.filter_max = texOP.enableMipMap ? _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].LINEAR_MIPMAP_LINEAR : _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].LINEAR;
    }
    if (texOP.filter_min == null) {
        texOP.filter_min = texOP.enableMipMap ? _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].LINEAR_MIPMAP_LINEAR : _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].LINEAR;
    }
    if (texOP.wrap_s == null) {
        texOP.wrap_s = canWrap_reapeat(gl, texOP.width, texOP.height) ? _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].REPEAT : _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].CLAMP_TO_EDGE;
    }
    if (texOP.wrap_t == null) {
        texOP.wrap_t = canWrap_reapeat(gl, texOP.width, texOP.height) ? _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].REPEAT : _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].CLAMP_TO_EDGE;
    }
}
function deduceTextureTypedArrayOption(gl, data, texOP) {
    dedeuceBaseTextureOption(gl, texOP);
    if (texOP.pixelDatatype == null) {
        texOP.pixelDatatype = Object(_Helper__WEBPACK_IMPORTED_MODULE_1__["getGLTypeForTypedArray"])(data);
    }
}
function deduceTextureHtmlOption(gl, data, texOP) {
    texOP.width = data.width;
    texOP.height = data.height;
    dedeuceBaseTextureOption(gl, texOP);
    if (texOP.pixelDatatype == null) {
        texOP.pixelDatatype = _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].UNSIGNED_BYTE;
    }
}
function isPowerOf2(value) {
    return (value & (value - 1)) === 0;
}
function canGenerateMipmap(gl, width, height) {
    if (!gl.beWebgl2) {
        return isPowerOf2(width) && isPowerOf2(height);
    }
    return true;
}
function canWrap_reapeat(gl, width, height) {
    if (!gl.beWebgl2) {
        return isPowerOf2(width) && isPowerOf2(height);
    }
    return true;
}


/***/ }),

/***/ "./src/VertexAttribute.ts":
/*!********************************!*\
  !*** ./src/VertexAttribute.ts ***!
  \********************************/
/*! exports provided: deduceVertexAttArrayInfo, createAttributeBufferInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deduceVertexAttArrayInfo", function() { return deduceVertexAttArrayInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAttributeBufferInfo", function() { return createAttributeBufferInfo; });
/* harmony import */ var _GLConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GLConstant */ "./src/GLConstant.ts");
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helper */ "./src/Helper.ts");


function deduceVertexAttArrayInfo(attName, data) {
    var newData = {};
    newData.name = attName;
    if (data instanceof Array) {
        newData.value = new Float32Array(data);
    }
    else if (ArrayBuffer.isView(data)) {
        newData.value = data;
    }
    else {
        var arraydata = data.value;
        if (arraydata instanceof Array) {
            var type = data.componentDataType ? Object(_Helper__WEBPACK_IMPORTED_MODULE_1__["getArrayTypeForGLtype"])(data.componentDataType) : Float32Array;
            newData.value = new type(arraydata);
        }
        else {
            newData.value = arraydata;
        }
    }
    var orginData = data;
    if (orginData.componentDataType == null) {
        newData.componentDataType = newData.value ? Object(_Helper__WEBPACK_IMPORTED_MODULE_1__["getGLTypeForTypedArray"])(newData.value) : _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].FLOAT;
    }
    else {
        newData.componentDataType = orginData.componentDataType;
    }
    if (orginData.length == null) {
        newData.length = newData.value ? newData.value.length : null;
    }
    else {
        newData.length = orginData.length;
    }
    newData.componentSize = orginData.componentSize ? orginData.componentSize : guessNumComponentsFromName(attName);
    newData.normalize = orginData.normalize != null ? orginData.normalize : false;
    newData.offsetInBytes = orginData.offsetInBytes ? orginData.offsetInBytes : 0;
    newData.strideInBytes = orginData.strideInBytes ? orginData.strideInBytes : 0;
    newData.drawType = orginData.drawType ? orginData.drawType : _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].STATIC_DRAW;
    return newData;
}
function createAttributeBufferInfo(gl, attName, data) {
    var vertexdata = deduceVertexAttArrayInfo(attName, data);
    if (vertexdata.buffer == null) {
        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertexdata.value, vertexdata.drawType);
        vertexdata.buffer = buffer;
    }
    return vertexdata;
}
var uvRE = /uv/;
var colorRE = /color/;
function guessNumComponentsFromName(name, length) {
    if (length === void 0) { length = null; }
    var numComponents;
    if (uvRE.test(name)) {
        numComponents = 2;
    }
    else if (colorRE.test(name)) {
        numComponents = 4;
    }
    else {
        numComponents = 3;
    }
    return numComponents;
}


/***/ }),

/***/ "./src/VertexIndex.ts":
/*!****************************!*\
  !*** ./src/VertexIndex.ts ***!
  \****************************/
/*! exports provided: deduceVertexIndexArrayInfo, createIndexBufferInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deduceVertexIndexArrayInfo", function() { return deduceVertexIndexArrayInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIndexBufferInfo", function() { return createIndexBufferInfo; });
/* harmony import */ var _GLConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GLConstant */ "./src/GLConstant.ts");
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helper */ "./src/Helper.ts");


function deduceVertexIndexArrayInfo(data) {
    var newData = {};
    newData.name = "indices";
    if (data instanceof Array) {
        newData.value = new Uint16Array(data);
    }
    else if (ArrayBuffer.isView(data)) {
        newData.value = data;
    }
    else {
        var arraydata = data.value;
        if (arraydata instanceof Array) {
            var type = data.componentDataType ? Object(_Helper__WEBPACK_IMPORTED_MODULE_1__["getArrayTypeForGLtype"])(data.componentDataType) : Uint16Array;
            newData.value = new type(arraydata);
        }
        else {
            newData.value = arraydata;
        }
    }
    var orginData = data;
    if (orginData.componentDataType == null) {
        newData.componentDataType = newData.value ? Object(_Helper__WEBPACK_IMPORTED_MODULE_1__["getGLTypeForTypedArray"])(newData.value) : _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].UNSIGNED_SHORT;
    }
    else {
        newData.componentDataType = orginData.componentDataType;
    }
    if (orginData.length == null) {
        newData.length = newData.value ? newData.value.length : null;
    }
    else {
        newData.length = orginData.length;
    }
    newData.drawType = orginData.drawType ? newData.drawType : _GLConstant__WEBPACK_IMPORTED_MODULE_0__["GLConstants"].STATIC_DRAW;
    if (newData.length == null) {
        throw "can not deduce geometry Indices length.";
    }
    return newData;
}
function createIndexBufferInfo(gl, data) {
    var vertexdata = deduceVertexIndexArrayInfo(data);
    if (vertexdata.buffer == null) {
        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, vertexdata.value, vertexdata.drawType);
        vertexdata.buffer = buffer;
    }
    return vertexdata;
}


/***/ }),

/***/ "./src/gl.ts":
/*!*******************!*\
  !*** ./src/gl.ts ***!
  \*******************/
/*! exports provided: initContext, setBuffersAndAttributes, setProgram, setProgramUniforms, drawBufferInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initContext", function() { return initContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBuffersAndAttributes", function() { return setBuffersAndAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProgram", function() { return setProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProgramUniforms", function() { return setProgramUniforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawBufferInfo", function() { return drawBufferInfo; });
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ "./src/State.ts");

WebGLRenderingContext.prototype.addExtension = function (extname) {
    var ext = this.getExtension(extname);
    if (ext) {
        switch (extname) {
            case "OES_vertex_array_object":
                this.bindVertexArray = ext.bindVertexArrayOES.bind(ext);
                this.createVertexArray = ext.createVertexArrayOES.bind(ext);
                this.deleteVertexArray = ext.deleteVertexArrayOES.bind(ext);
                break;
            default:
                console.warn("还未处理");
                break;
        }
    }
};
WebGLRenderingContext.prototype.__defineGetter__("beWebgl2", function () {
    if (this._bewebgl2 == null) {
        var version = this.getParameter(this.VERSION);
        this._bewebgl2 = version.indexOf("WebGL 2.0") === 0;
        return this._bewebgl2;
    }
    return this._bewebgl2;
});
WebGLRenderingContext.prototype.__defineSetter__("beWebgl2", function (val) {
    this._bewebgl2 = val;
});
function initContext(canvas, options) {
    if (options === void 0) { options = {}; }
    var type = options.context || "webgl";
    var gl = canvas.getContext(type, options.contextAtts);
    if (options.extentions != null) {
        options.extentions.forEach(function (ext) {
            gl.addExtension(ext);
        });
    }
    return gl;
}
function setBuffersAndAttributes(gl, geometry, program) {
    for (var attName in program.attsDic) {
        program.attsDic[attName].setter(geometry.atts[attName]);
    }
    if (geometry.indices) {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.indices.buffer);
    }
}
function setProgram(gl, program) {
    gl.useProgram(program.program);
    if (program.uniforms) {
        setProgramUniforms(program, program.uniforms);
    }
    if (program.states) {
        Object(_State__WEBPACK_IMPORTED_MODULE_0__["setProgramState"])(gl, program.states);
    }
}
function setProgramUniforms(info, uniforms) {
    for (var key in uniforms) {
        var setter = info.uniformsDic[key].setter;
        var value = uniforms[key];
        setter(value);
    }
}
function drawBufferInfo(gl, geometry, instanceCount) {
    if (geometry.indices != null) {
        gl.drawElements(geometry.primitiveType, geometry.count, geometry.indices.componentDataType, geometry.offset || 0);
    }
    else {
        gl.drawArrays(geometry.primitiveType, geometry.offset || 0, geometry.count);
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl */ "./src/gl.ts");
/* harmony import */ var _GeometryInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeometryInfo */ "./src/GeometryInfo.ts");
/* harmony import */ var _ProgramInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgramInfo */ "./src/ProgramInfo.ts");
/* harmony import */ var _Texture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Texture */ "./src/Texture.ts");
console.log("@@@@@@@@@@@@@");




window.onload = function () {
    var cc = document.getElementById("canvas");
    var gl = Object(gl__WEBPACK_IMPORTED_MODULE_0__["initContext"])(cc, { extentions: ["OES_vertex_array_object"] });
    var be2 = gl.beWebgl2;
    var geometry = Object(_GeometryInfo__WEBPACK_IMPORTED_MODULE_1__["createGeometryInfoFromArray"])(gl, {
        "a_pos": [-0.5, -0.5, 0.5, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0],
        "a_uv": [0, 1, 0, 0, 1, 0, 1, 1]
    }, [0, 1, 2, 0, 3, 2]);
    var def_error_vs = "\
        attribute vec3 a_pos;\
        void main()\
        {\
            highp vec4 tmplet_1=vec4(a_pos.xyz,1.0);\
            gl_Position = tmplet_1;\
        }";
    var def_error_fs = "\
        uniform highp vec4 _MainColor;\
        void main()\
        {\
            gl_FragData[0] = _MainColor;\
        }";
    var uniforms = {};
    uniforms["_MainColor"] = new Float32Array([0.5, 1, 0.5, 1]);
    var bassporgram = Object(_ProgramInfo__WEBPACK_IMPORTED_MODULE_2__["createBassProgramInfo"])(gl, def_error_vs, def_error_fs, "ssxx");
    var program = Object(_ProgramInfo__WEBPACK_IMPORTED_MODULE_2__["createProgramInfo"])(gl, { program: bassporgram, uniforms: uniforms });
    var def_vs = "\
        attribute vec3 a_pos;\
        attribute vec2 a_uv;\
        varying highp vec2 xlv_TEXCOORD0;   \
        void main()\
        {\
            highp vec4 tmplet_1=vec4(a_pos.xyz,1.0);\
            xlv_TEXCOORD0=a_uv;\
            gl_Position = tmplet_1;\
        }";
    var def_fs = "\
        uniform highp vec4 _MainColor;\
        varying highp vec2 xlv_TEXCOORD0;   \
        uniform sampler2D _MainTex;\
        void main()\
        {\
            lowp vec4 tmplet_3= texture2D(_MainTex, xlv_TEXCOORD0);\
            gl_FragData[0] = _MainColor*tmplet_3;\
        }";
    var imag = new Image();
    imag.src = "./dist/tes.png";
    imag.onload = function () {
        uniforms["_MainTex"] = Object(_Texture__WEBPACK_IMPORTED_MODULE_3__["createTextureFromHtml"])(gl, imag);
        program = Object(_ProgramInfo__WEBPACK_IMPORTED_MODULE_2__["createProgramInfo"])(gl, { program: { vs: def_vs, fs: def_fs, name: "ssxxss" }, uniforms: uniforms });
    };
    var render = function () {
        gl.clearColor(0.5, 0.1, 0.5, 1);
        gl.clearDepth(0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        Object(gl__WEBPACK_IMPORTED_MODULE_0__["setProgram"])(gl, program);
        Object(gl__WEBPACK_IMPORTED_MODULE_0__["setBuffersAndAttributes"])(gl, geometry, program);
        Object(gl__WEBPACK_IMPORTED_MODULE_0__["drawBufferInfo"])(gl, geometry);
        requestAnimationFrame(function () {
            render();
        });
    };
    render();
};


/***/ })

/******/ });
//# sourceMappingURL=main.js.map