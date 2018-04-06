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

var o7 = [
    {
        name: "Simple test of prototype property shadowed by non-enumerable property",
        o9: function () {
            var o10 = { o11: 1 };
            var o12 = Object.create(o10, { o11: { value: 2, enumerable: false} });
            var o17 = o2(o12);
            
            o18.o19([], o17, "for...in does not enumerate a key which is enumerable in a prototype but shadowed by a non-enumerable property");
        }
    },
    {
        name: "Multiple properties on an object with some prototype properties shadowed by non-enumerable versions",
        o9: function () {
            var o10 = { o20: 1, o21: 2, o22: 3, o23: 4, o24: 5 };
            var o12 = Object.create(o10, { o21: { value: 20, enumerable: false} });
            Object.defineProperty(o12, 'c', { enumerable: false, value: 30 });
            o12['d'] = 4;
            
            var o17 = o2(o12);
            
            o18.o19(['d','a','e'], o17, "for...in does not enumerate a key which is enumerable in a prototype but shadowed by a non-enumerable property");
        }
    },
    {
        name: "Array indices which are non-enumerable (force ES5Array object)",
        o9: function () {
            var o26 = [0,1,2];
            o26[4] = 4;
            Object.defineProperty(o26, 3, { enumerable: false, value: '3' })
            var o17 = o2(o26);
            
            o18.o19(['0','1','2','4'], o17, "for...in does not enumerate non-enumerable properties, even for array indices");
        }
    },
    {
        name: "Explicitly test for...in fast path",
        o9: function () {
            function test(o3, o28) {
                var o17 = o2(o3);
                o17 = o17.concat(o2(o3));
                o17 = o17.concat(o2(o3));
                
                o18.o19(o28, o17, "for...in does not enumerate non-enumerable properties, even from the fast-path");
            }
            
            var o26 = Object.create(null);
            Object.defineProperty(o26, 'a', { value: 1, enumerable: false });
            Object.defineProperty(o26, 'b', { value: 2, enumerable: false });
            Object.defineProperty(o26, 'c', { value: 3, enumerable: false });
            test(o26, []);
            
            var o26 = Object.create(null);
            Object.defineProperty(o26, 'a', { value: 1, enumerable: true });
            Object.defineProperty(o26, 'b', { value: 2, enumerable: false });
            Object.defineProperty(o26, 'c', { value: 3, enumerable: false });
            test(o26, ['a','a','a']);
            
            var o26 = Object.create(null);
            Object.defineProperty(o26, 'a', { value: 1, enumerable: false });
            Object.defineProperty(o26, 'b', { value: 2, enumerable: false });
            Object.defineProperty(o26, 'c', { value: 3, enumerable: true });
            test(o26, ['c','c','c']);
            
            var o26 = Object.create(null);
            Object.defineProperty(o26, 'a', { value: 1, enumerable: false });
            Object.defineProperty(o26, 'b', { value: 2, enumerable: true });
            Object.defineProperty(o26, 'c', { value: 3, enumerable: false });
            test(o26, ['b','b','b']);
            
            var o26 = Object.create(null);
            Object.defineProperty(o26, 'a', { value: 1, enumerable: true });
            Object.defineProperty(o26, 'b', { value: 2, enumerable: false });
            Object.defineProperty(o26, 'c', { value: 3, enumerable: true });
            test(o26, ['a','c','a','c','a','c']);
            
            // JSON is a delay-load object
            test(JSON, []);
        }
    },
    {
        name: "Shadowing non-enumerable prototype property with an enumerable version",
        o9: function () {
            var o10 = Object.create(null, { o11: { value: 1, enumerable: false} });
            var o12 = Object.create(o10, { o11: { value: 2, enumerable: true} });
            var o17 = o2(o12);
            
            o18.o19(['x'], o17, "Child property shadows proto property");
        }
    },
    {
        name: "Shadowing non-enumerable prototype property with another non-enumerable version",
        o9: function () {
            var o10 = Object.create(null, { o11: { value: 1, enumerable: false} });
            var o12 = Object.create(o10, { o11: { value: 2, enumerable: false} });
            var o17 = o2(o12);
            
            o18.o19([], o17, "Child property shadows proto property with another non-enumerable property");
        }
    },
    {
        name: "Enumerating RegExp constructor is a bit of a special case",
        o9: function() {
            var o17 = o2(RegExp);
            o18.o19(['$1','$2','$3','$4','$5','$6','$7','$8','$9','input','rightContext','leftContext','lastParen','lastMatch'], o17, "for..in of RegExp constructor returns some special properties");
            
            var o17 = Object.keys(RegExp);
            o18.o19(['$1','$2','$3','$4','$5','$6','$7','$8','$9','input','rightContext','leftContext','lastParen','lastMatch'], o17, "Object.keys returns the same set of properties for RegExp as for..in");
            
            var o17 = Object.getOwnPropertyNames(RegExp);
            o18.o19(['$1','$2','$3','$4','$5','$6','$7','$8','$9','input','rightContext','leftContext','lastParen','lastMatch','length','prototype','name','$_','$&','$+','$`',"$'",'index'], o17, "Object.getOwnPropertyNames returns special non-enumerable properties too");
        }
    },
    {
        name: "Multiple objects in prototype chain with enum and non-enum property shadowing",
        o9: function() {
            var o10 = Object.create(null, { 
                o20: { value: 1, enumerable: false},
                o21: { value: 1, enumerable: true},
                o22: { value: 1, enumerable: false},
                o23: { value: 1, enumerable: false},
                o34: { value: 1, enumerable: true},
                o11: { value: 1, enumerable: false},
                o35: { value: 1, enumerable: true},
                o36: { value: 1, enumerable: true},
            });
            var o12 = Object.create(o10, { 
                o20: { value: 2, enumerable: false},
                o21: { value: 2, enumerable: false},
                o22: { value: 2, enumerable: true},
                o23: { value: 2, enumerable: false},
                o34: { value: 2, enumerable: true},
                o11: { value: 2, enumerable: true},
                o35: { value: 2, enumerable: false},
                o36: { value: 2, enumerable: true},
            });
            var o37 = Object.create(o12, { 
                o20: { value: 3, enumerable: false},
                o21: { value: 3, enumerable: false},
                o22: { value: 3, enumerable: false},
                o23: { value: 3, enumerable: true},
                o34: { value: 3, enumerable: false},
                o11: { value: 3, enumerable: true},
                o35: { value: 3, enumerable: true},
                o36: { value: 3, enumerable: true},
            });
            
            var o17 = o2(o37);
            o18.o19(['d','x','y','z'], o17, "childchild should shadow all properties and disable enumerable properties from the prototype chain leaking out");
            
            var o17 = o2(o12);
            o18.o19(['c','w','x','z'], o17, "child should shadow all properties and disable enumerable properties from the prototype chain leaking out");
            
            var o17 = o2(o10);
            o18.o19(['b','w','y','z'], o17, "proto doesn't shadow any properties but non-enumerable properties should not show up in for..in loop");
        }
    },
    {
        name: "OS: 1905906 - Enumerating a type and alternating non-enumerable properties causes assert",
        o9: function() {
            function o38() { JSON.stringify(arguments); }
            o38();
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
