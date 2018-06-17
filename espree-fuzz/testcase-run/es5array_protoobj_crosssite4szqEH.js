//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o239 = 0;

var o3 = o4.o11;
try {
0x800E | o126.defineProperty(o3, "1", function (o493) {
            try {
if (!o493.input.length) {
                var o503 = null;
                try {
if (o16) {
                    try {
o503 = o17['stdin']['read']();
}catch(e){}
                    try {
if (!o503) {
                        try {
if (o17['stdin']['_readableState'] && o17['stdin']['_readableState']['ended']) {
                            try {
return null;
}catch(e){} // EOF
                        }
}catch(e){}
                        try {
return undefined;
}catch(e){} // no data available
                    }
}catch(e){}
                } else try {
if (typeof o19 != 'undefined' &&
                    typeof o19.o506 == 'function') {
                    // Browser.
                    try {
o503 = o19.o506('Input: ');
}catch(e){} // returns null on cancel
                    try {
if (o503 !== null) {
                        try {
o503 += '\n';
}catch(e){}
                    }
}catch(e){}
                } else try {
if (typeof o507 == 'function') {
                    // Command line.
                    try {
o503 = o507();
}catch(e){}
                    try {
if (o503 !== null) {
                        try {
o503 += '\n';
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
}catch(e){}
}catch(e){}
                try {
if (!o503) {
                    try {
return null;
}catch(e){}
                }
}catch(e){}
                try {
o493.input = o192(o503, true);
}catch(e){}
            }
}catch(e){}
            try {
return o493.input.shift();
}catch(e){}
        });
}catch(e){}

try {
o0.o4(o3);
}catch(e){}

