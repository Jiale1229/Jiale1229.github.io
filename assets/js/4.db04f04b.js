(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{327:function(t,e,s){},335:function(t,e,s){"use strict";s(327)},336:function(t,e,s){"use strict";var o=s(0),a=s(33),n=s(322),i=Object(o.c)({props:{currentTag:{type:String,default:""}},setup(t,e){const s=Object(n.b)();return{tags:Object(o.a)(()=>[{name:s.$recoLocales.all,path:"/tag/"},...s.$tagesList]),tagClick:t=>{e.emit("getCurrentTag",t)},getOneColor:a.b}}}),r=(s(335),s(2)),l=Object(r.a)(i,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"tags"},t._l(t.tags,(function(s,o){return e("span",{directives:[{name:"show",rawName:"v-show",value:!s.pages||s.pages&&s.pages.length>0,expression:"!item.pages || (item.pages && item.pages.length > 0)"}],key:o,class:{active:s.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(e){return t.tagClick(s)}}},[t._v(t._s(s.name))])})),0)}),[],!1,null,"0508daa9",null);e.a=l.exports},362:function(t,e,s){},363:function(t,e,s){},364:function(t,e,s){},365:function(t,e,s){},366:function(t,e,s){},398:function(t,e,s){"use strict";s(362)},399:function(t,e,s){"use strict";s(363)},400:function(t,e,s){"use strict";s(364)},401:function(t,e,s){"use strict";s(365)},402:function(t,e,s){"use strict";s(366)},409:function(t,e,s){"use strict";s.r(e);var o=s(0),a=(s(16),s(336)),n=s(337),i=s.n(n),r=s(33),l=s(322);const c=()=>{const t=Object(l.b)(),e=Object(o.l)(!0),s=Object(o.k)({left:0,top:0});return Object(o.h)(()=>{e.value=!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)}),{popupWindowStyle:s,showDetail:o=>{const a=o.target;a.querySelector(".popup-window-wrapper").style.display="block";const n=a.querySelector(".popup-window"),i=document.querySelector(".info-wrapper"),{clientWidth:r}=a,{clientWidth:l,clientHeight:c}=n;if(e)s.left=(r-l)/2+"px",s.top=-c+"px",i.style.overflow="visible",t.$nextTick(()=>{(t=>{const{offsetWidth:e}=document.body,{x:o,width:a}=t.getBoundingClientRect(),n=e-(o+a);if(n<0){const{offsetLeft:e}=t;s.left=e+n+"px"}})(n)});else{const t=function(t){const e=document,s=t.getBoundingClientRect();let o=s.left,a=s.top;return o+=e.documentElement.scrollLeft||e.body.scrollLeft,a+=e.documentElement.scrollTop||e.body.scrollTop,{left:o,top:a}};i.style.overflow="hidden";const e=t(a).left-t(i).left;s.left=-e+(i.clientWidth-n.clientWidth)/2+"px",s.top=-c+"px"}},hideDetail:t=>{t.target.querySelector(".popup-window-wrapper").style.display="none"}}};var d=Object(o.c)({setup(t,e){const s=Object(l.b)(),{popupWindowStyle:a,showDetail:n,hideDetail:d}=c();return{dataAddColor:Object(o.a)(()=>{const{friendLink:t=[]}=s&&s.$themeConfig;return t.map(t=>(t.color=Object(r.b)(),t))}),popupWindowStyle:a,showDetail:n,hideDetail:d,getImgUrl:t=>{const{logo:e="",email:o=""}=t;return e&&/^http/.test(e)?e:e&&!/^http/.test(e)?s.$withBase(e):`//1.gravatar.com/avatar/${i()(o||"")}?s=50&amp;d=mm&amp;r=x`}}}}),p=(s(398),s(2)),u=Object(p.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"friend-link-wrapper"},t._l(t.dataAddColor,(function(s,o){return e("div",{key:o,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(e){return t.showDetail(e)},mouseleave:function(e){return t.hideDetail(e)}}},[e("span",{staticClass:"list-style",style:{backgroundColor:s.color}}),t._v("\n    "+t._s(s.title)+"\n    "),e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"popup-window-wrapper"},[e("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:t.popupWindowStyle},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t.getImgUrl(s)}})]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("h4",[t._v(t._s(s.title))]),t._v(" "),e("a",{staticClass:"btn-go",style:{backgroundColor:s.color},attrs:{href:s.link,target:"_blank"}},[t._v("GO")])]),t._v(" "),s.desc?e("p",[t._v(t._s(s.desc))]):t._e()])])])])],1)})),0)}),[],!1,null,"79e405d5",null).exports,h=s(338),m=s(323),g=s(373),v={name:"LoveTime",data:()=>({timer:null}),mounted(){this.timer=setInterval(()=>{this.showSiteRuntime()},1e3)},methods:{showSiteRuntime(){const t=new Date("2020-08-15"),e=((new Date).getTime()-t.getTime())/864e5,s=Math.floor(e),o=24*(e-s),a=Math.floor(o),n=60*(o-a),i=Math.floor(n),r=60*(n-i),l=Math.floor(r);document.getElementById("love-time").innerText=`风雨同舟第${s}天${a}小时${i}分${l}秒`}},beforeDestroy(){this.timer&&clearInterval(this.timer)}},f=(s(399),Object(p.a)(v,(function(){var t=this._self._c;return t("div",{staticClass:"love-box"},[t("h4",[this._v("\n    ❤️\n    我们\n  ")]),this._v(" "),t("router-link",{attrs:{to:"/photos/"}},[t("div",{staticClass:"love-img"},[t("span",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://cdn.staticaly.com/gh/Jiale1229/PicGoCdn@master/images/icon/pic0.jpg",expression:"'https://cdn.staticaly.com/gh/Jiale1229/PicGoCdn@master/images/icon/pic0.jpg'"}],attrs:{alt:"love"}})]),this._v(" "),t("span",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://txcdn.kenvie.com/blog/toutu/z.gif",expression:"'https://txcdn.kenvie.com/blog/toutu/z.gif'"}],attrs:{alt:"love"}})]),this._v(" "),t("span",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://cdn.staticaly.com/gh/Jiale1229/PicGoCdn@master/images/icon/pic1.jpg",expression:"'https://cdn.staticaly.com/gh/Jiale1229/PicGoCdn@master/images/icon/pic1.jpg'"}],attrs:{alt:"love"}})])])]),this._v(" "),t("router-link",{attrs:{id:"love-time",to:"/photos/"}})],1)}),[],!1,null,"1f6a8231",null).exports),b=s(7),w=s.n(b),_=Object(o.c)({components:{NoteAbstract:h.a,TagList:a.a,FriendLink:u,ModuleTransition:m.a,PersonalInfo:g.a,RecoIcon:m.b,LoveTime:f},setup(t,e){const s=Object(l.b)(),a=Object(o.k)({recoShow:!1,heroHeight:0}),n=Object(l.c)();Object(o.h)(()=>{setTimeout(()=>{a.heroHeight=document.querySelector(".hero").clientHeight,a.recoShow=!0},300),w.a.get("https://v1.hitokoto.cn",{params:{c:"k"}}).then(({data:t})=>{document.getElementById("dictum").innerHTML=""+t.hitokoto,null!=t.from&&(document.getElementById("writer").innerText=`『 ${t.from} 』`)}).catch(console.error)});return{recoShowModule:n,...Object(o.m)(a),getOneColor:r.b,paginationChange:t=>{setTimeout(()=>{window.scrollTo(0,a.heroHeight)},100)},getPagesByTags:t=>{s.$router.push({path:t.path})},scrollFn:()=>{const t=document.getElementsByClassName("hero")[0].clientHeight-document.getElementsByClassName("navbar")[0].clientHeight;document.documentElement.scrollTop=t}}}}),C=(s(400),Object(p.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"home-blog"},[e("div",{staticClass:"hero"},[e("ModuleTransition",{attrs:{delay:"0.04"}},[e("h1",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"hero-title",attrs:{id:"dictum"}})]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.06"}},[e("h4",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"sm-hero-title",attrs:{id:"writer"}})]),t._v(" "),e("i",{staticClass:"iconfont reco-other anchor-down",attrs:{id:"AnchorDown"},on:{click:t.scrollFn}})],1),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.16"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper"},[e("div",{staticClass:"blog-list"},[e("note-abstract",{attrs:{data:t.$recoPosts},on:{paginationChange:t.paginationChange}})],1),t._v(" "),e("div",{staticClass:"info-wrapper"},[e("PersonalInfo"),t._v(" "),e("LoveTime"),t._v(" "),e("hr"),t._v(" "),0!==t.$tags.list.length?e("h4",[t._v("\n          🏷️\n          "+t._s(t.$recoLocales.tag)+"\n        ")]):t._e(),t._v(" "),e("TagList",{on:{getCurrentTag:t.getPagesByTags}}),t._v(" "),t.$themeConfig.friendLink&&0!==t.$themeConfig.friendLink.length?e("h4",[e("reco-icon",{attrs:{icon:"reco-friend"}}),t._v("\n          "+t._s(t.$recoLocales.friendLink)+"\n        ")],1):t._e(),t._v(" "),e("FriendLink")],1)])])],1)}),[],!1,null,null,null).exports),y=s(340),$=s(374),k=s(17),O=Object(o.c)({setup(t,e){const s=Object(l.b)();return{headers:Object(o.a)(()=>s.$showSubSideBar?s.$page.headers:[]),isLinkActive:t=>Object(k.e)(s.$route,s.$page.path+"#"+t.slug)}},render(t){return t("ul",{class:{"sub-sidebar-wrapper":!0},style:{width:this.headers.length>0?"12rem":"0"}},[...this.headers.map(e=>t("li",{class:{active:this.isLinkActive(e),["level-"+e.level]:!0},attr:{key:e.title}},[t("router-link",{class:{"sidebar-link":!0,["reco-side-"+e.slug]:!0},props:{to:`${this.$page.path}#${e.slug}`}},e.title)]))])}}),j=(s(401),Object(p.a)(O,void 0,void 0,!1,null,"6e02ba43",null).exports);function x(t,e,s){const o=[];!function t(e,s){for(let o=0,a=e.length;o<a;o++)"group"===e[o].type?t(e[o].children||[],s):s.push(e[o])}(e,o);for(let e=0;e<o.length;e++){const a=o[e];if("page"===a.type&&a.path===decodeURIComponent(t.path))return o[e+s]}}var S=Object(o.c)({components:{PageInfo:y.a,ModuleTransition:m.a,SubSidebar:j,Banner:$.a},props:["sidebarItems"],setup(t,e){const s=Object(l.b)(),{sidebarItems:a}=Object(o.m)(t),n=Object(l.c)(),i=Object(o.a)(()=>{const{isShowComments:t}=s.$frontmatter,{showComment:e}=s.$themeConfig.valineConfig||{showComment:!0};return!1!==e&&!1!==t||!1===e&&!0===t}),r=Object(o.a)(()=>{const{$themeConfig:{valineConfig:t},$themeLocaleConfig:{valineConfig:e}}=s||{},o=e||t;return o&&0!=o.visitor}),c=Object(o.a)(()=>!1!==s.$themeConfig.lastUpdated&&s.$page.lastUpdated),d=Object(o.a)(()=>"string"==typeof s.$themeLocaleConfig.lastUpdated?s.$themeLocaleConfig.lastUpdated:"string"==typeof s.$themeConfig.lastUpdated?s.$themeConfig.lastUpdated:"Last Updated"),p=Object(o.a)(()=>{const t=s.$frontmatter.prev;return!1===t?void 0:t?Object(k.k)(s.$site.pages,t,s.$route.path):(e=s.$page,o=a.value,x(e,o,-1));var e,o}),u=Object(o.a)(()=>{const t=s.$frontmatter.next;return!1===u?void 0:t?Object(k.k)(s.$site.pages,t,s.$route.path):(e=s.$page,o=a.value,x(e,o,1));var e,o}),h=Object(o.a)(()=>{if(!1===s.$frontmatter.editLink)return!1;const{repo:t,editLinks:e,docsDir:o="",docsBranch:a="master",docsRepo:n=t}=s.$themeConfig;return n&&e&&s.$page.relativePath?function(t,e,s,o,a){if(/bitbucket.org/.test(t)){return(k.i.test(e)?e:t).replace(k.c,"")+"/src"+`/${o}/`+(s?s.replace(k.c,"")+"/":"")+a+`?mode=edit&spa=0&at=${o}&fileviewer=file-view-default`}return(k.i.test(e)?e:"https://github.com/"+e).replace(k.c,"")+"/edit"+`/${o}/`+(s?s.replace(k.c,"")+"/":"")+a}(t,n,o,a,s.$page.relativePath):""}),m=Object(o.a)(()=>s.$themeLocaleConfig.editLinkText||s.$themeConfig.editLinkText||"Edit this page"),g=Object(o.a)(()=>s.$showSubSideBar?{}:{paddingRight:"0"});return{recoShowModule:n,shouldShowComments:i,showAccessNumber:r,lastUpdated:c,lastUpdatedText:d,prev:p,next:u,editLink:h,editLinkText:m,pageStyle:g}}}),T=(s(402),Object(p.a)(S,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("main",{staticClass:"page"},[e("ModuleTransition",{attrs:{delay:"0.08"}},[e("section",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}]},[e("div",{staticClass:"content-wrapper",style:{padding:t.$showSubSideBar?"":"2rem 0"}},[e("Content",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],class:["theme-reco-content",{"theme-reco-content-noSubSideBar":!t.pageStyle}]}),t._v(" "),t.recoShowModule?e("SubSidebar",{staticClass:"side-bar"}):t._e()],1)])]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.16"}},[e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,rel:"noopener noreferrer",target:"_blank"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])]),t._v(" "),t.recoShowModule&&(t.prev||t.next)?e("ModuleTransition",{attrs:{delay:"0.24"}},[e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[e("i",[t._v("👈")]),t._v(" "),e("span",{staticClass:"mb-show"},[t._v("上一篇")]),t._v(" "),e("span",{staticClass:"pc-show"},[t._v(t._s(t.prev.title||t.prev.path))])]):t._e(),t._v(" "),t.next?e("router-link",{staticClass:"next",attrs:{to:t.next.path}},[e("span",{staticClass:"pc-show"},[t._v(t._s(t.next.title||t.next.path))]),t._v(" "),e("span",{staticClass:"mb-show"},[t._v("下一篇")]),t._v(" "),e("i",[t._v("👉")])]):t._e()],1)])]):t._e(),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.32"}},[t.recoShowModule?e("Comments",{attrs:{isShowComments:t.shouldShowComments}}):t._e()],1)],1)}),[],!1,null,null,null).exports),L=s(372),M=s(328),P=Object(o.c)({components:{HomeBlog:C,Page:T,Common:M.a,Footer:L.a,ModuleTransition:m.a},setup(t,e){const s=Object(l.b)(),a=Object(o.a)(()=>{const{$page:t,$site:e,$localePath:o}=s;return t?Object(k.l)(t,t.regularPath,e,o):[]}),n=Object(o.l)(!1);Object(o.h)(()=>{n.value=!0});const i=Object(o.a)(()=>null==s?void 0:s.$page.path);return{sidebarItems:a,show:n,path:i}}}),B=(s(324),Object(p.a)(P,(function(){var t=this._self._c;this._self._setupProxy;return t("Common",{attrs:{showModule:this.show,sidebarItems:this.sidebarItems}},[this.$frontmatter.title?t("Page",{key:this.path,attrs:{"sidebar-items":this.sidebarItems}}):t(this.$options.components.HomeBlog,{tag:"component"})],1)}),[],!1,null,null,null));e.default=B.exports}}]);