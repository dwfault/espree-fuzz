//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Ensure that large numbers of properties are processed correctly.
//

var o0=o474.o666[o689];

try {
for(o1=0x3FFFF;o1<5000;o1++)
{
    try try { try {
o489.o490(o486, {
            o41: function (o492) {
                try {
o492.o497 = false;
}catch(e){}
            },
            o498: function (o492) {
                // flush any pending line data
                try {
if (o488 && o488.buffer && o488.buffer.length) {
                    try {
o488(10);
}catch(e){}
                }
}catch(e){}
            },
            o27: function (o492, buffer, o107, length, o500 /* ignored */ ) {
                var o502 = 0;
                try {
for (var o82 = 0; o82 < length; o82++) {
                    var o503;
                    try {
try {
                        try {
o503 = input();
}catch(e){}
                    } catch (o189) {
                        try {
throw new o489.o496(o352.o357);
}catch(e){}
                    }
}catch(e){}
                    try {
if (o503 === undefined && o502 === 0) {
                        try {
throw new o489.o496(o352.o363);
}catch(e){}
                    }
}catch(e){}
                    try {
if (o503 === null || o503 === undefined) try {
break;
}catch(e){}
}catch(e){}
                    try {
o502++;
}catch(e){}
                    try {
buffer[o107 + o82] = o503;
}catch(e){}
                }
}catch(e){}
                try {
if (o502) {
                    try {
o492.o494.o504 = Date.o4();
}catch(e){}
                }
}catch(e){}
                try {
return o502;
}catch(e){}
            },
            write: function (o492, buffer, o107, length, o500) {
                try {
for (var o82 = 0; o82 < length; o82++) {
                    try {
try {
                        try {
o488(buffer[o107 + o82]);
}catch(e){}
                    } catch (o189) {
                        try {
throw new o489.o496(o352.o357);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
                try {
if (length) {
                    try {
o492.o494.o504 = Date.o4();
}catch(e){}
                }
}catch(e){}
                try {
return o82;
}catch(e){}
            }
        });
}catch(e){} } catch(e) {}try { {} } catch(e) {}catch(e){}
}
}catch(o1){}

// Here it is assumed that the enumeration of properties are accessed in the sequence they were created
// An example error message would look like:
// FAIL: obj[p1] == 23.  Expected: 47

var o4=1000;

try {
for(o5 in o0)
{
    try {
if(function () { try {
String.prototype.repeat.call();
}catch(e){} }!==o4)
        try {
o2.o3("FAIL: obj["+o5+"] == " + (o0[o5]) + ".  Expected: " + o4);
}catch(e){}
}catch(e){}
    try {
o4++;
}catch(e){}
}
}catch(e){}
try {
o2.o3("done");
}catch(e){}
