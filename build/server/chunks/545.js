exports.id = 545;
exports.ids = [545];
exports.modules = {

/***/ 3513:
/***/ ((module) => {

// Exports
module.exports = {
	"navBarItems": "CandiesLeftNafBar_navBarItems__w3uMD",
	"navBarItem": "CandiesLeftNafBar_navBarItem__lbmT3",
	"navBarDropDowns": "CandiesLeftNafBar_navBarDropDowns__0efF3",
	"dropDownWrap": "CandiesLeftNafBar_dropDownWrap__4s_iv",
	"dFlex": "CandiesLeftNafBar_dFlex__lXBfZ",
	"navBarDropDownTitle": "CandiesLeftNafBar_navBarDropDownTitle__GRUiq",
	"dropDownContent": "CandiesLeftNafBar_dropDownContent__b4g_i",
	"dropDownItem": "CandiesLeftNafBar_dropDownItem__kZ5PH"
};


/***/ }),

/***/ 9675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/shokolad.1cc36966.png","height":217,"width":218,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1UlEQVR42mNoyU1kYkADc6ZMYMqPD2GEC1w7e4Z1WV9T7NaFM4IYkEBVbiozQ3FsiHB7bsz5uQ25//tLUv5PaKrLOXtsL+vE5mphBhAoifFfWxHl9r882vOjr77U/+gA710Rvi6X0iN8X06oLTJiaCzMbEz1c/7vbWH0P9DJ+H9coNMfG0Ot/y6m6v8zY0KuMoBAeV62TX5OXnhqmNvjSHej/91dvYubG1u29Hf3VTCwMDDAXZsRHTyjIi/jLAM6qCrMZ2YAKjx8+DTn////WaDCIJoJAHu8T4bOcDGzAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CandiesLeftNafBar_CandiesLeftNafBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/LeftNavBar/LeftNavBar.js
var LeftNavBar = __webpack_require__(3981);
;// CONCATENATED MODULE: ./public/candiesNavBar.png
/* harmony default export */ const candiesNavBar = ({"src":"/_next/static/media/candiesNavBar.c60969ab.png","height":242,"width":201,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA5UlEQVR42mNgmLqXmQEIZGYdtmOYst+DAQj+f63gOLtPioWhrLaGjQEIonInL+qqn/I/auHJyS2djlPXT1ZSYACDxefrW2Zs/39vz5b/xw8cfHm+OfHF1YlVqgwVc3nS902tfXpi7/7/57Zv/nVx8fz/j3esW80AAhX5/klbM9z/nrU2+X/FUvvXTX3z/6tCk4MZQMBuqmANwxSG/xNj0n8khi3+3xbe9flxTLAIAwjEr5YLSJ0lMH12Vfr3eZV1k5ZN7n2/uCrAmgEGJjJYmfe6yvVONmbgaYgKKWnyMmlnYGBgAAAs4F+psy363QAAAABJRU5ErkJggg==","blurWidth":7,"blurHeight":8});
// EXTERNAL MODULE: ./components/Candies/CandiesLeftNafBar/CandiesLeftNafBar.module.scss
var CandiesLeftNafBar_module = __webpack_require__(3513);
var CandiesLeftNafBar_module_default = /*#__PURE__*/__webpack_require__.n(CandiesLeftNafBar_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./modules/CheckBox/CheckBox.js
var CheckBox = __webpack_require__(4152);
;// CONCATENATED MODULE: ./components/Candies/CandiesLeftNafBar/CandiesLeftNafBar.js







const CandiesLeftNafBar = ()=>{
    const { 0: isOpen1 , 1: setIsOpen1  } = (0,external_react_.useState)(false);
    let { 0: a , 1: b  } = (0,external_react_.useState)(0);
    const open = (isOpen)=>{
        setIsOpen1(!isOpen1);
        b(ref1.current.scrollHeight);
    };
    const ref1 = /*#__PURE__*/ (0,external_react_.createRef)();
    return /*#__PURE__*/ jsx_runtime_.jsx(LeftNavBar/* default */.Z, {
        img: candiesNavBar,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (CandiesLeftNafBar_module_default()).navBarItems,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (CandiesLeftNafBar_module_default()).navBarDropDowns,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (CandiesLeftNafBar_module_default()).dropDownWrap,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (CandiesLeftNafBar_module_default()).dFlex,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (CandiesLeftNafBar_module_default()).navBarDropDownTitle,
                                        onClick: ()=>open(1),
                                        children: "Кондитерские изделия"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        viewBox: "0 0 9 12",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: isOpen1 ? {
                                            transform: "rotate(90deg)"
                                        } : {
                                            transform: "rotate(0deg"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M9 6L0 0.803848V11.1962L9 6Z",
                                            fill: "black"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (CandiesLeftNafBar_module_default()).dropDownContent,
                                ref: ref1,
                                style: isOpen1 ? {
                                    maxHeight: `${a}px`
                                } : {
                                    maxHeight: "0px",
                                    paddingBottom: "0"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (CandiesLeftNafBar_module_default()).dropDownItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBox/* default */.Z, {
                                            id: "item1",
                                            children: "Весь ассортимент"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (CandiesLeftNafBar_module_default()).dropDownItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBox/* default */.Z, {
                                            id: "item2",
                                            children: "Шоколад"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (CandiesLeftNafBar_module_default()).dropDownItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBox/* default */.Z, {
                                            id: "item3",
                                            children: "Батончики."
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (CandiesLeftNafBar_module_default()).dropDownItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBox/* default */.Z, {
                                            id: "item4",
                                            children: "Драже"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (CandiesLeftNafBar_module_default()).dropDownItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBox/* default */.Z, {
                                            id: "item5",
                                            children: "Зефир"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (CandiesLeftNafBar_module_default()).navBarItem,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "gradientText",
                                children: "Акции"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "gradientText",
                                children: "Брендирование"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "gradientText",
                                children: "Сертификаты"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "gradientText",
                                children: "Оформить Заказ"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "gradientText",
                                children: "Презентация компании"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "gradientText",
                                children: "Скачать Каталог"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "gradientText",
                                children: "Скачать прайс"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const CandiesLeftNafBar_CandiesLeftNafBar = (CandiesLeftNafBar);


/***/ })

};
;