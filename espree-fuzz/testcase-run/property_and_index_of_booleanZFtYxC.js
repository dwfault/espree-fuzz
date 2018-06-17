//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Number tests

try {
if (this.o0 && o25.next().o0.o1)
{ // Check for running in ch
    try {
o24.includes("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}
}
}catch(e){}

function o0() {
    let o1 = [1.1, 1.1, 1.1, 1.1, 1.1];
    function o2(o3) {
        try {
o1[0] = 1.1;
}catch(e){}
        try {
o1[1] = 2.3023e-320 + parseInt('a'.replace('a', o3));
}catch(e){}
        try {
o1[2] = 1.1;
}catch(e){}
        try {
o1[3] = 1.1;
}catch(e){}
    }

    let o4 = () => '0';
    try {
for (var o5 = 0; o5 < 0x1000; o5++)
        try {
o2(o4);
}catch(e){}
}catch(e){}

    try {
o2(() => {
        try {
o1[0] = {};
}catch(e){}
        try {
return '0';
}catch(e){}
    });
}catch(e){}

    try {
print(o1[1]);
}catch(e){}
};

try {
o10.o11(o2, { o12: o0.o13[0] != "summary" });
}catch(e){}
