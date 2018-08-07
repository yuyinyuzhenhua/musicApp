import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'   //有什么用？？？


// 利用jsonp  可以解决跨域，原理是script标签，回调函数
export function getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    const data = Object.assign({}, commonParams,{
        platform: 'h5',
        uin: 0,
        needNewCode: 1        
    })

    return jsonp(url,data,options)
}



// 这个请求有一个reference，host 的参数要求，光靠前端改变不了，那就node代理设置
export function getDiscList() {
    const url = '/api/getDiscLists'

    const data = Object.assign({}, commonParams, {
        platform: 'yqq',
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        needNewCode: 0,
        categoryId: 10000000,
        rnd: Math.random() ,  
        format: 'json'
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

