exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 8243:
/***/ ((module) => {

// Exports
module.exports = {
	"navBarDropDowns": "GiftsLeftNavBar_navBarDropDowns__33NQW",
	"dropDownWrap": "GiftsLeftNavBar_dropDownWrap__VKkAn",
	"dFlex": "GiftsLeftNavBar_dFlex__VQCbB",
	"navBarDropDownTitle": "GiftsLeftNavBar_navBarDropDownTitle__Tk05h",
	"dropDownContent": "GiftsLeftNavBar_dropDownContent__4kki5",
	"dropDownItem": "GiftsLeftNavBar_dropDownItem__Eiydn",
	"navBarItems": "GiftsLeftNavBar_navBarItems__Ut7j1",
	"navBarItem": "GiftsLeftNavBar_navBarItem__RDMFq"
};


/***/ }),

/***/ 4998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ GiftsLeftNavBar_GiftsLeftNavBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/LeftNavBar/LeftNavBar.js
var LeftNavBar = __webpack_require__(3981);
;// CONCATENATED MODULE: ./public/giftsNavBarImg.png
/* harmony default export */ const giftsNavBarImg = ({"src":"/_next/static/media/giftsNavBarImg.d5949b40.png","height":242,"width":201,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA5UlEQVR42mMAgdUMDLy+U3d9d6ja4APiPyhucLteU27BwLD0SsH0niVH5jZN/p+Rurh3SQeD1MKOiP8zpgd8ZlBbeeHRinmr/l9fMf1317rj/xlKtq9fN9HuxdpZMccZGHyCOE8ePnj/0vXL/88tW/jvwNTF/58e2L75PwMDMwMInFmwKPvSppX/X5a6f3uU7PL/VGd7CwMMXC0qzr6bnPT/XHjsj30uof/PWRvPYICB07NTK7ZMbvjfWDPpf0NS8TQGBgaGi+sYGBnWJEbF78ny+jS7qfbltpaM9ydLDPPBGip8mAFZOGxFvrxHAwAAAABJRU5ErkJggg==","blurWidth":7,"blurHeight":8});
// EXTERNAL MODULE: ./components/Gifts/GiftsLeftNavBar/GiftsLeftNavBar.module.scss
var GiftsLeftNavBar_module = __webpack_require__(8243);
var GiftsLeftNavBar_module_default = /*#__PURE__*/__webpack_require__.n(GiftsLeftNavBar_module);
// EXTERNAL MODULE: ./modules/CheckBox/CheckBox.js
var CheckBox = __webpack_require__(4152);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Gifts/GiftsLeftNavBar/GiftsLeftNavBar.js







const GiftsLeftNavBar = ()=>{
    const { 0: isOpen1 , 1: setIsOpen1  } = (0,external_react_.useState)(false);
    let { 0: a , 1: b  } = (0,external_react_.useState)(0);
    const open = (isOpen)=>{
        setIsOpen1(!isOpen1);
        b(ref1.current.scrollHeight);
    };
    const ref1 = /*#__PURE__*/ (0,external_react_.createRef)();
    return /*#__PURE__*/ jsx_runtime_.jsx(LeftNavBar/* default */.Z, {
        img: giftsNavBarImg,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (GiftsLeftNavBar_module_default()).navBarItems,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (GiftsLeftNavBar_module_default()).navBarDropDowns,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (GiftsLeftNavBar_module_default()).dropDownWrap,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (GiftsLeftNavBar_module_default()).dFlex,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (GiftsLeftNavBar_module_default()).navBarDropDownTitle,
                                        onClick: ()=>open(1),
                                        children: "Категории упаковки"
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
                                className: (GiftsLeftNavBar_module_default()).dropDownContent,
                                ref: ref1,
                                style: isOpen1 ? {
                                    maxHeight: `${a}px`
                                } : {
                                    maxHeight: "0px",
                                    paddingBottom: "0"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (GiftsLeftNavBar_module_default()).dropDownItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBox/* default */.Z, {
                                            id: "item1",
                                            children: "Вся упаковка"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (GiftsLeftNavBar_module_default()).dropDownItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBox/* default */.Z, {
                                            id: "item2",
                                            children: "Картон. МГК"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (GiftsLeftNavBar_module_default()).dropDownItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBox/* default */.Z, {
                                            id: "item3",
                                            children: "Жесть. Банка"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (GiftsLeftNavBar_module_default()).dropDownItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBox/* default */.Z, {
                                            id: "item4",
                                            children: "Мягкая. Текстиль"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (GiftsLeftNavBar_module_default()).dropDownItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBox/* default */.Z, {
                                            id: "item5",
                                            children: "Тубы. Переплетный картон"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (GiftsLeftNavBar_module_default()).navBarItem,
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
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "gradientText",
                                children: "Избранное"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const GiftsLeftNavBar_GiftsLeftNavBar = (GiftsLeftNavBar);


/***/ })

};
;