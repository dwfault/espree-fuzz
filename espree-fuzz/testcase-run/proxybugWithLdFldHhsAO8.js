//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
// -maxsimplejitruncount:2 -maxinterpretcount:1 -forcejitloopbody -off:bailonnoprofile
function sub(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return +(o62-o63);
}catch(e){}
    }
try {
test("value" in o10);
}catch(e){}