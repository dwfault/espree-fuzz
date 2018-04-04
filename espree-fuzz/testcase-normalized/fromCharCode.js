//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test(o1) {
    var o2 =  String.fromCharCode(o1).charCodeAt();
    o6.o7(o2);
}

test(0);
var o8 = 0xFFFC;

for(var o9 = 0; o9 < 10; o9++){
    test(o8);
    o8++;
}
