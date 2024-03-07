(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{545:function(a,e,t){"use strict";t.r(e);var n=t(1),o=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"storage-sharding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storage-sharding"}},[a._v("#")]),a._v(" Storage Sharding")]),a._v(" "),t("h2",{attrs:{id:"_1-technical-background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-technical-background"}},[a._v("#")]),a._v(" 1 Technical Background")]),a._v(" "),t("blockquote",[t("p",[a._v("Currently, every node on most blockchain networks needs to store all the historical data, which can result in significant resource waste when the number of nodes reaches a certain scale. In the context of digital transformation, allowing more data to flow by having each node store only a portion of historical data and obtaining the required data through network interaction is ideal. The storage of our blockchain platform is based on the Kad network, and the distributed algorithm ensures that data is relatively evenly distributed among the nodes of the blockchain while automatically adjusting local data distribution to achieve a new balance when new nodes join or old nodes crash, ensuring data security.")])]),a._v(" "),t("h2",{attrs:{id:"_2-technical-advantages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-technical-advantages"}},[a._v("#")]),a._v(" 2 Technical Advantages")]),a._v(" "),t("blockquote",[t("p",[a._v("The p2p module of each node in our blockchain platform holds a public-private key pair, which can be imported by users or generated automatically, and the public key generates a node ID as the unique identifier in the network. The latest 10,000 blocks in the network are not stored in a distributed manner, which increases query efficiency and handles block data rollback scenarios. After surpassing 10,000 blocks, every 1,000 blocks are packed and stored on the 100 closest nodes in the network (The parameters above can be set freely).")])]),a._v(" "),t("h3",{attrs:{id:"our-storage-sharding-technology-has-several-advantages-as-follows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#our-storage-sharding-technology-has-several-advantages-as-follows"}},[a._v("#")]),a._v(" Our storage sharding technology has several advantages as follows.")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Each node only needs to store a portion of the data, making it perfect for mass storage scenarios, and dynamic expansion can be achieved by adding machines at any time.")])]),a._v(" "),t("li",[t("p",[a._v("Packaging data before distributed storage reduces the amount of data and avoids an increase in network load due to excessive data fragmentation.")])]),a._v(" "),t("li",[t("p",[a._v("With data stored on 100 nodes, in the extreme case where half of them crash, the probability of data loss is only 1/2^100 ≈ 10^-30, ensuring safe storage of data.")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);