(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{435:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"engine-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#engine-services"}},[t._v("#")]),t._v(" Engine Services")]),t._v(" "),a("p",[t._v("Most of the engine features are implemented via engine services. Engine service is an implementation of an "),a("code",[t._v("IEngineService")]),t._v(" interface, which handles a specific job, like executing naninovel scripts, managing actors or saving-loading the game state.")]),t._v(" "),a("p",[t._v("In case you wish to interact with an engine system, you'll most likely want to use an engine service. You can get a reference to an engine service using "),a("code",[t._v("Engine.GetService<TService>()")]),t._v(" static method, where "),a("code",[t._v("TService")]),t._v(" is the interface of the service you wish to get; e.g., to get a "),a("code",[t._v("IScriptPlayer")]),t._v(" service:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" player "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IScriptPlayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nplayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTICE")]),t._v(" "),a("p",[t._v("The engine initialization procedure is asynchronous, so even when automatic initialization is enabled, engine APIs (eg, "),a("code",[t._v("GetService")]),t._v(" method) may not be available right after Unity loads a scene (eg, in "),a("code",[t._v("Awake")]),t._v(", "),a("code",[t._v("Start")]),t._v(" and "),a("code",[t._v("OnEnable")]),t._v(" "),a("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/MonoBehaviour.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MonoBehaviour"),a("OutboundLink")],1),t._v(" methods); see "),a("RouterLink",{attrs:{to:"/guide/integration-options.html#accessing-engine-api"}},[t._v("accessing engine API")]),t._v(" guide for more info.")],1)]),t._v(" "),a("p",[t._v("The following services are currently available:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Service Interface")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("IBackgroundManager")]),t._v(" "),a("td",[t._v("Manages "),a("RouterLink",{attrs:{to:"/guide/backgrounds.html"}},[t._v("background")]),t._v(" actors.")],1)]),t._v(" "),a("tr",[a("td",[t._v("ICharacterManager")]),t._v(" "),a("td",[t._v("Manages "),a("RouterLink",{attrs:{to:"/guide/characters.html"}},[t._v("character")]),t._v(" actors.")],1)]),t._v(" "),a("tr",[a("td",[t._v("IChoiceHandlerManager")]),t._v(" "),a("td",[t._v("Manages "),a("RouterLink",{attrs:{to:"/guide/choices.html"}},[t._v("choice handler")]),t._v(" actors.")],1)]),t._v(" "),a("tr",[a("td",[t._v("ITextPrinterManager")]),t._v(" "),a("td",[t._v("Manages "),a("RouterLink",{attrs:{to:"/guide/text-printers.html"}},[t._v("text printer")]),t._v(" actors.")],1)]),t._v(" "),a("tr",[a("td",[t._v("IAudioManager")]),t._v(" "),a("td",[t._v("Manages the audio: "),a("RouterLink",{attrs:{to:"/guide/audio.html#sound-effects"}},[t._v("SFX")]),t._v(", "),a("RouterLink",{attrs:{to:"/guide/audio.html#background-music"}},[t._v("BGM")]),t._v(" and "),a("RouterLink",{attrs:{to:"/guide/voicing.html"}},[t._v("voicing")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[t._v("IInputManager")]),t._v(" "),a("td",[t._v("Manages the user "),a("RouterLink",{attrs:{to:"/guide/input-processing.html"}},[t._v("input processing")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[t._v("ILocalizationManager")]),t._v(" "),a("td",[t._v("Manages the "),a("RouterLink",{attrs:{to:"/guide/localization.html"}},[t._v("localization")]),t._v(" activities.")],1)]),t._v(" "),a("tr",[a("td",[t._v("ITextManager")]),t._v(" "),a("td",[t._v("Handles "),a("RouterLink",{attrs:{to:"/guide/managed-text.html"}},[t._v("managed text")]),t._v(" feature.")],1)]),t._v(" "),a("tr",[a("td",[t._v("IMoviePlayer")]),t._v(" "),a("td",[t._v("Handles "),a("RouterLink",{attrs:{to:"/guide/movies.html"}},[t._v("movie")]),t._v(" playing.")],1)]),t._v(" "),a("tr",[a("td",[t._v("IScriptManager")]),t._v(" "),a("td",[t._v("Manages "),a("RouterLink",{attrs:{to:"/guide/naninovel-scripts.html"}},[t._v("naninovel script")]),t._v(" resources.")],1)]),t._v(" "),a("tr",[a("td",[t._v("IScriptPlayer")]),t._v(" "),a("td",[t._v("Handles "),a("RouterLink",{attrs:{to:"/guide/naninovel-scripts.html"}},[t._v("naninovel scripts")]),t._v(" execution.")],1)]),t._v(" "),a("tr",[a("td",[t._v("ICameraManager")]),t._v(" "),a("td",[t._v("Manages cameras and other systems required for scene rendering.")])]),t._v(" "),a("tr",[a("td",[t._v("IResourceProviderManager")]),t._v(" "),a("td",[t._v("Manages "),a("code",[t._v("IResourceProvider")]),t._v(" objects.")])]),t._v(" "),a("tr",[a("td",[t._v("IStateManager")]),t._v(" "),a("td",[t._v("Handles "),a("code",[t._v("IEngineService")]),t._v("-related persistent data de-/serialization; provides API to "),a("RouterLink",{attrs:{to:"/guide/save-load-system.html"}},[t._v("save and load")]),t._v(" game state.")],1)]),t._v(" "),a("tr",[a("td",[t._v("IUIManager")]),t._v(" "),a("td",[t._v("Manages "),a("code",[t._v("IManagedUI")]),t._v(" objects and handles "),a("RouterLink",{attrs:{to:"/guide/user-interface.html#ui-customization"}},[t._v("UI customization")]),t._v(" feature.")],1)]),t._v(" "),a("tr",[a("td",[t._v("ICustomVariableManager")]),t._v(" "),a("td",[t._v("Provides access and allows modifying "),a("RouterLink",{attrs:{to:"/guide/custom-variables.html"}},[t._v("custom variables")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[t._v("ISpawnManager")]),t._v(" "),a("td",[t._v("Manages objects spawned with "),a("a",{attrs:{href:"/api/#spawn",target:"_blank"}},[a("code",[t._v("@spawn")])]),t._v(" commands.")])]),t._v(" "),a("tr",[a("td",[t._v("IUnlockableManager")]),t._v(" "),a("td",[t._v("Manages "),a("RouterLink",{attrs:{to:"/guide/unlockable-items.html"}},[t._v("unlockable items")]),t._v(" (CG and movie gallery items, tips, etc).")],1)])])]),t._v(" "),a("p",[t._v("You can find built-in implementations of the services in the runtime source code stored at "),a("code",[t._v("Naninovel/Runtime")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"adding-custom-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-custom-services"}},[t._v("#")]),t._v(" Adding Custom Services")]),t._v(" "),a("p",[t._v("To add a new custom engine service, implement "),a("code",[t._v("IEngineService")]),t._v(" interface and add "),a("code",[t._v("InitializeAtRuntime")]),t._v(" attribute to the implementing class. Instance of the implementation will automatically be created during the engine initialization and become available via "),a("code",[t._v("Engine.GetService<TService>()")]),t._v(" API.")]),t._v(" "),a("div",{staticClass:"custom-block warn"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("When adding custom implementation types under a non-predefined assembly (via "),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/ScriptCompilationAssemblyDefinitionFiles.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("assembly definitions"),a("OutboundLink")],1),t._v("), add the assembly name to the "),a("code",[t._v("Type Assemblies")]),t._v(" list found in the engine configuration menu. Otherwise, the engine won't be able to locate your custom types.")])]),t._v(" "),a("p",[t._v("You can force your custom service to be initialized before or after other services using "),a("code",[t._v("InitializationPriority")]),t._v(" argument of "),a("code",[t._v("InitializeAtRuntime")]),t._v(" attribute; lower values will push it before other services in the initialization queue and vice-versa.")]),t._v(" "),a("p",[t._v("In order to be automatically instantiated, service implementation should have a compatible constructor (or a default one). Following arguments (in any order) are allowed:")]),t._v(" "),a("ul",[a("li",[t._v("Any number of other services ("),a("code",[t._v("IEngineService")]),t._v("-derived)")]),t._v(" "),a("li",[t._v("Any number of configuration objects ("),a("code",[t._v("Configuration")]),t._v("-derived)")]),t._v(" "),a("li",[t._v('A Unity\'s "MonoBehavior" proxy object ('),a("code",[t._v("IEngineBehaviour")]),t._v("-derived)")])]),t._v(" "),a("p",[t._v("Be aware, that it's not safe to use other services in the constructor. Instead, perform any initialization activities that require using other services at "),a("code",[t._v("InitializeServiceAsync")]),t._v(" method; to make sure required services are initialized when you're accessing them, list them in the service constructor (initialization queue is topologically sorted based on the constructor arguments).")]),t._v(" "),a("p",[t._v("In case your custom service has a persistent state, which you wish to de-/serialize with other engine services, implement "),a("code",[t._v("IStatefulService<TState>")]),t._v(" interface, where "),a("code",[t._v("TState")]),t._v(" is either "),a("code",[t._v("GameStateMap")]),t._v(", "),a("code",[t._v("GlobalStateMap")]),t._v(" or "),a("code",[t._v("SettingsStateMap")]),t._v(" depending if you want to store the state with the game sessions-specific, global state or settings. It's allowed to implement all three interfaces for a single service if required. For more information on different types of engine state see "),a("RouterLink",{attrs:{to:"/guide/state-management.html"}},[t._v("state management guide")]),t._v(".")],1),t._v(" "),a("p",[t._v("Below is an example of a custom engine service implementation with some usage notices.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UniRx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UnityEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InitializeAtRuntime")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEngineService")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputManager")]),t._v(" inputManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScriptPlayer")]),t._v(" scriptPlayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" CustomService "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputManager")]),t._v(" inputManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScriptPlayer")]),t._v(" scriptPlayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The services are potentially not yet initialized here, ")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// refrain from using them.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inputManager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" inputManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scriptPlayer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scriptPlayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("UniTask")]),t._v(" InitializeServiceAsync "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initialize the service here.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// It's now safe to use services requested in the constructor.")]),t._v("\n        Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProcessInput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scriptPlayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PlayedScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" UniTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CompletedTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" ResetService "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Reset service state here.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" DestroyService "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Stop the service and release any used resources here.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("You can now access the aforementioned custom service it in the following way:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" customService "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CustomService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block example"},[a("p",{staticClass:"custom-block-title"},[t._v("EXAMPLE")]),t._v(" "),a("p",[t._v("Another example of adding a custom engine service to manage item resources and configuration of an inventory UI can be found in the "),a("a",{attrs:{href:"https://github.com/Naninovel/Inventory",target:"_blank",rel:"noopener noreferrer"}},[t._v("inventory example project on GitHub"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Specifically, the custom engine service is implemented via "),a("a",{attrs:{href:"https://github.com/Naninovel/Inventory/blob/master/Assets/NaninovelInventory/Runtime/InventoryManager.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("InventoryManager.cs"),a("OutboundLink")],1),t._v(" runtime script.")])]),t._v(" "),a("h2",{attrs:{id:"overriding-built-in-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overriding-built-in-services"}},[t._v("#")]),t._v(" Overriding Built-in Services")]),t._v(" "),a("p",[t._v("All the built-in services are referenced via interfaces in the engine source code, making it possible to swap any of them with a custom implementation.")]),t._v(" "),a("p",[t._v("Add a custom service in the same way as described above, but instead of "),a("code",[t._v("IEngineService")]),t._v(" implement a concrete engine interface and specify the overridden type (implementation type, not the interface) via "),a("code",[t._v("InitializeAtRuntime")]),t._v(" attribute. Your custom implementation will then be initialized instead of the built-in one.")]),t._v(" "),a("p",[t._v("Below is an example of a dummy "),a("code",[t._v("IInputManager")]),t._v(" implementation, that does nothing, but logs when any of its methods are invoked.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UniRx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UnityEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InitializeAtRuntime")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("InputManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomInputManager")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IInputManager")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("InputConfiguration")]),t._v(" Configuration "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" ProcessInput "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" CustomInputManager "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputConfiguration")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Configuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("UniTask")]),t._v(" InitializeServiceAsync "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomInputManager::InitializeServiceAsync()"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" UniTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CompletedTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" ResetService "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomInputManager::ResetService()"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" DestroyService "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomInputManager::DestroyService()"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("IInputSampler")]),t._v(" GetSampler "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" bindingName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token interpolation-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('$"CustomInputManager::GetSampler(')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[t._v("bindingName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(')"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" AddBlockingUI "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IManagedUI")]),t._v(" ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("params")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" allowedSamplers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token interpolation-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('$"CustomInputManager::AddBlockingUI(')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[t._v("ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(')"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" RemoveBlockingUI "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IManagedUI")]),t._v(" ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token interpolation-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('$"CustomInputManager::RemoveBlockingUI(')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[t._v("ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(')"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Now, when an input manager is requested via "),a("code",[t._v("Engine.GetService<IInputManager>()")]),t._v(", your custom implementation will be provided instead of the built-in "),a("code",[t._v("Naninovel.InputManager")]),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);