// 参考地址： https://juejin.cn/post/6921515173614354445#heading-26
function ListNode(val) {
    this.value = val;
    this.next = null;
}

function ListClass(node) {
    this.length = 0;
    this.head =node || null;
}
// 获取链表中索引所对应的元素
ListClass.prototype.getElementAt = function (index) {
    if (index < 0 || index > this.length - 1) return null;
    let cur = this.head;
    while (index--) {
        cur = this.next;
    }
    return cur;
};
// 获取链表中某个节点
ListClass.prototype.find = function (val) {
    let cur = this.head;
    while (cur) {
        if (cur === val) return cur;
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
    if (index < 0 || index > this.length) return false;
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

// 删除链表中指定位置的元素，并返回这个元素的值
ListClass.prototype.removeAt = function (index) {};

// 删除链表中对应的元素
ListClass.prototype.remove = function (val) {};

// 获取链表中给定元素的索引
ListClass.prototype.indexOf = function (val) {};

// 判断链表是否为空
ListClass.prototype.isEmpty = function () {};

// 获取链表的长度
ListClass.prototype.size = function () {};

// 获取链表的头元素
ListClass.prototype.getHead = function () {};

// 清空链表
ListClass.prototype.clear = function () {};

// 序列化链表
ListClass.prototype.join = function (string) {};
