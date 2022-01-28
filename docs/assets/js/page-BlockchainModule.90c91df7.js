(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{241:function(e,t,o){e.exports=o.p+"assets/img/Blockchain_Template_interaction.0d0f0c3e.png"},497:function(e,t,o){"use strict";o.r(t);var s=o(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"blockchain-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-module"}},[e._v("#")]),e._v(" Blockchain Module")]),e._v(" "),s("blockquote",[s("p",[e._v("Blockchain module is a component that processes blocks, including storing block information, adding blocks to the main or side chains, and synchronizing blocks. At the same time, it provides interfaces to query block information and block chain status.")])]),e._v(" "),s("h2",{attrs:{id:"blockchain-module-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-module-structure"}},[e._v("#")]),e._v(" Blockchain Module Structure")]),e._v(" "),s("p",[s("img",{attrs:{src:o(241),alt:"Blockchain Module Structure"}})]),e._v(" "),s("ul",[s("li",[e._v("Interaction with Consensus module: handle blocks the Consensus module packaged, and the request of Consensus module to query block information.")]),e._v(" "),s("li",[e._v("Interaction with P2P module: deal with the broadcast blocks received by P2P modules, send blocks to P2P modules for broadcasting, and handle the requests of P2P modules to inquire block information.")]),e._v(" "),s("li",[e._v("Interaction with Mempool and Executor modules: handle requests from these two modules to query the blockchain status.")])]),e._v(" "),s("h2",{attrs:{id:"blockchain-logical-construction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-logical-construction"}},[e._v("#")]),e._v(" Blockchain Logical Construction")]),e._v(" "),s("p",[e._v("Blockchain module consists of three sub-modules: message receiving module, block synchronization module and block storage module.")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Message receiving module")]),e._v(": Accept queries for information about blocks and blockchain status from other modules.")]),e._v(" "),s("li",[s("strong",[e._v("Block synchronization module")]),e._v(": After the node starts, compared the latest block height of peer nodes with its own height. If its own height is lower than the latest height of peer nodes, the block will initiate the synchronization request to catch up with the main chain.")]),e._v(" "),s("li",[s("strong",[e._v("Block storage module")]),e._v(": Store block information to the database in different types.")])]),e._v(" "),s("h2",{attrs:{id:"process-logic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-logic"}},[e._v("#")]),e._v(" Process Logic")]),e._v(" "),s("h3",{attrs:{id:"message-receiving-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message-receiving-module"}},[e._v("#")]),e._v(" Message Receiving Module")]),e._v(" "),s("p",[e._v("Accept queries for information about blocks and blockchain status from other modules.")]),e._v(" "),s("p",[s("strong",[e._v("block related information")])]),e._v(" "),s("ul",[s("li",[e._v("EventGetBlocks: get block information")]),e._v(" "),s("li",[e._v("EventGetHeaders: get block header information")]),e._v(" "),s("li",[e._v("EventAddBlock: add blocks synchronized from peers")]),e._v(" "),s("li",[e._v("EventAddBlockHeaders: add block headers synchronized from peers")]),e._v(" "),s("li",[e._v("EventAddBlockDetail: add blocks from consensus module")]),e._v(" "),s("li",[e._v("EventBroadcastAddBlock: add block broadcast from peers")]),e._v(" "),s("li",[e._v("EventGetBlockHeight: get the latest block heigh")]),e._v(" "),s("li",[e._v("EventGetLastHeader: get the latest block header information")]),e._v(" "),s("li",[e._v("EventGetLastBlock: get the latest block information")])]),e._v(" "),s("p",[s("strong",[e._v("Blockchain browser related messages")])]),e._v(" "),s("ul",[s("li",[e._v("EventGetTransactionByAddr: get hash values of all transactions at the address by the account address")]),e._v(" "),s("li",[e._v("EventGetTransactionByHash: get corresponding information by transaction hash")]),e._v(" "),s("li",[e._v("EventGetBlockOverview: get header information for this block and list of transaction hashes using block hash values")]),e._v(" "),s("li",[e._v("EventGetAddrOverview: get the coins received by the account, the current balance of the account and the number of transactions involved by the account address")]),e._v(" "),s("li",[e._v("EventGetBlockHash: get block hash from block height")]),e._v(" "),s("li",[e._v("EventQueryTx: query specific transaction information including txproof proof by the transaction hash")])]),e._v(" "),s("p",[s("strong",[e._v("Parallel chain related messages")])]),e._v(" "),s("ul",[s("li",[e._v("EventGetLastBlockSequence: get the sequence of the node corresponding to the latest block")]),e._v(" "),s("li",[e._v("EventGetSeqByHash: get the sequence corresponding to the block hash")]),e._v(" "),s("li",[e._v("EventAddParaChainBlockDetail: add consensus block from parallel chain")]),e._v(" "),s("li",[e._v("EventDelParaChainBlockDetail: delete consensus block from parallel chain")]),e._v(" "),s("li",[e._v("EventLocalGet: query for stored Key-Value pairs")])]),e._v(" "),s("p",[s("strong",[e._v("Other messages")])]),e._v(" "),s("ul",[s("li",[e._v("EventIsSync: query the synchronization status of blockchain")]),e._v(" "),s("li",[e._v("EventIsNtpClockSync: query the NTP network time synchronization status")]),e._v(" "),s("li",[e._v("EventLocalPrefixCount: query the number of keys with a specified prefix")])]),e._v(" "),s("h3",{attrs:{id:"block-synchronization-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-synchronization-module"}},[e._v("#")]),e._v(" Block Synchronization Module")]),e._v(" "),s("p",[e._v("After the node starts, compared the latest block height of peer nodes with its own height. If its own height is lower than the latest height of peer nodes, the block will initiate the synchronization request to catch up with the main chain.")]),e._v(" "),s("p",[e._v("Includes timing processing logic and immediate processing logic.")]),e._v(" "),s("p",[s("strong",[e._v("Timing process")])]),e._v(" "),s("ul",[s("li",[e._v("FetchPeerList: periodically fetch peer information in the network from the P2P module and save it to the local peerList.")]),e._v(" "),s("li",[e._v("SynBlocksFromPeers: periodically request specified blocks from a peerList.")]),e._v(" "),s("li",[e._v("CheckTipBlockHash: check periodically whether the latest height block hash of this node is consistent with the corresponding height block hash in the peerlist.")]),e._v(" "),s("li",[e._v("CheckBestChain: periodically detect and obtain an optimal chain list, ensuring that block request peers and this node are all on the same chain.")]),e._v(" "),s("li",[e._v("RecoveryFaultPeer: periodically detect the fault peer node’s and recove.")])]),e._v(" "),s("p",[s("strong",[e._v("Real-Time Processing")])]),e._v(" "),s("p",[e._v("Receive and process blocks from three sources: blocks packaged by consensus modules, broadcast blocks, and synchronized blocks")]),e._v(" "),s("p",[e._v("Process the entrance function "),s("code",[e._v("ProcessBlock()")]),e._v(", the process is as follows:")]),e._v(" "),s("ul",[s("li",[e._v("check whether the block already exists on the main/side chain of the node.")]),e._v(" "),s("li",[e._v("check whether the block already exists on the orphan chain of the node.")]),e._v(" "),s("li",[e._v("check whether the parent block already exists on the main/side chain of the node.")]),e._v(" "),s("li",[e._v("try to block to the main/side chain.")]),e._v(" "),s("li",[e._v("try to the process orphaned blocks in an orphan chain whose parent block is this block.")])]),e._v(" "),s("h3",{attrs:{id:"block-storage-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-storage-module"}},[e._v("#")]),e._v(" Block Storage Module")]),e._v(" "),s("p",[e._v("Store block information to the database in different types.")]),e._v(" "),s("p",[s("strong",[e._v("Store data content")])]),e._v(" "),s("p",[e._v("All storage formats are in "),s("code",[e._v("Key-Value")]),e._v(" form, including the following data contents:")]),e._v(" "),s("blockquote",[s("p",[e._v("Block related")])]),e._v(" "),s("ul",[s("li",[e._v("key(“blockLastHeight”): store the latest block height")]),e._v(" "),s("li",[e._v("key(“Hash:%v”, blockhash): store block height")]),e._v(" "),s("li",[e._v("key(“Body:%v”, blockhash): store block body")]),e._v(" "),s("li",[e._v("key(“Header:%v”, blockhash):store block header")]),e._v(" "),s("li",[e._v("key(“TD:%v”, blockhash): store block body")]),e._v(" "),s("li",[e._v("key(“Height:%v”, height): store block hash corresponding to the height of the block")]),e._v(" "),s("li",[e._v("key(“HH:%v”, height): store block header corresponding to block height")]),e._v(" "),s("li",[e._v("key(“LastSequence”): store the latest sequence")]),e._v(" "),s("li",[e._v("key(“Seq:%v”, sequence): store sequence corresponding block hash")]),e._v(" "),s("li",[e._v("key(“HashToSeq:%v”, blockhash): stores the sequence corresponding to block hash")])]),e._v(" "),s("blockquote",[s("p",[e._v("Transaction related")])]),e._v(" "),s("ul",[s("li",[e._v("key(“TxAddrHash:%s:%s”, addr, heightindex): store hash list of transactions related to the address")]),e._v(" "),s("li",[e._v("key(“TxAddrDirHash:%s:%d:%s”, addr, flag, heightindex): store hash list of transactions for an address-related category")]),e._v(" "),s("li",[e._v("key(“AddrTxsCount:%s”, addr): store number of transactions in which the address participates")])]),e._v(" "),s("p",[s("strong",[e._v("Data access interface")])]),e._v(" "),s("blockquote",[s("p",[e._v("Get and store the information of the latest block")])]),e._v(" "),s("ul",[s("li",[e._v("UpdateHeight")]),e._v(" "),s("li",[e._v("UpdateLastBlock")]),e._v(" "),s("li",[e._v("LastHeader")]),e._v(" "),s("li",[e._v("LastBlock")])]),e._v(" "),s("blockquote",[s("p",[e._v("Get and store block information")])]),e._v(" "),s("ul",[s("li",[e._v("LoadBlockByHeight")]),e._v(" "),s("li",[e._v("LoadBlockByHash")]),e._v(" "),s("li",[e._v("GetHeightByBlockHash")]),e._v(" "),s("li",[e._v("GetBlockHashByHeight")]),e._v(" "),s("li",[e._v("GetBlockHeaderByHeight")]),e._v(" "),s("li",[e._v("GetBlockHeaderByHash")]),e._v(" "),s("li",[e._v("GetTdByBlockHash")]),e._v(" "),s("li",[e._v("SaveTdByBlockHash")])]),e._v(" "),s("blockquote",[s("p",[e._v("Store and delete blocks and transactions")])]),e._v(" "),s("ul",[s("li",[e._v("SaveBlock")]),e._v(" "),s("li",[e._v("DelBlock")]),e._v(" "),s("li",[e._v("GetTx")]),e._v(" "),s("li",[e._v("AddTxs")]),e._v(" "),s("li",[e._v("DelTxs")])])])}),[],!1,null,null,null);t.default=a.exports}}]);