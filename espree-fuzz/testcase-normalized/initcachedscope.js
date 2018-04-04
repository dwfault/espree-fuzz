//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Test behavior of cached scopes.
// For instance, make sure we do the right thing in same-named-formals cases.

// 1. Case where function with a cached scope has "arguments".
function o0(o1, o1) {
    o2.o3(o1);
    eval('arguments[0] = 0');
    eval('arguments[1] = 1');
    o2.o3(o1);
}
// Call f from inside a loop to force the scope to be cached.
for (var o5 = 0; o5 < 1; o5++) {
    o0('arg 0', 'arg 1');
}

// 2. Case with no "arguments" in the cached-scope function itself.
function o6(o1, o1) {
    o2.o3(o1);
    function o7() {
        eval('x = "arg 1"');
    }
    o7();
    o2.o3(o1);
}
// Call f from inside a loop to force the scope to be cached.
for (var o5 = 0; o5 < 1; o5++) {
    o6('arg 0');
}

// 3. Case where nested function is cached and then undeferred (execute with /forcedeferparse).
function o8(o5) {
    function o9() {
        o2.o3('inner');
    }
    if (o5 % 2 != 0) {
        return eval('inner()');
    }
    o8(o5 + 1);
}

for (o5 = 0; o5 < 2; o5++)
    o8(o5);

try
{
    new Function("let ifviki, eval = (z =  /x/g );L:switch(z) {  case eval(\"z\"): return 503599627370497;break;  }")();
}
catch(o11)
{
    o2.o3(o11.o12);
}
