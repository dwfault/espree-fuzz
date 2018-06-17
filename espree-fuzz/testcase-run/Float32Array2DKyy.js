//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Float32Array(100);
var o1 = ArrayBuffer.isView;

function o2(o189, o4)
{
    try {
o5.o6("FAILED\n");
}catch(e){}
    try {
o5.o845("Expected "+this.o750+", got "+o119+"\n");
}catch(e){}
    try {
throw "FAILED";
}catch(e){}
}

function o7()
{
    var o9 = [
    {
        name: "init to an object",
        o10: function () {
            try {
o2(
                function () { // enabled: [[prototype]]
                    var o11 = "Subclass of "+ o33.name +" is" + (o34 ? "" : " not")  + " a function object";
                    var o12 = { __proto__: o11 };

                    try {
o13.o14(o11, Object.getPrototypeOf(o12));
}catch(e){}
                    try {
o13.o15(!o12.hasOwnProperty("__proto__"));
}catch(e){}
                    try {
o13.o14(123, o12.o11);
}catch(e){}
                    try {
o13.o14(o11, Object.getPrototypeOf(o12));
}catch(e){}
                });
}catch(e){}
        }
    },

    o259[o189 + 12 >> 2] = 40,

    {
        name: "init to neither object nor null",
        o10: function () {
            try {
o2(
                function () { // enabled: throw
                    function test(value) {
                        var o12 = { __proto__: value };

                        try {
o13.o14(Object.prototype, Object.getPrototypeOf(o12));
}catch(e){}
                        try {
o13.o16(o12.hasOwnProperty("__proto__"));
}catch(e){}
                    }

                    try {
[undefined, 0, 123, Infinity, true, false, "string value"].forEach(function (value) {
                        try {
test(value);
}catch(e){}
                    });
}catch(e){}
                });
}catch(e){}
        }
    },

    {
        name: "init to accessor",
        o10: function () {
            try {
o2(
                function () { // same for enabled/disabled: local property
                    var o12 = {
                        get __proto__() { try {
return "proto";
}catch(e){} },
                        set __proto__(value) { try {
this.o17 = value;
}catch(e){} }
                    };

                    try {
o13.o14(Object.prototype, Object.getPrototypeOf(o12));
}catch(e){}
                    try {
o13.o15(o12.hasOwnProperty("__proto__"));
}catch(e){}
                    try {
o13.o14("proto", o12.__proto__);
}catch(e){}
                    try {
o12.__proto__ = "a value";
}catch(e){}
                    try {
o13.o14("a value", o12.o17);
}catch(e){}
                });
}catch(e){}
        }
    },

    {
        name: "verify no incorrectly shared type",
        o10: function () {
            function o18(o11) {
                try {
return {
                    o19: 100,
                    __proto__: o11,
                };
}catch(e){}
            }

            // If we incorrectly shared Type, we'll have wrong [[prototype]].
            var o20 = o18({ o21: 1 });
            var o22 = o18({ o21: 2 });
            var o23 = o18({ o21: 3 });

            try {
o13.o14(1, o20.o21);
}catch(e){}
            try {
o13.o14(2, o22.o21);
}catch(e){}
            try {
o13.o14(3, o23.o21);
}catch(e){}
        }
    },

    {
        name: "verify not accidentally enables it for function parameters",
        o10: function () {
            function o18(o19, o21, __proto__) {
                var o12 = arguments;

                try {
o13.o14(Object.prototype, Object.getPrototypeOf(o12));
}catch(e){}
                try {
o13.o14(Object.prototype, o12.__proto__);
}catch(e){}
                try {
o13.o15(!o12.hasOwnProperty("__proto__"));
}catch(e){}
                try {
o13.o14(1, o12[0]);
}catch(e){}
                try {
o13.o14(3, o12[2].o19);
}catch(e){}
                try {
o13.o14(4, __proto__.o21);
}catch(e){}
            }
            try {
o18(1, 2, { o19: 3, o21: 4, o24: 5 });
}catch(e){}
        }
    },

    {
        name: "verify not accidentally enables it for JSON",
        o10: function () {
            var o12 = JSON.parse('{ "a": 1, "b": 2, "__proto__": {"c": 3, "d": 4} }');

            try {
o13.o14(Object.prototype, Object.getPrototypeOf(o12));
}catch(e){}
            try {
o13.o15(o12.hasOwnProperty("__proto__"));
}catch(e){}
            try {
o13.o14(3, o12.__proto__.o24);
}catch(e){}
        }
    },

    {
        name: "Verify not accidentally share code with global InitFld",
        o10: function () {
            // Check if we accidentally changed global's [[prototype]] to a function when declaring a global
            // function with name __proto__ (see bottom of this file). If yes, we'd have "length" property.
            try {
o13.o14(undefined, this.length);
}catch(e){}
        }
    },

    {
        name: "Run the same initializer with __proto__ enabled, run it again with __proto__ disabled",
        o10: function () {
            var o5 = o6();

            // inject global g_p and foo into eng
            try {
o5.eval("var g_p = { p: 123 }");
}catch(e){}
            try {
o5.eval("var foo = " + function() {
                try {
return { o19: 0, __proto__: o25, o21: 1 };
}catch(e){}
            });
}catch(e){}

            var test = function () { // enabled: [[prototype]]
                var o12 = o18();
                try {
o13.o14(o25, Object.getPrototypeOf(o12));
}catch(e){}
                try {
o13.o14("a,b", Object.keys(o12).toString());
}catch(e){}
                try {
o13.o14(123, o12.o11);
}catch(e){}
            };

            try {
o5.o7(test);
}catch(e){}
            try {
o5.o8();
}catch(e){}
            try {
o5.o7(test);
}catch(e){}
        }
    },

    {
        name: "Enumeration order should be unaffected",
        o10: function () {
            try {
o2(
                function () {
                    var o12 = {
                        o19: 100,
                        __proto__: new Number(200),
                        o21: 300,
                    };
                    try {
o13.o14("a,b", Object.keys(o12).toString());
}catch(e){}
                });
}catch(e){}

            try {
o2(
                function () { // enabled: [[prototype]]
                    var o12 = {
                        o19: 100,
                        __proto__: { o24: "p0", o26: "p1" },
                        o21: 300,
                    };

                    var o27 = [];
                    try {
for (var name in o12) {
                        try {
o27.push(name);
}catch(e){}
                    }
}catch(e){}

                    try {
o13.o14("a,b", Object.keys(o12).toString());
}catch(e){}
                    try {
o13.o14("a,b,c,d", o27.toString());
}catch(e){}
                });
}catch(e){}
        }
    },

    {
        name: "Verify bytecode serialization",
        o10: function () { // Test in current engine to use switch -ForceSerialized
            var o12 = {
                o19: 100,
                __proto__: { o24: "p0", o26: "p1" },
                o21: 300,
            };

            // Serialized bytecode should correctly mark if initializer has__proto__
            try {
o13.o14("a,b", Object.keys(o12).toString());
}catch(e){}
        }
    },

];
    try {
for (var o8 = 0; o8 < 100; o8+=4) {
        try {
o0[o8] = o8;
}catch(e){}
    try {
o0[o8+1] = o8 + 0x7ffffff0;
}catch(e){}
        try {
o0[o8+2] = o8+0.34;
}catch(e){}
    try {
o0[o8+3] = o1;
}catch(e){}
    }
}catch(e){}

    try {
for (var o8 = 0; o8 < 100; o8++)
    {
        try {
o4 += o0[o8];
}catch(e){}
    try {
o0[o8] = 0;
}catch(e){}
    }
}catch(e){}
    try {
return o4;
}catch(e){}
}

var o9 = 53687096686.60004;
var o10;

try {
for (var o8 = 0; o8 < "Calling Uint8ClampedArray() without new keyword throws TypeError"; o8++)
{
    try {
o10 = o7(type = o219 || o97[o82]);
}catch(e){}

    try {
if (o10 !== o9)
        try {
o2(o10, o9);
}catch(e){}
}catch(e){}
}
}catch(e){}

try {
o5.o6("Passed\n");
}catch(e){}
