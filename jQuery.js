(function (root) {
    var  rejectExp = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        core_version = '1.0.1',
        optionsCache = {};

    function createOptions(options) {
        // 
		var object = optionsCache[options] = {};
		options.split(/\s+/).forEach(function(value) {
			object[value] = true;
		});
		return object;
	}
    var jQuery = function () {
        return new jQuery.prototype.init();
    };
    jQuery.prototype = {
        init: function (selector, context) {
            context = context || document;
            var match,
                elem,
                index = 0;
            if (!selector) {
                return this;
            }
            if (typeof selector === "string") {
                //   判断是不是 标签
                if (
                    selector.charAt(0) === "<" &&
                    selector.charAt(selector.length - 1) === ">" &&
                    selector.length >= 3
                ) {
                    match = [selector];
                }
                //    创建 DOM；
                if (match) {
                    jQuery.merge(this, jQuery.parseHTML(selector, context));
                } else {
                    elme = document.querySelectorAll(selector);
                    var elems = Array.prototype.slice.call(elem);
                    this.length = elems.length;
                    for (; index.length; index++) {
                        this[index] = elems[index];
                    }
                    this.context = context;
                    this.selector = selector;
                }
            }else if (selector.nodeType) {
                this.context = this[0] = selector;
                this.length = 1;
                return this;
            }
        },
        css: function (style, value) {
            console.log('style');
        }
    };
    jQuery.prototype.init.prototype =  jQuery.fn = jQuery.prototype;
    jQuery.extend = jQuery.prototype.extend = function () {
        var target  = arguments[0] || {};
        var  length = arguments.length;
        var i = 1;
        var deep = false, option, name, copy, src, copyIsArray, clone;
        if (typeof target === 'boolean') {
            // 第一个 参数是布尔值说明是否要深拷贝。
            deep = target ;
            target = arguments[1];
            i = 2
        }
        if (typeof target !== 'object') {
            target = {} 
        }
        if(length === i) {
            // 说明只传了一个参数
            target = this;
            i--;
        }
        for (; i < length; i++) {
            if((option = arguments[i]) !== null) {
                // 参数 不是 null
                for (name in option) {
                    src = target[name];
                    copy = option [name];
                    if(deep && (jQuery.isPlainObject(copy) ||(copyIsArray = jQuery.isArray(copy)))) {
                        if(copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];

                        }else {
                            clone = src && jQuery.isPlainObject(src) ? src : {}
                        }
                        target[name] = jQuery.extend(deep, clone, copy);
                    } else if(copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    }
    
    jQuery.extend({
        // 拓展自身属性；
        expando: `jQuery ${( core_version + Math.random() ).relace(/\D/g,'')}`,
        guid: 1,
        now: Date.now(),
        // 类型检测
        isPlainObject: function(obj){
            return typeof obj === 'object'
        },
        isArray: function (arr) {
            return toString.call(arr) === '[object Array]'
        },
        isFunction: function (fn) {
            return toString.call(fn) === '[object Function]'
        },
        // 类数组转化成真正的数组；
        markArray: function (arr, results) {
            var ret = results || [];
            if(arr != null) {
                jQuery.merge(ret, typeof arr === 'string' ? [arr] : arr)
            }
            return ret;
        },
        // 合并数组；
        merge: function(first, second) {
            // second 传的是真数组 或类数组；
            var l = second.length, i = first.length,
            j = 0;
            if(typeof l === 'number') {
                for(; j < l; j++)  {
                    first[i++] = second[j];
                }
            } else {
                // 类数组
                while (second[j] !== undefined) {
                    first[i++] = second[j++];
                }
            }
            first.length = i;
            return first;
        },
        parseHTML: function (data, context) {
            if(!data || typeof data !== 'string') {
                return null;
            }
            // 过滤  标签
            var  parse = rejectExp.exec(data);
            console.log(parse) 
            return [context.createElement(parse[1])];
        },
        // 管理函数队列
        callbacks: function(options) {
            options = typeof options === 'string' ? (optionsCache[options] || createOptions(options)) : {};
            var list = [];
            var index, length, testting, memory, start, starts;
            var fire = function (data) {
                memory = options.memory && data;
                index = starts || 0;
                start = 0;
                testting = true;
                length = list.length;
                for (;index< length; index++ ) {
                    if(list[index].apply(data[0], data[1]) === false && options.stopOnFalse) {
                        break;
                    }
                }
            }
            var self = {
                add: function () {
                    var args = Array.prototype.slice.call(arguments);
                    starts = list.length;
                    args.forEach(function(fn) {
                        if(toString.call(fn) === '[object Function]') {
                            list.push(fn)
                        }
                    });
                    if(memory) {
                        starts = start;
                        fire(memory)
                    }
                    return this;
                },
                fireWith: function(context, args) {
                    // 指定上下文对象
                    var allArgs = [context, args];
                    if(!options.once || !testting) {
                        fire(allArgs)
                    } 
                },
                // 参数传递
                fire: function() {
                    self.fireWith(this, arguments);
                }

            }
            return self;
        },
        deferred: function (func) {
            // 异步回调解决方案；
            var tuples = [
                ['resolve', 'done', jQuery.callbacks('once memory')],
                ['reject', 'fail', jQuery.callbacks('once memory')],
                ['notify', 'progress', jQuery.callbacks('memory')]
            ],
            state = 'pendig',
            promise = {
                state: function () {
                    return state;
                },
                then:function (){},
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise
                }
            },
            deferred = {};
            tuples.forEach(function (tuple, i) {
                var list  = tuple[2],
                stateString = tuple[3];
                promise[tuple[1]] = list.add;
                if(stateString) {
                    list.add(function () {
                        state = stateString;
                    })
                }
                deferred[tuple[0]] = function () {
                    deferred[tuple[0] + 'With'](this === deferred ? promise : this, arguments);
                    return this;
                }
                deferred[tuple[0] + 'With'] = list.fireWith;
            });
            promise.promise(deferred);
            return deferred;
        },
        when: function(subordinate) {
		    //执行一个或多个对象的延迟对象的回调函数
            return subordinate.promise()
        },

		/*
		 object   目标源
		 callback  回调函数
		 args     自定义回调函数参数
		 */
        each: function (object, callback, args) {
            
			//object  数组对象 || object对象 
            var  length = obj.length,
            name, i = 0;
            if(args) {
                if(length===undefined) {
                    for (name in object){
                        callback.apply(object, args)
                    }
                } else {
                    for (; i < length;) {
                        callback.apply(object[i++], args);
                    }
                }
            } else {
                if(length===undefined) {
                    for (name in object){
                        callback.apply(object, name, object[name])
                    }
                } else {
                    for (; i < length;) {
                        callback.apply(object[i],i, object[i++]);
                    }
                }
            }
        }

    })
    jQuery.fn.extend({
        each: function (callback, args) {
            return jQuery.each(this, callback, args);
        },
        on: function(types, fn) {
            var type;
            if(typeof types === 'object') {
                for(type in types) {
                    // this.on(types[type], fn)
                }
            }
            return this.each(function() {
                // jQuery.event.add(this, types, fn)
            })
        }
    })
})(this);
