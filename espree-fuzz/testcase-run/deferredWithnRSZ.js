//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o421(o1) {
    try {
with (o1)
    {
        try {
o2 = 
            function o3() {
            try {
return { test: 
                 function () { try {
return "4";
}catch(e){} } };
}catch(e){}
            },

        o4 =
            function o5() {
                try {
return o4.o10;
}catch(e){}
            }
}catch(e){}
    }try {

}catch(e){}try { try {
o1("initCloseEvent");
}catch(e){} } catch(e) {}try {

}catch(e){};
}catch(e){}

    var o6 = function () {
};
    var o5 = o5 || undefined;

    try {
return { o1: o1, o3: o3, o5: o5 };
}catch(e){}
}try { {} } catch(e) {}

var o7=[6,7,8,9,5,6,7,8,9,10];
try {
o9.o10(this.o435);
}catch(e){}
var o11=o0(o7);
var o12 = o11.o1;
try {
o9.o10("k = " + JSON.stringify(o12));
}catch(e){}
try {
o9.o10("k.z = " + o12.o2);
}catch(e){}
try {
o9.o10("k.z() = " + o12.o2());
}catch(e){}
try {
o9.o10("k.z().test() = " + JSON.stringify(o12.o2().test()));
}catch(e){}
try {
o9.o10("k.z().test()+1 = " + JSON.stringify(o12.o2().test()+1));
}catch(e){}

try {
o9.o10();
}catch(e){}
try {
o9.o10("sibling with block");
}catch(e){}
try {
o9.o10("k.z2 = " + o12.o4);
}catch(e){}
try {
o9.o10("k.z2() = " + o12.o4());
}catch(e){}
try {
o9.o10("k.z2().test() = " + JSON.stringify(o12.o4().test()));
}catch(e){}
try {
o9.o10("k.z2().test()+1 = " + JSON.stringify(o12.o4().test() + 1));
}catch(e){}

try {
o9.o10();
}catch(e){}
try {
o9.o10("compat mode specifics as !== undefined (if present) - version:2 specifics");
}catch(e){}
try {
if (o11.o3 !== undefined) {
    try {
o9.o10("testOut.handlerFactory().test() = " + JSON.stringify(o11.o3().test()) + " (as json)");
}catch(e){}
    try {
o9.o10("testOut.handlerFactory().test()+1 = " + o11.o3().test() + 1);
}catch(e){}
}
}catch(e){}
try {
if (o11.o5 !== undefined) {
    try {
o9.o10("testOut.handlerFactory2().test() = " + JSON.stringify(o11.o5().test()) + " (as json)");
}catch(e){}
    try {
o9.o10("testOut.handlerFactory2().test()+1 = " + o11.o5().test() + 1);
}catch(e){}
}
}catch(e){}