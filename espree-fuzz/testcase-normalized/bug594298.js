//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {};
var o1 = {};
var o2 = function () {
  o0.o3;
};

var o4 = function () {
  o0 = o1;
  o0.o3 = 1;
};

o4();

Object.defineProperty(o0, 'prop1', {
    get: function () {
      return 3;
    }
  }); 
o2();
delete o0.o3;

o4();
Object.create(o1); 
o2();

o9.o10("PASSED");
