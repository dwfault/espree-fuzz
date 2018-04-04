//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print(o1) { o2.o3(o1+''); }

const o4 = 'const f';
let o5 = 'let g';

eval("if (false) { function f() { } }");
eval("if (true) { function g() { } }");


print(o4);
print(o5);

function o7(global) { }
eval("function h(ineval) { }");

print(o7);

{
    function o9(o10) { }
    eval("function i(ineval) { }");
    print(o9);
}
print(o9);

function o11(global) { }

{
    function o11(o10) { }
    eval("function j(ineval) { }");
    print(o11);
}
print(o11);

