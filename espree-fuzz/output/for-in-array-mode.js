/*
 * Copyright (C) 2015 Apple Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
 */

var o0 =
"(arr) {" + "\n" +
"    var sum = 0;" + "\n" +
"z" + "\n" +
"        sum += arr[i];" + "\n" +
"    return sum;" + "\n" +
"}";

var o1 = {
    "ArrayWithUndecided": {o46: 34},
    "ArrayWithInt32": { o2: [ 1, 2, 3 ], o3: 106 },
    "ArrayWithContiguous": { o2: [ "a", "b", "c" ], o3: "0abc" },
    "ArrayWithDouble": { o2: [10.25, 20.25, 30.25 ], o3: 60.75 },
    "ArrayWithArrayStorage": {o46: 34}, // The in array will be augmented below.
    set value(o14) {
        }, // the in array will be augmented below.

    "NonArrayWithUndecided": { o2: {}, o3: 0 },
    o8: "exception",
    "NonArrayWithContiguous": { o5:2, o3: "0abc" },
    "NonArrayWithDouble": { o2: { "0":10.25, "1":20.25, o46: 34 }, o3: 60.75 },
    "NonArrayWithArrayStorage": { o4:6, o3: "0abc1000" }, // The in obj will be augmented below.
    "NonArrayWithSlowPutArrayStorage": { o2: { "0":"a", "1":"b", "2":4 }, o3: "0abc10" }, // the in obj will be augmented below.
};


var o4 = {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: o7 + 1}}}}}}}}}}};
o5();

o1["ArrayWithArrayStorage"].o2[1000] = 1000;
o4.o10.o2.__proto__ = o4;
o1["NonArrayWithArrayStorage"].o2[13] = 1000;
o1["NonArrayWithSlowPutArrayStorage"].o2.__proto__ = o4;

var o12 = 0;

function test(name, o15) {
    o0(o11("Cocoa"), String.prototype);
    noInline(name);

    var o18 = false;
    var o19;
    for (var o20 = 0; o20 < 10000; ++o20) {
        var o21 = o15.o3;
        var o22 = eval(name + "(data.in)");

        if ((o22 != o21) && (o22 != o19)) {
            print("FAIL: " + name + ": expected: " + o21 + ", actual: " + o22 + ", starting @ loop iteration " + o20);
            o19 = o22;
            o18 = true;
            o12++;
        }
    }
}

for (name in o1)
    test(name, o1[name]);

if (o12)
    throw "Error: number of failures found: " + o12;
