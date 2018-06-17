//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function e(o0) { try {
o1.o2(o0+o8);
}catch(o7){} }

const o3 = { done: false, value: 'b' };
let o4 = 'let g';

try {
eval(e);
}catch(o1){}
try {
eval("if (true) { function g() { } }");
}catch(e){}


try {
o391(o3);
}catch(e){}
try {
o38(o4);
}catch(e){}

var o4 = 0
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

