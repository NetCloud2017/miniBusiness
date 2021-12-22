import {log} from "./utils"
'log'
log.logMap()
var _ = (underscore = (function (root) {
    var _ = function (obj) {
        if (obj instanceof _) {
            return obj
        }
        if (! (this instanceof _)) {
            return new _(obj)
        }
    }
    _.uniq = _unique = function(array, isSorted, iteratee, context) {
        
    }
    root.underscore = root._ = _;
})(this));
