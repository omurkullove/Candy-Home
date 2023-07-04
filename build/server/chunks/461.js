exports.id = 461;
exports.ids = [461];
exports.modules = {

/***/ 2006:
/***/ ((module) => {

// Exports
module.exports = {
	"customSelect": "CustomSelect_customSelect__12kwq",
	"input": "CustomSelect_input__1CoW_",
	"dropDown": "CustomSelect_dropDown__zki7Q"
};


/***/ }),

/***/ 4461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2006);
/* harmony import */ var _CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const CustomSelect = ({ selectArr , setCurrentSelect , currentSelect , setIsCurrentSelectOpen , isCurrentSelectOpen ,  })=>{
    const onClick = (title)=>{
        setCurrentSelect(title);
        setIsCurrentSelectOpen(!isCurrentSelectOpen);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_1___default().customSelect),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_1___default().input),
                onClick: ()=>setIsCurrentSelectOpen(!isCurrentSelectOpen),
                children: [
                    currentSelect,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        width: "0.8vw",
                        height: "0.5vw",
                        viewBox: "0 0 12 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M6 8L11.1962 0.5H0.803848L6 8Z",
                            fill: "black"
                        })
                    })
                ]
            }),
            isCurrentSelectOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_1___default().dropDown),
                children: selectArr.map((e)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        onClick: ()=>onClick(e.title),
                        children: e.title
                    }, e.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomSelect);


/***/ })

};
;