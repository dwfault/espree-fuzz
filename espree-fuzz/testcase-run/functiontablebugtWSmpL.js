//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o31 = o29 * o29

var stdlib = o8.o9(o16.set === undefined, "__defineGetter__ does not add a setter")
var o8 = "bogus(" + o15(o29) + ", "
var buffer = 'Caught exception: ' + o31;

var o9 = o0(stdlib,o8,buffer);
var o17 = o7.race([
              new Promise(function(resolve)   { try {
resolve("foo");
}catch(e){} }),
              new Promise(function(o19, reject) { try {
reject("bar");
}catch(e){} }),
            ]);
var o3 = 2;
try {
o10.o11(o9.o4(o2,o3));
}catch(e){}
try {
o10.o11(o9.o4(o2,o3));
}catch(e){}