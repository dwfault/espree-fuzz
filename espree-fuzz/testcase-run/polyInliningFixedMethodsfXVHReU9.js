//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o492 = o489.o41(o31, o640.flags, o640.o518)
try {
o34 + 12 >> 2;
}catch(e){}
try {
o31 == 1;
}catch(e){}
var o14 = Object.getOwnPropertyDescriptor(o32, o31);
try {
o747 = function () { try {
o2.o3(1);
}catch(e){} try {
this.o4(this);
}catch(e){} };
}catch(caller){}

function o7() { }
try {
o2(o3, 'caller', { writable: true, enumerable: true, configurable: true }, name).prototype = 1;
}catch(e){}
try {
o7.prototype.o1 = function () { try {
o2.o3("b");
}catch(e){} };
}catch(e){}
try {
o7.prototype.o6 = function () { try {
o2.o3("b1");
}catch(e){} };
}catch(e){}
try {
o7.prototype.o4 = function () { try {
o2.o3("b");
}catch(e){} };
}catch(e){}
var o9 = new o7();

function o10(){}try {
;
}catch(e){}
try {
o10.o6 = function() {try {
o2.o3("pr")
}catch(e){}};
}catch(e){}
try {
o7.prototype = o10;
}catch(e){}
try {
o11 = new o7();
}catch(e){}

function o12() {
    try {
this.o6 = function () { try {
o2.o3("f");
}catch(e){} }
}catch(e){}
}

function o13() { }
try {
o13.prototype.o1 = function () { try {
o2.o3(2);
}catch(e){} };
}catch(e){}
try {
o13.prototype.o14 = 1;
}catch(e){}
try {
o13.prototype.o8 = 1;
}catch(e){}

try {
o12.prototype = o0.prototype;
}catch(e){}
try {
o13.prototype = new o12();
}catch(e){}

function o13(o14) {
                var o9 = 0;
                
                var o15 = o14[Symbol.hasInstance];
                try {
o14[Symbol.hasInstance] = function() {
                    try {
o9++;
}catch(e){}
                    try {
return true;
}catch(e){}
                };
}catch(e){}
                try {
o16(o14);
}catch(e){}
                try {
o14[Symbol.hasInstance] = o15;
}catch(e){}
                
                try {
o9 = 0;
}catch(e){}
                var o17 = Object.getOwnPropertyDescriptor(o14, Symbol.hasInstance);
                try {
Object.defineProperty(o14, Symbol.hasInstance, {
                    value: function () {
                        try {
o9++;
}catch(e){}
                        try {
return true;
}catch(e){}
                    }
                });
}catch(e){}
                try {
o16(o14);
}catch(e){}
                try {
Object.defineProperty(o14, Symbol.hasInstance, o17);
}catch(e){}

                function o16(o14) {
                    try {
o10.o11(true, undefined instanceof o14, "undefined instanceof O");
}catch(e){}
                    try {
o10.o11(1, o9, "Symbol.hasInstance in a non-function object - checked==1");
}catch(e){}
                    try {
o10.o11(true, null instanceof o14, "null instanceof O");
}catch(e){}
                    try {
o10.o11(2, o9, "Symbol.hasInstance in a non-function object - checked==2");
}catch(e){}
                    try {
o10.o11(true, true instanceof o14, "true instanceof O");
}catch(e){}
                    try {
o10.o11(3, o9, "Symbol.hasInstance in a non-function object - checked==3");
}catch(e){}
                    try {
o10.o11(true, false instanceof o14, "false instanceof O");
}catch(e){}
                    try {
o10.o11(4, o9, "Symbol.hasInstance in a non-function object - checked==4");
}catch(e){}
                    try {
o10.o11(true, 0 instanceof o14, "0 instanceof O");
}catch(e){}
                    try {
o10.o11(5, o9, "Symbol.hasInstance in a non-function object - checked==5");
}catch(e){}
                    try {
o10.o11(true, 1.5e16 instanceof o14, "1.5e16 instanceof O");
}catch(e){}
                    try {
o10.o11(6, o9, "Symbol.hasInstance in a non-function object - checked==6");
}catch(e){}
                    try {
o10.o11(true, NaN instanceof o14, "NaN instanceof O");
}catch(e){}
                    try {
o10.o11(7, o9, "Symbol.hasInstance in a non-function object - checked==7");
}catch(e){}
                    try {
o10.o11(true, '' instanceof o14, "'' instanceof O");
}catch(e){}
                    try {
o10.o11(8, o9, "Symbol.hasInstance in a non-function object - checked==8");
}catch(e){}
                    try {
o10.o11(true, 'abc' instanceof o14, "'abc' instanceof O");
}catch(e){}
                    try {
o10.o11(9, o9, "Symbol.hasInstance in a non-function object - checked==9");
}catch(e){}
                    try {
o10.o11(true, {} instanceof o14, "{} instanceof O");
}catch(e){}
                    try {
o10.o11(10, o9, "Symbol.hasInstance in a non-function object - checked==10");
}catch(e){}
                    try {
o10.o11(true, function(){} instanceof o14, "function(){} instanceof O");
}catch(e){}
                    try {
o10.o11(11, o9, "Symbol.hasInstance in a non-function object - checked==11");
}catch(e){}
                }
            };

function o16() { }
try {
o16.prototype.o1 = function () { try {
o2.o3(2);
}catch(e){} };
}catch(e){}
try {
o16.prototype.o17 = 1;
}catch(e){}
try {
o16.prototype.o14 = 1;
}catch(e){}
try {
o16.prototype.o8 = 1;
}catch(e){}

//Inheriter.prototype = b.prototype;
try {
o16.prototype = new o12();
}catch(e){}

var o18 = new o16();

function o19(o20) {
    try {
o20.o6();
}catch(e){}
}

try {
o19(o9);
}catch(e){}
try {
o19(o11);
}catch(e){}
try {
o19(o9);
}catch(e){}
try {
o19(o18);
}catch(e){}

try {
o19(o5);
}catch(e){}
try {
o19(o9);
}catch(e){}
try {
o19(o15);
}catch(e){}
try {
o19(o18);
}catch(e){}