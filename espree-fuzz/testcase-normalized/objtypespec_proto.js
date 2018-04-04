//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Cases related to type hard-coding and the prototype chain.

function print(o1) { o2.o3(o1 + ''); }

// Set up a property x near the end of the prototype chain.

Function.prototype.o1 = 'Function.x';
function o6() { }

// Test1: Add a new, nearer x after accessing the more distant x.

function o7(o8) {
    var o9 = o8.o9;
    var o1 = o8.o1;
    print(o8.o1);
}

function o10(o8) {
    o11.prototype.o1 = 'new x';
}

function o11() { }
o11.prototype = o6;
o11.prototype.o9 = 'y';
var o12 = new o11();

o7(o12);
o7(o12);
o10(o12);
o7(o12);

// Test2: Access a nearer x, then delete it so that we access the more distant one.

function o13(o8) {
    var o9 = o8.o9;
    var o1 = o8.o1;
    print(o8.o1);
}

function o14(o8) {
    delete o15.prototype.o1;
}

function o15() { }
o15.prototype = o6;
o15.prototype.o1 = 'x';
o15.prototype.o9 = 'y';
var o16 = new o15();

o13(o16);
o13(o16);
o14(o16);
o13(o16);

// Test3: Access x in the proto chain, then add it locally.

var o17 = {};
Object.prototype.o1 = 'no';
Object.prototype.o9 = 'yes';
Object.prototype.o19 = o20;
function o20() {
    o17.o1 = this.o9;
    print(this.o1);
}

o17 = new o20();
o17.o19();

// Test4: Breaks if we don't re-check the proto cache sym after the store to this.prop5.

function o21(){
  var o22 = {};
  var o23 = {};
  var o24 = function(o25){
    var o26 = {o27: (-- o23.o27), o28: 1, o29: 1, o30: 1, o31: 1, o32: 1, o33: 1, o34: 1};
  }
  Object.prototype.o32 = 1;
  for (var o35 = 0; o35 < 3; ++o35) {
    o36 = o24(1, 1, 1);
    function o37 (){
      if (((o23.o27 >>= 1) >>> ((this.o32)))) {
        for (var o38 in o23 ) {
          this.o32 >>>=1;
          o22.o30 = ((o22.o33 ^= this.o32));
          break ;
        }
      }
      o2.o3("obj0.prop6 = " + (o22.o33|0));
    }
    if (o37()) {
    }
  }
};

// generate profile
o21();

// run JITted code
o21();
