(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{426:function(t,s,a){"use strict";a.r(s);var v=a(2),e=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[t._v("官话")]),s("p",[t._v("简单的说 Node.js 就是运行在服务端的 JavaScript。"),s("br"),t._v("\nNode.js 是一个基于 Chrome JavaScript 运行时建立的一个平台。"),s("br"),t._v("\nNode.js 是一个事件驱动 I/O 服务端 JavaScript 环境，基于 Google 的 V8 引擎，V8 引擎执行 Javascript 的速度非常快，性能非常好")])]),t._v(" "),s("h2",{attrs:{id:"大白话"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大白话"}},[t._v("#")]),t._v(" 大白话")]),t._v(" "),s("p",[t._v("Js 需要一个解析器才能运行，在不同的位置有不一样的解析器。如写入html的js语言，浏览器是它的解析器角色。而对于需要独立运行的JS，nodejs就是一个解析器。")]),t._v(" "),s("ul",[s("li",[t._v("运行在浏览器中的js的用途是操作DOM，浏览器就提供了document之类的内置对象。")]),t._v(" "),s("li",[t._v("而运行在nodejs中的js的用途是操作文件或搭建http服务器等，nodejs就相应提供了fs,http等内置对象。")])]),t._v(" "),s("h2",{attrs:{id:"特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),s("h3",{attrs:{id:"单线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[t._v("#")]),t._v(" "),s("strong",[t._v("单线程")])]),t._v(" "),s("p",[t._v("Node.js 使用单线程来运行，而不是向 Apache HTTP 之类的其它服务器，每个请求将生产一个线程，这种方法避免了 CPU 上下文切换和内存中的大量执行堆栈，这也是 Nginx 和其它服务器为解决 “上一个 10 年，著名的 C10K 并发连接问题” 而采用的方法。")]),t._v(" "),s("h3",{attrs:{id:"非阻塞-i-o"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非阻塞-i-o"}},[t._v("#")]),t._v(" "),s("strong",[t._v("非阻塞 I/O")])]),t._v(" "),s("p",[t._v("Node.js 避免了由于需要等待输入或者输出（数据库、文件系统、Web服务器...）响应而造成的 CPU 时间损失，这得益于 Libuv 强大的异步 I/O。")]),t._v(" "),s("h3",{attrs:{id:"事件驱动编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动编程"}},[t._v("#")]),t._v(" "),s("strong",[t._v("事件驱动编程")])]),t._v(" "),s("p",[t._v("事件与回调在 JavaScript 中已是屡见不鲜，同时这种编程对于习惯同步思路的同学来说可能一时很难理解，但是这种编程模式，确是一种高性能的服务模型。 Node.js 与 Nginx 均是基于事件驱动的方式实现，不同之处在于 Nginx 采用纯 C 进行编写，仅适用于 Web 服务器，在业务处理方面 Node.js 则是一个可扩展、高性能的平台。")]),t._v(" "),s("h3",{attrs:{id:"跨平台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨平台"}},[t._v("#")]),t._v(" "),s("strong",[t._v("跨平台")])]),t._v(" "),s("p",[t._v("起初 Node.js 只能运行于 Linux 平台，在 v0.6.0 版本后得益于 Libuv 的支持可以在 Windows 平台运行。")]),t._v(" "),s("h2",{attrs:{id:"适用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),s("ul",[s("li",[t._v("JSON APIL ——构建一个Rest/JSON API服务，node.js可以充分发挥其非堵塞IO模型以及javascript对JSON的功能支持")]),t._v(" "),s("li",[t._v("单页面、多Ajax请求应用——前端有大量的异步请求，需要服务器后端有极高的响应速度")]),t._v(" "),s("li",[t._v("基于node.js开发Unix命令行工具——node.js可以大量产生子进程，并以流的方式输出")]),t._v(" "),s("li",[t._v("流式数据——传统的web应用，通常会将HTTP 请求喝响应看成是原子事件。而node.js会充分利用流式数据这个特点，构建非常酷的应用")])]),t._v(" "),s("h2",{attrs:{id:"系统模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统模块"}},[t._v("#")]),t._v(" 系统模块")]),t._v(" "),s("ul",[s("li",[t._v("系统模块： 随着Nodejs一起安装，并由官方进行维护的模块。\n"),s("ul",[s("li",[t._v("常用的系统模块： fs、http、url、path等")])])]),t._v(" "),s("li",[t._v("一个模块中包含了很多方法和属性，可以帮助我们实现不同的功能")])]),t._v(" "),s("h2",{attrs:{id:"全局变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局变量"}},[t._v("#")]),t._v(" 全局变量")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("__dirname：")]),t._v(" 当前执行脚本所在的目录。"),s("code",[t._v("/Users/xujiale/Desktop/tool")])]),t._v(" "),s("li",[s("strong",[t._v("__filename：")]),t._v(" 当前正在执行脚本的文件名。"),s("code",[t._v("/Users/xujiale/Desktop/tool/test.js")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);