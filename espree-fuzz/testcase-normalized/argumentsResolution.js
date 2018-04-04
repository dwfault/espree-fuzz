//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(
    o1,            // integer: 0 is declaration, 1 is declaration named 'arguments', 2 is unnamed expression, 3 is expression named 'arguments'
    o2,             // boolean
    o3,             // integer: 0 is no nested function, 1 is nested function declaration, 2 is nested function expression
    o4,    // integer: 0 is no var declaration, 1 is var declaration, 2 is initialized var declaration
    o5)                      // boolean
{
    var o6 =
    {
        "function": "function",
        "number": "parameter",
        "string": "var",
        "object": "arguments"
    };

    // The generated function will look something like this:
    //    safeCall(function ()
    //    {
    //        function arguments(arguments)
    //        {
    //            eval("");
    //            (function arguments() { });
    //            var arguments = "hi";
    //            writeLine(typeMap[typeof (arguments)]);
    //        }
    //        arguments(1);
    //    });

    var o7 = "";
    switch (o1)
    {
        case 2:
        case 3:
            o7 += "(";
    }
    o7 += "function";
    var o8 = "";
    switch (o1)
    {
        case 0:
            o8 = "foo";
            break;
        case 1:
        case 3:
            o8 = "arguments";
    }
    o7 += " " + o8 + "(";

    if (o2)
        o7 += "arguments";
    o7 += "){";

    if (o5)
        o7 += 'eval("");';

    switch (o3)
    {
        case 1:
            o7 += "function arguments(){}";
            break;
        case 2:
            o7 += "(function arguments(){});";
    }

    switch (o4)
    {
        case 1:
        case 2:
            o7 += "var arguments";
            if (o4 === 2)
                o7 += '="hi"';
            o7 += ";";
    }

    o7 += "writeLine(typeMap[typeof(arguments)]);}";
    switch (o1)
    {
        case 0:
        case 1:
            o7 += o8;
            break;
        case 2:
        case 3:
            o7 += ")";
    }
    o7 += "(1);";

    o9(o7);
    eval("safeCall(function(){" + o7 + "});");
}

var o11 = [false, true];
for (var o1 = 0; o1 <= 3; ++o1)
{
    for (var o12 in o11)
    {
        for (var o3 = 0; o3 <= 2; ++o3)
        {
            for (var o4 = 0; o4 <= 2; ++o4)
            {
                for (var o13 in o11)
                {
                    var o2 = o11[o12];
                    var o5 = o11[o13];

                    o0(
                        o1,
                        o2,
                        o3,
                        o4,
                        o5);
                }
            }
        }
    }
}

// Helpers

function o9(o14)
{
    o15.o16("" + o14);
}

function o17(o18)
{
    try
    {
        return o18();
    }
    catch (o19)
    {
        o9(o19.name + ": " + o19.o21);
    }
}
