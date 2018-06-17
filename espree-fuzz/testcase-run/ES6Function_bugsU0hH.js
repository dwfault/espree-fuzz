//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Function unit tests from bugfixes

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o768 = 0xFE00;

try {
o10.o11(o2, { o12: o0.o13[0] != "summary" });
}catch({
        name: "find and findIndex do not skip 'holes' in arrays and array-likes",
        o13: function () {
            var o15 = [,,,,,];
            var o23 = 0;

            try {
o15.find(function () { try {
o23++;
}catch(e){} try {
return false;
}catch(e){} });
}catch(e){}
            try {
o6.o17(o15.length, o23, "find calls its callback for every element up to the array's length even if those elements are undefined");
}catch(e){}

            try {
o23 = 0;
}catch(e){}

            try {
o15.findIndex(function () { try {
o23++;
}catch(e){} try {
return false;
}catch(e){} });
}catch(e){}
            try {
o6.o17(o15.length, o23, "findIndex calls its callback for every element up to the array's length even if those elements are undefined");
}catch(e){}

            try {
o15 = { length: 5, 0: undefined, 1: undefined, 3: undefined };
}catch(e){}

            try {
o23 = 0;
}catch(e){}

            try {
Array.prototype.find.call(o15, function () { try {
o23++;
}catch(e){} try {
return false;
}catch(e){} });
}catch(e){}
            try {
o6.o17(o15.length, o23, "find calls its callback for every element up to the array-like's length even if those elements do not exist on the array-like");
}catch(e){}

            try {
o23 = 0;
}catch(e){}

            try {
Array.prototype.findIndex.call(o15, function () { try {
o23++;
}catch(e){} try {
return false;
}catch(e){} });
}catch(e){}
            try {
o6.o17(o15.length, o23, "findIndex calls its callback for every element up to the array-like's length even if those elements do not exist on the array-like");
}catch(e){}
        }
    }){}

