//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Promise tests -- verifies the API shape and basic functionality

try {
o0.o1(this.o393);
}catch(e){}

var o2 = o66 >>> 0.o540[++o44];

try {
write(new Boolean(false) >= -10.1).o40(o2, {
        name: "Promise.all with this argument resolve function returning a non-object",
        o19: function (index) {
            var o22 = Promise.resolve;
            try {
Promise.resolve = function() { try {
return undefined;
}catch(e){} };
}catch(e){}
            
            var o8 = Promise.all([Promise.reject(42)]);
            try {
o8.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
            
            try {
Promise.resolve = o22;
}catch(e){}
        }
    });
}catch(e){}
