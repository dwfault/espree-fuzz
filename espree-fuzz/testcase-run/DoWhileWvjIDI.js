//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Use do..while as a statement inside if..else
var o19="if (1) do WScript.Echo(1); while (false); else 1;";

try {
try
{
    try try { try {
o1("VALIDATE_STATUS");
}catch(e){} } catch(e) {}try { o1("TEXTURE18"); } catch(e) {}catch(o12){}
}
catch (o1)
{
    try {
o1.o3(o1);
}catch(e){}
}
}catch(e){}

// Use do..while as a statement inside another do..while
try {
o148="do do WScript.Echo(2); while (false); while(false);"
}catch(e){}
try {
try
try { {
o4.o5(function() { try {
Object.create({}, this)
}catch(e){} },
                o7,
                "Should throw TypeError because property 'a' is defined on `this` and is a non-object.",
                "Invalid descriptor for property 'a'")
} } catch(e) {}
catch (o1)
{
    try {
o2.o3(o1);
}catch(e){}
}
}catch(o227){}

// do..while without a semicolon at the end, followed by another statement
// do while surrounds a statement without a semicolon, but ended with a newline
var map = o2();
try {
do
  try {
o2.o3(3)
}catch(e){}
while (false)
}catch(e){}
var o5=20;

try {
with(o4) try {
do try {
o2.o3(4);
}catch(e){} while (false)
}catch(e){}
}catch(e){}

try {
for(var o6=0; o6<5; o6++)
  try {
do
    try {
o2.o3("5."+o6);
}catch(e){}
  while(false)
}catch(e){}
}catch(e){}

// do..while as the last statement ended by EOF
try {
do
  try {
o2.o3(6)
}catch(e){}
while (false)
}catch(e){}
