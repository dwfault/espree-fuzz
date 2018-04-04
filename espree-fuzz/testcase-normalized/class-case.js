//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1)
{
  o2.o3(o1);
}

var o4 = "#$%&";
o4+="0123456789";
o4+="<=>?@"
o4+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
o4+="[\]^_`";
o4+="abcdefghijklmnopqrstuvwXYZ";
o4+="{|}~";

var o5 =
    [   /[K-Z]+/gi,
        /[C-\{]+/gi,
        /[L-e]+/gi,
        /[F-e]+/gi,
        /[K-_]+/gi,
        /[e-p]+/gi,
        /[r-\~]+/gi,
        /[9-Z]+/gi,
        /[9-k]+/gi,
        /[\]-k]+/gi,
        /[\{-\}]+/gi,
        /[0-z]+/gi,
        /[0-K]+/gi,
        /[5-\}]+/gi,
        /[a-zA-Z]+/gi,
        /[afkl]+/gi,
        /[a-z0-9_]+/gi,
        /[abc]+/gi,
        /[E-f]+/gi,
        /[abc]+/gi,
        /[E-fk-o]+/gi,
        /[a-dk-lx-z]+/gi,
        /[\[\]]+/gi,
        /[\[\}]+/gi,
        /[0-\}]+/gi,
        /[A-z]+/gi,
        /[@-k]+/gi,
        /[0-_]+/gi,
        /[Z-z]+/gi,
        /[A-a]+/gi,
        /[X-kK-b]+/gi

         ];

var o6 =
    [   /[K-Z]+/g,
        /[C-\{]+/g,
        /[L-e]+/g,
        /[F-e]+/g,
        /[K-_]+/g,
        /[e-p]+/g,
        /[r-\~]+/g,
        /[9-Z]+/g,
        /[9-k]+/g,
        /[\]-k]+/g,
        /[\{-\}]+/g,
        /[0-z]+/g,
        /[0-K]+/g,
        /[5-\}]+/g,
        /[a-zA-Z]+/g,
        /[afkl]+/g,
        /[a-z0-9_]+/g,
        /[abc]+/g,
        /[E-f]+/g,
        /[abc]+/g,
        /[E-fk-o]+/g,
        /[a-dk-lx-z]+/g,
        /[\[\]]+/g,
        /[\[\}]+/g,
        /[0-\}]+/g,
        /[A-z]+/g,
        /[@-k]+/g,
        /[0-_]+/g,
        /[Z-z]+/g,
        /[A-a]+/g,
        /[X-kK-b]+/g

       ];

write("Scenario RegEx case insensitive...");

var o7 = 1;

for (var o8 in o5)
{
   write("Test case " + o7 + " " + o5[o8] + " - exec :" + o5[o8].exec(o4));
   o7++;
   write("Test case " + o7 + " " + o5[o8] + " - match:" + o4.match(o5[o8]));
   o7++;
}

write("Scenario RegEx case sensitive...");

for (var o11 in o6)
{
   write("Test case " + o7 + " " + o6[o11] + " - exec :" + o6[o11].exec(o4));
   o7++;
   write("Test case " + o7 + " " + o6[o11] + " - match:" + o4.match(o6[o11]));
   o7++;
}
