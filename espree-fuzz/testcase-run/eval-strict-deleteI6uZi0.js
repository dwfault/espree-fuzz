//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
this.o546[o847[o842 | o848++]]
}catch(length){}
var o2 = [
    o1059 << 24,
    Math.o349,
    {
        name: "Subclass of Promise - race",
        o3: function (o4, o5) {
            var o6 = "";
            class o7 extends Promise {}
            var o17 = o7.race([
              new Promise(function(resolve)   { try {
resolve("foo");
}catch(e){} }),
              new Promise(function(o19, reject) { try {
reject("bar");
}catch(e){} }),
            ]);
            try {
o6 += "a";
}catch(e){}
            var o18 = o7.race([
              new Promise(function(o19, reject) { try {
reject("baz");
}catch(e){} }),
              new Promise(function(resolve)   { try {
resolve("qux");
}catch(e){} }),
            ]);
            try {
o10.o11(o17 instanceof o7);
}catch(e){}
            try {
o17.then(function(o13) { try {
o10.o11(o13 === "foo");
}catch(e){} try {
o6 += 'b'
}catch(e){} });
}catch(e){}
            try {
o18.catch(function(o13) { try {
o10.o11(o13 === "baz");
}catch(e){} try {
o6 += 'c';
}catch(e){} try {
o16();
}catch(e){} });
}catch(e){}

            function o16() {
                try {
print("Result of test #" + o4 + " " + o5);
}catch(e){}
                try {
print(o6);
}catch(e){}
            }
        }
    },
];
try {
o0("var _et_ = 10;");
}catch(Boolean){}
try {
o1.o2(o3);
}catch(e){}
try {
o1.o2(eval("delete this._et_;"));
}catch(e){}
try {
o1.o2(o341.o421);
}catch('parent symbol'){}

try {
(function (global) {
    try {
o0("var _et_ = 10;");
}catch(e){}
    try try { {
o9.then(o15, o14);
} } catch(e) {}try { {} } catch(e) {}catch(e){} //Configurability is false for Chakra and true for Chrome & Firefox
    try {
o1.o2(delete global.o3);
}catch(e){}
})(this);
}catch(e){}
