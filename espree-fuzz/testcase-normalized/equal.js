//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4() {}

var all = [ 0, 10.2, 1, -10, "1",
            "hello", undefined, true,false, new Array(10),
            null, Number.o9, Number.o10
          ];
    
for (var o11=0; o11<all.length; ++o11) {
    for (var o13=0; o13<all.length; ++o13) {
        write("a[" + o11 + "] == a[" + o13 + "] = " + (all[o11] == all[o13]));
    }
}