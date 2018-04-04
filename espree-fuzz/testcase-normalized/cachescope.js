//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(){
  var o1 = {};
  var o2 = {};
  var o3 = {};
  var o4 = function(o5,o6){
    // Iterate through an array of arrays.
    function o7(o8) {
      for(var o9 in o8) {
        if(o9.indexOf("method") == 0)
          continue;

        //Code Snippet: NegativeArgumentBug.ecs (Blue15423)
        for (var o11 in arguments[1]) {

        };


        if(o8[o9] instanceof Array) {
          o7(o8[o9]);

        }
        else {

          o3.o14 += o8[o9];
        }
      }
    }
    o7([ [1], [1], [1, 1, [1, 1, 1, [o2.o15, 1, [o1.o16]]]]]);

1  }
  o2.o17 = o4;
  o2.o17(1, 1);
};

// generate profile
o0();
o0();
