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



////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////

if (typeof (o1) === "undefined") {
    var o1 = {
        o2: print
    }
}

var print = function () {};

var o3 = o3 || {};
o3.o4 = (function() {
  return o3.o4       ||
         o3.o5    ||
         o3.o6     ||
         o3.o7      ||
         o3.o8 ||
         Date.o4;
})();

function o9(o10) {
    o1.o2("### SCORE: " + (100 * o0 / o10));
}

var o11 = {};
o11.o12 = {
    o9: o9
};

////////////////////////////////////////////////////////////////////////////////
// util.js
////////////////////////////////////////////////////////////////////////////////

function o13(o14, o15) {
    if (o14 == o15)
        return 0;
    if (o14 < o15)
        return -1;
    if (o14 > o15)
        return 1;
    
    // We say that NaN is smaller than non-NaN.
    if (o14 == o14)
        return 1;
    return -1;
}

function o16(o17, o18) {
    // Don't change the original array.
    o17 = o17.slice();
    
    // Sort in ascending order.
    o17.sort(function(o14, o15) { return o14 - o15; });
    
    // Now the elements we want are at the end. Keep removing them until the array size shrinks too much.
    // Examples assuming percentile = 99:
    //
    // - numbers.length starts at 100: we will remove just the worst entry and then not remove anymore,
    //   since then numbers.length / originalLength = 0.99.
    //
    // - numbers.length starts at 1000: we will remove the ten worst.
    //
    // - numbers.length starts at 10: we will remove just the worst.
    var o19 = [];
    var o20 = o17.length;
    while (o17.length / o20 > o18 / 100)
        o19.push(o17.pop());
    
    var o21 = 0;
    for (var o22 = 0; o22 < o19.length; ++o22)
        o21 += o19[o22];
    
    var o23 = o21 / o19.length;
    
    // Do a sanity check.
    if (o17.length && o23 < o17[o17.length - 1]) {
        throw "Sanity check fail: the worst case result is " + o23 +
            " but we didn't take into account " + o17;
    }
    
    return o23;
}

var o24;
if (this.o3 && o3.o4)
    o24 = function() { return o3.o4() };
else if (o25)
    o24 = function() { return o25() * 1000; };
else
    o24 = function() { return 0 + new Date(); };

//benchmark.js

function o26() {
    var o27 = 0;
    var o28 = 1000;
    var o29 = 200;
    var o30 = 14484;
    var o18 = 95;

    var o31 = new o32(o28);
    var o33 = new o34();
    var o35 = o24();
    var o36 = [];
    for (var o22 = 0; o22 < o29; ++o22) {
        var o37 = o22 / 10;
        
        var o38 = o33.o39(o31.o40(o37));
        
        var o41 = o35;
        var o42 = o24();
        o35 = o42;
        var o23 = {
            o37: o42 - o41,
            o43: o38.length
        };
        if (o27 >= 2)
            o23.o38 = o38;
        o36.push(o23);
    }

    if (o27 >= 1) {
        for (var o22 = 0; o22 < o36.length; ++o22) {
            var o44 = "Frame " + o22 + ": " + o36[o22].o37 + " ms.";
            if (o36[o22].o43)
                o44 += " (" + o36[o22].o43 + " collisions.)";
            print(o44);
            if (o27 >= 2 && o36[o22].o38.length)
                print("    Collisions: " + o36[o22].o38);
        }
    }

    // Check results.
    var o45 = 0;
    for (var o22 = 0; o22 < o36.length; ++o22)
        o45 += o36[o22].o43;
    if (o45 != o30) {
        throw new Error("Bad number of collisions: " + o45 + " (expected " +
                        o30 + ")");
    }

    // Find the worst 5% 
    var o46 = [];
    for (var o22 = 0; o22 < o36.length; ++o22)
        o46.push(o36[o22].o37);
    
    return o16(o46, o18);
}

//call_sign.js

function o47(value) {
    this.o48 = value;
}

o47.prototype.o49 = function(o50) {
    return this.o48.localeCompare(o50.o48);
}

o47.prototype.toString = function() {
    return this.o48;
}

//collision.js

function o51(o52, o53) {
    this.o52 = o52;
    this.o53 = o53;
}

o51.prototype.toString = function() {
    return "Collision(" + this.o52 + " at " + this.o53 + ")";
};

//collision_detector.js

function o34() {
    this.o54 = new o55();
}

o34.prototype.o39 = function(o56) {
    var o57 = [];
    var o58 = new o55();
    
    for (var o22 = 0; o22 < o56.length; ++o22) {
        var o52 = o56[o22];
        
        var o59 = this.o54.o60(o52.o61, o52.o53);
        var o62 = o52.o53;
        o58.o60(o52.o61, true);
        
        if (!o59) {
            // Treat newly introduced aircraft as if they were stationary.
            o59 = o62;
        }
        
        o57.push(new o63(o52.o61, o59, o62));
    }
    
    // Remove aircraft that are no longer present.
    var o64 = [];
    this.o54.forEach(function(o61, o53) {
        if (!o58.get(o61))
            o64.push(o61);
    });
    for (var o22 = 0; o22 < o64.length; ++o22)
        this.o54.o65(o64[o22]);
    
    var o66 = o67(o57);
    var o38 = [];
    for (var o68 = 0; o68 < o66.length; ++o68) {
        var o69 = o66[o68];
        for (var o22 = 0; o22 < o69.length; ++o22) {
            var o70 = o69[o22];
            for (var o71 = o22 + 1; o71 < o69.length; ++o71) {
                var o72 = o69[o71];
                var o73 = o70.o74(o72);
                if (o73)
                    o38.push(new o51([o70.o61, o72.o61], o73));
            }
        }
    }
    
    return o38;
};

//constants.js

var o75 = {};
o75.o76 = 0;
o75.o77 = 0;
o75.o78 = 1000;
o75.o79 = 1000;
o75.o80 = 0;
o75.o81 = 10;
o75.o82 = 1;
o75.o83 = o75.o82 * 2;

//motion.js

function o63(o61, o84, o85) {
    this.o61 = o61;
    this.o84 = o84;
    this.o85 = o85;
}

o63.prototype.toString = function() {
    return "Motion(" + this.o61 + " from " + this.o84 + " to " + this.o85 + ")";
};

o63.prototype.o86 = function() {
    return this.o85.o87(this.o84);
};

o63.prototype.o74 = function(o50) {
    var o88 = this.o84;
    var o89 = o50.o84;
    var o90 = this.o86();
    var o91 = o50.o86();
    var o92 = o75.o82;
    
    // this test is not geometrical 3-d intersection test, it takes the fact that the aircraft move
    // into account ; so it is more like a 4d test
    // (it assumes that both of the aircraft have a constant speed over the tested interval)
    
    // we thus have two points, each of them moving on its line segment at constant speed ; we are looking
    // for times when the distance between these two points is smaller than r 
    
    // vec1 is vector of aircraft 1
    // vec2 is vector of aircraft 2
    
    // a = (V2 - V1)^T * (V2 - V1)
    var o14 = o91.o87(o90).o93();
    
    if (o14 != 0) {
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

        var o15 = 2 * o88.o87(o89).o94(o90.o87(o91));

        // c = -r^2 + (I2 - I1)^T * (I2 - I1)
        var o95 = -o92 * o92 + o89.o87(o88).o93();

        var o96 = o15 * o15 - 4 * o14 * o95;
        if (o96 < 0)
            return null;

        var o97 = (-o15 - Math.sqrt(o96)) / (2 * o14);
        var o98 = (-o15 + Math.sqrt(o96)) / (2 * o14);

        if (o97 <= o98 && ((o97 <= 1 && 1 <= o98) ||
                         (o97 <= 0 && 0 <= o98) ||
                         (0 <= o97 && o98 <= 1))) {
            // Pick a good "time" at which to report the collision.
            var o99;
            if (o97 <= 0) {
                // The collision started before this frame. Report it at the start of the frame.
                o99 = 0;
            } else {
                // The collision started during this frame. Report it at that moment.
                o99 = o97;
            }
            
            var o100 = o88.o101(o90.o46(o99));
            var o102 = o89.o101(o91.o46(o99));
            
            var o23 = o100.o101(o102).o46(0.5);
            if (o23.o103 >= o75.o76 &&
                o23.o103 <= o75.o78 &&
                o23.o104 >= o75.o77 &&
                o23.o104 <= o75.o79 &&
                o23.o105 >= o75.o80 &&
                o23.o105 <= o75.o81)
                return o23;
        }

        return null;
    }
    
    // the planes have the same speeds and are moving in parallel (or they are not moving at all)
    // they  thus have the same distance all the time ; we calculate it from the initial point
    
    // dist = || i2 - i1 || = sqrt(  ( i2 - i1 )^T * ( i2 - i1 ) )
    
    var o106 = o89.o87(o88).o107();
    if (o106 <= o92)
        return o88.o101(o89).o46(0.5);
    
    return null;
};

//red_black_tree.js

var o55 = (function(){
    function o108(o14, o15) {
        return o14.o49(o15);
    }
    
    function o109(o103) {
        while (o103.o110)
            o103 = o103.o110;
        return o103;
    }
    
    function o111(o103) {
        while (o103.o112)
            o103 = o103.o112;
        return o103;
    }
    
    function o113(key, value) {
        this.key = key;
        this.value = value;
        this.o110 = null;
        this.o112 = null;
        this.o114 = null;
        this.o115 = "red";
    }
    
    o113.prototype.o116 = function() {
        var o103 = this;
        if (o103.o112)
            return o109(o103.o112);
        var o104 = o103.o114;
        while (o104 && o103 == o104.o112) {
            o103 = o104;
            o104 = o104.o114;
        }
        return o104;
    };
    
    o113.prototype.o117 = function() {
        var o103 = this;
        if (o103.o110)
            return o111(o103.o110);
        var o104 = o103.o114;
        while (o104 && o103 == o104.o110) {
            o103 = o104;
            o104 = o104.o114;
        }
        return o104;
    };
    
    o113.prototype.toString = function() {
        return this.key + "=>" + this.value + " (" + this.o115 + ")";
    };
    
    function o55() {
        this.o118 = null;
    }
    
    o55.prototype.o60 = function(key, value) {
        var o119 = this.o120(key, value);
        if (!o119.o121)
            return o119.o122;
        var o103 = o119.o123;
        
        while (o103 != this.o118 && o103.o114.o115 == "red") {
            if (o103.o114 == o103.o114.o114.o110) {
                var o104 = o103.o114.o114.o112;
                if (o104 && o104.o115 == "red") {
                    // Case 1
                    o103.o114.o115 = "black";
                    o104.o115 = "black";
                    o103.o114.o114.o115 = "red";
                    o103 = o103.o114.o114;
                } else {
                    if (o103 == o103.o114.o112) {
                        // Case 2
                        o103 = o103.o114;
                        this.o124(o103);
                    }
                    // Case 3
                    o103.o114.o115 = "black";
                    o103.o114.o114.o115 = "red";
                    this.o125(o103.o114.o114);
                }
            } else {
                // Same as "then" clause with "right" and "left" exchanged.
                var o104 = o103.o114.o114.o110;
                if (o104 && o104.o115 == "red") {
                    // Case 1
                    o103.o114.o115 = "black";
                    o104.o115 = "black";
                    o103.o114.o114.o115 = "red";
                    o103 = o103.o114.o114;
                } else {
                    if (o103 == o103.o114.o110) {
                        // Case 2
                        o103 = o103.o114;
                        this.o125(o103);
                    }
                    // Case 3
                    o103.o114.o115 = "black";
                    o103.o114.o114.o115 = "red";
                    this.o124(o103.o114.o114);
                }
            }
        }
        
        this.o118.o115 = "black";
        return null;
    };
    
    o55.prototype.o65 = function(key) {
        var o105 = this.o126(key);
        if (!o105)
            return null;
        
        // Y is the node to be unlinked from the tree.
        var o104;
        if (!o105.o110 || !o105.o112)
            o104 = o105;
        else
            o104 = o105.o116();

        // Y is guaranteed to be non-null at this point.
        var o103;
        if (o104.o110)
            o103 = o104.o110;
        else
            o103 = o104.o112;
        
        // X is the child of y which might potentially replace y in the tree. X might be null at
        // this point.
        var o127;
        if (o103) {
            o103.o114 = o104.o114;
            o127 = o103.o114;
        } else
            o127 = o104.o114;
        if (!o104.o114)
            this.o118 = o103;
        else {
            if (o104 == o104.o114.o110)
                o104.o114.o110 = o103;
            else
                o104.o114.o112 = o103;
        }
        
        if (o104 != o105) {
            if (o104.o115 == "black")
                this.o128(o103, o127);
            
            o104.o114 = o105.o114;
            o104.o115 = o105.o115;
            o104.o110 = o105.o110;
            o104.o112 = o105.o112;
            
            if (o105.o110)
                o105.o110.o114 = o104;
            if (o105.o112)
                o105.o112.o114 = o104;
            if (o105.o114) {
                if (o105.o114.o110 == o105)
                    o105.o114.o110 = o104;
                else
                    o105.o114.o112 = o104;
            } else
                this.o118 = o104;
        } else if (o104.o115 == "black")
            this.o128(o103, o127);
        
        return o105.value;
    };
    
    o55.prototype.get = function(key) {
        var o129 = this.o126(key);
        if (!o129)
            return null;
        return o129.value;
    };
    
    o55.prototype.forEach = function(o130) {
        if (!this.o118)
            return;
        for (var o131 = o109(this.o118); o131; o131 = o131.o116())
            o130(o131.key, o131.value);
    };
    
    o55.prototype.o132 = function() {
        var o23 = [];
        this.forEach(function(key, value) {
            o23.push({key: key, value: value});
        });
        return o23;
    };
    
    o55.prototype.toString = function() {
        var o23 = "[";
        var o133 = true;
        this.forEach(function(key, value) {
            if (o133)
                o133 = false;
            else
                o23 += ", ";
            o23 += key + "=>" + value;
        });
        return o23 + "]";
    };
    
    o55.prototype.o126 = function(key) {
        for (var o131 = this.o118; o131;) {
            var o134 = o108(key, o131.key);
            if (!o134)
                return o131;
            if (o134 < 0)
                o131 = o131.o110;
            else
                o131 = o131.o112;
        }
        return null;
    };
    
    o55.prototype.o120 = function(key, value) {
        var o104 = null;
        var o103 = this.o118;
        while (o103) {
            o104 = o103;
            var o134 = key.o49(o103.key);
            if (o134 < 0)
                o103 = o103.o110;
            else if (o134 > 0)
                o103 = o103.o112;
            else {
                var o122 = o103.value;
                o103.value = value;
                return {o121:false, o122:o122};
            }
        }
        var o105 = new o113(key, value);
        o105.o114 = o104;
        if (!o104)
            this.o118 = o105;
        else {
            if (key.o49(o104.key) < 0)
                o104.o110 = o105;
            else
                o104.o112 = o105;
        }
        return {o121:true, o123:o105};
    };
    
    o55.prototype.o124 = function(o103) {
        var o104 = o103.o112;
        
        // Turn y's left subtree into x's right subtree.
        o103.o112 = o104.o110;
        if (o104.o110)
            o104.o110.o114 = o103;
        
        // Link x's parent to y.
        o104.o114 = o103.o114;
        if (!o103.o114)
            this.o118 = o104;
        else {
            if (o103 == o103.o114.o110)
                o103.o114.o110 = o104;
            else
                o103.o114.o112 = o104;
        }
        
        // Put x on y's left.
        o104.o110 = o103;
        o103.o114 = o104;
        
        return o104;
    };
    
    o55.prototype.o125 = function(o104) {
        var o103 = o104.o110;
        
        // Turn x's right subtree into y's left subtree.
        o104.o110 = o103.o112;
        if (o103.o112)
            o103.o112.o114 = o104;
        
        // Link y's parent to x;
        o103.o114 = o104.o114;
        if (!o104.o114)
            this.o118 = o103;
        else {
            if (o104 == o104.o114.o110)
                o104.o114.o110 = o103;
            else
                o104.o114.o112 = o103;
        }
        
        o103.o112 = o104;
        o104.o114 = o103;
        
        return o103;
    };
    
    o55.prototype.o128 = function(o103, o127) {
        while (o103 != this.o118 && (!o103 || o103.o115 == "black")) {
            if (o103 == o127.o110) {
                // Note: the text points out that w cannot be null. The reason is not obvious from
                // simply looking at the code; it comes about from the properties of the red-black
                // tree.
                var o135 = o127.o112;
                if (o135.o115 == "red") {
                    // Case 1
                    o135.o115 = "black";
                    o127.o115 = "red";
                    this.o124(o127);
                    o135 = o127.o112;
                }
                if ((!o135.o110 || o135.o110.o115 == "black")
                    && (!o135.o112 || o135.o112.o115 == "black")) {
                    // Case 2
                    o135.o115 = "red";
                    o103 = o127;
                    o127 = o103.o114;
                } else {
                    if (!o135.o112 || o135.o112.o115 == "black") {
                        // Case 3
                        o135.o110.o115 = "black";
                        o135.o115 = "red";
                        this.o125(o135);
                        o135 = o127.o112;
                    }
                    // Case 4
                    o135.o115 = o127.o115;
                    o127.o115 = "black";
                    if (o135.o112)
                        o135.o112.o115 = "black";
                    this.o124(o127);
                    o103 = this.o118;
                    o127 = o103.o114;
                }
            } else {
                // Same as "then" clause with "right" and "left" exchanged.
                
                var o135 = o127.o110;
                if (o135.o115 == "red") {
                    // Case 1
                    o135.o115 = "black";
                    o127.o115 = "red";
                    this.o125(o127);
                    o135 = o127.o110;
                }
                if ((!o135.o112 || o135.o112.o115 == "black")
                    && (!o135.o110 || o135.o110.o115 == "black")) {
                    // Case 2
                    o135.o115 = "red";
                    o103 = o127;
                    o127 = o103.o114;
                } else {
                    if (!o135.o110 || o135.o110.o115 == "black") {
                        // Case 3
                        o135.o112.o115 = "black";
                        o135.o115 = "red";
                        this.o124(o135);
                        o135 = o127.o110;
                    }
                    // Case 4
                    o135.o115 = o127.o115;
                    o127.o115 = "black";
                    if (o135.o110)
                        o135.o110.o115 = "black";
                    this.o125(o127);
                    o103 = this.o118;
                    o127 = o103.o114;
                }
            }
        }
        if (o103)
            o103.o115 = "black";
    };
    
    return o55;
})();

//reduce_collision_set.js

var o136 = (function() {
    var o137 = o75.o83;
    var o138 = new o139(o137, 0);
    var o140 = new o139(0, o137);
    
    function o141(o53) {
        var o142 = (o53.o103 / o137) | 0;
        var o143 = (o53.o104 / o137) | 0;
        
        var o23 = new o139();
        o23.o103 = o137 * o142;
        o23.o104 = o137 * o143;
        
        if (o53.o103 < 0)
            o23.o103 -= o137;
        if (o53.o104 < 0)
            o23.o104 -= o137;
        
        return o23;
    }
    
    return function(o144, o145) {
        var o58 = new o55();
        
        function o146(o147) {
            var o148 = o144.get(o147);
            if (!o148)
                o144.o60(o147, o148 = []);
            o148.push(o145);
        }
        
        function o149(o147) {
            if (o147.o103 > o75.o78 ||
                o147.o103 < o75.o76 ||
                o147.o104 > o75.o79 ||
                o147.o104 < o75.o77)
                return false;
            
            var o150 = o145.o84;
            var o151 = o145.o85;
            
            var o152 = o137;
            var o153 = o75.o82 / 2;
            
            var o154 = o147.o103;
            var o155 = o150.o103;
            var o156 = o151.o103 - o150.o103;
            
            var o157 = o147.o104;
            var o158 = o150.o104;
            var o159 = o151.o104 - o150.o104;
            
            var o160, o161;
            o160 = (o154 - o153 - o155) / o156;
            o161 = (o154 + o152 + o153 - o155) / o156;
            
            if (o156 < 0) {
                var o162 = o160;
                o160 = o161;
                o161 = o162;
            }
            
            var o163, o164;
            o163 = (o157 - o153 - o158) / o159;
            o164 = (o157 + o152 + o153 - o158) / o159;
            
            if (o159 < 0) {
                var o162 = o163;
                o163 = o164;
                o164 = o162;
            }
            
            if (false) {
                print("v_x = " + o154 + ", x0 = " + o155 + ", xv = " + o156 + ", v_y = " + o157 + ", y0 = " + o158 + ", yv = " + o159 + ", low_x = " + o160 + ", low_y = " + o163 + ", high_x = " + o161 + ", high_y = " + o164);
            }
            
            return (((o156 == 0 && o154 <= o155 + o153 && o155 - o153 <= o154 + o152) /* no motion in x */ || 
                     ((o160 <= 1 && 1 <= o161) || (o160 <= 0 && 0 <= o161) ||
                      (0 <= o160 && o161 <= 1))) && 
                    ((o159 == 0 && o157 <= o158 + o153 && o158 - o153 <= o157 + o152) /* no motion in y */ || 
                     ((o163 <= 1 && 1 <= o164) || (o163 <= 0 && 0 <= o164) ||
                      (0 <= o163 && o164 <= 1))) && 
                    (o156 == 0 || o159 == 0 || /* no motion in x or y or both */
                     (o163 <= o161 && o161 <= o164) ||
                     (o163 <= o160 && o160 <= o164) ||
                     (o160 <= o163 && o164 <= o161)));
        }
        
        function o165(o166) {
            if (!o149(o166, o145))
                return;
            if (o58.o60(o166, true))
                return;
            
            o146(o166);
            
            o165(o166.o87(o138));
            o165(o166.o101(o138));
            o165(o166.o87(o140));
            o165(o166.o101(o140));
            o165(o166.o87(o138).o87(o140));
            o165(o166.o87(o138).o101(o140));
            o165(o166.o101(o138).o87(o140));
            o165(o166.o101(o138).o101(o140));
        }
        
        o165(o141(o145.o84));
    };
})();

function o67(o57) {
    var o144 = new o55();
    for (var o22 = 0; o22 < o57.length; ++o22)
        o136(o144, o57[o22]);
        
    var o23 = [];
    o144.forEach(function(key, value) {
        if (value.length > 1)
            o23.push(value);
    });
    return o23;
}


//simulator.js

function o32(o28) {
    this.o167 = [];
    for (var o22 = 0; o22 < o28; ++o22)
        this.o167.push(new o47("foo" + o22));
}

o32.prototype.o40 = function(o37) {
    var o56 = [];
    for (var o22 = 0; o22 < this.o167.length; o22 += 2) {
        o56.push({
            o61: this.o167[o22],
            o53: new o168(o37, Math.cos(o37) * 2 + o22 * 3, 10)
        });
        o56.push({
            o61: this.o167[o22 + 1],
            o53: new o168(o37, Math.sin(o37) * 2 + o22 * 3, 10)
        });
    }
    return o56;
};

//vector_2d.js

function o139(o103, o104) {
    this.o103 = o103;
    this.o104 = o104;
}

o139.prototype.o101 = function(o50) {
    return new o139(this.o103 + o50.o103,
                        this.o104 + o50.o104);
};

o139.prototype.o87 = function(o50) {
    return new o139(this.o103 - o50.o103,
                        this.o104 - o50.o104);
};

o139.prototype.toString = function() {
    return "[" + this.o103 + ", " + this.o104 + "]";
};

o139.prototype.o49 = function(o50) {
    var o23 = o13(this.o103, o50.o103);
    if (o23)
        return o23;
    return o13(this.o104, o50.o104);
};

//vector_3d.js

function o168(o103, o104, o105) {
    this.o103 = o103;
    this.o104 = o104;
    this.o105 = o105;
}

o168.prototype.o101 = function(o50) {
    return new o168(this.o103 + o50.o103,
                        this.o104 + o50.o104,
                        this.o105 + o50.o105);
};

o168.prototype.o87 = function(o50) {
    return new o168(this.o103 - o50.o103,
                        this.o104 - o50.o104,
                        this.o105 - o50.o105);
};

o168.prototype.o94 = function(o50) {
    return this.o103 * o50.o103 + this.o104 * o50.o104 + this.o105 * o50.o105;
};

o168.prototype.o93 = function() {
    return this.o94(this);
};

o168.prototype.o107 = function() {
    return Math.sqrt(this.o93());
};

o168.prototype.o46 = function(o169) {
    return new o168(this.o103 * o169,
                        this.o104 * o169,
                        this.o105 * o169);
};

o168.prototype.o170 = function() {
    return new o139(this.o103, this.o104);
};

o168.prototype.toString = function() {
    return "[" + this.o103 + ", " + this.o104 + ", " + this.o105 + "]";
};

//Run the benchmark
var o23 = o26();

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////
o11.o12.o9(o23);