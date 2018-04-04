//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Use do..while as a statement inside if..else
var o0="if (1) do WScript.Echo(1); while (false); else 1;";

try
{
    eval(o0);
}
catch (o2)
{
    o3.o4(o2);
}

// Use do..while as a statement inside another do..while
o0="do do WScript.Echo(2); while (false); while(false);"
try
{
    eval(o0);
}
catch (o2)
{
    o3.o4(o2);
}

// do..while without a semicolon at the end, followed by another statement
// do while surrounds a statement without a semicolon, but ended with a newline
var o5 = 10;
do
  o3.o4(3)
while (false)
var o6=20;

with(o5) do o3.o4(4); while (false)

for(var o7=0; o7<5; o7++)
  do
    o3.o4("5."+o7);
  while(false)

// do..while as the last statement ended by EOF
do
  o3.o4(6)
while (false)
