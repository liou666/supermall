<template>
    <div class="detail-params-info">       
        <table class="params-info">
            <tbody v-if="goodsParam.sizes">
                <tr v-for="(tr,index) in goodsParam.sizes[0]" :key="index">
                    <td v-for="(td,indey) in tr" :key="indey">{{td}}</td>
                </tr>
            </tbody>
        </table>
        <table class="size-info">
            <tbody>
                <tr v-for="(item,index) in goodsParam.infos" :key="index">
                    <td class="key">{{item.key}}</td>
                    <td class="value">{{item.value}}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    props:{
        goodsParam:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .detail-params-info{
        padding:0 7px 20px 7px;
      
        border-bottom: 4px solid #f5f5f5;
        /* font-size: 14px; */
    }
    .params-info{
        padding-bottom: 20px;
      
    }
    table{
        width: 100%;
    }
    .params-info tr{
        height: 80px;
        border-bottom: 2px solid #f4f4f4;
        display: flex;
        width: 100%;
        justify-content: space-between;
        text-align: center;
        align-items: center;
    }
    .value{
        color: var(--color-tint);
        text-align: center;
    }
    .size-info tr{
         display: flex;
        width: 100%;
          height: 80px;
        border-bottom: 2px solid #f4f4f4;
         align-items: center;
       
    }
    .key{
        margin-right: 30px;
       
    }
</style>