//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
// -maxsimplejitruncount:2 -maxinterpretcount:1 -forcejitloopbody -off:bailonnoprofile
function test() {
    var o1 = 0;
    function o2() {
    }
    var o3 = {};
    var o4 = function () {
        for (var o5 in o6) {
            o7.unshift(this.o9 + this.o9);
        }
    };
    var o7 = Array();
    var o6 = new Uint8Array(1);
    var o12 = {};
    o12['get'] = function () {
        o1++;
    };
    o3 = new Proxy(o3, o12);
    ({ o14: !o4.call(o3, o2, '!') });
    if (o1 != 2)
        print("FAIL");
    else
        print("PASS");
}
test();