//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
//  -maxsimplejitruncount:1 -maxinterpretcount:1 
var o0 = {};
var o1 = new Uint8ClampedArray(256);
var o16 = function(o10) { try {
return o10;
}catch(e){} };
try {
for (var o3 in o1) {
    try {
o0.__proto__ = Array;
}catch(e){}
    try {
switch ('(') {
        case '(':
        case 1:
            try {
o0 = new Proxy(o0, o2);
}catch(e){}
    }
}catch(e){}
}
}catch(e){}
try {
print('PASS');
}catch(e){}