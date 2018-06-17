//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
// -maxsimplejitruncount:2 -maxinterpretcount:1 -forcejitloopbody -off:bailonnoprofile
function test() {
    var o0 = 0;
    function o1() {
    }
    var o12.indexOf(4) = false;
    var o3 = function () {
        try {
for (var o4 in o5) {
            try { {} } catch(e) {}try { {
return 'abc';
} } catch(e) {}
        }
}catch(e){}
    };
    var o6 = Array();
    var o5 = new Uint8Array(1);
    var o8 = {};
    try {
o8['get'] = function () {
        try {
this;
}catch(e){}
    };
}catch(e){}
    try {
o2.o3 = new Proxy(o2, o8);
}catch(e){}
    try {
({ o9: !o3.{
        name: "%TypedArray%.prototype.forEach behavior",
        o3: function() {
            var o80 = Int8Array.prototype.__proto__.forEach;
            var o70 = 0;
            var o63;
            var o52 = 'a string';
            var o81 = true;

            function o82(o49, o50, o73) {
                try {
o4.o11(o70, o49, "Callback function is called on elements in the correct order");
}catch(e){}
                try {
o4.o11(o50, o49, "Callback function is called on elements in the correct order");
}catch(e){}
                try {
o4.o5(o63 === o73, "Callback function is called with the correct TypedArray object");
}catch(e){}

                try {
if (o81) {
                    try {
o4.o11(Object(o52), this, "Callback function has this set correctly");
}catch(e){}
                }
}catch(e){}

                try {
o70++;
}catch(e){}
            }

            function o62() {
                // Reset the counter var here
                try {
o70 = 0;
}catch(e){}
                // Save the latest array in t for use by the callback function
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

            try {
o4.o11(undefined, o80.call(o62(), o82, o52), "Calling %TypedArrayPrototype%.forEach with a simple callback function and this arg");
}catch(e){}
            try {
o4.o11(10, o70, "We called the callback function the correct number of times");
}catch(e){}

            try {
o81 = false;
}catch(e){}
            try {
o4.o11(undefined, o80.call(o62(), o82), "Calling %TypedArrayPrototype%.forEach with a simple callback function");
}catch(e){}
            try {
o4.o11(10, o70, "We called the callback function the correct number of times");
}catch(e){}

            try {
o4.o38(function() { try {
o80.call();
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.forEach with no this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
o80.call(undefined);
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.forEach with undefined this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
o80.call('string');
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.forEach with non-object this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
o80.call(new Uint8Array(10));
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.forEach with no callback function throws TypeError", "[TypedArray].prototype.forEach: argument is not a Function object");
}catch(e){}
            try {
o4.o38(function() { try {
o80.call(new Uint8Array(10), undefined);
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.forEach with undefined callback function throws TypeError", "[TypedArray].prototype.forEach: argument is not a Function object");
}catch(e){}
            try {
o4.o38(function() { try {
o80.call(new Uint8Array(10), 'string');
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.forEach with non-function callback function throws TypeError", "[TypedArray].prototype.forEach: argument is not a Function object");
}catch(e){}
        }
    }(o2, o1, 0) });
}catch(e){}
    try {
if (o0 != 2)
        try {
print("FAIL");
}catch(e){}
    else
        try {
print("PASS");
}catch(e){}
}catch(e){}
}
try {
test("value" in o10);
}catch(e){}