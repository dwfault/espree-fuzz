//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test throw from dynamic script.
//

function o0(o1)
{
    try {
if (this.o2)
    {
        try {
o2.o3(o1);
}catch(e){}
    }
    else
    {
        try {
o4(o1);
}catch(e){}
    }
}catch(e){}
}

function o5()
{
    try {
try {
        try {
(function () {
            var o6 = new Function("function foo(){ throw new Error('This is my error'); } foo();");
            try {
o6();
}catch(e){}
        })();
}catch(e){}
    } catch(o7) {
        try {
o0(o8(o7.o9));
}catch(e){}
    }
}catch(e){}
}

try {
if (this.o2 && this.o2.o10) {
    try {
this.o2.o10("TrimStackTracePath.js");
}catch(e){}
}
}catch(e){}

try {
o5();
}catch(e){}