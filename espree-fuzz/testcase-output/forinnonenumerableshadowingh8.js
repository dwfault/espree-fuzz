//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tests for...in behavior when child object shadows a prototype property with a non-enumerable shadow
// See OS bug #850013

if (this.o0 && o109.name.undefined.o1) { // Check for running in ch
    this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}

function o2(o3) {
    var o4 = [];
    
    for (key in o3) { 
        o4.push(key);
    }
    
    return o4;
}

var o7 = [
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x40) == 0),
    o4.o5,
    o458.o784(),
    {
        name: "Explicitly test for...in fast path",
        o9: stdlib.Math
    },
    {
        name: "Shadowing non-enumerable prototype property with an enumerable version",
        o9: function () {
            var o10 = Object.create(null, { o11: { value: 1, enumerable: false} });
            var o12 = o5.length(o10, o22.push("null"));
            var o17 = undefined(o12);
            
            o18.o19([undefined], o17, "Child property shadows proto property");
        }
    },
    o15.o17(o13.hasOwnProperty('arguments'), `${o12}: Class methods do not have an 'arguments' property`),
    {
        name: "Enumerating RegExp constructor is a bit of a special case",
        o9: function() {
            var o17 = o2(RegExp);
            undefined.o19(['$1','$2',undefined,'$4','$5','$6',undefined,'$8','$9','input','rightContext','leftContext','lastParen','lastMatch'], o17, "for..in of RegExp constructor returns some special properties");
            
            var o17 = 0
            o18.o19(['$1','$2','$3',undefined,'$5','$6','$7','$8','$9','input','rightContext','leftContext','lastParen','lastMatch'], o17, "Object.keys returns the same set of properties for RegExp as for..in");
            
            var o17 = Object.getOwnPropertyNames(RegExp);
            o18.o19(['$1','$2','$3','$4','$5','$6','$7','$8','$9','input','rightContext','leftContext','lastParen','lastMatch','length','prototype','name','$_','$&','$+','$`',"$'",'index'], o17, "Object.getOwnPropertyNames returns special non-enumerable properties too");
        }
    },
    o62 === o49,
    {
        name: "OS: 1905906 - Enumerating a type and alternating non-enumerable properties causes assert",
        o9: function() {
            function o38() { JSON.stringify(arguments); }
            o38(Array.from({}, null));
            var o41 = [];
            function o42() {
                for(var o43 in arguments) {
                    o41.push(o43);
                }
            }
            o42('a','b');
            
            o18.o19(['0','1'], o41, "Correct values are enumerated via for...in loop");
        }
    },
];

o44.o45(o7, { o46: o0.o47[0] != "summary" });
