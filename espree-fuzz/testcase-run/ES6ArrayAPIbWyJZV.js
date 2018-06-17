//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Array extension tests -- verifies the API shape and basic functionality

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(o624){}

var o1091 = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];

try {
function () {
            function o18(o19, o21, __proto__) {
                var o12 = arguments;

                try {
o13.o14(Object.prototype, Object.getPrototypeOf(o12));
}catch(e){}
                try {
o13.o14(Object.prototype, o12.__proto__);
}catch(e){}
                try {
o13.o15(!o12.hasOwnProperty("__proto__"));
}catch(e){}
                try {
o13.o14(1, o12[0]);
}catch(e){}
                try {
o13.o14(3, o12[2].o19);
}catch(e){}
                try {
o13.o14(4, __proto__.o21);
}catch(e){}
            }
            try {
o18(1, 2, { o19: 3, o21: 4, o24: 5 });
}catch(e){}
        }(o2, o510.o513);
}catch(o41 = Object.getOwnPropertyNames(o32)){}
