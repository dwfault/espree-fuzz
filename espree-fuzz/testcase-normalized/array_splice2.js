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
o4.length = 20;
o5 = o4.splice(0,1,10);
write(o4);
write(o5);

write("Scenario 2");
o4 = [];
o4.length = 20;
o5 = o4.splice(0,0,10);
write(o4);
write(o5);

write("Scenario 3");
o4 = [];
o4.length = 20;
o5 = o4.splice(0,10);
write(o4);
write(o5);

write("Scenario 4");
o4 = [];
o4.length = 20;
o5 = o4.splice(0,1,1);
write(o4);
write(o5);

write("Scenario 5");
o4 = [];
o4.length = 20;
o5 = o4.splice(10,1,1);
write(o4);
write(o5);


write("Scenario 6");
o4 = [];
o5 = o4.splice(0,1,1);
write(o4);
write(o5);


write("Scenario 7");
o4 = [];
o4[10] = 10;
o4[15] = 20;
o5 = o4.splice(10,1);
write(o4);
write(o5);


write("Scenario 8");
o4 = [];
o4[10] = 10;
o4[15] = 20;
o5 = o4.splice(10,5);
write(o4);
write(o5);


write("Scenario 9");
o4 = [];
o4[10] = 10;
o4[15] = 20;
o5 = o4.splice(10,5,20);
write(o4);
write(o5);

write("Scenario 10");
o4 = [];
o4[10] = 10;
o4[15] = 20;
o5 = o4.splice(10,5,20);
write(o4);
write(o5);

write("Scenario 11");
o4 = [];
o4[10] = 10;
o4[15] = 20;
o5 = o4.splice(10,10,20);
write(o4);
write(o5);

write("Scenario 12");
o4 = [];
o4[10] = 10;
o4[15] = 20;
o5 = o4.splice(10,1,20,30,40);
write(o4);
write(o5);

write("Scenario 13");
o4 = [];
o4[10] = 10;
o4[15] = 20;
o5 = o4.splice(10,0,20,30,40);
write(o4);
write(o5);

write("Scenario 13");
o4 = [];
o4[10] = 10;
o4[15] = 20;
o5 = o4.splice(10,6,20,30,40,50,60,70);
write(o4);
write(o5);

write("Scenario 14");
o4 = [];
o4[10] = 10;
o4[15] = 20;
o5 = o4.splice(10,6,20,30,40,50,60,70);
write(o4);
write(o5);

write("Scenario 15");
o4 = [];
o4[10] = 10;
o4[15] = 20;
o5 = o4.splice(10,10,20,30,40,50,60,70);
write(o4);
write(o5);

write("Scenario 15");
o4 = [];
o4[10] = 10;
o4[11] = 11;
o4[15] = 20;
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
function o8(o9) {
    o2.o3(o9);
}

function o10(o11) {
    try {
        o11();
    } catch (o12) {
        o8(o12.name + " : " + o12.o14);
    }
}

function o15(o16) {
    o8("length: " + o16.length);
    for (var o17 in o16) {
        if (+o17 == o17) {
            o8("  " + o17 + ": " + o16[o17]);
        }
    }
}

o8("--- splice overflow 1");
var o4 = [];
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

o8("--- splice overflow 3");
var o4 = [];
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
var o4 = [];
o10(function () {
    var o18 = 4294967290;
    for (var o19 = 0; o19 < 10; o19++) {
        o4[o18 + o19] = 100 + o19;
    }
    delete o4[o18 + 3];
    o4.splice(4294967290, 2);
});
o15(o4);


o8("--- splice object overflow");
Object.prototype.splice = Array.prototype.splice;
var o23 = new Object();
o23.length = 4294967295;
o23[4294967294] = "Eze";
var o16 = o23.splice(4294967293, 4294967295, 1, 2, 3);
o8(o23.length);

o8("--- splice object delete");
Object.prototype.splice = Array.prototype.splice;
var o23 = new Object();
for (var o19 = 0; o19 < 10; o19++) {
    o23[o19] = 100 + o19;
}
o23.length = 10;
delete o23[4];
o15(o23);
o23.splice(0, 0, 200, 201);
o15(o23);