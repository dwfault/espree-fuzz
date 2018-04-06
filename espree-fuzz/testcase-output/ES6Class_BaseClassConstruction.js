//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 super chain tests

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Simple base class object construction",
        o4: function () {
            class o5 {
                o6() {
                    return 'bar';
                }
                constructor(o8) {
                    this.o8 = o8;
                    this.o9 = "Simple";
                }
            };

            let o10 = new o5('val');

            o11.o12("Simple", o10.o9, "'this' is valid to use in Simple.constructor");
            o11.o12("val", o10.o8, "Arguments passed to Simple.constructor pass through correctly");
            o11.o12("bar", o10.o6(), "Result object can call class members");
            o11.o13(o10 instanceof o5, "new Simple(); uses new.target as 'Simple' itself which creates instanceof Simple class");
        }
    },
    {
        name: "Simple base class object construction which uses a lambda to access this",
        o4: function () {
            class o5 {
                constructor(o8) {
                    let o14 = () => {
                        this.o8 = o8;
                        this.o9 = "Simple";
                    };
                    o14();
                }
            };

            let o10 = new o5('val');

            o11.o12("Simple", o10.o9, "'this' is valid to use in Simple.constructor");
            o11.o12("val", o10.o8, "Arguments passed to Simple.constructor pass through correctly");
            o11.o13(o10 instanceof o5, "new Simple(); uses new.target as 'Simple' itself which creates instanceof Simple class");
        }
    },
    {
        name: "Base class constructors return 'this' if they explicitly return a non-object",
        o4: function () {
            class o15 {
                constructor(o8) {
                    this.o9 = 'ReturnArgumentBaseClass';
                    return o8;
                }
            };

            let o10 = new o15(null);
            o11.o12("ReturnArgumentBaseClass", o10.o9, "new ReturnArgumentBaseClass(null); returns 'this'");
            o11.o13(o10 instanceof o15, "new ReturnArgumentBaseClass(null); returns an instance of ReturnArgumentBaseClass");

            o10 = new o15(undefined);
            o11.o12("ReturnArgumentBaseClass", o10.o9, "new ReturnArgumentBaseClass(undefined); returns 'this'");
            o11.o13(o10 instanceof o15, "new ReturnArgumentBaseClass(undefined); returns an instance of ReturnArgumentBaseClass");

            o10 = new o15();
            o11.o12("ReturnArgumentBaseClass", o10.o9, "new ReturnArgumentBaseClass(); returns 'this'");
            o11.o13(o10 instanceof o15, "new ReturnArgumentBaseClass(); returns an instance of ReturnArgumentBaseClass");

            o10 = new o15('string');
            o11.o12("ReturnArgumentBaseClass", o10.o9, "new ReturnArgumentBaseClass('string'); returns 'this'");
            o11.o13(o10 instanceof o15, "new ReturnArgumentBaseClass('string'); returns an instance of ReturnArgumentBaseClass");

            o10 = new o15(5);
            o11.o12("ReturnArgumentBaseClass", o10.o9, "new ReturnArgumentBaseClass(5); returns 'this'");
            o11.o13(o10 instanceof o15, "new ReturnArgumentBaseClass(5); returns an instance of ReturnArgumentBaseClass");
        }
    },
    {
        name: "Base class constructors which return an object override return of 'this'",
        o4: function () {
            class o15 {
                constructor(o8) {
                    this.o9 = 'ReturnArgumentBaseClass';
                    return o8;
                }
            };

            let o10 = new o15({o9:'test'});
            o11.o12("test", o10.o9, "new ReturnArgumentBaseClass({foo:'test'}); returns {foo:'test'}");
            o11.o17(o10 instanceof o15, "new ReturnArgumentBaseClass({foo:'test'}); doesn't return an instance of ReturnArgumentBaseClass");

            o10 = new o15(new Boolean(false));
            o11.o12(new Boolean(false), o10, "new ReturnArgumentBaseClass(new Boolean(false)); returns new Boolean(false)");
            o11.o13(o10 instanceof Boolean, "new ReturnArgumentBaseClass(new Boolean(false)); returns an instance of Boolean");
        }
    },
];

o19.o20(o2, { o21: o0.o22[0] != "summary" });
