webpackJsonp([1],{"17+v":function(t,e){},"9T2W":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},a,!1,function(t){s("Xlf4")},null,null).exports,i=s("/ocq"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"container custom-app"},[this._m(0),e("div",{staticClass:"container mt-5"},[e("h1",{staticClass:"text-center text-danger page-title"},[this._v("404")]),e("h3",{staticClass:"text-center page-title-2 text-secondary"},[this._v("Page is not found :(")]),e("h5",{staticClass:"text-center mt-4"},[e("router-link",{attrs:{to:"/"}},[this._v("Home")])],1)])]),e("div",{staticClass:"container-fluid custom-footer"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-title"},[e("h1",{staticClass:"font-weight-bold page-title text-primary"},[this._v("The Open University of Israel.")]),e("h2",{staticClass:"font-weight-bold page-title-2 text-secondary"},[this._v("Student Community.")])])}]};var c=s("VU/8")(null,o,!1,function(t){s("qpAF")},"data-v-43d2a529",null).exports,l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"container custom-app"},[this._m(0),e("div",{staticClass:"container mt-5"},[this._t("default")],2)]),e("div",{staticClass:"container-fluid custom-footer"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-title"},[e("h1",{staticClass:"font-weight-bold page-title text-primary"},[this._v("The Open University of Israel.")]),e("h2",{staticClass:"font-weight-bold page-title-2 text-secondary"},[this._v("Student Community.")])])}]};var u=s("VU/8")({beforeMount:function(){this.$store.dispatch("semesters")}},l,!1,function(t){s("R7ZA")},"data-v-0092e0bf",null).exports,d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Course number or name..."}}),s("div",{staticClass:"input-group-lg input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v(t._s(t.activeSemester?t.activeSemester.name:"Choose semester"))]),s("div",{staticClass:"dropdown-menu"},t._l(t.$store.getters.getSemesters,function(e,n){return s("a",{key:n,staticClass:"dropdown-item",on:{click:function(s){s.preventDefault(),t.activeSemester=e}}},[t._v(t._s(e.name))])}),0)])])},staticRenderFns:[]},m=s("VU/8")({data:function(){return{activeSemester:null}}},d,!1,null,null,null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media mb-4"},[e("img",{staticClass:"rounded mr-3",attrs:{src:"https://image.shutterstock.com/image-vector/algebra-concept-icon-algebraic-equations-600w-1426615184.jpg"}}),e("div",{staticClass:"media-body"},[e("h5",[this._v("אלגברה לינארית 1 2020ב")]),e("button",{staticClass:"btn btn-sm btn-success mr-2"},[this._v("Join")]),e("button",{staticClass:"btn btn-sm btn-outline-secondary"},[this._v("Group is full")])])])}]};var f={components:{course:s("VU/8")(null,p,!1,function(t){s("17+v")},"data-v-2f193388",null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-4"},this._l(3,function(t){return e("course",{key:t})}),1)},staticRenderFns:[]},v={components:{coursesList:s("VU/8")(f,h,!1,null,null,null).exports,autocompleteForm:m}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card card-body"},[e("div",{staticClass:"container"},[this._m(0),e("autocomplete-form"),e("courses-list"),e("h5",[this._v("... or "),e("router-link",{attrs:{to:"/addLink"}},[this._v("add a new one")])],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Find "),e("i",{staticClass:"fab fa-whatsapp text-success"}),this._v(" chat")])}]},C={components:{defLayout:u,courseSearchCard:s("VU/8")(v,_,!1,null,null,null).exports}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("def-layout",[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-9"},[e("course-search-card")],1)])])])},staticRenderFns:[]},b=s("VU/8")(C,g,!1,null,null,null).exports,y=s("+4za"),x=s.n(y);s("9T2W");n.a.use(x.a);var w=function(t){return n.a.$toast.open(t)},k={data:function(){return{activeSemester:null}},methods:{saveBtnHandler:function(){w({message:"Something went wrong",type:"error",position:"top-right"}),w({message:"Success!",type:"success",position:"top-right"}),this.$router.push("/")}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card card-body"},[s("div",{staticClass:"container"},[s("h3",[t._v("Add link")]),s("input",{staticClass:"form-control",attrs:{placeholder:"Select course"}}),s("select",{staticClass:"custom-select mt-3"},[s("option",[t._v("Select semester...")]),t._l(t.$store.getters.getSemesters,function(e,n){return s("option",{key:n,on:{click:function(s){t.activeSemester=e}}},[t._v(t._s(e.name))])})],2),s("input",{staticClass:"form-control mt-3",attrs:{placeholder:"Group name"}}),s("input",{staticClass:"form-control mt-3",attrs:{placeholder:"Group link"}}),s("div",{staticClass:"row justify-content-around mt-3"},[s("button",{staticClass:"btn btn-success",on:{click:t.saveBtnHandler}},[t._v("Save")]),s("button",{staticClass:"btn btn-outline-secondary",on:{click:function(e){return t.$router.push("/")}}},[t._v("Cancel")])])])])},staticRenderFns:[]},$={components:{defLayout:u,addLinkCard:s("VU/8")(k,S,!1,null,null,null).exports}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("def-layout",[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-6"},[e("add-link-card")],1)])])])},staticRenderFns:[]},F=s("VU/8")($,E,!1,null,null,null).exports;n.a.use(i.a);var R,U=new i.a({mode:"history",base:"/oui-front/",routes:[{path:"/",name:"index",component:b},{path:"/addLink",name:"addLink",component:F},{path:"*",name:"404",component:c}]}),V=s("NYxO"),A=s("Xxa5"),L=s.n(A),j=s("exGp"),H=this,T=(R=s.n(j)()(L.a.mark(function t(e){var s,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return L.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://oui-backend.herokuapp.com/"+e,n);case 2:return s=t.sent,t.abrupt("return",s);case 4:case"end":return t.stop()}},t,H)})),function(t){return R.apply(this,arguments)}),q={state:{semesters:[]},getters:{getSemesters:function(t){return t.semesters}},mutations:{setSemesters:function(t,e){t.semesters=e}},actions:{semesters:function(t){var e=t.commit;T("/semesters").then(function(t){return t.json()}).then(function(t){console.log(t),e("setSemesters",t.response)})}}};n.a.use(V.a);var G=new V.a.Store({modules:{main:q}});n.a.config.productionTip=!1,new n.a({el:"#app",router:U,store:G,components:{App:r},template:"<App/>"})},R7ZA:function(t,e){},Xlf4:function(t,e){},qpAF:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d5e75b2538c446d7a9ac.js.map