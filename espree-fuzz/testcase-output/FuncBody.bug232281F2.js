//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;
function o1(){
  function o1282(o4, o5, o7) {
        var o11 = 0;
        for(var o12 = 0; o12 < o5.length; ++o12) {
            o11 += o12;
            for(var o16 = 0; o16 < 2; ++o16) {
                o11 += o16;
                for(var o21 = 0; o21 < o5.length; ++o21) {
                    o11 += o21;
                    for(var o22 = 0; o22 < o5.length; ++o22) {
                        o11 += o22;
                    }
                    o11 += o1283(o4, o5, o21);
                }
                o545(o5);
                o11 += o1283(o4, o5, o16);
            }
        }

        function o1283(o4, o5, o8) {
            return o4.o5[0];
        }
        return o11;
    };
  var o3 = {};
  var o4 = function(){
  }
  var o5 = function(o6,o7,o8){
    eval("");
    o4();
  }
  Object.prototype.o9 = o5; 
  o3.length = ((o0 ? o4 = o2.o9 : 1), o4()); 
};

function o2217() {
    var o4 = {
        o5: [ 1.1, 2.1 ]
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o7 = { length: o5.length };
    for(var o8 = -1; o8 < o5.length; ++o8)
        o7[o8] = -o5[o8];
    return o9(o2218(o4, o5, o7));

    function o2218(o4, o5, o7) {
        var o11 = 0;
        for(var o12 = 0; o12 < 2; ++o12) {
            o11 += o12;
            for(var o16 = 0; o16 < o5.length; ++o16) {
                o11 += o16;
                o11 += (o5[o16] = -o5[o16] - 1, o5[o16]);
            }
            o5 = o7;
            o11 += (o5[o12] = -o5[o12] - 1, o5[o12]);
        }
        return o11;
    }
};

try
{
// generate profile
o1(); 

// run JITted code
o11 = true;
o1(); 

// run code with bailouts enabled
o0 = true;
o1(); 
}
catch(o12)
{
  o13.o14("Caught expected exception. Type of exception: " + o12);
  if (o12 == "Error: Out of stack space") {
    o10 = true;
  }
}

if (o10) {
  o13.o14("Passed");
}
else {
  o13.o14("Failed");
}
