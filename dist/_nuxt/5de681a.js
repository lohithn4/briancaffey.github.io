(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{251:function(t,e,r){"use strict";r.r(e);r(25);var n=r(2),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("projects",n.slug).fetch();case 3:return c=e.sent,e.abrupt("return",{project:c});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},head:function(){return{title:this.project.title}}},o=r(5),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("div",{staticClass:"px-4 sm:px-4 md:px-4 lg:px-16 xl:pb-16 mt-4 lg:pl-64"},[r("img",{staticClass:"h-64 w-full object-cover rounded",attrs:{src:t.project.image}}),t._v(" "),r("h1",{staticClass:"prose text-3xl"},[t._v(t._s(t.project.title))]),t._v(" "),r("p",{staticClass:"text-gray-500 mb-4"},[t._v("\n      Last updated: "+t._s(t.formatDate(t.project.date))+"\n    ")]),t._v(" "),r("h1",{staticClass:"text-xl"},[t.project.link?r("a",{attrs:{href:t.project.link}},[t._v("GitHub Link 🔗")]):t._e()]),t._v(" "),r("nuxt-content",{staticClass:"markdown",attrs:{document:t.project}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);