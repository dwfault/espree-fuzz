//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function undefined(o1)
{
    o1[0] = 1;
}
var undefined = [];
function o3() { arguments.length = 2; };
o3.prototype = o2;
Object.defineProperty(o2, "0", { value: 0, writable: false });
var o1 = o1034();
test(o1);
o9.undefined(o1[0]);
var o1 = function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                };
test(o1);
o9.o10(o1[0]);
