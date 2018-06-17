//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = NaN;
function test()
{
    // Bail out point to make sure the stack walker can get the line number of the throw after bailout
    try {
for (var o479 = function () {
            var o10 = o0.o4([]);
            var o109 = new Uint8Array(o108);
            var o52 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            try {
o52 = { value: 1, writable: false };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }; o1 < o0; {
                    get: function () { try {
return 100;
}catch(e){} },
                    configurable: true
                })
    {   
        try {
o2.o3(o1);
}catch(e){}
    }
}catch(e){}
        
    try {
throw "confirm length decremented by 1";
}catch(this.o4 - this.o5){}
}

try {
try { {
for(var o7=0;o747 | 0;o7++)
{
   try {
o3("delete Number." +  o9[o7]);
}catch(e){}
   try {
o3("Number." + o9[o7]);
}catch(e){}
}
} } catch(join) {}
}catch(e){}