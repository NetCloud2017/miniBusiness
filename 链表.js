// 参考地址： https://juejin.cn/post/6921515173614354445#heading-26
function ListNode(val) {
    this.value = val;

    this.next = null;
    this.prev = null;
}

function ListClass(node) {
    this.length = 0;
    this.head = node || null;
    this.tail = null;
}
// 获取链表中索引所对应的元素
ListClass.prototype.getElementAt = function (index) {
    if (!this.inRange(index)) return null;
    let cur = null;
    // 当索引大于链表长度 length/2 时，我们可以从后往前找，反之则从前向后找，这样可以更快找到该节点元素
    if (index > Math.floor(this.length / 2)) {
        cur = this.tail;
        let i = this.length - 1;
        while (i > index) {
            cur = cur.prev;
            i--;
        }
    } else {
        cur = this.head;
        while (index--) {
            cur = cur.next;
        }
    }

    return cur;
};
// 获取链表中某个节点
ListClass.prototype.find = function (val) {
    let headCur = this.head,
        tailCur = this.tail;

    while (headCur) {
        if (headCur.value === val) return headCur;
        headCur = headCur.next;
        if (tailCur.value === val) return tailCur;
        tailCur = tailCur.prev;
    }
    return null;
};

// 向链表中追加节点
ListClass.prototype.append = function (val) {
    let node = new ListNode(val);

    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        // let cur = this.getElementAt(this.length - 1);
        // cur.next = node;
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    this.length++;
};

// 在链表的指定位置插入节点
ListClass.prototype.insert = function (index, val) {
    if (!this.inRange(index)) return false;

    if (index === this.length) {
        this.append(val);
    } else {
        let newNode = new ListNode(val);

        if (index == 0) {
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
        } else {
            let preNode = this.getElementAt(index - 1);
            let curNode = preNode.next;

            newNode.next = curNode; // 这时指向的是index 这个节点。
            newNode.prev = preNode;
            preNode.next = newNode;
            curNode.prev = newNode;
        }
        this.length++;
    }

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
            this.head.prev = null;
            if (this.length === 1) this.tail = null;
        } else if (index === this.length - 1) {
            cur = this.tail;
            this.tail = cur.prev;
            this.tail.next = null;
        } else {
            //  中间元素
            // cur = preNode.next;
            cur = this.getElementAt(index);
            preNode = cur.prev;
            preNode.next = cur.next;
            cur.next.prev = preNode;
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

console.log(linkedList.removeAt(0));
console.log(linkedList.removeAt(1));
console.log(linkedList.removeAt(2));
console.log(linkedList.join("--"));

console.log(linkedList.indexOf(20));

linkedList.remove(20);

console.log(linkedList.join("--"));

console.log(linkedList.find(10));

linkedList.clear();
console.log(linkedList.size());
