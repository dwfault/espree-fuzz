//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib,o2,buffer) {
    "use asm";
    function o4(){
        var o5 = -2147483649;
        return +o5;
    }
    
    return { 
        o4 : o4
    };
}
var stdlib = {}
var o6 = {}
var buffer = new ArrayBuffer(1<<20);
var o8 = o0(stdlib,o6,buffer);
print(o8.o4());

var o10 = function (stdlib, o2, o11) {
  'use asm';
  function o12() {
    return +-137438953473;
  }
  return o12;
}(stdlib,o6, buffer);
print(o10());
