// 参考地址： https://juejin.cn/post/6921515173614354445#heading-26
function ListNode(val) {
    this.value = val;
    this.next = null;
}

function ListClass(node) {
    this.length = 0;
    this.head = node || null;
}
// 获取链表中索引所对应的元素
ListClass.prototype.getElementAt = function (index) {
    if (index < 0 || index > this.length - 1) return null;
    let cur = this.head;
    while (index--) {
        cur = cur.next;
    }
    return cur;
};
// 获取链表中某个节点
ListClass.prototype.find = function (val) {
    let cur = this.head;
    while (cur) {
        if (cur.value === val) return cur;
        cur = cur.next;
    }
    return null;
};

// 向链表中追加节点
ListClass.prototype.append = function (val) {
    let node = new ListNode(val);

    if (!this.head) {
        this.head = node;
    } else {
        let cur = this.getElementAt(this.length - 1);
        cur.next = node;
    }
    this.length++;
};

// 在链表的指定位置插入节点
ListClass.prototype.insert = function (index, val) {
    if (!this.inRange(index)) return false;

    let newNode = new ListNode(val);
    if (index == 0) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        let preNode = this.getElementAt(index - 1);
        newNode.next = preNode.next; // 这时指向的是index 这个节点。
        preNode.next = newNode;
    }

    this.length++;
    return true;
};
ListClass.prototype.inRange = function (index) {
    return index < 0 || index >= this.length ? false : true;
};
// 删除链表中指定位置的元素，并返回这个元素的值
ListClass.prototype.removeAt = function (index) {
    let cur = this.head;
    if (this.inRange(index)) {
        let preNode = this.getElementAt(index - 1);
        if (index === 0) {
            this.head = cur.next;
        } else {
            cur = preNode.next;
            preNode.next = cur.next;
        }
    } else {
        return null;
    }
    this.length--;
    return cur.value;
};

// 获取链表中给定元素的索引
ListClass.prototype.indexOf = function (val) {
    //  方法1
    // let cur = this.head;
    // for (let i = 0; i < this.length; i++) {
    //     if (cur.val === val) return i;
    //     cur = cur.next;
    // }
    // return -1;

    let index = 0;
    let cur = this.head;
    do {
        if (cur.value === val) {
            break;
        }
        if (index === this.length - 1 && cur.value !== val) {
            index = -1;
        }
        index++;
        cur = cur.next;
    } while (index < this.length - 1);

    return index;
};
// 删除链表中对应的元素
ListClass.prototype.remove = function (val) {
    let index = this.indexOf(val);
    return this.removeAt(index);
};

// 判断链表是否为空
ListClass.prototype.isEmpty = function () {
    return !this.length;
};

// 获取链表的长度
ListClass.prototype.size = function () {
    return this.length;
};

// 获取链表的头元素
ListClass.prototype.getHead = function () {
    return this.head;
};

// 清空链表
ListClass.prototype.clear = function () {
    this.head = null;
    this.length = 0;
};

// 序列化链表
ListClass.prototype.join = function (string) {
    let cur = this.head;
    let str = "";
    while (cur) {
        str += cur.value;
        if (cur.next) {
            str += string;
        }
        cur = cur.next;
    }
    return str;
};

let linkedList = new ListClass();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

console.log(linkedList.join("--"));

linkedList.insert(0, 5);
linkedList.insert(2, 15);
linkedList.insert(4, 25);

console.log(linkedList.join("--"));

console.log(linkedList.removeAt(0))
console.log(linkedList.removeAt(1))
console.log(linkedList.removeAt(2))
console.log(linkedList.join("--"))

console.log(linkedList.indexOf(20))

linkedList.remove(20)

console.log(linkedList.join("--"))

console.log(linkedList.find(10))

linkedList.clear()
console.log(linkedList.size())
