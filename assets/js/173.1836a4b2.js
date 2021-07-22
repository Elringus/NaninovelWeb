(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{461:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"开发控制台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发控制台"}},[t._v("#")]),t._v(" 开发控制台")]),t._v(" "),e("p",[t._v("开发控制台用于通过游戏内UI执行静态C＃方法。\nDevelopment console is used to execute static C# methods via in-game UI.")]),t._v(" "),e("p",[t._v("要在游戏运行时显示控制台用户界面，请确保在引擎配置中启用了开发控制台，然后按"),e("code",[t._v("~")]),t._v("（波浪号）键。如果您在使用默认按键时遇到问题（例如，在Mac OS上的Unity编辑器中），则可以通过 "),e("code",[t._v("Toggle Console Key")]),t._v(" 属性进行更改。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/bc56a837c03d198e2d8141bdebc2e696.png",alt:"Engine Configuration"}})]),t._v(" "),e("p",[t._v("要将C＃方法公开给控制台，请"),e("code",[t._v("ConsoleCommand")]),t._v("向静态方法添加属性。该属性具有可选的字符串参数，允许设置快捷调用，如下：")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token attribute"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConsoleCommand")]),e("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" ToggleDebugInfo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" UI"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DebugInfoGUI"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Toggle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("在控制台中，键入完整的方法名称或快捷调用（如果已应用），然后"),e("code",[t._v("Enter")]),t._v("键以执行该方法。")]),t._v(" "),e("p",[e("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"https://i.gyazo.com/bd41a9a8fff91eb575b235a6b641dcce.mp4",type:"video/mp4"}})])]),t._v(" "),e("p",[t._v("当前可以使用以下命令：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("命令")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("nav")]),t._v(" "),e("td",[t._v("切换naninovel脚本导航器UI。")])]),t._v(" "),e("tr",[e("td",[t._v("debug")]),t._v(" "),e("td",[t._v("切换"),e("RouterLink",{attrs:{to:"/zh/guide/naninovel-scripts.html#脚本Debug"}},[t._v("naninovel脚本调试")]),t._v(" 窗口。")],1)]),t._v(" "),e("tr",[e("td",[t._v("var")]),t._v(" "),e("td",[t._v("切换"),e("RouterLink",{attrs:{to:"/zh/guide/custom-variables.html#变量debug"}},[t._v("自定义变量编辑器")]),t._v(" 窗口。")],1)]),t._v(" "),e("tr",[e("td",[t._v("purge")]),t._v(" "),e("td",[t._v("使用"),e("RouterLink",{attrs:{to:"/zh/guide/resource-providers.html#google-drive"}},[t._v("Google云端硬盘")]),t._v(" 加载器时，将清除下载的资源缓存。")],1)]),t._v(" "),e("tr",[e("td",[t._v("play")]),t._v(" "),e("td",[t._v("开始执行当前加载的naninovel脚本。")])]),t._v(" "),e("tr",[e("td",[t._v("stop")]),t._v(" "),e("td",[t._v("暂停当前​​加载的naninovel脚本的执行。")])]),t._v(" "),e("tr",[e("td",[t._v("rewind (int)")]),t._v(" "),e("td",[t._v("将当前加载的naninovel脚本回退到提供的行索引。该行应为命令或常规文本。当倒退时，该行应存在于回滚堆栈中。")])]),t._v(" "),e("tr",[e("td",[t._v("reload")]),t._v(" "),e("td",[t._v("对当前播放的naninovel脚本执行 "),e("RouterLink",{attrs:{to:"/zh/guide/naninovel-scripts.html#热加载"}},[t._v("热重载")]),t._v(" 。仅在Unity编辑器中生效。")],1)])])]),t._v(" "),e("h2",{attrs:{id:"执行命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行命令"}},[t._v("#")]),t._v(" 执行命令")]),t._v(" "),e("p",[t._v("你可以通过开发控制台调用脚本命令。就像在naninovel脚本中一样输入命令字符串，它将立即执行。其他情况下，这对于调试自定义状态变量可能很有用。例如，你可以使用以下命令打印任何自定义变量的当前值：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@print {VariableName}\n")])])]),e("p",[t._v("— 将使用默认打印机打印 "),e("code",[t._v("VariableName")]),t._v(" 的值。")]),t._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/wcgTGro0_SE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p")])}),[],!1,null,null,null);a.default=n.exports}}]);