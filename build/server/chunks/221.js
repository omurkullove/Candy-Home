exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 8141:
/***/ ((module) => {

// Exports
module.exports = {
	"filter": "PackageIdComponent_filter__ISv_g",
	"items": "PackageIdComponent_items__YnCJa",
	"mainImg": "PackageIdComponent_mainImg__q9bST",
	"secondImg": "PackageIdComponent_secondImg__8QDzj"
};


/***/ }),

/***/ 5855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/fanushka.f7dcb26e.png","height":161,"width":152,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6UlEQVR42mMAgf+7aoQ+rylfAWJ/XJKv+3Za/IUEBgZGBhj4/3Il25cVGT/2remOvTynMPfD5LDXDDDwZlsjK4j+vCwh9/iRhf8Pb+z7/aHfLRsk9mpOCivD1OkNzCDO1sNrZ81dN+P/5IVd/7sn1MwFifVPrAXLMexa1Cu2/9Ken8f3rPl/dOvC/6t3L3rTy8DAxQADTxgYFK62F/08cHfx/4OX5v0/WJf9dQMDgyTCkQyhQnvmpn/tuKL/v3m/9v/ZRSZP/jOksjKAwIorU8H2XFvf1bJyZ/Gf7jnh/5dMyCkDu2FpITMATolrAhWPMvQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 2875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PackageIdComponent_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8141);
/* harmony import */ var _PackageIdComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PackageIdComponent_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1608);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);







function SamplePrevArrow(props) {
    const { className , style , onClick  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        style: {
            ...style,
            display: "none",
            background: "green"
        },
        onClick: onClick
    });
}
const PackageCarousel = ({ arr  })=>{
    const { 0: nav1 , 1: setNav1  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: nav2 , 1: setNav2  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const slider1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const slider2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);
    const settings = {
        nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SamplePrevArrow, {}),
        prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SamplePrevArrow, {})
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            width: "20vw",
            maxWidth: "300px"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
                    asNavFor: nav2,
                    ref: slider1,
                    ...settings,
                    children: arr.map((e)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_PackageIdComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mainImg),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: e.img,
                                layot: "raw",
                                alt: "img"
                            })
                        }, e.id))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
                    asNavFor: nav1,
                    ref: slider2,
                    slidesToShow: 3,
                    swipeToSlide: true,
                    focusOnSelect: true,
                    ...settings,
                    children: arr.map((e)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_PackageIdComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default().secondImg),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: e.img,
                                layot: "raw",
                                alt: "img"
                            })
                        }, e.id))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PackageCarousel);


/***/ })

};
;