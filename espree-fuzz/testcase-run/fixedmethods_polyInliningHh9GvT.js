//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o2 = 20;
var reduceRight = Int8Array.prototype.__proto__.reduceRight;
var o5 = {
    o6: 0,
    o7: 0,
    o8: 1,
    add: function () {
        try {
return (this.o7 + this.o8) + " (original)";
}catch(e){}
    },
    o9: function () {
        try {
return (this.o7 - this.o8) + " (original)";
}catch(e){}
    }
};
function o7(name) {
                var o4=function () { }
                try {
Object.seal(o4);
}catch(e){}
                try {
Object.defineProperty(o4, name, {
                    value: 0
                    });
}catch(e){}
            }
try {
try{
    try {
o3();
}catch(e){}
}
catch(o52){}
}catch(e){}
try {
o65.o66("Passed");
}catch(e){}
