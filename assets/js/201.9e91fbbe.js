(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{431:function(t,e,a){"use strict";a.r(e);var r=a(42),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"语音"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语音"}},[t._v("#")]),t._v(" 语音")]),t._v(" "),a("p",[t._v("向引擎添加语音剪辑，将他们存放至"),a("code",[t._v("Resources/Naninovel/Voice")]),t._v(" （可以通过音频配置菜单的 "),a("code",[t._v("Loader")]),t._v(" 修改）。\n你也可以通过子文件夹来管理相应资源。脚本中需要使用("),a("code",[t._v("/")]),t._v(")调用。比如"),a("code",[t._v("Resources/Naninovel/Voice/Intro/Day/25.wav")]),t._v("的资源，脚本中的调用为："),a("code",[t._v("Voice/Intro/Day/25")]),t._v("。")]),t._v(" "),a("p",[t._v("使用"),a("RouterLink",{attrs:{to:"/zh/guide/resource-providers.html#寻址资源系统"}},[t._v("可寻址资源系统")]),t._v(' 来手动公开资源也是可以的。公开资源地址和上述相同，但是需要省略"Resources/"部分。比如开放 "Hello.wav" 声音剪辑，注册地址为'),a("code",[t._v("Naninovel/Voice/Hello")]),t._v("。注意，该系统默认不启用你可以通过资源配置菜单的"),a("code",[t._v("Enable Addressable In Editor")]),t._v("属性来启用。")],1),t._v(" "),a("p",[t._v("你可以使用任何 "),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/AudioFiles.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unity支持"),a("OutboundLink")],1),t._v(" 的影片格式。")]),t._v(" "),a("p",[t._v("在菜单 "),a("code",[t._v("Naninovel -> Configuration -> Audio")]),t._v(" 配置语音表现，可用配置选项参考"),a("RouterLink",{attrs:{to:"/zh/guide/configuration.html#音频"}},[t._v("属性配置")]),t._v("。")],1),t._v(" "),a("p",[t._v("在Naninovel脚本中使用"),a("a",{attrs:{href:"/zh/api/#voice",target:"_blank"}},[a("code",[t._v("@voice")])]),t._v("命令，后接剪辑名字（路径）来播放语音。")]),t._v(" "),a("h2",{attrs:{id:"自动语音"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动语音"}},[t._v("#")]),t._v(" 自动语音")]),t._v(" "),a("p",[t._v("在全语音的游戏中，每个语音内容都用"),a("a",{attrs:{href:"/zh/api/#voice",target:"_blank"}},[a("code",[t._v("@voice")])]),t._v("命令配置会很麻烦。自动发声功能允许自动播放名称和当前执行的"),a("a",{attrs:{href:"/zh/api/#print",target:"_blank"}},[a("code",[t._v("@print")])]),t._v("命令的行号相同的语音剪辑；这样就完全不需要在naninovel脚本中使用 "),a("a",{attrs:{href:"/zh/api/#voice",target:"_blank"}},[a("code",[t._v("@voice")])]),t._v(" 命令-当在游戏中打印相应的文本行时，声音会自动播放。")]),t._v(" "),a("p",[t._v("要启用自动语音功能，在配置菜单中打开 "),a("code",[t._v("Enable Auto Voicing")]),t._v(" 选项。")]),t._v(" "),a("p",[t._v("使用该特性的音频文件应放在和要使用的脚本一样命名的文件夹，命名按"),a("em",[t._v("行序号")]),t._v("."),a("em",[t._v("命令序号")]),t._v("方式命名，"),a("em",[t._v("行序号")]),t._v("是使用这句语音的打印文本序号，"),a("em",[t._v("命令序号")]),t._v("是行内处理常规文本，第几个"),a("a",{attrs:{href:"/zh/api/#print",target:"_blank"}},[a("code",[t._v("@print")])]),t._v("命令的序号。")]),t._v(" "),a("p",[t._v('比如，以下为"Script001"的脚本：')]),t._v(" "),a("div",{staticClass:"language-nani extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nani"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command function"}},[a("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@print")]),a("span",{pre:!0,attrs:{class:"token command-params"}},[a("span",{pre:!0,attrs:{class:"token command-param-id property"}},[t._v(" text:")]),a("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[t._v('"Text from a print command."')])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[t._v("Text from a simple generic text line.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[t._v("Text from first sentence."),a("span",{pre:!0,attrs:{class:"token inline-command function"}},[a("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token command-param-name name"}},[t._v("i")]),a("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("]")])]),t._v(" Text from second sentence.")]),t._v("\n")])])]),a("p",[t._v("要对应上述行自动播放语音，音频剪辑应该放在"),a("code",[t._v("Resources/Naninovel/Voice/Script001")]),t._v("文件夹下（或使用"),a("RouterLink",{attrs:{to:"/zh/guide/resource-providers.html#寻址资源系统"}},[t._v("可寻址资源系统")]),t._v(" ），并按下表命名：")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("文本")]),t._v(" "),a("th",[t._v("音频剪辑名")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Text from a print command.")]),t._v(" "),a("td",[t._v("1.0")])]),t._v(" "),a("tr",[a("td",[t._v("Text from a simple generic text line.")]),t._v(" "),a("td",[t._v("2.0")])]),t._v(" "),a("tr",[a("td",[t._v("Text from first sentence.")]),t._v(" "),a("td",[t._v("3.0")])]),t._v(" "),a("tr",[a("td",[t._v("Text from second sentence.")]),t._v(" "),a("td",[t._v("3.2")])])])]),t._v(" "),a("p",[t._v("为简化设置，当该功能启用时，自动语音的音频命名会在debug窗口上显示出来，如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/12772ecc7c14011bcde4a74c81e997b8.png",alt:"auto voicing"}})]),t._v(" "),a("p",[t._v("要打开debug窗口，确保配置菜单中"),a("code",[t._v("Enable Development Console")]),t._v("启用，在play mode运行时按 "),a("code",[t._v("~")]),t._v(" 输入"),a("code",[t._v("debug")]),t._v("按 "),a("code",[t._v("Enter")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"声音分配文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声音分配文件"}},[t._v("#")]),t._v(" 声音分配文件")]),t._v(" "),a("p",[t._v("可以通过菜单"),a("code",[t._v("Naninovel -> Tools -> Voiceover Documents")]),t._v("来生成该文件，内容包含脚本中使用 "),a("a",{attrs:{href:"/zh/api/#print",target:"_blank"}},[a("code",[t._v("@print")])]),t._v(" 命令的和一般常规文本行。每条文本都会和自动语音功能对应音频名字关联。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/69466444d4b8b43d76e7f1566db5ca9a.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("Locale")]),t._v(" 是用于选择对应的本地化所需来生成（限选已添加进项目的本地化配置）。")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("Use Markdown Format")]),t._v(" 开启时，生成文件会按照"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Markdown",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown格式"),a("OutboundLink")],1),t._v(" (.md 扩展名)，这样会有更好的可读性。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/ed6776026a79140de9e9f6a155faffdc.png",alt:""}})]),t._v(" "),a("p",[t._v("该文件旨在方便配音演员在配音时使用。")])])}),[],!1,null,null,null);e.default=n.exports}}]);