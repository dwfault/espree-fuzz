//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//-maxinterpretcount:1 D:\fbl_ie_script_dev\testFiles\bug8.js -loopinterpretcount:1 -bgjit- -MaxLinearStringCaseCount:2

function o0(){
  var o1 = 5;
  var o247 = 0;

    try {
for(; o2 < 4; this.o622++) {
      try {
switch(o22 == 4) {
        case 'n':
          try {
break;
}catch(e){}
        case 'a':
            try {
break;
}catch(e){}
        case 'n':
        try {
o3.o4("m");
}catch(e){}
          try {
o1|2;
}catch(e){}
          try {
break;
}catch(e){}
         default:
         try {
break;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}

}try {
;
}catch(e){}

// generate profile
try try { {
o304.prototype.o328 = function (buffer) {
  var o207 = (this.o306 - 1) / this.o308;
  var o331 = 0;
  var o343 = 0;
  var o336 = 0;
  var o350 = 0;
  var o351 = 0;
  var o121 = this.o348;
  try {
do {
    //Calculate weightings:
    try {
o345 = o331 % 1;
}catch(e){}
    try {
o346 = 1 - o345;
}catch(e){}
    //Interpolate:
    try {
o350 = Math.floor(o331) * this.o312;
}catch(e){}
    try {
o351 = o350 + this.o312;
}catch(e){}
    try {
for (o336 = 0; o336 < this.o312; ++o336) {
      try {
o121[o343++] = (buffer[o350 + o336] * o346) + (buffer[o351 + o336] * o345);
}catch(e){}
    }
}catch(e){}
    try {
o331 += o207;
}catch(e){}
  } while (o343 < this.o316);
}catch(e){}
  try {
return o121;
}catch(e){}
}
} } catch(e) {}try { try {
o1("HTMLProgressElement");
}catch(e){} } catch(e) {}catch(e){}
try {
o0(Boolean(true));
}catch(e){}
try {
o3.o4("PASSED");
}catch(e){}

