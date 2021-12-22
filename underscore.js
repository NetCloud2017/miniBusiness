export var _ = (underscore = (function (root) {
    var _ = function (obj) {
        // 判断这个对象是不是 underscore 的实例；
        if (obj instanceof _) {
            return obj;
        }
        if (!(this instanceof _)) {
            return new _(obj);
        }
        this._wrapped = obj;
    };
    _.uniq = _unique = function (array, isSorted, iteratee, context) {
        // 数组去重；
        if (!_.isBoolean(isSorted)) {
            context = iteratee;
            iteratee = isSorted;
            isSorted = false;
        }
        // 如果有迭代函数
        if (iteratee != null) {
            iteratee = cb(iteratee, context);
        }
        var result = [],
            seen;
        for (var i = 0; i < array.length; i++) {
            var computed = iteratee ? iteratee(value, i, array) : array[i];

            // 如果是有序数组,则当前元素只需跟上一个元素对比即可

            // 用 seen 变量保存上一个元素
            if (isSorted) {
                if (!i || seen !== computed) result.push(computed);
                seen = computed;
            } else if (result.indexOf(computed) === -1) {
                result.push(computed);
            }
        }
        return result;
    };
    // 开启来接式调用
    _.chain = function (obj) {
        var instance = _(obj);
        instance._chain = true;
        return instance;
    };
    // 辅助函数 obj 数据结果
    var result = function (instance, obj) {
        return instance._chain ? _(obj).chain() : obj;
    };
    _.prototype.value = function () {
        // 返回 初始对象
        return this._wrapped;
    };
    _.functions = function (obj) {
        // 获取keys
        var result = [];
        var key;
        for (key in obj) {
            result.push(key);
        }
        return result;
    };
    _.map = function (obj, iteratee, context) {
        // 生成不同功能迭代器
        iteratee = cb(iteratee, context);
        var keys = !_.isArray(obj) && Objectj.keys(obj);
        var length = (keys || obj).length;
        var result = Array(length);
        for (var index = 0; index < length; index++) {
            var currentKey = keys ? keys[index] : index;
            result[index] = iteratee(obj[currentKey], index, obj);
        }
        return result;
    };

    // 生成回调函数， 迭代器函数
    var cb = function (iteratee, context, count) {
        if (iteratee == null) {
            return _.identity;
        }
        if (_.isFunction(iteratee)) {
            return optimizeCb(iteratee, context, count);
        }
    };
    var optimizeCb = function (func, context, count) {
        if (context == void 0) {
            return func;
        }
        switch (count == null ? 3 : count) {
            case 1:
                return function (value) {
                    func.call(context, value);
                };
                break;
            case 3:
                return function (value, index, obj) {
                    return func.call(context, value, index, obj);
                };
                break;
            case 4:
                return function (memo, value, index, obj) {
                    return func.call(context, memo, value, index, obj);
                };
        }
    };

    _.identity = function (value) {
        return value;
    }
    // 剩余参数；
    _.restArguments = function (func) {
        var  startIndex  = arguments.length - 1;
        return function() {
            var length = arguments.length - startIndex,
            rest = Array(length),
            index = 0;
            
            // rest 数组中的成员
            for (;index < length; index++) {
                rest[index] = arguments[index + startIndex]
            }
            // 非 rest 参数成员的值 一一对应；
            var args = Array(startIndex + 1) 
            for (index = 0; index < startIndex; index++) {
                args[index] = arguments[index];
            }
            args[startIndex] = rest;
            return func.apply(this, args)
        }
    }

    return (root.underscore = root._ = _);
})(this));
