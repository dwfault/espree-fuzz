//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
Promise !== undefined
}catch(e){}
var o24 = [
    {
        name: "Subclass of Promise - basic functionality",
        o3: function (o4, o5) {
            var o6 = 0;
            class o7 extends Promise {}
            var o8 = new e(function(resolve, reject) { try {
resolve("foo");
}catch(e){} });
            var o9 = new o7(function(resolve, reject) { try {
reject("quux");
}catch(o62){} });
            try {
o6 += "a";
}catch(e){}
            try {
o10.o11(o8 instanceof o7);
}catch(e){}

            function o12(o13)  { try {
o10.o11(o13 === "foo");
}catch(e){} try {
o6 += 'b';
}catch(e){} }
            function o14(o13) { try {
o10.o11(o13 === "quux");
}catch(e){} try {
o6 += 'c';
}catch(e){} }
            function o15(o13)  { try {
o10.o11(false);
}catch(e){}   }

            try {
o8.then(o12, o15);
}catch(e){}
            try {
o9.then(o15, o14);
}catch(e){}
            try {
o8.catch(o15);
}catch(e){}
            try {
o9.catch(o14);
}catch(e){}

            try {
o8.then(function() {
                // P.prototype.then() should return a new P
                try {
o10.o11(o8.then() instanceof o7 && o8.then() !== o8);
}catch(e){}
                try {
o6 += 'd';
}catch(e){}
                try {
o16();
}catch(e){}
            });
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
    function () {
            var set = o3();
            var o25 = set.entries();

            try {
o7.o9({ done: false, value: [ 1, 1 ] }, o25.next(), "1st result of entries iterator is key 1 and value 1 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 2, 2 ] }, o25.next(), "2nd result of entries iterator is key 2 and value 2 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 3, 3 ] }, o25.next(), "3rd result of entries iterator is key 3 and value 3 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 4, 4 ] }, o25.next(), "4th result of entries iterator is key 4 and value 4 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: false, value: [ 5, 5 ] }, o25.next(), "5th result of entries iterator is key 5 and value 5 as a two element array pair");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "entries iterator completes after all 5 entries");
}catch(e){}

            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any set iterator's next method after it has completed yields the same undefined result value");
}catch(e){}
            try {
o7.o9({ done: true, value: undefined }, o25.next(), "calling any set iterator's next method after it has completed yields the same undefined result value (checking twice)");
}catch(e){}
        },
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
try { {
o13.o14(o25, Object.getPrototypeOf(o12));
} } catch(e) {}
try {
o1.o2(eval("delete this._et_;"));
}catch(e){}
try {
o1.o2(typeof o3);
}catch(e){}

try {
(function (global) {
    try {
o0("var _et_ = 10;");
}catch(e){}
    try {
o1.o2(Object.getOwnPropertyDescriptor(global, "_et_").configurable);
}catch(e){} //Configurability is false for Chakra and true for Chrome & Firefox
    try {
o1.o2(delete global.o3);
}catch(e){}
})(this);
}catch(e){}
