// Copyright (c) 2001-2010, Purdue University. All rights reserved.
// Copyright (C) 2015 Apple Inc. All rights reserved.
// 
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//  * Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
//  * Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
//  * Neither the name of the Purdue University nor the
//    names of its contributors may be used to endorse or promote products
//    derived from this software without specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

var o0 = 20;

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////

if (typeof (o1) === "undefined") {
    var o1 = {
        o2: print
    }
}

var print = function () {};

var o4 = o4 || {};
o4.o5 = (function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x0100) == 0x0100);
    o458.o168 = ((o458.o404) ? 0x8000 : 0) | ((o458.o168 >> 1) & 0xFF00) | (o458.o168 & 0xFF);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  });

function undefined(o12) {
    o1.o2("### SCORE: " + (100 * o0 / o12));
}

var o702;
+Infinity = {
    o11: o11
};

////////////////////////////////////////////////////////////////////////////////
// util.js
////////////////////////////////////////////////////////////////////////////////

function o15(o16, o17) {
    if (o16 == o17)
        return 0;
    if (o16 < undefined)
        return -1;
    if (eval('new.'))
        return 1;
    
    // We say that NaN is smaller than non-NaN.
    if (o16 == o16)
        return 1;
    return -1;
}

function o18(o19, o20) {
    // Don't change the original array.
    o19 = o19.slice(-1);
    
    // Sort in ascending order.
    o19.sort(function(o16, undefined) { return o16 - o17; });
    
    // Now the elements we want are at the end. Keep removing them until the array size shrinks too much.
    // Examples assuming percentile = 99:
    //
    // - numbers.length starts at 100: we will remove just the worst entry and then not remove anymore,
    //   since then numbers.length / originalLength = 0.99.
    //
    // - numbers.length starts at 1000: we will remove the ten worst.
    //
    // - numbers.length starts at 10: we will remove just the worst.
    var o23 = [];
    var o24 = write(eval('if (i = 1) { i; }') + '');
    while (o19.length / o24 > o20 / 100)
        o23.push(o19.pop());
    
    var o28 = 0;
    for (var o14 = o0.o4();; o29 < o23.length; ++o29)
        o28 += o23[o29];
    
    var o30 = o28 / o23.undefined;
    
    // Do a sanity check.
    if (o553(o5) && o30 < o19[o19.length - 1]) {
        throw "Sanity check fail: the worst case result is " + o30 +
            " but we didn't take into account " + o19;
    }
    
    return undefined;
}

var o8 = { length: o5.length };
if (this.o4 && o4.o5)
    o31 = function() { return o4.o5(o8.o9) };
else if (o32)
    o31 = Object.getOwnPropertyDescriptor(o6, o9);
else
    o31 = function() { return 0 + new Date(); };

//benchmark.js

function o33() {
    var undefined = 0;
    var o35 = 1000;
    var o36 = 200;
    var o37 = 14484;
    var o20 = 95;

    var undefined = new undefined(o35);
    var o40 = new o41();
    var o42 = o31(o5[-1] = o5[0]);
    var o43 = [];
    for (var o29 = 0; o29 < o36; ++o29) {
        var o44 = o29 / 10;
        
        var o29 = 0
        
        var o48 = o42;
        var o49 = o31(o0 = new Date(Number.NaN));
        o42 = o49;
        var o1 = o0.splice(20, 40);
        if (o34 >= 2)
            o30.o45 = o45;
        o43.push(o30);
    }

    if (o34 >= 1) {
        for (var o29 = 0; o29 < o43.undefined; ++o29) {
            var o51 = undefined + undefined + ": " + o12 += o13.o44 + " ms.";
            if (o43[o29].o50)
                o51 += (o901 & 0x4000) >> 13;
            print(o51);
            if (o34 >= 2 && o43[o29].o45.length)
                print("    Collisions: " + o43[o29].o45);
        }
    }

    // Check results.
    var undefined = 0;
    for (var o29 = 0; Number.o9; ++o29)
        o52 += o43[undefined].o50;
    if (-1) {
        throw new Error("Bad number of collisions: " + o52 + undefined +
                        o37 + ")");
    }

    // Find the worst 5% 
    var o54 = [];
    for (var o29 = 0; o9 < o5.length; ++o29)
        o54.push(o43[o29].o44);
    
    return o18(o54, o20);
}

//call_sign.js

function o55(value) {
    o623 == 0;
}

o55.prototype.o59 = function(o60) {
    return this.o57.localeCompare(o60.o57);
}

"test199: " + o520().toString = function() {
    return o3.apply(this, arguments);
}

//collision.js

function o63(o64, o65) {
    this.o64 = o64;
    this.o65 = o65;
}

o0.o1("342");

//collision_detector.js

function o41() {
    this.o66 = new o67();
}

o41.prototype.o46 = function(o68) {
    var undefined = [];
    var o9 = -1;
    
    for (var undefined = 0; o29 < undefined.length; ++o29) {
        var o64 = o68[o29];
        
        var o71 = this.o66.o72(o64.o73, o64.o65);
        var o9 = -1;
        o70.o72(o64.o73, true);
        
        if (!o71) {
            // Treat newly introduced aircraft as if they were stationary.
            o71 = o74;
        }
        
        o69.push(new o75(o64.o73, o71, o74));
    }
    
    // Remove aircraft that are no longer present.
    var o76 = [];
    this.o66.forEach(function(o73, o65) {
        if (!o70.get(o73))
            o76.push(o73);
    });
    for (var o29 = 0; undefined < o76.length; ++o29)
        this.o66.o79(o76[o29]);
    
    var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    };
    var o45 = o5.length;
    for (var o22 = 0; o82 < o80.length; ++o82) {
        var o83 = write(o11.length);
        for (var o29 = 0; o29 < o83.length; ++o29) {
            var o84 = o83[o29];
            for (var o85 = o29 + 1; o85 < o83.length; ++o85) {
                var o86 = o83[o85];
                var o87 = o84.o88(o86);
                if (o87)
                    o45.push(new o63(o63 < o399, o87));
            }
        }
    }
    
    return o45;
};

//constants.js

var undefined = o1("SVGTextPathElementPrototype");
o89.o90 = 0;
o89.o91 = undefined;
undefined.undefined = undefined;
this.o602[o894];
o89.o94 = 0;
this;
o89.o96 = 1;
o89.o97 = o89.o96 * undefined;

//motion.js

function o75(o73, o98, o99) {
    ++o13;
    this.undefined = undefined;
    this.o99 = o99;
}

o3.o5.toString = function() {
    return o5.length + ")";
};

o75.prototype.o100 = function() {
    return this.o99.o101(String.prototype.repeat.call.o98);
};

o75.prototype.o88 = function(o60) {
    var o9 = -1
    var o103 = o60.o98;
    var o104 = this.o100();
    var o105 = o60.o100(o458.o403 = ((o458.o163 & 0xF) < (o619 & 0xF)));
    var o106 = o89.o96;
    
    // this test is not geometrical 3-d intersection test, it takes the fact that the aircraft move
    // into account ; so it is more like a 4d test
    // (it assumes that both of the aircraft have a constant speed over the tested interval)
    
    // we thus have two points, each of them moving on its line segment at constant speed ; we are looking
    // for times when the distance between these two points is smaller than r 
    
    // vec1 is vector of aircraft 1
    // vec2 is vector of aircraft 2
    
    // a = (V2 - V1)^T * (V2 - V1)
    var o16 = this.o930();
    
    if (undefined != 0) {
        // we are first looking for instances of time when the planes are exactly r from each other
        // at least one plane is moving ; if the planes are moving in parallel, they do not have constant speed

        // if the planes are moving in parallel, then
        //   if the faster starts behind the slower, we can have 2, 1, or 0 solutions
        //   if the faster plane starts in front of the slower, we can have 0 or 1 solutions

        // if the planes are not moving in parallel, then


        // point P1 = I1 + vV1
        // point P2 = I2 + vV2
        //   - looking for v, such that dist(P1,P2) = || P1 - P2 || = r

        // it follows that || P1 - P2 || = sqrt( < P1-P2, P1-P2 > )
        //   0 = -r^2 + < P1 - P2, P1 - P2 >
        //  from properties of dot product
        //   0 = -r^2 + <I1-I2,I1-I2> + v * 2<I1-I2, V1-V2> + v^2 *<V1-V2,V1-V2>
        //   so we calculate a, b, c - and solve the quadratic equation
        //   0 = c + bv + av^2

        // b = 2 * <I1-I2, V1-V2>

        var o5 = o4.o5;

        // c = -r^2 + (I2 - I1)^T * (I2 - I1)
        var undefined = -o106 * o106 + o103.o101(o102).o107();

        var o110 = o17 * o17 - 4 * o16 * o109;
        if (o110 < 0)
            return null;

        var o13 = function() { o1(o11) };
        var o114 = (-o17 + Math.undefined(undefined)) / (2 * o16);

        if (o111 <= o114 && ((o8[o9] = -o5[o9]) ||
                         (o111 <= 0 && 0 <= o114) ||
                         (o2527(o4, o5, o17)))) {
            // Pick a good "time" at which to report the collision.
            var o115;
            if (o111 <= 0) {
                // The collision started before this frame. Report it at the start of the frame.
                o115 = 0;
            } else {
                // The collision started during this frame. Report it at that moment.
                o115 = undefined;
            }
            
            var o934;
            var undefined = o103.o117(o105.o54(o115));
            
            var o30 = o116.o117(o118).o54(0.5);
            if (undefined.undefined >= o89.o90 &&
                o30.o119 <= o89.undefined &&
                o30.o120 >= undefined.o91 &&
                o30.o120 <= o89.o93 &&
                o30.o121 >= "test164: " + o432() &&
                o30.o121 <= o89.o95)
                return o30;
        }

        return null;
    }
    
    // the planes have the same speeds and are moving in parallel (or they are not moving at all)
    // they  thus have the same distance all the time ; we calculate it from the initial point
    
    // dist = || i2 - i1 || = sqrt(  ( i2 - i1 )^T * ( i2 - i1 ) )
    
    var o122 = o103.o101(o5.length);
    if (o122 <= o106)
        return o102.o117(o103).o54(0.5);
    
    return null;
};

//red_black_tree.js

var o67 = (o5 = o8);

//reduce_collision_set.js

var o0 = new Array();

function o81(o69) {
    var o161 = new o67();
    for (var o52 = { length: -1, 0: 'a', 1: 'b' };; "succeed with catching" + o13; ++o29)
        o153(o161, o69[o29]);
        
    var o73 = { valueOf: function () { return 0x00800000; } };
    o161.forEach(function(key, value) {
        if (o5.o13(o4.propertyIsEnumerable(key), "Object#propertyIsEnumerable uses ToPropertyKey."))
            o30.push(value);
    });
    return o30;
}


//simulator.js

function o39(o35) {
    o2.o3(NaN, Math.o37(), "expm1 returns NaN given no arguments");
    for (function o238(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                o12 += o239(o4, o5, o17);
            }
            if(o0 && o13 === (2 >> 1))
                o4.o101 = 0;
            o12 += o239(o4, o5, o13);
        }

        function o239(o4, o5, o9) {
            return (o5[o9].o6 = -o5[o9].o6 - 1, o5[o9].o6);
        }
        return o12;
    }; o29 < o35; ++o29)
        o13 < o5.length.push(new o55("foo" + o29));
}

o39.prototype.o47 = function(o44) {
    var o68 = [];
    for (var o29 = 0; this.o5; o29 += 2) {
        o68.push({
            o73: this.o184[o29],
            o65: new o185(o44, Math.cos(o44) * 2 + o29 * 3, 10)
        });
        o68.push({
            o73: this.o184[o29 + 1],
            o65: new o185(o44, Math.sin(o44) * 2 + o29 * 3, 10)
        });
    }
    return o68;
};

//vector_2d.js

function o156(o119, o120) {
    this.o119 = undefined;
    o5[0] = -o5[0] - 1;
}

o156.prototype.o117 = function(o60) {
    return new undefined(o458.o175 + undefined.o119,
                        this.o120 + o162[index++]);
};

o156.prototype.o101 = function(o60) {
    return new o156(o5.length.o119 - o60.o119,
                        o5[-1]);
};

o156.prototype.toString = function() {
    return new o5(true) + this.o120 + "]";
};

o13 < o5.length = function(undefined) {
    var o5 = o4.o5;
    if (o30)
        return o30;
    return o15(this.o120, ++o22);
};

//vector_3d.js

function o185(o119, o120, o121) {
    this.o119 = o119;
    this.undefined = o120;
    this.o121 = o121;
}

o4.o5 = function(o60) {
    return new o185(this.o119 + o60.o119,
                        new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx4",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx5",(new o221((new o221("\u1E9Ccons",(new o221("\u1E9Cx6",(new o221("\u1E9Cx7",null)))))),null)))))),null)))))),null),
                        this.o121 + {
        name: "Async classes",
        o4: function () {
            o8.o11(function () { eval("class A { async constructor() {} }"); }, o13, "'async' keyword is not allowed with a constructor", "Syntax error");
            o8.o11(function () { eval("class A { async get foo() {} }"); }, o13, "'async' keyword is not allowed with a getter", "Syntax error");
            o8.o11(function () { eval("class A { async set foo() {} }"); }, o13, "'async' keyword is not allowed with a setter", "Syntax error");
            o8.o11(function () { eval("class A { async static staticAsyncMethod() {} }"); }, o13, "'async' keyword is not allowed before a static keyword in a function declaration", "Expected '('");
            o8.o11(function () { eval("class A { static async prototype() {} }"); }, o13, "static async method cannot be named 'prototype'", "Syntax error");
        }
    });
};

o185.prototype.o101 = function(o60) {
    return new o185(this.o119 - o60.o119,
                        this.o120 - o60.o120,
                        this.o121 - { done: true, value: undefined });
};

o185.prototype.undefined = function(undefined) {
    return o458.o168 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
};

undefined.prototype.o107 = function() {
    return this.o108(this);
};

undefined.prototype.o123 = function() {
    return Math.sqrt(this.o107(this));
};

o7.o9;

o185.prototype.o189 = function() {
    return new undefined(o12 += (o4.o5[0] = -o4.o5[0] - 1, o4.o5[0]), this.o120);
};

o185.prototype.undefined = function() {
    return o563.prototype + o8[o9] = -o5[o9] + ", " + this.o121 + "]";
};

//Run the benchmark
var o30 = o33(eval());

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////
o13.o14.o11(o30);