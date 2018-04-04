//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Error();
var o2 = Error("I have a message for you...");

o3.o4("Error.prototype.name: " + Error.prototype.name);
o3.o4("Error.prototype.message: " + Error.prototype.o7);
o3.o4("Error.prototype.toString(): " + Error.prototype.toString());
//WScript.Echo("Error.prototype.constructor: " + Error.prototype.constructor);

o3.o4("noMessage.name: " + o0.name);
o3.o4("noMessage.message: " + o0.o7);
o3.o4("noMessage.toString(): " + o0.toString());

o3.o4("withMessage.name: " + o2.name);
o3.o4("withMessage.message: " + o2.o7);
o3.o4("withMessage.toString(): " + o2.toString());

Error.prototype.name = "TryNewName";
o3.o4("Changing Error.prototype.name to TryNewName...");
o3.o4("Error.prototype.name: " + Error.prototype.name);
o3.o4("withMessage.name: " + o2.name);

try
{
  o9.prototype.o7 = "Range Error's prototype";
  throw o9.prototype;
}
catch(o10)
{
   o3.o4("Message: " + o10.o7);
}