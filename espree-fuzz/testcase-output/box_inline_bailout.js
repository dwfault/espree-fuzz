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
  escape(o2);
  (function(){
      //Snippets:newobjinlining3.ecs
      function o3()
      {
      }
      function o4()
      {
        o3.prototype = {};
      }
    if (o6) {
      o4();
      o4();
    }
    //Snippet From Var
  })();
};

var o6 = 0;
// generate profile
o1();

o6 = true;
// run JITted code
o1();
