import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store =new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
       addCount(state,oldProduct){
            oldProduct.count++
       },
       addToCar(state,payload){
        payload.count=1;
        payload.checked=true;
        state.cartList.push(payload);
       }
    },
    actions:{
        addCart({state,commit},payload){           
            return new Promise(resolve=>{
                const oldProduct=state.cartList.find(item=>item.iid==payload.iid)  
           if(oldProduct){
                commit('addCount',oldProduct) ;
                resolve('商品数量加1')    
           }else{  
               commit('addToCar',payload);
               resolve('成功加入购物车') 
           }  
            })    
      }
    }
});

export default store