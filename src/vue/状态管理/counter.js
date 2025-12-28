import { defineStore } from 'pinia'

// defineStore( id, options ) 函数结构
// options 里三个关键字段：
// state: 存放数据的地方
// getters: 只读不可修改 可以拿来当计算属性 
// actions: 能修改数据
export const useCounterStore = defineStore('counter', {
    // state：一个函数，函数体要用({})
    state: () => ({
        count: 0,
        title: 'pinia 计数器'
    }),
    // getters:类似于计算属性
    getters: {
        // doubleCount：getter 名字，自定义名字
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {
            // 在 actions 里面，this 指向当前js文件
            this.count++
        },
        reset() {
            this.count = 0
        }

    }
})