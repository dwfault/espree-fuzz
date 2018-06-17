//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -version:2 -forcedeferparse
function trunc(o1) {
    try {
with (o1)
    {
        try {
o1("MSEventObjPrototype");
}catch(e){}
    }try {

}catch(e){};
}catch(e){}

    try {
return o1;
}catch(e){}
}try {
;
}catch(o581){}

var o12 = 0;
try {
o5.o6("p = " + JSON.stringify(o3));
}catch(e){}
var o34 = function o34(o35, o36) {
    try {
if (isObject(o35)) {
      try {
if (!isObject(o36)) try {
return "actual is not an object";
}catch(e){}
}catch(e){}
      var o37 = 0, o38 = 0;
      try {
for (var o6 in o35) {
        var o39 = o34(o35[o6], o36[o6]);
        try {
if (o39 !== true) try {
return o39;
}catch(e){}
}catch(e){}
        try {
++o37;
}catch(e){}
      }
}catch(e){}
      try {
for (var o6 in o36) {
        try {
++o38;
}catch(e){}
      }
}catch(e){}
      try {
if (o37 !== o38) {
        try {
return "actual has different number of fields than expected";
}catch(e){}
      }
}catch(e){}
      try {
return true;
}catch(e){}
    } else {
      try {
if (isObject(o36)) try {
return "actual is an object";
}catch(e){}
}catch(e){}
      try {
if (o35 === o36) try {
return true;
}catch(e){}
}catch(e){}
      try {
return "expected: " + o35 + " actual: " + o36;
}catch(e){}
    }
}catch(e){}
  };
try {
o5.o6("k = " + JSON.stringify(o7));
}catch(e){}
try {
o1("longhands").o6("k.z = " + o1.o2);
}catch(e){}
try {
o5.o6("k.z+1 = " + o7.o2+1);
}catch(e){}
