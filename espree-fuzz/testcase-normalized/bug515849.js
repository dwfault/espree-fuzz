//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Switches:   -maxinterpretcount:1  -sse:3 -force:atom -forceserialized
//Arch: AMD64
var o0 = false;
var o1 = 0;
function o2(){
  var o3 = {};
  var o4 = {};
  var o5 = {};
  o1 = 0;
  var o6 = function(o7,o8){
  }
  var o9 = function(o10,o11,o12,o13){
  }
  o3.o14 = o9;
  var o15 = new Int8Array(3);
  o17 = o9.call(o4 , 1, o6.call(o5 , (o0 ? (Object.defineProperty(this, 'prop1', {get: function() {o22.o23(""); return 3; }, configurable: true}), 1) : 1), 1), 1, 1);
  // regalloc.ecs Snippet WIN8:748330: crash due to bad register allocation
  o4 = {};
  var o25 = 6.20856440617424E+18;
  o4.o26 = {o26: 1, o27: 1, o28: 1, o29: ((o25 + (1 <= 1)) / (((1 instanceof Object) <= 1) == 0 ? 1 : ((1 instanceof Object) <= 1))), o30: 1, o31: 1, o32: 1, o33: 1};
  for(var o34 = 0; o34 < 3; ++o34) {
  }
  o4.o14 = function(){
    //Snippets:newobjinlining1.ecs
    function o35(o36 , o37 , o38)
    {
        this.o39 = o36;
        this.o40 = o37;
        this.o41 = o38;
        this.o42 = 2;
        this.o41= 2;
    }
    function o43()
    {
        o35.prototype = {};
        var o45 = 0;
     for(var o46 in o15 ) {
       if(o46.indexOf('method') != -1) continue;
       if(o45++ > 3) break;
       //Code Snippet: NegativeArgumentBug.ecs (Blue15423)
       for (var o48 in arguments[o3.o14.call(o3 , 1, ((this.o27 != o3.o26)||(o5.o26 > this.o27)), 1, 1)]) {

       };

       o3.length -=o5.o14(1, 1, 1, 1);
     }

        var o51 = new o35(1,1,1);
        o52.push(o51.o41);
        o52.push(o51.o39);
        o52.push(o51.o40);
        o52.push(o51.o42);
    }
    o1++;
    if (o1 > 200) return 1;
    o43();
    o43();
    Object.defineProperty(o35.prototype,"v477414",{get:function(){return 100},configurable:false });
    o43();
    return 1;
  }
  if(o0){
    o3.o14 = o4.o14;
  }
  o3.o14(1, 1, 1, 1);
};

try {
// generate profile
o2();

// run JITted code
o54 = true;
o2();

// run code with bailouts enabled
o0 = true;
o2();
} catch (o55) {
o22.o23(o55);
}

