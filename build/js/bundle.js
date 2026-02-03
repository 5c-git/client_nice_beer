/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 11
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const setCookie = (name, value) => {
  const updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=/;max-age=31536000;`;
  document.cookie = updatedCookie;
};
const getCookie = (name) => {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1")}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : void 0;
};
const showMessage = () => {
  window.Corners5ProjectLayout.summonPopUp("#cookie", false);
  const closeButton = document.querySelector(".cookie__button");
  closeButton.addEventListener("click", () => {
    setCookie("agreeCookie", true);
  });
};
const cookie = () => {
  const result = getCookie("agreeCookie");
  if (result === void 0) {
    showMessage();
  }
};
cookie();


/***/ },

/***/ 61
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 75
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 147
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./about-nav/about-nav.js": 7169,
	"./accordion/accordion.js": 5097,
	"./address-card/address-card.js": 3569,
	"./advantage-card/advantage-card.js": 75,
	"./advantages/advantages.js": 9907,
	"./alert-wrapper/alert-wrapper.js": 3937,
	"./alert/alert.js": 4009,
	"./article-card/article-card.js": 8661,
	"./article/article.js": 1217,
	"./back-nav/back-nav.js": 4745,
	"./back/back.js": 2137,
	"./background/background.js": 6387,
	"./banner/banner.js": 1179,
	"./breadcrumbs/breadcrumbs.js": 4073,
	"./button/button.js": 2271,
	"./bx-filter/bx-filter.js": 6529,
	"./bx-soa-order/bx-soa-order.js": 7797,
	"./call-us/call-us.js": 3041,
	"./cart-amount/cart-amount.js": 5801,
	"./cart-card/cart-card.js": 1409,
	"./cart/cart.js": 9819,
	"./catalog-amount-card/catalog-amount-card.js": 4337,
	"./catalog-amount/catalog-amount.js": 3091,
	"./catalog-card/catalog-card.js": 727,
	"./catalog-tabs/catalog-tabs.js": 327,
	"./catalog/catalog.js": 6433,
	"./category-card/category-card.js": 8729,
	"./clear/clear.js": 8881,
	"./components.js": 2820,
	"./contacts/contacts.js": 9961,
	"./cookie/cookie.js": 11,
	"./corners-filter/corners-filter.js": 9237,
	"./empty/empty.js": 1865,
	"./field/field.js": 4205,
	"./file-loader/file-loader.js": 8669,
	"./find/find.js": 8877,
	"./flatpickr-time/flatpickr-time.js": 6823,
	"./footer/footer.js": 8413,
	"./form-lk/form-lk.js": 1493,
	"./form/form.js": 1979,
	"./gallery/gallery.js": 5377,
	"./header-dropdown/header-dropdown.js": 7025,
	"./header-padding/header-padding.js": 2705,
	"./header-search/header-search.js": 3357,
	"./header/header.js": 6689,
	"./intro/intro.js": 4189,
	"./item-card/item-card.js": 8697,
	"./layout-header/layout-header.js": 5853,
	"./layout/layout.js": 1995,
	"./line/line.js": 6743,
	"./loading/loading.js": 3037,
	"./map/map.js": 1413,
	"./mobile-nav/mobile-nav.js": 9143,
	"./modal-product/modal-product.js": 9705,
	"./modal/modal.js": 1421,
	"./not-found/not-found.js": 265,
	"./notice/notice.js": 2415,
	"./novelties/novelties.js": 7897,
	"./offer-card/offer-card.js": 3709,
	"./offer-detail-card/offer-detail-card.js": 6009,
	"./offer-details/offer-details.js": 3789,
	"./offer/offer.js": 5137,
	"./organization-card/organization-card.js": 5213,
	"./packaging/packaging.js": 4377,
	"./pagination/pagination.js": 1015,
	"./partner-card/partner-card.js": 5873,
	"./payment/payment.js": 1561,
	"./personal-data/personal-data.js": 4281,
	"./politics/politics.js": 5569,
	"./popUp/popUp.js": 9417,
	"./post-title/post-title.js": 5169,
	"./privacy/privacy.js": 9025,
	"./profile-accordion/profile-accordion.js": 3609,
	"./profile-center/profile-center.js": 4817,
	"./profile-form/profile-form.js": 2431,
	"./profile-info-card/profile-info-card.js": 8217,
	"./profile-nav/profile-nav.js": 1053,
	"./profile-page/profile-page.js": 7349,
	"./profile-subscribes/profile-subscribes.js": 5265,
	"./projects/projects.js": 9575,
	"./promotion-alert/promotion-alert.js": 8625,
	"./promotion-card/promotion-card.js": 5279,
	"./question-card/question-card.js": 2069,
	"./question/question.js": 4227,
	"./request-wrapper/request-wrapper.js": 4473,
	"./request/request.js": 5745,
	"./search/search.js": 2503,
	"./select-city/select-city.js": 4961,
	"./seo/seo.js": 569,
	"./service-card/service-card.js": 8043,
	"./services/services.js": 1335,
	"./share/share.js": 5273,
	"./sidebar-nav/sidebar-nav.js": 5141,
	"./site-nav/site-nav.js": 8761,
	"./slider/slider.js": 5073,
	"./socials/socials.js": 4741,
	"./subscribe/subscribe.js": 7477,
	"./swiper/swiper.js": 7955,
	"./tabs/tabs.js": 3519,
	"./tags/tags.js": 2961,
	"./team-card/team-card.js": 9469,
	"./team/team.js": 4385,
	"./title/title.js": 61,
	"./tooltip/tooltip.js": 281,
	"./top-filters/top-filters.js": 1729,
	"./untappd/untappd.js": 4185,
	"./up/up.js": 5057,
	"./validator/validator.js": 4489,
	"./video/video.js": 2305,
	"./watched/watched.js": 1161,
	"./widget/widget.js": 2079,
	"./window/window.js": 6919,
	"./zoom/zoom.js": 6577,
	"components/about-nav/about-nav.js": 7169,
	"components/accordion/accordion.js": 5097,
	"components/address-card/address-card.js": 3569,
	"components/advantage-card/advantage-card.js": 75,
	"components/advantages/advantages.js": 9907,
	"components/alert-wrapper/alert-wrapper.js": 3937,
	"components/alert/alert.js": 4009,
	"components/article-card/article-card.js": 8661,
	"components/article/article.js": 1217,
	"components/back-nav/back-nav.js": 4745,
	"components/back/back.js": 2137,
	"components/background/background.js": 6387,
	"components/banner/banner.js": 1179,
	"components/breadcrumbs/breadcrumbs.js": 4073,
	"components/button/button.js": 2271,
	"components/bx-filter/bx-filter.js": 6529,
	"components/bx-soa-order/bx-soa-order.js": 7797,
	"components/call-us/call-us.js": 3041,
	"components/cart-amount/cart-amount.js": 5801,
	"components/cart-card/cart-card.js": 1409,
	"components/cart/cart.js": 9819,
	"components/catalog-amount-card/catalog-amount-card.js": 4337,
	"components/catalog-amount/catalog-amount.js": 3091,
	"components/catalog-card/catalog-card.js": 727,
	"components/catalog-tabs/catalog-tabs.js": 327,
	"components/catalog/catalog.js": 6433,
	"components/category-card/category-card.js": 8729,
	"components/clear/clear.js": 8881,
	"components/components.js": 2820,
	"components/contacts/contacts.js": 9961,
	"components/cookie/cookie.js": 11,
	"components/corners-filter/corners-filter.js": 9237,
	"components/empty/empty.js": 1865,
	"components/field/field.js": 4205,
	"components/file-loader/file-loader.js": 8669,
	"components/find/find.js": 8877,
	"components/flatpickr-time/flatpickr-time.js": 6823,
	"components/footer/footer.js": 8413,
	"components/form-lk/form-lk.js": 1493,
	"components/form/form.js": 1979,
	"components/gallery/gallery.js": 5377,
	"components/header-dropdown/header-dropdown.js": 7025,
	"components/header-padding/header-padding.js": 2705,
	"components/header-search/header-search.js": 3357,
	"components/header/header.js": 6689,
	"components/intro/intro.js": 4189,
	"components/item-card/item-card.js": 8697,
	"components/layout-header/layout-header.js": 5853,
	"components/layout/layout.js": 1995,
	"components/line/line.js": 6743,
	"components/loading/loading.js": 3037,
	"components/map/map.js": 1413,
	"components/mobile-nav/mobile-nav.js": 9143,
	"components/modal-product/modal-product.js": 9705,
	"components/modal/modal.js": 1421,
	"components/not-found/not-found.js": 265,
	"components/notice/notice.js": 2415,
	"components/novelties/novelties.js": 7897,
	"components/offer-card/offer-card.js": 3709,
	"components/offer-detail-card/offer-detail-card.js": 6009,
	"components/offer-details/offer-details.js": 3789,
	"components/offer/offer.js": 5137,
	"components/organization-card/organization-card.js": 5213,
	"components/packaging/packaging.js": 4377,
	"components/pagination/pagination.js": 1015,
	"components/partner-card/partner-card.js": 5873,
	"components/payment/payment.js": 1561,
	"components/personal-data/personal-data.js": 4281,
	"components/politics/politics.js": 5569,
	"components/popUp/popUp.js": 9417,
	"components/post-title/post-title.js": 5169,
	"components/privacy/privacy.js": 9025,
	"components/profile-accordion/profile-accordion.js": 3609,
	"components/profile-center/profile-center.js": 4817,
	"components/profile-form/profile-form.js": 2431,
	"components/profile-info-card/profile-info-card.js": 8217,
	"components/profile-nav/profile-nav.js": 1053,
	"components/profile-page/profile-page.js": 7349,
	"components/profile-subscribes/profile-subscribes.js": 5265,
	"components/projects/projects.js": 9575,
	"components/promotion-alert/promotion-alert.js": 8625,
	"components/promotion-card/promotion-card.js": 5279,
	"components/question-card/question-card.js": 2069,
	"components/question/question.js": 4227,
	"components/request-wrapper/request-wrapper.js": 4473,
	"components/request/request.js": 5745,
	"components/search/search.js": 2503,
	"components/select-city/select-city.js": 4961,
	"components/seo/seo.js": 569,
	"components/service-card/service-card.js": 8043,
	"components/services/services.js": 1335,
	"components/share/share.js": 5273,
	"components/sidebar-nav/sidebar-nav.js": 5141,
	"components/site-nav/site-nav.js": 8761,
	"components/slider/slider.js": 5073,
	"components/socials/socials.js": 4741,
	"components/subscribe/subscribe.js": 7477,
	"components/swiper/swiper.js": 7955,
	"components/tabs/tabs.js": 3519,
	"components/tags/tags.js": 2961,
	"components/team-card/team-card.js": 9469,
	"components/team/team.js": 4385,
	"components/title/title.js": 61,
	"components/tooltip/tooltip.js": 281,
	"components/top-filters/top-filters.js": 1729,
	"components/untappd/untappd.js": 4185,
	"components/up/up.js": 5057,
	"components/validator/validator.js": 4489,
	"components/video/video.js": 2305,
	"components/watched/watched.js": 1161,
	"components/widget/widget.js": 2079,
	"components/window/window.js": 6919,
	"components/zoom/zoom.js": 6577
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 147;

/***/ },

/***/ 234
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-contacts-telegram",
  "use": "icon-contacts-telegram-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-contacts-telegram\">\n<path d=\"M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 265
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 281
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9244);


(0,tippy_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)("[data-tippy-content]", {
  allowHTML: true,
  arrow: false,
  maxWidth: 287,
  animation: "scale-subtle"
});


/***/ },

/***/ 325
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-question",
  "use": "icon-question-usage",
  "viewBox": "0 0 60 60",
  "content": "<symbol viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-question\">\n<g clip-path=\"url(#icon-question_clip0_4253_135674)\">\n<circle cx=\"30\" cy=\"30\" r=\"30\" fill=\"#F0F0F0\" />\n<path d=\"M23.1934 22.8196C23.1934 21.4482 23.829 20.1328 24.9604 19.163C26.0918 18.1933 27.6264 17.6484 29.2264 17.6484H30.9502C32.5502 17.6484 34.0848 18.1933 35.2162 19.163C36.3476 20.1328 36.9832 21.4482 36.9832 22.8196C37.0467 23.9388 36.7448 25.0482 36.123 25.9809C35.5012 26.9136 34.5932 27.619 33.5358 27.9908C32.4783 28.4866 31.5703 29.4272 30.9485 30.6707C30.3267 31.9143 30.0248 33.3936 30.0883 34.8858\" stroke=\"#212121\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M30.0879 41.7812V41.7985\" stroke=\"#212121\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</g>\n<defs>\n<clipPath id=\"icon-question_clip0_4253_135674\">\n<rect width=\"60\" height=\"60\" fill=\"white\" />\n</clipPath>\n</defs>\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 327
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 501
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-download",
  "use": "icon-download-usage",
  "viewBox": "0 0 25 25",
  "content": "<symbol viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-download\">\r\n<path d=\"M4.16797 17.709V19.7923C4.16797 20.3449 4.38746 20.8748 4.77816 21.2655C5.16886 21.6562 5.69877 21.8757 6.2513 21.8757H18.7513C19.3038 21.8757 19.8337 21.6562 20.2244 21.2655C20.6151 20.8748 20.8346 20.3449 20.8346 19.7923V17.709\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.29297 11.459L12.5013 16.6673L17.7096 11.459\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12.5 4.16797V16.668\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 569
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 727
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 751
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-row-view",
  "use": "icon-row-view-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-row-view\">\r\n<rect x=\"10\" y=\"10\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<rect x=\"10\" y=\"22\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<path d=\"M22 12H30\" stroke-width=\"2\" />\r\n<path d=\"M22 24H30\" stroke-width=\"2\" />\r\n<path d=\"M22 16H27\" stroke-width=\"2\" />\r\n<path d=\"M22 28H27\" stroke-width=\"2\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 885
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-header-cart",
  "use": "icon-header-cart-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-header-cart\">\n<path d=\"M17 27.5C17 28.3284 16.3284 29 15.5 29C14.6716 29 14 28.3284 14 27.5C14 26.6716 14.6716 26 15.5 26C16.3284 26 17 26.6716 17 27.5Z\" />\n<path d=\"M26 27.5C26 28.3284 25.3284 29 24.5 29C23.6716 29 23 28.3284 23 27.5C23 26.6716 23.6716 26 24.5 26C25.3284 26 26 26.6716 26 27.5Z\" />\n<path d=\"M13.4751 11.7784L13.2535 10.8032L11.3032 11.2465L11.5249 12.2216L13.4751 11.7784ZM15 23L14.0249 23.2216L14.2018 24H15V23ZM28 14H29L28 13V14ZM28 17L28.8944 17.4472L29 17.2361V17H28ZM25 23V24H25.618L25.8944 23.4472L25 23ZM27 14V17H29V14H27ZM25 22H15V24H25V22ZM27.1056 16.5528L24.1056 22.5528L25.8944 23.4472L28.8944 17.4472L27.1056 16.5528ZM11.5249 12.2216L11.9794 14.2216L13.9297 13.7784L13.4751 11.7784L11.5249 12.2216ZM11.9794 14.2216L14.0249 23.2216L15.9751 22.7784L13.9297 13.7784L11.9794 14.2216ZM12.9545 15H28V13H12.9545V15Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 976
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-user",
  "use": "icon-user-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-user\">\n<path d=\"M20 21C22.7614 21 25 18.7614 25 16C25 13.2386 22.7614 11 20 11C17.2386 11 15 13.2386 15 16C15 18.7614 17.2386 21 20 21Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M10.5 29.9895C10.9031 28.5468 11.728 27.2823 12.8522 26.3835C13.9764 25.4847 15.3401 24.9996 16.741 25H23.2557C24.6584 24.9995 26.0238 25.4858 27.1488 26.3867C28.2739 27.2875 29.0985 28.5548 29.5 30\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 1015
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1053
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const profileNav = document.querySelector(".profile-nav");
if (profileNav) {
  const toggle = profileNav.querySelector(".profile-nav__toggle");
  document.addEventListener("click", (evt) => {
    if (evt.target === toggle) {
      profileNav.classList.toggle("profile-nav--active");
    } else {
      profileNav.classList.remove("profile-nav--active");
    }
  });
}


/***/ },

/***/ 1161
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1708);



const watched = document.querySelector(".watched");
if (watched) {
  const watchedNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(".watched__slider", {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .Vx, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .dK, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Scrollbar */ .Ze],
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: false,
    // Navigation arrows
    navigation: {
      prevEl: ".watched__slider-button--prev",
      nextEl: ".watched__slider-button--next",
      disabledClass: "watched__slider-button--disabled"
    },
    // Scrollbar
    scrollbar: {
      el: ".watched__scrollbar",
      dragClass: "watched__scrollbar-drag",
      draggable: true
    }
  });
  watched.addEventListener("dropdownOpened", () => {
    watchedNolint.allowTouchMove = false;
  });
  watched.addEventListener("dropdownClosed", () => {
    watchedNolint.allowTouchMove = true;
  });
}


/***/ },

/***/ 1179
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1708);



const banner = document.querySelector(".banner");
if (banner) {
  const swiperBannerNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(".banner__slider", {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .EffectFade */ ._R, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .Vx, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .dK, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Autoplay */ .Ij],
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5e3,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    // If we need navigation
    navigation: {
      nextEl: ".banner__slider-button--next",
      prevEl: ".banner__slider-button--prev"
    },
    // If we need pagination
    pagination: {
      clickable: true,
      el: ".banner__slider-pagination",
      bulletClass: "banner__slider-bullet",
      bulletActiveClass: "banner__slider-bullet--active",
      type: "bullets"
    }
  });
}


/***/ },

/***/ 1182
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-insta",
  "use": "icon-insta-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-insta\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.6014 9.39648C16.7392 9.3447 17.1028 9.33203 19.9997 9.33203H19.9964C22.8942 9.33203 23.2564 9.3447 24.3942 9.39648C25.5298 9.44848 26.3053 9.62826 26.9853 9.89204C27.6876 10.1643 28.2809 10.5287 28.8742 11.1221C29.4676 11.7149 29.832 12.3101 30.1054 13.0116C30.3676 13.6899 30.5476 14.465 30.6009 15.6005C30.652 16.7383 30.6654 17.1019 30.6654 19.9988C30.6654 22.8957 30.652 23.2584 30.6009 24.3962C30.5476 25.5313 30.3676 26.3067 30.1054 26.9851C29.832 27.6864 29.4676 28.2816 28.8742 28.8745C28.2816 29.4678 27.6873 29.8331 26.986 30.1056C26.3073 30.3694 25.5313 30.5491 24.3957 30.6011C23.258 30.6529 22.8955 30.6656 19.9984 30.6656C17.1017 30.6656 16.7383 30.6529 15.6005 30.6011C14.4652 30.5491 13.6899 30.3694 13.0112 30.1056C12.3101 29.8331 11.7149 29.4678 11.1223 28.8745C10.5292 28.2816 10.1647 27.6864 9.89204 26.9849C9.62848 26.3067 9.4487 25.5315 9.39648 24.396C9.34492 23.2582 9.33203 22.8957 9.33203 19.9988C9.33203 17.1019 9.34536 16.7381 9.39625 15.6003C9.44737 14.4652 9.62737 13.6899 9.89181 13.0114C10.1652 12.3101 10.5296 11.7149 11.1229 11.1221C11.7158 10.5289 12.311 10.1645 13.0125 9.89204C13.6907 9.62826 14.4659 9.44848 15.6014 9.39648ZM19.6468 11.2526C19.4311 11.2525 19.2313 11.2524 19.0454 11.2527V11.25C17.0574 11.2522 16.6761 11.2656 15.6921 11.31C14.6521 11.3578 14.0874 11.5311 13.7114 11.6778C13.2136 11.8716 12.8581 12.1027 12.4847 12.476C12.1114 12.8493 11.8798 13.2049 11.6865 13.7027C11.5405 14.0787 11.3667 14.6431 11.3191 15.6832C11.268 16.8076 11.2578 17.1436 11.2578 19.9921C11.2578 22.8406 11.268 23.1783 11.3191 24.3028C11.3665 25.3428 11.5405 25.9073 11.6865 26.2828C11.8803 26.7808 12.1114 27.1355 12.4847 27.5088C12.8581 27.8822 13.2136 28.1133 13.7114 28.3066C14.0876 28.4526 14.6521 28.6264 15.6921 28.6744C16.8165 28.7255 17.1541 28.7366 20.0023 28.7366C22.8504 28.7366 23.1882 28.7255 24.3126 28.6744C25.3526 28.6268 25.9175 28.4535 26.2931 28.3068C26.7911 28.1135 27.1455 27.8824 27.5189 27.5091C27.8922 27.1359 28.1238 26.7815 28.3171 26.2837C28.4631 25.9082 28.6369 25.3437 28.6844 24.3037C28.7355 23.1792 28.7467 22.8415 28.7467 19.9948C28.7467 17.1481 28.7355 16.8103 28.6844 15.6858C28.6371 14.6458 28.4631 14.0814 28.3171 13.7058C28.1233 13.208 27.8922 12.8525 27.5189 12.4791C27.1458 12.1058 26.7909 11.8747 26.2931 11.6813C25.9171 11.5353 25.3526 11.3616 24.3126 11.314C23.1879 11.2629 22.8504 11.2527 20.0023 11.2527C19.8793 11.2527 19.7608 11.2526 19.6468 11.2526Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25.696 13.0258C24.9894 13.0258 24.416 13.5985 24.416 14.3054C24.416 15.0121 24.9894 15.5854 25.696 15.5854C26.4027 15.5854 26.976 15.0121 26.976 14.3054C26.976 13.5987 26.4027 13.0254 25.696 13.0254V13.0258Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.5234 19.9993C14.5234 16.9742 16.9761 14.5215 20.0013 14.5215H20.0011C23.0262 14.5215 25.4782 16.9742 25.4782 19.9993C25.4782 23.0245 23.0264 25.476 20.0013 25.476C16.9761 25.476 14.5234 23.0245 14.5234 19.9993ZM23.5565 20.0009C23.5565 18.0371 21.9645 16.4453 20.0009 16.4453C18.0371 16.4453 16.4453 18.0371 16.4453 20.0009C16.4453 21.9645 18.0371 23.5565 20.0009 23.5565C21.9645 23.5565 23.5565 21.9645 23.5565 20.0009Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 1217
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1335
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1409
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _packaging_packaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4377);


const activateCartCard = (func) => {
  const cards = document.querySelectorAll(".cart-card:not(.cart-card--js)");
  cards.forEach((card) => {
    if (!card.classList.contains("cart-card--js")) {
      card.classList.add("cart-card--js");
      const select = (0,_packaging_packaging__WEBPACK_IMPORTED_MODULE_0__["default"])(card, (event) => {
        if (func) {
          func(event);
        }
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateCartCard);


/***/ },

/***/ 1413
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9838);


const map = document.querySelectorAll(".map");
if (map.length > 0) {
  const tag = document.createElement("script");
  tag.src = "https://api-maps.yandex.ru/2.1/?load=package.full&lang=ru-RU";
  const firstScriptTag = document.querySelector("script");
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  if (tag) {
    tag.addEventListener("load", () => {
      map.forEach((el) => {
        const coorinateX = parseFloat(el.getAttribute("data-coordinatex"));
        const coorinateY = parseFloat(el.getAttribute("data-coordinatey"));
        const mapName = el.getAttribute("data-name");
        const mapHint = el.getAttribute("data-hint");
        const ymap = el.querySelector(".map__ymap");
        ymaps.ready(() => {
          const myMap = new ymaps.Map(ymap, {
            center: [coorinateX, coorinateY],
            zoom: 16,
            controls: ["zoomControl"]
          }, {
            searchControlProvider: "yandex#search"
          });
          myMap.behaviors.disable("scrollZoom");
          let placemark;
          let MyBalloonLayout;
          let MyBalloonContentLayout;
          if (window.innerWidth >= 488) {
            MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
              '<div class="map__balloon"><a class="map__balloon-close" href="#"><span></span></a><div class="map__balloon-arrow"></div><div class="map__balloon-inner">$[[options.contentLayout observeSize minWidth=235 maxWidth=300 maxHeight=350]]</div></div>',
              {
                /**
                 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                 * @function
                 * @name build
                 */
                build: function() {
                  this.constructor.superclass.build.call(this);
                  this._$element = $(".map__balloon", this.getParentElement());
                  this.applyElementOffset();
                  this._$element.find(".map__balloon-close").on("click", $.proxy(this.onCloseClick, this));
                },
                /**
                 * Удаляет содержимое макета из DOM.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                 * @function
                 * @name clear
                 */
                clear: function() {
                  this._$element.find(".map__balloon-close").off("click");
                  this.constructor.superclass.clear.call(this);
                },
                /**
                 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onSublayoutSizeChange
                 */
                onSublayoutSizeChange: function() {
                  MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
                  if (!this._isElement(this._$element)) {
                    return;
                  }
                  this.applyElementOffset();
                  this.events.fire("shapechange");
                },
                /**
                 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name applyElementOffset
                 */
                applyElementOffset: function() {
                  this._$element.css({
                    left: -(this._$element[0].offsetWidth / 2),
                    top: -(this._$element[0].offsetHeight + 20 + this._$element.find(".map__balloon-arrow")[0].offsetHeight)
                  });
                },
                /**
                 * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onCloseClick
                 */
                onCloseClick: function(e) {
                  e.preventDefault();
                  this.events.fire("userclose");
                },
                onSubmitClick: function(e) {
                  e.preventDefault();
                  window.Corners5ProjectLayout.summonPopUp("#modal--contact", true);
                  validatedForm = window.Corners5ProjectLayout.validation.validateForm("#where-2");
                  window.Corners5ProjectLayout.validation.maskPhone("#where-2");
                  window.Corners5ProjectLayout.setTextareaAutoHeight("#where-2 textarea.validator__texarea");
                  const form = document.querySelector("#where-2");
                  form.addEventListener("bouncerFormValid", () => {
                    func();
                    validatedForm.destroy();
                    validatedForm = void 0;
                  });
                  this.events.fire("userclose");
                },
                /**
                 * Используется для автопозиционирования (balloonAutoPan).
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                 * @function
                 * @name getClientBounds
                 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                 */
                getShape: function() {
                  if (!this._isElement(this._$element)) {
                    return MyBalloonLayout.superclass.getShape.call(this);
                  }
                  var position = this._$element.position();
                  return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                    [position.left, position.top],
                    [
                      position.left + this._$element[0].offsetWidth,
                      position.top + this._$element[0].offsetHeight + this._$element.find(".map__balloon-arrow")[0].offsetHeight
                    ]
                  ]));
                },
                /**
                 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                 * @function
                 * @private
                 * @name _isElement
                 * @param {jQuery} [element] Элемент.
                 * @returns {Boolean} Флаг наличия.
                 */
                _isElement: function(element) {
                  return element && element[0] && element.find(".map__balloon-arrow")[0];
                }
              }
            );
            MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
              '<p class="map__balloon-title">$[properties.balloonHeader]</p><p class="map__balloon-city">$[properties.balloonContent]</p>'
            );
          } else {
            MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
              '<p class="map__balloon-title">$[properties.balloonHeader]</p><p class="map__balloon-city">$[properties.balloonContent]</p>',
              {}
            );
          }
          const myCollection = new ymaps.GeoObjectCollection({}, {
            iconLayout: "default#image",
            iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_0__/* .ENV */ .K}`]}map-pin.svg`,
            iconImageSize: [66, 66],
            iconImageOffset: [-33, -33]
          });
          if (window.innerWidth >= 488) {
            placemark = new ymaps.Placemark([coorinateX, coorinateY], {
              balloonHeader: `${mapName}`,
              balloonContent: `${mapHint}`
            }, {
              balloonShadow: false,
              balloonLayout: MyBalloonLayout,
              balloonContentLayout: MyBalloonContentLayout
              // balloonPanelMaxMapArea: 0,
            });
          } else {
            placemark = new ymaps.Placemark([coorinateX, coorinateY], {
              balloonHeader: `${mapName}`,
              balloonContent: `${mapHint}`
            }, {
              balloonContentLayout: MyBalloonContentLayout
              // balloonPanelMaxMapArea: 0,
            });
          }
          myCollection.add(placemark);
          placemark.events.add("balloonopen", (evt) => {
            evt.get("target").options.set("preset", {
              iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_0__/* .ENV */ .K}`]}map-pin--active.svg`
            });
          });
          placemark.events.add("balloonclose", (evt) => {
            evt.get("target").options.unset("preset");
          });
          myMap.geoObjects.add(myCollection);
        });
      });
    });
  }
}


/***/ },

/***/ 1421
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);


const initCitySelect = (func) => {
  const select = document.querySelector(".modal__select");
  let choicesNolint;
  if (select) {
    choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, {
      searchEnabled: true,
      itemSelectText: "",
      shouldSort: false,
      loadingText: "Loading...",
      noResultsText: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
      noChoicesText: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E",
      classNames: {
        containerOuter: "choices modal__choices"
      }
    });
    select.addEventListener("addItem", (event) => {
      func(event);
    });
  }
  return choicesNolint;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCitySelect);


/***/ },

/***/ 1448
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-button-card",
  "use": "icon-button-card-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-button-card\">\r\n<path d=\"M6.81972 15.503C6.81972 16.1962 6.25889 16.758 5.56708 16.758C4.87528 16.758 4.31445 16.1962 4.31445 15.503C4.31445 14.8099 4.87528 14.248 5.56708 14.248C6.25889 14.248 6.81972 14.8099 6.81972 15.503Z\" stroke=\"none\" />\r\n<path d=\"M14.3353 15.503C14.3353 16.1962 13.7745 16.758 13.0827 16.758C12.3909 16.758 11.8301 16.1962 11.8301 15.503C11.8301 14.8099 12.3909 14.248 13.0827 14.248C13.7745 14.248 14.3353 14.8099 14.3353 15.503Z\" stroke=\"none\" />\r\n<path d=\"M4 3.29883L6.50526 11.7988L13.3826 10.4654C14.8464 10.1816 15.9 8.93575 15.9 7.48869V5.12025H4.53684\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 1493
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1561
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const payment = document.querySelector(".payment");
const changeText = (text) => {
  if (window.innerWidth < 992 && text.textContent === "\u041E\u043F\u043B\u0430\u0442\u0430 \u043F\u043E QR \u043A\u043E\u0434\u0443") {
    text.textContent = "\u041E\u043F\u043B\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u0421\u0411\u041F";
  } else if (window.innerWidth > 991 && text.textContent === "\u041E\u043F\u043B\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u0421\u0411\u041F") {
    text.textContent = "\u041E\u043F\u043B\u0430\u0442\u0430 \u043F\u043E QR \u043A\u043E\u0434\u0443";
  }
};
if (payment) {
  const qr = payment.querySelector(".payment__qr");
  if (qr) {
    const text = payment.querySelector(".payment__text");
    changeText(text);
    window.addEventListener("resize", () => {
      changeText(text);
    });
  }
}


/***/ },

/***/ 1729
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);


const initTopFilterSelect = () => {
  const select = document.querySelector(".top-filters__select");
  if (select) {
    const choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, {
      searchEnabled: false,
      itemSelectText: "",
      shouldSort: false,
      classNames: {
        containerOuter: "choices top-filters__choices"
      }
    });
    select.addEventListener("addItem", (event) => {
      if (func) {
        func(event);
      }
    });
    select.choicesInstance = choicesNolint;
  }
};
initTopFilterSelect();


/***/ },

/***/ 1865
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1877
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-navshare",
  "use": "icon-navshare-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-navshare\">\n<path d=\"M18 8H10C8.89543 8 8 8.89543 8 10V18C8 19.1046 8.89543 20 10 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M16 8V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H8\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 1979
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1995
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 2046
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-orders",
  "use": "icon-orders-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-orders\">\r\n<path d=\"M5.83333 4.66797H10.5L14 8.16797H22.1667C22.7855 8.16797 23.379 8.4138 23.8166 8.85139C24.2542 9.28897 24.5 9.88246 24.5 10.5013V19.8346C24.5 20.4535 24.2542 21.047 23.8166 21.4845C23.379 21.9221 22.7855 22.168 22.1667 22.168H5.83333C5.21449 22.168 4.621 21.9221 4.18342 21.4845C3.74583 21.047 3.5 20.4535 3.5 19.8346V7.0013C3.5 6.38246 3.74583 5.78897 4.18342 5.35139C4.621 4.9138 5.21449 4.66797 5.83333 4.66797\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2069
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1708);



const questionSliderInit = () => {
  const questions = document.querySelectorAll(".question-card");
  questions.forEach((question, i) => {
    if (!question.classList.contains("question-card--js")) {
      question.classList.add("question-card--js");
      question.id = `question-card-${i}`;
      const id = `question-card-${i}`;
      const slider = question.querySelector(".question-card__slider .swiper");
      const questionSliderNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(slider, {
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .Vx],
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: false,
        // If we need navigation
        navigation: {
          nextEl: `#${id} .question-card__slider-button--next`,
          prevEl: `#${id} .question-card__slider-button--prev`,
          disabledClass: "question-card__slider-button--disabled"
        }
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questionSliderInit);


/***/ },

/***/ 2079
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const widget = document.querySelector(".widget");
if (widget) {
  const widgetClose = widget.querySelector(".widget__close");
  const widgetOverlay = widget.querySelector(".widget__overlay");
  const body = document.querySelector("body");
  const getWidgetWork = () => {
    const isActive = widget.classList.contains("widget--active");
    if (!isActive) {
      widget.classList.add("widget--active");
      widgetClose.classList.add("widget__close--active");
      body.classList.add("fixed");
    } else {
      widget.classList.remove("widget--active");
      widgetClose.classList.remove("widget__close--active");
      body.classList.remove("fixed");
    }
  };
  widgetClose.addEventListener("click", () => {
    getWidgetWork();
  });
  widgetOverlay.addEventListener("click", () => {
    getWidgetWork();
  });
  const currentPage = window.location.pathname.split("/").pop();
  const links = widget.querySelectorAll("li a");
  links.forEach((link) => {
    const page = link.href.split("/").pop();
    if (page === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}


/***/ },

/***/ 2137
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 2238
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-compare",
  "use": "icon-compare-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-compare\">\n<path d=\"M2.05078 0.850781C1.38804 0.850781 0.850781 1.38804 0.850781 2.05078C0.850781 2.71352 1.38804 3.25078 2.05078 3.25078V0.850781ZM13.9508 3.25078C14.6135 3.25078 15.1508 2.71352 15.1508 2.05078C15.1508 1.38804 14.6135 0.850781 13.9508 0.850781V3.25078ZM2.05078 3.25078H13.9508V0.850781H2.05078V3.25078Z\" />\n<path d=\"M2.05078 5.95039C1.38804 5.95039 0.850781 6.48765 0.850781 7.15039C0.850781 7.81313 1.38804 8.35039 2.05078 8.35039V5.95039ZM13.9508 8.35039C14.6135 8.35039 15.1508 7.81313 15.1508 7.15039C15.1508 6.48765 14.6135 5.95039 13.9508 5.95039V8.35039ZM2.05078 8.35039H13.9508V5.95039H2.05078V8.35039Z\" />\n<path d=\"M2.05078 11.05C1.38804 11.05 0.850781 11.5873 0.850781 12.25C0.850781 12.9127 1.38804 13.45 2.05078 13.45V11.05ZM7.15078 13.45C7.81352 13.45 8.35078 12.9127 8.35078 12.25C8.35078 11.5873 7.81352 11.05 7.15078 11.05V13.45ZM2.05078 13.45H7.15078V11.05H2.05078V13.45Z\" />\n<path d=\"M10.5508 11.05C9.88804 11.05 9.35078 11.5873 9.35078 12.25C9.35078 12.9127 9.88804 13.45 10.5508 13.45V11.05ZM13.9508 13.45C14.6135 13.45 15.1508 12.9127 15.1508 12.25C15.1508 11.5873 14.6135 11.05 13.9508 11.05V13.45ZM10.5508 13.45H13.9508V11.05H10.5508V13.45Z\" />\n<path d=\"M13.45 10.5508C13.45 9.88804 12.9127 9.35078 12.25 9.35078C11.5873 9.35078 11.05 9.88804 11.05 10.5508L13.45 10.5508ZM11.05 13.9508C11.05 14.6135 11.5873 15.1508 12.25 15.1508C12.9127 15.1508 13.45 14.6135 13.45 13.9508L11.05 13.9508ZM11.05 10.5508L11.05 13.9508L13.45 13.9508L13.45 10.5508L11.05 10.5508Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2271
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 2305
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const generateURL = (id) => {
  const query = "?rel=0&showinfo=0&autoplay=1";
  return `https://www.youtube.com/embed/${id}${query}`;
};
const createIframe = (id) => {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("video__media");
  return iframe;
};
const parseMediaURL = (video) => {
  const regexp = /https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/i;
  const url = video.href;
  const match = url.match(regexp);
  return match[1];
};
const setupVideo = (video) => {
  const link = video.querySelector(".video__link");
  const button = video.querySelector(".video__button");
  const source = video.querySelector("source");
  const media = video.querySelector(".video__media");
  const id = parseMediaURL(link);
  source.setAttribute("srcset", `https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`);
  media.setAttribute("src", `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  video.addEventListener("click", () => {
    const iframe = createIframe(id);
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });
  link.removeAttribute("href");
  video.classList.add("video--enabled");
};
const findVideos = () => {
  document.querySelectorAll(".video__wrapper").forEach((el) => {
    setupVideo(el);
  });
};
findVideos();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findVideos);


/***/ },

/***/ 2415
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 2431
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6430);
/* harmony import */ var flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6775);
/* harmony import */ var flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1660);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3670);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4489);







const TOKEN = "d11e752ae788e61213f01ae6952bdbd85ceaa025";
document.querySelectorAll('[type="number"]').forEach((el) => {
  el.addEventListener("wheel", (evt) => {
    evt.preventDefault();
  });
});
const phoneMask = new (inputmask__WEBPACK_IMPORTED_MODULE_3___default())("+[9 (999) 999-99-99]", {
  autoUnmask: true,
  showMaskOnHover: false
});
const innMask = new (inputmask__WEBPACK_IMPORTED_MODULE_3___default())("9{10,12}", {
  autoUnmask: true,
  showMaskOnHover: false,
  showMaskOnFocus: false,
  placeholder: ""
});
let validator;
const profileForm = document.querySelector(".profile-form");
if (profileForm) {
  validator = (0,_validator_validator__WEBPACK_IMPORTED_MODULE_5__.validateForm)(".profile-form");
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_5__.initPasswordEye)(".profile-form");
}
const innInput = document.querySelector("#inn");
if (innInput) {
  innMask.mask(innInput);
}
const setInputHeight = (field) => {
  field.style.height = "auto";
  field.style.height = `${field.scrollHeight}px`;
};
const initProfileFormPhone = () => {
  const inputs = document.querySelectorAll('.profile-form__input[type="tel"]');
  if (inputs.length > 0) {
    inputs.forEach((input) => {
      phoneMask.mask(input);
    });
  }
};
initProfileFormPhone();
const initProfileFormTextarea = () => {
  const textareas = document.querySelectorAll(".profile-form textarea");
  if (textareas.length > 0) {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .setTextareaAutoHeight */ .Bs)(".profile-form textarea");
  }
};
initProfileFormTextarea();
const initProfileFormSelect = () => {
  const selects = document.querySelectorAll(".profile-form__select");
  if (selects.length > 0) {
    selects.forEach((select) => {
      const placeholder = select.getAttribute("placeholder");
      const choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, {
        searchEnabled: false,
        shouldSort: false,
        delimiter: ",",
        editItems: true,
        placeholder: true,
        placeholderValue: placeholder,
        noResultsText: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
        noChoicesText: "\u041D\u0435\u0447\u0435\u0433\u043E \u0432\u044B\u0431\u0438\u0440\u0430\u0442\u044C",
        itemSelectText: "",
        removeItemButton: true,
        classNames: {
          containerOuter: "choices profile-form__choices"
        }
      });
    });
  }
};
initProfileFormSelect();
const timepickers = document.querySelectorAll('.profile-form__input[type="time"]');
if (timepickers.length > 0) {
  timepickers.forEach((timepicker) => {
    const timepickerFooter = document.createElement("div");
    timepickerFooter.classList.add("flatpickr-time__footer");
    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.classList.add("button");
    resetButton.textContent = "\u2717";
    const acceptButton = document.createElement("button");
    acceptButton.type = "button";
    acceptButton.classList.add("button");
    acceptButton.textContent = "\u2713";
    timepickerFooter.append(resetButton);
    timepickerFooter.append(acceptButton);
    const picker = (0,flatpickr__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(timepicker, {
      locale: flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_2__.Russian,
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      time_24hr: true,
      disableMobile: true,
      allowInput: true
    });
    picker.calendarContainer.append(timepickerFooter);
    resetButton.addEventListener("click", () => {
      picker.clear();
      picker.close();
    });
    acceptButton.addEventListener("click", () => {
      const hour = picker.hourElement.value;
      const minutes = picker.minuteElement.value;
      picker.setDate([`${hour}:${minutes}`], "H:i");
      picker.close();
    });
  });
}
const initProfileFormAddressDadata = () => {
  const fakeAddress = document.querySelector(".profile-form #fake-address");
  if (fakeAddress) {
    const textarea = document.querySelector(".profile-form #fake-address");
    const inputAddress = $("#fake-address");
    inputAddress.suggestions({
      token: TOKEN,
      type: "ADDRESS",
      /* Вызывается, когда пользователь выбирает одну из подсказок */
      onSelect() {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      },
      /* Вызывается, когда пользователь не выбрал ни одну из подсказок */
      onSelectNothing() {
        if (textarea) {
          textarea.value = "";
          textarea.style.height = "auto";
          textarea.style.height = `${textarea.scrollHeight}px`;
        }
      }
    });
  }
};
initProfileFormAddressDadata();
const addOrganizationForm = document.querySelector("#add-organization-form");
if (addOrganizationForm) {
  const initInnHints = () => {
    const innInput2 = document.querySelector("#inn");
    if (innInput2) {
      const kppInput = addOrganizationForm.querySelector("#kpp");
      const ogrnInput = addOrganizationForm.querySelector("#ogrn");
      const companyNameInput = addOrganizationForm.querySelector("#name");
      const companyShortNameInput = addOrganizationForm.querySelector("#short-name");
      const addressInput = addOrganizationForm.querySelector("#address");
      $("#inn").suggestions({
        token: TOKEN,
        type: "PARTY",
        minChars: 8,
        formatResult(value, currentValue, suggestion, options) {
          const that = this;
          const highlightMatches = that.highlightMatches(suggestion.data.inn, currentValue, suggestion, options);
          return `${value}, \u0418\u041D\u041D: ${highlightMatches}`;
        },
        // Вызывается при получении ответа от сервера. В suggestions передается массив полученных подсказок.
        // onSearchComplete: function (query, suggestions) {
        //   console.log(query);
        //   console.log(suggestions);
        // },
        // Вызывается, когда пользователь выбирает одну из подсказок.
        onSelect(suggestion) {
          if (innInput2) {
            innInput2.value = suggestion.data.inn;
          }
          if (kppInput) {
            kppInput.value = suggestion.data.kpp;
          }
          if (ogrnInput) {
            ogrnInput.value = suggestion.data.ogrn;
          }
          if (companyShortNameInput) {
            companyShortNameInput.value = suggestion.data.name.short_with_opf;
            setInputHeight(companyShortNameInput);
          }
          if (companyNameInput) {
            companyNameInput.value = suggestion.data.name.full_with_opf;
            setInputHeight(companyNameInput);
          }
          if (addressInput) {
            addressInput.value = suggestion.data.address.unrestricted_value;
            setInputHeight(addressInput);
          }
          validator.validateAll(addOrganizationForm);
        },
        /* Вызывается, когда пользователь не выбрал ни одну из подсказок */
        onSelectNothing() {
          if (innInput2) {
            innInput2.value = "";
          }
          if (kppInput) {
            kppInput.value = "";
          }
          if (ogrnInput) {
            ogrnInput.value = "";
          }
          if (companyNameInput) {
            companyNameInput.value = "";
            companyNameInput.style.height = "";
          }
          if (companyShortNameInput) {
            companyShortNameInput.value = "";
            companyShortNameInput.style.height = "";
          }
          if (addressInput) {
            addressInput.value = "";
            addressInput.style.height = "";
          }
        }
      });
    }
  };
  initInnHints();
}


/***/ },

/***/ 2503
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4489);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3670);



const search = document.querySelector(".search");
if (search) {
  const headerSearch = document.querySelector(".header__search");
  const searchInput = search.querySelector(".search__input");
  const searchClear = search.querySelector(".search__clear");
  searchInput.addEventListener("input", () => {
    if (searchInput.value !== "") {
      searchClear.classList.add("search__clear--active");
    } else {
      searchClear.classList.remove("search__clear--active");
    }
  });
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchClear.classList.remove("search__clear--active");
  });
  searchInput.addEventListener("focus", () => {
    if (window.innerWidth > 991) {
      search.classList.add("search--active");
    } else {
      headerSearch.classList.add("header__search--active");
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPaddingOnBody */ .rP)();
      setTimeout(() => {
        searchInput.focus();
      }, 100);
    }
  });
  searchInput.addEventListener("focusout", () => {
    search.classList.remove("search--active");
  });
}
if (search) {
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_0__.validateForm)(".search__form ");
}


/***/ },

/***/ 2539
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-contacts-whatsup",
  "use": "icon-contacts-whatsup-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-contacts-whatsup\">\n<path d=\"M3 20.9988L4.65 17.1988C3.38766 15.4068 2.82267 13.2158 3.06104 11.0369C3.29942 8.85793 4.32479 6.84089 5.94471 5.36427C7.56463 3.88765 9.66775 3.05296 11.8594 3.01685C14.051 2.98073 16.1805 3.74568 17.8482 5.16812C19.5159 6.59057 20.6071 8.57273 20.9172 10.7426C21.2272 12.9125 20.7347 15.121 19.5321 16.9535C18.3295 18.7861 16.4994 20.1168 14.3854 20.6959C12.2713 21.275 10.0186 21.0626 8.05 20.0988L3 20.9988\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M9 10C9 10.1326 9.05268 10.2598 9.14645 10.3536C9.24021 10.4473 9.36739 10.5 9.5 10.5C9.63261 10.5 9.75979 10.4473 9.85355 10.3536C9.94732 10.2598 10 10.1326 10 10V9C10 8.86739 9.94732 8.74021 9.85355 8.64645C9.75979 8.55268 9.63261 8.5 9.5 8.5C9.36739 8.5 9.24021 8.55268 9.14645 8.64645C9.05268 8.74021 9 8.86739 9 9V10ZM9 10C9 11.3261 9.52678 12.5979 10.4645 13.5355C11.4021 14.4732 12.6739 15 14 15H15C15.1326 15 15.2598 14.9473 15.3536 14.8536C15.4473 14.7598 15.5 14.6326 15.5 14.5C15.5 14.3674 15.4473 14.2402 15.3536 14.1464C15.2598 14.0527 15.1326 14 15 14H14C13.8674 14 13.7402 14.0527 13.6464 14.1464C13.5527 14.2402 13.5 14.3674 13.5 14.5C13.5 14.6326 13.5527 14.7598 13.6464 14.8536C13.7402 14.9473 13.8674 15 14 15\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2597
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-dropdown-cart",
  "use": "icon-dropdown-cart-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-dropdown-cart\">\r\n<path d=\"M10 22C10 22.8284 9.32843 23.5 8.5 23.5C7.67157 23.5 7 22.8284 7 22C7 21.1716 7.67157 20.5 8.5 20.5C9.32843 20.5 10 21.1716 10 22Z\" stroke=\"none\" />\r\n<path d=\"M20 22C20 22.8284 19.3284 23.5 18.5 23.5C17.6716 23.5 17 22.8284 17 22C17 21.1716 17.6716 20.5 18.5 20.5C19.3284 20.5 20 21.1716 20 22Z\" stroke=\"none\" />\r\n<path d=\"M5.25 4.5L8.93421 17L19.0479 15.0392C21.2005 14.6218 22.75 12.7896 22.75 10.6616V7.17857H6.03947\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2640
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-5corners",
  "use": "icon-5corners-usage",
  "viewBox": "0 0 80 16",
  "content": "<symbol viewBox=\"0 0 80 16\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-5corners\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.55361 13.2927L6.53124 13.2483L0 9.14286L2.3262 7.45631L4.24978 0L6.57597 1.68655L14.3374 1.19834L13.4427 3.90569L16.3057 11.0735H13.4204L13.398 11.0957L7.42593 16L6.55361 13.2927ZM6.55554 13.2251V13.2694L11.0737 11.0503L11.9237 11.0725H13.3999H13.4223L13.3328 10.4068L12.7065 6.12382L13.4446 3.92687H13.4223L13.3552 3.90468L8.47912 3.0614L6.5779 1.68553V1.70773L5.99635 2.77291L4.22934 6.10162L2.41759 7.41092L2.32812 7.47749L5.83978 11.0503L6.55554 13.2251Z\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M23.4375 13.3657V11.8275C24.1273 12.2712 24.817 12.4783 25.5068 12.4783C26.2279 12.4783 26.7923 12.3008 27.1998 11.9754C27.6388 11.65 27.8582 11.1767 27.8582 10.6146C27.8582 10.0526 27.6388 9.63844 27.1998 9.31304C26.7609 8.98765 26.1338 8.83974 25.3187 8.83974C25.0365 8.83974 24.5035 8.86932 23.751 8.92848V3.78129H29.1124V5.14204H25.256V7.59731C25.5695 7.56773 25.8517 7.56773 26.1338 7.56773C27.2312 7.56773 28.0777 7.83396 28.7048 8.36643C29.3005 8.8989 29.614 9.63844 29.614 10.5555C29.614 11.5317 29.2691 12.3008 28.5794 12.8924C27.8896 13.484 26.949 13.7799 25.7263 13.7799C24.723 13.7799 23.9705 13.632 23.4689 13.3657H23.4375ZM43.4406 3.78129L40.2113 10.585C39.6156 11.8275 39.0199 12.6558 38.4869 13.0995C37.9225 13.5432 37.3268 13.7799 36.6684 13.7799C36.1354 13.7799 35.6965 13.7207 35.3516 13.5728V12.005C35.7592 12.2416 36.1667 12.3599 36.5743 12.3599C36.9192 12.3599 37.2327 12.2416 37.5149 12.005C37.7971 11.7683 38.1106 11.3246 38.4555 10.7034L34.9753 3.81087H36.9506L39.0826 8.45518C39.1139 8.54392 39.208 8.78057 39.3334 9.16513C39.3334 9.10597 39.4274 8.86932 39.6156 8.45518L41.6535 3.81087H43.472L43.4406 3.78129ZM50.4323 5.23079H46.3878V13.632H44.6634V3.81087H50.4323V5.23079ZM59.117 13.632V3.81087H53.4422C53.1286 6.14782 52.8151 8.01145 52.5643 9.37221C52.2821 10.733 52.0313 11.5908 51.7805 11.9162C51.5296 12.2416 51.2475 12.3895 50.9653 12.3895C50.6831 12.3895 50.4323 12.3304 50.1815 12.212V13.6024C50.495 13.7207 50.8712 13.7503 51.2788 13.7503C51.7805 13.7503 52.2194 13.632 52.5643 13.3953C52.9092 13.1586 53.1913 12.8332 53.4108 12.3599C53.6303 11.8866 53.8184 11.1767 54.0379 10.2005C54.226 9.2243 54.5082 7.53815 54.8844 5.17162H57.424V13.5728H59.1484L59.117 13.632ZM66.0146 13.7503C64.5097 13.7503 63.3183 13.3066 62.4091 12.3599C61.4998 11.4429 61.0609 10.2597 61.0609 8.78057C61.0609 7.21275 61.5312 5.94074 62.4404 4.99413C63.3497 4.04752 64.6038 3.57422 66.1714 3.57422C67.645 3.57422 68.805 4.01794 69.7143 4.93497C70.5922 5.852 71.0625 7.03526 71.0625 8.51434C71.0625 10.1117 70.5922 11.3838 69.6829 12.3008C68.7737 13.2178 67.5509 13.7503 66.0146 13.7503ZM66.1087 4.99413C65.1681 4.99413 64.3843 5.31953 63.7886 5.99991C63.1929 6.68028 62.8794 7.56773 62.8794 8.66225C62.8794 9.75677 63.1615 10.6442 63.7572 11.295C64.3216 11.9754 65.1054 12.3008 66.046 12.3008C67.0493 12.3008 67.8331 11.9754 68.3975 11.3542C68.9618 10.733 69.2753 9.84551 69.2753 8.69183C69.2753 7.50857 68.9932 6.62112 68.4288 5.97033C67.8645 5.31953 67.112 5.02372 66.1087 5.02372V4.99413ZM72.975 13.5728V3.75171H76.267C77.2703 3.75171 78.0541 3.95878 78.6498 4.37292C79.2455 4.78706 79.5277 5.31953 79.5277 5.99991C79.5277 6.56196 79.3709 7.03526 79.0261 7.4494C78.6812 7.86355 78.2422 8.15936 77.6465 8.33685V8.36643C78.3677 8.45518 78.932 8.69183 79.371 9.10597C79.8099 9.52011 79.998 10.0822 79.998 10.7625C79.998 11.5908 79.6531 12.2712 78.9634 12.8037C78.2736 13.3361 77.3644 13.5728 76.2984 13.5728H72.975ZM74.6994 5.0533V7.83396H75.8281C76.4238 7.83396 76.8941 7.68606 77.239 7.41982C77.5838 7.15359 77.7406 6.76903 77.7406 6.29572C77.7406 5.46744 77.1449 5.02372 75.9535 5.02372H74.6994V5.0533ZM74.6994 9.13555V12.2416H76.173C76.8 12.2416 77.3017 12.0937 77.6779 11.8275C78.0228 11.5612 78.2109 11.1471 78.2109 10.6738C78.2109 9.66802 77.4584 9.13555 75.9848 9.13555H74.7307H74.6994Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2661
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-contacts-mail",
  "use": "icon-contacts-mail-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-contacts-mail\">\n<path d=\"M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M3 7L12 13L21 7\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2705
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 2820
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

function importAll(r) {
  const keys = r.keys();
  const firstFile = "./window/window.js";
  const filteredKeys = keys.filter((key) => key !== firstFile).sort();
  if (keys.includes(firstFile)) {
    r(firstFile);
  }
  filteredKeys.forEach(r);
}
importAll(__webpack_require__(147));


/***/ },

/***/ 2836
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-location",
  "use": "icon-location-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-location\">\r\n<path d=\"M21 7V7.01167\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M20.9987 15.1655L16.9154 9.33216C16.5223 8.6217 16.3214 7.82097 16.3325 7.00909C16.3436 6.1972 16.5663 5.40227 16.9787 4.70283C17.3911 4.00338 17.9788 3.42364 18.6838 3.02087C19.3888 2.6181 20.1867 2.40625 20.9987 2.40625C21.8107 2.40625 22.6086 2.6181 23.3136 3.02087C24.0186 3.42364 24.6063 4.00338 25.0187 4.70283C25.4311 5.40227 25.6538 6.1972 25.6649 7.00909C25.676 7.82097 25.4751 8.6217 25.082 9.33216L20.9987 15.1655Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12.25 5.54297L10.5 4.66797L3.5 8.16797V23.3346L10.5 19.8346L17.5 23.3346L24.5 19.8346V17.5013\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M10.5 4.66797V19.8346\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M17.5 17.5V23.3333\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2961
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3037
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLoading: () => (/* binding */ addLoading),
/* harmony export */   removeLoading: () => (/* binding */ removeLoading)
/* harmony export */ });

const addLoading = (container) => {
  const template = '<div class="loading"><div class="loading__spin"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="#EEEFF0"/><path d="M22.8949 13.9986C22.6536 12.262 21.848 10.6529 20.6022 9.41917C19.3563 8.18546 17.7394 7.39558 16.0005 7.1712C14.2616 6.94683 12.4972 7.30041 10.979 8.17748C9.46084 9.05455 8.27315 10.4064 7.59889 12.0249M7.10547 8.07757V12.0249H11.0528" stroke="#7F8899" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.10547 15.9727C7.34681 17.7093 8.15244 19.3184 9.39826 20.5521C10.6441 21.7858 12.261 22.5757 13.9999 22.8001C15.7388 23.0244 17.5032 22.6709 19.0214 21.7938C20.5396 20.9167 21.7273 19.5648 22.4015 17.9463M22.8949 21.8937V17.9463H18.9476" stroke="#7F8899" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>';
  const div = document.createElement("div");
  div.innerHTML = template;
  const block = container;
  if (block) {
    block.appendChild(div.firstChild);
    const button = block.querySelector('button[type="submit"]');
    if (button) {
      button.focus();
      button.blur();
    }
  }
};
const removeLoading = () => {
  document.querySelectorAll(".loading").forEach((el) => {
    el.remove();
  });
};



/***/ },

/***/ 3041
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popUp_popUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9417);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4489);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3670);




const header = document.querySelector("header");
const callUsModalInit = (func) => {
  const callUsStart = document.querySelector(".header__call-us");
  console.log("\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0430, \u0435\u0441\u043B\u0438 \u0432\u044B \u0432\u0438\u0434\u0438\u0442\u0435 \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 - \u043F\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u0435 common.js");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callUsModalInit);


/***/ },

/***/ 3091
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3228
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-canceled",
  "use": "icon-canceled-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-canceled\">\r\n<path d=\"M5.83333 4.66797H10.5L14 8.16797H22.1667C22.7855 8.16797 23.379 8.4138 23.8166 8.85139C24.2542 9.28897 24.5 9.88246 24.5 10.5013V19.8346C24.5 20.4535 24.2542 21.047 23.8166 21.4845C23.379 21.9221 22.7855 22.168 22.1667 22.168H5.83333C5.21449 22.168 4.621 21.9221 4.18342 21.4845C3.74583 21.047 3.5 20.4535 3.5 19.8346V7.0013C3.5 6.38246 3.74583 5.78897 4.18342 5.35139C4.621 4.9138 5.21449 4.66797 5.83333 4.66797\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12 13L16 17\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" />\r\n<path d=\"M16 13L12 17\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3306
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-contacts-vk",
  "use": "icon-contacts-vk-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-contacts-vk\">\n<g clip-path=\"url(#icon-contacts-vk_clip0_7236_142862)\">\n<path d=\"M12.8038 18C6.65393 18 3.14616 13.8709 3 7H6.08056C6.18175 12.043 8.45278 14.1792 10.2517 14.6196V7H13.1524V11.3493C14.9288 11.1621 16.7949 9.18018 17.4245 7H20.3253C19.8419 9.68669 17.8181 11.6687 16.379 12.4835C17.8181 13.1441 20.123 14.8729 21 18H17.8069C17.1211 15.9079 15.4123 14.2893 13.1524 14.0691L13.1524 18H12.8038Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</g>\n<defs>\n<clipPath id=\"icon-contacts-vk_clip0_7236_142862\">\n<rect width=\"24\" height=\"24\" fill=\"white\" />\n</clipPath>\n</defs>\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3357
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);


const header = document.querySelector("header");
if (header) {
  const search = header.querySelector(".header__search");
  const searchOpenButton = header.querySelector(".header__action--search");
  const searchCloseButton = header.querySelector(".header-search__close");
  const searchOverlay = header.querySelector(".header-search__overlay");
  const searchInput = search.querySelector(".header-search__input");
  const searchClear = search.querySelector(".header-search__clear");
  const wrapper = document.querySelector(".header-search__wrapper");
  if (searchOpenButton) {
    searchOpenButton.addEventListener("click", () => {
      search.classList.add("header__search--active");
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingOnBody */ .rP)();
      setTimeout(() => {
        searchInput.focus();
      }, 100);
      setTimeout(() => {
        header.classList.remove("header--dropdown");
      }, 300);
    });
  }
  if (searchCloseButton) {
    searchCloseButton.addEventListener("click", () => {
      search.classList.remove("header__search--active");
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
      searchInput.value = "";
      searchClear.classList.remove("header-search__clear--active");
    });
  }
  if (searchOverlay) {
    searchOverlay.addEventListener("click", () => {
      search.classList.remove("header__search--active");
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
      searchInput.value = "";
      searchClear.classList.remove("header-search__clear--active");
    });
  }
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      if (searchInput.value !== "") {
        searchClear.classList.add("header-search__clear--active");
      } else {
        searchClear.classList.remove("header-search__clear--active");
      }
    });
  }
  if (searchClear) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      searchClear.classList.remove("header-search__clear--active");
    });
  }
  if (wrapper) {
    wrapper.style.paddingRight = `${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getScrollbarWidth */ .XJ)()}px`;
    document.addEventListener("resize", () => {
      wrapper.style.paddingRight = `${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getScrollbarWidth */ .XJ)()}px`;
    });
  }
}


/***/ },

/***/ 3519
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3569
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3609
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

window.addEventListener("load", () => {
  const activeAccordions = document.querySelectorAll(".profile-accordion--active");
  if (activeAccordions) {
    activeAccordions.forEach((accordion) => {
      const inner = accordion.querySelector(".profile-accordion__inner");
      inner.style.maxHeight = `${inner.scrollHeight}px`;
    });
  }
});
const profileCardInit = () => {
  const accordions = document.querySelectorAll(".profile-accordion:not(.profile-accordion--js)");
  accordions.forEach((accordion) => {
    if (!accordion.classList.contains("item-card--js")) {
      accordion.classList.add("profile-accordion--js");
      const button = accordion.querySelector(".profile-accordion__header");
      const inner = accordion.querySelector(".profile-accordion__inner");
      if (button) {
        button.addEventListener("click", () => {
          accordion.classList.toggle("profile-accordion--active");
          if (accordion.classList.contains("profile-accordion--active")) {
            inner.style.maxHeight = `${inner.scrollHeight}px`;
          } else {
            inner.style.maxHeight = "";
          }
        });
      }
      const profileCard = accordion;
      const cancelButton = profileCard.querySelector(".profile-accordion__cancel");
      if (cancelButton) {
        cancelButton.addEventListener("click", (evt) => {
          evt.preventDefault();
          const { id } = cancelButton.dataset;
          const text = `\u041E\u0442\u043C\u0435\u043D\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 \u2116${id}.`;
          document.querySelector("#modal--cancel").content.querySelector(".modal__title").textContent = text;
          window.Corners5ProjectLayout.summonPopUp("#modal--cancel", true);
          window.Corners5ProjectLayout.setTextareaAutoHeight(".modal--cancel textarea");
        });
      }
    }
  });
};
profileCardInit();


/***/ },

/***/ 3670
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $W: () => (/* binding */ createFormData),
/* harmony export */   Ai: () => (/* binding */ getFormState),
/* harmony export */   Bs: () => (/* binding */ setTextareaAutoHeight),
/* harmony export */   Lx: () => (/* binding */ setStatus),
/* harmony export */   Qs: () => (/* binding */ activateRequestButtons),
/* harmony export */   XJ: () => (/* binding */ getScrollbarWidth),
/* harmony export */   iW: () => (/* binding */ getPaddingFromBody),
/* harmony export */   rP: () => (/* binding */ getPaddingOnBody),
/* harmony export */   sg: () => (/* binding */ debounce)
/* harmony export */ });
/* unused harmony exports TOKEN, PHONE_REG_EXP */
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1660);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_popUp_popUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9417);
/* harmony import */ var _components_validator_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4489);





const PHONE_REG_EXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;
const TOKEN = "5e287fb1cee7358cb4f771eba5b1ea444a1a3535";
const passwordMask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())({
  regex: "[^\\s]*",
  autoUnmask: true,
  showMaskOnHover: false,
  showMaskOnFocus: false,
  placeholder: ""
});
const initPasswordMask = () => {
  const inputs = document.querySelectorAll('input[type="password"]');
  if (inputs.length > 0) {
    inputs.forEach((input) => {
      passwordMask.mask(input);
    });
  }
};
initPasswordMask();
const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
let checker = false;
const getPaddingOnBody = () => {
  if (!checker) {
    const body = document.querySelector("body");
    const header = document.querySelector(".header__fixed");
    const dropdown = document.querySelector(".header__dropdown");
    const promoFixed = document.querySelector(".promo__fixed");
    const Modal = document.querySelector(".Modal");
    const popUps = document.querySelectorAll(".popUp");
    const alertWrapper = document.querySelector(".alert-wrapper");
    const filter = document.querySelector(".catalog__filter-main");
    body.style.paddingRight = `${getScrollbarWidth()}px`;
    if (header) {
      header.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (dropdown) {
      dropdown.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (promoFixed) {
      promoFixed.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (Modal) {
      Modal.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (alertWrapper) {
      alertWrapper.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (filter) {
      filter.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (popUps.length > 0) {
      popUps.forEach((popUp) => {
        popUp.style.paddingRight = `${getScrollbarWidth()}px`;
      });
    }
    body.classList.add("static");
    checker = true;
  }
};
const getPaddingFromBody = () => {
  if (checker) {
    const body = document.querySelector("body");
    const header = document.querySelector(".header__fixed");
    const dropdown = document.querySelector(".header__dropdown");
    const promoFixed = document.querySelector(".promo__fixed");
    const Modal = document.querySelector(".Modal");
    const popUps = document.querySelectorAll(".popUp");
    const alertWrapper = document.querySelector(".alert-wrapper");
    const filter = document.querySelector(".catalog__filter-main");
    body.style.paddingRight = "";
    if (header) {
      header.style.paddingRight = "";
    }
    if (dropdown) {
      dropdown.style.paddingRight = "";
    }
    if (promoFixed) {
      promoFixed.style.paddingRight = "";
    }
    if (Modal) {
      Modal.style.paddingRight = "";
    }
    if (alertWrapper) {
      alertWrapper.style.paddingRight = "";
    }
    if (filter) {
      filter.style.paddingRight = "";
    }
    if (popUps.length > 0) {
      popUps.forEach((popUp) => {
        popUp.style.paddingRight = "";
      });
    }
    body.classList.remove("static");
    checker = false;
  }
};
const isObject = (object) => {
  const type = typeof object;
  return type === "function" || type === "object";
};
const createFormData = (values) => {
  const data = new FormData();
  for (const key in values) {
    if (isObject(values[key])) {
      values[key].forEach((file, index) => {
        data.append(`${key}-${index}`, file);
      });
    } else {
      data.append(key, values[key]);
    }
  }
  return data;
};
function OnInput() {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
}
const setTextareaAutoHeight = (area) => {
  const textareas = document.querySelectorAll(`${area}`);
  textareas.forEach((element) => {
    element.setAttribute("style", `height:${element.scrollHeight}px; overflow-y: hidden;`);
    element.addEventListener("input", OnInput);
  });
};
const debounce = (cb) => {
  const DEBOUNCE_INTERVAL = 300;
  let lastTimeout = null;
  return () => {
    const parameters = arguments;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(() => {
      cb.apply(null, parameters);
    }, DEBOUNCE_INTERVAL);
  };
};
const setStatus = (status) => {
  switch (status) {
    case "success":
      return "alert--green";
    case "exclam":
      return "alert--grey";
    case "error":
      return "alert--red";
    default:
      return "";
  }
};
const activateRequestButtons = (func) => {
  const buttons = document.querySelectorAll(".button-request:not(.button-request--js)");
  buttons.forEach((button) => {
    if (!button.classList.contains("button-request--js")) {
      button.classList.add("button-request--js");
      button.addEventListener("click", (evt) => {
        evt.preventDefault();
        const { type } = button.dataset;
        const info = button.dataset;
        if (!document.querySelector(`#modal--${type}`)) {
          console.log("\u0422\u0430\u043A\u043E\u0433\u043E \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.");
          return;
        }
        if (type) {
          (0,_components_popUp_popUp__WEBPACK_IMPORTED_MODULE_1__.summonPopUp)(`#modal--${type}`, true);
          const modal = document.querySelector(`.modal--${type}`);
          const form = modal.querySelector("form");
          if (form) {
            for (const key in info) {
              if (Object.prototype.hasOwnProperty.call(info, key)) {
                form.insertAdjacentHTML("beforeend", `<input type="hidden" name=${key} value=${info[key]}>`);
              }
            }
            const validatedForm = (0,_components_validator_validator__WEBPACK_IMPORTED_MODULE_2__.validateForm)(`.modal--${type} form`);
            (0,_components_validator_validator__WEBPACK_IMPORTED_MODULE_2__.maskPhone)(`.modal--${type} form`);
            (0,_components_validator_validator__WEBPACK_IMPORTED_MODULE_2__.initPasswordEye)(`.modal--${type} form`);
            initPasswordMask();
            setTextareaAutoHeight(`.modal--${type} textarea`);
            const fetch = async () => {
              const answer = await func(form);
              if (answer) {
                if (answer.status === "success") {
                  validatedForm.destroy();
                  (0,_components_popUp_popUp__WEBPACK_IMPORTED_MODULE_1__.removePopUp)(`.modal--${type}`, true);
                }
              }
            };
            form.addEventListener("bouncerFormValid", debounce(() => {
              if (func) {
                fetch();
              }
            }));
            if (type === "call-us") {
              const linksContainers = modal.querySelectorAll(".call-us__block--links");
              const hidden = modal.querySelector(".call-us__hidden");
              const hiddenToggle = modal.querySelector(".call-us__request-toggle");
              hiddenToggle.addEventListener("click", () => {
                hidden.style.display = "block";
                linksContainers.forEach((el) => {
                  el.style.display = "none";
                  hiddenToggle.style.display = "none";
                });
              });
            }
          }
        }
      });
    }
  });
};
const getFormState = (form) => {
  const data = {};
  const fd = new FormData(form);
  for (const [name, value] of fd.entries()) {
    if (!data[name]) {
      data[name] = [];
    }
    data[name].push(value);
  }
  return data;
};
document.addEventListener("click", (evt) => {
  const button = evt.target.closest(".request-login");
  if (!button)
    return;
  evt.preventDefault();
  window.LoginProvider.setOpenPhone(true);
});
const patternInit = ({
  pattern,
  el
}) => {
  const patternMask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())(pattern, {
    autoUnmask: true,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: ""
  });
  patternMask.mask(el);
};
document.querySelectorAll("[data-pattern]").forEach((el) => {
  const pattern = document.querySelector("[data-pattern]").dataset.pattern;
  patternInit({
    pattern,
    el
  });
});
const blurHandler = (event) => {
  if (!event.target.form)
    return;
  const field = event.target;
  const cuttedSpacesValue = field.value.replace(/\s\s+/g, " ");
  const trimmedValue = cuttedSpacesValue.trim();
  field.value = trimmedValue;
};
document.addEventListener("blur", blurHandler, true);



/***/ },

/***/ 3709
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

window.addEventListener("load", () => {
  const activeAccordions = document.querySelectorAll(".offer-card--active");
  if (activeAccordions) {
    activeAccordions.forEach((accordion) => {
      const inner = accordion.querySelector(".offer-card__inner");
      inner.style.maxHeight = `${inner.scrollHeight}px`;
    });
  }
});


/***/ },

/***/ 3746
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-document",
  "use": "icon-document-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-document\">\r\n<path d=\"M23 5V11.6667C23 12.1087 23.1756 12.5326 23.4882 12.8452C23.8007 13.1577 24.2246 13.3333 24.6667 13.3333H31.3333\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M28 35H11.3333C10.4493 35 9.60143 34.6488 8.97631 34.0237C8.35119 33.3986 8 32.5507 8 31.6667V8.33333C8 7.44928 8.35119 6.60143 8.97631 5.97631C9.60143 5.35119 10.4493 5 11.3333 5H23L31.3333 13.3333V31.6667C31.3333 32.5507 30.9821 33.3986 30.357 34.0237C29.7319 34.6488 28.8841 35 28 35Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-clear",
  "use": "icon-clear-usage",
  "viewBox": "0 0 34 34",
  "content": "<symbol viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-clear\">\r\n<path d=\"M5.66797 9.91602H28.3346\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14.168 15.584V24.084\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 15.582V24.082\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.08203 9.91797L8.4987 26.918C8.4987 27.6694 8.79721 28.3901 9.32856 28.9214C9.85992 29.4528 10.5806 29.7513 11.332 29.7513H22.6654C23.4168 29.7513 24.1375 29.4528 24.6688 28.9214C25.2002 28.3901 25.4987 27.6694 25.4987 26.918L26.9154 9.91797\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12.75 9.91667V5.66667C12.75 5.29094 12.8993 4.93061 13.1649 4.66493C13.4306 4.39926 13.7909 4.25 14.1667 4.25H19.8333C20.2091 4.25 20.5694 4.39926 20.8351 4.66493C21.1007 4.93061 21.25 5.29094 21.25 5.66667V9.91667\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3789
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const offerDetails = document.querySelector(".offer-details");
if (offerDetails) {
  const printButtons = offerDetails.querySelectorAll(".offer-details__print");
  printButtons.forEach((printButton) => {
    printButton.addEventListener("click", () => {
      window.print();
    });
  });
}


/***/ },

/***/ 3792
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-delete",
  "use": "icon-delete-usage",
  "viewBox": "0 0 34 34",
  "content": "<symbol viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-delete\">\r\n<path d=\"M5.66797 9.91602H28.3346\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14.168 15.584V24.084\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 15.582V24.082\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.08203 9.91797L8.4987 26.918C8.4987 27.6694 8.79721 28.3901 9.32856 28.9214C9.85992 29.4528 10.5806 29.7513 11.332 29.7513H22.6654C23.4168 29.7513 24.1375 29.4528 24.6688 28.9214C25.2002 28.3901 25.4987 27.6694 25.4987 26.918L26.9154 9.91797\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12.75 9.91667V5.66667C12.75 5.29094 12.8993 4.93061 13.1649 4.66493C13.4306 4.39926 13.7909 4.25 14.1667 4.25H19.8333C20.2091 4.25 20.5694 4.39926 20.8351 4.66493C21.1007 4.93061 21.25 5.29094 21.25 5.66667V9.91667\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3834
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-whats",
  "use": "icon-whats-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-whats\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.6586 31.1278H20.6537C18.6633 31.1271 16.7075 30.6277 14.9705 29.6802L8.66602 31.334L10.3532 25.1714C9.31246 23.3678 8.76483 21.3219 8.76572 19.2259C8.76833 12.6687 14.1034 7.33398 20.6585 7.33398C23.8399 7.33536 26.8259 8.57387 29.0712 10.8218C31.3165 13.0697 32.5524 16.0576 32.5511 19.2352C32.5485 25.7909 27.2156 31.1251 20.6586 31.1278Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.2623 27.5263L15.6233 27.7406C17.1409 28.6412 18.8806 29.1177 20.6543 29.1184H20.6584C26.1065 29.1184 30.5407 24.684 30.5429 19.2337C30.5439 16.5924 29.5168 14.109 27.6505 12.2406C25.7843 10.3722 23.3024 9.34271 20.6622 9.3418C15.2099 9.3418 10.7756 13.7757 10.7734 19.2257C10.7727 21.0934 11.2953 22.9124 12.2847 24.4861L12.5198 24.8601L11.5212 28.5077L15.2623 27.5263Z\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.6496 22.0619C26.5754 21.9379 26.3773 21.8636 26.0801 21.7148C25.783 21.5661 24.322 20.8473 24.0496 20.748C23.7773 20.6489 23.5791 20.5993 23.381 20.8967C23.1829 21.1942 22.6135 21.8636 22.4401 22.0619C22.2668 22.2602 22.0934 22.2851 21.7964 22.1363C21.4992 21.9875 20.5417 21.6738 19.4067 20.6614C18.5233 19.8734 17.9269 18.9003 17.7536 18.6028C17.5802 18.3053 17.7351 18.1446 17.8839 17.9964C18.0175 17.8632 18.181 17.6492 18.3296 17.4758C18.4782 17.3023 18.5277 17.1783 18.6267 16.9801C18.7258 16.7817 18.6763 16.6082 18.602 16.4595C18.5277 16.3107 17.9334 14.848 17.6858 14.253C17.4446 13.6736 17.1996 13.7521 17.0172 13.7429C16.8441 13.7343 16.6458 13.7324 16.4477 13.7324C16.2496 13.7324 15.9276 13.8068 15.6553 14.1043C15.3829 14.4018 14.6152 15.1207 14.6152 16.5833C14.6152 18.0459 15.68 19.459 15.8286 19.6572C15.9772 19.8557 17.924 22.857 20.9049 24.1442C21.6139 24.4504 22.1673 24.6332 22.5989 24.7701C23.3108 24.9964 23.9586 24.9644 24.4705 24.8879C25.0415 24.8026 26.2287 24.1691 26.4764 23.475C26.7239 22.7808 26.7239 22.1858 26.6496 22.0619Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3937
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3999
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-vk--black",
  "use": "icon-vk--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-vk--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4777 25.5738C20.4777 25.5738 20.7905 25.5399 20.9507 25.3723C21.0974 25.2188 21.0923 24.929 21.0923 24.929C21.0923 24.929 21.0728 23.5759 21.7179 23.3761C22.3538 23.1796 23.1702 24.6846 24.0366 25.2633C24.6911 25.7009 25.1879 25.6051 25.1879 25.6051L27.5032 25.5738C27.5032 25.5738 28.7138 25.5011 28.1398 24.574C28.0924 24.498 27.805 23.8879 26.4189 22.6347C24.9666 21.3229 25.1616 21.5351 26.9097 19.2656C27.9745 17.8836 28.4001 17.0399 28.267 16.6791C28.1407 16.334 27.3573 16.4256 27.3573 16.4256L24.7513 16.4413C24.7513 16.4413 24.558 16.4157 24.4147 16.4991C24.2748 16.5808 24.1841 16.7716 24.1841 16.7716C24.1841 16.7716 23.7721 17.8407 23.2219 18.7504C22.0613 20.6691 21.5976 20.7706 21.4077 20.6517C20.966 20.3735 21.0762 19.5356 21.0762 18.9403C21.0762 17.0803 21.3661 16.3051 20.5124 16.1045C20.2293 16.0376 20.0207 15.9939 19.2959 15.9864C18.3659 15.9774 17.5791 15.9897 17.1332 16.2019C16.8365 16.3431 16.6076 16.6585 16.7475 16.6766C16.9195 16.6989 17.3095 16.779 17.5164 17.0531C17.7834 17.4072 17.7741 18.2014 17.7741 18.2014C17.7741 18.2014 17.9276 20.3908 17.4155 20.6625C17.0645 20.849 16.583 20.4684 15.5479 18.7273C15.018 17.8357 14.6178 16.85 14.6178 16.85C14.6178 16.85 14.5407 16.6659 14.4025 16.5668C14.2355 16.4471 14.0024 16.41 14.0024 16.41L11.526 16.4256C11.526 16.4256 11.1538 16.4355 11.0173 16.5932C10.8961 16.7328 11.008 17.0225 11.008 17.0225C11.008 17.0225 12.9469 21.4401 15.1426 23.6667C17.1561 25.7075 19.4417 25.5738 19.4417 25.5738H20.4777Z\" fill=\"white\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4009
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeAlert: () => (/* binding */ removeAlert),
/* harmony export */   summonAlert: () => (/* binding */ summonAlert)
/* harmony export */ });

const body = document.querySelector(".alert-wrapper");
const removeAlert = ({
  template
}) => {
  const templateContent = document.querySelector(`${template}`);
  templateContent.remove();
};
const summonAlert = (input) => {
  let template;
  let text;
  let className;
  if (typeof input === "string") {
    template = input;
  } else if (typeof input === "object" && input !== null) {
    template = input.template;
    text = input.text;
    className = input.className;
  } else {
    console.log("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F summonAlert. \u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u0441\u0442\u0440\u043E\u043A\u0430 (template) \u0438\u043B\u0438 \u043E\u0431\u044A\u0435\u043A\u0442 { template, text }.");
    return;
  }
  if (typeof template !== "string" || !template.startsWith("#")) {
    console.log('\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D. \u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u0441\u0442\u0440\u043E\u043A\u0430, \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u0441 "#", \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 "#alert--request".');
    return;
  }
  const alertName = template.slice(1);
  const alertTemplate = document.querySelector(`#${alertName}`);
  if (!alertTemplate) {
    console.log(`#${alertName} \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.`);
    return;
  }
  const oldAlert = document.querySelector(`.${alertName}`);
  if (oldAlert) {
    oldAlert.remove();
  }
  const templateContent = alertTemplate.content.cloneNode(true);
  const alert = templateContent.querySelector(`.${alertName}`);
  if (!alert) {
    console.log(`\u0412 \u0448\u0430\u0431\u043B\u043E\u043D\u0435 #${alertName} \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 .${alertName}`);
    return;
  }
  if (className) {
    if (typeof className === "string") {
      alert.classList.add(className);
    } else {
      console.log("className \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u043E\u0439 \u0438\u043B\u0438 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u043C \u0441\u0442\u0440\u043E\u043A");
    }
  }
  const close = alert.querySelector(".alert__close");
  const textContainer = alert.querySelector(".alert__container");
  if (text && textContainer) {
    textContainer.innerHTML = text;
  }
  const closeAlert = () => {
    alert.remove();
  };
  if (close) {
    close.addEventListener("click", closeAlert);
  }
  body.append(templateContent);
  alert.classList.add("alert--bounce");
  return alert;
};



/***/ },

/***/ 4073
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const breadcrumbs = document.querySelector(".breadcrumbs");
if (breadcrumbs) {
  breadcrumbs.querySelector(".breadcrumbs__list").scrollTo(3e3, 0);
}


/***/ },

/***/ 4078
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./icon-5corners.svg": 2640,
	"./icon-alert.svg": 4661,
	"./icon-book.svg": 5210,
	"./icon-building.svg": 7109,
	"./icon-button-card.svg": 1448,
	"./icon-cancel.svg": 9023,
	"./icon-canceled.svg": 3228,
	"./icon-cart.svg": 4255,
	"./icon-clear.svg": 3772,
	"./icon-clip.svg": 4447,
	"./icon-closer.svg": 8971,
	"./icon-compare.svg": 2238,
	"./icon-completed.svg": 5916,
	"./icon-contacts-mail.svg": 2661,
	"./icon-contacts-phone.svg": 9845,
	"./icon-contacts-telegram.svg": 234,
	"./icon-contacts-vk.svg": 3306,
	"./icon-contacts-whatsup.svg": 2539,
	"./icon-cross.svg": 5051,
	"./icon-delete.svg": 3792,
	"./icon-document-arrow.svg": 8806,
	"./icon-document.svg": 3746,
	"./icon-download.svg": 501,
	"./icon-dropdown-cart.svg": 2597,
	"./icon-dropdown-compare.svg": 7660,
	"./icon-dropdown-favorites.svg": 9518,
	"./icon-eye.svg": 4476,
	"./icon-fb--black.svg": 9240,
	"./icon-fb--white.svg": 8294,
	"./icon-fb.svg": 8965,
	"./icon-filter.svg": 6519,
	"./icon-geopin.svg": 4313,
	"./icon-head.svg": 5587,
	"./icon-header-cart.svg": 885,
	"./icon-header-phone.svg": 8229,
	"./icon-header-search.svg": 8443,
	"./icon-header-user.svg": 8470,
	"./icon-insta--black.svg": 8897,
	"./icon-insta--white.svg": 5415,
	"./icon-insta.svg": 1182,
	"./icon-like.svg": 4256,
	"./icon-liked.svg": 7532,
	"./icon-lk-cart.svg": 5813,
	"./icon-location.svg": 2836,
	"./icon-navgoogle.svg": 8489,
	"./icon-navshare.svg": 1877,
	"./icon-navyandex.svg": 6727,
	"./icon-orders.svg": 2046,
	"./icon-pencil.svg": 7774,
	"./icon-print.svg": 4190,
	"./icon-question.svg": 325,
	"./icon-repeat.svg": 5556,
	"./icon-row-view.svg": 751,
	"./icon-share.svg": 4598,
	"./icon-tele--black.svg": 7812,
	"./icon-telega.svg": 7157,
	"./icon-tile-view.svg": 4877,
	"./icon-trash.svg": 5341,
	"./icon-update.svg": 4206,
	"./icon-user-dropdown.svg": 7906,
	"./icon-user.svg": 976,
	"./icon-vk--black.svg": 3999,
	"./icon-vk--white.svg": 4501,
	"./icon-vk.svg": 9276,
	"./icon-whats.svg": 3834,
	"./icon-you--black.svg": 5041,
	"./icon-you--white.svg": 7991,
	"./icon-you.svg": 7214,
	"assets/icons/icon-5corners.svg": 2640,
	"assets/icons/icon-alert.svg": 4661,
	"assets/icons/icon-book.svg": 5210,
	"assets/icons/icon-building.svg": 7109,
	"assets/icons/icon-button-card.svg": 1448,
	"assets/icons/icon-cancel.svg": 9023,
	"assets/icons/icon-canceled.svg": 3228,
	"assets/icons/icon-cart.svg": 4255,
	"assets/icons/icon-clear.svg": 3772,
	"assets/icons/icon-clip.svg": 4447,
	"assets/icons/icon-closer.svg": 8971,
	"assets/icons/icon-compare.svg": 2238,
	"assets/icons/icon-completed.svg": 5916,
	"assets/icons/icon-contacts-mail.svg": 2661,
	"assets/icons/icon-contacts-phone.svg": 9845,
	"assets/icons/icon-contacts-telegram.svg": 234,
	"assets/icons/icon-contacts-vk.svg": 3306,
	"assets/icons/icon-contacts-whatsup.svg": 2539,
	"assets/icons/icon-cross.svg": 5051,
	"assets/icons/icon-delete.svg": 3792,
	"assets/icons/icon-document-arrow.svg": 8806,
	"assets/icons/icon-document.svg": 3746,
	"assets/icons/icon-download.svg": 501,
	"assets/icons/icon-dropdown-cart.svg": 2597,
	"assets/icons/icon-dropdown-compare.svg": 7660,
	"assets/icons/icon-dropdown-favorites.svg": 9518,
	"assets/icons/icon-eye.svg": 4476,
	"assets/icons/icon-fb--black.svg": 9240,
	"assets/icons/icon-fb--white.svg": 8294,
	"assets/icons/icon-fb.svg": 8965,
	"assets/icons/icon-filter.svg": 6519,
	"assets/icons/icon-geopin.svg": 4313,
	"assets/icons/icon-head.svg": 5587,
	"assets/icons/icon-header-cart.svg": 885,
	"assets/icons/icon-header-phone.svg": 8229,
	"assets/icons/icon-header-search.svg": 8443,
	"assets/icons/icon-header-user.svg": 8470,
	"assets/icons/icon-insta--black.svg": 8897,
	"assets/icons/icon-insta--white.svg": 5415,
	"assets/icons/icon-insta.svg": 1182,
	"assets/icons/icon-like.svg": 4256,
	"assets/icons/icon-liked.svg": 7532,
	"assets/icons/icon-lk-cart.svg": 5813,
	"assets/icons/icon-location.svg": 2836,
	"assets/icons/icon-navgoogle.svg": 8489,
	"assets/icons/icon-navshare.svg": 1877,
	"assets/icons/icon-navyandex.svg": 6727,
	"assets/icons/icon-orders.svg": 2046,
	"assets/icons/icon-pencil.svg": 7774,
	"assets/icons/icon-print.svg": 4190,
	"assets/icons/icon-question.svg": 325,
	"assets/icons/icon-repeat.svg": 5556,
	"assets/icons/icon-row-view.svg": 751,
	"assets/icons/icon-share.svg": 4598,
	"assets/icons/icon-tele--black.svg": 7812,
	"assets/icons/icon-telega.svg": 7157,
	"assets/icons/icon-tile-view.svg": 4877,
	"assets/icons/icon-trash.svg": 5341,
	"assets/icons/icon-update.svg": 4206,
	"assets/icons/icon-user-dropdown.svg": 7906,
	"assets/icons/icon-user.svg": 976,
	"assets/icons/icon-vk--black.svg": 3999,
	"assets/icons/icon-vk--white.svg": 4501,
	"assets/icons/icon-vk.svg": 9276,
	"assets/icons/icon-whats.svg": 3834,
	"assets/icons/icon-you--black.svg": 5041,
	"assets/icons/icon-you--white.svg": 7991,
	"assets/icons/icon-you.svg": 7214
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4078;

/***/ },

/***/ 4185
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4189
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4190
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-print",
  "use": "icon-print-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-print\">\n<path d=\"M19.8333 19.8333H22.1667C22.7855 19.8333 23.379 19.5875 23.8166 19.1499C24.2542 18.7123 24.5 18.1188 24.5 17.5V12.8333C24.5 12.2145 24.2542 11.621 23.8166 11.1834C23.379 10.7458 22.7855 10.5 22.1667 10.5H5.83333C5.21449 10.5 4.621 10.7458 4.18342 11.1834C3.74583 11.621 3.5 12.2145 3.5 12.8333V17.5C3.5 18.1188 3.74583 18.7123 4.18342 19.1499C4.621 19.5875 5.21449 19.8333 5.83333 19.8333H8.16667\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M19.8346 10.5V5.83333C19.8346 5.21449 19.5888 4.621 19.1512 4.18342C18.7136 3.74583 18.1201 3.5 17.5013 3.5H10.5013C9.88246 3.5 9.28897 3.74583 8.85139 4.18342C8.4138 4.621 8.16797 5.21449 8.16797 5.83333V10.5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M17.5013 15.168H10.5013C9.21264 15.168 8.16797 16.2126 8.16797 17.5013V22.168C8.16797 23.4566 9.21264 24.5013 10.5013 24.5013H17.5013C18.79 24.5013 19.8346 23.4566 19.8346 22.168V17.5013C19.8346 16.2126 18.79 15.168 17.5013 15.168Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4205
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);


const initFieldSelect = (func) => {
  const selects = document.querySelectorAll(".field__input--select");
  if (selects.length > 0) {
    selects.forEach((select) => {
      const field = select.closest(".field");
      const description = field.querySelector(".validator__description");
      const choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, {
        searchEnabled: "search" in select.dataset,
        shouldSort: false,
        classNames: {
          containerOuter: "choices field__choices",
          input: "field__input"
        },
        noResultsText: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
        noChoicesText: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E",
        itemSelectText: ""
      });
      const customSelect = field.querySelector(".choices__inner");
      select.addEventListener("hideDropdown", () => {
        document.querySelector(".field__choices").querySelectorAll(".is-highlighted").forEach((el) => {
          el.classList.remove("is-highlighted");
        });
      });
      select.addEventListener("addItem", (event) => {
        if (customSelect.classList.contains("validator__input--error")) {
          customSelect.classList.remove("validator__input--error");
          description.classList.remove("validator__description--error");
          description.classList.add("validator__description--valid");
        }
        if (func) {
          func(event);
        }
      });
      select.choicesInstance = choicesNolint;
    });
  }
};
initFieldSelect();


/***/ },

/***/ 4206
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-update",
  "use": "icon-update-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-update\">\n<path d=\"M4.05078 10.9993C4.30367 9.07007 5.251 7.29911 6.71546 6.01795C8.17992 4.7368 10.0611 4.03328 12.0068 4.0391C13.9526 4.04492 15.8295 4.75967 17.2863 6.04956C18.7431 7.33945 19.6798 9.11605 19.9212 11.0468C20.1625 12.9775 19.6919 14.93 18.5975 16.5388C17.503 18.1476 15.8598 19.3024 13.9753 19.787C12.0909 20.2716 10.0944 20.0528 8.35966 19.1715C6.6249 18.2903 5.27078 16.807 4.55078 14.9993M4.05078 19.9993V14.9993H9.05078\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4227
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4255
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-cart",
  "use": "icon-cart-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-cart\">\n<path d=\"M4.8705 14.255C4.8705 14.9481 4.30968 15.51 3.61787 15.51C2.92606 15.51 2.36523 14.9481 2.36523 14.255C2.36523 13.5619 2.92606 13 3.61787 13C4.30968 13 4.8705 13.5619 4.8705 14.255Z\" fill=\"#FAFAFA\" />\n<path d=\"M12.3861 14.255C12.3861 14.9481 11.8253 15.51 11.1335 15.51C10.4417 15.51 9.88086 14.9481 9.88086 14.255C9.88086 13.5619 10.4417 13 11.1335 13C11.8253 13 12.3861 13.5619 12.3861 14.255Z\" fill=\"#FAFAFA\" />\n<path d=\"M2.05078 2.05078L4.55604 10.5507L11.4334 9.21739C12.8971 8.93359 13.9508 7.6877 13.9508 6.24064V3.8722H2.58762\" stroke=\"#FAFAFA\" stroke-width=\"2.4\" stroke-linecap=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4256
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-like",
  "use": "icon-like-usage",
  "viewBox": "0 0 16 14",
  "content": "<symbol viewBox=\"0 0 16 14\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-like\">\n<path d=\"M8.00078 12.1004L7.44955 13.1663C7.79529 13.3451 8.20627 13.3451 8.55201 13.1663L8.00078 12.1004ZM8.00078 3.81962L6.93723 4.37536C7.14416 4.77137 7.55397 5.01962 8.00078 5.01962C8.4476 5.01962 8.85741 4.77137 9.06434 4.37536L8.00078 3.81962ZM12.7508 5.11337C12.7508 6.49119 11.6575 7.92501 10.2009 9.15686C9.51265 9.73891 8.8184 10.2126 8.29325 10.5417C8.03192 10.7054 7.81557 10.8315 7.66687 10.9154C7.5926 10.9573 7.53542 10.9885 7.4982 11.0086C7.47959 11.0186 7.466 11.0258 7.45776 11.0302C7.45365 11.0323 7.45088 11.0338 7.44949 11.0345C7.4488 11.0349 7.44846 11.0351 7.44846 11.0351C7.44847 11.035 7.44856 11.035 7.44874 11.0349C7.44883 11.0349 7.44903 11.0348 7.44908 11.0347C7.4493 11.0346 7.44955 11.0345 8.00078 12.1004C8.55201 13.1663 8.5523 13.1661 8.55262 13.166C8.55276 13.1659 8.55309 13.1657 8.55337 13.1656C8.55391 13.1653 8.55454 13.165 8.55527 13.1646C8.55672 13.1638 8.55853 13.1629 8.5607 13.1618C8.56503 13.1595 8.57079 13.1565 8.57794 13.1527C8.59222 13.1452 8.61203 13.1346 8.63701 13.1212C8.68694 13.0943 8.7576 13.0556 8.84602 13.0057C9.02271 12.906 9.2712 12.7611 9.56769 12.5753C10.1582 12.2053 10.9514 11.6653 11.7507 10.9894C13.2691 9.70522 15.1508 7.64553 15.1508 5.11337H12.7508ZM8.00078 12.1004C8.55201 11.0345 8.55226 11.0346 8.55249 11.0347C8.55253 11.0348 8.55274 11.0349 8.55283 11.0349C8.55301 11.035 8.5531 11.0351 8.5531 11.0351C8.55311 11.0351 8.55277 11.0349 8.55207 11.0345C8.55069 11.0338 8.54792 11.0323 8.5438 11.0302C8.53557 11.0258 8.52197 11.0186 8.50337 11.0086C8.46615 10.9885 8.40897 10.9573 8.33469 10.9154C8.186 10.8315 7.96964 10.7054 7.70832 10.5417C7.18317 10.2126 6.48891 9.73891 5.80068 9.15686C4.3441 7.92499 3.25078 6.49117 3.25078 5.11335H0.850781C0.850781 7.64551 2.73246 9.70521 4.25088 10.9894C5.05015 11.6653 5.8434 12.2053 6.43387 12.5753C6.73036 12.7611 6.97885 12.906 7.15554 13.0057C7.24396 13.0556 7.31462 13.0943 7.36455 13.1212C7.38953 13.1346 7.40934 13.1452 7.42362 13.1527C7.43077 13.1565 7.43653 13.1595 7.44087 13.1618C7.44303 13.1629 7.44484 13.1638 7.44629 13.1646C7.44702 13.165 7.44765 13.1653 7.44819 13.1656C7.44847 13.1657 7.44881 13.1659 7.44894 13.166C7.44926 13.1661 7.44955 13.1663 8.00078 12.1004ZM3.25078 5.11335C3.25078 4.36983 3.45902 3.90899 3.69104 3.63213C3.92554 3.35229 4.25339 3.17693 4.64177 3.12008C5.44523 3.00247 6.43285 3.41011 6.93723 4.37536L9.06434 3.26387C8.08122 1.38243 6.09384 0.481949 4.29416 0.745387C3.38098 0.879059 2.50024 1.31652 1.85154 2.09061C1.20036 2.86768 0.850781 3.90189 0.850781 5.11335H3.25078ZM9.06434 4.37536C9.56872 3.41011 10.5563 3.00247 11.3598 3.12009C11.7482 3.17694 12.076 3.3523 12.3105 3.63214C12.5425 3.90901 12.7508 4.36984 12.7508 5.11337H15.1508C15.1508 3.90191 14.8012 2.86769 14.15 2.09063C13.5013 1.31653 12.6206 0.879068 11.7074 0.745394C9.90773 0.481951 7.92035 1.38243 6.93723 3.26387L9.06434 4.37536Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4281
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4489);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3670);
/* harmony import */ var _alert_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4009);
/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3037);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9838);






const personalDataFormInit = (func) => {
  const forms = document.querySelectorAll(".personal-data__form");
  if (forms.length > 0) {
    (0,_validator_validator__WEBPACK_IMPORTED_MODULE_0__.validateForm)(".personal-data__form");
    (0,_validator_validator__WEBPACK_IMPORTED_MODULE_0__.maskPhone)('.personal-data__form input[type="tel"]');
    forms.forEach((form) => {
      const fieldWrapper = form.querySelector(".personal-data__field-wrapper");
      if (fieldWrapper) {
        const actions = fieldWrapper.querySelector(".personal-data__field-action");
        const input = fieldWrapper.querySelector("input");
        if (!input || !actions)
          return;
        const change = actions.querySelector(".personal-data__change");
        const cancel = actions.querySelector(".personal-data__cancel");
        let value = input.value;
        if (change) {
          change.addEventListener("click", () => {
            value = input.value;
            input.removeAttribute("readonly");
          });
        }
        form.addEventListener("bouncerFormValid", (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .debounce */ .sg)(() => {
          if (value === input.value) {
            input.setAttribute("readonly", "readonly");
          } else {
            const result = func == null ? void 0 : func(form);
            if (result == null ? void 0 : result.then) {
              (0,_loading_loading__WEBPACK_IMPORTED_MODULE_3__.addLoading)(form);
              result.done((data) => {
                value = input.value;
                input.setAttribute("readonly", "readonly");
              }).fail(() => {
              }).always(() => {
                (0,_loading_loading__WEBPACK_IMPORTED_MODULE_3__.removeLoading)(form);
              });
            }
          }
        }));
        if (cancel) {
          cancel.addEventListener("click", () => {
            input.value = value;
            input.focus();
            input.blur();
            input.setAttribute("readonly", "readonly");
          });
        }
      }
    });
  }
};
personalDataFormInit((form) => {
  const fd = new FormData(form);
  let alertTemplate = "#alert--request";
  let payload = {};
  switch (form.id) {
    case "perosnal-name":
      payload = { name: fd.get("name") };
      alertTemplate = "#alert--fio";
      break;
    case "perosnal-phone":
      payload = { phone: fd.get("phone") };
      alertTemplate = "#alert--mobileSuccess";
      break;
    case "perosnal-email":
      payload = { email: fd.get("email") };
      alertTemplate = "#alert--confirm-email";
      break;
    default:
      return;
  }
  return $.ajax({
    type: "PUT",
    data: fd,
    url: `${window.routes5.profile.requests.updateProfile[`url${_env__WEBPACK_IMPORTED_MODULE_4__/* .ENV */ .K}`]}`,
    contentType: false,
    processData: false,
    cache: false,
    dataType: "json",
    success(data) {
      const alert = (0,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.summonAlert)({
        template: alertTemplate,
        text: data.text,
        className: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .setStatus */ .Lx)(data.status)
      });
      const link = alert.querySelector(".alert__link");
      if (link) {
        const email = fd.get("email");
        link.textContent = email;
      }
      return data;
    },
    error(data) {
      (0,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.summonAlert)({
        template: "#alert--error",
        text: data.text
      });
    },
    complete(data) {
    }
  });
});


/***/ },

/***/ 4313
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-geopin",
  "use": "icon-geopin-usage",
  "viewBox": "0 0 25 35",
  "content": "<symbol viewBox=\"0 0 25 35\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-geopin\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.1254 34.4403C15.6557 32.1067 25 22.7919 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 22.7919 9.3443 32.1067 11.8746 34.4403C12.2342 34.7719 12.7658 34.7719 13.1254 34.4403ZM12.498 20C16.6402 20 19.998 16.6421 19.998 12.5C19.998 8.35786 16.6402 5 12.498 5C8.35591 5 4.99805 8.35786 4.99805 12.5C4.99805 16.6421 8.35591 20 12.498 20Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4337
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);


const activateCatalogAmountCard = (func) => {
  const cards = document.querySelectorAll(".catalog-amount-card:not(.catalog-amount-card--js)");
  cards.forEach((card) => {
    if (!card.classList.contains("catalog-amount-card--js")) {
      card.classList.add("catalog-amount-card--js");
      const deleteButton = card.querySelector(".catalog-amount-card__delete");
      if (deleteButton) {
        const { id } = deleteButton.dataset;
        deleteButton.addEventListener("click", (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .debounce */ .sg)(() => {
          if (func) {
            const answer = func({
              id,
              action: "delete"
            });
            if (answer.responseJSON.status === "success") {
              card.remove();
            }
          }
        }));
      }
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateCatalogAmountCard);


/***/ },

/***/ 4377
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);


const packagingSelectInit = (container, func) => {
  const select = container.querySelector(".packaging__select");
  let choicesNolint;
  if (select) {
    choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, {
      searchEnabled: false,
      itemSelectText: "",
      shouldSort: true,
      classNames: {
        containerOuter: "choices packaging__choices"
      }
    });
    select.addEventListener("addItem", (event) => {
      func(event);
    });
    const openEvent = new CustomEvent("dropdownOpened", {
      bubbles: true
    });
    const closeEvent = new CustomEvent("dropdownClosed", {
      bubbles: true
    });
    select.addEventListener("showDropdown", () => {
      select.dispatchEvent(openEvent);
    });
    select.addEventListener("hideDropdown", () => {
      select.dispatchEvent(closeEvent);
    });
  }
  return choicesNolint;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (packagingSelectInit);


/***/ },

/***/ 4385
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4447
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-clip",
  "use": "icon-clip-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-clip\">\r\n<path d=\"M11.6649 15.8108L15.6649 8.88255C16.7695 6.96938 16.114 4.52301 14.2008 3.41845V3.41845C12.2877 2.31388 9.84129 2.96938 8.73672 4.88255L4.53672 12.1572C3.76352 13.4964 4.22237 15.2088 5.56159 15.982V15.982C6.90081 16.7552 8.61326 16.2964 9.38646 14.9572L13.1865 8.37537C13.6283 7.6101 13.3661 6.63155 12.6008 6.18973V6.18973C11.8356 5.7479 10.857 6.0101 10.4152 6.77537L6.81518 13.0107\" stroke-width=\"1.5\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4473
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4476
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-eye",
  "use": "icon-eye-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-eye\">\r\n<path d=\"M14.0013 16.3346C15.29 16.3346 16.3346 15.29 16.3346 14.0013C16.3346 12.7126 15.29 11.668 14.0013 11.668C12.7126 11.668 11.668 12.7126 11.668 14.0013C11.668 15.29 12.7126 16.3346 14.0013 16.3346Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M25.6654 13.9987C22.5539 19.4435 18.6654 22.1654 13.9987 22.1654C9.33203 22.1654 5.44353 19.4435 2.33203 13.9987C5.44353 8.55386 9.33203 5.83203 13.9987 5.83203C18.6654 5.83203 22.5539 8.55386 25.6654 13.9987Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4489
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initFileLoadInput: () => (/* binding */ initFileLoadInput),
/* harmony export */   initPasswordEye: () => (/* binding */ initPasswordEye),
/* harmony export */   maskInternationalPhone: () => (/* binding */ maskInternationalPhone),
/* harmony export */   maskPhone: () => (/* binding */ maskPhone),
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1660);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4891);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formbouncerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_2__);





const validationMessages = {
  missingValue: {
    default: "\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F!",
    file: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u0444\u0430\u0439\u043B!",
    tel: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430!"
  },
  patternMismatch: {
    default: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u043D\u0435 \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u044F\u0435\u0442 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C!",
    email: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email."
  },
  wrongLength: {
    over: "\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430.",
    under: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430."
  },
  outOfRange: {
    over: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435.",
    under: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435."
  },
  text: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.",
  textarea: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.",
  number: "\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B.",
  ruPhone: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430.",
  intPhone: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E.",
  password: "\u041C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.",
  passwordMatch: "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442.",
  required: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0435.",
  fallback: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0435."
};
const getDescription = (field) => {
  if (!field || !field.parentElement)
    return null;
  return field.parentElement.querySelector(".validator__description");
};
const setState = (field, isValid) => {
  const description = getDescription(field);
  field.classList.toggle("validator__input--valid", isValid);
  field.classList.toggle("validator__input--error", !isValid);
  field.setAttribute("aria-invalid", String(!isValid));
  if (!description)
    return;
  description.classList.toggle("validator__description--valid", isValid);
  description.classList.toggle("validator__description--error", !isValid);
};
const validateByRegexp = (field, regexp, min = 0, max = 225) => {
  const value = field.value;
  const isValid = regexp.test(value) && value.length >= min && value.length <= max;
  setState(field, isValid);
  return !isValid;
};
const validateForm = (form) => {
  const formEl = document.querySelector(form);
  let validator = new (formbouncerjs__WEBPACK_IMPORTED_MODULE_1___default())(form, {
    fieldClass: "validator__input--error",
    errorClass: "validator__error",
    disableSubmit: true,
    emitEvents: true,
    customValidations: {
      // Проверка обязательного поля.
      required(field) {
        if (!field.classList.contains("validator__required"))
          return false;
        const isValid = Boolean(field.value);
        setState(field, isValid);
        return !isValid;
      },
      // Валидация текстового поля (ФИО, название и т.п.).
      text(field) {
        if (!field.classList.contains("validator__text"))
          return false;
        return validateByRegexp(
          field,
          /^([a-zA-ZА-Яа-яЁё.-]+\s?)*$/,
          2,
          225
        );
      },
      // Валидация textarea с расширенным набором символов.
      textarea(field) {
        if (!field.classList.contains("validator__textarea"))
          return false;
        return validateByRegexp(
          field,
          /^([a-zA-ZА-Яа-яЁё0-9\-!$%^&*()_+|~=`{}\[\]:;'",.@#№«»“”‘’…\/\\\s]*)$/,
          4,
          225
        );
      },
      // Проверка числового значения (без проверки диапазона).
      number(field) {
        if (!field.classList.contains("validator__number"))
          return false;
        const isValid = field.value.length >= 1 && field.value.length <= 225;
        setState(field, isValid);
        return !isValid;
      },
      // Проверка длины значения по minlength / maxlength.
      minmax(field) {
        if (!field.classList.contains("validator__minmax"))
          return false;
        const min = Number(field.getAttribute("minlength")) || 0;
        const max = Number(field.getAttribute("maxlength")) || 225;
        const isValid = field.value.length >= min && field.value.length <= max;
        setState(field, isValid);
        return !isValid;
      },
      // Валидация email.
      email(field) {
        if (!field.classList.contains("validator__mail"))
          return false;
        return validateByRegexp(
          field,
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        );
      },
      // Валидация российского телефона (10–11 цифр).
      ruPhone(field) {
        if (!field.classList.contains("validator__phone"))
          return false;
        const raw = field.inputmask ? field.inputmask.unmaskedvalue() : field.value.replace(/\D/g, "");
        const isValid = raw.length === 10 || raw.length === 11;
        setState(field, isValid);
        return !isValid;
      },
      // Валидация международного телефона по длине маски.
      intPhone(field) {
        var _a;
        if (!field.classList.contains("validator__country-phone"))
          return false;
        const maskLength = ((_a = field.getAttribute("data-mask")) == null ? void 0 : _a.length) || 0;
        const isValid = field.value.length === maskLength;
        setState(field, isValid);
        return !isValid;
      },
      // Базовая проверка пароля по длине.
      password(field) {
        if (!field.classList.contains("validator__password"))
          return false;
        const isValid = field.value.length >= 6 && field.value.length <= 225;
        setState(field, isValid);
        return !isValid;
      },
      // Проверка совпадения паролей.
      passwordMatch(field) {
        const selector = field.getAttribute("data-bouncer-match");
        if (!selector)
          return false;
        const other = field.form.querySelector(selector);
        if (!other)
          return false;
        const isValid = field.value === other.value;
        setState(field, isValid);
        return !isValid;
      },
      // Проверка стандартного select.
      select(field) {
        if (!field.classList.contains("validator__select"))
          return false;
        const isValid = field.options[field.selectedIndex].value !== "";
        field.parentElement.classList.toggle("validator__input--error", !isValid);
        return !isValid;
      },
      // Проверка кастомного select (Choices.js).
      choices(field) {
        var _a;
        if (!field.classList.contains("validator__choices"))
          return false;
        const isValid = field.hasAttribute("multiple") ? field.selectedIndex !== -1 : field.value !== "";
        const container = field.parentElement;
        const description = (_a = container.closest(".validator__field")) == null ? void 0 : _a.querySelector(".validator__description");
        container.classList.toggle("validator__input--error", !isValid);
        description == null ? void 0 : description.classList.toggle("validator__description--error", !isValid);
        description == null ? void 0 : description.classList.toggle("validator__description--valid", isValid);
        return !isValid;
      }
    },
    // Кастомные сообщения ошибок.
    messages: validationMessages
  });
  formEl.addEventListener("reset", () => {
    validator.destroy();
    validator = validateForm(form);
    formEl.querySelectorAll(
      ".validator__input--valid, .validator__input--error, .validator__description--valid, .validator__description--error"
    ).forEach(
      (el) => el.classList.remove(
        "validator__input--valid",
        "validator__input--error",
        "validator__description--valid",
        "validator__description--error"
      )
    );
  });
  return validator;
};
const maskPhone = (form) => {
  const mask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())("+7 [(999) 999-99-99]", {
    autoUnmask: true,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: ""
  });
  document.querySelector(form).querySelectorAll(".validator__phone").forEach((field) => mask.mask(field));
};
const maskInternationalPhone = (form) => {
  const hashContainer = document.querySelector(`${form}`);
  const countryPhone = hashContainer.querySelector(".validator__country-phone");
  const firstPhoneMask = hashContainer.querySelector(".validator__country-mask").getAttribute("data-mask");
  countryPhone.setAttribute("data-mask", firstPhoneMask.replace(/[^9]/g, ""));
  let phoneMask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())(firstPhoneMask, {
    autoUnmask: true
  });
  phoneMask.mask(countryPhone);
  const options = [];
  const optionsData = hashContainer.querySelectorAll(".validator__country-mask");
  optionsData.forEach((option, index) => {
    options.push({
      value: option.getAttribute("data-value"),
      label: option.getAttribute("data-country"),
      id: index + 1,
      customProperties: {
        mask: option.getAttribute("data-mask"),
        flag: option.getAttribute("data-flag")
      }
    });
  });
  const choicesSelect = hashContainer.querySelector(".validator__country-select");
  const choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_2___default())(choicesSelect, {
    searchEnabled: false,
    itemSelectText: "",
    shouldSort: false,
    choices: options,
    // searchEnabled: true,
    classNames: {
      containerOuter: "choices validator__countries"
    },
    callbackOnCreateTemplates(template) {
      return {
        item(classNames, data) {
          return template(`
            <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable} 
            ${data.placeholder ? classNames.placeholder : ""}" 
            data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ""} 
            ${data.disabled ? 'aria-disabled="true"' : ""}> 
            <p class='choices__flag' style='background-image: url(${options[data.choiceId - 1].customProperties.flag})'></p>
            ${data.label}
            </div>
          `);
        },
        choice(classNames, data) {
          return template(`
            <div class="${classNames.item} ${classNames.itemChoice} 
            ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}"
            data-select-text="${this.config.itemSelectText}" data-choice 
            ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable"} 
            data-id="${data.id}" data-value="${data.value}" 
            ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
            <p class='choices__flag' style='background-image: url(${options[data.id - 1].customProperties.flag})'></p>
            ${data.label}
            </div>
          `);
        }
      };
    }
  });
  choicesSelect.addEventListener("choice", (evt) => {
    countryPhone.setAttribute("data-mask", evt.detail.choice.customProperties.mask.replace(/[^9]/g, ""));
    countryPhone.inputmask.remove();
    countryPhone.value = "";
    countryPhone.focus();
    countryPhone.blur();
    phoneMask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())(evt.detail.choice.customProperties.mask, {
      autoUnmask: true
    });
    phoneMask.mask(countryPhone);
  });
};
const initPasswordEye = (formSelector) => {
  const form = document.querySelector(formSelector);
  if (!form)
    return;
  const eyes = form.querySelectorAll(".validator__eye");
  eyes.forEach((eye) => {
    const container = eye.parentElement;
    if (!container)
      return;
    const input = container.querySelector(".validator__password");
    if (!input)
      return;
    eye.addEventListener("click", () => {
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      eye.classList.toggle("validator__eye--open", isPassword);
    });
  });
};
const initFileLoadInput = (form, template) => {
  const FILE_TYPES = ["jpg", "jpeg", "gif", "png"];
  const filesForm = document.querySelector(`${form}`);
  const filesContainer = filesForm.querySelector(".validator__file-container");
  const loadInput = filesContainer.querySelector(".validator__file-input");
  const sizeWarning = filesContainer.querySelector(".validator__size-warning");
  const loadedFilesContainer = filesForm.querySelector(".validator__loaded-files");
  const cleaner = filesForm.querySelector(".validator__cleaner");
  const submitButton = filesForm.querySelector('button[type="submit"]');
  cleaner.style.display = "none";
  filesForm.addEventListener("reset", () => {
    filesContainer.innerHTML = "";
    filesContainer.innerHTML = template;
    loadedFilesContainer.innerHTML = "";
    initFileLoadInput(`${form}`, template);
  }, { once: true });
  cleaner.addEventListener("click", () => {
    filesContainer.innerHTML = "";
    filesContainer.innerHTML = template;
    loadedFilesContainer.innerHTML = "";
    initFileLoadInput(`${form}`, template);
    submitButton.classList.remove("validator__submit--disabled");
    submitButton.disabled = false;
  });
  loadInput.addEventListener("change", () => {
    const files = Object.values(loadInput.files);
    loadedFilesContainer.innerHTML = "";
    let totalSize = 0;
    files.forEach((file) => {
      totalSize += file.size;
    });
    if (totalSize > 0) {
      cleaner.style.display = "grid";
    } else {
      cleaner.style.display = "none";
    }
    for (let i = 0; i < files.length; i += 1) {
      const fileName = files[i].name.toLowerCase();
      if (!FILE_TYPES.some((type) => fileName.endsWith(type))) {
        submitButton.classList.add("validator__submit--disabled");
        submitButton.disabled = true;
        sizeWarning.classList.add("validator__size-warning--exeeded");
        sizeWarning.textContent = "\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0442\u0438\u043F \u0444\u0430\u0439\u043B\u043E\u0432!";
        return;
      }
    }
    if (totalSize < 10485760 && files.length <= 3) {
      sizeWarning.classList.remove("validator__size-warning--exeeded");
      sizeWarning.textContent = "\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 3-\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 .jpeg, .gif, .png. \u0420\u0430\u0437\u043C\u0435\u0440 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10 MB.";
      files.forEach((file) => {
        let str = file.size;
        str = str.toString();
        str = Math.ceil(str / 1024);
        const fileTemplate = `
          <div class="validator__file">
            <p class="validator__file-name">${file.name}</p>
            <p class='validator__size'>${str}&nbsp;\u041A\u0411</p>
          </div>
          `;
        loadedFilesContainer.insertAdjacentHTML("beforeend", fileTemplate);
      });
      submitButton.classList.remove("validator__submit--disabled");
      submitButton.disabled = false;
    } else if (totalSize > 10241440) {
      submitButton.classList.add("validator__submit--disabled");
      submitButton.disabled = true;
      sizeWarning.classList.add("validator__size-warning--exeeded");
      sizeWarning.textContent = "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u043E\u0432 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 10 \u041C\u0411!";
    } else if (files.length > 3) {
      submitButton.classList.add("validator__submit--disabled");
      submitButton.disabled = true;
      sizeWarning.classList.add("validator__size-warning--exeeded");
      sizeWarning.textContent = "\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D \u043B\u0438\u043C\u0438\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0444\u0430\u0439\u043B\u043E\u0432!";
    }
  });
};



/***/ },

/***/ 4501
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-vk--white",
  "use": "icon-vk--white-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-vk--white\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4796 25.5738C20.4796 25.5738 20.7924 25.5399 20.9527 25.3723C21.0993 25.2188 21.0942 24.929 21.0942 24.929C21.0942 24.929 21.0747 23.5759 21.7199 23.3761C22.3557 23.1796 23.1721 24.6846 24.0386 25.2633C24.693 25.7009 25.1898 25.6051 25.1898 25.6051L27.5051 25.5738C27.5051 25.5738 28.7157 25.5011 28.1418 24.574C28.0943 24.498 27.8069 23.8879 26.4208 22.6347C24.9686 21.3229 25.1636 21.5351 26.9117 19.2656C27.9765 17.8836 28.4021 17.0399 28.269 16.6791C28.1426 16.334 27.3593 16.4256 27.3593 16.4256L24.7532 16.4413C24.7532 16.4413 24.5599 16.4157 24.4167 16.4991C24.2768 16.5808 24.1861 16.7716 24.1861 16.7716C24.1861 16.7716 23.7741 17.8407 23.2239 18.7504C22.0633 20.6691 21.5995 20.7706 21.4096 20.6517C20.9679 20.3735 21.0781 19.5356 21.0781 18.9403C21.0781 17.0803 21.3681 16.3051 20.5144 16.1045C20.2312 16.0376 20.0227 15.9939 19.2978 15.9864C18.3678 15.9774 17.5811 15.9897 17.1351 16.2019C16.8384 16.3431 16.6095 16.6585 16.7494 16.6766C16.9215 16.6989 17.3115 16.779 17.5183 17.0531C17.7854 17.4072 17.7761 18.2014 17.7761 18.2014C17.7761 18.2014 17.9295 20.3908 17.4175 20.6625C17.0665 20.849 16.5849 20.4684 15.5498 18.7273C15.0199 17.8357 14.6198 16.85 14.6198 16.85C14.6198 16.85 14.5426 16.6659 14.4045 16.5668C14.2375 16.4471 14.0043 16.41 14.0043 16.41L11.528 16.4256C11.528 16.4256 11.1558 16.4355 11.0193 16.5932C10.8981 16.7328 11.01 17.0225 11.01 17.0225C11.01 17.0225 12.9488 21.4401 15.1446 23.6667C17.158 25.7075 19.4436 25.5738 19.4436 25.5738H20.4796Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4598
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-share",
  "use": "icon-share-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-share\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path d=\"M27.5911 12.4074C25.9801 10.7965 23.3684 10.7965 21.7574 12.4074L18.3098 15.855C16.6435 17.5214 16.7977 20.1766 18.3098 21.6887C18.563 21.9419 18.8432 22.1484 19.139 22.3179L19.7682 21.6887C20.1809 21.2759 20.0357 20.7934 20.0282 20.4452C19.9377 20.381 19.8496 20.3116 19.7682 20.2303C18.9923 19.4544 18.9574 18.1243 19.7682 17.3134C19.8886 17.193 23.1427 13.939 23.2158 13.8659C24.0201 13.0615 25.3283 13.0615 26.1326 13.8659C26.937 14.6702 26.937 15.9784 26.1326 16.7827L23.8538 19.0615C23.9197 19.4262 24.3152 20.2899 24.1117 21.7147C24.1217 21.7049 24.1336 21.6986 24.1435 21.6887L27.5911 18.2411C29.202 16.6302 29.202 14.0184 27.5911 12.4074Z\" fill=\"#212F4E\" />\n<path d=\"M21.9558 18.0433C21.7026 17.7901 21.4224 17.5836 21.1267 17.4141L20.4974 18.0433C20.0847 18.456 20.2299 18.9385 20.2374 19.2867C20.328 19.3509 20.4161 19.4203 20.4974 19.5017C21.2734 20.2776 21.3083 21.6077 20.4974 22.4185C20.3768 22.5392 16.8532 26.0628 16.7827 26.1333C15.9783 26.9376 14.6702 26.9376 13.8658 26.1333C13.0615 25.3289 13.0615 24.0208 13.8658 23.2165L16.4119 20.6704C16.346 20.3058 15.9505 19.4421 16.1539 18.0173C16.144 18.027 16.132 18.0334 16.1221 18.0433L12.4074 21.7581C10.7965 23.369 10.7965 25.9808 12.4074 27.5918C14.0183 29.2026 16.6301 29.2026 18.241 27.5918L21.9558 23.877C23.5912 22.2415 23.5019 19.5893 21.9558 18.0433Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4661
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-alert",
  "use": "icon-alert-usage",
  "viewBox": "0 0 15 15",
  "content": "<symbol viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-alert\">\r\n<circle cx=\"7.5\" cy=\"7.5\" r=\"7.5\" fill=\"#E45945\" />\r\n<path d=\"M8.18892 3.72656L8.07173 8.86151H6.92827L6.81463 3.72656H8.18892ZM7.5 11.0774C7.28456 11.0774 7.09991 11.0017 6.94602 10.8501C6.79451 10.6986 6.71875 10.514 6.71875 10.2962C6.71875 10.0831 6.79451 9.9008 6.94602 9.74929C7.09991 9.59777 7.28456 9.52202 7.5 9.52202C7.7107 9.52202 7.89299 9.59777 8.04688 9.74929C8.20312 9.9008 8.28125 10.0831 8.28125 10.2962C8.28125 10.4406 8.24455 10.572 8.17116 10.6903C8.10014 10.8087 8.00545 10.9034 7.88707 10.9744C7.77107 11.0431 7.64205 11.0774 7.5 11.0774Z\" fill=\"white\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4741
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4745
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4817
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);


const initProfileSelect = (func) => {
  const select = document.querySelector(".profile-center__select");
  let choicesNolint;
  if (select) {
    choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, {
      searchEnabled: false,
      itemSelectText: "",
      shouldSort: false,
      classNames: {
        containerOuter: "choices profile-center__choices"
      }
    });
    select.addEventListener("addItem", (event) => {
      if (func) {
        func(event);
      }
    });
  }
  return choicesNolint;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initProfileSelect);


/***/ },

/***/ 4877
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-tile-view",
  "use": "icon-tile-view-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-tile-view\">\r\n<rect x=\"10\" y=\"10\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<rect x=\"10\" y=\"22\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<rect x=\"22\" y=\"10\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<rect x=\"22\" y=\"22\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4961
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const selectCityInit = () => {
  const selectCity = document.querySelector(".select-city");
  if (selectCity) {
    const geolocationText = document.querySelector(".header__geolocation-text");
    const geolocationTextMobile = document.querySelector(".mobile-nav__geolocation-text");
    const list = selectCity.querySelector(".select-city__list");
    const items = list.children;
    const inputCity = selectCity.querySelector(".select-city__input");
    inputCity.addEventListener("input", () => {
      const value = inputCity.value.toLowerCase();
      for (let i = 0; i < items.length; i += 1) {
        const name = items[i].querySelector("span").textContent.toLowerCase();
        if (name.includes(value)) {
          items[i].classList.remove("select-city__item--hidden");
        } else {
          items[i].classList.add("select-city__item--hidden");
        }
      }
    });
    const changeCityEvent = new CustomEvent("changeCity", {
      bubbles: true,
      detail: { geolocationText }
    });
    for (let i = 0; i < items.length; i += 1) {
      items[i].addEventListener("click", (evt) => {
        evt.preventDefault();
        geolocationText.textContent = items[i].querySelector("span").textContent;
        geolocationTextMobile.textContent = items[i].querySelector("span").textContent;
        window.Corners5ProjectLayout.removePopUp(".modal--city", true);
        geolocationText.dispatchEvent(changeCityEvent);
      });
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectCityInit);


/***/ },

/***/ 5041
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-you--black",
  "use": "icon-you--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-you--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.7745 14.3737C27.5203 14.5794 28.1077 15.1853 28.307 15.9548C28.6693 17.3494 28.6693 20.2593 28.6693 20.2593C28.6693 20.2593 28.6693 23.169 28.307 24.5637C28.1077 25.3332 27.5203 25.9391 26.7745 26.1449C25.4229 26.5185 20.0026 26.5185 20.0026 26.5185C20.0026 26.5185 14.5823 26.5185 13.2306 26.1449C12.4848 25.9391 11.8974 25.3332 11.6981 24.5637C11.3359 23.169 11.3359 20.2593 11.3359 20.2593C11.3359 20.2593 11.3359 17.3494 11.6981 15.9548C11.8974 15.1853 12.4848 14.5794 13.2306 14.3737C14.5823 14 20.0026 14 20.0026 14C20.0026 14 25.4229 14 26.7745 14.3737ZM18.3766 17.8102V23.253L22.7099 20.5317L18.3766 17.8102Z\" fill=\"white\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5051
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-cross",
  "use": "icon-cross-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-cross\">\n<path d=\"M5 5L15.0005 15.0005\" stroke-width=\"2\" stroke-linecap=\"round\" />\n<path d=\"M5 15L15.0005 4.99953\" stroke-width=\"2\" stroke-linecap=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5057
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const up = document.querySelector(".up");
const scrollableHeight = 400;
let scrollPosition = 0;
if (up) {
  up.addEventListener("click", () => {
    window.scroll(0, 0);
  });
  window.addEventListener("scroll", () => {
    if (window.pageYOffset <= scrollPosition && window.pageYOffset >= scrollableHeight) {
      up.classList.add("up--visible");
      scrollPosition = window.pageYOffset;
    } else {
      up.classList.remove("up--visible");
      scrollPosition = window.pageYOffset;
    }
  });
}


/***/ },

/***/ 5073
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1708);



const sliderInit = (container) => {
  const slider = container;
  let sliderNolint;
  if (slider) {
    const swiper = slider.querySelector(".swiper");
    const buttonPrev = slider.querySelector(".slider__button--prev");
    const buttonNext = slider.querySelector(".slider__button--next");
    const scrollbar = slider.querySelector(".slider__scrollbar");
    sliderNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(swiper, {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .Vx, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Scrollbar */ .Ze],
      // Optional parameters
      slidesPerView: "auto",
      spaceBetween: 0,
      loop: false,
      // Navigation arrows
      navigation: {
        prevEl: buttonPrev,
        nextEl: buttonNext,
        disabledClass: "slider__button--disabled"
      },
      // Scrollbar
      scrollbar: {
        el: scrollbar,
        dragClass: "slider__scrollbar-drag",
        draggable: true
      },
      // Responsive breakpoints
      breakpoints: {}
    });
    swiper.swiperInstance = sliderNolint;
  }
  return sliderNolint;
};
const sliders = document.querySelectorAll(".slider");
sliders.forEach((el, index) => {
  sliderInit(el);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderInit);


/***/ },

/***/ 5097
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const accordions = document.querySelectorAll(".accordion");
if (accordions) {
  accordions.forEach((accordion) => {
    const header = document.querySelector("header");
    const accordionPosition = accordion.getBoundingClientRect();
    const accordionPositionY = accordionPosition.y;
    const button = accordion.querySelector(".accordion__header");
    const inner = accordion.querySelector(".accordion__inner");
    const getHeaderHeight = () => {
      if (header) {
        return header.offsetHeight;
      }
      return "0";
    };
    const scroll = accordionPositionY - getHeaderHeight();
    button.addEventListener("click", () => {
      if (accordion.classList.contains("accordion--active")) {
        accordion.classList.remove("accordion--active");
        inner.style.maxHeight = "";
      } else {
        document.querySelectorAll(".accordion--active").forEach((item) => {
          const activeAccordion = item;
          activeAccordion.classList.remove("accordion--active");
          item.querySelector(".accordion__inner").style.maxHeight = "";
        });
        accordion.classList.add("accordion--active");
        inner.style.maxHeight = `${inner.scrollHeight}px`;
        window.scrollTo(0, scroll);
      }
    });
  });
}
window.addEventListener("load", () => {
  const activeAccordions = document.querySelectorAll(".accordion--active");
  if (activeAccordions) {
    activeAccordions.forEach((accordion) => {
      const inner = accordion.querySelector(".accordion__inner");
      inner.style.maxHeight = `${inner.scrollHeight}px`;
    });
  }
});


/***/ },

/***/ 5137
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5141
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const storagesInfo = document.querySelector(".sidebar-nav");
if (storagesInfo) {
  const toggle = storagesInfo.querySelector(".sidebar-nav__header");
  document.addEventListener("click", (evt) => {
    if (window.innerWidth < 992) {
      if (evt.target === toggle) {
        storagesInfo.classList.toggle("sidebar-nav--active");
      } else {
        storagesInfo.classList.remove("sidebar-nav--active");
      }
    }
  });
}


/***/ },

/***/ 5169
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5210
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-book",
  "use": "icon-book-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-book\">\r\n<path d=\"M3.5 22.1665C5.0962 21.2449 6.90686 20.7598 8.75 20.7598C10.5931 20.7598 12.4038 21.2449 14 22.1665C15.5962 21.2449 17.4069 20.7598 19.25 20.7598C21.0931 20.7598 22.9038 21.2449 24.5 22.1665\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M3.5 7.00048C5.0962 6.07892 6.90686 5.59375 8.75 5.59375C10.5931 5.59375 12.4038 6.07892 14 7.00048C15.5962 6.07892 17.4069 5.59375 19.25 5.59375C21.0931 5.59375 22.9038 6.07892 24.5 7.00048\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M3.5 7V22.1667\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14 7V22.1667\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M24.5 7V22.1667\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5213
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5244
(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 5244;
module.exports = webpackEmptyContext;

/***/ },

/***/ 5265
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5273
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const shares = document.querySelectorAll(".share");
shares.forEach((share) => {
  const copyButton = share.querySelector(".share__link--copy");
  const message = share.querySelector(".share__message");
  const showMessage = () => {
    message.classList.add("share__message--active");
    setTimeout(() => {
      message.classList.remove("share__message--active");
    }, 3e3);
  };
  copyButton.onclick = () => {
    const link = window.location.href;
    const textarea = document.createElement("textarea");
    textarea.value = link;
    copyButton.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showMessage();
  };
});


/***/ },

/***/ 5279
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5313
(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 5313;
module.exports = webpackEmptyContext;

/***/ },

/***/ 5341
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-trash",
  "use": "icon-trash-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-trash\">\r\n<path d=\"M3.33594 5.83398H16.6693\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M8.33594 9.16602V14.166\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M11.668 9.16602V14.166\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M4.16797 5.83398L5.0013 15.834C5.0013 16.276 5.1769 16.6999 5.48946 17.0125C5.80202 17.3251 6.22594 17.5007 6.66797 17.5007H13.3346C13.7767 17.5007 14.2006 17.3251 14.5131 17.0125C14.8257 16.6999 15.0013 16.276 15.0013 15.834L15.8346 5.83398\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.5 5.83333V3.33333C7.5 3.11232 7.5878 2.90036 7.74408 2.74408C7.90036 2.5878 8.11232 2.5 8.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V5.83333\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5377
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var viewerjs_dist_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3891);
/* harmony import */ var viewerjs_dist_viewer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(viewerjs_dist_viewer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3670);



const gallery = document.querySelector(".gallery");
if (gallery) {
  const viewer = new (viewerjs_dist_viewer__WEBPACK_IMPORTED_MODULE_0___default())(gallery, {
    url: "data-original",
    className: "viewerjs__zoom",
    toolbar: {
      zoomIn: {
        show: true,
        size: "large"
      },
      zoomOut: {
        show: true,
        size: "large"
      },
      oneToOne: false,
      reset: false,
      prev: {
        show: true,
        size: "large"
      },
      play: false,
      next: {
        show: true,
        size: "large"
      },
      rotateLeft: {
        show: true,
        size: "large"
      },
      rotateRight: {
        show: true,
        size: "large"
      },
      flipHorizontal: false,
      flipVertical: false
    },
    navbar: false,
    // movable: false,
    keyboard: false,
    title() {
      return `(${this.index + 1}/${this.length})`;
    },
    // slideOnTouch: false,
    transition: false,
    show() {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPaddingOnBody */ .rP)();
    },
    hide() {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPaddingFromBody */ .iW)();
    }
  });
}


/***/ },

/***/ 5415
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-insta--white",
  "use": "icon-insta--white-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-insta--white\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.6014 9.39648C16.7392 9.3447 17.1028 9.33203 19.9997 9.33203H19.9964C22.8942 9.33203 23.2564 9.3447 24.3942 9.39648C25.5298 9.44848 26.3053 9.62826 26.9853 9.89204C27.6876 10.1643 28.2809 10.5287 28.8742 11.1221C29.4676 11.7149 29.832 12.3101 30.1054 13.0116C30.3676 13.6899 30.5476 14.465 30.6009 15.6005C30.652 16.7383 30.6654 17.1019 30.6654 19.9988C30.6654 22.8957 30.652 23.2584 30.6009 24.3962C30.5476 25.5313 30.3676 26.3067 30.1054 26.9851C29.832 27.6864 29.4676 28.2816 28.8742 28.8745C28.2816 29.4678 27.6873 29.8331 26.986 30.1056C26.3073 30.3694 25.5313 30.5491 24.3957 30.6011C23.258 30.6529 22.8955 30.6656 19.9984 30.6656C17.1017 30.6656 16.7383 30.6529 15.6005 30.6011C14.4652 30.5491 13.6899 30.3694 13.0112 30.1056C12.3101 29.8331 11.7149 29.4678 11.1223 28.8745C10.5292 28.2816 10.1647 27.6864 9.89204 26.9849C9.62848 26.3067 9.4487 25.5315 9.39648 24.396C9.34492 23.2582 9.33203 22.8957 9.33203 19.9988C9.33203 17.1019 9.34536 16.7381 9.39625 15.6003C9.44737 14.4652 9.62737 13.6899 9.89181 13.0114C10.1652 12.3101 10.5296 11.7149 11.1229 11.1221C11.7158 10.5289 12.311 10.1645 13.0125 9.89204C13.6907 9.62826 14.4659 9.44848 15.6014 9.39648ZM19.6468 11.2526C19.4311 11.2525 19.2313 11.2524 19.0454 11.2527V11.25C17.0574 11.2522 16.6761 11.2656 15.6921 11.31C14.6521 11.3578 14.0874 11.5311 13.7114 11.6778C13.2136 11.8716 12.8581 12.1027 12.4847 12.476C12.1114 12.8493 11.8798 13.2049 11.6865 13.7027C11.5405 14.0787 11.3667 14.6431 11.3191 15.6832C11.268 16.8076 11.2578 17.1436 11.2578 19.9921C11.2578 22.8406 11.268 23.1783 11.3191 24.3028C11.3665 25.3428 11.5405 25.9073 11.6865 26.2828C11.8803 26.7808 12.1114 27.1355 12.4847 27.5088C12.8581 27.8822 13.2136 28.1133 13.7114 28.3066C14.0876 28.4526 14.6521 28.6264 15.6921 28.6744C16.8165 28.7255 17.1541 28.7366 20.0023 28.7366C22.8504 28.7366 23.1882 28.7255 24.3126 28.6744C25.3526 28.6268 25.9175 28.4535 26.2931 28.3068C26.7911 28.1135 27.1455 27.8824 27.5189 27.5091C27.8922 27.1359 28.1238 26.7815 28.3171 26.2837C28.4631 25.9082 28.6369 25.3437 28.6844 24.3037C28.7355 23.1792 28.7467 22.8415 28.7467 19.9948C28.7467 17.1481 28.7355 16.8103 28.6844 15.6858C28.6371 14.6458 28.4631 14.0814 28.3171 13.7058C28.1233 13.208 27.8922 12.8525 27.5189 12.4791C27.1458 12.1058 26.7909 11.8747 26.2931 11.6813C25.9171 11.5353 25.3526 11.3616 24.3126 11.314C23.1879 11.2629 22.8504 11.2527 20.0023 11.2527C19.8793 11.2527 19.7608 11.2526 19.6468 11.2526Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25.696 13.0258C24.9894 13.0258 24.416 13.5985 24.416 14.3054C24.416 15.0121 24.9894 15.5854 25.696 15.5854C26.4027 15.5854 26.976 15.0121 26.976 14.3054C26.976 13.5987 26.4027 13.0254 25.696 13.0254V13.0258Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.5234 19.9993C14.5234 16.9742 16.9761 14.5215 20.0013 14.5215H20.0011C23.0262 14.5215 25.4782 16.9742 25.4782 19.9993C25.4782 23.0245 23.0264 25.476 20.0013 25.476C16.9761 25.476 14.5234 23.0245 14.5234 19.9993ZM23.5565 20.0009C23.5565 18.0371 21.9645 16.4453 20.0009 16.4453C18.0371 16.4453 16.4453 18.0371 16.4453 20.0009C16.4453 21.9645 18.0371 23.5565 20.0009 23.5565C21.9645 23.5565 23.5565 21.9645 23.5565 20.0009Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5556
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-repeat",
  "use": "icon-repeat-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-repeat\">\n<path d=\"M4.72656 12.8332C5.02159 10.5824 6.12682 8.51628 7.83535 7.02159C9.54389 5.52691 11.7386 4.70614 14.0086 4.71293C16.2787 4.71972 18.4684 5.5536 20.168 7.05847C21.8676 8.56334 22.9604 10.636 23.242 12.8886C23.5236 15.1411 22.9745 17.419 21.6977 19.2959C20.4209 21.1729 18.5037 22.5201 16.3052 23.0855C14.1067 23.6508 11.7775 23.3956 9.75358 22.3674C7.7297 21.3393 6.14989 19.6088 5.3099 17.4999M4.72656 23.3332V17.4999H10.5599\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5569
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5587
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-head",
  "use": "icon-head-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-head\">\r\n<path d=\"M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M10.5 11.668H10.5117\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M17.5 11.668H17.5117\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M11.082 17.5C11.4622 17.888 11.916 18.1963 12.4168 18.4067C12.9177 18.6172 13.4555 18.7256 13.9987 18.7256C14.5419 18.7256 15.0797 18.6172 15.5805 18.4067C16.0814 18.1963 16.5352 17.888 16.9154 17.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5745
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1660);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4489);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3670);
/* harmony import */ var _alert_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4009);
/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3037);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9838);







const initRequestForm = (func) => {
  const requestForm = document.querySelector(".request__form");
  if (!requestForm)
    return;
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_1__.validateForm)(".request__form");
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_1__.maskPhone)(".request__form");
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__/* .setTextareaAutoHeight */ .Bs)(".request__form textarea");
  const form = requestForm;
  let alertTemplate = "#alert--request";
  let url = `${window.routes5.form.requests.Feedback[`url${_env__WEBPACK_IMPORTED_MODULE_5__/* .ENV */ .K}`]}`;
  switch (form.id) {
    case "RequestContacts":
      url = `${window.routes5.form.requests.RequestContacts[`url${_env__WEBPACK_IMPORTED_MODULE_5__/* .ENV */ .K}`]}`;
      alertTemplate = "#alert--request";
      break;
    case "Subscribe":
      url = `${window.routes5.form.requests.Subscribe[`url${_env__WEBPACK_IMPORTED_MODULE_5__/* .ENV */ .K}`]}`;
      alertTemplate = "#alert--subscribe";
      break;
    case "RequestService":
      url = `${window.routes5.form.requests.RequestService[`url${_env__WEBPACK_IMPORTED_MODULE_5__/* .ENV */ .K}`]}`;
      alertTemplate = "#alert--request";
      break;
    case "RequestCooperation":
      url = `${window.routes5.form.requests.RequestCooperation[`url${_env__WEBPACK_IMPORTED_MODULE_5__/* .ENV */ .K}`]}`;
      alertTemplate = "#alert--request";
      break;
    case "RequestSearch":
      url = `${window.routes5.form.requests.RequestSearch[`url${_env__WEBPACK_IMPORTED_MODULE_5__/* .ENV */ .K}`]}`;
      alertTemplate = "#alert--request";
      break;
    default:
      break;
  }
  ;
  form.addEventListener("bouncerShowError", (event) => {
    const field = event.target;
  });
  form.addEventListener("bouncerFormValid", (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__/* .debounce */ .sg)(() => {
    (0,_loading_loading__WEBPACK_IMPORTED_MODULE_4__.addLoading)(form);
    const fd = new FormData(form);
    const fileInputs = form.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input) => {
      const name = input.name;
      const files = fd.getAll(name);
      files.forEach((file, index) => {
        fd.append(`${name}-${index}`, file);
        fd.delete(name);
      });
    });
    $.ajax({
      type: "POST",
      data: fd,
      url,
      contentType: false,
      processData: false,
      cache: false,
      dataType: "json",
      success(data) {
        (0,_alert_alert__WEBPACK_IMPORTED_MODULE_3__.summonAlert)({
          template: alertTemplate,
          text: data.text,
          className: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__/* .setStatus */ .Lx)(data.status)
        });
        form.reset();
        (0,_loading_loading__WEBPACK_IMPORTED_MODULE_4__.removeLoading)();
        return data;
      },
      error(data) {
        (0,_alert_alert__WEBPACK_IMPORTED_MODULE_3__.summonAlert)({
          template: "#alert--error",
          text: data.text
        });
        (0,_loading_loading__WEBPACK_IMPORTED_MODULE_4__.removeLoading)();
      },
      complete(data) {
      }
    });
  }));
};
initRequestForm();


/***/ },

/***/ 5801
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5813
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-lk-cart",
  "use": "icon-lk-cart-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-lk-cart\">\r\n<path d=\"M3.33398 5.83398H16.6673\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n<path d=\"M8.33398 9.16602V14.166\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n<path d=\"M11.666 9.16602V14.166\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n<path d=\"M4.16602 5.83398L4.99935 15.834C4.99935 16.276 5.17494 16.6999 5.4875 17.0125C5.80007 17.3251 6.22399 17.5007 6.66602 17.5007H13.3327C13.7747 17.5007 14.1986 17.3251 14.5112 17.0125C14.8238 16.6999 14.9994 16.276 14.9994 15.834L15.8327 5.83398\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n<path d=\"M7.5 5.83333V3.33333C7.5 3.11232 7.5878 2.90036 7.74408 2.74408C7.90036 2.5878 8.11232 2.5 8.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V5.83333\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5853
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5873
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5910
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

function importAll(r) {
  r.keys().forEach(r);
}
importAll(__webpack_require__(5244));
importAll(__webpack_require__(5313));


/***/ },

/***/ 5916
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-completed",
  "use": "icon-completed-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-completed\">\r\n<path d=\"M5.83333 4.66797H10.5L14 8.16797H22.1667C22.7855 8.16797 23.379 8.4138 23.8166 8.85139C24.2542 9.28897 24.5 9.88246 24.5 10.5013V19.8346C24.5 20.4535 24.2542 21.047 23.8166 21.4845C23.379 21.9221 22.7855 22.168 22.1667 22.168H5.83333C5.21449 22.168 4.621 21.9221 4.18342 21.4845C3.74583 21.047 3.5 20.4535 3.5 19.8346V7.0013C3.5 6.38246 3.74583 5.78897 4.18342 5.35139C4.621 4.9138 5.21449 4.66797 5.83333 4.66797\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M11 14.5L13 17L17 12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 6009
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 6153
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4947);
/* harmony import */ var tippy_js_animations_scale_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6730);
/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(814);
/* harmony import */ var tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5309);
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2820);
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_components_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _react_providers_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5910);
/* harmony import */ var _react_providers_providers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_react_providers_providers__WEBPACK_IMPORTED_MODULE_6__);
const import_meta = {};
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(__webpack_require__(4078));











let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});


if (false) // removed by dead control flow
{}
if (import_meta.webpackHot) {
  import_meta.webpackHot.accept();
}


/***/ },

/***/ 6387
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 6433
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);


const filterInit = () => {
  console.log("\u041D\u0435\u0430\u043A\u0442\u0443\u043B\u044C\u043D\u0430\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u044F, \u043D\u0430\u0434\u043E \u0443\u0434\u0430\u043B\u0438\u0442\u044C!");
};
filterInit();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterInit);


/***/ },

/***/ 6519
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-filter",
  "use": "icon-filter-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-filter\">\r\n<path d=\"M14 8C15.1046 8 16 7.10457 16 6C16 4.89543 15.1046 4 14 4C12.8954 4 12 4.89543 12 6C12 7.10457 12.8954 8 14 8Z\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M4 6H12\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M16 6H20\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M4 12H6\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M10 12H20\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M4 18H15\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19 18H20\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 6529
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 6577
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const zoom = document.querySelectorAll(".zoom");
zoom.forEach((picture) => {
  picture.addEventListener("mouseenter", () => {
    if (window.innerWidth > 991) {
      const largeUrl = picture.querySelector(".zoom__big").dataset.link;
      if (largeUrl) {
        const div = document.createElement("div");
        div.innerHTML = `<div class="zoom__container"><img src="${largeUrl}"/></div>`;
        picture.appendChild(div.firstChild);
      }
    }
  });
  picture.addEventListener("mouseleave", (evt) => {
    if (window.innerWidth > 991) {
      picture.querySelector(".zoom__container").remove();
      evt.preventDefault();
    }
  });
  picture.addEventListener("mousemove", (evt) => {
    if (window.innerWidth > 991) {
      const viewWidth = picture.offsetWidth;
      const viewHeight = picture.offsetHeight;
      const viewOffset = picture.getBoundingClientRect();
      const largeWidth = picture.querySelector(".zoom__container").offsetWidth;
      const largeHeight = picture.querySelector(".zoom__container").offsetHeight;
      const relativeXPosition = evt.pageX - viewOffset.x;
      const relativeYPosition = evt.pageY - viewOffset.y;
      const moveX = Math.floor(relativeXPosition * (viewWidth - largeWidth) / viewWidth);
      const moveY = Math.floor(relativeYPosition * (viewHeight - largeHeight) / viewHeight);
      picture.querySelector(".zoom__container").style.left = `${moveX}px`;
      picture.querySelector(".zoom__container").style.top = `${moveY}px`;
    }
  });
});


/***/ },

/***/ 6689
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4489);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3670);



const header = document.querySelector(".header");
if (header) {
  const hideHeaderOnMove = () => {
    let scrollPosition = 0;
    let hideChecker = 0;
    let showChecker = 0;
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= scrollPosition && window.pageYOffset >= header.offsetHeight) {
        showChecker = 0;
        hideChecker += window.pageYOffset - scrollPosition;
        scrollPosition = window.pageYOffset;
      } else {
        showChecker += scrollPosition - window.pageYOffset;
        hideChecker = 0;
        scrollPosition = window.pageYOffset;
      }
      if (showChecker >= 300) {
        header.classList.remove("header--hidden");
        hideChecker = 0;
      } else if (hideChecker >= 300) {
        header.classList.add("header--hidden");
      }
    });
  };
  hideHeaderOnMove();
  const burger = header.querySelector(".header__burger");
  const overlay = header.querySelector(".header__overlay");
  burger.addEventListener("click", () => {
    if (header.classList.contains("header--dropdown")) {
      header.classList.remove("header--dropdown");
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPaddingFromBody */ .iW)();
    } else {
      header.classList.add("header--dropdown");
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPaddingOnBody */ .rP)();
    }
  });
  overlay.addEventListener("click", () => {
    header.classList.remove("header--dropdown");
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPaddingFromBody */ .iW)();
  });
}
const search = document.querySelector(".header-search");
if (search) {
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_0__.validateForm)(".header-search__form");
}


/***/ },

/***/ 6727
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-navyandex",
  "use": "icon-navyandex-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-navyandex\">\n<path d=\"M24 0L0 9.7534L10.5023 13.5038L14.2526 24L24 0Z\" fill=\"url(#icon-navyandex_paint0_linear_5436_98532)\" />\n<path d=\"M23.9972 0L10.125 13.8782L14.2498 24L23.9972 0Z\" fill=\"#FFCC00\" />\n<path d=\"M9.7534 14.2522L14.2526 23.9995L12.7489 11.2507L0 9.75293L9.7534 14.2522Z\" fill=\"#ECA704\" />\n<defs>\n<linearGradient id=\"icon-navyandex_paint0_linear_5436_98532\" x1=\"9.79942e-05\" y1=\"23.9995\" x2=\"24.0011\" y2=\"-0.0014742\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#FFCC00\" />\n<stop offset=\"1\" stop-color=\"#FFE992\" />\n</linearGradient>\n</defs>\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 6743
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 6823
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 6919
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4489);
/* harmony import */ var _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9417);
/* harmony import */ var _video_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2305);
/* harmony import */ var _alert_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4009);
/* harmony import */ var _find_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8877);
/* harmony import */ var _profile_center_profile_center__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4817);
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1421);
/* harmony import */ var _promotion_alert_promotion_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8625);
/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3037);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3670);
/* harmony import */ var _select_city_select_city__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4961);
/* harmony import */ var _bx_soa_order_bx_soa_order__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7797);
/* harmony import */ var _call_us_call_us__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3041);
/* harmony import */ var _catalog_amount_card_catalog_amount_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4337);
/* harmony import */ var _item_card_item_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8697);
/* harmony import */ var _cart_card_cart_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1409);
/* harmony import */ var _modal_product_modal_product__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9705);
/* harmony import */ var _catalog_catalog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6433);


















window.Corners5ProjectLayout = {
  setTextareaAutoHeight: _utils_utils__WEBPACK_IMPORTED_MODULE_9__/* .setTextareaAutoHeight */ .Bs,
  summonPopUp: _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__.summonPopUp,
  removePopUp: _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__.removePopUp,
  findVideos: _video_video__WEBPACK_IMPORTED_MODULE_2__["default"],
  summonAlert: _alert_alert__WEBPACK_IMPORTED_MODULE_3__.summonAlert,
  removeAlert: _alert_alert__WEBPACK_IMPORTED_MODULE_3__.removeAlert,
  multiMapInit: _find_find__WEBPACK_IMPORTED_MODULE_4__["default"],
  initProfileSelect: _profile_center_profile_center__WEBPACK_IMPORTED_MODULE_5__["default"],
  initCitySelect: _modal_modal__WEBPACK_IMPORTED_MODULE_6__["default"],
  validation: {
    validateForm: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.validateForm,
    maskPhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.maskPhone,
    maskInternationalPhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.maskInternationalPhone,
    initPasswordEye: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initPasswordEye,
    initFileLoadInput: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initFileLoadInput
  },
  summonPromotionAlert: _promotion_alert_promotion_alert__WEBPACK_IMPORTED_MODULE_7__.summonPromotionAlert,
  removePromotionAlert: _promotion_alert_promotion_alert__WEBPACK_IMPORTED_MODULE_7__.removePromotionAlert,
  getPaddingOnBody: _utils_utils__WEBPACK_IMPORTED_MODULE_9__/* .getPaddingOnBody */ .rP,
  getPaddingFromBody: _utils_utils__WEBPACK_IMPORTED_MODULE_9__/* .getPaddingFromBody */ .iW,
  getScrollbarWidth: _utils_utils__WEBPACK_IMPORTED_MODULE_9__/* .getScrollbarWidth */ .XJ,
  createFormData: _utils_utils__WEBPACK_IMPORTED_MODULE_9__/* .createFormData */ .$W,
  addLoading: _loading_loading__WEBPACK_IMPORTED_MODULE_8__.addLoading,
  removeLoading: _loading_loading__WEBPACK_IMPORTED_MODULE_8__.removeLoading,
  selectCityInit: _select_city_select_city__WEBPACK_IMPORTED_MODULE_10__["default"],
  initBxSoaOrderSelect: _bx_soa_order_bx_soa_order__WEBPACK_IMPORTED_MODULE_11__["default"],
  callUsModalInit: _call_us_call_us__WEBPACK_IMPORTED_MODULE_12__["default"],
  activateCatalogAmountCard: _catalog_amount_card_catalog_amount_card__WEBPACK_IMPORTED_MODULE_13__["default"],
  activateItemCard: _item_card_item_card__WEBPACK_IMPORTED_MODULE_14__["default"],
  activateCartCard: _cart_card_cart_card__WEBPACK_IMPORTED_MODULE_15__["default"],
  activateModalProduct: _modal_product_modal_product__WEBPACK_IMPORTED_MODULE_16__["default"],
  // catalogAmountInit,
  filterInit: _catalog_catalog__WEBPACK_IMPORTED_MODULE_17__["default"],
  // viewToggleInit,
  setStatus: _utils_utils__WEBPACK_IMPORTED_MODULE_9__/* .setStatus */ .Lx,
  activateRequestButtons: _utils_utils__WEBPACK_IMPORTED_MODULE_9__/* .activateRequestButtons */ .Qs
};


/***/ },

/***/ 7025
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const header = document.querySelector(".header");
const dropdownUser = document.querySelector(".header-dropdown__user--profile");
if (dropdownUser) {
  dropdownUser.addEventListener("click", (evt) => {
    evt.preventDefault();
    window.LoginProvider.setOpenPhone(true);
    header.classList.remove("header--dropdown");
  });
}


/***/ },

/***/ 7109
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-building",
  "use": "icon-building-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-building\">\r\n<path d=\"M10.5 11.6667V4.66667C10.5 4.35725 10.6229 4.0605 10.8417 3.84171C11.0605 3.62292 11.3572 3.5 11.6667 3.5H23.3333C23.6428 3.5 23.9395 3.62292 24.1583 3.84171C24.3771 4.0605 24.5 4.35725 24.5 4.66667V24.5H15.1667M9.33333 10.5L15.1667 16.3333V24.5H9.33333V19.8333V10.5ZM9.33333 24.5H3.5V16.3333L9.33333 10.5V24.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M15.168 8.16797V8.17964\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 8.16797V8.17964\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 12.832V12.8437\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 17.5V17.5117\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7157
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-telega",
  "use": "icon-telega-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-telega\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.334 29.1672C16.834 29.1672 17.0549 28.9385 17.334 28.6672L20.0007 26.0742L16.6743 24.0684\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.6745 24.0676L24.7345 30.0224C25.6543 30.5299 26.3181 30.2672 26.5472 29.1685L29.828 13.708C30.1639 12.3613 29.3147 11.7505 28.4348 12.15L9.16977 19.5785C7.85475 20.1059 7.86242 20.8396 8.93007 21.1665L13.8739 22.7095L25.3194 15.4887C25.8597 15.161 26.3556 15.3372 25.9486 15.6984\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7169
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const storagesInfo = document.querySelector(".about-nav");
if (storagesInfo) {
  const toggle = storagesInfo.querySelector(".about-nav__header");
  document.addEventListener("click", (evt) => {
    if (window.innerWidth < 992) {
      if (evt.target === toggle) {
        storagesInfo.classList.toggle("about-nav--active");
      } else {
        storagesInfo.classList.remove("about-nav--active");
      }
    }
  });
}


/***/ },

/***/ 7214
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-you",
  "use": "icon-you-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-you\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.7726 14.3737C27.5184 14.5794 28.1058 15.1853 28.3051 15.9548C28.6673 17.3494 28.6673 20.2593 28.6673 20.2593C28.6673 20.2593 28.6673 23.169 28.3051 24.5637C28.1058 25.3332 27.5184 25.9391 26.7726 26.1449C25.421 26.5185 20.0007 26.5185 20.0007 26.5185C20.0007 26.5185 14.5803 26.5185 13.2286 26.1449C12.4828 25.9391 11.8954 25.3332 11.6961 24.5637C11.334 23.169 11.334 20.2593 11.334 20.2593C11.334 20.2593 11.334 17.3494 11.6961 15.9548C11.8954 15.1853 12.4828 14.5794 13.2286 14.3737C14.5803 14 20.0007 14 20.0007 14C20.0007 14 25.421 14 26.7726 14.3737ZM18.3746 17.8102V23.253L22.7079 20.5317L18.3746 17.8102Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7349
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const profilePage = document.querySelector(".profile-page");
if (profilePage) {
  const profileTop = profilePage.querySelector(".profile-page__top");
  const addOrganization = document.querySelector("#add-organization");
  if (addOrganization) {
    profileTop.classList.add("profile-page__top--hidden");
  }
}


/***/ },

/***/ 7477
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1660);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4489);



const subscribeForm = document.querySelector(".subscribe__form");
if (subscribeForm) {
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_1__.validateForm)(".subscribe__form");
}


/***/ },

/***/ 7532
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-liked",
  "use": "icon-liked-usage",
  "viewBox": "0 0 34 34",
  "content": "<symbol viewBox=\"0 0 34 34\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-liked\">\n<path d=\"M0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17Z\" fill=\"#EEEFF0\" />\n<path d=\"M22.9508 15.1134C22.9508 19.0234 17.0008 22.1004 17.0008 22.1004C17.0008 22.1004 11.0508 19.0233 11.0508 15.1134C11.0508 11.2034 15.5133 10.9729 17.0008 13.8196C18.4883 10.9729 22.9508 11.2034 22.9508 15.1134Z\" />\n<path d=\"M17.0008 22.1004L16.4495 23.1663C16.7953 23.3451 17.2063 23.3451 17.552 23.1663L17.0008 22.1004ZM17.0008 13.8196L15.9372 14.3754C16.1442 14.7714 16.554 15.0196 17.0008 15.0196C17.4476 15.0196 17.8574 14.7714 18.0643 14.3754L17.0008 13.8196ZM21.7508 15.1134C21.7508 16.4912 20.6575 17.925 19.2009 19.1569C18.5127 19.7389 17.8184 20.2126 17.2932 20.5417C17.0319 20.7054 16.8156 20.8315 16.6669 20.9154C16.5926 20.9573 16.5354 20.9885 16.4982 21.0086C16.4796 21.0186 16.466 21.0258 16.4578 21.0302C16.4536 21.0323 16.4509 21.0338 16.4495 21.0345C16.4488 21.0349 16.4485 21.0351 16.4485 21.0351C16.4485 21.035 16.4486 21.035 16.4487 21.0349C16.4488 21.0349 16.449 21.0348 16.4491 21.0347C16.4493 21.0346 16.4496 21.0345 17.0008 22.1004C17.552 23.1663 17.5523 23.1661 17.5526 23.166C17.5528 23.1659 17.5531 23.1657 17.5534 23.1656C17.5539 23.1653 17.5545 23.165 17.5553 23.1646C17.5567 23.1638 17.5585 23.1629 17.5607 23.1618C17.565 23.1595 17.5708 23.1565 17.5779 23.1527C17.5922 23.1452 17.612 23.1346 17.637 23.1212C17.6869 23.0943 17.7576 23.0556 17.846 23.0057C18.0227 22.906 18.2712 22.7611 18.5677 22.5753C19.1582 22.2053 19.9514 21.6653 20.7507 20.9894C22.2691 19.7052 24.1508 17.6455 24.1508 15.1134H21.7508ZM17.0008 22.1004C17.552 21.0345 17.5523 21.0346 17.5525 21.0347C17.5525 21.0348 17.5527 21.0349 17.5528 21.0349C17.553 21.035 17.5531 21.0351 17.5531 21.0351C17.5531 21.0351 17.5528 21.0349 17.5521 21.0345C17.5507 21.0338 17.5479 21.0323 17.5438 21.0302C17.5356 21.0258 17.522 21.0186 17.5034 21.0086C17.4661 20.9885 17.409 20.9573 17.3347 20.9154C17.186 20.8315 16.9696 20.7054 16.7083 20.5417C16.1832 20.2126 15.4889 19.7389 14.8007 19.1569C13.3441 17.925 12.2508 16.4912 12.2508 15.1134H9.85078C9.85078 17.6455 11.7325 19.7052 13.2509 20.9894C14.0501 21.6653 14.8434 22.2053 15.4339 22.5753C15.7304 22.7611 15.9788 22.906 16.1555 23.0057C16.244 23.0556 16.3146 23.0943 16.3646 23.1212C16.3895 23.1346 16.4093 23.1452 16.4236 23.1527C16.4308 23.1565 16.4365 23.1595 16.4409 23.1618C16.443 23.1629 16.4448 23.1638 16.4463 23.1646C16.447 23.165 16.4477 23.1653 16.4482 23.1656C16.4485 23.1657 16.4488 23.1659 16.4489 23.166C16.4493 23.1661 16.4495 23.1663 17.0008 22.1004ZM12.2508 15.1134C12.2508 14.3698 12.459 13.909 12.691 13.6321C12.9255 13.3523 13.2534 13.1769 13.6418 13.1201C14.4452 13.0025 15.4328 13.4101 15.9372 14.3754L18.0643 13.2639C17.0812 11.3824 15.0938 10.4819 13.2942 10.7454C12.381 10.8791 11.5002 11.3165 10.8515 12.0906C10.2004 12.8677 9.85078 13.9019 9.85078 15.1134H12.2508ZM18.0643 14.3754C18.5687 13.4101 19.5563 13.0025 20.3598 13.1201C20.7482 13.1769 21.076 13.3523 21.3105 13.6321C21.5425 13.909 21.7508 14.3698 21.7508 15.1134H24.1508C24.1508 13.9019 23.8012 12.8677 23.15 12.0906C22.5013 11.3165 21.6206 10.8791 20.7074 10.7454C18.9077 10.482 16.9203 11.3824 15.9372 13.2639L18.0643 14.3754Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7660
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-dropdown-compare",
  "use": "icon-dropdown-compare-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-dropdown-compare\">\r\n<path d=\"M7.75 24H20.25\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.125 7.75L14 6.5L20.875 7.75\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14 4V24\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M10.25 14.4167L7.125 7.75L4 14.4167C4 15.3007 4.32924 16.1486 4.91529 16.7737C5.50134 17.3988 6.2962 17.75 7.125 17.75C7.9538 17.75 8.74866 17.3988 9.33471 16.7737C9.92076 16.1486 10.25 15.3007 10.25 14.4167Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M24 14.4167L20.875 7.75L17.75 14.4167C17.75 15.3007 18.0792 16.1486 18.6653 16.7737C19.2513 17.3988 20.0462 17.75 20.875 17.75C21.7038 17.75 22.4987 17.3988 23.0847 16.7737C23.6708 16.1486 24 15.3007 24 14.4167Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7774
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-pencil",
  "use": "icon-pencil-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-pencil\">\r\n<path d=\"M3.33398 16.6663H6.66732L15.4173 7.91627C15.8593 7.47424 16.1077 6.87472 16.1077 6.2496C16.1077 5.62448 15.8593 5.02496 15.4173 4.58293C14.9753 4.14091 14.3758 3.89258 13.7507 3.89258C13.1255 3.89258 12.526 4.14091 12.084 4.58293L3.33398 13.3329V16.6663Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M11.25 5.41602L14.5833 8.74935\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7797
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);


const initBxSoaOrderSelect = (container, func) => {
  const select = container;
  let choicesNolint;
  if (select) {
    choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, {
      searchEnabled: false,
      itemSelectText: "",
      shouldSort: false
    });
    select.addEventListener("addItem", (event) => {
      func(event);
    });
  }
  return choicesNolint;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initBxSoaOrderSelect);


/***/ },

/***/ 7812
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-tele--black",
  "use": "icon-tele--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-tele--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.7012 26.0256C18.0521 26.0256 18.2071 25.8652 18.403 25.6747L20.2744 23.855L17.94 22.4473\" fill=\"#7F8899\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.9404 22.4485L23.597 26.6276C24.2424 26.9838 24.7083 26.7994 24.8691 26.0283L27.1716 15.1781C27.4073 14.233 26.8113 13.8043 26.1938 14.0847L12.6736 19.298C11.7507 19.6682 11.7561 20.1831 12.5054 20.4125L15.975 21.4954L24.0075 16.4278C24.3866 16.1979 24.7347 16.3215 24.449 16.575\" fill=\"#EFF6FF\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7897
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1708);



const novelties = document.querySelectorAll(".novelties");
if (novelties) {
  const noveltiesNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(".novelties__slider", {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .Vx, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .dK, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Scrollbar */ .Ze],
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: false,
    // Navigation arrows
    navigation: {
      prevEl: ".novelties__slider-button--prev",
      nextEl: ".novelties__slider-button--next",
      disabledClass: "novelties__slider-button--disabled"
    },
    // Scrollbar
    scrollbar: {
      el: ".novelties__scrollbar",
      dragClass: "novelties__scrollbar-drag",
      draggable: true
    }
  });
}


/***/ },

/***/ 7906
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-user-dropdown",
  "use": "icon-user-dropdown-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-user-dropdown\">\n<path d=\"M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M14 15.168C15.933 15.168 17.5 13.601 17.5 11.668C17.5 9.73497 15.933 8.16797 14 8.16797C12.067 8.16797 10.5 9.73497 10.5 11.668C10.5 13.601 12.067 15.168 14 15.168Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M7.19531 21.9918C7.48407 21.0307 8.07494 20.1883 8.88027 19.5896C9.68559 18.9909 10.6625 18.6677 11.666 18.668H16.3326C17.3374 18.6676 18.3155 18.9916 19.1214 19.5917C19.9273 20.1918 20.518 21.036 20.8056 21.9988\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7955
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 7991
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-you--white",
  "use": "icon-you--white-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-you--white\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.7726 14.3737C27.5184 14.5794 28.1058 15.1853 28.3051 15.9548C28.6673 17.3494 28.6673 20.2593 28.6673 20.2593C28.6673 20.2593 28.6673 23.169 28.3051 24.5637C28.1058 25.3332 27.5184 25.9391 26.7726 26.1449C25.421 26.5185 20.0007 26.5185 20.0007 26.5185C20.0007 26.5185 14.5803 26.5185 13.2286 26.1449C12.4828 25.9391 11.8954 25.3332 11.6961 24.5637C11.334 23.169 11.334 20.2593 11.334 20.2593C11.334 20.2593 11.334 17.3494 11.6961 15.9548C11.8954 15.1853 12.4828 14.5794 13.2286 14.3737C14.5803 14 20.0007 14 20.0007 14C20.0007 14 25.421 14 26.7726 14.3737ZM18.3746 17.8102V23.253L22.7079 20.5317L18.3746 17.8102Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8043
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8217
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8229
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-header-phone",
  "use": "icon-header-phone-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-header-phone\">\n<g clip-path=\"url(#icon-header-phone_clip0_6906_325957)\">\n<path d=\"M27.5001 23.6901V25.9401C27.5009 26.1489 27.4581 26.3557 27.3745 26.5471C27.2908 26.7385 27.168 26.9103 27.0141 27.0515C26.8602 27.1927 26.6785 27.3002 26.4806 27.3671C26.2828 27.434 26.0731 27.4589 25.8651 27.4401C23.5572 27.1893 21.3403 26.4007 19.3926 25.1376C17.5804 23.9861 16.0441 22.4497 14.8926 20.6376C13.6251 18.681 12.8363 16.4533 12.5901 14.1351C12.5713 13.9277 12.596 13.7186 12.6624 13.5213C12.7289 13.3239 12.8358 13.1426 12.9761 12.9888C13.1165 12.835 13.2874 12.7121 13.4779 12.628C13.6684 12.5438 13.8743 12.5003 14.0826 12.5001H16.3326C16.6966 12.4965 17.0494 12.6254 17.3254 12.8627C17.6014 13.1001 17.7816 13.4297 17.8326 13.7901C17.9275 14.5101 18.1037 15.2171 18.3576 15.8976C18.4585 16.166 18.4803 16.4578 18.4205 16.7382C18.3607 17.0187 18.2217 17.2762 18.0201 17.4801L17.0676 18.4326C18.1352 20.3102 19.6899 21.8649 21.5676 22.9326L22.5201 21.9801C22.724 21.7784 22.9814 21.6395 23.2619 21.5796C23.5424 21.5198 23.8341 21.5417 24.1026 21.6426C24.783 21.8965 25.49 22.0726 26.2101 22.1676C26.5744 22.219 26.9071 22.4025 27.145 22.6832C27.3828 22.9639 27.5092 23.3223 27.5001 23.6901Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</g>\n<defs>\n<clipPath id=\"icon-header-phone_clip0_6906_325957\">\n<rect width=\"18\" height=\"18\" fill=\"white\" transform=\"translate(11 11)\" />\n</clipPath>\n</defs>\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8294
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-fb--white",
  "use": "icon-fb--white-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-fb--white\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.1226 28.6673V19.9996H23.4017L23.7037 17.0127H21.1226L21.1265 15.5177C21.1265 14.7387 21.197 14.3213 22.2628 14.3213H23.6876V11.334H21.4082C18.6703 11.334 17.7066 12.783 17.7066 15.2197V17.013H16V20H17.7066V28.6673H21.1226Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8413
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8443
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-header-search",
  "use": "icon-header-search-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-header-search\">\n<path d=\"M22.7768 22.7867L28 28M22.7768 22.7867C23.9226 21.6433 24.6316 20.0624 24.6316 18.3158C24.6316 14.8277 21.8039 12 18.3158 12C14.8277 12 12 14.8277 12 18.3158C12 21.8039 14.8277 24.6316 18.3158 24.6316C20.0573 24.6316 21.6342 23.9267 22.7768 22.7867Z\" stroke-width=\"2\" stroke-linecap=\"square\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8470
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-header-user",
  "use": "icon-header-user-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-header-user\">\n<circle cx=\"20\" cy=\"16\" r=\"4\" stroke-width=\"2\" />\n<path d=\"M27 29C27 24.0294 23.866 20 20 20C16.134 20 13 24.0294 13 29\" stroke-width=\"2\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8489
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-navgoogle",
  "use": "icon-navgoogle-usage",
  "viewBox": "0 0 17 24",
  "content": "<symbol viewBox=\"0 0 17 24\" fill=\"none\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-navgoogle\">\n<path d=\"M4.63281 17.7831C5.37789 18.7102 6.13377 19.8718 6.53114 20.5752C7.0149 21.4894 7.21359 22.1068 7.57425 23.2081C7.78589 23.8147 7.98458 23.9997 8.40571 23.9997C8.86571 23.9997 9.0752 23.69 9.23717 23.2081C9.57192 22.1691 9.83324 21.3797 10.2414 20.6247C11.047 19.1791 12.0663 17.8928 13.0576 16.6581C13.3297 16.3118 15.0682 14.2725 15.85 12.6549C15.85 12.6549 16.8046 10.8867 16.8046 8.41516C16.8046 6.1049 15.8608 4.49805 15.8608 4.49805L13.131 5.22726L11.4681 9.57674L11.0578 10.1704L10.9714 10.2823L10.8591 10.4178L10.6733 10.6394L10.4012 10.9104L8.92402 12.1086L5.23967 14.2338L4.63281 17.7831Z\" fill=\"#34A853\" />\n<path d=\"M0.820312 12.3578C1.7252 14.4099 3.45076 16.2018 4.62992 17.7828L10.8713 10.4175C10.8713 10.4175 9.99016 11.5662 8.40282 11.5662C6.62759 11.5662 5.18927 10.1573 5.18927 8.37831C5.18927 7.15435 5.92139 6.31543 5.92139 6.31543L1.68849 7.44044L0.820312 12.3578Z\" fill=\"#FBBC04\" />\n<path d=\"M10.9474 0.382812C13.0185 1.04965 14.7937 2.4457 15.8606 4.51073L10.8718 10.4305C10.8718 10.4305 11.6039 9.57867 11.6039 8.36761C11.6039 6.54995 10.0662 5.17971 8.40331 5.17971C6.82677 5.17971 5.92188 6.31763 5.92188 6.31763V2.58336L10.9474 0.382812Z\" fill=\"#4285F4\" />\n<path d=\"M1.95312 2.99C3.19276 1.51866 5.36536 0 8.36727 0C9.81855 0 10.9221 0.382892 10.9221 0.382892L5.91175 6.31556H2.36346L1.95312 2.99Z\" fill=\"#1A73E8\" />\n<path d=\"M0.818506 12.358C0.818506 12.358 0 10.7382 0 8.40428C0 6.19298 0.868177 4.26346 1.97175 3.00293L5.93038 6.32634L0.818506 12.358Z\" fill=\"#EA4335\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8625
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removePromotionAlert: () => (/* binding */ removePromotionAlert),
/* harmony export */   summonPromotionAlert: () => (/* binding */ summonPromotionAlert)
/* harmony export */ });

const body = document.querySelector(".alert-wrapper");
const removePromotionAlert = (template) => {
  const templateContent = document.querySelector(`${template}`);
  templateContent.remove();
};
const summonPromotionAlert = (template) => {
  const alertName = template.slice(1);
  const templateContent = document.querySelector(`#${alertName}`).content.cloneNode(true);
  const alert = templateContent.querySelector(`.${alertName}`);
  const close = alert.querySelector(".promotion-alert__close");
  const closeAlert = () => {
    alert.remove();
  };
  if (close) {
    close.addEventListener("click", () => {
      closeAlert();
    });
  }
  body.append(templateContent);
  alert.classList.add("promotion-alert--bounce");
};



/***/ },

/***/ 8661
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8669
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var filepond__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9992);
/* harmony import */ var filepond__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(filepond__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var filepond_locale_ru_ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(790);
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3424);
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8460);
/* harmony import */ var filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _alert_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4009);






filepond__WEBPACK_IMPORTED_MODULE_0__.registerPlugin(
  (filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_2___default()),
  (filepond_plugin_file_validate_size__WEBPACK_IMPORTED_MODULE_3___default())
);
const fileLoaderInit = () => {
  const fileLoader = document.querySelector(".file-loader");
  if (fileLoader) {
    const form = fileLoader.closest("form");
    const input = fileLoader.querySelector(".file-loader__input");
    const isRequired = input.hasAttribute("required");
    const { labelName } = input.dataset;
    const filePond = filepond__WEBPACK_IMPORTED_MODULE_0__.create(
      fileLoader.querySelector('input[type="file"]'),
      {
        required: isRequired,
        styleButtonRemoveItemPosition: "right",
        iconRemove: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
        allowMultiple: true,
        allowRevert: false,
        allowProcess: false,
        allowReorder: false,
        credits: false,
        itemInsertInterval: 0,
        // Файлы отправляются обычной HTML-формой.
        storeAsFile: true,
        // Валидация размера применяется ТОЛЬКО если файл добавлен.
        allowFileSizeValidation: true,
        // Валидация типа применяется ТОЛЬКО если файл добавлен.
        allowFileTypeValidation: true,
        // Кастомное определение MIME-типа
        fileValidateTypeDetectType: (source, type) => new Promise((resolve) => {
          const fileName = source.name;
          if (fileName.toLowerCase().endsWith(".flv")) {
            type = "video/x-flv";
          }
          resolve(type);
        }),
        beforeAddFile: (item) => {
        },
        beforeRemoveFile: (item) => {
        },
        onerror(error, item) {
          filePond.removeFile(item);
          (0,_alert_alert__WEBPACK_IMPORTED_MODULE_4__.summonAlert)({
            template: "#alert--red",
            text: error.main
          });
        }
      }
    );
    filepond__WEBPACK_IMPORTED_MODULE_0__.setOptions(filepond_locale_ru_ru__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);
    filepond__WEBPACK_IMPORTED_MODULE_0__.setOptions({
      labelIdle: `<svg width="18" height="18" viewBox="0 0 18 18" stroke="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.87721 9.72546L9.54625 5.03781C10.4918 4.08854 12.0248 4.08854 12.9702 5.03781C13.9158 5.98707 13.9158 7.52612 12.9702 8.47538L7.36738 14.1005C6.9376 14.532 6.2408 14.532 5.81102 14.1005C5.38124 13.669 5.38124 12.9695 5.81102 12.538L10.7913 7.53786C11.0492 7.27897 11.0492 6.85923 10.7913 6.60034C10.5335 6.34145 10.1154 6.34145 9.85756 6.60034L4.87721 11.6005C3.93171 12.5497 3.93171 14.0888 4.87721 15.0381C5.82272 15.9873 7.35569 15.9873 8.30119 15.0381L13.9041 9.41291C15.3653 7.94587 15.3653 5.56732 13.9041 4.10028C12.4429 2.63324 10.0737 2.63324 8.61246 4.10028L3.9434 8.7879C3.68553 9.04679 3.68553 9.46656 3.9434 9.72546C4.20126 9.98435 4.61935 9.98435 4.87721 9.72546Z"/></svg>${labelName}`
    });
    if (form) {
      form.addEventListener("reset", () => {
        filePond.removeFiles();
      });
    }
  }
};
fileLoaderInit();


/***/ },

/***/ 8697
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _packaging_packaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4377);


const activateItemCard = (func) => {
  const cards = document.querySelectorAll(".item-card:not(.item-card--js)");
  cards.forEach((card) => {
    if (!card.classList.contains("item-card--js")) {
      card.classList.add("item-card--js");
      const where = card.querySelector(".item-card__where");
      const select = (0,_packaging_packaging__WEBPACK_IMPORTED_MODULE_0__["default"])(card, (event) => {
        if (func) {
          func(event);
        }
        if (event.detail.label !== "0") {
          where.textContent = "\u0412 \u043A\u043E\u0440\u0437\u0438\u043De";
          where.classList.add("item-card__where--active");
        } else {
          where.textContent = "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443";
          where.classList.remove("item-card__where--active");
        }
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateItemCard);


/***/ },

/***/ 8729
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8761
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8806
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-document-arrow",
  "use": "icon-document-arrow-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-document-arrow\">\r\n<path d=\"M19.668 18.332V28.332\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14.668 23.332L19.668 28.332L24.668 23.332\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8877
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);



const multiMapInit = (data) => {
  if (!data)
    return;
  const find = document.querySelector(".find");
  if (find) {
    const select = document.querySelector(".find__select");
    const mapList = [];
    data.forEach((item, index) => {
      const map2 = {
        value: item.region,
        label: item.region,
        selected: false,
        disabled: false,
        customProperties: {
          id: index
        }
      };
      mapList.push(map2);
    });
    const choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, {
      searchEnabled: false,
      itemSelectText: "",
      shouldSort: false,
      choices: mapList,
      classNames: {
        containerOuter: "choices find__choices"
      }
    });
    const map = document.querySelector(".find__map");
    const tag = document.createElement("script");
    tag.src = "https://api-maps.yandex.ru/2.1/?load=package.full&lang=ru-RU";
    const firstScriptTag = document.querySelector("script");
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    if (tag) {
      tag.addEventListener("load", () => {
        const ymap = map.querySelector(".find__ymap");
        const locationList = find.querySelector(".find__location-list");
        ymaps.ready(() => {
          const myMap = new ymaps.Map(ymap, {
            center: [40, 30],
            zoom: 13,
            controls: ["zoomControl"]
          }, {
            balloonAutoPanMargin: 50
          });
          myMap.behaviors.disable("scrollZoom");
          let placemark;
          let MyBalloonLayout;
          let MyBalloonContentLayout;
          MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="find__balloon"><a class="find__balloon-close" href="#"><span></span></a><div class="find__balloon-arrow"></div><div class="find__balloon-inner">$[[options.contentLayout observeSize minWidth=235 maxWidth=300 maxHeight=350]]</div></div>',
            {
              /**
               * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
               * @function
               * @name build
               */
              build: function() {
                this.constructor.superclass.build.call(this);
                this._$element = $(".find__balloon", this.getParentElement());
                this.applyElementOffset();
                this._$element.find(".find__balloon-close").on("click", $.proxy(this.onCloseClick, this));
              },
              /**
               * Удаляет содержимое макета из DOM.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
               * @function
               * @name clear
               */
              clear: function() {
                this._$element.find(".find__balloon-close").off("click");
                this.constructor.superclass.clear.call(this);
              },
              /**
               * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
               * @function
               * @name onSublayoutSizeChange
               */
              onSublayoutSizeChange: function() {
                MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
                if (!this._isElement(this._$element)) {
                  return;
                }
                this.applyElementOffset();
                this.events.fire("shapechange");
              },
              /**
               * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
               * @function
               * @name applyElementOffset
               */
              applyElementOffset: function() {
                this._$element.css({
                  left: -(this._$element[0].offsetWidth / 2),
                  top: -(this._$element[0].offsetHeight + 20 + this._$element.find(".find__balloon-arrow")[0].offsetHeight)
                });
              },
              /**
               * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
               * @function
               * @name onCloseClick
               */
              onCloseClick: function(e) {
                e.preventDefault();
                this.events.fire("userclose");
              },
              onSubmitClick: function(e) {
                e.preventDefault();
                window.Corners5ProjectLayout.summonPopUp("#modal--contact", true);
                validatedForm = window.Corners5ProjectLayout.validation.validateForm("#where-2");
                window.Corners5ProjectLayout.validation.maskPhone("#where-2");
                window.Corners5ProjectLayout.setTextareaAutoHeight("#where-2 textarea.validator__texarea");
                const form = document.querySelector("#where-2");
                form.addEventListener("bouncerFormValid", () => {
                  func();
                  validatedForm.destroy();
                  validatedForm = void 0;
                });
                this.events.fire("userclose");
              },
              /**
               * Используется для автопозиционирования (balloonAutoPan).
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
               * @function
               * @name getClientBounds
               * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
               */
              getShape: function() {
                if (!this._isElement(this._$element)) {
                  return MyBalloonLayout.superclass.getShape.call(this);
                }
                var position = this._$element.position();
                return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                  [position.left, position.top],
                  [
                    position.left + this._$element[0].offsetWidth,
                    position.top + this._$element[0].offsetHeight + this._$element.find(".find__balloon-arrow")[0].offsetHeight
                  ]
                ]));
              },
              /**
               * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
               * @function
               * @private
               * @name _isElement
               * @param {jQuery} [element] Элемент.
               * @returns {Boolean} Флаг наличия.
               */
              _isElement: function(element) {
                return element && element[0] && element.find(".find__balloon-arrow")[0];
              }
            }
          );
          MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<p class="find__balloon-title">$[properties.balloonHeader]</p><div class="find__balloon-content">$[properties.balloonContent]</div>'
          );
          let myGeoObjects;
          if (window.innerWidth >= 768) {
            myGeoObjects = new ymaps.GeoObjectCollection({}, {
              iconLayout: "default#image",
              iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_1__/* .ENV */ .K}`]}map-pin.svg`,
              iconImageSize: [66, 66],
              iconImageOffset: [-33, -33]
            });
          } else {
            myGeoObjects = new ymaps.GeoObjectCollection({}, {
              iconLayout: "default#image",
              iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_1__/* .ENV */ .K}`]}map-pin.svg`,
              iconImageSize: [66, 66],
              iconImageOffset: [-33, -33]
            });
          }
          const renderCities = (object) => {
            locationList.innerHTML = "";
            for (let i = 0; i < object.length; i++) {
              const countPins = object[i].crd.length;
              const li = document.createElement("li");
              const big = object[i].big;
              const checkBig = () => {
                if (big) {
                  return `find__location-link--big`;
                } else {
                  return ``;
                }
              };
              const setActive = () => {
                if (i === 0) {
                  return `find__location-link--active`;
                } else {
                  return ``;
                }
              };
              li.innerHTML = `<li class="find__location-item"><a href="#" class="find__location-link ${checkBig()} ${setActive()}">${object[i].city}<sup>${countPins}</sup></a></li>`;
              const itemMenu = locationList.appendChild(li.firstChild).querySelector("a");
              itemMenu.addEventListener("click", (evt) => {
                evt.preventDefault();
                const activeCity = document.querySelector(".find__location-link--active");
                if (!itemMenu.classList.contains("find__location-link--active")) {
                  activeCity.classList.remove("find__location-link--active");
                  itemMenu.classList.add("find__location-link--active");
                  myGeoObjects.removeAll();
                  renderMarker(object[i]);
                } else {
                  return false;
                }
              });
            }
          };
          const renderMarker = (object) => {
            object.crd.forEach((el) => {
              const mapName = el.name;
              const coorinateX = el.x;
              const coorinateY = el.y;
              const mapAddress = el.address;
              const mapTel = el.tel;
              const mapHint = el.hint;
              const checkAddress = () => {
                if (mapAddress) {
                  return `<p>${mapAddress}</p>`;
                } else {
                  return ``;
                }
              };
              const checkTel = () => {
                if (mapTel) {
                  return `<p><a href='tel:${mapTel}'>${mapTel}</a></p>`;
                } else {
                  return ``;
                }
              };
              const checkHint = () => {
                if (mapHint) {
                  return `<p>${mapHint}</p>`;
                } else {
                  return ``;
                }
              };
              const content = checkAddress() + checkTel() + checkHint();
              if (window.innerWidth >= 488) {
                placemark = new ymaps.Placemark([coorinateX, coorinateY], {
                  balloonHeader: `${mapName}`,
                  balloonContent: `${content}`
                }, {
                  balloonShadow: false,
                  balloonLayout: MyBalloonLayout,
                  balloonContentLayout: MyBalloonContentLayout
                  // balloonPanelMaxMapArea: 0,
                });
              } else {
                placemark = new ymaps.Placemark([coorinateX, coorinateY], {
                  balloonHeader: `${mapName}`,
                  balloonContent: `${content}`
                }, {
                  balloonContentLayout: MyBalloonContentLayout
                  // balloonPanelMaxMapArea: 0,
                });
              }
              myGeoObjects.add(placemark);
            });
            myMap.geoObjects.add(myGeoObjects);
            const count = object.crd.length;
            if (count > 1) {
              myMap.setBounds(myGeoObjects.getBounds());
            } else {
              const coorinateX = object.crd[0].x;
              const coorinateY = object.crd[0].y;
              myMap.setCenter([`${coorinateX}`, `${coorinateY}`]);
              myMap.setZoom(16);
            }
          };
          myGeoObjects.events.add("balloonopen", (evt) => {
            evt.get("target").options.set("preset", {
              iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_1__/* .ENV */ .K}`]}map-pin--active.svg`
            });
          }).add("balloonclose", (evt) => {
            evt.get("target").options.unset("preset");
          });
          renderMarker(data[0].location[0]);
          renderCities(data[0].location);
          for (let i = 0; i < data[0].location.length; i++) {
          }
          select.addEventListener("addItem", (event) => {
            const indx = event.detail.customProperties.id;
            myGeoObjects.removeAll();
            renderMarker(data[indx].location[0]);
            renderCities(data[indx].location);
          });
        });
      });
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (multiMapInit);


/***/ },

/***/ 8881
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8897
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-insta--black",
  "use": "icon-insta--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-insta--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.0034 11.334C17.6497 11.334 17.3543 11.3443 16.4298 11.3863C15.5072 11.4286 14.8774 11.5747 14.3263 11.789C13.7563 12.0103 13.2728 12.3065 12.791 12.7884C12.309 13.2701 12.0128 13.7536 11.7908 14.3234C11.5759 14.8747 11.4296 15.5046 11.3881 16.4269C11.3468 17.3514 11.3359 17.6469 11.3359 20.0007C11.3359 22.3544 11.3464 22.6489 11.3883 23.5733C11.4307 24.4959 11.5768 25.1257 11.7909 25.6768C12.0125 26.2468 12.3086 26.7303 12.7905 27.212C13.2721 27.6941 13.7556 27.991 14.3252 28.2123C14.8767 28.4266 15.5066 28.5727 16.4291 28.615C17.3536 28.657 17.6488 28.6673 20.0023 28.6673C22.3563 28.6673 22.6507 28.657 23.5752 28.615C24.4979 28.5727 25.1284 28.4266 25.6798 28.2123C26.2496 27.991 26.7324 27.6941 27.214 27.212C27.6961 26.7303 27.9922 26.2468 28.2143 25.677C28.4273 25.1257 28.5736 24.4958 28.6169 23.5735C28.6584 22.649 28.6693 22.3544 28.6693 20.0007C28.6693 17.6469 28.6584 17.3515 28.6169 16.4271C28.5736 15.5045 28.4273 14.8747 28.2143 14.3236C27.9922 13.7536 27.6961 13.2701 27.214 12.7884C26.7319 12.3063 26.2498 12.0102 25.6792 11.789C25.1267 11.5747 24.4966 11.4286 23.5739 11.3863C22.6495 11.3443 22.3552 11.334 20.0007 11.334H20.0034ZM19.2259 12.8967C19.4566 12.8963 19.7141 12.8967 20.0034 12.8967C22.3174 12.8967 22.5917 12.905 23.5055 12.9465C24.3505 12.9852 24.8091 13.1264 25.1146 13.245C25.519 13.4021 25.8074 13.5899 26.1105 13.8932C26.4139 14.1965 26.6017 14.4854 26.7591 14.8899C26.8777 15.195 27.0191 15.6536 27.0576 16.4986C27.0991 17.4122 27.1081 17.6867 27.1081 19.9996C27.1081 22.3125 27.0991 22.5869 27.0576 23.5005C27.0189 24.3455 26.8777 24.8042 26.7591 25.1093C26.602 25.5137 26.4139 25.8017 26.1105 26.1049C25.8072 26.4082 25.5192 26.596 25.1146 26.7531C24.8095 26.8722 24.3505 27.0131 23.5055 27.0517C22.5918 27.0932 22.3174 27.1023 20.0034 27.1023C17.6892 27.1023 17.4149 27.0932 16.5013 27.0517C15.6563 27.0127 15.1977 26.8715 14.892 26.7529C14.4875 26.5958 14.1986 26.408 13.8953 26.1047C13.592 25.8014 13.4042 25.5132 13.2467 25.1086C13.1281 24.8034 12.9867 24.3448 12.9483 23.4998C12.9067 22.5862 12.8984 22.3118 12.8984 19.9974C12.8984 17.683 12.9067 17.41 12.9483 16.4964C12.9869 15.6514 13.1281 15.1928 13.2467 14.8873C13.4038 14.4829 13.592 14.194 13.8953 13.8907C14.1986 13.5873 14.4875 13.3995 14.892 13.2421C15.1975 13.1229 15.6563 12.9821 16.5013 12.9433C17.3008 12.9072 17.6106 12.8963 19.2259 12.8945V12.8967ZM24.6299 14.3324C24.0557 14.3324 23.5898 14.7977 23.5898 15.372C23.5898 15.9462 24.0557 16.412 24.6299 16.412C25.204 16.412 25.6699 15.9462 25.6699 15.372C25.6699 14.7979 25.204 14.332 24.6299 14.332V14.3324ZM20.0015 15.5508C17.5436 15.5508 15.5508 17.5436 15.5508 20.0015C15.5508 22.4594 17.5436 24.4513 20.0015 24.4513C22.4594 24.4513 24.4515 22.4594 24.4515 20.0015C24.4515 17.5436 22.4593 15.5508 20.0013 15.5508H20.0015ZM20.0022 17.1113C21.5976 17.1113 22.8911 18.4046 22.8911 20.0002C22.8911 21.5956 21.5976 22.8891 20.0022 22.8891C18.4066 22.8891 17.1133 21.5956 17.1133 20.0002C17.1133 18.4046 18.4066 17.1113 20.0022 17.1113V17.1113Z\" fill=\"white\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8965
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-fb",
  "use": "icon-fb-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-fb\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.1226 28.6673V19.9996H23.4017L23.7037 17.0127H21.1226L21.1265 15.5177C21.1265 14.7387 21.197 14.3213 22.2628 14.3213H23.6876V11.334H21.4082C18.6703 11.334 17.7066 12.783 17.7066 15.2197V17.013H16V20H17.7066V28.6673H21.1226Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8971
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-closer",
  "use": "icon-closer-usage",
  "viewBox": "0 0 12 12",
  "content": "<symbol viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-closer\">\r\n<path d=\"M1 1L11.0005 11.0005\" stroke-linecap=\"round\" />\r\n<path d=\"M1 11L11.0005 0.99953\" stroke-linecap=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 9023
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-cancel",
  "use": "icon-cancel-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-cancel\">\n<path d=\"M7 7L21.0007 21.0007\" stroke-width=\"2\" stroke-linecap=\"round\" />\n<path d=\"M7 21L21.0007 6.99934\" stroke-width=\"2\" stroke-linecap=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 9025
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9143
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const buttons = document.querySelectorAll(".mobile-nav__sub-toggle");
buttons.forEach((button) => {
  const parent = button.parentElement;
  const container = button.nextElementSibling;
  button.addEventListener("click", () => {
    if (!parent.classList.contains("mobile-nav__item--active")) {
      parent.classList.add("mobile-nav__item--active");
      container.style.maxHeight = `${container.scrollHeight}px`;
    } else {
      parent.classList.remove("mobile-nav__item--active");
      container.style.maxHeight = null;
    }
  });
});


/***/ },

/***/ 9237
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);


const form = document.querySelector(".corners-filter__form");
const resultBlock = document.querySelector(".corners-filter__result");
if (form) {
  const groups = [...form.querySelectorAll(".corners-filter__group")];
  const submitButton = form.querySelector(".corners-filter__submit");
  const closeAll = () => {
    groups.forEach((group) => {
      group.classList.remove("corners-filter__group--active");
      const toggle = group.querySelector(".corners-filter__toggle");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  };
  groups.forEach((group) => {
    const toggle = group.querySelector(".corners-filter__toggle");
    if (!toggle)
      return;
    toggle.addEventListener("click", (evt) => {
      evt.preventDefault();
      const isActive = group.classList.contains("corners-filter__group--active");
      closeAll();
      if (!isActive) {
        group.classList.add("corners-filter__group--active");
        toggle.setAttribute("aria-expanded", "true");
        console.log(window.innerWidth);
        if (window.innerWidth < 768) {
          (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingOnBody */ .rP)();
        }
      }
    });
    const close = group.querySelector(".corners-filter__dropdown-close");
    if (!close)
      return;
    close.addEventListener("click", (evt) => {
      evt.preventDefault();
      closeAll();
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
    });
  });
  document.addEventListener("click", (evt) => {
    const clickedInsideDropdown = evt.target.closest(".corners-filter__dropdown");
    const clickedToggle = evt.target.closest(".corners-filter__toggle");
    if (!clickedInsideDropdown && !clickedToggle) {
      closeAll();
    }
  });
  if (resultBlock) {
    const renderPickedFilters = (state) => {
      resultBlock.innerHTML = "";
      for (const key in state) {
        const values = state[key];
        if (!values || !values.length)
          continue;
        const text = values.length === 1 ? `${key}: ${values[0]}` : `${key}: ${values.length} \u0437\u043D\u0430\u0447.`;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "corners-filter__picked";
        btn.textContent = text;
        btn.dataset.name = key;
        resultBlock.appendChild(btn);
      }
    };
    const updateState = () => {
      const state = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getFormState */ .Ai)(form);
      renderPickedFilters(state);
      return state;
    };
    updateState();
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const state = updateState();
      form.dispatchEvent(
        new CustomEvent("filter:change", {
          detail: state
        })
      );
      submitButton.setAttribute("style", "display: none;");
    });
    form.addEventListener("change", (evt) => {
      if (evt.target.matches('input[type="checkbox"]')) {
        console.log("\u041A\u043B\u0438\u043A\u043D\u0443\u043B\u0438");
        submitButton.removeAttribute("style");
      }
    });
    resultBlock.addEventListener("click", (evt) => {
      const btn = evt.target.closest(".corners-filter__picked");
      if (!btn)
        return;
      const name = btn.dataset.name;
      form.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
        input.checked = false;
      });
      const state = updateState();
      form.dispatchEvent(
        new CustomEvent("filter:change", {
          detail: state
        })
      );
    });
  }
}
const filterForm = document.querySelector(".corners-filter__form");
if (filterForm) {
  filterForm.addEventListener("filter:change", (evt) => {
    console.log("\u0424\u0438\u043B\u044C\u0442\u0440 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0441\u044F:", evt.detail);
  });
}


/***/ },

/***/ 9240
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-fb--black",
  "use": "icon-fb--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-fb--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.1226 28.6673V19.9996H23.4017L23.7037 17.0127H21.1226L21.1265 15.5177C21.1265 14.7387 21.197 14.3213 22.2628 14.3213H23.6876V11.334H21.4082C18.6703 11.334 17.7066 12.783 17.7066 15.2197V17.013H16V20H17.7066V28.6673H21.1226Z\" fill=\"white\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 9276
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-vk",
  "use": "icon-vk-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-vk\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4796 25.5738C20.4796 25.5738 20.7924 25.5399 20.9527 25.3723C21.0993 25.2188 21.0942 24.929 21.0942 24.929C21.0942 24.929 21.0747 23.5759 21.7199 23.3761C22.3557 23.1796 23.1721 24.6846 24.0386 25.2633C24.693 25.7009 25.1898 25.6051 25.1898 25.6051L27.5051 25.5738C27.5051 25.5738 28.7157 25.5011 28.1418 24.574C28.0943 24.498 27.8069 23.8879 26.4208 22.6347C24.9686 21.3229 25.1636 21.5351 26.9117 19.2656C27.9765 17.8836 28.4021 17.0399 28.269 16.6791C28.1426 16.334 27.3593 16.4256 27.3593 16.4256L24.7532 16.4413C24.7532 16.4413 24.5599 16.4157 24.4167 16.4991C24.2768 16.5808 24.1861 16.7716 24.1861 16.7716C24.1861 16.7716 23.7741 17.8407 23.2239 18.7504C22.0633 20.6691 21.5995 20.7706 21.4096 20.6517C20.9679 20.3735 21.0781 19.5356 21.0781 18.9403C21.0781 17.0803 21.3681 16.3051 20.5144 16.1045C20.2312 16.0376 20.0227 15.9939 19.2978 15.9864C18.3678 15.9774 17.5811 15.9897 17.1351 16.2019C16.8384 16.3431 16.6095 16.6585 16.7494 16.6766C16.9215 16.6989 17.3115 16.779 17.5183 17.0531C17.7854 17.4072 17.7761 18.2014 17.7761 18.2014C17.7761 18.2014 17.9295 20.3908 17.4175 20.6625C17.0665 20.849 16.5849 20.4684 15.5498 18.7273C15.0199 17.8357 14.6198 16.85 14.6198 16.85C14.6198 16.85 14.5426 16.6659 14.4045 16.5668C14.2375 16.4471 14.0043 16.41 14.0043 16.41L11.528 16.4256C11.528 16.4256 11.1558 16.4355 11.0193 16.5932C10.8981 16.7328 11.01 17.0225 11.01 17.0225C11.01 17.0225 12.9488 21.4401 15.1446 23.6667C17.158 25.7075 19.4436 25.5738 19.4436 25.5738H20.4796Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 9417
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removePopUp: () => (/* binding */ removePopUp),
/* harmony export */   summonPopUp: () => (/* binding */ summonPopUp)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);


const body = document.querySelector("body");
const activePopUps = [];
const summonPopUp = (template, fixer) => {
  const popUpName = template.slice(1);
  const templateContent = document.querySelector(`#${popUpName}`).content.cloneNode(true);
  const popup = templateContent.querySelector(`.${popUpName}`);
  const closes = popup.querySelectorAll(".popUp__close");
  activePopUps.push(popup);
  if (fixer === true) {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingOnBody */ .rP)();
    popup.querySelector(".popUp__overlay").addEventListener("click", () => {
      popup.remove();
      activePopUps.pop();
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
    });
  }
  if (closes.length > 0) {
    closes.forEach((close) => {
      close.addEventListener("click", () => {
        popup.remove();
        activePopUps.pop();
        if (fixer === true) {
          (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
        }
      });
    });
  }
  body.append(templateContent);
};
const removePopUp = (template, fixer) => {
  const templateContent = document.querySelector(`${template}`);
  if (fixer === true) {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
  }
  templateContent.remove();
};
document.addEventListener("keydown", (evt) => {
  if (evt.code === "Escape") {
    const lastActivePopUp = activePopUps.pop();
    if (lastActivePopUp !== void 0) {
      lastActivePopUp.remove();
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
    }
  }
});



/***/ },

/***/ 9469
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9518
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-dropdown-favorites",
  "use": "icon-dropdown-favorites-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-dropdown-favorites\">\r\n<path d=\"M12.7208 5.42192C13.1234 4.19269 14.8766 4.19269 15.2792 5.42192L16.7178 9.81388C16.8979 10.3636 17.4143 10.7358 17.997 10.7358H22.6524C23.9554 10.7358 24.4971 12.3897 23.443 13.1494L19.6767 15.8638C19.2053 16.2035 19.008 16.8058 19.1881 17.3555L20.6267 21.7474C21.0293 22.9767 19.611 23.9988 18.5569 23.2391L14.7906 20.5248C14.3192 20.185 13.6808 20.185 13.2094 20.5248L9.44311 23.2391C8.389 23.9988 6.97069 22.9767 7.37333 21.7474L8.81193 17.3555C8.99199 16.8058 8.79473 16.2035 8.32332 15.8638L4.55702 13.1494C3.5029 12.3897 4.04465 10.7358 5.3476 10.7358H10.003C10.5857 10.7358 11.1021 10.3636 11.2822 9.81388L12.7208 5.42192Z\" stroke-width=\"2\" fill=\"none\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 9575
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9705
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popUp_popUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9417);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3670);



const activateModalProduct = (func) => {
  const requests = document.querySelectorAll(".request-modal-product:not(.request-modal-product--js)");
  if (requests.length) {
    requests.forEach((request) => {
      if (!request.classList.contains("request-modal-product--js")) {
        request.classList.add("request-modal-product--js");
        const startButton = request;
        const { id } = startButton.dataset;
        startButton.addEventListener("click", (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .debounce */ .sg)(() => {
          if (func) {
            const answer = func({
              id
            });
            if (answer.responseText) {
              const container = document.querySelector("#modal--product").content.querySelector(".modal-product");
              container.innerHTML = answer.responseText;
              (0,_popUp_popUp__WEBPACK_IMPORTED_MODULE_0__.summonPopUp)("#modal--product", true);
            }
          }
        }));
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateModalProduct);


/***/ },

/***/ 9819
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9838
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ ENV)
/* harmony export */ });
const ENV = window.location.origin.includes("192.168") || window.location.origin.includes("localhost") || window.location.origin.includes("html.5corners") ? "Local" : "Remote";


/***/ },

/***/ 9845
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-contacts-phone",
  "use": "icon-contacts-phone-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-contacts-phone\">\n<path d=\"M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 9907
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9961
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const copy = document.querySelector(".contacts__nav-link--copy");
if (copy) {
  const message = copy.nextElementSibling;
  const showMessage = () => {
    message.classList.add("contacts__message--active");
    setTimeout(() => {
      message.classList.remove("contacts__message--active");
    }, 3e3);
  };
  copy.onclick = () => {
    const link = window.location.href;
    const textarea = document.createElement("textarea");
    textarea.value = link;
    copy.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showMessage();
  };
}


/***/ }

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			23: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_pug_esbuild_starter"] = self["webpackChunkwebpack_pug_esbuild_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [96], () => (__webpack_require__(6153)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;