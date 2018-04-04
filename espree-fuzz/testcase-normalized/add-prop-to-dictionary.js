//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [];
var o1 = {};
var o2 = { o3: 3.14159265358979 };
var o4 = function () {
    var o5 = function (o6) {
        o7.o8(o6.o3 + o6.o9);
    };
    o5(o2);
};
var o10 = function () {
    o11 = o2;
    while (o4()) {
    }
};
o1.o12 = o10;
var o13 = Array();
o15 = Object(o1);
(function (o17) {
    o2.o18 = o17;
    o2.o19 = o17;
}());
var o20 = function () {
    o15.o12();
};
var o21 = {};
Object.defineProperty(o21, '__getterprop4', {
    get: function () {
        delete o2.o24;
        o13.push(parseInt(o20()), o2.o9 = -107);
    }
});
var o27 = [o15];
var o28 = o27[0];
o28.o12();
var o29 = [o15];
var o30 = o29[0];
o30.o12();
o0.push(o21.o31);
typeof o10.call(o11);
