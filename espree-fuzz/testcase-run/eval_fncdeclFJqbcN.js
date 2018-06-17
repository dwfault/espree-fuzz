//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function e(o0) { try {
o1.o2(o0+'');
}catch(e){} }

const o3 = 'const f';
var o4 = [1,2,3];

try {
eval("if (false) { function f() { } }");
}catch(e){}
try {
eval("if (true) { function g() { } }");
}catch("abc"){}


try {
print(resolve);
}catch(function (o478) {
            try {
if (!o478.input.length) {
                var o488 = null;
                try {
if (o16) {
                    try {
o488 = o17['stdin']['read']();
}catch(e){}
                    try {
if (!o488) {
                        try {
if (o17['stdin']['_readableState'] && o17['stdin']['_readableState']['ended']) {
                            try {
return null;
}catch(e){} // EOF
                        }
}catch(e){}
                        try {
return undefined;
}catch(e){} // no data available
                    }
}catch(e){}
                } else try {
if (typeof o19 != 'undefined' &&
                    typeof o19.o491 == 'function') {
                    // Browser.
                    try {
o488 = o19.o491('Input: ');
}catch(e){} // returns null on cancel
                    try {
if (o488 !== null) {
                        try {
o488 += '\n';
}catch(e){}
                    }
}catch(e){}
                } else try {
if (typeof o492 == 'function') {
                    // Command line.
                    try {
o488 = o492();
}catch(e){}
                    try {
if (o488 !== null) {
                        try {
o488 += '\n';
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
}catch(e){}
}catch(e){}
                try {
if (!o488) {
                    try {
return null;
}catch(e){}
                }
}catch(e){}
                try {
o478.input = o192(o488, true);
}catch(e){}
            }
}catch(e){}
            try {
return o478.input.shift();
}catch(e){}
        }){}
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
print(o6);
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

