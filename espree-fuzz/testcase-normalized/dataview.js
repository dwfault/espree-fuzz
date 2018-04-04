//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = ['getInt8', 'getUint8', 'getInt16', 'getUint16', 'getInt32', 'getUint32', 'getFloat32', 'getFloat64'];
var o1 = ['setInt8', 'setUint8', 'setInt16', 'setUint16', 'setInt32', 'setUint32', 'setFloat32', 'setFloat64'];
var o2 = [1,1,2,2,4,4,4,8];
var o3 = [1, -1, 20, -20, 0x128];

if (o2.length != o1.length)
{
throw new o5("testerror: invalid test data");
}
if (o0.length != o1.length)
{
throw new o5("testerror: invalid test data");
}

if (typeof(print) == "undefined")
{
    function print(o7)
    {
        o8.o9(o7);
    }
}

function o10(o11)
{
    print(o11.toString());
    for (o13 in o11)
    {
        print(o13 + " == " + o11[o13]);
    };
    print("array content");
    var o14 = new Int8Array(o11.buffer);
    for (o13 in o14)
    {
        print(o13 + " == " + o11[o13]);
    }
}

var o17 = new ArrayBuffer(16);
var o11 = new DataView(o17);

function o20(o11, o21, o22, o23)
{
var o24;
var o25= false;
var o26 = false;
        if (o22 + o2[o21] > o11.byteLength)
            {
            o25 = true;
            }
        
            var o26 = false;
            try {
                o24 = o11[o0[o21]](o22, o23);
                }
            catch(o28)
                {
                o26 = true;
                }
            if (o25 & !o26)
                {
                throw Error("failed to throw for out of bound access");
                }
return o24;
}
function o30(o11, o31, value)
{
    for (var o13 = 0; o13 < o1.length; o13++)
        {
        if (o31 + o2[o13] > o11.byteLength)
            {
            var o33 = false;
            try {
                o11[o1[o13]](o31, value);
                }
            catch(o28)
                {
                print("SUCCEEDED: exception " + o28.o34);
                o33 = true;
                }
            if (!o33)
                {
                print("failed to throw for out of bound access " + o1[o13] + " dataOffset is " + o31);
                }
            }
        else
            {
            print("set little endian value offset " + o31 + " value " + value + " method " + o1[o13]);
            print("results of little endian reads are: ");
            o11[o1[o13]](o31, value, true);
            for (var o35 = 0; o35 < o0.length; o35++)
                {
                var o36 = o20(o11, o35, o31, true);
                print(o0[o35] + " = " + o36);
                }
            print("results of big endian reads are: ");
            for (var o35 = 0; o35 < o0.length; o35++)
                {
                var o36 = o20(o11, o35, o31, false);
                print(o0[o35] + " = " +  o36);
                }

            print("set little endian value offset " + o31 + " value " + value + " method " + o1[o13]);
            print("results of little endian reads are: ");
            o11[o1[o13]](o31, value, false);
            for (var o35 = 0; o35 < o0.length; o35++)
                {
                var o36 = o20(o11, o35, o31, true);
                print(o0[o35] + " = " +  o36);
                }
            print("results of big endian reads are: ");
            for (var o35 = 0; o35 < o0.length; o35++)
                {
                var o36 = o20(o11, o35, o31, false);
                print(o0[o35] + " = " +  o36);
                }
            }

        }
}

function o37(o11, value)
{
    print("test one value " + value);
    for (var o13 = 0; o13 < o11.byteLength; o13++)
    {
        o30(o11, o13, value);
    }
    for (var o13 = 0; o13 < o11.byteLength; o13++) 
        o11.setInt8(o13, 0);
}

function o39(o11)
{
    for (var o13 = 0; o13 < o3.length; o13++)
    {
        o37(o11, o13, o3[o13]);
    }
}

o39(o11);
if (Object.getOwnPropertyDescriptor(o11, 100000) != undefined) {
    o8.o9('FAIL');
}

o8.o9("prototype test");
o8.o9(DataView.prototype[10]);
o8.o9(DataView.prototype[-1]);
o8.o9(DataView.prototype[2]);
DataView.prototype[2] = 10;
o8.o9(DataView.prototype[2]);

o8.o9(o11.toString());
