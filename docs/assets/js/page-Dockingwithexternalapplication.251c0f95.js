(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{538:function(a,t,e){"use strict";e.r(t);var s=e(1),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"docking-with-external-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docking-with-external-application"}},[a._v("#")]),a._v(" Docking with external application")]),a._v(" "),e("blockquote",[e("p",[a._v("Developers can dock with external blockchain application on parachain by yourselves, e.g. exchange, shoppingmall. This instruction will use exchange as an example to introduce how you can dock with external application on the parachain.")])]),a._v(" "),e("h2",{attrs:{id:"download-installation-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-installation-package"}},[a._v("#")]),a._v(" Download installation package")]),a._v(" "),e("p",[a._v("BitYuan wallet new version download address: "),e("a",{attrs:{href:"https://bityuan.com/wallet",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://bityuan.com/wallet"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("We offer Mac version, Windows version and Linux version. Please choose the version you need. In this example, we choose Linux version.")]),a._v(" "),e("p",[a._v("Login parachain nodes, under parachain directory unzip BitYuan wallet installation.")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tar -zxvf Bityuan-Wallet-Linux-6.5.3-qt.tar\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("Among the files in installation package, the important files are bityuan (blockchain main program), bityuan-cli (command-line), and bityuan.toml (configuration files).")]),a._v(" "),e("h2",{attrs:{id:"revise-configuration-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#revise-configuration-files"}},[a._v("#")]),a._v(" Revise configuration files")]),a._v(" "),e("p",[a._v("Edit bityuan.toml.")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('//[rpc]\njrpcBindAddr=":8901"\ngrpcBindAddr=":8902"\nwhitelist=["*"]\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v('Set up ports for jrpcBindAddr and grpcBindAddr on parachain (avoid conflict with parent blockchain). Whitelist only allows visits with local address. Please revise your network based on your situation. " * " means no limits.')]),a._v(" "),e("h2",{attrs:{id:"create-bityuan-wallet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-bityuan-wallet"}},[a._v("#")]),a._v(" Create BitYuan wallet")]),a._v(" "),e("ol",[e("li",[a._v("To start BitYuan system, under the directory of Bityuan system and configuration files, run the following command.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nohup ./bityuan -f bityuan.toml &\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("Generate random number seeds. Please keep the seed manually, because it can recover your wallet.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./bityuan-cli --rpc_laddr="http://localhost:8901" seed generate -l 0  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("Keep the seeds safely, set a password for wallet.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./bityuan-cli --rpc_laddr="http://localhost:8901" seed save -p "wallet password" -s "The seeds from last step"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("The password can be customerized. (more than 8 digits, combination of letters and numbers, e.g. fzm12345) Remember your passwords carefully, which can unlock your wallet.")]),a._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[a._v("Unlock wallet.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./bityuan-cli --rpc_laddr="http://localhost:8901" wallet unlock -p fzm12345 -t 0\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("-p: wallet password, -t: the wallet auto-locking time, o: never lock (except restart)")]),a._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[a._v("(Optional) Check the wallet status.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./bityuan-cli --rpc_laddr="http://localhost:8901" wallet status  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"6"}},[e("li",[a._v("Create account address and private keys.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./bityuan-cli --rpc_laddr="http://localhost:8901" account create -l "Account name" \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"7"}},[e("li",[a._v("review the pointed account address and private keys.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./bityuan-cli --rpc_laddr="http://localhost:8901" account dump_key -a "account address" \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"8"}},[e("li",[a._v("(Optional) Review all account information.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./bityuan-cli --rpc_laddr="http://localhost:8901" account list  \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"bityuan-wallet-transfer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bityuan-wallet-transfer"}},[a._v("#")]),a._v(" BitYuan wallet transfer")]),a._v(" "),e("ol",[e("li",[a._v("Create a transfer trade.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./bityuan-cli --rpc_laddr="http://localhost:8901" coins transfer -a "transfer amount" -n test  -t "receiving address"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("Private key and transaction signing.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./bityuan-cli --rpc_laddr="http://localhost:8901" wallet sign -k "private key for transfer users" -d "the data from transfer transaction"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("Transaction sending.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./bityuan-cli --rpc_laddr="http://localhost:8901" wallet send -d "Data from signing transaction"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("Review transaction.")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./bityuan-cli --rpc_laddr="http://localhost:8901" tx query_hash -s "the hash from trade sending" \n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("PS: You can also visit "),e("a",{attrs:{href:"https://mainnet.bityuan.com/home",target:"_blank",rel:"noopener noreferrer"}},[a._v("BitYuan blockchain browser"),e("OutboundLink")],1),a._v(" to review transaction details.")])])}),[],!1,null,null,null);t.default=n.exports}}]);