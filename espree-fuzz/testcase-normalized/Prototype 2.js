//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2) {
    this.o1 = o1;
    this.o2 = o2;

    /// TODO: Remove this line when explicit propagation is added
    return undefined;
}

o0.prototype.o5 = function() {
    o6.o7("Hat");
    o6.o7(this.o1);
    o6.o7(this.o2);
}

var o8 = new o0("felt", "gray");
o8.o5();



