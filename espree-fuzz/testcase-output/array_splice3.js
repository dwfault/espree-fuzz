//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1.o2;

// no argument
var o3 = [0, 1, 2, 3, 4];
o0("splice no arg:", o3, "||", o3.splice());

// "start" only
var o4 = [-2, 0, 2, 8];
for (var o5 = 0; o5 < o4.length; o5++) {
    var o3 = [0, 1, 2, 3, 4];
    var o6 = o4[o5];
    o0("splice at " + o6 + ":", o3, "||", o3.splice(o6));
}
