(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{449:function(a,e,s){"use strict";s.r(e);var t=s(1),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"build-parachain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-parachain"}},[a._v("#")]),a._v(" Build parachain")]),a._v(" "),s("blockquote",[s("p",[a._v("The developer can build your own parachain on the exsiting node of parent blockchain and develop kinds of onchain applications, e.g. Token launch.")])]),a._v(" "),s("h2",{attrs:{id:"get-parachain-installation-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-parachain-installation-package"}},[a._v("#")]),a._v(" Get parachain installation package")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Download the package from "),s("a",{attrs:{href:"https://github.com/33cn/plugin/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/33cn/plugin/releases"),s("OutboundLink")],1),a._v(". we offer Mac version, Windows version and Linux version.")])]),a._v(" "),s("li",[s("p",[a._v("Unzip parachain installation package.")]),a._v(" "),s("ul",[s("li",[a._v("bin file: chain33-linux-amd64")]),a._v(" "),s("li",[a._v("cli command file: chain33-cli-linux-amd64")]),a._v(" "),s("li",[a._v("parachain configuration file: chain33.para.toml")])])])]),a._v(" "),s("h2",{attrs:{id:"revise-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#revise-configuration-file"}},[a._v("#")]),a._v(" Revise configuration file")]),a._v(" "),s("p",[a._v("Revise the following parameter in chain33.para.toml based on the situation.")]),a._v(" "),s("ol",[s("li",[a._v('Revise title, format is "user.p.{name}.", in which only name can be modified.')])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('Title="user.p.para."  \n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("Revise parachain genesis token which should be in uppercase.")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('CoinSymbol="PARA"  \n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("Revise rpc monitoring port.")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('//[rpc]  \njrpcBindAddr="localhost:8901"\ngrpcBindAddr="localhost:8902"  \n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("font",{attrs:{color:"red"}},[a._v(" Notice:")]),a._v(" The monitoring port should differ from the port for parent blockchain, to avoid configuration collision.")],1),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[a._v("Ensure the IP and port sync trading data from parachain. By default, the grpc port of parent blockchain is 8802. Please revise the grpc port of parent blockchain based on your situation.")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('ParaRemoteGrpcClient="localhost:8802"  \n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v('grpc server ip of parent blockchain nodes can support multi-ip loading balance. It should be divide by ",". The example is as follows:')]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('ParaRemoteGrpcClient="118.31.177.1:8802,39.97.2.127:8802"   \n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"5"}},[s("li",[a._v("Confirm the start height of parent blockchain. Parachain start syncing from the specific height of parent blockchain, which is also the first block of parachain.")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("//[consensus.sub.para]\nstartHeight=345850  \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v('If startHeight is set as "1", it means that the parachain should sync from first height of parent blockchain. Thus, the parameter should not be set higher than the height of parent blockchain.')]),a._v(" "),s("h2",{attrs:{id:"start-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-nodes"}},[a._v("#")]),a._v(" Start nodes")]),a._v(" "),s("ol",[s("li",[a._v("To start nodes, under the path of chain33 program and configuration file, run the following command.")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nohup ./chain33-linux-amd64 -f chain33.para.toml >/dev/null 2>&1 &\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("Run the following command, and check the process.")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ps -ef | grep -v grep | grep chain33-linux-amd64\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("If process starts, run the following command to inquire network information of parachain.")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" block last_header\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("--parameter[rpc_laddr] is jsonrpc port address of parachain, which is marked as jrpcBindAddr in configuration file.")]),a._v(" "),s("p",[a._v("If creation succeeds, the following information should be returned:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{\n    "version": 0,\n    "parentHash": "0x37a43cd8531b383b29bd3748bc71****c4d6819528cfa7db1b96864896a8",\n    "txHash": "0xeeea856a89820b01626b5f31ed8e86e4****a975766c0a9dc215024c5391fc3",\n    "stateHash": "0x85e3f2786da5d0c476b5668b77df4****56b0f84c2705056eeedbb4f47e8cf3",\n    "height": 1083,\n    "blockTime": 1638776745,\n    "txCount": 1,\n    "hash": "0x4e05a79fd434d0e3c5daa3daf1bee8a49****6dc283e2605393899057fd6955",\n    "difficulty": 520159231\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);