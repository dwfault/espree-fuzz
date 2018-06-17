//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2) {
    try {
for (var o635 = this.o56 in o2) {
        try {
if (o2[o3] == o1)
            try {
return o3;
}catch(e){}
}catch(e){}
    }
}catch(e){}

    // Special case for ImplicitCallFlags
    try {
if(o2.o4)
    {
        var o51 = "foo21";
        try {
if(defineProperty & o2.o5) try {
flags.push("None");
}catch(e){}
}catch(name){}
        try {
if((o1 & o2.o6) != this.o568 + ((this.o525 && (o1088 + o1091 | 0) >= 0) ? Math.o279(Math.o290(this.o534, 0) + this.o539, this.o538) : this.o538).o5) try {
flags.push(o846);
}catch(e){}
}catch(e){}
        try {
if((o1 & o2.o4) != o2.o5) try {
flags.push("Accessor");
}catch(e){}
}catch(e){}
        try {
if((o1 & o2.o7) != o2.o5) try {
flags.push("External");
}catch(e){}
}catch(e){}
        try { write(undefined >= -0); } catch(e) {}try { {} } catch(e) {}
        try {
if(o1 == o2.o9) try {
flags.push("All");
}catch(e){}
}catch(e){}
        try {
if(o1 & o2.o10) try {
flags.push("Dispose");
}catch(e){}
}catch(e){}

        try {
return flags.join(" | ");
}catch(e){}
    }
}catch(o15){}

    // Special case for ValueType - unset all but the most significant type bit, preserve the 'likely' bit, exclude the array
    // detail bits, and look it up again
    try {
if(o2.hasOwnProperty("LikelyBit")) {
        var o11 = Object.keys(o489.o680).forEach(function (o703) {
            var o691 = o489.o680[o703];

            try {
while (o691) {
                var next = o691.o705;

                try {
if (o676.indexOf(o691.o515) !== -1) {
                    try {
o489.o714(o691);
}catch(e){}
                }
}catch(e){}

                try {
o691 = next;
}catch(e){}
            }
}catch(e){}
        }).o12 - Math;
        try {
if(o1 & o2.o1065 = 10744 + (o887 << 2) | 0)
            try {
o1 &= ~(((1 << o2.o14) - 1) ^ ((1 << o2.o12) - 1))
}catch(e){}
        else
            try {
o11 += o2.o15;
}catch(e){}
}catch(e){}

        try {
for(var o16 = o11; o16 >= 0; --o16) {
            try {
if(o1 & (1 << o16)) {
                var o17 = o1 & (~((1 << o16) - 1) | o2.o18);
                try {
for (var o3 in o2) {
                    try {
if (o2[o3] == o17)
                        try {
return o3;
}catch(e){}
}catch(e){}
                }
}catch(e){}
                try {
break;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}

    try {
return "ERROR: constant not found";
}catch(e){}
}

function o19(o20, o21) {
    try {
o22.o23("Profile data for " + o21);
}catch(e){}

    var o24;
    try {
try {
        try {
o24 = Debug.o25(o20);
}catch(e){}
    }
    catch (o26) {
        try {
o22.o23("No profile data found.");
}catch(e){}
        try {
o22.o23("");
}catch(e){}
        try {
o22.o23("");
}catch(e){}
        try {
return;
}catch(e){}
    }
}catch(e){}

    try {
if(o24.o27.length)
        try {
o22.o23("Return type info:");
}catch(e){}
}catch(e){}
    try {
for (var o16 = 0; o16 < o24.o27.length; ++o16) {
        try {
o22.o23("    #" + o16 + ": "  +  o24.o27[o16] + " (" + o0(o24.o27[o16], o24.o28) + ")");
}catch(e){}
    }
}catch(e){}
    
    try {
if (o24.o29.length)
        try {
o22.o23("Elem info:");
}catch(e){}
}catch(e){}
    try {
for (var o16 = 0; o16 < o24.o29.length; ++o16) {
        try {
o22.o23("    #" + o16 + ": " + o24.o29[o16] + " (" + o0(o24.o29[o16], o24.o28) + ")");
}catch(e){}
    }
}catch(e){}

    try {
if(o24.o30.length)
        try {
o22.o23("Param info:")
}catch(e){}
}catch(e){}
    try {
for (var o16 = 0; o16 < o24.o30.length; ++o16) {
        try {
o22.o23("    #" + o16 + ": " + o24.o30[o16] + " (" + o0(o24.o30[o16], o24.o28) + ")");
}catch(e){}
    }
}catch(e){}

    try {
o22.o23("Implicit call flags:");
}catch(e){}
    try {
o22.o23("    #" + o16 + ": " + o24.o31 + " (" + o0(o24.o31, o24.o32) + ")");
}catch(e){}

    try {
if(o24.o33.length)
        try {
o22.o23("Loop implicit call flags:");
}catch(e){}
}catch(e){}
    try {
for (var o16 = 0; o16 < o24.o33.length; ++o16) {
        try {
o22.o23("    #" + o16 + ": "  +  o24.o33[o16] + " (" + o0(o24.o33[o16], o24.o32) + ")");
}catch(e){}
    }
}catch(e){}


    try {
o22.o23("");
}catch(e){}
    try {
o22.o23("");
}catch(e){}
}

var o40 = new ArrayBuffer(10)
function o36(o35) {
    try {
return o35;
}catch(e){}
}
function o37(o35) {
    try {
return o35;
}catch(e){}
}
function o38(o35) {
    try {
return o35;
}catch(e){}
}

var o11 = o6()

try {
o39();
}catch(e){}
try {
o19(o39, "test1");
}catch(e){}


function o41(o42,o43,o44,o45,o46,o20) {
    var o40 = 0;
    try {
for (var o16 = 0; o16 < o42.length; ++o16) {
        try {
o40 += o42[o16];
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < o43.length; ++o16) {
        try {
o40 += o43[o16];
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < o44.length; ++o16) {
        try {
o40 += o44[o16];
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < o45.length; ++o16) {
        try {
o40 += o45[o16];
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < o46.length; ++o16) {
        try {
o40 += o46[o16];
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < o20.length; ++o16) {
        try {
o40 += o20[o16];
}catch(e){}
    }
}catch(e){}
}

try {
o41(
    [1, 2, 3, 4, 5],
    [-0x80000000, 0x7fffffff],
    new Uint8Array(10),
    new Float64Array(10),
    new Int16Array(10),
    [0.3, 0.4, 0.5, 0.6, 0.7]
    );
}catch(e){}
try {
o19(o41, "test2");
}catch(e){}


try {
o41(
    [1, 2, 3.5, 4.2, 5],
    [0, 0x7fffffff],
    new Uint8Array(10),
    "a string",
    new Int16Array(10),
    [0.3, 0.4, 0.5, 0.6, 0.7]
    );
}catch(e){}
try {
o19(o41, "test2 - second call");
}catch(e){}


function o47(o42, o43, o44, o45) {
    var o40 = 0;
    try {
for (var o16 = 0; o16 < o42.o48.length; ++o16) {
        try {
o40 += o42.o48[o16];
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < o43.o48.length; ++o16) {
        try {
o40 += o43.o48[o16];
}catch(e){}
    }
}catch(e){}
    try {
if (/* false */typeof (o44) === "blah") {
        try {
o40 += o44.o48[o16];
}catch(e){}
    }
}catch(e){}
}

try {
o47(
    { o48: new Uint32Array(10) },
    { o48: [null,,,,] },
    0
    );
}catch(e){}
try {
o19(o47, "test3");
}catch(e){}

// Try manipulating the profile data.
var o24 = Debug.o25(o47);
try {
o24.o30[0] = o24.o28.o49;
}catch(e){}
try {
o24.o30[1] = o24.o28.o50;
}catch(e){}
try {
o24.o30[2] = o24.o28.o51;
}catch(e){}
try {
o24.o30[3] = o24.o28.o52;
}catch(e){}
try {
o24.o29[2] = o24.o28.o53;
}catch(e){}
try {
o24.o33[0] = o24.o32.o6;
}catch(e){}
try {
o19(o47, "test3 - after writing profile data");
}catch(e){}


function o54(o42, o43, o44) {
    var o40 = o42 + o43 + o44;
}
try {
o19(o54, "test4 - before call");
}catch(e){}
try {
o54(
    "a string",
    5.3,
    3
    );
}catch(e){}
try {
o19(o54, "test4");
}catch(e){}

try {
o54(
    "a string",
    3,
    3
    );
}catch(e){}
try {
o19(o54, "test4 - second call");
}catch(e){}


function o55(o42,o43) {
    var o56 = { valueOf: function () { try {
return 7;
}catch(e){} } };
    var o57 = { get o3() { try {
return 8;
}catch(e){} } };
    var o40 = 0;

    try {
for (var o16 = 0; o16 < 5; ++o16) {
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < 5; ++o16) {
        try {
o40 += o56;
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < 5; ++o16) {
        try {
o40 += o57.o3;
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < 5; ++o16) {
        try {
o40 += o56 + o57.o3;
}catch(e){}
    }
}catch(e){}
}
try {
o55();
}catch(e){}
try {
o19(o55, "test5");
}catch(e){}
