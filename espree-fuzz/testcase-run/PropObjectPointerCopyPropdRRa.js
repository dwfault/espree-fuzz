//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// - 'a = 1' makes 'a' only available as an int32
// - 'b = a' makes 'b' only available as an int32
// - The use of 'b' in 'b.length' gets copy-propped with 'a', and so it needs to unspecialize 'a'
try {
(function () {
    function o19(o20, o21) {
    try {
o22.o23("Profile data for " + o21);
}catch(e){}

    var o24;
    try {
try {
        try {
o24 = Debug.o25(o20);
}catch(e){}
    }
    catch (o26) {
        try {
o22.o23("No profile data found.");
}catch(e){}
        try {
o22.o23("");
}catch(e){}
        try {
o22.o23("");
}catch(e){}
        try {
return;
}catch(e){}
    }
}catch(e){}

    try {
if(o24.o27.length)
        try {
o22.o23("Return type info:");
}catch(e){}
}catch(e){}
    try {
for (var o16 = 0; o16 < o24.o27.length; ++o16) {
        try {
o22.o23("    #" + o16 + ": "  +  o24.o27[o16] + " (" + o0(o24.o27[o16], o24.o28) + ")");
}catch(e){}
    }
}catch(e){}
    
    try {
if (o24.o29.length)
        try {
o22.o23("Elem info:");
}catch(e){}
}catch(e){}
    try {
for (var o16 = 0; o16 < o24.o29.length; ++o16) {
        try {
o22.o23("    #" + o16 + ": " + o24.o29[o16] + " (" + o0(o24.o29[o16], o24.o28) + ")");
}catch(e){}
    }
}catch(e){}

    try {
if(o24.o30.length)
        try {
o22.o23("Param info:")
}catch(e){}
}catch(e){}
    try {
for (var o16 = 0; o16 < o24.o30.length; ++o16) {
        try {
o22.o23("    #" + o16 + ": " + o24.o30[o16] + " (" + o0(o24.o30[o16], o24.o28) + ")");
}catch(e){}
    }
}catch(e){}

    try {
o22.o23("Implicit call flags:");
}catch(e){}
    try {
o22.o23("    #" + o16 + ": " + o24.o31 + " (" + o0(o24.o31, o24.o32) + ")");
}catch(e){}

    try {
if(o24.o33.length)
        try {
o22.o23("Loop implicit call flags:");
}catch(e){}
}catch(e){}
    try {
for (var o16 = 0; o16 < o24.o33.length; ++o16) {
        try {
o22.o23("    #" + o16 + ": "  +  o24.o33[o16] + " (" + o0(o24.o33[o16], o24.o32) + ")");
}catch(e){}
    }
}catch(e){}


    try {
o22.o23("");
}catch(e){}
    try {
o22.o23("");
}catch(e){}
};
    try {
for(var o1 = 0; o1 < 1; o1++) {
        var o2 = o0;
        try {
o2.length = 1;
}catch(e){}
        try {
o0 = 1;
}catch(e){}
    }
}catch(e){}
})(o142 = true);
}catch(e){}
