/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/dom-ready/build-module/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/dom-ready/build-module/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ domReady)
/* harmony export */ });
/**
 * @typedef {() => void} Callback
 *
 * TODO: Remove this typedef and inline `() => void` type.
 *
 * This typedef is used so that a descriptive type is provided in our
 * automatically generated documentation.
 *
 * An in-line type `() => void` would be preferable, but the generated
 * documentation is `null` in that case.
 *
 * @see https://github.com/WordPress/gutenberg/issues/18045
 */

/**
 * Specify a function to execute when the DOM is fully loaded.
 *
 * @param {Callback} callback A function to execute after the DOM is ready.
 *
 * @example
 * ```js
 * import domReady from '@wordpress/dom-ready';
 *
 * domReady( function() {
 * 	//do something after DOM loads.
 * } );
 * ```
 *
 * @return {void}
 */
function domReady(callback) {
  if (typeof document === 'undefined') {
    return;
  }

  if (document.readyState === 'complete' || // DOMContentLoaded + Images/Styles/etc loaded, so we call directly.
  document.readyState === 'interactive' // DOMContentLoaded fires at this point, so we call directly.
  ) {
    return void callback();
  } // DOMContentLoaded has not fired yet, delay callback until then.


  document.addEventListener('DOMContentLoaded', callback);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./js/editor/block-styles.js":
/*!***********************************!*\
  !*** ./js/editor/block-styles.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "./node_modules/@wordpress/dom-ready/build-module/index.js");

(0,_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  /* Register Custom Block Styles */
  wp.blocks.registerBlockStyle('mx/button', {
    isDefault: true,
    name: 'primary-button',
    label: 'Primary'
  });
  wp.blocks.registerBlockStyle('mx/button', {
    name: 'secondary-button',
    label: 'Secondary'
  });
  wp.blocks.registerBlockStyle('mx/button', {
    name: 'tertiary-button',
    label: 'Tertiary'
  });
  wp.blocks.registerBlockStyle('mx/button', {
    name: 'underline-button',
    label: 'Underline'
  });
  wp.blocks.registerBlockStyle('mx/button', {
    name: 'text-link',
    label: 'Text Link'
  });
  wp.blocks.registerBlockStyle('mx/button', {
    name: 'arrow-link',
    label: 'Arrow Link'
  });
  wp.blocks.registerBlockStyle('mx/button', {
    name: 'modal-link',
    label: 'Modal Link'
  });
  /* Unregister Core Block Styles */

  /* Button */

  wp.blocks.unregisterBlockStyle('core/button', 'fill');
  wp.blocks.unregisterBlockStyle('core/button', 'outline');
  /* Image */

  wp.blocks.unregisterBlockStyle('core/image', 'default');
  wp.blocks.unregisterBlockStyle('core/image', 'rounded');
  /* Quote */

  wp.blocks.unregisterBlockStyle('core/quote', 'default');
  wp.blocks.unregisterBlockStyle('core/quote', 'large');
  /* Separator */

  wp.blocks.unregisterBlockStyle('core/separator', 'default');
  wp.blocks.unregisterBlockStyle('core/separator', 'wide');
  wp.blocks.unregisterBlockStyle('core/separator', 'dots');
  /* Site Logo */

  wp.blocks.unregisterBlockStyle('core/site-logo', 'default');
  wp.blocks.unregisterBlockStyle('core/site-logo', 'rounded');
  /* Social Links */

  wp.blocks.unregisterBlockStyle('core/social-links', 'default');
  wp.blocks.unregisterBlockStyle('core/social-links', 'logos-only');
  wp.blocks.unregisterBlockStyle('core/social-links', 'pill-shape');
});

/***/ }),

/***/ "./js/editor/block-variations.js":
/*!***************************************!*\
  !*** ./js/editor/block-variations.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "./node_modules/@wordpress/dom-ready/build-module/index.js");

(0,_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  /* Register Button Variations */
  wp.blocks.registerBlockVariation('mx/button', [{
    name: 'large',
    title: 'Large',
    attributes: {
      className: 'is-style-large-button'
    }
  }, {
    name: 'medium',
    title: 'Medium',
    attributes: {
      className: 'is-style-medium-button'
    },
    isDefault: true
  }, {
    name: 'small',
    title: 'Small',
    attributes: {
      className: 'is-style-small-button'
    }
  }, {
    name: 'xsmall',
    title: 'xSmall',
    attributes: {
      className: 'is-style-xsmall-button'
    }
  }, {
    name: 'compact',
    title: 'Compact',
    attributes: {
      className: 'is-style-compact-button'
    }
  }]);
});

/***/ }),

/***/ "./js/editor/unregister-blocks.js":
/*!****************************************!*\
  !*** ./js/editor/unregister-blocks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "./node_modules/@wordpress/dom-ready/build-module/index.js");

(0,_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  wp.blocks.unregisterBlockType('core/audio');
  wp.blocks.unregisterBlockType('core/archives');
  wp.blocks.unregisterBlockType('core/avatar');
  wp.blocks.unregisterBlockType('core/block');
  wp.blocks.unregisterBlockType('core/buttons');
  wp.blocks.unregisterBlockType('core/button');
  wp.blocks.unregisterBlockType('core/calendar');
  wp.blocks.unregisterBlockType('core/categories');
  wp.blocks.unregisterBlockType('core/code');
  wp.blocks.unregisterBlockType('core/column');
  wp.blocks.unregisterBlockType('core/columns');
  wp.blocks.unregisterBlockType('core/comment-author-avatar');
  wp.blocks.unregisterBlockType('core/comment-author-name');
  wp.blocks.unregisterBlockType('core/comment-content');
  wp.blocks.unregisterBlockType('core/comment-date');
  wp.blocks.unregisterBlockType('core/comment-edit-link');
  wp.blocks.unregisterBlockType('core/comment-reply-link');
  wp.blocks.unregisterBlockType('core/comment-template');
  wp.blocks.unregisterBlockType('core/comments-pagination');
  wp.blocks.unregisterBlockType('core/comments-pagination-next');
  wp.blocks.unregisterBlockType('core/comments-pagination-numbers');
  wp.blocks.unregisterBlockType('core/comments-pagination-previous');
  wp.blocks.unregisterBlockType('core/comments-query-loop');
  wp.blocks.unregisterBlockType('core/comments-title'); //wp.blocks.unregisterBlockType('core/cover');
  //wp.blocks.unregisterBlockType('core/embed');

  wp.blocks.unregisterBlockType('core/file');
  wp.blocks.unregisterBlockType('core/freeform');
  wp.blocks.unregisterBlockType('core/gallery'); //wp.blocks.unregisterBlockType('core/group');
  //wp.blocks.unregisterBlockType('core/heading');

  wp.blocks.unregisterBlockType('core/home-link'); //wp.blocks.unregisterBlockType('core/html');

  wp.blocks.unregisterBlockType('core/image');
  wp.blocks.unregisterBlockType('core/latest-comments');
  wp.blocks.unregisterBlockType('core/latest-posts'); //wp.blocks.unregisterBlockType('core/list');

  wp.blocks.unregisterBlockType('core/loginout'); //wp.blocks.unregisterBlockType('core/media-text');

  wp.blocks.unregisterBlockType('core/missing');
  wp.blocks.unregisterBlockType('core/more');
  wp.blocks.unregisterBlockType('core/navigation');
  wp.blocks.unregisterBlockType('core/navigation-link');
  wp.blocks.unregisterBlockType('core/navigation-submenu');
  wp.blocks.unregisterBlockType('core/nextpage');
  wp.blocks.unregisterBlockType('core/page-list'); //wp.blocks.unregisterBlockType('core/paragraph');

  wp.blocks.unregisterBlockType('core/pattern');
  wp.blocks.unregisterBlockType('core/post-author');
  wp.blocks.unregisterBlockType('core/post-author-biography');
  wp.blocks.unregisterBlockType('core/post-author-name');
  wp.blocks.unregisterBlockType('core/post-comment');
  wp.blocks.unregisterBlockType('core/post-comments');
  wp.blocks.unregisterBlockType('core/post-comments-count');
  wp.blocks.unregisterBlockType('core/post-comments-form');
  wp.blocks.unregisterBlockType('core/post-comments-link');
  wp.blocks.unregisterBlockType('core/post-content');
  wp.blocks.unregisterBlockType('core/post-date');
  wp.blocks.unregisterBlockType('core/post-excerpt');
  wp.blocks.unregisterBlockType('core/post-featured-image');
  wp.blocks.unregisterBlockType('core/post-navigation-link');
  wp.blocks.unregisterBlockType('core/post-template');
  wp.blocks.unregisterBlockType('core/post-terms');
  wp.blocks.unregisterBlockType('core/post-title');
  wp.blocks.unregisterBlockType('core/preformatted');
  wp.blocks.unregisterBlockType('core/pullquote');
  wp.blocks.unregisterBlockType('core/query');
  wp.blocks.unregisterBlockType('core/query-no-results');
  wp.blocks.unregisterBlockType('core/query-pagination');
  wp.blocks.unregisterBlockType('core/query-pagination-next');
  wp.blocks.unregisterBlockType('core/query-pagination-numbers');
  wp.blocks.unregisterBlockType('core/query-pagination-previous');
  wp.blocks.unregisterBlockType('core/query-title');
  wp.blocks.unregisterBlockType('core/quote');
  wp.blocks.unregisterBlockType('core/read-more');
  wp.blocks.unregisterBlockType('core/rss');
  wp.blocks.unregisterBlockType('core/search');
  wp.blocks.unregisterBlockType('core/separator'); //wp.blocks.unregisterBlockType('core/shortcode');

  wp.blocks.unregisterBlockType('core/site-logo');
  wp.blocks.unregisterBlockType('core/site-tagline');
  wp.blocks.unregisterBlockType('core/site-title');
  wp.blocks.unregisterBlockType('core/social-link');
  wp.blocks.unregisterBlockType('core/social-links');
  wp.blocks.unregisterBlockType('core/spacer'); //wp.blocks.unregisterBlockType('core/table');

  wp.blocks.unregisterBlockType('core/table-of-contents');
  wp.blocks.unregisterBlockType('core/tag-cloud');
  wp.blocks.unregisterBlockType('core/template-part');
  wp.blocks.unregisterBlockType('core/term-description');
  wp.blocks.unregisterBlockType('core/text-columns');
  wp.blocks.unregisterBlockType('core/verse'); //wp.blocks.unregisterBlockType('core/video');

  /* Unregister Core Block Types */

  /* Embed Variants Allowed */

  var allowedEmbedBlocks = ['youtube', 'vimeo'];
  wp.blocks.getBlockType('core/embed').variations.forEach(function (blockVariation) {
    if (allowedEmbedBlocks.indexOf(blockVariation.name) === -1) {
      wp.blocks.unregisterBlockVariation('core/embed', blockVariation.name);
    }
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./js/editor-scripts.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_unregister_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor/unregister-blocks */ "./js/editor/unregister-blocks.js");
/* harmony import */ var _editor_block_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/block-styles */ "./js/editor/block-styles.js");
/* harmony import */ var _editor_block_variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/block-variations */ "./js/editor/block-variations.js");
/**
 *
 * Editor Specific Scripts
 *
 */



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXgtYmxvY2tzLXBsdWdpbi13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvZG9tLXJlYWR5L2J1aWxkLW1vZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teC1ibG9ja3MtcGx1Z2luLXdlYnBhY2svLi9qcy9lZGl0b3IvYmxvY2stc3R5bGVzLmpzIiwid2VicGFjazovL214LWJsb2Nrcy1wbHVnaW4td2VicGFjay8uL2pzL2VkaXRvci9ibG9jay12YXJpYXRpb25zLmpzIiwid2VicGFjazovL214LWJsb2Nrcy1wbHVnaW4td2VicGFjay8uL2pzL2VkaXRvci91bnJlZ2lzdGVyLWJsb2Nrcy5qcyIsIndlYnBhY2s6Ly9teC1ibG9ja3MtcGx1Z2luLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXgtYmxvY2tzLXBsdWdpbi13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teC1ibG9ja3MtcGx1Z2luLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teC1ibG9ja3MtcGx1Z2luLXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teC1ibG9ja3MtcGx1Z2luLXdlYnBhY2svLi9qcy9lZGl0b3Itc2NyaXB0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHsoKSA9PiB2b2lkfSBDYWxsYmFja1xuICpcbiAqIFRPRE86IFJlbW92ZSB0aGlzIHR5cGVkZWYgYW5kIGlubGluZSBgKCkgPT4gdm9pZGAgdHlwZS5cbiAqXG4gKiBUaGlzIHR5cGVkZWYgaXMgdXNlZCBzbyB0aGF0IGEgZGVzY3JpcHRpdmUgdHlwZSBpcyBwcm92aWRlZCBpbiBvdXJcbiAqIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGRvY3VtZW50YXRpb24uXG4gKlxuICogQW4gaW4tbGluZSB0eXBlIGAoKSA9PiB2b2lkYCB3b3VsZCBiZSBwcmVmZXJhYmxlLCBidXQgdGhlIGdlbmVyYXRlZFxuICogZG9jdW1lbnRhdGlvbiBpcyBgbnVsbGAgaW4gdGhhdCBjYXNlLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvaXNzdWVzLzE4MDQ1XG4gKi9cblxuLyoqXG4gKiBTcGVjaWZ5IGEgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBET00gaXMgZnVsbHkgbG9hZGVkLlxuICpcbiAqIEBwYXJhbSB7Q2FsbGJhY2t9IGNhbGxiYWNrIEEgZnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciB0aGUgRE9NIGlzIHJlYWR5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogaW1wb3J0IGRvbVJlYWR5IGZyb20gJ0B3b3JkcHJlc3MvZG9tLXJlYWR5JztcbiAqXG4gKiBkb21SZWFkeSggZnVuY3Rpb24oKSB7XG4gKiBcdC8vZG8gc29tZXRoaW5nIGFmdGVyIERPTSBsb2Fkcy5cbiAqIH0gKTtcbiAqIGBgYFxuICpcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvbVJlYWR5KGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgLy8gRE9NQ29udGVudExvYWRlZCArIEltYWdlcy9TdHlsZXMvZXRjIGxvYWRlZCwgc28gd2UgY2FsbCBkaXJlY3RseS5cbiAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJyAvLyBET01Db250ZW50TG9hZGVkIGZpcmVzIGF0IHRoaXMgcG9pbnQsIHNvIHdlIGNhbGwgZGlyZWN0bHkuXG4gICkge1xuICAgIHJldHVybiB2b2lkIGNhbGxiYWNrKCk7XG4gIH0gLy8gRE9NQ29udGVudExvYWRlZCBoYXMgbm90IGZpcmVkIHlldCwgZGVsYXkgY2FsbGJhY2sgdW50aWwgdGhlbi5cblxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYWxsYmFjayk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgZG9tUmVhZHkgZnJvbSAnQHdvcmRwcmVzcy9kb20tcmVhZHknO1xuXG5kb21SZWFkeShmdW5jdGlvbiAoKSB7XG5cblx0LyogUmVnaXN0ZXIgQ3VzdG9tIEJsb2NrIFN0eWxlcyAqL1xuXHR3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1N0eWxlKCdteC9idXR0b24nLCB7XG5cdFx0aXNEZWZhdWx0OiB0cnVlLFxuXHRcdG5hbWU6ICdwcmltYXJ5LWJ1dHRvbicsXG5cdFx0bGFiZWw6ICdQcmltYXJ5Jyxcblx0fSk7XG5cblx0d3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tTdHlsZSgnbXgvYnV0dG9uJywge1xuXHRcdG5hbWU6ICdzZWNvbmRhcnktYnV0dG9uJyxcblx0XHRsYWJlbDogJ1NlY29uZGFyeScsXG5cdH0pO1xuXG5cdHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ214L2J1dHRvbicsIHtcblx0XHRuYW1lOiAndGVydGlhcnktYnV0dG9uJyxcblx0XHRsYWJlbDogJ1RlcnRpYXJ5Jyxcblx0fSk7XG5cblx0d3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tTdHlsZSgnbXgvYnV0dG9uJywge1xuXHRcdG5hbWU6ICd1bmRlcmxpbmUtYnV0dG9uJyxcblx0XHRsYWJlbDogJ1VuZGVybGluZScsXG5cdH0pO1xuXG5cdHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ214L2J1dHRvbicsIHtcblx0XHRuYW1lOiAndGV4dC1saW5rJyxcblx0XHRsYWJlbDogJ1RleHQgTGluaycsXG5cdH0pO1xuXG5cdHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ214L2J1dHRvbicsIHtcblx0XHRuYW1lOiAnYXJyb3ctbGluaycsXG5cdFx0bGFiZWw6ICdBcnJvdyBMaW5rJyxcblx0fSk7XG5cblx0d3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tTdHlsZSgnbXgvYnV0dG9uJywge1xuXHRcdG5hbWU6ICdtb2RhbC1saW5rJyxcblx0XHRsYWJlbDogJ01vZGFsIExpbmsnLFxuXHR9KTtcblxuXHQvKiBVbnJlZ2lzdGVyIENvcmUgQmxvY2sgU3R5bGVzICovXG5cdC8qIEJ1dHRvbiAqL1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvYnV0dG9uJywgJ2ZpbGwnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1N0eWxlKCdjb3JlL2J1dHRvbicsICdvdXRsaW5lJyk7XG5cdC8qIEltYWdlICovXG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9pbWFnZScsICdkZWZhdWx0Jyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9pbWFnZScsICdyb3VuZGVkJyk7XG5cdC8qIFF1b3RlICovXG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9xdW90ZScsICdkZWZhdWx0Jyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9xdW90ZScsICdsYXJnZScpO1xuXHQvKiBTZXBhcmF0b3IgKi9cblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1N0eWxlKCdjb3JlL3NlcGFyYXRvcicsICdkZWZhdWx0Jyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9zZXBhcmF0b3InLCAnd2lkZScpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvc2VwYXJhdG9yJywgJ2RvdHMnKTtcblx0LyogU2l0ZSBMb2dvICovXG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9zaXRlLWxvZ28nLCAnZGVmYXVsdCcpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvc2l0ZS1sb2dvJywgJ3JvdW5kZWQnKTtcblx0LyogU29jaWFsIExpbmtzICovXG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9zb2NpYWwtbGlua3MnLCAnZGVmYXVsdCcpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvc29jaWFsLWxpbmtzJywgJ2xvZ29zLW9ubHknKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1N0eWxlKCdjb3JlL3NvY2lhbC1saW5rcycsICdwaWxsLXNoYXBlJyk7XG59KTtcbiIsImltcG9ydCBkb21SZWFkeSBmcm9tICdAd29yZHByZXNzL2RvbS1yZWFkeSc7XG5cbmRvbVJlYWR5KGZ1bmN0aW9uICgpIHtcblx0LyogUmVnaXN0ZXIgQnV0dG9uIFZhcmlhdGlvbnMgKi9cblx0d3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ214L2J1dHRvbicsIFtcblx0XHR7XG5cdFx0XHRuYW1lOiAnbGFyZ2UnLFxuXHRcdFx0dGl0bGU6ICdMYXJnZScsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7IGNsYXNzTmFtZTogJ2lzLXN0eWxlLWxhcmdlLWJ1dHRvbicgfSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdtZWRpdW0nLFxuXHRcdFx0dGl0bGU6ICdNZWRpdW0nLFxuXHRcdFx0YXR0cmlidXRlczogeyBjbGFzc05hbWU6ICdpcy1zdHlsZS1tZWRpdW0tYnV0dG9uJyB9LFxuXHRcdFx0aXNEZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ3NtYWxsJyxcblx0XHRcdHRpdGxlOiAnU21hbGwnLFxuXHRcdFx0YXR0cmlidXRlczogeyBjbGFzc05hbWU6ICdpcy1zdHlsZS1zbWFsbC1idXR0b24nIH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAneHNtYWxsJyxcblx0XHRcdHRpdGxlOiAneFNtYWxsJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHsgY2xhc3NOYW1lOiAnaXMtc3R5bGUteHNtYWxsLWJ1dHRvbicgfSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdjb21wYWN0Jyxcblx0XHRcdHRpdGxlOiAnQ29tcGFjdCcsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7IGNsYXNzTmFtZTogJ2lzLXN0eWxlLWNvbXBhY3QtYnV0dG9uJyB9LFxuXHRcdH0sXG5cdF0pO1xufSk7XG4iLCJpbXBvcnQgZG9tUmVhZHkgZnJvbSAnQHdvcmRwcmVzcy9kb20tcmVhZHknO1xuXG5kb21SZWFkeShmdW5jdGlvbiAoKSB7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2F1ZGlvJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2FyY2hpdmVzJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2F2YXRhcicpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9ibG9jaycpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9idXR0b25zJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2J1dHRvbicpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9jYWxlbmRhcicpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9jYXRlZ29yaWVzJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2NvZGUnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvY29sdW1uJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2NvbHVtbnMnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvY29tbWVudC1hdXRob3ItYXZhdGFyJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2NvbW1lbnQtYXV0aG9yLW5hbWUnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvY29tbWVudC1jb250ZW50Jyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2NvbW1lbnQtZGF0ZScpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9jb21tZW50LWVkaXQtbGluaycpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9jb21tZW50LXJlcGx5LWxpbmsnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvY29tbWVudC10ZW1wbGF0ZScpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9jb21tZW50cy1wYWdpbmF0aW9uJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2NvbW1lbnRzLXBhZ2luYXRpb24tbmV4dCcpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9jb21tZW50cy1wYWdpbmF0aW9uLW51bWJlcnMnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvY29tbWVudHMtcGFnaW5hdGlvbi1wcmV2aW91cycpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9jb21tZW50cy1xdWVyeS1sb29wJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2NvbW1lbnRzLXRpdGxlJyk7XG5cdC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvY292ZXInKTtcblx0Ly93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9lbWJlZCcpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9maWxlJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2ZyZWVmb3JtJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2dhbGxlcnknKTtcblx0Ly93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9ncm91cCcpO1xuXHQvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL2hlYWRpbmcnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvaG9tZS1saW5rJyk7XG5cdC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvaHRtbCcpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9pbWFnZScpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9sYXRlc3QtY29tbWVudHMnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvbGF0ZXN0LXBvc3RzJyk7XG5cdC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvbGlzdCcpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9sb2dpbm91dCcpO1xuXHQvL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL21lZGlhLXRleHQnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvbWlzc2luZycpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9tb3JlJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL25hdmlnYXRpb24nKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvbmF2aWdhdGlvbi1saW5rJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL25hdmlnYXRpb24tc3VibWVudScpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9uZXh0cGFnZScpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wYWdlLWxpc3QnKTtcblx0Ly93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wYXJhZ3JhcGgnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcGF0dGVybicpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wb3N0LWF1dGhvcicpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wb3N0LWF1dGhvci1iaW9ncmFwaHknKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcG9zdC1hdXRob3ItbmFtZScpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wb3N0LWNvbW1lbnQnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcG9zdC1jb21tZW50cycpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wb3N0LWNvbW1lbnRzLWNvdW50Jyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3Bvc3QtY29tbWVudHMtZm9ybScpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wb3N0LWNvbW1lbnRzLWxpbmsnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcG9zdC1jb250ZW50Jyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3Bvc3QtZGF0ZScpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wb3N0LWV4Y2VycHQnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcG9zdC1mZWF0dXJlZC1pbWFnZScpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wb3N0LW5hdmlnYXRpb24tbGluaycpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wb3N0LXRlbXBsYXRlJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3Bvc3QtdGVybXMnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcG9zdC10aXRsZScpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9wcmVmb3JtYXR0ZWQnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcHVsbHF1b3RlJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3F1ZXJ5Jyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3F1ZXJ5LW5vLXJlc3VsdHMnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcXVlcnktcGFnaW5hdGlvbicpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9xdWVyeS1wYWdpbmF0aW9uLW5leHQnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcXVlcnktcGFnaW5hdGlvbi1udW1iZXJzJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3F1ZXJ5LXBhZ2luYXRpb24tcHJldmlvdXMnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcXVlcnktdGl0bGUnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcXVvdGUnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvcmVhZC1tb3JlJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3JzcycpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9zZWFyY2gnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvc2VwYXJhdG9yJyk7XG5cdC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvc2hvcnRjb2RlJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3NpdGUtbG9nbycpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9zaXRlLXRhZ2xpbmUnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvc2l0ZS10aXRsZScpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9zb2NpYWwtbGluaycpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS9zb2NpYWwtbGlua3MnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvc3BhY2VyJyk7XG5cdC8vd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvdGFibGUnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvdGFibGUtb2YtY29udGVudHMnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvdGFnLWNsb3VkJyk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCdjb3JlL3RlbXBsYXRlLXBhcnQnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvdGVybS1kZXNjcmlwdGlvbicpO1xuXHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS90ZXh0LWNvbHVtbnMnKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvdmVyc2UnKTtcblx0Ly93cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZSgnY29yZS92aWRlbycpO1xuXG5cblx0LyogVW5yZWdpc3RlciBDb3JlIEJsb2NrIFR5cGVzICovXG5cdC8qIEVtYmVkIFZhcmlhbnRzIEFsbG93ZWQgKi9cblx0Y29uc3QgYWxsb3dlZEVtYmVkQmxvY2tzID0gWyd5b3V0dWJlJywgJ3ZpbWVvJ107XG5cblx0d3AuYmxvY2tzLmdldEJsb2NrVHlwZSgnY29yZS9lbWJlZCcpLnZhcmlhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYmxvY2tWYXJpYXRpb24pIHtcblx0XHRpZiAoYWxsb3dlZEVtYmVkQmxvY2tzLmluZGV4T2YoYmxvY2tWYXJpYXRpb24ubmFtZSkgPT09IC0xKSB7XG5cdFx0XHR3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uKCdjb3JlL2VtYmVkJywgYmxvY2tWYXJpYXRpb24ubmFtZSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqXG4gKiBFZGl0b3IgU3BlY2lmaWMgU2NyaXB0c1xuICpcbiAqL1xuaW1wb3J0ICcuL2VkaXRvci91bnJlZ2lzdGVyLWJsb2Nrcyc7XG5pbXBvcnQgJy4vZWRpdG9yL2Jsb2NrLXN0eWxlcyc7XG5pbXBvcnQgJy4vZWRpdG9yL2Jsb2NrLXZhcmlhdGlvbnMnO1xuIl0sIm5hbWVzIjpbImRvbVJlYWR5Iiwid3AiLCJibG9ja3MiLCJyZWdpc3RlckJsb2NrU3R5bGUiLCJpc0RlZmF1bHQiLCJuYW1lIiwibGFiZWwiLCJ1bnJlZ2lzdGVyQmxvY2tTdHlsZSIsInJlZ2lzdGVyQmxvY2tWYXJpYXRpb24iLCJ0aXRsZSIsImF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJ1bnJlZ2lzdGVyQmxvY2tUeXBlIiwiYWxsb3dlZEVtYmVkQmxvY2tzIiwiZ2V0QmxvY2tUeXBlIiwidmFyaWF0aW9ucyIsImZvckVhY2giLCJibG9ja1ZhcmlhdGlvbiIsImluZGV4T2YiLCJ1bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24iXSwic291cmNlUm9vdCI6IiJ9