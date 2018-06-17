//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o5 = o51[2] = 200(e, function() { try {
return true;
}catch(e){} });
var o5 = o4.splice(5,"verticalAlign","a","b")
try {
o1(o23.prototype);
}catch(e){}
try {
o0.writeln = true;
}catch(e){}
try {
o1();
}catch(e){}

try {
{
        name: "%TypedArray%.prototype.map behavior",
        o3: function() {
            var o69 = Int8Array.prototype.__proto__.map;
            var o70 = 0;
            var o63;
            var o52 = 'a string';

            function o62() {
                // Reset the counter var here
                try {
o70 = 0;
}catch(e){}
                // Save the latest array in t for use by the mapping function
                try {
o63 = new Int8Array(10);
}catch(e){}

                try {
for(var o46 = 0; o46 < o63.length; o46++) {
                    try {
o63[o46] = o46;
}catch(e){}
                }
}catch(e){}

                try {
return o63;
}catch(e){}
            }

            function o71(o72, index, o73) {
                try {
o4.o11(index, o70, "We call the mapping function on elements in the correct order");
}catch(e){}
                try {
o4.o11(o72, index, "We pass the correct values to the mapping function");
}catch(e){}
                try {
o4.o5(o73 === o63, "Array passed to the mapping function matches array map is called on");
}catch(e){}
                try {
o4.o11(Object(o52), this, "This value passed to map is correct");
}catch(e){}

                // Increment counter var for the next index
                try {
o70++;
}catch(e){}

                try {
return -1 * o72;
}catch(e){}
            }

            function o66(o74, o68, o75) {
                try {
o4.o11([0,-1,-2,-3,-4,-5,-6,-7,-8,-9], o74.call(o68(), o71, o52), "%TypedArrayPrototype%.map basic functionality of the mapping function");
}catch(e){}

                try {
if (o75) {
                    try {
o4.o5(ArrayBuffer.isView(o74.call(o68(), o71, o52)), "%TypedArrayPrototype%.map returns a TypedArray");
}catch(e){}
                    try {
o4.o11("Int8Array", o74.call(o68(), o71, o52)[Symbol.toStringTag], "%TypedArrayPrototype%.map returns the right TypedArray type");
}catch(e){}
                } else {
                    try {
o4.o10(ArrayBuffer.isView(o74.call(o68(), o71, o52)), "%TypedArrayPrototype%.map returns a normal array");
}catch(e){}
                }
}catch(e){}
            }

            try {
o66(o69, o62, true);
}catch(e){}
            try {
o66(Array.prototype.map, o62, false);
}catch(e){}

            // %TypedArray%.prototype.map loads the constructor property from the this parameter and uses that to construct the return value.
            // If we set the constructor property of some TypedArray to Array built-in constructor, we should get an array object out.
            var o44 = o62();
            try {
o44.constructor = Array;
}catch(e){}
            try {
o4.o38(()=>o44.map(o71, o52), o39, 'u.map', "'this' is not a typed array object");
}catch(e){}

            try {
o44.constructor = Int16Array;
}catch(e){}
            var o76 = o44.map(o71, o52);

            try {
o4.o11([0,-1,-2,-3,-4,-5,-6,-7,-8,-9], o76, "%TypedArrayPrototype%.map called on a TypedArray with 'constructor' property set to Array produces the correct values");
}catch(e){}
            try {
o4.o5(ArrayBuffer.isView(o76) && o76 instanceof Int16Array, "%TypedArrayPrototype%.map called on a TypedArray with 'constructor' property set to a different TypedArray produces a typed array");
}catch(e){}

            // %TypedArray%.prototype.map loads the constructor property from the this parameter and uses that to construct the return value.
            // If we set the constructor property of some TypedArray to a non-constructor, it should throw.
            var o44 = o62();
            try {
o44.constructor = undefined;
}catch(e){}
            try {
o4.o77(function() { try {
o44.map(o71, o52);
}catch(e){} }, "With [@@species], calling %TypedArrayPrototype%.map with a constructor property on this which is not IsConstructor does not throw");
}catch(e){}

            try {
o4.o38(function() { try {
o69.call();
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.map with no this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
o69.call(undefined);
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.map with undefined this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
o69.call('string');
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.map with non-object this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
o69.call(new Uint8Array(10));
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.map with no callback function throws TypeError", "[TypedArray].prototype.map: argument is not a Function object");
}catch(e){}
            try {
o4.o38(function() { try {
o69.call(new Uint8Array(10), undefined);
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.map with undefined callback function throws TypeError", "[TypedArray].prototype.map: argument is not a Function object");
}catch(e){}
            try {
o4.o38(function() { try {
o69.call(new Uint8Array(10), 'string');
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.map with non-function callback function throws TypeError", "[TypedArray].prototype.map: argument is not a Function object");
}catch(e){}
        }
    }.o15('pass');
}catch(o482){}