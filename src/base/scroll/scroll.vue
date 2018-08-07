<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<!--很多情况下，都可能会用到滚动组件，在外面套一个标签，可以滚动，初始化BScroll，在数据变更的时候，更新DOM-->
<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'

    export default{
        props:{
            probeType:{
                type:Number,
                default:1                
            },
            click:{
                type: Boolean,
                default: true
            },
            listenScroll: {
                type: Boolean,
                default: false
            },
            data: {
                type: Array,
                default: null
            },
            pullup: {
                type: Boolean,
                default: false                
            },
            beforeScroll: {
                type: Boolean,
                default: false
            },
            refreshDelay: {
                type: Number,
                default: 20
            }
        },
        mounted() {   //在这就初始化scroll了，但是数据是异步获取，获取之后，scroll已经变了。所以划不动，so要watch data
            this.$nextTick(() => {
                this._initScroll()
            })
        },
        methods: {
            _initScroll() {
                if (!this.$refs.wrapper) {
                    return
                }
                this.scroll = new BScroll( this.$refs.wrapper,{
                    probeType: this.probeType,
                    click: this.click
                })

                if (this.listenScroll) {
                    let me = this
                    this.scroll.on('scroll', (pos) => {
                        me.$emit('scroll',pos)
                    })
                }

                if (this.pullup) {
                    this.scroll.on('scrollEnd', () => {
                        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                            this.$emit('scrollToEnd')
                        }
                    })
                }

                if (this.beforeScroll) {
                    this.scroll.on('beforeScrollStart', () => {
                        this.$emit('beforeScroll')
                    })
                }
                

                
            },
            enable(){
                this.scroll && this.scroll.enable()
            },
            disable() {
                this.scroll && this.scroll.disable()
            },
            refresh() {
                this.scroll && this.scroll.refresh()
            }
        },
        watch: {
            data() {
                setTimeout(() => {
                    this.refresh()
                },20)
            }
        }

    }
</script>


<style>

</style>
