(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{449:function(e,a,t){"use strict";t.r(a);var s=t(42),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"影片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#影片"}},[e._v("#")]),e._v(" 影片")]),e._v(" "),t("p",[e._v("影片是通过场景中的"),t("code",[e._v("IMovieUI")]),e._v("UI来播放，在播放时，代码执行和用户输入都会被中断。")]),e._v(" "),t("p",[e._v("开始播放前会有默认的黑色渐入效果，播放结束的时候会有黑色渐隐特效。")]),e._v(" "),t("p",[e._v("玩家可以通过"),t("code",[e._v("Cancel")]),e._v(" 的输入（默认"),t("code",[e._v("Esc")]),e._v("）来取消播放。按键绑定可以通过输入配置菜单修改。")]),e._v(" "),t("p",[e._v("要添加，编辑和移除影片资源，使用"),t("code",[e._v("Naninovel -> Resources -> Movies")]),e._v("菜单内的配置：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/aace59f30f42245fc3ba714d10815d46.png",alt:"Manage Movies"}})]),e._v(" "),t("p",[e._v("你可以使用任何 "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/VideoSources-FileCompatibility",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unity支持"),t("OutboundLink")],1),e._v(" 的影片格式。")]),e._v(" "),t("p",[e._v("影片相关表现，可以通过"),t("code",[e._v("Naninovel -> Configuration -> Movies")]),e._v("菜单来配置，其他可选配置参考"),t("RouterLink",{attrs:{to:"/zh/guide/configuration.html#影片"}},[e._v("属性配置")])],1),e._v(" "),t("p",[e._v("在Naninovel脚本中使用 "),t("a",{attrs:{href:"/zh/api/#movie",target:"_blank"}},[t("code",[e._v("@movie")])]),e._v(" 加影片名来播放相应影片：")]),e._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; 播放添加到影片资源中的名为“Opening”的影片。")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@movie")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("Opening")])])]),e._v("\n")])])]),t("p",[e._v("影片播放默认比例为16:9来避免拉伸。你可以"),t("RouterLink",{attrs:{to:"/zh/guide/user-interface.html#UI自定义"}},[e._v("重写")]),e._v(" "),t("code",[e._v("IMovieUI")]),e._v(" UI。"),t("code",[e._v("MovieImage")]),e._v("物体上的"),t("code",[e._v("Aspect Ratio Fitter")]),e._v("组件控制了视频播放比例。")],1),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/38e8b1fc220d5fedd50f62ab855b2e92.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"webgl限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webgl限制"}},[e._v("#")]),e._v(" WebGL限制")]),e._v(" "),t("p",[e._v("由于平台限制，WebGL平台下仅支持URL流的视频播放。当发布WebGL平台时，所有影片资源路径会变为"),t("code",[e._v("Assets/StreamingAssets")]),e._v("。确保你的网页寄存配置能够让本地文件获取到玩家的发布路径。")])])}),[],!1,null,null,null);a.default=n.exports}}]);