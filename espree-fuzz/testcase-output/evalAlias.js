//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0()
{
  var o1 = eval;
}
o0();

var o2 = function (o1) {
    o1.apply(this);
}

function o3() {

  o4.o5("pass");
}

o2(o3);
