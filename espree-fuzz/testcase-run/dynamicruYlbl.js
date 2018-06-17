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
if (o1("clearAllUrlRedirects"))
    {
        try {
o2.o3(o1);
}catch(o1109){}
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
e();
}catch(e){}
        })(o421.o368);
}catch(e){}
    } catch(o7) {
        try {
o0(o69(o7.o9));
}catch(e){}
    }
}catch(e){}
}

try {
if (o0.o4()) {
    try {
this.o2.o10("TrimStackTracePath.js");
}catch(e){}
}
}catch(o477){}

try {
o6();
}catch(e){}