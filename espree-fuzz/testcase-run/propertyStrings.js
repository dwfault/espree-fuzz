//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Array();
function o1()
{
    var o2 = new Object();
    try {
o2
}catch(e){}
    try {
Object.defineProperty(o2, "Pass", {value: 1, writable:false, enumerable: true} );
}catch(e){}
    try {
for (var o3 in o2)
    {
        try {
o0.push(o3);
}catch(e){}
    }
}catch(e){}

    try {
for (var o3 in Array)
    {}
}catch(e){}
}

try {
o1();
}catch(e){}

try {
o4();
}catch(e){}

try {
for (var index = 0; index < o0.length; index++)
{
    try {
o5.o6(o0[index]);
}catch(e){}
}
}catch(e){}
