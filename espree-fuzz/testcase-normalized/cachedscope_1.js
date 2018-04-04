//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(){
  var o1 = {};
  var o2 = {};
  var o3 = function(o4){
    o1 = o2;
  }
  var o5 = function(o6,o7,o8){
  }
  o2.o9 = o5; 
  var o10 = [1,4,-1,-6,-0,+0,55,-100,2.56,-3.14,6.6,42,2.3,67,1.97,-24,77.99];
  var o11 = 1;
  function o12 (o13,o14){
    o11 = arguments[((((o11 &= 1) >= 0 ? (o11 &= 1) : 0)) & 0XF)]; 
  }
  o16 = o3.call(o1 , 1); 
  function o18()
  {
    var o19 = false;
    (function(){
      this.o20 =o12(o10[(1)], 1);
    })();
    var o21 = [10];
    var o22 = 0;
    do {
      o22++;
    } while((1) && o22 < 3)
    Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){o19 = true; return 30;}});
    o16 *=o1.o9.call(o1 , 1, (++ o11), 1);
    o19 = false;
    o21.length = 6;
    o11 = o21.indexOf(30);
    o31.o32 (o11);
  }
  
  o18();
  o18();
  var o33 = 0;
  for(var o34 in o1 ) {
    if(o34.indexOf('method') != -1) continue;
    if(o33++ > 3) break;
    o12(1, 1); 
  }
};

// generate profile
o0(); 
o0(); 

// run JITted code
o35 = true;
o0(); 
o0(); 

function o36() {
    o37 = function o38() {
        with({}) {
            o38();
        }
    }
}
o36();
