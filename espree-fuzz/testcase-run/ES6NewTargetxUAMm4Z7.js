//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 new.target tests

try {
try { {
o113(o518 & 61440 + this.name + o582 + this.o408 + "][" + this.o362[0x143] + "]", 0);
} } catch(e) {}try { try {
o1[name] = o1.o421.o729();
}catch(e){} } catch(e) {}try { write(Boolean(false) >= new Number(Number.o4)); } catch(e) {}
}catch(e){}

var o331 = 0;

try {
o46.o47(o2, { o48: o0.o0.o4("test12")[o28.o29(o12, { o30: o0.o31[0] != "summary" })] != "summary" });
}catch(e)try { o932['handle'] = function o935(o842, name, o837, o585) {
            var done = false;

            function o843(o936) {
                try {
if (done) try {
return;
}catch(e){}
}catch(e){}
                try {
done = true;
}catch(e){}
                try {
Module["preloadedAudios"][name] = o936;
}catch(e){}
                try {
if (o837) try {
o837(o842);
}catch(e){}
}catch(e){}
            }

            function o857() {
                try {
if (done) try {
return;
}catch(e){}
}catch(e){}
                try {
done = true;
}catch(e){}
                try {
Module["preloadedAudios"][name] = new o937();
}catch(e){} // empty shim
                try {
if (o585) try {
o585();
}catch(e){}
}catch(e){}
            }
            try {
if (o839.o902) {
                try {
try {
                    var o308 = new o901([o842], {
                        type: o839.o913(name)
                    });
                } catch (o189) {
                    try {
return o857();
}catch(e){}
                }
}catch(e){}
                var o38 = o839.o906.o917(o308); // XXX we never revoke this!
                var o936 = new o937();
                try {
o936.o938('canplaythrough', function () {
                    try {
o843(o936)
}catch(e){}
                }, false);
}catch(e){} // use addEventListener due to chromium bug 124926
                try {
o936.o585 = function o939(o598) {
                    try {
if (done) try {
return;
}catch(e){}
}catch(e){}
                    try {
o44.o45('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
}catch(e){}

                    function o940(o769) {
                        var o941 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                        var o942 = '=';
                        var o30 = '';
                        var o943 = 0;
                        var o944 = 0;
                        try {
for (var o82 = 0; o82 < o769.length; o82++) {
                            try {
o943 = (o943 << 8) | o769[o82];
}catch(e){}
                            try {
o944 += 8;
}catch(e){}
                            try {
while (o944 >= 6) {
                                var o99 = (o943 >> (o944 - 6)) & 0x3f;
                                try {
o944 -= 6;
}catch(e){}
                                try {
o30 += o941[o99];
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                        try {
if (o944 == 2) {
                            try {
o30 += o941[(o943 & 3) << 4];
}catch(e){}
                            try {
o30 += o942 + o942;
}catch(e){}
                        } else try {
if (o944 == 4) {
                            try {
o30 += o941[(o943 & 0xf) << 2];
}catch(e){}
                            try {
o30 += o942;
}catch(e){}
                        }
}catch(e){}
}catch(e){}
                        try {
return o30;
}catch(e){}
                    }
                    try {
o936.o569 = 'data:audio/x-' + name.substr(-3) + ';base64,' + o940(o842);
}catch(e){}
                    try {
o843(o936);
}catch(e){} // we don't wait for confirmation this worked - but it's worth trying
                };
}catch(e){}
                try {
o936.o569 = o38;
}catch(e){}
                // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
                try {
o839.o945(function () {
                    try {
o843(o936);
}catch(e){} // try to use it even though it is not necessarily ready to play
                }, 10000);
}catch(e){}
            } else {
                try {
return o857();
}catch(e){}
            }
}catch(e){}
        }; } catch(e) {}try { {} } catch(e) {}
