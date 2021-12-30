let active

let onXChange = function (cb) {
    active = cb
    active()
    active = null
}
class Dep {
    constructor () {
        this.deps = new Set()    
    }
    depend () {
        if(active) {
            this.deps.add(active)        
        }    
    }
    notify () {
        this.deps.forEach(dep => dep())    
    }
}
let ref = initValue => {
    let value = initValue
    let dep = new Dep();
    // 获取 value 的值并 合并到新的 {} 里 然后返回对象 {value: 1}, 相当于 { value: value };
    return Object.defineProperty({}, 'value',  {
        get () {
            // 依赖收集 第一次是有 onXChange 里面 active() 触发的；所以 deps 里面收集的回调 就是 active 函数
            dep.depend();
            return value;        
        },  
        set (newValue) {
            value = newValue;
            // 重新触发更新
            dep.notify();        
        }
    })
}
x = ref(1);
onXChange(() => {
    document.write('hello' + x.value)
})
x.value = 2
x.value = 3