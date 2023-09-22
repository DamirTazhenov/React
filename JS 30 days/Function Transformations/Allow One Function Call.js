/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    var flag = false
    return function(...args){
        let val = !flag?fn(...args):undefined
        flag = true
        return val
    }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

onceFn(1,2,3); // 6
onceFn(2,3,6); // returns undefined without calling