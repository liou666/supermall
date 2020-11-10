<template>
  <div class="paramInfo" v-if="Object.keys(paramInfo).length!=0">
      <table 
      v-for="(table,indey) in paramInfo.sizes"
      class="size-info" :key="indey">
          <tr v-for="(tr,index) in table" :key="index" class="tr" >
             <td v-for="(td,indez) in tr" :key="indez">
                 {{td}}
             </td>
          </tr>
      </table>
      <table class="info-param">
          <tr v-for="(tr,index) in paramInfo.infos" :key="index">
              <td>{{tr.key}}</td>
              <td>{{tr.value}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    props:{
        paramInfo:{
            type:Object
        }
    }
}
</script>

<style scoped>
    .paramInfo{
        padding: 5px 20px ;
    }
    .size-info{
        border-bottom: 3px solid #ddd;
        border-top: 3px solid #ddd;
        padding-bottom: 30px;
        padding-top: 20px;
    }
      .size-info tr{
            border-bottom: 1px solid #e4e4e4;
      }
    .size-info td{
        width: 100px;
        text-align: center;
        height: 40px;
        line-height: 40px;
    }
    .info-param{
        padding-top: 20px;
    }
    .info-param tr{
        display: flex;
       border-bottom: 1px solid #e4e4e4;
         align-items: center;
         height: 80px;
    }
    .info-param td:first-child{     
        width: 50px; 
        text-align: center;
      margin-right:20px;
    }
    .info-param td:last-child{
        flex: 1;
        color: var(--color-tint);
    }
</style>