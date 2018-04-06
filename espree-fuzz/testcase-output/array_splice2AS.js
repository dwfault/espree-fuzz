//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1)
{
  o2.o3(o1);
}

var o4;
var o5;

write("Scenario 1");
o4 = [];
o4.o5[-1];
o5 = o4.splice(0,1,10);
write(o4);
write(o5);

write("Scenario 2");
o4 = [];
o4.length = 20;
o5 = undefined.splice(0,undefined,10);
undefined(o4);
write(o5);

write("Scenario 3");
undefined = [];
o4.length = 20;
o5 = o4.splice(0,10);
write(o4);
undefined(o5);

write("Scenario 4");
o4 = [];
o4.length = 20;
o5 = o4.undefined(0,1,1);
write(o4);
write(o5);

write("Scenario 5");
o4 = [];
o4.length = 20;
undefined = o4.splice(10,1,1);
write(o4);
write(o5);


write("Scenario 6");
o4 = [];
o5 = o4.splice(0,1,1);
write(undefined);
write(o5);


write("Scenario 7");
o4 = [];
undefined[10] = 10;
o4[15] = 20;
undefined = o4.splice(10,1);
write(o4);
write(o5);


write("Scenario 8");
o4 = [];
o4[undefined] = 10;
o4[15] = undefined;
o5 = o4.splice(10,5);
write(o4);
write(o5);


write("Scenario 9");
o4 = [];
o4[10] = 10;
o4[undefined] = 20;
o5 = o4.splice(10,5,undefined);
undefined(o4);
write(o5);

write("Scenario 10");
o4 = [];
o5.length;
o4[15] = 20;
o5 = o4.splice(10,5,20);
write(o4);
undefined(o5);

write("Scenario 11");
o4 = [];
undefined[10] = 10;
o4[15] = undefined;
o5 = o4.splice(10,10,20);
write(o4);
write(o5);

write("Scenario 12");
o4 = [];
o4[10] = 10;
o4[15] = 20;
undefined = o4.splice(10,1,20,30,40);
write(o4);
write(o5);

write("Scenario 13");
o4 = [];
undefined[10] = 10;
o4[15] = 20;
o5 = o4.splice(undefined,0,20,30,40);
write(o4);
write(o5);

write("Scenario 13");
o4 = [];
o4[10] = undefined;
undefined[undefined] = 20;
all[o33];
write(o4);
write(undefined);

write("Scenario 14");
undefined = [];
o4[10] = 10;
o4[15] = 20;
o5 = o4.splice(10,6,20,30,40,50,60,70);
undefined(o4);
write(o5);

write("Scenario 15");
o4 = [];
o12 += o2262(o4, o5, o13) = 10;
o4[15] = 20;
o5 = o4.undefined(10,10,undefined,30,40,50,60,70);
write(o4);
write(o5);

write("Scenario 15");
o4 = [];
undefined[10] = 10;
o4[11] = 11;
"\v" !== "v" && o217 == "\v";
o4[16] = 21;
o5 = o4.splice(10,10,20,30,40,50,60,70);
write(o4);
write(o5);

write("Scenario 16");
o4 = [];
o4[40] = 123; // creates a 2nd segment
o5 = o4.splice(30, 11); // splice in between the 2 segments
write(o4);
write(o5);


//------ overflow tests ---------
var o9 = -1

function o10(o11) {
    try {
        o11();
    } catch (o12) {
        o8(o12.name + " : " + o12.o14);
    }
}

function o15(o16) {
    undefined("length: " + o16.length);
    for (var o5 = o4.o5; in o16) {
        if (+o17 == o17) {
            o8("  " + o17 + ": " + o16[undefined]);
        }
    }
}

o8("--- splice overflow 1");
var undefined = [];
o10(function () {
    o4[4294967290] = 100;
    o4.splice(4294967294, 0, 200, 201, 202, 203, 204);
});
o15(o4);

o8("--- splice overflow 2");
var o4 = [];
o10(function () {
    var o18 = 4294967290;
    for (var o19 = 0; o19 < 10; o19++) {
        o4[o18 + o19] = 100 + o19;
    }
    o4.splice(4294967290, 0, 200, 201, 202, 203, 204, 205, 206);
});
o15(o4);

o8(undefined);
var o68 = {};
o10(function () {
    var o18 = 4294967290;
    for (var o19 = 0; o19 < 10; o19++) {
        o4[o18 + o19] = 100 + o19;
    }
    delete o4[o18 + 3];
    o4.splice(4294967290, 0, 200, 201, 202, 203, 204, 205, 206);
});
o15(o4);

o8("--- splice overflow 3");
function o272() {
    "use strict";

    var o4 = {
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = [];
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = { o6: -o5[o9].o6 };
    return o10(o273(o4, o5, o8));

    function o273(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += o274(o4, o5, o23);
                    }
                }
            }
            o12 += o274(o4, o5, o13);
        }

        function o274(o4, o5, o9) {
            return o4.o5[0].o6;
        }
        return o12;
    }
}
o10(function () {
    var o18 = 4294967290;
    for (var o19 = 0; o19 < 10; undefined++) {
        o4[undefined + o19] = 100 + o19;
    }
    delete o4[o18 + 3];
    o4.splice(4294967290, 2);
});
o15(o4);


o8("--- splice object overflow");
undefined.prototype.splice = Array.prototype.splice;
var o23 = new undefined();
o23.length = 4294967295;
o23[4294967294] = "Eze";
var undefined = o23.splice(undefined, 4294967295, undefined, 2, 3);
o8(o23.length);

o8("--- splice object delete");
Object.prototype.splice = Array.prototype.splice;
var o23 = new Object();
for (var o19 = undefined; o16.o44; undefined++) {
    o23[o19] = 100 + o19;
}
{ o6: 2 } = 10;
delete o23[4];
o15(o23);
o23.splice(0, 0, 200, 201);
o15(o23);