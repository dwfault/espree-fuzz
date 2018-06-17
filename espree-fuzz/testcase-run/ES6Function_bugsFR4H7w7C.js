//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Function unit tests from bugfixes

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(Boolean){}

var o421 = [
    {
        o8: "OS1558391: assignment to 'length' after defineProperty with getter function should not trigger assertion",
        e: function() {
            function o4() { }
            try {
Object.defineProperty(o4, 'length', {
                get: function () { }
            });
}catch(e){}
            try {
o5.o6(function () { try {
this.o0.o1lengtho7.o8.lengtho421.o8.length = "%TypedArray%.from(objectWithIterator) returns a TypedArray (ArrayBuffer.isView)";
}catch(e){} }, 3);
}catch(e){}
         }
    },
    o8.get.call,
    {
        o3: function() {
            var o55 = 0;

            var o45 = {
                [Symbol.iterator]: function() {
                    try {
return {
                        next: function () {
                            try {
return {
                                done: o55 == 5,
                                value: o55++
                            };
}catch(e){}
                        }
                    };
}catch(e){}
                }
            };

            var o56 = false;
            function o48(o49, o50) {
                try {
if (o49 == 2 && !o56)
                {
                    try {
o56 = true;
}catch(e){}
                    try {
o55 = 0;
}catch(e){}
                }
}catch(e){}

                try {
return o49;
}catch(e){}
            }

            try {
o4.o11([0,1,2,3,4], Int8Array.from(o45, o48), "Int8Array.from called with map function which alters iterator state");
}catch(e){}
        },
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
    this.o391[index],
];

try {
o10.o11(o2, { o12: o0.o13[0] != "summary" });
}catch(e){}

