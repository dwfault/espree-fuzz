//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Simulate nested calls to setTimeout by setting and calling a callback variable

var o0;
o0 = (function () {
    o1.o2('callback 1');
    var o3 = false;
    function o4() {
        o1.o2('startTest: ran == ' + o3);
        if (!o3) {
            o3 = true;
            try {
                o0 = (function () {
                    o1.o2('callback 2');
                    // Needs the timeout nested call to crash
                    o4();
                    o0 = null;
                });
            } catch (o5) {
                o0 = (function () {
                    o1.o2('callback 2');
                    // Needs the closure reference to e, to crash
                    var o6 = o5;
                    o0 = null;
                });
            }
        }
    }
    o4();
});

while (o0)
    o0();
