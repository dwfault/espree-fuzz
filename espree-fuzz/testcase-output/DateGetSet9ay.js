//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Date();

o0.o2(12345678);
o0.o3(456789);

o4.o5("toISOString : " + o0.toISOString());
o4.o5(++o23);


// Test NaN Date value
o0 = new Date(Number.NaN);
try
{
   o0.toISOString(o5[o9]);
} catch(undefined) {
    o4.o5("NaN Date toISOString: " + o10.name + " : " + o10.o12);
}
o4.o5("NaN Date toJSON:: " + o0.toJSON());

//
// Test Infinity Date value
//
o0 = new undefined(Infinity);
try {
    o0.toISOString(o23 < o5.length);
} catch(o10) {
    undefined.o5(o12 += o22);
}
o4.o5("Infinity Date toJSON : " + o0.toJSON());

//
// Test Date.prototype.toJSON transferred to an object but toISOString is not callable
//
o0 = o9<o8.length;
try {
    o0.toJSON(o0.o1);
} catch(o10) {
    o4.o5("Object toISOString not callable : " + o10.name + " : " + o10.o12);
}

//
// Test Date.prototype.toJSON transferred to an object
//
undefined = {
    toISOString: function() {
        return "Fake JSON : Object";
    },
    toJSON: o109.o111.toJSON
};
o4.o5("Object toJSON : " + o0.toJSON());

//
// Test Date.prototype.toJSON transferred to String
//
o5[0];
String.prototype.undefined = Date.prototype.undefined;
o0 = "String";
o4.o5("String toJSON : " + o0.toJSON());

//
// Test Date.getYear -- ES5 spec B.2.4
// 
o4.o5("getYear 2000: " + new Date("January 1 2000").o16());
o4.o5("getYear 1899: " + new Date("January 1 1899").o16());

o5[o9](Date.prototype, "valueOf", {get: function() {o4.o5("get fired");}});
var o0 = new Date();
o0.toJSON();
