(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{8719:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts",function(){return n(9562)}])},2332:function(e,t){"use strict";t.Z={src:"/_next/static/media/profile.33b3addd.png",height:173,width:185,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA0UlEQVR42g3MvU3DQBxA8fc/n88OGERJiUSFlIYJWIMNGIB5WIQCiQIpE4QGRQglQQQn+Is4Pp/v4uZVPz35Xa06naaGEJi/PTOfvXJ3/xAur67lUFeFiowxSZax/f7CbhbcTm9G9CKiNXE6uVDBe0DYLT85n2QYnVAs3tk3DSIS1FiEQJmv2ZUF3WHPx+yJrilRkRalRHC2o2wFklN677DTxxG3iIDkmzzUVuj6AR0c7bj+9zHD4Ilciy7/alt1wZydJPTO41WMGRzbsuJnubZHQ5JogaeJkJQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7}},3981:function(e,t,n){"use strict";var a=n(5893);n(7294);var r=n(4796),i=n.n(r),s=n(5675),l=n.n(s),o=function(e){var t=e.children,n=e.img;return(0,a.jsx)("div",{className:i().navBar,children:(0,a.jsxs)("div",{className:i().navBarContent,children:[(0,a.jsx)("div",{className:i().navBarImg,children:(0,a.jsx)(l(),{src:n,alt:"mainNavBarImg"})}),t]})})};t.Z=o},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=s.default,i=(null==t?void 0:t.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(a(e,Promise)?i.loader=function(){return e}:"function"==typeof e?i.loader=e:"object"==typeof e&&(i=r({},i,e)),(i=r({},i,t)).suspense&&(delete i.ssr,delete i.loading),i.loadableGenerated&&delete(i=r({},i,i.loadableGenerated)).loadableGenerated,"boolean"==typeof i.ssr&&!i.suspense){if(!i.ssr)return delete i.ssr,l(n,i);delete i.ssr}return n(i)},t.noSSR=l;var r=n(6495).Z,i=n(2648).Z,s=(i(n(7294)),i(n(4302)));function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=a},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(9658).Z,r=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(6495).Z,s=(0,n(2648).Z)(n(7294)),l=n(6319),o=n(7294).useSyncExternalStore,u=[],d=[],c=!1;function h(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var f=function(){function e(t,n){a(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return r(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return function(e,t){var n=function(){if(!_){var t=new f(e,h);_={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return _.promise()},a=function(){n();var e=s.default.useContext(l.LoadableContext);e&&Array.isArray(h.modules)&&h.modules.forEach(function(t){e(t)})},r=function(e,t){a();var n=o(_.subscribe,_.getCurrentValue,_.getCurrentValue);return s.default.useImperativeHandle(t,function(){return{retry:_.retry}},[]),s.default.useMemo(function(){var t;return n.loading||n.error?s.default.createElement(h.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:_.retry}):n.loaded?s.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null},[e,n])},u=function(e,t){return a(),s.default.createElement(h.lazy,i({},e,{ref:t}))},h=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);h.suspense&&(h.lazy=s.default.lazy(h.loader));var _=null;if(!c){var p=h.webpack?h.webpack():h.modules;p&&d.push(function(e){var t=!0,a=!1,r=void 0;try{for(var i,s=p[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var l=i.value;if(-1!==e.indexOf(l))return n()}}catch(o){a=!0,r=o}finally{try{t||null==s.return||s.return()}finally{if(a)throw r}}})}var v=h.suspense?u:r;return v.preload=function(){return n()},v.displayName="LoadableComponent",s.default.forwardRef(v)}(h,e)}function p(e,t){for(var n=[];e.length;){var a=e.pop();n.push(a(t))}return Promise.all(n).then(function(){if(e.length)return p(e,t)})}_.preloadAll=function(){return new Promise(function(e,t){p(u).then(e,t)})},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var n=function(){return c=!0,t()};p(d,e).then(n,n)})},window.__NEXT_PRELOADREADY=_.preloadReady,t.default=_},9562:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var a=n(5893);n(7294);var r=n(1799),i=n(9396),s=n(3981),l={src:"/_next/static/media/ContactsGnom.cdee8313.png",height:288,width:201,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAtElEQVR42mN43prFyAACa/+zM/Qck2YAgbTDEDEGhwWWtXmTzxn5T20CcRvaF7EyLF2ywnJH34T/l6e2/V87c/E/hs49RgwgcLihWvPc1Pa7dy6d+X/n9LH/R9atrWSAgSu23LeuxPn+vxAbeePumjkXkwsnyjP8Z2BgXplfvnJbYv7/E01h319uC7dhgIHFZWZaMyvyHs2vTr63JMk0gwEGVnrYK89jYDBiYWAQmW9hCLYcAHpFSGPEJshdAAAAAElFTkSuQmCC",blurWidth:6,blurHeight:8};n(1664);var o=n(8881),u=n.n(o),d=function(){return(0,a.jsx)(s.Z,{img:l,children:(0,a.jsx)("div",{className:u().block,children:[{id:1,title:"Сладкие подарки",path:"#"},{id:2,title:"Новогодние подарки",path:"#"},{id:3,title:"Корпоративные подарки",path:"#"},{id:4,title:"Статьи",path:"#"},{id:5,title:"Презентация компании",path:"#"},{id:6,title:"Наши преимущества",path:"#"},{id:7,title:"История компании",path:"#"},{id:8,title:"Акции, скидки",path:"#"},{id:9,title:"Фото с выставок, производства, видео",path:"#"},{id:10,title:"История в буклетах",path:"#"},{id:11,title:"Отзывы клиентов, благодарности ",path:"#"},].map(function(e){return(0,a.jsx)("p",{className:u().link,children:e.title},e.id)})})})},c=n(6529),h=n.n(c),f=n(5675),_=n.n(f),p=n(6066),v=n(2332);n(8322),n(8745);var m={src:"/_next/static/media/instagram.e37bc4a6.svg",height:21,width:20},b={src:"/_next/static/media/mail.06dcb230.svg",height:14,width:19},x={src:"/_next/static/media/planet.463301e9.svg",height:17,width:17},g={src:"/_next/static/media/Telegram.442d6546.svg",height:18,width:17},A={src:"/_next/static/media/VK.6f997906.svg",height:21,width:21},y=n(5152),j=n.n(y),k=n(1055),w=n.n(k),C=function(e){var t=e.worker,n=t.name,r=t.post,i=t.photo;return t.id,(0,a.jsxs)("div",{className:w().parent,children:[(0,a.jsx)(_(),{src:i,alt:"profile",width:"170",height:"170"}),(0,a.jsx)("h4",{children:n}),(0,a.jsx)("p",{children:r})]})},N=j()(function(){return Promise.all([n.e(269),n.e(596)]).then(n.bind(n,5596))},{loadableGenerated:{webpack:function(){return[5596]}},ssr:!1}),E=function(){var e=[{id:1,name:"Елена Ивановна",post:"Cтарший менеджер",photo:v.Z},{id:2,name:"Елена Ивановна",post:"Cтарший менеджер",photo:v.Z},{id:3,name:"Елена Ивановна",post:"Cтарший менеджер",photo:v.Z},{id:4,name:"Елена Ивановна",post:"Cтарший менеджер",photo:v.Z},{id:5,name:"Елена Ивановна",post:"Cтарший менеджер",photo:v.Z},{id:6,name:"Елена Ивановна",post:"Cтарший менеджер",photo:v.Z},{id:7,name:"Елена Ивановна",post:"Cтарший менеджер",photo:v.Z},{id:8,name:"Елена Ивановна",post:"Cтарший менеджер",photo:v.Z},];return(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)(d,{}),(0,a.jsx)("div",{className:"mainContent",children:(0,a.jsxs)("div",{className:h().parent,children:[(0,a.jsxs)("div",{className:h().block1,children:[(0,a.jsx)("p",{className:h().title,children:"Наш выставочный зал можно посетить по адресу:"}),(0,a.jsx)("p",{className:h().subTitle,children:"г.Новосибирск, ул. Добролюбова 16а, вход 2, 2 этаж офис 5."}),(0,a.jsxs)("ul",{className:h().list,children:[(0,a.jsx)("li",{children:"Телефон офиса +7 (383) 311-08-56"}),(0,a.jsx)("li",{children:"+7-913-007-27-05 приемная руководителя"}),(0,a.jsx)("li",{children:"+7-913-912-98-10 отдел продаж"}),(0,a.jsx)("li",{children:"+7-913-010-17-30 отдел продаж"}),(0,a.jsx)("li",{children:"+7-913-700-37-82 отдел продаж"}),(0,a.jsx)("li",{children:"+7-904-377-37-57 Кузбасс отдел продаж"})]})]}),(0,a.jsxs)("div",{className:h().block2,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(_(),{width:30,src:b,alt:"icon"}),(0,a.jsx)("p",{children:"darica@bk.ru"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(_(),{width:30,src:x,alt:"icon"}),(0,a.jsx)("p",{children:"www.darica.ru"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(_(),{width:30,src:g,alt:"icon"}),(0,a.jsx)(_(),{width:30,src:A,alt:"icon"}),(0,a.jsx)(_(),{width:30,src:m,alt:"icon"}),(0,a.jsx)("p",{children:"@Darica"})]})]}),(0,a.jsx)("div",{className:h().block3,children:(0,a.jsx)(N,{})}),(0,a.jsx)("div",{className:h().block4,children:(0,a.jsx)(p.Z,(0,i.Z)((0,r.Z)({},{dots:!1,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:5}),{children:e.map(function(e){return(0,a.jsx)(C,{worker:e},e.id)})}))})]})})]})})},B=function(){return(0,a.jsx)(E,{})}},6529:function(e){e.exports={parent:"Contacs_parent__IDvMH",block1:"Contacs_block1__rujLF",title:"Contacs_title__6wfF9",subTitle:"Contacs_subTitle__ClZud",list:"Contacs_list__DEnKB",block2:"Contacs_block2__nvO43",block3:"Contacs_block3__0xHVG",block4:"Contacs_block4__XHoNn"}},8881:function(e){e.exports={block:"ContactsLeftNavbar_block__fd5I9",link:"ContactsLeftNavbar_link__x2lga"}},4796:function(e){e.exports={navBar:"LeftNavBar_navBar__e6A57",navBarContent:"LeftNavBar_navBarContent__G1hUN",navBarImg:"LeftNavBar_navBarImg__kxoDQ",navBarItems:"LeftNavBar_navBarItems__dmmg_",navBarItem:"LeftNavBar_navBarItem___oIUk",navBarBtn:"LeftNavBar_navBarBtn__o43i0"}},1055:function(e){e.exports={parent:"workerCard_parent__cQbEV"}},5152:function(e,t,n){e.exports=n(638)}},function(e){e.O(0,[583,774,888,179],function(){return e(e.s=8719)}),_N_E=e.O()}]);