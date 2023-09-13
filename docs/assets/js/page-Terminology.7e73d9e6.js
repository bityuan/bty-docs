(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{538:function(e,n,t){"use strict";t.r(n);var a=t(1),i=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"terminology"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[e._v("#")]),e._v(" Terminology")]),e._v(" "),t("blockquote",[t("p",[e._v("The following terms are used throughout the documentation.\nIt is recommended that you read this document before using BitYuan to understand common terminology that can effectively reduce confusing questions for new users.")])]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Block")])])]),e._v(" "),t("p",[e._v("Each block records the hash value of the previous block, the set of transactions in this block, the hash of this block, and other basic data. Since each block has the hash value of the previous block, the blocks are linked two by two by this value to form a block chain.")]),e._v(" "),t("p",[e._v("BitYuan generates a block about every 5 seconds, and there have been well over 1700W blocks since the birth of BitYuan.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Genesis Block")])])]),e._v(" "),t("p",[e._v("The 0th block generated when deploying the blockchain is called the Genesis block.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Block height")])])]),e._v(" "),t("p",[e._v("Block height, is used to identify the position of a block in the blockchain, and can be used to query the basic attributes and transaction details associated with this block by block height.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Blockchain Height")])])]),e._v(" "),t("p",[e._v("The maximum number of blocks currently out on the blockchain.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Genesis Points")])])]),e._v(" "),t("p",[e._v("When a genesis block is generated, a genesis point is initialized. The name and amount of the genesis point can be configured in the Chain33 configuration file.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Genesis Address")])])]),e._v(" "),t("p",[e._v("The address used to store Genesis points can be the same as the chain administrator address, and the two do not affect each other.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Blockchain")])])]),e._v(" "),t("p",[e._v("Blockchain is essentially a distributed ledger technology shared by multiple parties. It achieves the immutability of transaction data and history records through mathematical methods, and the common confirmation of transactions and ledger records by each participant through consensus algorithms and smart contracts.")]),e._v(" "),t("ul",[t("li",[e._v("Public chain: Blockchains that are open to the whole network and have no user authorization mechanism, where nodes can join or leave the network at any time without any permission. Typical representatives include Bitcoin, Ether, BitYuan, etc.")]),e._v(" "),t("li",[e._v("Consortium chain: Only authorized nodes are allowed to join the network, generally refers to some collection of members with business collaboration or business transactions, and is often used for institutional or inter-enterprise blockchains.")]),e._v(" "),t("li",[e._v("Private chain: All nodes in the network are held in the hands of one institution and are called private chains.")])]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Blockchain Technology")])])]),e._v(" "),t("p",[e._v("Blockchain technology is a collection of distributed technologies consisting of multiple cryptographic algorithms, consensus algorithms, block-chain storage structures, peer-to-peer networks, and other technologies. Through blockchain technology, it can guarantee the strong consistency and tamper-proof characteristics of data, and realize data sharing and value transmission.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Chain33")])])]),e._v(" "),t("p",[e._v("Chain33 is the underlying development technology of the blockchain adopted by BitYuan. The underlying technology code has been fully open sourced on GitHub in 2018.")]),e._v(" "),t("p",[e._v('Chain33 as a whole is a modular plug-in architecture, the consensus module, smart contract module, cryptographic algorithm module, etc. all exist in the form of plug-ins to realize the personalization and customization of the chain; at the same time, it is also the architecture of "main chain + parallel chain", the main chain only runs the core smart contract to do consensus and store transactions, which is simple and stable to ensure the stable operation of the whole network; the actual transactions are executed in the parallel chain, and multiple parallel chains coexist to enhance the computing efficiency.')]),e._v(" "),t("p",[t("em",[t("strong",[e._v("BitYuan")])])]),e._v(" "),t("p",[e._v("BitYuan is a simple, stable, and highly scalable public chain network that enables payments, receiving, and storage of multiple currencies on the BitYuan platform, and supports a variety of functions such as wallet retrieval, collateralized coin issuance, and cross-chain transactions.")]),e._v(" "),t("p",[e._v("BitYuan R&D is based on the underlying Chain33 blockchain architecture, which is the world's first public chain project that has implemented a multi-chain (parallel chain) architecture and can develop multiple public chains in parallel to expand blockchain performance and improve security.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Main Chain")])])]),e._v(" "),t("p",[e._v("The BitYuan main chain only does consensus and storage, as well as running some basic core pairs of contracts. The main chain network is stable and ensures the stability of the entire blockchain network.")]),e._v(" "),t("p",[e._v("Theoretically, developers are supported to develop and explore on the main chain, but given the performance of the entire BitYuan network system, it is recommended that developers build their own parallel public chains to complete development and exploration.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Parallel Chain")])])]),e._v(" "),t("p",[e._v("Parallel chains are attached to the main chain and share the consensus network of the main chain to build a highly credible public chain system at low cost.")]),e._v(" "),t("p",[e._v("Parallel chains support the deployment of their own micro-consensus and ecology, and are free to form super-node networks and write personalized smart contracts; at the same time, they naturally support cross-chain transactions between the main chain and parallel chains and between parallel chains.")]),e._v(" "),t("p",[e._v("The main chain of BitYuan requires high stability, and application development on the main chain is not allowed at will. Developers can independently build parallel chains for all kinds of on-chain application development and exploration, such as issuing Tokens, docking external use, etc.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("BTY")])])]),e._v(" "),t("p",[e._v("BTY was issued at the beginning of 2014 and now has over 500 million in circulation, making it one of the stable and well-developed cryptocurrencies.")]),e._v(" "),t("p",[e._v("BTY is a mandatory fuel for all transactions in bityuan, with a default burning fee of 0.001 BTY per transaction. BTY is destroyed by burning and permanently withdrawn from circulation.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Super Node")])]),t("br"),e._v("\nConsensus node on the blockchain, in this case specifically on BitYuan.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Transaction")])]),t("br"),e._v("\nValue delivery in the blockchain.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Transaction Group")])]),t("br"),e._v("\nTransactions on the blockchain should not be isolated from each other, they should be interconnectable and can be executed in the same transaction environment. With the introduction of transaction groups, transactions on the blockchain can be made more secure and transparent than traditional practices without compromising the experience.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("BitYuan Wallet")])]),t("br"),e._v("\nBitYuan Wallet is a wallet client developed based on BitYuan. Using BitYuan Wallet you can implement BitYuan node deployment, BitYuan online environmental POS mining, BitYuan transfer and other functions.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Account Private Key")])]),t("br"),e._v("\nA private key is a set of 64-bit hexadecimal characters that enables access to an account through a private key.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("token")])]),t("br"),e._v("\ntoken, is a valuable digital asset that has physical properties, monetary properties, and equity properties (can be appreciated). In the BitYuan public chain, a token is an asset type.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Chain Super Administrator")])]),t("br"),e._v("\nThe administrator of the chain, only the super administrator can modify the relevant token configuration and issue tokens.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Blockchain Browser")])]),t("br"),e._v("\nProvides users with an auxiliary tool to browse and query all information on the blockchain. Search queries by block height, account address, and hash value.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("ticket")])]),t("br"),e._v("\nEligibility ballots required for coin holders to participate in block mining.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Mining")])]),t("br"),e._v("\nBitYuan mining is based on the POS mining mechanism, i.e. proof-of-stake mining. The holder locks a portion of his coins in exchange for a ticket and participates in the mining of new blocks. Each new block is mined by only one ticket.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("TPS")])]),t("br"),e._v("\nSystem throughput, the number of system processes per second.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Signature")])]),t("br"),e._v("\nEach transaction must have at least one expense account signature. Therefore, the first signature in a transaction can be considered the transaction ID.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Withholding Account")])]),t("br"),e._v("\nUse a third-party account for debiting when you need to pay fees for transferring funds or mining, etc.")])])}),[],!1,null,null,null);n.default=i.exports}}]);