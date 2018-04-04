//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(){
  var o1 = {};
  var o2 = function(){
  }
  o1.o3 = o2;
  var o4 = new Int32Array(2);
  var o6 = 1;
  var o7 = 0;
  for(var o8 in o4 ) {
    if(o8.indexOf('method') != -1) continue;
    if(o7++ > 3) break;
    o1.o3.call(Object.prototype , (o1.length ? 351445441 : -496151049),  o6[1]);
  }
};

o0();
o0();
o0();
o14.o15("PASSED\n");

function o16(){
  var o17 = {};
  var o18 = function(){
  }
  o17.o3 = o18;
  var o19 = new Array(10);
  function o21(o22) {
    for(var o23 in o22) {
      if(o22[o23] instanceof Array) {
        o21(o22[o23]);
      }
      o17.o3.call(o17 , o19[1]);
    }
  }
  o21([[o17.o24, [o17.o25]]]);
};

o16();
o16();
o16();
o14.o15("PASSED\n");

function o26(){
  function o27 (){
    this.o25;
  }

  var o28 = {o29: o27};
  var o30 = 0;
  do {
    o30++;
        function o31()
        {
            if(false)
            {
                var o32 = 1;
            }
            else
                return o28.o29.call(o32);
        }

        o31();
  } while((1) && o30 < 3)
};

o26();
o26();
o26();
o14.o15("PASSED\n");
