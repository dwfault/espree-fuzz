//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o51 = "27";
function o807()
{
    // Bail out point to make sure the stack walker can get the line number of the throw after bailout
    try {
for (var o1 = e; o1 < o0; o1++)
    {   
        try {
o2.o3(o1);
}catch(e){}
    }
}catch(e){}
        
    try {
throw 1;
}catch(e){}
}

try {
try { this.o380 |= 1; } catch(e) {}try { {
  try {
this.o98 = function() {
    try {
return new o99();
}catch(e){}
  }
}catch(e){}
  try {
this.o100 = function (o101, o102) {
    var o50 = {};
    // The following line was updated since Octane 1.0 to avoid OOB access.
    try {
o50.o70 = new Uint8Array(o101 * o102 * 4);
}catch(e){}
    try {
return o50;
}catch(e){}
  }
}catch(e){}
  try {
this.o103 = function (buffer, o104, o105) {
    var o106 = 0;
    try {
for (var o51 = 0; o51 < buffer.o70.length; o51++) {
      try {
o106 += o51 * buffer.o70[o51];
}catch(e){}
      try {
o106 = o106 % 1000;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
this.o107 = function () { }
}catch(e){}
} } catch(e) {}
}catch(e){}