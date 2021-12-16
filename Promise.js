
// 主要目的： 了解 通过编写代码了解 promise实现原理和规范
const statesMap = {
    PENDING: "pending",
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
}


class Promise {
    constructor (fn) {
        this.status = statesMap.PENDING;
        this.value = undefined;
        this.resson = undefined;
        fn(this.resolve, this.reject)
        
    }
    resolve () {

    }
    reject () {

    }
  
}