//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o34(o35) {
      // WScript.Echo(".");
      try {
o35.o19(o7.o11);
}catch(e){}
    };

function o1(o2,o3)
{
    try {
return (o2 < o3);
}catch(e){}
}

var o3 = 0;
try {
do
{
    try {
o0 += o4;
}catch(e){}
    try {
function (o477, buffer, o107, length, o548) {
            var o524 = o477.o479.o524;
            try {
if (o548 >= o524.length)
                try {
return 0;
}catch(e){}
}catch(e){}
            var o85 = Math.o87(o524.length - o548, length);
            try {
o73(o85 >= 0);
}catch(e){}
            try {
if (o85 > 8 && o524.subarray) { // non-trivial, and typed array
                try {
buffer.set(o524.subarray(o548, o548 + o85), o107);
}catch(e){}
            } else {
                try {
for (var o82 = 0; o82 < o85; o82++) {
                    try {
buffer[o107 + o82] = o524[o548 + o82];
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
return o85;
}catch(e){}
        };
}catch(e){}

} while(o1(o4, 100) && o1(o0, 5000));
}catch(e){}

try {
o5.o6(o0);
}catch(e){}
