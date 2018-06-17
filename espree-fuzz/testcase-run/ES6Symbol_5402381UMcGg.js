//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = 0x40000;
    var set = o3();
    function o86(o62,o63){
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        var o87 = 0, o88 = 0;
        var o77 = 0.0, o83 = 0.0;
        try {
o87 = ~~o62;
}catch(e){}
        try {
o88 = ~~o63;
}catch(e){}
        try {
if(o89[o87&7](o62,o63)|0){
            try {
o77 = +o90[o87&3](o62,+o90[o87&3](o62,o62));
}catch(e){}
            try {
o83 = +o90[~~o77&3](+o90[o88&3](o62,5.5),+o90[o88&3](o62,2.1));
}catch(e){}
        }
        else {
            try {
o77 = +o90[o88&3](o62,+o90[o88&3](o62,o63));
}catch(e){}
            try {
o83 = +o90[~~o87&3](+o90[o87&3](o62,5.5),+o90[o87&3](o62,o63));
}catch(e){}
        }
}catch(e){}
        try {
if(o69(o77,o83)|0){
            try {
o77 = o83;
}catch(e){}
        }
        else{
            try {
o13(o83);
}catch(e){}
        }
}catch(e){}
        try {
return +o77;
}catch(e){}
    }; // g flag to trigger the vulnerable path
    var o4 = "ab".repeat(o1); // matches have to be at least size 2 to prevent interning
    var o5 = (o4 + "|").repeat(o2);
    try {
while (true) {
        var o6 = 0;
        var o7 = [];
        try {
o5.replace(o3, function() {
            try {
for (var o8 = 1; o8 < arguments.length-2; ++o8) {
                try {
if (typeof arguments[o8] !== 'string') {
                    try {
o9 = arguments[o8];
}catch(e){}
                    try {
throw "success";
}catch(e){}
                }
}catch(e){}
                try {
o7[o6++] = arguments[o8];
}catch(e){}  // root everything to force GC
            }
}catch(e){}
            try {
return "x";
}catch(e){}
        });
}catch(e){}
    }
}catch(e){}
};
try {
o0.__defineSetter__("something", function() {});
}catch(e){}

var o7 = o8.o9 ? 
        {enumerable: true, configurable: true, writable: true, value: "i"} :
        {enumerable: false, configurable: false, writable: false, value: "i"};
try {
o1.__defineGetter__("something else", function() {});
}catch(e){}

// Above shouldn't cause AV
try {
o2.o189('Pass');
}catch(o111 + 2){}
