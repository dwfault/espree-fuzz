//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = {};
    var o2 = {};
    var o3 = function () {
        function o4() {
            o5.reverse();
            this.o3 = function () {
            };
        }
        var o7 = o4();
        var o8 = new o4();
        o8.o3(o5.pop());
    };
    var o10 = function () {
        return o3(o3());
    };
    var o11 = function () {
    };
    o1.o12 = o11;
    o2.o13 = o10;
    var o5 = new Array(10);
    var o15 = [];
    o5[0] = 1638249354;
    var o16 = o1.o12();
    delete o5[o16];
    function o17() {
    }
    var o18 = o17(o15.unshift(o2.o13(), o3()));
    o20.o21(o5.slice().reduce(function () {
    }));
    o20.o21(o5.slice());
}
o0();
o0();
