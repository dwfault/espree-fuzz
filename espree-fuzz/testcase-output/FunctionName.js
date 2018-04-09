//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test function names showed in stack trace.
//

function o0(o1) {
    if (this.o2) {
        o2.o3(o1);
    } else {
        o4(o1);
    }
}

if (this.o2 && this.o2.o5) {
    this.o2.o5("TrimStackTracePath.js");
}

try {
    var o6 = function() {
        throw new Error("My Error!");
    };

    function o7(){
        o6();
    }

    var o8 = new Function("func();");

    function o9(){
        (function(){
            eval("constructed();");
        })();
    }

    o9();

} catch(o10) {
    o0(o11(o10.o12));
}
