/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../components/media-pickers/media-picker.js":
/*!******************************************************!*\
  !*** ../../components/media-pickers/media-picker.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _picker_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./picker-styles.scss */ "../../components/media-pickers/picker-styles.scss");







const MediaPicker = props => {
  const {
    allowedMediaTypes,
    mediaKey,
    mediaAlt,
    mediaID,
    mediaURL,
    mediaLabelText,
    setAttributes
  } = props;
  const [currentAlt, setCurrentAlt] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(mediaAlt);
  const [currentID, setCurrentID] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(mediaID);
  const [currentURL, setCurrentURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(mediaURL);

  const onSelectMedia = media => {
    setAttributes({
      [mediaKey + 'MediaAlt']: media.alt,
      [mediaKey + 'MediaID']: media.id,
      [mediaKey + 'MediaURL']: media.url
    });
    setCurrentAlt(media.alt);
    setCurrentID(media.id);
    setCurrentURL(media.url);
  };

  const onRemoveMedia = () => {
    setAttributes({
      [mediaKey + 'MediaAlt']: '',
      [mediaKey + 'MediaID']: '',
      [mediaKey + 'MediaURL']: ''
    });
    setCurrentAlt('');
    setCurrentID('');
    setCurrentURL('');
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !currentID ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "picker"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "media-picker"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(mediaLabelText, 'mx-blocks-plugin')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    allowedTypes: allowedMediaTypes,
    onSelect: onSelectMedia,
    value: currentID,
    id: "media-picker",
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        text: "Add media"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "picker__add-button",
        onClick: open
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        icon: "admin-media"
      }), "\xA0\xA0", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add media', 'mx-blocks-plugin')));
    }
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "picker"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "media-picker"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(mediaLabelText, 'mx-blocks-plugin')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "picker__preview-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "picker__preview-image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "media-image",
    src: currentURL,
    alt: currentAlt
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "picker__preview-url"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: currentURL,
    className: "picker__preview-link",
    target: "_blank",
    rel: "noopener noreferrer"
  }, currentURL, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "external"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    text: "Remove file"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "picker__preview-remove",
    onClick: onRemoveMedia
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    icon: "no-alt"
  })))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaPicker);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_media_pickers_media_picker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/media-pickers/media-picker.js */ "../../components/media-pickers/media-picker.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");








function Edit(_ref) {
  let {
    attributes: {
      allowedMediaTypes,
      mottoMediaAlt,
      mottoMediaID,
      mottoMediaURL,
      mottoMediaLabelText,
      personMediaAlt,
      personMediaID,
      personMediaURL,
      personMediaLabelText,
      productMediaAlt,
      productMediaID,
      productMediaURL,
      productMediaLabelText,
      boxMediaAlt,
      boxMediaID,
      boxMediaURL,
      boxMediaLabelText,
      statIconMediaAlt,
      statIconMediaID,
      statIconMediaURL,
      statIconMediaLabelText
    },
    setAttributes
  } = _ref;
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core/editor').getCurrentPostType(), []);
  let defaultTitle = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)('core/editor').getEditedPostAttribute('title');

  if (!defaultTitle) {
    defaultTitle = 'Success Story Name';
  }

  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useEntityProp)('postType', postType, 'meta');
  const ssMottoImage = meta['ss_motto_image'];
  const ssMottoImageAlt = meta['ss_motto_image_alt'];
  const ssPersonImage = meta['ss_person_image'];
  const ssPersonImageAlt = meta['ss_person_image_alt'];
  const ssProductImage = meta['ss_product_image'];
  const ssProductImageAlt = meta['ss_product_image_alt'];
  const ssBoxImage = meta['ss_box_image'];
  const ssBoxImageAlt = meta['ss_box_image_alt'];
  const ssQuote = meta['ss_quote'];
  const ssName = meta['ss_name'];
  const ssTitle = meta['ss_title'];
  const ssDealership = meta['ss_dealership'];
  const ssVideoUrl = meta['ss_video_url'];
  const ssStatText = meta['ss_stat_text'];
  const ssStatIcon = meta['ss_stat_icon'];
  const ssStatIconAlt = meta['ss_stat_icon_alt'];
  const ssStatCaption = meta['ss_stat_caption'];
  const ssCategoryText = meta['ss_category_text'];
  const ssCategoryCaption = meta['ss_category_caption'];
  const ssProductsUsed = meta['ss_products_used'];
  const ssBio = meta['ss_bio'];
  const prevMottoMediaID = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    prevMottoMediaID.current = mottoMediaID;

    if (prevMottoMediaID !== mottoMediaID) {
      setMeta({
        ss_motto_image: mottoMediaURL,
        ss_motto_image_alt: mottoMediaAlt
      });
    }
  }, [mottoMediaID]);
  const prevPersonMediaID = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    prevPersonMediaID.current = personMediaID;

    if (prevPersonMediaID !== personMediaID) {
      setMeta({
        ss_person_image: personMediaURL,
        ss_person_image_alt: personMediaAlt
      });
    }
  }, [personMediaID]);
  const prevProductMediaID = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    prevProductMediaID.current = productMediaID;

    if (prevProductMediaID !== productMediaID) {
      setMeta({
        ss_product_image: productMediaURL,
        ss_product_image_alt: productMediaAlt
      });
    }
  }, [productMediaID]);
  const prevBoxMediaID = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    prevBoxMediaID.current = boxMediaID;

    if (prevBoxMediaID !== boxMediaID) {
      setMeta({
        ss_box_image: boxMediaURL,
        ss_box_image_alt: boxMediaAlt
      });
    }
  }, [boxMediaID]);
  const prevStatIconMediaID = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    prevStatIconMediaID.current = statIconMediaID;

    if (prevStatIconMediaID !== statIconMediaID) {
      setMeta({
        ss_stat_icon: statIconMediaURL,
        ss_stat_icon_alt: statIconMediaAlt
      });
    }
  }, [statIconMediaID]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: `success-story`
  });
  let styleBG = {
    backgroundImage: `url("/wp-content/themes/vauto/dist/images/card-overlay.png"), url("${ssPersonImage}"), url("/wp-content/themes/vauto/dist/images/accent-line.png")`
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(blockProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "success-story__default-inner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item fourth"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_media_pickers_media_picker_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    allowedMediaTypes: allowedMediaTypes,
    mediaKey: "motto",
    mediaLabelText: mottoMediaLabelText,
    mediaAlt: mottoMediaAlt,
    mediaID: mottoMediaID,
    mediaURL: mottoMediaURL,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Optimal image size is 775px by 500px.', 'mx-blocks-plugin')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item fourth"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_media_pickers_media_picker_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    allowedMediaTypes: allowedMediaTypes,
    mediaKey: "person",
    mediaLabelText: personMediaLabelText,
    mediaAlt: personMediaAlt,
    mediaID: personMediaID,
    mediaURL: personMediaURL,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Optimal image size is 325px by 500px.', 'mx-blocks-plugin')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item fourth"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_media_pickers_media_picker_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    allowedMediaTypes: allowedMediaTypes,
    mediaKey: "product",
    mediaLabelText: productMediaLabelText,
    mediaAlt: productMediaAlt,
    mediaID: productMediaID,
    mediaURL: productMediaURL,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Optimal image size is 238px by 80px.', 'mx-blocks-plugin')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item fourth last"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_media_pickers_media_picker_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    allowedMediaTypes: allowedMediaTypes,
    mediaKey: "box",
    mediaLabelText: boxMediaLabelText,
    mediaAlt: boxMediaAlt,
    mediaID: boxMediaID,
    mediaURL: boxMediaURL,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Optimal image size is 884px by 500px.', 'mx-blocks-plugin'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item fourth"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: ssName,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Name...', 'mx-blocks-plugin'),
    onChange: value => setMeta({
      ss_name: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item fourth"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: ssTitle,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title...', 'mx-blocks-plugin'),
    onChange: value => setMeta({
      ss_title: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item fourth"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: ssDealership,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dealership...', 'mx-blocks-plugin'),
    onChange: value => setMeta({
      ss_dealership: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item fourth last"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: ssQuote,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Quote...', 'mx-blocks-plugin'),
    onChange: value => setMeta({
      ss_quote: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    multiline: "p",
    value: ssBio,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bio...', 'mx-blocks-plugin'),
    onChange: value => setMeta({
      ss_bio: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item half"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: ssProductsUsed,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Products Used...', 'mx-blocks-plugin'),
    onChange: value => setMeta({
      ss_products_used: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item half last"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: ssVideoUrl,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video URL (optional)', 'mx-blocks-plugin'),
    onChange: value => setMeta({
      ss_video_url: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item third"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: ssStatText,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stat...', 'mx-blocks-plugin'),
    onChange: value => setMeta({
      ss_stat_text: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item third"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: ssStatCaption,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stat Caption...', 'mx-blocks-plugin'),
    onChange: value => setMeta({
      ss_stat_caption: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item third last"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_media_pickers_media_picker_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    allowedMediaTypes: allowedMediaTypes,
    mediaKey: "statIcon",
    mediaLabelText: statIconMediaLabelText,
    mediaAlt: statIconMediaAlt,
    mediaID: statIconMediaID,
    mediaURL: statIconMediaURL,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Optimal image size is 700px by 700px.', 'mx-blocks-plugin'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item half"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: ssCategoryText,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Category...', 'mx-blocks-plugin'),
    onChange: value => setMeta({
      ss_category_text: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "meta-fields__item half last"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: ssCategoryCaption,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Category Caption...', 'mx-blocks-plugin'),
    onChange: value => setMeta({
      ss_category_caption: value
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-header__preview-wrap"
  }, (ssPersonImage || ssName || ssLocation) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Header Preview', 'mx-blocks-plugin')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-header__upper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-header__image-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: "wp-block-mx-image size-full ss-header__motto-image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: ssMottoImage,
    alt: ssMottoImageAlt
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: "wp-block-mx-image size-full ss-header__person-image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: ssPersonImage,
    alt: ssPersonImageAlt
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-header__copy"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("blockquote", {
    className: "ss-card__quote"
  }, ssQuote), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ss-card__name"
  }, ssName ? ssName : defaultTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ss-card__title-dealership"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: ssTitle
    }
  }), ",\xA0", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: ssDealership
    }
  })), ssProductImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: "wp-block-mx-image size-full ss-card__product-logo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: ssProductImage,
    alt: ssProductImageAlt
  })), ssVideoUrl !== '' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-mx-buttons card__links"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-mx-button ss-header__link is-style-secondary-button is-style-full-width-button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "wp-block-button__link"
  }, "Watch the Video"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-header__lower"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-header__stats"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-header__stat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-header__stat-text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, ssStatText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: "wp-block-mx-image size-full ss-header__stat-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: ssStatIcon,
    alt: ssStatIcon
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ss-header__stat-caption"
  }, ssStatCaption)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-header__stat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, ssCategoryText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ss-header__stat-caption"
  }, ssCategoryCaption))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-header__text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ss-header__products-used"
  }, "Products Used: ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: ssProductsUsed
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    dangerouslySetInnerHTML: {
      __html: ssBio
    }
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-card__preview-wrap"
  }, (ssPersonImage || ssName || ssLocation) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Card Preview', 'mx-blocks-plugin')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-card__image-content",
    style: styleBG
  }, ssProductImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "ss-card__mobile-logo",
    src: ssProductImage,
    alt: ssProductImageAlt
  }), ssPersonImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-card__overlay-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-card__overlay-inner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "ss-card__motto-image",
    src: ssMottoImage,
    alt: ssMottoImageAlt
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-card__mobile-text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ss-card__mobile-name has-small-font-size bold"
  }, ssName ? ssName : defaultTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ss-card__mobile-title-dealership has-small-font-size"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: ssTitle
    }
  }), ", ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: ssDealership
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-mx-buttons ss-card__links"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-mx-button ss-card__mobile-link is-style-secondary-button is-style-xsmall-button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "wp-block-button__link"
  }, "View")))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-card__desktop-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("blockquote", {
    className: "ss-card__quote thinweight"
  }, ssQuote), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ss-card__name has-small-font-size bold"
  }, ssName ? ssName : defaultTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ss-card__title-dealership has-medium-font-size thinweight"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: ssTitle
    }
  }), ", ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: ssDealership
    }
  })), ssProductImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: "wp-block-mx-image size-full ss-card__product-logo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: ssProductImage,
    alt: ssProductImageAlt
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-mx-buttons ss-card__links"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-mx-button ss-card__link is-style-secondary-button is-style-xsmall-button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "wp-block-button__link"
  }, "View"))))))), ssBoxImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ss-box__preview-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Box Preview', 'mx-blocks-plugin')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-cover cta-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true",
    className: "wp-block-cover__background has-background-dim-0 has-background-dim"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    loading: "lazy",
    className: "wp-block-cover__image-background",
    src: ssBoxImage,
    alt: ssBoxImageAlt,
    "data-object-fit": "cover"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-cover__inner-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, ssQuote), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, `${ssName ? ssName : defaultTitle}, `, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: ssDealership
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-mx-buttons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-mx-button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "wp-block-button__link",
    href: "#"
  }, "See the Full Story"))))))));
}

/***/ }),

/***/ "../../components/media-pickers/picker-styles.scss":
/*!*********************************************************!*\
  !*** ../../components/media-pickers/picker-styles.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");

/**
 * Internal dependencies
 */


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('mx/success-story-meta', {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return null;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map