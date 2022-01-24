(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{468:function(v,_,n){"use strict";n.r(_);var t=n(1),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[n("h1",{attrs:{id:"术语介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#术语介绍"}},[v._v("#")]),v._v(" 术语介绍")]),v._v(" "),n("p",[v._v("以下术语在本文档通用。建议您在使用比特元之前阅读本文档，以了解常见的术语，能有效减少新用户的疑惑问题。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("区块")])])]),v._v(" "),n("p",[v._v("每个区块记录着上一个区块的hash值、本区块中的交易集合、本区块的hash等基础数据。由于每个区块都有上一区块的hash值，区块间由这个值两两串联，形成区块链。\n比特元约每5秒生成一个区块，从比特元诞生至今，已有远超1700W个区块。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("创世区块")])])]),v._v(" "),n("p",[v._v("部署区块链时生成的第0个区块，称为创世区块。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("区块高度")])])]),v._v(" "),n("p",[v._v("区块高度，简称块高，用来识别区块在区块链中的位置，能通过块高查询出和这个区块相关的基础属性和交易详情。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("区块链高度")])])]),v._v(" "),n("p",[v._v("当前区块链上出块的最大数目。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("创世积分")])])]),v._v(" "),n("p",[v._v("生成创世区块时，会初始化一笔创世积分。创世积分的名称和数量都可以在Chain33配置文件中配置。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("创世地址")])])]),v._v(" "),n("p",[v._v("用于存放创世积分的地址，可以和链管理员地址相同，两者互不影响。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("区块链")])])]),v._v(" "),n("p",[v._v("区块链本质是一种多方共享的分布式账本技术。通过数学方法实现交易数据和历史记录的不可篡改性，通过共识算法和智能合约实现各参与方对交易的共同确认和账本记录。\n区块链分为公有链、联盟链、私有链三种类型，比特元属于公有链的一种。")]),v._v(" "),n("ul",[n("li",[v._v("公有链：全网公开，无用户授权机制的区块链，节点无需任何许可便可随时加入或脱离网络。典型代表有比特币、以太坊、比特元等。")]),v._v(" "),n("li",[v._v("联盟链：仅允许被授权的节点加入网络，一般指一些有业务协作或业务交易的成员集合，往往被用于机构或企业间的区块链。")]),v._v(" "),n("li",[v._v("私有链：所有网络中的节点都被掌握在一家机构手中，被称为私有链。")])]),v._v(" "),n("p",[n("em",[n("strong",[v._v("区块链技术")])])]),v._v(" "),n("p",[v._v("区块链技术是一种由多种密码学算法、共识算法、块链式存储结构、对等网络等技术共同组成的分布式技术集合。通过区块链技术，能够保障数据的强一致性、防篡改等特性，实现数据共享和价值传输。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("Chain33")])])]),v._v(" "),n("p",[v._v("Chain33是比特元采用的区块链底层开发技术，底层技术代码已于2018年在GitHub完全开源。")]),v._v(" "),n("p",[v._v("Chain33整体是一个模块插件化的架构，共识模块、智能合约模块、加密算法模块等均以插件形式存在，实现搭链的个性化和定制化；同时也是“主链+平行链”的架构，主链仅运行核心智能合约，做共识和存储交易，要求简单稳定，保证整个网络稳定运行；实际交易在平行链执行，多条平行链并存提升运算效率。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("比特元")])])]),v._v(" "),n("p",[v._v("比特元（BitYuan）是一个简单、稳定、高拓展性的公有链网络，在比特元平台上，可以实现支付、接收、储存多种货币，支持钱包找回、抵押发币、跨链交易等多种功能。")]),v._v(" "),n("p",[v._v("比特元研发基于Chain33区块链底层架构，是全球首个已实现多链（平行链）架构的公链项目，可以并行开发多条公链，以拓展区块链性能和提高安全性。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("主链")])])]),v._v(" "),n("p",[v._v("比特元主链只做共识和存储，以及运行一些基础核心对的合约，主链网络稳定性强，保证整个区块链网络的稳定。")]),v._v(" "),n("p",[v._v("理论上支持开发者在主链上进行开发与探索，但考虑到比特元整个网络系统性能，建议开发者自行搭建平行公链完成开发与探索。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("平行链")])])]),v._v(" "),n("p",[v._v("平行链依附于主链，共享主链共识网络，实现低成本搭建极具公信力的公链系统。")]),v._v(" "),n("p",[v._v("平行链支持部署自己的微共识和生态，可自由组建超级节点网络和编写个性化智能合约；同时天然支持主链与平行链、平行链之间的跨链交易。")]),v._v(" "),n("p",[v._v("比特元主链要求稳定性高，不可随意在主链上进行应用开发，开发者可以自主搭建平行链，进行各类链上应用开发和探索，如发行Token、对接外部用等。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("BTY")])])]),v._v(" "),n("p",[v._v("比特元币（BTY）发行与2014年初，目前流通量已超5亿，是稳定良好发展的加密数字货币之一。")]),v._v(" "),n("p",[v._v("BTY是比特元中所有交易所必须的燃料，每次交易默认燃烧手续费为0.001BTY，BTY燃烧即销毁，永久性退出流通。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("超级节点")])]),n("br"),v._v("\n超级节点 区块链上的共识节点，这里具体指比特元上的共识节点。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("交易")])]),n("br"),v._v("\n区块链中的的价值传递。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("交易组")])]),n("br"),v._v("\n区块链上的交易不应该是相互孤立的，应该是可以互相关联，可以在同一个事务环境下执行的。引入交易组，区块链上的交易可以做到比传统的做法更加安全透明，而不影响体验。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("比特元钱包")])]),n("br"),v._v("\n比特元钱包是一款基于比特元开发的钱包客户端。使用比特元钱包可以实现比特元节点部署、比特元在线环保POS挖矿、比特元转账等功能。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("账户私钥")])]),n("br"),v._v("\n私钥是一组64位的16进制字符，通过私钥能够访问一个账户。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("token")])]),n("br"),v._v("\ntoken即通证，一种有价值的数字资产，拥有物权属性、货币属性、以及股权属性（可增值）。在比特元公链中，token是一种资产类型。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("链超级管理员")])]),n("br"),v._v("\n链上的管理者，只有超管才能修改相关的token配置并发行token。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("区块链浏览器")])]),n("br"),v._v("\n提供用户浏览与查询区块链所有信息的辅助工具。可通过区块高度、账户地址、哈希值进行搜索查询。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("ticket")])]),n("br"),v._v("\n持币人参与区块挖矿需要的资格选票。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("挖矿")])]),n("br"),v._v("\n比特元挖矿基于POS挖矿机制，即权益证明挖矿。 持币人锁定一部分币换取ticket，参与新区块生成的挖矿。每个新区块只会由一张ticket挖到。\n"),n("em",[n("strong",[v._v("TPS")])]),n("br"),v._v("\n系统吞吐量，每秒系统处理的数量。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("签名")])]),n("br"),v._v("\n每笔交易必须至少有一个费用账户签名。因此，交易中的第一个签名可以被视为交易ID。")]),v._v(" "),n("p",[n("em",[n("strong",[v._v("代扣账户")])]),n("br"),v._v("\n在进行转账或者挖矿等需要支付费用时，使用第三方账户进行代扣。")])])}),[],!1,null,null,null);_.default=r.exports}}]);