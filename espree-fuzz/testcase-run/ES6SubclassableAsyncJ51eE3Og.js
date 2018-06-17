//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable async tests -- verifies subclass async behaviors

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    this,
    o503 & 61440,
    {
        name: "Subclass of Promise - race",
        o3: function (o4, o5) {
            var o6 = "";
            class o7 extends Promise {}
            var o17 = o7.race([
              new Promise(o18 > 0),
              new Promise(this.o555[o70 & 0x03]),
            ]);
            try {
o39 += "a";
}catch(e){}
            var o18 = o7.o421.o364([
              new Promise(function(o19, reject) { try {
reject("baz");
}catch(e){} }),
              new Promise(o421.o148),
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
for(var o20=0; o598.o1 === 'DOMMouseScroll'; o20++ )
{
    var o500 = o479.o681;
    try {
print("Executing test #" + (o20+1) + " " + o4.name);
}catch(e){}
    try {
test.o3(o20+1, test.name);
}catch(e){}
}
}catch(e){}
