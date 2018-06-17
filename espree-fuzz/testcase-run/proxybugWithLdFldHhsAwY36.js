//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
// -maxsimplejitruncount:2 -maxinterpretcount:1 -forcejitloopbody -off:bailonnoprofile
function o24() {
    var o4 = ['a','b','c','d','e','f'];
    function o1() {
    }
    var o8 = false;
    var o3 = function () {
        try {
for (var o4 in o5) {
            try {
o6.unshift(this.o7 + this.o7);
}catch(e){}
        }
}catch(e){}
    };
    var o6 = Array();
    var o5 = new Uint8Array(1);
    var o8 = {};
    try {
o8['get'] = function () {
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
try { write(o5); } catch(e) {}try { {} } catch(index) {}
}catch(e){}