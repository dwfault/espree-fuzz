//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function escape()
{
}
function o1(){
  function o2 (){
  }
  if (o3)
  {
     escape(o2);
  }
  (function(){
      //Snippets:newobjinlining3.ecs
      function o4()
      {
      }
      function o5()
      {
        o4.prototype = {};
      }
    if (o3) {
      o5();
      o5();
    }
    //Snippet From Var
  })();
};

var o3 = false;
// generate profile
o1();

o3 = true;
// run JITted code
o1();

