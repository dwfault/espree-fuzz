//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o376(o368) {
    return o368.length;
}

o0("Big simple dictionary type handler -> Big ES5 array type handler");
(function(){
    var o90 = 0;
    for (var o10 = 0; o10 < 0x10001; o10++) {
        undefined["p" + o10] = o10;
    }

    o0(o9["p0"], o9["p65535"], o9["p65536"]);

    Object.defineProperty(o9, "0", {writable: false});
    o0(o9["p0"], o9["p65535"], o9["p65536"]);
})();

o0();
o0("Big dictionary type handler -> Big ES5 array type handler");
([2, 3]);

o0(o14("test871: " + o2177()));
o0("Small ES5 array type handler -> Big ES5 array type handler");
(o16(o4));
