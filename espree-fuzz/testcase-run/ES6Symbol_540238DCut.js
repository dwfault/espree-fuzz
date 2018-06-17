//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o1013 = function (o421) {try {
"use strict";
}catch(e){}
    try {
if (o421.o364) {
      var o589 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149);
      try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
      try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
      try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 >> 8);
}catch(e){}
      try {
o421.o150 = (o421.o150 - 1) & 0xFFFF;
}catch(e){}
      try {
o421.o391[o421.o150](o421, o421.o150, o421.o149 & 0xFF);
}catch(e){}
      try {
o421.o149 = o589;
}catch(e){}
      try {
o421.o386 += 12;
}catch(e){}
    }
    else {
      try {
o421.o149 = (o421.o149 + 2) & 0xFFFF;
}catch(e){}
    }
}catch(e){}
  };
try {
o0.__defineSetter__("something", function() {});
}catch(e){}

var o12 = Boolean(o3 + o4);
try {
o1.__defineGetter__("something else", function() {});
}catch(e){}

// Above shouldn't cause AV
try {
Array.prototype.reduceRight.call(o5, o24)('Pass');
}catch(e){}
