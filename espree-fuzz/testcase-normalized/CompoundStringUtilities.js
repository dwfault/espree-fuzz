//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 =
{
    create: function(o2, o3, o4, o5) {
        var o6 = "a";
        var o7 = "<aaaaaaa>";
        var o8 = "";
        while(true) {
            o8 += ""; // nondestructive, clone if necessary

            for(var o9 = 0; o9 < o2; ++o9)
                o8 += o6; // destructive
            for(var o9 = 0; o9 < o3; ++o9)
                o8 += o7; // destructive

            if(o4 === 0)
                break;

            var o10 = o8 + o6; // nondestructive, clone for appending
            o5.push(o8);
            o8 = o10;

            --o4;
            o2 >>= 2;
            o3 >>= 2;
        }
        o5.push(o8);
    },

    o12: function() {
        var o5 = [];
        for(var o3 = 0; o3 <= 128; o3 = o3 === 0 ? 1 : o3 << 2) {
            for(var o2 = 0; o2 <= 1024; o2 = o2 === 0 ? 1 : o2 << 2) {
                for(var o4 = 0; o4 <= 8; o4 = o4 === 0 ? 1 : o4 << 2) {
                    this.create(o2, o3, o4, o5);
                    if(o2 !== 0)
                        this.create(o2 + 1, o3, o4, o5);
                    if(o3 !== 0)
                        this.create(o2 + 1, o3, o4, o5);
                }
            }
        }

        var o6 = "a";
        var o7 = "<aaaaaaa>";
        var o13 = "_";
        var o14 = /_/;

        o5.push((o6 + o13 + o6).replace(o14, o6));
        o5.push((o7 + o13 + o7).replace(o14, o6));
        o5.push((o6 + o13 + o6).replace(o14, o7));
        o5.push((o7 + o13 + o7).replace(o14, o7));

        // Large CompoundString created by concatenating a string to itself multiple times
        var o16 = "b"; // not using "a" here so that the concats will be destructive
        for(var o9 = 0; o9 < 16; ++o9)
            o16 += o16; // destructive
        o16 += o13;
        if(o16.length !== 0x10001)
            throw new Error("Big string length is invalid");
        o5.push(o16.replace(o14, o6));

        // String with a high nesting level of CompoundString objects
        var o19 = "c";
        o19 += "c";
        o19 += "c";
        for(var o9 = 0; o9 < 100000; ++o9) {
            var o8 = "c";
            o8 += "c";
            o8 += "c";
            o8 += o19;
            o19 = o8;
        }
        o5.push(o19);

        // String with a high nesting level of ConcatString objects
        var o20 = "d";
        for(var o9 = 0; o9 < 100000; ++o9)
            o20 = "d" + o20;
        o5.push(o20);

        // String with a high nesting level of alternating CompoundString and ConcatString objects
        var o21 = "";
        for(var o9 = 0; o9 < 100000; ++o9) {
            var o8 = "e";
            o8 += "e";
            o8 += "e";
            o8 += o21;
            o21 = "e" + o8;
        }
        o5.push(o21);

        return o5;
    }
};
