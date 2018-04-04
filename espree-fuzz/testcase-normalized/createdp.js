//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1)
{
 o2.o3(o1);
}

write("Test case 1");

function o4() {}
var o5 = new o4();
var o6 = new Object();
var o8 = Object.create(o5);
write(typeof o8);
write(Object.getOwnPropertyNames(o8));

write("Test case 2");

var o6 = {o5:{value:10},o12:{value:30},o8:{value:70}};
Array.prototype[1]=10;
var  o15 = Object.create(Array.prototype, o6);
o2.o3(Object.getOwnPropertyNames(o15));
o2.o3(o15[1]);

write("Test case 3");

var o6 = {o5:{value:10},o12:{value:30},o8:{value:70}};
var  o15 = Object.defineProperties({}, o6);
o2.o3(Object.getOwnPropertyNames(o15));
o2.o3(o15.o5);

write("Test case 4");

var o17 = {get: function(){write("In getter");},set: function(o20){write("In setter")}};
var o6 = {o21: o17, o22: {value:10}};
var  o15 = Object.defineProperties({}, o6);
o2.o3(Object.getOwnPropertyNames(o15));
o15.o21;
o15.o21=10;

write("Test case 5");
Object.defineProperty(
    Number.prototype,
    "p",
    {
        get: function () { write("In getter"); },
        set: function (o25) { write("In setter"); },
        configurable: true,
        enumerable: true
    });
var o28 = 1;
o28.o29;
o28.o29 = 2;
delete Number.prototype.o29;

write("Test case 6 - simple dictionary");
var o30 = {};
Object.defineProperty(Object.prototype, "data", { value:"qrs", enumerable:true, writable:true, configurable:true });
// add user defined property
Object.defineProperty(o30, "data", { value:10, enumerable:true, writable:true, configurable:true });
// remove user defined property <--- remove this and it works as expected
delete o30.o32;
// should be global property <--- remove this and it works as expected
write("Is global: " + (o30.o32 === "qrs"));
// redeclare user defined property
Object.defineProperty(o30, "data", { value:10, enumerable:true, writable:true, configurable:true });
write("Is local again: " + (o30.o32 === 10));

write("Test case 7 - dictionary");
var o30 = {};
Object.defineProperty(Object.prototype, "data", { value:"qrs", enumerable:true, writable:true, configurable:true });
// add user defined property
Object.defineProperty(o30, "data", { get: function(){}, enumerable:true,  configurable:true  });
// remove user defined property <--- remove this and it works as expected
delete o30.o32;
// should be global property <--- remove this and it works as expected
write("Is global: " + (o30.o32 === "qrs"));
// redeclare user defined property
Object.defineProperty(o30, "data", { value:10, enumerable:true, writable:true, configurable:true });
write("Is local again: " + (o30.o32 === 10));

