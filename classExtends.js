function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    sayHello: function () {
         console.log(`你好， ${this.name}`) 
    }
}
function Student() {
    let [name, age, addr, homeNo] = [].slice.call(arguments);
    this.addr = addr;
    this.homeNo = homeNo;
    Person.call(this, name, age)
    console.log(this)
}
// Student.prototypt = Person.prototype 原型共享 导致 student instanceof Person 和 student instanceof Student 都为 true;
Student.prototype = {
    // Object.create(Person.prototype) 可以实现原型隔离
    ...Object.assign(Person.prototype),
    learn: function (lang) {
         let {name, addr, homeNo} = this;
         console.log(`${name}在${addr} ${homeNo}舍学习${lang}`)
    }
};

let person  = new Person('小明', 18);
person.sayHello(); // 输出 ’你好， 小明‘
let student = new Student('小华', 20, '猪场', 2);
student.sayHello();  // 输出 小华 你好
student.learn('javascript') // 输出 小华在猪场 2舍学习JavaScript；