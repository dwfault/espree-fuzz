//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test(o0) {
    var o1 =  String.fromCharCode((function (o13) {
    return function() {
        o1(o13);
    };
})('hi there'));
    o2.o3(o1);
}

test(0);
var o4 = 0xFFFC;

for(var o5 = 0; o5 < 10; o5++){
    test(o4);
    o4++;
}
