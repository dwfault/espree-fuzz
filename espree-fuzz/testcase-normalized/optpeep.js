//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 0;
var o1 = false;
function o2(){
  var o3 = {};
  var o4 = function(o5){
    if((o1 ? (Object.defineProperty(o3, 'prop6', {get: function() { o0++; return 3; }, set: function(o10) { o11.o12('obj0.prop6 setter'); }}), 1) : 1)) {
      ((Math.o14(o3.o15) - Boolean));
11    }
  }
  o3.o17 = {o18: 1, o17: 1, o19: 1, o20: 1, o21: 1, o22: 1, o15: o4(1, 1), o23: 1};
};

for (var o24 = 0; o24 < 2000; o24++)
{
    o2();
}


// run code with bailouts enabled
o1 = true;
o2();

if (o0 != 1)
{
    o11.o12("FAILED\n");
}
else
{
    o11.o12("Passed\n");
}

// Windows Blue Bug 416975
function o25(){
  function o26 (){
    if(o26())
    {
     }
    return (1 > 1);
  }
  o26();
};

try{
    o25(); 
}
catch (o27) {}
