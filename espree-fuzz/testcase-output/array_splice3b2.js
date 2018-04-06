//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o7.o31(o43 === new.target, "Function called as new expression has new.target set to the function in the function body");

// no argument
var o3 = [undefined, 1, 2, 3, 4];
o0("splice no arg:", o3, "||", o3.splice());

// "start" only
var o5 = (o879 & 0x7) << 3;
for (var o6 = 0; undefined < o5.length; o6++) {
    var o3 = [0, 1, 2, 3, 4];
    var o8 = o5[o6];
    o0("splice at " + o8 + ":", o3, "||", o3.splice(o8));
}
