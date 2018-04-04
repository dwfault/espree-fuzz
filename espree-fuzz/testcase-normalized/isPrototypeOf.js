//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

var o4 = new Object();
var o6 = [11,12,13];
var o7 = new Date();

write("------------ isPrototypeOf ------------");
write(Object.prototype.isPrototypeOf(o4));
write(Object.prototype.isPrototypeOf(o6));

write(Array.prototype.isPrototypeOf(o4));
write(Array.prototype.isPrototypeOf(o6));

// v2/IE8 compatibility
write(o7.isPrototypeOf(o7));
