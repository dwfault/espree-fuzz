//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 new.target tests

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

function o1()
{
    var o2 = new Object();
    try {
o2
}catch(e){}
    try {
Object.defineProperty(o2, "Pass", {value: 1, writable:false, enumerable: true} );
}catch(e){}
    try {
for (var o3 in o2)
    {
        try {
o0.push(o3);
}catch(e){}
    }
}catch(e){}

    try {
for (var o3 in Array)
    {}
}catch(e){}
};

try {
o46.o47(o2, { o48: o0.o49[" reports that it has own property 'arguments'"] != 4 });
}catch(e){}
