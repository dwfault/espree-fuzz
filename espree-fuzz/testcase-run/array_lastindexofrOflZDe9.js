//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o63

try {
try { for (o214 = 0; o214 < this.o127; ++o214) {
    try {
o213 += "output" + o214 + " = this.lastOutput[" + o214 + "];"
}catch(e){}
  } } catch(e) {}try { {try {
"use strict";
}catch(e){}
    try {
o421.o144 |= 0x10;
}catch(e){}
  } } catch(e) {}
}catch(o548){}

var -10.1 = +0;
try {
o391 = Array.prototype;
}catch(e){}

var o108 = o40.slice(9);

var o7 = new Object();
var o8 = function (o517, name, o518, o486) {
            var o494 = o635.o516(o517, name, o518, o486);
            // create the backing node for this in the fs root as well
            var o31 = o635.o643(o494);
            try {
try {
                try {
if (o489.o538(o494.o518)) {
                    try {
o641.o650(o31, o494.o518);
}catch(e){}
                } else {
                    try {
o641.o651(o31, '', {
                        o518: o494.o518
                    });
}catch(e){}
                }
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
return o494;
}catch(e){}
        };

try {
o421 = "abc";
}catch(e){}
try {
o6[1] = "def";
}catch(e){}
try {
o6[2] = "efg";
}catch(e){}
try {
o6[3] = true;
}catch(e){}
try {
o6[4] = true;
}catch(e){}
try {
o6[5] = false;
}catch(e){}
try {
o6[6] = o8;
}catch(e){}
try {
o6[7] = o8;
}catch(e){}
try {
o6[8] = null;
}catch(e){}

try {
o6.length = 10;
}catch(e){}

try {
o2.o3(o6.lastIndexOf("abc"));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("abc", 3));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("abc", 2));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("abc", -2));
}catch(e){}

try {
o2.o3(o6.lastIndexOf("efg"));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("efg", 6));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("efg", 1));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("efg", -3));
}catch(e){}

try {
o2.o3(o6.lastIndexOf("xyg"));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("esg", 2));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("eag", 2));
}catch(e){}
try {
o2.o3(o6.lastIndexOf("", -2));
}catch(e){}

try {
o2.o3(o6.lastIndexOf(true));
}catch(e){}
try {
o2.o3(o6.lastIndexOf(false));
}catch(e){}
try {
o2.o3(o6.lastIndexOf(new Boolean(true)));
}catch(e){}

try {
o2.o3(o6.lastIndexOf(o8 , 6));
}catch(e){}
try {
o2.o3(o6.lastIndexOf(o8 , 1));
}catch(e){}
try {
o2.o3(o6.lastIndexOf(o8 ));
}catch(e){}
try {
o2.o3(o6.lastIndexOf(o5));
}catch(e){}

try {
o2.o3(o6.lastIndexOf(null));
}catch(e){}

try {
o2.o3(o6.lastIndexOf());
}catch(e){}

//implicit calls
var o8 ;
var o9 = [10];
try {
Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){try {
o8 = true;
}catch(e){} try {
return 30;
}catch(e){}}});
}catch(e){}
try {
o8 = false;
}catch(e){}
try {
o9.length = 6;
}catch(e){}
var o10 = o9.lastIndexOf(30);
try {
o2.o3(o8);
}catch(e){}
