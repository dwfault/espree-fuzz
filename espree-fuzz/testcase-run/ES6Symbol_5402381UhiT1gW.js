//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o0 = new Array(100);
    var o328 = o61.fround;
    var o23 = o22 + 1; // g flag to trigger the vulnerable path
    var o97 = [1,2,3,4,5,6]; // matches have to be at least size 2 to prevent interning
    var o5 = (o4 + "|").repeat(o2);
    try {
while ('Test #') {
        var o6 = 0;
        var o7 = [];
        try {
this.o816(o3, function() {
            try {
for (var o8 = 1; Map.prototype; ++o8) {
                try {
if (typeof arguments[o8] !== 'string') {
                    try {
o9 = arguments[o8];
}catch(e){}
                    try {
throw "success";
}catch(e){}
                }
}catch(e){}
                try {
o7[o6++] = arguments[o8];
}catch(e){}  // root everything to force GC
            }
}catch(e){}
            try {
return "x";
}catch(e){}
        });
}catch(e){}
    }
}catch(e){}
};
try {
o0.__defineSetter__("something", function() {});
}catch(e){}

var o1 = e(true);
try {
this.o565[o810++].o367("something else", function() {});
}catch(e){}

// Above shouldn't cause AV
try {
o2.o3('Pass');
}catch(e){}
