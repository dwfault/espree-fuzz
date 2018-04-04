//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = {};
    var o2 = {
            create: function () {
                return function o4() {
                    arguments[2];
                    this.o6.apply(this, arguments);
                };
            }
        };
    var o8 = o1;
    o8.o9 = o2.create();
    o8.o9.prototype = {
        o6: function () {
            this;
        }
    };
    o8.o11 = o2.create();
    o8.o11.prototype = {
        o6: function () {
            this.o12 = new o8.o9();
        }
    };
    var o13 = new o8.o11();
    var o14 = new o8.o11();
}
o0();
o15.o16("Passed");
