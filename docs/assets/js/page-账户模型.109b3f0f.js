(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{466:function(a,n,s){"use strict";s.r(n);var e=s(1),t=Object(e.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"账户模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#账户模型"}},[a._v("#")]),a._v(" 账户模型")]),a._v(" "),s("p",[a._v("比特元研发基于Chain33区块链底层架构，内部账户通常称为Chain33账户，本文介绍Chanin33账户和合约账户的一些基础知识，以帮助开发者后续更加容易上手。")]),a._v(" "),s("h2",{attrs:{id:"chain33账户基本模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chain33账户基本模型"}},[a._v("#")]),a._v(" Chain33账户基本模型")]),a._v(" "),s("p",[a._v("钱包中存放着有很多地址，这些地址我们可以理解成账户。每一个账户中存储着很多资产：可以是bityuan；也可以是某些token；还可以是平行链或跨链的资产。")]),a._v(" "),s("p",[a._v("资产可以在各个合约之间移动、使用，如果要用一个元素描述资产所在合约，那么这个元素就是“资产现在所在的合约”。")]),a._v(" "),s("p",[a._v("资产有明确的归属，这个归属的地址就是资产所属的地址(账户)。")]),a._v(" "),s("p",[a._v("资产有数量和性质。比如有100个活动的bityuan，“100”表示这个这种比特元资产的数量，“活动”表示这种比特元的性质(还有“冻结”这个性质)。")]),a._v(" "),s("p",[s("strong",[a._v("查看wallet的具体情况")])]),a._v(" "),s("ol",[s("li",[a._v("查看account下的所有wallet的所有账户情况。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("./chain33-cli account list\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("在所有账户信息中，查看minerAddr的账户情况。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('//bityuan\n{\n    "wallets": [\n        {\n            "acc": {\n                "balance": "9977.6850",\n                "frozen": "0.0000",\n                "addr": "12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv"\n            },\n            "label": "minerAddr"\n        }\n    ]\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("查看minerAddr账户的资产情况。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("./chain33-cli account balance -a 12cjnN5D4DPdBQSwh6vjwJbtsW4EJALTMv\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("返回示例值如下所示：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('//token资产\n{\n    "token": "TC",\n    "balance": "50.0000",\n    "frozen": "0.0000",\n    "addr": "12cjnN5D4DPdBQSwh6vjwJbtsW4EJALTMv"\n}\n//平行链资产\n{\n    "exec": "user.p.para.token",\n    "symbol": "GD",\n    "amount": 1100000000,\n    "addr": "12cjnN5D4DPdBQSwh6vjwJbtsW4EJALTMv"\n}\n//跨链资产\n{\n"exec": "paracross",\n    "symbol": "token.TC",\n    "balance": "50.0000",\n    "frozen": "0.0000",\n    "addr": "12cjnN5D4DPdBQSwh6vjwJbtsW4EJALTMv"\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br")])]),s("h2",{attrs:{id:"chain33账户介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chain33账户介绍"}},[a._v("#")]),a._v(" Chain33账户介绍")]),a._v(" "),s("p",[a._v("从Chain33账户基本模型中可以发现每个账户对应一个地址，每个地址由对应的私钥掌握。那么一个地址存在多种资产，在Chain33内部是如何表示的呢？")]),a._v(" "),s("p",[a._v("首先从存储上看，一种资产对应一个状态，存放在状态树上，节点的KEY包含地址和资产信息，表现形式如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mavl-{exec}-{symbol}-{addr}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("建立一个普通账户的地址，以bityuan为例，其状态树KEY表示为：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("exec=coins\nsymbol=bityuan\naddr=12cjnN5D4DPdBQSwh6vjwJbtsW4EJALTMv\nkey=mavl-coins-bty-12cjnN5D4DPdBQSwh6vjwJbtsW4EJALTMv\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("在同样的地址下不同资产的exec和symbol状态会不一样。比如在chain33源代码中，acccount里的"),s("code",[a._v("NewCoinsAccount")]),a._v("函数，就是为了方便访问这个状态。通用的访问资产的函数是"),s("code",[a._v("NewAccountDB")]),a._v("，代码如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('func NewCoinsAccount() *DB {\n    prefix := "mavl-coins-bty-"\n    return newAccountDB(prefix)\n}\nfunc NewAccountDB(execer string, symbol string, db dbm.KV) (*DB, error) {\n    ...\n    accDB := newAccountDB(symbolPrefix(execer, symbol))\n    ...\n    return accDB, nil\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("使用"),s("code",[a._v("NewAccountDB")]),a._v("我们可以很容易导出想要的资产信息，比如我们想要导出token资产就可以执行如下命令（token在AccountDB中的地址是key=mavl-token-TC-12cjnN5D4DPdBQSwh6vjwJbtsW4EJALTMv）:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('NewAccountDB("token", "TC", db)\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("现在有linj的账户地址12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv，他的地址下有两种资产bityuan和TC，我们可以看到chain33下的模型如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("└── label:linj-addr:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv\n    ├── mavl-coins-bty-12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv\n    └── mavl-token-TC-12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"合约账户-合约子账户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合约账户-合约子账户"}},[a._v("#")]),a._v(" 合约账户/合约子账户")]),a._v(" "),s("p",[a._v("合约账户对应着一个合约的地址，但是没有人掌握它的私钥。合约账户的主要功能是帮助我们完成合约规定的业务。")]),a._v(" "),s("p",[a._v("在这里我们举一个交易合约trade的例子，这个合约主要功能是帮助我们完成资产的交换。")]),a._v(" "),s("h3",{attrs:{id:"地址情况介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#地址情况介绍"}},[a._v("#")]),a._v(" 地址情况介绍")]),a._v(" "),s("p",[a._v("比如用户linj想用2个bityuan来换取10个TC token，正好用户alice愿意进行这场交易。如果要进行这场交易，我们首先要知道它们的地址情况。\n地址情况如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("trade合约地址：1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4\nlinj地址： 12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv\nalice地址： 1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("再查看它们在数据库中存储的KEY情况，可以发现它们地址对应的KEY的命名规则和普通地址一样。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("//trade bty\nmavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4\n//trade TC token\nmavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("出于安全的考虑，chain33限制了资产的处理，所以合约需要自己去处理其名下的资产。因此用户linj和用户alice如果想进行交易，需要先把资产转到trade合约。\n合约子账户格式为：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mavl-exec-symbol-exec_addr:user_addr\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("下面是合约子账户的变化：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("alice在trade合约中的bityuan和TC的子账户如下：\n├── label:alice-addr:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d\n│   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d\n│   ├── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"限制资产处理规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制资产处理规则"}},[a._v("#")]),a._v(" 限制资产处理规则")]),a._v(" "),s("p",[a._v("资产处理三条基本规则：")]),a._v(" "),s("ol",[s("li",[a._v("合约可以处理自己的账户。")]),a._v(" "),s("li",[a._v("合约可以处理自己的账户里的子账户。")]),a._v(" "),s("li",[a._v("合约可以自己合约的记录(包含资产账户，其他业务相关的记录)。")])]),a._v(" "),s("p",[a._v("对上述三条规则进行具体扩展（以trade为例）：")]),a._v(" "),s("ol",[s("li",[a._v("coins合约可以处理mavl-coins-开始的状态。")]),a._v(" "),s("li",[a._v("token合约可以处理mavl-token-开始的状态。")]),a._v(" "),s("li",[a._v("trade合约可以处理mavl-trade-开始的状态，mavl-trade-开始的状态是交易相关的订单记录。")]),a._v(" "),s("li",[a._v("trade可以处理其他合约里自己的账户和子账户，满足格式mavl-exec-symbol-trade_addr/mavl-exec-symbol-trade_addr:user_addr。")])]),a._v(" "),s("h3",{attrs:{id:"合约过程演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合约过程演示"}},[a._v("#")]),a._v(" 合约过程演示")]),a._v(" "),s("p",[a._v("示例：用户linj想用2个bityuan换10个TC token，正好用户alice愿意进行这场交易置换。假设原来用户linj和alice都有100bityuan和100TC token。")]),a._v(" "),s("p",[a._v("我们已经了解交易示例中普通用户账户，合约账户，合约子账户的格式情况。下面演示下完整的交易过程。")]),a._v(" "),s("p",[a._v("示例的交易过程如下：")]),a._v(" "),s("ol",[s("li",[a._v("linj转账2bityuan到trade账户; alice转账10TC到trade账户。")]),a._v(" "),s("li",[a._v("linj提出交易（挂单）。")]),a._v(" "),s("li",[a._v("alice接受交换。")]),a._v(" "),s("li",[a._v("linj/alice在交易完成后，把币提回到自己的账户。")])]),a._v(" "),s("p",[s("strong",[a._v("初始状态")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("├── label:alice-addr:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d\n│   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        0\n│   ├── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        0\n│   ├── mavl-coins-bty-1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d                        100\n│   └── mavl-token-TC-1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d                        100\n├── label:linj-addr:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                           \n│   ├── mavl-coins-bty-12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                        100\n│   ├── mavl-token-TC-12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                        100\n│   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        0\n│   └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        0\n└── label:trade-addr:1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4\n    ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4                        0   \n    │   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv    0\n    │   └── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d    0\n    └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4                        0\n        ├── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        0\n        └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("p",[a._v("** 用户linj转账2bityuan到trade账户，用户alice转账10TC到trade账户**")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("├── label:alice-addr:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d\n│   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        0\n│   ├── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        10    *\n│   ├── mavl-coins-bty-1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d                        100\n│   └── mavl-token-TC-1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d                        90    *\n├── label:linj-addr:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                           \n│   ├── mavl-coins-bty-12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                        98    *\n│   ├── mavl-token-TC-12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                        100\n│   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        2    *\n│   └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        0\n└── label:trade-addr:1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4\n    ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4                        2    *\n    │   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv    2    *\n    │   └── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d    0\n    └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4                        10    *\n        ├── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        0\n        └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        10    *\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("p",[s("strong",[a._v("用户linj提出交易（挂单)时，linj在trade合约的2bityuan会被冻结，资金变化如下")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("├── label:alice-addr:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d\n│   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        0\n│   ├── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        10   \n│   ├── mavl-coins-bty-1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d                        100\n│   └── mavl-token-TC-1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d                        90   \n├── label:linj-addr:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                           \n│   ├── mavl-coins-bty-12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                        98   \n│   ├── mavl-token-TC-12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                        100\n│   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        2    *\n│   └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        0\n└── label:trade-addr:1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4\n    ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4                        2   \n    │   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv    2    *\n    │   └── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d    0\n    └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4                        10   \n        ├── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        0\n        └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        10\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("p",[s("strong",[a._v("用户alice接受交换: alice/linj在trade合约里的子账户资产互换")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("├── label:alice-addr:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d\n│   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        2    *\n│   ├── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        0    *\n│   ├── mavl-coins-bty-1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d                        100\n│   └── mavl-token-TC-1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d                        90   \n├── label:linj-addr:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                           \n│   ├── mavl-coins-bty-12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                        98   \n│   ├── mavl-token-TC-12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                        100\n│   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        0    *\n│   └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        10    *\n└── label:trade-addr:1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4\n    ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4                        2   \n    │   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv    0    *\n    │   └── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d    2    *\n    └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4                        10   \n        ├── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        10    *\n        └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        0    *\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("p",[s("strong",[a._v("linj/alice在交易完成后，把币提回到自己的账户")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("├── label:alice-addr:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d\n│   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        0    *\n│   ├── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        0    *\n│   ├── mavl-coins-bty-1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d                        102    *\n│   └── mavl-token-TC-1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d                        90   \n├── label:linj-addr:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                           \n│   ├── mavl-coins-bty-12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                        98   \n│   ├── mavl-token-TC-12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv                        110    *\n│   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        0    *\n│   └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        0    *\n└── label:trade-addr:1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4\n    ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4                        0    *   \n    │   ├── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv    0   \n    │   └── mavl-coins-bty-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d    0    *\n    └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4                        0    *\n        ├── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:12qyocayNF7Lv6C9qW4avxs2E7U41fKSfv        0    *\n        └── mavl-token-TC-1BXvgjmBw1aBgmGn1hjfGyRkmN3krWpFP4:1GaMeW34xAMo27iPEkVLeZenu1MfLAVn8d        0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);