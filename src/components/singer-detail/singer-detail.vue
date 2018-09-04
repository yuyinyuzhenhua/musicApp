<template>
  <transition name="slide">
      <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list'
  import {getSingerDetail} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'
  import {mapGetters} from 'vuex'


    export default{
        computed: {
            title() {
                return this.singer.name
            },
            bgImage() {
                return this.singer.avatar
            },
            ...mapGetters([
                'singer'   //相当于getters里的singer
            ])
        },
        data() {
            return {
                songs: []
            }
        },
        components:{
            MusicList
        },
        created() {
            // console.log(this.singer)
            this._getDetail()
        },
        methods: {
            _getDetail() {
                if (!this.singer.id) {
                    this.$router.push('/singer')
                    return
                }
                getSingerDetail(this.singer.id).then((res) => {
                    if (res.code === ERR_OK) {
                        console.log(res.data.list);
                        this.songs = this._normalizeSongs(res.data.list)
                    }
                })
            },
            _normalizeSongs(list) {
                let ret = []
                list.forEach((item) => {
                    let {musicData} = item   //es6对象解构赋值，相当于  let musicData = item.musicData
                    if (musicData.songid && musicData.albummid) {
                        ret.push(createSong(musicData))
                    }
                })
                return ret
            }
        }
    }
</script>

 
<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>