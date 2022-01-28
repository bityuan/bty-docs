(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{571:function(a,s,e){"use strict";e.r(s);var t=e(1),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"搭建平行链"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建平行链"}},[a._v("#")]),a._v(" 搭建平行链")]),a._v(" "),e("blockquote",[e("p",[a._v("开发者可以在已搭建的主链节点上继续自主搭建平行链，进行各类链上应用开发和探索，如发行Token。")])]),a._v(" "),e("h2",{attrs:{id:"获取平行链软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取平行链软件包"}},[a._v("#")]),a._v(" 获取平行链软件包")]),a._v(" "),e("ol",[e("li",[a._v("从开源库"),e("a",{attrs:{href:"https://github.com/33cn/plugin/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/33cn/plugin/releases"),e("OutboundLink")],1),a._v("中下载与自己平台匹配的release版本，支持Mac、Windowns和Linux版本。")]),a._v(" "),e("li",[a._v("解压平行链软件包。\n"),e("ul",[e("li",[a._v("chain33-linux-amd64 为bin文件")]),a._v(" "),e("li",[a._v("chain33-cli-linux-amd64 为cli命令文件")]),a._v(" "),e("li",[a._v("chain33.para.toml 为平行链配置文件")])])])]),a._v(" "),e("h2",{attrs:{id:"修改配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[a._v("#")]),a._v(" 修改配置文件")]),a._v(" "),e("p",[a._v("根据实际情况修改chain33.para.toml配置文件中的以下参数：")]),a._v(" "),e("ol",[e("li",[a._v('修改title，格式为"user.p.{name}."。其中user.p.前缀为不可修改项，结尾"."需要保留,只修改name名字。')])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('Title="user.p.para."  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("修改平行链创世token,最好为大写。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('CoinSymbol="PARA"  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("修改rpc监控端口。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('//[rpc]  \njrpcBindAddr="localhost:8901"\ngrpcBindAddr="localhost:8902"  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[e("font",{attrs:{color:"red"}},[a._v("注意：")]),a._v("请设置与主链不同的端口号，避免与主链配置冲突。"),e("br"),a._v("\n4. 确定主链ip和端口同步平行链交易数据，主链缺省grpc端口为8802。")],1),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('ParaRemoteGrpcClient="localhost:8802"  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("主链节点的grpc服务器ip，当前可以支持多ip负载均衡，中间使用逗号分隔，如下所示。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('ParaRemoteGrpcClient="118.31.177.1:8802,39.97.2.127:8802"   \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[a._v("确定主链起始高度，即平行链从主链的指定高度作为平行链第一个区块开始同步。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("//[consensus.sub.para]\nstartHeight=345850  \n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("配置为1代表从主链第1个高度开始同步。 此参数不能配置成大于主链的高度。")]),a._v(" "),e("h2",{attrs:{id:"启动节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动节点"}},[a._v("#")]),a._v(" 启动节点")]),a._v(" "),e("ol",[e("li",[a._v("在含有chain33程序及配置文件目录下，执行以下命令，启动节点。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nohup ./chain33-linux-amd64 -f chain33.para.toml >/dev/null 2>&1 &\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("执行命令，查看进程。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ps -ef | grep -v grep | grep chain33-linux-amd64\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("如果进程已经启动，执行以下命令查询平行链网络信息。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" block last_header\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("--rpc_laddr参数指向的是平行链jsonrpc端口地址，此端口配置对应在配置文件的jrpcBindAddr。"),e("br"),a._v("\n创建成功后，将输出如下类似的信息：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n    "version": 0,\n    "parentHash": "0x37a43cd8531b383b29bd3748bc71****c4d6819528cfa7db1b96864896a8",\n    "txHash": "0xeeea856a89820b01626b5f31ed8e86e4****a975766c0a9dc215024c5391fc3",\n    "stateHash": "0x85e3f2786da5d0c476b5668b77df4****56b0f84c2705056eeedbb4f47e8cf3",\n    "height": 1083,\n    "blockTime": 1638776745,\n    "txCount": 1,\n    "hash": "0x4e05a79fd434d0e3c5daa3daf1bee8a49****6dc283e2605393899057fd6955",\n    "difficulty": 520159231\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);