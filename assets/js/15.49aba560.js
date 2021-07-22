(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{468:function(e,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),a("h2",{attrs:{id:"unity-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unity-version"}},[e._v("#")]),e._v(" Unity Version")]),e._v(" "),a("p",[e._v("Minimum supported Unity version is 2019.4.x; this won't change until the stream is out of maintenance (expected in summer 2022), at which point we'll upgrade to the next LTS stream.")]),e._v(" "),a("p",[e._v('In case breaking changes or critical fixes are introduced throughout the release cycle, minimum supported patch version (the ".x" part) could change. You can always find minimum supported Unity version for specific Naninovel release in the '),a("a",{attrs:{href:"https://github.com/Naninovel/Documentation/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("change log"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Support for new releases from the "),a("a",{attrs:{href:"https://blogs.unity3d.com/2018/04/09/new-plans-for-unity-releases-introducing-the-tech-and-long-term-support-lts-streams/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TECH stream"),a("OutboundLink")],1),e._v(" is added once they're out of beta.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTICE")]),e._v(" "),a("p",[e._v("Unity "),a("a",{attrs:{href:"https://unity3d.com/unity/whats-new/2019.4.24",target:"_blank",rel:"noopener noreferrer"}},[e._v("2019.4.24"),a("OutboundLink")],1),e._v(" is the most tested and stable version to use with Naninovel at the moment. It's not uncommon for Unity to introduce regressions even in LTS patches (let alone minor and major releases), so we highly recommend using this version to minimize production risks.")])]),e._v(" "),a("h2",{attrs:{id:"upm-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upm-packages"}},[e._v("#")]),e._v(" UPM Packages")]),e._v(" "),a("p",[e._v('Only verified package versions are supported. When installing or updating a package via UPM (unity package manager), make sure it has a "verified" label for the Unity version you\'re currently using.')]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/a06f8b0cefff2fc5e578c60cae4ed33f.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"platforms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platforms"}},[e._v("#")]),e._v(" Platforms")]),e._v(" "),a("p",[e._v("All the engine features are implemented using cross-platform APIs and are expected to be compatible with all the platforms Unity can target.")]),e._v(" "),a("p",[e._v("The following platforms were tested for compatibility:")]),e._v(" "),a("ul",[a("li",[e._v("Standalone: PC, Mac, Linux")]),e._v(" "),a("li",[e._v("WebGL")]),e._v(" "),a("li",[e._v("iOS")]),e._v(" "),a("li",[e._v("Android")]),e._v(" "),a("li",[e._v("UWP (IL2CPP scripting backend only)")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTICE")]),e._v(" "),a("p",[e._v("While Unity allows building for game consoles (Switch, PlayStation, Xbox, etc), some features (eg, IO-related) are not implemented out of the box, as access to the platform-specific SDKs is restricted for registered developers only. In Naninovel case, this affects the save system, which will require implementing "),a("RouterLink",{attrs:{to:"/guide/state-management.html#custom-serialization-handlers"}},[e._v("custom serialization handlers")]),e._v(" in order to work correctly on the consoles. Find more information about developing for game consoles in "),a("a",{attrs:{href:"https://unity.com/how-to/develop-console-video-games-unity",target:"_blank",rel:"noopener noreferrer"}},[e._v("the article"),a("OutboundLink")],1),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"enter-play-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enter-play-mode"}},[e._v("#")]),e._v(" Enter Play Mode")]),e._v(" "),a("p",[e._v("Naninovel supports disabling both "),a("code",[e._v("Reload Domain")]),e._v(" and "),a("code",[e._v("Reload Scene")]),e._v(' options under "Enter Play Mode Settings" category of the project settings. Disabling the options will make entering play mode take less time, especially in large projects.')]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/dd0a3037a0bca8b73608ecc7b71c3982.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"render-pipelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render-pipelines"}},[e._v("#")]),e._v(" Render Pipelines")]),e._v(" "),a("p",[e._v("While it's possible to use Nanionvel with Unity's "),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/render-pipelines.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("scriptable render pipelines"),a("OutboundLink")],1),e._v(" (both URP and HDRP), some built-in features may not work out of the box and we won't be able to provide any support in such cases; see "),a("RouterLink",{attrs:{to:"/guide/render-pipelines.html"}},[e._v("render pipelines guide")]),e._v(" for more information.")],1),e._v(" "),a("h2",{attrs:{id:"managed-stripping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#managed-stripping"}},[e._v("#")]),e._v(" Managed Stripping")]),e._v(" "),a("p",[e._v('"Medium" and "High" '),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/ManagedCodeStripping.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("managed bytecode stripping"),a("OutboundLink")],1),e._v(' profiles are not supported. Either disable the stripping or use the "Low" profile (set by default).')])])}),[],!1,null,null,null);t.default=r.exports}}]);