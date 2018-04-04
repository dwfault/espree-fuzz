//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Configuration: ..\inline.xml
// Testcase Number: 126423
// Switches: -maxinterpretcount:1  -bgjit- -loopinterpretcount:1 -force:fieldhoist -off:floattypespec
// Arch: x86
function o0() {
    var o1 = {};
    var o2 = { o3: 0, o4: 1 };
    var o5 = function (o6) {
        var o7 = 0;
        for (; o8 < ((this.o4 ^= (~o1.o9))); o7++ + o8++) {
            if (o7 > 3) break;
            o10 = 1;
            this.o3 = 1;
        }
    }
    Object.prototype.o13 = 1;
    var o8 = 1;
    var o14 = 1;
    Object.prototype.o4 = 1;
    Object.prototype.o9 = -1066571423;
    var o15 = 0;
    while ((1) && o15 < 3) {
        o15++;
        o16 = o1;
        // Code Snippet: switch3.ecs (Blue5522)
        switch (o16.o3) {
            case o16.o3 /= o16:
            case undefined:
                o17.o18undefined:
                WScript.Echoundefined:
                WScript.Echo("undefined");
            case ((new o5(1)).o4):

        };

        o16.o9 /= 1469371314;
    }
    o1 = 1;
    o1 = (new o5(1.1));
    switch ((Function("") instanceof ((typeof Object == 'function') ? Object : Object))) {
        case 1:
            break;
        case ('method0' in litObj1):
            o16 = o1litObj1):
            obj1 = obj0o2):
            obj1 = obj0;
            break;
        case 1:
            break;
        case 1:
            break;
        case 1:
            break;
        case 1:
            break;
        case 1:
            break;
        case 1:
            break;
        case 1:
            break;
        case 1:
            break;
        default:
            break;
    }
    // Snippet arrays1
    var o21 = new Array();

    o21.push(o16);
    o21.push(o1.o4);
    o21.push(1);
    o21.push(o1);
    o21.push(o14);
    o21.push(1);
    o21.push(o1);
    o21.push(this.o4);
    o21.push(1);
    for (var o24 = 0; o24 < Object.keys(o16).length; o24++) {
        o17.o18(o21.pop());
    }
    o21.push(o16);
    o21.push(o1.o4);
    o21.push(1);
    o21.push(o16);
    o21.push(o10);
    o17.o18(o21.push(o1));
    o17.o18(o21.pop());
};

// generate profile
o0();

// run JITted code
o0();
