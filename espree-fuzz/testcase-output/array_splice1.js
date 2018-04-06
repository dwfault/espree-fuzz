//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1)
{
  o2.o3(o1)
}

write("Scenario 1");
var  o4 = [1,2,3,4,5,6,7,8];
write(o4.splice(0,3,1,2,3,4));
write(o4);
write(o4.length);

write("Scenario 2");
var  o4 = [1,2,3,4,5,6,7,8];
write(o4.splice(0,3,1,2));
write(o4);
write(o4.length);

write("Scenario 3");
var  o4 = [1,2,3,4,5,6,7,8];
write(o4.splice(0,3,1,2,3));
write(o4);
write(o4.length);

write("Scenario 4");
var  o4 = [1,2,3,4,5,6,7,8];
write(o4.splice(0,3,1,2,3));
write(o4);
write(o4.length);

write("Scenario 5");
var  o4 = [1,2,3,4,5,6,7,8];
write(o4.splice(0,3,1,2,3));
write(o4);
write(o4.length);

write("Scenario 6");
var  o4 = [1,2,3,4,5,6,7,8];
write(o4.splice(4,4,1,2,3,4));
write(o4);
write(o4.length);

write("Scenario 7");
var  o4 = [1,2,3,4,5,6,7,8];
write(o4.splice(4,4,1,2,3));
write(o4);
write(o4.length);

write("Scenario 8");
var  o4 = [1,2,3,4,5,6,7,8];
write(o4.splice(4,4,1,2,3,4,5));
write(o4);
write(o4.length);


write("Scenario 9");
var  o4 = [1,2,3,4,5,6,7,8];
write(o4.splice(4,5,1,2,3,4,5));
write(o4);
write(o4.length);

write("Scenario 10");
var  o4 = [1,2,3,4,5,6,7,8];
write(o4.splice(4,10,1,2,3,4,5));
write(o4);
write(o4.length);

write("Scenario 11");
var  o4 = [];
o4[10] = 10;
o4[11] = 11;
o4[12] = 12;
o4[13] = 13;
o4[14] = 14;
o4[15] = 15;
o4[16] = 16;
o4[17] = 17;
write(o4.splice(17,1,1));
write(o4);
write(o4.length);

write("Scenario 12");
var  o4 = [];
o4[10] = 10;
o4[11] = 11;
o4[12] = 12;
o4[13] = 13;
o4[14] = 14;
o4[15] = 15;
o4[16] = 16;
o4[17] = 17;
write(o4.splice(17,10));
write(o4);
write(o4.length);

write("Scenario 13");
var  o4 = [];
o4[10] = 10;
o4[11] = 11;
o4[12] = 12;
o4[13] = 13;
o4[14] = 14;
o4[15] = 15;
o4[16] = 16;
o4[17] = 17;
write(o4.splice(17,0,1));
write(o4);
write(o4.length);


write("Scenario 14");
var  o4 = [];
o4[10] = 10;
o4[11] = 11;
o4[12] = 12;
o4[13] = 13;
o4[14] = 14;
o4[15] = 15;
o4[16] = 16;
o4[17] = 17;
write(o4.splice(17,0,1,2,3,4));
write(o4);
write(o4.length);



write("Scenario 16");
var  o4 = [];
o4[10] = 10;
o4[11] = 11;
o4[12] = 12;
o4[13] = 13;
o4[14] = 14;
o4[15] = 15;
o4[16] = 16;
o4[17] = 17;
write(o4.splice(10,5,1,2,3,4));
write(o4);
write(o4.length);

write("Scenario 17");
var  o4 = [];
o4[10] = 10;
o4[11] = 11;
o4[12] = 12;
o4[13] = 13;
o4[14] = 14;
o4[15] = 15;
o4[16] = 16;
o4[17] = 17;
write(o4.splice(10,8,1,2,3,4));
write(o4);
write(o4.length);

write("Scenario 18");
var  o4 = [];
o4[10] = 10;
o4[11] = 11;
o4[12] = 12;
o4[13] = 13;
o4[14] = 14;
o4[15] = 15;
o4[16] = 16;
o4[17] = 17;
write(o4.splice(10,8,1,2,3,4,5,6,7,8));
write(o4);
write(o4.length);

write("Scenario 19");
var  o4 = [];
o4[10] = 10;
o4[11] = 11;
o4[12] = 12;
o4[13] = 13;
o4[14] = 14;
o4[15] = 15;
o4[16] = 16;
o4[17] = 17;
write(o4.splice(10,20,1,2,3,4));
write(o4);
write(o4.length);

write("Scenario 20");
var  o4 = [];
o4[10] = 10;
o4[11] = 11;
o4[12] = 12;
o4[13] = 13;
o4[14] = 14;
o4[15] = 15;
o4[16] = 16;
o4[17] = 17;
write(o4.splice(10,5,1,2,3,4,5,6,7));
write(o4);
write(o4.length);
