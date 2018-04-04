//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// This is a sketchy test because it relies on knowing that the following pattern
// hits the heuristics that decide to cache the scopes within the generator function.
// If those heuristics were to change this test could no longer be hitting the
// desired code paths.  If you suspect it is not hitting the cached scope code paths
// dump the bytecode and check for InitCachedScope and LdHeapArgsCached opcodes.
var o0 = {
    o1: function* () {
        var o2 = 'pas';
        function o3() { return o2; }
        return eval('a()') + arguments[0];
    }
};

function test() {
    for (var o7 = 0; o7 < 3; o7 += 1) {
        var o8 = o0.o1('sed');
        o9.o10(o8.next().value);
    }
}

test();
