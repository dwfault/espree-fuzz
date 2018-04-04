//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [];

function o1() {
    var o2 = {};
    var o3 = [787917310, 4294967296, 926685325, 104, -1308153184, -1073741824, 1868785301, 1064239984, 693100003, 2147483647, 2147483647, -575755389, -615389387];
    //Snippet:trycatchstackwind.ecs
    function o4() {
        function o5() {
            try {
                this.o6();
            } catch (o7) {
            }
        }
        var o8 = { o6: 0.1 };
        o8.o6;
        for (var o9 = 0; o9 < 1; ++o9) {
            o5();
            var o10 = o8.o6;
            o10 += 1;
            // CSE when used within conditional operator
            var o11;
            o3 + o11;
            o0.push(o10);
        }
    };
    o4();

    for (var o13 = 0; o13 < o0.length; o13++) {
        o15.o16(o0[o13]);
    };
};

// generate profile
o1();
// Run Simple JIT
o1();

// run JITted code
o17 = true;
o1();
