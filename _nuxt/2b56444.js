(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5,6],{1273:function(t,e,r){"use strict";var n=r(48),c=r(16),o=r(274),l=r(61),f=r(50),d=r(145),m=r(593),v=r(215),h=r(592),x=r(18),_=r(146),w=r(216).f,y=r(111).f,C=r(60).f,E=r(1274).trim,A="Number",I=c.Number,N=I.prototype,j=d(_(N))==A,O=function(t){if(v(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,c,o,l,f,code,d=h(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=E(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+d}for(l=(o=d.slice(2)).length,f=0;f<l;f++)if((code=o.charCodeAt(f))<48||code>c)return NaN;return parseInt(o,n)}return+d};if(o(A,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var k,$=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof $&&(j?x((function(){N.valueOf.call(r)})):d(r)!=A)?m(new I(O(e)),r,$):O(e)},R=n?w(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;R.length>S;S++)f(I,k=R[S])&&!f($,k)&&C($,k,y(I,k));$.prototype=N,N.constructor=$,l(c,A,$)}},1274:function(t,e,r){var n=r(59),c=r(41),o="["+r(1275)+"]",l=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),d=function(t){return function(e){var r=c(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(f,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},1275:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},1276:function(t,e,r){"use strict";r.r(e);var n=r(23),c=(r(81),r(1273),{props:{address:String,balance:Number},data:function(){return{estValue:""}},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}),o=r(110),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Card",[r("div",{staticClass:"flex md:flex-col flex-wrap justify-between items-center text-right w-full"},[r("div",{staticClass:"flex flex-col w-full"},[r("p",{staticClass:"w-full text-gray-200 font-bold"},[t._v(t._s(t.address))])])])])}),[],!1,null,"277b25d3",null);e.default=component.exports},1277:function(t,e,r){"use strict";r.r(e);var n=r(1276),c={name:"Account",props:{account:Object},data:function(){return{wallets:[]}},mounted:function(){console.log(this.account)},components:{Wallet:n.default}},o=r(110),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Card",[r("Wallet",{attrs:{address:t.account.address,balance:t.account.balance}})],1)}),[],!1,null,"1dae96ce",null);e.default=component.exports},1278:function(t,e,r){"use strict";r.r(e);var n={},c=r(110),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col w-full p-4"},[r("input",{staticClass:"flex-1 m-2 p-2 bg-gray-600 rounded rounded-lg",attrs:{type:"password",placeholder:"Enter new Password"}}),t._v(" "),r("button",{staticClass:"flex-1 m-2 p-2 bg-green-500 rounded rounded-lg"},[t._v("Create")])])}],!1,null,"54463b2d",null);e.default=component.exports},1279:function(t,e,r){"use strict";r.r(e);var n={methods:{}},c=r(110),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col w-full p-4"},[r("input",{staticClass:"flex-1 m-2 p-2 bg-gray-600 rounded rounded-lg",attrs:{type:"password",placeholder:"Enter new Password"}}),t._v(" "),r("input",{staticClass:"flex-1 m-2 p-2 bg-gray-600 rounded rounded-lg",attrs:{type:"password",placeholder:"Enter Private Key"}}),t._v(" "),r("button",{staticClass:"flex-1 m-2 p-2 bg-green-500 rounded rounded-lg"},[t._v("Create")])])}],!1,null,"ce81916a",null);e.default=component.exports},1280:function(t,e,r){"use strict";r.r(e);r(128),r(42),r(112),r(129),r(72),r(94),r(130),r(131),r(82);var n=r(23),c=(r(594),r(81),r(1277)),o=r(1278),l=r(1279),f=r(178),d=r.n(f);function m(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){l=!0,c=t},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw c}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var h={data:function(){return{user:{},mode:"",estValue:0,totalBalance:0}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getUser();case 2:return e.next=4,t.getBalances();case 4:console.log(t.user);case 5:case"end":return e.stop()}}),e)})))()},methods:{getUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$account.User.current();case 2:r=e.sent,n={username:r.attributes.username,address:r.attributes.ethAddress,accounts:r.attributes.accounts},t.user=n;case 5:case"end":return e.stop()}}),e)})))()},getBalances:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,l,address,f,v,h,x,_,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r="matic",n=[],c=0,o=m(t.user.accounts),e.prev=4,o.s();case 6:if((l=o.n()).done){e.next=17;break}return address=l.value,e.next=10,t.$account.Web3API.account.getTokenBalances({address:address,chain:r});case 10:f=e.sent,v={address:address,balances:f},n.push(v),h=m(v.balances);try{for(h.s();!(x=h.n()).done;)_=x.value,w=parseInt(d.a.utils.fromWei(_.balance)),c=w.toFixed(5)}catch(t){h.e(t)}finally{h.f()}case 15:e.next=6;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(4),o.e(e.t0);case 22:return e.prev=22,o.f(),e.finish(22);case 25:return t.user.accounts=n,t.totalBalance=t.$utils.numberWithCommas(c),e.next=29,t.getTokenPrice(c);case 29:case"end":return e.stop()}}),e,null,[[4,19,22,25]])})))()},getTokenPrice:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$utils.xrate(t);case 2:n=r.sent,e.estValue=e.$utils.numberWithCommas(n);case 4:case"end":return r.stop()}}),r)})))()},mod:function(t){this.mode=t}},components:{Account:c.default,CreateAccount:o.default,ImportAccount:l.default}},x=r(110),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"flex flex-col justify-between h-full"},[t.user.accounts?t._l(t.user.accounts,(function(t,i){return r("div",{key:i},[r("Account",{attrs:{account:t}})],1)})):r("div",{},[t._v("\n    No Accounts yet! Import or Create one!\n  ")]),t._v(" "),r("div",{staticClass:"border-t border-gray-600 my-2 py-2"},[r("div",{staticClass:"w-full text-right"},[r("div",{staticClass:"p-2 m-2"},[r("p",{staticClass:"text-gray-500"},[t._v("Total Balance")]),t._v(" "),r("h2",{staticClass:"w-full md: flex-1 text-xl"},[t._v(t._s(t.totalBalance)+" "),r("strong",{staticClass:"text-gray-500"},[t._v("ELABS")])])]),t._v(" "),r("div",{staticClass:"p-2 m-2"},[r("p",{staticClass:"text-gray-500"},[t._v("Estimated Total Balance Value")]),t._v(" "),r("h2",{staticClass:"w-full md: flex-1 text-lg"},[t._v(t._s(t.estValue)+" "),r("strong",{staticClass:"text-gray-500"},[t._v("€")])])])])])],2)}),[],!1,null,"c34bd760",null);e.default=component.exports},1286:function(t,e,r){"use strict";r.r(e);var n={layout:"app",mounted:function(){}},c=r(110),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("Container",[e("Accounts")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Accounts:r(1280).default})}}]);