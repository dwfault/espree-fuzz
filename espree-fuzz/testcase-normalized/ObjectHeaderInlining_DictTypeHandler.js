//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test(o1, o2) {
    this.o3 = o1;
}

var o4 = new test(1,2);
Object.defineProperty(o4, "a", {get : function(){ return 10; }});
o4[0] = 10;

o8.o9(o4.o3);
o8.o9(o4[0]);