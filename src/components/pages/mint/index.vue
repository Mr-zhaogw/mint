 <template>
  <div calss="mint_page" style="padding-top:.5rem">
    <div class="content_c">
        <div class="btn" @click="connectWallet">
            <img src="@/assets/mint/btn.png" />
        </div>
        <div class="text" v-if="totalSupply > 0">
            <div class="handle">
                <img src="@/assets/mint/-.png" class="subtract icon" @click="hanlerNum(0)"/>
                <span class="num">{{ num }}</span>
                <img src="@/assets/mint/+.png" class="add icon" @click="hanlerNum(1)"/>
                <!-- <span class="mint">MINT</span> -->
                <div class="mintBtn" @click="buyMint">
                    <img :src="mintBtn" />
                </div>
            </div>
            <div class="n">
                MINT PRICE:{{mintPrice}}ETH &nbsp;&nbsp; {{totalSupply}}/2022MINTED
            </div>
        </div>
        <div v-else class="text soldout">
            SOLD OUT!
        </div>
        <div class="qp" v-if="!isDialog">
            <img src="@/assets/mint/qp.png"/>
        </div>
        <div class="dialog" v-else>
            <div v-if="isSuccess">
                <img src="@/assets/mint/dialog5.png" class="d"/>
            </div>
            <div v-else-if="currentPhase == 0">
                <img v-if="inFrenList" src="@/assets/mint/dialog1.png" class="d"/>
                <img v-else="!inFrenList" src="@/assets/mint/dialog3.png" class="d"/>
            </div>
            <div v-else="currentPhase == 1">
                <img v-if="inWhiteList" src="@/assets/mint/dialog2.png" class="d"/>
                <img v-else="!inWhiteList" src="@/assets/mint/dialog4.png" class="d"/>
            </div>
            <!-- <img src="@/assets/mint/OK.png" class="ok" @click="buyMint"/> -->
        </div>
        <div class="bottom">
            <div class="t1 t container_words">
                <vue-seamless-scroll class="seamless-warp" :data="newsList" :class-option="classOption">
                    <ul class="item">
                        <li v-for="item in newsList">{{ item.title }}</li>
                    </ul>
                </vue-seamless-scroll>
            </div>
            <div class="t2 t container_big">
                <vue-seamless-scroll class="seamless-warp" :data="newsList1" :class-option="classOption1">
                    <ul class="item">
                        <li v-for="item in newsList1">{{ item.title }}</li>
                    </ul>
                </vue-seamless-scroll>
            </div>
            <div class="t3 t container_words">
                <vue-seamless-scroll class="seamless-warp" :data="newsList" :class-option="classOption">
                    <ul class="item">
                        <li v-for="item in newsList">{{ item.title }}</li>
                    </ul>
                </vue-seamless-scroll>
            </div>
            <img src="@/assets/mint/tiggy.gif" class="tiggy"/>
        </div>

        <div class="loading_" v-if="isLoading">
            <div id="preloader_4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { ethers } from 'ethers';
import axios from 'axios'
import { contractAddress, contractAbi} from '@/assets/js/util'
import './index.scss'
import vueSeamlessScroll from 'vue-seamless-scroll'

 export default {
   name:'',
   components: {
    vueSeamlessScroll
   },
  /**
  * 数据部分
  */
   data() {
     return {
       mintBtn:require('@/assets/mint/mint.png'),
       newsList:[{title:'LUCKY YEAR OF TIGER',},{title:'LUCKY YEAR OF TIGER',},{title:'LUCKY YEAR OF TIGER',}],
       newsList1:[{title:'LYOT LYOT LYOT LYOT'},{title:'LYOT LYOT LYOT LYOT'},{title:'LYOT LYOT LYOT LYOT'},{title:'LYOT LYOT LYOT LYOT'}],
       num:0,
       index:0,
       ethereumAddress: '',
       totalSupply:null,
       balance:null,
       valueBalance:null,
       currentPhase:null,
       inWhiteList:false,
       inFrenList:false,
       whiteListProof:[],
       mintPrice:null,
       isLoading:false,
       isDialog:false,
       isSuccess:false,
     }
   },
   computed: {
    classOption(){
        return{
            limitMoveNum: 2,
            direction: 2,
        }
    },
    classOption1(){
        return{
            limitMoveNum: 2,
            direction: 3,
        }
    }
   },
   watch: {},
   created() {
     
   },

   created() {
    this.getTreatyInfo();
   },

   methods: {
    showDialog(){
        this.isDialog = true;
        setTimeout(() =>{
            this.isDialog = false;
        },5000)
    },
    async connectWallet(){
        this.isLoading = true;
        if (window.ethereum) {
            await window.ethereum.enable(); // 请求授权访问 MetaMask 钱包
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            this.ethereumAddress = address;
            axios.get(process.env.API_HOST + 'api?address=' + address).then(res =>{
                // console.log(res);
                if(res.status == 200 && res.data.code == 200){
                    this.inFrenList = res.data.data.inFrenList;
                    this.inWhiteList = res.data.data.inWhiteList
                    if(this.currentPhase == 1){
                        this.whiteListProof = res.data.data.whiteListProof;
                    }
                    this.isLoading = false;
                    this.showDialog()
                }
            });
        } else {
            this.isLoading = false;
            console.log('MetaMask not detected');
        }
    },
    
    async getTreatyInfo() {
        const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/0260453284fb4be8abb9815c5c116726');
        const contract = new ethers.Contract(contractAddress, contractAbi, provider);
        const totalSupply = await contract.totalSupply();
        this.totalSupply = totalSupply;
        const currentPhase = await contract.currentStage(); //合约当前阶段
        this.currentPhase = currentPhase;
        if(currentPhase == 0){
            this.num = 2;

        }else{
            this.num = 5;
            if(currentPhase == 1){
                this.mintPrice = ethers.utils.formatEther(await contract.whiteListPrice())
            }else{
                this.mintPrice = ethers.utils.formatEther(await contract.publicPrice())
            }
        }
    },

    async buyMint(){
        // const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/0260453284fb4be8abb9815c5c116726');
        // const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/0260453284fb4be8abb9815c5c116726');
        // const wallet = new ethers.Wallet(this.ethereumAddress, provider);
        this.isLoading = true;
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await window.ethereum.enable(); // Request user's permission to access their Metamask account
            // Set up signer with the connected Metamask account
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractAbi, signer);
            // const amount = ethers.utils.parseEther(this.num);
            const amount  = (this.num * this.mintPrice).toString();
            const transaction = await contract.whiteListMint(1,this.whiteListProof,{value:ethers.utils.parseEther(amount)});
            
            await transaction.wait();
            this.isLoading = false;
            this.isSuccess = true;
            this.showDialog();
        } catch (error) {
            this.isLoading = false;
        }
        
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