(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{490:function(s,e,a){"use strict";a.r(e);var t=a(1),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"部署区块链浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署区块链浏览器"}},[s._v("#")]),s._v(" 部署区块链浏览器")]),s._v(" "),a("blockquote",[a("p",[s._v("在搭建好的平行链上可以单独部署用户自己的区块链浏览器，用于查询链上信息。")])]),s._v(" "),a("h2",{attrs:{id:"浏览器开源代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器开源代码"}},[s._v("#")]),s._v(" 浏览器开源代码")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/33cn/chain33explore",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/33cn/chain33explore"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"服务器配置要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器配置要求"}},[s._v("#")]),s._v(" 服务器配置要求")]),s._v(" "),a("p",[s._v("操作系统：windows，mac，linux\n硬件配置：2核，4GB")]),s._v(" "),a("h2",{attrs:{id:"安装步骤-以ubuntu为例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤-以ubuntu为例"}},[s._v("#")]),s._v(" 安装步骤（以ubuntu为例）")]),s._v(" "),a("h3",{attrs:{id:"安装node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装node"}},[s._v("#")]),s._v(" 安装node")]),s._v(" "),a("ol",[a("li",[s._v("下载node。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget https://npm.taobao.org/mirrors/node/v8.9.4/node-v8.9.4-linux-x64.tar.gz  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("解压node，并修改文件名为node。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tar -zxvf node-v8.9.4-linux-x64.tar.gz\nmv node-v8.9.4-linux-x64 node  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("设置全局变量，并查看node和npm版本信息。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ln -s /root/node/bin/node /usr/local/bin/node\nnode -v\nln -s /root/node/bin/npm /usr/local/bin/npm\nnpm -v  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v('其中"/root/node/bin/node"和"/root/node/bin/npm"是node和npm最初下载的路径，请用户根据实际情况替换。'),a("br"),s._v("\n4. 新增npm配置项。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm config set user 0\nnpm config set unsafe-perm true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"安装cnpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装cnpm"}},[s._v("#")]),s._v(" 安装cnpm")]),s._v(" "),a("ol",[a("li",[s._v("下载cnpm。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install -g cnpm --registry=https://registry.npm.taobao.org  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("设置全局变量。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ln -s /root/node/bin/cnpm /usr/local/bin/cnpm  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('其中"/root/node/bin/cnpm"是cnpm最初下载的路径，请用户根据实际情况替换。'),a("br"),s._v("\n3. 查看cnpm版本。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cnpm -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装vue-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装vue-cli"}},[s._v("#")]),s._v(" 安装vue-cli")]),s._v(" "),a("ol",[a("li",[s._v("下载vue-cli。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cnpm install -g vue-cli  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("设置全局变量。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ln -s /root/node/bin/vue /usr/local/bin/vue  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('其中"/root/node/bin/vue"是vue最初下载的路径，请用户根据实际情况替换。'),a("br"),s._v("\n3. 查看vue版本。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vue -V\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"部署浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署浏览器"}},[s._v("#")]),s._v(" 部署浏览器")]),s._v(" "),a("ol",[a("li",[s._v("克隆区块链浏览器项目。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone https://github.com/33cn/chain33explore.git  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("进入浏览器文件夹并安装依赖。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd chain33explore\nnpm install  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("修改配置文件.env(.env在chain33explore目录下), 将节点配置改成当前区块链的jsonrpc地址。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("VUE_APP_DEFAULT_PROVIDER=http://节点服务器IP地址:8801  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("运行程序。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run dev  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("运行成功，会出现以下提示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("DONE  Compiled successfully in 13184ms    \nApp running at:  \n-Local:   http://localhost:8080/   \n-Network: http://123.60.*.*:8080/  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("font",{attrs:{color:"red"}},[s._v("注意：")]),s._v("如果运行中出现以下类似错误提示，请执行"),a("code",[s._v("npm rebuild node-sass")]),s._v("，然后重新执行步骤4。")],1),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("no such file or directory, scandir '/root/chain33explore/node_modules/node-sass/vendor'  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("访问区块链浏览器。"),a("br"),s._v("\n区块链浏览器部部署成功后，请使用浏览器访问http://123.60."),a("em",[s._v(".")]),s._v(":8080/，查看并使用区块链浏览器。")])])])}),[],!1,null,null,null);e.default=n.exports},500:function(s,e,a){"use strict";a.r(e);var t=a(1),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"部署区块链浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署区块链浏览器"}},[s._v("#")]),s._v(" 部署区块链浏览器")]),s._v(" "),a("blockquote",[a("p",[s._v("在搭建好的平行链上可以单独部署用户自己的区块链浏览器，用于查询链上信息。")])]),s._v(" "),a("h2",{attrs:{id:"浏览器开源代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器开源代码"}},[s._v("#")]),s._v(" 浏览器开源代码")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/33cn/chain33explore",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/33cn/chain33explore"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"服务器配置要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器配置要求"}},[s._v("#")]),s._v(" 服务器配置要求")]),s._v(" "),a("p",[s._v("操作系统：windows，mac，linux\n硬件配置：2核，4GB")]),s._v(" "),a("h2",{attrs:{id:"安装步骤-以ubuntu为例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤-以ubuntu为例"}},[s._v("#")]),s._v(" 安装步骤（以ubuntu为例）")]),s._v(" "),a("h3",{attrs:{id:"安装node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装node"}},[s._v("#")]),s._v(" 安装node")]),s._v(" "),a("ol",[a("li",[s._v("下载node。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget https://npm.taobao.org/mirrors/node/v8.9.4/node-v8.9.4-linux-x64.tar.gz  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("解压node，并修改文件名为node。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tar -zxvf node-v8.9.4-linux-x64.tar.gz\nmv node-v8.9.4-linux-x64 node  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("设置全局变量，并查看node和npm版本信息。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ln -s /root/node/bin/node /usr/local/bin/node\nnode -v\nln -s /root/node/bin/npm /usr/local/bin/npm\nnpm -v  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v('其中"/root/node/bin/node"和"/root/node/bin/npm"是node和npm最初下载的路径，请用户根据实际情况替换。'),a("br"),s._v("\n4. 新增npm配置项。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm config set user 0\nnpm config set unsafe-perm true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"安装cnpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装cnpm"}},[s._v("#")]),s._v(" 安装cnpm")]),s._v(" "),a("ol",[a("li",[s._v("下载cnpm。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install -g cnpm --registry=https://registry.npm.taobao.org  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("设置全局变量。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ln -s /root/node/bin/cnpm /usr/local/bin/cnpm  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('其中"/root/node/bin/cnpm"是cnpm最初下载的路径，请用户根据实际情况替换。'),a("br"),s._v("\n3. 查看cnpm版本。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cnpm -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装vue-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装vue-cli"}},[s._v("#")]),s._v(" 安装vue-cli")]),s._v(" "),a("ol",[a("li",[s._v("下载vue-cli。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cnpm install -g vue-cli  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("设置全局变量。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ln -s /root/node/bin/vue /usr/local/bin/vue  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('其中"/root/node/bin/vue"是vue最初下载的路径，请用户根据实际情况替换。'),a("br"),s._v("\n3. 查看vue版本。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vue -V\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"部署浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署浏览器"}},[s._v("#")]),s._v(" 部署浏览器")]),s._v(" "),a("ol",[a("li",[s._v("克隆区块链浏览器项目。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone https://github.com/33cn/chain33explore.git  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("进入浏览器文件夹并安装依赖。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd chain33explore\nnpm install  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("修改配置文件.env(.env在chain33explore目录下), 将节点配置改成当前区块链的jsonrpc地址。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("VUE_APP_DEFAULT_PROVIDER=http://节点服务器IP地址:8801  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("运行程序。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run dev  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("运行成功，会出现以下提示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("DONE  Compiled successfully in 13184ms    \nApp running at:  \n-Local:   http://localhost:8080/   \n-Network: http://123.60.*.*:8080/  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("font",{attrs:{color:"red"}},[s._v("注意：")]),s._v("如果运行中出现以下类似错误提示，请执行"),a("code",[s._v("npm rebuild node-sass")]),s._v("，然后重新执行步骤4。")],1),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("no such file or directory, scandir '/root/chain33explore/node_modules/node-sass/vendor'  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("访问区块链浏览器。"),a("br"),s._v("\n区块链浏览器部部署成功后，请使用浏览器访问http://123.60."),a("em",[s._v(".")]),s._v(":8080/，查看并使用区块链浏览器。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);