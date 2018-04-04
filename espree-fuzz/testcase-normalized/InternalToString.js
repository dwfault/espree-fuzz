//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
    o1 = o1.replace(/\(pdt\)/g, "(pacific daylight time)")
         .replace(/\(pst\)/g, "(pacific standard time)");
    o3.o4(o1);
}

var o5 = new Object();
o5.toString = function() { o0("In toString() ");  return "foo" }
var o1 = String.prototype.toLowerCase.call(o5);
o0("Test call ToString - user defined object: " + o1);

o5 = true;
o1 = String.prototype.toLowerCase.call(o5);
o0("Test call ToString - bool: " + o1);

o5 = 123
o1 = String.prototype.toLowerCase.call(o5);
o0("Test call ToString - number: " + o1);

o5 = new Date();
o5.o13(20000)
o1 = String.prototype.toLowerCase.call(o5);
o0("Test call ToString - date: " + o1);
