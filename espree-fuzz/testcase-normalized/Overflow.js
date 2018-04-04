//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {
    o1: 0,
    o2: 1,
    o3: 2,
    o4: 3,

    o5: 4
};

var o6 = [false, true];

// Test helper constants and variables
var o7 = 0;
var o8 = -1;

var o9 = (53 - 32) >> 1;
var o10 = (53 - 32 + 1) << 1;
var o11 = (o9 + o10) >> 1;
for(var o12 = o9;
    o12 <= o10;
    o12 += o12 <= o11 ? o12 - (o9 - 1) : ((o10 - o12) >> 1) + 1) {

    for(var o13 = 1; o13 <= 8; o13 <<= 1) {
        for(var o14 = 0; o14 < o6.length; ++o14) {
            var o16 = o6[o14];

            o17("generateAndRun(" + o12 + ", " + o13 + ", " + o16 + ");");
            o18(o12, o13, o16);
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test helpers

function o18(o12, o13, o16) {
    var o19 = -0x80000001;
    var o20 = 0x7fffffff;
    var o21 = 0xffffffff;

    var o22 = "";
    o22 += o23("(function test() {", 1);
    {
        o22 += o23("echo(inner(" + o24(o16 ? o19 : o20) + "));");
        o22 += o23("function inner(a) {", 1);
        {
            o22 += o23("a |= 0;");
            o22 += o23("var r = 0;");
            o25(o12, o13).o26(function o27(o28) {
                o8 = (o8 + 1) % o0.o5;
                var o29 = o30(o28.o31);
                var o32 =
                    o8 === o0.o1 || o8 === o0.o4
                        ? o29
                        : o33(o28.o31);
                var o34 = o28.o35 ? o30(o28.o35.o31) : "a";
                if(o8 === o0.o2)
                    o34 = "-" + o34;
                else if(o8 === o0.o4)
                    o34 = "+" + o34;
                var o36 =
                    o28.o35 && o8 !== o0.o2 && (o28.o31 & 3) === 0
                        ? o16 ? o19 : o21
                        : o34;
                o22 += o23("var " + o32 + " = " + o34 + " + " + o36 + " + 1;");
                if(o8 === o0.o2)
                    o22 += o23("var " + o29 + " = -" + o32 + ";");
                else if(o8 === o0.o3)
                    o22 += o23("var " + o29 + " = " + o32 + ";");
                if(o28.o37 || o28.o36)
                    return;
                o22 += o23("r ^= " + o29 + ";");
            });
            o22 += o23("return r;");
        }
        o22 += o23("}", -1);
    }
    o22 += o23("});", -1);
    o22 = o22.substring(0, o22.length - 1);
    o17(o22);
    o22 = eval(o22);
    o22();
    o17();

    function o25(o40, o41, o42, o35) {
        function o43(o31, o35) {
            this.o31 = o31;
            this.o35 = o35 ? o35 : null;
            this.o37 = null;
            this.o36 = null;
        }
        o43.prototype.o26 = function (o27) {
            o27(this);
            if(this.o37)
                this.o37.o26(o27);
            if(this.o36)
                this.o36.o26(o27);
        };

        if(o40 <= 0)
            throw new Error("Invalid tree depth");
        if(o41 <= 0)
            throw new Error("Invalid number of branches");
        if((o41 & o41 - 1) !== 0)
            throw new Error("Number of branches must be a power of 2");
        if(!o42)
            o42 = [0];
        else if(o42[0] < 0)
            throw new Error("Invalid node number");

        var o28 = new o43(o42[0]++, o35);
        if(--o40 !== 0) {
            var o46 = o41 !== 1;
            if(o46)
                o41 >>= 1;
            o28.o37 = o25(o40, o41, o42, o28);
            if(o46)
                o28.o36 = o25(o40, o41, o42, o28);
        }

        return o28;
    }

    function o30(o31) {
        return "v" + o31;
    }

    function o33(o31) {
        return "t" + o31;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function o24(o47) {
    if(typeof o47 !== "number")
        return o47;
    return o47 >= 0 ? "0x" + o47.toString(16) : "-0x" + (-o47).toString(16);
}

function o23(o49, o50) {
    if(o50 && o50 < 0)
        o7 += o50 * 4;
    if(o49 && o49 !== "") {
        var o51 = "";
        for(var o52 = 0; o52 < o7; ++o52)
            o51 += " ";
        o49 = o51 + o49 + "\n";
    }
    else if(o49 === "")
        o49 = "\n";
    else
        o49 = "";
    if(o50 && o50 > 0)
        o7 += o50 * 4;
    return o49;
}

function o17() {
    var o53;
    if(this.o54)
        o53 = function (o49) { this.o54.o55(o49); };
    else if(this.o56)
        o53 = function (o49) {
            var o57 = this.o56.o58("div");
            o57.o59 = o49;
            this.o56.o60.o61(o57);
        };
    else
        o53 = function (o49) { this.print(o49); };
    o17 = function () {
        var o49 = "";
        for(var o52 = 0; o52 < arguments.length; ++o52)
            o49 += arguments[o52];
        o53(o49);
    };
    o17.apply(this, arguments);
}
