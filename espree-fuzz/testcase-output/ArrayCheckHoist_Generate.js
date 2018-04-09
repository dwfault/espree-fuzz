//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1.toString();

o1("// The tests in this file are GENERATED. Don't add tests to this file manually; instead, modify");
o1("// ArrayCheckHoist_Generate.js and regenerate this file, or use a different file for the new test.");
o1();

var o2 = {
    o3: 0,
    Array: 1,

    o4: 1,

    Int32Array: 2
};

var o5 = {
    Object: 0,
    o6: 1,
    o7: 2
};

var o8 = {
    o9: 0,
    o10: 1
};

var o11 = {
    o12: 0,
    o13: 1
};

var o14 = {
    o15: 0,
    o16: 1,
    o17: 2,
    o18: 3
};

var o19 = [
    "-1",
    "0",
    "i"
];

var o20 = [
    false,
    true
];

// Test helper constants and variables
var o21 = 2;
function o22(o23, o24) {
    var o25 = "-" + o23 + "[0]";
    if(o24 == o5.Object)
        o25 = "{ p: " + o25 + ".p - 1 }";
    else
        o25 += " - 1";
    return "Object.defineProperty(" + o23 + ", 0, { configurable: true, writable: false, enumerable: true, value: " + o25 + " });";
}
var o26 = 0;
var o27 = 0;

o1("var bailout = !this.WScript || this.WScript.Arguments[0] === \"bailout\";");
o1();

var o28 = 0;
var o29 = 0;
var o30 = 0;
var o31 = 0;
for(var o32 in o2) {
    if(o32.substring(0, 4) === "Last")
        continue;
    var o33 = o2[o32];
    for(var o34 in o5) {
        var o24 = o5[o34];
        if(o33 === o2.Int32Array && o24 !== o5.o6)
            continue;
        for(var o35 in o8) {
            var o36 = o8[o35];
            for(var o37 in o11) {
                var o38 = o11[o37];
                for(var o39 in o14) {
                    var o40 = o14[o39];
                    for(var o41 = 1; o41 <= 4; o41 *= 2) {
                        for(var o42 = 0;
                            o42 < o41;
                            o42 = (o42 + 1) * 2 - 1) {

                            var o43 = o41 - 1 - o42;
                            for(var o44 = 0;
                                o44 < o41;
                                o44 = (o44 + 1) * 2 - 1) {

                                var index = o19[o28 % o19.length];
                                var o45 = o20[o29 % o20.length];
                                var o46 = o20[o30 % o20.length];

                                ++o31;
                                if(!(o31 & 0x1))++o28;
                                if(!(o31 & 0x3))++o29;
                                if(!(o31 & 0xf))++o30;

                                o47(
                                    o33,
                                    o24,
                                    o36,
                                    o38,
                                    o40,
                                    o41,
                                    o42,
                                    o43,
                                    o44,
                                    index,
                                    o45,
                                    o46);
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

var o48 = "";
o48 += o49("function changeToEs5Array_object(a) {", 1);
{
    o48 += o50(o22("a", o5.Object));
}
o48 += o49("}", -1);
o1(o48);

o48 = "";
o48 += o49("function changeToEs5Array_int32(a) {", 1);
{
    o48 += o50(o22("a", o5.o6));
}
o48 += o49("}", -1);
o1(o48);

o48 = "";
o48 += o49("function someCall(a) {", 1);
{
    o48 += o50("a.someProperty = 0;");
}
o48 += o49("}", -1);
o1(o48);

o1(o51.toString());
o1();
o1(o0);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test helpers

function o47(
    o33,
    o24,
    o36,
    o38,
    o40,
    o41,
    o42,
    o43,
    o44,
    index,
    o45,
    o46) {

    if(o41 === 0)
        throw new Error("Invalid numLoops");
    if(o42 < 0 || o42 >= o41)
        throw new Error("Invalid arrayAccessLoopIndex");
    if(o43 < 0 || o43 >= o41)
        throw new Error("Invalid arrayAccess2LoopIndex");
    if(o44 < 0 || o44 >= o41)
        throw new Error("Invalid nonInvariantLoopIndex");

    if(o40 === o14.o15 && o44 !== 0)
        return; // no non-invariant loops, only generate this test once
    if(o33 >= o2.o4 && o40 === o14.o18)
        return; // typed arrays don't need implicit call checks, and their elements are not configurable
    if(o46 && o38 === o11.o13 && o40 >= o14.o17)
        o46 = false; // calls and implicit calls make elements read-only and those elements can't be set in strict mode thereafter

    var o48 = "";
    var o52 = "test" + o27++;
    o48 += o49("function " + o52 + "() {", 1);
    {
        if(o46) {
            o48 += o49('"use strict";');
            o48 += o49("");
        }

        o48 += o53(o33, o24, o40 === o14.o18);
        o48 += o49("return toSafeInt(" + o52 + "_run(o, a, a2));");
        o48 += o49("");

        o48 += o49("function " + o52 + "_run(o, a, a2) {", 1);
        {
            o48 += o49("var sum = 0;");
            for(var o54 = 0; o54 < o41; ++o54) {
                var o55 = "i" + o54;
                var o56 = o40 !== o14.o15 && o54 === o44 ? o21 : "a.length";
                o48 += o49("for(var " + o55 + " = 0; " + o55 + " < " + o56 + "; ++" + o55 + ") {", 1);
                {
                    o48 += o49("sum += " + o55 + ";");
                }
            }
            for(var o54 = o41 - 1; o54 >= 0; --o54) {
                var o55 = "i" + o54;
                if(o40 !== o14.o15 && o54 === o44) {
                    if(o40 === o14.o16)
                        o48 += o49("a = a2;");
                    else if(o40 === o14.o17) {
                        if(o33 <= o2.o4)
                            o48 += o49("changeToEs5Array_" + (o24 === o5.Object ? "object" : "int32") + "(a);");
                        else
                            o48 += o49("someCall(a);");
                    }
                    else if(o40 === o14.o18) {
                        var o56 = o40 !== o14.o15 && o54 === o44 ? o21 : "a.length";
                        o48 += o49("if(bailout && " + o55 + " === (" + o56 + " >> 1))", 1);
                        {
                            o48 += o49("o.changeToEs5Array = 0;");
                        }
                        o48 += o49(null, -1);
                    }
                    else
                        throw new Error("Invalid nonInvariantLoopType");
                }
                if(o54 === o42 || o54 === o43) {
                    if(o45)
                        o48 += o49("sum += " + o52 + "_access(o, a, " + o55 + ");");
                    else
                        o48 += o57(o33, o24, o36, o38, index === "i" ? o55 : index);
                }
                o48 += o49("}", -1);
            }

            if(o45) {
                o48 += o49("");
                o48 += o49("function " + o52 + "_access(o, a, i) {", 1);
                {
                    o48 += o57(o33, o24, o36, o38, index, true);
                }
                o48 += o49("}", -1);
            }

            o48 += o49("return sum;");
        }
        o48 += o49("}", -1);
    }
    o48 += o49("}", -1);
    o48 += o49("echo(\"" + o52 + ": \" + " + o52 + "());");
    o1(o48);
}

function o53(o33, o24, o58) {
    var o48 = "";
    if(o33 === o2.Int32Array) {
        o48 += o49("var o = { a: new Int32Array(" + o21 + ") };");
        o48 += o49("for(var i = 0; i < " + o21 + "; ++i)", 1);
        {
            o48 += o49("o.a[i] = i + 1;");
        }
        o48 += o49(null, -1);
    } else {
        if(o33 > o2.o4)
            throw new Error("Unknown ArrayType");
        o48 += o49("var o = {", 1);
        {
            var o59 = o33 === o2.o3 ? "{" : "[";
            var o60 = o33 === o2.o3 ? "}" : "]";
            function o61(o54) {
                return o33 === o2.o3 ? "\"" + o54 + "\": " : "";
            }

            var o23 = "a: " + o59 + " ";
            for(var o54 = 1; o54 <= o21; ++o54) {
                var o62 = o54 === o21 ? "" : ", ";
                o23 += o61(o54 - 1);
                if(o24 === o5.Object)
                    o23 += "{ p: " + o54 + " }" + o62;
                else if(o24 === o5.o6)
                    o23 += o54 + o62;
                else if(o24 === o5.o7)
                    o23 += o54 + ".1" + o62;
                else
                    throw new Error("Unknown JsArrayElementType");
            }
            if(o33 === o2.o3)
                o23 += ", length: " + o21;
            if(o58) {
                o48 += o49(o23 + " " + o60 + ",");
                o48 += o49("set changeToEs5Array(v) {", 1);
                {
                    o48 += o50(o22("this.a", o24));
                }
                o48 += o49("}", -1);
            }
            else
                o48 += o49(o23 + " " + o60);
        }
        o48 += o49("};", -1);
    }

    o48 += o49("var a = o.a;");
    o48 += o49("a[-1] = a[0];");
    if(o33 === o2.o3)
        o48 += o49("var a2 = [];");
    else
        o48 += o49("var a2 = { length: a.length };");
    o48 += o49("for(var i = -1; i < a.length; ++i)", 1);
    {
        if(o33 <= o2.o4 && o24 === o5.Object)
            o48 += o49("a2[i] = { p: -a[i].p };");
        else
            o48 += o49("a2[i] = -a[i];");
    }
    o48 += o49(null, -1);
    return o48;
}

function o57(o33, o24, o36, o38, index, o63) {
    var o48 = "";
    var o64 = "[" + index + "]";

    if(o33 <= o2.o4 && o24 === o5.Object)
        o64 += ".p";

    if(o36 === o8.o9)
        o64 = "a" + o64;
    else if(o36 === o8.o10)
        o64 = "o.a" + o64;
    else
        throw new Error("Unknown ArrayAccessType");

    var o65 = o63 ? "return " : "sum += ";
    if(o38 === o11.o12)
        o48 += o49(o65 + o64 + ";");
    else if(o38 === o11.o13)
        o48 += o49(o65 + "(" + o64 + " = -" + o64 + " - 1, " + o64 + ");");
    else
        throw new Error("Unknown ElementAccessType");

    return o48;
}

function o50(o66) {
    var o48 = "";
    o48 += o49("try {", 1);
    {
        o48 += o49(o66);
    }
    o48 += o49("} catch(ex) {", -1);
    o48 += o49(null, 1);
    {
        o48 += o49('echo("Unexpected exception - " + ex.name + ": " + ex.message);');
    }
    o48 += o49("}", -1);
    return o48;
}

function o49(o67, o68) {
    if(o68 && o68 < 0)
        o26 += o68 * 4;
    if(o67 && o67 !== "") {
        var o69 = "";
        for(var o54 = 0; o54 < o26; ++o54)
            o69 += " ";
        o67 = o69 + o67 + "\n";
    }
    else if(o67 === "")
        o67 = "\n";
    else
        o67 = "";
    if(o68 && o68 > 0)
        o26 += o68 * 4;
    return o67;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function o51(o56) {
    return Math.o70(Math.o70(o56 * 10) / 10);
}

function o1() {
    var o71;
    if(this.o72)
        o71 = function(o67) { this.o72.o73(o67); };
    else if(this.o74)
        o71 = function(o67) {
            var o75 = this.o74.o76("div");
            o75.o77 = o67;
            this.o74.o78.o79(o75);
        };
    else
        o71 = function(o67) { this.print(o67); };
    o1 = function() {
        var o67 = "";
        for(var o54 = 0; o54 < arguments.length; ++o54)
            o67 += arguments[o54];
        o71(o67);
    };
    o1.apply(this, arguments);
}
