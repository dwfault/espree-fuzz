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
o4.o5 = (function() {
  return o4.o5       ||
         o4.o6    ||
         o4.o7     ||
         o4.o8      ||
         o4.o9 ||
         Date.o5;
})();

function o11(o12) {
    o1.o2("### SCORE: " + (100 * o0 / o12));
}

var o13 = {};
o13.o14 = {
    o11: o11
};

////////////////////////////////////////////////////////////////////////////////
// util.js
////////////////////////////////////////////////////////////////////////////////

function o15(o16, o17) {
    if (o16 == o17)
        return 0;
    if (o16 < o17)
        return -1;
    if (o16 > o17)
        return 1;
    
    // We say that NaN is smaller than non-NaN.
    if (o16 == o16)
        return 1;
    return -1;
}

function o18(o19, o20) {
    // Don't change the original array.
    o19 = o19.slice();
    
    // Sort in ascending order.
    o19.sort(function(o16, o17) { return o16 - o17; });
    
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
    var o24 = o19.length;
    while (o19.length / o24 > o20 / 100)
        o23.push(o19.pop());
    
    var o28 = 0;
    for (var o29 = 0; o29 < o23.length; ++o29)
        o28 += o23[o29];
    
    var o30 = o28 / o23.length;
    
    // Do a sanity check.
    if (o19.length && o30 < o19[o19.length - 1]) {
        throw "Sanity check fail: the worst case result is " + o30 +
            " but we didn't take into account " + o19;
    }
    
    return o30;
}

var o31;
if (this.o4 && o4.o5)
    o31 = function() { return o4.o5() };
else if (o32)
    o31 = function() { return o32() * 1000; };
else
    o31 = function() { return 0 + new Date(); };

//benchmark.js

function o33() {
    var o34 = 0;
    var o35 = 1000;
    var o36 = 200;
    var o37 = 14484;
    var o20 = 95;

    var o38 = new o39(o35);
    var o40 = new o41();
    var o42 = o31();
    var o43 = [];
    for (var o29 = 0; o29 < o36; ++o29) {
        var o44 = o29 / 10;
        
        var o45 = o40.o46(o38.o47(o44));
        
        var o48 = o42;
        var o49 = o31();
        o42 = o49;
        var o30 = {
            o44: o49 - o48,
            o50: o45.length
        };
        if (o34 >= 2)
            o30.o45 = o45;
        o43.push(o30);
    }

    if (o34 >= 1) {
        for (var o29 = 0; o29 < o43.length; ++o29) {
            var o51 = "Frame " + o29 + ": " + o43[o29].o44 + " ms.";
            if (o43[o29].o50)
                o51 += " (" + o43[o29].o50 + " collisions.)";
            print(o51);
            if (o34 >= 2 && o43[o29].o45.length)
                print("    Collisions: " + o43[o29].o45);
        }
    }

    // Check results.
    var o52 = 0;
    for (var o29 = 0; o29 < o43.length; ++o29)
        o52 += o43[o29].o50;
    if (o52 != o37) {
        throw new Error("Bad number of collisions: " + o52 + " (expected " +
                        o37 + ")");
    }

    // Find the worst 5% 
    var o54 = [];
    for (var o29 = 0; o29 < o43.length; ++o29)
        o54.push(o43[o29].o44);
    
    return o18(o54, o20);
}

//call_sign.js

function o55(value) {
    this.o57 = value;
}

o55.prototype.o59 = function(o60) {
    return this.o57.localeCompare(o60.o57);
}

o55.prototype.toString = function() {
    return this.o57;
}

//collision.js

function o63(o64, o65) {
    this.o64 = o64;
    this.o65 = o65;
}

o63.prototype.toString = function() {
    return "Collision(" + this.o64 + " at " + this.o65 + ")";
};

//collision_detector.js

function o41() {
    this.o66 = new o67();
}

o41.prototype.o46 = function(o68) {
    var o69 = [];
    var o70 = new o67();
    
    for (var o29 = 0; o29 < o68.length; ++o29) {
        var o64 = o68[o29];
        
        var o71 = this.o66.o72(o64.o73, o64.o65);
        var o74 = o64.o65;
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
    for (var o29 = 0; o29 < o76.length; ++o29)
        this.o66.o79(o76[o29]);
    
    var o80 = o81(o69);
    var o45 = [];
    for (var o82 = 0; o82 < o80.length; ++o82) {
        var o83 = o80[o82];
        for (var o29 = 0; o29 < o83.length; ++o29) {
            var o84 = o83[o29];
            for (var o85 = o29 + 1; o85 < o83.length; ++o85) {
                var o86 = o83[o85];
                var o87 = o84.o88(o86);
                if (o87)
                    o45.push(new o63([o84.o73, o86.o73], o87));
            }
        }
    }
    
    return o45;
};

//constants.js

var o89 = {};
o89.o90 = 0;
o89.o91 = 0;
o89.o92 = 1000;
o89.o93 = 1000;
o89.o94 = 0;
o89.o95 = 10;
o89.o96 = 1;
o89.o97 = o89.o96 * 2;

//motion.js

function o75(o73, o98, o99) {
    this.o73 = o73;
    this.o98 = o98;
    this.o99 = o99;
}

o75.prototype.toString = function() {
    return "Motion(" + this.o73 + " from " + this.o98 + " to " + this.o99 + ")";
};

o75.prototype.o100 = function() {
    return this.o99.o101(this.o98);
};

o75.prototype.o88 = function(o60) {
    var o102 = this.o98;
    var o103 = o60.o98;
    var o104 = this.o100();
    var o105 = o60.o100();
    var o106 = o89.o96;
    
    // this test is not geometrical 3-d intersection test, it takes the fact that the aircraft move
    // into account ; so it is more like a 4d test
    // (it assumes that both of the aircraft have a constant speed over the tested interval)
    
    // we thus have two points, each of them moving on its line segment at constant speed ; we are looking
    // for times when the distance between these two points is smaller than r 
    
    // vec1 is vector of aircraft 1
    // vec2 is vector of aircraft 2
    
    // a = (V2 - V1)^T * (V2 - V1)
    var o16 = o105.o101(o104).o107();
    
    if (o16 != 0) {
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

        var o17 = 2 * o102.o101(o103).o108(o104.o101(o105));

        // c = -r^2 + (I2 - I1)^T * (I2 - I1)
        var o109 = -o106 * o106 + o103.o101(o102).o107();

        var o110 = o17 * o17 - 4 * o16 * o109;
        if (o110 < 0)
            return null;

        var o111 = (-o17 - Math.sqrt(o110)) / (2 * o16);
        var o114 = (-o17 + Math.sqrt(o110)) / (2 * o16);

        if (o111 <= o114 && ((o111 <= 1 && 1 <= o114) ||
                         (o111 <= 0 && 0 <= o114) ||
                         (0 <= o111 && o114 <= 1))) {
            // Pick a good "time" at which to report the collision.
            var o115;
            if (o111 <= 0) {
                // The collision started before this frame. Report it at the start of the frame.
                o115 = 0;
            } else {
                // The collision started during this frame. Report it at that moment.
                o115 = o111;
            }
            
            var o116 = o102.o117(o104.o54(o115));
            var o118 = o103.o117(o105.o54(o115));
            
            var o30 = o116.o117(o118).o54(0.5);
            if (o30.o119 >= o89.o90 &&
                o30.o119 <= o89.o92 &&
                o30.o120 >= o89.o91 &&
                o30.o120 <= o89.o93 &&
                o30.o121 >= o89.o94 &&
                o30.o121 <= o89.o95)
                return o30;
        }

        return null;
    }
    
    // the planes have the same speeds and are moving in parallel (or they are not moving at all)
    // they  thus have the same distance all the time ; we calculate it from the initial point
    
    // dist = || i2 - i1 || = sqrt(  ( i2 - i1 )^T * ( i2 - i1 ) )
    
    var o122 = o103.o101(o102).o123();
    if (o122 <= o106)
        return o102.o117(o103).o54(0.5);
    
    return null;
};

//red_black_tree.js

var o67 = (function(){
    function o124(o16, o17) {
        return o16.o59(o17);
    }
    
    function o125(o119) {
        while (o119.o126)
            o119 = o119.o126;
        return o119;
    }
    
    function o127(o119) {
        while (o119.o128)
            o119 = o119.o128;
        return o119;
    }
    
    function o129(key, value) {
        this.key = key;
        this.value = value;
        this.o126 = null;
        this.o128 = null;
        this.o131 = null;
        this.o132 = "red";
    }
    
    o129.prototype.o133 = function() {
        var o119 = this;
        if (o119.o128)
            return o125(o119.o128);
        var o120 = o119.o131;
        while (o120 && o119 == o120.o128) {
            o119 = o120;
            o120 = o120.o131;
        }
        return o120;
    };
    
    o129.prototype.o134 = function() {
        var o119 = this;
        if (o119.o126)
            return o127(o119.o126);
        var o120 = o119.o131;
        while (o120 && o119 == o120.o126) {
            o119 = o120;
            o120 = o120.o131;
        }
        return o120;
    };
    
    o129.prototype.toString = function() {
        return this.key + "=>" + this.value + " (" + this.o132 + ")";
    };
    
    function o67() {
        this.o135 = null;
    }
    
    o67.prototype.o72 = function(key, value) {
        var o136 = this.o137(key, value);
        if (!o136.o138)
            return o136.o139;
        var o119 = o136.o140;
        
        while (o119 != this.o135 && o119.o131.o132 == "red") {
            if (o119.o131 == o119.o131.o131.o126) {
                var o120 = o119.o131.o131.o128;
                if (o120 && o120.o132 == "red") {
                    // Case 1
                    o119.o131.o132 = "black";
                    o120.o132 = "black";
                    o119.o131.o131.o132 = "red";
                    o119 = o119.o131.o131;
                } else {
                    if (o119 == o119.o131.o128) {
                        // Case 2
                        o119 = o119.o131;
                        this.o141(o119);
                    }
                    // Case 3
                    o119.o131.o132 = "black";
                    o119.o131.o131.o132 = "red";
                    this.o142(o119.o131.o131);
                }
            } else {
                // Same as "then" clause with "right" and "left" exchanged.
                var o120 = o119.o131.o131.o126;
                if (o120 && o120.o132 == "red") {
                    // Case 1
                    o119.o131.o132 = "black";
                    o120.o132 = "black";
                    o119.o131.o131.o132 = "red";
                    o119 = o119.o131.o131;
                } else {
                    if (o119 == o119.o131.o126) {
                        // Case 2
                        o119 = o119.o131;
                        this.o142(o119);
                    }
                    // Case 3
                    o119.o131.o132 = "black";
                    o119.o131.o131.o132 = "red";
                    this.o141(o119.o131.o131);
                }
            }
        }
        
        this.o135.o132 = "black";
        return null;
    };
    
    o67.prototype.o79 = function(key) {
        var o121 = this.o143(key);
        if (!o121)
            return null;
        
        // Y is the node to be unlinked from the tree.
        var o120;
        if (!o121.o126 || !o121.o128)
            o120 = o121;
        else
            o120 = o121.o133();

        // Y is guaranteed to be non-null at this point.
        var o119;
        if (o120.o126)
            o119 = o120.o126;
        else
            o119 = o120.o128;
        
        // X is the child of y which might potentially replace y in the tree. X might be null at
        // this point.
        var o144;
        if (o119) {
            o119.o131 = o120.o131;
            o144 = o119.o131;
        } else
            o144 = o120.o131;
        if (!o120.o131)
            this.o135 = o119;
        else {
            if (o120 == o120.o131.o126)
                o120.o131.o126 = o119;
            else
                o120.o131.o128 = o119;
        }
        
        if (o120 != o121) {
            if (o120.o132 == "black")
                this.o145(o119, o144);
            
            o120.o131 = o121.o131;
            o120.o132 = o121.o132;
            o120.o126 = o121.o126;
            o120.o128 = o121.o128;
            
            if (o121.o126)
                o121.o126.o131 = o120;
            if (o121.o128)
                o121.o128.o131 = o120;
            if (o121.o131) {
                if (o121.o131.o126 == o121)
                    o121.o131.o126 = o120;
                else
                    o121.o131.o128 = o120;
            } else
                this.o135 = o120;
        } else if (o120.o132 == "black")
            this.o145(o119, o144);
        
        return o121.value;
    };
    
    o67.prototype.get = function(key) {
        var o146 = this.o143(key);
        if (!o146)
            return null;
        return o146.value;
    };
    
    o67.prototype.forEach = function(o147) {
        if (!this.o135)
            return;
        for (var o148 = o125(this.o135); o148; o148 = o148.o133())
            o147(o148.key, o148.value);
    };
    
    o67.prototype.o149 = function() {
        var o30 = [];
        this.forEach(function(key, value) {
            o30.push({key: key, value: value});
        });
        return o30;
    };
    
    o67.prototype.toString = function() {
        var o30 = "[";
        var o150 = true;
        this.forEach(function(key, value) {
            if (o150)
                o150 = false;
            else
                o30 += ", ";
            o30 += key + "=>" + value;
        });
        return o30 + "]";
    };
    
    o67.prototype.o143 = function(key) {
        for (var o148 = this.o135; o148;) {
            var o151 = o124(key, o148.key);
            if (!o151)
                return o148;
            if (o151 < 0)
                o148 = o148.o126;
            else
                o148 = o148.o128;
        }
        return null;
    };
    
    o67.prototype.o137 = function(key, value) {
        var o120 = null;
        var o119 = this.o135;
        while (o119) {
            o120 = o119;
            var o151 = key.o59(o119.key);
            if (o151 < 0)
                o119 = o119.o126;
            else if (o151 > 0)
                o119 = o119.o128;
            else {
                var o139 = o119.value;
                o119.value = value;
                return {o138:false, o139:o139};
            }
        }
        var o121 = new o129(key, value);
        o121.o131 = o120;
        if (!o120)
            this.o135 = o121;
        else {
            if (key.o59(o120.key) < 0)
                o120.o126 = o121;
            else
                o120.o128 = o121;
        }
        return {o138:true, o140:o121};
    };
    
    o67.prototype.o141 = function(o119) {
        var o120 = o119.o128;
        
        // Turn y's left subtree into x's right subtree.
        o119.o128 = o120.o126;
        if (o120.o126)
            o120.o126.o131 = o119;
        
        // Link x's parent to y.
        o120.o131 = o119.o131;
        if (!o119.o131)
            this.o135 = o120;
        else {
            if (o119 == o119.o131.o126)
                o119.o131.o126 = o120;
            else
                o119.o131.o128 = o120;
        }
        
        // Put x on y's left.
        o120.o126 = o119;
        o119.o131 = o120;
        
        return o120;
    };
    
    o67.prototype.o142 = function(o120) {
        var o119 = o120.o126;
        
        // Turn x's right subtree into y's left subtree.
        o120.o126 = o119.o128;
        if (o119.o128)
            o119.o128.o131 = o120;
        
        // Link y's parent to x;
        o119.o131 = o120.o131;
        if (!o120.o131)
            this.o135 = o119;
        else {
            if (o120 == o120.o131.o126)
                o120.o131.o126 = o119;
            else
                o120.o131.o128 = o119;
        }
        
        o119.o128 = o120;
        o120.o131 = o119;
        
        return o119;
    };
    
    o67.prototype.o145 = function(o119, o144) {
        while (o119 != this.o135 && (!o119 || o119.o132 == "black")) {
            if (o119 == o144.o126) {
                // Note: the text points out that w cannot be null. The reason is not obvious from
                // simply looking at the code; it comes about from the properties of the red-black
                // tree.
                var o152 = o144.o128;
                if (o152.o132 == "red") {
                    // Case 1
                    o152.o132 = "black";
                    o144.o132 = "red";
                    this.o141(o144);
                    o152 = o144.o128;
                }
                if ((!o152.o126 || o152.o126.o132 == "black")
                    && (!o152.o128 || o152.o128.o132 == "black")) {
                    // Case 2
                    o152.o132 = "red";
                    o119 = o144;
                    o144 = o119.o131;
                } else {
                    if (!o152.o128 || o152.o128.o132 == "black") {
                        // Case 3
                        o152.o126.o132 = "black";
                        o152.o132 = "red";
                        this.o142(o152);
                        o152 = o144.o128;
                    }
                    // Case 4
                    o152.o132 = o144.o132;
                    o144.o132 = "black";
                    if (o152.o128)
                        o152.o128.o132 = "black";
                    this.o141(o144);
                    o119 = this.o135;
                    o144 = o119.o131;
                }
            } else {
                // Same as "then" clause with "right" and "left" exchanged.
                
                var o152 = o144.o126;
                if (o152.o132 == "red") {
                    // Case 1
                    o152.o132 = "black";
                    o144.o132 = "red";
                    this.o142(o144);
                    o152 = o144.o126;
                }
                if ((!o152.o128 || o152.o128.o132 == "black")
                    && (!o152.o126 || o152.o126.o132 == "black")) {
                    // Case 2
                    o152.o132 = "red";
                    o119 = o144;
                    o144 = o119.o131;
                } else {
                    if (!o152.o126 || o152.o126.o132 == "black") {
                        // Case 3
                        o152.o128.o132 = "black";
                        o152.o132 = "red";
                        this.o141(o152);
                        o152 = o144.o126;
                    }
                    // Case 4
                    o152.o132 = o144.o132;
                    o144.o132 = "black";
                    if (o152.o126)
                        o152.o126.o132 = "black";
                    this.o142(o144);
                    o119 = this.o135;
                    o144 = o119.o131;
                }
            }
        }
        if (o119)
            o119.o132 = "black";
    };
    
    return o67;
})();

//reduce_collision_set.js

var o153 = (function() {
    var o154 = o89.o97;
    var o155 = new o156(o154, 0);
    var o157 = new o156(0, o154);
    
    function o158(o65) {
        var o159 = (o65.o119 / o154) | 0;
        var o160 = (o65.o120 / o154) | 0;
        
        var o30 = new o156();
        o30.o119 = o154 * o159;
        o30.o120 = o154 * o160;
        
        if (o65.o119 < 0)
            o30.o119 -= o154;
        if (o65.o120 < 0)
            o30.o120 -= o154;
        
        return o30;
    }
    
    return function(o161, o162) {
        var o70 = new o67();
        
        function o163(o164) {
            var o165 = o161.get(o164);
            if (!o165)
                o161.o72(o164, o165 = []);
            o165.push(o162);
        }
        
        function o166(o164) {
            if (o164.o119 > o89.o92 ||
                o164.o119 < o89.o90 ||
                o164.o120 > o89.o93 ||
                o164.o120 < o89.o91)
                return false;
            
            var o167 = o162.o98;
            var o168 = o162.o99;
            
            var o169 = o154;
            var o170 = o89.o96 / 2;
            
            var o171 = o164.o119;
            var o172 = o167.o119;
            var o173 = o168.o119 - o167.o119;
            
            var o174 = o164.o120;
            var o175 = o167.o120;
            var o176 = o168.o120 - o167.o120;
            
            var o177, o178;
            o177 = (o171 - o170 - o172) / o173;
            o178 = (o171 + o169 + o170 - o172) / o173;
            
            if (o173 < 0) {
                var o179 = o177;
                o177 = o178;
                o178 = o179;
            }
            
            var o180, o181;
            o180 = (o174 - o170 - o175) / o176;
            o181 = (o174 + o169 + o170 - o175) / o176;
            
            if (o176 < 0) {
                var o179 = o180;
                o180 = o181;
                o181 = o179;
            }
            
            if (false) {
                print("v_x = " + o171 + ", x0 = " + o172 + ", xv = " + o173 + ", v_y = " + o174 + ", y0 = " + o175 + ", yv = " + o176 + ", low_x = " + o177 + ", low_y = " + o180 + ", high_x = " + o178 + ", high_y = " + o181);
            }
            
            return (((o173 == 0 && o171 <= o172 + o170 && o172 - o170 <= o171 + o169) /* no motion in x */ || 
                     ((o177 <= 1 && 1 <= o178) || (o177 <= 0 && 0 <= o178) ||
                      (0 <= o177 && o178 <= 1))) && 
                    ((o176 == 0 && o174 <= o175 + o170 && o175 - o170 <= o174 + o169) /* no motion in y */ || 
                     ((o180 <= 1 && 1 <= o181) || (o180 <= 0 && 0 <= o181) ||
                      (0 <= o180 && o181 <= 1))) && 
                    (o173 == 0 || o176 == 0 || /* no motion in x or y or both */
                     (o180 <= o178 && o178 <= o181) ||
                     (o180 <= o177 && o177 <= o181) ||
                     (o177 <= o180 && o181 <= o178)));
        }
        
        function o182(o183) {
            if (!o166(o183, o162))
                return;
            if (o70.o72(o183, true))
                return;
            
            o163(o183);
            
            o182(o183.o101(o155));
            o182(o183.o117(o155));
            o182(o183.o101(o157));
            o182(o183.o117(o157));
            o182(o183.o101(o155).o101(o157));
            o182(o183.o101(o155).o117(o157));
            o182(o183.o117(o155).o101(o157));
            o182(o183.o117(o155).o117(o157));
        }
        
        o182(o158(o162.o98));
    };
})();

function o81(o69) {
    var o161 = new o67();
    for (var o29 = 0; o29 < o69.length; ++o29)
        o153(o161, o69[o29]);
        
    var o30 = [];
    o161.forEach(function(key, value) {
        if (value.length > 1)
            o30.push(value);
    });
    return o30;
}


//simulator.js

function o39(o35) {
    this.o184 = [];
    for (var o29 = 0; o29 < o35; ++o29)
        this.o184.push(new o55("foo" + o29));
}

o39.prototype.o47 = function(o44) {
    var o68 = [];
    for (var o29 = 0; o29 < this.o184.length; o29 += 2) {
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
    this.o119 = o119;
    this.o120 = o120;
}

o156.prototype.o117 = function(o60) {
    return new o156(this.o119 + o60.o119,
                        this.o120 + o60.o120);
};

o156.prototype.o101 = function(o60) {
    return new o156(this.o119 - o60.o119,
                        this.o120 - o60.o120);
};

o156.prototype.toString = function() {
    return "[" + this.o119 + ", " + this.o120 + "]";
};

o156.prototype.o59 = function(o60) {
    var o30 = o15(this.o119, o60.o119);
    if (o30)
        return o30;
    return o15(this.o120, o60.o120);
};

//vector_3d.js

function o185(o119, o120, o121) {
    this.o119 = o119;
    this.o120 = o120;
    this.o121 = o121;
}

o185.prototype.o117 = function(o60) {
    return new o185(this.o119 + o60.o119,
                        this.o120 + o60.o120,
                        this.o121 + o60.o121);
};

o185.prototype.o101 = function(o60) {
    return new o185(this.o119 - o60.o119,
                        this.o120 - o60.o120,
                        this.o121 - o60.o121);
};

o185.prototype.o108 = function(o60) {
    return this.o119 * o60.o119 + this.o120 * o60.o120 + this.o121 * o60.o121;
};

o185.prototype.o107 = function() {
    return this.o108(this);
};

o185.prototype.o123 = function() {
    return Math.sqrt(this.o107());
};

o185.prototype.o54 = function(o188) {
    return new o185(this.o119 * o188,
                        this.o120 * o188,
                        this.o121 * o188);
};

o185.prototype.o189 = function() {
    return new o156(this.o119, this.o120);
};

o185.prototype.toString = function() {
    return "[" + this.o119 + ", " + this.o120 + ", " + this.o121 + "]";
};

//Run the benchmark
var o30 = o33();

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////
o13.o14.o11(o30);