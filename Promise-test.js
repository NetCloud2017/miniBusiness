function fn(val) {
    console.log(val);
}

let promise = new Promise((resolve, reject) => {
    //if((Math.random() * 10) > 5) {
    console.log("resolve");
    resolve(123);
    // } else {
    //     reject('error')
    // }
});

// Promise.all 
let promiseAll = Promise.all([
    promise,
    promise,
    promise,
    new Promise((resolve, reject) => {
        if (Math.random() * 10 > 5) {
            resolve(123);
        } else {
            console.log("reject");
            reject("error");
        }
    }),
    promise,
]);
promiseAll
    .then((val) => {
        console.log(val);
    })
    .catch((err) => {
        console.log(err, promise, "err");
    });

// Promise any 要 node  15  以上才支持
var  print = console.log;
Promise.any([
    Promise.resolve('print Promise any'),
    Promise.reject("err1"),
    Promise.reject("err"),
]).then((res) => print(res));

// Promise.race
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'two');
  setTimeout(reject, 100, 'err');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
}, err => console.log(err));


// Promise.resolve
const promise1 = Promise.resolve(123);
promise1.then((value) => {
  console.log(value);
  // expected output: 123
});
let thenable  = {
	then: (resolve, reject) => {
    	reject('reject')
      // resolve({val: 'resolve'})
    }
}
Promise.resolve(thenable).then(res => console.log(res), err => console.log(err));
// 123
// 'reject'