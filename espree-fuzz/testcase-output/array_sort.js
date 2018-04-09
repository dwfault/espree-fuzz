//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0)
{
  o1.o2(o0);
}

//Array sort testing for Array type
var o3 = [120, 5, 8, 4, 6, 9, 9, 10, 2, 3];


function o4(o5,o6) {return o5 - o6}

write(o3.sort());

write(o3.sort(o4));


//Sort numerically and ascending:
var o7=[25, 8, 7, 41]
write(o7.sort(function(o5,o6){return o5 - o6}))

//Sort numerically and descending:
var o8=[25, 8, 7, 41]
write(o7.sort(function(o5,o6){return o6 - o5})) //Array now becomes [41, 25, 8, 71


var o9 = new Array("some", "sample", "strings", "for", "testing");

write(o9.sort());
write(o9.sort(function(o5,o6){return o5 - o6}) + " - Output different in cscript due to NaN");

var o5;

function o10(o11) {
   var o12;
   o5=new Array();
   for (o12=0;o12<o11;o12++)
     o5[o5.length]=(o11/2)-o12;
}

function o13(o5,o6) {return o5 - o6}

function test() {
   o5.sort(o13);
}

o10(10);
test();
o10(100);
test();
o10(1000);
test();


function o14(o5,o6)
{
  this.o15 = 10;
  return o5 - o6;
}

var o16 = [1,2,3];
write(o16.sort(o14));
write(o15);

o5 = [ 1, 1.2, 12, 4.8, 4 ];
write(o5.sort(function(o3, o17) { return o3 - o17 }));

o5 = [3, 2, 1];
try
{
    // throws
    o5.sort(null);
} catch (o18) {
    write(o18);
}

// default comparer
o5.sort(undefined);

write(o5);
