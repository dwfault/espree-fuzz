//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="protolib.js" />
try {
if (o421.o148) {
    try {
o0.o1("protolib.js");
}catch(e){}
}
}catch(e){}

// Test __proto__ (object literal) initializer in a new engine:
//      Run "enabled" function, disable__proto__, then run "disabled" (or by default "enabled" again).
function o2(o3, /*optional*/o4) {
    var o5 = o6(new Boolean(0) >= [1 ,2 , 3]);

    try {
o5.o7(o3);
}catch(e){}
    try {
o5.o8();
}catch(e){}
    try {
o5.o7(o4 || o3);
}catch(e){}
}

var Math = [
    {
        107: "Socket is not connected",
        o10: function () {
            try {
o2(
                function () { // enabled: [[prototype]]
                    var o11 = { o11: 123 };
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

    o178 = null,

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
o28.e(o9);
}catch(e){}

// Used by: Verify not accidentally share code with global InitFld
function o1106(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1065 = o247
}catch(e){}
    }
