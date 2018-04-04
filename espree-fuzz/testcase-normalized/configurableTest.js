//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

Object.defineProperty(RegExp, "fakeProp", {
    value: 101,
    writable: true,
    enumerable: true,
    configurable: true
});

var o7 = ["fakeProp","$_","$*","$&","$+","$`","$'","input",
                                "lastMatch","lastParen","leftContext","rightContext",
                                "index","length","prototype","constructor"
                               ];

var o8 = ["global","ignoreCase","lastIndex","multiline","source","sticky"];

function o9(o10,o11)
{
    o12.o13("starting Property[",o10,"]: ",o11[o10]);
    //Does the property exist
    var o14 = RegExp.hasOwnProperty(o11[o10]);
    o12.o13("Does Property exist: ",o14);

    if(!o14) return;
    //Is the property configurable
    var o16 = Object.getOwnPropertyDescriptor(RegExp, o11[o10]).configurable;
    o12.o13("Is the Property configurable: ",o16);

    var o18 = false;
    var o19   = false;
    if(o16)
    {
        o18 = true;
        o19   = true;
    }

    var o20 = RegExp[o11[o10]];
    try
    {
        Object.defineProperty(RegExp, o11[o10], { get : function () { return 'OVERRIDE' } });

    }
    catch(o22)
    {
        if(o16) o12.o13("Fail");
        else o12.o13("PASS, Not Configurable and will not allow redefinition");
    }
    var o23 = false;
    if(o16)
    {
        if(RegExp[o11[o10]] =="OVERRIDE") o12.o13("PASS");
        else o12.o13("FAIL, currently equals: ",RegExp[o11[o10]]);
    }
    else
    {
        if(RegExp[o11[o10]] ==o20) o12.o13("PASS");
        else o12.o13("FAIL, currently equals: ",RegExp[o11[o10]]);
    }
    o23 = delete RegExp[o11[o10]];

    o12.o13("can you delete the property: ",o19, "did it actually delete?",o23);
    if(o23 ==o19) o12.o13("Pass Delete Test");
    else o12.o13("Fail Delete Test");
}

function o24(o10,o11)
{
    var o25=new RegExp("e");
    o12.o13("starting Property[",o10,"]: ",o11[o10]);
    //Does the property exist
    var o14 = o25.hasOwnProperty(o11[o10]);
    o12.o13("Does Property exist: ",o14);

    if(!o14) return;
    var o16 = Object.getOwnPropertyDescriptor(o25, o11[o10]).configurable;
    o12.o13("Is the Property configurable: ",o16);

    var o18 = false;
    var o19   = false;
    if(o16)
    {
        o18 = true;
        o19   = true;
    }

    var o20 = o25[o11[o10]];
    try
    {
        Object.defineProperty(o25, o11[o10], { get : function () { return 'OVERRIDE' } });
    }
    catch(o22)
    {
        if(o16) o12.o13("Fail");
        else o12.o13("PASS, Not Configurable and will not allow redefinition");
    }

    var o23 = false;
    if(o16)
    {
        if(o25[o11[o10]] =="OVERRIDE") o12.o13("PASS");
        else o12.o13("FAIL, currently equals: ",o25[o11[o10]]);
    }
    else
    {
        if(o25[o11[o10]] ==o20) o12.o13("PASS");
        else o12.o13("FAIL, currently equals: ",o25[o11[o10]]);
    }

    o23 = delete o25[o11[o10]];

    o12.o13("can you delete the property: ",o19, "did it actually delete?",o23);
    if(o23 ==o19) o12.o13("Pass Delete Test");
    else o12.o13("Fail Delete Test");

}

for(var o10 = 0; o10 < o7.length;o10++)
{
    o9(o10,o7);
    o12.o13("\n");
}
for(var o10 = 0; o10 < o8.length;o10++)
{
    o9(o10,o8);
    o12.o13("\n");
}
for(var o10 = 0; o10 < o8.length;o10++)
{
    o24(o10,o8);
    o12.o13("\n");
}

