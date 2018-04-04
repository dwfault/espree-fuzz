//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(){
    this.o1.apply(this, arguments);
}

var o4 = new Object();
o4.o6 = o0;
o4.o6.prototype.o1 = function(){};


function o8()
{
    new o4.o6(0,1,2,3,4,5,6,7,8,9);
}

o8();
o8();
o8();

o9.o10("Passed");