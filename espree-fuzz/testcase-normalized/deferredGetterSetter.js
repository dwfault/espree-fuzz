//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// /forcedeferparse test to make sure we can handle getters and setters at global scope,
// at function scope, and with nested functions.

var o0 = {
    o1 : 'x.y',
    get o2() { o3.o4('getting x.y'); return this.o1; },
    set o2(o5) { o3.o4('setting x.y'); this.o1 = o5; }
};

o3.o4(o0.o2);
o0.o2 = 'new x.y';

function o6() {

    var o0 = {
        o1 : 'local x.y',
        get o2() { o3.o4('getting local x.y'); return this.o1; },
        set o2(o5) { o3.o4('setting local x.y'); this.o1 = o5; }
    };

    o3.o4(o0.o2);
    o0.o2 = 'new local x.y';

    var o7 = {
        o1 : 'nested x.y',
        get o2() { function o8(o9) { o3.o4('getting nested x.y'); return o9.o1; } return o8(this); },
        set o2(o5) { function o10(o9, o5) { o3.o4('setting nested x.y'); o9.o1 = o5; } o10(this, o5); }
    };

    o3.o4(o7.o2);
    o7.o2 = 'new nested x.y';
    o3.o4(o7.o2);

    o3.o4(o0.o2);
}

o6();

o3.o4(o0.o2);
