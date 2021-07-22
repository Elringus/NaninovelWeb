(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{523:function(e,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ボイス"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ボイス"}},[e._v("#")]),e._v(" ボイス")]),e._v(" "),a("p",[e._v("ボイスクリップをエンジンに公開するには、"),a("code",[e._v("Resources/Naninovel/Voice")]),e._v(" フォルダーに保存します（"),a("code",[e._v("Loader")]),e._v("フォルダーのオーディオ設定で変更できます）。サブフォルダで整理することもできます。この場合、naninovelスクリプトで参照する場合はスラッシュ ("),a("code",[e._v("/")]),e._v(") を使用します。たとえば、"),a("code",[e._v("Resources/Naninovel/Voice/Intro/Day/25.wav")]),e._v(" として保存されたボイスクリップは、"),a("code",[e._v("Voice/Intro/Day/25")]),e._v(" としてスクリプトから参照できます。")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ja/guide/resource-providers.html#addressable"}},[e._v("addressable asset system")]),e._v(' を使用して手動でリソースを公開することもできます。アセットを公開するには、使用するパスと同じアドレスを "Resources/" の部分を除いて、上記の方法で割り当てます。例えばボイスクリップ "Hello.wav" を公開するには、次のアドレスにクリップアセットを割り当てます '),a("code",[e._v("Naninovel/Voice/Hello")]),e._v("。Addressable 機能はデフォルトではエディターで使用できないことに注意してください。リソースプロバイダーのコンフィグメニューで "),a("code",[e._v("Enable Addressable In Editor")]),e._v(" プロパティを有効にすることで許可できます。")],1),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.unity3d.com/Manual/AudioFiles.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unityでサポートされている"),a("OutboundLink")],1),e._v(" 任意のオーディオ形式をボイスクリップに使用できます。")]),e._v(" "),a("p",[e._v("ボイス再生動作はコンテキストメニューの "),a("code",[e._v("Naninovel -> Configuration -> Audio")]),e._v(" で設定できます。利用可能なオプションは "),a("RouterLink",{attrs:{to:"/ja/guide/configuration.html#audio"}},[e._v("コンフィグガイド")]),e._v(" をご覧ください。")],1),e._v(" "),a("p",[a("a",{attrs:{href:"/ja/api/#voice",target:"_blank"}},[a("code",[e._v("@voice")])]),e._v(" コマンドの後にボイスクリップの名前を続けることで、naninovel スクリプトでボイスの再生を制御できます。")]),e._v(" "),a("h2",{attrs:{id:"自動ボイス再生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自動ボイス再生"}},[e._v("#")]),e._v(" 自動ボイス再生")]),e._v(" "),a("p",[e._v("フルボイスのゲームでは、毎回 "),a("a",{attrs:{href:"/ja/api/#voice",target:"_blank"}},[a("code",[e._v("@voice")])]),e._v(" コマンドを指定するのは面倒かと思います。自動ボイス再生機能により、現在再生されている "),a("a",{attrs:{href:"/ja/api/#print",target:"_blank"}},[a("code",[e._v("@print")])]),e._v(" コマンドの行番号と同じ名前のボイスクリップを自動的に再生できます。これにより、naninovelスクリプトで "),a("a",{attrs:{href:"/ja/api/#voice",target:"_blank"}},[a("code",[e._v("@voice")])]),e._v(" コマンドを使用する必要がなくなります。対応するテキスト行がゲームで表示されると、ボイスが自動的に再生されます。")]),e._v(" "),a("p",[e._v("自動ボイス再生機能を有効にするには、オーディオコンフィグメニューで "),a("code",[e._v("Enable Auto Voicing")]),e._v(" トグルを使用します。")]),e._v(" "),a("p",[e._v("自動ボイス再生機能に使用されるオーディオクリップは、スクリプト名と同じ名前のフォルダーにグループ化する必要があり、次の名前を付けます:\n"),a("em",[e._v("LineNumber")]),e._v("."),a("em",[e._v("CommandIndex")]),e._v("。ここで "),a("em",[e._v("LineNumber")]),e._v(" は対応する表示コマンドの行番号です。 "),a("em",[e._v("CommandIndex")]),e._v(" は、一般テキスト行で処理する場合の表示コマンドのインラインまたはコマンドインデックスです。")]),e._v(" "),a("p",[e._v('たとえば、"Script001" という名前の次のnaninovelスクリプトを考えてみます:')]),e._v(" "),a("div",{staticClass:"language-nani extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nani"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command function"}},[a("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@print")]),a("span",{pre:!0,attrs:{class:"token command-params"}},[a("span",{pre:!0,attrs:{class:"token command-param-id property"}},[e._v(" text:")]),a("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[e._v('"Text from a print command."')])])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[e._v("Text from a simple generic text line.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[e._v("Text from first sentence."),a("span",{pre:!0,attrs:{class:"token inline-command function"}},[a("span",{pre:!0,attrs:{class:"token start-stop-char"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token command-param-name name"}},[e._v("i")]),a("span",{pre:!0,attrs:{class:"token start-stop-char"}},[e._v("]")])]),e._v(" Text from second sentence.")]),e._v("\n")])])]),a("p",[e._v("行の表示時に自動ボイス再生システムで対応するオーディオクリップを再生するためには、"),a("code",[e._v("Resources/Naninovel/Voice/Script001")]),e._v(" にクリップを保存します(または"),a("RouterLink",{attrs:{to:"/ja/guide/resource-providers.html#addressable"}},[e._v("Addressable システム")]),e._v(" で登録)。以下の名前をつけます:")],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("テキスト")]),e._v(" "),a("th",[e._v("ボイスクリップ名")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("プリントコマンドのテキスト。")]),e._v(" "),a("td",[e._v("1.0")])]),e._v(" "),a("tr",[a("td",[e._v("単純な一般テキスト行のテキスト。")]),e._v(" "),a("td",[e._v("2.0")])]),e._v(" "),a("tr",[a("td",[e._v("最初の文のテキスト。")]),e._v(" "),a("td",[e._v("3.0")])]),e._v(" "),a("tr",[a("td",[e._v("2番目の文のテキスト。")]),e._v(" "),a("td",[e._v("3.2")])])])]),e._v(" "),a("p",[e._v("プロセスを簡略化できるよう、自動ボイス再生機能が有効になっている場合、現在表示中のテキストのボイスクリップの名前がデバッグウィンドウに表示されます:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/12772ecc7c14011bcde4a74c81e997b8.png",alt:"auto voicing"}})]),e._v(" "),a("p",[e._v("デバッグウィンドウを開くには、エンジン設定で "),a("code",[e._v("Enable Development Console")]),e._v(" がオンになっていることを確認してから、再生モードで "),a("code",[e._v("~")]),e._v(" キーを押し、"),a("code",[e._v("debug")]),e._v(" と入力して"),a("code",[e._v("Enter")]),e._v("を押します。")]),e._v(" "),a("h2",{attrs:{id:"ナレーションドキュメント"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ナレーションドキュメント"}},[e._v("#")]),e._v(" ナレーションドキュメント")]),e._v(" "),a("p",[a("code",[e._v("Naninovel -> Tools -> Voiceover Documents")]),e._v(" からナレーションドキュメントジェネレーターユーティリティを使用して、"),a("a",{attrs:{href:"/ja/api/#print",target:"_blank"}},[a("code",[e._v("@print")])]),e._v(" コマンドのテキストと一般テキスト行を含むドキュメントを生成できます。表示される各テキストメッセージは、自動ボイス再生機能で使用される自動ボイスクリップ名に関連付けられます。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/69466444d4b8b43d76e7f1566db5ca9a.png",alt:""}})]),e._v(" "),a("p",[a("code",[e._v("Locale")]),e._v(" プロパティで、ドキュメントを生成する特定のロケールを選択できます（選択したロケールは、ローカライズされたnaninovelスクリプトがプロジェクトに存在する必要があります）。")]),e._v(" "),a("p",[a("code",[e._v("Use Markdown Format")]),e._v(" プロパティが有効だと、生成されるファイルは"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Markdown",target:"_blank",rel:"noopener noreferrer"}},[e._v("マークダウンフォーマット"),a("OutboundLink")],1),e._v(" (拡張子は .md)になり、より見やすいフォーマットになります。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/ed6776026a79140de9e9f6a155faffdc.png",alt:""}})]),e._v(" "),a("p",[e._v("ナレーションドキュメントは、ナレーションオーディオを録音するときに声優が使用することを想定しています。")])])}),[],!1,null,null,null);t.default=r.exports}}]);