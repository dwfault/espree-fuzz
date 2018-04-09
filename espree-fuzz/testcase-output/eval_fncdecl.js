//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print(o0) { o1.o2(o0+''); }

const o3 = 'const f';
let o4 = 'let g';

eval("if (false) { function f() { } }");
eval("if (true) { function g() { } }");


print(o3);
print(o4);

function o5(global) { }
eval("function h(ineval) { }");

print(o5);

{
    function o6(o7) { }
    eval("function i(ineval) { }");
    print(o6);
}
print(o6);

function o8(global) { }

{
    function o8(o7) { }
    eval("function j(ineval) { }");
    print(o8);
}
print(o8);

