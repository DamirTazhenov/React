/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const throwError = (errorStr) => {throw new Error(errorStr)};
    return {
        toBe:function toBe (val2) {
            return val===val2 ? true: throwError("Not Equal");
        },
        notToBe:function notToBe (val2) {
            return val!==val2 ? true: throwError("Equal");
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */