//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0)
{
  o1.o2(o0)
}

write("Scenario 1");
var  o3 = [1,2,3,4,5,6,7,8];
write(o3.splice(0,3,1,2,3,4));
write(o3);
write(o3.length);

write("Scenario 2");
var  o3 = [1,2,3,4,5,6,7,8];
write(o3.splice(0,3,1,2));
write(o3);
write(o3.length);

write("Scenario 3");
var  o3 = [1,2,3,4,5,6,7,8];
write(o3.splice(0,3,1,2,3));
write(o3);
write(o3.length);

write("Scenario 4");
var  o3 = [1,2,3,4,5,6,7,8];
write(o3.splice(0,3,1,2,3));
write(o3);
write(o3.length);

write("Scenario 5");
var  o3 = [1,2,3,4,5,6,7,8];
write(o3.splice(0,3,1,2,3));
write(o3);
write(o3.length);

write("Scenario 6");
var  o3 = [1,2,3,4,5,6,7,8];
write(o3.splice(4,4,1,2,3,4));
write(o3);
write(o3.length);

write("Scenario 7");
var  o3 = [1,2,3,4,5,6,7,8];
write(o3.splice(4,4,1,2,3));
write(o3);
write(o3.length);

write("Scenario 8");
function o1809(o4, o5, o7) {
        var o11 = 0;
        for(var o12 = 0; o12 < o5.length; ++o12) {
            o11 += o12;
            for(var o16 = 0; o16 < 2; ++o16) {
                o11 += o16;
                for(var o21 = 0; o21 < o5.length; ++o21) {
                    o11 += o21;
                    for(var o22 = 0; o22 < o5.length; ++o22) {
                        o11 += o22;
                        o11 += o1810(o4, o5, o22);
                    }
                }
                o5 = o7;
            }
            o11 += o1810(o4, o5, o12);
        }

        function o1810(o4, o5, o8) {
            return o5[o8];
        }
        return o11;
    };
write(o3.splice(4,4,1,2,3,4,5));
write(o3);
write(o3.length);


write("Scenario 9");
var  o3 = [1,2,3,4,5,6,7,8];
write(o3.splice(4,5,1,2,3,4,5));
write(o3);
write(o3.length);

write("Scenario 10");
var  o3 = [1,2,3,4,5,6,7,8];
write(o3.splice(4,10,1,2,3,4,5));
write(o3);
write(o3.length);

write("Scenario 11");
var  o3 = [];
o3[10] = 10;
o3[11] = 11;
o3[12] = 12;
o3[13] = 13;
o3[14] = 14;
o3[15] = 15;
o3[16] = 16;
o3[17] = 17;
write(o3.splice(17,1,1));
write(o3);
write(o3.length);

write("Scenario 12");
var  o3 = [];
o3[10] = 10;
o3[11] = 11;
o3[12] = 12;
o3[13] = 13;
o3[14] = 14;
o3[15] = 15;
o3[16] = 16;
o3[17] = 17;
write(o3.splice(17,10));
write(o3);
write(o3.length);

write("Scenario 13");
var  o3 = [];
o3[10] = 10;
o3[11] = 11;
o3[12] = 12;
o3[13] = 13;
o3[14] = 14;
o3[15] = 15;
o3[16] = 16;
o3[17] = 17;
write(o3.splice(17,0,1));
write(o3);
write(o3.length);


write("Scenario 14");
var  o3 = [];
o3[10] = 10;
o3[11] = 11;
o3[12] = 12;
o3[13] = 13;
o3[14] = 14;
o3[15] = 15;
o3[16] = 16;
o3[17] = 17;
write(o3.splice(17,0,1,2,3,4));
write(o3);
write(o3.length);



write("Scenario 16");
var  o3 = [];
o3[10] = 10;
o3[11] = 11;
o3[12] = 12;
o3[13] = 13;
o3[14] = 14;
o3[15] = 15;
o3[16] = 16;
o3[17] = 17;
write(o3.splice(10,5,1,2,3,4));
write(o3);
write(o3.length);

write("Scenario 17");
var  o3 = [];
o3[10] = 10;
o3[11] = 11;
o3[12] = 12;
o3[13] = 13;
o3[14] = 14;
o3[15] = 15;
o3[16] = 16;
o3[17] = 17;
write(o3.splice(10,8,1,2,3,4));
write(o3);
write(o3.length);

write("Scenario 18");
var  o3 = [];
o3[10] = 10;
o3[11] = 11;
o3[12] = 12;
o3[13] = 13;
o3[14] = 14;
o3[15] = 15;
o3[16] = 16;
o3[17] = 17;
write(o3.splice(10,8,1,2,3,4,5,6,7,8));
write(o3);
write(o3.length);

write("Scenario 19");
var  o3 = [];
o3[10] = 10;
o3[11] = 11;
o3[12] = 12;
o3[13] = 13;
o3[14] = 14;
o3[15] = 15;
o3[16] = 16;
o3[17] = 17;
write(o3.splice(10,20,1,2,3,4));
write(o3);
write(o3.length);

write("Scenario 20");
var  o3 = [];
o3[10] = 10;
o3[11] = 11;
o3[12] = 12;
o3[13] = 13;
o3[14] = 14;
o3[15] = 15;
o3[16] = 16;
o3[17] = 17;
write(o3.splice(10,5,1,2,3,4,5,6,7));
write(o3);
write(o3.length);
