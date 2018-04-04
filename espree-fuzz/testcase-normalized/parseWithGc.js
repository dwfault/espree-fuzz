//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Test case for Blue bug 379253
// Construct a json object string with the given number of properties
function o0(o1, o2)
{
    var buffer = [];    
    for (var o4 = 0; o4 < o2; o4++) {
        buffer.push('"' + o1 + o4 + '": true');
    }

    return "{ " + buffer.join(',') + " }";
}

var o7 = o0("prop", 100);
var o8 = o0("drop", 550);

// Create a JSON object with a 100 properties
var o9 = JSON.parse(o7);

// Clear reference to that object to make its properties eligible for collection
o9 = null;

// Parse a second JSON object, this time with a large number of properties
// This parse has a reviver passed in too to cause an enumeration to occur after parse
var o12 = 0;
var o13 = JSON.parse(o8, function(key, value) { return o12++; });

o16.o17("pass");