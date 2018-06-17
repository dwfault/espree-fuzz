//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
// -maxsimplejitruncount:2 -maxinterpretcount:1 -forcejitloopbody -off:bailonnoprofile
function o1109(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        var o308 = 0;
        try {
o308 = o82;
}catch(e){}
        try {
o82 = o82 + o247 | 0;
}catch(e){}
        try {
o82 = o82 + 7 & -8;
}catch(e){}
        try {
return o308 | 0
}catch(e){}
    }
try {
test();
}catch(e){}