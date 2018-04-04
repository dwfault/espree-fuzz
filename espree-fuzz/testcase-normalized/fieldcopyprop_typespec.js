//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

(function(){
  var o0 = 1;
  o0.o1 = o0.o1 & 1;
  o2.o3("obj0.b = " + (o0.o1|0));;
})();

function o4(o5){return o5};
function o6() {
    var o7 = {}
    o7.o5 = 5;
    o7 = o4(o7.o5);
    o2.o3(o7.o5);
}
o6()
