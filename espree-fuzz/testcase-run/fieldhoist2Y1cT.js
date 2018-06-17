//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o2 = {
    add: function () {
        try {
return (this.o3 + this.o4) + " (original)";
}catch(e){}
    },
    o5: function (o8) {
        try {
return (o8.o3 - o8.o4) + " (original)";
}catch(e){}
    }
}
var o6 = o0();
try {
if (o6 == 52)
{
    try {
try { this.o509 = true; } catch(e) {}
}catch(e){}
}
else
{
    try {
o7.o8("FAIL: got " + o6);
}catch(e){}
}
}catch(e){}
