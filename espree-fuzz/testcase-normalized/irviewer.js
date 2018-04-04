//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
  return 1;
}

function o1(o2,o3) {
  return (o2+o3)*2+42;
}


// parseIR
o4.o5("--- parseIR ---");
var o6 = o7("function bar() {return 42;}");  // <<< CALL parseIR


// functionList
o4.o5("--- functionList ---");
var o8 = o9();  // <<< CALL functionList


// rejitFunction
o4.o5("--- rejitFunction ---");

var o10, o11, o12;
o10 = o8[0];
o11 = o10.o13;
o12 = o10.o14;

o15(o11, o12);  // <<< CALL rejitFunction
