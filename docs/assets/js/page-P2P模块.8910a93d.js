(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{495:function(t,a,e){"use strict";e.r(a);var r=e(1),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"p2p模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#p2p模块"}},[t._v("#")]),t._v(" P2P模块")]),t._v(" "),e("p",[t._v("比特元网络是一种对等的、去中心化的网络，称为P2P网络。P2P模块是处理节点相互通信的组件，包括节点发现并建立连接，广播区块和交易，同步区块。")]),t._v(" "),e("h2",{attrs:{id:"p2p模块交互"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#p2p模块交互"}},[t._v("#")]),t._v(" P2P模块交互")]),t._v(" "),e("p",[t._v("![P2P模块交付](./././picture/P2P template interaction.png)")]),t._v(" "),e("ul",[e("li",[t._v("与Mempool模块的交互：广播Mempool模块发送过来的交易，获取Mempool模块中的交易")]),t._v(" "),e("li",[t._v("与Blockchain模块的交互：广播Blockchain模块发送过来的区块，处理获取peer信息的请求，处理从对端下载区块和区块头的请求")])]),t._v(" "),e("h2",{attrs:{id:"p2p逻辑结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#p2p逻辑结构"}},[t._v("#")]),t._v(" P2P逻辑结构")]),t._v(" "),e("p",[t._v("P2P模块包含以下几种功能模块：")]),t._v(" "),e("ul",[e("li",[t._v("节点发现模块：发现网络中的节点，并尝试建立连接。")]),t._v(" "),e("li",[t._v("数据下载模块：请求对端节点下载区块，用于同步区块。")]),t._v(" "),e("li",[t._v("数据过滤模块：过滤重复接收到的广播交易和区块。")]),t._v(" "),e("li",[t._v("节点监控模块：动态监测已建立连接的对端节点。")])]),t._v(" "),e("h3",{attrs:{id:"节点发现模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点发现模块"}},[t._v("#")]),t._v(" 节点发现模块")]),t._v(" "),e("p",[t._v("P2P模块启动后，首先从本地数据库读取上次保存的远程节点信息到缓存中。如果本地数据库信息为空，则开始加载种子节点到缓存池，并尝试连接这些节点。")]),t._v(" "),e("p",[t._v("连接完这些节点后，如果不满足最大连接数，开始向这些节点发起GetAddrList请求。对端节点收到请求后，会把当前连接的节点信息以及对方的高度信息一并返回给请求方，请求的节点可以根据自身节点的区块高度，选择要连接的节点，比如选择比自身区块高的节点。")]),t._v(" "),e("p",[t._v("具体处理过程可以参考getAddrFromAddrBook，getAddrFromOnline等函数。")]),t._v(" "),e("h3",{attrs:{id:"数据下载模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据下载模块"}},[t._v("#")]),t._v(" 数据下载模块")]),t._v(" "),e("p",[t._v("同步区块时Blockchain模块向P2P模块发送EventFetchBlocks消息，随后P2P模块向已建立连接的节点发起下载区块的请求。")]),t._v(" "),e("p",[t._v("下载数据有两种模式：第一种是对指定节点进行下载；第二种是对所有连接的节点进行均衡下载，此时服务能力强的节点会收到更多的下载请求。")]),t._v(" "),e("p",[t._v("具体处理过程可以参考GetBlocks，DownloadBlock等函数。")]),t._v(" "),e("h3",{attrs:{id:"数据过滤模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据过滤模块"}},[t._v("#")]),t._v(" 数据过滤模块")]),t._v(" "),e("p",[t._v("节点会收到网络中其他节点广播的交易和区块，多次接收会出现重复数据，因此需要进行过滤。这里P2P模块采用LRU数据结构对交易和区块进行缓存，并在P2P模块中客户端和服务端的接口函数进行过滤。")]),t._v(" "),e("p",[t._v("未过滤掉的交易发送到Mempool模块进行缓存并向其他节点广播，区块发送到Blockchain模块进行打包并向其他节点广播。")]),t._v(" "),e("p",[t._v("具体处理过程可以参考ServerStreamRead，readStream，RegRecvData等函数。")]),t._v(" "),e("h3",{attrs:{id:"节点监控模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点监控模块"}},[t._v("#")]),t._v(" 节点监控模块")]),t._v(" "),e("p",[t._v("现实中网络环境复杂多变，会出现节点由于机器故障或者网络环境影响等原因，脱离了P2P网络，此时需要P2P模块能快速发现异常节点，从而剔除该节点，并选择新的节点来补充。")]),t._v(" "),e("p",[t._v("P2P模块也启动定时任务去实时调整连接节点的列表，包括删除连接数过多和过低的节点，区块高度过低的节点，种子节点等。")]),t._v(" "),e("p",[t._v("具体处理过程可以参考monitorErrPeer，monitorPeers，nodeReBalance等函数。")])])}),[],!1,null,null,null);a.default=v.exports}}]);