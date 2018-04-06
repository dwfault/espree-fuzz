//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0()
{
  var o1 = eval;
}
o0();

var o3 = function (o1) {
    o1.apply(this);
}

function o5() {

  o6.o7("pass");
}

o3(o5);
