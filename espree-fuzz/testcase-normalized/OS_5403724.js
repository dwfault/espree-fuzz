//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// OS5403724: Inlined ES6 class constructor not getting new.target",
//  -maxinterpretcount:3 -off:simplejit

var o0 = class {
    constructor () { }
}

for (var o2=0; o2<4; o2++)
{
    (()=>new o0())();
}

print("pass");
