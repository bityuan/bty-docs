(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{460:function(a,s,e){"use strict";e.r(s);var t=e(1),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"平行链发行token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#平行链发行token"}},[a._v("#")]),a._v(" 平行链发行Token")]),a._v(" "),e("blockquote",[e("p",[a._v("支持开发者在平行链上自主发行Token，用于区块链交易流通和价值激励。"),e("br"),a._v(" "),e("font",{attrs:{color:"red"}},[a._v("注意：")]),a._v("在发行token的过程成每个操作都需要花费0.0001个比特元，请保证用户地址中有足够的比特元，避免因为余额不足而导致token发行失败。")],1)]),a._v(" "),e("h2",{attrs:{id:"检查平行链节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查平行链节点"}},[a._v("#")]),a._v(" 检查平行链节点")]),a._v(" "),e("ol",[e("li",[a._v("登录节点服务器，在含有平行链配置文件目录下，执行以下命令查询节点是否已经和主链同步。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." para is_sync  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("rpc_laddr表示平行链节点启动的IP和监听端口，根据具体情况修改 (具体的端口可以查看平行链配置文件中的grpcBindAddr参数），paraName为平行链名称（可以查看平行链配置文件中的Title参数）。"),e("br"),a._v("\n平行链需要从主链上拉取区块，所以同步需要花一些时间，同步成功将会返回"),e("code",[a._v("true")]),a._v("。"),e("br"),a._v("\n2. 执行以下命令查看节点区块信息。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." block last_header\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"token的系统配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#token的系统配置"}},[a._v("#")]),a._v(" Token的系统配置")]),a._v(" "),e("p",[a._v("在完成同步后，在平行链上使用chain33-cli命令行工具操作。对于一条区块链来说，token的配置只需要在链部署好之后执行一次即可。"),e("br"),a._v("\n发行token前需要先配置链的超级管理员以及token-finisher和token-blacklist，配置完之后才能发行token。")]),a._v(" "),e("h3",{attrs:{id:"配置链的超级管理员"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置链的超级管理员"}},[a._v("#")]),a._v(" 配置链的超级管理员")]),a._v(" "),e("p",[a._v("超级管理员的作用是增加系统配置，比如以下的token-finisher和token-blacklist。"),e("br"),a._v("\n根据实际情况，在chain33.toml中修改superManager和tokenApprs两个参数，把这两个地址设置成自己的地址。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('//[exec.sub.manage]\nsuperManager=["1CbEVT9RnM5oZhWMj4fxUrJX94VtRotzvs"]  \n//[exec.sub.token]\ntokenApprs=["1CbEVT9RnM5oZhWMj4fxUrJX94VtRotzvs"]\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("配置文件修改完之后，重新启动该节点并读取新的配置文件。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pkill chain33-linux-amd64  \nnohup ./chain33-linux-amd64 -f chain33.para.toml >> log.out 2>&1 &\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"配置token-finisher"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置token-finisher"}},[a._v("#")]),a._v(" 配置token-finisher")]),a._v(" "),e("p",[a._v("token-finisher：token审核人的地址，用来在token预创建之后，对token的信息（名称、额度）进行审核。")]),a._v(" "),e("ol",[e("li",[a._v("配置系统配置项token-finisher。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." --conf=chain33.para.toml config config_tx -c token-finisher -o add -v 1CbEVT9RnM5oZhWMj4fxUrJX94VtRotzvs  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v('--conf：配置文件名称，-c：固定填"token-finisher"，-o：add（表示添加），-v：token-finisher的地址，--rpc_laddr：平行链节点监听地址，--paraName：对应平行链的名称。'),e("br"),a._v("\n2. 交易签名。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." wallet sign -k 3990969DF92A5914F7B71EEB9A4E58D6E255F32BF042FEA5318FC8B3D50EE6E8 -d "上一步生成的数据"    \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("-k：区块链的超级管理员的私钥，-d：交易数据（由上一步生成）。可以在命令行中添加交易过期时间参数，-e：可设置为ms、s、m、h等时间字符串。"),e("br"),a._v("\n3. 发送交易。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." wallet send -d "上一步生成的签名后的数据"  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("查询结果。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." config query -k token-finisher  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("输出样例:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n      "key":"token-finisher",\n      "value":"[1CbEVT9RnM5oZhWMj4fxUrJX94VtRotzvs]"\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"配置token-blacklist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置token-blacklist"}},[a._v("#")]),a._v(" 配置token-blacklist")]),a._v(" "),e("p",[a._v("token-blacklist：token黑名单，指示不可以在链上创建的token名称，比如BTC、ETH等。")]),a._v(" "),e("ol",[e("li",[a._v("配置token-blacklist。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." --conf=chain33.para.toml config config_tx -c token-blacklist -o add -v BTC  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v('--conf：配置文件名称，-c：固定填"token-blacklist"，-o：add（表示添加），-v：黑名单名称，比如BTC，--rpc_laddr：平行链节点监听地址，--paraName：对应平行链的名称。'),e("br"),a._v("\n2. 交易签名。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." wallet sign -k 3990969DF92A5914F7B71EEB9A4E58D6E255F32BF042FEA5318FC8B3D50EE6E8 -d "上一步生成的数据"  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("-k：区块链的超级管理员的私钥，-d：交易数据（由上一步生成）。"),e("br"),a._v("\n3. 发送交易。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." wallet send -d "上一步生成的签名后的数据" \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("查询结果。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." config query -k token-blacklist  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("输出样例：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n      "key":"token-blacklist",\n      "value":"[BTC]"\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h2",{attrs:{id:"token预创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#token预创建"}},[a._v("#")]),a._v(" token预创建")]),a._v(" "),e("p",[a._v("发行token前，需要先预创建token。")]),a._v(" "),e("ol",[e("li",[a._v("预创建token。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." token precreate -f 0.001 -i 开发者币 -n "DEVELOP COINS" -a "token接收者的地址(可以是自己或指定别人)" -p 0 -s "COINSDEVX" -t 19900000000  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("-f：token交易费，-i：token的简介，-n：token的名称，-a：token的接收者的地址，-p：token的价格，-s：token的标记，-t：发行的token总量，--rpc_laddr：平行链节点监听地址，--paraName：对应平行链的名称。"),e("br"),a._v("\n2. 交易签名。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." wallet sign -k 3990969DF92A5914F7B71EEB9****6E255F32BF042FEA5318FC8B3D50EE6E8 -d "上一步生成的数据"  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("-k：区块链的超级管理员的私钥，-d：交易数据（由上一步生成）。"),e("br"),a._v("\n3. 发送交易。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." wallet send -d "上一步生成的签名后的数据"  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("查询结果。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." token precreated  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("输出样例：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n      "name":"DEVELOP COINS",\n      "symbol":"COINSDEVX",\n      "introduction": "开发者币",\n      "total": 19900000000,\n      "owner": "1CbEVT9RnM5oZh*******JX94VtRotzvs",\n      "creator": "1CbEVT9RnM5o*******fxUrJX94VtRotzvs",\n      "prepareCreateHeight": 14,\n     "prepareCreateTime": 1577432549,\n     "precision": 8\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("p",[a._v("这一步完成，才可以进入正式发行token的流程。")]),a._v(" "),e("h2",{attrs:{id:"token发行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#token发行"}},[a._v("#")]),a._v(" token发行")]),a._v(" "),e("ol",[e("li",[a._v("发行token。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." token finish -f 0.001 -s COINSDEVX -a "token接收者的地址"  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("-f：token交易费，-a：token的接收者的地址，-s：token的标记，--rpc_laddr：平行链节点监听地址，--paraName：对应平行链的名称。"),e("br"),a._v("\n2. 交易签名。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." wallet sign -k 3990969DF92A5914F7B71EEB9A4E******55F32BF042FEA5318FC8B3D50EE6E8 -d "上一步生成的数据"  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("-k：区块链的超级管理员的私钥，-d：交易数据（由上一步生成） 。"),e("br"),a._v("\n3. 发送交易。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." wallet send -d "上一步生成的签名后的数据"  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("查询结果。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." token created  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("输出样例：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n      "name":"DEVELOP COINS",\n      "symbol":"COINSDEVX",\n      "introduction": "开发者币",\n      "total": 19900000000,\n      "owner": "1CbEVT9RnM5oZhW******X94VtRotzvs",\n      "creator": "1CbEVT9RnM5oZhWM*****4VtRotzvs",\n      "status": 1,\n      "createdHeight": 15,\n      "createdTime": 1577432745,\n      "prepareCreateHeight": 14,\n      "prepareCreateTime": 1577432549,\n      "precision": 8\n}  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[a._v("根据地址查询token。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./chain33-cli-linux-amd64 --rpc_laddr="http://localhost:8901" --paraName="user.p.devtest." token balance -a "token接收者的地址" -s COINSDEVX -e token  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("输出样例：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('[\n    {\n        "Token":"COINSDEVX",\n        "balance": 19900000000.0000,\n        "frozen": "0.0000",\n        "addr": "1CbEVT9RnM5oZhW******94VtRotzvs",\n    }\n]\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);