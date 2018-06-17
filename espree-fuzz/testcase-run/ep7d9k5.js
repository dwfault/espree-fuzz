//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o524 = 10;
function o5() {

    const o0 = 5;
    {
        const o0 = "abacaba";
        try {
o2.o3(o0);
}catch(o186){}
        {
            const o6 = o3.toString();
            try {
function (o119) {
            try {
o119 = o119 & 0xFF;
}catch(e){}

            try {
if (buffer.length == 0) {
                try {
if ((o119 & 0x80) == 0x00) { // 0xxxxxxx
                    try {
return String.fromCharCode(o119);
}catch(e){}
                }
}catch(e){}
                try {
buffer.push(o119);
}catch(e){}
                try {
if ((o119 & 0xE0) == 0xC0) { // 110xxxxx
                    try {
o130 = 1;
}catch(e){}
                } else try {
if ((o119 & 0xF0) == 0xE0) { // 1110xxxx
                    try {
o130 = 2;
}catch(e){}
                } else { // 11110xxx
                    try {
o130 = 3;
}catch(e){}
                }
}catch(e){}
}catch(e){}
                try {
return '';
}catch(e){}
            }
}catch(e){}

            try {
if (o130) {
                try {
buffer.push(o119);
}catch(e){}
                try {
o130--;
}catch(e){}
                try {
if (o130 > 0) try {
return '';
}catch(e){}
}catch(e){}
            }
}catch(e){}

            var o132 = buffer[0];
            var o133 = buffer[1];
            var o134 = buffer[2];
            var o135 = buffer[3];
            var o30;
            try {
if (buffer.length == 2) {
                try {
o30 = String.fromCharCode(((o132 & 0x1F) << 6) | (o133 & 0x3F));
}catch(e){}
            } else try {
if (buffer.length == 3) {
                try {
o30 = String.fromCharCode(((o132 & 0x0F) << 12) | ((o133 & 0x3F) << 6) | (o134 & 0x3F));
}catch(e){}
            } else {
                // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                var o136 = ((o132 & 0x07) << 18) | ((o133 & 0x3F) << 12) |
                    ((o134 & 0x3F) << 6) | (o135 & 0x3F);
                try {
o30 = String.fromCharCode(
                    Math.floor((o136 - 0x10000) / 0x400) + 0xD800, (o136 - 0x10000) % 0x400 + 0xDC00);
}catch(e){}
            }
}catch(e){}
}catch(e){}
            try {
buffer.length = 0;
}catch(e){}
            try {
return o30;
}catch(e){}
        };
}catch(e){}
        }
        try {
o2.o3(o0);
}catch(o863){}
        {
           const o0 = o83;
            try {
o2.o3(o0);
}catch(e){}
        }
        try {
o2.o3(o0);
}catch(e){}
    }
    try {
o2.o3(o0);
}catch(e){}
}try {
;
}catch(e){}
try {
o1();
}catch(e){}
try {
o2.o3(o0);
}catch(e){}
