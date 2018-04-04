//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = [].join.apply(arguments);
    if (this.o5) { o5.o6(o1); } else { o7.o8(o1); }
}

o0("Big simple dictionary type handler -> Big ES5 array type handler");
(function(){
    var o9 = [];
    for (var o10 = 0; o10 < 0x10001; o10++) {
        o9["p" + o10] = o10;
    }

    o0(o9["p0"], o9["p65535"], o9["p65536"]);

    Object.defineProperty(o9, "0", {writable: false});
    o0(o9["p0"], o9["p65535"], o9["p65536"]);
})();

o0();
o0("Big dictionary type handler -> Big ES5 array type handler");
(function(){
    var o9 = [];
    for (var o10 = 0; o10 < 0x10001; o10++) {
        o9["p" + o10] = o10;
    }

    Object.defineProperty(o9, "p1", {get: function(){return "p1";}, configurable:true});
    o0(o9["p0"], o9["p65535"], o9["p65536"]);

    Object.defineProperty(o9, "0", {writable: false});
    o0(o9["p0"], o9["p65535"], o9["p65536"]);
})();

o0();
o0("Small ES5 array type handler -> Big ES5 array type handler");
(function(){
    var o9 = [];
    Object.defineProperty(o9, "0", {get: function(){return "i0";}, configurable:true, enumerable:true});
    
    for (var o10 = 0; o10 < 0xFFFF; o10++) {
        o9["p" + o10] = o10;
    }

    o0(o9[0], o9["p0"], o9["p65535"], o9["p65536"]);

    for (var o10 = 0xFFFF; o10 < 0x10010; o10++) {
        o9["p" + o10] = o10;
    }
    o0(o9[0], o9["p0"], o9["p65535"], o9["p65536"]);
})();
