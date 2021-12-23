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
    };
    // 剩余参数；
    _.restArguments = function (func) {
        // func.length  是func 的形参个数， rest 参数一般放在最后， 所以rest 参数的开始位置是 func.length -1
        var startIndex = func.length - 1;
        return function () {
            var length = arguments.length - startIndex,
                rest = Array(length),
                index = 0;

            // rest 数组中的成员
            for (; index < length; index++) {
                rest[index] = arguments[index + startIndex];
            }
            // 非 rest 参数成员的值 一一对应；
            var args = Array(startIndex + 1);
            for (index = 0; index < startIndex; index++) {
                args[index] = arguments[index];
            }
            args[startIndex] = rest; // 最后 args 长成 [参数，[rest 参数]]
            return func.apply(this, args);
        };
    };
    // Object.create 的 polyfill
    var Ctor = function () {};
    var baseCreate = function (prototype) {
        if (!_.isObject(prototype)) return {};
        if (Objectj.create) return Objectj.create(prototype);
        Ctor.prototype = prototype;
        var result = new Ctor();
        Ctor.prototype = null;
        return result;
    };
    _.baseCreate = baseCreate;

    var createReduce = function (dir) {
        // direction 方向；
        var reduce = function (obj, iteratee, memo, init) {
            var keys = !_.isArray(obj) && Object.keys(obj),
                length = (keys || obj).length,
                index = dir > 0 ? 0 : length - 1;
            if (!init) {
                memo = obj[keys ? keys[index] : index];
                index += dir;
            }
            for (; index >= 0 && index < length; index += dir) {
                var currentKey = keys ? keys[index] : index;
                memo = iteratee(memo, obj[currentKey], currentKey, obj);
            }
            return memo;
        };

        //memo  最终能累加的结果     每一次累加的过程
        return function (obj, iteratee, memo, context) {
            var init = arguments.length >= 3;
            return reduce(obj, optimizeCb(iteratee, context, 4), memo, init);
        };
    };
    _.reduce = createReduce(1); // 1 || -1；
    //predicate  真值检测(重点: 返回值)
    _.filter = _.select = function (arr, predicate, context) {
        var result = [];
        predicate = cb(predicate, context);
        _.each(arr, function (value, index, list) {
            if (predicate(value, index, list)) result.push(value);
        });
        return result;
    };
    // 数组、 对象都可以遍历；
    _.each = function (target, cb) {
        var key,
            i = 0;
        if (_.isArray(target)) {
            var length = target.length;
            for (; i < length; i++) {
                cb.call(target, target[i], i);
            }
        } else {
            for (key in target) {
                cb.call(target, key, target[key]);
            }
        }
    };

    //去掉数组中所有的假值   _.identity = function(value){return value};
    _.compact = function (arr) {
        return _.filter(arr, _.identity);
    };

    // 返回某一个范围内的数值组成的数组 5   stop == 5      start === 0   step === 1
    _.range = function (start, stop, step) {
        if (stop == null) {
            stop = start || 0;
            start = 0;
        }
        step = step || 1; //2
        // 返回数组的长度  返回大于等于参数x的最小整数 向上取整 10/2  5
        var length = Math.max(Math.ceil((stop - start) / step), 0);
        // 返回的数组
        var range = Array(length);
        for (var index = 0; index < length; index++, start += step) {
            range[index] = start;
        }
        return range;
    };
    var flatten = function (arr, shallow) {
        var ret = [],
            index = 0;
        for (var i = 0; i < arr.length; i++) {
            var value = arr[i];
            // 是数组
            if (_.isArray(value) || _.isArguments(value)) {
                // shallow 是否递归全部展开；
                if (!shallow) {
                    value = flatten(value, shallow);
                }
                var j = 0,
                    len = value.length;
                ret.length += len;
                while (j < len) {
                    ret[index++] = value[j++];
                }
            } else {
                ret[index++] = value
            }
        }
        return ret;
    };
    // 数组 扁平化
    _.flatten = function (array, shallow) {
        return flatten(array, shallow)
    }
    
	//返回数组中除了最后一个元素外的其他全部元素。 在arguments对象上特别有用。
    _.initial = function (array, n) {
        return [].slice.call(array, 0, Math.max(0, array.length -(n == null ? 1 : n)))
    }

	//返回数组中除了第一个元素外的其他全部元素。传递 n 参数将返回从n开始的剩余所有元素
    _.rest = function(array, n, guard) {
        return [].slice.call(array, n == null ? 1 : n);
    }
    // 偏函数
    _.partial = function (func) {
        
        // 返回一个函数的副本
        var args = [].slice.call(arguments, 1);
        var  bound = function() {
            var index = 0;
            var length = args.length;
            var ret  = Array(length);
            for(var i =0;i<length; i++) {
                // 获取 func 之外的参数
                ret[i] = args[i];
            }
            while (index < arguments.length) {
                // 获取 调用 bound 时传近来的参数
                ret.push(arguments[index++]);
            }
            return func.apply(this, ret);
        }
        return bound;
    }
    // 对象有没有该属性
    _.has = function (obj, key) {
        return obj != null && hasOwnProperty.call(obj, key);
    }
    //存储中间运算结果,提高效率
	//参数 hasher是个function通过返回值来记录key
	//_.memoize(function, [hashFunction])
	// 适用于需要大量重复求值的场景
	// 比如递归求解斐波那契数
    /* 
        求解地 10 项 斐波那契数；
         var  hasher = function () {
             var n = arguments[0];
             console.log(n)
             return n
         }
        var  fibonacci = _.memorize(function(n) {
            return n< 2 ? n : fibonacci(n -1) + fibonacci(n -2)
        }, hasher)
        fibonacci(10);
        console.log(fibonacci.cache)
    */
	_.memorize= function(func, hasher) {
        var memo = function(key) {
            // 缓存变量
            var  cache = memo.cache;
            // 求 key
			// 如果传入了 hasher,则用 hasher 函数来记录 key
			// 否则用参数 key(即memo 方法传入的第一个参数)当key
            var address = '' + (hasher ? hasher.apply(this, arguments) : key) ;

			// 如果这个 key 还没被求过值 先记录在缓存中.
            if(!_.has(cache, address)) {
                cache[address] = func.apply(this, arguments);
            }
            return cache[address]
        }
        // cache 对象被当做 key-value 键值对缓存中间运算结果
        memo.cache = {};
        return memo;
    }
    _.isArray = function (array) {
        if (Array.isArray) return Array.isArray(array)
       return toString.call(array) === '[object Array]';
    }   
    _.isFunction = function (func) {
        return typeof func === 'function' || false;
    }
    
    _.targeter = function (str) {
        var tag= `[object ${str}]`
        return function (arg) {
            return toString.call(arg) === tag;
        }
    }
    var isArguments = _.targeter('Arguments');
    (function (){
        if(!isArguments(arguments)) {
            // 兼容 ie 9 一下
            isArguments = function(obj) {
                return _.has(obj, 'callee')
            }
        }
    }());
    _.isArguments =  isArguments;
    _.isBoolean = function () {
        return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
    }
    var  push = Array.prototype.push;
     // 辅助函数 obj 数据结果
    var result = function (instance, obj) {
        return instance._chain ? _(obj).chain() : obj;
    };

    /*
     obj 必须以 key: function 形式传入
     调用方式：_([1,3,4,5,6,7,'a', 'B']).chain().unique().map().value()
    */
    _.mixin = function (obj) {
        //mixin 还没理解透
        // functions  获取所以的 obj keys 
        _.each(_.functions(obj), function(name) {
            // 获取 
            var func = obj[name];

            _.prototype[name] = function () {
                var args = [this._wrapped]; // 初始传进的值；

                push.call(args, arguments);

                // 通过chain 进行链式调用。 调用 value 结束链式调用。
                return result(this, func.apply(this.args));
            }
        })
    }
    _.mixin(_);
    return (root.underscore = root._ = _);
})(this));
