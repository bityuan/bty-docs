(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{513:function(a,s,e){"use strict";e.r(s);var t=e(1),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"deploy-wallet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy-wallet"}},[a._v("#")]),a._v(" Deploy wallet")]),a._v(" "),e("blockquote",[e("p",[a._v("Deploy wallets in the established parachains for subsequent transactions.")])]),a._v(" "),e("h2",{attrs:{id:"create-wallet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-wallet"}},[a._v("#")]),a._v(" Create wallet")]),a._v(" "),e("ol",[e("li",[a._v("Generate random number seed. We suggest that users should generate the seed in person and keep it manually since it can be used to recover wallet.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 seed generate -l 0 --rpc_laddr="http://localhost:8901"  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v('--parameter[rpc_laddr] means the rpc address of the chain that users remote call. (it can be modified based on the real monitoring jrpc address of users, marked as "jrpcBindAddr" in configuration file.)')]),a._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[a._v("Save seeds, and create password for wallet.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 seed save -p "wallet\'s password" -s "the created seeds from last step" --rpc_laddr="http://localhost:8901"  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("The password can be customerized. (More than 8 digits, combination of letters and numbers, such as fzm12345) Remember your password, which is used to unlock your wallet.")]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("Unlock wallet.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 wallet unlock -p "wallet\'s password" -t 0 --rpc_laddr="http://localhost:8901"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("-p is password for wallet, -t is time for automatic wallet lock, -o means never lock unless restart.")]),a._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[a._v("(Optional) Check the wallet status.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 wallet status --rpc_laddr="http://localhost:8901"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("the following information means create and unlock the wallet successfully.")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n    "isWalletLock": false,\n    "isAutoMining": false,\n    "isHasSeed": true,\n    "isTicketLock": true\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h2",{attrs:{id:"create-account-address-and-private-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-account-address-and-private-key"}},[a._v("#")]),a._v(" Create account address and private key")]),a._v(" "),e("ol",[e("li",[a._v("Create account.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 account create -l doctest --rpc_laddr="http://localhost:8901"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("-l is the account name."),e("br"),a._v("\nAfter creating, the following information is returned:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n    "acc": {\n        "balance": "0.0000",\n        "frozen": "0.0000",\n        "addr": "19ZuTYqWQzsH6p****uyosFWqPg5B"\n    },\n    "label": "doctest"\n}  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("Inquire private key for the account.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 account dump_key -a "account address" --rpc_laddr="http://localhost:8901"  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("Return the following information:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n    "data": "0x9b202dab67e33f*******02ca138095280c11502f77a"\n}  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("(Optional) Inquire all account information.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 account list --rpc_laddr="http://localhost:8901"  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("Return the following information:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n    "wallets": [\n        {\n            "acc": {\n                "balance": "0.0000",\n                "frozen": "0.0000",\n                "addr": "19ZuTYqWQzsH6pP****uyosFWqPg5B"\n            },\n            "label": "doctest"\n        },\n    ]\n}  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);