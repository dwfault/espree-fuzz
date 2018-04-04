//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -mic:2 -off:simplejit -force:rejit

function o0() {
}
var o1 = {};
o1 = o0();

function o2() {
    var o3 = 0;
    var o4 = { o5: 0 };
    function o6() {
        o4.o7 = 1;
    };
    Object.defineProperty(o4, 'prop0', {
        set: function () {
            o3++;
            o11.o12(o3);
        }
    });
    
    o6();
    o6();
}
o2();
o2();