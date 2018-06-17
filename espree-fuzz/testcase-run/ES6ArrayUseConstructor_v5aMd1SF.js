//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Disabling ES6 Array builtins using this['constructor'] property to construct their return values

try { {} } catch(e) {}try { {} } catch(e) {}

function test(e, o35) {
                try {
Object.defineProperty(o24, Symbol.isConcatSpreadable, {
                        get: function() {
                            try {
o24 = [];
}catch(e){}
                            try {
return true;
}catch(e){}
                        }
                    })
}catch(e){}
                try {
o2(o35, Array.prototype.concat.call(o24, o24), 'expecting ['+o35+']');
}catch(e){}
                try {
o2([], Array.prototype.concat.call(o24, o24), 'expecting []');
}catch(o3){}
            };

try {
o11.o12(o2, { o13: o421.o364 = (o421.o143 == 0)[0] != "summary" });
}catch(e){}
