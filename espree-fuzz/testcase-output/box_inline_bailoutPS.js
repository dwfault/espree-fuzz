//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function escape()
{
}
function o0(){
  var o4 = {
        o5: { "0": 1, "1": 2, length: 2 },
        set o100(o101) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 })
            } catch(o102) {
                o13("Unexpected exception - " + o102.name + ": " + o102.o103);
            }
        }
    };
  escape(o1);
  (function(){
      //Snippets:newobjinlining3.ecs
      function o2()
      {
      }
      function o3()
      {
        o2.prototype = {};
      }
    if (o4) {
      o3();
      o3();
    }
    //Snippet From Var
  })();
};

var o4 = 0;
// generate profile
o0();

o4 = true;
// run JITted code
o0();
