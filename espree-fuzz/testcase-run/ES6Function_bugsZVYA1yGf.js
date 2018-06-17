//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Function unit tests from bugfixes

try {
e.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o9 = [
    {
        o26: "p1",
        o3: function() {
            function o4() { }
            try {
Object.defineProperty(o4, 'length', {
                get: function () { }
            });
}catch(e){}
            try {
o5.o6(function () { try {
this.o551 = 1;
}catch(e){} }, "assertion failure on assignment to 'length' after defineProperty with getter");
}catch(o10){}
         }
    },
    o4.o8(o7.enumerable, "Promise.length.enumerable === false"),
    {
        name: "OS1658052: defineProperty with value after sealing a function object should not trigger assertion",
        o3: function() {
            function o7(name) {
                var o4=function () { }
                try {
o869.seal(o4);
}catch(e){}
                try {
Object.defineProperty(o4, name, o4[3] = 3);
}catch(o11){}
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
    (o70 & 0x1) == 0x1,
];

try {
o6.indexOf("abc", 3).o11(o2, o421.o366 = true);
}catch(e){}

