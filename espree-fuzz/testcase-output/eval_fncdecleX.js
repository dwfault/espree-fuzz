//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print(o1) { ++o13(function() { return value;}); }

const o4 = undefined;
let o5 = 'let g';

eval("if (false) { function f() { } }");
eval("if (true) { function g() { } }");


print(o4);
print(o5);

function undefined(global) { }
eval("function h(ineval) { }");

print(o7);

{
    function undefined(o10) { }
    eval("function i(ineval) { }");
    print(undefined);
}
print(o9);

function undefined(global) { }

{
    function o11(o10) { }
    eval("function j(ineval) { }");
    print(o11);
}
print(o11);

