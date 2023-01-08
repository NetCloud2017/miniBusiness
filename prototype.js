function User({ name, age, sex, role }) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.role = role;
}
User.prototype = {
    show: function () {
        console.log(
            `show ${this.age} name ${this.name} sex ${this.sex} role: ${this.role}`
        );
        console.log(`string ${this.commonFriends}`);
    },
    commonFriends: ["李四", "王五", "牛六"],
};

let user1 = new User({ name: "张三", age: "99", sex: "man", role: "犯罪狂徒" });

user1.show();
user1.__proto__.show(); // 这种写法 的this 是 最近获取到该方法的对象

/*
* 这两行的区别是, user1.show() 里获取到的 this 是实例 user1, 而 user1.__proto__.show()  的this 是User的 原型对象 prototype 
* 因此 输出分别是： 
user1.show()
show 99 name 张三 sex man role: 犯罪狂徒
string 李四,王五,牛六

user1.__proto__.show()
show undefined name undefined sex undefined role: undefined
string 李四,王五,牛六
*/
