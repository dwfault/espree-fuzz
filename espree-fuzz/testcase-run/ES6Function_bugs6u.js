//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Function unit tests from bugfixes

try {
o1092 = o750 + (o1072 >>> 31 << 2) + 16 | 0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o421 = [
    {
        name: "OS1558391: assignment to 'length' after defineProperty with getter function should not trigger assertion",
        o3: function() {
            function o4() { }
            try {
Object.defineProperty(o4, 'length', {
                get: function () { }
            });
}catch(e){}
            try {
o5.o6(function () { try {
o4.length = 1;
}catch(e){} }, "assertion failure on assignment to 'length' after defineProperty with getter");
}catch(e){}
         }
    },
    {
        name: "OS1616633: defineProperty with getter function after sealing a function object should not trigger assertion",
        o3: function() {
            function o7(name) {
                var o4=function () { }
                try {
Object.seal(o4);
}catch(e){}
                try {
Object.defineProperty(o4, name, {
                    get: function () { }
                    });
}catch(e){}
            }
/* This check seems wrong in that we are trying to change length to a getter, which should throw.
 * Verified that V8 also throws here.
 *          assert.doesNotThrow(function () { g('length') }, "assertion failure on defineProperty 'length' with getter after sealing a function object");
 */
            try {
o5.o8(function () { try {
o7('arguments')
}catch(e){} }, o9, "Cannot redefine non-configurable property 'arguments'");
}catch(e){}
            try {
o5.o8(function () { try {
o7('caller')
}catch(e){} }, o9, "Cannot redefine non-configurable property 'caller'");
}catch(e){}
         }
    },
    {
        name: "OS1658052: defineProperty with value after sealing a function object should not trigger assertion",
        o3: function() {
            function o7(name) {
                var o4=function () { }
                try {
Object.seal(o4);
}catch(e){}
                try {
Object.defineProperty(o4, name, {
                    value: 0
                    });
}catch(e){}
            }
            try {
o5.o6(function () { try {
o7('length')
}catch(e){} }, "assertion failure on defineProperty 'length' with value after sealing a function object");
}catch(e){}
            try {
o5.o8(function () { try {
o7('arguments')
}catch(e){} }, o9, "Cannot redefine non-configurable property 'arguments'");
}catch(e){}
            try {
o5.o8(function () { try {
o7('caller')
}catch(e){} }, o9, "Cannot redefine non-configurable property 'caller'");
}catch(e){}
         }
    },
    {
        name: "OS1893544: defineProperty with {writable: false, configurable:true} after defineProperty with getter on a function object should not trigger assertion",
        o3: function() {
            function o7(name) {
                var o4=function () { }
                try {
Object.defineProperty(o4, name, {
                    get: function () { },
                    });
}catch(e){}
                try {
Object.defineProperty(o4, name, {
                    writable: false,
                    configurable: true
                    });
}catch(e){}
            }
            try {
o5.o6(function () { try {
o7('length')
}catch(e){} }, "assertion failure on defineProperty 'length' with {writable: false, configurable:true} after defineProperty with getter on a function object");
}catch(e){}
            try {
o5.o8(function () { try {
o7('arguments')
}catch(e){} }, o9, "Cannot redefine non-configurable property 'arguments'");
}catch(e){}
            try {
o5.o8(function () { try {
o7('caller')
}catch(e){} }, o9, "Cannot redefine non-configurable property 'caller'");
}catch(e){}
         }
    },
];

try {
o10.o11(o2, { o12: o0.o13[0] != "summary" });
}catch(e){}

