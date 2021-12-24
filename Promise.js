
// 主要目的： 了解 通过编写代码了解 promise实现原理和规范
const statesMap = {
    PENDING: "pending",
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
}

function rejectPromise () {

}
function resolvePromise () {

}
class Promise {
    constructor (fn) {
        this.status = statesMap.PENDING;
        this.value = undefined;
        this.resson = undefined;
        fn(value => {
            resolvePromise(this, value)
        }, reason => {
            rejectPromise(this, reason)
        })
        
    } 
    then(onFulfilled, onRejected) {
        const promise1 = this;
        const promise2 = new Promise(()=>{});
        if(promise1.status === statesMap.FULFILLED) {
            
        }
    }
}