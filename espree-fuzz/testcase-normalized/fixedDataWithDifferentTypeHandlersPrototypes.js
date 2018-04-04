//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*************Test1 - Creates Simple Dictionary TypeHandler for Prototype*****************/
function o0()
{
    this.o1 = 1
} // PTH

o0.prototype = {o3:10};
Object.defineProperty(o0.prototype, "B", {
    enumerable   : false,
    configurable : true,
    writable     : true, 
    value        : 20
}); //SDTH


var o10 = new o0();//SDTH

function o11()
{
    return o10.o12;
}

o13.o14(o11());
o13.o14(o11());
o10.o12 = 99;
o13.o14(o11());

/*************Test2 - Creates a Dictionary TypeHandler for Prototype*****************/
function o0()
{
    this.o1 = 1,
    this.o3 = 10
    
 }; 
 
o0.prototype = {o12:10}
Object.defineProperty(o0.prototype, "D", {get: function() {return 5;}});//DTH

function o16()
{
    return o10.o12;
}
   
var o10 = new o0(); //DTH

o13.o14(o16());
o13.o14(o16());

o10.o12 =99;
o13.o14(o16());

