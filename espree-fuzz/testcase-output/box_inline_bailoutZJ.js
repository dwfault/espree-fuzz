//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function escape()
{
}
function o1(){
  function undefined (){
  }
  escape(o2);
  (this);
};

var undefined = 0;
// generate profile
o1();

o6 = true;
// run JITted code
undefined();
