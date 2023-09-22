/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const ret_array = []
    for (let i = 0; i<arr.length; i++){
        if (fn(arr[i],i)) ret_array.push(arr[i])
    }
    return ret_array
};