//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = 0x40000;
    var set = o3((o421.o143 + 1) & 0xFF);
    var o72 = parseInt(type.substr(1)); // g flag to trigger the vulnerable path
    var o4 = this(o1); // matches have to be at least size 2 to prevent interning
    var o5 = (o4 + "|").repeat(o2);
    try {
while (true) {
        var o6 = 0;
        var o7 = o8();
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

var o2 = {
  o3: {
    name: "RegExp.options property",
    o4: function () {
      var o5 = /x/i;
      var o6 = Object.getOwnPropertyDescriptor(o5, "options");
      var o7 = o8.o9 ? 
        {enumerable: true, configurable: true, writable: true, value: "i"} :
        {enumerable: false, configurable: false, writable: false, value: "i"};
      try {
o10.o11(o7, o6);
}catch(e){}
    }
  },
};
try {
o1.__defineGetter__("something else", function() {});
}catch(e){}

// Above shouldn't cause AV
try {
o2.o3('Pass');
}catch(e){}
