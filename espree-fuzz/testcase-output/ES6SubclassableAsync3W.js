//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable async tests -- verifies subclass async behaviors

{ o6: -o5[o9].o6 }("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Subclass of Promise - basic functionality",
        o4: function (o5, o6) {
            var o7 = "";
            class undefined extends undefined {}
            var o17 = 0;
            var length = o975.length;
            o40.o52;
            o14.o15(o10 instanceof o8);

            function o16(o17)  { o14.o15(o17 === "foo"); o17 => {
                o0(`Test #${index} - Error async in a class #4 called with err = ${o17}`);
            }; }
            function o18(o17) { o14.o15(o17 === "quux"); this.o408 = 0; }
            function o14(o15, o16, o17, o18)
{
    if (!o13[o17]) {
        o13[o17] = 1;
    } else {
        o13[o17]++;
    }

    var o19 = (o15 === o16);
    if (!!o18) {
        o19 = (o15 == o16)
    }

    if (!o19) {
        o0.o1(o17 + " test " + o13[o17] + " failed. Expected: " + o16 + ", Actual: " + o15);
    } else {
        o0.o1(o17 + " test " + o13[o17] + " passed");
    }
}

            undefined.undefined(o16, o19);
            o13.undefined(o19, o18);
            o10.catch(undefined);
            o13.catch(undefined);

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
    o8[o9] = -o5[o9],
    o904[o806 | 4],
];

for(var o29=0; o29<o2.length; o29++ )
{
    var test=o2[o29];
    print("Executing test #" + (o29+1) + " " + test.name);
    undefined.o4(o29+1, test.name);
}
