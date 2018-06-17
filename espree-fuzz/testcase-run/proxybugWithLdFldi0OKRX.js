//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
// -maxsimplejitruncount:2 -maxinterpretcount:1 -forcejitloopbody -off:bailonnoprofile
var o12 = {
                        o19: 100,
                        __proto__: { o24: "p0", o26: "p1" },
                        o21: 300,
                    }
try {
test();
}catch(e){}