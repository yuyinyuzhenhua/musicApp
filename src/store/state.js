// vuex   所有的状态

import {playMode} from 'common/js/config'


const state = {  //保留基础数据
    singer: {},
    palying:false,       //播放器状态：播放/暂停
    fullScreen:false,    //暂停/播放
    playlist:[],         //播放列表
    sequenceList:[],     //顺序列表  ： 
    mode:playMode.sequence,                //播放模式：顺序、随机、循环,
    currentIndex: -1        //当前播放的哪首歌
}

export default state