//混入返回顶部
import backTop from 'common/backTop/backTop';
export const backTopMinin={
    components:{
        backTop
    },
    data() {
        return {
            isTopShow:false
        }
    },
    methods: {
        backTop(){
            this.$refs.scroll.scrollTo(0,0,800)
        },
        listenShowBackTop(positionY){
            if(positionY>1000){
                this.isTopShow=true
              }else{
                 this.isTopShow=false
              }
        }
    },
};

//混入tab切换栏;
import tabControl from 'common/tabControl/tabControl';
export const tabControlMinin={
    components:{
        tabControl
    },
    data() {
        return {
            isShow:false, 
        }
    },
}