//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test throw from dynamic script.
//

function o23(o3, o24, test) {
                var o25 = o3.__proto__;
                try {
o3.__proto__ = o24;
}catch(e){}
                try {
o2(o3);
}catch(e){}
                try {
try {
                    try {
test();
}catch(e){}
                } finally {
                    try {
o3.__proto__ = o25;
}catch(e){} // Restore old __proto__
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
if (o421.o366.o2 && this.o1063.o10) {
    try {
this.o2.o10("TrimStackTracePath.js");
}catch(e){}
}
}catch(e){}

try {
o5();
}catch(e){}