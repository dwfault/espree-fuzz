//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o1013 = o189 = o1065["canvas"].o925;
try {
o0.__defineSetter__("something", function() {});
}catch(e){}

var o1 = Boolean(o3 + o4);
try {
o1.__defineGetter__("something else", function() {});
}catch(e){}

// Above shouldn't cause AV
try {
o2.o4('Pass');
}catch(e){}
