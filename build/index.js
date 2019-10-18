module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "/*! UIkit 3.2.1 | http://www.getuikit.com | (c) 2014 - 2019 YOOtheme | MIT License */html{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:16px;font-weight:400;line-height:1.5;-webkit-text-size-adjust:100%;background:#fff;color:#666}body{margin:0}a:active,a:hover{outline:0}.uk-link,a{color:#1e87f0;text-decoration:none;cursor:pointer}.uk-link-toggle:focus .uk-link,.uk-link-toggle:hover .uk-link,.uk-link:hover,a:hover{color:#0f6ecd;text-decoration:underline}abbr[title]{text-decoration:underline dotted;-webkit-text-decoration-style:dotted}b,strong{font-weight:bolder}:not(pre)>code,:not(pre)>kbd,:not(pre)>samp{font-family:Consolas,monaco,monospace;font-size:.875rem;color:#f0506e;white-space:nowrap;padding:2px 6px;background:#f8f8f8}em{color:#f0506e}ins{background:#ffd;color:#666;text-decoration:none}mark{background:#ffd;color:#666}q{font-style:italic}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}audio,canvas,iframe,img,svg,video{vertical-align:middle}canvas,img,video{max-width:100%;height:auto;box-sizing:border-box}@supports (display:block){svg{max-width:100%;height:auto;box-sizing:border-box}}svg:not(:root){overflow:hidden}img:not([src]){min-width:1px;visibility:hidden}iframe{border:0}address,dl,fieldset,figure,ol,p,pre,ul{margin:0 0 20px 0}*+address,*+dl,*+fieldset,*+figure,*+ol,*+p,*+pre,*+ul{margin-top:20px}.uk-h1,.uk-h2,.uk-h3,.uk-h4,.uk-h5,.uk-h6,.uk-heading-2xlarge,.uk-heading-large,.uk-heading-medium,.uk-heading-small,.uk-heading-xlarge,h1,h2,h3,h4,h5,h6{margin:0 0 20px 0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-weight:400;color:#333;text-transform:none}*+.uk-h1,*+.uk-h2,*+.uk-h3,*+.uk-h4,*+.uk-h5,*+.uk-h6,*+.uk-heading-2xlarge,*+.uk-heading-large,*+.uk-heading-medium,*+.uk-heading-small,*+.uk-heading-xlarge,*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:40px}.uk-h1,h1{font-size:2.23125rem;line-height:1.2}.uk-h2,h2{font-size:1.7rem;line-height:1.3}.uk-h3,h3{font-size:1.5rem;line-height:1.4}.uk-h4,h4{font-size:1.25rem;line-height:1.4}.uk-h5,h5{font-size:16px;line-height:1.4}.uk-h6,h6{font-size:.875rem;line-height:1.4}@media (min-width:960px){.uk-h1,h1{font-size:2.625rem}.uk-h2,h2{font-size:2rem}}ol,ul{padding-left:30px}ol>li>ol,ol>li>ul,ul>li>ol,ul>li>ul{margin:0}dt{font-weight:700}dd{margin-left:0}.uk-hr,hr{overflow:visible;text-align:inherit;margin:0 0 20px 0;border:0;border-top:1px solid #e5e5e5}*+.uk-hr,*+hr{margin-top:20px}address{font-style:normal}blockquote{margin:0 0 20px 0;font-size:1.25rem;line-height:1.5;font-style:italic;color:#333}*+blockquote{margin-top:20px}blockquote p:last-of-type{margin-bottom:0}blockquote footer{margin-top:10px;font-size:.875rem;line-height:1.5;color:#666}blockquote footer::before{content:\"— \"}pre{font:.875rem/1.5 Consolas,monaco,monospace;color:#666;-moz-tab-size:4;tab-size:4;overflow:auto;padding:10px;border:1px solid #e5e5e5;border-radius:3px;background:#fff}pre code{font-family:Consolas,monaco,monospace}::selection{background:#39f;color:#fff;text-shadow:none}details,main{display:block}summary{display:list-item}template{display:none}.uk-breakpoint-s::before{content:'640px'}.uk-breakpoint-m::before{content:'960px'}.uk-breakpoint-l::before{content:'1200px'}.uk-breakpoint-xl::before{content:'1600px'}:root{--uk-breakpoint-s:640px;--uk-breakpoint-m:960px;--uk-breakpoint-l:1200px;--uk-breakpoint-xl:1600px}.uk-link-muted a,a.uk-link-muted{color:#999}.uk-link-muted a:hover,.uk-link-toggle:focus .uk-link-muted,.uk-link-toggle:hover .uk-link-muted,a.uk-link-muted:hover{color:#666}.uk-link-text a,a.uk-link-text{color:inherit}.uk-link-text a:hover,.uk-link-toggle:focus .uk-link-text,.uk-link-toggle:hover .uk-link-text,a.uk-link-text:hover{color:#999}.uk-link-heading a,a.uk-link-heading{color:inherit}.uk-link-heading a:hover,.uk-link-toggle:focus .uk-link-heading,.uk-link-toggle:hover .uk-link-heading,a.uk-link-heading:hover{color:#1e87f0;text-decoration:none}.uk-link-reset a,a.uk-link-reset{color:inherit!important;text-decoration:none!important}.uk-link-toggle{color:inherit!important;text-decoration:none!important}.uk-link-toggle:focus{outline:0}.uk-heading-small{font-size:2.6rem;line-height:1.2}.uk-heading-medium{font-size:2.8875rem;line-height:1.1}.uk-heading-large{font-size:3.4rem;line-height:1.1}.uk-heading-xlarge{font-size:4rem;line-height:1}.uk-heading-2xlarge{font-size:6rem;line-height:1}@media (min-width:960px){.uk-heading-small{font-size:3.25rem}.uk-heading-medium{font-size:3.5rem}.uk-heading-large{font-size:4rem}.uk-heading-xlarge{font-size:6rem}.uk-heading-2xlarge{font-size:8rem}}@media (min-width:1200px){.uk-heading-medium{font-size:4rem}.uk-heading-large{font-size:6rem}.uk-heading-xlarge{font-size:8rem}.uk-heading-2xlarge{font-size:11rem}}.uk-heading-divider{padding-bottom:calc(5px + .1em);border-bottom:calc(.2px + .05em) solid #e5e5e5}.uk-heading-bullet{position:relative}.uk-heading-bullet::before{content:\"\";display:inline-block;position:relative;top:calc(-.1 * 1em);vertical-align:middle;height:calc(4px + .7em);margin-right:calc(5px + .2em);border-left:calc(5px + .1em) solid #e5e5e5}.uk-heading-line{overflow:hidden}.uk-heading-line>*{display:inline-block;position:relative}.uk-heading-line>::after,.uk-heading-line>::before{content:\"\";position:absolute;top:calc(50% - ((.2px + .05em)/ 2));width:2000px;border-bottom:calc(.2px + .05em) solid #e5e5e5}.uk-heading-line>::before{right:100%;margin-right:calc(5px + .3em)}.uk-heading-line>::after{left:100%;margin-left:calc(5px + .3em)}[class*=uk-divider]{border:none;margin-bottom:20px}*+[class*=uk-divider]{margin-top:20px}.uk-divider-icon{position:relative;height:20px;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22%23e5e5e5%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");background-repeat:no-repeat;background-position:50% 50%}.uk-divider-icon::after,.uk-divider-icon::before{content:\"\";position:absolute;top:50%;max-width:calc(50% - (50px / 2));border-bottom:1px solid #e5e5e5}.uk-divider-icon::before{right:calc(50% + (50px / 2));width:100%}.uk-divider-icon::after{left:calc(50% + (50px / 2));width:100%}.uk-divider-small{line-height:0}.uk-divider-small::after{content:\"\";display:inline-block;width:100px;max-width:100%;border-top:1px solid #e5e5e5;vertical-align:top}.uk-divider-vertical{width:1px;height:100px;margin-left:auto;margin-right:auto;border-left:1px solid #e5e5e5}.uk-list{padding:0;list-style:none}.uk-list>li::after,.uk-list>li::before{content:\"\";display:table}.uk-list>li::after{clear:both}.uk-list>li>:last-child{margin-bottom:0}.uk-list ul{margin:0;padding-left:30px;list-style:none}.uk-list>li:nth-child(n+2),.uk-list>li>ul{margin-top:10px}.uk-list-divider>li:nth-child(n+2){margin-top:10px;padding-top:10px;border-top:1px solid #e5e5e5}.uk-list-striped>li{padding:10px 10px}.uk-list-striped>li:nth-of-type(odd){border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5}.uk-list-striped>li:nth-of-type(odd){background:#f8f8f8}.uk-list-striped>li:nth-child(n+2){margin-top:0}.uk-list-bullet>li{position:relative;padding-left:calc(1.5em + 10px)}.uk-list-bullet>li::before{content:\"\";position:absolute;top:0;left:0;width:1.5em;height:1.5em;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23666%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20%2F%3E%0A%3C%2Fsvg%3E\");background-repeat:no-repeat;background-position:50% 50%;display:block}.uk-list-large>li:nth-child(n+2),.uk-list-large>li>ul{margin-top:20px}.uk-list-large.uk-list-divider>li:nth-child(n+2){margin-top:20px;padding-top:20px}.uk-list-large.uk-list-striped>li{padding:20px 10px}.uk-list-large.uk-list-striped>li:nth-of-type(odd){border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5}.uk-list-large.uk-list-striped>li:nth-child(n+2){margin-top:0}.uk-description-list>dt{color:#333;font-size:.875rem;font-weight:400;text-transform:uppercase}.uk-description-list>dt:nth-child(n+2){margin-top:20px}.uk-description-list-divider>dt:nth-child(n+2){margin-top:20px;padding-top:20px;border-top:1px solid #e5e5e5}.uk-table{border-collapse:collapse;border-spacing:0;width:100%;margin-bottom:20px}*+.uk-table{margin-top:20px}.uk-table th{padding:16px 12px;text-align:left;vertical-align:bottom;font-size:.875rem;font-weight:400;color:#999;text-transform:uppercase}.uk-table td{padding:16px 12px;vertical-align:top}.uk-table td>:last-child{margin-bottom:0}.uk-table tfoot{font-size:.875rem}.uk-table caption{font-size:.875rem;text-align:left;color:#999}.uk-table-middle,.uk-table-middle td{vertical-align:middle!important}.uk-table-divider>:first-child>tr:not(:first-child),.uk-table-divider>:not(:first-child)>tr,.uk-table-divider>tr:not(:first-child){border-top:1px solid #e5e5e5}.uk-table-striped tbody tr:nth-of-type(odd),.uk-table-striped>tr:nth-of-type(odd){background:#f8f8f8;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5}.uk-table-hover tbody tr:hover,.uk-table-hover>tr:hover{background:#ffd}.uk-table tbody tr.uk-active,.uk-table>tr.uk-active{background:#ffd}.uk-table-small td,.uk-table-small th{padding:10px 12px}.uk-table-large td,.uk-table-large th{padding:22px 12px}.uk-table-justify td:first-child,.uk-table-justify th:first-child{padding-left:0}.uk-table-justify td:last-child,.uk-table-justify th:last-child{padding-right:0}.uk-table-shrink{width:1px}.uk-table-expand{min-width:150px}.uk-table-link{padding:0!important}.uk-table-link>a{display:block;padding:16px 12px}.uk-table-small .uk-table-link>a{padding:10px 12px}@media (max-width:959px){.uk-table-responsive,.uk-table-responsive tbody,.uk-table-responsive td,.uk-table-responsive th,.uk-table-responsive tr{display:block}.uk-table-responsive thead{display:none}.uk-table-responsive td,.uk-table-responsive th{width:auto!important;max-width:none!important;min-width:0!important;overflow:visible!important;white-space:normal!important}.uk-table-responsive .uk-table-link:not(:first-child)>a,.uk-table-responsive td:not(:first-child):not(.uk-table-link),.uk-table-responsive th:not(:first-child):not(.uk-table-link){padding-top:5px!important}.uk-table-responsive .uk-table-link:not(:last-child)>a,.uk-table-responsive td:not(:last-child):not(.uk-table-link),.uk-table-responsive th:not(:last-child):not(.uk-table-link){padding-bottom:5px!important}.uk-table-justify.uk-table-responsive td,.uk-table-justify.uk-table-responsive th{padding-left:0;padding-right:0}}.uk-table tbody tr{transition:background-color .1s linear}.uk-icon{margin:0;border:none;border-radius:0;overflow:visible;font:inherit;color:inherit;text-transform:none;padding:0;background-color:transparent;display:inline-block;fill:currentcolor;line-height:0}button.uk-icon:not(:disabled){cursor:pointer}.uk-icon::-moz-focus-inner{border:0;padding:0}.uk-icon:not(.uk-preserve) [fill*='#']:not(.uk-preserve){fill:currentcolor}.uk-icon:not(.uk-preserve) [stroke*='#']:not(.uk-preserve){stroke:currentcolor}.uk-icon>*{transform:translate(0,0)}.uk-icon-image{width:20px;height:20px;background-position:50% 50%;background-repeat:no-repeat;background-size:contain;vertical-align:middle}.uk-icon-link{color:#999}.uk-icon-link:focus,.uk-icon-link:hover{color:#666;outline:0}.uk-active>.uk-icon-link,.uk-icon-link:active{color:#595959}.uk-icon-button{box-sizing:border-box;width:36px;height:36px;border-radius:500px;background:#f8f8f8;color:#999;vertical-align:middle;display:inline-flex;justify-content:center;align-items:center;transition:.1s ease-in-out;transition-property:color,background-color}.uk-icon-button:focus,.uk-icon-button:hover{background-color:#ebebeb;color:#666;outline:0}.uk-active>.uk-icon-button,.uk-icon-button:active{background-color:#dfdfdf;color:#666}.uk-range{box-sizing:border-box;margin:0;vertical-align:middle;max-width:100%;width:100%;-webkit-appearance:none;background:0 0;padding:0}.uk-range:focus{outline:0}.uk-range::-moz-focus-outer{border:none}.uk-range::-ms-track{height:15px;background:0 0;border-color:transparent;color:transparent}.uk-range:not(:disabled)::-webkit-slider-thumb{cursor:pointer}.uk-range:not(:disabled)::-moz-range-thumb{cursor:pointer}.uk-range:not(:disabled)::-ms-thumb{cursor:pointer}.uk-range::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-7px;height:15px;width:15px;border-radius:500px;background:#fff;border:1px solid #ccc}.uk-range::-moz-range-thumb{border:none;height:15px;width:15px;border-radius:500px;background:#fff;border:1px solid #ccc}.uk-range::-ms-thumb{margin-top:0}.uk-range::-ms-thumb{border:none;height:15px;width:15px;border-radius:500px;background:#fff;border:1px solid #ccc}.uk-range::-ms-tooltip{display:none}.uk-range::-webkit-slider-runnable-track{height:3px;background:#ebebeb;border-radius:500px}.uk-range:active::-webkit-slider-runnable-track,.uk-range:focus::-webkit-slider-runnable-track{background:#d2d2d2}.uk-range::-moz-range-track{height:3px;background:#ebebeb;border-radius:500px}.uk-range:focus::-moz-range-track{background:#d2d2d2}.uk-range::-ms-fill-lower,.uk-range::-ms-fill-upper{height:3px;background:#ebebeb;border-radius:500px}.uk-range:focus::-ms-fill-lower,.uk-range:focus::-ms-fill-upper{background:#d2d2d2}.uk-checkbox,.uk-input,.uk-radio,.uk-select,.uk-textarea{box-sizing:border-box;margin:0;border-radius:0;font:inherit}.uk-input{overflow:visible}.uk-select{text-transform:none}.uk-select optgroup{font:inherit;font-weight:700}.uk-textarea{overflow:auto}.uk-input[type=search]::-webkit-search-cancel-button,.uk-input[type=search]::-webkit-search-decoration{-webkit-appearance:none}.uk-input[type=number]::-webkit-inner-spin-button,.uk-input[type=number]::-webkit-outer-spin-button{height:auto}.uk-input::-moz-placeholder,.uk-textarea::-moz-placeholder{opacity:1}.uk-checkbox:not(:disabled),.uk-radio:not(:disabled){cursor:pointer}.uk-fieldset{border:none;margin:0;padding:0}.uk-input,.uk-textarea{-webkit-appearance:none}.uk-input,.uk-select,.uk-textarea{max-width:100%;width:100%;border:0 none;padding:0 10px;background:#fff;color:#666;border:1px solid #e5e5e5;transition:.2s ease-in-out;transition-property:color,background-color,border}.uk-input,.uk-select:not([multiple]):not([size]){height:40px;vertical-align:middle;display:inline-block}.uk-input:not(input),.uk-select:not(select){line-height:38px}.uk-select[multiple],.uk-select[size],.uk-textarea{padding-top:4px;padding-bottom:4px;vertical-align:top}.uk-input:focus,.uk-select:focus,.uk-textarea:focus{outline:0;background-color:#fff;color:#666;border-color:#1e87f0}.uk-input:disabled,.uk-select:disabled,.uk-textarea:disabled{background-color:#f8f8f8;color:#999;border-color:#e5e5e5}.uk-input::-ms-input-placeholder{color:#999!important}.uk-input::placeholder{color:#999}.uk-textarea::-ms-input-placeholder{color:#999!important}.uk-textarea::placeholder{color:#999}.uk-form-small{font-size:.875rem}.uk-form-small:not(textarea):not([multiple]):not([size]){height:30px;padding-left:8px;padding-right:8px}.uk-form-small:not(select):not(input):not(textarea){line-height:28px}.uk-form-large{font-size:1.25rem}.uk-form-large:not(textarea):not([multiple]):not([size]){height:55px;padding-left:12px;padding-right:12px}.uk-form-large:not(select):not(input):not(textarea){line-height:53px}.uk-form-danger,.uk-form-danger:focus{color:#f0506e;border-color:#f0506e}.uk-form-success,.uk-form-success:focus{color:#32d296;border-color:#32d296}.uk-form-blank{background:0 0;border-color:transparent}.uk-form-blank:focus{border-color:#e5e5e5;border-style:dashed}input.uk-form-width-xsmall{width:50px}select.uk-form-width-xsmall{width:75px}.uk-form-width-small{width:130px}.uk-form-width-medium{width:200px}.uk-form-width-large{width:500px}.uk-select:not([multiple]):not([size]){-webkit-appearance:none;-moz-appearance:none;padding-right:20px;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");background-repeat:no-repeat;background-position:100% 50%}.uk-select:not([multiple]):not([size])::-ms-expand{display:none}.uk-select:not([multiple]):not([size]) option{color:#444}.uk-select:not([multiple]):not([size]):disabled{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\")}.uk-input[list]{padding-right:20px;background-repeat:no-repeat;background-position:100% 50%}.uk-input[list]:focus,.uk-input[list]:hover{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%2012%208%206%2016%206%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\")}.uk-input[list]::-webkit-calendar-picker-indicator{display:none}.uk-checkbox,.uk-radio{display:inline-block;height:16px;width:16px;overflow:hidden;margin-top:-4px;vertical-align:middle;-webkit-appearance:none;-moz-appearance:none;background-color:transparent;background-repeat:no-repeat;background-position:50% 50%;border:1px solid #ccc;transition:.2s ease-in-out;transition-property:background-color,border}.uk-radio{border-radius:50%}.uk-checkbox:focus,.uk-radio:focus{outline:0;border-color:#1e87f0}.uk-checkbox:checked,.uk-checkbox:indeterminate,.uk-radio:checked{background-color:#1e87f0;border-color:transparent}.uk-checkbox:checked:focus,.uk-checkbox:indeterminate:focus,.uk-radio:checked:focus{background-color:#0e6dcd}.uk-radio:checked{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E\")}.uk-checkbox:checked{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\")}.uk-checkbox:indeterminate{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23fff%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E\")}.uk-checkbox:disabled,.uk-radio:disabled{background-color:#f8f8f8;border-color:#e5e5e5}.uk-radio:disabled:checked{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23999%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E\")}.uk-checkbox:disabled:checked{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\")}.uk-checkbox:disabled:indeterminate{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23999%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E\")}.uk-legend{width:100%;color:inherit;padding:0;font-size:1.5rem;line-height:1.4}.uk-form-custom{display:inline-block;position:relative;max-width:100%;vertical-align:middle}.uk-form-custom input[type=file],.uk-form-custom select{position:absolute;top:0;z-index:1;width:100%;height:100%;left:0;-webkit-appearance:none;opacity:0;cursor:pointer}.uk-form-custom input[type=file]{font-size:500px;overflow:hidden}.uk-form-label{color:#333;font-size:.875rem}.uk-form-stacked .uk-form-label{display:block;margin-bottom:5px}@media (max-width:959px){.uk-form-horizontal .uk-form-label{display:block;margin-bottom:5px}}@media (min-width:960px){.uk-form-horizontal .uk-form-label{width:200px;margin-top:7px;float:left}.uk-form-horizontal .uk-form-controls{margin-left:215px}.uk-form-horizontal .uk-form-controls-text{padding-top:7px}}.uk-form-icon{position:absolute;top:0;bottom:0;left:0;width:40px;display:inline-flex;justify-content:center;align-items:center;color:#999}.uk-form-icon:hover{color:#666}.uk-form-icon:not(a):not(button):not(input){pointer-events:none}.uk-form-icon:not(.uk-form-icon-flip)~.uk-input{padding-left:40px!important}.uk-form-icon-flip{right:0;left:auto}.uk-form-icon-flip~.uk-input{padding-right:40px!important}.uk-button{margin:0;border:none;overflow:visible;font:inherit;color:inherit;text-transform:none;-webkit-appearance:none;border-radius:0;display:inline-block;box-sizing:border-box;padding:0 30px;vertical-align:middle;font-size:.875rem;line-height:38px;text-align:center;text-decoration:none;text-transform:uppercase;transition:.1s ease-in-out;transition-property:color,background-color,border-color}.uk-button:not(:disabled){cursor:pointer}.uk-button::-moz-focus-inner{border:0;padding:0}.uk-button:hover{text-decoration:none}.uk-button:focus{outline:0}.uk-button-default{background-color:transparent;color:#333;border:1px solid #e5e5e5}.uk-button-default:focus,.uk-button-default:hover{background-color:transparent;color:#333;border-color:#b2b2b2}.uk-button-default.uk-active,.uk-button-default:active{background-color:transparent;color:#333;border-color:#999}.uk-button-primary{background-color:#1e87f0;color:#fff;border:1px solid transparent}.uk-button-primary:focus,.uk-button-primary:hover{background-color:#0f7ae5;color:#fff}.uk-button-primary.uk-active,.uk-button-primary:active{background-color:#0e6dcd;color:#fff}.uk-button-secondary{background-color:#222;color:#fff;border:1px solid transparent}.uk-button-secondary:focus,.uk-button-secondary:hover{background-color:#151515;color:#fff}.uk-button-secondary.uk-active,.uk-button-secondary:active{background-color:#080808;color:#fff}.uk-button-danger{background-color:#f0506e;color:#fff;border:1px solid transparent}.uk-button-danger:focus,.uk-button-danger:hover{background-color:#ee395b;color:#fff}.uk-button-danger.uk-active,.uk-button-danger:active{background-color:#ec2147;color:#fff}.uk-button-danger:disabled,.uk-button-default:disabled,.uk-button-primary:disabled,.uk-button-secondary:disabled{background-color:transparent;color:#999;border-color:#e5e5e5}.uk-button-small{padding:0 15px;line-height:28px;font-size:.875rem}.uk-button-large{padding:0 40px;line-height:53px;font-size:.875rem}.uk-button-text{padding:0;line-height:1.5;background:0 0;color:#333;position:relative}.uk-button-text::before{content:\"\";position:absolute;bottom:0;left:0;right:100%;border-bottom:1px solid #333;transition:right .3s ease-out}.uk-button-text:focus,.uk-button-text:hover{color:#333}.uk-button-text:focus::before,.uk-button-text:hover::before{right:0}.uk-button-text:disabled{color:#999}.uk-button-text:disabled::before{display:none}.uk-button-link{padding:0;line-height:1.5;background:0 0;color:#1e87f0}.uk-button-link:focus,.uk-button-link:hover{color:#0f6ecd;text-decoration:underline}.uk-button-link:disabled{color:#999;text-decoration:none}.uk-button-group{display:inline-flex;vertical-align:middle;position:relative}.uk-button-group>.uk-button:nth-child(n+2),.uk-button-group>div:nth-child(n+2) .uk-button{margin-left:-1px}.uk-button-group .uk-button.uk-active,.uk-button-group .uk-button:active,.uk-button-group .uk-button:focus,.uk-button-group .uk-button:hover{position:relative;z-index:1}.uk-section{box-sizing:border-box;padding-top:40px;padding-bottom:40px}@media (min-width:960px){.uk-section{padding-top:70px;padding-bottom:70px}}.uk-section::after,.uk-section::before{content:\"\";display:table}.uk-section::after{clear:both}.uk-section>:last-child{margin-bottom:0}.uk-section-xsmall{padding-top:20px;padding-bottom:20px}.uk-section-small{padding-top:40px;padding-bottom:40px}.uk-section-large{padding-top:70px;padding-bottom:70px}@media (min-width:960px){.uk-section-large{padding-top:140px;padding-bottom:140px}}.uk-section-xlarge{padding-top:140px;padding-bottom:140px}@media (min-width:960px){.uk-section-xlarge{padding-top:210px;padding-bottom:210px}}.uk-section-default{background:#fff}.uk-section-muted{background:#f8f8f8}.uk-section-primary{background:#1e87f0}.uk-section-secondary{background:#222}.uk-container{box-sizing:content-box;max-width:1200px;margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px}@media (min-width:640px){.uk-container{padding-left:30px;padding-right:30px}}@media (min-width:960px){.uk-container{padding-left:40px;padding-right:40px}}.uk-container::after,.uk-container::before{content:\"\";display:table}.uk-container::after{clear:both}.uk-container>:last-child{margin-bottom:0}.uk-container .uk-container{padding-left:0;padding-right:0}.uk-container-xsmall{max-width:750px}.uk-container-small{max-width:900px}.uk-container-large{max-width:1600px}.uk-container-expand{max-width:none}.uk-container-expand-left{margin-left:0}.uk-container-expand-right{margin-right:0}@media (min-width:640px){.uk-container-expand-left.uk-container-xsmall,.uk-container-expand-right.uk-container-xsmall{max-width:calc(50% + (750px / 2) - 30px)}.uk-container-expand-left.uk-container-small,.uk-container-expand-right.uk-container-small{max-width:calc(50% + (900px / 2) - 30px)}}@media (min-width:960px){.uk-container-expand-left,.uk-container-expand-right{max-width:calc(50% + (1200px / 2) - 40px)}.uk-container-expand-left.uk-container-xsmall,.uk-container-expand-right.uk-container-xsmall{max-width:calc(50% + (750px / 2) - 40px)}.uk-container-expand-left.uk-container-small,.uk-container-expand-right.uk-container-small{max-width:calc(50% + (900px / 2) - 40px)}.uk-container-expand-left.uk-container-large,.uk-container-expand-right.uk-container-large{max-width:calc(50% + (1600px / 2) - 40px)}}.uk-container-item-padding-remove-left,.uk-container-item-padding-remove-right{width:calc(100% + 15px)}.uk-container-item-padding-remove-left{margin-left:-15px}.uk-container-item-padding-remove-right{margin-right:-15px}@media (min-width:640px){.uk-container-item-padding-remove-left,.uk-container-item-padding-remove-right{width:calc(100% + 30px)}.uk-container-item-padding-remove-left{margin-left:-30px}.uk-container-item-padding-remove-right{margin-right:-30px}}@media (min-width:960px){.uk-container-item-padding-remove-left,.uk-container-item-padding-remove-right{width:calc(100% + 40px)}.uk-container-item-padding-remove-left{margin-left:-40px}.uk-container-item-padding-remove-right{margin-right:-40px}}.uk-grid{display:flex;flex-wrap:wrap;margin:0;padding:0;list-style:none}.uk-grid>*{margin:0}.uk-grid>*>:last-child{margin-bottom:0}.uk-grid{margin-left:-30px}.uk-grid>*{padding-left:30px}*+.uk-grid-margin,.uk-grid+.uk-grid,.uk-grid>.uk-grid-margin{margin-top:30px}@media (min-width:1200px){.uk-grid{margin-left:-40px}.uk-grid>*{padding-left:40px}*+.uk-grid-margin,.uk-grid+.uk-grid,.uk-grid>.uk-grid-margin{margin-top:40px}}.uk-grid-column-small,.uk-grid-small{margin-left:-15px}.uk-grid-column-small>*,.uk-grid-small>*{padding-left:15px}*+.uk-grid-margin-small,.uk-grid+.uk-grid-row-small,.uk-grid+.uk-grid-small,.uk-grid-row-small>.uk-grid-margin,.uk-grid-small>.uk-grid-margin{margin-top:15px}.uk-grid-column-medium,.uk-grid-medium{margin-left:-30px}.uk-grid-column-medium>*,.uk-grid-medium>*{padding-left:30px}*+.uk-grid-margin-medium,.uk-grid+.uk-grid-medium,.uk-grid+.uk-grid-row-medium,.uk-grid-medium>.uk-grid-margin,.uk-grid-row-medium>.uk-grid-margin{margin-top:30px}.uk-grid-column-large,.uk-grid-large{margin-left:-40px}.uk-grid-column-large>*,.uk-grid-large>*{padding-left:40px}*+.uk-grid-margin-large,.uk-grid+.uk-grid-large,.uk-grid+.uk-grid-row-large,.uk-grid-large>.uk-grid-margin,.uk-grid-row-large>.uk-grid-margin{margin-top:40px}@media (min-width:1200px){.uk-grid-column-large,.uk-grid-large{margin-left:-70px}.uk-grid-column-large>*,.uk-grid-large>*{padding-left:70px}*+.uk-grid-margin-large,.uk-grid+.uk-grid-large,.uk-grid+.uk-grid-row-large,.uk-grid-large>.uk-grid-margin,.uk-grid-row-large>.uk-grid-margin{margin-top:70px}}.uk-grid-collapse,.uk-grid-column-collapse{margin-left:0}.uk-grid-collapse>*,.uk-grid-column-collapse>*{padding-left:0}.uk-grid+.uk-grid-collapse,.uk-grid+.uk-grid-row-collapse,.uk-grid-collapse>.uk-grid-margin,.uk-grid-row-collapse>.uk-grid-margin{margin-top:0}.uk-grid-divider>*{position:relative}.uk-grid-divider>:not(.uk-first-column)::before{content:\"\";position:absolute;top:0;bottom:0;border-left:1px solid #e5e5e5}.uk-grid-divider.uk-grid-stack>.uk-grid-margin::before{content:\"\";position:absolute;left:0;right:0;border-top:1px solid #e5e5e5}.uk-grid-divider{margin-left:-60px}.uk-grid-divider>*{padding-left:60px}.uk-grid-divider>:not(.uk-first-column)::before{left:30px}.uk-grid-divider.uk-grid-stack>.uk-grid-margin{margin-top:60px}.uk-grid-divider.uk-grid-stack>.uk-grid-margin::before{top:-30px;left:60px}@media (min-width:1200px){.uk-grid-divider{margin-left:-80px}.uk-grid-divider>*{padding-left:80px}.uk-grid-divider>:not(.uk-first-column)::before{left:40px}.uk-grid-divider.uk-grid-stack>.uk-grid-margin{margin-top:80px}.uk-grid-divider.uk-grid-stack>.uk-grid-margin::before{top:-40px;left:80px}}.uk-grid-divider.uk-grid-column-small,.uk-grid-divider.uk-grid-small{margin-left:-30px}.uk-grid-divider.uk-grid-column-small>*,.uk-grid-divider.uk-grid-small>*{padding-left:30px}.uk-grid-divider.uk-grid-column-small>:not(.uk-first-column)::before,.uk-grid-divider.uk-grid-small>:not(.uk-first-column)::before{left:15px}.uk-grid-divider.uk-grid-row-small.uk-grid-stack>.uk-grid-margin,.uk-grid-divider.uk-grid-small.uk-grid-stack>.uk-grid-margin{margin-top:30px}.uk-grid-divider.uk-grid-small.uk-grid-stack>.uk-grid-margin::before{top:-15px;left:30px}.uk-grid-divider.uk-grid-row-small.uk-grid-stack>.uk-grid-margin::before{top:-15px}.uk-grid-divider.uk-grid-column-small.uk-grid-stack>.uk-grid-margin::before{left:30px}.uk-grid-divider.uk-grid-column-medium,.uk-grid-divider.uk-grid-medium{margin-left:-60px}.uk-grid-divider.uk-grid-column-medium>*,.uk-grid-divider.uk-grid-medium>*{padding-left:60px}.uk-grid-divider.uk-grid-column-medium>:not(.uk-first-column)::before,.uk-grid-divider.uk-grid-medium>:not(.uk-first-column)::before{left:30px}.uk-grid-divider.uk-grid-medium.uk-grid-stack>.uk-grid-margin,.uk-grid-divider.uk-grid-row-medium.uk-grid-stack>.uk-grid-margin{margin-top:60px}.uk-grid-divider.uk-grid-medium.uk-grid-stack>.uk-grid-margin::before{top:-30px;left:60px}.uk-grid-divider.uk-grid-row-medium.uk-grid-stack>.uk-grid-margin::before{top:-30px}.uk-grid-divider.uk-grid-column-medium.uk-grid-stack>.uk-grid-margin::before{left:60px}.uk-grid-divider.uk-grid-column-large,.uk-grid-divider.uk-grid-large{margin-left:-80px}.uk-grid-divider.uk-grid-column-large>*,.uk-grid-divider.uk-grid-large>*{padding-left:80px}.uk-grid-divider.uk-grid-column-large>:not(.uk-first-column)::before,.uk-grid-divider.uk-grid-large>:not(.uk-first-column)::before{left:40px}.uk-grid-divider.uk-grid-large.uk-grid-stack>.uk-grid-margin,.uk-grid-divider.uk-grid-row-large.uk-grid-stack>.uk-grid-margin{margin-top:80px}.uk-grid-divider.uk-grid-large.uk-grid-stack>.uk-grid-margin::before{top:-40px;left:80px}.uk-grid-divider.uk-grid-row-large.uk-grid-stack>.uk-grid-margin::before{top:-40px}.uk-grid-divider.uk-grid-column-large.uk-grid-stack>.uk-grid-margin::before{left:80px}@media (min-width:1200px){.uk-grid-divider.uk-grid-column-large,.uk-grid-divider.uk-grid-large{margin-left:-140px}.uk-grid-divider.uk-grid-column-large>*,.uk-grid-divider.uk-grid-large>*{padding-left:140px}.uk-grid-divider.uk-grid-column-large>:not(.uk-first-column)::before,.uk-grid-divider.uk-grid-large>:not(.uk-first-column)::before{left:70px}.uk-grid-divider.uk-grid-large.uk-grid-stack>.uk-grid-margin,.uk-grid-divider.uk-grid-row-large.uk-grid-stack>.uk-grid-margin{margin-top:140px}.uk-grid-divider.uk-grid-large.uk-grid-stack>.uk-grid-margin::before{top:-70px;left:140px}.uk-grid-divider.uk-grid-row-large.uk-grid-stack>.uk-grid-margin::before{top:-70px}.uk-grid-divider.uk-grid-column-large.uk-grid-stack>.uk-grid-margin::before{left:140px}}.uk-grid-item-match,.uk-grid-match>*{display:flex;flex-wrap:wrap}.uk-grid-item-match>:not([class*=uk-width]),.uk-grid-match>*>:not([class*=uk-width]){box-sizing:border-box;width:100%;flex:auto}.uk-tile{position:relative;box-sizing:border-box;padding-left:15px;padding-right:15px;padding-top:40px;padding-bottom:40px}@media (min-width:640px){.uk-tile{padding-left:30px;padding-right:30px}}@media (min-width:960px){.uk-tile{padding-left:40px;padding-right:40px;padding-top:70px;padding-bottom:70px}}.uk-tile::after,.uk-tile::before{content:\"\";display:table}.uk-tile::after{clear:both}.uk-tile>:last-child{margin-bottom:0}.uk-tile-xsmall{padding-top:20px;padding-bottom:20px}.uk-tile-small{padding-top:40px;padding-bottom:40px}.uk-tile-large{padding-top:70px;padding-bottom:70px}@media (min-width:960px){.uk-tile-large{padding-top:140px;padding-bottom:140px}}.uk-tile-xlarge{padding-top:140px;padding-bottom:140px}@media (min-width:960px){.uk-tile-xlarge{padding-top:210px;padding-bottom:210px}}.uk-tile-default{background:#fff}.uk-tile-muted{background:#f8f8f8}.uk-tile-primary{background:#1e87f0}.uk-tile-secondary{background:#222}.uk-card{position:relative;box-sizing:border-box;transition:box-shadow .1s ease-in-out}.uk-card-body{padding:30px 30px}.uk-card-header{padding:15px 30px}.uk-card-footer{padding:15px 30px}@media (min-width:1200px){.uk-card-body{padding:40px 40px}.uk-card-header{padding:20px 40px}.uk-card-footer{padding:20px 40px}}.uk-card-body::after,.uk-card-body::before,.uk-card-footer::after,.uk-card-footer::before,.uk-card-header::after,.uk-card-header::before{content:\"\";display:table}.uk-card-body::after,.uk-card-footer::after,.uk-card-header::after{clear:both}.uk-card-body>:last-child,.uk-card-footer>:last-child,.uk-card-header>:last-child{margin-bottom:0}.uk-card-title{font-size:1.5rem;line-height:1.4}.uk-card-badge{position:absolute;top:30px;right:30px;z-index:1}.uk-card-badge:first-child+*{margin-top:0}.uk-card-hover:not(.uk-card-default):not(.uk-card-primary):not(.uk-card-secondary):hover{background:#fff;box-shadow:0 14px 25px rgba(0,0,0,.16)}.uk-card-default{background:#fff;color:#666;box-shadow:0 5px 15px rgba(0,0,0,.08)}.uk-card-default .uk-card-title{color:#333}.uk-card-default.uk-card-hover:hover{background-color:#fff;box-shadow:0 14px 25px rgba(0,0,0,.16)}.uk-card-default .uk-card-header{border-bottom:1px solid #e5e5e5}.uk-card-default .uk-card-footer{border-top:1px solid #e5e5e5}.uk-card-primary{background:#1e87f0;color:#fff;box-shadow:0 5px 15px rgba(0,0,0,.08)}.uk-card-primary .uk-card-title{color:#fff}.uk-card-primary.uk-card-hover:hover{background-color:#1e87f0;box-shadow:0 14px 25px rgba(0,0,0,.16)}.uk-card-secondary{background:#222;color:#fff;box-shadow:0 5px 15px rgba(0,0,0,.08)}.uk-card-secondary .uk-card-title{color:#fff}.uk-card-secondary.uk-card-hover:hover{background-color:#222;box-shadow:0 14px 25px rgba(0,0,0,.16)}.uk-card-small .uk-card-body,.uk-card-small.uk-card-body{padding:20px 20px}.uk-card-small .uk-card-header{padding:13px 20px}.uk-card-small .uk-card-footer{padding:13px 20px}@media (min-width:1200px){.uk-card-large .uk-card-body,.uk-card-large.uk-card-body{padding:70px 70px}.uk-card-large .uk-card-header{padding:35px 70px}.uk-card-large .uk-card-footer{padding:35px 70px}}.uk-card-body>.uk-nav-default{margin-left:-30px;margin-right:-30px}.uk-card-body>.uk-nav-default:only-child{margin-top:-15px;margin-bottom:-15px}.uk-card-body .uk-nav-default .uk-nav-divider,.uk-card-body .uk-nav-default .uk-nav-header,.uk-card-body .uk-nav-default>li>a{padding-left:30px;padding-right:30px}.uk-card-body .uk-nav-default .uk-nav-sub{padding-left:45px}@media (min-width:1200px){.uk-card-body>.uk-nav-default{margin-left:-40px;margin-right:-40px}.uk-card-body>.uk-nav-default:only-child{margin-top:-25px;margin-bottom:-25px}.uk-card-body .uk-nav-default .uk-nav-divider,.uk-card-body .uk-nav-default .uk-nav-header,.uk-card-body .uk-nav-default>li>a{padding-left:40px;padding-right:40px}.uk-card-body .uk-nav-default .uk-nav-sub{padding-left:55px}}.uk-card-small>.uk-nav-default{margin-left:-20px;margin-right:-20px}.uk-card-small>.uk-nav-default:only-child{margin-top:-5px;margin-bottom:-5px}.uk-card-small .uk-nav-default .uk-nav-divider,.uk-card-small .uk-nav-default .uk-nav-header,.uk-card-small .uk-nav-default>li>a{padding-left:20px;padding-right:20px}.uk-card-small .uk-nav-default .uk-nav-sub{padding-left:35px}@media (min-width:1200px){.uk-card-large>.uk-nav-default{margin:0}.uk-card-large>.uk-nav-default:only-child{margin:0}.uk-card-large .uk-nav-default .uk-nav-divider,.uk-card-large .uk-nav-default .uk-nav-header,.uk-card-large .uk-nav-default>li>a{padding-left:0;padding-right:0}.uk-card-large .uk-nav-default .uk-nav-sub{padding-left:15px}}.uk-close{color:#999;transition:.1s ease-in-out;transition-property:color,opacity}.uk-close:focus,.uk-close:hover{color:#666;outline:0}.uk-spinner>*{animation:uk-spinner-rotate 1.4s linear infinite}@keyframes uk-spinner-rotate{0%{transform:rotate(0)}100%{transform:rotate(270deg)}}.uk-spinner>*>*{stroke-dasharray:88px;stroke-dashoffset:0;transform-origin:center;animation:uk-spinner-dash 1.4s ease-in-out infinite;stroke-width:1;stroke-linecap:round}@keyframes uk-spinner-dash{0%{stroke-dashoffset:88px}50%{stroke-dashoffset:22px;transform:rotate(135deg)}100%{stroke-dashoffset:88px;transform:rotate(450deg)}}.uk-totop{padding:5px;color:#999;transition:color .1s ease-in-out}.uk-totop:focus,.uk-totop:hover{color:#666;outline:0}.uk-totop:active{color:#333}.uk-marker{padding:5px;background:#222;color:#fff;border-radius:500px}.uk-marker:focus,.uk-marker:hover{color:#fff;outline:0}.uk-alert{position:relative;margin-bottom:20px;padding:15px 29px 15px 15px;background:#f8f8f8;color:#666}*+.uk-alert{margin-top:20px}.uk-alert>:last-child{margin-bottom:0}.uk-alert-close{position:absolute;top:20px;right:15px;color:inherit;opacity:.4}.uk-alert-close:first-child+*{margin-top:0}.uk-alert-close:focus,.uk-alert-close:hover{color:inherit;opacity:.8}.uk-alert-primary{background:#d8eafc;color:#1e87f0}.uk-alert-success{background:#edfbf6;color:#32d296}.uk-alert-warning{background:#fff6ee;color:#faa05a}.uk-alert-danger{background:#fef4f6;color:#f0506e}.uk-alert h1,.uk-alert h2,.uk-alert h3,.uk-alert h4,.uk-alert h5,.uk-alert h6{color:inherit}.uk-alert a:not([class]){color:inherit;text-decoration:underline}.uk-alert a:not([class]):hover{color:inherit;text-decoration:underline}.uk-badge{box-sizing:border-box;min-width:22px;height:22px;padding:0 5px;border-radius:500px;vertical-align:middle;background:#1e87f0;color:#fff;font-size:.875rem;display:inline-flex;justify-content:center;align-items:center}.uk-badge:focus,.uk-badge:hover{color:#fff;text-decoration:none;outline:0}.uk-label{display:inline-block;padding:0 10px;background:#1e87f0;line-height:1.5;font-size:.875rem;color:#fff;vertical-align:middle;white-space:nowrap;border-radius:2px;text-transform:uppercase}.uk-label-success{background-color:#32d296;color:#fff}.uk-label-warning{background-color:#faa05a;color:#fff}.uk-label-danger{background-color:#f0506e;color:#fff}.uk-overlay{padding:30px 30px}.uk-overlay>:last-child{margin-bottom:0}.uk-overlay-default{background:rgba(255,255,255,.8)}.uk-overlay-primary{background:rgba(34,34,34,.8)}.uk-article::after,.uk-article::before{content:\"\";display:table}.uk-article::after{clear:both}.uk-article>:last-child{margin-bottom:0}.uk-article+.uk-article{margin-top:70px}.uk-article-title{font-size:2.23125rem;line-height:1.2}@media (min-width:960px){.uk-article-title{font-size:2.625rem}}.uk-article-meta{font-size:.875rem;line-height:1.4;color:#999}.uk-article-meta a{color:#999}.uk-article-meta a:hover{color:#666;text-decoration:none}.uk-comment-body{overflow-wrap:break-word;word-wrap:break-word}.uk-comment-header{margin-bottom:20px}.uk-comment-body::after,.uk-comment-body::before,.uk-comment-header::after,.uk-comment-header::before{content:\"\";display:table}.uk-comment-body::after,.uk-comment-header::after{clear:both}.uk-comment-body>:last-child,.uk-comment-header>:last-child{margin-bottom:0}.uk-comment-title{font-size:1.25rem;line-height:1.4}.uk-comment-meta{font-size:.875rem;line-height:1.4;color:#999}.uk-comment-list{padding:0;list-style:none}.uk-comment-list>:nth-child(n+2){margin-top:70px}.uk-comment-list .uk-comment~ul{margin:70px 0 0 0;padding-left:30px;list-style:none}@media (min-width:960px){.uk-comment-list .uk-comment~ul{padding-left:100px}}.uk-comment-list .uk-comment~ul>:nth-child(n+2){margin-top:70px}.uk-comment-primary{padding:30px;background-color:#f8f8f8}.uk-search{display:inline-block;position:relative;max-width:100%;margin:0}.uk-search-input::-webkit-search-cancel-button,.uk-search-input::-webkit-search-decoration{-webkit-appearance:none}.uk-search-input::-moz-placeholder{opacity:1}.uk-search-input{box-sizing:border-box;margin:0;border-radius:0;font:inherit;overflow:visible;-webkit-appearance:none;vertical-align:middle;width:100%;border:none;color:#666}.uk-search-input:focus{outline:0}.uk-search-input:-ms-input-placeholder{color:#999!important}.uk-search-input::placeholder{color:#999}.uk-search-icon:focus{outline:0}.uk-search .uk-search-icon{position:absolute;top:0;bottom:0;left:0;display:inline-flex;justify-content:center;align-items:center;color:#999}.uk-search .uk-search-icon:hover{color:#999}.uk-search .uk-search-icon:not(a):not(button):not(input){pointer-events:none}.uk-search .uk-search-icon-flip{right:0;left:auto}.uk-search-default{width:180px}.uk-search-default .uk-search-input{height:40px;padding-left:6px;padding-right:6px;background:0 0;border:1px solid #e5e5e5}.uk-search-default .uk-search-input:focus{background-color:transparent}.uk-search-default .uk-search-icon{width:40px}.uk-search-default .uk-search-icon:not(.uk-search-icon-flip)~.uk-search-input{padding-left:40px}.uk-search-default .uk-search-icon-flip~.uk-search-input{padding-right:40px}.uk-search-navbar{width:400px}.uk-search-navbar .uk-search-input{height:40px;background:0 0;font-size:1.5rem}.uk-search-navbar .uk-search-icon{width:40px}.uk-search-navbar .uk-search-icon:not(.uk-search-icon-flip)~.uk-search-input{padding-left:40px}.uk-search-navbar .uk-search-icon-flip~.uk-search-input{padding-right:40px}.uk-search-large{width:500px}.uk-search-large .uk-search-input{height:80px;background:0 0;font-size:2.625rem}.uk-search-large .uk-search-icon{width:80px}.uk-search-large .uk-search-icon:not(.uk-search-icon-flip)~.uk-search-input{padding-left:80px}.uk-search-large .uk-search-icon-flip~.uk-search-input{padding-right:80px}.uk-search-toggle{color:#999}.uk-search-toggle:focus,.uk-search-toggle:hover{color:#666}.uk-nav,.uk-nav ul{margin:0;padding:0;list-style:none}.uk-nav li>a{display:block;text-decoration:none}.uk-nav li>a:focus{outline:0}.uk-nav>li>a{padding:5px 0}ul.uk-nav-sub{padding:5px 0 5px 15px}.uk-nav-sub ul{padding-left:15px}.uk-nav-sub a{padding:2px 0}.uk-nav-parent-icon>.uk-parent>a::after{content:\"\";width:1.5em;height:1.5em;float:right;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%221.1%22%20points%3D%2210%201%204%207%2010%2013%22%20%2F%3E%0A%3C%2Fsvg%3E\");background-repeat:no-repeat;background-position:50% 50%}.uk-nav-parent-icon>.uk-parent.uk-open>a::after{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%221.1%22%20points%3D%221%204%207%2010%2013%204%22%20%2F%3E%0A%3C%2Fsvg%3E\")}.uk-nav-header{padding:5px 0;text-transform:uppercase;font-size:.875rem}.uk-nav-header:not(:first-child){margin-top:20px}.uk-nav-divider{margin:5px 0}.uk-nav-default{font-size:.875rem}.uk-nav-default>li>a{color:#999}.uk-nav-default>li>a:focus,.uk-nav-default>li>a:hover{color:#666}.uk-nav-default>li.uk-active>a{color:#333}.uk-nav-default .uk-nav-header{color:#333}.uk-nav-default .uk-nav-divider{border-top:1px solid #e5e5e5}.uk-nav-default .uk-nav-sub a{color:#999}.uk-nav-default .uk-nav-sub a:focus,.uk-nav-default .uk-nav-sub a:hover{color:#666}.uk-nav-default .uk-nav-sub li.uk-active>a{color:#333}.uk-nav-primary>li>a{font-size:1.5rem;line-height:1.5;color:#999}.uk-nav-primary>li>a:focus,.uk-nav-primary>li>a:hover{color:#666}.uk-nav-primary>li.uk-active>a{color:#333}.uk-nav-primary .uk-nav-header{color:#333}.uk-nav-primary .uk-nav-divider{border-top:1px solid #e5e5e5}.uk-nav-primary .uk-nav-sub a{color:#999}.uk-nav-primary .uk-nav-sub a:focus,.uk-nav-primary .uk-nav-sub a:hover{color:#666}.uk-nav-primary .uk-nav-sub li.uk-active>a{color:#333}.uk-nav-center{text-align:center}.uk-nav-center .uk-nav-sub,.uk-nav-center .uk-nav-sub ul{padding-left:0}.uk-nav-center.uk-nav-parent-icon>.uk-parent>a::after{position:absolute}.uk-navbar{display:flex;position:relative}.uk-navbar-container:not(.uk-navbar-transparent){background:#f8f8f8}.uk-navbar-container>::after,.uk-navbar-container>::before{display:none!important}.uk-navbar-center,.uk-navbar-center-left>*,.uk-navbar-center-right>*,.uk-navbar-left,.uk-navbar-right{display:flex;align-items:center}.uk-navbar-right{margin-left:auto}.uk-navbar-center:only-child{margin-left:auto;margin-right:auto;position:relative}.uk-navbar-center:not(:only-child){position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:max-content;box-sizing:border-box;z-index:990}.uk-navbar-center-left,.uk-navbar-center-right{position:absolute;top:0}.uk-navbar-center-left{right:100%}.uk-navbar-center-right{left:100%}[class*=uk-navbar-center-]{width:max-content;box-sizing:border-box}.uk-navbar-nav{display:flex;margin:0;padding:0;list-style:none}.uk-navbar-center:only-child,.uk-navbar-left,.uk-navbar-right{flex-wrap:wrap}.uk-navbar-item,.uk-navbar-nav>li>a,.uk-navbar-toggle{display:flex;justify-content:center;align-items:center;box-sizing:border-box;min-height:80px;padding:0 15px;font-size:.875rem;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";text-decoration:none}.uk-navbar-nav>li>a{color:#999;text-transform:uppercase;transition:.1s ease-in-out;transition-property:color,background-color}.uk-navbar-nav>li:hover>a,.uk-navbar-nav>li>a.uk-open,.uk-navbar-nav>li>a:focus{color:#666;outline:0}.uk-navbar-nav>li>a:active{color:#333}.uk-navbar-nav>li.uk-active>a{color:#333}.uk-navbar-item{color:#666}.uk-navbar-toggle{color:#999}.uk-navbar-toggle.uk-open,.uk-navbar-toggle:focus,.uk-navbar-toggle:hover{color:#666;outline:0;text-decoration:none}.uk-navbar-subtitle{font-size:.875rem}.uk-navbar-dropdown{display:none;position:absolute;z-index:1020;box-sizing:border-box;width:200px;padding:25px;background:#fff;color:#666;box-shadow:0 5px 12px rgba(0,0,0,.15)}.uk-navbar-dropdown.uk-open{display:block}[class*=uk-navbar-dropdown-top]{margin-top:-15px}[class*=uk-navbar-dropdown-bottom]{margin-top:15px}[class*=uk-navbar-dropdown-left]{margin-left:-15px}[class*=uk-navbar-dropdown-right]{margin-left:15px}.uk-navbar-dropdown-grid{margin-left:-50px}.uk-navbar-dropdown-grid>*{padding-left:50px}.uk-navbar-dropdown-grid>.uk-grid-margin{margin-top:50px}.uk-navbar-dropdown-stack .uk-navbar-dropdown-grid>*{width:100%!important}.uk-navbar-dropdown-width-2:not(.uk-navbar-dropdown-stack){width:400px}.uk-navbar-dropdown-width-3:not(.uk-navbar-dropdown-stack){width:600px}.uk-navbar-dropdown-width-4:not(.uk-navbar-dropdown-stack){width:800px}.uk-navbar-dropdown-width-5:not(.uk-navbar-dropdown-stack){width:1000px}.uk-navbar-dropdown-dropbar{margin-top:0;margin-bottom:0;box-shadow:none}.uk-navbar-dropdown-nav{font-size:.875rem}.uk-navbar-dropdown-nav>li>a{color:#999}.uk-navbar-dropdown-nav>li>a:focus,.uk-navbar-dropdown-nav>li>a:hover{color:#666}.uk-navbar-dropdown-nav>li.uk-active>a{color:#333}.uk-navbar-dropdown-nav .uk-nav-header{color:#333}.uk-navbar-dropdown-nav .uk-nav-divider{border-top:1px solid #e5e5e5}.uk-navbar-dropdown-nav .uk-nav-sub a{color:#999}.uk-navbar-dropdown-nav .uk-nav-sub a:focus,.uk-navbar-dropdown-nav .uk-nav-sub a:hover{color:#666}.uk-navbar-dropdown-nav .uk-nav-sub li.uk-active>a{color:#333}.uk-navbar-dropbar{background:#fff}.uk-navbar-dropbar-slide{position:absolute;z-index:980;left:0;right:0;box-shadow:0 5px 7px rgba(0,0,0,.05)}.uk-navbar-container>.uk-container .uk-navbar-left{margin-left:-15px;margin-right:-15px}.uk-navbar-container>.uk-container .uk-navbar-right{margin-right:-15px}.uk-navbar-dropdown-grid>*{position:relative}.uk-navbar-dropdown-grid>:not(.uk-first-column)::before{content:\"\";position:absolute;top:0;bottom:0;left:25px;border-left:1px solid #e5e5e5}.uk-navbar-dropdown-grid.uk-grid-stack>.uk-grid-margin::before{content:\"\";position:absolute;top:-25px;left:50px;right:0;border-top:1px solid #e5e5e5}.uk-subnav{display:flex;flex-wrap:wrap;margin-left:-20px;padding:0;list-style:none}.uk-subnav>*{flex:none;padding-left:20px;position:relative}.uk-subnav>*>:first-child{display:block;color:#999;font-size:.875rem;text-transform:uppercase;transition:.1s ease-in-out;transition-property:color,background-color}.uk-subnav>*>a:focus,.uk-subnav>*>a:hover{color:#666;text-decoration:none;outline:0}.uk-subnav>.uk-active>a{color:#333}.uk-subnav-divider>*{display:flex;align-items:center}.uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before{content:\"\";height:1.5em;margin-left:0;margin-right:20px;border-left:1px solid #e5e5e5}.uk-subnav-pill>*>:first-child{padding:5px 10px;background:0 0;color:#999}.uk-subnav-pill>*>a:focus,.uk-subnav-pill>*>a:hover{background-color:#f8f8f8;color:#666}.uk-subnav-pill>*>a:active{background-color:#f8f8f8;color:#666}.uk-subnav-pill>.uk-active>a{background-color:#1e87f0;color:#fff}.uk-subnav>.uk-disabled>a{color:#999}.uk-breadcrumb{display:flex;flex-wrap:wrap;padding:0;list-style:none}.uk-breadcrumb>*{flex:none}.uk-breadcrumb>*>*{display:inline-block;font-size:.875rem;color:#999}.uk-breadcrumb>*>:focus,.uk-breadcrumb>*>:hover{color:#666;text-decoration:none}.uk-breadcrumb>:last-child>*{color:#666}.uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before{content:\"/\";display:inline-block;margin:0 20px;color:#999}.uk-pagination{display:flex;flex-wrap:wrap;margin-left:-20px;padding:0;list-style:none}.uk-pagination>*{flex:none;padding-left:20px;position:relative}.uk-pagination>*>*{display:block;color:#999;transition:color .1s ease-in-out}.uk-pagination>*>:focus,.uk-pagination>*>:hover{color:#666;text-decoration:none}.uk-pagination>.uk-active>*{color:#666}.uk-pagination>.uk-disabled>*{color:#999}.uk-tab{display:flex;flex-wrap:wrap;margin-left:-20px;padding:0;list-style:none;position:relative}.uk-tab::before{content:\"\";position:absolute;bottom:0;left:20px;right:0;border-bottom:1px solid #e5e5e5}.uk-tab>*{flex:none;padding-left:20px;position:relative}.uk-tab>*>a{display:block;text-align:center;padding:5px 10px;color:#999;border-bottom:1px solid transparent;font-size:.875rem;text-transform:uppercase;transition:color .1s ease-in-out}.uk-tab>*>a:focus,.uk-tab>*>a:hover{color:#666;text-decoration:none}.uk-tab>.uk-active>a{color:#333;border-color:#1e87f0}.uk-tab>.uk-disabled>a{color:#999}.uk-tab-bottom::before{top:0;bottom:auto}.uk-tab-bottom>*>a{border-top:1px solid transparent;border-bottom:none}.uk-tab-left,.uk-tab-right{flex-direction:column;margin-left:0}.uk-tab-left>*,.uk-tab-right>*{padding-left:0}.uk-tab-left::before{top:0;bottom:0;left:auto;right:0;border-left:1px solid #e5e5e5;border-bottom:none}.uk-tab-right::before{top:0;bottom:0;left:0;right:auto;border-left:1px solid #e5e5e5;border-bottom:none}.uk-tab-left>*>a{text-align:left;border-right:1px solid transparent;border-bottom:none}.uk-tab-right>*>a{text-align:left;border-left:1px solid transparent;border-bottom:none}.uk-tab .uk-dropdown{margin-left:30px}.uk-slidenav{padding:5px 10px;color:rgba(102,102,102,.5);transition:color .1s ease-in-out}.uk-slidenav:focus,.uk-slidenav:hover{color:rgba(102,102,102,.9);outline:0}.uk-slidenav:active{color:rgba(102,102,102,.5)}.uk-slidenav-large{padding:10px 10px}.uk-slidenav-container{display:flex}.uk-dotnav{display:flex;flex-wrap:wrap;margin:0;padding:0;list-style:none;margin-left:-12px}.uk-dotnav>*{flex:none;padding-left:12px}.uk-dotnav>*>*{display:block;box-sizing:border-box;width:10px;height:10px;border-radius:50%;background:0 0;text-indent:100%;overflow:hidden;white-space:nowrap;border:1px solid rgba(102,102,102,.4);transition:.2s ease-in-out;transition-property:background-color,border-color}.uk-dotnav>*>:focus,.uk-dotnav>*>:hover{background-color:rgba(102,102,102,.6);outline:0;border-color:transparent}.uk-dotnav>*>:active{background-color:rgba(102,102,102,.2);border-color:transparent}.uk-dotnav>.uk-active>*{background-color:rgba(102,102,102,.6);border-color:transparent}.uk-dotnav-vertical{flex-direction:column;margin-left:0;margin-top:-12px}.uk-dotnav-vertical>*{padding-left:0;padding-top:12px}.uk-thumbnav{display:flex;flex-wrap:wrap;margin:0;padding:0;list-style:none;margin-left:-15px}.uk-thumbnav>*{padding-left:15px}.uk-thumbnav>*>*{display:inline-block;position:relative}.uk-thumbnav>*>::after{content:\"\";position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(255,255,255,.4);transition:background-color .1s ease-in-out}.uk-thumbnav>*>:focus,.uk-thumbnav>*>:hover{outline:0}.uk-thumbnav>*>:focus::after,.uk-thumbnav>*>:hover::after{background-color:transparent}.uk-thumbnav>.uk-active>::after{background-color:transparent}.uk-thumbnav-vertical{flex-direction:column;margin-left:0;margin-top:-15px}.uk-thumbnav-vertical>*{padding-left:0;padding-top:15px}.uk-accordion{padding:0;list-style:none}.uk-accordion>:nth-child(n+2){margin-top:20px}.uk-accordion-title{display:block;font-size:1.25rem;line-height:1.4;color:#333;overflow:hidden}.uk-accordion-title::before{content:\"\";width:1.4em;height:1.4em;margin-left:10px;float:right;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%221%22%20height%3D%2213%22%20x%3D%226%22%20y%3D%220%22%20%2F%3E%0A%3C%2Fsvg%3E\");background-repeat:no-repeat;background-position:50% 50%}.uk-open>.uk-accordion-title::before{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%3C%2Fsvg%3E\")}.uk-accordion-title:focus,.uk-accordion-title:hover{color:#666;text-decoration:none;outline:0}.uk-accordion-content{margin-top:20px}.uk-accordion-content::after,.uk-accordion-content::before{content:\"\";display:table}.uk-accordion-content::after{clear:both}.uk-accordion-content>:last-child{margin-bottom:0}.uk-drop{display:none;position:absolute;z-index:1020;box-sizing:border-box;width:300px}.uk-drop.uk-open{display:block}[class*=uk-drop-top]{margin-top:-20px}[class*=uk-drop-bottom]{margin-top:20px}[class*=uk-drop-left]{margin-left:-20px}[class*=uk-drop-right]{margin-left:20px}.uk-drop-stack .uk-drop-grid>*{width:100%!important}.uk-dropdown{display:none;position:absolute;z-index:1020;box-sizing:border-box;min-width:200px;padding:25px;background:#fff;color:#666;box-shadow:0 5px 12px rgba(0,0,0,.15)}.uk-dropdown.uk-open{display:block}.uk-dropdown-nav{white-space:nowrap;font-size:.875rem}.uk-dropdown-nav>li>a{color:#999}.uk-dropdown-nav>li.uk-active>a,.uk-dropdown-nav>li>a:focus,.uk-dropdown-nav>li>a:hover{color:#666}.uk-dropdown-nav .uk-nav-header{color:#333}.uk-dropdown-nav .uk-nav-divider{border-top:1px solid #e5e5e5}.uk-dropdown-nav .uk-nav-sub a{color:#999}.uk-dropdown-nav .uk-nav-sub a:focus,.uk-dropdown-nav .uk-nav-sub a:hover,.uk-dropdown-nav .uk-nav-sub li.uk-active>a{color:#666}[class*=uk-dropdown-top]{margin-top:-10px}[class*=uk-dropdown-bottom]{margin-top:10px}[class*=uk-dropdown-left]{margin-left:-10px}[class*=uk-dropdown-right]{margin-left:10px}.uk-dropdown-stack .uk-dropdown-grid>*{width:100%!important}.uk-modal{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1010;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:15px 15px;background:rgba(0,0,0,.6);opacity:0;transition:opacity .15s linear}@media (min-width:640px){.uk-modal{padding:50px 30px}}@media (min-width:960px){.uk-modal{padding-left:40px;padding-right:40px}}.uk-modal.uk-open{opacity:1}.uk-modal-page{overflow:hidden}.uk-modal-dialog{position:relative;box-sizing:border-box;margin:0 auto;width:600px;max-width:calc(100% - .01px)!important;background:#fff;opacity:0;transform:translateY(-100px);transition:.3s linear;transition-property:opacity,transform}.uk-open>.uk-modal-dialog{opacity:1;transform:translateY(0)}.uk-modal-container .uk-modal-dialog{width:1200px}.uk-modal-full{padding:0;background:0 0}.uk-modal-full .uk-modal-dialog{margin:0;width:100%;max-width:100%;transform:translateY(0)}.uk-modal-body{padding:30px 30px}.uk-modal-header{padding:15px 30px;background:#fff;border-bottom:1px solid #e5e5e5}.uk-modal-footer{padding:15px 30px;background:#fff;border-top:1px solid #e5e5e5}.uk-modal-body::after,.uk-modal-body::before,.uk-modal-footer::after,.uk-modal-footer::before,.uk-modal-header::after,.uk-modal-header::before{content:\"\";display:table}.uk-modal-body::after,.uk-modal-footer::after,.uk-modal-header::after{clear:both}.uk-modal-body>:last-child,.uk-modal-footer>:last-child,.uk-modal-header>:last-child{margin-bottom:0}.uk-modal-title{font-size:2rem;line-height:1.3}[class*=uk-modal-close-]{position:absolute;z-index:1010;top:10px;right:10px;padding:5px}[class*=uk-modal-close-]:first-child+*{margin-top:0}.uk-modal-close-outside{top:0;right:-5px;transform:translate(0,-100%);color:#fff}.uk-modal-close-outside:hover{color:#fff}@media (min-width:960px){.uk-modal-close-outside{right:0;transform:translate(100%,-100%)}}.uk-modal-close-full{top:0;right:0;padding:20px;background:#fff}.uk-lightbox{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1010;background:#000;opacity:0;transition:opacity .15s linear}.uk-lightbox.uk-open{display:block;opacity:1}.uk-lightbox-page{overflow:hidden}.uk-lightbox-items>*{position:absolute;top:0;right:0;bottom:0;left:0;display:none;justify-content:center;align-items:center;color:rgba(255,255,255,.7);will-change:transform,opacity}.uk-lightbox-items>*>*{max-width:100vw;max-height:100vh}.uk-lightbox-items>:focus{outline:0}.uk-lightbox-items>*>:not(iframe){width:auto;height:auto}.uk-lightbox-items>.uk-active{display:flex}.uk-lightbox-toolbar{padding:10px 10px;background:rgba(0,0,0,.3);color:rgba(255,255,255,.7)}.uk-lightbox-toolbar>*{color:rgba(255,255,255,.7)}.uk-lightbox-toolbar-icon{padding:5px;color:rgba(255,255,255,.7)}.uk-lightbox-toolbar-icon:hover{color:#fff}.uk-lightbox-button{box-sizing:border-box;width:50px;height:50px;background:rgba(0,0,0,.3);color:rgba(255,255,255,.7);display:inline-flex;justify-content:center;align-items:center}.uk-lightbox-button:hover{color:#fff}.uk-lightbox-iframe{width:80%;height:80%}.uk-slideshow{-webkit-tap-highlight-color:transparent}.uk-slideshow-items{position:relative;z-index:0;margin:0;padding:0;list-style:none;overflow:hidden;-webkit-touch-callout:none}.uk-slideshow-items>*{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;will-change:transform,opacity;touch-action:pan-y}.uk-slideshow-items>:focus{outline:0}.uk-slideshow-items>:not(.uk-active){display:none}.uk-slider{-webkit-tap-highlight-color:transparent}.uk-slider-container{overflow:hidden}.uk-slider-items{will-change:transform;position:relative}.uk-slider-items:not(.uk-grid){display:flex;margin:0;padding:0;list-style:none;-webkit-touch-callout:none}.uk-slider-items.uk-grid{flex-wrap:nowrap}.uk-slider-items>*{flex:none;position:relative;touch-action:pan-y}.uk-slider-items>:focus{outline:0}.uk-sticky-fixed{z-index:980;box-sizing:border-box;margin:0!important;-webkit-backface-visibility:hidden;backface-visibility:hidden}.uk-sticky[class*=uk-animation-]{animation-duration:.2s}.uk-sticky.uk-animation-reverse{animation-duration:.2s}.uk-offcanvas{display:none;position:fixed;top:0;bottom:0;left:0;z-index:1000}.uk-offcanvas-flip .uk-offcanvas{right:0;left:auto}.uk-offcanvas-bar{position:absolute;top:0;bottom:0;left:-270px;box-sizing:border-box;width:270px;padding:20px 20px;background:#222;overflow-y:auto;-webkit-overflow-scrolling:touch}@media (min-width:960px){.uk-offcanvas-bar{left:-350px;width:350px;padding:40px 40px}}.uk-offcanvas-flip .uk-offcanvas-bar{left:auto;right:-270px}@media (min-width:960px){.uk-offcanvas-flip .uk-offcanvas-bar{right:-350px}}.uk-open>.uk-offcanvas-bar{left:0}.uk-offcanvas-flip .uk-open>.uk-offcanvas-bar{left:auto;right:0}.uk-offcanvas-bar-animation{transition:left .3s ease-out}.uk-offcanvas-flip .uk-offcanvas-bar-animation{transition-property:right}.uk-offcanvas-reveal{position:absolute;top:0;bottom:0;left:0;width:0;overflow:hidden;transition:width .3s ease-out}.uk-offcanvas-reveal .uk-offcanvas-bar{left:0}.uk-offcanvas-flip .uk-offcanvas-reveal .uk-offcanvas-bar{left:auto;right:0}.uk-open>.uk-offcanvas-reveal{width:270px}@media (min-width:960px){.uk-open>.uk-offcanvas-reveal{width:350px}}.uk-offcanvas-flip .uk-offcanvas-reveal{right:0;left:auto}.uk-offcanvas-close{position:absolute;z-index:1000;top:20px;right:20px;padding:5px}.uk-offcanvas-overlay{width:100vw;touch-action:none}.uk-offcanvas-overlay::before{content:\"\";position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.1);opacity:0;transition:opacity .15s linear}.uk-offcanvas-overlay.uk-open::before{opacity:1}.uk-offcanvas-container,.uk-offcanvas-page{overflow-x:hidden}.uk-offcanvas-container{position:relative;left:0;transition:left .3s ease-out;box-sizing:border-box;width:100%}:not(.uk-offcanvas-flip).uk-offcanvas-container-animation{left:270px}.uk-offcanvas-flip.uk-offcanvas-container-animation{left:-270px}@media (min-width:960px){:not(.uk-offcanvas-flip).uk-offcanvas-container-animation{left:350px}.uk-offcanvas-flip.uk-offcanvas-container-animation{left:-350px}}.uk-switcher{margin:0;padding:0;list-style:none}.uk-switcher>:not(.uk-active){display:none}.uk-switcher>*>:last-child{margin-bottom:0}.uk-leader{overflow:hidden}.uk-leader-fill::after{display:inline-block;margin-left:15px;width:0;content:attr(data-fill);white-space:nowrap}.uk-leader-fill.uk-leader-hide::after{display:none}.uk-leader-fill-content::before{content:'.'}:root{--uk-leader-fill-content:.}.uk-iconnav{display:flex;flex-wrap:wrap;margin:0;padding:0;list-style:none;margin-left:-10px}.uk-iconnav>*{padding-left:10px}.uk-iconnav>*>a{display:block;color:#999}.uk-iconnav>*>a:focus,.uk-iconnav>*>a:hover{color:#666;outline:0}.uk-iconnav>.uk-active>a{color:#666}.uk-iconnav-vertical{flex-direction:column;margin-left:0;margin-top:-10px}.uk-iconnav-vertical>*{padding-left:0;padding-top:10px}.uk-notification{position:fixed;top:10px;left:10px;z-index:1040;box-sizing:border-box;width:350px}.uk-notification-bottom-right,.uk-notification-top-right{left:auto;right:10px}.uk-notification-bottom-center,.uk-notification-top-center{left:50%;margin-left:-175px}.uk-notification-bottom-center,.uk-notification-bottom-left,.uk-notification-bottom-right{top:auto;bottom:10px}@media (max-width:639px){.uk-notification{left:10px;right:10px;width:auto;margin:0}}.uk-notification-message{position:relative;padding:15px;background:#f8f8f8;color:#666;font-size:1.25rem;line-height:1.4;cursor:pointer}*+.uk-notification-message{margin-top:10px}.uk-notification-close{display:none;position:absolute;top:20px;right:15px}.uk-notification-message:hover .uk-notification-close{display:block}.uk-notification-message-primary{color:#1e87f0}.uk-notification-message-success{color:#32d296}.uk-notification-message-warning{color:#faa05a}.uk-notification-message-danger{color:#f0506e}.uk-tooltip{display:none;position:absolute;z-index:1030;box-sizing:border-box;max-width:200px;padding:3px 6px;background:#666;border-radius:2px;color:#fff;font-size:12px}.uk-tooltip.uk-active{display:block}[class*=uk-tooltip-top]{margin-top:-10px}[class*=uk-tooltip-bottom]{margin-top:10px}[class*=uk-tooltip-left]{margin-left:-10px}[class*=uk-tooltip-right]{margin-left:10px}.uk-placeholder{margin-bottom:20px;padding:30px 30px;background:0 0;border:1px dashed #e5e5e5}*+.uk-placeholder{margin-top:20px}.uk-placeholder>:last-child{margin-bottom:0}.uk-progress{vertical-align:baseline;-webkit-appearance:none;-moz-appearance:none;display:block;width:100%;border:0;background-color:#f8f8f8;margin-bottom:20px;height:15px;border-radius:500px;overflow:hidden}*+.uk-progress{margin-top:20px}.uk-progress:indeterminate{color:transparent}.uk-progress::-webkit-progress-bar{background-color:#f8f8f8;border-radius:500px;overflow:hidden}.uk-progress:indeterminate::-moz-progress-bar{width:0}.uk-progress::-webkit-progress-value{background-color:#1e87f0;transition:width .6s ease}.uk-progress::-moz-progress-bar{background-color:#1e87f0}.uk-progress::-ms-fill{background-color:#1e87f0;transition:width .6s ease;border:0}.uk-sortable{position:relative}.uk-sortable svg{pointer-events:none}.uk-sortable>:last-child{margin-bottom:0}.uk-sortable-drag{position:absolute!important;z-index:1050!important;pointer-events:none}.uk-sortable-placeholder{opacity:0;pointer-events:none}.uk-sortable-empty{min-height:50px}.uk-sortable-handle:hover{cursor:move}.uk-countdown-number,.uk-countdown-separator{line-height:.8}.uk-countdown-number{font-size:2rem}@media (min-width:640px){.uk-countdown-number{font-size:4rem}}@media (min-width:960px){.uk-countdown-number{font-size:6rem}}.uk-countdown-separator{font-size:1rem}@media (min-width:640px){.uk-countdown-separator{font-size:2rem}}@media (min-width:960px){.uk-countdown-separator{font-size:3rem}}[class*=uk-animation-]{animation-duration:.5s;animation-timing-function:ease-out;animation-fill-mode:both}.uk-animation-fade{animation-name:uk-fade;animation-duration:.8s;animation-timing-function:linear}.uk-animation-scale-up{animation-name:uk-fade-scale-02}.uk-animation-scale-down{animation-name:uk-fade-scale-18}.uk-animation-slide-top{animation-name:uk-fade-top}.uk-animation-slide-bottom{animation-name:uk-fade-bottom}.uk-animation-slide-left{animation-name:uk-fade-left}.uk-animation-slide-right{animation-name:uk-fade-right}.uk-animation-slide-top-small{animation-name:uk-fade-top-small}.uk-animation-slide-bottom-small{animation-name:uk-fade-bottom-small}.uk-animation-slide-left-small{animation-name:uk-fade-left-small}.uk-animation-slide-right-small{animation-name:uk-fade-right-small}.uk-animation-slide-top-medium{animation-name:uk-fade-top-medium}.uk-animation-slide-bottom-medium{animation-name:uk-fade-bottom-medium}.uk-animation-slide-left-medium{animation-name:uk-fade-left-medium}.uk-animation-slide-right-medium{animation-name:uk-fade-right-medium}.uk-animation-kenburns{animation-name:uk-scale-kenburns;animation-duration:15s}.uk-animation-shake{animation-name:uk-shake}.uk-animation-stroke{animation-name:uk-stroke;stroke-dasharray:var(--uk-animation-stroke);animation-duration:2s}.uk-animation-reverse{animation-direction:reverse;animation-timing-function:ease-in}.uk-animation-fast{animation-duration:.1s}.uk-animation-toggle:not(:hover):not(:focus) [class*=uk-animation-]{animation-name:none}.uk-animation-toggle{-webkit-tap-highlight-color:transparent}.uk-animation-toggle:focus{outline:0}@keyframes uk-fade{0%{opacity:0}100%{opacity:1}}@keyframes uk-fade-top{0%{opacity:0;transform:translateY(-100%)}100%{opacity:1;transform:translateY(0)}}@keyframes uk-fade-bottom{0%{opacity:0;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}@keyframes uk-fade-left{0%{opacity:0;transform:translateX(-100%)}100%{opacity:1;transform:translateX(0)}}@keyframes uk-fade-right{0%{opacity:0;transform:translateX(100%)}100%{opacity:1;transform:translateX(0)}}@keyframes uk-fade-top-small{0%{opacity:0;transform:translateY(-10px)}100%{opacity:1;transform:translateY(0)}}@keyframes uk-fade-bottom-small{0%{opacity:0;transform:translateY(10px)}100%{opacity:1;transform:translateY(0)}}@keyframes uk-fade-left-small{0%{opacity:0;transform:translateX(-10px)}100%{opacity:1;transform:translateX(0)}}@keyframes uk-fade-right-small{0%{opacity:0;transform:translateX(10px)}100%{opacity:1;transform:translateX(0)}}@keyframes uk-fade-top-medium{0%{opacity:0;transform:translateY(-50px)}100%{opacity:1;transform:translateY(0)}}@keyframes uk-fade-bottom-medium{0%{opacity:0;transform:translateY(50px)}100%{opacity:1;transform:translateY(0)}}@keyframes uk-fade-left-medium{0%{opacity:0;transform:translateX(-50px)}100%{opacity:1;transform:translateX(0)}}@keyframes uk-fade-right-medium{0%{opacity:0;transform:translateX(50px)}100%{opacity:1;transform:translateX(0)}}@keyframes uk-fade-scale-02{0%{opacity:0;transform:scale(.2)}100%{opacity:1;transform:scale(1)}}@keyframes uk-fade-scale-18{0%{opacity:0;transform:scale(1.8)}100%{opacity:1;transform:scale(1)}}@keyframes uk-scale-kenburns{0%{transform:scale(1)}100%{transform:scale(1.2)}}@keyframes uk-shake{0%,100%{transform:translateX(0)}10%{transform:translateX(-9px)}20%{transform:translateX(8px)}30%{transform:translateX(-7px)}40%{transform:translateX(6px)}50%{transform:translateX(-5px)}60%{transform:translateX(4px)}70%{transform:translateX(-3px)}80%{transform:translateX(2px)}90%{transform:translateX(-1px)}}@keyframes uk-stroke{0%{stroke-dashoffset:var(--uk-animation-stroke)}100%{stroke-dashoffset:0}}[class*=uk-child-width]>*{box-sizing:border-box;width:100%}.uk-child-width-1-2>*{width:50%}.uk-child-width-1-3>*{width:calc(100% * 1 / 3.001)}.uk-child-width-1-4>*{width:25%}.uk-child-width-1-5>*{width:20%}.uk-child-width-1-6>*{width:calc(100% * 1 / 6.001)}.uk-child-width-auto>*{width:auto}.uk-child-width-expand>:not([class*=uk-width]){flex:1;min-width:1px}@media (min-width:640px){.uk-child-width-1-1\\@s>*{width:100%}.uk-child-width-1-2\\@s>*{width:50%}.uk-child-width-1-3\\@s>*{width:calc(100% * 1 / 3.001)}.uk-child-width-1-4\\@s>*{width:25%}.uk-child-width-1-5\\@s>*{width:20%}.uk-child-width-1-6\\@s>*{width:calc(100% * 1 / 6.001)}.uk-child-width-auto\\@s>*{width:auto}.uk-child-width-expand\\@s>:not([class*=uk-width]){flex:1;min-width:1px}}@media (min-width:960px){.uk-child-width-1-1\\@m>*{width:100%}.uk-child-width-1-2\\@m>*{width:50%}.uk-child-width-1-3\\@m>*{width:calc(100% * 1 / 3.001)}.uk-child-width-1-4\\@m>*{width:25%}.uk-child-width-1-5\\@m>*{width:20%}.uk-child-width-1-6\\@m>*{width:calc(100% * 1 / 6.001)}.uk-child-width-auto\\@m>*{width:auto}.uk-child-width-expand\\@m>:not([class*=uk-width]){flex:1;min-width:1px}}@media (min-width:1200px){.uk-child-width-1-1\\@l>*{width:100%}.uk-child-width-1-2\\@l>*{width:50%}.uk-child-width-1-3\\@l>*{width:calc(100% * 1 / 3.001)}.uk-child-width-1-4\\@l>*{width:25%}.uk-child-width-1-5\\@l>*{width:20%}.uk-child-width-1-6\\@l>*{width:calc(100% * 1 / 6.001)}.uk-child-width-auto\\@l>*{width:auto}.uk-child-width-expand\\@l>:not([class*=uk-width]){flex:1;min-width:1px}}@media (min-width:1600px){.uk-child-width-1-1\\@xl>*{width:100%}.uk-child-width-1-2\\@xl>*{width:50%}.uk-child-width-1-3\\@xl>*{width:calc(100% * 1 / 3.001)}.uk-child-width-1-4\\@xl>*{width:25%}.uk-child-width-1-5\\@xl>*{width:20%}.uk-child-width-1-6\\@xl>*{width:calc(100% * 1 / 6.001)}.uk-child-width-auto\\@xl>*{width:auto}.uk-child-width-expand\\@xl>:not([class*=uk-width]){flex:1;min-width:1px}}[class*=uk-width]{box-sizing:border-box;width:100%;max-width:100%}.uk-width-1-2{width:50%}.uk-width-1-3{width:calc(100% * 1 / 3.001)}.uk-width-2-3{width:calc(100% * 2 / 3.001)}.uk-width-1-4{width:25%}.uk-width-3-4{width:75%}.uk-width-1-5{width:20%}.uk-width-2-5{width:40%}.uk-width-3-5{width:60%}.uk-width-4-5{width:80%}.uk-width-1-6{width:calc(100% * 1 / 6.001)}.uk-width-5-6{width:calc(100% * 5 / 6.001)}.uk-width-small{width:150px}.uk-width-medium{width:300px}.uk-width-large{width:450px}.uk-width-xlarge{width:600px}.uk-width-xxlarge{width:750px}.uk-width-auto{width:auto}.uk-width-expand{flex:1;min-width:1px}@media (min-width:640px){.uk-width-1-1\\@s{width:100%}.uk-width-1-2\\@s{width:50%}.uk-width-1-3\\@s{width:calc(100% * 1 / 3.001)}.uk-width-2-3\\@s{width:calc(100% * 2 / 3.001)}.uk-width-1-4\\@s{width:25%}.uk-width-3-4\\@s{width:75%}.uk-width-1-5\\@s{width:20%}.uk-width-2-5\\@s{width:40%}.uk-width-3-5\\@s{width:60%}.uk-width-4-5\\@s{width:80%}.uk-width-1-6\\@s{width:calc(100% * 1 / 6.001)}.uk-width-5-6\\@s{width:calc(100% * 5 / 6.001)}.uk-width-small\\@s{width:150px}.uk-width-medium\\@s{width:300px}.uk-width-large\\@s{width:450px}.uk-width-xlarge\\@s{width:600px}.uk-width-xxlarge\\@s{width:750px}.uk-width-auto\\@s{width:auto}.uk-width-expand\\@s{flex:1;min-width:1px}}@media (min-width:960px){.uk-width-1-1\\@m{width:100%}.uk-width-1-2\\@m{width:50%}.uk-width-1-3\\@m{width:calc(100% * 1 / 3.001)}.uk-width-2-3\\@m{width:calc(100% * 2 / 3.001)}.uk-width-1-4\\@m{width:25%}.uk-width-3-4\\@m{width:75%}.uk-width-1-5\\@m{width:20%}.uk-width-2-5\\@m{width:40%}.uk-width-3-5\\@m{width:60%}.uk-width-4-5\\@m{width:80%}.uk-width-1-6\\@m{width:calc(100% * 1 / 6.001)}.uk-width-5-6\\@m{width:calc(100% * 5 / 6.001)}.uk-width-small\\@m{width:150px}.uk-width-medium\\@m{width:300px}.uk-width-large\\@m{width:450px}.uk-width-xlarge\\@m{width:600px}.uk-width-xxlarge\\@m{width:750px}.uk-width-auto\\@m{width:auto}.uk-width-expand\\@m{flex:1;min-width:1px}}@media (min-width:1200px){.uk-width-1-1\\@l{width:100%}.uk-width-1-2\\@l{width:50%}.uk-width-1-3\\@l{width:calc(100% * 1 / 3.001)}.uk-width-2-3\\@l{width:calc(100% * 2 / 3.001)}.uk-width-1-4\\@l{width:25%}.uk-width-3-4\\@l{width:75%}.uk-width-1-5\\@l{width:20%}.uk-width-2-5\\@l{width:40%}.uk-width-3-5\\@l{width:60%}.uk-width-4-5\\@l{width:80%}.uk-width-1-6\\@l{width:calc(100% * 1 / 6.001)}.uk-width-5-6\\@l{width:calc(100% * 5 / 6.001)}.uk-width-small\\@l{width:150px}.uk-width-medium\\@l{width:300px}.uk-width-large\\@l{width:450px}.uk-width-xlarge\\@l{width:600px}.uk-width-xxlarge\\@l{width:750px}.uk-width-auto\\@l{width:auto}.uk-width-expand\\@l{flex:1;min-width:1px}}@media (min-width:1600px){.uk-width-1-1\\@xl{width:100%}.uk-width-1-2\\@xl{width:50%}.uk-width-1-3\\@xl{width:calc(100% * 1 / 3.001)}.uk-width-2-3\\@xl{width:calc(100% * 2 / 3.001)}.uk-width-1-4\\@xl{width:25%}.uk-width-3-4\\@xl{width:75%}.uk-width-1-5\\@xl{width:20%}.uk-width-2-5\\@xl{width:40%}.uk-width-3-5\\@xl{width:60%}.uk-width-4-5\\@xl{width:80%}.uk-width-1-6\\@xl{width:calc(100% * 1 / 6.001)}.uk-width-5-6\\@xl{width:calc(100% * 5 / 6.001)}.uk-width-small\\@xl{width:150px}.uk-width-medium\\@xl{width:300px}.uk-width-large\\@xl{width:450px}.uk-width-xlarge\\@xl{width:600px}.uk-width-xxlarge\\@xl{width:750px}.uk-width-auto\\@xl{width:auto}.uk-width-expand\\@xl{flex:1;min-width:1px}}[class*=uk-height]{box-sizing:border-box}.uk-height-1-1{height:100%}.uk-height-viewport{min-height:100vh}.uk-height-small{height:150px}.uk-height-medium{height:300px}.uk-height-large{height:450px}.uk-height-max-small{max-height:150px}.uk-height-max-medium{max-height:300px}.uk-height-max-large{max-height:450px}.uk-text-lead{font-size:1.5rem;line-height:1.5;color:#333}.uk-text-meta{font-size:.875rem;line-height:1.4;color:#999}.uk-text-meta a{color:#999}.uk-text-meta a:hover{color:#666;text-decoration:none}.uk-text-small{font-size:.875rem;line-height:1.5}.uk-text-large{font-size:1.5rem;line-height:1.5}.uk-text-light{font-weight:300}.uk-text-normal{font-weight:400}.uk-text-bold{font-weight:700}.uk-text-lighter{font-weight:lighter}.uk-text-bolder{font-weight:bolder}.uk-text-italic{font-style:italic}.uk-text-capitalize{text-transform:capitalize!important}.uk-text-uppercase{text-transform:uppercase!important}.uk-text-lowercase{text-transform:lowercase!important}.uk-text-muted{color:#999!important}.uk-text-emphasis{color:#333!important}.uk-text-primary{color:#1e87f0!important}.uk-text-secondary{color:#222!important}.uk-text-success{color:#32d296!important}.uk-text-warning{color:#faa05a!important}.uk-text-danger{color:#f0506e!important}.uk-text-background{-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:inline-block;color:#1e87f0!important}@supports (-webkit-background-clip:text){.uk-text-background{background-color:#1e87f0}}.uk-text-left{text-align:left!important}.uk-text-right{text-align:right!important}.uk-text-center{text-align:center!important}.uk-text-justify{text-align:justify!important}@media (min-width:640px){.uk-text-left\\@s{text-align:left!important}.uk-text-right\\@s{text-align:right!important}.uk-text-center\\@s{text-align:center!important}}@media (min-width:960px){.uk-text-left\\@m{text-align:left!important}.uk-text-right\\@m{text-align:right!important}.uk-text-center\\@m{text-align:center!important}}@media (min-width:1200px){.uk-text-left\\@l{text-align:left!important}.uk-text-right\\@l{text-align:right!important}.uk-text-center\\@l{text-align:center!important}}@media (min-width:1600px){.uk-text-left\\@xl{text-align:left!important}.uk-text-right\\@xl{text-align:right!important}.uk-text-center\\@xl{text-align:center!important}}.uk-text-top{vertical-align:top!important}.uk-text-middle{vertical-align:middle!important}.uk-text-bottom{vertical-align:bottom!important}.uk-text-baseline{vertical-align:baseline!important}.uk-text-nowrap{white-space:nowrap}.uk-text-truncate{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}td.uk-text-truncate,th.uk-text-truncate{max-width:0}.uk-text-break{overflow-wrap:break-word;word-wrap:break-word}td.uk-text-break,th.uk-text-break{word-break:break-all}[class*=uk-column-]{column-gap:30px}@media (min-width:1200px){[class*=uk-column-]{column-gap:40px}}[class*=uk-column-] img{transform:translate3d(0,0,0)}.uk-column-divider{column-rule:1px solid #e5e5e5;column-gap:60px}@media (min-width:1200px){.uk-column-divider{column-gap:80px}}.uk-column-1-2{column-count:2}.uk-column-1-3{column-count:3}.uk-column-1-4{column-count:4}.uk-column-1-5{column-count:5}.uk-column-1-6{column-count:6}@media (min-width:640px){.uk-column-1-2\\@s{column-count:2}.uk-column-1-3\\@s{column-count:3}.uk-column-1-4\\@s{column-count:4}.uk-column-1-5\\@s{column-count:5}.uk-column-1-6\\@s{column-count:6}}@media (min-width:960px){.uk-column-1-2\\@m{column-count:2}.uk-column-1-3\\@m{column-count:3}.uk-column-1-4\\@m{column-count:4}.uk-column-1-5\\@m{column-count:5}.uk-column-1-6\\@m{column-count:6}}@media (min-width:1200px){.uk-column-1-2\\@l{column-count:2}.uk-column-1-3\\@l{column-count:3}.uk-column-1-4\\@l{column-count:4}.uk-column-1-5\\@l{column-count:5}.uk-column-1-6\\@l{column-count:6}}@media (min-width:1600px){.uk-column-1-2\\@xl{column-count:2}.uk-column-1-3\\@xl{column-count:3}.uk-column-1-4\\@xl{column-count:4}.uk-column-1-5\\@xl{column-count:5}.uk-column-1-6\\@xl{column-count:6}}.uk-column-span{column-span:all}.uk-cover{max-width:none;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}iframe.uk-cover{pointer-events:none}.uk-cover-container{overflow:hidden;position:relative}.uk-background-default{background-color:#fff}.uk-background-muted{background-color:#f8f8f8}.uk-background-primary{background-color:#1e87f0}.uk-background-secondary{background-color:#222}.uk-background-contain,.uk-background-cover{background-position:50% 50%;background-repeat:no-repeat}.uk-background-cover{background-size:cover}.uk-background-contain{background-size:contain}.uk-background-top-left{background-position:0 0}.uk-background-top-center{background-position:50% 0}.uk-background-top-right{background-position:100% 0}.uk-background-center-left{background-position:0 50%}.uk-background-center-center{background-position:50% 50%}.uk-background-center-right{background-position:100% 50%}.uk-background-bottom-left{background-position:0 100%}.uk-background-bottom-center{background-position:50% 100%}.uk-background-bottom-right{background-position:100% 100%}.uk-background-norepeat{background-repeat:no-repeat}.uk-background-fixed{background-attachment:fixed;backface-visibility:hidden}@media (pointer:coarse){.uk-background-fixed{background-attachment:scroll}}@media (max-width:639px){.uk-background-image\\@s{background-image:none!important}}@media (max-width:959px){.uk-background-image\\@m{background-image:none!important}}@media (max-width:1199px){.uk-background-image\\@l{background-image:none!important}}@media (max-width:1599px){.uk-background-image\\@xl{background-image:none!important}}.uk-background-blend-multiply{background-blend-mode:multiply}.uk-background-blend-screen{background-blend-mode:screen}.uk-background-blend-overlay{background-blend-mode:overlay}.uk-background-blend-darken{background-blend-mode:darken}.uk-background-blend-lighten{background-blend-mode:lighten}.uk-background-blend-color-dodge{background-blend-mode:color-dodge}.uk-background-blend-color-burn{background-blend-mode:color-burn}.uk-background-blend-hard-light{background-blend-mode:hard-light}.uk-background-blend-soft-light{background-blend-mode:soft-light}.uk-background-blend-difference{background-blend-mode:difference}.uk-background-blend-exclusion{background-blend-mode:exclusion}.uk-background-blend-hue{background-blend-mode:hue}.uk-background-blend-saturation{background-blend-mode:saturation}.uk-background-blend-color{background-blend-mode:color}.uk-background-blend-luminosity{background-blend-mode:luminosity}[class*=uk-align]{display:block;margin-bottom:30px}*+[class*=uk-align]{margin-top:30px}.uk-align-center{margin-left:auto;margin-right:auto}.uk-align-left{margin-top:0;margin-right:30px;float:left}.uk-align-right{margin-top:0;margin-left:30px;float:right}@media (min-width:640px){.uk-align-left\\@s{margin-top:0;margin-right:30px;float:left}.uk-align-right\\@s{margin-top:0;margin-left:30px;float:right}}@media (min-width:960px){.uk-align-left\\@m{margin-top:0;margin-right:30px;float:left}.uk-align-right\\@m{margin-top:0;margin-left:30px;float:right}}@media (min-width:1200px){.uk-align-left\\@l{margin-top:0;float:left}.uk-align-right\\@l{margin-top:0;float:right}.uk-align-left,.uk-align-left\\@l,.uk-align-left\\@m,.uk-align-left\\@s{margin-right:40px}.uk-align-right,.uk-align-right\\@l,.uk-align-right\\@m,.uk-align-right\\@s{margin-left:40px}}@media (min-width:1600px){.uk-align-left\\@xl{margin-top:0;margin-right:40px;float:left}.uk-align-right\\@xl{margin-top:0;margin-left:40px;float:right}}.uk-svg,.uk-svg:not(.uk-preserve) [fill*='#']:not(.uk-preserve){fill:currentcolor}.uk-svg:not(.uk-preserve) [stroke*='#']:not(.uk-preserve){stroke:currentcolor}.uk-svg{transform:translate(0,0)}.uk-panel{position:relative;box-sizing:border-box}.uk-panel::after,.uk-panel::before{content:\"\";display:table}.uk-panel::after{clear:both}.uk-panel>:last-child{margin-bottom:0}.uk-panel-scrollable{height:170px;padding:10px;border:1px solid #e5e5e5;overflow:auto;-webkit-overflow-scrolling:touch;resize:both}.uk-clearfix::before{content:\"\";display:table-cell}.uk-clearfix::after{content:\"\";display:table;clear:both}.uk-float-left{float:left}.uk-float-right{float:right}[class*=uk-float-]{max-width:100%}.uk-overflow-hidden{overflow:hidden}.uk-overflow-auto{overflow:auto;-webkit-overflow-scrolling:touch}.uk-overflow-auto>:last-child{margin-bottom:0}.uk-resize{resize:both}.uk-resize-vertical{resize:vertical}.uk-display-block{display:block!important}.uk-display-inline{display:inline!important}.uk-display-inline-block{display:inline-block!important}[class*=uk-inline]{display:inline-block;position:relative;max-width:100%;vertical-align:middle;-webkit-backface-visibility:hidden}.uk-inline-clip{overflow:hidden}.uk-preserve-width,.uk-preserve-width canvas,.uk-preserve-width img,.uk-preserve-width svg,.uk-preserve-width video{max-width:none}.uk-responsive-height,.uk-responsive-width{box-sizing:border-box}.uk-responsive-width{max-width:100%!important;height:auto}.uk-responsive-height{max-height:100%;width:auto;max-width:none}.uk-border-circle{border-radius:50%}.uk-border-pill{border-radius:500px}.uk-border-rounded{border-radius:5px}.uk-inline-clip[class*=uk-border-]{-webkit-transform:translateZ(0)}.uk-box-shadow-small{box-shadow:0 2px 8px rgba(0,0,0,.08)}.uk-box-shadow-medium{box-shadow:0 5px 15px rgba(0,0,0,.08)}.uk-box-shadow-large{box-shadow:0 14px 25px rgba(0,0,0,.16)}.uk-box-shadow-xlarge{box-shadow:0 28px 50px rgba(0,0,0,.16)}[class*=uk-box-shadow-hover]{transition:box-shadow .1s ease-in-out}.uk-box-shadow-hover-small:hover{box-shadow:0 2px 8px rgba(0,0,0,.08)}.uk-box-shadow-hover-medium:hover{box-shadow:0 5px 15px rgba(0,0,0,.08)}.uk-box-shadow-hover-large:hover{box-shadow:0 14px 25px rgba(0,0,0,.16)}.uk-box-shadow-hover-xlarge:hover{box-shadow:0 28px 50px rgba(0,0,0,.16)}@supports (filter:blur(0)){.uk-box-shadow-bottom{display:inline-block;position:relative;max-width:100%;vertical-align:middle}.uk-box-shadow-bottom::before{content:'';position:absolute;bottom:-30px;left:0;right:0;height:30px;border-radius:100%;background:#444;filter:blur(20px)}.uk-box-shadow-bottom>*{position:relative}}.uk-dropcap::first-letter,.uk-dropcap>p:first-of-type::first-letter{display:block;margin-right:10px;float:left;font-size:4.5em;line-height:1;margin-bottom:-2px}@-moz-document url-prefix(){.uk-dropcap::first-letter,.uk-dropcap>p:first-of-type::first-letter{margin-top:1.1%}}@supports (-ms-ime-align:auto){.uk-dropcap>p:first-of-type::first-letter{font-size:1em}}.uk-logo{font-size:1.5rem;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";color:#666;text-decoration:none}.uk-logo:focus,.uk-logo:hover{color:#666;outline:0;text-decoration:none}.uk-logo-inverse{display:none}.uk-disabled{pointer-events:none}.uk-drag,.uk-drag *{cursor:move}.uk-drag iframe{pointer-events:none}.uk-dragover{box-shadow:0 0 20px rgba(100,100,100,.3)}.uk-blend-multiply{mix-blend-mode:multiply}.uk-blend-screen{mix-blend-mode:screen}.uk-blend-overlay{mix-blend-mode:overlay}.uk-blend-darken{mix-blend-mode:darken}.uk-blend-lighten{mix-blend-mode:lighten}.uk-blend-color-dodge{mix-blend-mode:color-dodge}.uk-blend-color-burn{mix-blend-mode:color-burn}.uk-blend-hard-light{mix-blend-mode:hard-light}.uk-blend-soft-light{mix-blend-mode:soft-light}.uk-blend-difference{mix-blend-mode:difference}.uk-blend-exclusion{mix-blend-mode:exclusion}.uk-blend-hue{mix-blend-mode:hue}.uk-blend-saturation{mix-blend-mode:saturation}.uk-blend-color{mix-blend-mode:color}.uk-blend-luminosity{mix-blend-mode:luminosity}.uk-transform-center{transform:translate(-50%,-50%)}.uk-transform-origin-top-left{transform-origin:0 0}.uk-transform-origin-top-center{transform-origin:50% 0}.uk-transform-origin-top-right{transform-origin:100% 0}.uk-transform-origin-center-left{transform-origin:0 50%}.uk-transform-origin-center-right{transform-origin:100% 50%}.uk-transform-origin-bottom-left{transform-origin:0 100%}.uk-transform-origin-bottom-center{transform-origin:50% 100%}.uk-transform-origin-bottom-right{transform-origin:100% 100%}.uk-flex{display:flex}.uk-flex-inline{display:inline-flex}.uk-flex-inline::after,.uk-flex-inline::before,.uk-flex::after,.uk-flex::before{display:none}.uk-flex-left{justify-content:flex-start}.uk-flex-center{justify-content:center}.uk-flex-right{justify-content:flex-end}.uk-flex-between{justify-content:space-between}.uk-flex-around{justify-content:space-around}@media (min-width:640px){.uk-flex-left\\@s{justify-content:flex-start}.uk-flex-center\\@s{justify-content:center}.uk-flex-right\\@s{justify-content:flex-end}.uk-flex-between\\@s{justify-content:space-between}.uk-flex-around\\@s{justify-content:space-around}}@media (min-width:960px){.uk-flex-left\\@m{justify-content:flex-start}.uk-flex-center\\@m{justify-content:center}.uk-flex-right\\@m{justify-content:flex-end}.uk-flex-between\\@m{justify-content:space-between}.uk-flex-around\\@m{justify-content:space-around}}@media (min-width:1200px){.uk-flex-left\\@l{justify-content:flex-start}.uk-flex-center\\@l{justify-content:center}.uk-flex-right\\@l{justify-content:flex-end}.uk-flex-between\\@l{justify-content:space-between}.uk-flex-around\\@l{justify-content:space-around}}@media (min-width:1600px){.uk-flex-left\\@xl{justify-content:flex-start}.uk-flex-center\\@xl{justify-content:center}.uk-flex-right\\@xl{justify-content:flex-end}.uk-flex-between\\@xl{justify-content:space-between}.uk-flex-around\\@xl{justify-content:space-around}}.uk-flex-stretch{align-items:stretch}.uk-flex-top{align-items:flex-start}.uk-flex-middle{align-items:center}.uk-flex-bottom{align-items:flex-end}.uk-flex-row{flex-direction:row}.uk-flex-row-reverse{flex-direction:row-reverse}.uk-flex-column{flex-direction:column}.uk-flex-column-reverse{flex-direction:column-reverse}.uk-flex-nowrap{flex-wrap:nowrap}.uk-flex-wrap{flex-wrap:wrap}.uk-flex-wrap-reverse{flex-wrap:wrap-reverse}.uk-flex-wrap-stretch{align-content:stretch}.uk-flex-wrap-top{align-content:flex-start}.uk-flex-wrap-middle{align-content:center}.uk-flex-wrap-bottom{align-content:flex-end}.uk-flex-wrap-between{align-content:space-between}.uk-flex-wrap-around{align-content:space-around}.uk-flex-first{order:-1}.uk-flex-last{order:99}@media (min-width:640px){.uk-flex-first\\@s{order:-1}.uk-flex-last\\@s{order:99}}@media (min-width:960px){.uk-flex-first\\@m{order:-1}.uk-flex-last\\@m{order:99}}@media (min-width:1200px){.uk-flex-first\\@l{order:-1}.uk-flex-last\\@l{order:99}}@media (min-width:1600px){.uk-flex-first\\@xl{order:-1}.uk-flex-last\\@xl{order:99}}.uk-flex-none{flex:none}.uk-flex-auto{flex:auto}.uk-flex-1{flex:1}.uk-margin{margin-bottom:20px}*+.uk-margin{margin-top:20px!important}.uk-margin-top{margin-top:20px!important}.uk-margin-bottom{margin-bottom:20px!important}.uk-margin-left{margin-left:20px!important}.uk-margin-right{margin-right:20px!important}.uk-margin-small{margin-bottom:10px}*+.uk-margin-small{margin-top:10px!important}.uk-margin-small-top{margin-top:10px!important}.uk-margin-small-bottom{margin-bottom:10px!important}.uk-margin-small-left{margin-left:10px!important}.uk-margin-small-right{margin-right:10px!important}.uk-margin-medium{margin-bottom:40px}*+.uk-margin-medium{margin-top:40px!important}.uk-margin-medium-top{margin-top:40px!important}.uk-margin-medium-bottom{margin-bottom:40px!important}.uk-margin-medium-left{margin-left:40px!important}.uk-margin-medium-right{margin-right:40px!important}.uk-margin-large{margin-bottom:40px}*+.uk-margin-large{margin-top:40px!important}.uk-margin-large-top{margin-top:40px!important}.uk-margin-large-bottom{margin-bottom:40px!important}.uk-margin-large-left{margin-left:40px!important}.uk-margin-large-right{margin-right:40px!important}@media (min-width:1200px){.uk-margin-large{margin-bottom:70px}*+.uk-margin-large{margin-top:70px!important}.uk-margin-large-top{margin-top:70px!important}.uk-margin-large-bottom{margin-bottom:70px!important}.uk-margin-large-left{margin-left:70px!important}.uk-margin-large-right{margin-right:70px!important}}.uk-margin-xlarge{margin-bottom:70px}*+.uk-margin-xlarge{margin-top:70px!important}.uk-margin-xlarge-top{margin-top:70px!important}.uk-margin-xlarge-bottom{margin-bottom:70px!important}.uk-margin-xlarge-left{margin-left:70px!important}.uk-margin-xlarge-right{margin-right:70px!important}@media (min-width:1200px){.uk-margin-xlarge{margin-bottom:140px}*+.uk-margin-xlarge{margin-top:140px!important}.uk-margin-xlarge-top{margin-top:140px!important}.uk-margin-xlarge-bottom{margin-bottom:140px!important}.uk-margin-xlarge-left{margin-left:140px!important}.uk-margin-xlarge-right{margin-right:140px!important}}.uk-margin-auto{margin-left:auto!important;margin-right:auto!important}.uk-margin-auto-top{margin-top:auto!important}.uk-margin-auto-bottom{margin-bottom:auto!important}.uk-margin-auto-left{margin-left:auto!important}.uk-margin-auto-right{margin-right:auto!important}.uk-margin-auto-vertical{margin-top:auto!important;margin-bottom:auto!important}@media (min-width:640px){.uk-margin-auto\\@s{margin-left:auto!important;margin-right:auto!important}.uk-margin-auto-left\\@s{margin-left:auto!important}.uk-margin-auto-right\\@s{margin-right:auto!important}}@media (min-width:960px){.uk-margin-auto\\@m{margin-left:auto!important;margin-right:auto!important}.uk-margin-auto-left\\@m{margin-left:auto!important}.uk-margin-auto-right\\@m{margin-right:auto!important}}@media (min-width:1200px){.uk-margin-auto\\@l{margin-left:auto!important;margin-right:auto!important}.uk-margin-auto-left\\@l{margin-left:auto!important}.uk-margin-auto-right\\@l{margin-right:auto!important}}@media (min-width:1600px){.uk-margin-auto\\@xl{margin-left:auto!important;margin-right:auto!important}.uk-margin-auto-left\\@xl{margin-left:auto!important}.uk-margin-auto-right\\@xl{margin-right:auto!important}}.uk-margin-remove{margin:0!important}.uk-margin-remove-top{margin-top:0!important}.uk-margin-remove-bottom{margin-bottom:0!important}.uk-margin-remove-left{margin-left:0!important}.uk-margin-remove-right{margin-right:0!important}.uk-margin-remove-vertical{margin-top:0!important;margin-bottom:0!important}.uk-margin-remove-adjacent+*,.uk-margin-remove-first-child>:first-child{margin-top:0!important}.uk-margin-remove-last-child>:last-child{margin-bottom:0!important}@media (min-width:640px){.uk-margin-remove-left\\@s{margin-left:0!important}.uk-margin-remove-right\\@s{margin-right:0!important}}@media (min-width:960px){.uk-margin-remove-left\\@m{margin-left:0!important}.uk-margin-remove-right\\@m{margin-right:0!important}}@media (min-width:1200px){.uk-margin-remove-left\\@l{margin-left:0!important}.uk-margin-remove-right\\@l{margin-right:0!important}}@media (min-width:1600px){.uk-margin-remove-left\\@xl{margin-left:0!important}.uk-margin-remove-right\\@xl{margin-right:0!important}}.uk-padding{padding:30px}@media (min-width:1200px){.uk-padding{padding:40px}}.uk-padding-small{padding:15px}.uk-padding-large{padding:30px}@media (min-width:1200px){.uk-padding-large{padding:70px}}.uk-padding-remove{padding:0!important}.uk-padding-remove-top{padding-top:0!important}.uk-padding-remove-bottom{padding-bottom:0!important}.uk-padding-remove-left{padding-left:0!important}.uk-padding-remove-right{padding-right:0!important}.uk-padding-remove-vertical{padding-top:0!important;padding-bottom:0!important}.uk-padding-remove-horizontal{padding-left:0!important;padding-right:0!important}[class*=uk-position-bottom],[class*=uk-position-center],[class*=uk-position-left],[class*=uk-position-right],[class*=uk-position-top]{position:absolute!important}.uk-position-top{top:0;left:0;right:0}.uk-position-bottom{bottom:0;left:0;right:0}.uk-position-left{top:0;bottom:0;left:0}.uk-position-right{top:0;bottom:0;right:0}.uk-position-top-left{top:0;left:0}.uk-position-top-right{top:0;right:0}.uk-position-bottom-left{bottom:0;left:0}.uk-position-bottom-right{bottom:0;right:0}.uk-position-center{top:50%;left:50%;transform:translate(-50%,-50%);width:max-content;max-width:100%;box-sizing:border-box}[class*=uk-position-center-left],[class*=uk-position-center-right]{top:50%;transform:translateY(-50%)}.uk-position-center-left{left:0}.uk-position-center-right{right:0}.uk-position-center-left-out{right:100%;width:max-content}.uk-position-center-right-out{left:100%;width:max-content}.uk-position-bottom-center,.uk-position-top-center{left:50%;transform:translateX(-50%);width:max-content;max-width:100%;box-sizing:border-box}.uk-position-top-center{top:0}.uk-position-bottom-center{bottom:0}.uk-position-cover{position:absolute;top:0;bottom:0;left:0;right:0}.uk-position-relative{position:relative!important}.uk-position-absolute{position:absolute!important}.uk-position-fixed{position:fixed!important}.uk-position-z-index{z-index:1}.uk-position-small{max-width:calc(100% - (15px * 2));margin:15px}.uk-position-small.uk-position-center{transform:translate(-50%,-50%) translate(-15px,-15px)}.uk-position-small[class*=uk-position-center-left],.uk-position-small[class*=uk-position-center-right]{transform:translateY(-50%) translateY(-15px)}.uk-position-small.uk-position-bottom-center,.uk-position-small.uk-position-top-center{transform:translateX(-50%) translateX(-15px)}.uk-position-medium{max-width:calc(100% - (30px * 2));margin:30px}.uk-position-medium.uk-position-center{transform:translate(-50%,-50%) translate(-30px,-30px)}.uk-position-medium[class*=uk-position-center-left],.uk-position-medium[class*=uk-position-center-right]{transform:translateY(-50%) translateY(-30px)}.uk-position-medium.uk-position-bottom-center,.uk-position-medium.uk-position-top-center{transform:translateX(-50%) translateX(-30px)}.uk-position-large{max-width:calc(100% - (30px * 2));margin:30px}.uk-position-large.uk-position-center{transform:translate(-50%,-50%) translate(-30px,-30px)}.uk-position-large[class*=uk-position-center-left],.uk-position-large[class*=uk-position-center-right]{transform:translateY(-50%) translateY(-30px)}.uk-position-large.uk-position-bottom-center,.uk-position-large.uk-position-top-center{transform:translateX(-50%) translateX(-30px)}@media (min-width:1200px){.uk-position-large{max-width:calc(100% - (50px * 2));margin:50px}.uk-position-large.uk-position-center{transform:translate(-50%,-50%) translate(-50px,-50px)}.uk-position-large[class*=uk-position-center-left],.uk-position-large[class*=uk-position-center-right]{transform:translateY(-50%) translateY(-50px)}.uk-position-large.uk-position-bottom-center,.uk-position-large.uk-position-top-center{transform:translateX(-50%) translateX(-50px)}}.uk-transition-toggle{-webkit-tap-highlight-color:transparent}.uk-transition-toggle:focus{outline:0}.uk-transition-fade,[class*=uk-transition-scale],[class*=uk-transition-slide]{transition:.3s ease-out;transition-property:opacity,transform,filter;opacity:0}.uk-transition-active.uk-active .uk-transition-fade,.uk-transition-toggle:focus .uk-transition-fade,.uk-transition-toggle:hover .uk-transition-fade{opacity:1}.uk-transition-scale-up{transform:scale(1,1)}.uk-transition-scale-down{transform:scale(1.1,1.1)}.uk-transition-active.uk-active .uk-transition-scale-up,.uk-transition-toggle:focus .uk-transition-scale-up,.uk-transition-toggle:hover .uk-transition-scale-up{opacity:1;transform:scale(1.1,1.1)}.uk-transition-active.uk-active .uk-transition-scale-down,.uk-transition-toggle:focus .uk-transition-scale-down,.uk-transition-toggle:hover .uk-transition-scale-down{opacity:1;transform:scale(1,1)}.uk-transition-slide-top{transform:translateY(-100%)}.uk-transition-slide-bottom{transform:translateY(100%)}.uk-transition-slide-left{transform:translateX(-100%)}.uk-transition-slide-right{transform:translateX(100%)}.uk-transition-slide-top-small{transform:translateY(-10px)}.uk-transition-slide-bottom-small{transform:translateY(10px)}.uk-transition-slide-left-small{transform:translateX(-10px)}.uk-transition-slide-right-small{transform:translateX(10px)}.uk-transition-slide-top-medium{transform:translateY(-50px)}.uk-transition-slide-bottom-medium{transform:translateY(50px)}.uk-transition-slide-left-medium{transform:translateX(-50px)}.uk-transition-slide-right-medium{transform:translateX(50px)}.uk-transition-active.uk-active [class*=uk-transition-slide],.uk-transition-toggle:focus [class*=uk-transition-slide],.uk-transition-toggle:hover [class*=uk-transition-slide]{opacity:1;transform:translate(0,0)}.uk-transition-opaque{opacity:1}.uk-transition-slow{transition-duration:.7s}.uk-hidden,[hidden]{display:none!important}@media (min-width:640px){.uk-hidden\\@s{display:none!important}}@media (min-width:960px){.uk-hidden\\@m{display:none!important}}@media (min-width:1200px){.uk-hidden\\@l{display:none!important}}@media (min-width:1600px){.uk-hidden\\@xl{display:none!important}}@media (max-width:639px){.uk-visible\\@s{display:none!important}}@media (max-width:959px){.uk-visible\\@m{display:none!important}}@media (max-width:1199px){.uk-visible\\@l{display:none!important}}@media (max-width:1599px){.uk-visible\\@xl{display:none!important}}.uk-invisible{visibility:hidden!important}.uk-visible-toggle:not(:hover):not(:focus) .uk-hidden-hover:not(:focus-within){position:absolute!important;width:0!important;height:0!important;padding:0!important;margin:0!important;overflow:hidden!important}.uk-visible-toggle:not(:hover):not(:focus) .uk-invisible-hover:not(:focus-within){opacity:0!important}.uk-visible-toggle{-webkit-tap-highlight-color:transparent}.uk-visible-toggle:focus{outline:0}@media (pointer:coarse){.uk-hidden-touch{display:none!important}}.uk-hidden-notouch{display:none!important}@media (pointer:coarse){.uk-hidden-notouch{display:block!important}}.uk-card-primary.uk-card-body,.uk-card-primary>:not([class*=uk-card-media]),.uk-card-secondary.uk-card-body,.uk-card-secondary>:not([class*=uk-card-media]),.uk-light,.uk-offcanvas-bar,.uk-overlay-primary,.uk-section-primary:not(.uk-preserve-color),.uk-section-secondary:not(.uk-preserve-color),.uk-tile-primary:not(.uk-preserve-color),.uk-tile-secondary:not(.uk-preserve-color){color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-link,.uk-card-primary.uk-card-body a,.uk-card-primary>:not([class*=uk-card-media]) .uk-link,.uk-card-primary>:not([class*=uk-card-media]) a,.uk-card-secondary.uk-card-body .uk-link,.uk-card-secondary.uk-card-body a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-link,.uk-card-secondary>:not([class*=uk-card-media]) a,.uk-light .uk-link,.uk-light a,.uk-offcanvas-bar .uk-link,.uk-offcanvas-bar a,.uk-overlay-primary .uk-link,.uk-overlay-primary a,.uk-section-primary:not(.uk-preserve-color) .uk-link,.uk-section-primary:not(.uk-preserve-color) a,.uk-section-secondary:not(.uk-preserve-color) .uk-link,.uk-section-secondary:not(.uk-preserve-color) a,.uk-tile-primary:not(.uk-preserve-color) .uk-link,.uk-tile-primary:not(.uk-preserve-color) a,.uk-tile-secondary:not(.uk-preserve-color) .uk-link,.uk-tile-secondary:not(.uk-preserve-color) a{color:#fff}.uk-card-primary.uk-card-body .uk-link:hover,.uk-card-primary.uk-card-body a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-link:hover,.uk-card-primary>:not([class*=uk-card-media]) a:hover,.uk-card-secondary.uk-card-body .uk-link:hover,.uk-card-secondary.uk-card-body a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-link:hover,.uk-card-secondary>:not([class*=uk-card-media]) a:hover,.uk-light .uk-link:hover,.uk-light a:hover,.uk-offcanvas-bar .uk-link:hover,.uk-offcanvas-bar a:hover,.uk-overlay-primary .uk-link:hover,.uk-overlay-primary a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-link:hover,.uk-section-primary:not(.uk-preserve-color) a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-link:hover,.uk-section-secondary:not(.uk-preserve-color) a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-link:hover,.uk-tile-primary:not(.uk-preserve-color) a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-link:hover,.uk-tile-secondary:not(.uk-preserve-color) a:hover{color:#fff}.uk-card-primary.uk-card-body :not(pre)>code,.uk-card-primary.uk-card-body :not(pre)>kbd,.uk-card-primary.uk-card-body :not(pre)>samp,.uk-card-primary>:not([class*=uk-card-media]) :not(pre)>code,.uk-card-primary>:not([class*=uk-card-media]) :not(pre)>kbd,.uk-card-primary>:not([class*=uk-card-media]) :not(pre)>samp,.uk-card-secondary.uk-card-body :not(pre)>code,.uk-card-secondary.uk-card-body :not(pre)>kbd,.uk-card-secondary.uk-card-body :not(pre)>samp,.uk-card-secondary>:not([class*=uk-card-media]) :not(pre)>code,.uk-card-secondary>:not([class*=uk-card-media]) :not(pre)>kbd,.uk-card-secondary>:not([class*=uk-card-media]) :not(pre)>samp,.uk-light :not(pre)>code,.uk-light :not(pre)>kbd,.uk-light :not(pre)>samp,.uk-offcanvas-bar :not(pre)>code,.uk-offcanvas-bar :not(pre)>kbd,.uk-offcanvas-bar :not(pre)>samp,.uk-overlay-primary :not(pre)>code,.uk-overlay-primary :not(pre)>kbd,.uk-overlay-primary :not(pre)>samp,.uk-section-primary:not(.uk-preserve-color) :not(pre)>code,.uk-section-primary:not(.uk-preserve-color) :not(pre)>kbd,.uk-section-primary:not(.uk-preserve-color) :not(pre)>samp,.uk-section-secondary:not(.uk-preserve-color) :not(pre)>code,.uk-section-secondary:not(.uk-preserve-color) :not(pre)>kbd,.uk-section-secondary:not(.uk-preserve-color) :not(pre)>samp,.uk-tile-primary:not(.uk-preserve-color) :not(pre)>code,.uk-tile-primary:not(.uk-preserve-color) :not(pre)>kbd,.uk-tile-primary:not(.uk-preserve-color) :not(pre)>samp,.uk-tile-secondary:not(.uk-preserve-color) :not(pre)>code,.uk-tile-secondary:not(.uk-preserve-color) :not(pre)>kbd,.uk-tile-secondary:not(.uk-preserve-color) :not(pre)>samp{color:rgba(255,255,255,.7);background:rgba(255,255,255,.1)}.uk-card-primary.uk-card-body em,.uk-card-primary>:not([class*=uk-card-media]) em,.uk-card-secondary.uk-card-body em,.uk-card-secondary>:not([class*=uk-card-media]) em,.uk-light em,.uk-offcanvas-bar em,.uk-overlay-primary em,.uk-section-primary:not(.uk-preserve-color) em,.uk-section-secondary:not(.uk-preserve-color) em,.uk-tile-primary:not(.uk-preserve-color) em,.uk-tile-secondary:not(.uk-preserve-color) em{color:#fff}.uk-card-primary.uk-card-body .uk-h1,.uk-card-primary.uk-card-body .uk-h2,.uk-card-primary.uk-card-body .uk-h3,.uk-card-primary.uk-card-body .uk-h4,.uk-card-primary.uk-card-body .uk-h5,.uk-card-primary.uk-card-body .uk-h6,.uk-card-primary.uk-card-body .uk-heading-2xlarge,.uk-card-primary.uk-card-body .uk-heading-large,.uk-card-primary.uk-card-body .uk-heading-medium,.uk-card-primary.uk-card-body .uk-heading-small,.uk-card-primary.uk-card-body .uk-heading-xlarge,.uk-card-primary.uk-card-body h1,.uk-card-primary.uk-card-body h2,.uk-card-primary.uk-card-body h3,.uk-card-primary.uk-card-body h4,.uk-card-primary.uk-card-body h5,.uk-card-primary.uk-card-body h6,.uk-card-primary>:not([class*=uk-card-media]) .uk-h1,.uk-card-primary>:not([class*=uk-card-media]) .uk-h2,.uk-card-primary>:not([class*=uk-card-media]) .uk-h3,.uk-card-primary>:not([class*=uk-card-media]) .uk-h4,.uk-card-primary>:not([class*=uk-card-media]) .uk-h5,.uk-card-primary>:not([class*=uk-card-media]) .uk-h6,.uk-card-primary>:not([class*=uk-card-media]) .uk-heading-2xlarge,.uk-card-primary>:not([class*=uk-card-media]) .uk-heading-large,.uk-card-primary>:not([class*=uk-card-media]) .uk-heading-medium,.uk-card-primary>:not([class*=uk-card-media]) .uk-heading-small,.uk-card-primary>:not([class*=uk-card-media]) .uk-heading-xlarge,.uk-card-primary>:not([class*=uk-card-media]) h1,.uk-card-primary>:not([class*=uk-card-media]) h2,.uk-card-primary>:not([class*=uk-card-media]) h3,.uk-card-primary>:not([class*=uk-card-media]) h4,.uk-card-primary>:not([class*=uk-card-media]) h5,.uk-card-primary>:not([class*=uk-card-media]) h6,.uk-card-secondary.uk-card-body .uk-h1,.uk-card-secondary.uk-card-body .uk-h2,.uk-card-secondary.uk-card-body .uk-h3,.uk-card-secondary.uk-card-body .uk-h4,.uk-card-secondary.uk-card-body .uk-h5,.uk-card-secondary.uk-card-body .uk-h6,.uk-card-secondary.uk-card-body .uk-heading-2xlarge,.uk-card-secondary.uk-card-body .uk-heading-large,.uk-card-secondary.uk-card-body .uk-heading-medium,.uk-card-secondary.uk-card-body .uk-heading-small,.uk-card-secondary.uk-card-body .uk-heading-xlarge,.uk-card-secondary.uk-card-body h1,.uk-card-secondary.uk-card-body h2,.uk-card-secondary.uk-card-body h3,.uk-card-secondary.uk-card-body h4,.uk-card-secondary.uk-card-body h5,.uk-card-secondary.uk-card-body h6,.uk-card-secondary>:not([class*=uk-card-media]) .uk-h1,.uk-card-secondary>:not([class*=uk-card-media]) .uk-h2,.uk-card-secondary>:not([class*=uk-card-media]) .uk-h3,.uk-card-secondary>:not([class*=uk-card-media]) .uk-h4,.uk-card-secondary>:not([class*=uk-card-media]) .uk-h5,.uk-card-secondary>:not([class*=uk-card-media]) .uk-h6,.uk-card-secondary>:not([class*=uk-card-media]) .uk-heading-2xlarge,.uk-card-secondary>:not([class*=uk-card-media]) .uk-heading-large,.uk-card-secondary>:not([class*=uk-card-media]) .uk-heading-medium,.uk-card-secondary>:not([class*=uk-card-media]) .uk-heading-small,.uk-card-secondary>:not([class*=uk-card-media]) .uk-heading-xlarge,.uk-card-secondary>:not([class*=uk-card-media]) h1,.uk-card-secondary>:not([class*=uk-card-media]) h2,.uk-card-secondary>:not([class*=uk-card-media]) h3,.uk-card-secondary>:not([class*=uk-card-media]) h4,.uk-card-secondary>:not([class*=uk-card-media]) h5,.uk-card-secondary>:not([class*=uk-card-media]) h6,.uk-light .uk-h1,.uk-light .uk-h2,.uk-light .uk-h3,.uk-light .uk-h4,.uk-light .uk-h5,.uk-light .uk-h6,.uk-light .uk-heading-2xlarge,.uk-light .uk-heading-large,.uk-light .uk-heading-medium,.uk-light .uk-heading-small,.uk-light .uk-heading-xlarge,.uk-light h1,.uk-light h2,.uk-light h3,.uk-light h4,.uk-light h5,.uk-light h6,.uk-offcanvas-bar .uk-h1,.uk-offcanvas-bar .uk-h2,.uk-offcanvas-bar .uk-h3,.uk-offcanvas-bar .uk-h4,.uk-offcanvas-bar .uk-h5,.uk-offcanvas-bar .uk-h6,.uk-offcanvas-bar .uk-heading-2xlarge,.uk-offcanvas-bar .uk-heading-large,.uk-offcanvas-bar .uk-heading-medium,.uk-offcanvas-bar .uk-heading-small,.uk-offcanvas-bar .uk-heading-xlarge,.uk-offcanvas-bar h1,.uk-offcanvas-bar h2,.uk-offcanvas-bar h3,.uk-offcanvas-bar h4,.uk-offcanvas-bar h5,.uk-offcanvas-bar h6,.uk-overlay-primary .uk-h1,.uk-overlay-primary .uk-h2,.uk-overlay-primary .uk-h3,.uk-overlay-primary .uk-h4,.uk-overlay-primary .uk-h5,.uk-overlay-primary .uk-h6,.uk-overlay-primary .uk-heading-2xlarge,.uk-overlay-primary .uk-heading-large,.uk-overlay-primary .uk-heading-medium,.uk-overlay-primary .uk-heading-small,.uk-overlay-primary .uk-heading-xlarge,.uk-overlay-primary h1,.uk-overlay-primary h2,.uk-overlay-primary h3,.uk-overlay-primary h4,.uk-overlay-primary h5,.uk-overlay-primary h6,.uk-section-primary:not(.uk-preserve-color) .uk-h1,.uk-section-primary:not(.uk-preserve-color) .uk-h2,.uk-section-primary:not(.uk-preserve-color) .uk-h3,.uk-section-primary:not(.uk-preserve-color) .uk-h4,.uk-section-primary:not(.uk-preserve-color) .uk-h5,.uk-section-primary:not(.uk-preserve-color) .uk-h6,.uk-section-primary:not(.uk-preserve-color) .uk-heading-2xlarge,.uk-section-primary:not(.uk-preserve-color) .uk-heading-large,.uk-section-primary:not(.uk-preserve-color) .uk-heading-medium,.uk-section-primary:not(.uk-preserve-color) .uk-heading-small,.uk-section-primary:not(.uk-preserve-color) .uk-heading-xlarge,.uk-section-primary:not(.uk-preserve-color) h1,.uk-section-primary:not(.uk-preserve-color) h2,.uk-section-primary:not(.uk-preserve-color) h3,.uk-section-primary:not(.uk-preserve-color) h4,.uk-section-primary:not(.uk-preserve-color) h5,.uk-section-primary:not(.uk-preserve-color) h6,.uk-section-secondary:not(.uk-preserve-color) .uk-h1,.uk-section-secondary:not(.uk-preserve-color) .uk-h2,.uk-section-secondary:not(.uk-preserve-color) .uk-h3,.uk-section-secondary:not(.uk-preserve-color) .uk-h4,.uk-section-secondary:not(.uk-preserve-color) .uk-h5,.uk-section-secondary:not(.uk-preserve-color) .uk-h6,.uk-section-secondary:not(.uk-preserve-color) .uk-heading-2xlarge,.uk-section-secondary:not(.uk-preserve-color) .uk-heading-large,.uk-section-secondary:not(.uk-preserve-color) .uk-heading-medium,.uk-section-secondary:not(.uk-preserve-color) .uk-heading-small,.uk-section-secondary:not(.uk-preserve-color) .uk-heading-xlarge,.uk-section-secondary:not(.uk-preserve-color) h1,.uk-section-secondary:not(.uk-preserve-color) h2,.uk-section-secondary:not(.uk-preserve-color) h3,.uk-section-secondary:not(.uk-preserve-color) h4,.uk-section-secondary:not(.uk-preserve-color) h5,.uk-section-secondary:not(.uk-preserve-color) h6,.uk-tile-primary:not(.uk-preserve-color) .uk-h1,.uk-tile-primary:not(.uk-preserve-color) .uk-h2,.uk-tile-primary:not(.uk-preserve-color) .uk-h3,.uk-tile-primary:not(.uk-preserve-color) .uk-h4,.uk-tile-primary:not(.uk-preserve-color) .uk-h5,.uk-tile-primary:not(.uk-preserve-color) .uk-h6,.uk-tile-primary:not(.uk-preserve-color) .uk-heading-2xlarge,.uk-tile-primary:not(.uk-preserve-color) .uk-heading-large,.uk-tile-primary:not(.uk-preserve-color) .uk-heading-medium,.uk-tile-primary:not(.uk-preserve-color) .uk-heading-small,.uk-tile-primary:not(.uk-preserve-color) .uk-heading-xlarge,.uk-tile-primary:not(.uk-preserve-color) h1,.uk-tile-primary:not(.uk-preserve-color) h2,.uk-tile-primary:not(.uk-preserve-color) h3,.uk-tile-primary:not(.uk-preserve-color) h4,.uk-tile-primary:not(.uk-preserve-color) h5,.uk-tile-primary:not(.uk-preserve-color) h6,.uk-tile-secondary:not(.uk-preserve-color) .uk-h1,.uk-tile-secondary:not(.uk-preserve-color) .uk-h2,.uk-tile-secondary:not(.uk-preserve-color) .uk-h3,.uk-tile-secondary:not(.uk-preserve-color) .uk-h4,.uk-tile-secondary:not(.uk-preserve-color) .uk-h5,.uk-tile-secondary:not(.uk-preserve-color) .uk-h6,.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-2xlarge,.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-large,.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-medium,.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-small,.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-xlarge,.uk-tile-secondary:not(.uk-preserve-color) h1,.uk-tile-secondary:not(.uk-preserve-color) h2,.uk-tile-secondary:not(.uk-preserve-color) h3,.uk-tile-secondary:not(.uk-preserve-color) h4,.uk-tile-secondary:not(.uk-preserve-color) h5,.uk-tile-secondary:not(.uk-preserve-color) h6{color:#fff}.uk-card-primary.uk-card-body blockquote,.uk-card-primary>:not([class*=uk-card-media]) blockquote,.uk-card-secondary.uk-card-body blockquote,.uk-card-secondary>:not([class*=uk-card-media]) blockquote,.uk-light blockquote,.uk-offcanvas-bar blockquote,.uk-overlay-primary blockquote,.uk-section-primary:not(.uk-preserve-color) blockquote,.uk-section-secondary:not(.uk-preserve-color) blockquote,.uk-tile-primary:not(.uk-preserve-color) blockquote,.uk-tile-secondary:not(.uk-preserve-color) blockquote{color:#fff}.uk-card-primary.uk-card-body blockquote footer,.uk-card-primary>:not([class*=uk-card-media]) blockquote footer,.uk-card-secondary.uk-card-body blockquote footer,.uk-card-secondary>:not([class*=uk-card-media]) blockquote footer,.uk-light blockquote footer,.uk-offcanvas-bar blockquote footer,.uk-overlay-primary blockquote footer,.uk-section-primary:not(.uk-preserve-color) blockquote footer,.uk-section-secondary:not(.uk-preserve-color) blockquote footer,.uk-tile-primary:not(.uk-preserve-color) blockquote footer,.uk-tile-secondary:not(.uk-preserve-color) blockquote footer{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-hr,.uk-card-primary.uk-card-body hr,.uk-card-primary>:not([class*=uk-card-media]) .uk-hr,.uk-card-primary>:not([class*=uk-card-media]) hr,.uk-card-secondary.uk-card-body .uk-hr,.uk-card-secondary.uk-card-body hr,.uk-card-secondary>:not([class*=uk-card-media]) .uk-hr,.uk-card-secondary>:not([class*=uk-card-media]) hr,.uk-light .uk-hr,.uk-light hr,.uk-offcanvas-bar .uk-hr,.uk-offcanvas-bar hr,.uk-overlay-primary .uk-hr,.uk-overlay-primary hr,.uk-section-primary:not(.uk-preserve-color) .uk-hr,.uk-section-primary:not(.uk-preserve-color) hr,.uk-section-secondary:not(.uk-preserve-color) .uk-hr,.uk-section-secondary:not(.uk-preserve-color) hr,.uk-tile-primary:not(.uk-preserve-color) .uk-hr,.uk-tile-primary:not(.uk-preserve-color) hr,.uk-tile-secondary:not(.uk-preserve-color) .uk-hr,.uk-tile-secondary:not(.uk-preserve-color) hr{border-top-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-link-muted,.uk-card-primary.uk-card-body .uk-link-muted a,.uk-card-primary>:not([class*=uk-card-media]) .uk-link-muted,.uk-card-primary>:not([class*=uk-card-media]) .uk-link-muted a,.uk-card-secondary.uk-card-body .uk-link-muted,.uk-card-secondary.uk-card-body .uk-link-muted a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-link-muted,.uk-card-secondary>:not([class*=uk-card-media]) .uk-link-muted a,.uk-light .uk-link-muted,.uk-light .uk-link-muted a,.uk-offcanvas-bar .uk-link-muted,.uk-offcanvas-bar .uk-link-muted a,.uk-overlay-primary .uk-link-muted,.uk-overlay-primary .uk-link-muted a,.uk-section-primary:not(.uk-preserve-color) .uk-link-muted,.uk-section-primary:not(.uk-preserve-color) .uk-link-muted a,.uk-section-secondary:not(.uk-preserve-color) .uk-link-muted,.uk-section-secondary:not(.uk-preserve-color) .uk-link-muted a,.uk-tile-primary:not(.uk-preserve-color) .uk-link-muted,.uk-tile-primary:not(.uk-preserve-color) .uk-link-muted a,.uk-tile-secondary:not(.uk-preserve-color) .uk-link-muted,.uk-tile-secondary:not(.uk-preserve-color) .uk-link-muted a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-link-muted a:hover,.uk-card-primary.uk-card-body .uk-link-muted:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-link-muted a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-link-muted:hover,.uk-card-secondary.uk-card-body .uk-link-muted a:hover,.uk-card-secondary.uk-card-body .uk-link-muted:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-link-muted a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-link-muted:hover,.uk-light .uk-link-muted a:hover,.uk-light .uk-link-muted:hover,.uk-offcanvas-bar .uk-link-muted a:hover,.uk-offcanvas-bar .uk-link-muted:hover,.uk-overlay-primary .uk-link-muted a:hover,.uk-overlay-primary .uk-link-muted:hover,.uk-section-primary:not(.uk-preserve-color) .uk-link-muted a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-link-muted:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-link-muted a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-link-muted:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-link-muted a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-link-muted:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-link-muted a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-link-muted:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-link-text a:hover,.uk-card-primary.uk-card-body .uk-link-text:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-link-text a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-link-text:hover,.uk-card-secondary.uk-card-body .uk-link-text a:hover,.uk-card-secondary.uk-card-body .uk-link-text:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-link-text a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-link-text:hover,.uk-light .uk-link-text a:hover,.uk-light .uk-link-text:hover,.uk-offcanvas-bar .uk-link-text a:hover,.uk-offcanvas-bar .uk-link-text:hover,.uk-overlay-primary .uk-link-text a:hover,.uk-overlay-primary .uk-link-text:hover,.uk-section-primary:not(.uk-preserve-color) .uk-link-text a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-link-text:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-link-text a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-link-text:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-link-text a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-link-text:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-link-text a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-link-text:hover{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-link-heading a:hover,.uk-card-primary.uk-card-body .uk-link-heading:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-link-heading a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-link-heading:hover,.uk-card-secondary.uk-card-body .uk-link-heading a:hover,.uk-card-secondary.uk-card-body .uk-link-heading:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-link-heading a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-link-heading:hover,.uk-light .uk-link-heading a:hover,.uk-light .uk-link-heading:hover,.uk-offcanvas-bar .uk-link-heading a:hover,.uk-offcanvas-bar .uk-link-heading:hover,.uk-overlay-primary .uk-link-heading a:hover,.uk-overlay-primary .uk-link-heading:hover,.uk-section-primary:not(.uk-preserve-color) .uk-link-heading a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-link-heading:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-link-heading a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-link-heading:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-link-heading a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-link-heading:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-link-heading a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-link-heading:hover{color:#fff}.uk-card-primary.uk-card-body .uk-heading-divider,.uk-card-primary>:not([class*=uk-card-media]) .uk-heading-divider,.uk-card-secondary.uk-card-body .uk-heading-divider,.uk-card-secondary>:not([class*=uk-card-media]) .uk-heading-divider,.uk-light .uk-heading-divider,.uk-offcanvas-bar .uk-heading-divider,.uk-overlay-primary .uk-heading-divider,.uk-section-primary:not(.uk-preserve-color) .uk-heading-divider,.uk-section-secondary:not(.uk-preserve-color) .uk-heading-divider,.uk-tile-primary:not(.uk-preserve-color) .uk-heading-divider,.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-divider{border-bottom-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-heading-bullet::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-heading-bullet::before,.uk-card-secondary.uk-card-body .uk-heading-bullet::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-heading-bullet::before,.uk-light .uk-heading-bullet::before,.uk-offcanvas-bar .uk-heading-bullet::before,.uk-overlay-primary .uk-heading-bullet::before,.uk-section-primary:not(.uk-preserve-color) .uk-heading-bullet::before,.uk-section-secondary:not(.uk-preserve-color) .uk-heading-bullet::before,.uk-tile-primary:not(.uk-preserve-color) .uk-heading-bullet::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-bullet::before{border-left-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-heading-line>::after,.uk-card-primary.uk-card-body .uk-heading-line>::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-heading-line>::after,.uk-card-primary>:not([class*=uk-card-media]) .uk-heading-line>::before,.uk-card-secondary.uk-card-body .uk-heading-line>::after,.uk-card-secondary.uk-card-body .uk-heading-line>::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-heading-line>::after,.uk-card-secondary>:not([class*=uk-card-media]) .uk-heading-line>::before,.uk-light .uk-heading-line>::after,.uk-light .uk-heading-line>::before,.uk-offcanvas-bar .uk-heading-line>::after,.uk-offcanvas-bar .uk-heading-line>::before,.uk-overlay-primary .uk-heading-line>::after,.uk-overlay-primary .uk-heading-line>::before,.uk-section-primary:not(.uk-preserve-color) .uk-heading-line>::after,.uk-section-primary:not(.uk-preserve-color) .uk-heading-line>::before,.uk-section-secondary:not(.uk-preserve-color) .uk-heading-line>::after,.uk-section-secondary:not(.uk-preserve-color) .uk-heading-line>::before,.uk-tile-primary:not(.uk-preserve-color) .uk-heading-line>::after,.uk-tile-primary:not(.uk-preserve-color) .uk-heading-line>::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-line>::after,.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-line>::before{border-bottom-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-divider-icon,.uk-card-primary>:not([class*=uk-card-media]) .uk-divider-icon,.uk-card-secondary.uk-card-body .uk-divider-icon,.uk-card-secondary>:not([class*=uk-card-media]) .uk-divider-icon,.uk-light .uk-divider-icon,.uk-offcanvas-bar .uk-divider-icon,.uk-overlay-primary .uk-divider-icon,.uk-section-primary:not(.uk-preserve-color) .uk-divider-icon,.uk-section-secondary:not(.uk-preserve-color) .uk-divider-icon,.uk-tile-primary:not(.uk-preserve-color) .uk-divider-icon,.uk-tile-secondary:not(.uk-preserve-color) .uk-divider-icon{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22rgba%28255,%20255,%20255,%200.2%29%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\")}.uk-card-primary.uk-card-body .uk-divider-icon::after,.uk-card-primary.uk-card-body .uk-divider-icon::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-divider-icon::after,.uk-card-primary>:not([class*=uk-card-media]) .uk-divider-icon::before,.uk-card-secondary.uk-card-body .uk-divider-icon::after,.uk-card-secondary.uk-card-body .uk-divider-icon::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-divider-icon::after,.uk-card-secondary>:not([class*=uk-card-media]) .uk-divider-icon::before,.uk-light .uk-divider-icon::after,.uk-light .uk-divider-icon::before,.uk-offcanvas-bar .uk-divider-icon::after,.uk-offcanvas-bar .uk-divider-icon::before,.uk-overlay-primary .uk-divider-icon::after,.uk-overlay-primary .uk-divider-icon::before,.uk-section-primary:not(.uk-preserve-color) .uk-divider-icon::after,.uk-section-primary:not(.uk-preserve-color) .uk-divider-icon::before,.uk-section-secondary:not(.uk-preserve-color) .uk-divider-icon::after,.uk-section-secondary:not(.uk-preserve-color) .uk-divider-icon::before,.uk-tile-primary:not(.uk-preserve-color) .uk-divider-icon::after,.uk-tile-primary:not(.uk-preserve-color) .uk-divider-icon::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-divider-icon::after,.uk-tile-secondary:not(.uk-preserve-color) .uk-divider-icon::before{border-bottom-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-divider-small::after,.uk-card-primary>:not([class*=uk-card-media]) .uk-divider-small::after,.uk-card-secondary.uk-card-body .uk-divider-small::after,.uk-card-secondary>:not([class*=uk-card-media]) .uk-divider-small::after,.uk-light .uk-divider-small::after,.uk-offcanvas-bar .uk-divider-small::after,.uk-overlay-primary .uk-divider-small::after,.uk-section-primary:not(.uk-preserve-color) .uk-divider-small::after,.uk-section-secondary:not(.uk-preserve-color) .uk-divider-small::after,.uk-tile-primary:not(.uk-preserve-color) .uk-divider-small::after,.uk-tile-secondary:not(.uk-preserve-color) .uk-divider-small::after{border-top-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-divider-vertical,.uk-card-primary>:not([class*=uk-card-media]) .uk-divider-vertical,.uk-card-secondary.uk-card-body .uk-divider-vertical,.uk-card-secondary>:not([class*=uk-card-media]) .uk-divider-vertical,.uk-light .uk-divider-vertical,.uk-offcanvas-bar .uk-divider-vertical,.uk-overlay-primary .uk-divider-vertical,.uk-section-primary:not(.uk-preserve-color) .uk-divider-vertical,.uk-section-secondary:not(.uk-preserve-color) .uk-divider-vertical,.uk-tile-primary:not(.uk-preserve-color) .uk-divider-vertical,.uk-tile-secondary:not(.uk-preserve-color) .uk-divider-vertical{border-left-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-list-divider>li:nth-child(n+2),.uk-card-primary>:not([class*=uk-card-media]) .uk-list-divider>li:nth-child(n+2),.uk-card-secondary.uk-card-body .uk-list-divider>li:nth-child(n+2),.uk-card-secondary>:not([class*=uk-card-media]) .uk-list-divider>li:nth-child(n+2),.uk-light .uk-list-divider>li:nth-child(n+2),.uk-offcanvas-bar .uk-list-divider>li:nth-child(n+2),.uk-overlay-primary .uk-list-divider>li:nth-child(n+2),.uk-section-primary:not(.uk-preserve-color) .uk-list-divider>li:nth-child(n+2),.uk-section-secondary:not(.uk-preserve-color) .uk-list-divider>li:nth-child(n+2),.uk-tile-primary:not(.uk-preserve-color) .uk-list-divider>li:nth-child(n+2),.uk-tile-secondary:not(.uk-preserve-color) .uk-list-divider>li:nth-child(n+2){border-top-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-list-striped>li:nth-of-type(odd),.uk-card-primary>:not([class*=uk-card-media]) .uk-list-striped>li:nth-of-type(odd),.uk-card-secondary.uk-card-body .uk-list-striped>li:nth-of-type(odd),.uk-card-secondary>:not([class*=uk-card-media]) .uk-list-striped>li:nth-of-type(odd),.uk-light .uk-list-striped>li:nth-of-type(odd),.uk-offcanvas-bar .uk-list-striped>li:nth-of-type(odd),.uk-overlay-primary .uk-list-striped>li:nth-of-type(odd),.uk-section-primary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd),.uk-section-secondary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd),.uk-tile-primary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd),.uk-tile-secondary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd){border-top-color:rgba(255,255,255,.2);border-bottom-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-list-striped>li:nth-of-type(odd),.uk-card-primary>:not([class*=uk-card-media]) .uk-list-striped>li:nth-of-type(odd),.uk-card-secondary.uk-card-body .uk-list-striped>li:nth-of-type(odd),.uk-card-secondary>:not([class*=uk-card-media]) .uk-list-striped>li:nth-of-type(odd),.uk-light .uk-list-striped>li:nth-of-type(odd),.uk-offcanvas-bar .uk-list-striped>li:nth-of-type(odd),.uk-overlay-primary .uk-list-striped>li:nth-of-type(odd),.uk-section-primary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd),.uk-section-secondary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd),.uk-tile-primary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd),.uk-tile-secondary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd){background-color:rgba(255,255,255,.1)}.uk-card-primary.uk-card-body .uk-list-bullet>li::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-list-bullet>li::before,.uk-card-secondary.uk-card-body .uk-list-bullet>li::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-list-bullet>li::before,.uk-light .uk-list-bullet>li::before,.uk-offcanvas-bar .uk-list-bullet>li::before,.uk-overlay-primary .uk-list-bullet>li::before,.uk-section-primary:not(.uk-preserve-color) .uk-list-bullet>li::before,.uk-section-secondary:not(.uk-preserve-color) .uk-list-bullet>li::before,.uk-tile-primary:not(.uk-preserve-color) .uk-list-bullet>li::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-list-bullet>li::before{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20%2F%3E%0A%3C%2Fsvg%3E\")}.uk-card-primary.uk-card-body .uk-table th,.uk-card-primary>:not([class*=uk-card-media]) .uk-table th,.uk-card-secondary.uk-card-body .uk-table th,.uk-card-secondary>:not([class*=uk-card-media]) .uk-table th,.uk-light .uk-table th,.uk-offcanvas-bar .uk-table th,.uk-overlay-primary .uk-table th,.uk-section-primary:not(.uk-preserve-color) .uk-table th,.uk-section-secondary:not(.uk-preserve-color) .uk-table th,.uk-tile-primary:not(.uk-preserve-color) .uk-table th,.uk-tile-secondary:not(.uk-preserve-color) .uk-table th{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-table caption,.uk-card-primary>:not([class*=uk-card-media]) .uk-table caption,.uk-card-secondary.uk-card-body .uk-table caption,.uk-card-secondary>:not([class*=uk-card-media]) .uk-table caption,.uk-light .uk-table caption,.uk-offcanvas-bar .uk-table caption,.uk-overlay-primary .uk-table caption,.uk-section-primary:not(.uk-preserve-color) .uk-table caption,.uk-section-secondary:not(.uk-preserve-color) .uk-table caption,.uk-tile-primary:not(.uk-preserve-color) .uk-table caption,.uk-tile-secondary:not(.uk-preserve-color) .uk-table caption{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-table tbody tr.uk-active,.uk-card-primary.uk-card-body .uk-table>tr.uk-active,.uk-card-primary>:not([class*=uk-card-media]) .uk-table tbody tr.uk-active,.uk-card-primary>:not([class*=uk-card-media]) .uk-table>tr.uk-active,.uk-card-secondary.uk-card-body .uk-table tbody tr.uk-active,.uk-card-secondary.uk-card-body .uk-table>tr.uk-active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-table tbody tr.uk-active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-table>tr.uk-active,.uk-light .uk-table tbody tr.uk-active,.uk-light .uk-table>tr.uk-active,.uk-offcanvas-bar .uk-table tbody tr.uk-active,.uk-offcanvas-bar .uk-table>tr.uk-active,.uk-overlay-primary .uk-table tbody tr.uk-active,.uk-overlay-primary .uk-table>tr.uk-active,.uk-section-primary:not(.uk-preserve-color) .uk-table tbody tr.uk-active,.uk-section-primary:not(.uk-preserve-color) .uk-table>tr.uk-active,.uk-section-secondary:not(.uk-preserve-color) .uk-table tbody tr.uk-active,.uk-section-secondary:not(.uk-preserve-color) .uk-table>tr.uk-active,.uk-tile-primary:not(.uk-preserve-color) .uk-table tbody tr.uk-active,.uk-tile-primary:not(.uk-preserve-color) .uk-table>tr.uk-active,.uk-tile-secondary:not(.uk-preserve-color) .uk-table tbody tr.uk-active,.uk-tile-secondary:not(.uk-preserve-color) .uk-table>tr.uk-active{background:rgba(255,255,255,.08)}.uk-card-primary.uk-card-body .uk-table-divider>:first-child>tr:not(:first-child),.uk-card-primary.uk-card-body .uk-table-divider>:not(:first-child)>tr,.uk-card-primary.uk-card-body .uk-table-divider>tr:not(:first-child),.uk-card-primary>:not([class*=uk-card-media]) .uk-table-divider>:first-child>tr:not(:first-child),.uk-card-primary>:not([class*=uk-card-media]) .uk-table-divider>:not(:first-child)>tr,.uk-card-primary>:not([class*=uk-card-media]) .uk-table-divider>tr:not(:first-child),.uk-card-secondary.uk-card-body .uk-table-divider>:first-child>tr:not(:first-child),.uk-card-secondary.uk-card-body .uk-table-divider>:not(:first-child)>tr,.uk-card-secondary.uk-card-body .uk-table-divider>tr:not(:first-child),.uk-card-secondary>:not([class*=uk-card-media]) .uk-table-divider>:first-child>tr:not(:first-child),.uk-card-secondary>:not([class*=uk-card-media]) .uk-table-divider>:not(:first-child)>tr,.uk-card-secondary>:not([class*=uk-card-media]) .uk-table-divider>tr:not(:first-child),.uk-light .uk-table-divider>:first-child>tr:not(:first-child),.uk-light .uk-table-divider>:not(:first-child)>tr,.uk-light .uk-table-divider>tr:not(:first-child),.uk-offcanvas-bar .uk-table-divider>:first-child>tr:not(:first-child),.uk-offcanvas-bar .uk-table-divider>:not(:first-child)>tr,.uk-offcanvas-bar .uk-table-divider>tr:not(:first-child),.uk-overlay-primary .uk-table-divider>:first-child>tr:not(:first-child),.uk-overlay-primary .uk-table-divider>:not(:first-child)>tr,.uk-overlay-primary .uk-table-divider>tr:not(:first-child),.uk-section-primary:not(.uk-preserve-color) .uk-table-divider>:first-child>tr:not(:first-child),.uk-section-primary:not(.uk-preserve-color) .uk-table-divider>:not(:first-child)>tr,.uk-section-primary:not(.uk-preserve-color) .uk-table-divider>tr:not(:first-child),.uk-section-secondary:not(.uk-preserve-color) .uk-table-divider>:first-child>tr:not(:first-child),.uk-section-secondary:not(.uk-preserve-color) .uk-table-divider>:not(:first-child)>tr,.uk-section-secondary:not(.uk-preserve-color) .uk-table-divider>tr:not(:first-child),.uk-tile-primary:not(.uk-preserve-color) .uk-table-divider>:first-child>tr:not(:first-child),.uk-tile-primary:not(.uk-preserve-color) .uk-table-divider>:not(:first-child)>tr,.uk-tile-primary:not(.uk-preserve-color) .uk-table-divider>tr:not(:first-child),.uk-tile-secondary:not(.uk-preserve-color) .uk-table-divider>:first-child>tr:not(:first-child),.uk-tile-secondary:not(.uk-preserve-color) .uk-table-divider>:not(:first-child)>tr,.uk-tile-secondary:not(.uk-preserve-color) .uk-table-divider>tr:not(:first-child){border-top-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-table-striped tbody tr:nth-of-type(odd),.uk-card-primary.uk-card-body .uk-table-striped>tr:nth-of-type(odd),.uk-card-primary>:not([class*=uk-card-media]) .uk-table-striped tbody tr:nth-of-type(odd),.uk-card-primary>:not([class*=uk-card-media]) .uk-table-striped>tr:nth-of-type(odd),.uk-card-secondary.uk-card-body .uk-table-striped tbody tr:nth-of-type(odd),.uk-card-secondary.uk-card-body .uk-table-striped>tr:nth-of-type(odd),.uk-card-secondary>:not([class*=uk-card-media]) .uk-table-striped tbody tr:nth-of-type(odd),.uk-card-secondary>:not([class*=uk-card-media]) .uk-table-striped>tr:nth-of-type(odd),.uk-light .uk-table-striped tbody tr:nth-of-type(odd),.uk-light .uk-table-striped>tr:nth-of-type(odd),.uk-offcanvas-bar .uk-table-striped tbody tr:nth-of-type(odd),.uk-offcanvas-bar .uk-table-striped>tr:nth-of-type(odd),.uk-overlay-primary .uk-table-striped tbody tr:nth-of-type(odd),.uk-overlay-primary .uk-table-striped>tr:nth-of-type(odd),.uk-section-primary:not(.uk-preserve-color) .uk-table-striped tbody tr:nth-of-type(odd),.uk-section-primary:not(.uk-preserve-color) .uk-table-striped>tr:nth-of-type(odd),.uk-section-secondary:not(.uk-preserve-color) .uk-table-striped tbody tr:nth-of-type(odd),.uk-section-secondary:not(.uk-preserve-color) .uk-table-striped>tr:nth-of-type(odd),.uk-tile-primary:not(.uk-preserve-color) .uk-table-striped tbody tr:nth-of-type(odd),.uk-tile-primary:not(.uk-preserve-color) .uk-table-striped>tr:nth-of-type(odd),.uk-tile-secondary:not(.uk-preserve-color) .uk-table-striped tbody tr:nth-of-type(odd),.uk-tile-secondary:not(.uk-preserve-color) .uk-table-striped>tr:nth-of-type(odd){background:rgba(255,255,255,.1);border-top-color:rgba(255,255,255,.2);border-bottom-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-table-hover tbody tr:hover,.uk-card-primary.uk-card-body .uk-table-hover>tr:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-table-hover tbody tr:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-table-hover>tr:hover,.uk-card-secondary.uk-card-body .uk-table-hover tbody tr:hover,.uk-card-secondary.uk-card-body .uk-table-hover>tr:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-table-hover tbody tr:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-table-hover>tr:hover,.uk-light .uk-table-hover tbody tr:hover,.uk-light .uk-table-hover>tr:hover,.uk-offcanvas-bar .uk-table-hover tbody tr:hover,.uk-offcanvas-bar .uk-table-hover>tr:hover,.uk-overlay-primary .uk-table-hover tbody tr:hover,.uk-overlay-primary .uk-table-hover>tr:hover,.uk-section-primary:not(.uk-preserve-color) .uk-table-hover tbody tr:hover,.uk-section-primary:not(.uk-preserve-color) .uk-table-hover>tr:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-table-hover tbody tr:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-table-hover>tr:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-table-hover tbody tr:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-table-hover>tr:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-table-hover tbody tr:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-table-hover>tr:hover{background:rgba(255,255,255,.08)}.uk-card-primary.uk-card-body .uk-icon-link,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-link,.uk-card-secondary.uk-card-body .uk-icon-link,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-link,.uk-light .uk-icon-link,.uk-offcanvas-bar .uk-icon-link,.uk-overlay-primary .uk-icon-link,.uk-section-primary:not(.uk-preserve-color) .uk-icon-link,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-link,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-link,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-icon-link:focus,.uk-card-primary.uk-card-body .uk-icon-link:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-link:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-link:hover,.uk-card-secondary.uk-card-body .uk-icon-link:focus,.uk-card-secondary.uk-card-body .uk-icon-link:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-link:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-link:hover,.uk-light .uk-icon-link:focus,.uk-light .uk-icon-link:hover,.uk-offcanvas-bar .uk-icon-link:focus,.uk-offcanvas-bar .uk-icon-link:hover,.uk-overlay-primary .uk-icon-link:focus,.uk-overlay-primary .uk-icon-link:hover,.uk-section-primary:not(.uk-preserve-color) .uk-icon-link:focus,.uk-section-primary:not(.uk-preserve-color) .uk-icon-link:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-link:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-link:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-link:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-link:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-active>.uk-icon-link,.uk-card-primary.uk-card-body .uk-icon-link:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-active>.uk-icon-link,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-link:active,.uk-card-secondary.uk-card-body .uk-active>.uk-icon-link,.uk-card-secondary.uk-card-body .uk-icon-link:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-active>.uk-icon-link,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-link:active,.uk-light .uk-active>.uk-icon-link,.uk-light .uk-icon-link:active,.uk-offcanvas-bar .uk-active>.uk-icon-link,.uk-offcanvas-bar .uk-icon-link:active,.uk-overlay-primary .uk-active>.uk-icon-link,.uk-overlay-primary .uk-icon-link:active,.uk-section-primary:not(.uk-preserve-color) .uk-active>.uk-icon-link,.uk-section-primary:not(.uk-preserve-color) .uk-icon-link:active,.uk-section-secondary:not(.uk-preserve-color) .uk-active>.uk-icon-link,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-link:active,.uk-tile-primary:not(.uk-preserve-color) .uk-active>.uk-icon-link,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-link:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-active>.uk-icon-link,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link:active{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-icon-button,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-button,.uk-card-secondary.uk-card-body .uk-icon-button,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-button,.uk-light .uk-icon-button,.uk-offcanvas-bar .uk-icon-button,.uk-overlay-primary .uk-icon-button,.uk-section-primary:not(.uk-preserve-color) .uk-icon-button,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-button,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-button,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button{background-color:rgba(255,255,255,.1);color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-icon-button:focus,.uk-card-primary.uk-card-body .uk-icon-button:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-button:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-button:hover,.uk-card-secondary.uk-card-body .uk-icon-button:focus,.uk-card-secondary.uk-card-body .uk-icon-button:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-button:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-button:hover,.uk-light .uk-icon-button:focus,.uk-light .uk-icon-button:hover,.uk-offcanvas-bar .uk-icon-button:focus,.uk-offcanvas-bar .uk-icon-button:hover,.uk-overlay-primary .uk-icon-button:focus,.uk-overlay-primary .uk-icon-button:hover,.uk-section-primary:not(.uk-preserve-color) .uk-icon-button:focus,.uk-section-primary:not(.uk-preserve-color) .uk-icon-button:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-button:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-button:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-button:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-button:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button:hover{background-color:rgba(242,242,242,.1);color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-icon-button:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-button:active,.uk-card-secondary.uk-card-body .uk-icon-button:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-button:active,.uk-light .uk-icon-button:active,.uk-offcanvas-bar .uk-icon-button:active,.uk-overlay-primary .uk-icon-button:active,.uk-section-primary:not(.uk-preserve-color) .uk-icon-button:active,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-button:active,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-button:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button:active{background-color:rgba(230,230,230,.1);color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-input,.uk-card-primary.uk-card-body .uk-select,.uk-card-primary.uk-card-body .uk-textarea,.uk-card-primary>:not([class*=uk-card-media]) .uk-input,.uk-card-primary>:not([class*=uk-card-media]) .uk-select,.uk-card-primary>:not([class*=uk-card-media]) .uk-textarea,.uk-card-secondary.uk-card-body .uk-input,.uk-card-secondary.uk-card-body .uk-select,.uk-card-secondary.uk-card-body .uk-textarea,.uk-card-secondary>:not([class*=uk-card-media]) .uk-input,.uk-card-secondary>:not([class*=uk-card-media]) .uk-select,.uk-card-secondary>:not([class*=uk-card-media]) .uk-textarea,.uk-light .uk-input,.uk-light .uk-select,.uk-light .uk-textarea,.uk-offcanvas-bar .uk-input,.uk-offcanvas-bar .uk-select,.uk-offcanvas-bar .uk-textarea,.uk-overlay-primary .uk-input,.uk-overlay-primary .uk-select,.uk-overlay-primary .uk-textarea,.uk-section-primary:not(.uk-preserve-color) .uk-input,.uk-section-primary:not(.uk-preserve-color) .uk-select,.uk-section-primary:not(.uk-preserve-color) .uk-textarea,.uk-section-secondary:not(.uk-preserve-color) .uk-input,.uk-section-secondary:not(.uk-preserve-color) .uk-select,.uk-section-secondary:not(.uk-preserve-color) .uk-textarea,.uk-tile-primary:not(.uk-preserve-color) .uk-input,.uk-tile-primary:not(.uk-preserve-color) .uk-select,.uk-tile-primary:not(.uk-preserve-color) .uk-textarea,.uk-tile-secondary:not(.uk-preserve-color) .uk-input,.uk-tile-secondary:not(.uk-preserve-color) .uk-select,.uk-tile-secondary:not(.uk-preserve-color) .uk-textarea{background-color:rgba(255,255,255,.1);color:rgba(255,255,255,.7);background-clip:padding-box;border-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-input:focus,.uk-card-primary.uk-card-body .uk-select:focus,.uk-card-primary.uk-card-body .uk-textarea:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-input:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-select:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-textarea:focus,.uk-card-secondary.uk-card-body .uk-input:focus,.uk-card-secondary.uk-card-body .uk-select:focus,.uk-card-secondary.uk-card-body .uk-textarea:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-input:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-select:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-textarea:focus,.uk-light .uk-input:focus,.uk-light .uk-select:focus,.uk-light .uk-textarea:focus,.uk-offcanvas-bar .uk-input:focus,.uk-offcanvas-bar .uk-select:focus,.uk-offcanvas-bar .uk-textarea:focus,.uk-overlay-primary .uk-input:focus,.uk-overlay-primary .uk-select:focus,.uk-overlay-primary .uk-textarea:focus,.uk-section-primary:not(.uk-preserve-color) .uk-input:focus,.uk-section-primary:not(.uk-preserve-color) .uk-select:focus,.uk-section-primary:not(.uk-preserve-color) .uk-textarea:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-input:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-select:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-textarea:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-input:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-select:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-textarea:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-input:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-select:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-textarea:focus{background-color:rgba(255,255,255,.1);color:rgba(255,255,255,.7);border-color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-input::-ms-input-placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-input::-ms-input-placeholder,.uk-card-secondary.uk-card-body .uk-input::-ms-input-placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-input::-ms-input-placeholder,.uk-light .uk-input::-ms-input-placeholder,.uk-offcanvas-bar .uk-input::-ms-input-placeholder,.uk-overlay-primary .uk-input::-ms-input-placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-input::-ms-input-placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-input::-ms-input-placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-input::-ms-input-placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-input::-ms-input-placeholder{color:rgba(255,255,255,.5)!important}.uk-card-primary.uk-card-body .uk-input::placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-input::placeholder,.uk-card-secondary.uk-card-body .uk-input::placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-input::placeholder,.uk-light .uk-input::placeholder,.uk-offcanvas-bar .uk-input::placeholder,.uk-overlay-primary .uk-input::placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-input::placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-input::placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-input::placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-input::placeholder{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-textarea::-ms-input-placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-textarea::-ms-input-placeholder,.uk-card-secondary.uk-card-body .uk-textarea::-ms-input-placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-textarea::-ms-input-placeholder,.uk-light .uk-textarea::-ms-input-placeholder,.uk-offcanvas-bar .uk-textarea::-ms-input-placeholder,.uk-overlay-primary .uk-textarea::-ms-input-placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-textarea::-ms-input-placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-textarea::-ms-input-placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-textarea::-ms-input-placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-textarea::-ms-input-placeholder{color:rgba(255,255,255,.5)!important}.uk-card-primary.uk-card-body .uk-textarea::placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-textarea::placeholder,.uk-card-secondary.uk-card-body .uk-textarea::placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-textarea::placeholder,.uk-light .uk-textarea::placeholder,.uk-offcanvas-bar .uk-textarea::placeholder,.uk-overlay-primary .uk-textarea::placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-textarea::placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-textarea::placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-textarea::placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-textarea::placeholder{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-select:not([multiple]):not([size]),.uk-card-primary>:not([class*=uk-card-media]) .uk-select:not([multiple]):not([size]),.uk-card-secondary.uk-card-body .uk-select:not([multiple]):not([size]),.uk-card-secondary>:not([class*=uk-card-media]) .uk-select:not([multiple]):not([size]),.uk-light .uk-select:not([multiple]):not([size]),.uk-offcanvas-bar .uk-select:not([multiple]):not([size]),.uk-overlay-primary .uk-select:not([multiple]):not([size]),.uk-section-primary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]),.uk-section-secondary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]),.uk-tile-primary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]),.uk-tile-secondary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]){background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\")}.uk-card-primary.uk-card-body .uk-input[list]:focus,.uk-card-primary.uk-card-body .uk-input[list]:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-input[list]:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-input[list]:hover,.uk-card-secondary.uk-card-body .uk-input[list]:focus,.uk-card-secondary.uk-card-body .uk-input[list]:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-input[list]:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-input[list]:hover,.uk-light .uk-input[list]:focus,.uk-light .uk-input[list]:hover,.uk-offcanvas-bar .uk-input[list]:focus,.uk-offcanvas-bar .uk-input[list]:hover,.uk-overlay-primary .uk-input[list]:focus,.uk-overlay-primary .uk-input[list]:hover,.uk-section-primary:not(.uk-preserve-color) .uk-input[list]:focus,.uk-section-primary:not(.uk-preserve-color) .uk-input[list]:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-input[list]:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-input[list]:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-input[list]:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-input[list]:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-input[list]:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-input[list]:hover{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20points%3D%2212%2012%208%206%2016%206%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\")}.uk-card-primary.uk-card-body .uk-checkbox,.uk-card-primary.uk-card-body .uk-radio,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox,.uk-card-primary>:not([class*=uk-card-media]) .uk-radio,.uk-card-secondary.uk-card-body .uk-checkbox,.uk-card-secondary.uk-card-body .uk-radio,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox,.uk-card-secondary>:not([class*=uk-card-media]) .uk-radio,.uk-light .uk-checkbox,.uk-light .uk-radio,.uk-offcanvas-bar .uk-checkbox,.uk-offcanvas-bar .uk-radio,.uk-overlay-primary .uk-checkbox,.uk-overlay-primary .uk-radio,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox,.uk-section-primary:not(.uk-preserve-color) .uk-radio,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox,.uk-section-secondary:not(.uk-preserve-color) .uk-radio,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox,.uk-tile-primary:not(.uk-preserve-color) .uk-radio,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox,.uk-tile-secondary:not(.uk-preserve-color) .uk-radio{background-color:rgba(242,242,242,.1);border-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-checkbox:focus,.uk-card-primary.uk-card-body .uk-radio:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-radio:focus,.uk-card-secondary.uk-card-body .uk-checkbox:focus,.uk-card-secondary.uk-card-body .uk-radio:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-radio:focus,.uk-light .uk-checkbox:focus,.uk-light .uk-radio:focus,.uk-offcanvas-bar .uk-checkbox:focus,.uk-offcanvas-bar .uk-radio:focus,.uk-overlay-primary .uk-checkbox:focus,.uk-overlay-primary .uk-radio:focus,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:focus,.uk-section-primary:not(.uk-preserve-color) .uk-radio:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-radio:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-radio:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-radio:focus{border-color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-checkbox:checked,.uk-card-primary.uk-card-body .uk-checkbox:indeterminate,.uk-card-primary.uk-card-body .uk-radio:checked,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox:checked,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox:indeterminate,.uk-card-primary>:not([class*=uk-card-media]) .uk-radio:checked,.uk-card-secondary.uk-card-body .uk-checkbox:checked,.uk-card-secondary.uk-card-body .uk-checkbox:indeterminate,.uk-card-secondary.uk-card-body .uk-radio:checked,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox:checked,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox:indeterminate,.uk-card-secondary>:not([class*=uk-card-media]) .uk-radio:checked,.uk-light .uk-checkbox:checked,.uk-light .uk-checkbox:indeterminate,.uk-light .uk-radio:checked,.uk-offcanvas-bar .uk-checkbox:checked,.uk-offcanvas-bar .uk-checkbox:indeterminate,.uk-offcanvas-bar .uk-radio:checked,.uk-overlay-primary .uk-checkbox:checked,.uk-overlay-primary .uk-checkbox:indeterminate,.uk-overlay-primary .uk-radio:checked,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:checked,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate,.uk-section-primary:not(.uk-preserve-color) .uk-radio:checked,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:checked,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate,.uk-section-secondary:not(.uk-preserve-color) .uk-radio:checked,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:checked,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate,.uk-tile-primary:not(.uk-preserve-color) .uk-radio:checked,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:checked,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate,.uk-tile-secondary:not(.uk-preserve-color) .uk-radio:checked{background-color:#fff;border-color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-checkbox:checked:focus,.uk-card-primary.uk-card-body .uk-checkbox:indeterminate:focus,.uk-card-primary.uk-card-body .uk-radio:checked:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox:checked:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox:indeterminate:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-radio:checked:focus,.uk-card-secondary.uk-card-body .uk-checkbox:checked:focus,.uk-card-secondary.uk-card-body .uk-checkbox:indeterminate:focus,.uk-card-secondary.uk-card-body .uk-radio:checked:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox:checked:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox:indeterminate:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-radio:checked:focus,.uk-light .uk-checkbox:checked:focus,.uk-light .uk-checkbox:indeterminate:focus,.uk-light .uk-radio:checked:focus,.uk-offcanvas-bar .uk-checkbox:checked:focus,.uk-offcanvas-bar .uk-checkbox:indeterminate:focus,.uk-offcanvas-bar .uk-radio:checked:focus,.uk-overlay-primary .uk-checkbox:checked:focus,.uk-overlay-primary .uk-checkbox:indeterminate:focus,.uk-overlay-primary .uk-radio:checked:focus,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:checked:focus,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,.uk-section-primary:not(.uk-preserve-color) .uk-radio:checked:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:checked:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-radio:checked:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:checked:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-radio:checked:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:checked:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-radio:checked:focus{background-color:#e6e6e6}.uk-card-primary.uk-card-body .uk-radio:checked,.uk-card-primary>:not([class*=uk-card-media]) .uk-radio:checked,.uk-card-secondary.uk-card-body .uk-radio:checked,.uk-card-secondary>:not([class*=uk-card-media]) .uk-radio:checked,.uk-light .uk-radio:checked,.uk-offcanvas-bar .uk-radio:checked,.uk-overlay-primary .uk-radio:checked,.uk-section-primary:not(.uk-preserve-color) .uk-radio:checked,.uk-section-secondary:not(.uk-preserve-color) .uk-radio:checked,.uk-tile-primary:not(.uk-preserve-color) .uk-radio:checked,.uk-tile-secondary:not(.uk-preserve-color) .uk-radio:checked{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23666%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E\")}.uk-card-primary.uk-card-body .uk-checkbox:checked,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox:checked,.uk-card-secondary.uk-card-body .uk-checkbox:checked,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox:checked,.uk-light .uk-checkbox:checked,.uk-offcanvas-bar .uk-checkbox:checked,.uk-overlay-primary .uk-checkbox:checked,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:checked,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:checked,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:checked,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:checked{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\")}.uk-card-primary.uk-card-body .uk-checkbox:indeterminate,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox:indeterminate,.uk-card-secondary.uk-card-body .uk-checkbox:indeterminate,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox:indeterminate,.uk-light .uk-checkbox:indeterminate,.uk-offcanvas-bar .uk-checkbox:indeterminate,.uk-overlay-primary .uk-checkbox:indeterminate,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E\")}.uk-card-primary.uk-card-body .uk-form-label,.uk-card-primary>:not([class*=uk-card-media]) .uk-form-label,.uk-card-secondary.uk-card-body .uk-form-label,.uk-card-secondary>:not([class*=uk-card-media]) .uk-form-label,.uk-light .uk-form-label,.uk-offcanvas-bar .uk-form-label,.uk-overlay-primary .uk-form-label,.uk-section-primary:not(.uk-preserve-color) .uk-form-label,.uk-section-secondary:not(.uk-preserve-color) .uk-form-label,.uk-tile-primary:not(.uk-preserve-color) .uk-form-label,.uk-tile-secondary:not(.uk-preserve-color) .uk-form-label{color:#fff}.uk-card-primary.uk-card-body .uk-form-icon,.uk-card-primary>:not([class*=uk-card-media]) .uk-form-icon,.uk-card-secondary.uk-card-body .uk-form-icon,.uk-card-secondary>:not([class*=uk-card-media]) .uk-form-icon,.uk-light .uk-form-icon,.uk-offcanvas-bar .uk-form-icon,.uk-overlay-primary .uk-form-icon,.uk-section-primary:not(.uk-preserve-color) .uk-form-icon,.uk-section-secondary:not(.uk-preserve-color) .uk-form-icon,.uk-tile-primary:not(.uk-preserve-color) .uk-form-icon,.uk-tile-secondary:not(.uk-preserve-color) .uk-form-icon{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-form-icon:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-form-icon:hover,.uk-card-secondary.uk-card-body .uk-form-icon:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-form-icon:hover,.uk-light .uk-form-icon:hover,.uk-offcanvas-bar .uk-form-icon:hover,.uk-overlay-primary .uk-form-icon:hover,.uk-section-primary:not(.uk-preserve-color) .uk-form-icon:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-form-icon:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-form-icon:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-form-icon:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-button-default,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-default,.uk-card-secondary.uk-card-body .uk-button-default,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-default,.uk-light .uk-button-default,.uk-offcanvas-bar .uk-button-default,.uk-overlay-primary .uk-button-default,.uk-section-primary:not(.uk-preserve-color) .uk-button-default,.uk-section-secondary:not(.uk-preserve-color) .uk-button-default,.uk-tile-primary:not(.uk-preserve-color) .uk-button-default,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-default{background-color:transparent;color:#fff;border-color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-button-default:focus,.uk-card-primary.uk-card-body .uk-button-default:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-default:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-default:hover,.uk-card-secondary.uk-card-body .uk-button-default:focus,.uk-card-secondary.uk-card-body .uk-button-default:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-default:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-default:hover,.uk-light .uk-button-default:focus,.uk-light .uk-button-default:hover,.uk-offcanvas-bar .uk-button-default:focus,.uk-offcanvas-bar .uk-button-default:hover,.uk-overlay-primary .uk-button-default:focus,.uk-overlay-primary .uk-button-default:hover,.uk-section-primary:not(.uk-preserve-color) .uk-button-default:focus,.uk-section-primary:not(.uk-preserve-color) .uk-button-default:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-button-default:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-button-default:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-button-default:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-button-default:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-default:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-default:hover{background-color:transparent;color:#fff;border-color:#fff}.uk-card-primary.uk-card-body .uk-button-default.uk-active,.uk-card-primary.uk-card-body .uk-button-default:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-default.uk-active,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-default:active,.uk-card-secondary.uk-card-body .uk-button-default.uk-active,.uk-card-secondary.uk-card-body .uk-button-default:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-default.uk-active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-default:active,.uk-light .uk-button-default.uk-active,.uk-light .uk-button-default:active,.uk-offcanvas-bar .uk-button-default.uk-active,.uk-offcanvas-bar .uk-button-default:active,.uk-overlay-primary .uk-button-default.uk-active,.uk-overlay-primary .uk-button-default:active,.uk-section-primary:not(.uk-preserve-color) .uk-button-default.uk-active,.uk-section-primary:not(.uk-preserve-color) .uk-button-default:active,.uk-section-secondary:not(.uk-preserve-color) .uk-button-default.uk-active,.uk-section-secondary:not(.uk-preserve-color) .uk-button-default:active,.uk-tile-primary:not(.uk-preserve-color) .uk-button-default.uk-active,.uk-tile-primary:not(.uk-preserve-color) .uk-button-default:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-default.uk-active,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-default:active{background-color:transparent;color:#fff;border-color:#fff}.uk-card-primary.uk-card-body .uk-button-primary,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-primary,.uk-card-secondary.uk-card-body .uk-button-primary,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-primary,.uk-light .uk-button-primary,.uk-offcanvas-bar .uk-button-primary,.uk-overlay-primary .uk-button-primary,.uk-section-primary:not(.uk-preserve-color) .uk-button-primary,.uk-section-secondary:not(.uk-preserve-color) .uk-button-primary,.uk-tile-primary:not(.uk-preserve-color) .uk-button-primary,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary{background-color:#fff;color:#666}.uk-card-primary.uk-card-body .uk-button-primary:focus,.uk-card-primary.uk-card-body .uk-button-primary:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-primary:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-primary:hover,.uk-card-secondary.uk-card-body .uk-button-primary:focus,.uk-card-secondary.uk-card-body .uk-button-primary:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-primary:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-primary:hover,.uk-light .uk-button-primary:focus,.uk-light .uk-button-primary:hover,.uk-offcanvas-bar .uk-button-primary:focus,.uk-offcanvas-bar .uk-button-primary:hover,.uk-overlay-primary .uk-button-primary:focus,.uk-overlay-primary .uk-button-primary:hover,.uk-section-primary:not(.uk-preserve-color) .uk-button-primary:focus,.uk-section-primary:not(.uk-preserve-color) .uk-button-primary:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-button-primary:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-button-primary:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-button-primary:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-button-primary:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary:hover{background-color:#f2f2f2;color:#666}.uk-card-primary.uk-card-body .uk-button-primary.uk-active,.uk-card-primary.uk-card-body .uk-button-primary:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-primary.uk-active,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-primary:active,.uk-card-secondary.uk-card-body .uk-button-primary.uk-active,.uk-card-secondary.uk-card-body .uk-button-primary:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-primary.uk-active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-primary:active,.uk-light .uk-button-primary.uk-active,.uk-light .uk-button-primary:active,.uk-offcanvas-bar .uk-button-primary.uk-active,.uk-offcanvas-bar .uk-button-primary:active,.uk-overlay-primary .uk-button-primary.uk-active,.uk-overlay-primary .uk-button-primary:active,.uk-section-primary:not(.uk-preserve-color) .uk-button-primary.uk-active,.uk-section-primary:not(.uk-preserve-color) .uk-button-primary:active,.uk-section-secondary:not(.uk-preserve-color) .uk-button-primary.uk-active,.uk-section-secondary:not(.uk-preserve-color) .uk-button-primary:active,.uk-tile-primary:not(.uk-preserve-color) .uk-button-primary.uk-active,.uk-tile-primary:not(.uk-preserve-color) .uk-button-primary:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary.uk-active,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary:active{background-color:#e6e6e6;color:#666}.uk-card-primary.uk-card-body .uk-button-secondary,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-secondary,.uk-card-secondary.uk-card-body .uk-button-secondary,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-secondary,.uk-light .uk-button-secondary,.uk-offcanvas-bar .uk-button-secondary,.uk-overlay-primary .uk-button-secondary,.uk-section-primary:not(.uk-preserve-color) .uk-button-secondary,.uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary,.uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary{background-color:#fff;color:#666}.uk-card-primary.uk-card-body .uk-button-secondary:focus,.uk-card-primary.uk-card-body .uk-button-secondary:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-secondary:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-secondary:hover,.uk-card-secondary.uk-card-body .uk-button-secondary:focus,.uk-card-secondary.uk-card-body .uk-button-secondary:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-secondary:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-secondary:hover,.uk-light .uk-button-secondary:focus,.uk-light .uk-button-secondary:hover,.uk-offcanvas-bar .uk-button-secondary:focus,.uk-offcanvas-bar .uk-button-secondary:hover,.uk-overlay-primary .uk-button-secondary:focus,.uk-overlay-primary .uk-button-secondary:hover,.uk-section-primary:not(.uk-preserve-color) .uk-button-secondary:focus,.uk-section-primary:not(.uk-preserve-color) .uk-button-secondary:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary:hover{background-color:#f2f2f2;color:#666}.uk-card-primary.uk-card-body .uk-button-secondary.uk-active,.uk-card-primary.uk-card-body .uk-button-secondary:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-secondary.uk-active,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-secondary:active,.uk-card-secondary.uk-card-body .uk-button-secondary.uk-active,.uk-card-secondary.uk-card-body .uk-button-secondary:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-secondary.uk-active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-secondary:active,.uk-light .uk-button-secondary.uk-active,.uk-light .uk-button-secondary:active,.uk-offcanvas-bar .uk-button-secondary.uk-active,.uk-offcanvas-bar .uk-button-secondary:active,.uk-overlay-primary .uk-button-secondary.uk-active,.uk-overlay-primary .uk-button-secondary:active,.uk-section-primary:not(.uk-preserve-color) .uk-button-secondary.uk-active,.uk-section-primary:not(.uk-preserve-color) .uk-button-secondary:active,.uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary.uk-active,.uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary:active,.uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary.uk-active,.uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary.uk-active,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary:active{background-color:#e6e6e6;color:#666}.uk-card-primary.uk-card-body .uk-button-text,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-text,.uk-card-secondary.uk-card-body .uk-button-text,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-text,.uk-light .uk-button-text,.uk-offcanvas-bar .uk-button-text,.uk-overlay-primary .uk-button-text,.uk-section-primary:not(.uk-preserve-color) .uk-button-text,.uk-section-secondary:not(.uk-preserve-color) .uk-button-text,.uk-tile-primary:not(.uk-preserve-color) .uk-button-text,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-text{color:#fff}.uk-card-primary.uk-card-body .uk-button-text::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-text::before,.uk-card-secondary.uk-card-body .uk-button-text::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-text::before,.uk-light .uk-button-text::before,.uk-offcanvas-bar .uk-button-text::before,.uk-overlay-primary .uk-button-text::before,.uk-section-primary:not(.uk-preserve-color) .uk-button-text::before,.uk-section-secondary:not(.uk-preserve-color) .uk-button-text::before,.uk-tile-primary:not(.uk-preserve-color) .uk-button-text::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-text::before{border-bottom-color:#fff}.uk-card-primary.uk-card-body .uk-button-text:focus,.uk-card-primary.uk-card-body .uk-button-text:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-text:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-text:hover,.uk-card-secondary.uk-card-body .uk-button-text:focus,.uk-card-secondary.uk-card-body .uk-button-text:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-text:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-text:hover,.uk-light .uk-button-text:focus,.uk-light .uk-button-text:hover,.uk-offcanvas-bar .uk-button-text:focus,.uk-offcanvas-bar .uk-button-text:hover,.uk-overlay-primary .uk-button-text:focus,.uk-overlay-primary .uk-button-text:hover,.uk-section-primary:not(.uk-preserve-color) .uk-button-text:focus,.uk-section-primary:not(.uk-preserve-color) .uk-button-text:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-button-text:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-button-text:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-button-text:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-button-text:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-text:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-text:hover{color:#fff}.uk-card-primary.uk-card-body .uk-button-text:disabled,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-text:disabled,.uk-card-secondary.uk-card-body .uk-button-text:disabled,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-text:disabled,.uk-light .uk-button-text:disabled,.uk-offcanvas-bar .uk-button-text:disabled,.uk-overlay-primary .uk-button-text:disabled,.uk-section-primary:not(.uk-preserve-color) .uk-button-text:disabled,.uk-section-secondary:not(.uk-preserve-color) .uk-button-text:disabled,.uk-tile-primary:not(.uk-preserve-color) .uk-button-text:disabled,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-text:disabled{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-button-link,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-link,.uk-card-secondary.uk-card-body .uk-button-link,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-link,.uk-light .uk-button-link,.uk-offcanvas-bar .uk-button-link,.uk-overlay-primary .uk-button-link,.uk-section-primary:not(.uk-preserve-color) .uk-button-link,.uk-section-secondary:not(.uk-preserve-color) .uk-button-link,.uk-tile-primary:not(.uk-preserve-color) .uk-button-link,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-link{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-button-link:focus,.uk-card-primary.uk-card-body .uk-button-link:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-link:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-link:hover,.uk-card-secondary.uk-card-body .uk-button-link:focus,.uk-card-secondary.uk-card-body .uk-button-link:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-link:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-link:hover,.uk-light .uk-button-link:focus,.uk-light .uk-button-link:hover,.uk-offcanvas-bar .uk-button-link:focus,.uk-offcanvas-bar .uk-button-link:hover,.uk-overlay-primary .uk-button-link:focus,.uk-overlay-primary .uk-button-link:hover,.uk-section-primary:not(.uk-preserve-color) .uk-button-link:focus,.uk-section-primary:not(.uk-preserve-color) .uk-button-link:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-button-link:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-button-link:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-button-link:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-button-link:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-link:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-link:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-grid-divider>:not(.uk-first-column)::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-grid-divider>:not(.uk-first-column)::before,.uk-card-secondary.uk-card-body .uk-grid-divider>:not(.uk-first-column)::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-grid-divider>:not(.uk-first-column)::before,.uk-light .uk-grid-divider>:not(.uk-first-column)::before,.uk-offcanvas-bar .uk-grid-divider>:not(.uk-first-column)::before,.uk-overlay-primary .uk-grid-divider>:not(.uk-first-column)::before,.uk-section-primary:not(.uk-preserve-color) .uk-grid-divider>:not(.uk-first-column)::before,.uk-section-secondary:not(.uk-preserve-color) .uk-grid-divider>:not(.uk-first-column)::before,.uk-tile-primary:not(.uk-preserve-color) .uk-grid-divider>:not(.uk-first-column)::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-grid-divider>:not(.uk-first-column)::before{border-left-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-card-secondary.uk-card-body .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-light .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-offcanvas-bar .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-overlay-primary .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-section-primary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-section-secondary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-tile-primary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before{border-top-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-close,.uk-card-primary>:not([class*=uk-card-media]) .uk-close,.uk-card-secondary.uk-card-body .uk-close,.uk-card-secondary>:not([class*=uk-card-media]) .uk-close,.uk-light .uk-close,.uk-offcanvas-bar .uk-close,.uk-overlay-primary .uk-close,.uk-section-primary:not(.uk-preserve-color) .uk-close,.uk-section-secondary:not(.uk-preserve-color) .uk-close,.uk-tile-primary:not(.uk-preserve-color) .uk-close,.uk-tile-secondary:not(.uk-preserve-color) .uk-close{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-close:focus,.uk-card-primary.uk-card-body .uk-close:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-close:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-close:hover,.uk-card-secondary.uk-card-body .uk-close:focus,.uk-card-secondary.uk-card-body .uk-close:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-close:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-close:hover,.uk-light .uk-close:focus,.uk-light .uk-close:hover,.uk-offcanvas-bar .uk-close:focus,.uk-offcanvas-bar .uk-close:hover,.uk-overlay-primary .uk-close:focus,.uk-overlay-primary .uk-close:hover,.uk-section-primary:not(.uk-preserve-color) .uk-close:focus,.uk-section-primary:not(.uk-preserve-color) .uk-close:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-close:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-close:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-close:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-close:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-close:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-close:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-totop,.uk-card-primary>:not([class*=uk-card-media]) .uk-totop,.uk-card-secondary.uk-card-body .uk-totop,.uk-card-secondary>:not([class*=uk-card-media]) .uk-totop,.uk-light .uk-totop,.uk-offcanvas-bar .uk-totop,.uk-overlay-primary .uk-totop,.uk-section-primary:not(.uk-preserve-color) .uk-totop,.uk-section-secondary:not(.uk-preserve-color) .uk-totop,.uk-tile-primary:not(.uk-preserve-color) .uk-totop,.uk-tile-secondary:not(.uk-preserve-color) .uk-totop{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-totop:focus,.uk-card-primary.uk-card-body .uk-totop:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-totop:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-totop:hover,.uk-card-secondary.uk-card-body .uk-totop:focus,.uk-card-secondary.uk-card-body .uk-totop:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-totop:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-totop:hover,.uk-light .uk-totop:focus,.uk-light .uk-totop:hover,.uk-offcanvas-bar .uk-totop:focus,.uk-offcanvas-bar .uk-totop:hover,.uk-overlay-primary .uk-totop:focus,.uk-overlay-primary .uk-totop:hover,.uk-section-primary:not(.uk-preserve-color) .uk-totop:focus,.uk-section-primary:not(.uk-preserve-color) .uk-totop:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-totop:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-totop:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-totop:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-totop:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-totop:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-totop:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-totop:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-totop:active,.uk-card-secondary.uk-card-body .uk-totop:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-totop:active,.uk-light .uk-totop:active,.uk-offcanvas-bar .uk-totop:active,.uk-overlay-primary .uk-totop:active,.uk-section-primary:not(.uk-preserve-color) .uk-totop:active,.uk-section-secondary:not(.uk-preserve-color) .uk-totop:active,.uk-tile-primary:not(.uk-preserve-color) .uk-totop:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-totop:active{color:#fff}.uk-card-primary.uk-card-body .uk-marker,.uk-card-primary>:not([class*=uk-card-media]) .uk-marker,.uk-card-secondary.uk-card-body .uk-marker,.uk-card-secondary>:not([class*=uk-card-media]) .uk-marker,.uk-light .uk-marker,.uk-offcanvas-bar .uk-marker,.uk-overlay-primary .uk-marker,.uk-section-primary:not(.uk-preserve-color) .uk-marker,.uk-section-secondary:not(.uk-preserve-color) .uk-marker,.uk-tile-primary:not(.uk-preserve-color) .uk-marker,.uk-tile-secondary:not(.uk-preserve-color) .uk-marker{background:#f8f8f8;color:#666}.uk-card-primary.uk-card-body .uk-marker:focus,.uk-card-primary.uk-card-body .uk-marker:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-marker:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-marker:hover,.uk-card-secondary.uk-card-body .uk-marker:focus,.uk-card-secondary.uk-card-body .uk-marker:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-marker:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-marker:hover,.uk-light .uk-marker:focus,.uk-light .uk-marker:hover,.uk-offcanvas-bar .uk-marker:focus,.uk-offcanvas-bar .uk-marker:hover,.uk-overlay-primary .uk-marker:focus,.uk-overlay-primary .uk-marker:hover,.uk-section-primary:not(.uk-preserve-color) .uk-marker:focus,.uk-section-primary:not(.uk-preserve-color) .uk-marker:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-marker:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-marker:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-marker:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-marker:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-marker:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-marker:hover{color:#666}.uk-card-primary.uk-card-body .uk-badge,.uk-card-primary>:not([class*=uk-card-media]) .uk-badge,.uk-card-secondary.uk-card-body .uk-badge,.uk-card-secondary>:not([class*=uk-card-media]) .uk-badge,.uk-light .uk-badge,.uk-offcanvas-bar .uk-badge,.uk-overlay-primary .uk-badge,.uk-section-primary:not(.uk-preserve-color) .uk-badge,.uk-section-secondary:not(.uk-preserve-color) .uk-badge,.uk-tile-primary:not(.uk-preserve-color) .uk-badge,.uk-tile-secondary:not(.uk-preserve-color) .uk-badge{background-color:#fff;color:#666}.uk-card-primary.uk-card-body .uk-badge:focus,.uk-card-primary.uk-card-body .uk-badge:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-badge:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-badge:hover,.uk-card-secondary.uk-card-body .uk-badge:focus,.uk-card-secondary.uk-card-body .uk-badge:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-badge:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-badge:hover,.uk-light .uk-badge:focus,.uk-light .uk-badge:hover,.uk-offcanvas-bar .uk-badge:focus,.uk-offcanvas-bar .uk-badge:hover,.uk-overlay-primary .uk-badge:focus,.uk-overlay-primary .uk-badge:hover,.uk-section-primary:not(.uk-preserve-color) .uk-badge:focus,.uk-section-primary:not(.uk-preserve-color) .uk-badge:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-badge:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-badge:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-badge:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-badge:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-badge:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-badge:hover{color:#666}.uk-card-primary.uk-card-body .uk-label,.uk-card-primary>:not([class*=uk-card-media]) .uk-label,.uk-card-secondary.uk-card-body .uk-label,.uk-card-secondary>:not([class*=uk-card-media]) .uk-label,.uk-light .uk-label,.uk-offcanvas-bar .uk-label,.uk-overlay-primary .uk-label,.uk-section-primary:not(.uk-preserve-color) .uk-label,.uk-section-secondary:not(.uk-preserve-color) .uk-label,.uk-tile-primary:not(.uk-preserve-color) .uk-label,.uk-tile-secondary:not(.uk-preserve-color) .uk-label{background-color:#fff;color:#666}.uk-card-primary.uk-card-body .uk-article-meta,.uk-card-primary>:not([class*=uk-card-media]) .uk-article-meta,.uk-card-secondary.uk-card-body .uk-article-meta,.uk-card-secondary>:not([class*=uk-card-media]) .uk-article-meta,.uk-light .uk-article-meta,.uk-offcanvas-bar .uk-article-meta,.uk-overlay-primary .uk-article-meta,.uk-section-primary:not(.uk-preserve-color) .uk-article-meta,.uk-section-secondary:not(.uk-preserve-color) .uk-article-meta,.uk-tile-primary:not(.uk-preserve-color) .uk-article-meta,.uk-tile-secondary:not(.uk-preserve-color) .uk-article-meta{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-search-input,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-input,.uk-card-secondary.uk-card-body .uk-search-input,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-input,.uk-light .uk-search-input,.uk-offcanvas-bar .uk-search-input,.uk-overlay-primary .uk-search-input,.uk-section-primary:not(.uk-preserve-color) .uk-search-input,.uk-section-secondary:not(.uk-preserve-color) .uk-search-input,.uk-tile-primary:not(.uk-preserve-color) .uk-search-input,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-input{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-search-input:-ms-input-placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-input:-ms-input-placeholder,.uk-card-secondary.uk-card-body .uk-search-input:-ms-input-placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-input:-ms-input-placeholder,.uk-light .uk-search-input:-ms-input-placeholder,.uk-offcanvas-bar .uk-search-input:-ms-input-placeholder,.uk-overlay-primary .uk-search-input:-ms-input-placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder{color:rgba(255,255,255,.5)!important}.uk-card-primary.uk-card-body .uk-search-input::placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-input::placeholder,.uk-card-secondary.uk-card-body .uk-search-input::placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-input::placeholder,.uk-light .uk-search-input::placeholder,.uk-offcanvas-bar .uk-search-input::placeholder,.uk-overlay-primary .uk-search-input::placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-search-input::placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-search-input::placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-search-input::placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-input::placeholder{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-search .uk-search-icon,.uk-card-primary>:not([class*=uk-card-media]) .uk-search .uk-search-icon,.uk-card-secondary.uk-card-body .uk-search .uk-search-icon,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search .uk-search-icon,.uk-light .uk-search .uk-search-icon,.uk-offcanvas-bar .uk-search .uk-search-icon,.uk-overlay-primary .uk-search .uk-search-icon,.uk-section-primary:not(.uk-preserve-color) .uk-search .uk-search-icon,.uk-section-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon,.uk-tile-primary:not(.uk-preserve-color) .uk-search .uk-search-icon,.uk-tile-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-search .uk-search-icon:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-search .uk-search-icon:hover,.uk-card-secondary.uk-card-body .uk-search .uk-search-icon:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search .uk-search-icon:hover,.uk-light .uk-search .uk-search-icon:hover,.uk-offcanvas-bar .uk-search .uk-search-icon:hover,.uk-overlay-primary .uk-search .uk-search-icon:hover,.uk-section-primary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-search-default .uk-search-input,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-default .uk-search-input,.uk-card-secondary.uk-card-body .uk-search-default .uk-search-input,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-default .uk-search-input,.uk-light .uk-search-default .uk-search-input,.uk-offcanvas-bar .uk-search-default .uk-search-input,.uk-overlay-primary .uk-search-default .uk-search-input,.uk-section-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input,.uk-section-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input,.uk-tile-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input{background-color:transparent;border-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-search-default .uk-search-input:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-default .uk-search-input:focus,.uk-card-secondary.uk-card-body .uk-search-default .uk-search-input:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-default .uk-search-input:focus,.uk-light .uk-search-default .uk-search-input:focus,.uk-offcanvas-bar .uk-search-default .uk-search-input:focus,.uk-overlay-primary .uk-search-default .uk-search-input:focus,.uk-section-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus{background-color:transparent}.uk-card-primary.uk-card-body .uk-search-navbar .uk-search-input,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-navbar .uk-search-input,.uk-card-secondary.uk-card-body .uk-search-navbar .uk-search-input,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-navbar .uk-search-input,.uk-light .uk-search-navbar .uk-search-input,.uk-offcanvas-bar .uk-search-navbar .uk-search-input,.uk-overlay-primary .uk-search-navbar .uk-search-input,.uk-section-primary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input,.uk-section-secondary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input,.uk-tile-primary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input{background-color:transparent}.uk-card-primary.uk-card-body .uk-search-large .uk-search-input,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-large .uk-search-input,.uk-card-secondary.uk-card-body .uk-search-large .uk-search-input,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-large .uk-search-input,.uk-light .uk-search-large .uk-search-input,.uk-offcanvas-bar .uk-search-large .uk-search-input,.uk-overlay-primary .uk-search-large .uk-search-input,.uk-section-primary:not(.uk-preserve-color) .uk-search-large .uk-search-input,.uk-section-secondary:not(.uk-preserve-color) .uk-search-large .uk-search-input,.uk-tile-primary:not(.uk-preserve-color) .uk-search-large .uk-search-input,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-large .uk-search-input{background-color:transparent}.uk-card-primary.uk-card-body .uk-search-toggle,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-toggle,.uk-card-secondary.uk-card-body .uk-search-toggle,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-toggle,.uk-light .uk-search-toggle,.uk-offcanvas-bar .uk-search-toggle,.uk-overlay-primary .uk-search-toggle,.uk-section-primary:not(.uk-preserve-color) .uk-search-toggle,.uk-section-secondary:not(.uk-preserve-color) .uk-search-toggle,.uk-tile-primary:not(.uk-preserve-color) .uk-search-toggle,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-toggle{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-search-toggle:focus,.uk-card-primary.uk-card-body .uk-search-toggle:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-toggle:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-toggle:hover,.uk-card-secondary.uk-card-body .uk-search-toggle:focus,.uk-card-secondary.uk-card-body .uk-search-toggle:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-toggle:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-toggle:hover,.uk-light .uk-search-toggle:focus,.uk-light .uk-search-toggle:hover,.uk-offcanvas-bar .uk-search-toggle:focus,.uk-offcanvas-bar .uk-search-toggle:hover,.uk-overlay-primary .uk-search-toggle:focus,.uk-overlay-primary .uk-search-toggle:hover,.uk-section-primary:not(.uk-preserve-color) .uk-search-toggle:focus,.uk-section-primary:not(.uk-preserve-color) .uk-search-toggle:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-search-toggle:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-search-toggle:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-search-toggle:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-search-toggle:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-toggle:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-toggle:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-nav-parent-icon>.uk-parent>a::after,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-parent-icon>.uk-parent>a::after,.uk-card-secondary.uk-card-body .uk-nav-parent-icon>.uk-parent>a::after,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-parent-icon>.uk-parent>a::after,.uk-light .uk-nav-parent-icon>.uk-parent>a::after,.uk-offcanvas-bar .uk-nav-parent-icon>.uk-parent>a::after,.uk-overlay-primary .uk-nav-parent-icon>.uk-parent>a::after,.uk-section-primary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent>a::after,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent>a::after,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent>a::after,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent>a::after{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20stroke-width%3D%221.1%22%20points%3D%2210%201%204%207%2010%2013%22%20%2F%3E%0A%3C%2Fsvg%3E\")}.uk-card-primary.uk-card-body .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-card-secondary.uk-card-body .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-light .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-offcanvas-bar .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-overlay-primary .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-section-primary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent.uk-open>a::after{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20stroke-width%3D%221.1%22%20points%3D%221%204%207%2010%2013%204%22%20%2F%3E%0A%3C%2Fsvg%3E\")}.uk-card-primary.uk-card-body .uk-nav-default>li>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default>li>a,.uk-card-secondary.uk-card-body .uk-nav-default>li>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default>li>a,.uk-light .uk-nav-default>li>a,.uk-offcanvas-bar .uk-nav-default>li>a,.uk-overlay-primary .uk-nav-default>li>a,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default>li>a,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default>li>a,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default>li>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default>li>a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-nav-default>li>a:focus,.uk-card-primary.uk-card-body .uk-nav-default>li>a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default>li>a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default>li>a:hover,.uk-card-secondary.uk-card-body .uk-nav-default>li>a:focus,.uk-card-secondary.uk-card-body .uk-nav-default>li>a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default>li>a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default>li>a:hover,.uk-light .uk-nav-default>li>a:focus,.uk-light .uk-nav-default>li>a:hover,.uk-offcanvas-bar .uk-nav-default>li>a:focus,.uk-offcanvas-bar .uk-nav-default>li>a:hover,.uk-overlay-primary .uk-nav-default>li>a:focus,.uk-overlay-primary .uk-nav-default>li>a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default>li>a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default>li>a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default>li>a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default>li>a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default>li>a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default>li>a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default>li>a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default>li>a:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-nav-default>li.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default>li.uk-active>a,.uk-card-secondary.uk-card-body .uk-nav-default>li.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default>li.uk-active>a,.uk-light .uk-nav-default>li.uk-active>a,.uk-offcanvas-bar .uk-nav-default>li.uk-active>a,.uk-overlay-primary .uk-nav-default>li.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default>li.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default>li.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default>li.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default>li.uk-active>a{color:#fff}.uk-card-primary.uk-card-body .uk-nav-default .uk-nav-header,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-header,.uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-header,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-header,.uk-light .uk-nav-default .uk-nav-header,.uk-offcanvas-bar .uk-nav-default .uk-nav-header,.uk-overlay-primary .uk-nav-default .uk-nav-header,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header{color:#fff}.uk-card-primary.uk-card-body .uk-nav-default .uk-nav-divider,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-divider,.uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-divider,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-divider,.uk-light .uk-nav-default .uk-nav-divider,.uk-offcanvas-bar .uk-nav-default .uk-nav-divider,.uk-overlay-primary .uk-nav-default .uk-nav-divider,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider{border-top-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-nav-default .uk-nav-sub a,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a,.uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-sub a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a,.uk-light .uk-nav-default .uk-nav-sub a,.uk-offcanvas-bar .uk-nav-default .uk-nav-sub a,.uk-overlay-primary .uk-nav-default .uk-nav-sub a,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-nav-default .uk-nav-sub a:focus,.uk-card-primary.uk-card-body .uk-nav-default .uk-nav-sub a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a:hover,.uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-sub a:focus,.uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-sub a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a:hover,.uk-light .uk-nav-default .uk-nav-sub a:focus,.uk-light .uk-nav-default .uk-nav-sub a:hover,.uk-offcanvas-bar .uk-nav-default .uk-nav-sub a:focus,.uk-offcanvas-bar .uk-nav-default .uk-nav-sub a:hover,.uk-overlay-primary .uk-nav-default .uk-nav-sub a:focus,.uk-overlay-primary .uk-nav-default .uk-nav-sub a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-nav-default .uk-nav-sub li.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub li.uk-active>a,.uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-sub li.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub li.uk-active>a,.uk-light .uk-nav-default .uk-nav-sub li.uk-active>a,.uk-offcanvas-bar .uk-nav-default .uk-nav-sub li.uk-active>a,.uk-overlay-primary .uk-nav-default .uk-nav-sub li.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub li.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub li.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub li.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub li.uk-active>a{color:#fff}.uk-card-primary.uk-card-body .uk-nav-primary>li>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary>li>a,.uk-card-secondary.uk-card-body .uk-nav-primary>li>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary>li>a,.uk-light .uk-nav-primary>li>a,.uk-offcanvas-bar .uk-nav-primary>li>a,.uk-overlay-primary .uk-nav-primary>li>a,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary>li>a,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary>li>a,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary>li>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary>li>a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-nav-primary>li>a:focus,.uk-card-primary.uk-card-body .uk-nav-primary>li>a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary>li>a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary>li>a:hover,.uk-card-secondary.uk-card-body .uk-nav-primary>li>a:focus,.uk-card-secondary.uk-card-body .uk-nav-primary>li>a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary>li>a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary>li>a:hover,.uk-light .uk-nav-primary>li>a:focus,.uk-light .uk-nav-primary>li>a:hover,.uk-offcanvas-bar .uk-nav-primary>li>a:focus,.uk-offcanvas-bar .uk-nav-primary>li>a:hover,.uk-overlay-primary .uk-nav-primary>li>a:focus,.uk-overlay-primary .uk-nav-primary>li>a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary>li>a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary>li>a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary>li>a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary>li>a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary>li>a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary>li>a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary>li>a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary>li>a:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-nav-primary>li.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary>li.uk-active>a,.uk-card-secondary.uk-card-body .uk-nav-primary>li.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary>li.uk-active>a,.uk-light .uk-nav-primary>li.uk-active>a,.uk-offcanvas-bar .uk-nav-primary>li.uk-active>a,.uk-overlay-primary .uk-nav-primary>li.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary>li.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary>li.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary>li.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary>li.uk-active>a{color:#fff}.uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-header,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-header,.uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-header,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-header,.uk-light .uk-nav-primary .uk-nav-header,.uk-offcanvas-bar .uk-nav-primary .uk-nav-header,.uk-overlay-primary .uk-nav-primary .uk-nav-header,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header{color:#fff}.uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-divider,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-divider,.uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-divider,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-divider,.uk-light .uk-nav-primary .uk-nav-divider,.uk-offcanvas-bar .uk-nav-primary .uk-nav-divider,.uk-overlay-primary .uk-nav-primary .uk-nav-divider,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider{border-top-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-sub a,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a,.uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-sub a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a,.uk-light .uk-nav-primary .uk-nav-sub a,.uk-offcanvas-bar .uk-nav-primary .uk-nav-sub a,.uk-overlay-primary .uk-nav-primary .uk-nav-sub a,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-sub a:focus,.uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-sub a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a:hover,.uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-sub a:focus,.uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-sub a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a:hover,.uk-light .uk-nav-primary .uk-nav-sub a:focus,.uk-light .uk-nav-primary .uk-nav-sub a:hover,.uk-offcanvas-bar .uk-nav-primary .uk-nav-sub a:focus,.uk-offcanvas-bar .uk-nav-primary .uk-nav-sub a:hover,.uk-overlay-primary .uk-nav-primary .uk-nav-sub a:focus,.uk-overlay-primary .uk-nav-primary .uk-nav-sub a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-sub li.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub li.uk-active>a,.uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-sub li.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub li.uk-active>a,.uk-light .uk-nav-primary .uk-nav-sub li.uk-active>a,.uk-offcanvas-bar .uk-nav-primary .uk-nav-sub li.uk-active>a,.uk-overlay-primary .uk-nav-primary .uk-nav-sub li.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub li.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub li.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub li.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub li.uk-active>a{color:#fff}.uk-card-primary.uk-card-body .uk-navbar-nav>li>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a,.uk-card-secondary.uk-card-body .uk-navbar-nav>li>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a,.uk-light .uk-navbar-nav>li>a,.uk-offcanvas-bar .uk-navbar-nav>li>a,.uk-overlay-primary .uk-navbar-nav>li>a,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-navbar-nav>li:hover>a,.uk-card-primary.uk-card-body .uk-navbar-nav>li>a.uk-open,.uk-card-primary.uk-card-body .uk-navbar-nav>li>a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-nav>li:hover>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a.uk-open,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a:focus,.uk-card-secondary.uk-card-body .uk-navbar-nav>li:hover>a,.uk-card-secondary.uk-card-body .uk-navbar-nav>li>a.uk-open,.uk-card-secondary.uk-card-body .uk-navbar-nav>li>a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-nav>li:hover>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a.uk-open,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a:focus,.uk-light .uk-navbar-nav>li:hover>a,.uk-light .uk-navbar-nav>li>a.uk-open,.uk-light .uk-navbar-nav>li>a:focus,.uk-offcanvas-bar .uk-navbar-nav>li:hover>a,.uk-offcanvas-bar .uk-navbar-nav>li>a.uk-open,.uk-offcanvas-bar .uk-navbar-nav>li>a:focus,.uk-overlay-primary .uk-navbar-nav>li:hover>a,.uk-overlay-primary .uk-navbar-nav>li>a.uk-open,.uk-overlay-primary .uk-navbar-nav>li>a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav>li:hover>a,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a.uk-open,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav>li:hover>a,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a.uk-open,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav>li:hover>a,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a.uk-open,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav>li:hover>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a.uk-open,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a:focus{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-navbar-nav>li>a:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a:active,.uk-card-secondary.uk-card-body .uk-navbar-nav>li>a:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a:active,.uk-light .uk-navbar-nav>li>a:active,.uk-offcanvas-bar .uk-navbar-nav>li>a:active,.uk-overlay-primary .uk-navbar-nav>li>a:active,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a:active,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a:active,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a:active{color:#fff}.uk-card-primary.uk-card-body .uk-navbar-nav>li.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-nav>li.uk-active>a,.uk-card-secondary.uk-card-body .uk-navbar-nav>li.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-nav>li.uk-active>a,.uk-light .uk-navbar-nav>li.uk-active>a,.uk-offcanvas-bar .uk-navbar-nav>li.uk-active>a,.uk-overlay-primary .uk-navbar-nav>li.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav>li.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav>li.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav>li.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav>li.uk-active>a{color:#fff}.uk-card-primary.uk-card-body .uk-navbar-item,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-item,.uk-card-secondary.uk-card-body .uk-navbar-item,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-item,.uk-light .uk-navbar-item,.uk-offcanvas-bar .uk-navbar-item,.uk-overlay-primary .uk-navbar-item,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-item,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-item,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-item,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-item{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-navbar-toggle,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-toggle,.uk-card-secondary.uk-card-body .uk-navbar-toggle,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-toggle,.uk-light .uk-navbar-toggle,.uk-offcanvas-bar .uk-navbar-toggle,.uk-overlay-primary .uk-navbar-toggle,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-navbar-toggle.uk-open,.uk-card-primary.uk-card-body .uk-navbar-toggle:focus,.uk-card-primary.uk-card-body .uk-navbar-toggle:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-toggle.uk-open,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-toggle:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-toggle:hover,.uk-card-secondary.uk-card-body .uk-navbar-toggle.uk-open,.uk-card-secondary.uk-card-body .uk-navbar-toggle:focus,.uk-card-secondary.uk-card-body .uk-navbar-toggle:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-toggle.uk-open,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-toggle:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-toggle:hover,.uk-light .uk-navbar-toggle.uk-open,.uk-light .uk-navbar-toggle:focus,.uk-light .uk-navbar-toggle:hover,.uk-offcanvas-bar .uk-navbar-toggle.uk-open,.uk-offcanvas-bar .uk-navbar-toggle:focus,.uk-offcanvas-bar .uk-navbar-toggle:hover,.uk-overlay-primary .uk-navbar-toggle.uk-open,.uk-overlay-primary .uk-navbar-toggle:focus,.uk-overlay-primary .uk-navbar-toggle:hover,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle:focus,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-subnav>*>:first-child,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav>*>:first-child,.uk-card-secondary.uk-card-body .uk-subnav>*>:first-child,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav>*>:first-child,.uk-light .uk-subnav>*>:first-child,.uk-offcanvas-bar .uk-subnav>*>:first-child,.uk-overlay-primary .uk-subnav>*>:first-child,.uk-section-primary:not(.uk-preserve-color) .uk-subnav>*>:first-child,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav>*>:first-child,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav>*>:first-child,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav>*>:first-child{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-subnav>*>a:focus,.uk-card-primary.uk-card-body .uk-subnav>*>a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav>*>a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav>*>a:hover,.uk-card-secondary.uk-card-body .uk-subnav>*>a:focus,.uk-card-secondary.uk-card-body .uk-subnav>*>a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav>*>a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav>*>a:hover,.uk-light .uk-subnav>*>a:focus,.uk-light .uk-subnav>*>a:hover,.uk-offcanvas-bar .uk-subnav>*>a:focus,.uk-offcanvas-bar .uk-subnav>*>a:hover,.uk-overlay-primary .uk-subnav>*>a:focus,.uk-overlay-primary .uk-subnav>*>a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-subnav>*>a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-subnav>*>a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav>*>a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav>*>a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav>*>a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav>*>a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav>*>a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav>*>a:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-subnav>.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav>.uk-active>a,.uk-card-secondary.uk-card-body .uk-subnav>.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav>.uk-active>a,.uk-light .uk-subnav>.uk-active>a,.uk-offcanvas-bar .uk-subnav>.uk-active>a,.uk-overlay-primary .uk-subnav>.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-subnav>.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav>.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav>.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav>.uk-active>a{color:#fff}.uk-card-primary.uk-card-body .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-card-secondary.uk-card-body .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-light .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-offcanvas-bar .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-overlay-primary .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-section-primary:not(.uk-preserve-color) .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before{border-left-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-subnav-pill>*>:first-child,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav-pill>*>:first-child,.uk-card-secondary.uk-card-body .uk-subnav-pill>*>:first-child,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav-pill>*>:first-child,.uk-light .uk-subnav-pill>*>:first-child,.uk-offcanvas-bar .uk-subnav-pill>*>:first-child,.uk-overlay-primary .uk-subnav-pill>*>:first-child,.uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill>*>:first-child,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>:first-child,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill>*>:first-child,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>:first-child{background-color:transparent;color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-subnav-pill>*>a:focus,.uk-card-primary.uk-card-body .uk-subnav-pill>*>a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav-pill>*>a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav-pill>*>a:hover,.uk-card-secondary.uk-card-body .uk-subnav-pill>*>a:focus,.uk-card-secondary.uk-card-body .uk-subnav-pill>*>a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav-pill>*>a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav-pill>*>a:hover,.uk-light .uk-subnav-pill>*>a:focus,.uk-light .uk-subnav-pill>*>a:hover,.uk-offcanvas-bar .uk-subnav-pill>*>a:focus,.uk-offcanvas-bar .uk-subnav-pill>*>a:hover,.uk-overlay-primary .uk-subnav-pill>*>a:focus,.uk-overlay-primary .uk-subnav-pill>*>a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill>*>a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill>*>a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill>*>a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill>*>a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>a:hover{background-color:rgba(255,255,255,.1);color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-subnav-pill>*>a:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav-pill>*>a:active,.uk-card-secondary.uk-card-body .uk-subnav-pill>*>a:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav-pill>*>a:active,.uk-light .uk-subnav-pill>*>a:active,.uk-offcanvas-bar .uk-subnav-pill>*>a:active,.uk-overlay-primary .uk-subnav-pill>*>a:active,.uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill>*>a:active,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>a:active,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill>*>a:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>a:active{background-color:rgba(255,255,255,.1);color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-subnav-pill>.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav-pill>.uk-active>a,.uk-card-secondary.uk-card-body .uk-subnav-pill>.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav-pill>.uk-active>a,.uk-light .uk-subnav-pill>.uk-active>a,.uk-offcanvas-bar .uk-subnav-pill>.uk-active>a,.uk-overlay-primary .uk-subnav-pill>.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill>.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill>.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill>.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill>.uk-active>a{background-color:#fff;color:#666}.uk-card-primary.uk-card-body .uk-subnav>.uk-disabled>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav>.uk-disabled>a,.uk-card-secondary.uk-card-body .uk-subnav>.uk-disabled>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav>.uk-disabled>a,.uk-light .uk-subnav>.uk-disabled>a,.uk-offcanvas-bar .uk-subnav>.uk-disabled>a,.uk-overlay-primary .uk-subnav>.uk-disabled>a,.uk-section-primary:not(.uk-preserve-color) .uk-subnav>.uk-disabled>a,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav>.uk-disabled>a,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav>.uk-disabled>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav>.uk-disabled>a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-breadcrumb>*>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-breadcrumb>*>*,.uk-card-secondary.uk-card-body .uk-breadcrumb>*>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-breadcrumb>*>*,.uk-light .uk-breadcrumb>*>*,.uk-offcanvas-bar .uk-breadcrumb>*>*,.uk-overlay-primary .uk-breadcrumb>*>*,.uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb>*>*,.uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb>*>*,.uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb>*>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb>*>*{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-breadcrumb>*>:focus,.uk-card-primary.uk-card-body .uk-breadcrumb>*>:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-breadcrumb>*>:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-breadcrumb>*>:hover,.uk-card-secondary.uk-card-body .uk-breadcrumb>*>:focus,.uk-card-secondary.uk-card-body .uk-breadcrumb>*>:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-breadcrumb>*>:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-breadcrumb>*>:hover,.uk-light .uk-breadcrumb>*>:focus,.uk-light .uk-breadcrumb>*>:hover,.uk-offcanvas-bar .uk-breadcrumb>*>:focus,.uk-offcanvas-bar .uk-breadcrumb>*>:hover,.uk-overlay-primary .uk-breadcrumb>*>:focus,.uk-overlay-primary .uk-breadcrumb>*>:hover,.uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb>*>:focus,.uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb>*>:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb>*>:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb>*>:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb>*>:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb>*>:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb>*>:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb>*>:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-breadcrumb>:last-child>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-breadcrumb>:last-child>*,.uk-card-secondary.uk-card-body .uk-breadcrumb>:last-child>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-breadcrumb>:last-child>*,.uk-light .uk-breadcrumb>:last-child>*,.uk-offcanvas-bar .uk-breadcrumb>:last-child>*,.uk-overlay-primary .uk-breadcrumb>:last-child>*,.uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb>:last-child>*,.uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb>:last-child>*,.uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb>:last-child>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb>:last-child>*{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-card-secondary.uk-card-body .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-light .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-offcanvas-bar .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-overlay-primary .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-pagination>*>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-pagination>*>*,.uk-card-secondary.uk-card-body .uk-pagination>*>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-pagination>*>*,.uk-light .uk-pagination>*>*,.uk-offcanvas-bar .uk-pagination>*>*,.uk-overlay-primary .uk-pagination>*>*,.uk-section-primary:not(.uk-preserve-color) .uk-pagination>*>*,.uk-section-secondary:not(.uk-preserve-color) .uk-pagination>*>*,.uk-tile-primary:not(.uk-preserve-color) .uk-pagination>*>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-pagination>*>*{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-pagination>*>:focus,.uk-card-primary.uk-card-body .uk-pagination>*>:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-pagination>*>:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-pagination>*>:hover,.uk-card-secondary.uk-card-body .uk-pagination>*>:focus,.uk-card-secondary.uk-card-body .uk-pagination>*>:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-pagination>*>:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-pagination>*>:hover,.uk-light .uk-pagination>*>:focus,.uk-light .uk-pagination>*>:hover,.uk-offcanvas-bar .uk-pagination>*>:focus,.uk-offcanvas-bar .uk-pagination>*>:hover,.uk-overlay-primary .uk-pagination>*>:focus,.uk-overlay-primary .uk-pagination>*>:hover,.uk-section-primary:not(.uk-preserve-color) .uk-pagination>*>:focus,.uk-section-primary:not(.uk-preserve-color) .uk-pagination>*>:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-pagination>*>:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-pagination>*>:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-pagination>*>:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-pagination>*>:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-pagination>*>:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-pagination>*>:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-pagination>.uk-active>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-pagination>.uk-active>*,.uk-card-secondary.uk-card-body .uk-pagination>.uk-active>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-pagination>.uk-active>*,.uk-light .uk-pagination>.uk-active>*,.uk-offcanvas-bar .uk-pagination>.uk-active>*,.uk-overlay-primary .uk-pagination>.uk-active>*,.uk-section-primary:not(.uk-preserve-color) .uk-pagination>.uk-active>*,.uk-section-secondary:not(.uk-preserve-color) .uk-pagination>.uk-active>*,.uk-tile-primary:not(.uk-preserve-color) .uk-pagination>.uk-active>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-pagination>.uk-active>*{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-pagination>.uk-disabled>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-pagination>.uk-disabled>*,.uk-card-secondary.uk-card-body .uk-pagination>.uk-disabled>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-pagination>.uk-disabled>*,.uk-light .uk-pagination>.uk-disabled>*,.uk-offcanvas-bar .uk-pagination>.uk-disabled>*,.uk-overlay-primary .uk-pagination>.uk-disabled>*,.uk-section-primary:not(.uk-preserve-color) .uk-pagination>.uk-disabled>*,.uk-section-secondary:not(.uk-preserve-color) .uk-pagination>.uk-disabled>*,.uk-tile-primary:not(.uk-preserve-color) .uk-pagination>.uk-disabled>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-pagination>.uk-disabled>*{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-tab::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-tab::before,.uk-card-secondary.uk-card-body .uk-tab::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-tab::before,.uk-light .uk-tab::before,.uk-offcanvas-bar .uk-tab::before,.uk-overlay-primary .uk-tab::before,.uk-section-primary:not(.uk-preserve-color) .uk-tab::before,.uk-section-secondary:not(.uk-preserve-color) .uk-tab::before,.uk-tile-primary:not(.uk-preserve-color) .uk-tab::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-tab::before{border-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-tab>*>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-tab>*>a,.uk-card-secondary.uk-card-body .uk-tab>*>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-tab>*>a,.uk-light .uk-tab>*>a,.uk-offcanvas-bar .uk-tab>*>a,.uk-overlay-primary .uk-tab>*>a,.uk-section-primary:not(.uk-preserve-color) .uk-tab>*>a,.uk-section-secondary:not(.uk-preserve-color) .uk-tab>*>a,.uk-tile-primary:not(.uk-preserve-color) .uk-tab>*>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-tab>*>a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-tab>*>a:focus,.uk-card-primary.uk-card-body .uk-tab>*>a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-tab>*>a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-tab>*>a:hover,.uk-card-secondary.uk-card-body .uk-tab>*>a:focus,.uk-card-secondary.uk-card-body .uk-tab>*>a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-tab>*>a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-tab>*>a:hover,.uk-light .uk-tab>*>a:focus,.uk-light .uk-tab>*>a:hover,.uk-offcanvas-bar .uk-tab>*>a:focus,.uk-offcanvas-bar .uk-tab>*>a:hover,.uk-overlay-primary .uk-tab>*>a:focus,.uk-overlay-primary .uk-tab>*>a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-tab>*>a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-tab>*>a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-tab>*>a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-tab>*>a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-tab>*>a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-tab>*>a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-tab>*>a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-tab>*>a:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-tab>.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-tab>.uk-active>a,.uk-card-secondary.uk-card-body .uk-tab>.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-tab>.uk-active>a,.uk-light .uk-tab>.uk-active>a,.uk-offcanvas-bar .uk-tab>.uk-active>a,.uk-overlay-primary .uk-tab>.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-tab>.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-tab>.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-tab>.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-tab>.uk-active>a{color:#fff;border-color:#fff}.uk-card-primary.uk-card-body .uk-tab>.uk-disabled>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-tab>.uk-disabled>a,.uk-card-secondary.uk-card-body .uk-tab>.uk-disabled>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-tab>.uk-disabled>a,.uk-light .uk-tab>.uk-disabled>a,.uk-offcanvas-bar .uk-tab>.uk-disabled>a,.uk-overlay-primary .uk-tab>.uk-disabled>a,.uk-section-primary:not(.uk-preserve-color) .uk-tab>.uk-disabled>a,.uk-section-secondary:not(.uk-preserve-color) .uk-tab>.uk-disabled>a,.uk-tile-primary:not(.uk-preserve-color) .uk-tab>.uk-disabled>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-tab>.uk-disabled>a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-slidenav,.uk-card-primary>:not([class*=uk-card-media]) .uk-slidenav,.uk-card-secondary.uk-card-body .uk-slidenav,.uk-card-secondary>:not([class*=uk-card-media]) .uk-slidenav,.uk-light .uk-slidenav,.uk-offcanvas-bar .uk-slidenav,.uk-overlay-primary .uk-slidenav,.uk-section-primary:not(.uk-preserve-color) .uk-slidenav,.uk-section-secondary:not(.uk-preserve-color) .uk-slidenav,.uk-tile-primary:not(.uk-preserve-color) .uk-slidenav,.uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-slidenav:focus,.uk-card-primary.uk-card-body .uk-slidenav:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-slidenav:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-slidenav:hover,.uk-card-secondary.uk-card-body .uk-slidenav:focus,.uk-card-secondary.uk-card-body .uk-slidenav:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-slidenav:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-slidenav:hover,.uk-light .uk-slidenav:focus,.uk-light .uk-slidenav:hover,.uk-offcanvas-bar .uk-slidenav:focus,.uk-offcanvas-bar .uk-slidenav:hover,.uk-overlay-primary .uk-slidenav:focus,.uk-overlay-primary .uk-slidenav:hover,.uk-section-primary:not(.uk-preserve-color) .uk-slidenav:focus,.uk-section-primary:not(.uk-preserve-color) .uk-slidenav:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-slidenav:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-slidenav:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-slidenav:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-slidenav:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav:hover{color:rgba(255,255,255,.95)}.uk-card-primary.uk-card-body .uk-slidenav:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-slidenav:active,.uk-card-secondary.uk-card-body .uk-slidenav:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-slidenav:active,.uk-light .uk-slidenav:active,.uk-offcanvas-bar .uk-slidenav:active,.uk-overlay-primary .uk-slidenav:active,.uk-section-primary:not(.uk-preserve-color) .uk-slidenav:active,.uk-section-secondary:not(.uk-preserve-color) .uk-slidenav:active,.uk-tile-primary:not(.uk-preserve-color) .uk-slidenav:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav:active{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-dotnav>*>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-dotnav>*>*,.uk-card-secondary.uk-card-body .uk-dotnav>*>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-dotnav>*>*,.uk-light .uk-dotnav>*>*,.uk-offcanvas-bar .uk-dotnav>*>*,.uk-overlay-primary .uk-dotnav>*>*,.uk-section-primary:not(.uk-preserve-color) .uk-dotnav>*>*,.uk-section-secondary:not(.uk-preserve-color) .uk-dotnav>*>*,.uk-tile-primary:not(.uk-preserve-color) .uk-dotnav>*>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav>*>*{background-color:transparent;border-color:rgba(255,255,255,.9)}.uk-card-primary.uk-card-body .uk-dotnav>*>:focus,.uk-card-primary.uk-card-body .uk-dotnav>*>:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-dotnav>*>:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-dotnav>*>:hover,.uk-card-secondary.uk-card-body .uk-dotnav>*>:focus,.uk-card-secondary.uk-card-body .uk-dotnav>*>:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-dotnav>*>:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-dotnav>*>:hover,.uk-light .uk-dotnav>*>:focus,.uk-light .uk-dotnav>*>:hover,.uk-offcanvas-bar .uk-dotnav>*>:focus,.uk-offcanvas-bar .uk-dotnav>*>:hover,.uk-overlay-primary .uk-dotnav>*>:focus,.uk-overlay-primary .uk-dotnav>*>:hover,.uk-section-primary:not(.uk-preserve-color) .uk-dotnav>*>:focus,.uk-section-primary:not(.uk-preserve-color) .uk-dotnav>*>:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-dotnav>*>:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-dotnav>*>:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-dotnav>*>:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-dotnav>*>:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav>*>:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav>*>:hover{background-color:rgba(255,255,255,.9);border-color:transparent}.uk-card-primary.uk-card-body .uk-dotnav>*>:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-dotnav>*>:active,.uk-card-secondary.uk-card-body .uk-dotnav>*>:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-dotnav>*>:active,.uk-light .uk-dotnav>*>:active,.uk-offcanvas-bar .uk-dotnav>*>:active,.uk-overlay-primary .uk-dotnav>*>:active,.uk-section-primary:not(.uk-preserve-color) .uk-dotnav>*>:active,.uk-section-secondary:not(.uk-preserve-color) .uk-dotnav>*>:active,.uk-tile-primary:not(.uk-preserve-color) .uk-dotnav>*>:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav>*>:active{background-color:rgba(255,255,255,.5);border-color:transparent}.uk-card-primary.uk-card-body .uk-dotnav>.uk-active>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-dotnav>.uk-active>*,.uk-card-secondary.uk-card-body .uk-dotnav>.uk-active>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-dotnav>.uk-active>*,.uk-light .uk-dotnav>.uk-active>*,.uk-offcanvas-bar .uk-dotnav>.uk-active>*,.uk-overlay-primary .uk-dotnav>.uk-active>*,.uk-section-primary:not(.uk-preserve-color) .uk-dotnav>.uk-active>*,.uk-section-secondary:not(.uk-preserve-color) .uk-dotnav>.uk-active>*,.uk-tile-primary:not(.uk-preserve-color) .uk-dotnav>.uk-active>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav>.uk-active>*{background-color:rgba(255,255,255,.9);border-color:transparent}.uk-card-primary.uk-card-body .uk-accordion-title,.uk-card-primary>:not([class*=uk-card-media]) .uk-accordion-title,.uk-card-secondary.uk-card-body .uk-accordion-title,.uk-card-secondary>:not([class*=uk-card-media]) .uk-accordion-title,.uk-light .uk-accordion-title,.uk-offcanvas-bar .uk-accordion-title,.uk-overlay-primary .uk-accordion-title,.uk-section-primary:not(.uk-preserve-color) .uk-accordion-title,.uk-section-secondary:not(.uk-preserve-color) .uk-accordion-title,.uk-tile-primary:not(.uk-preserve-color) .uk-accordion-title,.uk-tile-secondary:not(.uk-preserve-color) .uk-accordion-title{color:#fff}.uk-card-primary.uk-card-body .uk-accordion-title:focus,.uk-card-primary.uk-card-body .uk-accordion-title:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-accordion-title:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-accordion-title:hover,.uk-card-secondary.uk-card-body .uk-accordion-title:focus,.uk-card-secondary.uk-card-body .uk-accordion-title:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-accordion-title:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-accordion-title:hover,.uk-light .uk-accordion-title:focus,.uk-light .uk-accordion-title:hover,.uk-offcanvas-bar .uk-accordion-title:focus,.uk-offcanvas-bar .uk-accordion-title:hover,.uk-overlay-primary .uk-accordion-title:focus,.uk-overlay-primary .uk-accordion-title:hover,.uk-section-primary:not(.uk-preserve-color) .uk-accordion-title:focus,.uk-section-primary:not(.uk-preserve-color) .uk-accordion-title:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-accordion-title:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-accordion-title:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-accordion-title:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-accordion-title:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-accordion-title:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-accordion-title:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-iconnav>*>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-iconnav>*>a,.uk-card-secondary.uk-card-body .uk-iconnav>*>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-iconnav>*>a,.uk-light .uk-iconnav>*>a,.uk-offcanvas-bar .uk-iconnav>*>a,.uk-overlay-primary .uk-iconnav>*>a,.uk-section-primary:not(.uk-preserve-color) .uk-iconnav>*>a,.uk-section-secondary:not(.uk-preserve-color) .uk-iconnav>*>a,.uk-tile-primary:not(.uk-preserve-color) .uk-iconnav>*>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav>*>a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-iconnav>*>a:focus,.uk-card-primary.uk-card-body .uk-iconnav>*>a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-iconnav>*>a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-iconnav>*>a:hover,.uk-card-secondary.uk-card-body .uk-iconnav>*>a:focus,.uk-card-secondary.uk-card-body .uk-iconnav>*>a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-iconnav>*>a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-iconnav>*>a:hover,.uk-light .uk-iconnav>*>a:focus,.uk-light .uk-iconnav>*>a:hover,.uk-offcanvas-bar .uk-iconnav>*>a:focus,.uk-offcanvas-bar .uk-iconnav>*>a:hover,.uk-overlay-primary .uk-iconnav>*>a:focus,.uk-overlay-primary .uk-iconnav>*>a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-iconnav>*>a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-iconnav>*>a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-iconnav>*>a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-iconnav>*>a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-iconnav>*>a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-iconnav>*>a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav>*>a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav>*>a:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-iconnav>.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-iconnav>.uk-active>a,.uk-card-secondary.uk-card-body .uk-iconnav>.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-iconnav>.uk-active>a,.uk-light .uk-iconnav>.uk-active>a,.uk-offcanvas-bar .uk-iconnav>.uk-active>a,.uk-overlay-primary .uk-iconnav>.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-iconnav>.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-iconnav>.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-iconnav>.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav>.uk-active>a{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-text-lead,.uk-card-primary>:not([class*=uk-card-media]) .uk-text-lead,.uk-card-secondary.uk-card-body .uk-text-lead,.uk-card-secondary>:not([class*=uk-card-media]) .uk-text-lead,.uk-light .uk-text-lead,.uk-offcanvas-bar .uk-text-lead,.uk-overlay-primary .uk-text-lead,.uk-section-primary:not(.uk-preserve-color) .uk-text-lead,.uk-section-secondary:not(.uk-preserve-color) .uk-text-lead,.uk-tile-primary:not(.uk-preserve-color) .uk-text-lead,.uk-tile-secondary:not(.uk-preserve-color) .uk-text-lead{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-text-meta,.uk-card-primary>:not([class*=uk-card-media]) .uk-text-meta,.uk-card-secondary.uk-card-body .uk-text-meta,.uk-card-secondary>:not([class*=uk-card-media]) .uk-text-meta,.uk-light .uk-text-meta,.uk-offcanvas-bar .uk-text-meta,.uk-overlay-primary .uk-text-meta,.uk-section-primary:not(.uk-preserve-color) .uk-text-meta,.uk-section-secondary:not(.uk-preserve-color) .uk-text-meta,.uk-tile-primary:not(.uk-preserve-color) .uk-text-meta,.uk-tile-secondary:not(.uk-preserve-color) .uk-text-meta{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-text-muted,.uk-card-primary>:not([class*=uk-card-media]) .uk-text-muted,.uk-card-secondary.uk-card-body .uk-text-muted,.uk-card-secondary>:not([class*=uk-card-media]) .uk-text-muted,.uk-light .uk-text-muted,.uk-offcanvas-bar .uk-text-muted,.uk-overlay-primary .uk-text-muted,.uk-section-primary:not(.uk-preserve-color) .uk-text-muted,.uk-section-secondary:not(.uk-preserve-color) .uk-text-muted,.uk-tile-primary:not(.uk-preserve-color) .uk-text-muted,.uk-tile-secondary:not(.uk-preserve-color) .uk-text-muted{color:rgba(255,255,255,.5)!important}.uk-card-primary.uk-card-body .uk-text-emphasis,.uk-card-primary>:not([class*=uk-card-media]) .uk-text-emphasis,.uk-card-secondary.uk-card-body .uk-text-emphasis,.uk-card-secondary>:not([class*=uk-card-media]) .uk-text-emphasis,.uk-light .uk-text-emphasis,.uk-offcanvas-bar .uk-text-emphasis,.uk-overlay-primary .uk-text-emphasis,.uk-section-primary:not(.uk-preserve-color) .uk-text-emphasis,.uk-section-secondary:not(.uk-preserve-color) .uk-text-emphasis,.uk-tile-primary:not(.uk-preserve-color) .uk-text-emphasis,.uk-tile-secondary:not(.uk-preserve-color) .uk-text-emphasis{color:#fff!important}.uk-card-primary.uk-card-body .uk-text-primary,.uk-card-primary>:not([class*=uk-card-media]) .uk-text-primary,.uk-card-secondary.uk-card-body .uk-text-primary,.uk-card-secondary>:not([class*=uk-card-media]) .uk-text-primary,.uk-light .uk-text-primary,.uk-offcanvas-bar .uk-text-primary,.uk-overlay-primary .uk-text-primary,.uk-section-primary:not(.uk-preserve-color) .uk-text-primary,.uk-section-secondary:not(.uk-preserve-color) .uk-text-primary,.uk-tile-primary:not(.uk-preserve-color) .uk-text-primary,.uk-tile-secondary:not(.uk-preserve-color) .uk-text-primary{color:#fff!important}.uk-card-primary.uk-card-body .uk-text-secondary,.uk-card-primary>:not([class*=uk-card-media]) .uk-text-secondary,.uk-card-secondary.uk-card-body .uk-text-secondary,.uk-card-secondary>:not([class*=uk-card-media]) .uk-text-secondary,.uk-light .uk-text-secondary,.uk-offcanvas-bar .uk-text-secondary,.uk-overlay-primary .uk-text-secondary,.uk-section-primary:not(.uk-preserve-color) .uk-text-secondary,.uk-section-secondary:not(.uk-preserve-color) .uk-text-secondary,.uk-tile-primary:not(.uk-preserve-color) .uk-text-secondary,.uk-tile-secondary:not(.uk-preserve-color) .uk-text-secondary{color:#fff!important}.uk-card-primary.uk-card-body .uk-column-divider,.uk-card-primary>:not([class*=uk-card-media]) .uk-column-divider,.uk-card-secondary.uk-card-body .uk-column-divider,.uk-card-secondary>:not([class*=uk-card-media]) .uk-column-divider,.uk-light .uk-column-divider,.uk-offcanvas-bar .uk-column-divider,.uk-overlay-primary .uk-column-divider,.uk-section-primary:not(.uk-preserve-color) .uk-column-divider,.uk-section-secondary:not(.uk-preserve-color) .uk-column-divider,.uk-tile-primary:not(.uk-preserve-color) .uk-column-divider,.uk-tile-secondary:not(.uk-preserve-color) .uk-column-divider{column-rule-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-logo,.uk-card-primary>:not([class*=uk-card-media]) .uk-logo,.uk-card-secondary.uk-card-body .uk-logo,.uk-card-secondary>:not([class*=uk-card-media]) .uk-logo,.uk-light .uk-logo,.uk-offcanvas-bar .uk-logo,.uk-overlay-primary .uk-logo,.uk-section-primary:not(.uk-preserve-color) .uk-logo,.uk-section-secondary:not(.uk-preserve-color) .uk-logo,.uk-tile-primary:not(.uk-preserve-color) .uk-logo,.uk-tile-secondary:not(.uk-preserve-color) .uk-logo{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-logo:focus,.uk-card-primary.uk-card-body .uk-logo:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-logo:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-logo:hover,.uk-card-secondary.uk-card-body .uk-logo:focus,.uk-card-secondary.uk-card-body .uk-logo:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-logo:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-logo:hover,.uk-light .uk-logo:focus,.uk-light .uk-logo:hover,.uk-offcanvas-bar .uk-logo:focus,.uk-offcanvas-bar .uk-logo:hover,.uk-overlay-primary .uk-logo:focus,.uk-overlay-primary .uk-logo:hover,.uk-section-primary:not(.uk-preserve-color) .uk-logo:focus,.uk-section-primary:not(.uk-preserve-color) .uk-logo:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-logo:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-logo:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-logo:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-logo:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-logo:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-logo:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-card-primary>:not([class*=uk-card-media]) .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-card-secondary.uk-card-body .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-card-secondary>:not([class*=uk-card-media]) .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-light .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-offcanvas-bar .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-overlay-primary .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-section-primary:not(.uk-preserve-color) .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-section-secondary:not(.uk-preserve-color) .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-tile-primary:not(.uk-preserve-color) .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-tile-secondary:not(.uk-preserve-color) .uk-logo>:not(.uk-logo-inverse):not(:only-of-type){display:none}.uk-card-primary.uk-card-body .uk-logo-inverse,.uk-card-primary>:not([class*=uk-card-media]) .uk-logo-inverse,.uk-card-secondary.uk-card-body .uk-logo-inverse,.uk-card-secondary>:not([class*=uk-card-media]) .uk-logo-inverse,.uk-light .uk-logo-inverse,.uk-offcanvas-bar .uk-logo-inverse,.uk-overlay-primary .uk-logo-inverse,.uk-section-primary:not(.uk-preserve-color) .uk-logo-inverse,.uk-section-secondary:not(.uk-preserve-color) .uk-logo-inverse,.uk-tile-primary:not(.uk-preserve-color) .uk-logo-inverse,.uk-tile-secondary:not(.uk-preserve-color) .uk-logo-inverse{display:inline}.uk-card-primary.uk-card-body .uk-accordion-title::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-accordion-title::before,.uk-card-secondary.uk-card-body .uk-accordion-title::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-accordion-title::before,.uk-light .uk-accordion-title::before,.uk-offcanvas-bar .uk-accordion-title::before,.uk-overlay-primary .uk-accordion-title::before,.uk-section-primary:not(.uk-preserve-color) .uk-accordion-title::before,.uk-section-secondary:not(.uk-preserve-color) .uk-accordion-title::before,.uk-tile-primary:not(.uk-preserve-color) .uk-accordion-title::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-accordion-title::before{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%20%20%20%20%3Crect%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20width%3D%221%22%20height%3D%2213%22%20x%3D%226%22%20y%3D%220%22%20%2F%3E%0A%3C%2Fsvg%3E\")}.uk-card-primary.uk-card-body .uk-open>.uk-accordion-title::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-open>.uk-accordion-title::before,.uk-card-secondary.uk-card-body .uk-open>.uk-accordion-title::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-open>.uk-accordion-title::before,.uk-light .uk-open>.uk-accordion-title::before,.uk-offcanvas-bar .uk-open>.uk-accordion-title::before,.uk-overlay-primary .uk-open>.uk-accordion-title::before,.uk-section-primary:not(.uk-preserve-color) .uk-open>.uk-accordion-title::before,.uk-section-secondary:not(.uk-preserve-color) .uk-open>.uk-accordion-title::before,.uk-tile-primary:not(.uk-preserve-color) .uk-open>.uk-accordion-title::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-open>.uk-accordion-title::before{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%3C%2Fsvg%3E\")}@media print{*,::after,::before{background:0 0!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}@page{margin:.5cm}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".option-item {\r\n\tpadding: 5px;\r\n}\r\n.option-item:hover{\r\n\tbackground-color: #1e87f0;\r\n\topacity: 0.5;\r\n\tcolor: white;\r\n}", ""]);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {/*! UIkit 3.2.1 | http://www.getuikit.com | (c) 2014 - 2019 YOOtheme | MIT License */

(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('uikit', factory) :
    (global = global || self, global.UIkit = factory());
}(this, function () { 'use strict';

    var objPrototype = Object.prototype;
    var hasOwnProperty = objPrototype.hasOwnProperty;

    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
    }

    var hyphenateCache = {};
    var hyphenateRe = /([a-z\d])([A-Z])/g;

    function hyphenate(str) {

        if (!(str in hyphenateCache)) {
            hyphenateCache[str] = str
                .replace(hyphenateRe, '$1-$2')
                .toLowerCase();
        }

        return hyphenateCache[str];
    }

    var camelizeRe = /-(\w)/g;

    function camelize(str) {
        return str.replace(camelizeRe, toUpper);
    }

    function toUpper(_, c) {
        return c ? c.toUpperCase() : '';
    }

    function ucfirst(str) {
        return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : '';
    }

    var strPrototype = String.prototype;
    var startsWithFn = strPrototype.startsWith || function (search) { return this.lastIndexOf(search, 0) === 0; };

    function startsWith(str, search) {
        return startsWithFn.call(str, search);
    }

    var endsWithFn = strPrototype.endsWith || function (search) { return this.substr(-search.length) === search; };

    function endsWith(str, search) {
        return endsWithFn.call(str, search);
    }

    var arrPrototype = Array.prototype;

    var includesFn = function (search, i) { return ~this.indexOf(search, i); };
    var includesStr = strPrototype.includes || includesFn;
    var includesArray = arrPrototype.includes || includesFn;

    function includes(obj, search) {
        return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
    }

    var findIndexFn = arrPrototype.findIndex || function (predicate) {
        var arguments$1 = arguments;

        for (var i = 0; i < this.length; i++) {
            if (predicate.call(arguments$1[1], this[i], i, this)) {
                return i;
            }
        }
        return -1;
    };

    function findIndex(array, predicate) {
        return findIndexFn.call(array, predicate);
    }

    var isArray = Array.isArray;

    function isFunction(obj) {
        return typeof obj === 'function';
    }

    function isObject(obj) {
        return obj !== null && typeof obj === 'object';
    }

    var toString = objPrototype.toString;
    function isPlainObject(obj) {
        return toString.call(obj) === '[object Object]';
    }

    function isWindow(obj) {
        return isObject(obj) && obj === obj.window;
    }

    function isDocument(obj) {
        return isObject(obj) && obj.nodeType === 9;
    }

    function isJQuery(obj) {
        return isObject(obj) && !!obj.jquery;
    }

    function isNode(obj) {
        return obj instanceof Node || isObject(obj) && obj.nodeType >= 1;
    }

    function isNodeCollection(obj) {
        return toString.call(obj).match(/^\[object (NodeList|HTMLCollection)\]$/);
    }

    function isBoolean(value) {
        return typeof value === 'boolean';
    }

    function isString(value) {
        return typeof value === 'string';
    }

    function isNumber(value) {
        return typeof value === 'number';
    }

    function isNumeric(value) {
        return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
    }

    function isEmpty(obj) {
        return !(isArray(obj)
            ? obj.length
            : isObject(obj)
                ? Object.keys(obj).length
                : false
        );
    }

    function isUndefined(value) {
        return value === void 0;
    }

    function toBoolean(value) {
        return isBoolean(value)
            ? value
            : value === 'true' || value === '1' || value === ''
                ? true
                : value === 'false' || value === '0'
                    ? false
                    : value;
    }

    function toNumber(value) {
        var number = Number(value);
        return !isNaN(number) ? number : false;
    }

    function toFloat(value) {
        return parseFloat(value) || 0;
    }

    function toNode(element) {
        return isNode(element) || isWindow(element) || isDocument(element)
            ? element
            : isNodeCollection(element) || isJQuery(element)
                ? element[0]
                : isArray(element)
                    ? toNode(element[0])
                    : null;
    }

    function toNodes(element) {
        return isNode(element)
            ? [element]
            : isNodeCollection(element)
                ? arrPrototype.slice.call(element)
                : isArray(element)
                    ? element.map(toNode).filter(Boolean)
                    : isJQuery(element)
                        ? element.toArray()
                        : [];
    }

    function toList(value) {
        return isArray(value)
            ? value
            : isString(value)
                ? value.split(/,(?![^(]*\))/).map(function (value) { return isNumeric(value)
                    ? toNumber(value)
                    : toBoolean(value.trim()); })
                : [value];
    }

    function toMs(time) {
        return !time
            ? 0
            : endsWith(time, 'ms')
                ? toFloat(time)
                : toFloat(time) * 1000;
    }

    function isEqual(value, other) {
        return value === other
            || isObject(value)
            && isObject(other)
            && Object.keys(value).length === Object.keys(other).length
            && each(value, function (val, key) { return val === other[key]; });
    }

    function swap(value, a, b) {
        return value.replace(new RegExp((a + "|" + b), 'mg'), function (match) {
            return match === a ? b : a;
        });
    }

    var assign = Object.assign || function (target) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        target = Object(target);
        for (var i = 0; i < args.length; i++) {
            var source = args[i];
            if (source !== null) {
                for (var key in source) {
                    if (hasOwn(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };

    function last(array) {
        return array[array.length - 1];
    }

    function each(obj, cb) {
        for (var key in obj) {
            if (false === cb(obj[key], key)) {
                return false;
            }
        }
        return true;
    }

    function sortBy(array, prop) {
        return array.sort(function (ref, ref$1) {
                var propA = ref[prop]; if ( propA === void 0 ) propA = 0;
                var propB = ref$1[prop]; if ( propB === void 0 ) propB = 0;

                return propA > propB
                ? 1
                : propB > propA
                    ? -1
                    : 0;
        }
        );
    }

    function uniqueBy(array, prop) {
        var seen = new Set();
        return array.filter(function (ref) {
            var check = ref[prop];

            return seen.has(check)
            ? false
            : seen.add(check) || true;
        } // IE 11 does not return the Set object
        );
    }

    function clamp(number, min, max) {
        if ( min === void 0 ) min = 0;
        if ( max === void 0 ) max = 1;

        return Math.min(Math.max(toNumber(number) || 0, min), max);
    }

    function noop() {}

    function intersectRect(r1, r2) {
        return r1.left < r2.right &&
            r1.right > r2.left &&
            r1.top < r2.bottom &&
            r1.bottom > r2.top;
    }

    function pointInRect(point, rect) {
        return point.x <= rect.right &&
            point.x >= rect.left &&
            point.y <= rect.bottom &&
            point.y >= rect.top;
    }

    var Dimensions = {

        ratio: function(dimensions, prop, value) {
            var obj;


            var aProp = prop === 'width' ? 'height' : 'width';

            return ( obj = {}, obj[aProp] = dimensions[prop] ? Math.round(value * dimensions[aProp] / dimensions[prop]) : dimensions[aProp], obj[prop] = value, obj );
        },

        contain: function(dimensions, maxDimensions) {
            var this$1 = this;

            dimensions = assign({}, dimensions);

            each(dimensions, function (_, prop) { return dimensions = dimensions[prop] > maxDimensions[prop]
                ? this$1.ratio(dimensions, prop, maxDimensions[prop])
                : dimensions; }
            );

            return dimensions;
        },

        cover: function(dimensions, maxDimensions) {
            var this$1 = this;

            dimensions = this.contain(dimensions, maxDimensions);

            each(dimensions, function (_, prop) { return dimensions = dimensions[prop] < maxDimensions[prop]
                ? this$1.ratio(dimensions, prop, maxDimensions[prop])
                : dimensions; }
            );

            return dimensions;
        }

    };

    function attr(element, name, value) {

        if (isObject(name)) {
            for (var key in name) {
                attr(element, key, name[key]);
            }
            return;
        }

        if (isUndefined(value)) {
            element = toNode(element);
            return element && element.getAttribute(name);
        } else {
            toNodes(element).forEach(function (element) {

                if (isFunction(value)) {
                    value = value.call(element, attr(element, name));
                }

                if (value === null) {
                    removeAttr(element, name);
                } else {
                    element.setAttribute(name, value);
                }
            });
        }

    }

    function hasAttr(element, name) {
        return toNodes(element).some(function (element) { return element.hasAttribute(name); });
    }

    function removeAttr(element, name) {
        element = toNodes(element);
        name.split(' ').forEach(function (name) { return element.forEach(function (element) { return element.hasAttribute(name) && element.removeAttribute(name); }
            ); }
        );
    }

    function data(element, attribute) {
        for (var i = 0, attrs = [attribute, ("data-" + attribute)]; i < attrs.length; i++) {
            if (hasAttr(element, attrs[i])) {
                return attr(element, attrs[i]);
            }
        }
    }

    /* global DocumentTouch */

    var isIE = /msie|trident/i.test(window.navigator.userAgent);
    var isRtl = attr(document.documentElement, 'dir') === 'rtl';

    var hasTouchEvents = 'ontouchstart' in window;
    var hasPointerEvents = window.PointerEvent;
    var hasTouch = hasTouchEvents
        || window.DocumentTouch && document instanceof DocumentTouch
        || navigator.maxTouchPoints; // IE >=11

    var pointerDown = hasPointerEvents ? 'pointerdown' : hasTouchEvents ? 'touchstart' : 'mousedown';
    var pointerMove = hasPointerEvents ? 'pointermove' : hasTouchEvents ? 'touchmove' : 'mousemove';
    var pointerUp = hasPointerEvents ? 'pointerup' : hasTouchEvents ? 'touchend' : 'mouseup';
    var pointerEnter = hasPointerEvents ? 'pointerenter' : hasTouchEvents ? '' : 'mouseenter';
    var pointerLeave = hasPointerEvents ? 'pointerleave' : hasTouchEvents ? '' : 'mouseleave';
    var pointerCancel = hasPointerEvents ? 'pointercancel' : 'touchcancel';

    function query(selector, context) {
        return toNode(selector) || find(selector, getContext(selector, context));
    }

    function queryAll(selector, context) {
        var nodes = toNodes(selector);
        return nodes.length && nodes || findAll(selector, getContext(selector, context));
    }

    function getContext(selector, context) {
        if ( context === void 0 ) context = document;

        return isContextSelector(selector) || isDocument(context)
            ? context
            : context.ownerDocument;
    }

    function find(selector, context) {
        return toNode(_query(selector, context, 'querySelector'));
    }

    function findAll(selector, context) {
        return toNodes(_query(selector, context, 'querySelectorAll'));
    }

    function _query(selector, context, queryFn) {
        if ( context === void 0 ) context = document;


        if (!selector || !isString(selector)) {
            return null;
        }

        selector = selector.replace(contextSanitizeRe, '$1 *');

        var removes;

        if (isContextSelector(selector)) {

            removes = [];

            selector = splitSelector(selector).map(function (selector, i) {

                var ctx = context;

                if (selector[0] === '!') {

                    var selectors = selector.substr(1).trim().split(' ');
                    ctx = closest(context.parentNode, selectors[0]);
                    selector = selectors.slice(1).join(' ').trim();

                }

                if (selector[0] === '-') {

                    var selectors$1 = selector.substr(1).trim().split(' ');
                    var prev = (ctx || context).previousElementSibling;
                    ctx = matches(prev, selector.substr(1)) ? prev : null;
                    selector = selectors$1.slice(1).join(' ');

                }

                if (!ctx) {
                    return null;
                }

                if (!ctx.id) {
                    ctx.id = "uk-" + (Date.now()) + i;
                    removes.push(function () { return removeAttr(ctx, 'id'); });
                }

                return ("#" + (escape(ctx.id)) + " " + selector);

            }).filter(Boolean).join(',');

            context = document;

        }

        try {

            return context[queryFn](selector);

        } catch (e) {

            return null;

        } finally {

            removes && removes.forEach(function (remove) { return remove(); });

        }

    }

    var contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
    var contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

    function isContextSelector(selector) {
        return isString(selector) && selector.match(contextSelectorRe);
    }

    var selectorRe = /.*?[^\\](?:,|$)/g;

    function splitSelector(selector) {
        return selector.match(selectorRe).map(function (selector) { return selector.replace(/,$/, '').trim(); });
    }

    var elProto = Element.prototype;
    var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector;

    function matches(element, selector) {
        return toNodes(element).some(function (element) { return matchesFn.call(element, selector); });
    }

    var closestFn = elProto.closest || function (selector) {
        var ancestor = this;

        do {

            if (matches(ancestor, selector)) {
                return ancestor;
            }

            ancestor = ancestor.parentNode;

        } while (ancestor && ancestor.nodeType === 1);
    };

    function closest(element, selector) {

        if (startsWith(selector, '>')) {
            selector = selector.slice(1);
        }

        return isNode(element)
            ? closestFn.call(element, selector)
            : toNodes(element).map(function (element) { return closest(element, selector); }).filter(Boolean);
    }

    function parents(element, selector) {
        var elements = [];
        element = toNode(element);

        while ((element = element.parentNode) && element.nodeType === 1) {
            if (matches(element, selector)) {
                elements.push(element);
            }
        }

        return elements;
    }

    var escapeFn = window.CSS && CSS.escape || function (css) { return css.replace(/([^\x7f-\uFFFF\w-])/g, function (match) { return ("\\" + match); }); };
    function escape(css) {
        return isString(css) ? escapeFn.call(null, css) : '';
    }

    var voidElements = {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        menuitem: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
    };
    function isVoidElement(element) {
        return toNodes(element).some(function (element) { return voidElements[element.tagName.toLowerCase()]; });
    }

    function isVisible(element) {
        return toNodes(element).some(function (element) { return element.offsetWidth || element.offsetHeight || element.getClientRects().length; });
    }

    var selInput = 'input,select,textarea,button';
    function isInput(element) {
        return toNodes(element).some(function (element) { return matches(element, selInput); });
    }

    function filter(element, selector) {
        return toNodes(element).filter(function (element) { return matches(element, selector); });
    }

    function within(element, selector) {
        return !isString(selector)
            ? element === selector || (isDocument(selector)
                ? selector.documentElement
                : toNode(selector)).contains(toNode(element)) // IE 11 document does not implement contains
            : matches(element, selector) || closest(element, selector);
    }

    function on() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];


        var ref = getArgs(args);
        var targets = ref[0];
        var type = ref[1];
        var selector = ref[2];
        var listener = ref[3];
        var useCapture = ref[4];

        targets = toEventTargets(targets);

        if (listener.length > 1) {
            listener = detail(listener);
        }

        if (selector) {
            listener = delegate(targets, selector, listener);
        }

        if (useCapture && useCapture.self) {
            listener = selfFilter(listener);
        }

        useCapture = useCaptureFilter(useCapture);

        type.split(' ').forEach(function (type) { return targets.forEach(function (target) { return target.addEventListener(type, listener, useCapture); }
            ); }
        );
        return function () { return off(targets, type, listener, useCapture); };
    }

    function off(targets, type, listener, useCapture) {
        if ( useCapture === void 0 ) useCapture = false;

        useCapture = useCaptureFilter(useCapture);
        targets = toEventTargets(targets);
        type.split(' ').forEach(function (type) { return targets.forEach(function (target) { return target.removeEventListener(type, listener, useCapture); }
            ); }
        );
    }

    function once() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];


        var ref = getArgs(args);
        var element = ref[0];
        var type = ref[1];
        var selector = ref[2];
        var listener = ref[3];
        var useCapture = ref[4];
        var condition = ref[5];
        var off = on(element, type, selector, function (e) {
            var result = !condition || condition(e);
            if (result) {
                off();
                listener(e, result);
            }
        }, useCapture);

        return off;
    }

    function trigger(targets, event, detail) {
        return toEventTargets(targets).reduce(function (notCanceled, target) { return notCanceled && target.dispatchEvent(createEvent(event, true, true, detail)); }
            , true);
    }

    function createEvent(e, bubbles, cancelable, detail) {
        if ( bubbles === void 0 ) bubbles = true;
        if ( cancelable === void 0 ) cancelable = false;

        if (isString(e)) {
            var event = document.createEvent('CustomEvent'); // IE 11
            event.initCustomEvent(e, bubbles, cancelable, detail);
            e = event;
        }

        return e;
    }

    function getArgs(args) {
        if (isFunction(args[2])) {
            args.splice(2, 0, false);
        }
        return args;
    }

    function delegate(delegates, selector, listener) {
        var this$1 = this;

        return function (e) {

            delegates.forEach(function (delegate) {

                var current = selector[0] === '>'
                    ? findAll(selector, delegate).reverse().filter(function (element) { return within(e.target, element); })[0]
                    : closest(e.target, selector);

                if (current) {
                    e.delegate = delegate;
                    e.current = current;

                    listener.call(this$1, e);
                }

            });

        };
    }

    function detail(listener) {
        return function (e) { return isArray(e.detail) ? listener.apply(void 0, [e].concat(e.detail)) : listener(e); };
    }

    function selfFilter(listener) {
        return function (e) {
            if (e.target === e.currentTarget || e.target === e.current) {
                return listener.call(null, e);
            }
        };
    }

    function useCaptureFilter(options) {
        return options && isIE && !isBoolean(options)
            ? !!options.capture
            : options;
    }

    function isEventTarget(target) {
        return target && 'addEventListener' in target;
    }

    function toEventTarget(target) {
        return isEventTarget(target) ? target : toNode(target);
    }

    function toEventTargets(target) {
        return isArray(target)
                ? target.map(toEventTarget).filter(Boolean)
                : isString(target)
                    ? findAll(target)
                    : isEventTarget(target)
                        ? [target]
                        : toNodes(target);
    }

    function isTouch(e) {
        return e.pointerType === 'touch' || !!e.touches;
    }

    function getEventPos(e, prop) {
        if ( prop === void 0 ) prop = 'client';

        var touches = e.touches;
        var changedTouches = e.changedTouches;
        var ref = touches && touches[0] || changedTouches && changedTouches[0] || e;
        var x = ref[(prop + "X")];
        var y = ref[(prop + "Y")];

        return {x: x, y: y};
    }

    /* global setImmediate */

    var Promise = 'Promise' in window ? window.Promise : PromiseFn;

    var Deferred = function() {
        var this$1 = this;

        this.promise = new Promise(function (resolve, reject) {
            this$1.reject = reject;
            this$1.resolve = resolve;
        });
    };

    /**
     * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
     */

    var RESOLVED = 0;
    var REJECTED = 1;
    var PENDING = 2;

    var async = 'setImmediate' in window ? setImmediate : setTimeout;

    function PromiseFn(executor) {

        this.state = PENDING;
        this.value = undefined;
        this.deferred = [];

        var promise = this;

        try {
            executor(
                function (x) {
                    promise.resolve(x);
                },
                function (r) {
                    promise.reject(r);
                }
            );
        } catch (e) {
            promise.reject(e);
        }
    }

    PromiseFn.reject = function (r) {
        return new PromiseFn(function (resolve, reject) {
            reject(r);
        });
    };

    PromiseFn.resolve = function (x) {
        return new PromiseFn(function (resolve, reject) {
            resolve(x);
        });
    };

    PromiseFn.all = function all(iterable) {
        return new PromiseFn(function (resolve, reject) {
            var result = [];
            var count = 0;

            if (iterable.length === 0) {
                resolve(result);
            }

            function resolver(i) {
                return function (x) {
                    result[i] = x;
                    count += 1;

                    if (count === iterable.length) {
                        resolve(result);
                    }
                };
            }

            for (var i = 0; i < iterable.length; i += 1) {
                PromiseFn.resolve(iterable[i]).then(resolver(i), reject);
            }
        });
    };

    PromiseFn.race = function race(iterable) {
        return new PromiseFn(function (resolve, reject) {
            for (var i = 0; i < iterable.length; i += 1) {
                PromiseFn.resolve(iterable[i]).then(resolve, reject);
            }
        });
    };

    var p = PromiseFn.prototype;

    p.resolve = function resolve(x) {
        var promise = this;

        if (promise.state === PENDING) {
            if (x === promise) {
                throw new TypeError('Promise settled with itself.');
            }

            var called = false;

            try {
                var then = x && x.then;

                if (x !== null && isObject(x) && isFunction(then)) {
                    then.call(
                        x,
                        function (x) {
                            if (!called) {
                                promise.resolve(x);
                            }
                            called = true;
                        },
                        function (r) {
                            if (!called) {
                                promise.reject(r);
                            }
                            called = true;
                        }
                    );
                    return;
                }
            } catch (e) {
                if (!called) {
                    promise.reject(e);
                }
                return;
            }

            promise.state = RESOLVED;
            promise.value = x;
            promise.notify();
        }
    };

    p.reject = function reject(reason) {
        var promise = this;

        if (promise.state === PENDING) {
            if (reason === promise) {
                throw new TypeError('Promise settled with itself.');
            }

            promise.state = REJECTED;
            promise.value = reason;
            promise.notify();
        }
    };

    p.notify = function notify() {
        var this$1 = this;

        async(function () {
            if (this$1.state !== PENDING) {
                while (this$1.deferred.length) {
                    var ref = this$1.deferred.shift();
                    var onResolved = ref[0];
                    var onRejected = ref[1];
                    var resolve = ref[2];
                    var reject = ref[3];

                    try {
                        if (this$1.state === RESOLVED) {
                            if (isFunction(onResolved)) {
                                resolve(onResolved.call(undefined, this$1.value));
                            } else {
                                resolve(this$1.value);
                            }
                        } else if (this$1.state === REJECTED) {
                            if (isFunction(onRejected)) {
                                resolve(onRejected.call(undefined, this$1.value));
                            } else {
                                reject(this$1.value);
                            }
                        }
                    } catch (e) {
                        reject(e);
                    }
                }
            }
        });
    };

    p.then = function then(onResolved, onRejected) {
        var this$1 = this;

        return new PromiseFn(function (resolve, reject) {
            this$1.deferred.push([onResolved, onRejected, resolve, reject]);
            this$1.notify();
        });
    };

    p.catch = function (onRejected) {
        return this.then(undefined, onRejected);
    };

    function ajax(url, options) {
        return new Promise(function (resolve, reject) {

            var env = assign({
                data: null,
                method: 'GET',
                headers: {},
                xhr: new XMLHttpRequest(),
                beforeSend: noop,
                responseType: ''
            }, options);

            env.beforeSend(env);

            var xhr = env.xhr;

            for (var prop in env) {
                if (prop in xhr) {
                    try {

                        xhr[prop] = env[prop];

                    } catch (e) {}
                }
            }

            xhr.open(env.method.toUpperCase(), url);

            for (var header in env.headers) {
                xhr.setRequestHeader(header, env.headers[header]);
            }

            on(xhr, 'load', function () {

                if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    resolve(xhr);
                } else {
                    reject(assign(Error(xhr.statusText), {
                        xhr: xhr,
                        status: xhr.status
                    }));
                }

            });

            on(xhr, 'error', function () { return reject(assign(Error('Network Error'), {xhr: xhr})); });
            on(xhr, 'timeout', function () { return reject(assign(Error('Network Timeout'), {xhr: xhr})); });

            xhr.send(env.data);
        });
    }

    function getImage(src, srcset, sizes) {

        return new Promise(function (resolve, reject) {
            var img = new Image();

            img.onerror = reject;
            img.onload = function () { return resolve(img); };

            sizes && (img.sizes = sizes);
            srcset && (img.srcset = srcset);
            img.src = src;
        });

    }

    function ready(fn) {

        if (document.readyState !== 'loading') {
            fn();
            return;
        }

        var unbind = on(document, 'DOMContentLoaded', function () {
            unbind();
            fn();
        });
    }

    function index(element, ref) {
        return ref
            ? toNodes(element).indexOf(toNode(ref))
            : toNodes((element = toNode(element)) && element.parentNode.children).indexOf(element);
    }

    function getIndex(i, elements, current, finite) {
        if ( current === void 0 ) current = 0;
        if ( finite === void 0 ) finite = false;


        elements = toNodes(elements);

        var length = elements.length;

        i = isNumeric(i)
            ? toNumber(i)
            : i === 'next'
                ? current + 1
                : i === 'previous'
                    ? current - 1
                    : index(elements, i);

        if (finite) {
            return clamp(i, 0, length - 1);
        }

        i %= length;

        return i < 0 ? i + length : i;
    }

    function empty(element) {
        element = $(element);
        element.innerHTML = '';
        return element;
    }

    function html(parent, html) {
        parent = $(parent);
        return isUndefined(html)
            ? parent.innerHTML
            : append(parent.hasChildNodes() ? empty(parent) : parent, html);
    }

    function prepend(parent, element) {

        parent = $(parent);

        if (!parent.hasChildNodes()) {
            return append(parent, element);
        } else {
            return insertNodes(element, function (element) { return parent.insertBefore(element, parent.firstChild); });
        }
    }

    function append(parent, element) {
        parent = $(parent);
        return insertNodes(element, function (element) { return parent.appendChild(element); });
    }

    function before(ref, element) {
        ref = $(ref);
        return insertNodes(element, function (element) { return ref.parentNode.insertBefore(element, ref); });
    }

    function after(ref, element) {
        ref = $(ref);
        return insertNodes(element, function (element) { return ref.nextSibling
            ? before(ref.nextSibling, element)
            : append(ref.parentNode, element); }
        );
    }

    function insertNodes(element, fn) {
        element = isString(element) ? fragment(element) : element;
        return element
            ? 'length' in element
                ? toNodes(element).map(fn)
                : fn(element)
            : null;
    }

    function remove(element) {
        toNodes(element).map(function (element) { return element.parentNode && element.parentNode.removeChild(element); });
    }

    function wrapAll(element, structure) {

        structure = toNode(before(element, structure));

        while (structure.firstChild) {
            structure = structure.firstChild;
        }

        append(structure, element);

        return structure;
    }

    function wrapInner(element, structure) {
        return toNodes(toNodes(element).map(function (element) { return element.hasChildNodes ? wrapAll(toNodes(element.childNodes), structure) : append(element, structure); }
        ));
    }

    function unwrap(element) {
        toNodes(element)
            .map(function (element) { return element.parentNode; })
            .filter(function (value, index, self) { return self.indexOf(value) === index; })
            .forEach(function (parent) {
                before(parent, parent.childNodes);
                remove(parent);
            });
    }

    var fragmentRe = /^\s*<(\w+|!)[^>]*>/;
    var singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function fragment(html) {

        var matches = singleTagRe.exec(html);
        if (matches) {
            return document.createElement(matches[1]);
        }

        var container = document.createElement('div');
        if (fragmentRe.test(html)) {
            container.insertAdjacentHTML('beforeend', html.trim());
        } else {
            container.textContent = html;
        }

        return container.childNodes.length > 1 ? toNodes(container.childNodes) : container.firstChild;

    }

    function apply(node, fn) {

        if (!node || node.nodeType !== 1) {
            return;
        }

        fn(node);
        node = node.firstElementChild;
        while (node) {
            apply(node, fn);
            node = node.nextElementSibling;
        }
    }

    function $(selector, context) {
        return !isString(selector)
            ? toNode(selector)
            : isHtml(selector)
                ? toNode(fragment(selector))
                : find(selector, context);
    }

    function $$(selector, context) {
        return !isString(selector)
            ? toNodes(selector)
            : isHtml(selector)
                ? toNodes(fragment(selector))
                : findAll(selector, context);
    }

    function isHtml(str) {
        return str[0] === '<' || str.match(/^\s*</);
    }

    function addClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        apply$1(element, args, 'add');
    }

    function removeClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        apply$1(element, args, 'remove');
    }

    function removeClasses(element, cls) {
        attr(element, 'class', function (value) { return (value || '').replace(new RegExp(("\\b" + cls + "\\b"), 'g'), ''); });
    }

    function replaceClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        args[0] && removeClass(element, args[0]);
        args[1] && addClass(element, args[1]);
    }

    function hasClass(element, cls) {
        return cls && toNodes(element).some(function (element) { return element.classList.contains(cls.split(' ')[0]); });
    }

    function toggleClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];


        if (!args.length) {
            return;
        }

        args = getArgs$1(args);

        var force = !isString(last(args)) ? args.pop() : []; // in iOS 9.3 force === undefined evaluates to false

        args = args.filter(Boolean);

        toNodes(element).forEach(function (ref) {
            var classList = ref.classList;

            for (var i = 0; i < args.length; i++) {
                supports.Force
                    ? classList.toggle.apply(classList, [args[i]].concat(force))
                    : (classList[(!isUndefined(force) ? force : !classList.contains(args[i])) ? 'add' : 'remove'](args[i]));
            }
        });

    }

    function apply$1(element, args, fn) {
        args = getArgs$1(args).filter(Boolean);

        args.length && toNodes(element).forEach(function (ref) {
            var classList = ref.classList;

            supports.Multiple
                ? classList[fn].apply(classList, args)
                : args.forEach(function (cls) { return classList[fn](cls); });
        });
    }

    function getArgs$1(args) {
        return args.reduce(function (args, arg) { return args.concat.call(args, isString(arg) && includes(arg, ' ') ? arg.trim().split(' ') : arg); }
            , []);
    }

    // IE 11
    var supports = {

        get Multiple() {
            return this.get('_multiple');
        },

        get Force() {
            return this.get('_force');
        },

        get: function(key) {

            if (!hasOwn(this, key)) {
                var ref = document.createElement('_');
                var classList = ref.classList;
                classList.add('a', 'b');
                classList.toggle('c', false);
                this._multiple = classList.contains('b');
                this._force = !classList.contains('c');
            }

            return this[key];
        }

    };

    var cssNumber = {
        'animation-iteration-count': true,
        'column-count': true,
        'fill-opacity': true,
        'flex-grow': true,
        'flex-shrink': true,
        'font-weight': true,
        'line-height': true,
        'opacity': true,
        'order': true,
        'orphans': true,
        'stroke-dasharray': true,
        'stroke-dashoffset': true,
        'widows': true,
        'z-index': true,
        'zoom': true
    };

    function css(element, property, value) {

        return toNodes(element).map(function (element) {

            if (isString(property)) {

                property = propName(property);

                if (isUndefined(value)) {
                    return getStyle(element, property);
                } else if (!value && !isNumber(value)) {
                    element.style.removeProperty(property);
                } else {
                    element.style[property] = isNumeric(value) && !cssNumber[property] ? (value + "px") : value;
                }

            } else if (isArray(property)) {

                var styles = getStyles(element);

                return property.reduce(function (props, property) {
                    props[property] = styles[propName(property)];
                    return props;
                }, {});

            } else if (isObject(property)) {
                each(property, function (value, property) { return css(element, property, value); });
            }

            return element;

        })[0];

    }

    function getStyles(element, pseudoElt) {
        element = toNode(element);
        return element.ownerDocument.defaultView.getComputedStyle(element, pseudoElt);
    }

    function getStyle(element, property, pseudoElt) {
        return getStyles(element, pseudoElt)[property];
    }

    var vars = {};

    function getCssVar(name) {

        var docEl = document.documentElement;

        if (!isIE) {
            return getStyles(docEl).getPropertyValue(("--uk-" + name));
        }

        if (!(name in vars)) {

            /* usage in css: .uk-name:before { content:"xyz" } */

            var element = append(docEl, document.createElement('div'));

            addClass(element, ("uk-" + name));

            vars[name] = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');

            remove(element);

        }

        return vars[name];

    }

    var cssProps = {};

    function propName(name) {

        var ret = cssProps[name];
        if (!ret) {
            ret = cssProps[name] = vendorPropName(name) || name;
        }
        return ret;
    }

    var cssPrefixes = ['webkit', 'moz', 'ms'];

    function vendorPropName(name) {

        name = hyphenate(name);

        var ref = document.documentElement;
        var style = ref.style;

        if (name in style) {
            return name;
        }

        var i = cssPrefixes.length, prefixedName;

        while (i--) {
            prefixedName = "-" + (cssPrefixes[i]) + "-" + name;
            if (prefixedName in style) {
                return prefixedName;
            }
        }
    }

    function transition(element, props, duration, timing) {
        if ( duration === void 0 ) duration = 400;
        if ( timing === void 0 ) timing = 'linear';


        return Promise.all(toNodes(element).map(function (element) { return new Promise(function (resolve, reject) {

                for (var name in props) {
                    var value = css(element, name);
                    if (value === '') {
                        css(element, name, value);
                    }
                }

                var timer = setTimeout(function () { return trigger(element, 'transitionend'); }, duration);

                once(element, 'transitionend transitioncanceled', function (ref) {
                    var type = ref.type;

                    clearTimeout(timer);
                    removeClass(element, 'uk-transition');
                    css(element, {
                        'transition-property': '',
                        'transition-duration': '',
                        'transition-timing-function': ''
                    });
                    type === 'transitioncanceled' ? reject() : resolve();
                }, {self: true});

                addClass(element, 'uk-transition');
                css(element, assign({
                    'transition-property': Object.keys(props).map(propName).join(','),
                    'transition-duration': (duration + "ms"),
                    'transition-timing-function': timing
                }, props));

            }); }
        ));

    }

    var Transition = {

        start: transition,

        stop: function(element) {
            trigger(element, 'transitionend');
            return Promise.resolve();
        },

        cancel: function(element) {
            trigger(element, 'transitioncanceled');
        },

        inProgress: function(element) {
            return hasClass(element, 'uk-transition');
        }

    };

    var animationPrefix = 'uk-animation-';
    var clsCancelAnimation = 'uk-cancel-animation';

    function animate(element, animation, duration, origin, out) {
        var arguments$1 = arguments;
        if ( duration === void 0 ) duration = 200;


        return Promise.all(toNodes(element).map(function (element) { return new Promise(function (resolve, reject) {

                if (hasClass(element, clsCancelAnimation)) {
                    requestAnimationFrame(function () { return Promise.resolve().then(function () { return animate.apply(void 0, arguments$1).then(resolve, reject); }
                        ); }
                    );
                    return;
                }

                var cls = animation + " " + animationPrefix + (out ? 'leave' : 'enter');

                if (startsWith(animation, animationPrefix)) {

                    if (origin) {
                        cls += " uk-transform-origin-" + origin;
                    }

                    if (out) {
                        cls += " " + animationPrefix + "reverse";
                    }

                }

                reset();

                once(element, 'animationend animationcancel', function (ref) {
                    var type = ref.type;


                    var hasReset = false;

                    if (type === 'animationcancel') {
                        reject();
                        reset();
                    } else {
                        resolve();
                        Promise.resolve().then(function () {
                            hasReset = true;
                            reset();
                        });
                    }

                    requestAnimationFrame(function () {
                        if (!hasReset) {
                            addClass(element, clsCancelAnimation);

                            requestAnimationFrame(function () { return removeClass(element, clsCancelAnimation); });
                        }
                    });

                }, {self: true});

                css(element, 'animationDuration', (duration + "ms"));
                addClass(element, cls);

                function reset() {
                    css(element, 'animationDuration', '');
                    removeClasses(element, (animationPrefix + "\\S*"));
                }

            }); }
        ));

    }

    var inProgress = new RegExp((animationPrefix + "(enter|leave)"));
    var Animation = {

        in: function(element, animation, duration, origin) {
            return animate(element, animation, duration, origin, false);
        },

        out: function(element, animation, duration, origin) {
            return animate(element, animation, duration, origin, true);
        },

        inProgress: function(element) {
            return inProgress.test(attr(element, 'class'));
        },

        cancel: function(element) {
            trigger(element, 'animationcancel');
        }

    };

    var dirs = {
        width: ['x', 'left', 'right'],
        height: ['y', 'top', 'bottom']
    };

    function positionAt(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {

        elAttach = getPos(elAttach);
        targetAttach = getPos(targetAttach);

        var flipped = {element: elAttach, target: targetAttach};

        if (!element || !target) {
            return flipped;
        }

        var dim = getDimensions(element);
        var targetDim = getDimensions(target);
        var position = targetDim;

        moveTo(position, elAttach, dim, -1);
        moveTo(position, targetAttach, targetDim, 1);

        elOffset = getOffsets(elOffset, dim.width, dim.height);
        targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);

        elOffset['x'] += targetOffset['x'];
        elOffset['y'] += targetOffset['y'];

        position.left += elOffset['x'];
        position.top += elOffset['y'];

        if (flip) {

            var boundaries = [getDimensions(getWindow(element))];

            if (boundary) {
                boundaries.unshift(getDimensions(boundary));
            }

            each(dirs, function (ref, prop) {
                var dir = ref[0];
                var align = ref[1];
                var alignFlip = ref[2];


                if (!(flip === true || includes(flip, dir))) {
                    return;
                }

                boundaries.some(function (boundary) {

                    var elemOffset = elAttach[dir] === align
                        ? -dim[prop]
                        : elAttach[dir] === alignFlip
                            ? dim[prop]
                            : 0;

                    var targetOffset = targetAttach[dir] === align
                        ? targetDim[prop]
                        : targetAttach[dir] === alignFlip
                            ? -targetDim[prop]
                            : 0;

                    if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {

                        var centerOffset = dim[prop] / 2;
                        var centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;

                        return elAttach[dir] === 'center' && (
                            apply(centerOffset, centerTargetOffset)
                            || apply(-centerOffset, -centerTargetOffset)
                        ) || apply(elemOffset, targetOffset);

                    }

                    function apply(elemOffset, targetOffset) {

                        var newVal = position[align] + elemOffset + targetOffset - elOffset[dir] * 2;

                        if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
                            position[align] = newVal;

                            ['element', 'target'].forEach(function (el) {
                                flipped[el][dir] = !elemOffset
                                    ? flipped[el][dir]
                                    : flipped[el][dir] === dirs[prop][1]
                                        ? dirs[prop][2]
                                        : dirs[prop][1];
                            });

                            return true;
                        }

                    }

                });

            });
        }

        offset(element, position);

        return flipped;
    }

    function offset(element, coordinates) {

        element = toNode(element);

        if (coordinates) {

            var currentOffset = offset(element);
            var pos = css(element, 'position');

            ['left', 'top'].forEach(function (prop) {
                if (prop in coordinates) {
                    var value = css(element, prop);
                    css(element, prop, coordinates[prop] - currentOffset[prop]
                        + toFloat(pos === 'absolute' && value === 'auto'
                            ? position(element)[prop]
                            : value)
                    );
                }
            });

            return;
        }

        return getDimensions(element);
    }

    function getDimensions(element) {

        element = toNode(element);

        if (!element) {
            return {};
        }

        var ref = getWindow(element);
        var top = ref.pageYOffset;
        var left = ref.pageXOffset;

        if (isWindow(element)) {

            var height = element.innerHeight;
            var width = element.innerWidth;

            return {
                top: top,
                left: left,
                height: height,
                width: width,
                bottom: top + height,
                right: left + width
            };
        }

        var style, hidden;

        if (!isVisible(element) && css(element, 'display') === 'none') {

            style = attr(element, 'style');
            hidden = attr(element, 'hidden');

            attr(element, {
                style: ((style || '') + ";display:block !important;"),
                hidden: null
            });
        }

        var rect = element.getBoundingClientRect();

        if (!isUndefined(style)) {
            attr(element, {style: style, hidden: hidden});
        }

        return {
            height: rect.height,
            width: rect.width,
            top: rect.top + top,
            left: rect.left + left,
            bottom: rect.bottom + top,
            right: rect.right + left
        };
    }

    function position(element) {
        element = toNode(element);

        var parent = element.offsetParent || getDocEl(element);
        var parentOffset = offset(parent);
        var ref = ['top', 'left'].reduce(function (props, prop) {
            var propName = ucfirst(prop);
            props[prop] -= parentOffset[prop]
                + toFloat(css(element, ("margin" + propName)))
                + toFloat(css(parent, ("border" + propName + "Width")));
            return props;
        }, offset(element));
        var top = ref.top;
        var left = ref.left;

        return {top: top, left: left};
    }

    var height = dimension('height');
    var width = dimension('width');

    function dimension(prop) {
        var propName = ucfirst(prop);
        return function (element, value) {

            element = toNode(element);

            if (isUndefined(value)) {

                if (isWindow(element)) {
                    return element[("inner" + propName)];
                }

                if (isDocument(element)) {
                    var doc = element.documentElement;
                    return Math.max(doc[("offset" + propName)], doc[("scroll" + propName)]);
                }

                value = css(element, prop);
                value = value === 'auto' ? element[("offset" + propName)] : toFloat(value) || 0;

                return value - boxModelAdjust(prop, element);

            } else {

                css(element, prop, !value && value !== 0
                    ? ''
                    : +value + boxModelAdjust(prop, element) + 'px'
                );

            }

        };
    }

    function boxModelAdjust(prop, element, sizing) {
        if ( sizing === void 0 ) sizing = 'border-box';

        return css(element, 'boxSizing') === sizing
            ? dirs[prop].slice(1).map(ucfirst).reduce(function (value, prop) { return value
                + toFloat(css(element, ("padding" + prop)))
                + toFloat(css(element, ("border" + prop + "Width"))); }
                , 0)
            : 0;
    }

    function moveTo(position, attach, dim, factor) {
        each(dirs, function (ref, prop) {
            var dir = ref[0];
            var align = ref[1];
            var alignFlip = ref[2];

            if (attach[dir] === alignFlip) {
                position[align] += dim[prop] * factor;
            } else if (attach[dir] === 'center') {
                position[align] += dim[prop] * factor / 2;
            }
        });
    }

    function getPos(pos) {

        var x = /left|center|right/;
        var y = /top|center|bottom/;

        pos = (pos || '').split(' ');

        if (pos.length === 1) {
            pos = x.test(pos[0])
                ? pos.concat(['center'])
                : y.test(pos[0])
                    ? ['center'].concat(pos)
                    : ['center', 'center'];
        }

        return {
            x: x.test(pos[0]) ? pos[0] : 'center',
            y: y.test(pos[1]) ? pos[1] : 'center'
        };
    }

    function getOffsets(offsets, width, height) {

        var ref = (offsets || '').split(' ');
        var x = ref[0];
        var y = ref[1];

        return {
            x: x ? toFloat(x) * (endsWith(x, '%') ? width / 100 : 1) : 0,
            y: y ? toFloat(y) * (endsWith(y, '%') ? height / 100 : 1) : 0
        };
    }

    function flipPosition(pos) {
        switch (pos) {
            case 'left':
                return 'right';
            case 'right':
                return 'left';
            case 'top':
                return 'bottom';
            case 'bottom':
                return 'top';
            default:
                return pos;
        }
    }

    function isInView(element, topOffset, leftOffset) {
        if ( topOffset === void 0 ) topOffset = 0;
        if ( leftOffset === void 0 ) leftOffset = 0;


        if (!isVisible(element)) {
            return false;
        }

        element = toNode(element);

        var win = getWindow(element);
        var client = element.getBoundingClientRect();
        var bounding = {
            top: -topOffset,
            left: -leftOffset,
            bottom: topOffset + height(win),
            right: leftOffset + width(win)
        };

        return intersectRect(client, bounding) || pointInRect({x: client.left, y: client.top}, bounding);

    }

    function scrolledOver(element, heightOffset) {
        if ( heightOffset === void 0 ) heightOffset = 0;


        if (!isVisible(element)) {
            return 0;
        }

        element = toNode(element);

        var win = getWindow(element);
        var doc = getDocument(element);
        var elHeight = element.offsetHeight + heightOffset;
        var ref = offsetPosition(element);
        var top = ref[0];
        var vp = height(win);
        var vh = vp + Math.min(0, top - vp);
        var diff = Math.max(0, vp - (height(doc) + heightOffset - (top + elHeight)));

        return clamp(((vh + win.pageYOffset - top) / ((vh + (elHeight - (diff < vp ? diff : 0))) / 100)) / 100);
    }

    function scrollTop(element, top) {
        element = toNode(element);

        if (isWindow(element) || isDocument(element)) {
            var ref = getWindow(element);
            var scrollTo = ref.scrollTo;
            var pageXOffset = ref.pageXOffset;
            scrollTo(pageXOffset, top);
        } else {
            element.scrollTop = top;
        }
    }

    function offsetPosition(element) {
        var offset = [0, 0];

        do {

            offset[0] += element.offsetTop;
            offset[1] += element.offsetLeft;

            if (css(element, 'position') === 'fixed') {
                var win = getWindow(element);
                offset[0] += win.pageYOffset;
                offset[1] += win.pageXOffset;
                return offset;
            }

        } while ((element = element.offsetParent));

        return offset;
    }

    function toPx(value, property, element) {
        if ( property === void 0 ) property = 'width';
        if ( element === void 0 ) element = window;

        return isNumeric(value)
            ? +value
            : endsWith(value, 'vh')
                ? percent(height(getWindow(element)), value)
                : endsWith(value, 'vw')
                    ? percent(width(getWindow(element)), value)
                    : endsWith(value, '%')
                        ? percent(getDimensions(element)[property], value)
                        : toFloat(value);
    }

    function percent(base, value) {
        return base * toFloat(value) / 100;
    }

    function getWindow(element) {
        return isWindow(element) ? element : getDocument(element).defaultView;
    }

    function getDocument(element) {
        return toNode(element).ownerDocument;
    }

    function getDocEl(element) {
        return getDocument(element).documentElement;
    }

    /*
        Based on:
        Copyright (c) 2016 Wilson Page wilsonpage@me.com
        https://github.com/wilsonpage/fastdom
    */

    var fastdom = {

        reads: [],
        writes: [],

        read: function(task) {
            this.reads.push(task);
            scheduleFlush();
            return task;
        },

        write: function(task) {
            this.writes.push(task);
            scheduleFlush();
            return task;
        },

        clear: function(task) {
            return remove$1(this.reads, task) || remove$1(this.writes, task);
        },

        flush: flush

    };

    function flush() {
        runTasks(fastdom.reads);
        runTasks(fastdom.writes.splice(0, fastdom.writes.length));

        fastdom.scheduled = false;

        if (fastdom.reads.length || fastdom.writes.length) {
            scheduleFlush(true);
        }
    }

    function scheduleFlush(microtask) {
        if ( microtask === void 0 ) microtask = false;

        if (!fastdom.scheduled) {
            fastdom.scheduled = true;
            if (microtask) {
                Promise.resolve().then(flush);
            } else {
                requestAnimationFrame(flush);
            }
        }
    }

    function runTasks(tasks) {
        var task;
        while ((task = tasks.shift())) {
            task();
        }
    }

    function remove$1(array, item) {
        var index = array.indexOf(item);
        return !!~index && !!array.splice(index, 1);
    }

    function MouseTracker() {}

    MouseTracker.prototype = {

        positions: [],
        position: null,

        init: function() {
            var this$1 = this;


            this.positions = [];
            this.position = null;

            var ticking = false;
            this.unbind = on(document, 'mousemove', function (e) {

                if (ticking) {
                    return;
                }

                setTimeout(function () {

                    var time = Date.now();
                    var ref = this$1.positions;
                    var length = ref.length;

                    if (length && (time - this$1.positions[length - 1].time > 100)) {
                        this$1.positions.splice(0, length);
                    }

                    this$1.positions.push({time: time, x: e.pageX, y: e.pageY});

                    if (this$1.positions.length > 5) {
                        this$1.positions.shift();
                    }

                    ticking = false;
                }, 5);

                ticking = true;
            });

        },

        cancel: function() {
            if (this.unbind) {
                this.unbind();
            }
        },

        movesTo: function(target) {

            if (this.positions.length < 2) {
                return false;
            }

            var p = offset(target);
            var position = last(this.positions);
            var ref = this.positions;
            var prevPos = ref[0];

            if (p.left <= position.x && position.x <= p.right && p.top <= position.y && position.y <= p.bottom) {
                return false;
            }

            var points = [
                [{x: p.left, y: p.top}, {x: p.right, y: p.bottom}],
                [{x: p.right, y: p.top}, {x: p.left, y: p.bottom}]
            ];

            if (p.right <= position.x) ; else if (p.left >= position.x) {
                points[0].reverse();
                points[1].reverse();
            } else if (p.bottom <= position.y) {
                points[0].reverse();
            } else if (p.top >= position.y) {
                points[1].reverse();
            }

            return !!points.reduce(function (result, point) {
                return result + (slope(prevPos, point[0]) < slope(position, point[0]) && slope(prevPos, point[1]) > slope(position, point[1]));
            }, 0);
        }

    };

    function slope(a, b) {
        return (b.y - a.y) / (b.x - a.x);
    }

    var strats = {};

    strats.events =
    strats.created =
    strats.beforeConnect =
    strats.connected =
    strats.beforeDisconnect =
    strats.disconnected =
    strats.destroy = concatStrat;

    // args strategy
    strats.args = function (parentVal, childVal) {
        return childVal !== false && concatStrat(childVal || parentVal);
    };

    // update strategy
    strats.update = function (parentVal, childVal) {
        return sortBy(concatStrat(parentVal, isFunction(childVal) ? {read: childVal} : childVal), 'order');
    };

    // property strategy
    strats.props = function (parentVal, childVal) {

        if (isArray(childVal)) {
            childVal = childVal.reduce(function (value, key) {
                value[key] = String;
                return value;
            }, {});
        }

        return strats.methods(parentVal, childVal);
    };

    // extend strategy
    strats.computed =
    strats.methods = function (parentVal, childVal) {
        return childVal
            ? parentVal
                ? assign({}, parentVal, childVal)
                : childVal
            : parentVal;
    };

    // data strategy
    strats.data = function (parentVal, childVal, vm) {

        if (!vm) {

            if (!childVal) {
                return parentVal;
            }

            if (!parentVal) {
                return childVal;
            }

            return function (vm) {
                return mergeFnData(parentVal, childVal, vm);
            };

        }

        return mergeFnData(parentVal, childVal, vm);
    };

    function mergeFnData(parentVal, childVal, vm) {
        return strats.computed(
            isFunction(parentVal)
                ? parentVal.call(vm, vm)
                : parentVal,
            isFunction(childVal)
                ? childVal.call(vm, vm)
                : childVal
        );
    }

    // concat strategy
    function concatStrat(parentVal, childVal) {

        parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;

        return childVal
            ? parentVal
                ? parentVal.concat(childVal)
                : isArray(childVal)
                    ? childVal
                    : [childVal]
            : parentVal;
    }

    // default strategy
    function defaultStrat(parentVal, childVal) {
        return isUndefined(childVal) ? parentVal : childVal;
    }

    function mergeOptions(parent, child, vm) {

        var options = {};

        if (isFunction(child)) {
            child = child.options;
        }

        if (child.extends) {
            parent = mergeOptions(parent, child.extends, vm);
        }

        if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm);
            }
        }

        for (var key in parent) {
            mergeKey(key);
        }

        for (var key$1 in child) {
            if (!hasOwn(parent, key$1)) {
                mergeKey(key$1);
            }
        }

        function mergeKey(key) {
            options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
        }

        return options;
    }

    function parseOptions(options, args) {
        var obj;

        if ( args === void 0 ) args = [];

        try {

            return !options
                ? {}
                : startsWith(options, '{')
                    ? JSON.parse(options)
                    : args.length && !includes(options, ':')
                        ? (( obj = {}, obj[args[0]] = options, obj ))
                        : options.split(';').reduce(function (options, option) {
                            var ref = option.split(/:(.*)/);
                            var key = ref[0];
                            var value = ref[1];
                            if (key && !isUndefined(value)) {
                                options[key.trim()] = value.trim();
                            }
                            return options;
                        }, {});

        } catch (e) {
            return {};
        }

    }

    var id = 0;

    var Player = function(el) {
        this.id = ++id;
        this.el = toNode(el);
    };

    Player.prototype.isVideo = function () {
        return this.isYoutube() || this.isVimeo() || this.isHTML5();
    };

    Player.prototype.isHTML5 = function () {
        return this.el.tagName === 'VIDEO';
    };

    Player.prototype.isIFrame = function () {
        return this.el.tagName === 'IFRAME';
    };

    Player.prototype.isYoutube = function () {
        return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
    };

    Player.prototype.isVimeo = function () {
        return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/);
    };

    Player.prototype.enableApi = function () {
            var this$1 = this;


        if (this.ready) {
            return this.ready;
        }

        var youtube = this.isYoutube();
        var vimeo = this.isVimeo();

        var poller;

        if (youtube || vimeo) {

            return this.ready = new Promise(function (resolve) {

                once(this$1.el, 'load', function () {
                    if (youtube) {
                        var listener = function () { return post(this$1.el, {event: 'listening', id: this$1.id}); };
                        poller = setInterval(listener, 100);
                        listener();
                    }
                });

                listen(function (data) { return youtube && data.id === this$1.id && data.event === 'onReady' || vimeo && Number(data.player_id) === this$1.id; })
                    .then(function () {
                        resolve();
                        poller && clearInterval(poller);
                    });

                attr(this$1.el, 'src', ("" + (this$1.el.src) + (includes(this$1.el.src, '?') ? '&' : '?') + (youtube ? 'enablejsapi=1' : ("api=1&player_id=" + (this$1.id)))));

            });

        }

        return Promise.resolve();

    };

    Player.prototype.play = function () {
            var this$1 = this;


        if (!this.isVideo()) {
            return;
        }

        if (this.isIFrame()) {
            this.enableApi().then(function () { return post(this$1.el, {func: 'playVideo', method: 'play'}); });
        } else if (this.isHTML5()) {
            try {
                var promise = this.el.play();

                if (promise) {
                    promise.catch(noop);
                }
            } catch (e) {}
        }
    };

    Player.prototype.pause = function () {
            var this$1 = this;


        if (!this.isVideo()) {
            return;
        }

        if (this.isIFrame()) {
            this.enableApi().then(function () { return post(this$1.el, {func: 'pauseVideo', method: 'pause'}); });
        } else if (this.isHTML5()) {
            this.el.pause();
        }
    };

    Player.prototype.mute = function () {
            var this$1 = this;


        if (!this.isVideo()) {
            return;
        }

        if (this.isIFrame()) {
            this.enableApi().then(function () { return post(this$1.el, {func: 'mute', method: 'setVolume', value: 0}); });
        } else if (this.isHTML5()) {
            this.el.muted = true;
            attr(this.el, 'muted', '');
        }

    };

    function post(el, cmd) {
        try {
            el.contentWindow.postMessage(JSON.stringify(assign({event: 'command'}, cmd)), '*');
        } catch (e) {}
    }

    function listen(cb) {

        return new Promise(function (resolve) {

            once(window, 'message', function (_, data) { return resolve(data); }, false, function (ref) {
                var data = ref.data;


                if (!data || !isString(data)) {
                    return;
                }

                try {
                    data = JSON.parse(data);
                } catch (e) {
                    return;
                }

                return data && cb(data);

            });

        });

    }

    var IntersectionObserver = 'IntersectionObserver' in window
        ? window.IntersectionObserver
        : /*@__PURE__*/(function () {
        function IntersectionObserverClass(callback, ref) {
            var this$1 = this;
            if ( ref === void 0 ) ref = {};
            var rootMargin = ref.rootMargin; if ( rootMargin === void 0 ) rootMargin = '0 0';


                this.targets = [];

                var ref$1 = (rootMargin || '0 0').split(' ').map(toFloat);
            var offsetTop = ref$1[0];
            var offsetLeft = ref$1[1];

                this.offsetTop = offsetTop;
                this.offsetLeft = offsetLeft;

                var pending;
                this.apply = function () {

                    if (pending) {
                        return;
                    }

                    pending = requestAnimationFrame(function () { return setTimeout(function () {
                        var records = this$1.takeRecords();

                        if (records.length) {
                            callback(records, this$1);
                        }

                        pending = false;
                    }); });

                };

                this.off = on(window, 'scroll resize load', this.apply, {passive: true, capture: true});

            }

            IntersectionObserverClass.prototype.takeRecords = function () {
                var this$1 = this;

                return this.targets.filter(function (entry) {

                    var inView = isInView(entry.target, this$1.offsetTop, this$1.offsetLeft);

                    if (entry.isIntersecting === null || inView ^ entry.isIntersecting) {
                        entry.isIntersecting = inView;
                        return true;
                    }

                });
            };

            IntersectionObserverClass.prototype.observe = function (target) {
                this.targets.push({
                    target: target,
                    isIntersecting: null
                });
                this.apply();
            };

            IntersectionObserverClass.prototype.disconnect = function () {
                this.targets = [];
                this.off();
            };

        return IntersectionObserverClass;
    }());



    var util = /*#__PURE__*/Object.freeze({
        ajax: ajax,
        getImage: getImage,
        transition: transition,
        Transition: Transition,
        animate: animate,
        Animation: Animation,
        attr: attr,
        hasAttr: hasAttr,
        removeAttr: removeAttr,
        data: data,
        addClass: addClass,
        removeClass: removeClass,
        removeClasses: removeClasses,
        replaceClass: replaceClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        positionAt: positionAt,
        offset: offset,
        position: position,
        height: height,
        width: width,
        boxModelAdjust: boxModelAdjust,
        flipPosition: flipPosition,
        isInView: isInView,
        scrolledOver: scrolledOver,
        scrollTop: scrollTop,
        offsetPosition: offsetPosition,
        toPx: toPx,
        ready: ready,
        index: index,
        getIndex: getIndex,
        empty: empty,
        html: html,
        prepend: prepend,
        append: append,
        before: before,
        after: after,
        remove: remove,
        wrapAll: wrapAll,
        wrapInner: wrapInner,
        unwrap: unwrap,
        fragment: fragment,
        apply: apply,
        $: $,
        $$: $$,
        isIE: isIE,
        isRtl: isRtl,
        hasTouch: hasTouch,
        pointerDown: pointerDown,
        pointerMove: pointerMove,
        pointerUp: pointerUp,
        pointerEnter: pointerEnter,
        pointerLeave: pointerLeave,
        pointerCancel: pointerCancel,
        on: on,
        off: off,
        once: once,
        trigger: trigger,
        createEvent: createEvent,
        toEventTargets: toEventTargets,
        isTouch: isTouch,
        getEventPos: getEventPos,
        fastdom: fastdom,
        isVoidElement: isVoidElement,
        isVisible: isVisible,
        selInput: selInput,
        isInput: isInput,
        filter: filter,
        within: within,
        hasOwn: hasOwn,
        hyphenate: hyphenate,
        camelize: camelize,
        ucfirst: ucfirst,
        startsWith: startsWith,
        endsWith: endsWith,
        includes: includes,
        findIndex: findIndex,
        isArray: isArray,
        isFunction: isFunction,
        isObject: isObject,
        isPlainObject: isPlainObject,
        isWindow: isWindow,
        isDocument: isDocument,
        isJQuery: isJQuery,
        isNode: isNode,
        isNodeCollection: isNodeCollection,
        isBoolean: isBoolean,
        isString: isString,
        isNumber: isNumber,
        isNumeric: isNumeric,
        isEmpty: isEmpty,
        isUndefined: isUndefined,
        toBoolean: toBoolean,
        toNumber: toNumber,
        toFloat: toFloat,
        toNode: toNode,
        toNodes: toNodes,
        toList: toList,
        toMs: toMs,
        isEqual: isEqual,
        swap: swap,
        assign: assign,
        last: last,
        each: each,
        sortBy: sortBy,
        uniqueBy: uniqueBy,
        clamp: clamp,
        noop: noop,
        intersectRect: intersectRect,
        pointInRect: pointInRect,
        Dimensions: Dimensions,
        MouseTracker: MouseTracker,
        mergeOptions: mergeOptions,
        parseOptions: parseOptions,
        Player: Player,
        Promise: Promise,
        Deferred: Deferred,
        IntersectionObserver: IntersectionObserver,
        query: query,
        queryAll: queryAll,
        find: find,
        findAll: findAll,
        matches: matches,
        closest: closest,
        parents: parents,
        escape: escape,
        css: css,
        getStyles: getStyles,
        getStyle: getStyle,
        getCssVar: getCssVar,
        propName: propName
    });

    function componentAPI (UIkit) {

        var DATA = UIkit.data;

        var components = {};

        UIkit.component = function (name, options) {

            if (!options) {

                if (isPlainObject(components[name])) {
                    components[name] = UIkit.extend(components[name]);
                }

                return components[name];

            }

            UIkit[name] = function (element, data) {
                var i = arguments.length, argsArray = Array(i);
                while ( i-- ) argsArray[i] = arguments[i];


                var component = UIkit.component(name);

                if (isPlainObject(element)) {
                    return new component({data: element});
                }

                if (component.options.functional) {
                    return new component({data: [].concat( argsArray )});
                }

                return element && element.nodeType ? init(element) : $$(element).map(init)[0];

                function init(element) {

                    var instance = UIkit.getComponent(element, name);

                    if (instance) {
                        if (!data) {
                            return instance;
                        } else {
                            instance.$destroy();
                        }
                    }

                    return new component({el: element, data: data});

                }

            };

            var opt = isPlainObject(options) ? assign({}, options) : options.options;

            opt.name = name;

            if (opt.install) {
                opt.install(UIkit, opt, name);
            }

            if (UIkit._initialized && !opt.functional) {
                var id = hyphenate(name);
                fastdom.read(function () { return UIkit[name](("[uk-" + id + "],[data-uk-" + id + "]")); });
            }

            return components[name] = isPlainObject(options) ? opt : options;
        };

        UIkit.getComponents = function (element) { return element && element[DATA] || {}; };
        UIkit.getComponent = function (element, name) { return UIkit.getComponents(element)[name]; };

        UIkit.connect = function (node) {

            if (node[DATA]) {
                for (var name in node[DATA]) {
                    node[DATA][name]._callConnected();
                }
            }

            for (var i = 0; i < node.attributes.length; i++) {

                var name$1 = getComponentName(node.attributes[i].name);

                if (name$1 && name$1 in components) {
                    UIkit[name$1](node);
                }

            }

        };

        UIkit.disconnect = function (node) {
            for (var name in node[DATA]) {
                node[DATA][name]._callDisconnected();
            }
        };

    }

    function getComponentName(attribute) {
        return startsWith(attribute, 'uk-') || startsWith(attribute, 'data-uk-')
            ? camelize(attribute.replace('data-uk-', '').replace('uk-', ''))
            : false;
    }

    function boot (UIkit) {

        var connect = UIkit.connect;
        var disconnect = UIkit.disconnect;

        if (!('MutationObserver' in window)) {
            return;
        }

        if (document.body) {

            fastdom.read(init);

        } else {

            (new MutationObserver(function () {

                if (document.body) {
                    this.disconnect();
                    init();
                }

            })).observe(document, {childList: true, subtree: true});

        }

        function init() {

            apply(document.body, connect);

            // Safari renders prior to first animation frame
            fastdom.flush();

            (new MutationObserver(function (mutations) { return mutations.forEach(applyMutation); })).observe(document, {
                childList: true,
                subtree: true,
                characterData: true,
                attributes: true
            });

            UIkit._initialized = true;
        }

        function applyMutation(mutation) {

            var target = mutation.target;
            var type = mutation.type;

            var update = type !== 'attributes'
                ? applyChildList(mutation)
                : applyAttribute(mutation);

            update && UIkit.update(target);

        }

        function applyAttribute(ref) {
            var target = ref.target;
            var attributeName = ref.attributeName;


            if (attributeName === 'href') {
                return true;
            }

            var name = getComponentName(attributeName);

            if (!name || !(name in UIkit)) {
                return;
            }

            if (hasAttr(target, attributeName)) {
                UIkit[name](target);
                return true;
            }

            var component = UIkit.getComponent(target, name);

            if (component) {
                component.$destroy();
                return true;
            }

        }

        function applyChildList(ref) {
            var addedNodes = ref.addedNodes;
            var removedNodes = ref.removedNodes;


            for (var i = 0; i < addedNodes.length; i++) {
                apply(addedNodes[i], connect);
            }

            for (var i$1 = 0; i$1 < removedNodes.length; i$1++) {
                apply(removedNodes[i$1], disconnect);
            }

            return true;
        }

        function apply(node, fn) {

            if (node.nodeType !== 1 || hasAttr(node, 'uk-no-boot')) {
                return;
            }

            fn(node);
            node = node.firstElementChild;
            while (node) {
                var next = node.nextElementSibling;
                apply(node, fn);
                node = next;
            }
        }

    }

    function globalAPI (UIkit) {

        var DATA = UIkit.data;

        UIkit.use = function (plugin) {

            if (plugin.installed) {
                return;
            }

            plugin.call(null, this);
            plugin.installed = true;

            return this;
        };

        UIkit.mixin = function (mixin, component) {
            component = (isString(component) ? UIkit.component(component) : component) || this;
            component.options = mergeOptions(component.options, mixin);
        };

        UIkit.extend = function (options) {

            options = options || {};

            var Super = this;
            var Sub = function UIkitComponent(options) {
                this._init(options);
            };

            Sub.prototype = Object.create(Super.prototype);
            Sub.prototype.constructor = Sub;
            Sub.options = mergeOptions(Super.options, options);

            Sub.super = Super;
            Sub.extend = Super.extend;

            return Sub;
        };

        UIkit.update = function (element, e) {

            element = element ? toNode(element) : document.body;

            path(element, function (element) { return update(element[DATA], e); });
            apply(element, function (element) { return update(element[DATA], e); });

        };

        var container;
        Object.defineProperty(UIkit, 'container', {

            get: function() {
                return container || document.body;
            },

            set: function(element) {
                container = $(element);
            }

        });

        function update(data, e) {

            if (!data) {
                return;
            }

            for (var name in data) {
                if (data[name]._connected) {
                    data[name]._callUpdate(e);
                }
            }

        }

        function path(node, fn) {
            if (node && node !== document.body && node.parentNode) {
                path(node.parentNode, fn);
                fn(node.parentNode);
            }
        }

    }

    function hooksAPI (UIkit) {

        UIkit.prototype._callHook = function (hook) {
            var this$1 = this;


            var handlers = this.$options[hook];

            if (handlers) {
                handlers.forEach(function (handler) { return handler.call(this$1); });
            }
        };

        UIkit.prototype._callConnected = function () {

            if (this._connected) {
                return;
            }

            this._data = {};
            this._computeds = {};
            this._initProps();

            this._callHook('beforeConnect');
            this._connected = true;

            this._initEvents();
            this._initObserver();

            this._callHook('connected');
            this._callUpdate();
        };

        UIkit.prototype._callDisconnected = function () {

            if (!this._connected) {
                return;
            }

            this._callHook('beforeDisconnect');

            if (this._observer) {
                this._observer.disconnect();
                this._observer = null;
            }

            this._unbindEvents();
            this._callHook('disconnected');

            this._connected = false;

        };

        UIkit.prototype._callUpdate = function (e) {
            var this$1 = this;
            if ( e === void 0 ) e = 'update';


            var type = e.type || e;

            if (includes(['update', 'resize'], type)) {
                this._callWatches();
            }

            var updates = this.$options.update;
            var ref = this._frames;
            var reads = ref.reads;
            var writes = ref.writes;

            if (!updates) {
                return;
            }

            updates.forEach(function (ref, i) {
                var read = ref.read;
                var write = ref.write;
                var events = ref.events;


                if (type !== 'update' && !includes(events, type)) {
                    return;
                }

                if (read && !includes(fastdom.reads, reads[i])) {
                    reads[i] = fastdom.read(function () {

                        var result = this$1._connected && read.call(this$1, this$1._data, type);

                        if (result === false && write) {
                            fastdom.clear(writes[i]);
                        } else if (isPlainObject(result)) {
                            assign(this$1._data, result);
                        }
                    });
                }

                if (write && !includes(fastdom.writes, writes[i])) {
                    writes[i] = fastdom.write(function () { return this$1._connected && write.call(this$1, this$1._data, type); });
                }

            });

        };

    }

    function stateAPI (UIkit) {

        var uid = 0;

        UIkit.prototype._init = function (options) {

            options = options || {};
            options.data = normalizeData(options, this.constructor.options);

            this.$options = mergeOptions(this.constructor.options, options, this);
            this.$el = null;
            this.$props = {};

            this._frames = {reads: {}, writes: {}};
            this._events = [];

            this._uid = uid++;
            this._initData();
            this._initMethods();
            this._initComputeds();
            this._callHook('created');

            if (options.el) {
                this.$mount(options.el);
            }
        };

        UIkit.prototype._initData = function () {

            var ref = this.$options;
            var data = ref.data; if ( data === void 0 ) data = {};

            for (var key in data) {
                this.$props[key] = this[key] = data[key];
            }
        };

        UIkit.prototype._initMethods = function () {

            var ref = this.$options;
            var methods = ref.methods;

            if (methods) {
                for (var key in methods) {
                    this[key] = methods[key].bind(this);
                }
            }
        };

        UIkit.prototype._initComputeds = function () {

            var ref = this.$options;
            var computed = ref.computed;

            this._computeds = {};

            if (computed) {
                for (var key in computed) {
                    registerComputed(this, key, computed[key]);
                }
            }
        };

        UIkit.prototype._callWatches = function () {

            var ref = this;
            var computed = ref.$options.computed;
            var _computeds = ref._computeds;

            for (var key in _computeds) {

                var value = _computeds[key];
                delete _computeds[key];

                if (computed[key].watch && !isEqual(value, this[key])) {
                    computed[key].watch.call(this, this[key], value);
                }

            }

        };

        UIkit.prototype._initProps = function (props) {

            var key;

            props = props || getProps(this.$options, this.$name);

            for (key in props) {
                if (!isUndefined(props[key])) {
                    this.$props[key] = props[key];
                }
            }

            var exclude = [this.$options.computed, this.$options.methods];
            for (key in this.$props) {
                if (key in props && notIn(exclude, key)) {
                    this[key] = this.$props[key];
                }
            }
        };

        UIkit.prototype._initEvents = function () {
            var this$1 = this;


            var ref = this.$options;
            var events = ref.events;

            if (events) {

                events.forEach(function (event) {

                    if (!hasOwn(event, 'handler')) {
                        for (var key in event) {
                            registerEvent(this$1, event[key], key);
                        }
                    } else {
                        registerEvent(this$1, event);
                    }

                });
            }
        };

        UIkit.prototype._unbindEvents = function () {
            this._events.forEach(function (unbind) { return unbind(); });
            this._events = [];
        };

        UIkit.prototype._initObserver = function () {
            var this$1 = this;


            var ref = this.$options;
            var attrs = ref.attrs;
            var props = ref.props;
            var el = ref.el;
            if (this._observer || !props || attrs === false) {
                return;
            }

            attrs = isArray(attrs) ? attrs : Object.keys(props);

            this._observer = new MutationObserver(function () {

                var data = getProps(this$1.$options, this$1.$name);
                if (attrs.some(function (key) { return !isUndefined(data[key]) && data[key] !== this$1.$props[key]; })) {
                    this$1.$reset();
                }

            });

            var filter = attrs.map(function (key) { return hyphenate(key); }).concat(this.$name);

            this._observer.observe(el, {
                attributes: true,
                attributeFilter: filter.concat(filter.map(function (key) { return ("data-" + key); }))
            });
        };

        function getProps(opts, name) {

            var data$1 = {};
            var args = opts.args; if ( args === void 0 ) args = [];
            var props = opts.props; if ( props === void 0 ) props = {};
            var el = opts.el;

            if (!props) {
                return data$1;
            }

            for (var key in props) {
                var prop = hyphenate(key);
                var value = data(el, prop);

                if (!isUndefined(value)) {

                    value = props[key] === Boolean && value === ''
                        ? true
                        : coerce(props[key], value);

                    if (prop === 'target' && (!value || startsWith(value, '_'))) {
                        continue;
                    }

                    data$1[key] = value;
                }
            }

            var options = parseOptions(data(el, name), args);

            for (var key$1 in options) {
                var prop$1 = camelize(key$1);
                if (props[prop$1] !== undefined) {
                    data$1[prop$1] = coerce(props[prop$1], options[key$1]);
                }
            }

            return data$1;
        }

        function registerComputed(component, key, cb) {
            Object.defineProperty(component, key, {

                enumerable: true,

                get: function() {

                    var _computeds = component._computeds;
                    var $props = component.$props;
                    var $el = component.$el;

                    if (!hasOwn(_computeds, key)) {
                        _computeds[key] = (cb.get || cb).call(component, $props, $el);
                    }

                    return _computeds[key];
                },

                set: function(value) {

                    var _computeds = component._computeds;

                    _computeds[key] = cb.set ? cb.set.call(component, value) : value;

                    if (isUndefined(_computeds[key])) {
                        delete _computeds[key];
                    }
                }

            });
        }

        function registerEvent(component, event, key) {

            if (!isPlainObject(event)) {
                event = ({name: key, handler: event});
            }

            var name = event.name;
            var el = event.el;
            var handler = event.handler;
            var capture = event.capture;
            var passive = event.passive;
            var delegate = event.delegate;
            var filter = event.filter;
            var self = event.self;
            el = isFunction(el)
                ? el.call(component)
                : el || component.$el;

            if (isArray(el)) {
                el.forEach(function (el) { return registerEvent(component, assign({}, event, {el: el}), key); });
                return;
            }

            if (!el || filter && !filter.call(component)) {
                return;
            }

            component._events.push(
                on(
                    el,
                    name,
                    !delegate
                        ? null
                        : isString(delegate)
                            ? delegate
                            : delegate.call(component),
                    isString(handler) ? component[handler] : handler.bind(component),
                    {passive: passive, capture: capture, self: self}
                )
            );

        }

        function notIn(options, key) {
            return options.every(function (arr) { return !arr || !hasOwn(arr, key); });
        }

        function coerce(type, value) {

            if (type === Boolean) {
                return toBoolean(value);
            } else if (type === Number) {
                return toNumber(value);
            } else if (type === 'list') {
                return toList(value);
            }

            return type ? type(value) : value;
        }

        function normalizeData(ref, ref$1) {
            var data = ref.data;
            var el = ref.el;
            var args = ref$1.args;
            var props = ref$1.props; if ( props === void 0 ) props = {};

            data = isArray(data)
                ? !isEmpty(args)
                    ? data.slice(0, args.length).reduce(function (data, value, index) {
                        if (isPlainObject(value)) {
                            assign(data, value);
                        } else {
                            data[args[index]] = value;
                        }
                        return data;
                    }, {})
                    : undefined
                : data;

            if (data) {
                for (var key in data) {
                    if (isUndefined(data[key])) {
                        delete data[key];
                    } else {
                        data[key] = props[key] ? coerce(props[key], data[key]) : data[key];
                    }
                }
            }

            return data;
        }
    }

    function instanceAPI (UIkit) {

        var DATA = UIkit.data;

        UIkit.prototype.$mount = function (el) {

            var ref = this.$options;
            var name = ref.name;

            if (!el[DATA]) {
                el[DATA] = {};
            }

            if (el[DATA][name]) {
                return;
            }

            el[DATA][name] = this;

            this.$el = this.$options.el = this.$options.el || el;

            if (within(el, document)) {
                this._callConnected();
            }
        };

        UIkit.prototype.$emit = function (e) {
            this._callUpdate(e);
        };

        UIkit.prototype.$reset = function () {
            this._callDisconnected();
            this._callConnected();
        };

        UIkit.prototype.$destroy = function (removeEl) {
            if ( removeEl === void 0 ) removeEl = false;


            var ref = this.$options;
            var el = ref.el;
            var name = ref.name;

            if (el) {
                this._callDisconnected();
            }

            this._callHook('destroy');

            if (!el || !el[DATA]) {
                return;
            }

            delete el[DATA][name];

            if (!isEmpty(el[DATA])) {
                delete el[DATA];
            }

            if (removeEl) {
                remove(this.$el);
            }
        };

        UIkit.prototype.$create = function (component, element, data) {
            return UIkit[component](element, data);
        };

        UIkit.prototype.$update = UIkit.update;
        UIkit.prototype.$getComponent = UIkit.getComponent;

        var names = {};
        Object.defineProperties(UIkit.prototype, {

            $container: Object.getOwnPropertyDescriptor(UIkit, 'container'),

            $name: {

                get: function() {
                    var ref = this.$options;
                    var name = ref.name;

                    if (!names[name]) {
                        names[name] = UIkit.prefix + hyphenate(name);
                    }

                    return names[name];
                }

            }

        });

    }

    var UIkit = function (options) {
        this._init(options);
    };

    UIkit.util = util;
    UIkit.data = '__uikit__';
    UIkit.prefix = 'uk-';
    UIkit.options = {};

    globalAPI(UIkit);
    hooksAPI(UIkit);
    stateAPI(UIkit);
    componentAPI(UIkit);
    instanceAPI(UIkit);

    var Class = {

        connected: function() {
            !hasClass(this.$el, this.$name) && addClass(this.$el, this.$name);
        }

    };

    var Togglable = {

        props: {
            cls: Boolean,
            animation: 'list',
            duration: Number,
            origin: String,
            transition: String,
            queued: Boolean
        },

        data: {
            cls: false,
            animation: [false],
            duration: 200,
            origin: false,
            transition: 'linear',
            queued: false,

            initProps: {
                overflow: '',
                height: '',
                paddingTop: '',
                paddingBottom: '',
                marginTop: '',
                marginBottom: ''
            },

            hideProps: {
                overflow: 'hidden',
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0
            }

        },

        computed: {

            hasAnimation: function(ref) {
                var animation = ref.animation;

                return !!animation[0];
            },

            hasTransition: function(ref) {
                var animation = ref.animation;

                return this.hasAnimation && animation[0] === true;
            }

        },

        methods: {

            toggleElement: function(targets, show, animate) {
                var this$1 = this;

                return new Promise(function (resolve) {

                    targets = toNodes(targets);

                    var all = function (targets) { return Promise.all(targets.map(function (el) { return this$1._toggleElement(el, show, animate); })); };
                    var toggled = targets.filter(function (el) { return this$1.isToggled(el); });
                    var untoggled = targets.filter(function (el) { return !includes(toggled, el); });

                    var p;

                    if (!this$1.queued || !isUndefined(animate) || !isUndefined(show) || !this$1.hasAnimation || targets.length < 2) {

                        p = all(untoggled.concat(toggled));

                    } else {

                        var body = document.body;
                        var scroll = body.scrollTop;
                        var el = toggled[0];
                        var inProgress = Animation.inProgress(el) && hasClass(el, 'uk-animation-leave')
                                || Transition.inProgress(el) && el.style.height === '0px';

                        p = all(toggled);

                        if (!inProgress) {
                            p = p.then(function () {
                                var p = all(untoggled);
                                body.scrollTop = scroll;
                                return p;
                            });
                        }

                    }

                    p.then(resolve, noop);

                });
            },

            toggleNow: function(targets, show) {
                var this$1 = this;

                return new Promise(function (resolve) { return Promise.all(toNodes(targets).map(function (el) { return this$1._toggleElement(el, show, false); })).then(resolve, noop); });
            },

            isToggled: function(el) {
                var nodes = toNodes(el || this.$el);
                return this.cls
                    ? hasClass(nodes, this.cls.split(' ')[0])
                    : !hasAttr(nodes, 'hidden');
            },

            updateAria: function(el) {
                if (this.cls === false) {
                    attr(el, 'aria-hidden', !this.isToggled(el));
                }
            },

            _toggleElement: function(el, show, animate) {
                var this$1 = this;


                show = isBoolean(show)
                    ? show
                    : Animation.inProgress(el)
                        ? hasClass(el, 'uk-animation-leave')
                        : Transition.inProgress(el)
                            ? el.style.height === '0px'
                            : !this.isToggled(el);

                if (!trigger(el, ("before" + (show ? 'show' : 'hide')), [this])) {
                    return Promise.reject();
                }

                var promise = (
                    isFunction(animate)
                        ? animate
                        : animate === false || !this.hasAnimation
                            ? this._toggle
                            : this.hasTransition
                                ? toggleHeight(this)
                                : toggleAnimation(this)
                )(el, show);

                trigger(el, show ? 'show' : 'hide', [this]);

                var final = function () {
                    trigger(el, show ? 'shown' : 'hidden', [this$1]);
                    this$1.$update(el);
                };

                return promise ? promise.then(final) : Promise.resolve(final());
            },

            _toggle: function(el, toggled) {

                if (!el) {
                    return;
                }

                toggled = Boolean(toggled);

                var changed;
                if (this.cls) {
                    changed = includes(this.cls, ' ') || toggled !== hasClass(el, this.cls);
                    changed && toggleClass(el, this.cls, includes(this.cls, ' ') ? undefined : toggled);
                } else {
                    changed = toggled === hasAttr(el, 'hidden');
                    changed && attr(el, 'hidden', !toggled ? '' : null);
                }

                $$('[autofocus]', el).some(function (el) { return isVisible(el) ? el.focus() || true : el.blur(); });

                this.updateAria(el);
                changed && this.$update(el);
            }

        }

    };

    function toggleHeight(ref) {
        var isToggled = ref.isToggled;
        var duration = ref.duration;
        var initProps = ref.initProps;
        var hideProps = ref.hideProps;
        var transition = ref.transition;
        var _toggle = ref._toggle;

        return function (el, show) {

            var inProgress = Transition.inProgress(el);
            var inner = el.hasChildNodes ? toFloat(css(el.firstElementChild, 'marginTop')) + toFloat(css(el.lastElementChild, 'marginBottom')) : 0;
            var currentHeight = isVisible(el) ? height(el) + (inProgress ? 0 : inner) : 0;

            Transition.cancel(el);

            if (!isToggled(el)) {
                _toggle(el, true);
            }

            height(el, '');

            // Update child components first
            fastdom.flush();

            var endHeight = height(el) + (inProgress ? 0 : inner);
            height(el, currentHeight);

            return (show
                    ? Transition.start(el, assign({}, initProps, {overflow: 'hidden', height: endHeight}), Math.round(duration * (1 - currentHeight / endHeight)), transition)
                    : Transition.start(el, hideProps, Math.round(duration * (currentHeight / endHeight)), transition).then(function () { return _toggle(el, false); })
            ).then(function () { return css(el, initProps); });

        };
    }

    function toggleAnimation(ref) {
        var animation = ref.animation;
        var duration = ref.duration;
        var origin = ref.origin;
        var _toggle = ref._toggle;

        return function (el, show) {

            Animation.cancel(el);

            if (show) {
                _toggle(el, true);
                return Animation.in(el, animation[0], duration, origin);
            }

            return Animation.out(el, animation[1] || animation[0], duration, origin).then(function () { return _toggle(el, false); });
        };
    }

    var Accordion = {

        mixins: [Class, Togglable],

        props: {
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            transition: String
        },

        data: {
            targets: '> *',
            active: false,
            animation: [true],
            collapsible: true,
            multiple: false,
            clsOpen: 'uk-open',
            toggle: '> .uk-accordion-title',
            content: '> .uk-accordion-content',
            transition: 'ease'
        },

        computed: {

            items: function(ref, $el) {
                var targets = ref.targets;

                return $$(targets, $el);
            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ((this.targets) + " " + (this.$props.toggle));
                },

                handler: function(e) {
                    e.preventDefault();
                    this.toggle(index($$(((this.targets) + " " + (this.$props.toggle)), this.$el), e.current));
                }

            }

        ],

        connected: function() {

            if (this.active === false) {
                return;
            }

            var active = this.items[Number(this.active)];
            if (active && !hasClass(active, this.clsOpen)) {
                this.toggle(active, false);
            }
        },

        update: function() {
            var this$1 = this;


            this.items.forEach(function (el) { return this$1._toggle($(this$1.content, el), hasClass(el, this$1.clsOpen)); });

            var active = !this.collapsible && !hasClass(this.items, this.clsOpen) && this.items[0];
            if (active) {
                this.toggle(active, false);
            }
        },

        methods: {

            toggle: function(item, animate) {
                var this$1 = this;


                var index = getIndex(item, this.items);
                var active = filter(this.items, ("." + (this.clsOpen)));

                item = this.items[index];

                item && [item]
                    .concat(!this.multiple && !includes(active, item) && active || [])
                    .forEach(function (el) {

                        var isItem = el === item;
                        var state = isItem && !hasClass(el, this$1.clsOpen);

                        if (!state && isItem && !this$1.collapsible && active.length < 2) {
                            return;
                        }

                        toggleClass(el, this$1.clsOpen, state);

                        var content = el._wrapper ? el._wrapper.firstElementChild : $(this$1.content, el);

                        if (!el._wrapper) {
                            el._wrapper = wrapAll(content, '<div>');
                            attr(el._wrapper, 'hidden', state ? '' : null);
                        }

                        this$1._toggle(content, true);
                        this$1.toggleElement(el._wrapper, state, animate).then(function () {

                            if (hasClass(el, this$1.clsOpen) !== state) {
                                return;
                            }

                            if (!state) {
                                this$1._toggle(content, false);
                            }

                            el._wrapper = null;
                            unwrap(content);

                        });

                    });
            }

        }

    };

    var Alert = {

        mixins: [Class, Togglable],

        args: 'animation',

        props: {
            close: String
        },

        data: {
            animation: [true],
            selClose: '.uk-alert-close',
            duration: 150,
            hideProps: assign({opacity: 0}, Togglable.data.hideProps)
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selClose;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.close();
                }

            }

        ],

        methods: {

            close: function() {
                var this$1 = this;

                this.toggleElement(this.$el).then(function () { return this$1.$destroy(true); });
            }

        }

    };

    function Core (UIkit) {

        ready(function () {

            UIkit.update();
            on(window, 'load resize', function () { return UIkit.update(null, 'resize'); });
            on(document, 'loadedmetadata load', function (ref) {
                var target = ref.target;

                return UIkit.update(target, 'resize');
            }, true);

            // throttle `scroll` event (Safari triggers multiple `scroll` events per frame)
            var pending;
            on(window, 'scroll', function (e) {

                if (pending) {
                    return;
                }
                pending = true;
                fastdom.write(function () { return pending = false; });

                var target = e.target;
                UIkit.update(target.nodeType !== 1 ? document.body : target, e.type);

            }, {passive: true, capture: true});

            var started = 0;
            on(document, 'animationstart', function (ref) {
                var target = ref.target;

                if ((css(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {

                    started++;
                    css(document.body, 'overflowX', 'hidden');
                    setTimeout(function () {
                        if (!--started) {
                            css(document.body, 'overflowX', '');
                        }
                    }, toMs(css(target, 'animationDuration')) + 100);
                }
            }, true);

            var off;
            on(document, pointerDown, function (e) {

                off && off();

                if (!isTouch(e)) {
                    return;
                }

                // Handle Swipe Gesture
                var pos = getEventPos(e);
                var target = 'tagName' in e.target ? e.target : e.target.parentNode;
                off = once(document, (pointerUp + " " + pointerCancel), function (e) {

                    var ref = getEventPos(e);
                    var x = ref.x;
                    var y = ref.y;

                    // swipe
                    if (target && x && Math.abs(pos.x - x) > 100 || y && Math.abs(pos.y - y) > 100) {

                        setTimeout(function () {
                            trigger(target, 'swipe');
                            trigger(target, ("swipe" + (swipeDirection(pos.x, pos.y, x, y))));
                        });

                    }

                });

                // Force click event anywhere on iOS < 13
                if (pointerDown === 'touchstart') {
                    css(document.body, 'cursor', 'pointer');
                    once(document, (pointerUp + " " + pointerCancel), function () { return setTimeout(function () { return css(document.body, 'cursor', ''); }
                        , 50); }
                    );
                }

            }, {passive: true});

        });

    }

    function swipeDirection(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
            ? x1 - x2 > 0
                ? 'Left'
                : 'Right'
            : y1 - y2 > 0
                ? 'Up'
                : 'Down';
    }

    var Video = {

        args: 'autoplay',

        props: {
            automute: Boolean,
            autoplay: Boolean
        },

        data: {
            automute: false,
            autoplay: true
        },

        computed: {

            inView: function(ref) {
                var autoplay = ref.autoplay;

                return autoplay === 'inview';
            }

        },

        connected: function() {

            if (this.inView && !hasAttr(this.$el, 'preload')) {
                this.$el.preload = 'none';
            }

            this.player = new Player(this.$el);

            if (this.automute) {
                this.player.mute();
            }

        },

        update: {

            read: function() {

                return !this.player
                    ? false
                    : {
                        visible: isVisible(this.$el) && css(this.$el, 'visibility') !== 'hidden',
                        inView: this.inView && isInView(this.$el)
                    };
            },

            write: function(ref) {
                var visible = ref.visible;
                var inView = ref.inView;


                if (!visible || this.inView && !inView) {
                    this.player.pause();
                } else if (this.autoplay === true || this.inView && inView) {
                    this.player.play();
                }

            },

            events: ['resize', 'scroll']

        }

    };

    var Cover = {

        mixins: [Class, Video],

        props: {
            width: Number,
            height: Number
        },

        data: {
            automute: true
        },

        update: {

            read: function() {

                var el = this.$el;
                var ref = el.parentNode;
                var height = ref.offsetHeight;
                var width = ref.offsetWidth;
                var dim = Dimensions.cover(
                    {
                        width: this.width || el.naturalWidth || el.videoWidth || el.clientWidth,
                        height: this.height || el.naturalHeight || el.videoHeight || el.clientHeight
                    },
                    {
                        width: width + (width % 2 ? 1 : 0),
                        height: height + (height % 2 ? 1 : 0)
                    }
                );

                if (!dim.width || !dim.height) {
                    return false;
                }

                return dim;
            },

            write: function(ref) {
                var height = ref.height;
                var width = ref.width;

                css(this.$el, {height: height, width: width});
            },

            events: ['resize']

        }

    };

    var Position = {

        props: {
            pos: String,
            offset: null,
            flip: Boolean,
            clsPos: String
        },

        data: {
            pos: ("bottom-" + (!isRtl ? 'left' : 'right')),
            flip: true,
            offset: false,
            clsPos: ''
        },

        computed: {

            pos: function(ref) {
                var pos = ref.pos;

                return (pos + (!includes(pos, '-') ? '-center' : '')).split('-');
            },

            dir: function() {
                return this.pos[0];
            },

            align: function() {
                return this.pos[1];
            }

        },

        methods: {

            positionAt: function(element, target, boundary) {

                removeClasses(element, ((this.clsPos) + "-(top|bottom|left|right)(-[a-z]+)?"));
                css(element, {top: '', left: ''});

                var node;
                var ref = this;
                var offset$1 = ref.offset;
                var axis = this.getAxis();

                if (!isNumeric(offset$1)) {
                    node = $(offset$1);
                    offset$1 = node
                        ? offset(node)[axis === 'x' ? 'left' : 'top'] - offset(target)[axis === 'x' ? 'right' : 'bottom']
                        : 0;
                }

                var ref$1 = positionAt(
                    element,
                    target,
                    axis === 'x' ? ((flipPosition(this.dir)) + " " + (this.align)) : ((this.align) + " " + (flipPosition(this.dir))),
                    axis === 'x' ? ((this.dir) + " " + (this.align)) : ((this.align) + " " + (this.dir)),
                    axis === 'x' ? ("" + (this.dir === 'left' ? -offset$1 : offset$1)) : (" " + (this.dir === 'top' ? -offset$1 : offset$1)),
                    null,
                    this.flip,
                    boundary
                ).target;
                var x = ref$1.x;
                var y = ref$1.y;

                this.dir = axis === 'x' ? x : y;
                this.align = axis === 'x' ? y : x;

                toggleClass(element, ((this.clsPos) + "-" + (this.dir) + "-" + (this.align)), this.offset === false);

            },

            getAxis: function() {
                return this.dir === 'top' || this.dir === 'bottom' ? 'y' : 'x';
            }

        }

    };

    var active;

    var Drop = {

        mixins: [Position, Togglable],

        args: 'pos',

        props: {
            mode: 'list',
            toggle: Boolean,
            boundary: Boolean,
            boundaryAlign: Boolean,
            delayShow: Number,
            delayHide: Number,
            clsDrop: String
        },

        data: {
            mode: ['click', 'hover'],
            toggle: '- *',
            boundary: window,
            boundaryAlign: false,
            delayShow: 0,
            delayHide: 800,
            clsDrop: false,
            hoverIdle: 200,
            animation: ['uk-animation-fade'],
            cls: 'uk-open'
        },

        computed: {

            boundary: function(ref, $el) {
                var boundary = ref.boundary;

                return query(boundary, $el);
            },

            clsDrop: function(ref) {
                var clsDrop = ref.clsDrop;

                return clsDrop || ("uk-" + (this.$options.name));
            },

            clsPos: function() {
                return this.clsDrop;
            }

        },

        created: function() {
            this.tracker = new MouseTracker();
        },

        connected: function() {

            addClass(this.$el, this.clsDrop);

            var ref = this.$props;
            var toggle = ref.toggle;
            this.toggle = toggle && this.$create('toggle', query(toggle, this.$el), {
                target: this.$el,
                mode: this.mode
            });

            !this.toggle && trigger(this.$el, 'updatearia');

        },

        events: [


            {

                name: 'click',

                delegate: function() {
                    return ("." + (this.clsDrop) + "-close");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.hide(false);
                }

            },

            {

                name: 'click',

                delegate: function() {
                    return 'a[href^="#"]';
                },

                handler: function(ref) {
                    var defaultPrevented = ref.defaultPrevented;
                    var hash = ref.current.hash;

                    if (!defaultPrevented && hash && !within(hash, this.$el)) {
                        this.hide(false);
                    }
                }

            },

            {

                name: 'beforescroll',

                handler: function() {
                    this.hide(false);
                }

            },

            {

                name: 'toggle',

                self: true,

                handler: function(e, toggle) {

                    e.preventDefault();

                    if (this.isToggled()) {
                        this.hide(false);
                    } else {
                        this.show(toggle, false);
                    }
                }

            },

            {

                name: pointerEnter,

                filter: function() {
                    return includes(this.mode, 'hover');
                },

                handler: function(e) {

                    if (isTouch(e)) {
                        return;
                    }

                    if (active
                        && active !== this
                        && active.toggle
                        && includes(active.toggle.mode, 'hover')
                        && !within(e.target, active.toggle.$el)
                        && !pointInRect({x: e.pageX, y: e.pageY}, offset(active.$el))
                    ) {
                        active.hide(false);
                    }

                    e.preventDefault();
                    this.show(this.toggle);
                }

            },

            {

                name: 'toggleshow',

                handler: function(e, toggle) {

                    if (toggle && !includes(toggle.target, this.$el)) {
                        return;
                    }

                    e.preventDefault();
                    this.show(toggle || this.toggle);
                }

            },

            {

                name: ("togglehide " + pointerLeave),

                handler: function(e, toggle) {

                    if (isTouch(e) || toggle && !includes(toggle.target, this.$el)) {
                        return;
                    }

                    e.preventDefault();

                    if (this.toggle && includes(this.toggle.mode, 'hover')) {
                        this.hide();
                    }
                }

            },

            {

                name: 'beforeshow',

                self: true,

                handler: function() {
                    this.clearTimers();
                    Animation.cancel(this.$el);
                    this.position();
                }

            },

            {

                name: 'show',

                self: true,

                handler: function() {
                    var this$1 = this;

                    this.tracker.init();
                    trigger(this.$el, 'updatearia');

                    // If triggered from an click event handler, delay adding the click handler
                    var off = delayOn(document, 'click', function (ref) {
                        var defaultPrevented = ref.defaultPrevented;
                        var target = ref.target;

                        if (!defaultPrevented && !within(target, this$1.$el) && !(this$1.toggle && within(target, this$1.toggle.$el))) {
                            this$1.hide(false);
                        }
                    });

                    once(this.$el, 'hide', off, {self: true});
                }

            },

            {

                name: 'beforehide',

                self: true,

                handler: function() {
                    this.clearTimers();
                }

            },

            {

                name: 'hide',

                handler: function(ref) {
                    var target = ref.target;


                    if (this.$el !== target) {
                        active = active === null && within(target, this.$el) && this.isToggled() ? this : active;
                        return;
                    }

                    active = this.isActive() ? null : active;
                    trigger(this.$el, 'updatearia');
                    this.tracker.cancel();
                }

            },

            {

                name: 'updatearia',

                self: true,

                handler: function(e, toggle) {

                    e.preventDefault();

                    this.updateAria(this.$el);

                    if (toggle || this.toggle) {
                        attr((toggle || this.toggle).$el, 'aria-expanded', this.isToggled());
                        toggleClass(this.toggle.$el, this.cls, this.isToggled());
                    }
                }
            }

        ],

        update: {

            write: function() {

                if (this.isToggled() && !Animation.inProgress(this.$el)) {
                    this.position();
                }

            },

            events: ['resize']

        },

        methods: {

            show: function(toggle, delay) {
                var this$1 = this;
                if ( delay === void 0 ) delay = true;


                var show = function () { return !this$1.isToggled() && this$1.toggleElement(this$1.$el, true); };
                var tryShow = function () {

                    this$1.toggle = toggle || this$1.toggle;

                    this$1.clearTimers();

                    if (this$1.isActive()) {
                        return;
                    } else if (delay && active && active !== this$1 && active.isDelaying) {
                        this$1.showTimer = setTimeout(this$1.show, 10);
                        return;
                    } else if (this$1.isParentOf(active)) {

                        if (active.hideTimer) {
                            active.hide(false);
                        } else {
                            return;
                        }

                    } else if (this$1.isChildOf(active)) {

                        active.clearTimers();

                    } else if (active && !this$1.isChildOf(active) && !this$1.isParentOf(active)) {

                        var prev;
                        while (active && active !== prev && !this$1.isChildOf(active)) {
                            prev = active;
                            active.hide(false);
                        }

                    }

                    if (delay && this$1.delayShow) {
                        this$1.showTimer = setTimeout(show, this$1.delayShow);
                    } else {
                        show();
                    }

                    active = this$1;
                };

                if (toggle && this.toggle && toggle.$el !== this.toggle.$el) {

                    once(this.$el, 'hide', tryShow);
                    this.hide(false);

                } else {
                    tryShow();
                }
            },

            hide: function(delay) {
                var this$1 = this;
                if ( delay === void 0 ) delay = true;


                var hide = function () { return this$1.toggleNow(this$1.$el, false); };

                this.clearTimers();

                this.isDelaying = this.tracker.movesTo(this.$el);

                if (delay && this.isDelaying) {
                    this.hideTimer = setTimeout(this.hide, this.hoverIdle);
                } else if (delay && this.delayHide) {
                    this.hideTimer = setTimeout(hide, this.delayHide);
                } else {
                    hide();
                }
            },

            clearTimers: function() {
                clearTimeout(this.showTimer);
                clearTimeout(this.hideTimer);
                this.showTimer = null;
                this.hideTimer = null;
                this.isDelaying = false;
            },

            isActive: function() {
                return active === this;
            },

            isChildOf: function(drop) {
                return drop && drop !== this && within(this.$el, drop.$el);
            },

            isParentOf: function(drop) {
                return drop && drop !== this && within(drop.$el, this.$el);
            },

            position: function() {

                removeClasses(this.$el, ((this.clsDrop) + "-(stack|boundary)"));
                css(this.$el, {top: '', left: '', display: 'block'});
                toggleClass(this.$el, ((this.clsDrop) + "-boundary"), this.boundaryAlign);

                var boundary = offset(this.boundary);
                var alignTo = this.boundaryAlign ? boundary : offset(this.toggle.$el);

                if (this.align === 'justify') {
                    var prop = this.getAxis() === 'y' ? 'width' : 'height';
                    css(this.$el, prop, alignTo[prop]);
                } else if (this.$el.offsetWidth > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
                    addClass(this.$el, ((this.clsDrop) + "-stack"));
                }

                this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);

                css(this.$el, 'display', '');

            }

        }

    };

    function delayOn(el, type, fn) {
        var off = once(el, type, function () { return off = on(el, type, fn); }
        , true);
        return function () { return off(); };
    }

    var Dropdown = {

        extends: Drop

    };

    var FormCustom = {

        mixins: [Class],

        args: 'target',

        props: {
            target: Boolean
        },

        data: {
            target: false
        },

        computed: {

            input: function(_, $el) {
                return $(selInput, $el);
            },

            state: function() {
                return this.input.nextElementSibling;
            },

            target: function(ref, $el) {
                var target = ref.target;

                return target && (target === true
                    && this.input.parentNode === $el
                    && this.input.nextElementSibling
                    || query(target, $el));
            }

        },

        update: function() {

            var ref = this;
            var target = ref.target;
            var input = ref.input;

            if (!target) {
                return;
            }

            var option;
            var prop = isInput(target) ? 'value' : 'textContent';
            var prev = target[prop];
            var value = input.files && input.files[0]
                ? input.files[0].name
                : matches(input, 'select') && (option = $$('option', input).filter(function (el) { return el.selected; })[0]) // eslint-disable-line prefer-destructuring
                    ? option.textContent
                    : input.value;

            if (prev !== value) {
                target[prop] = value;
            }

        },

        events: [

            {
                name: 'change',

                handler: function() {
                    this.$emit();
                }
            },

            {
                name: 'reset',

                el: function() {
                    return closest(this.$el, 'form');
                },

                handler: function() {
                    this.$emit();
                }
            }

        ]

    };

    // Deprecated
    var Gif = {

        update: {

            read: function(data) {

                var inview = isInView(this.$el);

                if (!inview || data.isInView === inview) {
                    return false;
                }

                data.isInView = inview;
            },

            write: function() {
                this.$el.src = this.$el.src;
            },

            events: ['scroll', 'resize']
        }

    };

    var Margin = {

        props: {
            margin: String,
            firstColumn: Boolean
        },

        data: {
            margin: 'uk-margin-small-top',
            firstColumn: 'uk-first-column'
        },

        update: {

            read: function(data) {

                var items = this.$el.children;
                var rows = [[]];

                if (!items.length || !isVisible(this.$el)) {
                    return data.rows = rows;
                }

                data.rows = getRows(items);
                data.stacks = !data.rows.some(function (row) { return row.length > 1; });

            },

            write: function(ref) {
                var this$1 = this;
                var rows = ref.rows;


                rows.forEach(function (row, i) { return row.forEach(function (el, j) {
                        toggleClass(el, this$1.margin, i !== 0);
                        toggleClass(el, this$1.firstColumn, j === 0);
                    }); }
                );

            },

            events: ['resize']

        }

    };

    function getRows(items) {
        var rows = [[]];

        for (var i = 0; i < items.length; i++) {

            var el = items[i];
            var dim = getOffset(el);

            if (!dim.height) {
                continue;
            }

            for (var j = rows.length - 1; j >= 0; j--) {

                var row = rows[j];

                if (!row[0]) {
                    row.push(el);
                    break;
                }

                var leftDim = (void 0);
                if (row[0].offsetParent === el.offsetParent) {
                    leftDim = getOffset(row[0]);
                } else {
                    dim = getOffset(el, true);
                    leftDim = getOffset(row[0], true);
                }

                if (dim.top >= leftDim.bottom - 1 && dim.top !== leftDim.top) {
                    rows.push([el]);
                    break;
                }

                if (dim.bottom > leftDim.top) {

                    if (dim.left < leftDim.left && !isRtl) {
                        row.unshift(el);
                        break;
                    }

                    row.push(el);
                    break;
                }

                if (j === 0) {
                    rows.unshift([el]);
                    break;
                }

            }

        }

        return rows;

    }

    function getOffset(element, offset) {
        var assign;

        if ( offset === void 0 ) offset = false;

        var offsetTop = element.offsetTop;
        var offsetLeft = element.offsetLeft;
        var offsetHeight = element.offsetHeight;

        if (offset) {
            (assign = offsetPosition(element), offsetTop = assign[0], offsetLeft = assign[1]);
        }

        return {
            top: offsetTop,
            left: offsetLeft,
            height: offsetHeight,
            bottom: offsetTop + offsetHeight
        };
    }

    var Grid = {

        extends: Margin,

        mixins: [Class],

        name: 'grid',

        props: {
            masonry: Boolean,
            parallax: Number
        },

        data: {
            margin: 'uk-grid-margin',
            clsStack: 'uk-grid-stack',
            masonry: false,
            parallax: 0
        },

        computed: {

            length: function(_, $el) {
                return $el.children.length;
            },

            parallax: function(ref) {
                var parallax = ref.parallax;

                return parallax && this.length ? Math.abs(parallax) : '';
            }

        },

        connected: function() {
            this.masonry && addClass(this.$el, 'uk-flex-top uk-flex-wrap-top');
        },

        update: [

            {

                read: function(ref) {
                    var rows = ref.rows;


                    if (this.masonry || this.parallax) {
                        rows = rows.map(function (elements) { return sortBy(elements, 'offsetLeft'); });

                        if (isRtl) {
                            rows.map(function (row) { return row.reverse(); });
                        }

                    }

                    var transitionInProgress = rows.some(function (elements) { return elements.some(Transition.inProgress); });
                    var translates = false;
                    var elHeight = '';

                    if (this.masonry && this.length) {

                        var height = 0;

                        translates = rows.reduce(function (translates, row, i) {

                            translates[i] = row.map(function (_, j) { return i === 0 ? 0 : toFloat(translates[i - 1][j]) + (height - toFloat(rows[i - 1][j] && rows[i - 1][j].offsetHeight)); });
                            height = row.reduce(function (height, el) { return Math.max(height, el.offsetHeight); }, 0);

                            return translates;

                        }, []);

                        elHeight = maxColumnHeight(rows) + getMarginTop(this.$el, this.margin) * (rows.length - 1);

                    }

                    var padding = this.parallax && getPaddingBottom(this.parallax, rows, translates);

                    return {padding: padding, rows: rows, translates: translates, height: !transitionInProgress ? elHeight : false};

                },

                write: function(ref) {
                    var stacks = ref.stacks;
                    var height = ref.height;
                    var padding = ref.padding;


                    toggleClass(this.$el, this.clsStack, stacks);

                    css(this.$el, 'paddingBottom', padding);
                    height !== false && css(this.$el, 'height', height);

                },

                events: ['resize']

            },

            {

                read: function(ref) {
                    var height$1 = ref.height;

                    return {
                        scrolled: this.parallax
                            ? scrolledOver(this.$el, height$1 ? height$1 - height(this.$el) : 0) * this.parallax
                            : false
                    };
                },

                write: function(ref) {
                    var rows = ref.rows;
                    var scrolled = ref.scrolled;
                    var translates = ref.translates;


                    if (scrolled === false && !translates) {
                        return;
                    }

                    rows.forEach(function (row, i) { return row.forEach(function (el, j) { return css(el, 'transform', !scrolled && !translates ? '' : ("translateY(" + ((translates && -translates[i][j]) + (scrolled ? j % 2 ? scrolled : scrolled / 8 : 0)) + "px)")); }
                        ); }
                    );

                },

                events: ['scroll', 'resize']

            }

        ]

    };

    function getPaddingBottom(distance, rows, translates) {
        var column = 0;
        var max = 0;
        var maxScrolled = 0;
        for (var i = rows.length - 1; i >= 0; i--) {
            for (var j = column; j < rows[i].length; j++) {
                var el = rows[i][j];
                var bottom = el.offsetTop + height(el) + (translates && -translates[i][j]);
                max = Math.max(max, bottom);
                maxScrolled = Math.max(maxScrolled, bottom + (j % 2 ? distance : distance / 8));
                column++;
            }
        }
        return maxScrolled - max;
    }

    function getMarginTop(root, cls) {

        var nodes = toNodes(root.children);
        var ref = nodes.filter(function (el) { return hasClass(el, cls); });
        var node = ref[0];

        return toFloat(node
            ? css(node, 'marginTop')
            : css(nodes[0], 'paddingLeft'));
    }

    function maxColumnHeight(rows) {
        return Math.max.apply(Math, rows.reduce(function (sum, row) {
            row.forEach(function (el, i) { return sum[i] = (sum[i] || 0) + el.offsetHeight; });
            return sum;
        }, []));
    }

    // IE 11 fix (min-height on a flex container won't apply to its flex items)
    var FlexBug = isIE ? {

        props: {
            selMinHeight: String
        },

        data: {
            selMinHeight: false,
            forceHeight: false
        },

        computed: {

            elements: function(ref, $el) {
                var selMinHeight = ref.selMinHeight;

                return selMinHeight ? $$(selMinHeight, $el) : [$el];
            }

        },

        update: [

            {

                read: function() {
                    css(this.elements, 'height', '');
                },

                order: -5,

                events: ['resize']

            },

            {

                write: function() {
                    var this$1 = this;

                    this.elements.forEach(function (el) {
                        var height = toFloat(css(el, 'minHeight'));
                        if (height && (this$1.forceHeight || Math.round(height + boxModelAdjust('height', el, 'content-box')) >= el.offsetHeight)) {
                            css(el, 'height', height);
                        }
                    });
                },

                order: 5,

                events: ['resize']

            }

        ]

    } : {};

    var HeightMatch = {

        mixins: [FlexBug],

        args: 'target',

        props: {
            target: String,
            row: Boolean
        },

        data: {
            target: '> *',
            row: true,
            forceHeight: true
        },

        computed: {

            elements: function(ref, $el) {
                var target = ref.target;

                return $$(target, $el);
            }

        },

        update: {

            read: function() {
                return {
                    rows: (this.row ? getRows(this.elements) : [this.elements]).map(match)
                };
            },

            write: function(ref) {
                var rows = ref.rows;

                rows.forEach(function (ref) {
                        var heights = ref.heights;
                        var elements = ref.elements;

                        return elements.forEach(function (el, i) { return css(el, 'minHeight', heights[i]); }
                    );
                }
                );
            },

            events: ['resize']

        }

    };

    function match(elements) {
        var assign;


        if (elements.length < 2) {
            return {heights: [''], elements: elements};
        }

        var ref = getHeights(elements);
        var heights = ref.heights;
        var max = ref.max;
        var hasMinHeight = elements.some(function (el) { return el.style.minHeight; });
        var hasShrunk = elements.some(function (el, i) { return !el.style.minHeight && heights[i] < max; });

        if (hasMinHeight && hasShrunk) {
            css(elements, 'minHeight', '');
            ((assign = getHeights(elements), heights = assign.heights, max = assign.max));
        }

        heights = elements.map(function (el, i) { return heights[i] === max && toFloat(el.style.minHeight).toFixed(2) !== max.toFixed(2) ? '' : max; }
        );

        return {heights: heights, elements: elements};
    }

    function getHeights(elements) {
        var heights = elements.map(function (el) { return offset(el).height - boxModelAdjust('height', el, 'content-box'); });
        var max = Math.max.apply(null, heights);

        return {heights: heights, max: max};
    }

    var HeightViewport = {

        mixins: [FlexBug],

        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
        },

        data: {
            expand: false,
            offsetTop: false,
            offsetBottom: false,
            minHeight: 0
        },

        update: {

            read: function(ref) {
                var prev = ref.minHeight;


                if (!isVisible(this.$el)) {
                    return false;
                }

                var minHeight = '';
                var box = boxModelAdjust('height', this.$el, 'content-box');

                if (this.expand) {

                    this.$el.dataset.heightExpand = '';

                    if ($('[data-height-expand]') !== this.$el) {
                        return false;
                    }

                    minHeight = height(window) - (offsetHeight(document.documentElement) - offsetHeight(this.$el)) - box || '';

                } else {

                    // on mobile devices (iOS and Android) window.innerHeight !== 100vh
                    minHeight = 'calc(100vh';

                    if (this.offsetTop) {

                        var ref$1 = offset(this.$el);
                        var top = ref$1.top;
                        minHeight += top > 0 && top < height(window) / 2 ? (" - " + top + "px") : '';

                    }

                    if (this.offsetBottom === true) {

                        minHeight += " - " + (offsetHeight(this.$el.nextElementSibling)) + "px";

                    } else if (isNumeric(this.offsetBottom)) {

                        minHeight += " - " + (this.offsetBottom) + "vh";

                    } else if (this.offsetBottom && endsWith(this.offsetBottom, 'px')) {

                        minHeight += " - " + (toFloat(this.offsetBottom)) + "px";

                    } else if (isString(this.offsetBottom)) {

                        minHeight += " - " + (offsetHeight(query(this.offsetBottom, this.$el))) + "px";

                    }

                    minHeight += (box ? (" - " + box + "px") : '') + ")";

                }

                return {minHeight: minHeight, prev: prev};
            },

            write: function(ref) {
                var minHeight = ref.minHeight;
                var prev = ref.prev;


                css(this.$el, {minHeight: minHeight});

                if (minHeight !== prev) {
                    this.$update(this.$el, 'resize');
                }

                if (this.minHeight && toFloat(css(this.$el, 'minHeight')) < this.minHeight) {
                    css(this.$el, 'minHeight', this.minHeight);
                }

            },

            events: ['resize']

        }

    };

    function offsetHeight(el) {
        return el && offset(el).height || 0;
    }

    var Svg = {

        args: 'src',

        props: {
            id: Boolean,
            icon: String,
            src: String,
            style: String,
            width: Number,
            height: Number,
            ratio: Number,
            class: String,
            strokeAnimation: Boolean,
            focusable: Boolean, // IE 11
            attributes: 'list'
        },

        data: {
            ratio: 1,
            include: ['style', 'class', 'focusable'],
            class: '',
            strokeAnimation: false
        },

        beforeConnect: function() {
            var this$1 = this;
            var assign;


            this.class += ' uk-svg';

            if (!this.icon && includes(this.src, '#')) {

                var parts = this.src.split('#');

                if (parts.length > 1) {
                    (assign = parts, this.src = assign[0], this.icon = assign[1]);
                }
            }

            this.svg = this.getSvg().then(function (el) {
                this$1.applyAttributes(el);
                return this$1.svgEl = insertSVG(el, this$1.$el);
            }, noop);

        },

        disconnected: function() {
            var this$1 = this;


            if (isVoidElement(this.$el)) {
                attr(this.$el, 'hidden', null);
            }

            if (this.svg) {
                this.svg.then(function (svg) { return (!this$1._connected || svg !== this$1.svgEl) && remove(svg); }, noop);
            }

            this.svg = this.svgEl = null;

        },

        update: {

            read: function() {
                return !!(this.strokeAnimation && this.svgEl && isVisible(this.svgEl));
            },

            write: function() {
                applyAnimation(this.svgEl);
            },

            type: ['resize']

        },

        methods: {

            getSvg: function() {
                var this$1 = this;

                return loadSVG(this.src).then(function (svg) { return parseSVG(svg, this$1.icon) || Promise.reject('SVG not found.'); }
                );
            },

            applyAttributes: function(el) {
                var this$1 = this;


                for (var prop in this.$options.props) {
                    if (this[prop] && includes(this.include, prop)) {
                        attr(el, prop, this[prop]);
                    }
                }

                for (var attribute in this.attributes) {
                    var ref = this.attributes[attribute].split(':', 2);
                    var prop$1 = ref[0];
                    var value = ref[1];
                    attr(el, prop$1, value);
                }

                if (!this.id) {
                    removeAttr(el, 'id');
                }

                var props = ['width', 'height'];
                var dimensions = [this.width, this.height];

                if (!dimensions.some(function (val) { return val; })) {
                    dimensions = props.map(function (prop) { return attr(el, prop); });
                }

                var viewBox = attr(el, 'viewBox');
                if (viewBox && !dimensions.some(function (val) { return val; })) {
                    dimensions = viewBox.split(' ').slice(2);
                }

                dimensions.forEach(function (val, i) {
                    val = (val | 0) * this$1.ratio;
                    val && attr(el, props[i], val);

                    if (val && !dimensions[i ^ 1]) {
                        removeAttr(el, props[i ^ 1]);
                    }
                });

                attr(el, 'data-svg', this.icon || this.src);

            }

        }

    };

    var svgs = {};

    function loadSVG(src) {

        if (svgs[src]) {
            return svgs[src];
        }

        return svgs[src] = new Promise(function (resolve, reject) {

            if (!src) {
                reject();
                return;
            }

            if (startsWith(src, 'data:')) {
                resolve(decodeURIComponent(src.split(',')[1]));
            } else {

                ajax(src).then(
                    function (xhr) { return resolve(xhr.response); },
                    function () { return reject('SVG not found.'); }
                );

            }

        });
    }

    function parseSVG(svg, icon) {

        if (icon && includes(svg, '<symbol')) {
            svg = parseSymbols(svg, icon) || svg;
        }

        svg = $(svg.substr(svg.indexOf('<svg')));
        return svg && svg.hasChildNodes() && svg;
    }

    var symbolRe = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g;
    var symbols = {};

    function parseSymbols(svg, icon) {

        if (!symbols[svg]) {

            symbols[svg] = {};

            var match;
            while ((match = symbolRe.exec(svg))) {
                symbols[svg][match[3]] = "<svg xmlns=\"http://www.w3.org/2000/svg\"" + (match[1]) + "svg>";
            }

            symbolRe.lastIndex = 0;

        }

        return symbols[svg][icon];
    }

    function applyAnimation(el) {

        var length = getMaxPathLength(el);

        if (length) {
            el.style.setProperty('--uk-animation-stroke', length);
        }

    }

    function getMaxPathLength(el) {
        return Math.ceil(Math.max.apply(Math, $$('[stroke]', el).map(function (stroke) { return stroke.getTotalLength && stroke.getTotalLength() || 0; }
        ).concat([0])));
    }

    function insertSVG(el, root) {
        if (isVoidElement(root) || root.tagName === 'CANVAS') {

            attr(root, 'hidden', true);

            var next = root.nextElementSibling;
            return equals(el, next)
                ? next
                : after(root, el);

        } else {

            var last = root.lastElementChild;
            return equals(el, last)
                ? last
                : append(root, el);

        }
    }

    function equals(el, other) {
        return attr(el, 'data-svg') === attr(other, 'data-svg');
    }

    var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"/></svg>";

    var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"/></svg>";

    var marker = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"4\" width=\"1\" height=\"11\"/><rect x=\"4\" y=\"9\" width=\"11\" height=\"1\"/></svg>";

    var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"9\" width=\"20\" height=\"2\"/><rect y=\"3\" width=\"20\" height=\"2\"/><rect y=\"15\" width=\"20\" height=\"2\"/></svg>";

    var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"/><rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"/></svg>";

    var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"/></svg>";

    var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"/></svg>";

    var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>";

    var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"/></svg>";

    var searchNavbar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";

    var slidenavNext = "<svg width=\"14px\" height=\"24px\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1.225,23 12.775,12 1.225,1 \"/></svg>";

    var slidenavNextLarge = "<svg width=\"25px\" height=\"40px\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"4.002,38.547 22.527,20.024 4,1.5 \"/></svg>";

    var slidenavPrevious = "<svg width=\"14px\" height=\"24px\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"12.775,1 1.225,12 12.775,23 \"/></svg>";

    var slidenavPreviousLarge = "<svg width=\"25px\" height=\"40px\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"20.527,1.5 2,20.024 20.525,38.547 \"/></svg>";

    var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"/></svg>";

    var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"/></svg>";

    var parsed = {};
    var icons = {
        spinner: spinner,
        totop: totop,
        marker: marker,
        'close-icon': closeIcon,
        'close-large': closeLarge,
        'navbar-toggle-icon': navbarToggleIcon,
        'overlay-icon': overlayIcon,
        'pagination-next': paginationNext,
        'pagination-previous': paginationPrevious,
        'search-icon': searchIcon,
        'search-large': searchLarge,
        'search-navbar': searchNavbar,
        'slidenav-next': slidenavNext,
        'slidenav-next-large': slidenavNextLarge,
        'slidenav-previous': slidenavPrevious,
        'slidenav-previous-large': slidenavPreviousLarge
    };

    var Icon = {

        install: install,

        extends: Svg,

        args: 'icon',

        props: ['icon'],

        data: {
            include: ['focusable']
        },

        isIcon: true,

        beforeConnect: function() {
            addClass(this.$el, 'uk-icon');
        },

        methods: {

            getSvg: function() {

                var icon = getIcon(applyRtl(this.icon));

                if (!icon) {
                    return Promise.reject('Icon not found.');
                }

                return Promise.resolve(icon);
            }

        }

    };

    var IconComponent = {

        args: false,

        extends: Icon,

        data: function (vm) { return ({
            icon: hyphenate(vm.constructor.options.name)
        }); },

        beforeConnect: function() {
            addClass(this.$el, this.$name);
        }

    };

    var Slidenav = {

        extends: IconComponent,

        beforeConnect: function() {
            addClass(this.$el, 'uk-slidenav');
        },

        computed: {

            icon: function(ref, $el) {
                var icon = ref.icon;

                return hasClass($el, 'uk-slidenav-large')
                    ? (icon + "-large")
                    : icon;
            }

        }

    };

    var Search = {

        extends: IconComponent,

        computed: {

            icon: function(ref, $el) {
                var icon = ref.icon;

                return hasClass($el, 'uk-search-icon') && parents($el, '.uk-search-large').length
                    ? 'search-large'
                    : parents($el, '.uk-search-navbar').length
                        ? 'search-navbar'
                        : icon;
            }

        }

    };

    var Close = {

        extends: IconComponent,

        computed: {

            icon: function() {
                return ("close-" + (hasClass(this.$el, 'uk-close-large') ? 'large' : 'icon'));
            }

        }

    };

    var Spinner = {

        extends: IconComponent,

        connected: function() {
            var this$1 = this;

            this.svg.then(function (svg) { return this$1.ratio !== 1 && css($('circle', svg), 'strokeWidth', 1 / this$1.ratio); }, noop);
        }

    };

    function install(UIkit) {
        UIkit.icon.add = function (name, svg) {
            var obj;


            var added = isString(name) ? (( obj = {}, obj[name] = svg, obj )) : name;
            each(added, function (svg, name) {
                icons[name] = svg;
                delete parsed[name];
            });

            if (UIkit._initialized) {
                apply(document.body, function (el) { return each(UIkit.getComponents(el), function (cmp) {
                        cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
                    }); }
                );
            }
        };
    }

    function getIcon(icon) {

        if (!icons[icon]) {
            return null;
        }

        if (!parsed[icon]) {
            parsed[icon] = $(icons[icon].trim());
        }

        return parsed[icon].cloneNode(true);
    }

    function applyRtl(icon) {
        return isRtl ? swap(swap(icon, 'left', 'right'), 'previous', 'next') : icon;
    }

    var Img = {

        args: 'dataSrc',

        props: {
            dataSrc: String,
            dataSrcset: Boolean,
            sizes: String,
            width: Number,
            height: Number,
            offsetTop: String,
            offsetLeft: String,
            target: String
        },

        data: {
            dataSrc: '',
            dataSrcset: false,
            sizes: false,
            width: false,
            height: false,
            offsetTop: '50vh',
            offsetLeft: 0,
            target: false
        },

        computed: {

            cacheKey: function(ref) {
                var dataSrc = ref.dataSrc;

                return ((this.$name) + "." + dataSrc);
            },

            width: function(ref) {
                var width = ref.width;
                var dataWidth = ref.dataWidth;

                return width || dataWidth;
            },

            height: function(ref) {
                var height = ref.height;
                var dataHeight = ref.dataHeight;

                return height || dataHeight;
            },

            sizes: function(ref) {
                var sizes = ref.sizes;
                var dataSizes = ref.dataSizes;

                return sizes || dataSizes;
            },

            isImg: function(_, $el) {
                return isImg($el);
            },

            target: {

                get: function(ref) {
                    var target = ref.target;

                    return [this.$el].concat(queryAll(target, this.$el));
                },

                watch: function() {
                    this.observe();
                }

            },

            offsetTop: function(ref) {
                var offsetTop = ref.offsetTop;

                return toPx(offsetTop, 'height');
            },

            offsetLeft: function(ref) {
                var offsetLeft = ref.offsetLeft;

                return toPx(offsetLeft, 'width');
            }

        },

        connected: function() {

            if (storage[this.cacheKey]) {
                setSrcAttrs(this.$el, storage[this.cacheKey] || this.dataSrc, this.dataSrcset, this.sizes);
            } else if (this.isImg && this.width && this.height) {
                setSrcAttrs(this.$el, getPlaceholderImage(this.width, this.height, this.sizes));
            }

            this.observer = new IntersectionObserver(this.load, {
                rootMargin: ((this.offsetTop) + "px " + (this.offsetLeft) + "px")
            });

            requestAnimationFrame(this.observe);

        },

        disconnected: function() {
            this.observer.disconnect();
        },

        update: {

            read: function(ref) {
                var this$1 = this;
                var image = ref.image;


                if (!image && document.readyState === 'complete') {
                    this.load(this.observer.takeRecords());
                }

                if (this.isImg) {
                    return false;
                }

                image && image.then(function (img) { return img && img.currentSrc !== '' && setSrcAttrs(this$1.$el, currentSrc(img)); });

            },

            write: function(data) {

                if (this.dataSrcset && window.devicePixelRatio !== 1) {

                    var bgSize = css(this.$el, 'backgroundSize');
                    if (bgSize.match(/^(auto\s?)+$/) || toFloat(bgSize) === data.bgSize) {
                        data.bgSize = getSourceSize(this.dataSrcset, this.sizes);
                        css(this.$el, 'backgroundSize', ((data.bgSize) + "px"));
                    }

                }

            },

            events: ['resize']

        },

        methods: {

            load: function(entries) {
                var this$1 = this;


                // Old chromium based browsers (UC Browser) did not implement `isIntersecting`
                if (!entries.some(function (entry) { return isUndefined(entry.isIntersecting) || entry.isIntersecting; })) {
                    return;
                }

                this._data.image = getImage(this.dataSrc, this.dataSrcset, this.sizes).then(function (img) {

                    setSrcAttrs(this$1.$el, currentSrc(img), img.srcset, img.sizes);
                    storage[this$1.cacheKey] = currentSrc(img);
                    return img;

                }, noop);

                this.observer.disconnect();
            },

            observe: function() {
                var this$1 = this;

                if (!this._data.image && this._connected) {
                    this.target.forEach(function (el) { return this$1.observer.observe(el); });
                }
            }

        }

    };

    function setSrcAttrs(el, src, srcset, sizes) {

        if (isImg(el)) {
            sizes && (el.sizes = sizes);
            srcset && (el.srcset = srcset);
            src && (el.src = src);
        } else if (src) {

            var change = !includes(el.style.backgroundImage, src);
            if (change) {
                css(el, 'backgroundImage', ("url(" + (escape(src)) + ")"));
                trigger(el, createEvent('load', false));
            }

        }

    }

    function getPlaceholderImage(width, height, sizes) {
        var assign;


        if (sizes) {
            ((assign = Dimensions.ratio({width: width, height: height}, 'width', toPx(sizesToPixel(sizes))), width = assign.width, height = assign.height));
        }

        return ("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + width + "\" height=\"" + height + "\"></svg>");
    }

    var sizesRe = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;
    function sizesToPixel(sizes) {
        var matches;

        sizesRe.lastIndex = 0;

        while ((matches = sizesRe.exec(sizes))) {
            if (!matches[1] || window.matchMedia(matches[1]).matches) {
                matches = evaluateSize(matches[2]);
                break;
            }
        }

        return matches || '100vw';
    }

    var sizeRe = /\d+(?:\w+|%)/g;
    var additionRe = /[+-]?(\d+)/g;
    function evaluateSize(size) {
        return startsWith(size, 'calc')
            ? size
                .substring(5, size.length - 1)
                .replace(sizeRe, function (size) { return toPx(size); })
                .replace(/ /g, '')
                .match(additionRe)
                .reduce(function (a, b) { return a + +b; }, 0)
            : size;
    }

    var srcSetRe = /\s+\d+w\s*(?:,|$)/g;
    function getSourceSize(srcset, sizes) {
        var srcSize = toPx(sizesToPixel(sizes));
        var descriptors = (srcset.match(srcSetRe) || []).map(toFloat).sort(function (a, b) { return a - b; });

        return descriptors.filter(function (size) { return size >= srcSize; })[0] || descriptors.pop() || '';
    }

    function isImg(el) {
        return el.tagName === 'IMG';
    }

    function currentSrc(el) {
        return el.currentSrc || el.src;
    }

    var key = '__test__';
    var storage;

    // workaround for Safari's private browsing mode and accessing sessionStorage in Blink
    try {
        storage = window.sessionStorage || {};
        storage[key] = 1;
        delete storage[key];
    } catch (e) {
        storage = {};
    }

    var Media = {

        props: {
            media: Boolean
        },

        data: {
            media: false
        },

        computed: {

            matchMedia: function() {
                var media = toMedia(this.media);
                return !media || window.matchMedia(media).matches;
            }

        }

    };

    function toMedia(value) {

        if (isString(value)) {
            if (value[0] === '@') {
                var name = "breakpoint-" + (value.substr(1));
                value = toFloat(getCssVar(name));
            } else if (isNaN(value)) {
                return value;
            }
        }

        return value && !isNaN(value) ? ("(min-width: " + value + "px)") : false;
    }

    var Leader = {

        mixins: [Class, Media],

        props: {
            fill: String
        },

        data: {
            fill: '',
            clsWrapper: 'uk-leader-fill',
            clsHide: 'uk-leader-hide',
            attrFill: 'data-fill'
        },

        computed: {

            fill: function(ref) {
                var fill = ref.fill;

                return fill || getCssVar('leader-fill-content');
            }

        },

        connected: function() {
            var assign;

            (assign = wrapInner(this.$el, ("<span class=\"" + (this.clsWrapper) + "\">")), this.wrapper = assign[0]);
        },

        disconnected: function() {
            unwrap(this.wrapper.childNodes);
        },

        update: {

            read: function(ref) {
                var changed = ref.changed;
                var width = ref.width;


                var prev = width;

                width = Math.floor(this.$el.offsetWidth / 2);

                return {
                    width: width,
                    fill: this.fill,
                    changed: changed || prev !== width,
                    hide: !this.matchMedia
                };
            },

            write: function(data) {

                toggleClass(this.wrapper, this.clsHide, data.hide);

                if (data.changed) {
                    data.changed = false;
                    attr(this.wrapper, this.attrFill, new Array(data.width).join(data.fill));
                }

            },

            events: ['resize']

        }

    };

    var Container = {

        props: {
            container: Boolean
        },

        data: {
            container: true
        },

        computed: {

            container: function(ref) {
                var container = ref.container;

                return container === true && this.$container || container && $(container);
            }

        }

    };

    var active$1 = [];

    var Modal = {

        mixins: [Class, Container, Togglable],

        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean
        },

        data: {
            cls: 'uk-open',
            escClose: true,
            bgClose: true,
            overlay: true,
            stack: false
        },

        computed: {

            panel: function(ref, $el) {
                var selPanel = ref.selPanel;

                return $(selPanel, $el);
            },

            transitionElement: function() {
                return this.panel;
            },

            bgClose: function(ref) {
                var bgClose = ref.bgClose;

                return bgClose && this.panel;
            }

        },

        beforeDisconnect: function() {
            if (this.isToggled()) {
                this.toggleNow(this.$el, false);
            }
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selClose;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.hide();
                }

            },

            {

                name: 'toggle',

                self: true,

                handler: function(e) {

                    if (e.defaultPrevented) {
                        return;
                    }

                    e.preventDefault();
                    this.toggle();
                }

            },

            {
                name: 'beforeshow',

                self: true,

                handler: function(e) {

                    if (includes(active$1, this)) {
                        return false;
                    }

                    if (!this.stack && active$1.length) {
                        Promise.all(active$1.map(function (modal) { return modal.hide(); })).then(this.show);
                        e.preventDefault();
                    } else {
                        active$1.push(this);
                    }
                }

            },

            {

                name: 'show',

                self: true,

                handler: function() {
                    var this$1 = this;


                    if (width(window) - width(document) && this.overlay) {
                        css(document.body, 'overflowY', 'scroll');
                    }

                    addClass(document.documentElement, this.clsPage);

                    if (this.bgClose) {
                        once(this.$el, 'hide', delayOn(document, 'click', function (ref) {
                            var defaultPrevented = ref.defaultPrevented;
                            var target = ref.target;

                            var current = last(active$1);
                            if (!defaultPrevented
                                && current === this$1
                                && (!current.overlay || within(target, current.$el))
                                && !within(target, current.panel)
                            ) {
                                current.hide();
                            }
                        }), {self: true});
                    }

                    if (this.escClose) {
                        once(this.$el, 'hide', on(document, 'keydown', function (e) {
                            var current = last(active$1);
                            if (e.keyCode === 27 && current === this$1) {
                                e.preventDefault();
                                current.hide();
                            }
                        }), {self: true});
                    }
                }

            },

            {

                name: 'hidden',

                self: true,

                handler: function() {
                    var this$1 = this;


                    active$1.splice(active$1.indexOf(this), 1);

                    if (!active$1.length) {
                        css(document.body, 'overflowY', '');
                    }

                    if (!active$1.some(function (modal) { return modal.clsPage === this$1.clsPage; })) {
                        removeClass(document.documentElement, this.clsPage);
                    }

                }

            }

        ],

        methods: {

            toggle: function() {
                return this.isToggled() ? this.hide() : this.show();
            },

            show: function() {
                var this$1 = this;


                if (this.container && this.$el.parentNode !== this.container) {
                    append(this.container, this.$el);
                    return new Promise(function (resolve) { return requestAnimationFrame(function () { return this$1.show().then(resolve); }
                        ); }
                    );
                }

                return this.toggleElement(this.$el, true, animate$1(this));
            },

            hide: function() {
                return this.toggleElement(this.$el, false, animate$1(this));
            }

        }

    };

    function animate$1(ref) {
        var transitionElement = ref.transitionElement;
        var _toggle = ref._toggle;

        return function (el, show) { return new Promise(function (resolve, reject) { return once(el, 'show hide', function () {
                    el._reject && el._reject();
                    el._reject = reject;

                    _toggle(el, show);

                    var off = once(transitionElement, 'transitionstart', function () {
                        once(transitionElement, 'transitionend transitioncancel', resolve, {self: true});
                        clearTimeout(timer);
                    }, {self: true});

                    var timer = setTimeout(function () {
                        off();
                        resolve();
                    }, toMs(css(transitionElement, 'transitionDuration')));

                }); }
            ); };
    }

    var Modal$1 = {

        install: install$1,

        mixins: [Modal],

        data: {
            clsPage: 'uk-modal-page',
            selPanel: '.uk-modal-dialog',
            selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
        },

        events: [

            {
                name: 'show',

                self: true,

                handler: function() {

                    if (hasClass(this.panel, 'uk-margin-auto-vertical')) {
                        addClass(this.$el, 'uk-flex');
                    } else {
                        css(this.$el, 'display', 'block');
                    }

                    height(this.$el); // force reflow
                }
            },

            {
                name: 'hidden',

                self: true,

                handler: function() {

                    css(this.$el, 'display', '');
                    removeClass(this.$el, 'uk-flex');

                }
            }

        ]

    };

    function install$1(UIkit) {

        UIkit.modal.dialog = function (content, options) {

            var dialog = UIkit.modal((" <div class=\"uk-modal\"> <div class=\"uk-modal-dialog\">" + content + "</div> </div> "), options);

            dialog.show();

            on(dialog.$el, 'hidden', function () { return Promise.resolve(function () { return dialog.$destroy(true); }); }, {self: true});

            return dialog;
        };

        UIkit.modal.alert = function (message, options) {

            options = assign({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);

            return new Promise(
                function (resolve) { return on(UIkit.modal.dialog((" <div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + (options.labels.ok) + "</button> </div> "), options).$el, 'hide', resolve); }
            );
        };

        UIkit.modal.confirm = function (message, options) {

            options = assign({bgClose: false, escClose: true, labels: UIkit.modal.labels}, options);

            return new Promise(function (resolve, reject) {

                var confirm = UIkit.modal.dialog((" <form> <div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (options.labels.cancel) + "</button> <button class=\"uk-button uk-button-primary\" autofocus>" + (options.labels.ok) + "</button> </div> </form> "), options);

                var resolved = false;

                on(confirm.$el, 'submit', 'form', function (e) {
                    e.preventDefault();
                    resolve();
                    resolved = true;
                    confirm.hide();
                });
                on(confirm.$el, 'hide', function () {
                    if (!resolved) {
                        reject();
                    }
                });

            });
        };

        UIkit.modal.prompt = function (message, value, options) {

            options = assign({bgClose: false, escClose: true, labels: UIkit.modal.labels}, options);

            return new Promise(function (resolve) {

                var prompt = UIkit.modal.dialog((" <form class=\"uk-form-stacked\"> <div class=\"uk-modal-body\"> <label>" + (isString(message) ? message : html(message)) + "</label> <input class=\"uk-input\" autofocus> </div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (options.labels.cancel) + "</button> <button class=\"uk-button uk-button-primary\">" + (options.labels.ok) + "</button> </div> </form> "), options),
                    input = $('input', prompt.$el);

                input.value = value;

                var resolved = false;

                on(prompt.$el, 'submit', 'form', function (e) {
                    e.preventDefault();
                    resolve(input.value);
                    resolved = true;
                    prompt.hide();
                });
                on(prompt.$el, 'hide', function () {
                    if (!resolved) {
                        resolve(null);
                    }
                });

            });
        };

        UIkit.modal.labels = {
            ok: 'Ok',
            cancel: 'Cancel'
        };

    }

    var Nav = {

        extends: Accordion,

        data: {
            targets: '> .uk-parent',
            toggle: '> a',
            content: '> ul'
        }

    };

    var Navbar = {

        mixins: [Class, FlexBug],

        props: {
            dropdown: String,
            mode: 'list',
            align: String,
            offset: Number,
            boundary: Boolean,
            boundaryAlign: Boolean,
            clsDrop: String,
            delayShow: Number,
            delayHide: Number,
            dropbar: Boolean,
            dropbarMode: String,
            dropbarAnchor: Boolean,
            duration: Number
        },

        data: {
            dropdown: '.uk-navbar-nav > li',
            align: !isRtl ? 'left' : 'right',
            clsDrop: 'uk-navbar-dropdown',
            mode: undefined,
            offset: undefined,
            delayShow: undefined,
            delayHide: undefined,
            boundaryAlign: undefined,
            flip: 'x',
            boundary: true,
            dropbar: false,
            dropbarMode: 'slide',
            dropbarAnchor: false,
            duration: 200,
            forceHeight: true,
            selMinHeight: '.uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle'
        },

        computed: {

            boundary: function(ref, $el) {
                var boundary = ref.boundary;
                var boundaryAlign = ref.boundaryAlign;

                return (boundary === true || boundaryAlign) ? $el : boundary;
            },

            dropbarAnchor: function(ref, $el) {
                var dropbarAnchor = ref.dropbarAnchor;

                return query(dropbarAnchor, $el);
            },

            pos: function(ref) {
                var align = ref.align;

                return ("bottom-" + align);
            },

            dropdowns: function(ref, $el) {
                var dropdown = ref.dropdown;
                var clsDrop = ref.clsDrop;

                return $$((dropdown + " ." + clsDrop), $el);
            }

        },

        beforeConnect: function() {

            var ref = this.$props;
            var dropbar = ref.dropbar;

            this.dropbar = dropbar && (query(dropbar, this.$el) || $('+ .uk-navbar-dropbar', this.$el) || $('<div></div>'));

            if (this.dropbar) {

                addClass(this.dropbar, 'uk-navbar-dropbar');

                if (this.dropbarMode === 'slide') {
                    addClass(this.dropbar, 'uk-navbar-dropbar-slide');
                }
            }

        },

        disconnected: function() {
            this.dropbar && remove(this.dropbar);
        },

        update: function() {
            var this$1 = this;


            this.$create(
                'drop',
                this.dropdowns.filter(function (el) { return !this$1.getDropdown(el); }),
                assign({}, this.$props, {boundary: this.boundary, pos: this.pos, offset: this.dropbar || this.offset})
            );

        },

        events: [

            {
                name: 'mouseover',

                delegate: function() {
                    return this.dropdown;
                },

                handler: function(ref) {
                    var current = ref.current;

                    var active = this.getActive();
                    if (active && active.toggle && !within(active.toggle.$el, current) && !active.tracker.movesTo(active.$el)) {
                        active.hide(false);
                    }
                }

            },

            {
                name: 'mouseleave',

                el: function() {
                    return this.dropbar;
                },

                handler: function() {
                    var active = this.getActive();

                    if (active && !this.dropdowns.some(function (el) { return matches(el, ':hover'); })) {
                        active.hide();
                    }
                }
            },

            {
                name: 'beforeshow',

                capture: true,

                filter: function() {
                    return this.dropbar;
                },

                handler: function() {

                    if (!this.dropbar.parentNode) {
                        after(this.dropbarAnchor || this.$el, this.dropbar);
                    }

                }
            },

            {
                name: 'show',

                capture: true,

                filter: function() {
                    return this.dropbar;
                },

                handler: function(_, drop) {

                    var $el = drop.$el;
                    var dir = drop.dir;

                    this.clsDrop && addClass($el, ((this.clsDrop) + "-dropbar"));

                    if (dir === 'bottom') {
                        this.transitionTo($el.offsetHeight + toFloat(css($el, 'marginTop')) + toFloat(css($el, 'marginBottom')), $el);
                    }
                }
            },

            {
                name: 'beforehide',

                filter: function() {
                    return this.dropbar;
                },

                handler: function(e, ref) {
                    var $el = ref.$el;


                    var active = this.getActive();

                    if (matches(this.dropbar, ':hover') && active && active.$el === $el) {
                        e.preventDefault();
                    }
                }
            },

            {
                name: 'hide',

                filter: function() {
                    return this.dropbar;
                },

                handler: function(_, ref) {
                    var $el = ref.$el;


                    var active = this.getActive();

                    if (!active || active && active.$el === $el) {
                        this.transitionTo(0);
                    }
                }
            }

        ],

        methods: {

            getActive: function() {
                var ref = this.dropdowns.map(this.getDropdown).filter(function (drop) { return drop && drop.isActive(); });
                var active = ref[0];
                return active && includes(active.mode, 'hover') && within(active.toggle.$el, this.$el) && active;
            },

            transitionTo: function(newHeight, el) {
                var this$1 = this;


                var ref = this;
                var dropbar = ref.dropbar;
                var oldHeight = isVisible(dropbar) ? height(dropbar) : 0;

                el = oldHeight < newHeight && el;

                css(el, 'clip', ("rect(0," + (el.offsetWidth) + "px," + oldHeight + "px,0)"));

                height(dropbar, oldHeight);

                Transition.cancel([el, dropbar]);
                return Promise.all([
                    Transition.start(dropbar, {height: newHeight}, this.duration),
                    Transition.start(el, {clip: ("rect(0," + (el.offsetWidth) + "px," + newHeight + "px,0)")}, this.duration)
                ])
                    .catch(noop)
                    .then(function () {
                        css(el, {clip: ''});
                        this$1.$update(dropbar);
                    });
            },

            getDropdown: function(el) {
                return this.$getComponent(el, 'drop') || this.$getComponent(el, 'dropdown');
            }

        }

    };

    var Offcanvas = {

        mixins: [Modal],

        args: 'mode',

        props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean
        },

        data: {
            mode: 'slide',
            flip: false,
            overlay: false,
            clsPage: 'uk-offcanvas-page',
            clsContainer: 'uk-offcanvas-container',
            selPanel: '.uk-offcanvas-bar',
            clsFlip: 'uk-offcanvas-flip',
            clsContainerAnimation: 'uk-offcanvas-container-animation',
            clsSidebarAnimation: 'uk-offcanvas-bar-animation',
            clsMode: 'uk-offcanvas',
            clsOverlay: 'uk-offcanvas-overlay',
            selClose: '.uk-offcanvas-close',
            container: false
        },

        computed: {

            clsFlip: function(ref) {
                var flip = ref.flip;
                var clsFlip = ref.clsFlip;

                return flip ? clsFlip : '';
            },

            clsOverlay: function(ref) {
                var overlay = ref.overlay;
                var clsOverlay = ref.clsOverlay;

                return overlay ? clsOverlay : '';
            },

            clsMode: function(ref) {
                var mode = ref.mode;
                var clsMode = ref.clsMode;

                return (clsMode + "-" + mode);
            },

            clsSidebarAnimation: function(ref) {
                var mode = ref.mode;
                var clsSidebarAnimation = ref.clsSidebarAnimation;

                return mode === 'none' || mode === 'reveal' ? '' : clsSidebarAnimation;
            },

            clsContainerAnimation: function(ref) {
                var mode = ref.mode;
                var clsContainerAnimation = ref.clsContainerAnimation;

                return mode !== 'push' && mode !== 'reveal' ? '' : clsContainerAnimation;
            },

            transitionElement: function(ref) {
                var mode = ref.mode;

                return mode === 'reveal' ? this.panel.parentNode : this.panel;
            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return 'a[href^="#"]';
                },

                handler: function(ref) {
                    var hash = ref.current.hash;
                    var defaultPrevented = ref.defaultPrevented;

                    if (!defaultPrevented && hash && $(hash, document.body)) {
                        this.hide();
                    }
                }

            },

            {
                name: 'touchstart',

                passive: true,

                el: function() {
                    return this.panel;
                },

                handler: function(ref) {
                    var targetTouches = ref.targetTouches;


                    if (targetTouches.length === 1) {
                        this.clientY = targetTouches[0].clientY;
                    }

                }

            },

            {
                name: 'touchmove',

                self: true,
                passive: false,

                filter: function() {
                    return this.overlay;
                },

                handler: function(e) {
                    e.cancelable && e.preventDefault();
                }

            },

            {
                name: 'touchmove',

                passive: false,

                el: function() {
                    return this.panel;
                },

                handler: function(e) {

                    if (e.targetTouches.length !== 1) {
                        return;
                    }

                    var clientY = event.targetTouches[0].clientY - this.clientY;
                    var ref = this.panel;
                    var scrollTop = ref.scrollTop;
                    var scrollHeight = ref.scrollHeight;
                    var clientHeight = ref.clientHeight;

                    if (clientHeight >= scrollHeight
                        || scrollTop === 0 && clientY > 0
                        || scrollHeight - scrollTop <= clientHeight && clientY < 0
                    ) {
                        e.cancelable && e.preventDefault();
                    }

                }

            },

            {
                name: 'show',

                self: true,

                handler: function() {

                    if (this.mode === 'reveal' && !hasClass(this.panel.parentNode, this.clsMode)) {
                        wrapAll(this.panel, '<div>');
                        addClass(this.panel.parentNode, this.clsMode);
                    }

                    css(document.documentElement, 'overflowY', this.overlay ? 'hidden' : '');
                    addClass(document.body, this.clsContainer, this.clsFlip);
                    css(document.body, 'touch-action', 'pan-y pinch-zoom');
                    css(this.$el, 'display', 'block');
                    addClass(this.$el, this.clsOverlay);
                    addClass(this.panel, this.clsSidebarAnimation, this.mode !== 'reveal' ? this.clsMode : '');

                    height(document.body); // force reflow
                    addClass(document.body, this.clsContainerAnimation);

                    this.clsContainerAnimation && suppressUserScale();


                }
            },

            {
                name: 'hide',

                self: true,

                handler: function() {
                    removeClass(document.body, this.clsContainerAnimation);
                    css(document.body, 'touch-action', '');
                }
            },

            {
                name: 'hidden',

                self: true,

                handler: function() {

                    this.clsContainerAnimation && resumeUserScale();

                    if (this.mode === 'reveal') {
                        unwrap(this.panel);
                    }

                    removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
                    removeClass(this.$el, this.clsOverlay);
                    css(this.$el, 'display', '');
                    removeClass(document.body, this.clsContainer, this.clsFlip);

                    css(document.documentElement, 'overflowY', '');

                }
            },

            {
                name: 'swipeLeft swipeRight',

                handler: function(e) {

                    if (this.isToggled() && endsWith(e.type, 'Left') ^ this.flip) {
                        this.hide();
                    }

                }
            }

        ]

    };

    // Chrome in responsive mode zooms page upon opening offcanvas
    function suppressUserScale() {
        getViewport().content += ',user-scalable=0';
    }

    function resumeUserScale() {
        var viewport = getViewport();
        viewport.content = viewport.content.replace(/,user-scalable=0$/, '');
    }

    function getViewport() {
        return $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">');
    }

    var OverflowAuto = {

        mixins: [Class],

        props: {
            selContainer: String,
            selContent: String
        },

        data: {
            selContainer: '.uk-modal',
            selContent: '.uk-modal-dialog'
        },

        computed: {

            container: function(ref, $el) {
                var selContainer = ref.selContainer;

                return closest($el, selContainer);
            },

            content: function(ref, $el) {
                var selContent = ref.selContent;

                return closest($el, selContent);
            }

        },

        connected: function() {
            css(this.$el, 'minHeight', 150);
        },

        update: {

            read: function() {

                if (!this.content || !this.container) {
                    return false;
                }

                return {
                    current: toFloat(css(this.$el, 'maxHeight')),
                    max: Math.max(150, height(this.container) - (offset(this.content).height - height(this.$el)))
                };
            },

            write: function(ref) {
                var current = ref.current;
                var max = ref.max;

                css(this.$el, 'maxHeight', max);
                if (Math.round(current) !== Math.round(max)) {
                    trigger(this.$el, 'resize');
                }
            },

            events: ['resize']

        }

    };

    var Responsive = {

        props: ['width', 'height'],

        connected: function() {
            addClass(this.$el, 'uk-responsive-width');
        },

        update: {

            read: function() {
                return isVisible(this.$el) && this.width && this.height
                    ? {width: width(this.$el.parentNode), height: this.height}
                    : false;
            },

            write: function(dim) {
                height(this.$el, Dimensions.contain({
                    height: this.height,
                    width: this.width
                }, dim).height);
            },

            events: ['resize']

        }

    };

    var Scroll = {

        props: {
            duration: Number,
            offset: Number
        },

        data: {
            duration: 1000,
            offset: 0
        },

        methods: {

            scrollTo: function(el) {
                var this$1 = this;


                el = el && $(el) || document.body;

                var docHeight = height(document);
                var winHeight = height(window);

                var target = offset(el).top - this.offset;
                if (target + winHeight > docHeight) {
                    target = docHeight - winHeight;
                }

                if (!trigger(this.$el, 'beforescroll', [this, el])) {
                    return;
                }

                var start = Date.now();
                var startY = window.pageYOffset;
                var step = function () {

                    var currentY = startY + (target - startY) * ease(clamp((Date.now() - start) / this$1.duration));

                    scrollTop(window, currentY);

                    // scroll more if we have not reached our destination
                    if (currentY !== target) {
                        requestAnimationFrame(step);
                    } else {
                        trigger(this$1.$el, 'scrolled', [this$1, el]);
                    }

                };

                step();

            }

        },

        events: {

            click: function(e) {

                if (e.defaultPrevented) {
                    return;
                }

                e.preventDefault();
                this.scrollTo(escape(decodeURIComponent(this.$el.hash)).substr(1));
            }

        }

    };

    function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    var Scrollspy = {

        args: 'cls',

        props: {
            cls: String,
            target: String,
            hidden: Boolean,
            offsetTop: Number,
            offsetLeft: Number,
            repeat: Boolean,
            delay: Number
        },

        data: function () { return ({
            cls: false,
            target: false,
            hidden: true,
            offsetTop: 0,
            offsetLeft: 0,
            repeat: false,
            delay: 0,
            inViewClass: 'uk-scrollspy-inview'
        }); },

        computed: {

            elements: function(ref, $el) {
                var target = ref.target;

                return target ? $$(target, $el) : [$el];
            }

        },

        update: [

            {

                write: function() {
                    if (this.hidden) {
                        css(filter(this.elements, (":not(." + (this.inViewClass) + ")")), 'visibility', 'hidden');
                    }
                }

            },

            {

                read: function(ref) {
                    var this$1 = this;
                    var update = ref.update;


                    if (!update) {
                        return;
                    }

                    this.elements.forEach(function (el) {

                        var state = el._ukScrollspyState;

                        if (!state) {
                            state = {cls: data(el, 'uk-scrollspy-class') || this$1.cls};
                        }

                        state.show = isInView(el, this$1.offsetTop, this$1.offsetLeft);
                        el._ukScrollspyState = state;

                    });

                },

                write: function(data) {
                    var this$1 = this;


                    // Let child components be applied at least once first
                    if (!data.update) {
                        this.$emit();
                        return data.update = true;
                    }

                    this.elements.forEach(function (el) {

                        var state = el._ukScrollspyState;
                        var toggle = function (inview) {

                            css(el, 'visibility', !inview && this$1.hidden ? 'hidden' : '');

                            toggleClass(el, this$1.inViewClass, inview);
                            toggleClass(el, state.cls);

                            trigger(el, inview ? 'inview' : 'outview');

                            state.inview = inview;

                            this$1.$update(el);

                        };

                        if (state.show && !state.inview && !state.queued) {

                            state.queued = true;

                            data.promise = (data.promise || Promise.resolve()).then(function () { return new Promise(function (resolve) { return setTimeout(resolve, this$1.delay); }
                                ); }
                            ).then(function () {
                                toggle(true);
                                setTimeout(function () { return state.queued = false; }, 300);
                            });

                        } else if (!state.show && state.inview && !state.queued && this$1.repeat) {

                            toggle(false);

                        }

                    });

                },

                events: ['scroll', 'resize']

            }

        ]

    };

    var ScrollspyNav = {

        props: {
            cls: String,
            closest: String,
            scroll: Boolean,
            overflow: Boolean,
            offset: Number
        },

        data: {
            cls: 'uk-active',
            closest: false,
            scroll: false,
            overflow: true,
            offset: 0
        },

        computed: {

            links: function(_, $el) {
                return $$('a[href^="#"]', $el).filter(function (el) { return el.hash; });
            },

            elements: function(ref) {
                var selector = ref.closest;

                return closest(this.links, selector || '*');
            },

            targets: function() {
                return $$(this.links.map(function (el) { return escape(el.hash).substr(1); }).join(','));
            }

        },

        update: [

            {

                read: function() {
                    if (this.scroll) {
                        this.$create('scroll', this.links, {offset: this.offset || 0});
                    }
                }

            },

            {

                read: function(data) {
                    var this$1 = this;


                    var scroll = window.pageYOffset + this.offset + 1;
                    var max = height(document) - height(window) + this.offset;

                    data.active = false;

                    this.targets.every(function (el, i) {

                        var ref = offset(el);
                        var top = ref.top;
                        var last = i + 1 === this$1.targets.length;

                        if (!this$1.overflow && (i === 0 && top > scroll || last && top + el.offsetTop < scroll)) {
                            return false;
                        }

                        if (!last && offset(this$1.targets[i + 1]).top <= scroll) {
                            return true;
                        }

                        if (scroll >= max) {
                            for (var j = this$1.targets.length - 1; j > i; j--) {
                                if (isInView(this$1.targets[j])) {
                                    el = this$1.targets[j];
                                    break;
                                }
                            }
                        }

                        return !(data.active = $(filter(this$1.links, ("[href=\"#" + (el.id) + "\"]"))));

                    });

                },

                write: function(ref) {
                    var active = ref.active;


                    this.links.forEach(function (el) { return el.blur(); });
                    removeClass(this.elements, this.cls);

                    if (active) {
                        trigger(this.$el, 'active', [active, addClass(this.closest ? closest(active, this.closest) : active, this.cls)]);
                    }

                },

                events: ['scroll', 'resize']

            }

        ]

    };

    var Sticky = {

        mixins: [Class, Media],

        props: {
            top: null,
            bottom: Boolean,
            offset: String,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            widthElement: Boolean,
            showOnUp: Boolean,
            targetOffset: Number
        },

        data: {
            top: 0,
            bottom: false,
            offset: 0,
            animation: '',
            clsActive: 'uk-active',
            clsInactive: '',
            clsFixed: 'uk-sticky-fixed',
            clsBelow: 'uk-sticky-below',
            selTarget: '',
            widthElement: false,
            showOnUp: false,
            targetOffset: false
        },

        computed: {

            offset: function(ref) {
                var offset = ref.offset;

                return toPx(offset);
            },

            selTarget: function(ref, $el) {
                var selTarget = ref.selTarget;

                return selTarget && $(selTarget, $el) || $el;
            },

            widthElement: function(ref, $el) {
                var widthElement = ref.widthElement;

                return query(widthElement, $el) || this.placeholder;
            },

            isActive: {

                get: function() {
                    return hasClass(this.selTarget, this.clsActive);
                },

                set: function(value) {
                    if (value && !this.isActive) {
                        replaceClass(this.selTarget, this.clsInactive, this.clsActive);
                        trigger(this.$el, 'active');
                    } else if (!value && !hasClass(this.selTarget, this.clsInactive)) {
                        replaceClass(this.selTarget, this.clsActive, this.clsInactive);
                        trigger(this.$el, 'inactive');
                    }
                }

            }

        },

        connected: function() {
            this.placeholder = $('+ .uk-sticky-placeholder', this.$el) || $('<div class="uk-sticky-placeholder"></div>');
            this.isFixed = false;
            this.isActive = false;
        },

        disconnected: function() {

            if (this.isFixed) {
                this.hide();
                removeClass(this.selTarget, this.clsInactive);
            }

            remove(this.placeholder);
            this.placeholder = null;
            this.widthElement = null;
        },

        events: [

            {

                name: 'load hashchange popstate',

                el: window,

                handler: function() {
                    var this$1 = this;


                    if (!(this.targetOffset !== false && location.hash && window.pageYOffset > 0)) {
                        return;
                    }

                    var target = $(location.hash);

                    if (target) {
                        fastdom.read(function () {

                            var ref = offset(target);
                            var top = ref.top;
                            var elTop = offset(this$1.$el).top;
                            var elHeight = this$1.$el.offsetHeight;

                            if (this$1.isFixed && elTop + elHeight >= top && elTop <= top + target.offsetHeight) {
                                scrollTop(window, top - elHeight - (isNumeric(this$1.targetOffset) ? this$1.targetOffset : 0) - this$1.offset);
                            }

                        });
                    }

                }

            }

        ],

        update: [

            {

                read: function(ref, type) {
                    var height = ref.height;


                    if (this.isActive && type !== 'update') {

                        this.hide();
                        height = this.$el.offsetHeight;
                        this.show();

                    }

                    height = !this.isActive ? this.$el.offsetHeight : height;

                    this.topOffset = offset(this.isFixed ? this.placeholder : this.$el).top;
                    this.bottomOffset = this.topOffset + height;

                    var bottom = parseProp('bottom', this);

                    this.top = Math.max(toFloat(parseProp('top', this)), this.topOffset) - this.offset;
                    this.bottom = bottom && bottom - height;
                    this.inactive = !this.matchMedia;

                    return {
                        lastScroll: false,
                        height: height,
                        margins: css(this.$el, ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'])
                    };
                },

                write: function(ref) {
                    var height = ref.height;
                    var margins = ref.margins;


                    var ref$1 = this;
                    var placeholder = ref$1.placeholder;

                    css(placeholder, assign({height: height}, margins));

                    if (!within(placeholder, document)) {
                        after(this.$el, placeholder);
                        attr(placeholder, 'hidden', '');
                    }

                    // ensure active/inactive classes are applied
                    this.isActive = this.isActive;

                },

                events: ['resize']

            },

            {

                read: function(ref) {
                    var scroll = ref.scroll; if ( scroll === void 0 ) scroll = 0;


                    this.width = (isVisible(this.widthElement) ? this.widthElement : this.$el).offsetWidth;

                    this.scroll = window.pageYOffset;

                    return {
                        dir: scroll <= this.scroll ? 'down' : 'up',
                        scroll: this.scroll,
                        visible: isVisible(this.$el),
                        top: offsetPosition(this.placeholder)[0]
                    };
                },

                write: function(data, type) {
                    var this$1 = this;


                    var initTimestamp = data.initTimestamp; if ( initTimestamp === void 0 ) initTimestamp = 0;
                    var dir = data.dir;
                    var lastDir = data.lastDir;
                    var lastScroll = data.lastScroll;
                    var scroll = data.scroll;
                    var top = data.top;
                    var visible = data.visible;
                    var now = performance.now();

                    data.lastScroll = scroll;

                    if (scroll < 0 || scroll === lastScroll || !visible || this.disabled || this.showOnUp && type !== 'scroll') {
                        return;
                    }

                    if (now - initTimestamp > 300 || dir !== lastDir) {
                        data.initScroll = scroll;
                        data.initTimestamp = now;
                    }

                    data.lastDir = dir;

                    if (this.showOnUp && Math.abs(data.initScroll - scroll) <= 30 && Math.abs(lastScroll - scroll) <= 10) {
                        return;
                    }

                    if (this.inactive
                        || scroll < this.top
                        || this.showOnUp && (scroll <= this.top || dir === 'down' || dir === 'up' && !this.isFixed && scroll <= this.bottomOffset)
                    ) {

                        if (!this.isFixed) {

                            if (Animation.inProgress(this.$el) && top > scroll) {
                                Animation.cancel(this.$el);
                                this.hide();
                            }

                            return;
                        }

                        this.isFixed = false;

                        if (this.animation && scroll > this.topOffset) {
                            Animation.cancel(this.$el);
                            Animation.out(this.$el, this.animation).then(function () { return this$1.hide(); }, noop);
                        } else {
                            this.hide();
                        }

                    } else if (this.isFixed) {

                        this.update();

                    } else if (this.animation) {

                        Animation.cancel(this.$el);
                        this.show();
                        Animation.in(this.$el, this.animation).catch(noop);

                    } else {
                        this.show();
                    }

                },

                events: ['resize', 'scroll']

            }

        ],

        methods: {

            show: function() {

                this.isFixed = true;
                this.update();
                attr(this.placeholder, 'hidden', null);

            },

            hide: function() {

                this.isActive = false;
                removeClass(this.$el, this.clsFixed, this.clsBelow);
                css(this.$el, {position: '', top: '', width: ''});
                attr(this.placeholder, 'hidden', '');

            },

            update: function() {

                var active = this.top !== 0 || this.scroll > this.top;
                var top = Math.max(0, this.offset);

                if (this.bottom && this.scroll > this.bottom - this.offset) {
                    top = this.bottom - this.scroll;
                }

                css(this.$el, {
                    position: 'fixed',
                    top: (top + "px"),
                    width: this.width
                });

                this.isActive = active;
                toggleClass(this.$el, this.clsBelow, this.scroll > this.bottomOffset);
                addClass(this.$el, this.clsFixed);

            }

        }

    };

    function parseProp(prop, ref) {
        var $props = ref.$props;
        var $el = ref.$el;
        var propOffset = ref[(prop + "Offset")];


        var value = $props[prop];

        if (!value) {
            return;
        }

        if (isNumeric(value) && isString(value) && value.match(/^-?\d/)) {

            return propOffset + toPx(value);

        } else {

            return offset(value === true ? $el.parentNode : query(value, $el)).bottom;

        }
    }

    var Switcher = {

        mixins: [Togglable],

        args: 'connect',

        props: {
            connect: String,
            toggle: String,
            active: Number,
            swiping: Boolean
        },

        data: {
            connect: '~.uk-switcher',
            toggle: '> * > :first-child',
            active: 0,
            swiping: true,
            cls: 'uk-active',
            clsContainer: 'uk-switcher',
            attrItem: 'uk-switcher-item',
            queued: true
        },

        computed: {

            connects: function(ref, $el) {
                var connect = ref.connect;

                return queryAll(connect, $el);
            },

            toggles: function(ref, $el) {
                var toggle = ref.toggle;

                return $$(toggle, $el);
            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ((this.toggle) + ":not(.uk-disabled)");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(toNodes(this.$el.children).filter(function (el) { return within(e.current, el); })[0]);
                }

            },

            {
                name: 'click',

                el: function() {
                    return this.connects;
                },

                delegate: function() {
                    return ("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(data(e.current, this.attrItem));
                }
            },

            {
                name: 'swipeRight swipeLeft',

                filter: function() {
                    return this.swiping;
                },

                el: function() {
                    return this.connects;
                },

                handler: function(ref) {
                    var type = ref.type;

                    this.show(endsWith(type, 'Left') ? 'next' : 'previous');
                }
            }

        ],

        update: function() {
            var this$1 = this;


            this.connects.forEach(function (list) { return this$1.updateAria(list.children); });
            var ref = this.$el;
            var children = ref.children;
            this.show(filter(children, ("." + (this.cls)))[0] || children[this.active] || children[0]);

            this.swiping && css(this.connects, 'touch-action', 'pan-y pinch-zoom');

        },

        methods: {

            index: function() {
                return !isEmpty(this.connects) && index(filter(this.connects[0].children, ("." + (this.cls)))[0]);
            },

            show: function(item) {
                var this$1 = this;


                var ref = this.$el;
                var children = ref.children;
                var length = children.length;
                var prev = this.index();
                var hasPrev = prev >= 0;
                var dir = item === 'previous' ? -1 : 1;

                var toggle, active, next = getIndex(item, children, prev);

                for (var i = 0; i < length; i++, next = (next + dir + length) % length) {
                    if (!matches(this.toggles[next], '.uk-disabled *, .uk-disabled, [disabled]')) {
                        toggle = this.toggles[next];
                        active = children[next];
                        break;
                    }
                }

                if (!active || prev >= 0 && hasClass(active, this.cls) || prev === next) {
                    return;
                }

                removeClass(children, this.cls);
                addClass(active, this.cls);
                attr(this.toggles, 'aria-expanded', false);
                attr(toggle, 'aria-expanded', true);

                this.connects.forEach(function (list) {
                    if (!hasPrev) {
                        this$1.toggleNow(list.children[next]);
                    } else {
                        this$1.toggleElement([list.children[prev], list.children[next]]);
                    }
                });

            }

        }

    };

    var Tab = {

        mixins: [Class],

        extends: Switcher,

        props: {
            media: Boolean
        },

        data: {
            media: 960,
            attrItem: 'uk-tab-item'
        },

        connected: function() {

            var cls = hasClass(this.$el, 'uk-tab-left')
                ? 'uk-tab-left'
                : hasClass(this.$el, 'uk-tab-right')
                    ? 'uk-tab-right'
                    : false;

            if (cls) {
                this.$create('toggle', this.$el, {cls: cls, mode: 'media', media: this.media});
            }
        }

    };

    var Toggle = {

        mixins: [Media, Togglable],

        args: 'target',

        props: {
            href: String,
            target: null,
            mode: 'list'
        },

        data: {
            href: false,
            target: false,
            mode: 'click',
            queued: true
        },

        computed: {

            target: function(ref, $el) {
                var href = ref.href;
                var target = ref.target;

                target = queryAll(target || href, $el);
                return target.length && target || [$el];
            }

        },

        connected: function() {
            trigger(this.target, 'updatearia', [this]);
        },

        events: [

            {

                name: (pointerEnter + " " + pointerLeave),

                filter: function() {
                    return includes(this.mode, 'hover');
                },

                handler: function(e) {
                    if (!isTouch(e)) {
                        this.toggle(("toggle" + (e.type === pointerEnter ? 'show' : 'hide')));
                    }
                }

            },

            {

                name: 'click',

                filter: function() {
                    return includes(this.mode, 'click') || hasTouch && includes(this.mode, 'hover');
                },

                handler: function(e) {

                    // TODO better isToggled handling
                    var link;
                    if (closest(e.target, 'a[href="#"], a[href=""]')
                        || (link = closest(e.target, 'a[href]')) && (
                            this.cls
                            || !isVisible(this.target)
                            || link.hash && matches(this.target, link.hash)
                        )
                    ) {
                        e.preventDefault();
                    }

                    this.toggle();
                }

            }

        ],

        update: {

            read: function() {
                return includes(this.mode, 'media') && this.media
                    ? {match: this.matchMedia}
                    : false;
            },

            write: function(ref) {
                var match = ref.match;


                var toggled = this.isToggled(this.target);
                if (match ? !toggled : toggled) {
                    this.toggle();
                }

            },

            events: ['resize']

        },

        methods: {

            toggle: function(type) {
                if (trigger(this.target, type || 'toggle', [this])) {
                    this.toggleElement(this.target);
                }
            }

        }

    };

    function core (UIkit) {

        // core components
        UIkit.component('accordion', Accordion);
        UIkit.component('alert', Alert);
        UIkit.component('cover', Cover);
        UIkit.component('drop', Drop);
        UIkit.component('dropdown', Dropdown);
        UIkit.component('formCustom', FormCustom);
        UIkit.component('gif', Gif);
        UIkit.component('grid', Grid);
        UIkit.component('heightMatch', HeightMatch);
        UIkit.component('heightViewport', HeightViewport);
        UIkit.component('icon', Icon);
        UIkit.component('img', Img);
        UIkit.component('leader', Leader);
        UIkit.component('margin', Margin);
        UIkit.component('modal', Modal$1);
        UIkit.component('nav', Nav);
        UIkit.component('navbar', Navbar);
        UIkit.component('offcanvas', Offcanvas);
        UIkit.component('overflowAuto', OverflowAuto);
        UIkit.component('responsive', Responsive);
        UIkit.component('scroll', Scroll);
        UIkit.component('scrollspy', Scrollspy);
        UIkit.component('scrollspyNav', ScrollspyNav);
        UIkit.component('sticky', Sticky);
        UIkit.component('svg', Svg);
        UIkit.component('switcher', Switcher);
        UIkit.component('tab', Tab);
        UIkit.component('toggle', Toggle);
        UIkit.component('video', Video);

        // Icon components
        UIkit.component('close', Close);
        UIkit.component('marker', IconComponent);
        UIkit.component('navbarToggleIcon', IconComponent);
        UIkit.component('overlayIcon', IconComponent);
        UIkit.component('paginationNext', IconComponent);
        UIkit.component('paginationPrevious', IconComponent);
        UIkit.component('searchIcon', Search);
        UIkit.component('slidenavNext', Slidenav);
        UIkit.component('slidenavPrevious', Slidenav);
        UIkit.component('spinner', Spinner);
        UIkit.component('totop', IconComponent);

        // core functionality
        UIkit.use(Core);

    }

    UIkit.version = '3.2.1';

    core(UIkit);

    var Countdown = {

        mixins: [Class],

        props: {
            date: String,
            clsWrapper: String
        },

        data: {
            date: '',
            clsWrapper: '.uk-countdown-%unit%'
        },

        computed: {

            date: function(ref) {
                var date = ref.date;

                return Date.parse(date);
            },

            days: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'days'), $el);
            },

            hours: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'hours'), $el);
            },

            minutes: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'minutes'), $el);
            },

            seconds: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'seconds'), $el);
            },

            units: function() {
                var this$1 = this;

                return ['days', 'hours', 'minutes', 'seconds'].filter(function (unit) { return this$1[unit]; });
            }

        },

        connected: function() {
            this.start();
        },

        disconnected: function() {
            var this$1 = this;

            this.stop();
            this.units.forEach(function (unit) { return empty(this$1[unit]); });
        },

        events: [

            {

                name: 'visibilitychange',

                el: document,

                handler: function() {
                    if (document.hidden) {
                        this.stop();
                    } else {
                        this.start();
                    }
                }

            }

        ],

        update: {

            write: function() {
                var this$1 = this;


                var timespan = getTimeSpan(this.date);

                if (timespan.total <= 0) {

                    this.stop();

                    timespan.days
                        = timespan.hours
                        = timespan.minutes
                        = timespan.seconds
                        = 0;
                }

                this.units.forEach(function (unit) {

                    var digits = String(Math.floor(timespan[unit]));

                    digits = digits.length < 2 ? ("0" + digits) : digits;

                    var el = this$1[unit];
                    if (el.textContent !== digits) {
                        digits = digits.split('');

                        if (digits.length !== el.children.length) {
                            html(el, digits.map(function () { return '<span></span>'; }).join(''));
                        }

                        digits.forEach(function (digit, i) { return el.children[i].textContent = digit; });
                    }

                });

            }

        },

        methods: {

            start: function() {
                var this$1 = this;


                this.stop();

                if (this.date && this.units.length) {
                    this.$emit();
                    this.timer = setInterval(function () { return this$1.$emit(); }, 1000);
                }

            },

            stop: function() {

                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }

            }

        }

    };

    function getTimeSpan(date) {

        var total = date - Date.now();

        return {
            total: total,
            seconds: total / 1000 % 60,
            minutes: total / 1000 / 60 % 60,
            hours: total / 1000 / 60 / 60 % 24,
            days: total / 1000 / 60 / 60 / 24
        };
    }

    var targetClass = 'uk-animation-target';

    var Animate = {

        props: {
            animation: Number
        },

        data: {
            animation: 150
        },

        computed: {

            target: function() {
                return this.$el;
            }

        },

        methods: {

            animate: function(action) {
                var this$1 = this;


                addStyle();

                var children = toNodes(this.target.children);
                var propsFrom = children.map(function (el) { return getProps(el, true); });

                var oldHeight = height(this.target);
                var oldScrollY = window.pageYOffset;

                action();

                Transition.cancel(this.target);
                children.forEach(Transition.cancel);

                reset(this.target);
                this.$update(this.target);
                fastdom.flush();

                var newHeight = height(this.target);

                children = children.concat(toNodes(this.target.children).filter(function (el) { return !includes(children, el); }));

                var propsTo = children.map(function (el, i) { return el.parentNode && i in propsFrom
                        ? propsFrom[i]
                        ? isVisible(el)
                            ? getPositionWithMargin(el)
                            : {opacity: 0}
                        : {opacity: isVisible(el) ? 1 : 0}
                        : false; }
                );

                propsFrom = propsTo.map(function (props, i) {
                    var from = children[i].parentNode === this$1.target
                        ? propsFrom[i] || getProps(children[i])
                        : false;

                    if (from) {
                        if (!props) {
                            delete from.opacity;
                        } else if (!('opacity' in props)) {
                            var opacity = from.opacity;

                            if (opacity % 1) {
                                props.opacity = 1;
                            } else {
                                delete from.opacity;
                            }
                        }
                    }

                    return from;
                });

                addClass(this.target, targetClass);
                children.forEach(function (el, i) { return propsFrom[i] && css(el, propsFrom[i]); });
                css(this.target, 'height', oldHeight);
                scrollTop(window, oldScrollY);

                return Promise.all(children.map(function (el, i) { return propsFrom[i] && propsTo[i]
                        ? Transition.start(el, propsTo[i], this$1.animation, 'ease')
                        : Promise.resolve(); }
                ).concat(Transition.start(this.target, {height: newHeight}, this.animation, 'ease'))).then(function () {
                    children.forEach(function (el, i) { return css(el, {display: propsTo[i].opacity === 0 ? 'none' : '', zIndex: ''}); });
                    reset(this$1.target);
                    this$1.$update(this$1.target);
                    fastdom.flush(); // needed for IE11
                }, noop);

            }
        }
    };

    function getProps(el, opacity) {

        var zIndex = css(el, 'zIndex');

        return isVisible(el)
            ? assign({
                display: '',
                opacity: opacity ? css(el, 'opacity') : '0',
                pointerEvents: 'none',
                position: 'absolute',
                zIndex: zIndex === 'auto' ? index(el) : zIndex
            }, getPositionWithMargin(el))
            : false;
    }

    function reset(el) {
        css(el.children, {
            height: '',
            left: '',
            opacity: '',
            pointerEvents: '',
            position: '',
            top: '',
            width: ''
        });
        removeClass(el, targetClass);
        css(el, 'height', '');
    }

    function getPositionWithMargin(el) {
        var ref = el.getBoundingClientRect();
        var height = ref.height;
        var width = ref.width;
        var ref$1 = position(el);
        var top = ref$1.top;
        var left = ref$1.left;
        top += toFloat(css(el, 'marginTop'));

        return {top: top, left: left, height: height, width: width};
    }

    var style;

    function addStyle() {
        if (style) {
            return;
        }
        style = append(document.head, '<style>').sheet;
        style.insertRule(
            ("." + targetClass + " > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        }"), 0
        );
    }

    var Filter = {

        mixins: [Animate],

        args: 'target',

        props: {
            target: Boolean,
            selActive: Boolean
        },

        data: {
            target: null,
            selActive: false,
            attrItem: 'uk-filter-control',
            cls: 'uk-active',
            animation: 250
        },

        computed: {

            toggles: {

                get: function(ref, $el) {
                    var attrItem = ref.attrItem;

                    return $$(("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]"), $el);
                },

                watch: function() {
                    this.updateState();
                }

            },

            target: function(ref, $el) {
                var target = ref.target;

                return $(target, $el);
            },

            children: {

                get: function() {
                    return toNodes(this.target && this.target.children);
                },

                watch: function(list, old) {
                    if (!isEqualList(list, old)) {
                        this.updateState();
                    }
                }
            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]");
                },

                handler: function(e) {

                    e.preventDefault();
                    this.apply(e.current);

                }

            }

        ],

        connected: function() {
            var this$1 = this;


            this.updateState();

            if (this.selActive !== false) {
                var actives = $$(this.selActive, this.$el);
                this.toggles.forEach(function (el) { return toggleClass(el, this$1.cls, includes(actives, el)); });
            }

        },

        methods: {

            apply: function(el) {
                this.setState(mergeState(el, this.attrItem, this.getState()));
            },

            getState: function() {
                var this$1 = this;

                return this.toggles
                    .filter(function (item) { return hasClass(item, this$1.cls); })
                    .reduce(function (state, el) { return mergeState(el, this$1.attrItem, state); }, {filter: {'': ''}, sort: []});
            },

            setState: function(state, animate) {
                var this$1 = this;
                if ( animate === void 0 ) animate = true;


                state = assign({filter: {'': ''}, sort: []}, state);

                trigger(this.$el, 'beforeFilter', [this, state]);

                var ref = this;
                var children = ref.children;

                this.toggles.forEach(function (el) { return toggleClass(el, this$1.cls, !!matchFilter(el, this$1.attrItem, state)); });

                var apply = function () {

                    var selector = getSelector(state);

                    children.forEach(function (el) { return css(el, 'display', selector && !matches(el, selector) ? 'none' : ''); });

                    var ref = state.sort;
                    var sort = ref[0];
                    var order = ref[1];

                    if (sort) {
                        var sorted = sortItems(children, sort, order);
                        if (!isEqual(sorted, children)) {
                            sorted.forEach(function (el) { return append(this$1.target, el); });
                        }
                    }

                };

                if (animate) {
                    this.animate(apply).then(function () { return trigger(this$1.$el, 'afterFilter', [this$1]); });
                } else {
                    apply();
                    trigger(this.$el, 'afterFilter', [this]);
                }

            },

            updateState: function() {
                var this$1 = this;

                fastdom.write(function () { return this$1.setState(this$1.getState(), false); });
            }

        }

    };

    function getFilter(el, attr) {
        return parseOptions(data(el, attr), ['filter']);
    }

    function mergeState(el, attr, state) {

        var filterBy = getFilter(el, attr);
        var filter = filterBy.filter;
        var group = filterBy.group;
        var sort = filterBy.sort;
        var order = filterBy.order; if ( order === void 0 ) order = 'asc';

        if (filter || isUndefined(sort)) {

            if (group) {

                if (filter) {
                    delete state.filter[''];
                    state.filter[group] = filter;
                } else {
                    delete state.filter[group];

                    if (isEmpty(state.filter) || '' in state.filter) {
                        state.filter = {'': filter || ''};
                    }

                }

            } else {
                state.filter = {'': filter || ''};
            }

        }

        if (!isUndefined(sort)) {
            state.sort = [sort, order];
        }

        return state;
    }

    function matchFilter(el, attr, ref) {
        var stateFilter = ref.filter; if ( stateFilter === void 0 ) stateFilter = {'': ''};
        var ref_sort = ref.sort;
        var stateSort = ref_sort[0];
        var stateOrder = ref_sort[1];


        var ref$1 = getFilter(el, attr);
        var filter = ref$1.filter; if ( filter === void 0 ) filter = '';
        var group = ref$1.group; if ( group === void 0 ) group = '';
        var sort = ref$1.sort;
        var order = ref$1.order; if ( order === void 0 ) order = 'asc';

        return isUndefined(sort)
            ? group in stateFilter && filter === stateFilter[group]
                || !filter && group && !(group in stateFilter) && !stateFilter['']
            : stateSort === sort && stateOrder === order;
    }

    function isEqualList(listA, listB) {
        return listA.length === listB.length
            && listA.every(function (el) { return ~listB.indexOf(el); });
    }

    function getSelector(ref) {
        var filter = ref.filter;

        var selector = '';
        each(filter, function (value) { return selector += value || ''; });
        return selector;
    }

    function sortItems(nodes, sort, order) {
        return assign([], nodes).sort(function (a, b) { return data(a, sort).localeCompare(data(b, sort), undefined, {numeric: true}) * (order === 'asc' || -1); });
    }

    var Animations = {

        slide: {

            show: function(dir) {
                return [
                    {transform: translate(dir * -100)},
                    {transform: translate()}
                ];
            },

            percent: function(current) {
                return translated(current);
            },

            translate: function(percent, dir) {
                return [
                    {transform: translate(dir * -100 * percent)},
                    {transform: translate(dir * 100 * (1 - percent))}
                ];
            }

        }

    };

    function translated(el) {
        return Math.abs(css(el, 'transform').split(',')[4] / el.offsetWidth) || 0;
    }

    function translate(value, unit) {
        if ( value === void 0 ) value = 0;
        if ( unit === void 0 ) unit = '%';

        value += value ? unit : '';
        return isIE ? ("translateX(" + value + ")") : ("translate3d(" + value + ", 0, 0)"); // currently not translate3d in IE, translate3d within translate3d does not work while transitioning
    }

    function scale3d(value) {
        return ("scale3d(" + value + ", " + value + ", 1)");
    }

    var Animations$1 = assign({}, Animations, {

        fade: {

            show: function() {
                return [
                    {opacity: 0},
                    {opacity: 1}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent},
                    {opacity: percent}
                ];
            }

        },

        scale: {

            show: function() {
                return [
                    {opacity: 0, transform: scale3d(1 - .2)},
                    {opacity: 1, transform: scale3d(1)}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent, transform: scale3d(1 - .2 * percent)},
                    {opacity: percent, transform: scale3d(1 - .2 + .2 * percent)}
                ];
            }

        }

    });

    function Transitioner(prev, next, dir, ref) {
        var animation = ref.animation;
        var easing = ref.easing;


        var percent = animation.percent;
        var translate = animation.translate;
        var show = animation.show; if ( show === void 0 ) show = noop;
        var props = show(dir);
        var deferred = new Deferred();

        return {

            dir: dir,

            show: function(duration, percent, linear) {
                var this$1 = this;
                if ( percent === void 0 ) percent = 0;


                var timing = linear ? 'linear' : easing;
                duration -= Math.round(duration * clamp(percent, -1, 1));

                this.translate(percent);

                triggerUpdate(next, 'itemin', {percent: percent, duration: duration, timing: timing, dir: dir});
                triggerUpdate(prev, 'itemout', {percent: 1 - percent, duration: duration, timing: timing, dir: dir});

                Promise.all([
                    Transition.start(next, props[1], duration, timing),
                    Transition.start(prev, props[0], duration, timing)
                ]).then(function () {
                    this$1.reset();
                    deferred.resolve();
                }, noop);

                return deferred.promise;
            },

            stop: function() {
                return Transition.stop([next, prev]);
            },

            cancel: function() {
                Transition.cancel([next, prev]);
            },

            reset: function() {
                for (var prop in props[0]) {
                    css([next, prev], prop, '');
                }
            },

            forward: function(duration, percent) {
                if ( percent === void 0 ) percent = this.percent();

                Transition.cancel([next, prev]);
                return this.show(duration, percent, true);

            },

            translate: function(percent) {

                this.reset();

                var props = translate(percent, dir);
                css(next, props[1]);
                css(prev, props[0]);
                triggerUpdate(next, 'itemtranslatein', {percent: percent, dir: dir});
                triggerUpdate(prev, 'itemtranslateout', {percent: 1 - percent, dir: dir});

            },

            percent: function() {
                return percent(prev || next, next, dir);
            },

            getDistance: function() {
                return prev && prev.offsetWidth;
            }

        };

    }

    function triggerUpdate(el, type, data) {
        trigger(el, createEvent(type, false, false, data));
    }

    var SliderAutoplay = {

        props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
        },

        data: {
            autoplay: false,
            autoplayInterval: 7000,
            pauseOnHover: true
        },

        connected: function() {
            this.autoplay && this.startAutoplay();
        },

        disconnected: function() {
            this.stopAutoplay();
        },

        update: function() {
            attr(this.slides, 'tabindex', '-1');
        },

        events: [

            {

                name: 'visibilitychange',

                el: document,

                filter: function() {
                    return this.autoplay;
                },

                handler: function() {
                    if (document.hidden) {
                        this.stopAutoplay();
                    } else {
                        this.startAutoplay();
                    }
                }

            }

        ],

        methods: {

            startAutoplay: function() {
                var this$1 = this;


                this.stopAutoplay();

                this.interval = setInterval(
                    function () { return (!this$1.draggable || !$(':focus', this$1.$el))
                        && (!this$1.pauseOnHover || !matches(this$1.$el, ':hover'))
                        && !this$1.stack.length
                        && this$1.show('next'); },
                    this.autoplayInterval
                );

            },

            stopAutoplay: function() {
                this.interval && clearInterval(this.interval);
            }

        }

    };

    var SliderDrag = {

        props: {
            draggable: Boolean
        },

        data: {
            draggable: true,
            threshold: 10
        },

        created: function() {
            var this$1 = this;


            ['start', 'move', 'end'].forEach(function (key) {

                var fn = this$1[key];
                this$1[key] = function (e) {

                    var pos = getEventPos(e).x * (isRtl ? -1 : 1);

                    this$1.prevPos = pos !== this$1.pos ? this$1.pos : this$1.prevPos;
                    this$1.pos = pos;

                    fn(e);
                };

            });

        },

        events: [

            {

                name: pointerDown,

                delegate: function() {
                    return this.selSlides;
                },

                handler: function(e) {

                    if (!this.draggable
                        || !isTouch(e) && hasTextNodesOnly(e.target)
                        || closest(e.target, selInput)
                        || e.button > 0
                        || this.length < 2
                    ) {
                        return;
                    }

                    this.start(e);
                }

            },

            {

                // Workaround for iOS 11 bug: https://bugs.webkit.org/show_bug.cgi?id=184250

                name: 'touchmove',
                passive: false,
                handler: 'move',
                delegate: function() {
                    return this.selSlides;
                }

            },

            {
                name: 'dragstart',

                handler: function(e) {
                    e.preventDefault();
                }
            }

        ],

        methods: {

            start: function() {
                var this$1 = this;


                this.drag = this.pos;

                if (this._transitioner) {

                    this.percent = this._transitioner.percent();
                    this.drag += this._transitioner.getDistance() * this.percent * this.dir;

                    this._transitioner.cancel();
                    this._transitioner.translate(this.percent);

                    this.dragging = true;

                    this.stack = [];

                } else {
                    this.prevIndex = this.index;
                }

                // See above workaround notice
                var off = pointerMove !== 'touchmove'
                    ? on(document, pointerMove, this.move, {passive: false})
                    : noop;
                this.unbindMove = function () {
                    off();
                    this$1.unbindMove = null;
                };
                on(window, 'scroll', this.unbindMove);
                on(document, pointerUp, this.end, true);

                css(this.list, 'userSelect', 'none');

            },

            move: function(e) {
                var this$1 = this;


                // See above workaround notice
                if (!this.unbindMove) {
                    return;
                }

                var distance = this.pos - this.drag;

                if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
                    return;
                }

                css(this.list, 'pointerEvents', 'none');

                e.cancelable && e.preventDefault();

                this.dragging = true;
                this.dir = (distance < 0 ? 1 : -1);

                var ref = this;
                var slides = ref.slides;
                var ref$1 = this;
                var prevIndex = ref$1.prevIndex;
                var dis = Math.abs(distance);
                var nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                var width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                while (nextIndex !== prevIndex && dis > width) {

                    this.drag -= width * this.dir;

                    prevIndex = nextIndex;
                    dis -= width;
                    nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                    width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                }

                this.percent = dis / width;

                var prev = slides[prevIndex];
                var next = slides[nextIndex];
                var changed = this.index !== nextIndex;
                var edge = prevIndex === nextIndex;

                var itemShown;

                [this.index, this.prevIndex].filter(function (i) { return !includes([nextIndex, prevIndex], i); }).forEach(function (i) {
                    trigger(slides[i], 'itemhidden', [this$1]);

                    if (edge) {
                        itemShown = true;
                        this$1.prevIndex = prevIndex;
                    }

                });

                if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
                    trigger(slides[this.index], 'itemshown', [this]);
                }

                if (changed) {
                    this.prevIndex = prevIndex;
                    this.index = nextIndex;

                    !edge && trigger(prev, 'beforeitemhide', [this]);
                    trigger(next, 'beforeitemshow', [this]);
                }

                this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);

                if (changed) {
                    !edge && trigger(prev, 'itemhide', [this]);
                    trigger(next, 'itemshow', [this]);
                }

            },

            end: function() {

                off(window, 'scroll', this.unbindMove);
                this.unbindMove && this.unbindMove();
                off(document, pointerUp, this.end, true);

                if (this.dragging) {

                    this.dragging = null;

                    if (this.index === this.prevIndex) {
                        this.percent = 1 - this.percent;
                        this.dir *= -1;
                        this._show(false, this.index, true);
                        this._transitioner = null;
                    } else {

                        var dirChange = (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
                        this.index = dirChange ? this.index : this.prevIndex;

                        if (dirChange) {
                            this.percent = 1 - this.percent;
                        }

                        this.show(this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? 'next' : 'previous', true);
                    }

                }

                css(this.list, {userSelect: '', pointerEvents: ''});

                this.drag
                    = this.percent
                    = null;

            }

        }

    };

    function hasTextNodesOnly(el) {
        return !el.children.length && el.childNodes.length;
    }

    var SliderNav = {

        data: {
            selNav: false
        },

        computed: {

            nav: function(ref, $el) {
                var selNav = ref.selNav;

                return $(selNav, $el);
            },

            selNavItem: function(ref) {
                var attrItem = ref.attrItem;

                return ("[" + attrItem + "],[data-" + attrItem + "]");
            },

            navItems: function(_, $el) {
                return $$(this.selNavItem, $el);
            }

        },

        update: {

            write: function() {
                var this$1 = this;


                if (this.nav && this.length !== this.nav.children.length) {
                    html(this.nav, this.slides.map(function (_, i) { return ("<li " + (this$1.attrItem) + "=\"" + i + "\"><a href=\"#\"></a></li>"); }).join(''));
                }

                toggleClass($$(this.selNavItem, this.$el).concat(this.nav), 'uk-hidden', !this.maxIndex);

                this.updateNav();

            },

            events: ['resize']

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selNavItem;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(data(e.current, this.attrItem));
                }

            },

            {

                name: 'itemshow',
                handler: 'updateNav'

            }

        ],

        methods: {

            updateNav: function() {
                var this$1 = this;


                var i = this.getValidIndex();
                this.navItems.forEach(function (el) {

                    var cmd = data(el, this$1.attrItem);

                    toggleClass(el, this$1.clsActive, toNumber(cmd) === i);
                    toggleClass(el, 'uk-invisible', this$1.finite && (cmd === 'previous' && i === 0 || cmd === 'next' && i >= this$1.maxIndex));
                });

            }

        }

    };

    var Slider = {

        mixins: [SliderAutoplay, SliderDrag, SliderNav],

        props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number,
            selSlides: String
        },

        data: function () { return ({
            easing: 'ease',
            finite: false,
            velocity: 1,
            index: 0,
            prevIndex: -1,
            stack: [],
            percent: 0,
            clsActive: 'uk-active',
            clsActivated: false,
            Transitioner: false,
            transitionOptions: {}
        }); },

        connected: function() {
            this.prevIndex = -1;
            this.index = this.getValidIndex(this.index);
            this.stack = [];
        },

        disconnected: function() {
            removeClass(this.slides, this.clsActive);
        },

        computed: {

            duration: function(ref, $el) {
                var velocity = ref.velocity;

                return speedUp($el.offsetWidth / velocity);
            },

            list: function(ref, $el) {
                var selList = ref.selList;

                return $(selList, $el);
            },

            maxIndex: function() {
                return this.length - 1;
            },

            selSlides: function(ref) {
                var selList = ref.selList;
                var selSlides = ref.selSlides;

                return (selList + " " + (selSlides || '> *'));
            },

            slides: {

                get: function() {
                    return $$(this.selSlides, this.$el);
                },

                watch: function() {
                    this.$reset();
                }

            },

            length: function() {
                return this.slides.length;
            }

        },

        events: {

            itemshown: function() {
                this.$update(this.list);
            }

        },

        methods: {

            show: function(index, force) {
                var this$1 = this;
                if ( force === void 0 ) force = false;


                if (this.dragging || !this.length) {
                    return;
                }

                var ref = this;
                var stack = ref.stack;
                var queueIndex = force ? 0 : stack.length;
                var reset = function () {
                    stack.splice(queueIndex, 1);

                    if (stack.length) {
                        this$1.show(stack.shift(), true);
                    }
                };

                stack[force ? 'unshift' : 'push'](index);

                if (!force && stack.length > 1) {

                    if (stack.length === 2) {
                        this._transitioner.forward(Math.min(this.duration, 200));
                    }

                    return;
                }

                var prevIndex = this.index;
                var prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
                var nextIndex = this.getIndex(index, this.index);
                var next = this.slides[nextIndex];

                if (prev === next) {
                    reset();
                    return;
                }

                this.dir = getDirection(index, prevIndex);
                this.prevIndex = prevIndex;
                this.index = nextIndex;

                prev && trigger(prev, 'beforeitemhide', [this]);
                if (!trigger(next, 'beforeitemshow', [this, prev])) {
                    this.index = this.prevIndex;
                    reset();
                    return;
                }

                var promise = this._show(prev, next, force).then(function () {

                    prev && trigger(prev, 'itemhidden', [this$1]);
                    trigger(next, 'itemshown', [this$1]);

                    return new Promise(function (resolve) {
                        fastdom.write(function () {
                            stack.shift();
                            if (stack.length) {
                                this$1.show(stack.shift(), true);
                            } else {
                                this$1._transitioner = null;
                            }
                            resolve();
                        });
                    });

                });

                prev && trigger(prev, 'itemhide', [this]);
                trigger(next, 'itemshow', [this]);

                return promise;

            },

            getIndex: function(index, prev) {
                if ( index === void 0 ) index = this.index;
                if ( prev === void 0 ) prev = this.index;

                return clamp(getIndex(index, this.slides, prev, this.finite), 0, this.maxIndex);
            },

            getValidIndex: function(index, prevIndex) {
                if ( index === void 0 ) index = this.index;
                if ( prevIndex === void 0 ) prevIndex = this.prevIndex;

                return this.getIndex(index, prevIndex);
            },

            _show: function(prev, next, force) {

                this._transitioner = this._getTransitioner(
                    prev,
                    next,
                    this.dir,
                    assign({
                        easing: force
                            ? next.offsetWidth < 600
                                ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' /* easeOutQuad */
                                : 'cubic-bezier(0.165, 0.84, 0.44, 1)' /* easeOutQuart */
                            : this.easing
                    }, this.transitionOptions)
                );

                if (!force && !prev) {
                    this._transitioner.translate(1);
                    return Promise.resolve();
                }

                var ref = this.stack;
                var length = ref.length;
                return this._transitioner[length > 1 ? 'forward' : 'show'](length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration, this.percent);

            },

            _getDistance: function(prev, next) {
                return this._getTransitioner(prev, prev !== next && next).getDistance();
            },

            _translate: function(percent, prev, next) {
                if ( prev === void 0 ) prev = this.prevIndex;
                if ( next === void 0 ) next = this.index;

                var transitioner = this._getTransitioner(prev !== next ? prev : false, next);
                transitioner.translate(percent);
                return transitioner;
            },

            _getTransitioner: function(prev, next, dir, options) {
                if ( prev === void 0 ) prev = this.prevIndex;
                if ( next === void 0 ) next = this.index;
                if ( dir === void 0 ) dir = this.dir || 1;
                if ( options === void 0 ) options = this.transitionOptions;

                return new this.Transitioner(
                    isNumber(prev) ? this.slides[prev] : prev,
                    isNumber(next) ? this.slides[next] : next,
                    dir * (isRtl ? -1 : 1),
                    options
                );
            }

        }

    };

    function getDirection(index, prevIndex) {
        return index === 'next'
            ? 1
            : index === 'previous'
                ? -1
                : index < prevIndex
                    ? -1
                    : 1;
    }

    function speedUp(x) {
        return .5 * x + 300; // parabola through (400,500; 600,600; 1800,1200)
    }

    var Slideshow = {

        mixins: [Slider],

        props: {
            animation: String
        },

        data: {
            animation: 'slide',
            clsActivated: 'uk-transition-active',
            Animations: Animations,
            Transitioner: Transitioner
        },

        computed: {

            animation: function(ref) {
                var animation = ref.animation;
                var Animations = ref.Animations;

                return assign(animation in Animations ? Animations[animation] : Animations.slide, {name: animation});
            },

            transitionOptions: function() {
                return {animation: this.animation};
            }

        },

        events: {

            'itemshow itemhide itemshown itemhidden': function(ref) {
                var target = ref.target;

                this.$update(target);
            },

            beforeitemshow: function(ref) {
                var target = ref.target;

                addClass(target, this.clsActive);
            },

            itemshown: function(ref) {
                var target = ref.target;

                addClass(target, this.clsActivated);
            },

            itemhidden: function(ref) {
                var target = ref.target;

                removeClass(target, this.clsActive, this.clsActivated);
            }

        }

    };

    var lightboxPanel = {

        mixins: [Container, Modal, Togglable, Slideshow],

        functional: true,

        props: {
            delayControls: Number,
            preload: Number,
            videoAutoplay: Boolean,
            template: String
        },

        data: function () { return ({
            preload: 1,
            videoAutoplay: false,
            delayControls: 3000,
            items: [],
            cls: 'uk-open',
            clsPage: 'uk-lightbox-page',
            selList: '.uk-lightbox-items',
            attrItem: 'uk-lightbox-item',
            selClose: '.uk-close-large',
            selCaption: '.uk-lightbox-caption',
            pauseOnHover: false,
            velocity: 2,
            Animations: Animations$1,
            template: "<div class=\"uk-lightbox uk-overflow-hidden\"> <ul class=\"uk-lightbox-items\"></ul> <div class=\"uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque\"> <button class=\"uk-lightbox-toolbar-icon uk-close-large\" type=\"button\" uk-close></button> </div> <a class=\"uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade\" href=\"#\" uk-slidenav-previous uk-lightbox-item=\"previous\"></a> <a class=\"uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade\" href=\"#\" uk-slidenav-next uk-lightbox-item=\"next\"></a> <div class=\"uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque\"></div> </div>"
        }); },

        created: function() {

            var $el = $(this.template);
            var list = $(this.selList, $el);
            this.items.forEach(function () { return append(list, '<li></li>'); });

            this.$mount(append(this.container, $el));

        },

        computed: {

            caption: function(ref, $el) {
                var selCaption = ref.selCaption;

                return $('.uk-lightbox-caption', $el);
            }

        },

        events: [

            {

                name: (pointerMove + " " + pointerDown + " keydown"),

                handler: 'showControls'

            },

            {

                name: 'click',

                self: true,

                delegate: function() {
                    return this.selSlides;
                },

                handler: function(e) {

                    if (e.defaultPrevented) {
                        return;
                    }

                    this.hide();
                }

            },

            {

                name: 'shown',

                self: true,

                handler: function() {
                    this.showControls();
                }

            },

            {

                name: 'hide',

                self: true,

                handler: function() {

                    this.hideControls();

                    removeClass(this.slides, this.clsActive);
                    Transition.stop(this.slides);

                }
            },

            {

                name: 'hidden',

                self: true,

                handler: function() {
                    this.$destroy(true);
                }

            },

            {

                name: 'keyup',

                el: document,

                handler: function(e) {

                    if (!this.isToggled(this.$el)) {
                        return;
                    }

                    switch (e.keyCode) {
                        case 37:
                            this.show('previous');
                            break;
                        case 39:
                            this.show('next');
                            break;
                    }
                }
            },

            {

                name: 'beforeitemshow',

                handler: function(e) {

                    if (this.isToggled()) {
                        return;
                    }

                    this.draggable = false;

                    e.preventDefault();

                    this.toggleNow(this.$el, true);

                    this.animation = Animations$1['scale'];
                    removeClass(e.target, this.clsActive);
                    this.stack.splice(1, 0, this.index);

                }

            },

            {

                name: 'itemshow',

                handler: function(ref) {
                    var target = ref.target;


                    var i = index(target);
                    var ref$1 = this.getItem(i);
                    var caption = ref$1.caption;

                    css(this.caption, 'display', caption ? '' : 'none');
                    html(this.caption, caption);

                    for (var j = 0; j <= this.preload; j++) {
                        this.loadItem(this.getIndex(i + j));
                        this.loadItem(this.getIndex(i - j));
                    }

                }

            },

            {

                name: 'itemshown',

                handler: function() {
                    this.draggable = this.$props.draggable;
                }

            },

            {

                name: 'itemload',

                handler: function(_, item) {
                    var this$1 = this;


                    var source = item.source;
                    var type = item.type;
                    var alt = item.alt;

                    this.setItem(item, '<span uk-spinner></span>');

                    if (!source) {
                        return;
                    }

                    var matches;

                    // Image
                    if (type === 'image' || source.match(/\.(jp(e)?g|png|gif|svg|webp)($|\?)/i)) {

                        getImage(source).then(
                            function (img) { return this$1.setItem(item, ("<img width=\"" + (img.width) + "\" height=\"" + (img.height) + "\" src=\"" + source + "\" alt=\"" + (alt ? alt : '') + "\">")); },
                            function () { return this$1.setError(item); }
                        );

                        // Video
                    } else if (type === 'video' || source.match(/\.(mp4|webm|ogv)($|\?)/i)) {

                        var video = $(("<video controls playsinline" + (item.poster ? (" poster=\"" + (item.poster) + "\"") : '') + " uk-video=\"" + (this.videoAutoplay) + "\"></video>"));
                        attr(video, 'src', source);

                        once(video, 'error loadedmetadata', function (type) {
                            if (type === 'error') {
                                this$1.setError(item);
                            } else {
                                attr(video, {width: video.videoWidth, height: video.videoHeight});
                                this$1.setItem(item, video);
                            }
                        });

                        // Iframe
                    } else if (type === 'iframe' || source.match(/\.(html|php)($|\?)/i)) {

                        this.setItem(item, ("<iframe class=\"uk-lightbox-iframe\" src=\"" + source + "\" frameborder=\"0\" allowfullscreen></iframe>"));

                        // YouTube
                    } else if ((matches = source.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/) || source.match(/()youtu\.be\/(.*)/))) {

                        var id = matches[2];
                        var setIframe = function (width, height) {
                            if ( width === void 0 ) width = 640;
                            if ( height === void 0 ) height = 450;

                            return this$1.setItem(item, getIframe(("https://www.youtube" + (matches[1] || '') + ".com/embed/" + id), width, height, this$1.videoAutoplay));
                        };

                        getImage(("https://img.youtube.com/vi/" + id + "/maxresdefault.jpg")).then(
                            function (ref) {
                                var width = ref.width;
                                var height = ref.height;

                                // YouTube default 404 thumb, fall back to low resolution
                                if (width === 120 && height === 90) {
                                    getImage(("https://img.youtube.com/vi/" + id + "/0.jpg")).then(
                                        function (ref) {
                                            var width = ref.width;
                                            var height = ref.height;

                                            return setIframe(width, height);
                                    },
                                        setIframe
                                    );
                                } else {
                                    setIframe(width, height);
                                }
                            },
                            setIframe
                        );

                        // Vimeo
                    } else if ((matches = source.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/))) {

                        ajax(("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + (encodeURI(source))), {responseType: 'json', withCredentials: false})
                            .then(
                                function (ref) {
                                    var ref_response = ref.response;
                                    var height = ref_response.height;
                                    var width = ref_response.width;

                                    return this$1.setItem(item, getIframe(("https://player.vimeo.com/video/" + (matches[2])), width, height, this$1.videoAutoplay));
                        },
                                function () { return this$1.setError(item); }
                            );

                    }

                }

            }

        ],

        methods: {

            loadItem: function(index) {
                if ( index === void 0 ) index = this.index;


                var item = this.getItem(index);

                if (item.content) {
                    return;
                }

                trigger(this.$el, 'itemload', [item]);
            },

            getItem: function(index) {
                if ( index === void 0 ) index = this.index;

                return this.items[index] || {};
            },

            setItem: function(item, content) {
                assign(item, {content: content});
                var el = html(this.slides[this.items.indexOf(item)], content);
                trigger(this.$el, 'itemloaded', [this, el]);
                this.$update(el);
            },

            setError: function(item) {
                this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
            },

            showControls: function() {

                clearTimeout(this.controlsTimer);
                this.controlsTimer = setTimeout(this.hideControls, this.delayControls);

                addClass(this.$el, 'uk-active', 'uk-transition-active');

            },

            hideControls: function() {
                removeClass(this.$el, 'uk-active', 'uk-transition-active');
            }

        }

    };

    function getIframe(src, width, height, autoplay) {
        return ("<iframe src=\"" + src + "\" width=\"" + width + "\" height=\"" + height + "\" style=\"max-width: 100%; box-sizing: border-box;\" frameborder=\"0\" allowfullscreen uk-video=\"autoplay: " + autoplay + "\" uk-responsive></iframe>");
    }

    var Lightbox = {

        install: install$2,

        props: {toggle: String},

        data: {toggle: 'a'},

        computed: {

            toggles: {

                get: function(ref, $el) {
                    var toggle = ref.toggle;

                    return $$(toggle, $el);
                },

                watch: function() {
                    this.hide();
                }

            },

            items: function() {
                return uniqueBy(this.toggles.map(toItem), 'source');
            }

        },

        disconnected: function() {
            this.hide();
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ((this.toggle) + ":not(.uk-disabled)");
                },

                handler: function(e) {
                    e.preventDefault();
                    var src = data(e.current, 'href');
                    this.show(findIndex(this.items, function (ref) {
                        var source = ref.source;

                        return source === src;
                    }));
                }

            }

        ],

        methods: {

            show: function(index) {
                var this$1 = this;


                this.panel = this.panel || this.$create('lightboxPanel', assign({}, this.$props, {items: this.items}));

                on(this.panel.$el, 'hidden', function () { return this$1.panel = false; });

                return this.panel.show(index);

            },

            hide: function() {

                return this.panel && this.panel.hide();

            }

        }

    };

    function install$2(UIkit, Lightbox) {

        if (!UIkit.lightboxPanel) {
            UIkit.component('lightboxPanel', lightboxPanel);
        }

        assign(
            Lightbox.props,
            UIkit.component('lightboxPanel').options.props
        );

    }

    function toItem(el) {
        return ['href', 'caption', 'type', 'poster', 'alt'].reduce(function (obj, attr) {
            obj[attr === 'href' ? 'source' : attr] = data(el, attr);
            return obj;
        }, {});
    }

    var obj;

    var containers = {};

    var Notification = {

        functional: true,

        args: ['message', 'status'],

        data: {
            message: '',
            status: '',
            timeout: 5000,
            group: null,
            pos: 'top-center',
            clsClose: 'uk-notification-close',
            clsMsg: 'uk-notification-message'
        },

        install: install$3,

        computed: {

            marginProp: function(ref) {
                var pos = ref.pos;

                return ("margin" + (startsWith(pos, 'top') ? 'Top' : 'Bottom'));
            },

            startProps: function() {
                var obj;

                return ( obj = {opacity: 0}, obj[this.marginProp] = -this.$el.offsetHeight, obj );
            }

        },

        created: function() {

            if (!containers[this.pos]) {
                containers[this.pos] = append(this.$container, ("<div class=\"uk-notification uk-notification-" + (this.pos) + "\"></div>"));
            }

            var container = css(containers[this.pos], 'display', 'block');

            this.$mount(append(container,
                ("<div class=\"" + (this.clsMsg) + (this.status ? (" " + (this.clsMsg) + "-" + (this.status)) : '') + "\"> <a href=\"#\" class=\"" + (this.clsClose) + "\" data-uk-close></a> <div>" + (this.message) + "</div> </div>")
            ));

        },

        connected: function() {
            var this$1 = this;
            var obj;


            var margin = toFloat(css(this.$el, this.marginProp));
            Transition.start(
                css(this.$el, this.startProps),
                ( obj = {opacity: 1}, obj[this.marginProp] = margin, obj )
            ).then(function () {
                if (this$1.timeout) {
                    this$1.timer = setTimeout(this$1.close, this$1.timeout);
                }
            });

        },

        events: ( obj = {

            click: function(e) {
                if (closest(e.target, 'a[href="#"],a[href=""]')) {
                    e.preventDefault();
                }
                this.close();
            }

        }, obj[pointerEnter] = function () {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
            }, obj[pointerLeave] = function () {
                if (this.timeout) {
                    this.timer = setTimeout(this.close, this.timeout);
                }
            }, obj ),

        methods: {

            close: function(immediate) {
                var this$1 = this;


                var removeFn = function () {

                    trigger(this$1.$el, 'close', [this$1]);
                    remove(this$1.$el);

                    if (!containers[this$1.pos].children.length) {
                        css(containers[this$1.pos], 'display', 'none');
                    }

                };

                if (this.timer) {
                    clearTimeout(this.timer);
                }

                if (immediate) {
                    removeFn();
                } else {
                    Transition.start(this.$el, this.startProps).then(removeFn);
                }
            }

        }

    };

    function install$3(UIkit) {
        UIkit.notification.closeAll = function (group, immediate) {
            apply(document.body, function (el) {
                var notification = UIkit.getComponent(el, 'notification');
                if (notification && (!group || group === notification.group)) {
                    notification.close(immediate);
                }
            });
        };
    }

    var props = ['x', 'y', 'bgx', 'bgy', 'rotate', 'scale', 'color', 'backgroundColor', 'borderColor', 'opacity', 'blur', 'hue', 'grayscale', 'invert', 'saturate', 'sepia', 'fopacity', 'stroke'];

    var Parallax = {

        mixins: [Media],

        props: props.reduce(function (props, prop) {
            props[prop] = 'list';
            return props;
        }, {}),

        data: props.reduce(function (data, prop) {
            data[prop] = undefined;
            return data;
        }, {}),

        computed: {

            props: function(properties, $el) {
                var this$1 = this;


                return props.reduce(function (props, prop) {

                    if (isUndefined(properties[prop])) {
                        return props;
                    }

                    var isColor = prop.match(/color/i);
                    var isCssProp = isColor || prop === 'opacity';

                    var pos, bgPos, diff;
                    var steps = properties[prop].slice(0);

                    if (isCssProp) {
                        css($el, prop, '');
                    }

                    if (steps.length < 2) {
                        steps.unshift((prop === 'scale'
                            ? 1
                            : isCssProp
                                ? css($el, prop)
                                : 0) || 0);
                    }

                    var unit = getUnit(steps);

                    if (isColor) {

                        var ref = $el.style;
                        var color = ref.color;
                        steps = steps.map(function (step) { return parseColor($el, step); });
                        $el.style.color = color;

                    } else if (startsWith(prop, 'bg')) {

                        var attr = prop === 'bgy' ? 'height' : 'width';
                        steps = steps.map(function (step) { return toPx(step, attr, this$1.$el); });

                        css($el, ("background-position-" + (prop[2])), '');
                        bgPos = css($el, 'backgroundPosition').split(' ')[prop[2] === 'x' ? 0 : 1]; // IE 11 can't read background-position-[x|y]

                        if (this$1.covers) {

                            var min = Math.min.apply(Math, steps);
                            var max = Math.max.apply(Math, steps);
                            var down = steps.indexOf(min) < steps.indexOf(max);

                            diff = max - min;

                            steps = steps.map(function (step) { return step - (down ? min : max); });
                            pos = (down ? -diff : 0) + "px";

                        } else {

                            pos = bgPos;

                        }

                    } else {

                        steps = steps.map(toFloat);

                    }

                    if (prop === 'stroke') {

                        if (!steps.some(function (step) { return step; })) {
                            return props;
                        }

                        var length = getMaxPathLength(this$1.$el);
                        css($el, 'strokeDasharray', length);

                        if (unit === '%') {
                            steps = steps.map(function (step) { return step * length / 100; });
                        }

                        steps = steps.reverse();

                        prop = 'strokeDashoffset';
                    }

                    props[prop] = {steps: steps, unit: unit, pos: pos, bgPos: bgPos, diff: diff};

                    return props;

                }, {});

            },

            bgProps: function() {
                var this$1 = this;

                return ['bgx', 'bgy'].filter(function (bg) { return bg in this$1.props; });
            },

            covers: function(_, $el) {
                return covers($el);
            }

        },

        disconnected: function() {
            delete this._image;
        },

        update: {

            read: function(data) {
                var this$1 = this;


                data.active = this.matchMedia;

                if (!data.active) {
                    return;
                }

                if (!data.image && this.covers && this.bgProps.length) {
                    var src = css(this.$el, 'backgroundImage').replace(/^none|url\(["']?(.+?)["']?\)$/, '$1');

                    if (src) {
                        var img = new Image();
                        img.src = src;
                        data.image = img;

                        if (!img.naturalWidth) {
                            img.onload = function () { return this$1.$emit(); };
                        }
                    }

                }

                var image = data.image;

                if (!image || !image.naturalWidth) {
                    return;
                }

                var dimEl = {
                    width: this.$el.offsetWidth,
                    height: this.$el.offsetHeight
                };
                var dimImage = {
                    width: image.naturalWidth,
                    height: image.naturalHeight
                };

                var dim = Dimensions.cover(dimImage, dimEl);

                this.bgProps.forEach(function (prop) {

                    var ref = this$1.props[prop];
                    var diff = ref.diff;
                    var bgPos = ref.bgPos;
                    var steps = ref.steps;
                    var attr = prop === 'bgy' ? 'height' : 'width';
                    var span = dim[attr] - dimEl[attr];

                    if (span < diff) {
                        dimEl[attr] = dim[attr] + diff - span;
                    } else if (span > diff) {

                        var posPercentage = dimEl[attr] / toPx(bgPos, attr, this$1.$el);

                        if (posPercentage) {
                            this$1.props[prop].steps = steps.map(function (step) { return step - (span - diff) / posPercentage; });
                        }
                    }

                    dim = Dimensions.cover(dimImage, dimEl);
                });

                data.dim = dim;
            },

            write: function(ref) {
                var dim = ref.dim;
                var active = ref.active;


                if (!active) {
                    css(this.$el, {backgroundSize: '', backgroundRepeat: ''});
                    return;
                }

                dim && css(this.$el, {
                    backgroundSize: ((dim.width) + "px " + (dim.height) + "px"),
                    backgroundRepeat: 'no-repeat'
                });

            },

            events: ['resize']

        },

        methods: {

            reset: function() {
                var this$1 = this;

                each(this.getCss(0), function (_, prop) { return css(this$1.$el, prop, ''); });
            },

            getCss: function(percent) {

                var ref = this;
                var props = ref.props;
                return Object.keys(props).reduce(function (css, prop) {

                    var ref = props[prop];
                    var steps = ref.steps;
                    var unit = ref.unit;
                    var pos = ref.pos;
                    var value = getValue(steps, percent);

                    switch (prop) {

                        // transforms
                        case 'x':
                        case 'y': {
                            unit = unit || 'px';
                            css.transform += " translate" + (ucfirst(prop)) + "(" + (toFloat(value).toFixed(unit === 'px' ? 0 : 2)) + unit + ")";
                            break;
                        }
                        case 'rotate':
                            unit = unit || 'deg';
                            css.transform += " rotate(" + (value + unit) + ")";
                            break;
                        case 'scale':
                            css.transform += " scale(" + value + ")";
                            break;

                        // bg image
                        case 'bgy':
                        case 'bgx':
                            css[("background-position-" + (prop[2]))] = "calc(" + pos + " + " + value + "px)";
                            break;

                        // color
                        case 'color':
                        case 'backgroundColor':
                        case 'borderColor': {

                            var ref$1 = getStep(steps, percent);
                            var start = ref$1[0];
                            var end = ref$1[1];
                            var p = ref$1[2];

                            css[prop] = "rgba(" + (start.map(function (value, i) {
                                    value = value + p * (end[i] - value);
                                    return i === 3 ? toFloat(value) : parseInt(value, 10);
                                }).join(',')) + ")";
                            break;
                        }
                        // CSS Filter
                        case 'blur':
                            unit = unit || 'px';
                            css.filter += " blur(" + (value + unit) + ")";
                            break;
                        case 'hue':
                            unit = unit || 'deg';
                            css.filter += " hue-rotate(" + (value + unit) + ")";
                            break;
                        case 'fopacity':
                            unit = unit || '%';
                            css.filter += " opacity(" + (value + unit) + ")";
                            break;
                        case 'grayscale':
                        case 'invert':
                        case 'saturate':
                        case 'sepia':
                            unit = unit || '%';
                            css.filter += " " + prop + "(" + (value + unit) + ")";
                            break;
                        default:
                            css[prop] = value;
                    }

                    return css;

                }, {transform: '', filter: ''});

            }

        }

    };

    function parseColor(el, color) {
        return css(css(el, 'color', color), 'color')
            .split(/[(),]/g)
            .slice(1, -1)
            .concat(1)
            .slice(0, 4)
            .map(toFloat);
    }

    function getStep(steps, percent) {
        var count = steps.length - 1;
        var index = Math.min(Math.floor(count * percent), count - 1);
        var step = steps.slice(index, index + 2);

        step.push(percent === 1 ? 1 : percent % (1 / count) * count);

        return step;
    }

    function getValue(steps, percent, digits) {
        if ( digits === void 0 ) digits = 2;

        var ref = getStep(steps, percent);
        var start = ref[0];
        var end = ref[1];
        var p = ref[2];
        return (isNumber(start)
            ? start + Math.abs(start - end) * p * (start < end ? 1 : -1)
            : +end
        ).toFixed(digits);
    }

    function getUnit(steps) {
        return steps.reduce(function (unit, step) { return isString(step) && step.replace(/-|\d/g, '').trim() || unit; }, '');
    }

    function covers(el) {
        var ref = el.style;
        var backgroundSize = ref.backgroundSize;
        var covers = css(css(el, 'backgroundSize', ''), 'backgroundSize') === 'cover';
        el.style.backgroundSize = backgroundSize;
        return covers;
    }

    var Parallax$1 = {

        mixins: [Parallax],

        props: {
            target: String,
            viewport: Number,
            easing: Number
        },

        data: {
            target: false,
            viewport: 1,
            easing: 1
        },

        computed: {

            target: function(ref, $el) {
                var target = ref.target;

                return getOffsetElement(target && query(target, $el) || $el);
            }

        },

        update: {

            read: function(ref, type) {
                var percent = ref.percent;
                var active = ref.active;


                if (type !== 'scroll') {
                    percent = false;
                }

                if (!active) {
                    return;
                }

                var prev = percent;
                percent = ease$1(scrolledOver(this.target) / (this.viewport || 1), this.easing);

                return {
                    percent: percent,
                    style: prev !== percent ? this.getCss(percent) : false
                };
            },

            write: function(ref) {
                var style = ref.style;
                var active = ref.active;


                if (!active) {
                    this.reset();
                    return;
                }

                style && css(this.$el, style);

            },

            events: ['scroll', 'resize']
        }

    };

    function ease$1(percent, easing) {
        return clamp(percent * (1 - (easing - easing * percent)));
    }

    // SVG elements do not inherit from HTMLElement
    function getOffsetElement(el) {
        return el
            ? 'offsetTop' in el
                ? el
                : getOffsetElement(el.parentNode)
            : document.body;
    }

    var SliderReactive = {

        update: {

            write: function() {

                if (this.stack.length || this.dragging) {
                    return;
                }

                var index = this.getValidIndex(this.index);

                if (!~this.prevIndex || this.index !== index) {
                    this.show(index);
                }

            },

            events: ['resize']

        }

    };

    function Transitioner$1 (prev, next, dir, ref) {
        var center = ref.center;
        var easing = ref.easing;
        var list = ref.list;


        var deferred = new Deferred();

        var from = prev
            ? getLeft(prev, list, center)
            : getLeft(next, list, center) + bounds(next).width * dir;
        var to = next
            ? getLeft(next, list, center)
            : from + bounds(prev).width * dir * (isRtl ? -1 : 1);

        return {

            dir: dir,

            show: function(duration, percent, linear) {
                if ( percent === void 0 ) percent = 0;


                var timing = linear ? 'linear' : easing;
                duration -= Math.round(duration * clamp(percent, -1, 1));

                this.translate(percent);

                prev && this.updateTranslates();
                percent = prev ? percent : clamp(percent, 0, 1);
                triggerUpdate$1(this.getItemIn(), 'itemin', {percent: percent, duration: duration, timing: timing, dir: dir});
                prev && triggerUpdate$1(this.getItemIn(true), 'itemout', {percent: 1 - percent, duration: duration, timing: timing, dir: dir});

                Transition
                    .start(list, {transform: translate(-to * (isRtl ? -1 : 1), 'px')}, duration, timing)
                    .then(deferred.resolve, noop);

                return deferred.promise;

            },

            stop: function() {
                return Transition.stop(list);
            },

            cancel: function() {
                Transition.cancel(list);
            },

            reset: function() {
                css(list, 'transform', '');
            },

            forward: function(duration, percent) {
                if ( percent === void 0 ) percent = this.percent();

                Transition.cancel(list);
                return this.show(duration, percent, true);
            },

            translate: function(percent) {

                var distance = this.getDistance() * dir * (isRtl ? -1 : 1);

                css(list, 'transform', translate(clamp(
                    -to + (distance - distance * percent),
                    -getWidth(list),
                    bounds(list).width
                ) * (isRtl ? -1 : 1), 'px'));

                this.updateTranslates();

                if (prev) {
                    percent = clamp(percent, -1, 1);
                    triggerUpdate$1(this.getItemIn(), 'itemtranslatein', {percent: percent, dir: dir});
                    triggerUpdate$1(this.getItemIn(true), 'itemtranslateout', {percent: 1 - percent, dir: dir});
                }

            },

            percent: function() {
                return Math.abs((css(list, 'transform').split(',')[4] * (isRtl ? -1 : 1) + from) / (to - from));
            },

            getDistance: function() {
                return Math.abs(to - from);
            },

            getItemIn: function(out) {
                if ( out === void 0 ) out = false;


                var actives = this.getActives();
                var all = sortBy(slides(list), 'offsetLeft');
                var i = index(all, actives[dir * (out ? -1 : 1) > 0 ? actives.length - 1 : 0]);

                return ~i && all[i + (prev && !out ? dir : 0)];

            },

            getActives: function() {

                var left = getLeft(prev || next, list, center);

                return sortBy(slides(list).filter(function (slide) {
                    var slideLeft = getElLeft(slide, list);
                    return slideLeft >= left && slideLeft + bounds(slide).width <= bounds(list).width + left;
                }), 'offsetLeft');

            },

            updateTranslates: function() {

                var actives = this.getActives();

                slides(list).forEach(function (slide) {
                    var isActive = includes(actives, slide);

                    triggerUpdate$1(slide, ("itemtranslate" + (isActive ? 'in' : 'out')), {
                        percent: isActive ? 1 : 0,
                        dir: slide.offsetLeft <= next.offsetLeft ? 1 : -1
                    });
                });
            }

        };

    }

    function getLeft(el, list, center) {

        var left = getElLeft(el, list);

        return center
            ? left - centerEl(el, list)
            : Math.min(left, getMax(list));

    }

    function getMax(list) {
        return Math.max(0, getWidth(list) - bounds(list).width);
    }

    function getWidth(list) {
        return slides(list).reduce(function (right, el) { return bounds(el).width + right; }, 0);
    }

    function getMaxWidth(list) {
        return slides(list).reduce(function (right, el) { return Math.max(right, bounds(el).width); }, 0);
    }

    function centerEl(el, list) {
        return bounds(list).width / 2 - bounds(el).width / 2;
    }

    function getElLeft(el, list) {
        return (position(el).left + (isRtl ? bounds(el).width - bounds(list).width : 0)) * (isRtl ? -1 : 1);
    }

    function bounds(el) {
        return el.getBoundingClientRect();
    }

    function triggerUpdate$1(el, type, data) {
        trigger(el, createEvent(type, false, false, data));
    }

    function slides(list) {
        return toNodes(list.children);
    }

    var Slider$1 = {

        mixins: [Class, Slider, SliderReactive],

        props: {
            center: Boolean,
            sets: Boolean
        },

        data: {
            center: false,
            sets: false,
            attrItem: 'uk-slider-item',
            selList: '.uk-slider-items',
            selNav: '.uk-slider-nav',
            clsContainer: 'uk-slider-container',
            Transitioner: Transitioner$1
        },

        computed: {

            avgWidth: function() {
                return getWidth(this.list) / this.length;
            },

            finite: function(ref) {
                var finite = ref.finite;

                return finite || Math.ceil(getWidth(this.list)) < bounds(this.list).width + getMaxWidth(this.list) + this.center;
            },

            maxIndex: function() {

                if (!this.finite || this.center && !this.sets) {
                    return this.length - 1;
                }

                if (this.center) {
                    return last(this.sets);
                }

                css(this.slides, 'order', '');

                var max = getMax(this.list);
                var i = this.length;

                while (i--) {
                    if (getElLeft(this.list.children[i], this.list) < max) {
                        return Math.min(i + 1, this.length - 1);
                    }
                }

                return 0;
            },

            sets: function(ref) {
                var this$1 = this;
                var sets = ref.sets;


                var width = bounds(this.list).width / (this.center ? 2 : 1);

                var left = 0;
                var leftCenter = width;
                var slideLeft = 0;

                sets = sets && this.slides.reduce(function (sets, slide, i) {

                    var ref = bounds(slide);
                    var slideWidth = ref.width;
                    var slideRight = slideLeft + slideWidth;

                    if (slideRight > left) {

                        if (!this$1.center && i > this$1.maxIndex) {
                            i = this$1.maxIndex;
                        }

                        if (!includes(sets, i)) {

                            var cmp = this$1.slides[i + 1];
                            if (this$1.center && cmp && slideWidth < leftCenter - bounds(cmp).width / 2) {
                                leftCenter -= slideWidth;
                            } else {
                                leftCenter = width;
                                sets.push(i);
                                left = slideLeft + width + (this$1.center ? slideWidth / 2 : 0);
                            }

                        }
                    }

                    slideLeft += slideWidth;

                    return sets;

                }, []);

                return !isEmpty(sets) && sets;

            },

            transitionOptions: function() {
                return {
                    center: this.center,
                    list: this.list
                };
            }

        },

        connected: function() {
            toggleClass(this.$el, this.clsContainer, !$(("." + (this.clsContainer)), this.$el));
        },

        update: {

            write: function() {
                var this$1 = this;


                $$(("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]"), this.$el).forEach(function (el) {
                    var index = data(el, this$1.attrItem);
                    this$1.maxIndex && toggleClass(el, 'uk-hidden', isNumeric(index) && (this$1.sets && !includes(this$1.sets, toFloat(index)) || index > this$1.maxIndex));
                });

                if (this.length && !this.dragging && !this.stack.length) {
                    this._getTransitioner().translate(1);
                }

            },

            events: ['resize']

        },

        events: {

            beforeitemshow: function(e) {

                if (!this.dragging && this.sets && this.stack.length < 2 && !includes(this.sets, this.index)) {
                    this.index = this.getValidIndex();
                }

                var diff = Math.abs(
                    this.index
                    - this.prevIndex
                    + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0)
                );

                if (!this.dragging && diff > 1) {

                    for (var i = 0; i < diff; i++) {
                        this.stack.splice(1, 0, this.dir > 0 ? 'next' : 'previous');
                    }

                    e.preventDefault();
                    return;
                }

                this.duration = speedUp(this.avgWidth / this.velocity)
                    * (bounds(
                        this.dir < 0 || !this.slides[this.prevIndex]
                            ? this.slides[this.index]
                            : this.slides[this.prevIndex]
                    ).width / this.avgWidth);

                this.reorder();

            },

            itemshow: function() {
                !isUndefined(this.prevIndex) && addClass(this._getTransitioner().getItemIn(), this.clsActive);
            },

            itemshown: function() {
                var this$1 = this;

                var actives = this._getTransitioner(this.index).getActives();
                this.slides.forEach(function (slide) { return toggleClass(slide, this$1.clsActive, includes(actives, slide)); });
                (!this.sets || includes(this.sets, toFloat(this.index))) && this.slides.forEach(function (slide) { return toggleClass(slide, this$1.clsActivated, includes(actives, slide)); });
            }

        },

        methods: {

            reorder: function() {
                var this$1 = this;


                css(this.slides, 'order', '');

                if (this.finite) {
                    return;
                }

                var index = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;

                this.slides.forEach(function (slide, i) { return css(slide, 'order', this$1.dir > 0 && i < index
                        ? 1
                        : this$1.dir < 0 && i >= this$1.index
                            ? -1
                            : ''
                    ); }
                );

                if (!this.center) {
                    return;
                }

                var next = this.slides[index];
                var width = bounds(this.list).width / 2 - bounds(next).width / 2;
                var j = 0;

                while (width > 0) {
                    var slideIndex = this.getIndex(--j + index, index);
                    var slide = this.slides[slideIndex];

                    css(slide, 'order', slideIndex > index ? -2 : -1);
                    width -= bounds(slide).width;
                }

            },

            getValidIndex: function(index, prevIndex) {
                if ( index === void 0 ) index = this.index;
                if ( prevIndex === void 0 ) prevIndex = this.prevIndex;


                index = this.getIndex(index, prevIndex);

                if (!this.sets) {
                    return index;
                }

                var prev;

                do {

                    if (includes(this.sets, index)) {
                        return index;
                    }

                    prev = index;
                    index = this.getIndex(index + this.dir, prevIndex);

                } while (index !== prev);

                return index;
            }

        }

    };

    var SlideshowParallax = {

        mixins: [Parallax],

        data: {
            selItem: '!li'
        },

        computed: {

            item: function(ref, $el) {
                var selItem = ref.selItem;

                return query(selItem, $el);
            }

        },

        events: [

            {

                name: 'itemshown',

                self: true,

                el: function() {
                    return this.item;
                },

                handler: function() {
                    css(this.$el, this.getCss(.5));
                }

            },

            {
                name: 'itemin itemout',

                self: true,

                el: function() {
                    return this.item;
                },

                handler: function(ref) {
                    var type = ref.type;
                    var ref_detail = ref.detail;
                    var percent = ref_detail.percent;
                    var duration = ref_detail.duration;
                    var timing = ref_detail.timing;
                    var dir = ref_detail.dir;


                    Transition.cancel(this.$el);
                    css(this.$el, this.getCss(getCurrent(type, dir, percent)));

                    Transition.start(this.$el, this.getCss(isIn(type)
                        ? .5
                        : dir > 0
                            ? 1
                            : 0
                    ), duration, timing).catch(noop);

                }
            },

            {
                name: 'transitioncanceled transitionend',

                self: true,

                el: function() {
                    return this.item;
                },

                handler: function() {
                    Transition.cancel(this.$el);
                }

            },

            {
                name: 'itemtranslatein itemtranslateout',

                self: true,

                el: function() {
                    return this.item;
                },

                handler: function(ref) {
                    var type = ref.type;
                    var ref_detail = ref.detail;
                    var percent = ref_detail.percent;
                    var dir = ref_detail.dir;

                    Transition.cancel(this.$el);
                    css(this.$el, this.getCss(getCurrent(type, dir, percent)));
                }
            }

        ]

    };

    function isIn(type) {
        return endsWith(type, 'in');
    }

    function getCurrent(type, dir, percent) {

        percent /= 2;

        return !isIn(type)
            ? dir < 0
                ? percent
                : 1 - percent
            : dir < 0
                ? 1 - percent
                : percent;
    }

    var Animations$2 = assign({}, Animations, {

        fade: {

            show: function() {
                return [
                    {opacity: 0, zIndex: 0},
                    {zIndex: -1}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent, zIndex: 0},
                    {zIndex: -1}
                ];
            }

        },

        scale: {

            show: function() {
                return [
                    {opacity: 0, transform: scale3d(1 + .5), zIndex: 0},
                    {zIndex: -1}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent, transform: scale3d(1 + .5 * percent), zIndex: 0},
                    {zIndex: -1}
                ];
            }

        },

        pull: {

            show: function(dir) {
                return dir < 0
                    ? [
                        {transform: translate(30), zIndex: -1},
                        {transform: translate(), zIndex: 0}
                    ]
                    : [
                        {transform: translate(-100), zIndex: 0},
                        {transform: translate(), zIndex: -1}
                    ];
            },

            percent: function(current, next, dir) {
                return dir < 0
                    ? 1 - translated(next)
                    : translated(current);
            },

            translate: function(percent, dir) {
                return dir < 0
                    ? [
                        {transform: translate(30 * percent), zIndex: -1},
                        {transform: translate(-100 * (1 - percent)), zIndex: 0}
                    ]
                    : [
                        {transform: translate(-percent * 100), zIndex: 0},
                        {transform: translate(30 * (1 - percent)), zIndex: -1}
                    ];
            }

        },

        push: {

            show: function(dir) {
                return dir < 0
                    ? [
                        {transform: translate(100), zIndex: 0},
                        {transform: translate(), zIndex: -1}
                    ]
                    : [
                        {transform: translate(-30), zIndex: -1},
                        {transform: translate(), zIndex: 0}
                    ];
            },

            percent: function(current, next, dir) {
                return dir > 0
                    ? 1 - translated(next)
                    : translated(current);
            },

            translate: function(percent, dir) {
                return dir < 0
                    ? [
                        {transform: translate(percent * 100), zIndex: 0},
                        {transform: translate(-30 * (1 - percent)), zIndex: -1}
                    ]
                    : [
                        {transform: translate(-30 * percent), zIndex: -1},
                        {transform: translate(100 * (1 - percent)), zIndex: 0}
                    ];
            }

        }

    });

    var Slideshow$1 = {

        mixins: [Class, Slideshow, SliderReactive],

        props: {
            ratio: String,
            minHeight: Number,
            maxHeight: Number
        },

        data: {
            ratio: '16:9',
            minHeight: false,
            maxHeight: false,
            selList: '.uk-slideshow-items',
            attrItem: 'uk-slideshow-item',
            selNav: '.uk-slideshow-nav',
            Animations: Animations$2
        },

        update: {

            read: function() {

                var ref = this.ratio.split(':').map(Number);
                var width = ref[0];
                var height = ref[1];

                height = height * this.list.offsetWidth / width || 0;

                if (this.minHeight) {
                    height = Math.max(this.minHeight, height);
                }

                if (this.maxHeight) {
                    height = Math.min(this.maxHeight, height);
                }

                return {height: height - boxModelAdjust(this.list, 'content-box')};
            },

            write: function(ref) {
                var height = ref.height;

                height > 0 && css(this.list, 'minHeight', height);
            },

            events: ['resize']

        }

    };

    var Sortable = {

        mixins: [Class, Animate],

        props: {
            group: String,
            threshold: Number,
            clsItem: String,
            clsPlaceholder: String,
            clsDrag: String,
            clsDragState: String,
            clsBase: String,
            clsNoDrag: String,
            clsEmpty: String,
            clsCustom: String,
            handle: String
        },

        data: {
            group: false,
            threshold: 5,
            clsItem: 'uk-sortable-item',
            clsPlaceholder: 'uk-sortable-placeholder',
            clsDrag: 'uk-sortable-drag',
            clsDragState: 'uk-drag',
            clsBase: 'uk-sortable',
            clsNoDrag: 'uk-sortable-nodrag',
            clsEmpty: 'uk-sortable-empty',
            clsCustom: '',
            handle: false
        },

        created: function() {
            var this$1 = this;

            ['init', 'start', 'move', 'end'].forEach(function (key) {
                var fn = this$1[key];
                this$1[key] = function (e) {
                    this$1.scrollY = window.pageYOffset;
                    var ref = getEventPos(e, 'page');
                    var x = ref.x;
                    var y = ref.y;
                    this$1.pos = {x: x, y: y};

                    fn(e);
                };
            });
        },

        events: {

            name: pointerDown,
            passive: false,
            handler: 'init'

        },

        update: {

            write: function() {

                if (this.clsEmpty) {
                    toggleClass(this.$el, this.clsEmpty, isEmpty(this.$el.children));
                }

                css(this.handle ? $$(this.handle, this.$el) : this.$el.children, {touchAction: 'none', userSelect: 'none'});

                if (this.drag) {

                    // clamp to viewport
                    var ref = offset(window);
                    var right = ref.right;
                    var bottom = ref.bottom;
                    offset(this.drag, {
                        top: clamp(this.pos.y + this.origin.top, 0, bottom - this.drag.offsetHeight),
                        left: clamp(this.pos.x + this.origin.left, 0, right - this.drag.offsetWidth)
                    });

                    trackScroll(this.pos);

                }

            }

        },

        methods: {

            init: function(e) {

                var target = e.target;
                var button = e.button;
                var defaultPrevented = e.defaultPrevented;
                var ref = toNodes(this.$el.children).filter(function (el) { return within(target, el); });
                var placeholder = ref[0];

                if (!placeholder
                    || defaultPrevented
                    || button > 0
                    || isInput(target)
                    || within(target, ("." + (this.clsNoDrag)))
                    || this.handle && !within(target, this.handle)
                ) {
                    return;
                }

                e.preventDefault();

                this.touched = [this];
                this.placeholder = placeholder;
                this.origin = assign({target: target, index: index(placeholder)}, this.pos);

                on(document, pointerMove, this.move);
                on(document, pointerUp, this.end);
                on(window, 'scroll', this.scroll);

                if (!this.threshold) {
                    this.start(e);
                }

            },

            start: function(e) {

                this.drag = append(this.$container, this.placeholder.outerHTML.replace(/^<li/i, '<div').replace(/li>$/i, 'div>'));

                css(this.drag, assign({
                    boxSizing: 'border-box',
                    width: this.placeholder.offsetWidth,
                    height: this.placeholder.offsetHeight,
                    overflow: 'hidden'
                }, css(this.placeholder, ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'])));
                attr(this.drag, 'uk-no-boot', '');
                addClass(this.drag, this.clsDrag, this.clsCustom);

                height(this.drag.firstElementChild, height(this.placeholder.firstElementChild));

                var ref = offset(this.placeholder);
                var left = ref.left;
                var top = ref.top;
                assign(this.origin, {left: left - this.pos.x, top: top - this.pos.y});

                addClass(this.placeholder, this.clsPlaceholder);
                addClass(this.$el.children, this.clsItem);
                addClass(document.documentElement, this.clsDragState);

                trigger(this.$el, 'start', [this, this.placeholder]);

                this.move(e);
            },

            move: function(e) {

                if (!this.drag) {

                    if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
                        this.start(e);
                    }

                    return;
                }

                this.$emit();

                var target = e.type === 'mousemove' ? e.target : document.elementFromPoint(this.pos.x - window.pageXOffset, this.pos.y - window.pageYOffset);

                var sortable = this.getSortable(target);
                var previous = this.getSortable(this.placeholder);
                var move = sortable !== previous;

                if (!sortable || within(target, this.placeholder) || move && (!sortable.group || sortable.group !== previous.group)) {
                    return;
                }

                target = sortable.$el === target.parentNode && target || toNodes(sortable.$el.children).filter(function (element) { return within(target, element); })[0];

                if (move) {
                    previous.remove(this.placeholder);
                } else if (!target) {
                    return;
                }

                sortable.insert(this.placeholder, target);

                if (!includes(this.touched, sortable)) {
                    this.touched.push(sortable);
                }

            },

            end: function(e) {

                off(document, pointerMove, this.move);
                off(document, pointerUp, this.end);
                off(window, 'scroll', this.scroll);

                if (!this.drag) {
                    if (e.type === 'touchend') {
                        e.target.click();
                    }

                    return;
                }

                untrackScroll();

                var sortable = this.getSortable(this.placeholder);

                if (this === sortable) {
                    if (this.origin.index !== index(this.placeholder)) {
                        trigger(this.$el, 'moved', [this, this.placeholder]);
                    }
                } else {
                    trigger(sortable.$el, 'added', [sortable, this.placeholder]);
                    trigger(this.$el, 'removed', [this, this.placeholder]);
                }

                trigger(this.$el, 'stop', [this, this.placeholder]);

                remove(this.drag);
                this.drag = null;

                var classes = this.touched.map(function (sortable) { return ((sortable.clsPlaceholder) + " " + (sortable.clsItem)); }).join(' ');
                this.touched.forEach(function (sortable) { return removeClass(sortable.$el.children, classes); });

                removeClass(document.documentElement, this.clsDragState);

            },

            scroll: function() {
                var scroll = window.pageYOffset;
                if (scroll !== this.scrollY) {
                    this.pos.y += scroll - this.scrollY;
                    this.scrollY = scroll;
                    this.$emit();
                }
            },

            insert: function(element, target) {
                var this$1 = this;


                addClass(this.$el.children, this.clsItem);

                var insert = function () {

                    if (target) {

                        if (!within(element, this$1.$el) || isPredecessor(element, target)) {
                            before(target, element);
                        } else {
                            after(target, element);
                        }

                    } else {
                        append(this$1.$el, element);
                    }

                };

                if (this.animation) {
                    this.animate(insert);
                } else {
                    insert();
                }

            },

            remove: function(element) {

                if (!within(element, this.$el)) {
                    return;
                }

                css(this.handle ? $$(this.handle, element) : element, {touchAction: '', userSelect: ''});

                if (this.animation) {
                    this.animate(function () { return remove(element); });
                } else {
                    remove(element);
                }

            },

            getSortable: function(element) {
                return element && (this.$getComponent(element, 'sortable') || this.getSortable(element.parentNode));
            }

        }

    };

    function isPredecessor(element, target) {
        return element.parentNode === target.parentNode && index(element) > index(target);
    }

    var trackTimer;
    function trackScroll(ref) {
        var x = ref.x;
        var y = ref.y;


        clearTimeout(trackTimer);

        scrollParents(document.elementFromPoint(x - window.pageXOffset, y - window.pageYOffset)).some(function (scrollEl) {

            var scroll = scrollEl.scrollTop;
            var scrollHeight = scrollEl.scrollHeight;

            if (getScrollingElement() === scrollEl) {
                scrollEl = window;
                scrollHeight -= window.innerHeight;
            }

            var ref = offset(scrollEl);
            var top = ref.top;
            var bottom = ref.bottom;

            if (top < y && top + 30 > y) {
                scroll -= 5;
            } else if (bottom > y && bottom - 20 < y) {
                scroll += 5;
            }

            if (scroll > 0 && scroll < scrollHeight) {
                return trackTimer = setTimeout(function () {
                    scrollTop(scrollEl, scroll);
                    trackScroll({x: x, y: y});
                }, 10);
            }

        });

    }

    function untrackScroll() {
        clearTimeout(trackTimer);
    }

    var overflowRe = /auto|scroll/;

    function scrollParents(element) {
        var scrollEl = getScrollingElement();
        return parents$1(element, function (parent) { return parent === scrollEl || overflowRe.test(css(parent, 'overflow')); });
    }

    function parents$1(element, fn) {
        var parents = [];
        do {
            if (fn(element)) {
                parents.unshift(element);
            }
        } while (element && (element = element.parentElement));
        return parents;
    }

    function getScrollingElement() {
        return document.scrollingElement || document.documentElement;
    }

    var obj$1;

    var actives = [];

    var Tooltip = {

        mixins: [Container, Togglable, Position],

        args: 'title',

        props: {
            delay: Number,
            title: String
        },

        data: {
            pos: 'top',
            title: '',
            delay: 0,
            animation: ['uk-animation-scale-up'],
            duration: 100,
            cls: 'uk-active',
            clsPos: 'uk-tooltip'
        },

        beforeConnect: function() {
            this._hasTitle = hasAttr(this.$el, 'title');
            attr(this.$el, {title: '', 'aria-expanded': false});
        },

        disconnected: function() {
            this.hide();
            attr(this.$el, {title: this._hasTitle ? this.title : null, 'aria-expanded': null});
        },

        methods: {

            show: function() {
                var this$1 = this;


                if (this.isActive() || !this.title) {
                    return;
                }

                actives.forEach(function (active) { return active.hide(); });
                actives.push(this);

                this._unbind = on(document, pointerUp, function (e) { return !within(e.target, this$1.$el) && this$1.hide(); });

                clearTimeout(this.showTimer);
                this.showTimer = setTimeout(function () {
                    this$1._show();
                    this$1.hideTimer = setInterval(function () {

                        if (!isVisible(this$1.$el)) {
                            this$1.hide();
                        }

                    }, 150);
                }, this.delay);
            },

            hide: function() {

                if (!this.isActive() || matches(this.$el, 'input:focus')) {
                    return;
                }

                actives.splice(actives.indexOf(this), 1);

                clearTimeout(this.showTimer);
                clearInterval(this.hideTimer);
                attr(this.$el, 'aria-expanded', false);
                this.toggleElement(this.tooltip, false);
                this.tooltip && remove(this.tooltip);
                this.tooltip = false;
                this._unbind();

            },

            _show: function() {

                this.tooltip = append(this.container,
                    ("<div class=\"" + (this.clsPos) + "\" aria-expanded=\"true\" aria-hidden> <div class=\"" + (this.clsPos) + "-inner\">" + (this.title) + "</div> </div>")
                );

                this.positionAt(this.tooltip, this.$el);

                this.origin = this.getAxis() === 'y'
                    ? ((flipPosition(this.dir)) + "-" + (this.align))
                    : ((this.align) + "-" + (flipPosition(this.dir)));

                this.toggleElement(this.tooltip, true);

            },

            isActive: function() {
                return includes(actives, this);
            }

        },

        events: ( obj$1 = {

            focus: 'show',
            blur: 'hide'

        }, obj$1[(pointerEnter + " " + pointerLeave)] = function (e) {
                if (isTouch(e)) {
                    return;
                }
                e.type === pointerEnter
                    ? this.show()
                    : this.hide();
            }, obj$1[pointerDown] = function (e) {
                if (!isTouch(e)) {
                    return;
                }
                this.isActive()
                    ? this.hide()
                    : this.show();
            }, obj$1 )

    };

    var Upload = {

        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            msgInvalidSize: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },

        data: {
            allow: false,
            clsDragover: 'uk-dragover',
            concurrent: 1,
            maxSize: 0,
            method: 'POST',
            mime: false,
            msgInvalidMime: 'Invalid File Type: %s',
            msgInvalidName: 'Invalid File Name: %s',
            msgInvalidSize: 'Invalid File Size: %s Kilobytes Max',
            multiple: false,
            name: 'files[]',
            params: {},
            type: '',
            url: '',
            abort: noop,
            beforeAll: noop,
            beforeSend: noop,
            complete: noop,
            completeAll: noop,
            error: noop,
            fail: noop,
            load: noop,
            loadEnd: noop,
            loadStart: noop,
            progress: noop
        },

        events: {

            change: function(e) {

                if (!matches(e.target, 'input[type="file"]')) {
                    return;
                }

                e.preventDefault();

                if (e.target.files) {
                    this.upload(e.target.files);
                }

                e.target.value = '';
            },

            drop: function(e) {
                stop(e);

                var transfer = e.dataTransfer;

                if (!transfer || !transfer.files) {
                    return;
                }

                removeClass(this.$el, this.clsDragover);

                this.upload(transfer.files);
            },

            dragenter: function(e) {
                stop(e);
            },

            dragover: function(e) {
                stop(e);
                addClass(this.$el, this.clsDragover);
            },

            dragleave: function(e) {
                stop(e);
                removeClass(this.$el, this.clsDragover);
            }

        },

        methods: {

            upload: function(files) {
                var this$1 = this;


                if (!files.length) {
                    return;
                }

                trigger(this.$el, 'upload', [files]);

                for (var i = 0; i < files.length; i++) {

                    if (this.maxSize && this.maxSize * 1000 < files[i].size) {
                        this.fail(this.msgInvalidSize.replace('%s', this.maxSize));
                        return;
                    }

                    if (this.allow && !match$1(this.allow, files[i].name)) {
                        this.fail(this.msgInvalidName.replace('%s', this.allow));
                        return;
                    }

                    if (this.mime && !match$1(this.mime, files[i].type)) {
                        this.fail(this.msgInvalidMime.replace('%s', this.mime));
                        return;
                    }

                }

                if (!this.multiple) {
                    files = [files[0]];
                }

                this.beforeAll(this, files);

                var chunks = chunk(files, this.concurrent);
                var upload = function (files) {

                    var data = new FormData();

                    files.forEach(function (file) { return data.append(this$1.name, file); });

                    for (var key in this$1.params) {
                        data.append(key, this$1.params[key]);
                    }

                    ajax(this$1.url, {
                        data: data,
                        method: this$1.method,
                        responseType: this$1.type,
                        beforeSend: function (env) {

                            var xhr = env.xhr;
                            xhr.upload && on(xhr.upload, 'progress', this$1.progress);
                            ['loadStart', 'load', 'loadEnd', 'abort'].forEach(function (type) { return on(xhr, type.toLowerCase(), this$1[type]); }
                            );

                            this$1.beforeSend(env);

                        }
                    }).then(
                        function (xhr) {

                            this$1.complete(xhr);

                            if (chunks.length) {
                                upload(chunks.shift());
                            } else {
                                this$1.completeAll(xhr);
                            }

                        },
                        function (e) { return this$1.error(e); }
                    );

                };

                upload(chunks.shift());

            }

        }

    };

    function match$1(pattern, path) {
        return path.match(new RegExp(("^" + (pattern.replace(/\//g, '\\/').replace(/\*\*/g, '(\\/[^\\/]+)*').replace(/\*/g, '[^\\/]+').replace(/((?!\\))\?/g, '$1.')) + "$"), 'i'));
    }

    function chunk(files, size) {
        var chunks = [];
        for (var i = 0; i < files.length; i += size) {
            var chunk = [];
            for (var j = 0; j < size; j++) {
                chunk.push(files[i + j]);
            }
            chunks.push(chunk);
        }
        return chunks;
    }

    function stop(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    UIkit.component('countdown', Countdown);
    UIkit.component('filter', Filter);
    UIkit.component('lightbox', Lightbox);
    UIkit.component('lightboxPanel', lightboxPanel);
    UIkit.component('notification', Notification);
    UIkit.component('parallax', Parallax$1);
    UIkit.component('slider', Slider$1);
    UIkit.component('sliderParallax', SlideshowParallax);
    UIkit.component('slideshow', Slideshow$1);
    UIkit.component('slideshowParallax', SlideshowParallax);
    UIkit.component('sortable', Sortable);
    UIkit.component('tooltip', Tooltip);
    UIkit.component('upload', Upload);

    {
        boot(UIkit);
    }

    return UIkit;

}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9).setImmediate))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uikit__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uikit_dist_css_uikit_min_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uikit_dist_css_uikit_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uikit_dist_css_uikit_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MultiSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(MultiSelect, _Component);

  function MultiSelect(props) {
    var _this;

    _classCallCheck(this, MultiSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiSelect).call(this, props));
    _this.state = _this.getInitialState();
    _this.OptionItem = _this.OptionItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MultiSelect, [{
    key: "OptionItem",
    value: function OptionItem(_ref) {
      var _this2 = this;

      var opt = _ref.opt;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "option-item uk-margin-small"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "uk-margin-small",
        onClick: function onClick() {
          opt.checked = opt.checked ? false : true;

          _this2.handleItemClick(opt);
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: opt.value,
        type: "checkbox",
        checked: opt.checked,
        className: "uk-checkbox uk-margin-small-right"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, opt.value)));
    }
  }, {
    key: "getInitialState",
    value: function getInitialState() {
      var newOptions = [];
      this.props.OptionsList.forEach(function (opt) {
        newOptions.push({
          checked: false,
          value: opt
        });
      });
      return {
        allChecked: false,
        optionsList: newOptions,
        selectedItems: []
      };
    }
  }, {
    key: "handleItemClick",
    value: function handleItemClick(opt) {
      var arr = this.state.selectedItems;

      if (opt.checked) {
        arr.push(opt.value);
      } else {
        arr.splice(arr.indexOf(opt), 1);
      }

      this.setState({
        selectedItems: arr
      });
      this.props.onOptionChecked(arr);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "uk-button-group uk-width-1-1",
        style: {
          maxHeight: "500px",
          maxWidth: "350px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "uk-inline uk-width-1-1"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "uk-button uk-button-default uk-select uk-background-muted",
        type: "button"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "uk-dropdown": "mode: click; boundary: ! .uk-button-group; boundary-align: true;",
        className: "uk-background-muted"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "uk-nav uk-dropdown-nav",
        style: {
          maxHeight: "500px",
          overflowX: "hidden",
          overflowY: "auto",
          maxWidth: "350px"
        }
      }, this.state.optionsList.map(function (opt, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_this3.OptionItem, {
          key: i,
          opt: opt
        });
      })))));
    }
  }]);

  return MultiSelect;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MultiSelect);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(7)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(8);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
/******/ ]);