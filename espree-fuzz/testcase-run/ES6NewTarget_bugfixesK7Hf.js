//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
this("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
  new Number(Number.MIN_VALUE),
  {
    name: "OS5427497: Parser mistakes 'new.target' as in global function under -forceundodefer",
    o3: function () {
        try {
o25: function () {
            // define a data property.
            var o51 = "28";
            var o10 = o0.o4();
            var o52 = { value: 1, configurable: true };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

            // re-define the property to be accessor property.
            var o89 = "";
            var getter = function () { try {
o89 += "getter was called.";
}catch(e){} try {
return this.o56;
}catch(e){} }
            var setter = function (o72) { try {
o89 += "setter was called.";
}catch(e){} try {
this.o56 = o72;
}catch(e){} };
            try {
o52 = { get: getter, set: setter };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}

            // set the value and get it.
            var o90 = 2;
            try {
o10[o51] = o90;
}catch(e){}
            var o91 = o10[o51];

            // validate.
            var o35 = { get: getter, set: setter, configurable: true, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
            try {
o32.o42("setter was called.getter was called.", o89, "wrong log");
}catch(e){}
            try {
o32.o42(o90, o91, "wrong value");
}catch(e){}
        };
}catch(e){}  // bug repro: SyntaxError: Invalid use of the 'new.target' keyword
    }
  },
];

try {
o5.value(o2, write(0 >= new Number(1)));
}catch(e){}
