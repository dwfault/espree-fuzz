//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function escape()
{
}
function o0(){
  function o1 (){
  }
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
