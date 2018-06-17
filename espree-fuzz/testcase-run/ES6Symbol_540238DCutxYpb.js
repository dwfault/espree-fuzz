//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o1 = function() { try {
return o0;
}catch(e){} };
try {
o0.__defineSetter__(0, function() {});
}catch(e){}

class o3 extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]o421.o368
};
try {
o1.__defineGetter__("something else", function() {});
}catch(e){}

// Above shouldn't cause AV
try {
Array.prototype.reduceRight.call(o5, o1)('Pass');
}catch({
        name: "delete a setter property then set",
        o25: function() {
            var o10 = o0.o4();
            var o133 = 303;
            try {
Object.defineProperty(o10, o133, {
                set: function(o72) { try {
return 100;
}catch(e){} },
                configurable: true
            });
}catch(e){}
            try {
o32.o42(true, delete o10[o133], "delete should succeed on configurable accessor property");
}catch(e){}
            try {
o10[o133] = 200;
}catch(e){}
            try {
o32.o42(200, o10[o133]);
}catch(e){}
        }
    }){}
