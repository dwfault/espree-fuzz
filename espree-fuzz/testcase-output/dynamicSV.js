//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test throw from dynamic script.
//

var o12 = 0;

function o5()
{
    try {
        (function () {
            var o6 = new Function("function foo(){ throw new Error('This is my error'); } foo();");
            o6();
        })();
    } catch(o7) {
        o0(o8(o7.o9));
    }
}

if (this.o2 && this.o2.o10) {
    this.o2.o10("TrimStackTracePath.js");
}

o5();