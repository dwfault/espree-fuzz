//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (true) 
{
    const o0 = 1;
    o1.o2(o0);
}

o1.o2((function(o3) {
    let o4 = arguments;
    return o4;
})(1)[0]);

let o6 = 'a';
(function(o6) { o1.o2(o6) })();
o1.o2(o6);