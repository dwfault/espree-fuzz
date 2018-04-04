//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new String('testing contains');
var o2 = new Proxy(o0, {});
// Object.defineProperty(p, "toString", {value : function(arg) { print('proxys toString'); return "b"; }});
Object.defineProperty(o2, "valueOf", {value : function(o7) { print('proxys valueOf'); return "c"; }});
print(o2 + "a");

var o9 = new Number(100);
var o11 = new Proxy(o9, {});
Object.defineProperty(o11, "valueOf", {value : function(o7) { print('proxys valueOf'); return 10; }});
print(o11 + 5);

try{
    var o12 = new Proxy(new Number(5), {});
    o12 + 5;
} catch (o13) {
        if (!(o13 instanceof o14) || o13.o15 !== "Number.prototype.valueOf: 'this' is not a Number object") {
            o16(o13);
        }
 }
 print('PASS');
