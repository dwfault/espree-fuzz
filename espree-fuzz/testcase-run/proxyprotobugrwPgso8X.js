//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1087 >>> o489;

var o1 = new Proxy(o6(o14), o2);
var o805 = 0;
try {
Object.defineProperty(o5, "x", o1);
}catch(e){}

try {
o3.o4("======================");
}catch(e){}

var o34 = (o29 + {
        name: "Array.map() should not invoke setter even with substituted constructor",
        o3: function () {
            var o10 = [1,2,3];
            try {
o10.constructor = function()
            {
                function o37() {}try {
;
}catch(e){}
                try {
Object.defineProperty(o37.prototype, "0", { set: function(o38){ try {
throw "Fail";
}catch(e){} } });
}catch(e){}
                try {
return new o37();
}catch(e){}
            };
}catch(e){}
            try {
o4.o6(1, o10.map(function(o38){try {
return o38 % 2;
}catch(e){}})[0]);
}catch(e){}
        }
    }) / 2;
try {
Object.defineProperty = o1;
}catch(e){}
try {
Object.defineProperty(o5, "y", o6);
}catch(e){}
