(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{506:function(a,s,n){"use strict";n.r(s);var e=n(1),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"平行链共识节点挖矿奖励规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#平行链共识节点挖矿奖励规则"}},[a._v("#")]),a._v(" 平行链共识节点挖矿奖励规则")]),a._v(" "),n("p",[a._v("平行链共识节点是参与平行链共识安全的节点，发送共识交易，同时享受平行链挖矿奖励。")]),a._v(" "),n("h2",{attrs:{id:"共识节点资格"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#共识节点资格"}},[a._v("#")]),a._v(" 共识节点资格")]),a._v(" "),n("ul",[n("li",[a._v("共识节点需要加入共识节点账户组才具有发送共识交易的资格，不然即使发送也不会被接受。")]),a._v(" "),n("li",[a._v("新的共识节点需要共识节点账户组成员需要超过2/3投票通过才可以加入共识节点账户组。")])]),a._v(" "),n("h2",{attrs:{id:"共识节点挖矿奖励"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#共识节点挖矿奖励"}},[a._v("#")]),a._v(" 共识节点挖矿奖励")]),a._v(" "),n("ul",[n("li",[a._v("共识节点根据本地计算的区块哈希发送共识交易参与共识，共识达成后促使达成共识的节点享受挖矿奖励。")]),a._v(" "),n("li",[a._v("比如共识账户组有4个挖矿账户A,B,C,D，其中A,B,C，D都依次发送共识交易，基于超过2/3的规则，在C的共识交易收到后即达成共识，那么奖励将分给A,B,C，而D是在达成共识后发送的，不享受挖矿奖励。")])]),a._v(" "),n("h2",{attrs:{id:"绑定共识节点挖矿-矿池的概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绑定共识节点挖矿-矿池的概念"}},[a._v("#")]),a._v(" 绑定共识节点挖矿（矿池的概念)")]),a._v(" "),n("ul",[n("li",[a._v("如果账户不是共识节点，但是想参与挖矿奖励，可以锁定平行链基础coins到paracross合约，并绑定到共识节点参与挖矿。")]),a._v(" "),n("li",[a._v("绑定账户可以绑定到一个或多个共识节点参与挖矿。")]),a._v(" "),n("li",[a._v("挖矿奖励按锁定coins数量的权重来分配挖矿奖励。")]),a._v(" "),n("li",[a._v("如果绑定的共识节点在某高度没有得到挖矿奖励，对应的绑定账户也得不到相应奖励。")]),a._v(" "),n("li",[a._v("绑定账户可以通过bind命令的coins数量的修改来增加或减少锁定coins数量，可以通过unbind命令解除对某个共识节点的绑定。")])]),a._v(" "),n("h2",{attrs:{id:"奖励规则和金额"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#奖励规则和金额"}},[a._v("#")]),a._v(" 奖励规则和金额")]),a._v(" "),n("p",[a._v("奖励规则和金额可配置")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("    [mver.consensus.paracross]\n    #超级节点挖矿奖励\n    coinReward=18\n    #发展基金奖励\n    coinDevFund=12\n    #如果超级节点上绑定了委托账户，则奖励超级节点coinBaseReward，其余部分(coinReward-coinBaseReward)按权重分给委托账户。\n    coinBaseReward=3\n    #委托账户最少解绑定时间(按小时)\n    unBindTime=24\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("ul",[n("li",[a._v("每个区块产生的挖矿总奖励是coinDevFund+coinReward=30，共识达成后，发展基金账户分走12，剩余的18个coin平均分给达成共识的节点。")]),a._v(" "),n("li",[a._v("如果有绑定挖矿的账户绑定了共识节点进行挖矿，则共识节点平分基础的coinBaseReward，剩余部分(coinReward-coinBaseReward)按绑定挖矿锁定币的权重数量分给绑定挖矿的节点。")])]),a._v(" "),n("h2",{attrs:{id:"绑定挖矿命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绑定挖矿命令"}},[a._v("#")]),a._v(" 绑定挖矿命令")]),a._v(" "),n("p",[a._v("生成“绑定/解绑定挖矿”的交易（未签名）")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v('```\n{\n    "method" : "Chain33.CreateTransaction",\n    "params" : [\n        {\n        "execer" : "{user.p.para}.paracross",\n        "actionName" : "ParaBindMiner",\n        "payload" : {\n　　　　　　　"bindAction":"1"\n            "bindCoins" : 5,\n            "targetNode" : "1KSBd17H7ZK8iT37aJztFB22XGwsPTdwE4",\n        }\n        }\n    ],\n}\n```\n')])])]),n("p",[n("strong",[a._v("参数说明：")])]),a._v(" "),n("p",[a._v("|参数|类型|说明|\n|----|----|----|\n|method|string|Chain33.CreateTransaction|\n|execer|string|必须是平行链的执行器user.p.para.paracross,title:user.p.para.按需调整|\n|actionName|string|ParaBindMiner|\n|bindAction|string|绑定:1，解绑定:2|\n|bindCoins|int|绑定挖矿冻结币的份额，需冻结平行链原生代币，解绑不需要此配置。|\n|targetNode|string|绑定目标共识节点，需要是共识账户组的成员。|")]),a._v(" "),n("h2",{attrs:{id:"挖矿奖励的转出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#挖矿奖励的转出"}},[a._v("#")]),a._v(" 挖矿奖励的转出")]),a._v(" "),n("h3",{attrs:{id:"查询挖矿奖励"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询挖矿奖励"}},[a._v("#")]),a._v(" 查询挖矿奖励")]),a._v(" "),n("p",[a._v("挖矿产生的奖励在平行链的paracross执行器中。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('    {\n        "method": "Chain33.GetBalance",\n        "params": [{\n            "addresses": ["{共识账户地址}"],\n            "execer": "user.p.para.paracross"\n        }]\n    }\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("ul",[n("li",[a._v("cli命令方法\n"),n("code",[a._v("./chain33-cli --rpc_laddr http://localhost:8901 account balance -a 1KSBd17H7ZK8iT37aJztFB22XGwsPTdwE4")])])]),a._v(" "),n("p",[a._v("响应")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('{\n  "addr": "1KSBd17H7ZK8iT37aJztFB22XGwsPTdwE4",\n  "execAccount": [\n      {\n         "execer": "user.p.para.paracross",\n         "account": {\n             "balance": "2227.0000",\n             "frozen": "0.0000"\n          }\n      }\n  ]\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br")])]),n("ul",[n("li",[a._v("rpc方法\n"),n("code",[a._v('curl -ksd \'{"method":"Chain33.GetBalance","params":[{"addresses":["1KSBd17H7ZK8iT37aJztFB22XGwsPTdwE4"],"execer":"user.p.para.paracross"}]}\' http://172.28.0.2:8901')])])]),a._v(" "),n("p",[a._v("响应")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('{\n  "result": [{\n      "currency": 0,\n      "balance": 227500000000,\n      "frozen": 0,\n      "addr": "1KSBd17H7ZK8iT37aJztFB22XGwsPTdwE4"\n   }],\n} \n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br")])]),n("h3",{attrs:{id:"转出挖矿奖励"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#转出挖矿奖励"}},[a._v("#")]),a._v(" 转出挖矿奖励")]),a._v(" "),n("p",[a._v("需要从平行链执行器paracross下把奖励转出到平行链coins合约的签名地址下。")]),a._v(" "),n("ul",[n("li",[a._v("cli命令方式")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("./chain33-cli --rpc_laddr http://localhost:8801 --paraName {平行链title} send coins withdraw -a {数量} -e user.p.para.paracross -k ${私钥}```\n\n例子\n```./chain33-cli --rpc_laddr http://localhost:8801 --paraName user.p.para. send coins withdraw -a 2000000000 -e user.p.para.paracross -k ${私钥}```\n\n响应\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("p",[a._v('./chain33-cli --rpc_laddr http://localhost:8901 account balance -a 1KSBd17H7ZK8iT37aJztFB22XGwsPTdwE4\n{\n"addr": "1KSBd17H7ZK8iT37aJztFB22XGwsPTdwE4",\n"execAccount": [\n{\n"execer": "user.p.para.paracross",\n"account": {\n"balance": "1032.0000",\n"frozen": "0.0000"\n}\n},\n{\n"execer": "user.p.para.coins",'),n("br"),a._v('\n//注:user.p.para.coins下就是自己的余额。\n"account": {\n"balance": "2020.0000",\n"frozen": "0.0000"\n}\n}\n]\n}')]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('\n- rpc方法\n1.创建交易:\n```{\n\t"method": "Chain33.CreateRawTransaction",\n\t"params": [{\n\t\t"to": "19WJJv96nKAU4sHFWqGmsqfjxd37jazqii",    //平行链paracross执行器地址，不需要修改。\n\t\t"amount": 2000000000,\n\t\t"fee": 2000000,                               //fee需要自己设置。\n\t\t"isWithdraw": true,\n\t\t"execName": "user.p.para.paracross",\n\t\t"execer": "user.p.para.coins"\n\t}]\n}```\n\n\n2.签名\n```{\n\t"method": "Chain33.SignRawTx",\n\t"params": [{\n\t\t"privkey": "{私钥}",\n\t\t"txHex": "{交易数据}",\n\t\t"expire": "120s"\n\t}]\n}```\n3.发送交易\n```{\n\t"method": "Chain33.SendTransaction",\n\t"params": [{\n\t\t"data": "{签名数据}"\n\t}]\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br"),n("span",{staticClass:"line-number"},[a._v("30")]),n("br"),n("span",{staticClass:"line-number"},[a._v("31")]),n("br"),n("span",{staticClass:"line-number"},[a._v("32")]),n("br")])])])}),[],!1,null,null,null);s.default=t.exports},542:function(a,s,n){"use strict";n.r(s);var e=n(1),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"平行链共识节点挖矿奖励规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#平行链共识节点挖矿奖励规则"}},[a._v("#")]),a._v(" 平行链共识节点挖矿奖励规则")]),a._v(" "),n("blockquote",[n("p",[a._v("平行链共识节点是参与平行链共识安全的节点，发送共识交易，同时享受平行链挖矿奖励。")])]),a._v(" "),n("h2",{attrs:{id:"共识节点资格"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#共识节点资格"}},[a._v("#")]),a._v(" 共识节点资格")]),a._v(" "),n("ul",[n("li",[a._v("共识节点需要加入共识节点账户组才具有发送共识交易的资格，不然即使发送也不会被接受。")]),a._v(" "),n("li",[a._v("新的共识节点需要共识节点账户组成员需要超过2/3投票通过才可以加入共识节点账户组。")])]),a._v(" "),n("h2",{attrs:{id:"共识节点挖矿奖励"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#共识节点挖矿奖励"}},[a._v("#")]),a._v(" 共识节点挖矿奖励")]),a._v(" "),n("ul",[n("li",[a._v("共识节点根据本地计算的区块哈希发送共识交易参与共识，共识达成后促使达成共识的节点享受挖矿奖励。")]),a._v(" "),n("li",[a._v("比如共识账户组有4个挖矿账户A,B,C,D，其中A,B,C，D都依次发送共识交易，基于超过2/3的规则，在C的共识交易收到后即达成共识，那么奖励将分给A,B,C，而D是在达成共识后发送的，不享受挖矿奖励。")])]),a._v(" "),n("h2",{attrs:{id:"绑定共识节点挖矿-矿池的概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绑定共识节点挖矿-矿池的概念"}},[a._v("#")]),a._v(" 绑定共识节点挖矿（矿池的概念)")]),a._v(" "),n("ul",[n("li",[a._v("如果账户不是共识节点，但是想参与挖矿奖励，可以锁定平行链基础coins到paracross合约，并绑定到共识节点参与挖矿。")]),a._v(" "),n("li",[a._v("绑定账户可以绑定到一个或多个共识节点参与挖矿。")]),a._v(" "),n("li",[a._v("挖矿奖励按锁定coins数量的权重来分配挖矿奖励。")]),a._v(" "),n("li",[a._v("如果绑定的共识节点在某高度没有得到挖矿奖励，对应的绑定账户也得不到相应奖励。")]),a._v(" "),n("li",[a._v("绑定账户可以通过bind命令的coins数量的修改来增加或减少锁定coins数量，可以通过unbind命令解除对某个共识节点的绑定。")])]),a._v(" "),n("h2",{attrs:{id:"奖励规则和金额"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#奖励规则和金额"}},[a._v("#")]),a._v(" 奖励规则和金额")]),a._v(" "),n("p",[a._v("奖励规则和金额可配置")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("    [mver.consensus.paracross]\n    #超级节点挖矿奖励\n    coinReward=18\n    #发展基金奖励\n    coinDevFund=12\n    #如果超级节点上绑定了委托账户，则奖励超级节点coinBaseReward，其余部分(coinReward-coinBaseReward)按权重分给委托账户。\n    coinBaseReward=3\n    #委托账户最少解绑定时间(按小时)\n    unBindTime=24\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("ul",[n("li",[a._v("每个区块产生的挖矿总奖励是coinDevFund+coinReward=30，共识达成后，发展基金账户分走12，剩余的18个coin平均分给达成共识的节点。")]),a._v(" "),n("li",[a._v("如果有绑定挖矿的账户绑定了共识节点进行挖矿，则共识节点平分基础的coinBaseReward，剩余部分(coinReward-coinBaseReward)按绑定挖矿锁定币的权重数量分给绑定挖矿的节点。")])]),a._v(" "),n("h2",{attrs:{id:"绑定挖矿命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绑定挖矿命令"}},[a._v("#")]),a._v(" 绑定挖矿命令")]),a._v(" "),n("p",[n("strong",[a._v("调用接口")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("rpc CreateTransaction(CreateTxIn) returns (UnsignTx) {}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[n("strong",[a._v("参数：")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("message CreateTxIn {\n    bytes  execer     = 1;\n    string actionName = 2;\n    bytes  payload    = 3;\n}\nmessage ParaBindMinerCmd{\n    int32  bindAction   = 1;  // 1: bind, 2:unbind\n    int64  bindCoins    = 2;  // bind coins count\n    string targetNode   = 3;  // super node addr\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br")])]),n("p",[n("strong",[a._v("参数说明：")])]),a._v(" "),n("table",[n("thead",[n("tr",[n("th",[a._v("参数")]),a._v(" "),n("th",[a._v("类型")]),a._v(" "),n("th",[a._v("说明")])])]),a._v(" "),n("tbody",[n("tr",[n("td",[a._v("method")]),a._v(" "),n("td",[a._v("string")]),a._v(" "),n("td",[a._v("Chain33.CreateTransaction")])]),a._v(" "),n("tr",[n("td",[a._v("execer")]),a._v(" "),n("td",[a._v("string")]),a._v(" "),n("td",[a._v("必须是平行链的执行器user.p.para.paracross,title:user.p.para.按需调整")])]),a._v(" "),n("tr",[n("td",[a._v("actionName")]),a._v(" "),n("td",[a._v("string")]),a._v(" "),n("td",[a._v("ParaBindMiner")])]),a._v(" "),n("tr",[n("td",[a._v("bindAction")]),a._v(" "),n("td",[a._v("string")]),a._v(" "),n("td",[a._v("绑定:1，解绑定:2")])]),a._v(" "),n("tr",[n("td",[a._v("bindCoins")]),a._v(" "),n("td",[a._v("int")]),a._v(" "),n("td",[a._v("绑定挖矿冻结币的份额，需冻结平行链原生代币，解绑定不需要此配置。")])]),a._v(" "),n("tr",[n("td",[a._v("targetNode")]),a._v(" "),n("td",[a._v("string")]),a._v(" "),n("td",[a._v("绑定目标共识节点，需要是共识账户组的成员。")])])])]),a._v(" "),n("p",[n("strong",[a._v("返回数据：")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("message UnsignTx {\n    bytes data = 1;\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])]),n("p",[n("strong",[a._v("参数说明：")])]),a._v(" "),n("table",[n("thead",[n("tr",[n("th",[a._v("参数")]),a._v(" "),n("th",[a._v("类型")]),a._v(" "),n("th",[a._v("说明")])])]),a._v(" "),n("tbody",[n("tr",[n("td",[a._v("data")]),a._v(" "),n("td",[a._v("bytes")]),a._v(" "),n("td",[a._v("交易十六进制编码后的数据")])])])]),a._v(" "),n("h2",{attrs:{id:"挖矿奖励的转出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#挖矿奖励的转出"}},[a._v("#")]),a._v(" 挖矿奖励的转出")]),a._v(" "),n("h3",{attrs:{id:"查询挖矿奖励"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询挖矿奖励"}},[a._v("#")]),a._v(" 查询挖矿奖励")]),a._v(" "),n("p",[a._v("挖矿产生的奖励在平行链的paracross执行器中。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('    {\n        "method": "Chain33.GetBalance",\n        "params": [{\n            "addresses": ["{共识账户地址}"],\n            "execer": "user.p.para.paracross"\n        }]\n    }\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("ul",[n("li",[a._v("cli命令方法\n"),n("code",[a._v("./chain33-cli --rpc_laddr http://localhost:8901 account balance -a 1KSBd17H7ZK8iT37aJztFB22XGwsPTdwE4")])])]),a._v(" "),n("p",[a._v("响应")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('{\n  "addr": "1KSBd17H7ZK8iT37aJztFB22XGwsPTdwE4",\n  "execAccount": [\n      {\n         "execer": "user.p.para.paracross",\n         "account": {\n             "balance": "2227.0000",\n             "frozen": "0.0000"\n          }\n      }\n  ]\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br")])]),n("ul",[n("li",[a._v("rpc方法\n"),n("code",[a._v('curl -ksd \'{"method":"Chain33.GetBalance","params":[{"addresses":["1KSBd17H7ZK8iT37aJztFB22XGwsPTdwE4"],"execer":"user.p.para.paracross"}]}\' http://172.28.0.2:8901')])])]),a._v(" "),n("p",[a._v("响应")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('{\n  "result": [{\n      "currency": 0,\n      "balance": 227500000000,\n      "frozen": 0,\n      "addr": "1KSBd17H7ZK8iT37aJztFB22XGwsPTdwE4"\n   }],\n} \n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br")])]),n("h3",{attrs:{id:"转出挖矿奖励"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#转出挖矿奖励"}},[a._v("#")]),a._v(" 转出挖矿奖励")]),a._v(" "),n("p",[a._v("需要从平行链执行器paracross下把奖励转出到平行链coins合约的签名地址下。")]),a._v(" "),n("ul",[n("li",[a._v("cli命令方式")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("./chain33-cli --rpc_laddr http://localhost:8801 --paraName {平行链title} send coins withdraw -a {数量} -e user.p.para.paracross -k ${私钥}```\n\n例子\n```./chain33-cli --rpc_laddr http://localhost:8801 --paraName user.p.para. send coins withdraw -a 2000000000 -e user.p.para.paracross -k ${私钥}```\n\n响应\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("p",[a._v('./chain33-cli --rpc_laddr http://localhost:8901 account balance -a 1KSBd17H7ZK8iT37aJztFB22XGwsPTdwE4\n{\n"addr": "1KSBd17H7ZK8iT37aJztFB22XGwsPTdwE4",\n"execAccount": [\n{\n"execer": "user.p.para.paracross",\n"account": {\n"balance": "1032.0000",\n"frozen": "0.0000"\n}\n},\n{\n"execer": "user.p.para.coins",'),n("br"),a._v('\n//注:user.p.para.coins下就是自己的余额。\n"account": {\n"balance": "2020.0000",\n"frozen": "0.0000"\n}\n}\n]\n}')]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('\n- rpc方法\n1.创建交易:\n```{\n\t"method": "Chain33.CreateRawTransaction",\n\t"params": [{\n\t\t"to": "19WJJv96nKAU4sHFWqGmsqfjxd37jazqii",    //平行链paracross执行器地址，不需要修改。\n\t\t"amount": 2000000000,\n\t\t"fee": 2000000,                               //fee需要自己设置。\n\t\t"isWithdraw": true,\n\t\t"execName": "user.p.para.paracross",\n\t\t"execer": "user.p.para.coins"\n\t}]\n}```\n\n\n2.签名\n```{\n\t"method": "Chain33.SignRawTx",\n\t"params": [{\n\t\t"privkey": "{私钥}",\n\t\t"txHex": "{交易数据}",\n\t\t"expire": "120s"\n\t}]\n}```\n3.发送交易\n```{\n\t"method": "Chain33.SendTransaction",\n\t"params": [{\n\t\t"data": "{签名数据}"\n\t}]\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br"),n("span",{staticClass:"line-number"},[a._v("30")]),n("br"),n("span",{staticClass:"line-number"},[a._v("31")]),n("br"),n("span",{staticClass:"line-number"},[a._v("32")]),n("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);