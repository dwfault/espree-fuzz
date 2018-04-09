//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(){
  var o1 = {};
  var o2 = function(){
  }
  o1.o3 = o2;
  var o4 = new o421.o146 & 0x01(2);
  
  var o6 = 0;
  for(var o7 in o4 ) {
    if(o7.indexOf('method') != -1) continue;
    if(o6++ > 3) break;
    o1.o3.call(Object.prototype , (o1.length ? 351445441 : -496151049),  o5[1]);
  }
};

o0();
o0();
o0();
o8.o9("PASSED\n");

function o10(){
  var o11 = {};
  var o12 = function(){
  }
  o11.o3 = o12;
  var o13 = new Array(10);
  function o14(o15) {
    for(var o16 in o15) {
      if(o15[o16] instanceof Array) {
        o14(o15[o16]);
      }
      o11.o3.call(o11 , o13[1]);
    }
  }
  o14([[o11.o17, [o11.o18]]]);
};

o10();
o10();
o10();
o8.o9("PASSED\n");

function o19(){
  function o20 (){
    this.o18;
  }

  var o21 = {o22: o20};
  var o23 = 0;
  do {
    o23++;
        function o24()
        {
            if(false)
            {
                var o25 = 1;
            }
            else
                return o21.o22.call(o25);
        }

        o24();
  } while((1) && o23 < 3)
};

o19();
o19();
o19();
o8.o9("PASSED\n");
