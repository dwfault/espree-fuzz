//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// "outer" is called in a loop but can't re-use its scope because "inner" escapes.
// The escape isn't detected with /forcedeferparse, because inner2 isn't visible to the
// byte code gen.
// So executing inner2 must invalidate the cache.
// If the cache is not invalidated, the call to escaped[1] will get the value of "x"
// from the scope cached when we executed escaped[0].
function o0() {
    var o1 = "yes!";
    function o2() {
        eval('WScript.Echo(x); x = "no!"');
    }
    function o4() {
        return o2;
    }
    return o4();
}

var o5 = [2];
for (var o6 = 0; o6 < 2; o6++) {
    o5[o6] = o0();
}
for (o6 = 0; o6 < o5.length; o6++) {
    o5[o6]();
}

// As above, but the escape of "inner" is hidden by eval.
// Cache must be invalidated by the runtime when it does GetPropertyScoped.
function o8() {
    var o1 = "yes!";
    function o2() {
        eval('WScript.Echo(x); x = "no!"');
    }
    function o4() {
        return eval('inner');
    }
    return o4();
}

for (o6 = 0; o6 < 2; o6++) {
    o5[o6] = o8();
}
for (o6 = 0; o6 < o5.length; o6++) {
    o5[o6]();
}
