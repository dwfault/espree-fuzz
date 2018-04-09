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
  if (o2)
  {
     escape(o1);
  }
  (function(){
      //Snippets:newobjinlining3.ecs
      function o3()
      {
      }
      function o4()
      {
        o3.prototype = {};
      }
    if (o2) {
      o4();
      o4();
    }
    //Snippet From Var
  })();
};

var o2 = false;
// generate profile
o0();

o2 = true;
// run JITted code
o0();

