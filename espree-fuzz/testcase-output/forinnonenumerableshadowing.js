//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tests for...in behavior when child object shadows a prototype property with a non-enumerable shadow
// See OS bug #850013

if (this.o0 && this.o0.o1) { // Check for running in ch
    this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}

function o2(o3) {
    var o4 = [];
    
    for (key in o3) { 
        o4.push(key);
    }
    
    return o4;
}

var o5 = [
    {
        name: "Simple test of prototype property shadowed by non-enumerable property",
        o6: function () {
            var o7 = { o8: 1 };
            var o9 = Object.create(o7, { o8: { value: 2, enumerable: false} });
            var o10 = o2(o9);
            
            o11.o12([], o10, "for...in does not enumerate a key which is enumerable in a prototype but shadowed by a non-enumerable property");
        }
    },
    {
        name: "Multiple properties on an object with some prototype properties shadowed by non-enumerable versions",
        o6: function () {
            var o7 = { o13: 1, o14: 2, o15: 3, o16: 4, o17: 5 };
            var o9 = Object.create(o7, { o14: { value: 20, enumerable: false} });
            Object.defineProperty(o9, 'c', { enumerable: false, value: 30 });
            o9['d'] = 4;
            
            var o10 = o2(o9);
            
            o11.o12(['d','a','e'], o10, "for...in does not enumerate a key which is enumerable in a prototype but shadowed by a non-enumerable property");
        }
    },
    {
        name: "Array indices which are non-enumerable (force ES5Array object)",
        o6: function () {
            var o18 = [0,1,2];
            o18[4] = 4;
            Object.defineProperty(o18, 3, { enumerable: false, value: '3' })
            var o10 = o2(o18);
            
            o11.o12(['0','1','2','4'], o10, "for...in does not enumerate non-enumerable properties, even for array indices");
        }
    },
    {
        name: "Explicitly test for...in fast path",
        o6: function () {
            function test(o3, o19) {
                var o10 = o2(o3);
                o10 = o10.concat(o2(o3));
                o10 = o10.concat(o2(o3));
                
                o11.o12(o19, o10, "for...in does not enumerate non-enumerable properties, even from the fast-path");
            }
            
            var o18 = Object.create(null);
            Object.defineProperty(o18, 'a', { value: 1, enumerable: false });
            Object.defineProperty(o18, 'b', { value: 2, enumerable: false });
            Object.defineProperty(o18, 'c', { value: 3, enumerable: false });
            test(o18, []);
            
            var o18 = Object.create(null);
            Object.defineProperty(o18, 'a', { value: 1, enumerable: true });
            Object.defineProperty(o18, 'b', { value: 2, enumerable: false });
            Object.defineProperty(o18, 'c', { value: 3, enumerable: false });
            test(o18, ['a','a','a']);
            
            var o18 = Object.create(null);
            Object.defineProperty(o18, 'a', { value: 1, enumerable: false });
            Object.defineProperty(o18, 'b', { value: 2, enumerable: false });
            Object.defineProperty(o18, 'c', { value: 3, enumerable: true });
            test(o18, ['c','c','c']);
            
            var o18 = Object.create(null);
            Object.defineProperty(o18, 'a', { value: 1, enumerable: false });
            Object.defineProperty(o18, 'b', { value: 2, enumerable: true });
            Object.defineProperty(o18, 'c', { value: 3, enumerable: false });
            test(o18, ['b','b','b']);
            
            var o18 = Object.create(null);
            Object.defineProperty(o18, 'a', { value: 1, enumerable: true });
            Object.defineProperty(o18, 'b', { value: 2, enumerable: false });
            Object.defineProperty(o18, 'c', { value: 3, enumerable: true });
            test(o18, ['a','c','a','c','a','c']);
            
            // JSON is a delay-load object
            test(JSON, []);
        }
    },
    {
        name: "Shadowing non-enumerable prototype property with an enumerable version",
        o6: function () {
            var o7 = Object.create(null, { o8: { value: 1, enumerable: false} });
            var o9 = Object.create(o7, { o8: { value: 2, enumerable: true} });
            var o10 = o2(o9);
            
            o11.o12(['x'], o10, "Child property shadows proto property");
        }
    },
    {
        name: "Shadowing non-enumerable prototype property with another non-enumerable version",
        o6: function () {
            var o7 = Object.create(null, { o8: { value: 1, enumerable: false} });
            var o9 = Object.create(o7, { o8: { value: 2, enumerable: false} });
            var o10 = o2(o9);
            
            o11.o12([], o10, "Child property shadows proto property with another non-enumerable property");
        }
    },
    {
        name: "Enumerating RegExp constructor is a bit of a special case",
        o6: function() {
            var o10 = o2(RegExp);
            o11.o12(['$1','$2','$3','$4','$5','$6','$7','$8','$9','input','rightContext','leftContext','lastParen','lastMatch'], o10, "for..in of RegExp constructor returns some special properties");
            
            var o10 = Object.keys(RegExp);
            o11.o12(['$1','$2','$3','$4','$5','$6','$7','$8','$9','input','rightContext','leftContext','lastParen','lastMatch'], o10, "Object.keys returns the same set of properties for RegExp as for..in");
            
            var o10 = Object.getOwnPropertyNames(RegExp);
            o11.o12(['$1','$2','$3','$4','$5','$6','$7','$8','$9','input','rightContext','leftContext','lastParen','lastMatch','length','prototype','name','$_','$&','$+','$`',"$'",'index'], o10, "Object.getOwnPropertyNames returns special non-enumerable properties too");
        }
    },
    {
        name: "Multiple objects in prototype chain with enum and non-enum property shadowing",
        o6: function() {
            var o7 = Object.create(null, { 
                o13: { value: 1, enumerable: false},
                o14: { value: 1, enumerable: true},
                o15: { value: 1, enumerable: false},
                o16: { value: 1, enumerable: false},
                o20: { value: 1, enumerable: true},
                o8: { value: 1, enumerable: false},
                o21: { value: 1, enumerable: true},
                o22: { value: 1, enumerable: true},
            });
            var o9 = Object.create(o7, { 
                o13: { value: 2, enumerable: false},
                o14: { value: 2, enumerable: false},
                o15: { value: 2, enumerable: true},
                o16: { value: 2, enumerable: false},
                o20: { value: 2, enumerable: true},
                o8: { value: 2, enumerable: true},
                o21: { value: 2, enumerable: false},
                o22: { value: 2, enumerable: true},
            });
            var o23 = Object.create(o9, { 
                o13: { value: 3, enumerable: false},
                o14: { value: 3, enumerable: false},
                o15: { value: 3, enumerable: false},
                o16: { value: 3, enumerable: true},
                o20: { value: 3, enumerable: false},
                o8: { value: 3, enumerable: true},
                o21: { value: 3, enumerable: true},
                o22: { value: 3, enumerable: true},
            });
            
            var o10 = o2(o23);
            o11.o12(['d','x','y','z'], o10, "childchild should shadow all properties and disable enumerable properties from the prototype chain leaking out");
            
            var o10 = o2(o9);
            o11.o12(['c','w','x','z'], o10, "child should shadow all properties and disable enumerable properties from the prototype chain leaking out");
            
            var o10 = o2(o7);
            o11.o12(['b','w','y','z'], o10, "proto doesn't shadow any properties but non-enumerable properties should not show up in for..in loop");
        }
    },
    {
        name: "OS: 1905906 - Enumerating a type and alternating non-enumerable properties causes assert",
        o6: function() {
            function o24() { JSON.stringify(arguments); }
            o24();
            var o25 = [];
            function o26() {
                for(var o27 in arguments) {
                    o25.push(o27);
                }
            }
            o26('a','b');
            
            o11.o12(['0','1'], o25, "Correct values are enumerated via for...in loop");
        }
    },
];

o28.o29(o5, { o30: o0.o31[0] != "summary" });
