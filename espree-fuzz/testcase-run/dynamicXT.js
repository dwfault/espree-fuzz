//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test throw from dynamic script.
//

function e(o1)
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
(function () try { {
o421.o767(0, o70);
} } catch(e) {})();
}catch(e){}
    } catch(o7) {
        try {
o0(o8(o7.o9));
}catch(e){}
    }
}catch(o1){}
}

try {
if (this.o2 && this.o2.o10) {
    try {
this.o2.o10("TrimStackTracePath.js");
}catch(e)try { {} } catch(e) {}try { this.o530 = 0; } catch(e) {}
}
}catch(e){}

try {
o5();
}catch(e){}