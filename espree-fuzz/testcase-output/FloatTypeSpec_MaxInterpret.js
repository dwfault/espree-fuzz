//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
    if(o1 + 0.1 === 0 || o1 === 0)
        return true;
    return false;
}
o2.o3("test0: " + o4(o0(0.1)));
o2.o3("test0: " + o4(o0(false)));

function o5(o1) {
    if(o1 + 0.1 === 0)
        return -1;
    return o1;
}
o2.o3("test1: " + o4(o5(0.1)));
o2.o3("test1: " + o4(o5(false)));

function o6(o1) {
    if(o1 + 0.1 === 0)
        o1 = 0.1;
    return o1;
}
o2.o3("test2: " + o4(o6(0.1)));
o2.o3("test2: " + o4(o6(false)));

// -off:copyProp
function o7(o1) {
    if(o1 + 0.1 === 0)
        return o1;
    var o8 = o1;
    if(o8 === 0)
        return o1;
    return -1;
}
o2.o3("test3: " + o4(o7(0.1)));
o2.o3("test3: " + o4(o7(false)));

// -off:inline
function o9(o1) {
    var o8, o10, o11, o12;
    if(o1 + 0.1 === 0)
        return o1;
    o8 = o1;
    if(o8 + 0.1 === 0)
        return o8;
    o10 = o8;
    if(o10 + 0.1 === 0)
        return o10;
    for(var o13 = 0; o13 < 3; ++o13) {
        o11 = o10;
        o10 = o8;
        o8 = o1;
        if(o11 === 0)
            o12 = o1;
        else
            o12 = -1;
        o1 = o14(o1);
        if(o1 + 0.1 === 0)
            return o1;
    }
    return o12;

    function o14(o1) { return o1; }
}
o2.o3("test4: " + o4(o9(0.1)));
o2.o3("test4: " + o4(o9(false)));

// -off:copyProp
function o15(o1) {
    if(o1 + 0.1 === 0)
        return o1;
    var o8 = 0.1, o10 = 0.1, o11 = 0.1, o16 = 0.1, o17 = 0.1;
    for(var o13 = 0; o13 < 5; ++o13) {
        o16 = o11;
        o10 = o8;
        o8 = o1;
        o11 = o10;
        o17 = o16;
    }
    return o17;
}
o2.o3("test5: " + o4(o15(0.1)));
o2.o3("test5: " + o4(o15(null)));

function o18(o1, o8) {
    var o10 = o1 + 1 !== NaN ? o1 : o1 + 1;
    return o10 + o8;
};
o2.o3("test6: " + o18(0.1, 0));
o2.o3("test6: " + o18(undefined, ""));

function o19() {
    var o20 = {};
    var o21 = {};
    var o22 = function (o23, o24, o25, o26) {
        function o27(o23, o24, o25) {
            LABEL0:
            switch(o23) {
                case (o23 /= o21.o28, 1.1):
                    break;
                case p3:
                    o20.o28 = (o21.o29p3:
                    obj0.prop2 = (obj1.prop1o26LABEL0:
            switch(p0) {
                case (p0 /= obj1.prop2, 1.1):
                    break;
                case p3o30:
            switch(p0) {
                case (p0 /= obj1.prop2, 1.1):
                    break;
                case p3:
                    obj0.prop2 = (obj1.prop1--);
                    break;
            }
        }
        var o31 = 0;
        while(Math.o32(o27())) {
            if(o31 > 3) break;
            o31++;
        }
    }
    o21.o29 = 1;
    o21.o28 = { o29: 1, o33: 1 };
    o22()
    return o21.o29;
};
o2.o3("test7: " + o19());
o2.o3("test7: " + o19());

function o34() {
    var o1 = o35, o35 = Math.o36(o35, "");
    return o1;

};
o2.o3("test8: " + o34());
o2.o3("test8: " + o34());

function o4(o37) {
    if(typeof (o37) !== "number")
        return o37;
    return Math.o38(o37 * 10);
}
