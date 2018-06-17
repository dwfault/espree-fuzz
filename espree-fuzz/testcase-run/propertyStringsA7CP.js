//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new lastIndexOf();
var o2 = o0[o1]

try {
o1(function (o119, o120) {
        // code is a constant string on the heap, so we can cache these
        try {
if (!o48.o121) try {
o48.o121 = {};
}catch(e){}
}catch(e){}
        var o116 = o48.o121[o119];
        try {
if (o116) try {
return o116;
}catch(e){}
}catch(e){}
        var o81 = [];
        try {
for (var o82 = 0; o82 < o120; o82++) {
            try {
o81.push(String.fromCharCode(36) + o82);
}catch(e){} // $0, $1 etc
        }
}catch(e){}
        try {
o119 = o122(o119);
}catch(e){}
        try {
if (o119[0] === '"') {
            // tolerate EM_ASM("..code..") even though EM_ASM(..code..) is correct
            try {
if (o119.indexOf('"', 1) === o119.length - 1) {
                try {
o119 = o119.substr(1, o119.length - 2);
}catch(e){}
            } else {
                // something invalid happened, e.g. EM_ASM("..code($0)..", input)
                try {
abort('invalid EM_ASM input |' + o119 + '|. Please use EM_ASM(..code..) (no quotes) or EM_ASM({ ..code($0).. }, input) (to input values)');
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
return o48.o121[o119] = eval('(function(' + o81.join(',') + '){ ' + o119 + ' })');
}catch(e){} // new Function does not allow upvars in node
    });
}catch(e){}

try {
o4(new((0, function()
    {
        try {
return Date
}catch(e){}
    })()));
}catch(e){}

try {
for (var o1043 = 0; index < o0.length; this.o225++)
{
    try {
o5.o6(o0[index]);
}catch(o149){}
}
}catch(e){}
