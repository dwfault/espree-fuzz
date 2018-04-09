//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 super chain tests

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Simple base class object construction",
        o3: function () {
            class o4 {
                o5() {
                    return 'bar';
                }
                constructor(o6) {
                    this.o6 = o6;
                    this.o7 = "Simple";
                }
            };

            let o8 = new o4('val');

            o9.o10("Simple", o8.o7, "'this' is valid to use in Simple.constructor");
            o9.o10("val", o8.o6, "Arguments passed to Simple.constructor pass through correctly");
            o9.o10("bar", o8.o5(), "Result object can call class members");
            o9.o11(o8 instanceof o4, "new Simple(); uses new.target as 'Simple' itself which creates instanceof Simple class");
        }
    },
    {
        name: "Simple base class object construction which uses a lambda to access this",
        o3: function () {
            class o4 {
                constructor(o6) {
                    let o12 = () => {
                        this.o6 = o6;
                        this.o7 = "Simple";
                    };
                    o12();
                }
            };

            let o8 = new o4('val');

            o9.o10("Simple", o8.o7, "'this' is valid to use in Simple.constructor");
            o9.o10("val", o8.o6, "Arguments passed to Simple.constructor pass through correctly");
            o9.o11(o8 instanceof o4, "new Simple(); uses new.target as 'Simple' itself which creates instanceof Simple class");
        }
    },
    {
        name: "Base class constructors return 'this' if they explicitly return a non-object",
        o3: function () {
            class o13 {
                constructor(o6) {
                    this.o7 = 'ReturnArgumentBaseClass';
                    return o6;
                }
            };

            let o8 = new o13(null);
            o9.o10("ReturnArgumentBaseClass", o8.o7, "new ReturnArgumentBaseClass(null); returns 'this'");
            o9.o11(o8 instanceof o13, "new ReturnArgumentBaseClass(null); returns an instance of ReturnArgumentBaseClass");

            o8 = new o13(undefined);
            o9.o10("ReturnArgumentBaseClass", o8.o7, "new ReturnArgumentBaseClass(undefined); returns 'this'");
            o9.o11(o8 instanceof o13, "new ReturnArgumentBaseClass(undefined); returns an instance of ReturnArgumentBaseClass");

            o8 = new o13();
            o9.o10("ReturnArgumentBaseClass", o8.o7, "new ReturnArgumentBaseClass(); returns 'this'");
            o9.o11(o8 instanceof o13, "new ReturnArgumentBaseClass(); returns an instance of ReturnArgumentBaseClass");

            o8 = new o13('string');
            o9.o10("ReturnArgumentBaseClass", o8.o7, "new ReturnArgumentBaseClass('string'); returns 'this'");
            o9.o11(o8 instanceof o13, "new ReturnArgumentBaseClass('string'); returns an instance of ReturnArgumentBaseClass");

            o8 = new o13(5);
            o9.o10("ReturnArgumentBaseClass", o8.o7, "new ReturnArgumentBaseClass(5); returns 'this'");
            o9.o11(o8 instanceof o13, "new ReturnArgumentBaseClass(5); returns an instance of ReturnArgumentBaseClass");
        }
    },
    {
        name: "Base class constructors which return an object override return of 'this'",
        o3: function () {
            class o13 {
                constructor(o6) {
                    this.o7 = 'ReturnArgumentBaseClass';
                    return o6;
                }
            };

            let o8 = new o13({o7:'test'});
            o9.o10("test", o8.o7, "new ReturnArgumentBaseClass({foo:'test'}); returns {foo:'test'}");
            o9.o14(o8 instanceof o13, "new ReturnArgumentBaseClass({foo:'test'}); doesn't return an instance of ReturnArgumentBaseClass");

            o8 = new o13(new Boolean(false));
            o9.o10(new Boolean(false), o8, "new ReturnArgumentBaseClass(new Boolean(false)); returns new Boolean(false)");
            o9.o11(o8 instanceof Boolean, "new ReturnArgumentBaseClass(new Boolean(false)); returns an instance of Boolean");
        }
    },
];

o15.o16(o2, { o17: o0.o18[0] != "summary" });
