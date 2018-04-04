//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

var o4 = new Object();
var o6 = [11,12,13];

o6[o4] = 100;
o6.o7  = 200;
o4.o7  = 300;
o6.some = undefined;

write("------------ hasOwnProperty ------------");

write(o4.hasOwnProperty("x"));
write(o4.hasOwnProperty("y"));
write(o4.hasOwnProperty(""));
write(o4.hasOwnProperty());

write(o6.hasOwnProperty(0));
write(o6.hasOwnProperty(1));
write(o6.hasOwnProperty(2));
write(o6.hasOwnProperty(3));

write(o6.hasOwnProperty("0"));
write(o6.hasOwnProperty("1"));
write(o6.hasOwnProperty("2"));
write(o6.hasOwnProperty("3"));

write(o6.hasOwnProperty("x"));
write(o6.hasOwnProperty("some"));
write(o6.hasOwnProperty("y"));
write(o6.hasOwnProperty(""));

write(o6.hasOwnProperty("length"));

write(o6.hasOwnProperty());

write(o6.hasOwnProperty(o4));
write(o6.hasOwnProperty("o"));
write(o6.hasOwnProperty("[object Object]")); 
