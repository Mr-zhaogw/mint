<template>
  <div calss="mint" style="padding-top:.5rem">
    <div class="content">
        <div class="btn" @click="connectWallet">
            <img src="@/assets/mint/btn.png" />
            <!-- <span>{{ ethereumAddress }}</span> -->
        </div>
        <div class="text" v-if="totalSupply > 0">
            <div class="handle">
                <img src="@/assets/mint/-.png" class="subtract icon" @click="hanlerNum(0)"/>
                <span class="num">{{ num }}</span>
                <img src="@/assets/mint/+.png" class="add icon" @click="hanlerNum(1)"/>
                <span class="mint">MINT</span>
            </div>
            <div class="n">
                MINT PRICE:{{valueBalance}}ETH &nbsp;&nbsp; {{totalSupply}}/2022MINTED
            </div>
        </div>
        <div v-else class="text soldout">
            SOLD OUT!
        </div>
        <div class="qp" v-if="!isRequest">
            <img src="@/assets/mint/qp.png"/>
        </div>
        <div class="dialog" v-else>
            <img v-if="currentPhase == 0 && inFrenList" src="@/assets/mint/dialog1.png" class="d"/>
            <img v-if="currentPhase == 0 && !inFrenList" src="@/assets/mint/dialog3.png" class="d"/>
            <img v-if="currentPhase == 1 && inWhiteList" src="@/assets/mint/dialog2.png" class="d"/>
            <img v-if="currentPhase == 1 && !inWhiteList" src="@/assets/mint/dialog4.png" class="d"/>
            <img src="@/assets/mint/OK.png" class="ok" @click="buyMint"/>
        </div>
        <div class="bottom">
            <div class="t1 t container_words">LUCKY YEAR OF TIGER LUCKY YEAR OF TIGER LUCKY YEAR OF TIGER LUCKY</div>
            <div class="t2 t container_big">LYOT LYOT LYOT LYOT LYOT LYOT LYOT</div>
            <div class="t3 t container_words">LUCKY YEAR OF TIGER LUCKY YEAR OF TIGER LUCKY YEAR OF TIGER LUCKY</div>
            <img src="@/assets/mint/TIGGY.png" class="tiggy"/>
        </div>
    </div>
  </div>
</template>

<script>
import { ethers } from 'ethers';
import axios from 'axios'
import { contractAddress, contractAbi} from '@/assets/js/util'
 export default {
   name:'',
   components: {
     
   },
  /**
  * 数据部分
  */
   data() {
     return {
       num:0,
       isRequest:false,
       ethereumAddress: '',
       totalSupply:null,
       balance:null,
       valueBalance:null,
       currentPhase:null,
       inWhiteList:false,
       inFrenList:false,
       whiteListProof:[]
     }
   },
   computed: {},
   watch: {},
   created() {
     
   },

   mounted() {
    this.getTreatyInfo();
   },

   methods: {

    async connectWallet(){
        if (window.ethereum) {
            await window.ethereum.enable(); // 请求授权访问 MetaMask 钱包
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            this.ethereumAddress = address;
            axios.get(process.env.API_HOST + 'api?address=' + address).then(res =>{
                console.log(res);
                if(res.status == 200 && res.data.code == 200){
                    this.isRequest = true;
                    this.inFrenList = res.data.data.inFrenList;
                    this.inWhiteList = res.data.data.inWhiteList
                    if(this.currentPhase == 1){
                        this.whiteListProof = res.data.data.whiteListProof;
                    }
                }
            });
            // axios.get(process.env.API_HOST + 'ynu-design/api/web/webindex/banner-list').then(res =>{
            //     console.log(res);
            // });
        } else {
            console.log('MetaMask not detected');
        }
    },
    
    async getTreatyInfo() {
        const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/0260453284fb4be8abb9815c5c116726');
        const contract = new ethers.Contract(contractAddress, contractAbi, provider);
        const valueBalance = await provider.getBalance(contract.address)
        this.valueBalance = ethers.utils.formatEther(valueBalance);
        const totalSupply = await contract.totalSupply();
        this.totalSupply = totalSupply;
        const currentPhase = await contract.currentStage(); //合约当前阶段
        this.currentPhase = currentPhase;
        if(currentPhase == 0){
            this.num = 2;
        }else{
            this.num = 5;
        }
    },

    async buyMint(){
        // const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/0260453284fb4be8abb9815c5c116726');
        // const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/0260453284fb4be8abb9815c5c116726');
        // const wallet = new ethers.Wallet(this.ethereumAddress, provider);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.enable(); // Request user's permission to access their Metamask account

        // Set up signer with the connected Metamask account
        const signer = provider.getSigner();

        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        // const amount = ethers.utils.parseEther(this.num);
        const amount  = (this.num * 0.018).toString();
        const transaction = await contract.whiteListMint(1,this.whiteListProof,{value:ethers.utils.parseEther(amount)});
        console.log(transaction);
        await transaction.wait();
    },

    hanlerNum(num){
        if(num === 0){
            if (this.num > 1){
                this.num --
            }else{
                this.num = 1
            }
        }else{
            if(this.currentPhase == 0){
                if(this.num < 2){
                    this.num ++
                }else{
                    this.num = 2
                }
            }else{
                if(this.num < 5){
                    this.num ++
                }else{
                    this.num = 5
                }
            }
        }
    }
   },
 }
</script>

<style lang='scss' scoped>
  .content{
    background:url('../../assets/mint/bg.png');
    width:100%;
    position: relative;
    min-height: calc(100vh - .5rem);
    height: 5rem;
    background-size: cover;
    background-repeat: no-repeat;
    .qp{
        width:.5rem;
        position: absolute;
        bottom:1.8rem;
        left: 50%;
        margin-left: -.25rem;
        img{
            width:100%
        }
    }
    .text{
        position: absolute;
        top:1rem;
        left: 50%;
        margin-left: -2.64rem;
        .icon{
            width:.3rem;
            vertical-align: 0.09rem;
            cursor: pointer;
            &.add{
                margin-right: .3rem;
            }
        }
        .n{
            color:#fff;
            font-family: 'Turiismo';
            font-size: .156rem;
            margin-top:-.13rem;
        }
        span{
            color:#F7B43B;
            font-family: 'Turiismo';
            font-size: .8rem;
            &.num{
                margin:0 .2rem;
                width:.82rem;
                display: inline-block;
                text-align: center;
            }
        }
        .handle{
            width: 5.28rem
        }
        &.soldout{
            color:#F7B43B;
            font-family: 'Turiismo';
            font-size: .8rem;
            margin-left: -3.5rem;
        }
    }
    .dialog{
        width:4rem;
        position: absolute;
        bottom:1.8rem;
        left: 50%;
        margin-left: -2rem;
        .d{
            width:100%
        }
        .ok{
            position: absolute;
            right: .26rem;
            width:.6rem;
            top:.21rem;
            cursor: pointer;
        }
    }
    .btn{
        width:1.8rem;
        top:.3rem;
        left:50%;
        margin-left: -.9rem;
        position: absolute;
        cursor: pointer;
        img{
            width:100%;
        }
    }
    .bottom{
        width:100%;
        height: 1.1rem;
        background-color: #E7DBCD;
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: center;
        padding:.08rem 0;
        .t{
            color:#00528A;
            font-family: 'BSBSC';
            &.t1{
                font-size: .2rem;
            }
            &.t2{
                font-size: .39rem;
            }
            &.t3{
                font-size: .2rem;
            }
            &.container_words{
                position: relative;
                width: fit-content;
                animation: move 10s linear infinite;
                animation-delay: 3s;
                &::after{
                    position: absolute; 
                    right: -100%;
                    content: attr(text);
                }
            }
            &.container_big{
                position: relative;
                width: fit-content;
                animation: move1 10s linear infinite;
                &::after{
                    position: absolute; 
                    right: 100%;
                    content: attr(text);
                }
            }
        }
        @keyframes move {
			0% {
				transform: translateX(0);
			}
			100% {
				transform: translateX(-100%);
			}
		}
        @keyframes move1 {
			0% {
				transform: translateX(0);
			}
			100% {
				transform: translateX(100%);
			}
		}
        .tiggy{
            position: absolute;
            width:5rem;
            bottom: 0;
            left: 50%;
            margin-left: -2.5rem;
        }
    }
  }
</style>