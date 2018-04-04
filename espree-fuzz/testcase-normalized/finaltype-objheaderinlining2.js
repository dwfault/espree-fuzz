//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = [];
    // AddFastPath2: Monomorphic Inline Set or Add
    function o2() {
        var o3 = 10;
        var o4 = new Array(o3);
        for (var o6 = 0; o6 < o3; o6++) {
            // 4 inlined slots
            var o7 = { o8: 0 };

            if (o6 % 2)
                o7.o9 = 1;

            // Profile data indicate set or add
            o7.o9 = 1;
            o7.o10 = 1;
            o4[o6] = o7;
        }

        for (var o6 = 0; o6 < o3; o6++) {
            o1.push("{ a: " + o4[o6].o8 + ", p: " + o4[o6].o9 + ", z: " + o4[o6].o10 + "}");
        }
    }

    o2();

};

o0();
o0();

// run JITted code
o12 = true;
o0();

o13.o14('pass');
