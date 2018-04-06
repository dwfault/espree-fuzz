//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// bailout on implicit call for CoerseRegex
var o0;
function o1(o2) {
    var o3 = 0;
    for(o0 = 0;o0 < 4;o0++) {
        o3 += "".match({});
        o3 += o2[o0];
    }
    return o3;
};

function o5(o2) {
    var o3 = 0;
    for(o0 = 0;o0 < 4;o0++) {
        o3 += /a/.exec({});
        o3 += o2[o0];
    }
    return o3;
};

function o7(o2) {
    var o3 = 0;
    for(o0 = 0;o0 < 4;o0++) {
        o3 += "".replace({}, "a");
        o3 += o2[o0];
    }
    return o3;
};

var o9 = [1,2,3,4,5,6];
o1(o9);
o5(o9);
o7(o9);
Object.prototype.toString = function(o3) {  o13.o14("implicit" + o0); return ""; }
o1(o9);
o5(o9);
o7(o9);
