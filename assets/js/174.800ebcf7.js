(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{362:function(t,e,n){"use strict";n.r(e);var a=n(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"引擎架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引擎架构"}},[t._v("#")]),t._v(" 引擎架构")]),t._v(" "),n("p",[t._v("该引擎在设计时考虑了以下原则： "),n("strong",[t._v("场景独立性")]),t._v(" 和 "),n("strong",[t._v("面向服务")]),t._v(" 。")]),t._v(" "),n("h2",{attrs:{id:"独立于场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#独立于场景"}},[t._v("#")]),t._v(" 独立于场景")]),t._v(" "),n("p",[t._v("虽然Unity设计推荐使用场景和预制体开发，但是在开发视觉小说时并不是很实际。")]),t._v(" "),n("p",[t._v("所有Naninovel系统并不直接和"),n("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/MonoBehaviour.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MonoBehaviour"),n("OutboundLink")],1),t._v(" 关联，或依附于"),n("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Object.DontDestroyOnLoad.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("持久化"),n("OutboundLink")],1),t._v(" 的 "),n("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/GameObject.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GameObject"),n("OutboundLink")],1),t._v(" 。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://i.gyazo.com/9805e2ce450bc486a007cdc001f8ae13.png",alt:""}})]),t._v(" "),n("p",[t._v("下列根物体会根据运行环境使用：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("Naninovel<Runtime>")]),t._v(" 运行时（发布后和编辑器模式play mode运行时）")]),t._v(" "),n("li",[n("code",[t._v("Naninovel<Editor>")]),t._v(" 编辑器模式（非play mode运行时）")])]),t._v(" "),n("p",[t._v("所有必需的游戏对象都是在引擎初始化时创建的，在应用启动时（在刚进入Play mode或启动发布包后）自动通过"),n("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/RuntimeInitializeOnLoadMethodAttribute.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RuntimeInitializeOnLoadMethod"),n("OutboundLink")],1),t._v(" （运行时初始化onload方法）方法异步加载。你可以在配置菜单关闭 "),n("code",[t._v("Initialize On Application Load")]),t._v(" 属性不在启动时初始化，在之后手动调用"),n("code",[t._v("RuntimeInitializer")]),t._v(" (运行模式下) 或 "),n("code",[t._v("EditorInitializer")]),t._v(" (编辑器模式下)来初始化。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://i.gyazo.com/f58a8af9f2f6d71286061e55fc228896.png",alt:""}})]),t._v(" "),n("p",[t._v("因为初始化时异步进行的，在调用 "),n("code",[t._v("InitializeAsync()")]),t._v(" 方法或订阅静态事件"),n("code",[t._v("Engine.OnInitialized")]),t._v(" 时使用"),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 Async 和 Await 的异步编程"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("要完全禁用所有引擎系统并将其从内存中删除，请使用"),n("code",[t._v("Engine.Destroy()")]),t._v("静态方法。")]),t._v(" "),n("h2",{attrs:{id:"面向服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面向服务"}},[t._v("#")]),t._v(" 面向服务")]),t._v(" "),n("p",[t._v("大多数引擎功能都是通过引擎服务实现的。引擎服务是IEngineService接口的实现，该接口会处理特定的功能，例如执行naninovel脚本，管理演出元素或保存加载游戏状态。")]),t._v(" "),n("p",[t._v("如果你想和引擎系统交互，大概率你是想使用某个引擎服务。你可以通过静态方法"),n("code",[t._v("Engine.GetService<TService>()")]),t._v("来获得相关引擎服务参考， "),n("code",[t._v("TService")]),t._v(" 指你想要获取到的服务，比如，获取"),n("code",[t._v("IScriptPlayer")]),t._v(" 服务：")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" player "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token generic-method"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),n("span",{pre:!0,attrs:{class:"token generic class-name"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IScriptPlayer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nplayer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("你可以在"),n("RouterLink",{attrs:{to:"/zh/guide/engine-services.html"}},[t._v("引擎服务")]),t._v(" 中找到现在可用的服务列表，和关于如何重写/添加自定义服务的信息。")],1),t._v(" "),n("h2",{attrs:{id:"高级概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高级概念"}},[t._v("#")]),t._v(" 高级概念")]),t._v(" "),n("p",[t._v("下面的UML图说明了引擎体系结构的高级概念。请注意，图中的所有类和接口名称都在Naninovel命名空间下。例如，要引用 "),n("code",[t._v("Engine")]),t._v(" 类，请使用 "),n("code",[t._v("Naninovel.Engine")]),t._v("或"),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/namespaces/using-namespaces",target:"_blank",rel:"noopener noreferrer"}},[t._v("包含名称空间"),n("OutboundLink")],1),t._v(" 。")]),t._v(" "),n("p",[n("object",{staticStyle:{width:"100%","max-width":"699px"},attrs:{data:"/engine-design.svg",type:"image/svg+xml"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);