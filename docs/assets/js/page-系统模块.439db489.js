(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{190:function(a,t,v){a.exports=v.p+"assets/img/wallet.79425db0.png"},551:function(a,t,v){"use strict";v.r(t);var r=v(1),_=Object(r.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"系统模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统模块"}},[a._v("#")]),a._v(" 系统模块")]),a._v(" "),r("p",[a._v("比特元区块链底层Chain33是一种模块插件化的区块链底层开发框架，保留了区块链的核心功能，可扩展功能以插件形式存在。如共识模块、存储模块、执行器模块（智能合约）等，均可按需插拔。本文介绍各个模块的定义和作用，以帮助用户理解。")]),a._v(" "),r("h2",{attrs:{id:"p2p模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#p2p模块"}},[a._v("#")]),a._v(" P2P模块")]),a._v(" "),r("p",[a._v("P2P网络是一种对等的网络，网络中的每个节点参与并共享所拥有的存储能力、广播能力和网络连接能力。网络中的节点可以被对等节点直接访问，每个节点既是资源和服务消费者，也是资源和服务的提供者。")]),a._v(" "),r("p",[a._v("P2P网络是去中心化的网络，整个网络不存在中心节点，与传统的中心网络不同，所有节点依赖某个中心节点。")]),a._v(" "),r("p",[a._v("P2P模块是处理节点相互通信的组件，包括节点发现并建立连接，广播区块和交易，同步区块。")]),a._v(" "),r("h2",{attrs:{id:"存储模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#存储模块"}},[a._v("#")]),a._v(" 存储模块")]),a._v(" "),r("p",[a._v("比特元底层Chain33使用高性能、高可靠的KV数据库来进行区块链数据的存储，支持goleveldb、gobadgerdb、gomemdb、gossdb等KV数据库类型。")]),a._v(" "),r("p",[a._v("区块链中的状态数据的的存储格式采用可配置、可插拔的方式，可以支持mavl、mpt、kvmvcc的存储格式。")]),a._v(" "),r("h2",{attrs:{id:"blockchain模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#blockchain模块"}},[a._v("#")]),a._v(" Blockchain模块")]),a._v(" "),r("p",[a._v("Blockchain模块是处理block的组件，包括存储block信息，将block加入主链或者平行公链，同步block；同时还对外提供查询block以及区块链状态信息的接口。")]),a._v(" "),r("h2",{attrs:{id:"mempool模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mempool模块"}},[a._v("#")]),a._v(" Mempool模块")]),a._v(" "),r("p",[a._v("Mempool模块，即交易缓存池，主要目的是为了解决共识模块可能比RPC模块速度慢的问题。")]),a._v(" "),r("p",[a._v("Mempool模块负责对接收的交易做初步合法性的校验，过滤掉一些非法的交易；同时对交易发送者做流量限制，防止同一地址发送太过频繁。")]),a._v(" "),r("h2",{attrs:{id:"共识模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#共识模块"}},[a._v("#")]),a._v(" 共识模块")]),a._v(" "),r("p",[a._v("实现区块链共识机制的模块，是区块链技术中最重要的组件，区块链共识机制的目的是通过共识算法使得区块链网络中的所有节点对哪个节点生成新区块达成一致，从而保证整个系统的区块状态一致。")]),a._v(" "),r("p",[a._v("比特元主网的共识算法为SPOS，一种支持上万人一起挖矿做共识的安全POS算法。在比特元生态中的平行公链也可拥有各自独立的前置共识，采用强 一致性的拜占庭共识算法，并且引入了DPOS投票权的概念，超级节点必须将 交易信息打包进区块，然后把区块信息广播给其他节点，将交易信息储存在区块上，发挥共同治理社区的功能。")]),a._v(" "),r("h2",{attrs:{id:"钱包模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#钱包模块"}},[a._v("#")]),a._v(" 钱包模块")]),a._v(" "),r("p",[a._v("钱包模块主要面向比特元钱包APP提供两大服务。")]),a._v(" "),r("ul",[r("li",[a._v("一个是区块链账户管理，包括账户的创建，公私钥和地址信息的管理。钱包客户端可以通过这些服务接口创建和管理账户，导出导入私钥等。")]),a._v(" "),r("li",[a._v("另一个是交易的签名和发送，用于bty转账和智能合约交易的发送。")])]),a._v(" "),r("p",[r("img",{attrs:{src:v(190),alt:"钱包"}})]),a._v(" "),r("h2",{attrs:{id:"执行器模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行器模块"}},[a._v("#")]),a._v(" 执行器模块")]),a._v(" "),r("p",[a._v("执行器模块是区块链的逻辑处理中心，用于执行具体的业务逻辑。")]),a._v(" "),r("p",[a._v("执行器通常理解为一个容器，它支持各种合约的运行（包括系统合约以及各种扩展合约）；接收交易，并将交易分配给对应的合约具体执行；同时响应区块链上的各种事件（交易校验、查询请求、执行交易、新增区块、回滚区块），并将事件派发给具体的合约逻辑。")]),a._v(" "),r("p",[a._v("拿智能合约来说，合约中包含的所有逻辑，就是执行器要执行的逻辑；只不过，合约只是一个具体的逻辑，而执行器则是一个容器，它可以执行数个合约，而不需要知道合约的具体内容。")]),a._v(" "),r("h2",{attrs:{id:"queue模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#queue模块"}},[a._v("#")]),a._v(" Queue模块")]),a._v(" "),r("p",[a._v("Queue模块，即消息队列模块，该模块的主要目的是降低区块链底层Chain33系统中各个模块的耦合度。")]),a._v(" "),r("p",[a._v("引入Queue模块后，模块之间通信不是通过接口调用，而是通过消息进行传递，每个模块相对来说独立，降低chain33系统中各个模块的耦合度，这也方便按模块拆分chain33，为后面各个模块的微服务化做铺垫。")]),a._v(" "),r("h2",{attrs:{id:"rpc模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rpc模块"}},[a._v("#")]),a._v(" RPC模块")]),a._v(" "),r("p",[a._v("RPC，即Remote Procedure Call（远程过程调用），RPC模块主要为外部程序提供交易构造及发送，区块、交易以及其他信息查询接口。")]),a._v(" "),r("p",[a._v("RPC模块同时支持grpc和jsonrpc两种接口，其他进程既可以调用grpc接口，也可以调用jrpc接口，一般地，如果某进程能够访问chain33内部数据结构构造数据，优先采用grpc接口，反之，推荐使用jrpc接口。")])])}),[],!1,null,null,null);t.default=_.exports}}]);