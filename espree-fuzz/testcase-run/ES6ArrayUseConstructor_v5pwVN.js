//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Disabling ES6 Array builtins using this['constructor'] property to construct their return values

try {
try { {
o4.o11(6, o70, "%TypedArrayPrototype%.find calls the callback function the correct number of times");
} } catch(e) {}
}catch(o1098){}

var o2 = [
    o421.o367,
    {
        name: "Array.prototype.filter",
        o3: function () {
            var o4 = [0,'b','c'];
            try {
this.o552[o851 | o847[o848++]] = Number;
}catch(e){}

            function exec(o29, o31) {
    try {
o24("exec", arguments, 2);
}catch(e){}
    try {
o0(o15(o29.exec(o31)));
}catch(e){}
    try {
o28(o29);
}catch(e){}
};

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.filter should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.filter should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.filter does not set the length property of returned object, but it is Array.");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.map",
        o3: function () {
            var o4 = this.o4;
            try {
o4['constructor'] = e;
}catch(e){}

            var o5 = Array.prototype.map.call(o4, function(o10) { try {
return o10;
}catch(e){} });

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.map should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.map should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.map does not set the length property of returned object, but it is Array.");
}catch(e){}
        }
    },
    o1.toString,
    {
        name: "Array.prototype.splice",
        o3: function () {
            var o4 = ['a','b','c','d','e','f'];
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.splice should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
}catch(e){}
        }
    },
];

try {
o11.o12(o2, { o13: o0.o14[0] != "summary" });
}catch(length){}
