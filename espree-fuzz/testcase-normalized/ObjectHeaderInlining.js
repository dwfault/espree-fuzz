//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//flags : -off:simplejit -mic:1
function o0(o1, o2) {
    this.o1 = o1;
    this.o2 = o2;
}

function o3(o4){
    this.o4 = o4;
}


function o5()
{
    var o6 = new o0(2, 3);
    return o6;
}

function o7()
{
    var o6 = new o3(4)
    return o6;
}


function grow(o6, o9, o10)
{
    o6.o9 = o9;
    o6.o10 = o10;
}
 
var o11;
var o12;

for(o13 = 0; o13 < 5; o13++)
{
    o11 = o5();
    o12 = o7();
}


//Try grow and overwrite properties.
grow(o11, 10, 20);

o11 = o5();
grow(o11, 10, 20);

o11 = o5();
grow(o11, 10, 20);

o14.o15(o11.o1);
o14.o15(o11.o2);
o14.o15(o11.o9);
o14.o15(o11.o10);
o14.o15(o12.o4);
    
 
