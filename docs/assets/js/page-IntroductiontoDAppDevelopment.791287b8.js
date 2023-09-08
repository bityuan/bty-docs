(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{261:function(e,t,n){e.exports=n.p+"assets/img/DAPP_Components.c33a38f7.png"},262:function(e,t,n){e.exports=n.p+"assets/img/DApp_Development_Process.514d2828.png"},263:function(e,t,n){e.exports=n.p+"assets/img/DApp_Location.263b9762.png"},554:function(e,t,n){"use strict";n.r(t);var o=n(1),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"introduction-to-dapp-development"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-dapp-development"}},[e._v("#")]),e._v(" Introduction to DApp Development")]),e._v(" "),o("blockquote",[o("p",[e._v("去中心化应用（DAPP）是在去中心化网络上构建的应用程序，是相对于传统中心化应用的一种叫法。传统中心化应用部署在中心化的服务器上，数据由一家公司或机构拥有；去中心化应用运行在去中心化的区块链网络上，数据不受任何人控制，无法删除与篡改。")])]),e._v(" "),o("h2",{attrs:{id:"dapp-design-and-development"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dapp-design-and-development"}},[e._v("#")]),e._v(" DApp Design and Development")]),e._v(" "),o("p",[e._v("A typical DApp consists of the following:")]),e._v(" "),o("p",[o("img",{attrs:{src:n(261),alt:"DApp consists"}})]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Front End：")])]),e._v(" "),o("p",[e._v("The client can be a mobile App, a webpage, or even a command line. Generally, it is the RPC service interface directly connected to the blockchain node.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Server(optional):")])]),e._v(" "),o("p",[e._v("Similar to the service node of centralized application, it mainly encapsulates DApp’s own service interface, with the lower layer docking blockchain and the upper layer docking client.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Blockchain End:")])]),e._v(" "),o("p",[e._v("Conventional blockchain nodes provide blockchain operation interface services to the front end or service end, such as sending transactions, query results and other actions.")])])]),e._v(" "),o("p",[o("strong",[e._v("A Normal DApp Development Process is Shown in the Figure Below:")])]),e._v(" "),o("p",[o("img",{attrs:{src:n(262),alt:"DApp Development Flow"}})]),e._v(" "),o("p",[e._v("In fact, it mainly includes the development of front-end and contract. The contract is deployed on the blockchain network, which is the main execution logic of DApp and the front-end is the user interface.")]),e._v(" "),o("p",[e._v("Even if the front end is not used, the command line interface of blockchain can still call the contract and realize the complete logic of DApp. However, the threshold for users is too high, so generally, formal DApp will provide the front end.")]),e._v(" "),o("h2",{attrs:{id:"development-of-dapp-in-chain33"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#development-of-dapp-in-chain33"}},[e._v("#")]),e._v(" Development of DApp in Chain33")]),e._v(" "),o("p",[e._v("Chain33 was designed as a highly extensible blockchain development platform that supports extension customization except very little inherent core logic.The expansion capability of the system can be divided into two major categories:")]),e._v(" "),o("p",[o("strong",[e._v("The first category is the expansion and customization of system capabilities:")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("Chain33 provides the underlying plug-in management mechanism, basically all the capabilities of the system exist as a plug-in, the plug-in implementation can be replaced,Developers can use the system plugins provided by the system itself, or they can develop new functional plugins. These plugins' capabilities cover everything from encryption and decryption, consensus, storage, wallet, executor, command line, etc.\n")])])]),o("p",[o("strong",[e._v("The second category is the development of extended applications:")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("Chain33 also provides a separate framework for DApp, based on the plug-in mechanism, to facilitate DApp development by focusing developers on the core contract logic (that is, the executor logic) and adding RPC interfaces and command-line interfaces (the latter two are not required).\n")])])]),o("p",[e._v("Check the position of DApp in the system of Chain33:")]),e._v(" "),o("p",[o("img",{attrs:{src:n(263),alt:"DApp Location"}})]),e._v(" "),o("p",[e._v("As shown in the upper left part of the figure above, Chain33 provides the DApp Framework with three elements: the executor, the command line, and RPC, where the executor is the contract logic of the DApp.")]),e._v(" "),o("p",[e._v("The command line provides command wrappers from the command line, which is optional.")]),e._v(" "),o("p",[e._v("RPC is the unique external service interface of packaging DApp.In general, Chain33 framework provides common interfaces for creating, sending, query. DApp can also develop its own RPC interface for special needs.")])])}),[],!1,null,null,null);t.default=i.exports}}]);