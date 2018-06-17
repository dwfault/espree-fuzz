//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -version:2 -forcedeferparse
function o0(o1) {
    try {
with (o1)
    {
        try {
o2 = "4";
}catch(e){}
    }try {

}catch(e){};
}catch(e){}

    try {
return o1;
}catch(e){}
}try {
;
}catch(e){}

var o3={o4:1, o2:2};
try {
o5.o6("p = " + JSON.stringify(o3));
}catch(e){}
var o7=o0(o3);
try {
o5.o6("k = " + JSON.stringify(o7));
}catch(e){}
try {
o5.o6("k.z = " + o7.o2);
}catch(e){}
try {
o5.o6("k.z+1 = " + o7.o2+1);
}catch(e){}
