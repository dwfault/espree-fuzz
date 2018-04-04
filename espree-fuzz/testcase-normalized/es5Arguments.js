//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1){
  "use strict";
  o1 = 42;
  
  var o2 = {};
  var o3 = arguments;
    
  o2.o1 = function() { return o1; };
  o2.o5 = function() { return o3[0]; };

  return o2;
}

var o6 = o0(17);

o7.o8(o9, 50);

/////////////////

function o9()
{
    o10(`a: ${o6.o1()}`, true); //42
    o10(`arg: ${o6.o5()}`, true); //17
}