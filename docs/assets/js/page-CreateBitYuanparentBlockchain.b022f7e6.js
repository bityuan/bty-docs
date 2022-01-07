(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{446:function(a,e,n){"use strict";n.r(e);var t=n(1),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"create-bityuan-parent-blockchain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-bityuan-parent-blockchain"}},[a._v("#")]),a._v(" Create BitYuan parent Blockchain")]),a._v(" "),n("blockquote",[n("p",[a._v("BitYuan is a simple and stable public blockchain with strong scalability. By default, the developer can explore on existing nodes of parent blockchain as long as all datas from parachain are written to parent blockchain. However, continuously exploring and development on existing parent blockchain nodes may reduce the system performence. Thus, we suggest that developers can create a node on parent blockchain autonomously, and build parachain on the new node.")])]),a._v(" "),n("h2",{attrs:{id:"get-parent-blockchain-installation-package"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-parent-blockchain-installation-package"}},[a._v("#")]),a._v(" Get parent blockchain installation package")]),a._v(" "),n("ol",[n("li",[n("p",[a._v("Two ways to get parent blockchain installation package:")]),a._v(" "),n("ul",[n("li",[a._v("Download from github "),n("a",{attrs:{href:"https://github.com/bityuan/bityuan/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/bityuan/bityuan/releases"),n("OutboundLink")],1),a._v(", we offer MAC version, Windows version, Linux version.")]),a._v(" "),n("li",[a._v("Download Bityuan program and configuration files from BitYuan node servers.\n"),n("ul",[n("li",[a._v("Download bityuan program："),n("code",[a._v("wget http://122.9.98.227/data/ubuntu/bityuan")])]),a._v(" "),n("li",[a._v("Download cli program："),n("code",[a._v("wget http://122.9.98.227/data/ubuntu/bityuan-cli")])]),a._v(" "),n("li",[a._v("Download configuration files："),n("code",[a._v("wget http://122.9.98.227/data/ubuntu/bityuan.toml")])])])])])]),a._v(" "),n("li",[n("p",[a._v("Grant executable permission.")])])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("chmod +x ./bityuan bityuan-cli bityuan.toml\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h2",{attrs:{id:"revise-configuration-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#revise-configuration-files"}},[a._v("#")]),a._v(" Revise configuration files")]),a._v(" "),n("p",[a._v("Revise the following parameter in bityuan.toml based on the situation:")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('//[rpc]\n//Delete "localhost" for jsonrpc address and grpc address. The whitelist on parent blockchain only allows access from local address, please revise to your network based on the situation. \njrpcBindAddr="localhost:8801"\ngrpcBindAddr="localhost:8802"\nwhitelist=["127.0.0.1"]\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("h2",{attrs:{id:"start-nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#start-nodes"}},[a._v("#")]),a._v(" Start nodes")]),a._v(" "),n("ol",[n("li",[a._v("To start nodes, under the path of Bityuan program and configuration file, run the following command.")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("nohup ./bityuan -f bityuan.toml &\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[a._v("Run the following command, check the info of parent blockchain node. The information of newly added node, by default, is printed at the end.")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("./bityuan-cli net peer\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("Returned log is as follows:")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('{\n    "addr": "123.***.***.253",\n    "port": 13803,\n    "name": "16Uiu2HAmBgc59hyLHMGBCEFm4ETMamzTwjuL*****mo6jt8EBnEB",\n    "mempoolSize": 0,\n    "self": true,\n    "header": {\n        "version": 0,\n        "parentHash": "0xfe6b884b7f82ffcea4ae43f*****674022b19db736d4a7d09a1683",\n        "txHash": "0xd67bc4d2f23f579f1c5a9e92*****07c6aa458fe14c8771ce2f06",\n        "stateHash": "0x1c954d5b22ea6f006597e*****c507e0f8844372f2c996b61f0f93",\n        "height": 0,\n        "blockTime": 1635***972,\n        "txCount": 8,\n        "hash": "0x4ed74981efd76ef6f3ad8ce8*****0435613df14f4d2a6c6f449e",\n        "difficulty": 0\n     },\n    "version": "1.65.2-dd28ef5d@6.5.3",\n    "runningTime": "2.842 minues"\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br")])]),n("h2",{attrs:{id:"node-synchronization"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-synchronization"}},[a._v("#")]),a._v(" Node synchronization")]),a._v(" "),n("p",[a._v("So far, the block height of BitYuan exceeds 17,000,000, it takes really long time for node automatic syncing. You can download synced data to save syncing time. Since the task in process cannot be interruptted during downloading, you can install a Tmux tool. It can help to keep things running persistently on servers within a long downloading.")]),a._v(" "),n("ol",[n("li",[a._v("Install Tmux tool.")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("sudo yum install tmux\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[a._v("Enter Tmux window.")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("tmux\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[a._v("Download synced data.")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("wget http://122.9.98.227/data/datadir.zip\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[a._v("Unzip files.")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("unzip datadir.zip\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("PS: Although the process can save syncing time, it still takes pretty long time for download and subsequent synchronization.")])])}),[],!1,null,null,null);e.default=s.exports}}]);