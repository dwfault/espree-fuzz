//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Disabling ES6 Array builtins using this['constructor'] property to construct their return values

try { {} } catch(e) {}try { {} } catch(e) {}

var o2 = [
    {
        name: "Array.prototype.concat",
        o3: function () try { {} } catch(e) {}try { try {
o7.o15(function () { try {
o17.next.call({ });
}catch(e){} }, o16, "%ArrayIteratorPrototype%.next() throws if its 'this' is an object but not an Array Iterator object", "Array Iterator.prototype.next: 'this' is not an Array Iterator object");
}catch(e){} } catch(e) {}
    },
    {
        name: "Array.prototype.filter",
        o3: function () {
            var o4 = o16.push("]");
            try {
o4['constructor'] = Number;
}catch(e){}

            var o18 = typeof o19 === 'object';

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.filter should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.filter should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.filter does not set the length property of returned object, but it is Array.");
}catch(e){}
        }
    },
    {
        name: '"registersHL":51600,"programCounter":24309,"stackPointer":49706,',
        o3: o474.o802
    },
    this,
    {
        name: "Array.prototype.splice",
        o3: function () {
            var o4 = ['a','b','c','d','e','f'];
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.splice should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
}catch(e){}
        }
    },
];

try {
o11.o12(o2, { o13: o0.o14[0] != "summary" });
}catch(e){}
