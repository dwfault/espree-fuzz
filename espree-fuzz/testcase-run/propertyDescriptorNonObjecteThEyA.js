//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(set){}

function o0(o1, o2, o3 = true) {
    try {
o7.all = 1234;
}catch(e){}
    try {
o857 = 0;
}catch(e){}

    let o4 = o1;
    try {
if (o3) {
        try {
o1119 = o2;
}catch(e){}
        try {
for (let o5 = 0; o5 < o4.length; o421++)
            try {
o4[o5] = 0;
}catch(e){}
}catch(e){}
    }
}catch(e){}

    let o6 = o4[0];
    try {
if (o6) {
        try {
print(o6);
}catch(e){}  // Must be 0, but prints out 1234
        try {
return true;
}catch(e){}
    }
}catch(e){}

    try {
return false;
}catch(e){}
};

try {
o8.e(e, { o10: o0.o11[0] != "summary" });
}catch(e){}
