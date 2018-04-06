//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1.o2;

function o3() {
    "use strict";
    function o4() {
        o0(this);
    }
    o0(this);
    eval("nested1();");
}

function o6() {
    function o7() {
        undefined;
        o0(this);
    }
    o0(this);
    eval("nested2();");
}

function o8() {
    function undefined() {
        o0(this);
    }
    o0(this);
    eval("'use strict'; nested3();");
}

o3();
o6();
o8();
