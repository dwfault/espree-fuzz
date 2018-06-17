//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------




function o0() {
    try {
try { try {
o421.o143 |= (o421.o148 & 0xFF);
}catch(e){} } catch(e) {}
}catch(e){}
    try {
o1("SVG_LENGTHTYPE_EMS");
}catch(o7){}
}try {
;
}catch(e){}

try {
o0(function() {
            var o40 = new ArrayBuffer(10);
            var o110 = new DataView(o40);

            try {
o4.o5(o40 === o110.buffer, "buffer returns the same ArrayBuffer object passed to DataView constructor");
}catch(e){}

            // Assignment has no effect since view.buffer does not have a setter
            try {
o110.buffer = undefined;
}catch(e){}
            try {
o4.o5(o40 === o110.buffer, "Assigning to buffer has no effect");
}catch(e){}

            try {
o8 = Object.getOwnPropertyDescriptor(DataView.prototype, 'buffer');
}catch(e){}

            try {
o4.o38(function () { try {
o8.get();
}catch(e){} }, o39, "DataView.prototype.buffer called with no 'this' argument", "'this' is not a DataView object");
}catch(e){}
            try {
o4.o5(o40 === o8.get.call(o110), "Calling getter directly returns expected buffer");
}catch(e){}

            try {
o4.o38(function () { try {
o8.get.apply(DataView.prototype)
}catch(e){} }, o39, "Applying getter with DataView.prototype fails", "'this' is not a DataView object");
}catch(e){}
            try {
o4.o38(function () { try {
DataView.prototype.buffer;
}catch(e){} }, o39, "Calling DataView.prototype.buffer fails", "'this' is not a DataView object");
}catch(e){}

            try {
Object.defineProperty(DataView.prototype, "buffer", {value: 'something'});
}catch(e){}

            try {
o4.o11('string', typeof DataView.prototype.buffer, "Override DataView.prototype.buffer via Object.defineProperty works");
}catch(e){}
            try {
o4.o11('something', DataView.prototype.buffer, "Override DataView.prototype.buffer via Object.defineProperty works");
}catch(e){}
            try {
o4.o11('something', o110.buffer, "Override DataView.prototype.buffer via Object.defineProperty affects instance objects");
}catch(e){}
        });
}catch(e){}
