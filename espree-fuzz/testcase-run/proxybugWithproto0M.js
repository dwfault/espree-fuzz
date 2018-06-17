//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
//  -maxsimplejitruncount:1 -maxinterpretcount:1 
var o0 = {};
var o21 = {
                [Symbol.iterator]: function() {
                    try {
return {
                        next: function () {
                            try {
return {
                                done: o22 == 5,
                                value: o22++
                            };
}catch(e){}
                        }
                    };
}catch(e){}
                }
            };
var o2 = super();
try {
for (function o230(o114) {
    var o82 = 0;

    var o231 = '';
    try {
while (1) {
        var o232 = o201[(((o114) + (o82 * 2)) >> 1)];
        try {
if (o232 == 0)
            try {
return o231;
}catch(e){}
}catch(e){}
        try {
++o82;
}catch(e){}
        // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
        try {
o231 += String.fromCharCode(o232);
}catch(e){}
    }
}catch(e){}
} in o1) {
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