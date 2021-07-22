(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{379:function(a,e,t){"use strict";t.r(e);var r=t(42),n=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"фоны"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#фоны"}},[a._v("#")]),a._v(" Фоны")]),a._v(" "),t("p",[a._v("В отличие от "),t("RouterLink",{attrs:{to:"/ru/guide/characters.html"}},[a._v("персонажей")]),a._v(", фоны – это акторы, используемые для представления "),t("em",[a._v("заднего")]),a._v(" плана сцены: локаций, декораций, пейзажей – всего, что всегда должно появляться "),t("em",[a._v("позади")]),a._v(" персонажей.")],1),a._v(" "),t("p",[a._v("Фоновый актор определяется с помощью имени, внешности, видимости и трансформации (такой как положение, поворот, масштаб). Он может изменять внешность, видимость и трансформироваться с течением времени.")]),a._v(" "),t("p",[a._v("Поведение фонов можно настроить с помощью контекстного меню "),t("code",[a._v("Naninovel -> Configuration -> Backgrounds")]),a._v("; доступные параметры см. в разделе "),t("RouterLink",{attrs:{to:"/ru/guide/configuration.html#фоны"}},[a._v("Руководство по конфигурации")]),a._v(". Доступ к менеджеру ресурсов фонов можно получить с помощью контекстного меню "),t("code",[a._v("Naninovel -> Resources -> Backgrounds")]),a._v(".")],1),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/cccd08280dac72d199ea3465bc167a22.gif",alt:""}})]),a._v(" "),t("p",[a._v("Если у вас много фонов, и их неудобно назначать через меню редактора, можно просто поместить их в папку "),t("code",[a._v("Resources/Naninovel/Backgrounds")]),a._v(', рассортировав их по папкам, соответствующим идентификаторам акторов. Например, чтобы добавить внешность для фонового актора с ID "MainBackground", сохраните текстуры (спрайты) в папке '),t("code",[a._v("Resources/Naninovel/Backgrounds/MainBackground")]),a._v(", и они автоматически будут доступны в сценариях.")]),a._v(" "),t("p",[a._v("Вы можете дополнительно организовать ресурсы внешностей с помощью подпапок, если хотите; в этом случае используйте прямой слеш ("),t("code",[a._v("/")]),a._v(") при ссылке на них в сценариях Naninovel. Например, текстура внешности по адресу "),t("code",[a._v("Resources/Naninovel/Backgrounds/MainBackground/Events/CG251")]),a._v(" может быть объявлена как "),t("code",[a._v("Events/CG251")]),a._v(".")]),a._v(" "),t("p",[a._v("Также можно использовать "),t("RouterLink",{attrs:{to:"/ru/guide/resource-providers.html#адресация"}},[a._v("систему адресируемых ассетов")]),a._v(', чтобы вручную распределить ресурсы. Чтобы предоставить доступ к ассету, назначьте адрес, равный пути, который вы использовали бы для его объявления с помощью метода, описанного выше, за исключением опущенной части "Resources/". Например, для объявления внешности "Beach" для фона "MainBackground" назначьте ассету следующий адрес: '),t("code",[a._v("Naninovel/Backgrounds/MainBackground/Beach")]),a._v(". Имейте в виду, что адресируемый провайдер по умолчанию не используется в редакторе; вы можете разрешить его, включив свойство "),t("code",[a._v("Enable Addressable In Editor")]),a._v(" в меню конфигурации провайдера ресурсов.")],1),a._v(" "),t("p",[a._v("В сценариях Naninovel фоны в основном контролируются с помощью команды "),t("a",{attrs:{href:"/ru/api/#back",target:"_blank"}},[t("code",[a._v("@back")])]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Установить `River` как внешность основного фона")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("River")])])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; То же, что выше, но с использованием эффекта перехода `RadialBlur`")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("River.RadialBlur")])])]),a._v("\n")])])]),t("p",[a._v('Фоны обрабатываются немного иначе, нежели персонажи, чтобы лучше приспособиться к традиционному течению сценария визуальных новелл. Большую часть времени вы, вероятно, будете иметь одного фонового актора в сцене, который будет постоянно менять внешности. Чтобы избавиться от лишнего повторения одного и того же ID актора в сценариях, можно предоставить только внешность фона и тип перехода (необязательно) в качестве безымянного параметра, что автоматически преобразует актора "MainBackground". Если это не так, ID фонового актора может быть конкретно указан с помощью параметра '),t("code",[a._v("id")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Дан фоновый актор `CityVideo` с внешностями `Night` и `Day` (видеоклипы)")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Вывести в качестве дневного фона проигрываемый видеоклип")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Day")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CityVideo")])])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Перейти к ночному фону с эффектом `Ripple` ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Night.Ripple")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CityVideo")])])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Скрыть фон")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@hide")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CityVideo")])])]),a._v("\n")])])]),t("p",[a._v('Запись актора "MainBackground" создается по умолчанию в диспетчере фоновых ресурсов и не может быть переименована или удалена; однако параметры основных фонов (реализация, pivot, PPU и т. д.) могут быть свободно изменены.')]),a._v(" "),t("h2",{attrs:{id:"позы"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#позы"}},[a._v("#")]),a._v(" Позы")]),a._v(" "),t("p",[a._v("Каждый фон имеет свойство "),t("code",[a._v("Poses")]),a._v(', позволяющее задавать различные именованные состояния ("позы").')]),a._v(" "),t("p",[a._v("Название позы может быть использовано в качестве внешности в команде "),t("a",{attrs:{href:"/ru/api/#back",target:"_blank"}},[t("code",[a._v("@back")])]),a._v(" для применения всех параметров, указанных в позе сразу, вместо того, чтобы указывать их по отдельности с помощью команд параметров.")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Данная поза `Day` определена для основного фона,")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; применяет все параметры, указанные в состоянии позы.")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Day")])])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; То же самое, что выше, но для фонового актора с ID `City`")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; и с помощью перехода `DropFade` за 3 секунды.")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Day")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("City")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" transition:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("DropFade")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" time:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("3")])])]),a._v("\n")])])]),t("p",[a._v("Обратите внимание, что когда поза используется в качестве внешности, вы все еще можете переопределить отдельные параметры, например:")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Данная поза `Day` определена для основного фона,")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; применяет все параметры, указанные в состоянии позы,")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; за исключением оттенка, который переопределён отдельной командой.")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Day")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" tint:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("#ff45cb")])])]),a._v("\n")])])]),t("h2",{attrs:{id:"спрайтовые-фоны"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#спрайтовые-фоны"}},[a._v("#")]),a._v(" Спрайтовые фоны")]),a._v(" "),t("p",[a._v("Спрайтовая реализация акторов фона является наиболее распространенной и простой; она использует один "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/Sprites",target:"_blank",rel:"noopener noreferrer"}},[a._v("спрайтовый"),t("OutboundLink")],1),a._v(" ассет для представления внешности фона. Источником спрайта может быть изображение в формате "),t("code",[a._v(".jpg")]),a._v(" или "),t("code",[a._v(".png")]),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"видео-фоны"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#видео-фоны"}},[a._v("#")]),a._v(" Видео-фоны")]),a._v(" "),t("p",[a._v("Видео-фоны используют ассеты "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/class-VideoClip",target:"_blank",rel:"noopener noreferrer"}},[a._v("видеоклипов"),t("OutboundLink")],1),a._v(" ассет для представления внешности фона.")]),a._v(" "),t("p",[a._v("Видео-фоны могут управляться только графическим интерфейсом редактора.")]),a._v(" "),t("p",[a._v("Поддерживаемые видеоформаты для каждой платформы см. в разделе "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/VideoSources-FileCompatibility.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("документации Unity для видеоресурсов"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("Для справки, вот подробные параметры видео фонового видеоклипа, который используется в нашей демо-версии WebGL:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Container : MPEG-4\nContainer profile : Base Media\nContainer codec ID : isom (isom/iso2/avc1/mp41)\nFormat : AVC\nFormat/Info : Advanced Video Codec\nFormat profile : High@L4\nFormat settings, CABAC : Yes\nFormat settings, RefFrames : 4 frames\nCodec ID : avc1\nCodec ID/Info : Advanced Video Coding\nBit rate : 3 196 kb/s\nWidth : 1 920 pixels\nHeight : 1 080 pixels\nDisplay aspect ratio : 16:9\nFrame rate mode : Constant\nFrame rate : 25.000 FPS\nColor space : YUV\nChroma subsampling : 4:2:0\nBit depth : 8 bits\nScan type : Progressive\nWriting library : x264 core 148 r2795 aaa9aa8\nEncoding settings : cabac=1 / ref=3 / deblock=1:0:0 / analyse=0x3:0x113 / me=hex / subme=7 / psy=1 / psy_rd=1.00:0.00 / mixed_ref=1 / me_range=16 / chroma_me=1 / trellis=1 / 8x8dct=1 / cqm=0 / deadzone=21,11 / fast_pskip=1 / chroma_qp_offset=-2 / threads=12 / lookahead_threads=2 / sliced_threads=0 / nr=0 / decimate=1 / interlaced=0 / bluray_compat=0 / constrained_intra=0 / bframes=3 / b_pyramid=2 / b_adapt=1 / b_bias=0 / direct=1 / weightb=1 / open_gop=0 / weightp=2 / keyint=250 / keyint_min=25 / scenecut=40 / intra_refresh=0 / rc_lookahead=40 / rc=crf / mbtree=1 / crf=23.0 / qcomp=0.60 / qpmin=0 / qpmax=69 / qpstep=4 / ip_ratio=1.40 / aq=1:1.00\n")])])]),t("p",[a._v("А вот настройки импорта Unity для этого видеоклипа:")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/9e6a9cc0bd79bca2c0e8e35666fbdc7f.png",alt:""}})]),a._v(" "),t("p",[a._v("В зависимости от целевой платформы может потребоваться включение перекодирования в настройках импорта видеоклипов.")]),a._v(" "),t("div",{staticClass:"custom-block example"},[t("p",{staticClass:"custom-block-title"},[a._v("ПРИМЕР")]),a._v(" "),t("p",[a._v("В случае возникновения проблем с достижением плавного лупа убедитесь, что видео имеет одинаковые кадры в начале и конце, а также совместимую настройку кодирования; проверьте наш "),t("a",{attrs:{href:"https://github.com/Elringus/VideoLoop",target:"_blank",rel:"noopener noreferrer"}},[a._v("проект с примером зацикленного видео"),t("OutboundLink")],1),a._v(" для справки.")])]),a._v(" "),t("p",[a._v("Имейте в виду, что на WebGL видеоплеер может работать только в потоковом режиме, поэтому все видеоресурсы будут скопированы в папку "),t("code",[a._v("Assets/StreamingAssets/Backgrounds")]),a._v(" при создании проигрывателя WebGL. Папка "),t("strong",[a._v("StreamingAssets")]),a._v(" также появится в выходном каталоге сборки; убедитесь, что вы сохранили ее при публикации сборки, и убедитесь, что ваш веб-сервер позволяет считывать данные из этой папки.")]),a._v(" "),t("h2",{attrs:{id:"посnойные-фоны"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#посnойные-фоны"}},[a._v("#")]),a._v(" Послойные фоны")]),a._v(" "),t("p",[a._v("Послойная реализация позволяет создавать фоны из нескольких спрайтов (слоев), а затем переключать их по отдельности с помощью сценариев Naninovel во время выполнения.")]),a._v(" "),t("p",[a._v("Чтобы создать префаб послойного фона, используйте контекстное меню ассетов "),t("code",[a._v("Create -> Naninovel -> Background -> Layered")]),a._v(". Войдите в "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/EditingInPrefabMode.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("режим редактирования префаба"),t("OutboundLink")],1),a._v(" для составления слоев. По умолчанию будет создано несколько слоев и групп. Вы можете использовать их или удалить и добавить свои собственные.")]),a._v(" "),t("p",[a._v("Послойные фоны схожи с "),t("RouterLink",{attrs:{to:"/ru/guide/characters.html#послойные-персонажи"}},[a._v("послойными персонажами")]),a._v("; обратитесь к документации для получения дополнительной информации о том, как настроить и управлять ими с помощью сценариев Naninovel.")],1),a._v(" "),t("p",[a._v("Не забывайте, что безымянный параметр в команде "),t("a",{attrs:{href:"/ru/api/#back",target:"_blank"}},[t("code",[a._v("@back")])]),a._v(" ожидает внешность и тип перехода (а не ID и внешность, как в команде "),t("a",{attrs:{href:"/ru/api/#char",target:"_blank"}},[t("code",[a._v("@char")])]),a._v("), поэтому указывайте выражения в композиции слоёв следующим образом:")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('; Дан фоновый актор "LayeredForest"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Group>Layer,Other/Group+Layer,-RootLayer.TransitionType")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("LayeredForest")])])]),a._v("\n")])])]),t("h2",{attrs:{id:"универсаnьные-фоны"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#универсаnьные-фоны"}},[a._v("#")]),a._v(" Универсальные фоны")]),a._v(" "),t("p",[a._v("Универсальный фон – это наиболее гибкая реализация фонового актора. Он основан на префабе с компонентом "),t("code",[a._v("BackgroundActorBehaviour")]),a._v(", прикрепленным к корневому объекту. Изменения внешности и все остальные фоновые параметры маршрутизируются как "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/UnityEvents.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("события Unity"),t("OutboundLink")],1),a._v(", что позволяет реализовать поведение управляемого объекта любым удобным вам способом.")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/d8f86c83decfb3c40c8d23602214a743.png",alt:""}})]),a._v(" "),t("p",[a._v("Чтобы создать префаб универсального фона по шаблону, используйте контекстное меню ассета "),t("code",[a._v("Create -> Naninovel -> Background -> Generic")]),a._v(".")]),a._v(" "),t("p",[a._v("Универсальные фоны очень похожи на универсальных персонажей; ознакомьтесь с учебным видео по настройке анимированной 3D-модели в качестве универсального персонажа для одного из возможных примеров использования.")]),a._v(" "),t("p"),t("div",{staticClass:"video-container"},[t("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/HPxhR0I1u2Q",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t("p"),a._v(" "),t("h2",{attrs:{id:"фоны-сцен"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#фоны-сцен"}},[a._v("#")]),a._v(" Фоны сцен")]),a._v(" "),t("p",[a._v("Вы можете использовать "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/CreatingScenes",target:"_blank",rel:"noopener noreferrer"}},[a._v("сцену Unity"),t("OutboundLink")],1),a._v(" в качестве заднего плана с реализацией фона сцены.")]),a._v(" "),t("p",[a._v("Фоны сцен могут управляться только графическим интерфейсом редактора; ресурсы сцен должны храниться в папке проекта "),t("code",[a._v("Assets/Scenes")]),a._v(".")]),a._v(" "),t("p",[a._v("Первым делом создайте новую (или переместите существующую) сцену в папку "),t("code",[a._v("Assets/Scenes")]),a._v(" и убедитесь, что в ней есть хотя бы одна "),t("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Camera.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("камера"),t("OutboundLink")],1),a._v(". После загрузки фона сцены Naninovel назначит текстуру рендеринга первой найденной камере в сцене. Затем текстура рендеринга будет назначена фоновому спрайту, представляющему фон внутри пространства сцены Naninovel. Таким образом, фон сцены сможет сосуществовать с другими акторами фонов и персонажей, поддерживать все эффекты перехода фонов и будет масштабируем для обработки различных соотношений сторон дисплея.")]),a._v(" "),t("p",[a._v("Убедитесь, что объекты сцены расположены в пространстве так, чтобы они не перекрывались объектами из других сцен, которые потенциально могут быть загружены одновременно (например, будучи объявлены в одном сценарии Naninovel). Кроме того, имейте в виду, что в случае, если фоновый объект сцены расположен вблизи начала координат глобального пространства ("),t("code",[a._v("x0 y0 z0")]),a._v("), он может быть визуализирован основной камерой Naninovel; чтобы предотвратить это, сместите все объекты сцены относительно глобального источника, либо используйте "),t("code",[a._v("Configuration -> Engine -> Override Objects Layer")]),a._v(" для изоляции связанных с Naninovel объектов с помощью "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/Layers.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("слоёв"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("После завершения настройки сцены создайте новый фоновый актор через меню "),t("code",[a._v("Naninovel -> Configuration -> Backgrounds")]),a._v(", выберите реализацию "),t("code",[a._v("SceneBackground")]),a._v(" и добавьте ассет сцены к ресурсам актора.")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/d69159ab4d93793022018fa8d244f1aa.png",alt:""}})]),a._v(" "),t("p",[a._v("При назначении ресурсов для актора фона сцены соответствующие ассеты должны автоматически добавляться в "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/BuildSettings.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("настройки сборки"),t("OutboundLink")],1),a._v("; если вы получаете сообщение об ошибке, что ресурс сцены не был добавлен в сборку, попробуйте добавить его вручную.")]),a._v(" "),t("p",[a._v("Теперь вы можете использовать команду "),t("a",{attrs:{href:"/ru/api/#back",target:"_blank"}},[t("code",[a._v("@back")])]),a._v(" для управления созданным фоновым актором сцены, например:")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("SceneName")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("ActorId")])])]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);