# BitYuan Wallet Guidelines  
>A simple, stable blockchain network with strong scalability. 



## 1. Summary

BitYuan wallet is a wallet Dapp based on BitYuan. The users can deploy BitYuan nodes, mine BitYuan online environmental-friendly and transfer BitYuan. More functions are in development. 



## 2. Wallet preparation

Download the installation package you need on [BitYuan-wallet-page](https://bityuan.com/node). We offer Windows version, Mac version and Linux version. Install the wallet, then, we start our trip. 

<font color=Red>Notice：</font> Windows users choose **non-system disk**installation, if not, it may not work. To solve this problem, the user can right-clik the app and  restart the wallet with administrator right.



## 3. Wallet configuration

As a **decentralized app**, BitYuan wallet is created or imported with Mnemonics and **No any centralized server** can get and use your information. 

BitYuan wallet generate Mnemonics in Chinese or in English depends on the operation system language of users. Notice that Mnemonics will be **15** Chinese characters or English words **in order**.



### 3.1 Wallet creating

You need to create a BitYuan wallet if you first use it.   

On the wallet creation page, generate 15 Mnemonics and backup them.(we suggest you can backup Mnemonics on paper in handwritting or on the off-line computer. **Warning: Do Not** save it online!) Clik "next" to comfirm the Mnemonics. 

You are required to click the Mnemonics **in right order**, make sure there is no problem. Then, setup wallet password, clik "create wallet" to complete. 
   


### 3.2 Wallet importing

For the users who have BitYuan wallet Mnemonics, you can recover your wallet by importing Mnemonics. Similarly, you are required to click the 15 Mnemonics in right order on wallet importation page. Then, enter your password and got it down.



## 4. Nodes configuration
 
After wallet configuration, you can deploy BitYuan wallet nodes. 

BitYuan nodes need run online, please keep your network smooth. After first BitYuan wallet creation, please wait for blocks syncing and check the syncing process at the bottom. The BitYuan nodes are deployed successfully when the syncing completed. 

<font color=Red>Notice：</font> Still keep online for BitYuan wallet after syncing.



### 4.1 Node status

The user can check nodes status in the lower right corner on BitYuan wallet homepage when hovering over the icon.

![avatar](https://github.com/bityuan/bty-docs/blob/main/.vuepress/public/picture/en/x1.png?raw=true) is wallet status, showing whether current wallet is locked. If locked, enter password to unlock and the status turns into green.

![avatar](https://github.com/bityuan/bty-docs/blob/main/.vuepress/public/picture/en/x2.png?raw=true) is Mining status, showing whether current wallet is mining. It will show "mining" after ticket auto-purchase open.

![avatar](https://github.com/bityuan/bty-docs/blob/main/.vuepress/public/picture/en/x3.png?raw=true) is network connection, showing whether network of current wallet is connected. It shows the number of connected endpoints on this nodes in BitYuan network.

![avatar](https://github.com/bityuan/bty-docs/blob/main/.vuepress/public/picture/en/x4.png?raw=true) is syncing status, showing the process and status of wallet syncing. It shows the number of transaction blocks downloaded. 

![avatar](https://github.com/bityuan/bty-docs/blob/main/.vuepress/public/picture/en/x5.png?raw=true) is server status, showing whether current wallet can serve other nodes. 



## 5. BitYuan transfer

BitYuan wallet has many functions like BitYuan transfer and address management. 
After wallet syncing, you can transfer BitYuan within the wallet. Details of each module are introduced in the following. 



### 5.1 Wallet setup
   
The setting bar on wallet top is **module 4** in picture 6.

Click "setting", and you can  change the password, lock your wallet and authorize offline mining. 

Click "Help", and you can use command line, check BitYuan wallet information.   

Some function operations need command line, e.g. offline mining authorize. 
- Password change: enter original password, then enter new password.
- Unlock wallet: enter password to unlock the wallet and setup if the wallet is "only for mining".
- Open/close ticket auto-purchase: mining starts since ticket auto-purchase open.
- Open/close auto-repair time: the time error can be corrected automatically by syncing to ensure block syncing and mining correct. 
- Open data directory: Open downloaded data directory (bityuanData) in BitYuan wallet.
- Revise data directory: choose new data address and move the data to target directory. (Create a new directory named bityuanData under target directory.)
- Offline mining authorization: enter offline wallet address, authorized wallet address and number of authorized BitYuan. Then, generate binding transactions and transfer transactions. 
- Mnemonics verification: enter wallet mnemonics and passwords to verify.
- Debug windows: On BitYuan RPC control center, enter command in the input box, click send. You can get help information with help command. 
- About BitYuan: Information about BitYuan, including App version, official website and blockchain browser address, etc. 


### 5.2 Wallet asset

The Asset displayed is **the sum** of BitYuan asset in all address within current wallet, including frozen BitYuan assets during mining and the available BitYuan assets.

In the meantime, you can also check the data syncing and time correction. Please keep network smooth and open auto-syncing time to ensure normal blockchain syncing and mining. 


### 5.3 BitYuan transfer 

   
If you're going to transfer BitYuan, ensure your wallet unlock first, and follow these steps:

1. Choose an address in wallet, make sure there are <font color=Red>enough BitYuan</font> for transferring. Or you can click "address book" icon and choose an address.
2. Enter receiving address, (copy and paste), or choose one friend address from your address book.
3. (Optional) Remarks information
4. Enter transfer amount(four decimal places). By default, the transaction fee is 0.001 BitYuan/kb. The system will calculate transaction fees automatically based on the transaction size. Make sure that you have <font color=Red>enough BitYuan</font> for transaction amount and fees.
5. Click "send" and "confirm". Then, the system will send the transaction, package the transaction and broadcast it on whole net <font color=Red>within 10 minutes</font>. If package within 10 minutes failed, the transaction will be invalid due to overtime, and resent.(No repeat sending.)



### 5.4 Transaction record
 

The transaction records should include amount, status, target address, target remarks and time for each transaction. Double-click target transaction to check the details of this transaction. Notice that the transaction records are in reverse order.
 

### 5.5 Address book

The address book contains wallet address and friend address.
  
The left one is wallet address, where you can create, export and hide your address with right-click. Click "details" on the right, you can get the **QR code** and save it to your album or copy the address.
The wallet address <font color=Red>cannot delete</font>.

The right is friend address, you can choose it from your address book when transferring. In this part, you can create, export and delete address. similarly, you can also get **QR code** for the address or copy the address.




## 6. BitYuan mining

### 6.1 Mining description

BitYuan mining is based on POS mining protocol, which is also known as staking mining.  
To mining, token hoders should lock some tokens for ticket(which is similar to staking). Every 3000 BitYuan is locked for <font color=Red>one ticket</font>.

All online tickets take part in mining of new block and each ticket may be chosen <font color=Red>within 6 days</font> in average. The possibility of mining success is higher if you have more tickets, because the possibility for each ticket is calculated independently. 

Each block is generated within <font color=Red>5 seconds</font> in average, which will be dug by <font color=Red>only one ticket</font>.   Each block will mint 8 BitYuan, in which 5 BitYuan is assigned to miners, and the other 3 goes to development fund. 



### 6.2 Lifecycle of ticket

1. Keep BitYuan wallet status in **network-connected and unlock**. (Click "unlock" button in setting and enter wallet passwords to unlock the wallet.)
2. Ensure there are enough BitYuan for ticket purchase. (Notice: auto-mining will cost 2 BitYuanas transaction fees, thus, there should be 3002 BitYuan in wallet at least.) 3000 BitYuan token should be frozen for one ticket. If less than 3000 BitYuan, no ticket can be purchased. There is an example. Suppose the user has 6567 BitYuan for auto-mining. 2 BitYuan should be left in wallet as transaction fee. In remained amount of BitYuan(6565), 6000 BitYuan are frozen to buy 2 tickets for auto-mining. And the remained 565 BitYuan is transferred to mining contract address waiting for more 2445 BitYuan to buy tickets. The 565 BitYuan do not have frozen time. The users can retrieve the tokens after closing auto-mining. 
3. Click the "setting" in BitYuan wallet and open auto-purchase tickets. Then, you are mining now. Notice: BitYuan wallet status should be **network-connected when you are mining**.
4. After auto-purchase tickets opening, it may take no more than 10 minutes to finish ticket purchase and the user can check in wallet records. If it takes more than 10 minutes, the wallet will automatically repurchase ticket until it finished. 
5. After ticket purchase, there is a 12-hour waiting period before mining. 
6. The purchased tickets have a frozen time of 48 hours. You can retrieve BitYuan after 48 hours after you purchased tickets, if you want.
7. The mined-token also has a waiting period of 2 hour in general. However, the mined-token can only be unfrozen when the ticket is unfrozen. If 5 BitYuan tokens are mined with a frozen ticket, the 5 BitYuan will be unfrozen until ticket also unfroze. 
8. If a ticket mined successfully, a new ticket should be purchased for next mining. 


### 6.3 How to Mining 

   
After nodes configuration, ensure wallet syncing to the newest height, follow the steps to open auto-mining: 

1. Check the available BitYuan in account and ensure there are enough BitYuan in the address.
2. Balance: Since auto-mining may cost 2 BitYuan as transaction fees, we suggest that the miners should keep few BitYuan (such as 100BitYuan) in wallet for transaction fees.
3. Unlock wallet "only for mining": Click "unlock" in setting, check "only for mining" and enter wallet passwords. Then, you unlocked successfully for wallet mining. 
4. Open wallet auto-mining: Click "setting" of BitYuan wallet and open "auto-purchase tickets". After that, it may take no more than 10 minutes to finish tickets purchase, and showed in wallet records. Then, it goes to normal mining procedures.





### 6.4 Mining status confirmation
 
If you cannot enter mining procedure after the operation and waiting time, you can check the problem with the following command. Please ensure the following status in normal. Some status can be check using command-line.(Navigation bar-Help-Debug) 
   
1. Keep BitYuan wallet network-connected.    
Check the nodes status in the lower right corner for it. (Details in 4.1 Nodes status.)

2. Keep the network time syncing.  
Check if the network time is synced:  
```
net is_clock_sync
```       
 
Results: true
  
3. Keep block syncing
Check if the block is syncing in time
```
net is_sync
```       

Results: true

4. Ensure there are enough BitYuan in the address.
Since auto-mining may cost 2 BitYuan as transaction fees, we suggest that the miners should keep few BitYuan (such as 100 BitYuan) in wallet for transaction fees.

5. Ensure the BitYuan wallet unlocked.
```
wallet status
```       

Results:
```
{
    "iswalletlock": true,    
    "isautomining": false,  
    "ishasseed": true,  
    "isticketlock": false  
}
```  
Or
```
{
    "iswalletlock": false,    
    "isautomining": false,  
    "ishasseed": true,  
    "isticketlock": true/false  
}
```  
Means that the wallet is unlocked.    



### 6.5 Mining closure

1. Check wallet available balance and ensure there are enough BitYuan in the address.
Keep 2 BitYuan at least in wallet balance for mining closure fees, because mining closure also cost BitYuan as transaction fees (0.001 BitYuan/ticket).
2. Unlock wallet (cancel "only for Mining").
3. Close auto-purchase ticket.
In the upper left corner of wallet page, click "close auto-purchase" in "setting" bar.
4. Input the following command in the debug windows:
``` 
ticket close
```   


The frozen BitYuan will be released in the following situation:
- the remained BitYuan and unfrozen tickets which did not mine successfully will be released to your wallet address immediately.
- If a unfrozen ticket mined successfully, the mined-token will be released after 2 hours. (the waiting period)
- If a frozen ticket mined successfully, after 2-hour waiting period, the mined-token will be released until the ticket also unfroze.
- Except the situation above, if there are still unreleased BitYuan, please repeat the step 4 above and release all your BitYuan. 



## 7. Offline mining authorization

 
For security consideration, we highly recommend using **offline authorized mining mode** to ensure asset safety. 
 
Under online authorized mining mode, you are required to setup complicated login passwords, and the computer should be used only for online-mining to avoid virus infection. 
By now, the miners cannot use offline authorized mining mode on the present version of Dapp. To use the mode, miners should use  **Command Line** in BitYuan wallet. Please follow the steps below:

<font color=Red>Notice</font>: The users should prepare two wallets. One is for offline computer to authorize mining of other address (ensure there are enough BitYuan for mining), and named as Wallet A. The other is for online computer for online mining and named as Wallet B. Keep few BitYuan (100 BitYuan) in the wallet as mining transaction fees for long-term mining. The operation of Wallet A should be offline, and the operation of Wallet B should be network-connected and synced in time. BitYuan wallet nodes should be open for Wallet A and run normally when offline. 
 

<font color=Red>**The computer for Wallet A never connect to network!!!**</font><br>

Please follow the steps below:

**Step 1**: Unlock Wallet A (on the offline computer for Wallet A).
```
wallet unlock -p "BitYuan wallet password for Wallet A" -s wallet -t 0 
```       

Results: true

**Step 2**: Create offline authorized mining transaction (on the offline computer for Wallet A).  
 
Get the private key of address a in Wallet A, and complete authorization of address b in Wallet B. The transaction is created. 
```
ticket bind_miner -b "address b" -o "address a"
```       

Results:  Hexadecimal string without transaction signing
     
**Step 3**: Sign the transaction (on the offline computer for Wallet A).
```
wallet sign -a "address a" -d "Hexadecimal string without transaction signing" -e 0
```       
 
Results: Signed hexadecimal string 
     
**Step 4**: Unlock Wallet B (on the online computer for Wallet B).
```
wallet unlock -p "BitYuan wallet passwords of Wallet B" -s wallet -t 0  
```       

Results: true
 
**Step 5**: Send signed transaction. (The transaction is sent on online computer for Wallet B, the miners should copy "signed hexadecimal string" to the Wallet B through U-disk or other offline method. ) 
```
tx send -d "Signed hexadecimal string" 
```       

Results: Return the transaction hash of the mining commission, and the miner can check transaction details using the hash. 


**Step 6**: Open auto-mining. (on the online computer for Wallet B). 
   
After packing the sent transaction confirmations on blockchain, auto-mining of Wallet B open. 
```
wallet auto_mine -f 1  
```       

Results: true
 
Current version require miners transfer the BitYuan for mining to mining contract address mannually before ticket purchase. Similarly, the miners should complete three steps, including transaction creating, transaction signing and transaction sending.

**Step 7**: Create a transaction to transfer BitYuan to Mining contract address (on offline computer for Wallet A).      
```
bty transfer -f "address a" -t 16htvcBNSEA7fZhAdLJphDwQRQJaHpyHTp -a "The number of BitYuan"
```       
 
Results:  Hexadecimal string without transaction signing

**Step 8** Sign the unsigned transactions (on offline computer for Wallet A).     
```
wallet sign -a "address a" -d "Hexadecimal string without transaction signing" -e 0 
```       

Results: Signed hexadecimal string 
  
**Step 9**: Send transaction. (on online computer for Wallet B).  
```
tx send -d "signed hexadecimal string"
```       
 
We have completed all the configuration procedure of offline mining authorization. Then, the miners can keep Wallet A offline and wallet online for mining, which makes the procedure much safer. 



## 8. BitYuan blockchain browser

BitYuan has its own blockchain broser, where you can check transaction information with the blockchain height, address and hash. The address is [http://mainnet.bityuan.com ](http://mainnet.bityuan.com ) .



## 9. Q & A

Q: What will influence the syncing speed of BitYuan wallet?
 
A: BitYuan wallet syncing depends on the computer setup, mainly hard disks and network. Generally, **SSD** may improve syncing speed. BitYuan development team will provide synced database periodically and the user can download this database to reduce long syncing time for new users.
  
Q: Is the mining possibility related to the computer setup?

A: No, the possibility of mining only depends on the number of tickets the users owned. Because the possibility for each ticket is calculated alone. However, there is still very low possibility of mining failure due to low computer setup. Because the computer setup is too low to broadcast in time when the ticket mined successfully. This situation does not appear with normal setup. We suggest that the miners should use 8G RAM, i7 processor and SSD to get better experence. 

Q: Is it always 5 BitYuan for each mined ticket? And what is the advantages of more tickets?
  
A: Yes, when each block is generated, the miners can get 5 BitYuan. The remained three BitYuan goes to development fund. the miners have higher possibility with more tickets. And the tickets which mined successfully should enter unfrozen-purchase cycle. Hoding more tickets can help miners to save mining time. 

Q: How long will it take to be chosen for one ticke?
 
A: When most of the tickets are online, each ticket may be chosen for 6 days(144h) in average. (the average time is not promised time.)

Q: What is the Annualized percentage of yield (APY) of mining in average? 

A: 8%. If you input 3000 BitYuan for mining, you can gain 240 BitYuan for one year in average as yield. 
 
Q: Can I keep offline during the 12-hour waiting time after ticket purchase but before mining?

A: Yes, and you can also be offline for the frozen time and 2-hour waiting time for mined tokens. The offline time will also be counted into frozen time. However, you have to keep online during mining procedure to ensure nodes in normal network-connecting. 