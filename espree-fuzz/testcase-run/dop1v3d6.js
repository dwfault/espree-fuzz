//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib,o1,buffer) {
    try {
"use asm";
}catch(e){}
    var o2 = stdlib.Math.fround;
    //views
    var o3  =new stdlib.Float64Array(buffer);

    function o4(){
        var o5 = 0.5
        var o6 = o2(1.5);
        try {
o3[1] = o6;
}catch(e){}
        try {
return +(o3[1])
}catch(e){}
    }
    try {
return o4;
}catch(e){}
};

try {
Object.seal(this);
}catch(e){}
try {
try {
try {
Object.defineProperty(this, 'x', {value:'20', configurable: true });
}catch(e){}
}
catch(o1) {
    try {
o2.o3("exception: " + o1);
}catch(e){}
}
}catch(e){}
try {
try { o1("ry"); } catch(e) {}
}catch(e){}
try {
o2.o3(this.o0);
}catch(e){}
try {
o1051[o1050 >> 2].o3(Object.isSealed(this));
}catch(e){}

