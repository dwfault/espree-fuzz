//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable async tests -- verifies subclass async behaviors

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    {
        name: "Subclass of Promise - basic functionality",
        o3: function (o4, o5) {
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
        o3: function (o4, o5) {
            var o6 = "";
            class o7 extends Promise {}
            var o17 = o7.all([
                new Promise(function(resolve)   { try {
resolve("foo");
}catch(e){} }),
                new Promise(function(resolve)   { try {
resolve("foo");
}catch(e){} }),
            ]);
            try {
o6 += "a";
}catch(e){}
            var o18 = o7.all([
                new Promise(function(o19, reject) { try {
reject("bar");
}catch(e){} }),
                new Promise(function(o19, reject) { try {
reject("bar");
}catch(e){} }),
            ]);
            try {
o10.o11(o17 instanceof o7);
}catch(e){}
            try {
o17.then(function(o13) { try {
o10.o11(o13 + "" === "foo,foo");
}catch(e){} try {
o6 += 'b';
}catch(e){} });
}catch(e){}
            try {
o18.catch(function(o13) { try {
o10.o11(o13 === "bar");
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
for(var o20=0; o20<o2.length; o20++ )
{
    var test=o2[o20];
    try {
print("Executing test #" + (o20+1) + " " + test.name);
}catch(e){}
    try {
test.o3(o20+1, test.name);
}catch(e){}
}
}catch(e){}
