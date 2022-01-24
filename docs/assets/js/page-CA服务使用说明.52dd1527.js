(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{487:function(s,a,e){"use strict";e.r(a);var n=e(1),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"ca服务使用说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ca服务使用说明"}},[s._v("#")]),s._v(" CA服务使用说明")]),s._v(" "),e("blockquote",[e("p",[s._v("chain33-ca是chain33平行链自带的CA服务节点，可向区块链用户签发认证证书，向区块链节点提供证书链认证，提供区块链用户权限管理和证书管理。")])]),s._v(" "),e("h2",{attrs:{id:"_1-准备环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备环境"}},[s._v("#")]),s._v(" 1. 准备环境")]),s._v(" "),e("p",[e("strong",[s._v("下载软件包")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("wget https://bty33.oss-cn-shanghai.aliyuncs.com/chain33-Ca.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("解压到任意指定目录")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("tar -xzvf chain33-Ca.tar.gz \ncd chain33-Ca\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("font",{attrs:{color:"blue"}},[s._v("说明：")]),s._v("软件包包含chain33-ca节点程序"),e("code",[s._v("chain33-ca")]),s._v("和配置文件"),e("code",[s._v("chain33.ca.toml")]),s._v("。")],1),s._v(" "),e("h2",{attrs:{id:"_2-修改配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改配置文件"}},[s._v("#")]),s._v(" 2. 修改配置文件")]),s._v(" "),e("p",[s._v("根据实际场景修改管理员公钥，证书相关的配置。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('//CA服务端口\n//[server]\nbindAddr = ":11901"\n//签名类型，支持"auth_ecdsa", "auth_sm2"\nsignType = "auth_ecdsa"\n//CA文件目录\ncertdir = "certdir"\n//管理员公钥\nadmin = ""\n//db类型  \n//[db]\ndriver = "leveldb"\n//数据源\ndbPath = "caserver"\n//证书信息\n//[cert]\ncn = "chain33-ca-server"\ncontry = "CN"\nlocality = "HZ"\nprovince = "ZJ"\nexpire = 100\n//CRL过期时间,单位小时\ncrlexpire = 24\n//配置初始节点的ip\nip = ["127.0.0.1", "127.0.0.2"]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("h2",{attrs:{id:"_3-节点启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-节点启动"}},[s._v("#")]),s._v(" 3. 节点启动")]),s._v(" "),e("p",[s._v("启动节点：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("nohup ./chain33-ca -f chain33.ca.toml > ca.log 2>&1 &\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看进程是否启动：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ps -ef | grep -v grep | grep chain33-ca\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_4-使用案例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用案例"}},[s._v("#")]),s._v(" 4. 使用案例")]),s._v(" "),e("h3",{attrs:{id:"_4-1-用户身份证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-用户身份证书"}},[s._v("#")]),s._v(" 4.1 用户身份证书")]),s._v(" "),e("p",[s._v("用户在Chain33平行链发送交易交易前，首先需要管理员在chain33-ca添加用户权限，用户才可以向chain33-ca申请身份证书，证书信息作为交易的一部分发送到区块链节点，节点通过chain33-ca提供的证书链校验用户证书的有效性。")]),s._v(" "),e("h4",{attrs:{id:"_4-1-1-chain33配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-chain33配置"}},[s._v("#")]),s._v(" 4.1.1 chain33配置")]),s._v(" "),e("p",[s._v("将CA服务certdir目录下的文件复制到cryptoPath配置的目录中。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('//[exec.sub.cert]\n//是否启用证书验证和签名\nenable=true\n//加密文件路径，使用\ncryptoPath="certdir"\n//带证书签名类型，支持"auth_ecdsa", "auth_sm2"\nsignType="auth_ecdsa"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h4",{attrs:{id:"_4-1-2-客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-客户端"}},[s._v("#")]),s._v(" 4.1.2 客户端")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// chain33-ca节点\nstatic RpcClient certclient = new RpcClient("http://127.0.0.1:11901");\n// 管理员注册用户\nboolean result = certclient.certUserRegister(UserName, Identity, UserPub, AdminKey);\n// 用户申请证书\nCertObject.CertEnroll cert = certclient.certEnroll(Identity, UserKey);\n// 构造交易\nCertService.CertAction.Builder builder = CertService.CertAction.newBuilder();\nbuilder.setTy(CertUtils.CertActionNormal);\nbyte[] reqBytes = builder.build().toByteArray();\nString transactionHash = TransactionUtil.createTxWithCert(UserKey, "cert", reqBytes, SignType.SM2, cert.getCert(), "ca \ntest".getBytes());\n// 发送交易\nString hash = chain33client.submitTransaction(transactionHash);\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h3",{attrs:{id:"_4-2-平行链动态增加注销节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-平行链动态增加注销节点"}},[s._v("#")]),s._v(" 4.2 平行链动态增加注销节点")]),s._v(" "),e("h4",{attrs:{id:"_4-2-1-ca服务配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-ca服务配置"}},[s._v("#")]),s._v(" 4.2.1 CA服务配置")]),s._v(" "),e("p",[s._v("配置平行链初始节点的ip。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('//证书信息\n//[cert]\ncn = "chain33-ca-server"\ncontry = "CN"\nlocality = "HZ"\nprovince = "ZJ"\nexpire = 100\n//CRL过期时间,单位小时\ncrlexpire = 24\n//配置初始节点的ip\nip = ["127.0.0.1", "127.0.0.2"]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h4",{attrs:{id:"_4-2-2-生成平行链初始节点证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-生成平行链初始节点证书"}},[s._v("#")]),s._v(" 4.2.2 生成平行链初始节点证书")]),s._v(" "),e("p",[s._v("每个节点生成一份证书和key，拷贝到节点chain33目录中。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 生成用户信息\nuserName := "user"\nidentity := "101"\npriv, err := secp256r1.GeneratePrivateKey()\nif err != nil {\n    assert.Fail(t, err.Error())\n}\npub := secp256r1.PubKeyFromPrivate(priv)\n// 注册用户\nres1, err := jsonclient.CertUserRegister(userName, identity, types.ToHex(pub), "", caAdminPriv)\nif err != nil {\n    assert.Fail(t, err.Error())\n}\nassert.Equal(t, true, res1)\n// 申请证书\nres2, err := jsonclient.CertEnroll(identity, "", caAdminPriv)\nif err != nil {\n    assert.Fail(t, err.Error())\n}\n_ = ioutil.WriteFile("user.cert", res2.Cert, 666)\n_ = ioutil.WriteFile("user.key", res2.Key, 666)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("h4",{attrs:{id:"_4-2-3-初始节点配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-初始节点配置"}},[s._v("#")]),s._v(" 4.2.3 初始节点配置")]),s._v(" "),e("p",[s._v("将"),e("code",[s._v("enableTLS")]),s._v("设置成true，将CA服务器cacert目录下的证书文件复制到"),e("code",[s._v("caCert")]),s._v("设置的路径，"),e("code",[s._v("certFile")]),s._v("和"),e("code",[s._v("keyFile")]),s._v("设置成4.2.1生成的证书和key对应的路径，"),e("code",[s._v("caServer")]),s._v("设置CA服务器。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[p2p.sub.gossip]\nseeds=[]\nisSeed=false\nserverStart=true\ninnerSeedEnable=true\nuseGithub=true\ninnerBounds=300\n//是否启用ssl/tls 通信，默认不开启\nenableTLS=true\n//如果需要CA配合认证，则需要配置caCert,caServer\ncaCert=""\ncertFile=""\nkeyFile=""\n//ca服务端接口http://ip:port\ncaServer=""\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h4",{attrs:{id:"_4-2-4-新增节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-4-新增节点"}},[s._v("#")]),s._v(" 4.2.4 新增节点")]),s._v(" "),e("p",[s._v("参考4.2.1生成新增节点的证书，将证书拷贝到新增节点，并配置chain33，启动新增节点发送交易。")]),s._v(" "),e("h4",{attrs:{id:"_4-2-5-注销节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-5-注销节点"}},[s._v("#")]),s._v(" 4.2.5 注销节点")]),s._v(" "),e("p",[s._v("注销指定节点对应的证书。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('identity := "new101"\n//证书注销\nres, err := jsonclient.CertRevoke("", identity, "", caAdminPriv)\nif err != nil {\n    assert.Fail(t, err.Error())\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("被注销的节点交易发送失败。")]),s._v(" "),e("p",[s._v("更多的接口说明，请参考"),e("a",{attrs:{href:"https://github.com/33cn/chain33-ca/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("chain33-ca接口文档"),e("OutboundLink")],1),s._v("和"),e("a",{attrs:{href:"https://github.com/33cn/chain33-sdk-java/blob/master/%E8%81%94%E7%9B%9F%E9%93%BE%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E.md#%E8%AF%81%E4%B9%A6%E6%9C%8D%E5%8A%A1%E6%8E%A5%E5%8F%A3",target:"_blank",rel:"noopener noreferrer"}},[s._v("chain33-sdk 证书服务"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);