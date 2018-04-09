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

o0.prototype.o3 = function() {
    o4.o5("Hat");
    o4.o5(this.o1);
    o4.o5(this.o2);
}

var o6 = new o0("felt", "gray");
o6.o3();



