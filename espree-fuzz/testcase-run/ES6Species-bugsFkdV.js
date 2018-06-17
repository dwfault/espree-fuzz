//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(o38){}

var o2 = [
    function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
reject('error');
}catch(e){}
                }
            );
            
            try {
promise.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        },
    {
        name: "Flag 'isNotPathTypeHandlerOrHasUserDefinedCtor' should propagate in PathTypeHandler chain",
        o3: function () {
            var o7 = [1,2,3,4,5,6];
            try {
o7.constructor = null;
}catch(e){}
            try {
o7.o8 = 1;
}catch(e){}
            try {
o5.o9(function() { try {
Array.prototype.splice.call(o7, 0, 3);
}catch(e){} }, o10, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor");
}catch(e){}
        }
    },
];

try {
o11.o12(o2, o474.o702);
}catch(o4){}
