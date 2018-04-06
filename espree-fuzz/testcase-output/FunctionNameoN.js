//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test function names showed in stack trace.
//

function o0(o1) {
    if (++o22) {
        o5[o9](o1);
    } else {
        o4(o1);
    }
}

if (o38.length.o2 && this.o2.o5) {
    this.o2.o5("TrimStackTracePath.js");
}

try {
    var o6 = function() {
        throw new Error("My Error!");
    };

    function undefined(){
        o6();
    }

    var o9 = new Function(undefined);

    function undefined(){
        (function(){
            eval(undefined);
        })();
    }

    o11();

} catch(o13) {
    o0(o14(o13.o15));
}
