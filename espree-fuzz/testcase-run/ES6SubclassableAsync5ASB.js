//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable async tests -- verifies subclass async behaviors

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    (this.o646 + 1) & 0x7,
    o421.o391,
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
for(var o20=0; o20<() {
                    var o29 = () => {
                        try {
o5.o24(new.target === o23, "new.target === SimpleBaseClass");
}catch(e){}

                        try {
o22 = true;
}catch(e){}
                    }

                    try {
o29();
}catch(e){}
                }.length; o20++ )
try { {} } catch(e) {}
}catch(e){}
