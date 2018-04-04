//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0 = o1.o2("es5array_crosssite.js", "samethread");


Object.defineProperty(Array.prototype, "1", { value: "const", writable: false });

function test()
{
var o10 = new Array(2);
o10[0] = 0;
o10[1] = 1;
o1.o11(o10);
o0.o12(o10, 1);
o1.o11(o10);
}

test();
test();

