//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(o3){}

var o2 = [
    {
        name: "Subclass of Promise - basic functionality",
        o67: function (o4, o5) {
            var o6 = "";
            class o7 extends Promise {}
            var o8 = new o7(function(resolve, reject) { try {
resolve("foo");
}catch(e){} });
            var o9 = new o7(function(resolve, reject) { try {
reject("quux");
}catch(e){} });
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
    {
        name: "Subclass of Promise - all",
        o3: o5.o24
    },
    {
        length : -1,
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
o11.o12(o2, { o13: o0.o14[0] != "summary" });
}catch(e){}
