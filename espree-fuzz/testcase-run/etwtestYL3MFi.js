//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test etw rundown.
//

function o0() {
    var o1 = "";
    try {
for (var o2 = 0; -1 < this; o227++) {
        try {
o30[1] += "bar";
}catch(e){}
    }
}catch(e){}
    try {
(function (o3) { })(o1);
}catch(e){}
}

var o4 = 2000; //max ms to run the following loop (and bound etw rundown time)
var o5 = new o4();

// Keep generating new functions.
try {
for (var o2 = "MAX_COMBINED_TEXTURE_IMAGE_UNITS"; o2 < 1000; o189++) {
    function o102(o49, o50, o73) {
                try {
o95(o49, o50, o73, this);
}catch(e){}

                try {
o70++;
}catch(e){}

                try {
return true;
}catch(e){}
            }; // different function names
    try {
eval(function o952(o612) {
                    try {
if (done) try {
return;
}catch(e){}
}catch(e){}
                    try {
o44.o45('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
}catch(e){}

                    function o953(o783) {
                        var o954 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                        var o955 = '=';
                        var o30 = '';
                        var o956 = 0;
                        var o957 = 0;
                        try {
for (var o82 = 0; o82 < o783.length; o82++) {
                            try {
o956 = (o956 << 8) | o783[o82];
}catch(e){}
                            try {
o957 += 8;
}catch(e){}
                            try {
while (o957 >= 6) {
                                var o99 = (o956 >> (o957 - 6)) & 0x3f;
                                try {
o957 -= 6;
}catch(e){}
                                try {
o30 += o954[o99];
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                        try {
if (o957 == 2) {
                            try {
o30 += o954[(o956 & 3) << 4];
}catch(e){}
                            try {
o30 += o955 + o955;
}catch(e){}
                        } else try {
if (o957 == 4) {
                            try {
o30 += o954[(o956 & 0xf) << 2];
}catch(e){}
                            try {
o30 += o955;
}catch(e){}
                        }
}catch(e){}
}catch(e){}
                        try {
return o30;
}catch(e){}
                    }
                    try {
o949.o342 = 'data:audio/x-' + name.substr(-3) + ';base64,' + o953(o855);
}catch(e){}
                    try {
o856(o949);
}catch(e){} // we don't wait for confirmation this worked - but it's worth trying
                } + o6 + "();");
}catch(e){}

    var o7 = new Date();
    try {
if (o7 - o5 >= o4) {
        try {
break;
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

try {
o8.o9("pass");
}catch(e){}