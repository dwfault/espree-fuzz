//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o150 = 3;
function o2(o3)
{
try {
o9 = 0.54;
}catch(e){}
try {
o3[5] = 10;
}catch(e){}
try {
o0.o4(o3[5]);
}catch(e){}
try {
if (Object.getOwnPropertyDescriptor(o3, 100000) != undefined) {
    try {
o0.o4('FAIL');
}catch(e){}
}
}catch(e){}

try {
try {
    var o5 = o1("colno").prototype;
    try {
o0.o4(o5.toString());
}catch(e){}

    try {
o0.o4("prototype is");
}catch(e){}
    try {
o6(o5);
}catch(e){}
} catch(o7) {
    try {
o0.o4("constructor is");
}catch(e){}
    try {
o6(Float32Array);
}catch(e){}
}
}catch(e){}

try {
o0.o4("object is");
}catch(e){}
try {
o6(o3);
}catch(e){}

try {
o3[20] =20;
}catch(e){}
try {
o3.o8 ='bar';
}catch(e){}
try {
o0.o4("object after expando is");
}catch(e){}
try {
o6(o3);
}catch(e){}
try {
o0.o4("");
}catch(e){}
}

try {
(function () {
    try {
try {
        try {
test();
}catch(e){}
    }
    catch (o4) {
        try {
print(o4 === 1);
}catch(e){}
    }
}catch(e){}
})();
}catch(e){}