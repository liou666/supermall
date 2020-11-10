
export default {
    
        addCounter(state,paylode){
          paylode.count+=1
        },
        addToCar(state,paylode){
          paylode.checked=true
          state.carList.push(paylode);
        }
      
}