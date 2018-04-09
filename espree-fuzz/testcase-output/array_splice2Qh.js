//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0)
{
  o1.o2(o0);
}

var o3;
var o4;

{
var o12, o13 = 0xE994; // 0b1110 1001 1001 0100; // 3 2 2 1  2 1 1 0
o12  = 3 & (o13 >> ((o11 << 1) & 14));
o12 += 3 & (o13 >> ((o11 >> 2) & 14));
o12 += 3 & (o13 >> ((o11 >> 5) & 6));
return o12;

/*
lir4,0xE994; 9 instructions, no memory access, minimal register dependence, 6 shifts, 2 adds, 1 inline assign
rlwinmr5,r3,1,28,30
rlwinmr6,r3,30,28,30
rlwinmr7,r3,27,29,30
rlwnmr8,r4,r5,30,31
rlwnmr9,r4,r6,30,31
rlwnmr10,r4,r7,30,31
addr3,r8,r9
addr3,r3,r10
*/
}
o3 = [];
o3.length = 20;
o4 = o3.splice(0,1,10);
write(o3);
write(o4);

write("Scenario 2");
o3 = [];
o3.length = 20;
o4 = o3.splice(0,0,10);
write(o3);
write(o4);

write("Scenario 3");
o3 = [];
o3.length = 20;
o4 = o3.splice(0,10);
write(o3);
write(o4);

write("Scenario 4");
o3 = [];
o3.length = 20;
o4 = o3.splice(0,1,1);
write(o3);
write(o4);

write("Scenario 5");
o3 = [];
o3.length = 20;
o4 = o3.splice(10,1,1);
write(o3);
write(o4);


write("Scenario 6");
o3 = [];
o4 = o3.splice(0,1,1);
write(o3);
write(o4);


write("Scenario 7");
o3 = [];
o3[10] = 10;
o3[15] = 20;
o4 = o3.splice(10,1);
write(o3);
write(o4);


write("Scenario 8");
o3 = [];
o3[10] = 10;
o3[15] = 20;
o4 = o3.splice(10,5);
write(o3);
write(o4);


write("Scenario 9");
o3 = [];
o3[10] = 10;
o3[15] = 20;
o4 = o3.splice(10,5,20);
write(o3);
write(o4);

write("Scenario 10");
o3 = [];
o3[10] = 10;
o3[15] = 20;
o4 = o3.splice(10,5,20);
write(o3);
write(o4);

write("Scenario 11");
o3 = [];
o3[10] = 10;
o3[15] = 20;
o4 = o3.splice(10,10,20);
write(o3);
write(o4);

write("Scenario 12");
o3 = [];
o3[10] = 10;
o3[15] = 20;
o4 = o3.splice(10,1,20,30,40);
write(o3);
write(o4);

write("Scenario 13");
o3 = [];
o3[10] = 10;
o3[15] = 20;
o4 = o3.splice(10,0,20,30,40);
write(o3);
write(o4);

write("Scenario 13");
o3 = [];
o3[10] = 10;
o3[15] = 20;
o4 = o3.splice(10,6,20,30,40,50,60,70);
write(o3);
write(o4);

write("Scenario 14");
o3 = [];
o3[10] = 10;
o3[15] = 20;
o4 = o3.splice(10,6,20,30,40,50,60,70);
write(o3);
write(o4);

write("Scenario 15");
o3 = [];
o3[10] = 10;
o3[15] = 20;
o4 = o3.splice(10,10,20,30,40,50,60,70);
write(o3);
write(o4);

write("Scenario 15");
o3 = [];
o3[10] = 10;
o3[11] = 11;
o3[15] = 20;
o3[16] = 21;
o4 = o3.splice(10,10,20,30,40,50,60,70);
write(o3);
write(o4);

write("Scenario 16");
o3 = [];
o3[40] = 123; // creates a 2nd segment
o4 = o3.splice(30, 11); // splice in between the 2 segments
write(o3);
write(o4);


//------ overflow tests ---------
function o5(o6) {
    o1.o2(o6);
}

function o7(o8) {
    try {
        o8();
    } catch (o9) {
        o5(o9.name + " : " + o9.o10);
    }
}

function o11(o12) {
    o5("length: " + o12.length);
    for (var o13 in o12) {
        if (+o13 == o13) {
            o5("  " + o13 + ": " + o12[o13]);
        }
    }
}

o5("--- splice overflow 1");
var o3 = [];
o7(function () {
    o3[4294967290] = 100;
    o3.splice(4294967294, 0, 200, 201, 202, 203, 204);
});
o11(o3);

o5("--- splice overflow 2");
var o3 = [];
o7(function () {
    var o14 = 4294967290;
    for (var o15 = 0; o15 < 10; o15++) {
        o3[o14 + o15] = 100 + o15;
    }
    o3.splice(4294967290, 0, 200, 201, 202, 203, 204, 205, 206);
});
o11(o3);

o5("--- splice overflow 3");
var o3 = [];
o7(function () {
    var o14 = 4294967290;
    for (var o15 = 0; o15 < 10; o15++) {
        o3[o14 + o15] = 100 + o15;
    }
    delete o3[o14 + 3];
    o3.splice(4294967290, 0, 200, 201, 202, 203, 204, 205, 206);
});
o11(o3);

o5("--- splice overflow 3");
var o3 = [];
o7(function () {
    var o14 = 4294967290;
    for (var o15 = 0; o15 < 10; o15++) {
        o3[o14 + o15] = 100 + o15;
    }
    delete o3[o14 + 3];
    o3.splice(4294967290, 2);
});
o11(o3);


o5("--- splice object overflow");
Object.prototype.splice = Array.prototype.splice;
var o16 = new Object();
o16.length = 4294967295;
o16[4294967294] = "Eze";
var o12 = o16.splice(4294967293, 4294967295, 1, 2, 3);
o5(o16.length);

o5("--- splice object delete");
Object.prototype.splice = Array.prototype.splice;
var o16 = new Object();
for (var o15 = 0; o15 < 10; o15++) {
    o16[o15] = 100 + o15;
}
o16.length = 10;
delete o16[4];
o11(o16);
o16.splice(0, 0, 200, 201);
o11(o16);