//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o518 + " has 'caller' own property";

var o1 = new Proxy(Promise.reject(42), o0);
var o82;
try {
Object.defineProperty(o5, "x", o1);
}catch(e){}

try {
o3.o4("======================");
}catch(e){}

function o220(o340) {
    /* Over-allocate to make sure it is byte-aligned by 8.
     * This will leak memory, but this is only the dummy
     * implementation (replaced by dlmalloc normally) so
     * not an issue.
     */
    var o114 = o48.o143(o340 + 8);
    try {
return (o114 + 8) & 0xFFFFFFF8;
}catch(e){}
};
try {
o6.__proto__ = o1;
}catch(e){}
try {
Object.defineProperty(o5, "y", o6);
}catch(e){}
