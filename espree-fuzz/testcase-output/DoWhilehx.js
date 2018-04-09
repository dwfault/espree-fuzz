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
catch (o1)
{
    o2.o3(o1);
}

// Use do..while as a statement inside another do..while
o0="do do WScript.Echo(2); while (false); while(false);"
try
{
    eval(o0);
}
catch (o1)
{
    o2.o3(o1);
}

// do..while without a semicolon at the end, followed by another statement
// do while surrounds a statement without a semicolon, but ended with a newline
var o4 = 10;
do
  o2.o3(3)
while (false)


with(o4) do o2.o3(4); while (false)

for(var o6=0; o6<5; o6++)
  do
    o2.o3("5."+o6);
  while(false)

// do..while as the last statement ended by EOF
do
  o2.o3(6)
while (false)
