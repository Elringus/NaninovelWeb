(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{402:function(a,e,t){"use strict";t.r(e);var r=t(42),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"разбnокируемые-эnементы"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#разбnокируемые-эnементы"}},[a._v("#")]),a._v(" Разблокируемые элементы")]),a._v(" "),t("p",[a._v("Функция разблокировки позволяет управлять элементами, которые имеют постоянное состояние блокировки или разблокировки. Вы можете использовать его различными способами, например, для представления слотов в CG или видеогалерее, достижений, советов и других систем, где некоторвый объект должен быть в состоянии стать разблокированным или активированным, когда игрок выполняет требуемое условие.")]),a._v(" "),t("p",[a._v("Каждый разблокируемый элемент представлен строковым идентификатором и булевым значением, указывающим, разблокирован ли элемент. В сценариях Naninovel используйте команды "),t("a",{attrs:{href:"/api/#unlock",target:"_blank"}},[t("code",[a._v("@unlock")])]),a._v(" и "),t("a",{attrs:{href:"/api/#lock",target:"_blank"}},[t("code",[a._v("@lock")])]),a._v(", чтобы соответственно разблокировать и заблокировать элемент с определенным ID, например:")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@unlock")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("SecretAchievement")])])]),a._v("\n")])])]),t("p",[a._v("— разблокирует предмет "),t("code",[a._v("SecretAchievement")]),a._v(", а")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@lock")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("SecretAchievement")])])]),a._v("\n")])])]),t("p",[a._v("— снова заблокирует его.")]),a._v(" "),t("p",[a._v("Состояние блокировки элементов хранится в разделе "),t("RouterLink",{attrs:{to:"/ru/guide/state-management.html#глобальное-состояние"}},[a._v("глобального состояния")]),a._v(" и не зависит от локальных игровых сессий; например, если вы разблокируете какой-то элемент, он не будет снова заблокирован, когда игрок начнет новую игру или загрузит другую сохраненную игру.")],1),a._v(" "),t("p",[a._v("Чтобы привязать фактический "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/class-GameObject.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("GameObject"),t("OutboundLink")],1),a._v(" к разблокируемому элементу, используйте компонент "),t("code",[a._v("UnlockableTrigger")]),a._v(":")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/9e92d5296e5f07d68ce6122ccb1da34a.png",alt:""}})]),a._v(" "),t("p",[a._v("Установите ID элемента в поле "),t("code",[a._v("Unlockable Item Id")]),a._v(" и привяжите к нему команду, которая должна быть выполнена, когда элемент разблокирован. Например, на приведенном выше рисунке GameObject активируется, когда "),t("code",[a._v("SecretAchievement")]),a._v(" разблокировано, и наоборот.")]),a._v(" "),t("p",[a._v("В C# вы можете получить доступ к разблокируемым элементам с помощью "),t("RouterLink",{attrs:{to:"/ru/guide/engine-services.html"}},[a._v("сервиса движка")]),a._v(" "),t("code",[a._v("Unlockable Manager")]),a._v(".")],1),a._v(" "),t("h2",{attrs:{id:"разбnокируемые-ресурсы"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#разбnокируемые-ресурсы"}},[a._v("#")]),a._v(" Разблокируемые Ресурсы")]),a._v(" "),t("p",[a._v("В меню конфигурации разблокируемых элементов ("),t("code",[a._v("Naninovel -> Configuration -> Unlockables")]),a._v(") вы можете найти менеджер ресурсов, который позволяет хранить произвольные ресурсы, используемые с функцией разблокировки.")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/17fa198861ed72de3ab1f9dc6b02b3d8.png",alt:""}})]),a._v(" "),t("p",[a._v("Разблокируемые ресурсы используются встроенными разблокируемыми системами, такими как "),t("RouterLink",{attrs:{to:"/ru/guide/unlockable-items.html#галерея-CG"}},[a._v("галерея CG")]),a._v(". Вы также можете использовать менеджер для своих собственных пользовательских систем.")],1),a._v(" "),t("h2",{attrs:{id:"гаnерея-cg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#гаnерея-cg"}},[a._v("#")]),a._v(" Галерея CG")]),a._v(" "),t("p",[a._v("Используя функцию галереи CG, вы можете указать ресурсы текстур (изображения), которые могут быть разблокировываться в течение игры, а затем просмотрены через UI "),t("code",[a._v("ICGGalleryUI")]),a._v(", доступный в главном меню.")]),a._v(" "),t("p"),t("div",{staticClass:"video-container"},[t("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/wkZeszk6gm0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t("p"),a._v(" "),t("p",[a._v("По умолчанию все разблокируемые текстурные ресурсы с префиксом "),t("code",[a._v("CG")]),a._v(", добавленные через "),t("RouterLink",{attrs:{to:"/ru/guide/unlockable-items.html#unlockable-resources"}},[a._v("менеджер разблокируемых ресурсов")]),a._v(", и "),t("RouterLink",{attrs:{to:"/ru/guide/backgrounds.html"}},[a._v("фоновые")]),a._v(" спрайтовые ресурсы актора "),t("code",[a._v("MainBackground")]),a._v(" с тем же префиксом будут считаться разблокируемыми элементами CG.")],1),a._v(" "),t("p",[a._v("Чтобы добавить разблокируемый элемент CG в галерею, вы можете либо использовать один из существующих основных фоновых ресурсов, добавив "),t("code",[a._v("CG")]),a._v(" к его пути:")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/83a6eff3f91c05027ba1fbc5098e03c2.png",alt:""}})]),a._v(" "),t("p",[a._v('— или добавить "автономную" текстуру, используя менеджер разблокируемых ресурсов, доступный через '),t("code",[a._v("Naninovel -> Resources -> Unlockables")]),a._v(":")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/236bddfd0a02c18b94153cfb7189a877.png",alt:""}})]),a._v(" "),t("p",[a._v("Независимо от того, какой способ вы выберете, вы можете разблокировать и заблокировать элементы с помощью команд "),t("a",{attrs:{href:"/ru/api/#unlock",target:"_blank"}},[t("code",[a._v("@unlock")])]),a._v(" и "),t("a",{attrs:{href:"/ru/api/#lock",target:"_blank"}},[t("code",[a._v("@lock")])]),a._v(" соответственно.")]),a._v(" "),t("p",[a._v("Например, чтобы разблокировать элемент "),t("code",[a._v("CG/Map")]),a._v(", добавленный на иллюстрациях выше, используйте следующую команду скрипта:")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@unlock")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CG/Map")])])]),a._v("\n")])])]),t("p",[a._v("Если для добавления элементов CG вы будете использовать как разблокируемые ресурсы, так и ресурсы фонов, то сначала в галерее CG будут отображаться ресурсы, указанные в диспетчере разблокируемых объектов. Вы можете изменить это поведение, а также актуальные источники, из которых извлекаются доступные ресурсы CG, используя свойство "),t("code",[a._v("Cg Sources")]),a._v(" скрипта "),t("code",[a._v("CG Gallery Panel")]),a._v(", прикрепленного к корню префаба UI, представляющего галерею CG (встроенная реализация, хранящаяся в "),t("code",[a._v("Naninovel/Prefabs/DefaultUI/ICGGalleryUI.CGGalleryPanel")]),a._v(").")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/c62c69eea8d6b1147aacb178dcaa9347.png",alt:""}})]),a._v(" "),t("p",[a._v("Когда в любой из источников будет добавлен хотя бы один элемент CG (независимо от разблокированного состояния), в главном меню появится кнопка "),t("code",[a._v("CG GALLERY")]),a._v(", позволяющая получить доступ к браузеру галереи.")]),a._v(" "),t("p",[a._v("Вы можете изменить или полностью заменить встроенную реализацию "),t("code",[a._v("ICGGalleryUI")]),a._v(" с помощью функции "),t("RouterLink",{attrs:{to:"/ru/guide/user-interface.html#кастомизация-UI"}},[a._v("кастомизации UI")]),a._v(".")],1),a._v(" "),t("h2",{attrs:{id:"подсказки"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#подсказки"}},[a._v("#")]),a._v(" Подсказки")]),a._v(" "),t("p",[a._v("Система разблокируемых подсказок позволяет указать набор текстовых записей с помощью локализуемых документов "),t("RouterLink",{attrs:{to:"/ru/guide/managed-text.html"}},[a._v("управляемого текста")]),a._v("; затем записи могут быть разблокированы на протяжении всей игры и просмотрены через пользовательский интерфейс "),t("code",[a._v("ITipsUI")]),a._v(", доступный из главного меню и панелей управления текстовым принтером.")],1),a._v(" "),t("p",[a._v("Эта система может быть использована для создания внутриигрового словаря/энциклопедии или трекера достижений.")]),a._v(" "),t("p"),t("div",{staticClass:"video-container"},[t("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/CRZuS1u_J4c",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t("p"),a._v(" "),t("p",[a._v("Чтобы определить доступные подсказки, создайте текстовый документ "),t("code",[a._v("Tips.txt")]),a._v(" внутри каталога ресурсов "),t("RouterLink",{attrs:{to:"/ru/guide/managed-text.html"}},[a._v("управляемого текста")]),a._v(" (по умолчанию "),t("code",[a._v("Resources/Naninovel/Text")]),a._v("). Каждая строка идентифицирует одну запись подсказки. Строка должна начинаться с ID подсказки, за которым следует двоеточие; затем следует указать название подсказки, категорию (необязательно) и описание, разделенные вертикальными линиями ("),t("code",[a._v("|")]),a._v("), например:")],1),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Tip1ID: Tip 1 Title | Tip 1 Category | Tip 1 Description\nTip2ID: Tip 2 Title | Tip 2 Description\nTip3ID: Tip 3 Title \nTip4ID: Tip 4 Title | Tip 4 Category \n...\n")])])]),t("p",[a._v("Вы можете использовать теги "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/StyledText.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Rich text"),t("OutboundLink")],1),a._v(" и вставлять разрывы строк ("),t("code",[a._v("\\n")]),a._v(") в раздел описания подсказки.")]),a._v(" "),t("p",[a._v("Когда есть хотя бы одна запись подсказки в управляемом текстовом документе "),t("code",[a._v("Tips.txt")]),a._v(', в главном меню и панелях управления появятся кнопки "TIPS", ведущие к браузеру подсказок.')]),a._v(" "),t("p",[a._v("Чтобы разблокировать запись подсказки, используйте "),t("a",{attrs:{href:"/ru/api/#unlock",target:"_blank"}},[t("code",[a._v("@unlock")])]),a._v(" и "),t("a",{attrs:{href:"/ru/api/#lock",target:"_blank"}},[t("code",[a._v("@lock")])]),a._v(" для блокировки записи обратно с последующим ID подсказки (всегда должен предшествовать префикс "),t("code",[a._v("Tips/")]),a._v(") в сценариях Naninovel. Например, чтобы разблокировать запись подсказки "),t("code",[a._v("Tip1ID")]),a._v(", используйте:")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@unlock")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Tips/Tip1ID")])])]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);