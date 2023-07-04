exports.id = 772;
exports.ids = [772];
exports.modules = {

/***/ 7337:
/***/ ((module) => {

// Exports
module.exports = {
	"footerBtn": "footer_footerBtn__JpZU2",
	"modalBtn": "footer_modalBtn__0TEj7",
	"img": "footer_img__wGCjk",
	"btnText": "footer_btnText__hB_mw",
	"navBarBtn": "footer_navBarBtn__t_4qN",
	"footer": "footer_footer__CKQ67",
	"items": "footer_items__JHZTB",
	"item": "footer_item__SaRpL",
	"title": "footer_title__Q35DX",
	"text": "footer_text__4XzrK",
	"contacts": "footer_contacts__TZVv7",
	"contactItem": "footer_contactItem__r___n"
};


/***/ }),

/***/ 4584:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__FfSP_",
	"bg": "header_bg___Omm9",
	"totalPrice": "header_totalPrice__Gmfhw",
	"sticky": "header_sticky__EF3LI",
	"navBar": "header_navBar__7zqTT",
	"links": "header_links___g1jf",
	"bottomLine": "header_bottomLine__c5UFo",
	"topLine": "header_topLine__fa2dx",
	"link": "header_link__UsA8X",
	"activeLink": "header_activeLink__w39ti"
};


/***/ }),

/***/ 353:
/***/ ((module) => {

// Exports
module.exports = {
	"helpModal": "helpModal_helpModal__kfRTS",
	"content": "helpModal_content__2tFtj",
	"closeBtn": "helpModal_closeBtn__TpqKr",
	"wrap": "helpModal_wrap__j9IzP",
	"chooseMetod": "helpModal_chooseMetod__ZMiIV",
	"input": "helpModal_input__7yyJd",
	"submitBlock": "helpModal_submitBlock__I_EUI",
	"submit": "helpModal_submit__xk5Rr"
};


/***/ }),

/***/ 8772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MainContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/header.module.scss
var header_module = __webpack_require__(4584);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./public/headerBg.png
/* harmony default export */ const headerBg = ({"src":"/_next/static/media/headerBg.84b932a0.png","height":329,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAPElEQVR42mPIKnUpagxIrJtdWbOuon5RStO5utZJ8UWbGao7vGdNDJu5LKdrZn3j7GVNk5a2tFZGNrcBAFFyGGUR+R0+AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Header/Header.js







const Header = ()=>{
    const router = (0,router_.useRouter)();
    const links = [
        {
            id: 1,
            title: "Главная",
            href: "/"
        },
        {
            id: 2,
            title: "Сладости",
            href: "/candies"
        },
        {
            id: 3,
            title: "Упаковка",
            href: "/package"
        },
        {
            id: 4,
            title: "Подарки",
            href: "/gifts"
        },
        {
            id: 5,
            title: "Конструктор",
            href: "/constructor"
        },
        {
            id: 6,
            title: "Как заказать",
            href: "/howToOrder"
        },
        {
            id: 7,
            title: "Контакты",
            href: "/contacts"
        },
        {
            id: 8,
            title: "Развлечения",
            href: "/entertainment"
        }, 
    ];
    const { 0: currentPage , 1: setCurrentPage  } = (0,external_react_.useState)(router.route);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: (header_module_default()).header,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (header_module_default()).bg,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: headerBg,
                            alt: "headerBg",
                            priority: true,
                            width: 1540
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (header_module_default()).totalPrice,
                            children: [
                                "Ваш заказ: ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "0 руб."
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (header_module_default()).sticky,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (header_module_default()).navBar,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (header_module_default()).topLine
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (header_module_default()).links,
                                children: links.map((e)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: e.href,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: currentPage === e.href ? (header_module_default()).activeLink : (header_module_default()).link,
                                            onClick: ()=>setCurrentPage(e.href),
                                            children: e.title
                                        })
                                    }, e.id))
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (header_module_default()).bottomLine
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/footer.module.scss
var footer_module = __webpack_require__(7337);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./public/darichok.svg
/* harmony default export */ const darichok = ({"src":"/_next/static/media/darichok.2876726d.svg","height":45,"width":45});
;// CONCATENATED MODULE: ./components/Footer/Footer.js






const Footer = ({ setIsOpen  })=>{
    const footerArr = [
        {
            title: "Главнвя",
            href: "/",
            obj: [
                {
                    id: 1,
                    title: "Презентация компании"
                },
                {
                    id: 2,
                    title: "Наши преимущества"
                },
                {
                    id: 3,
                    title: "Фото с выставок, производства, видео"
                },
                {
                    id: 4,
                    title: "Акции, скидки"
                },
                {
                    id: 5,
                    title: "История в буклетах "
                },
                {
                    id: 6,
                    title: "Отзывы клиентов, благодарности"
                }, 
            ]
        },
        {
            title: "Сладости",
            href: "/candies",
            obj: [
                {
                    id: 7,
                    title: "Шоколад. Штучные изделия"
                },
                {
                    id: 8,
                    title: "Десерты. Вафли, печенье"
                },
                {
                    id: 9,
                    title: "Весовые конфеты"
                },
                {
                    id: 10,
                    title: "Бакалея"
                }, 
            ]
        },
        {
            title: "Упаковка",
            href: "/package",
            obj: [
                {
                    id: 11,
                    title: "Картон. МГК"
                },
                {
                    id: 22,
                    title: "Жесть. Банка"
                },
                {
                    id: 33,
                    title: "Тубы. Переплетный картон"
                },
                {
                    id: 44,
                    title: "Дерево. Кожа. ВИП"
                },
                {
                    id: 56,
                    title: "Игрушки"
                },
                {
                    id: 67,
                    title: "Игры. Вложения"
                },
                {
                    id: 78,
                    title: "Распродажа"
                }, 
            ]
        },
        {
            title: "Подарки",
            href: "/gifts",
            obj: [
                {
                    id: 12,
                    title: "Модели подарков, Без упаковки"
                },
                {
                    id: 1252,
                    title: "Подарки в МГК и Картоне"
                },
                {
                    id: 433,
                    title: "Подарки в Жесть Банке"
                },
                {
                    id: 24,
                    title: "Подарки Мягкие"
                },
                {
                    id: 465,
                    title: "Подарки в Тубах"
                },
                {
                    id: 1246,
                    title: "Подарки ВИП"
                },
                {
                    id: 12357,
                    title: "Подарки для Взрослых"
                },
                {
                    id: 512358,
                    title: "Корпоративные подарки"
                }, 
            ]
        },
        {
            title: "Развлечение",
            href: "/entertainment",
            obj: [
                {
                    id: 12351,
                    title: "Конкурсы"
                },
                {
                    id: 5682,
                    title: "Анекдоты"
                },
                {
                    id: 4563,
                    title: "Поздравления"
                }, 
            ]
        }, 
    ];
    const { 0: isFooterOpen , 1: setIsFooterOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (footer_module_default()).footerBtn,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (footer_module_default()).navBarBtn,
                            onClick: ()=>setIsFooterOpen(!isFooterOpen),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "gradientText",
                                children: "Навигатор сайта"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (footer_module_default()).modalBtn,
                            onClick: ()=>setIsOpen(true),
                            style: {
                                zIndex: 9999
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (footer_module_default()).btnText,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "gradientText",
                                        children: "Ваш менеджер"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (footer_module_default()).img,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: darichok,
                                        objectFit: "contain",
                                        alt: "img"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: (footer_module_default()).footer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: isFooterOpen ? (footer_module_default()).items : "d-none",
                            children: [
                                footerArr.map((e)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (footer_module_default()).item,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: e.href,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (footer_module_default()).title,
                                                        children: e.title
                                                    })
                                                })
                                            }),
                                            e.obj.map((i)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (footer_module_default()).text,
                                                            children: i.title
                                                        })
                                                    })
                                                }, i.id))
                                        ]
                                    }, e.title)),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (footer_module_default()).item,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (footer_module_default()).title,
                                            children: "Конструктор подарков"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (footer_module_default()).title,
                                            children: "Как заказать"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (footer_module_default()).title,
                                            children: "Контакты"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (footer_module_default()).contacts,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "mailto:darica@bk.ru",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: (footer_module_default()).contactItem,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "19",
                                                height: "15",
                                                viewBox: "0 0 19 15",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M14.7273 11.971L14.7778 12.0169L14.8283 11.971L17.7333 9.327L18.8886 10.3784L14.7778 14.1198L11.9336 11.5313L13.0889 10.4798L14.7273 11.971ZM1.68889 11.222H10.0583V12.6091H1.68889C0.794619 12.6091 0.075 11.9445 0.075 11.147V1.92432C0.075 1.12682 0.794619 0.462207 1.68889 0.462207H15.2C16.0943 0.462207 16.8139 1.12682 16.8139 1.92432V7.2292H15.275V3.46143V3.33248L15.1629 3.39624L8.44444 7.21792L1.72597 3.39624L1.61389 3.33248V3.46143V11.147V11.222H1.68889ZM15.2371 1.98951L15.4835 1.84932H15.2H1.68889H1.40535L1.65181 1.98951L8.40736 5.83228L8.44444 5.85338L8.48153 5.83228L15.2371 1.98951Z",
                                                    fill: "black",
                                                    stroke: "black",
                                                    strokeWidth: "0.15"
                                                })
                                            }),
                                            "darica@bk.ru"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "Darica.ru",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: (footer_module_default()).contactItem,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "17",
                                                height: "18",
                                                viewBox: "0 0 17 18",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M1.08163 8.3684H3.72725C3.75912 7.44764 3.87387 6.56467 4.05875 5.74365H1.77863C1.38244 6.56787 1.14603 7.45815 1.08163 8.3684V8.3684ZM2.39594 4.69375H4.34563C4.52271 4.13605 4.7503 3.59527 5.02563 3.07795C5.20934 2.73469 5.4215 2.40705 5.65994 2.09839C4.34347 2.63781 3.21084 3.53842 2.39594 4.69375V4.69375ZM8.5 0.494141C6.24566 0.494141 4.08365 1.37905 2.48959 2.95421C0.895533 4.52937 0 6.66574 0 8.89335C0 11.121 0.895533 13.2573 2.48959 14.8325C4.08365 16.4076 6.24566 17.2926 8.5 17.2926C10.7543 17.2926 12.9163 16.4076 14.5104 14.8325C16.1045 13.2573 17 11.121 17 8.89335C17 6.66574 16.1045 4.52937 14.5104 2.95421C12.9163 1.37905 10.7543 0.494141 8.5 0.494141V0.494141ZM7.96875 1.62488C7.25687 1.83906 6.55031 2.4858 5.96381 3.57245C5.78 3.91262 5.61319 4.28848 5.46656 4.69375H7.96875V1.62488ZM7.96875 5.74365H5.14994C4.94096 6.60436 4.82064 7.48375 4.79081 8.3684H7.96875V5.74365ZM9.03125 8.3684V5.74365H11.8501C12.0487 6.54682 12.1752 7.43189 12.2092 8.3684H9.03125ZM7.96875 9.4183H4.79188C4.82135 10.3029 4.94132 11.1823 5.14994 12.0431H7.96875V9.4183ZM9.03125 12.0431V9.4183H12.2081C12.1787 10.3029 12.0587 11.1823 11.8501 12.0431H9.03125ZM7.96875 13.093H5.46656C5.61319 13.4982 5.78 13.8741 5.96381 14.2142C6.55031 15.3009 7.25794 15.9466 7.96875 16.1618V13.093ZM5.65994 15.6883C5.42148 15.3797 5.20932 15.052 5.02563 14.7088C4.7503 14.1914 4.52271 13.6506 4.34563 13.093H2.39594C3.21084 14.2483 4.34347 15.1489 5.65994 15.6883V15.6883ZM1.77863 12.0431H4.05875C3.86661 11.1801 3.75563 10.3014 3.72725 9.4183H1.08163C1.1475 10.3527 1.39081 11.2378 1.77863 12.0431ZM11.3401 15.6883C12.6565 15.1489 13.7892 14.2483 14.6041 13.093H12.6554C12.4779 13.6507 12.25 14.1914 11.9744 14.7088C11.7907 15.052 11.5785 15.3797 11.3401 15.6883V15.6883ZM11.5334 13.093H9.03125V16.1618C9.74313 15.9476 10.4497 15.3009 11.0362 14.2142C11.2294 13.853 11.3956 13.4782 11.5334 13.093ZM12.9413 12.0431H15.2214C15.6092 11.2378 15.8525 10.3527 15.9184 9.4183H13.2727C13.2444 10.3014 13.1334 11.1801 12.9413 12.0431ZM13.2727 8.3684H15.9184C15.8539 7.45815 15.6175 6.56788 15.2214 5.74365H12.9413C13.1261 6.56467 13.2409 7.44764 13.2727 8.3684ZM12.6544 4.69375C12.4772 4.13608 12.2496 3.59529 11.9744 3.07795C11.7907 2.73467 11.5785 2.40703 11.3401 2.09839C12.6565 2.63781 13.7892 3.53842 14.6041 4.69375H12.6554H12.6544ZM11.5334 4.69375H9.03125V1.62488C9.74313 1.83906 10.4497 2.4858 11.0362 3.57245C11.22 3.91262 11.3868 4.28848 11.5334 4.69375Z",
                                                    fill: "black"
                                                })
                                            }),
                                            "Darica.ru"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (footer_module_default()).contactItem,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "17",
                                                height: "18",
                                                viewBox: "0 0 17 18",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M1.16866 8.20768C5.73205 5.83704 8.77503 4.27417 10.2976 3.51906C14.6448 1.36309 15.5481 0.988573 16.1369 0.976206C16.2664 0.973486 16.5559 1.01175 16.7435 1.19321C16.9018 1.34643 16.9454 1.55341 16.9663 1.69868C16.9871 1.84395 17.0131 2.17488 16.9924 2.43346C16.7569 5.38482 15.7375 12.547 15.2189 15.8526C14.9995 17.2513 14.5674 17.7203 14.1492 17.7662C13.2401 17.8659 12.5498 17.0498 11.6694 16.3617C10.2916 15.2848 9.5133 14.6145 8.17597 13.5637C6.63045 12.3493 7.63235 11.6819 8.51313 10.5911C8.74364 10.3056 12.7489 5.96171 12.8264 5.56766C12.8361 5.51837 12.8451 5.33467 12.7536 5.23766C12.6621 5.14066 12.527 5.17383 12.4295 5.20021C12.2913 5.23761 10.0904 6.97219 5.82663 10.404C5.2019 10.9155 4.63604 11.1647 4.12904 11.1516C3.57012 11.1372 2.49499 10.7748 1.69573 10.465C0.715411 10.0851 -0.063727 9.88418 0.00411841 9.23889C0.0394565 8.90278 0.427637 8.55905 1.16866 8.20768Z",
                                                    fill: "black"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                width: "21",
                                                height: "21",
                                                viewBox: "0 0 21 21",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                        x: "1",
                                                        y: "1",
                                                        width: "19",
                                                        height: "18.751",
                                                        rx: "8",
                                                        stroke: "black",
                                                        strokeWidth: "2"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M9.30462 12.1409V6.91699H11.3572V9.81026C12.9993 9.61737 14.037 7.80104 14.3506 6.91699H16.4887C16.2321 8.76547 14.5359 10.1853 13.6664 10.6139C15.1203 11.056 16.9163 13.1857 16.9163 14.3913H14.6927C13.8716 12.3338 12.1269 11.7123 11.3572 11.6587V14.3913C6.52505 14.7127 3.9593 10.9354 4.0876 6.91699H6.22572C6.35401 10.6943 8.40661 11.8195 9.30462 12.1409Z",
                                                        fill: "black"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "20",
                                                height: "21",
                                                viewBox: "0 0 20 21",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M15.34 4.40725C15.1027 4.40725 14.8707 4.4768 14.6733 4.60709C14.476 4.73739 14.3222 4.92258 14.2313 5.13925C14.1405 5.35592 14.1168 5.59434 14.1631 5.82436C14.2094 6.05437 14.3236 6.26566 14.4915 6.43149C14.6593 6.59732 14.8731 6.71026 15.1059 6.75601C15.3387 6.80176 15.5799 6.77828 15.7992 6.68853C16.0185 6.59879 16.2059 6.4468 16.3378 6.2518C16.4696 6.0568 16.54 5.82755 16.54 5.59302C16.54 5.27854 16.4136 4.97693 16.1885 4.75456C15.9635 4.53218 15.6583 4.40725 15.34 4.40725ZM19.94 6.79856C19.9206 5.97869 19.7652 5.16753 19.48 4.39737C19.2257 3.73841 18.83 3.14172 18.32 2.64836C17.8248 2.14186 17.2196 1.75328 16.55 1.512C15.7727 1.22164 14.9508 1.06458 14.12 1.04757C13.06 0.988281 12.72 0.988281 10 0.988281C7.28 0.988281 6.94 0.988281 5.88 1.04757C5.04915 1.06458 4.22734 1.22164 3.45 1.512C2.78168 1.75572 2.17693 2.14397 1.68 2.64836C1.16743 3.13767 0.774176 3.73575 0.53 4.39737C0.236161 5.1655 0.07721 5.97756 0.0599999 6.79856C-5.58794e-08 7.84599 0 8.18196 0 10.8697C0 13.5575 -5.58794e-08 13.8934 0.0599999 14.9409C0.07721 15.7618 0.236161 16.5739 0.53 17.342C0.774176 18.0037 1.16743 18.6017 1.68 19.091C2.17693 19.5954 2.78168 19.9837 3.45 20.2274C4.22734 20.5178 5.04915 20.6748 5.88 20.6918C6.94 20.7511 7.28 20.7511 10 20.7511C12.72 20.7511 13.06 20.7511 14.12 20.6918C14.9508 20.6748 15.7727 20.5178 16.55 20.2274C17.2196 19.9861 17.8248 19.5975 18.32 19.091C18.8322 18.5995 19.2283 18.0023 19.48 17.342C19.7652 16.5719 19.9206 15.7607 19.94 14.9409C19.94 13.8934 20 13.5575 20 10.8697C20 8.18196 20 7.84599 19.94 6.79856ZM18.14 14.8223C18.1327 15.4495 18.0178 16.071 17.8 16.6602C17.6403 17.0903 17.3839 17.4788 17.05 17.7966C16.7256 18.1232 16.3332 18.3761 15.9 18.5377C15.3037 18.7529 14.6748 18.8665 14.04 18.8737C13.04 18.9231 12.67 18.9329 10.04 18.9329C7.41 18.9329 7.04 18.9329 6.04 18.8737C5.38089 18.8859 4.72459 18.7856 4.1 18.5772C3.68578 18.4073 3.31136 18.1551 3 17.8361C2.66809 17.5187 2.41484 17.1298 2.26 16.6997C2.01586 16.1021 1.88044 15.4665 1.86 14.8223C1.86 13.8341 1.8 13.4685 1.8 10.8697C1.8 8.27089 1.8 7.90528 1.86 6.91714C1.86448 6.27589 1.98295 5.6404 2.21 5.03966C2.38605 4.62258 2.65627 4.25079 3 3.95271C3.30381 3.61295 3.67929 3.34312 4.1 3.16219C4.70955 2.94485 5.352 2.83125 6 2.82623C7 2.82623 7.37 2.76694 10 2.76694C12.63 2.76694 13 2.76694 14 2.82623C14.6348 2.83342 15.2637 2.94702 15.86 3.16219C16.3144 3.32885 16.7223 3.59979 17.05 3.95271C17.3777 4.25624 17.6338 4.62735 17.8 5.03966C18.0223 5.64138 18.1373 6.2766 18.14 6.91714C18.19 7.90528 18.2 8.27089 18.2 10.8697C18.2 13.4685 18.19 13.8341 18.14 14.8223ZM10 5.80053C8.98581 5.80249 7.99496 6.10145 7.15265 6.65964C6.31035 7.21784 5.65438 8.01021 5.26763 8.93665C4.88089 9.86309 4.78072 10.882 4.97979 11.8647C5.17886 12.8474 5.66824 13.7497 6.38608 14.4576C7.10392 15.1656 8.01801 15.6474 9.01286 15.8422C10.0077 16.037 11.0387 15.936 11.9755 15.5521C12.9123 15.1681 13.7129 14.5184 14.2761 13.685C14.8394 12.8515 15.14 11.8719 15.14 10.8697C15.1413 10.2028 15.0092 9.54224 14.7512 8.92598C14.4933 8.30973 14.1146 7.74995 13.6369 7.27885C13.1592 6.80774 12.5919 6.4346 11.9678 6.1809C11.3436 5.92719 10.6749 5.79793 10 5.80053ZM10 14.1602C9.34139 14.1602 8.69757 13.9672 8.14995 13.6057C7.60234 13.2441 7.17552 12.7302 6.92348 12.1289C6.67144 11.5277 6.6055 10.8661 6.73398 10.2278C6.86247 9.58946 7.17963 9.00315 7.64533 8.54296C8.11104 8.08277 8.70439 7.76938 9.35035 7.64242C9.99631 7.51545 10.6659 7.58061 11.2743 7.82967C11.8828 8.07872 12.4029 8.50047 12.7688 9.04159C13.1347 9.58272 13.33 10.2189 13.33 10.8697C13.33 11.3018 13.2439 11.7297 13.0765 12.1289C12.9092 12.5282 12.6639 12.8909 12.3547 13.1964C12.0454 13.502 11.6784 13.7444 11.2743 13.9097C10.8703 14.0751 10.4373 14.1602 10 14.1602Z",
                                                    fill: "black"
                                                })
                                            })
                                        }),
                                        "@Darica"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (footer_module_default()).contactItem,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            placeholder: "E-mail"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "ПОДПИСАТЬСЯ"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

// EXTERNAL MODULE: ./styles/helpModal.module.scss
var helpModal_module = __webpack_require__(353);
var helpModal_module_default = /*#__PURE__*/__webpack_require__.n(helpModal_module);
;// CONCATENATED MODULE: ./components/HelpModal/HelpModal.js


const HelpModal = ({ isOpen , setIsOpen  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: isOpen ? (helpModal_module_default()).helpModal : "d-none",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (helpModal_module_default()).content,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (helpModal_module_default()).closeBtn,
                    onClick: ()=>setIsOpen(false),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: (helpModal_module_default()).wrap,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Чем я могу помочь?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            required: true,
                            placeholder: "Ваш текст"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "ФИО или Организация "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            required: true,
                            placeholder: "Ваш текст",
                            name: "name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Ваш город"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            required: true,
                            placeholder: "Ваш текст",
                            name: "city"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Выберите форму связи:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (helpModal_module_default()).chooseMetod,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (helpModal_module_default()).input,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "number",
                                            required: true,
                                            placeholder: "Ваш телефон",
                                            name: "phone"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (helpModal_module_default()).input,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "number",
                                            required: true,
                                            placeholder: "WhatsApp",
                                            name: "phone"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (helpModal_module_default()).input,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            required: true,
                                            placeholder: "E-mail",
                                            name: "email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "*"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (helpModal_module_default()).submitBlock,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (helpModal_module_default()).submit,
                                type: "submit",
                                children: "Отправить"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const HelpModal_HelpModal = (HelpModal);

;// CONCATENATED MODULE: ./components/MainContainer.js







const MainContainer = ({ children  })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "My page title"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "darica",
                        content: "Магазин сладостей, игрушек, оберток"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {
                setIsOpen: setIsOpen
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HelpModal_HelpModal, {
                isOpen: isOpen,
                setIsOpen: setIsOpen
            })
        ]
    });
};
/* harmony default export */ const components_MainContainer = (MainContainer);


/***/ })

};
;