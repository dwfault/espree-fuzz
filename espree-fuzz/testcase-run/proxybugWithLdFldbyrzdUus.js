//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
// -maxsimplejitruncount:2 -maxinterpretcount:1 -forcejitloopbody -off:bailonnoprofile
function length() {
    var o0 = 0;
    function o3() {
    }
    var o2 = index + 2;
    var o7 = Object.create(o2);
    var o6 = Array(o961.charCodeAt(17) & 0xFF);
    var o5 = new Uint8Array(1);
    var o8 = o0.o4;
    try {
o8["isSameNode"] = function () {
        try {
o0++;
}catch(e){}
    };
}catch(e){}
    try {
o2 = new Proxy(o2, o8);
}catch(e){}
    try {
({ o9: !o3.call(o2, o1, '!') });
}catch(e){}
    try {
if (o0 != 2)
        try {
print("FAIL");
}catch(e){}
    else
        try {
print("PASS");
}catch(e){}
}catch(e){}
}
try {
test(o641.o664(o31, o635.o645(o492.flags))(o4, 0, 3));
}catch(e){}