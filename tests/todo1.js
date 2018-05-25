let s = Symbol();

let obj = {
    [s]: function (arg) {
        return arg * 2;
    }
};
/*
let obj = {
    [s](arg) {
        return arg * 2;
    }
};
*/

obj[s](123);