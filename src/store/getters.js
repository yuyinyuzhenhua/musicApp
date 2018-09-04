// 对state做一些映射  取state里的数据 可以根据state里的数据做一些简单或复杂的逻辑   获取数据的功能
export const singer = state => state.singer

// 在基础数据上计算一些别的数据
export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
    return state.playlist[state.currentIndex] || {}
}
