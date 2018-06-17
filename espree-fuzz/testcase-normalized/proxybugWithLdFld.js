//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
// -maxsimplejitruncount:2 -maxinterpretcount:1 -forcejitloopbody -off:bailonnoprofile
function test() {
    var o0 = 0;
    function o1() {
    }
    var o2 = {};
    var o3 = function () {
        for (var o4 in o5) {
            o6.unshift(this.o7 + this.o7);
        }
    };
    var o6 = Array();
    var o5 = new Uint8Array(1);
    var o8 = {};
    o8['get'] = function () {
        o0++;
    };
    o2 = new Proxy(o2, o8);
    ({ o9: !o3.call(o2, o1, '!') });
    if (o0 != 2)
        print("FAIL");
    else
        print("PASS");
}
test();