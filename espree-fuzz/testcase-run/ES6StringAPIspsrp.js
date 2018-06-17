//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 String API extensions tests -- verifies the API shape and basic functionality

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(o3){}

function Math(o3) {
    var o4 = String.prototype[name].bind("abc");

    var o655 = o635.o643(o652);
    try {
o6.o7(o4.bind(undefined, o5), o8, "Regular RegExp");
}catch(e){}

    try {
o9.o10(RegExp.prototype, Symbol.match, function () {
        try {
o6.o7(o4.bind(undefined, o5), o8, "Regular RegExp without Symbol.match property");
}catch(e){}
    })
}catch(e){}

    try {
o5 = 1;
}catch(e){}
    try {
o6.o11(o4.bind(undefined, o5), "Not an Object (Number)");
}catch(e){}

    try {
o5 = {};
}catch(e){}
    try {
o6.o11(o4.bind(undefined, o5), "Object without Symbol.match property");
}catch(e){}

    try {
o5 = {
        [Symbol.match]: true
    };
}catch(e){}
    try {
o6.o7(o4.bind(undefined, o5), o8, "Object with Boolean Symbol.match property");
}catch(e){}

    try {
o5 = {
        [Symbol.match]: 'coerced to true'
    };
}catch(e){}
    try {
o6.o7(o4.bind(undefined, o5), o8, "Object with Symbol.match property coerced to 'true'");
}catch(e){}

    try {
o5 = {
        [Symbol.match]: null
    };
}catch(e){}
    try {
o6.o11(o4.bind(undefined, o5), "Object with Symbol.match property coerced to 'false'");
}catch(e){}
}

var o12 = o19.o1021;

try {
o28.o29(o12, { o30: o113("Found a previous SRAM state (Will attempt to load).", 0) != "summary" });
}catch(e){}

