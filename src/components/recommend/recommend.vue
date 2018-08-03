<template>
  <div class="recommend" ref="recommend">
       <slider>
           <div v-for="item in recommends">
               <a :href="item.linkUrl">
                   <img :src="item.picUrl" alt="">
               </a>
           </div>
       </slider>
  </div>
</template>

<script type="text/ecmascript-6">
    import Slider from 'base/slider/slider'


    export default{
        data() {
            return {
                recommends: [],
                discList:[]
            }
        },
        created() {

        },
        methods:{
            _getRecommend() {
                
            }
        },
        components:{
            Slider
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
