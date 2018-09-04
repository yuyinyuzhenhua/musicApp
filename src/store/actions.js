import * as types from './mutation-types'

// 异步操作  或者  对mutations做一些封装 

// 点击歌曲列表，调到播放器
export const selectPlay = function ({commit, state}, {list, index}) {
    commit(types.SET_SEQUENCE_LIST, list)
    commit(types.SET_PLAYLIST, list)
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, true)
}