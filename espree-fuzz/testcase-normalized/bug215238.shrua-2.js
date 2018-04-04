//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
 if(typeof o1 === 'number') {
    if(o1 % 1 == 0) // int number
        return o1 % 2147483647;
    else // float number
        return o1.toFixed(8);
 }
 return o1;
};
function o3(){
  var o4 = [];
  function o5(o6) { if(o6 < 1 || o6 > 4294967295 || o6 != o6 || isNaN(o6) || !isFinite(o6)) return 100; else return Math.floor(o6) & 0xffff; };
  var o11 = {};
  var o12 = {};
  var o13 = function(o14,o15,o16,o17){
    o12.length = o5((~ ((1 - o11.o19) >>> ((1 - o11.o19) - {o19: 1, o20: 1, o21: 1, o22: 1}))));
  };
  var o23 = function(o24,o25,o26){
    o27 = 1;
  };
  var o28 = function(o29,o30,o31,o32){
    o13.call(o34 , 1, 1, o23.call(o11 , 1, 1, 1), 1);
  };
  o12.o35 = o28;
  o34 = Object.create(o11);
  o11.o19 = 1073741823;
  o38 = o13.call(o12 , 1, o12.o35.call(o12 , 1, 1, 1, 1), 1, 1);

  function o39()
  {
    this.o40 = 1;
    this.o41 = (++ o27);
    this.o42 = (-- o12.length);
    this.o43 = o12.length;
    this.o42= 1;
    return this.o42;
  }
  function o44()
  {
    var o45 = new o39();

    o4.push(o45.o42);
    o4.push(o45.o40);
    o4.push(o45.o41);
    o4.push(o45.o43);

  }
  o47 = {};
  o47.o6 = 23456;
  o48 = {};
  o48.o6 = 65432;
  o39.prototype = o47;
  o44();
  o44();
  o39.prototype = o48;

  o44();

  for(var o50 =0;o50<o4.length;o50++){
  o4[o50] = o0(o4[o50]);
   o51.o52(o4[o50]);
  };
};

// generate profile
o3();
// Run Simple JIT
o3();

// run JITted code
o53 = true;
o3();
