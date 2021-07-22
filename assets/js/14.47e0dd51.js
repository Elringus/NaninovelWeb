(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{459:function(e,o,t){"use strict";t.r(o);var r=t(42),a=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"community-modding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#community-modding"}},[e._v("#")]),e._v(" Community Modding")]),e._v(" "),t("p",[e._v("Community modding feature allows players to modify the build, adding their own scenarios and resources, while also having access to the game built-in resources.")]),e._v(" "),t("p",[e._v("To activate the feature, enable "),t("code",[e._v("Enable Community Modding")]),e._v(" property in the script's configuration UI accessible with "),t("code",[e._v("Naninovel -> Configuration -> Scripts")]),e._v(" context menu and "),t("RouterLink",{attrs:{to:"/guide/resource-providers.html#local"}},[e._v("setup local provider")]),e._v(" for the resources, that should be exposed for modding; make sure local provider's root path is set to default value ("),t("code",[e._v("%DATA%/Resources")]),e._v("), so it will look for the additional resources under the build directory.")],1),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/e32f40aa3faa648774908a0a937c5fcb.png",alt:""}})]),e._v(" "),t("p",[e._v('When the feature is enabled, an "EXTERNAL SCRIPTS" button will appear in the title menu; it will open external scripts browser. While in editor the browser will also list naninovel scripts from the project assets.')]),e._v(" "),t("p",[e._v("Notice, that "),t("code",[e._v("External Loader")]),e._v(" configuration controls which scripts to show under the external scripts browser, while "),t("code",[e._v("Loader")]),e._v(" configures loading of the actual script resources. External loader has Local provider set by default, so it will only look for the scripts under the game build directory; for other resource types (backgrounds, characters, etc) you have to manually setup local providers in the corresponding configuration menus to allow players adding them. Find more about how the resource providers work and how to set up them in the "),t("RouterLink",{attrs:{to:"/guide/resource-providers.html"}},[e._v("resource providers guide")]),e._v(".")],1),e._v(" "),t("p",[e._v("To add external resources to the build, drop them to sub-folders under game's "),t("code",[e._v("Resources")]),e._v(" directory corresponding to the resource's "),t("code",[e._v("Path Prefix")]),e._v(" property configured under "),t("code",[e._v("Loader")]),e._v(" foldout. For example, to add an external naninovel script, drop it to "),t("code",[e._v("GameFolder/GameName_Data/Resources/Scripts")]),e._v(" folder; backgrounds will go to "),t("code",[e._v("GameFolder/GameName_Data/Resources/Backgrounds")]),e._v(" and so on. "),t("em",[e._v("GameFolder")]),e._v(" and "),t("em",[e._v("GameName")]),e._v(" will depend on the name of your Unity project.")]),e._v(" "),t("p",[e._v("External scripts browser UI can be customized or completely replaced using "),t("RouterLink",{attrs:{to:"/guide/user-interface.html#ui-customization"}},[e._v("UI Customization")]),e._v(" feature.")],1)])}),[],!1,null,null,null);o.default=a.exports}}]);