exports.id = 295;
exports.ids = [295];
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

/***/ 9106:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "CurrentItem_item__oTad_",
	"title": "CurrentItem_title__f_u6N",
	"img": "CurrentItem_img__RRTap",
	"subTitle": "CurrentItem_subTitle__g1uK8",
	"itemInfo": "CurrentItem_itemInfo__tVRmf",
	"price": "CurrentItem_price__Y25I0",
	"btnWrap": "CurrentItem_btnWrap__6f9GP",
	"btn": "CurrentItem_btn__iyHt7"
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

/***/ 5612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CurrentItem_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9106);
/* harmony import */ var _CurrentItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CurrentItem_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1608);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);





const CurrentItem = ({ title , img , volume , id , size , subTitle , material , price , isLiked , page ,  })=>{
    const { 0: currentIsLiked , 1: setIsliked  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(isLiked);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_CurrentItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CurrentItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_CurrentItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default().img),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        layout: "raw",
                        src: img,
                        alt: "title"
                    }),
                    currentIsLiked ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        viewBox: "0 0 20 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: ()=>setIsliked(!currentIsLiked),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M10 17L9.51343 17.8736C9.81593 18.0421 10.1841 18.0421 10.4866 17.8736L10 17ZM10 4.16221L9.07966 4.55332C9.23655 4.9225 9.59886 5.16221 10 5.16221C10.4011 5.16221 10.7635 4.9225 10.9203 4.55332L10 4.16221ZM0 5.97234C0 9.44565 2.56031 12.4617 4.83471 14.4884C6.00373 15.5302 7.16813 16.3728 8.03809 16.9542C8.47404 17.2456 8.83849 17.473 9.09584 17.6286C9.22457 17.7064 9.32667 17.7664 9.39771 17.8076C9.43323 17.8281 9.461 17.844 9.48047 17.8551C9.4902 17.8606 9.49786 17.8649 9.50338 17.868C9.50614 17.8696 9.50836 17.8708 9.51004 17.8717C9.51087 17.8722 9.51158 17.8726 9.51214 17.8729C9.51243 17.8731 9.51275 17.8733 9.51289 17.8733C9.51317 17.8735 9.51343 17.8736 10 17C10.4866 16.1264 10.4868 16.1265 10.4869 16.1265C10.4869 16.1265 10.487 16.1266 10.487 16.1266C10.4871 16.1266 10.4869 16.1266 10.4867 16.1264C10.4862 16.1261 10.4851 16.1256 10.4836 16.1247C10.4804 16.1229 10.4752 16.12 10.4679 16.1158C10.4533 16.1075 10.4305 16.0945 10.4001 16.0769C10.3393 16.0417 10.2481 15.9881 10.1307 15.9172C9.89588 15.7751 9.55721 15.5639 9.14941 15.2914C8.33187 14.745 7.24627 13.9585 6.1653 12.9953C3.93969 11.012 2 8.51414 2 5.97234H0ZM10.9203 3.77109C9.73912 0.991542 7.04681 -0.295418 4.60702 0.0570384C3.38263 0.233916 2.21629 0.825536 1.35895 1.84728C0.498879 2.87228 0 4.26915 0 5.97234H2C2 4.66797 2.37612 3.74652 2.89105 3.13285C3.40871 2.51592 4.11737 2.14854 4.89298 2.03649C6.45319 1.8111 8.26088 2.62663 9.07966 4.55332L10.9203 3.77109ZM18 5.97234C18 8.51414 16.0603 11.012 13.8347 12.9953C12.7537 13.9585 11.6681 14.745 10.8506 15.2914C10.4428 15.5639 10.1041 15.7751 9.86928 15.9172C9.75191 15.9881 9.66066 16.0417 9.59986 16.0769C9.56946 16.0945 9.5467 16.1075 9.53211 16.1158C9.52481 16.12 9.51956 16.1229 9.51643 16.1247C9.51486 16.1256 9.51382 16.1261 9.51331 16.1264C9.51306 16.1266 9.51295 16.1266 9.51296 16.1266C9.51297 16.1266 9.51309 16.1265 9.51309 16.1265C9.51324 16.1265 9.51343 16.1264 10 17C10.4866 17.8736 10.4868 17.8735 10.4871 17.8733C10.4873 17.8733 10.4876 17.8731 10.4879 17.8729C10.4884 17.8726 10.4891 17.8722 10.49 17.8717C10.4916 17.8708 10.4939 17.8696 10.4966 17.868C10.5021 17.8649 10.5098 17.8606 10.5195 17.8551C10.539 17.844 10.5668 17.8281 10.6023 17.8076C10.6733 17.7664 10.7754 17.7064 10.9042 17.6286C11.1615 17.473 11.526 17.2456 11.9619 16.9542C12.8319 16.3728 13.9963 15.5302 15.1653 14.4884C17.4397 12.4617 20 9.44565 20 5.97234H18ZM10.9203 4.55332C11.7391 2.62663 13.5468 1.8111 15.107 2.03649C15.8826 2.14854 16.5913 2.51592 17.109 3.13285C17.6239 3.74652 18 4.66797 18 5.97234H20C20 4.26915 19.5011 2.87228 18.641 1.84728C17.7837 0.825536 16.6174 0.233916 15.393 0.0570384C12.9532 -0.295418 10.2609 0.991542 9.07966 3.77109L10.9203 4.55332Z",
                            fill: "#FF0000"
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        viewBox: "0 0 18 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: ()=>setIsliked(!currentIsLiked),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M9 16C9 16 0 10.9875 0 4.97234C0 -1.04278 7 -1.54403 9 3.16221C11 -1.54403 18 -1.04278 18 4.97234C18 10.9875 9 16 9 16Z",
                            fill: "#FF0000"
                        })
                    }),
                    subTitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_CurrentItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subTitle),
                        children: subTitle
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_CurrentItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default().itemInfo),
                children: [
                    "Материал: ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: material
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_CurrentItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default().itemInfo),
                children: [
                    "Размер: ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: size
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_CurrentItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default().itemInfo),
                children: [
                    "Объем: ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: volume
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_CurrentItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default().price),
                children: [
                    "Цена от ",
                    price
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CurrentItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default().btnWrap),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_CurrentItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default().btn),
                    onClick: ()=>router.push(`${page}/${id}`),
                    children: "подробнее"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentItem);


/***/ })

};
;