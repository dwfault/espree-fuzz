//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

Object.prototype.o2 = function () { return 2; };
function construct(o4) {
    if (o4) {
        this.o5 = 1;
    }
    this.o6 = this.o2();
}
new construct(1);
new construct(1);
var o7 = new construct(1);
o8.o9(o7.o5);
o8.o9(o7.o6);
