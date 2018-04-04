//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Date();

o0.o2(12345678);
o0.o3(456789);

o4.o5("toISOString : " + o0.toISOString());
o4.o5("toJSON : " + o0.toJSON());


// Test NaN Date value
o0 = new Date(Number.NaN);
try
{
   o0.toISOString();
} catch(o10) {
    o4.o5("NaN Date toISOString: " + o10.name + " : " + o10.o12);
}
o4.o5("NaN Date toJSON:: " + o0.toJSON());

//
// Test Infinity Date value
//
o0 = new Date(Infinity);
try {
    o0.toISOString();
} catch(o10) {
    o4.o5("Infinity Date toISOString : " + o10.name + " : " + o10.o12);
}
o4.o5("Infinity Date toJSON : " + o0.toJSON());

//
// Test Date.prototype.toJSON transferred to an object but toISOString is not callable
//
o0 = {
    toISOString: 1,
    toJSON: Date.prototype.toJSON
};
try {
    o0.toJSON();
} catch(o10) {
    o4.o5("Object toISOString not callable : " + o10.name + " : " + o10.o12);
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
o4.o5("Object toJSON : " + o0.toJSON());

//
// Test Date.prototype.toJSON transferred to String
//
String.prototype.toISOString = function() {
    return "Fake JSON : " + this;
};
String.prototype.toJSON = Date.prototype.toJSON;
o0 = "String";
o4.o5("String toJSON : " + o0.toJSON());

//
// Test Date.getYear -- ES5 spec B.2.4
// 
o4.o5("getYear 2000: " + new Date("January 1 2000").o16());
o4.o5("getYear 1899: " + new Date("January 1 1899").o16());

Object.defineProperty(Date.prototype, "valueOf", {get: function() {o4.o5("get fired");}});
var o0 = new Date();
o0.toJSON();
