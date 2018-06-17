//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Function unit tests from bugfixes

try {
this.o626("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    {
        value: 5,
        o3: function() {
            function o4() { }
            try {
Object.defineProperty(o4, 'length', {
                get: function () { }
            });
}catch(call){}
            try {
o5.o6(function () { try {
o7.o8;
}catch(e){} }, "assertion failure on assignment to 'length' after defineProperty with getter");
}catch(e){}
         }
    },
    o489.o756(o31, o518, o486),
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

try try { {
o15 = function () {
    try {
o0.o1("globalFixedFunction1: overwritten");
}catch(e){}
}
} } catch(e) {}catch(e){}

