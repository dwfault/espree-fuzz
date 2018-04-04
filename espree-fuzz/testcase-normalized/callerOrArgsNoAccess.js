//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    function o1 () {
        "use strict";
    }
    function o2 () {
        function o3 () {
            "use strict";
        }
    }
    try {
        o1.caller;  // should throw TypeError
        return false;
    }
    catch (o5) {
        o2.caller;  // should pass
        return o5 instanceof o6;
    }
}

function o7() {
    function o1 () {
        "use strict";
    }
    function o2 () {
        function o3 () {
            "use strict";
        }
    }
    try {
        o1.caller = 42;  // should throw TypeError
        return false;
    }
    catch (o5) {
        o2.caller = 42;  // should pass
        return o5 instanceof o6;
    }
}

function o8() {
    function o1 () {
        "use strict";
    }
    function o2 () {
        function o3 () {
            "use strict";
        }
    }
    try {
        o1.arguments;  // should throw TypeError
        return false;
    }
    catch (o5) {
        o2.arguments;  // should pass
        return o5 instanceof o6;
    }
}

function o10() {
    function o1 () {
        "use strict";
    }
    function o2 () {
        function o3 () {
            "use strict";
        }
    }
    try {
        o1.arguments = 42;  // should throw TypeError
        return false;
    }
    catch (o5) {
        o2.arguments = 42;  // should pass
        return o5 instanceof o6;
    }
}

// The following statements should pass.
o0.caller;
o7.caller = 42;
o8.arguments;
o10.arguments = 42;

// The following statements should print "true".
var o11 = o12.o13;
o11(o0());
o11(o7());
o11(o8());
o11(o10());
