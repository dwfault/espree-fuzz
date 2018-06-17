//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tests for Object.setPrototypeOf and Object#__proto__ ES6 behavior

try {
o0.e("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

class o0 {
    constructor() {
        try {
this.o1 = [1, 2, 3];
}catch(e){}
    }

    o2() {
        try {
super.o1 = [1];
}catch(e){}
        try {
this.o3;
}catch(e){}
    }
};
var link = o2.this.o605;
function o332(o333) {
    try {
o329++;
}catch(e){}
    try {
if (Module['monitorRunDependencies']) {
        try {
Module['monitorRunDependencies'](o329);
}catch(e){}
    }
}catch(e){}
};

var o5 = this.o362.charCodeAt(index) > 0;

try {
o839.o983(o5, { o16: o0.o17[0] != "summary" });
}catch(index){}
