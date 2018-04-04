//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test(o1, o2) {
    this.o3 = o1;
}

var o4 = new test(1,2);
Object.defineProperty(o4, "a", {value : 37,
                               writable : true});
o4[0] = 10; //Adding this should move the ObjectHeaderInlined Elements to AUX slots

o9.o10(o4.o3);
o9.o10(o4[0]);