<template>
  <div>
    {{product}}
  </div>
</template>

<script>
export default {
props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
}
</script>

<style>

</style>