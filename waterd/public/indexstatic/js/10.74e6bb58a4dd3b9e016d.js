webpackJsonp([10],{"9ZUY":function(t,e){},hDl6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("bGai"),a=n("ArgV"),i={name:"Transfer",components:{Navbar:s.b,Centerbar:s.a},computed:{disabled:function(){return this.loading||this.noMore}},data:function(){return{transferList:[],noMore:!1,loading:!1,page:1}},mounted:function(){},methods:{load:function(){this.loading=!0,this.getTransferList()},getTransferList:function(){var t=this;Object(a.d)({page:this.page}).then(function(e){t.loading=!1,e.length<10&&(t.noMore=!0),1==t.page?t.transferList=e:t.transferList=t.transferList.concat(e),t.page++})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("navbar"),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"center-box warp-1200 ov"},[n("centerbar"),t._v(" "),n("div",{staticClass:"right fl"},[t._m(0),t._v(" "),n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticStyle:{overflow:"auto",height:"600px"},attrs:{"infinite-scroll-disabled":"disabled"}},[t._m(1),t._v(" "),t._l(t.transferList,function(e){return n("li",[n("span",[t._v(t._s(e.tousername))]),n("span",[t._v(t._s(e.money)+"usdt")]),n("span",[t._v(t._s(e.create_time))]),n("span",{staticClass:"succ"},[t._v("转账成功")])])}),t._v(" "),t.loading?n("p",{staticStyle:{"font-size":"14px",width:"100%","text-align":"center","margin-top":"10px"}},[t._v("加载中...")]):t._e(),t._v(" "),t.noMore&&this.transferList.length>=10?n("p",{staticStyle:{"font-size":"14px",width:"100%","text-align":"center","margin-top":"10px"}},[t._v("没有更多了")]):t._e()],2)])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"balance"},[e("span",[this._v("内部转账记录")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tit"},[e("span",[this._v("用户")]),e("span",[this._v("金额")]),e("span",[this._v("时间")]),e("span",[this._v("状态")])])}]};var o=n("C7Lr")(i,r,!1,function(t){n("9ZUY")},"data-v-3ac5513e",null);e.default=o.exports}});
//# sourceMappingURL=10.74e6bb58a4dd3b9e016d.js.map