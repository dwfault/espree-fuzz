//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable async tests -- verifies subclass async behaviors

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Subclass of Promise - basic functionality",
        o3: function (o4, o5) {
            var o6 = "";
            class o7 extends Promise {}
            var o8 = new o7(function(resolve, reject) { resolve("foo"); });
            var o9 = new o7(function(resolve, reject) { reject("quux"); });
            o6 += "a";
            o10.o11(o8 instanceof o7);

            function o12(o13)  { o10.o11(o13 === "foo"); o6 += 'b'; }
            function o14(o13) { o10.o11(o13 === "quux"); o6 += 'c'; }
            function o15(o13)  { o10.o11(false);   }

            o8.then(o12, o15);
            o9.then(o15, o14);
            o8.catch(o15);
            o9.catch(o14);

            o8.then(function() {
                // P.prototype.then() should return a new P
                o10.o11(o8.then() instanceof o7 && o8.then() !== o8);
                o6 += 'd';
                o16();
            });

            function o16() {
                print("Result of test #" + o4 + " " + o5);
                print(o6);
            }
        }
    },
    {
        name: "Subclass of Promise - all",
        o3: function (o4, o5) {
            var o6 = "";
            class o7 extends Promise {}
            var o17 = o7.all([
                new Promise(function(resolve)   { resolve("foo"); }),
                new Promise(function(resolve)   { resolve("foo"); }),
            ]);
            o6 += "a";
            var o18 = o7.all([
                new Promise(function(o19, reject) { reject("bar"); }),
                new Promise(function(o19, reject) { reject("bar"); }),
            ]);
            o10.o11(o17 instanceof o7);
            o17.then(function(o13) { o10.o11(o13 + "" === "foo,foo"); o6 += 'b'; });
            o18.catch(function(o13) { o10.o11(o13 === "bar"); o6 += 'c'; o16(); });

            function o16() {
                print("Result of test #" + o4 + " " + o5);
                print(o6);
            }
        }
    },
    {
        name: "Subclass of Promise - race",
        o3: function (o4, o5) {
            var o6 = "";
            class o7 extends Promise {}
            var o17 = o7.race([
              new Promise(function(resolve)   { resolve("foo"); }),
              new Promise(function(o19, reject) { reject("bar"); }),
            ]);
            o6 += "a";
            var o18 = o7.race([
              new Promise(function(o19, reject) { reject("baz"); }),
              new Promise(function(resolve)   { resolve("qux"); }),
            ]);
            o10.o11(o17 instanceof o7);
            o17.then(function(o13) { o10.o11(o13 === "foo"); o6 += 'b' });
            o18.catch(function(o13) { o10.o11(o13 === "baz"); o6 += 'c'; o16(); });

            function o16() {
                print("Result of test #" + o4 + " " + o5);
                print(o6);
            }
        }
    },
];

for(var o20=0; o20<o2.length; o20++ )
{
    var test=o2[o20];
    print("Executing test #" + (o20+1) + " " + test.name);
    test.o3(o20+1, test.name);
}
