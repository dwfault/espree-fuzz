//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
    with (o1)
    {
        o2 = 
            function o3() {
            return { test: 
                 function () { return "4"; } };
            },

        o5 =
            function o6() {
                return {
                    test:
                         function o7() { return "5"; }
                };
            }
    };;

    var o3 = o3 || undefined;
    var o6 = o6 || undefined;

    return { o1: o1, o3: o3, o6: o6 };
};

var o9={o10:1, o2:2, o5:3};
o11.o12("p = " + JSON.stringify(o9));
var o15=o0(o9);
var o16 = o15.o1;
o11.o12("k = " + JSON.stringify(o16));
o11.o12("k.z = " + o16.o2);
o11.o12("k.z() = " + o16.o2());
o11.o12("k.z().test() = " + JSON.stringify(o16.o2().test()));
o11.o12("k.z().test()+1 = " + JSON.stringify(o16.o2().test()+1));

o11.o12();
o11.o12("sibling with block");
o11.o12("k.z2 = " + o16.o5);
o11.o12("k.z2() = " + o16.o5());
o11.o12("k.z2().test() = " + JSON.stringify(o16.o5().test()));
o11.o12("k.z2().test()+1 = " + JSON.stringify(o16.o5().test() + 1));

o11.o12();
o11.o12("compat mode specifics as !== undefined (if present) - version:2 specifics");
if (o15.o3 !== undefined) {
    o11.o12("testOut.handlerFactory().test() = " + JSON.stringify(o15.o3().test()) + " (as json)");
    o11.o12("testOut.handlerFactory().test()+1 = " + o15.o3().test() + 1);
}
if (o15.o6 !== undefined) {
    o11.o12("testOut.handlerFactory2().test() = " + JSON.stringify(o15.o6().test()) + " (as json)");
    o11.o12("testOut.handlerFactory2().test()+1 = " + o15.o6().test() + 1);
}