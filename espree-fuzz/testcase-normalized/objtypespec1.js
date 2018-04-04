//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = {};
    o1.o2 = { o3: o1.o2, o2: 1 };
    o1.length = 1;
    o5.o6("obj0.prop1 = " + (o1.o2 | 0)); ;
    o5.o6("obj0.length = " + (o1.length | 0)); ;
};

// generate profile
o0();

// run JITted code
o0();

function o7() {
    var o1 = {};
    var o8 = {};
    var o9 = function (o10, o11) {
        var o12 = 0;
        do {
            o12++;
        } while (((Math.o14((--o8.o2)) ^ (this.o3 /= 1))) && o12 < 3)
    }
    o8.o15 = o9;
    for (var o16 = 0; o1.o17 < (o8.o15(1)) && o16 < 3; o1.o17++ + o16++) {
    }
};

// generate profile
o7();

// run JITted code
o7();

function o18() {
        for (o19 = 0; o19 < 0; ++o19) {
                (-3 / 0+1);
        }; ;
};
o18();
o18();

// Test interaction with int type spec
function o20() {
    var o21 = {};
    try {
        o21 = o22;
    } catch (o23) {};
    o22 = NaN;
    (function () {
        (o21.o25 %= Math.o14(o21));
    })();
};

o20();
o20();

// Test case where the type reference is hoisted, but the type is not live on the back edge.
function o26(){
  var o8 = {};
  this.o27 = 2147483647;
  this.o28 = 1;
  Object.prototype.o2 = 1;
  Object.prototype.o28 = 1;
  for (var o31 = 0; o31 < 3 && o8.o2 < ((-- this.o27)); o31++ + o8.o2++) {
    var o32 = 0;
    while ((this.o28) && o32 < 3) {
      o32++;
      o8.o3 = this.o27;
    }
    delete this.o28;
  }
  o5.o6("obj1.prop0 = " + (o8.o3|0));
};

// generate profile
o26();

// run JITted code
o26();

// Test case where a ToVar is inserted and its effect must be reflected.
function o33(){
    var o1 = {};
    o1.o3 = 1;
    Math.floor(1);
    var o35 = 0;
    do {
        o1.o3;
        o1 = 1;
        o1.o3;
        o35++;
    } while (o35 < 3)
}
o33();
o33();
