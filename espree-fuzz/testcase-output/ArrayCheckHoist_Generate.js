//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1.toString();

o1("// The tests in this file are GENERATED. Don't add tests to this file manually; instead, modify");
o1("// ArrayCheckHoist_Generate.js and regenerate this file, or use a different file for the new test.");
o1();

var o3 = {
    o4: 0,
    Array: 1,

    o6: 1,

    Int32Array: 2
};

var o8 = {
    Object: 0,
    o10: 1,
    o11: 2
};

var o12 = {
    o13: 0,
    o14: 1
};

var o15 = {
    o16: 0,
    o17: 1
};

var o18 = {
    o19: 0,
    o20: 1,
    o21: 2,
    o22: 3
};

var o23 = [
    "-1",
    "0",
    "i"
];

var o24 = [
    false,
    true
];

// Test helper constants and variables
var o25 = 2;
function o26(o27, o28) {
    var o29 = "-" + o27 + "[0]";
    if(o28 == o8.Object)
        o29 = "{ p: " + o29 + ".p - 1 }";
    else
        o29 += " - 1";
    return "Object.defineProperty(" + o27 + ", 0, { configurable: true, writable: false, enumerable: true, value: " + o29 + " });";
}
var o30 = 0;
var o31 = 0;

o1("var bailout = !this.WScript || this.WScript.Arguments[0] === \"bailout\";");
o1();

var o32 = 0;
var o33 = 0;
var o34 = 0;
var o35 = 0;
for(var o36 in o3) {
    if(o36.substring(0, 4) === "Last")
        continue;
    var o38 = o3[o36];
    for(var o39 in o8) {
        var o28 = o8[o39];
        if(o38 === o3.Int32Array && o28 !== o8.o10)
            continue;
        for(var o40 in o12) {
            var o41 = o12[o40];
            for(var o42 in o15) {
                var o43 = o15[o42];
                for(var o44 in o18) {
                    var o45 = o18[o44];
                    for(var o46 = 1; o46 <= 4; o46 *= 2) {
                        for(var o47 = 0;
                            o47 < o46;
                            o47 = (o47 + 1) * 2 - 1) {

                            var o48 = o46 - 1 - o47;
                            for(var o49 = 0;
                                o49 < o46;
                                o49 = (o49 + 1) * 2 - 1) {

                                var index = o23[o32 % o23.length];
                                var o52 = o24[o33 % o24.length];
                                var o53 = o24[o34 % o24.length];

                                ++o35;
                                if(!(o35 & 0x1))++o32;
                                if(!(o35 & 0x3))++o33;
                                if(!(o35 & 0xf))++o34;

                                o54(
                                    o38,
                                    o28,
                                    o41,
                                    o43,
                                    o45,
                                    o46,
                                    o47,
                                    o48,
                                    o49,
                                    index,
                                    o52,
                                    o53);
                            }
                        }
                    }
                }
            }
        }
    }
}

o1("////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");
o1();

var o55 = "";
o55 += o56("function changeToEs5Array_object(a) {", 1);
{
    o55 += o57(o26("a", o8.Object));
}
o55 += o56("}", -1);
o1(o55);

o55 = "";
o55 += o56("function changeToEs5Array_int32(a) {", 1);
{
    o55 += o57(o26("a", o8.o10));
}
o55 += o56("}", -1);
o1(o55);

o55 = "";
o55 += o56("function someCall(a) {", 1);
{
    o55 += o57("a.someProperty = 0;");
}
o55 += o56("}", -1);
o1(o55);

o1(o58.toString());
o1();
o1(o0);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test helpers

function o54(
    o38,
    o28,
    o41,
    o43,
    o45,
    o46,
    o47,
    o48,
    o49,
    index,
    o52,
    o53) {

    if(o46 === 0)
        throw new Error("Invalid numLoops");
    if(o47 < 0 || o47 >= o46)
        throw new Error("Invalid arrayAccessLoopIndex");
    if(o48 < 0 || o48 >= o46)
        throw new Error("Invalid arrayAccess2LoopIndex");
    if(o49 < 0 || o49 >= o46)
        throw new Error("Invalid nonInvariantLoopIndex");

    if(o45 === o18.o19 && o49 !== 0)
        return; // no non-invariant loops, only generate this test once
    if(o38 >= o3.o6 && o45 === o18.o22)
        return; // typed arrays don't need implicit call checks, and their elements are not configurable
    if(o53 && o43 === o15.o17 && o45 >= o18.o21)
        o53 = false; // calls and implicit calls make elements read-only and those elements can't be set in strict mode thereafter

    var o55 = "";
    var o60 = "test" + o31++;
    o55 += o56("function " + o60 + "() {", 1);
    {
        if(o53) {
            o55 += o56('"use strict";');
            o55 += o56("");
        }

        o55 += o61(o38, o28, o45 === o18.o22);
        o55 += o56("return toSafeInt(" + o60 + "_run(o, a, a2));");
        o55 += o56("");

        o55 += o56("function " + o60 + "_run(o, a, a2) {", 1);
        {
            o55 += o56("var sum = 0;");
            for(var o62 = 0; o62 < o46; ++o62) {
                var o63 = "i" + o62;
                var o64 = o45 !== o18.o19 && o62 === o49 ? o25 : "a.length";
                o55 += o56("for(var " + o63 + " = 0; " + o63 + " < " + o64 + "; ++" + o63 + ") {", 1);
                {
                    o55 += o56("sum += " + o63 + ";");
                }
            }
            for(var o62 = o46 - 1; o62 >= 0; --o62) {
                var o63 = "i" + o62;
                if(o45 !== o18.o19 && o62 === o49) {
                    if(o45 === o18.o20)
                        o55 += o56("a = a2;");
                    else if(o45 === o18.o21) {
                        if(o38 <= o3.o6)
                            o55 += o56("changeToEs5Array_" + (o28 === o8.Object ? "object" : "int32") + "(a);");
                        else
                            o55 += o56("someCall(a);");
                    }
                    else if(o45 === o18.o22) {
                        var o64 = o45 !== o18.o19 && o62 === o49 ? o25 : "a.length";
                        o55 += o56("if(bailout && " + o63 + " === (" + o64 + " >> 1))", 1);
                        {
                            o55 += o56("o.changeToEs5Array = 0;");
                        }
                        o55 += o56(null, -1);
                    }
                    else
                        throw new Error("Invalid nonInvariantLoopType");
                }
                if(o62 === o47 || o62 === o48) {
                    if(o52)
                        o55 += o56("sum += " + o60 + "_access(o, a, " + o63 + ");");
                    else
                        o55 += o65(o38, o28, o41, o43, index === "i" ? o63 : index);
                }
                o55 += o56("}", -1);
            }

            if(o52) {
                o55 += o56("");
                o55 += o56("function " + o60 + "_access(o, a, i) {", 1);
                {
                    o55 += o65(o38, o28, o41, o43, index, true);
                }
                o55 += o56("}", -1);
            }

            o55 += o56("return sum;");
        }
        o55 += o56("}", -1);
    }
    o55 += o56("}", -1);
    o55 += o56("echo(\"" + o60 + ": \" + " + o60 + "());");
    o1(o55);
}

function o61(o38, o28, o66) {
    var o55 = "";
    if(o38 === o3.Int32Array) {
        o55 += o56("var o = { a: new Int32Array(" + o25 + ") };");
        o55 += o56("for(var i = 0; i < " + o25 + "; ++i)", 1);
        {
            o55 += o56("o.a[i] = i + 1;");
        }
        o55 += o56(null, -1);
    } else {
        if(o38 > o3.o6)
            throw new Error("Unknown ArrayType");
        o55 += o56("var o = {", 1);
        {
            var o67 = o38 === o3.o4 ? "{" : "[";
            var o68 = o38 === o3.o4 ? "}" : "]";
            function o69(o62) {
                return o38 === o3.o4 ? "\"" + o62 + "\": " : "";
            }

            var o27 = "a: " + o67 + " ";
            for(var o62 = 1; o62 <= o25; ++o62) {
                var o70 = o62 === o25 ? "" : ", ";
                o27 += o69(o62 - 1);
                if(o28 === o8.Object)
                    o27 += "{ p: " + o62 + " }" + o70;
                else if(o28 === o8.o10)
                    o27 += o62 + o70;
                else if(o28 === o8.o11)
                    o27 += o62 + ".1" + o70;
                else
                    throw new Error("Unknown JsArrayElementType");
            }
            if(o38 === o3.o4)
                o27 += ", length: " + o25;
            if(o66) {
                o55 += o56(o27 + " " + o68 + ",");
                o55 += o56("set changeToEs5Array(v) {", 1);
                {
                    o55 += o57(o26("this.a", o28));
                }
                o55 += o56("}", -1);
            }
            else
                o55 += o56(o27 + " " + o68);
        }
        o55 += o56("};", -1);
    }

    o55 += o56("var a = o.a;");
    o55 += o56("a[-1] = a[0];");
    if(o38 === o3.o4)
        o55 += o56("var a2 = [];");
    else
        o55 += o56("var a2 = { length: a.length };");
    o55 += o56("for(var i = -1; i < a.length; ++i)", 1);
    {
        if(o38 <= o3.o6 && o28 === o8.Object)
            o55 += o56("a2[i] = { p: -a[i].p };");
        else
            o55 += o56("a2[i] = -a[i];");
    }
    o55 += o56(null, -1);
    return o55;
}

function o65(o38, o28, o41, o43, index, o71) {
    var o55 = "";
    var o72 = "[" + index + "]";

    if(o38 <= o3.o6 && o28 === o8.Object)
        o72 += ".p";

    if(o41 === o12.o13)
        o72 = "a" + o72;
    else if(o41 === o12.o14)
        o72 = "o.a" + o72;
    else
        throw new Error("Unknown ArrayAccessType");

    var o73 = o71 ? "return " : "sum += ";
    if(o43 === o15.o16)
        o55 += o56(o73 + o72 + ";");
    else if(o43 === o15.o17)
        o55 += o56(o73 + "(" + o72 + " = -" + o72 + " - 1, " + o72 + ");");
    else
        throw new Error("Unknown ElementAccessType");

    return o55;
}

function o57(o74) {
    var o55 = "";
    o55 += o56("try {", 1);
    {
        o55 += o56(o74);
    }
    o55 += o56("} catch(ex) {", -1);
    o55 += o56(null, 1);
    {
        o55 += o56('echo("Unexpected exception - " + ex.name + ": " + ex.message);');
    }
    o55 += o56("}", -1);
    return o55;
}

function o56(o75, o76) {
    if(o76 && o76 < 0)
        o30 += o76 * 4;
    if(o75 && o75 !== "") {
        var o77 = "";
        for(var o62 = 0; o62 < o30; ++o62)
            o77 += " ";
        o75 = o77 + o75 + "\n";
    }
    else if(o75 === "")
        o75 = "\n";
    else
        o75 = "";
    if(o76 && o76 > 0)
        o30 += o76 * 4;
    return o75;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function o58(o64) {
    return Math.o79(Math.o79(o64 * 10) / 10);
}

function o1() {
    var o80;
    if(this.o81)
        o80 = function(o75) { this.o81.o82(o75); };
    else if(this.o83)
        o80 = function(o75) {
            var o84 = this.o83.o85("div");
            o84.o86 = o75;
            this.o83.o87.o88(o84);
        };
    else
        o80 = function(o75) { this.print(o75); };
    o1 = function() {
        var o75 = "";
        for(var o62 = 0; o62 < arguments.length; ++o62)
            o75 += arguments[o62];
        o80(o75);
    };
    o1.apply(this, arguments);
}
