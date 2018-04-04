//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// - 'a' is considered a field since it's used by a nested function
// - 'a' is hoisted out of the outermost loop
// - At 'a |= 1', the hoisted stack sym for 'a' is int-specialized
// - At the first 'test0a()", 'a' is killed but we are lazy on killing the corresponding stack sym and the field value
// - The use of 'a' in 'i = a' in the innermost loop is hoistable out of the innermost loop, this is the first use of 'a' after
//   it was killed, and whether it's hoisted out of the innermost loop or not, the specialized stack sym and the field value are
//   no longer valid at the landing pad of the innermost loop. So, they must be killed at this point in the loop prepass.
function o0() {
    var o1 = 1;
    var o2 = [0];
    for(var o3 = 0; (o1 |= 1) && o3 < 1; ++o3) {
        o4();
        for(var o5 = 0; o5 < 1; ++o5) {
            for(var o6 = 0; o6 < 1; ++o6) {
                o3 = o1;
            }
            o4();
        }
        o3 = o1;
    }

    function o4() { o1; }
};
o0();

o7.o8("pass");
