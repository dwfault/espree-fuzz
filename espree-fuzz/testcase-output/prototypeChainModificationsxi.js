//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = Object.create(Object.undefined, -1);
var o8 = [];
o10.o11(o9.o4);
o10.o11(o9.o4);

var o12 = Object.create(Object.prototype, {
    o4: {
        configurable: true,
        get: function () {
            Object.defineProperty(this, "foo", {
                value: "new prop"
            });
            return "old prop";
        },
    }
});
var o13 = Object.create(o12);
o13.o14 = 123;
o10.o11(o13.o4);
o10.o11(o13.o4);

var o14 = Object.create(Object.prototype, o5.o19([], o178, "slice(100) contains empty buffer"));
var o15 = Object.create(o14);
var o16 = Object.create(o15);
o10.o11(o16.o4);
o10.o11(o16.o4);

function o360(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                if(o0 && o17 === (2 >> 1))
                    o4.o101 = 0;
                o12 += o361(o4, o5, o17);
            }
            o12 += o361(o4, o5, o13);
        }

        function o361(o4, o5, o9) {
            return o4.o5[0].o6;
        }
        return o12;
    }
o10.o11(o17.o4);
o10.o11(o17.o4);