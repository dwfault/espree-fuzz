//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable async tests -- verifies subclass async behaviors

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Subclass of Promise - basic functionality",
        o4: function (o5, o6) {
            var o7 = "";
            class o8 extends Promise {}
            var o10 = new o8(function(resolve, reject) { resolve("foo"); });
            var o13 = new o8(function(resolve, reject) { reject("quux"); });
            o7 += "a";
            o14.o15(o10 instanceof o8);

            function o16(o17)  { o14.o15(o17 === "foo"); o7 += 'b'; }
            function o18(o17) { o14.o15(o17 === "quux"); o7 += 'c'; }
            function o19(o17)  { o14.o15(false);   }

            o10.then(o16, o19);
            o13.then(o19, o18);
            o10.catch(o19);
            o13.catch(o18);

            o10.then(function() {
                // P.prototype.then() should return a new P
                o14.o15(o10.then() instanceof o8 && o10.then() !== o10);
                o7 += 'd';
                o22();
            });

            function o22() {
                print("Result of test #" + o5 + " " + o6);
                print(o7);
            }
        }
    },
    {
        name: "Subclass of Promise - all",
        o4: function (o5, o6) {
            var o7 = "";
            class o8 extends Promise {}
            var o24 = o8.all([
                new Promise(function(resolve)   { resolve("foo"); }),
                new Promise(function(resolve)   { resolve("foo"); }),
            ]);
            o7 += "a";
            var o26 = o8.all([
                new Promise(function(o27, reject) { reject("bar"); }),
                new Promise(function(o27, reject) { reject("bar"); }),
            ]);
            o14.o15(o24 instanceof o8);
            o24.then(function(o17) { o14.o15(o17 + "" === "foo,foo"); o7 += 'b'; });
            o26.catch(function(o17) { o14.o15(o17 === "bar"); o7 += 'c'; o22(); });

            function o22() {
                print("Result of test #" + o5 + " " + o6);
                print(o7);
            }
        }
    },
    {
        name: "Subclass of Promise - race",
        o4: function (o5, o6) {
            var o7 = "";
            class o8 extends Promise {}
            var o24 = o8.race([
              new Promise(function(resolve)   { resolve("foo"); }),
              new Promise(function(o27, reject) { reject("bar"); }),
            ]);
            o7 += "a";
            var o26 = o8.race([
              new Promise(function(o27, reject) { reject("baz"); }),
              new Promise(function(resolve)   { resolve("qux"); }),
            ]);
            o14.o15(o24 instanceof o8);
            o24.then(function(o17) { o14.o15(o17 === "foo"); o7 += 'b' });
            o26.catch(function(o17) { o14.o15(o17 === "baz"); o7 += 'c'; o22(); });

            function o22() {
                print("Result of test #" + o5 + " " + o6);
                print(o7);
            }
        }
    },
];

for(var o29=0; o29<o2.length; o29++ )
{
    var test=o2[o29];
    print("Executing test #" + (o29+1) + " " + test.name);
    test.o4(o29+1, test.name);
}
