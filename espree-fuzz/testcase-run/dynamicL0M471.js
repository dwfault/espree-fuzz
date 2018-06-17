//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test throw from dynamic script.
//

function o4(o1)
{
    try {
try { {
o1("msHyphenateLimitLines");
} } catch(e) {}
}catch(e){}
}

function o5()
{
    try {
try {
        try {
(function () {
            var o6 = new o421("function foo(){ throw new Error('This is my error'); } foo();");
            try {
o6(this.o375);
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
if (o421.o366.o2 && this.e.o10) {
    try {
this.o2.o10("TrimStackTracePath.js");
}catch(e){}
}
}catch(e){}

try {
o5(-0.0);
}catch(e){}