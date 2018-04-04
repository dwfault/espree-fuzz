//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0(o1)
{
    var o2 = o1;
    var o3 = o1;
    for(var o4=0;o4<3;o4++)
    {
        if(o4>=2)
        {
            //donot update the cache the next two times 
            o3 = o2;
            o5.o6("startvalue: "+o3);
        }
        else
        {
        //Keep updating the cache for the first two times 
            o1 = o3;
        }
        o3++;
    }
}

o0(0); 

// Test a loop nest with a cycle of assignments.
function o7(){
  var o8 = {};
  var o9 = {};
  var o10 = new Array(10);
  var o12 = new Uint16Array(256);
  var o14 = 1;
  o9.length >>>=1;
  var o16 = 0;
  while(((o9.o17 &= (o14 %= 1))) && o16 < 3) {
    o16++;
  }
  for(var o18 = 0; o18 < 3; o18++) {
    o19 =o14;
    var o20 = 0;
    for(var o21 in o12 ) {
      if(o20++ > 3) break;
      o22 =o19;
      o10[(15)] = (o19-- );
      o8.o17 =(o9.length++ );
      o14 =o22;
    }
  }
  o5.o6("d = " + (o22|0));
};

o7();

function o23(){
  var o8 = {};
  var o9 = {};
  var o24 = function(o25){
    o8.o17;
  }
  o9.o26 = o24;
  var o27 = o8;
  var o28 = 0;
  while(o28 < 3) {
    o28++;
    o8 = o27;
    o27 = o9;
  }
  o8.o26()
};

// generate profile
o23();

// run JITted code
o23();

var o29 = function () {
  return o29.caller;
}

function o31() {
  return o29();
}
function o32() {
  o29(1);
  var o33 = o31();
  o5.o6(o33);
}
o32();
o32();

