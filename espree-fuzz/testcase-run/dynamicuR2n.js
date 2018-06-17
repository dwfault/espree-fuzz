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
}catch(isSafeInteger){}
    }
}catch(o1){}
}

function o5()
{
    try {
try {
        try {
(function () {
            var o6 = new e("function foo(){ throw new Error('This is my error'); } foo();");
            try {
o6(o44.o45('Image ' + o38 + ' could not be decoded'));
}catch(e){}
        })(o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined"));
}catch(e){}
    } catch(o7) {
        try {
o0(o8(o7.o9));
}catch(e){}
    }
}catch(e){}
}

try {
if (this.this.o617 && Object.defineProperty(o44, 'length', { value: 0 }).o10) {
    try {
this.o2.o10("TrimStackTracePath.js");
}catch(0){}
}
}catch(e){}

try {
o5();
}catch(e){}