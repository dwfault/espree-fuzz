let s = Symbol();

let obj = {
    [s]: function (arg) {
        return arg * 2;
    }
};
/**Property
 * [s]function (arg) {
        return arg * 2;
    }
 */
/*
[+] Property:[s]: function (arg) {
    return arg * 2;
}
Node {
type: 'Property',
start: 35,
end: 86,
method: false,
shorthand: false,
computed: true,
key: Node { type: 'Identifier', start: 36, end: 37, name: 's' },
*/

/**FunctionExpression
 * function (arg) {
        return arg * 2;
    }
 */


let obj2 = {
    [s](arg) {
        return arg * 2;
    }
};


/**Property
 * [s](arg) {
        return arg * 2;
    }
 */
/**FunctionExpression
 * (arg) {
        return arg * 2;
    }
 */

 
obj[s](123);