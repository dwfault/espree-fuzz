//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2() {
  function o3() {
    eval('[a] = this;');
  }
  let o5;
  o3();
}
o6.o7(function () { o2(); }, o8, "Invalid assignment to array throws runtime reference error when destructuring is disabled", "Invalid left-hand side in assignment");

o0.o9("PASS");
