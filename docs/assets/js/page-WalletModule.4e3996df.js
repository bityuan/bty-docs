(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{190:function(t,a,s){t.exports=s.p+"assets/img/wallet.79425db0.png"},244:function(t,a,s){t.exports=s.p+"assets/img/BIP44.811613f8.png"},245:function(t,a,s){t.exports=s.p+"assets/img/Wallet_AccountDB.21091cb0.png"},546:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"wallet-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wallet-module"}},[t._v("#")]),t._v(" Wallet Module")]),t._v(" "),n("h2",{attrs:{id:"module-introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#module-introduction"}},[t._v("#")]),t._v(" Module Introduction")]),t._v(" "),n("p",[t._v("Wallet module mainly provides two major services for wallet app.")]),t._v(" "),n("ul",[n("li",[t._v("One is the account management of blockchain, including the creation of accounts and the management of public and private key and address information. Wallet clients can create and manage accounts, export and import private keys through these service interfaces.")]),t._v(" "),n("li",[t._v("The other is the signing and sending of transactions for bty transfers and the sending of smart contract transactions.")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(190),alt:"Wallet Module"}})]),t._v(" "),n("h2",{attrs:{id:"wallet-module-structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wallet-module-structure"}},[t._v("#")]),t._v(" Wallet Module Structure")]),t._v(" "),n("h3",{attrs:{id:"bip44-wallet-structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bip44-wallet-structure"}},[t._v("#")]),t._v(" BIP44 Wallet Structure")]),t._v(" "),n("p",[t._v("Chain33 wallet module is defined using BIP44 and manages multiple currencies through a set of seed, which supports Chinese and English characters. Meanwhile, the user sets a password to the wallet to encrypt seed information, which is specified and saved by the user.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(244),alt:"Wallet Structure"}})]),t._v(" "),n("h3",{attrs:{id:"private-key-address-public-key-information-management"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#private-key-address-public-key-information-management"}},[t._v("#")]),t._v(" Private Key, Address, Public Key Information Management")]),t._v(" "),n("p",[t._v("Wallet module should have an AccountDB to store account information created by the user, including private keys, addresses, public keys, and so on. The configuration information for AccountDB is available in the chain33 configuration file.")]),t._v(" "),n("p",[t._v("The primary three tables stored in AccountDB are as follows:")]),t._v(" "),n("p",[n("img",{attrs:{src:s(245),alt:"Wallet AccountDB"}})]),t._v(" "),n("ul",[n("li",[t._v("The AccountTable, with timestamp and Account address as key, is mainly used to list output of all Account accounts.")]),t._v(" "),n("li",[t._v("AddressTable takes account address as key, which is mainly used to query account information through address address.")]),t._v(" "),n("li",[t._v("LabelTable takes label as key, which is mainly used to query account information through label.")])]),t._v(" "),n("p",[t._v("The account information is stored in a "),n("code",[t._v("WalletAccountStore")]),t._v(" format, and the main structure is as follows:")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" WalletAccountStore "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Privkey   "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//private key corresponding to the account address")]),t._v("\n    Label     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//label corresponding to the account address")]),t._v("\n    Addr      "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//account address")]),t._v("\n    TimeStamp "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//timestamp for creating an account")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("h3",{attrs:{id:"account-structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#account-structure"}},[t._v("#")]),t._v(" Account Structure")]),t._v(" "),n("p",[t._v("Account fund information is stored through the account, and the structure is as follows:")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Account "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Currency "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int32")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Coins identifies，there is only one value of 0 temporarily")]),t._v("\n    Balance  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Available balance in account")]),t._v("\n    Frozen   "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Frozen account balance")]),t._v("\n    Addr     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Account address")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("h3",{attrs:{id:"signature"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[t._v("#")]),t._v(" Signature")]),t._v(" "),n("p",[t._v("The wallet module signs transactions with chain33 signature framework, supports secp256k1 signature.")]),t._v(" "),n("h3",{attrs:{id:"transaction-sending"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transaction-sending"}},[t._v("#")]),t._v(" Transaction Sending")]),t._v(" "),n("p",[t._v("Wallet module is the entry point for ordinary transaction sending, provides the WalletSendToAddress interface.")]),t._v(" "),n("h2",{attrs:{id:"service-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#service-interface"}},[t._v("#")]),t._v(" Service Interface")]),t._v(" "),n("h3",{attrs:{id:"account-related"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#account-related"}},[t._v("#")]),t._v(" Account Related")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n* Create an account\n* @param： param *types.ReqNewAccount  Create account parameters that contain account label "label"\n* @return：Return account\n*/')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewAccount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReqNewAccount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WalletAccount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Get account list\n* @param： req *types.ReqAccountList  Get the account request parameter, including WithoutBalance\n* @return：Return account list\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WalletGetAccountList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReqAccountList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WalletAccounts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Import the account with the private key\n* @param： param *types.ReqWalletImportPrivkey  Account address to be imported\n* @return：Return account\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WalletImportprivkey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReqWalletImportPrivkey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WalletAccount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Export account private key\n* @param： param *types.ReqString  Account address to be exported\n* @return：Return private key\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DumpPrivkey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReqString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReplyString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Lock wallet\n* @return：Return operating status\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WalletLock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Reply"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Unlock wallet\n* @param： param *types.WalletUnLock  Wallet unlock parameters\n* @return：Return operating status\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WalletUnLock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WalletUnLock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Reply"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Set wallet password\n* @param： param *types.ReqWalletSetPasswd  The old and new password\n* @return：Return operating status\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WalletSetPasswd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReqWalletSetPasswd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Reply"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Set wallet label\n* @param： param *types.ReqWalletSetLabel  Wallet address and label to be set\n* @return：Return wallet account\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WalletSetLabel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReqWalletSetLabel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WalletAccount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Get wallet status\n* @return：Return wallet status\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetWalletStatus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WalletStatus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Generate wallet seed\n* @param： param *types.GenSeedLang seed  Character languages (0:English, 1: simplified Chinese)\n* @return：Return the seed generated\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GenSeed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GenSeedLang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReplySeed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Get the wallet seed by password\n* @param： param *types.GetSeedByPw seed  Get parameter, including the password\n* @return：Return seed\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetSeed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GetSeedByPw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReplySeed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Save wallet seed\n* @param： param *types.SaveSeedByPw  Save seed parameters, including the password and seed string\n* @return：Return seed\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaveSeed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SaveSeedByPw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Reply"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Consolidate all account balances in wallet to the specified address\n* @param： param *types.ReqWalletMergeBalance  Merge parameters, containing the specified address\n* @return：Return transaction hash\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WalletMergeBalance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReqWalletMergeBalance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReplyHashes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br"),n("span",{staticClass:"line-number"},[t._v("56")]),n("br"),n("span",{staticClass:"line-number"},[t._v("57")]),n("br"),n("span",{staticClass:"line-number"},[t._v("58")]),n("br"),n("span",{staticClass:"line-number"},[t._v("59")]),n("br"),n("span",{staticClass:"line-number"},[t._v("60")]),n("br"),n("span",{staticClass:"line-number"},[t._v("61")]),n("br"),n("span",{staticClass:"line-number"},[t._v("62")]),n("br"),n("span",{staticClass:"line-number"},[t._v("63")]),n("br"),n("span",{staticClass:"line-number"},[t._v("64")]),n("br"),n("span",{staticClass:"line-number"},[t._v("65")]),n("br"),n("span",{staticClass:"line-number"},[t._v("66")]),n("br"),n("span",{staticClass:"line-number"},[t._v("67")]),n("br"),n("span",{staticClass:"line-number"},[t._v("68")]),n("br"),n("span",{staticClass:"line-number"},[t._v("69")]),n("br"),n("span",{staticClass:"line-number"},[t._v("70")]),n("br"),n("span",{staticClass:"line-number"},[t._v("71")]),n("br"),n("span",{staticClass:"line-number"},[t._v("72")]),n("br"),n("span",{staticClass:"line-number"},[t._v("73")]),n("br"),n("span",{staticClass:"line-number"},[t._v("74")]),n("br"),n("span",{staticClass:"line-number"},[t._v("75")]),n("br"),n("span",{staticClass:"line-number"},[t._v("76")]),n("br")])]),n("h3",{attrs:{id:"transaction-related"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transaction-related"}},[t._v("#")]),t._v(" Transaction Related")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Get transaction records for all wallets\n* @param： param *types.ReqWalletTransactionList  Get parameters, including start get tx, get quantity and order\n* @return：Return transaction list\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WalletTransactionList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReqWalletTransactionList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WalletTxDetails"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Send a transaction to the specified address\n* @param： param *types.ReqWalletSendToAddress  Transaction senT parameters, containing transaction information such as from,to,amount, etc\n* @return：Return transaction hash\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WalletSendToAddress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReqWalletSendToAddress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReplyHash"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Set default handling fees for wallet\n* @param： param *types.ReqWalletSetFee  With setting fee parameters\n* @return：Return operating status\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WalletSetFee")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReqWalletSetFee"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Reply"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br")])]),n("h3",{attrs:{id:"signature-related"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signature-related"}},[t._v("#")]),t._v(" Signature Related")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Signature transaction\n* @param： param *types.ReqSignRawTx  Transaction information of proxy signature\n* @return：Return the signed transaction\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignRawTx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReqSignRawTx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReplySignRawTx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);