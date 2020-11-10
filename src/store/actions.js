export default {
    addCar({state,commit},paylode){
        return new Promise((resolve,reject)=>{
            const oldProduct=state.carList.find(item=>item.iid===paylode.iid);           
        if(oldProduct){
            commit('addCounter',oldProduct);
            resolve('商品数量加一')
        }else{
            paylode.count=1;
            commit('addToCar',paylode);
            resolve('添加新商品')
        }
        })
    }
}