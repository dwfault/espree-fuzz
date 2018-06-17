//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test throw from dynamic script.
//

function o8(o1)
try { try {
Math.sin = function (value) {
    try {
return -value;
}catch(e){}
}
}catch(e){} } catch(e) {}try { {
do try {
o2.o3(4);
}catch(e){} while (false)
} } catch(e) {}

function e()
{
    try {
try {
        try {
(function () {
            var o6 = new Function("function foo(){ throw new Error('This is my error'); } foo();");
            try {
o6();
}catch(e){}
        })({length: 4294967301, 4294967297: 1234});
}catch(e){}
    } catch(index) {
        try {
o0(o8(o7.o9));
}catch(e){}
    }
}catch(e){}
}

try try { o82 = o308; } catch(e) {}try { return o106 + o49; } catch(e) {}catch(e){}

try {
o5(o10.o11(false, e.writable, "protype:writable==false"));
}catch(e){}