//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = o6.o14(arguments);
    if (this.o2) { o2.o3(o1); } else { o4.o5(o1); }
}

o0("Big simple dictionary type handler -> Big ES5 array type handler");
(function(){
    var o6 = [];
    for (var o7 = 0; o7 < 0x10001; o7++) {
        o6["p" + o7] = o7;
    }

    o0(o6["p0"], o6["p65535"], o6["p65536"]);

    Object.defineProperty(o6, "0", {writable: false});
    o0(o6["p0"], o6["p65535"], o6["p65536"]);
})();

o0();
o0("Big dictionary type handler -> Big ES5 array type handler");
(function(){
    var o6 = [];
    for (var o7 = 0; o7 < 0x10001; o7++) {
        o6["p" + o7] = o7;
    }

    Object.defineProperty(o6, "p1", {get: function(){return "p1";}, configurable:true});
    o0(o6["p0"], o6["p65535"], o6["p65536"]);

    Object.defineProperty(o6, "0", {writable: false});
    o0(o6["p0"], o6["p65535"], o6["p65536"]);
})();

o0();
o0("Small ES5 array type handler -> Big ES5 array type handler");
(function(){
    var o6 = [];
    Object.defineProperty(o6, "0", {get: function(){return "i0";}, configurable:true, enumerable:true});
    
    for (var o7 = 0; o7 < 0xFFFF; o7++) {
        o6["p" + o7] = o7;
    }

    o0(o6[0], o6["p0"], o6["p65535"], o6["p65536"]);

    for (var o7 = 0xFFFF; o7 < 0x10010; o7++) {
        o6["p" + o7] = o7;
    }
    o0(o6[0], o6["p0"], o6["p65535"], o6["p65536"]);
})();
