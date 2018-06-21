!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={images:e.images||[],initialized:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),a(t,[{key:"componentDidMount",value:function(){this.initSwiper()}},{key:"initSwiper",value:function(){if(this.state.images.length>0&&!this.state.initialized){new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",dynamicBullets:!0}});this.setState({initialized:!0})}}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.images&&null!==e.images&&this.setState({images:e.images||""},function(){this.initSwiper()})}},{key:"render",value:function(){return React.createElement("div",{className:"swiper-container"},React.createElement("div",{className:"swiper-wrapper"},this.state.images.map(function(e,t){return React.createElement("div",{className:"swiper-slide",key:"banner"+t},React.createElement("a",{href:e.link||""},React.createElement("img",{src:e.url})))})),React.createElement("div",{className:"swiper-pagination"}))}}]),t}();t.default=r},function(e,t,n){"use strict";var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),i=(a=c)&&a.__esModule?a:{default:a};var l="http://47.104.13.159/boot",o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={images:[],searchInputting:!1,searchText:"",products:[]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),r(t,[{key:"componentDidMount",value:function(){window.MF&&MF.setTitle("首页"),this.fetchBanner(),this.fetchProduct()}},{key:"fetchProduct",value:function(){var e=this;$.ajax({url:l+"/client/queryPage",type:"GET",xhrFields:{withCredentials:!1},success:function(t){e.setState({products:t.rows||[]})},fail:function(e){},dataType:"json"})}},{key:"fetchBanner",value:function(){var e=this;$.ajax({url:l+"/client/queryAdverPage",type:"GET",xhrFields:{withCredentials:!1},success:function(t){var n=t.rows.map(function(e){return{url:l+e.url,link:l+e.link}});e.setState({images:n}),console.log(t)},fail:function(e){},dataType:"json"})}},{key:"openApply",value:function(e){}},{key:"newApply",value:function(){}},{key:"render",value:function(){var e=this;return React.createElement("div",{className:"home-container"},React.createElement("div",{className:"banner-wrap"},React.createElement(i.default,{images:this.state.images}),React.createElement("div",{className:"banner-header"},React.createElement("div",{className:"banner-logo"},React.createElement("img",{src:"../images/home/logo.png"})),React.createElement("div",{className:"banner-search"},!this.state.searchInputting&&!this.state.searchText&&React.createElement("div",null,React.createElement("span",null,React.createElement("img",{src:"../images/home/search.png"})),React.createElement("span",null,"搜索产品 / 客户信息")),React.createElement("input",{onFocus:function(){return e.setState({searchInputting:!0})},onBlur:function(){return e.setState({searchInputting:!1})},onChange:function(t){return e.setState({searchText:t.target.value})}})),React.createElement("div",{className:"banner-msg"},React.createElement("img",{src:"../images/home/message.png"}),React.createElement("em",null)))),React.createElement("div",{className:"shortcut-row1"},React.createElement("a",{className:"srow-item"},React.createElement("div",null,React.createElement("img",{src:"../images/home/oneKey.png"})),React.createElement("span",null,"一键投保")),React.createElement("a",{className:"srow-item",href:"#"},React.createElement("div",null,React.createElement("img",{src:"../images/home/proposal.png"})),React.createElement("span",null,"建议书")),React.createElement("a",{className:"srow-item"},React.createElement("div",null,React.createElement("img",{src:"../images/home/insurePolicy.png"})),React.createElement("span",null,"投保单")),React.createElement("a",{className:"srow-item"},React.createElement("div",null,React.createElement("img",{src:"../images/home/insure.png"})),React.createElement("span",null,"投保e办理")),React.createElement("a",{className:"srow-item"},React.createElement("div",null,React.createElement("img",{src:"../images/home/customer.png"})),React.createElement("span",null,"客户管理"))),React.createElement("div",{className:"shortcut-row2"},React.createElement("a",{className:"sr2-left"},React.createElement("img",{src:"../images/home/company.png"}),React.createElement("span",null,"公司介绍")),React.createElement("div",{className:"sr2-right"},React.createElement("a",{class:"sr2-top"},React.createElement("img",{src:"../images/home/product.png"}),React.createElement("span",null,"产品介绍")),React.createElement("div",{class:"sr2-bottom"},React.createElement("a",null,React.createElement("span",null,"自主经营"),React.createElement("img",{src:"../images/home/independent.png"})),React.createElement("a",null,React.createElement("span",null,"展示夹"),React.createElement("img",{src:"../images/home/showHome.png"}))))),React.createElement("div",{className:"promote"},React.createElement("div",{className:"p-title"},React.createElement("span",null,"热销推荐"),React.createElement("a",null,"查看更多 >")),React.createElement("div",{className:"p-content"},this.state.products.map(function(e){return React.createElement("a",{className:"prod-item"},React.createElement("img",{src:e.logo?l+e.logo:"../images/home/default_img.png"}),React.createElement("span",null,e.abbrName),React.createElement("i",null,e.name))}))),React.createElement("div",{className:"btn-fl text18 tc-white bg-primary",onClick:this.newApply.bind(this)},"新的投保"),React.createElement("div",{className:"btn-fl text18 tc-white bg-primary",onClick:this.openApply.bind(this,40066)},"打开测试投保单"))}}]),t}();$(document).ready(function(){ReactDOM.render(React.createElement(o,null),document.getElementById("root"))})}]);