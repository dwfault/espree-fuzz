//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var promise = new Promise(
                function(resolve,reject) {
                    try {
reject('error1');
}catch(e){}
                }
            );

try {
o9.o10(o2, { o11: o0.o12[0] != "summary" });
}catch(e){}
