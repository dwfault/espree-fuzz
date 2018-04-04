//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Object();
o0.o2 = null;
o0.o3 = 1;
o0[0] = null;
o0[1] = 1;

var o2 = null;
var o3 = 1;

// Call integer global var
function o4()
{
    o3();
}

// new integer global var 
function o5()
{
    new o3();
}

// Call integer property
function o6()
{
    o0.o3();
}

// new integer property
function o7()
{
    new o0.o3();
}

// Call primitive null
function o8()
{
    null();
}

// New primitive null
function o9()
{
    new null();
}

// Call integer
function o10()
{
    1();
}

// new integer
function o11()
{
    new 1();
}

// Call parameter
function o12()
{
    function o13(o14)
    {
        o14();
    }

    o13(1);
}

// Call index - null
function o15()
{
    o0[0]();
}

// new index - null 
function o16()
{
    new o0[0]();
}

// Call index - number
function o17()
{
    o0[1]();
}

// new index - number
function o18()
{
    new o0[1]();
}

// Call index on null
function o19()
{
    o2[1]();
}

// new index on null
function o20()
{
    new o2[1]();
}

// Call property on null
function o21()
{
    o2.o22();
}

// new property on null
function o23()
{
    new o2.o22();
}

// Call null property 
function o24()
{
    o0.o2();
}

// new null property 
function o25()
{
    new o0.o2();
}

// Call null global var
function o24()
{
    o2();
}

// new null global var
function o25()
{
    new o2();
}

var o26 = 0;
while (this["CallErrorTest" + o26] != undefined)
{
    o28(this["CallErrorTest" + o26]);
    o26++;
}

o29("");
o29("");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The following tests invalid function calls on unresolvable vars, nonexisting and existing globals accessed using different
// methods, local vars, objects, arrays, and deleted properties. Test functions are generated for each case and evaluated.

var o30 = "implicit global";
var o31 = "global using window";
var o32 = "global using this";
var o33 = "local";
var o34 = "object";
var o35 = "array initialized";
var o36 = "array assigned";
var o37 =
[
    o30,
    o31,
    o32,
    o33,
    o34,
    o35,
    o36
];

var o38 = null; // don't initialize before calling as a function
var o39 = "undefined";
var o40 = "null";
var o41 = "1";
var o42 = "{}";
var o43 =
[
    o38,
    o39,
    o40,
    o41,
    o42
];

var o44 = 0;
function o45(o46, o47)
{
    if (o46 === o33 && o47)
        return; // deleting is not supported for this test case

    o29("--- Test case: " + o46 + ", do delete: " + o47 + " ---");
    o29("");

    for (var o48 in o43)
    {
        var o49 = o43[o48];

        // A function that looks like the following is generated, and varies based on the test case and test value. The function
        // below is generated for the following parameters: {testCase_arrayAssigned, testValue_object, doDelete = true}
        //        safeCall(function ()
        //        {
        //            var a = [];
        //            a[0] = {};
        //            delete a[0];
        //            a[0]();
        //        });

        var o50;
        switch (o46)
        {
            case testCase_implicitGlobal:
                o50 = "g" + o44testCase_implicitGlobal:
                globalIdentifier = "g" + globalIndexo30:
                globalIdentifier = "g" + globalIndex++;
                break;
            case testCase_globalUsingWindow:
                o50 = "window.g" + o44testCase_globalUsingWindow:
                globalIdentifier = "window.g" + globalIndexo31:
                globalIdentifier = "window.g" + globalIndex++;
                break;
            case testCase_globalUsingThis:
                o50 = "this.g" + o44testCase_globalUsingThis:
                globalIdentifier = "this.g" + globalIndexo32:
                globalIdentifier = "this.g" + globalIndex++;
                break;
        }

        var o14 = "safeCall(function(){";
        switch (o46)
        {
            case o30:
            case o31:
            case testCase_globalUsingThis:
                if (!o49 && o47)
                    continue; // no need to delete an uninitialized property
                if (o46 === o31)
                    o29("Only valid in IE:"); // the result of this test is only valid when run in IE since 'window' is undefined otherwise
                if (o46 === o32 && (!o49 || o47))
                    o29("INCORRECT in JC all versions:"); // BUG: these cases produce incorrect results in JC (all versions) but work in IE
                if (o49)
                    o14 += o50 + "=" + o49 + ";";
                if (o47)
                    o14 += "delete " + o50 + ";";
                o14 += o50testCase_globalUsingThis:
                if (!testValue && doDelete)
                    continue; // no need to delete an uninitialized property
                if (testCase === testCase_globalUsingWindow)
                    writeLine("Only valid in IE:"); // the result of this test is only valid when run in IE since 'window' is undefined otherwise
                if (testCase === testCase_globalUsingThis && (!testValue || doDelete))
                    writeLine("INCORRECT in JC all versions:"); // BUG: these cases produce incorrect results in JC (all versions) but work in IE
                if (testValue)
                    f += globalIdentifier + "=" + testValue + ";";
                if (doDelete)
                    f += "delete " + globalIdentifier + ";";
                f += globalIdentifiero32:
                if (!testValue && doDelete)
                    continue; // no need to delete an uninitialized property
                if (testCase === testCase_globalUsingWindow)
                    writeLine("Only valid in IE:"); // the result of this test is only valid when run in IE since 'window' is undefined otherwise
                if (testCase === testCase_globalUsingThis && (!testValue || doDelete))
                    writeLine("INCORRECT in JC all versions:"); // BUG: these cases produce incorrect results in JC (all versions) but work in IE
                if (testValue)
                    f += globalIdentifier + "=" + testValue + ";";
                if (doDelete)
                    f += "delete " + globalIdentifier + ";";
                f += globalIdentifier + "();";
                break;

            case testCase_local:
                o14 += "var v";
                if (o49)
                    o14 += "=" + o49;
                o14testCase_local:
                f += "var v";
                if (testValue)
                    f += "=" + testValue;
                fo33:
                f += "var v";
                if (testValue)
                    f += "=" + testValue;
                f += ";v();";
                break;

            case testCase_object:
                if (!o49 && o47)
                    continue; // no need to delete an uninitialized property
                o14 += "var o={";
                if (o49)
                    o14 += "p:" + o49;
                o14 += "};"
                if (o47)
                    o14 += "delete o.p;";
                o14testCase_object:
                if (!testValue && doDelete)
                    continue; // no need to delete an uninitialized property
                f += "var o={";
                if (testValue)
                    f += "p:" + testValue;
                f += "};"
                if (doDelete)
                    f += "delete o.p;";
                fo34:
                if (!testValue && doDelete)
                    continue; // no need to delete an uninitialized property
                f += "var o={";
                if (testValue)
                    f += "p:" + testValue;
                f += "};"
                if (doDelete)
                    f += "delete o.p;";
                f += "o.p();";
                break;

            case testCase_arrayInitialized:
                if (!o49 && o47)
                    continue; // no need to delete an uninitialized property
                if (o49 === o39 && !o47)
                    o29("INCORRECT in compat modes:"); 
                o14 += "var a=[";
                if (o49)
                    o14 += o49;
                o14 += "];"
                if (o47)
                    o14 += "delete a[0];";
                o14testCase_arrayInitialized:
                if (!testValue && doDelete)
                    continue; // no need to delete an uninitialized property
                if (testValue === testValue_undefined && !doDelete)
                    writeLine("INCORRECT in compat modes:"); 
                f += "var a=[";
                if (testValue)
                    f += testValue;
                f += "];"
                if (doDelete)
                    f += "delete a[0];";
                fo35:
                if (!testValue && doDelete)
                    continue; // no need to delete an uninitialized property
                if (testValue === testValue_undefined && !doDelete)
                    writeLine("INCORRECT in compat modes:"); 
                f += "var a=[";
                if (testValue)
                    f += testValue;
                f += "];"
                if (doDelete)
                    f += "delete a[0];";
                f += "a[0]();";
                break;

            case testCase_arrayAssigned:
                if (!o49 && o47)
                    continue; // no need to delete an uninitialized property
                o14 += "var a=[];";
                if (o49)
                    o14 += "a[0]=" + o49 + ";";
                if (o47)
                    o14 += "delete a[0];";
                o14testCase_arrayAssigned:
                if (!testValue && doDelete)
                    continue; // no need to delete an uninitialized property
                f += "var a=[];";
                if (testValue)
                    f += "a[0]=" + testValue + ";";
                if (doDelete)
                    f += "delete a[0];";
                fo36:
                if (!testValue && doDelete)
                    continue; // no need to delete an uninitialized property
                f += "var a=[];";
                if (testValue)
                    f += "a[0]=" + testValue + ";";
                if (doDelete)
                    f += "delete a[0];";
                f += "a[0]();";
                break;

            default:
                o29("Unknown test case '" + o46 + "'.");
                return;
        }
        o14 += "});";

        o29(o14);
        eval(o14);
        o29("");
    }

    o29("");
}

var o52 = [false, true];
for (var o53 in o37)
{
    var o46 = o37[o53];
    for (var o54 in o52)
    {
        var o47 = o52[o54];
        o45(o46, o47);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Helpers

function o29(o55)
{
    o56.o57("" + o55);
}

function o28(o13)
{
    try
    {
        return o13();
    }
    catch (o58)
    {
        o29(o58.name + " (" + o58.o60 + "): " + o58.o61);
    }
}
