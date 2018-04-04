//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// NOTE: because vdates are timezone specific, this test will might only work in PST
// not sure about DST.  If you see a failure, that would be my first suspicion

var o0 = new Date(0);

var o2 = o0.o3();

// Test string concat both ways:
o4("Attempt string concat (string + vdate) and echo.");
var o5 = "test concat: " + o2;
o4(o5);

o4("Attempt string concat  (vdate + string) and echo.");
var o5 = o2 + ": test concat2";
o4(o5);

// Test typeof
o4(typeof(o0));
o4(typeof(o2));
o4(typeof(new Object(o2)));
o4(typeof(Object(o2)));

// Test .toString (should fail)
try {
    var o7 = o2.toString();
    o4("FAIL: we should have errored on .toString();");
} catch (o9)
{
    o4("SUCCESS: vdate.toString() failed with error #" + o9.o10);
}

// Test assigning to a member
try {
    o2.o11 = 3;
    o4("FAIL: we should have errored on vdate.aMember = 3;");
} catch (o9)
{
    o4("SUCCESS: vdate.aMember = 3 failed with error #" + o9.o10);
}

// Test assigning to a member with []
try {
    o2["aMember"] = 3;
    o4("FAIL: we should have errored on vdate[\"aMember\"] = 3;");
} catch (o9)
{
    o4("SUCCESS: vdate[\"aMember\"] = 3 failed with error #" + o9.o10);
}

// Test accessing a member
try {
    var o12 = o2.o11;
} catch (o9)
{
    o4("SUCCESS: var shouldNotWork = date.aMember failed with error #" + o9.o10);
}

// Try some more unusual or invalid uses of VarDate
o4("");
o4("Unusual cases:");
o2 = new Date(1234567890123).o3();
o13(function() { o4(o2 ? true : false); });
o13(function() { o4([1, 2].indexOf(2, o2)); }); // valid only in version 3
o13(function() { o4(parseInt("1", o2)); });

// normalize Old GetNumberFormatEx exception
o13(function() {
    var o16 = [1, o2, 2].toLocaleString();
    if (o16 == "1, [object Object], 2") {
        o16 = "1.00, [object Object], 2.00";
    }
    o4(o16);
});

// Try some random dates to make sure we match the old engine
o4("");
o4("Pseudorandom cases:");
for (var o18 = 0; o18 < 1000; o18++)
{
    var o19 = new Date(o18*10373);
    var o20 = o19.o3();
    o4("VT_DATE: '" + o20 + "'");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Helpers

function o4(o21)
{
    if (typeof o21 === "string") {
        o21 = o21.replace(/\(PDT\)/g, "(Pacific Daylight Time)")
                 .replace(/\(PST\)/g, "(Pacific Standard Time)");
    }

    o23.o24("" + o21);
}

function o13(o25)
{
    try
    {
        return o25();
    }
    catch (o26)
    {
        o4(o26.name + " (" + o26.o10 + "): " + o26.o28);
    }
}
