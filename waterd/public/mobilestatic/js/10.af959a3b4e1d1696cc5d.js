webpackJsonp([10],{"9SJQ":function(t,n){},Mhc5:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e("qD+w");var i=e("T0tl"),a=e("ArgV"),s=e("J56h"),c=e("dQyo"),o=e.n(c),r={name:"Transfer",components:{navbar:s.a},data:function(){return{inviteData:{}}},mounted:function(){this.getInvite()},methods:{getInvite:function(){var t=this;Object(a.c)().then(function(n){t.inviteData=n})},copy:function(t){var n=new o.a(".copy",{text:function(){return t}});n.on("success",function(t){Object(i.a)("复制成功"),n.destroy()}),n.on("error",function(t){Object(i.a)("复制失败"),n.destroy()})}}},v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",["Android"==t.$phonemodel?e("navbar",{attrs:{title:"邀请好友"}}):t._e(),t._v(" "),e("div",{staticClass:"app",class:{nav:"Android"==t.$phonemodel}},[t._m(0),t._v(" "),e("div",{staticClass:"twoPage"},[e("div",{staticClass:"text"},[e("div",{staticClass:"main"},[e("p",{staticClass:"title"},[t._v("我的邀请码")]),t._v(" "),e("p",{staticClass:"code",attrs:{id:"invCode"}},[t._v(t._s(t.inviteData.invite_code))]),t._v(" "),e("button",{staticClass:"copy",on:{click:function(n){return t.copy(t.inviteData.invite_code)}}},[t._v("复制")]),t._v(" "),e("hr"),t._v(" "),e("img",{attrs:{src:t.inviteData.invite_qrcode,alt:""}}),t._v(" "),e("p",{staticClass:"bottom"},[t._v("扫描二维码，拯救负债者！")])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"firstPage"},[n("p",{staticClass:"logo"},[n("img",{attrs:{src:e("nHnd"),alt:""}})])])}]};var d=e("VU/8")(r,v,!1,function(t){e("9SJQ")},"data-v-40af1d52",null);n.default=d.exports},nHnd:function(t,n,e){t.exports=e.p+"mobilestatic/img/yaoqing_bi@2x.f38303f.png"}});
//# sourceMappingURL=10.af959a3b4e1d1696cc5d.js.map