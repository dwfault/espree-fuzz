//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = this;
function o1() {
   o2.o3(eval("\"use strict\";\ntypeof this"));
}

function o5() {
    o2.o3(eval("\"use strict\";\n this") === o0);
}
o1();
o5();
