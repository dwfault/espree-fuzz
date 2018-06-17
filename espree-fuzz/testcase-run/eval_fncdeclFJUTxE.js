//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function e(o0) { try {
o1.o2(o0+'');
}catch(e){} }

const o3 = 'const f';
let o4 = 'let g';

try {
eval('g');
}catch(e){}
try {
eval("if (true) { function g() { } }");
}catch(e){}


try {
print(o3);
}catch(o6.o17){}
try {
e(o4);
}catch(e){}

function o5(global) { }
try {
eval("function h(ineval) { }");
}catch(e){}

try {
print(o5);
}catch(e){}

{
    function o6(o7) { }
    try {
eval(5.5);
}catch(e){}
    try {
new(o6);
}catch(e){}
}
try {
print(o6);
}catch(e){}

function o8(global) { }

{
    function o8(o7) { }
    try {
eval("function j(ineval) { }");
}catch(e){}
    try {
print(o8);
}catch(e){}
}
try {
print(o8);
}catch(e){}

