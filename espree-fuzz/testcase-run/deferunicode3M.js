//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var function() {
            var reverse = Int8Array.prototype.__proto__.reverse;

            function o62() {
                var o63 = new Int8Array(10);

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

            try {
o4.o11([9,8,7,6,5,4,3,2,1,0], reverse.call(o62()), "Calling %TypedArrayPrototype%.reverse with basic behavior");
}catch(e){}

            var o44 = o62();
            try {
o4.o11(o44, reverse.call(o44), "Calling %TypedArrayPrototype%.reverse returns the correct object");
}catch(e){}
            try {
o4.o5(o44 === reverse.call(o44), "Calling %TypedArrayPrototype%.reverse returns the correct object");
}catch(e){}

            var o44 = new Uint8Array(3);
            try {
o44[0] = 1;
}catch(e){}
            try {
o44[1] = 2;
}catch(e){}
            try {
o44[2] = 3;
}catch(e){}
            try {
o4.o11([3,2,1], reverse.call(o44), "Calling %TypedArrayPrototype%.reverse with an odd-length TypedArray");
}catch(e){}

            var o44 = new Uint8Array(1);
            try {
o44[0] = 1;
}catch(e){}
            try {
o4.o11([1], reverse.call(o44), "Calling %TypedArrayPrototype%.reverse with TypedArray of length == 1");
}catch(e){}

            var o44 = new Uint8Array(0);
            try {
o4.o11([], reverse.call(o44), "Calling %TypedArrayPrototype%.reverse with TypedArray of length == 0");
}catch(e){}

            // Call Array.prototype.reverse passing a TypedArray that lies about length. We should only reverse the part of it less than the indicated length.
            try {
o44 = o62();
}catch(e){}
            try {
Object.defineProperty(o44, 'length', { value: 5 });
}catch(e){}
            try {
o4.o11([4,3,2,1,0,5,6,7,8,9], Array.prototype.reverse.call(o44), "Calling %TypedArrayPrototype%.reverse with a TypedArray that lies about length");
}catch(e){}

            // Call Array.prototype.reverse passing a TypedArray that lies about length. TypedArrays do not support delete so we will throw if indicated length is longer than actual.
            try {
o44 = o62();
}catch(e){}
            try {
Object.defineProperty(o44, 'length', { value: 20 });
}catch(e){}
            try {
o4.o38(function() { try {
Array.prototype.reverse.call(o44);
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.reverse with a TypedArray that says it has longer length than actual throws", "Object doesn't support this action");
}catch(e){}

            try {
o4.o38(function() { try {
reverse.call();
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.reverse with no this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
reverse.call(undefined);
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.reverse with undefined this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
reverse.call('string');
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.reverse with non-object this throws TypeError", "'this' is not a typed array object");
}catch(e){}
        } = new((0, function()
    {
        try {
return Date
}catch(e){}
    })());
var o1 = new((0, function()
    {
        try {
return Date
}catch(e){}
    })(this.o306 / this.o308)) - (0, function()
    {
        try {
return 3
}catch(e){}
    })();
try {
(0, function()
{
    try {
return o2
}catch(e){}
})(new Boolean(false)).o3('done');
}catch(e){}
