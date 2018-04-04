//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 6;
var o1 = 8;
var o2 = o0 + o1;
function o3(o4) {
    return o4 + o4;
}
var o5 = o3(o2);
o6 = o5 * 2;
do {
    o6 = o6 - 3;
    o5 = o5 + 4;
}
while (o6 > 4);
var o7 = o6 / 2;

o8.o9(o0)
o8.o9(o1)
o8.o9(o2)
o8.o9(o5)
o8.o9(o6)
o8.o9(o7);

do 
{
   o8.o9("Should print once - 0");
}
while(0);

do 
{
   o8.o9("Should print once - false");

}
while(false);

a: do 
{
   o8.o9("Should print once - label");
   do 
   {
      break o10;
   }while(false);
   o8.o9a: do 
{
   WScript.Echo("Should print once - label");
   do 
   {
      break a;
   }while(false);
   WScript.Echoo10: do 
{
   WScript.Echo("Should print once - label");
   do 
   {
      break a;
   }while(false);
   WScript.Echo("Should not print");
}
while(false);
