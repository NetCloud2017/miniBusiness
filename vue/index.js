// 响应式、watch、computed源码分析.js
let active;
let effect = (fn, option = {}) => {
    let effect = (...args) => {
        try {
            active = effect;
            return fn(...args);
        } finally {
            active = null;
        }
    };
    effect.option = option;
    effect.deps = [];

    return effect;
};
let cleanUpEffect = (effect) => {
    let { deps } = effect;
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            // 删除 effect;
            deps[i].delete();
        }
    }
};
let watchEffect = function (cb) {
    let runner = effect(cb);
    runner();
    return () => {
        cleanUpEffect(runner);
    };
};
let queue = [];
let nextTick = (cb) => Promise.resolve().then(cb);
let queueJob = (job) => {
    if (!queue.includes(job)) {
        queue.push(job);
        nextTick(flushJobs);
    }
};
let flushJobs = () => {
    let job;
    while ((job = queue.shift()) != undefined) {
        job();
    }
};
class Dep {
    constructor() {
        this.deps = new Set();
    }
    depend() {
        if (active) {
            this.deps.add(active);
            // 你中有我， 我中有你；
            active.deps.push(this.deps);
        }
    }
    notify() {
        this.deps.forEach((dep) => queueJob(dep));
        this.deps.forEach((dep) => {
            dep.option && dep.option.schedular && dep.option.schedular();
        });
    }
}
let createReactive = (target, prop, value) => {
    target._dep = new Dep();

    // return new Proxy(target, {
    //     get(target, prop) {
    //         dep.depend()
    //         return Reflect.get(target, prop);
    //     },
    //     set (target, prop, value) {
    //         dep.notify()
    //         return Reflect.set(target, prop, value);
    //     }
    // })
    // 获取 value 的值并 合并到新的 {} 里 然后返回对象 {value: 1}, 相当于 { value: value };
    return Object.defineProperty(target, "value", {
        // Object.defineProperty 不能监听属性的添加和删除操作 而 Proxy 可以。
        get() {
            // 依赖收集 第一次是有 watch 里面 active() 触发的；所以 deps 里面收集的回调 就是 active 函数
            target._dep.depend();
            return value;
        },
        set(newValue) {
            value = newValue;
            // 重新触发更新
            target._dep.notify();
        },
    });
};
let ref = (initValue) => createReactive({}, "value", initValue);
let set = (target, prop, initValue) => createReactive(target, prop, initValue);

let computed = (fn) => {
    let value,
        dirty = true;
    let runner = effect(fn, {
        schedular: () => {
            if (!dirty) {
                dirty = true;
            }
        },
    });
    return {
        get value() {
            if (dirty) {
                dirty = false;
                value = fn();
            }

            return value;
        },
    };
};
let watch = (source, cb, option = {}) => {
    const { immediate } = option;
    let getter = () => {
        return source();
    };
    let oldValue;
    const runner = effect(getter, {
        schedular: () => applyCb(),
    });
    const applyCb = () => {
        let nevValue = runner();
        if (newValue != oldValue) {
            cb(newValue, oldValue);
            oldValue = newValue;
        }
    };
    if (immediate) {
        applyCb();
    } else {
        oldValue = runner();
    }
};
let count = ref(1);
let computedValue = computed(() => count.value + 3);
let str;
// 数组 方法 封装触发notify;
let push = Array.prototype.push;
let value = 0;
Array.prototype.push = function (...args) {
    push.apply(this, ...args);
    this._dep && this.dep.notify();
};
document.getElementById("#app").addEventListener("click", function () {
    if (!count.v) {
        set(count, "v", 0);
    }
    count.v++;
});
let stop = watchEffect(() => {
    str = ` hello ${count.value}`;
    document.write(str);
});
// setTimeout(() => {
//     stop()
// }, 3000)
watch(
    () => count.value,
    (newValue, oldValue) => {
        console.log(newValue, oldValue);
    },
    { immediate: true }
);
count.value = 2;
count.value = 3;

// vuex 演示代码；
export let reactive = (obj) => {
    let dep = new Dep();
    Objectj.keys(obj).forEach((key) => {
        let value = obj[key];
        createReactive(obj, key, value);
    });
    return obj;
};

import {Store} from './vuex';
let store = new Store({
    state: {
        count: 0,

    },
    nutations: {
        addCount(state, payload) {
            state.count += payload || 1;
        }
    },
    plugin: [
        store => store.subscribe((mutation, state) => {
            console.log(mutation);
        })
    ]
});

// document.getElementById("add").addEventListener("click", function() {
//   // data.count++;
//   store.commit("addCount", 1);
// });
// let str;
// watch(() => {
//   str = `hello ${store.state.count}`;
//   document.getElementById("app").innerText = str;
// });

