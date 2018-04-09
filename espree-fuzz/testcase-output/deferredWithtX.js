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

        o4 =
            function o5() {
                return {
                    test:
                         function o6() { return "5"; }
                };
            }
    };;

    var o3 = o3 || undefined;
    var o5 = o5 || undefined;

    return { o1: o1, o3: o3, o5: o5 };
};

var o7=map.keys();
{
                        o11 += o22;
                        o11 += (o4.o5[0].o6 = -o4.o5[0].o6 - 1, o4.o5[0].o6);
                    }
var o11=o0(o7);
var o12 = o11.o1;
o9.o10("k = " + JSON.stringify(o12));
o9.o10("k.z = " + o12.o2);
o9.o10("k.z() = " + o12.o2());
o9.o10("k.z().test() = " + JSON.stringify(o12.o2().test()));
o9.o10("k.z().test()+1 = " + JSON.stringify(o12.o2().test()+1));

o9.o10();
o9.o10("sibling with block");
o9.o10("k.z2 = " + o12.o4);
o9.o10("k.z2() = " + o12.o4());
o9.o10("k.z2().test() = " + JSON.stringify(o12.o4().test()));
o9.o10("k.z2().test()+1 = " + JSON.stringify(o12.o4().test() + 1));

o9.o10();
o9.o10("compat mode specifics as !== undefined (if present) - version:2 specifics");
if (o11.o3 !== undefined) {
    o9.o10("testOut.handlerFactory().test() = " + JSON.stringify(o11.o3().test()) + " (as json)");
    o9.o10("testOut.handlerFactory().test()+1 = " + o11.o3().test() + 1);
}
if (o11.o5 !== undefined) {
    o9.o10("testOut.handlerFactory2().test() = " + JSON.stringify(o11.o5().test()) + " (as json)");
    o9.o10("testOut.handlerFactory2().test()+1 = " + o11.o5().test() + 1);
}