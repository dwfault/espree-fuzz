//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Date();

o0.o1(12345678);
o0.o2(456789);

o3.o4("toISOString : " + o0.toISOString());
o3.o4("toJSON : " + o0.toJSON());


// Test NaN Date value
o0 = new Date(Number.NaN);
try
{
   o0.toISOString();
} catch(o5) {
    o3.o4("NaN Date toISOString: " + o5.name + " : " + o5.o6);
}
o3.o4("NaN Date toJSON:: " + o0.toJSON());

//
// Test Infinity Date value
//
o0 = new Date(Infinity);
try {
    o0.toISOString();
} catch(o5) {
    o3.o4("Infinity Date toISOString : " + o5.name + " : " + o5.o6);
}
o3.o4("Infinity Date toJSON : " + o0.toJSON());

//
// Test Date.prototype.toJSON transferred to an object but toISOString is not callable
//
o0 = {
    toISOString: 1,
    toJSON: Date.prototype.toJSON
};
try {
    o0.toJSON();
} catch(o5) {
    o3.o4("Object toISOString not callable : " + o5.name + " : " + o5.o6);
}

//
// Test Date.prototype.toJSON transferred to an object
//
o0 = {
    toISOString: function() {
        return "Fake JSON : Object";
    },
    toJSON: Date.prototype.toJSON
};
o3.o4("Object toJSON : " + o0.toJSON());

//
// Test Date.prototype.toJSON transferred to String
//
String.prototype.toISOString = function() {
    return "Fake JSON : " + this;
};
String.prototype.toJSON = Date.prototype.toJSON;
o0 = "String";
o3.o4("String toJSON : " + o0.toJSON());

//
// Test Date.getYear -- ES5 spec B.2.4
// 
o3.o4("getYear 2000: " + new Date("January 1 2000").o7());
o3.o4("getYear 1899: " + new Date("January 1 1899").o7());

Object.defineProperty(Date.prototype, "valueOf", {get: function() {o3.o4("get fired");}});
var o0 = new Date();
o0.toJSON();
