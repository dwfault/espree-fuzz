//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    function o1() {
    }
    var o2 = {};
    var o3 = function () {
    };
    var o4 = function () {
        o3(o2.o5 = 1);
        return 776151980;
    };
    o2.o6 = o4;
    var o7 = new Array(-244, 3421873769178130000, -7539078262541710000, 799469805.1, 6863152712358460000);
    var o9 = Array();
    var o10 = 1;
    function o11() {
        o7.pop() ? o7.pop() : 0;
    }
    o7[o2.o6()] = 1;
    o10 = o9.splice(o11());
    for (var o14 in o2) {
        o7[5] = 1;
        if (!0) {
            o1(o10++);
        }
    }
}
o0();
o0();
o0();
o15.o16("Pass");

