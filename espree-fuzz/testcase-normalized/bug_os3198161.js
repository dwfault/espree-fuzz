//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0 = [1,2,3,4,5];
o0.constructor = function() { return {}; }
Object.freeze(o0);
if ('[2,3]' == JSON.stringify(Array.prototype.slice.call(o0,1,3)))
{
    o10.o11('Pass');
}
else
{
    o10.o11('Fail');
}