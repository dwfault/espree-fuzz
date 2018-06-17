//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0 = o1.o2("es5array_crosssite.js", "samethread");

function o209(o114, type, o199) {
    try {
type = type || 'i8';
}catch(e){}
    try {
if (type.charAt(type.length - 1) === '*') try {
type = 'i32';
}catch(e){}
}catch(e){} // pointers are 32-bit
    try {
switch (type) {
    case 'i1':
        try {
return o200[(o114)];
}catch(e){}
    case 'i8':
        try {
return o200[(o114)];
}catch(e){}
    case 'i16':
        try {
return o201[((o114) >> 1)];
}catch(e){}
    case 'i32':
        try {
return o202[((o114) >> 2)];
}catch(e){}
    case 'i64':
        try {
return o202[((o114) >> 2)];
}catch(e){}
    case 'float':
        try {
return o207[((o114) >> 2)];
}catch(e){}
    case 'double':
        try {
return o208[((o114) >> 3)];
}catch(e){}
    default:
        try {
abort('invalid type for setValue: ' + type);
}catch(e){}
    }
}catch(e){}
    try {
return null;
}catch(e){}
};
try {
Object.defineProperty(o3, "1", { value: "const", writable: false });
}catch(e){}

try {
o0.o4(o3);
}catch(e){}

