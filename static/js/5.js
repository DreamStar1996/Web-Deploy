webpackJsonp([5],{kV8g:function(t,e){},n6Cl:function(t,e){},pUly:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Cz8s"),r=n("mzkE"),i=n("1pQF"),a={data:function(){return{friendslink:""}},methods:{},components:{},created:function(){var t=this;Object(i.e)(function(e){t.friendslink=e})}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tFriendsBox"},[n("h1",[t._v("棒棒哒")]),t._v(" "),n("el-row",t._l(t.friendslink,function(e,s){return n("el-col",{key:"f"+s,staticClass:"tf-item",attrs:{span:12}},[n("a",{attrs:{href:e.url,target:"_blank"}},[n("img",{attrs:{src:e.image?e.image:"static/img/tou.jpg",onerror:t.$store.state.errorImg}}),t._v(" "),n("h4",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v(t._s(e.description))])])])}),1)],1)},staticRenderFns:[]};var o=n("VU/8")(a,c,!1,function(t){n("kV8g")},null,null).exports,l=n("ZsVV"),u=n("9jkD"),f={name:"FriendsLink",data:function(){return{}},methods:{},components:{"wbc-nav":s.a,"wbc-message":u.a,"wbc-friends":o,"wbc-rightlist":l.a,"wbc-footer":r.a},created:function(){}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("wbc-nav"),this._v(" "),e("div",{staticClass:"container"},[e("el-row",{attrs:{gutter:30}},[e("el-col",{staticStyle:{transition:"all .5s ease-out","margin-bottom":"30px"},attrs:{sm:24,md:16}},[e("wbc-friends"),this._v(" "),e("wbc-message")],1),this._v(" "),e("el-col",{attrs:{sm:24,md:8}},[e("wbc-rightlist")],1)],1)],1),this._v(" "),e("wbc-footer")],1)},staticRenderFns:[]};var m=n("VU/8")(f,d,!1,function(t){n("n6Cl")},null,null);e.default=m.exports}});