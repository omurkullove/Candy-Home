exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 924:
/***/ ((module) => {

// Exports
module.exports = {
	"navBarDropDowns": "PackageLeftNavBar_navBarDropDowns__hsM2F",
	"dropDownWrap": "PackageLeftNavBar_dropDownWrap__MPwEf",
	"dFlex": "PackageLeftNavBar_dFlex__lnlSs",
	"navBarDropDownTitle": "PackageLeftNavBar_navBarDropDownTitle__h94b4",
	"dropDownContent": "PackageLeftNavBar_dropDownContent___mAJE",
	"dropDownItem": "PackageLeftNavBar_dropDownItem__gpGs_",
	"navBarItems": "PackageLeftNavBar_navBarItems__ztVsM",
	"navBarItem": "PackageLeftNavBar_navBarItem__tMFE2"
};


/***/ }),

/***/ 920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PackageLeftNavBar_PackageLeftNavBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./public/packageDarichok.png
/* harmony default export */ const packageDarichok = ({"src":"/_next/static/media/packageDarichok.b7c710db.png","height":279,"width":231,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA00lEQVR42mOAgExWzYBp/RWl8zKi+m6zM8DAVNlQZhAdqV66anJK9f+Wptk3GMr3ijCAwPf/PxhBdH7Xsq0H1674f3Dj2v9r6ltcGUDgQkYUK4i+6mhUenzW9P+nOqv/b83Kr2eAAVUbyeTl5tZPpzpm/p/vH/Z/Ym71bcGGxeIMqW5W6i3+pv/L4zz/N5YU/eqqKPjfXZL1c0spgyJDgKWa5Pw4t60rYuy/zI+z+V/tbfU/0UzsBoNJAAcDDJT4OclNjXDNLvM2mN4Y7SzPwMDAAADT3lChcp+dIgAAAABJRU5ErkJggg==","blurWidth":7,"blurHeight":8});
// EXTERNAL MODULE: ./components/LeftNavBar/LeftNavBar.js
var LeftNavBar = __webpack_require__(3981);
// EXTERNAL MODULE: ./components/package/PackageLeftNavBar/PackageLeftNavBar.module.scss
var PackageLeftNavBar_module = __webpack_require__(924);
var PackageLeftNavBar_module_default = /*#__PURE__*/__webpack_require__.n(PackageLeftNavBar_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./modules/CheckBox/CheckBox.js
var CheckBox = __webpack_require__(4152);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/package/PackageLeftNavBar/PackageLeftNavBar.js








const PackageLeftNavBar = ()=>{
    const { 0: isOpen1 , 1: setIsOpen1  } = (0,external_react_.useState)(false);
    let { 0: a , 1: b  } = (0,external_react_.useState)(0);
    const open = (isOpen)=>{
        setIsOpen1(!isOpen1);
        b(ref1.current.scrollHeight);
    };
    const ref1 = /*#__PURE__*/ (0,external_react_.createRef)();
    return /*#__PURE__*/ jsx_runtime_.jsx(LeftNavBar/* default */.Z, {
        img: packageDarichok,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (PackageLeftNavBar_module_default()).navBarItems,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (PackageLeftNavBar_module_default()).navBarDropDowns,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (PackageLeftNavBar_module_default()).dropDownWrap,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (PackageLeftNavBar_module_default()).dFlex,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (PackageLeftNavBar_module_default()).navBarDropDownTitle,
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
                                            transform: "rotate(0deg)"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M9 6L0 0.803848V11.1962L9 6Z",
                                            fill: "black"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (PackageLeftNavBar_module_default()).dropDownContent,
                                ref: ref1,
                                style: isOpen1 ? {
                                    maxHeight: `${a}px`
                                } : {
                                    maxHeight: "0px",
                                    paddingBottom: "0"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (PackageLeftNavBar_module_default()).dropDownItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBox/* default */.Z, {
                                            id: "item1",
                                            children: "Вся упаковка"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (PackageLeftNavBar_module_default()).dropDownItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBox/* default */.Z, {
                                            id: "item2",
                                            children: "Картон. МГК"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (PackageLeftNavBar_module_default()).dropDownItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBox/* default */.Z, {
                                            id: "item3",
                                            children: "Жесть. Банка"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (PackageLeftNavBar_module_default()).dropDownItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckBox/* default */.Z, {
                                            id: "item4",
                                            children: "Мягкая. Текстиль"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (PackageLeftNavBar_module_default()).dropDownItem,
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
                    className: (PackageLeftNavBar_module_default()).navBarItem,
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
/* harmony default export */ const PackageLeftNavBar_PackageLeftNavBar = (PackageLeftNavBar);


/***/ })

};
;