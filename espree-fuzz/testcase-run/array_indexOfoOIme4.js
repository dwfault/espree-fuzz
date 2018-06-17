//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o839 = {
    o13: function() {
            try {
o4.o7(Symbol('s') !== Symbol('s'), "We are able to create multiple symbols with the same single-character description and they are not equal");
}catch(e){}
        },
    o896: false,
    o897: false,
    o898: [],
    o899: [],
    o468: function () {
        try {
if (!Module["preloadPlugins"]) try {
Module["preloadPlugins"] = [];
}catch(e){}
}catch(e){} // needs to exist even in workers

        try {
if (o839.o900 || o20) try {
return;
}catch(e){}
}catch(e){}
        try {
o839.o900 = true;
}catch(e){}

        try {
try {
            try {
new o901();
}catch(e){}
            try {
o839.o902 = true;
}catch(e){}
        } catch (o189) {
            try {
o839.o902 = false;
}catch(e){}
            try {
o44.o45("warning: no blob constructor, cannot create blobs with mimetypes");
}catch(e){}
        }
}catch(e){}
        try {
o839.o903 = typeof o904 != "undefined" ? o904 : (typeof o905 != "undefined" ? o905 : (!o839.o902 ? o44.o45("warning: no BlobBuilder") : null));
}catch(e){}
        try {
o839.o906 = typeof o19 != "undefined" ? (o19.o907 ? o19.o907 : o19.o908) : undefined;
}catch(e){}
        try {
if (!Module.o909 && typeof o839.o906 === 'undefined') {
            try {
o44.o45("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
}catch(e){}
            try {
Module.o909 = true;
}catch(e){}
        }
}catch(e){}

        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).

        var o910 = {};
        try {
o910['canHandle'] = function o911(name) {
            try {
return !Module.o909 && /\.(jpg|jpeg|png|bmp)$/i.test(name);
}catch(e){}
        };
}catch(e){}
        try {
o910['handle'] = function o912(o842, name, o837, o585) {
            var o308 = null;
            try {
if (o839.o902) {
                try {
try {
                    try {
o308 = new o901([o842], {
                        type: o839.o913(name)
                    });
}catch(e){}
                    try {
if (o308.o85 !== o842.length) { // Safari bug #118630
                        // Safari's Blob can only take an ArrayBuffer
                        try {
o308 = new o901([(new Uint8Array(o842)).buffer], {
                            type: o839.o913(name)
                        });
}catch(e){}
                    }
}catch(e){}
                } catch (o189) {
                    try {
o48.o123('Blob constructor present but fails: ' + o189 + '; falling back to blob builder');
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
if (!o308) {
                var o914 = new o839.o903();
                try {
o914.o915((new Uint8Array(o842)).buffer);
}catch(e){} // we need to pass a buffer, and must copy the array to get the right data range
                try {
o308 = o914.o916();
}catch(e){}
            }
}catch(e){}
            var o38 = o839.o906.o917(o308);
            var o918 = new o919();
            try {
o918.o837 = function o920() {
                try {
o73(o918.o921, 'Image ' + name + ' could not be decoded');
}catch(e){}
                var o922 = o923.o924('canvas');
                try {
o922.o925 = o918.o925;
}catch(e){}
                try {
o922.o926 = o918.o926;
}catch(e){}
                var o927 = o922.o928('2d');
                try {
o927.o929(o918, 0, 0);
}catch(e){}
                try {
Module["preloadedImages"][name] = o922;
}catch(e){}
                try {
o839.o906.o930(o38);
}catch(e){}
                try {
if (o837) try {
o837(o842);
}catch(e){}
}catch(e){}
            };
}catch(e){}
            try {
o918.o585 = function o931(o598) {
                try {
o44.o45('Image ' + o38 + ' could not be decoded');
}catch(e){}
                try {
if (o585) try {
o585();
}catch(e){}
}catch(e){}
            };
}catch(e){}
            try {
o918.o569 = o38;
}catch(e){}
        };
}catch(e){}
        try {
Module['preloadPlugins'].push(o910);
}catch(e){}

        var o932 = {};
        try {
o932['canHandle'] = function o933(name) {
            try {
return !Module.o934 && name.substr(-4) in {
                '.ogg': 1,
                '.wav': 1,
                '.mp3': 1
            };
}catch(e){}
        };
}catch(e){}
        try {
o932['handle'] = function o935(o842, name, o837, o585) {
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
        };
}catch(e){}
        try {
Module['preloadPlugins'].push(o932);
}catch(e){}

        // Canvas event setup

        var o922 = Module['canvas'];

        // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
        // Module['forcedAspectRatio'] = 4 / 3;

        try {
o922.o946 = o922['requestPointerLock'] ||
            o922['mozRequestPointerLock'] ||
            o922['webkitRequestPointerLock'] ||
            o922['msRequestPointerLock'] ||
            function () {};
}catch(e){}
        try {
o922.o947 = o923['exitPointerLock'] ||
            o923['mozExitPointerLock'] ||
            o923['webkitExitPointerLock'] ||
            o923['msExitPointerLock'] ||
            function () {};
}catch(e){} // no-op if function does not exist
        try {
o922.o947 = o922.o947.bind(o923);
}catch(e){}

        function o948() {
            try {
o839.o897 = o923['pointerLockElement'] === o922 ||
                o923['mozPointerLockElement'] === o922 ||
                o923['webkitPointerLockElement'] === o922 ||
                o923['msPointerLockElement'] === o922;
}catch(e){}
        }

        try {
o923.o938('pointerlockchange', o948, false);
}catch(e){}
        try {
o923.o938('mozpointerlockchange', o948, false);
}catch(e){}
        try {
o923.o938('webkitpointerlockchange', o948, false);
}catch(e){}
        try {
o923.o938('mspointerlockchange', o948, false);
}catch(e){}

        try {
if (Module['elementPointerLock']) {
            try {
o922.o938("click", function (o949) {
                try {
if (!o839.o897 && o922.o946) {
                    try {
o922.o946();
}catch(e){}
                    try {
o949.o950();
}catch(e){}
                }
}catch(e){}
            }, false);
}catch(e){}
        }
}catch(e){}
    },
    o951: function (o922, o952, o953, o954) {
        var o927;
        var o955 = '?';

        function o956(o598) {
            try {
o955 = o598.o957 || o955;
}catch(e){}
        }
        try {
try {
            try {
if (o952) {
                var o958 = {
                    o959: false,
                    o960: false
                };

                try {
if (o954) {
                    try {
for (var o961 in o954) {
                        try {
o958[o961] = o954[o961];
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}


                try {
o922.o938('webglcontextcreationerror', o956, false);
}catch(e){}
                try {
try {
                    try {
['experimental-webgl', 'webgl'].some(function (o962) {
                        try {
return o927 = o922.o928(o962, o958);
}catch(e){}
                    });
}catch(e){}
                } finally {
                    try {
o922.o963('webglcontextcreationerror', o956, false);
}catch(e){}
                }
}catch(e){}
            } else {
                try {
o927 = o922.o928('2d');
}catch(e){}
            }
}catch(e){}
            try {
if (!o927) try {
throw ':(';
}catch(e){}
}catch(e){}
        } catch (o189) {
            try {
Module.print('Could not create canvas: ' + [o955, o189]);
}catch(e){}
            try {
return null;
}catch(e){}
        }
}catch(e){}
        try {
if (o952) {
            // Set the background of the WebGL canvas to black
            try {
o922.o964.o965 = "black";
}catch(e){}

            // Warn on context loss
            try {
o922.o938('webglcontextlost', function (o598) {
                try {
o966('WebGL context lost. You will need to reload the page.');
}catch(e){}
            }, false);
}catch(e){}
        }
}catch(e){}
        try {
if (o953) {
            try {
o967 = Module.o927 = o927;
}catch(e){}
            try {
Module.o952 = o952;
}catch(e){}
            try {
o839.o898.forEach(function (o278) {
                try {
o278()
}catch(e){}
            });
}catch(e){}
            try {
o839.o468();
}catch(e){}
        }
}catch(e){}
        try {
return o927;
}catch(e){}
    },
    o968: function (o922, o952, o953) {},
    o969: false,
    o970: undefined,
    o971: undefined,
    o972: function (o970, o971) {
        try {
o839.o970 = o970;
}catch(e){}
        try {
o839.o971 = o971;
}catch(e){}
        try {
if (typeof o839.o970 === 'undefined') try {
o839.o970 = true;
}catch(e){}
}catch(e){}
        try {
if (typeof o839.o971 === 'undefined') try {
o839.o971 = false;
}catch(e){}
}catch(e){}

        var o922 = Module['canvas'];
        var o973 = o922.o974;

        function o975() {
            try {
o839.o896 = false;
}catch(e){}
            try {
if ((o923['webkitFullScreenElement'] || o923['webkitFullscreenElement'] ||
                o923['mozFullScreenElement'] || o923['mozFullscreenElement'] ||
                o923['fullScreenElement'] || o923['fullscreenElement'] ||
                o923['msFullScreenElement'] || o923['msFullscreenElement'] ||
                o923['webkitCurrentFullScreenElement']) === o973) {
                try {
o922.o976 = o923['cancelFullScreen'] ||
                    o923['mozCancelFullScreen'] ||
                    o923['webkitCancelFullScreen'] ||
                    o923['msExitFullscreen'] ||
                    o923['exitFullscreen'] ||
                    function () {};
}catch(e){}
                try {
o922.o976 = o922.o976.bind(o923);
}catch(e){}
                try {
if (o839.o970) try {
o922.o946();
}catch(e){}
}catch(e){}
                try {
o839.o896 = true;
}catch(e){}
                try {
if (o839.o971) try {
o839.o977();
}catch(e){}
}catch(e){}
            } else {

                // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
                var o973 = o922.o974;
                try {
o973.o974.o978(o922, o973);
}catch(e){}
                try {
o973.o974.o979(o973);
}catch(e){}

                try {
if (o839.o971) try {
o839.o980();
}catch(e){}
}catch(e){}
            }
}catch(e){}
            try {
if (Module['onFullScreen']) try {
Module['onFullScreen'](o839.o896);
}catch(e){}
}catch(e){}
            try {
o839.o981(o922);
}catch(e){}
        }

        try {
if (!o839.o969) {
            try {
o839.o969 = true;
}catch(e){}
            try {
o923.o938('fullscreenchange', o975, false);
}catch(e){}
            try {
o923.o938('mozfullscreenchange', o975, false);
}catch(e){}
            try {
o923.o938('webkitfullscreenchange', o975, false);
}catch(e){}
            try {
o923.o938('MSFullscreenChange', o975, false);
}catch(e){}
        }
}catch(e){}

        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var o973 = o923.o924("div");
        try {
o922.o974.o978(o973, o922);
}catch(e){}
        try {
o973.o982(o922);
}catch(e){}

        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        try {
o973.o972 = o973['requestFullScreen'] ||
            o973['mozRequestFullScreen'] ||
            o973['msRequestFullscreen'] ||
            (o973['webkitRequestFullScreen'] ? function () {
            try {
o973['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT'])
}catch(e){}
        } : null);
}catch(e){}
        try {
o973.o972();
}catch(e){}
    },
    o983: function o983(o116) {
        try {
if (typeof o19 === 'undefined') { // Provide fallback to setTimeout if window is undefined (e.g. in Node.js)
            try {
o984(o116, 1000 / 60);
}catch(e){}
        } else {
            try {
if (!o19.o983) {
                try {
o19.o983 = o19['requestAnimationFrame'] ||
                    o19['mozRequestAnimationFrame'] ||
                    o19['webkitRequestAnimationFrame'] ||
                    o19['msRequestAnimationFrame'] ||
                    o19['oRequestAnimationFrame'] ||
                    o19['setTimeout'];
}catch(e){}
            }
}catch(e){}
            try {
o19.o983(o116);
}catch(e){}
        }
}catch(e){}
    },
    o985: function (o116) {
        try {
return function () {
            try {
if (!o154) try {
return o116.apply(null, arguments);
}catch(e){}
}catch(e){}
        };
}catch(e){}
    },
    o986: function (o116) {
        try {
return o839.o983(function () {
            try {
if (!o154) try {
o116();
}catch(e){}
}catch(e){}
        });
}catch(e){}
    },
    o945: function (o116, o987) {
        try {
return o984(function () {
            try {
if (!o154) try {
o116();
}catch(e){}
}catch(e){}
        }, o987);
}catch(e){}
    },
    o988: function (o116, o987) {
        try {
return o989(function () {
            try {
if (!o154) try {
o116();
}catch(e){}
}catch(e){}
        }, o987);
}catch(e){}
    },
    o913: function (name) {
        try {
return {
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'png': 'image/png',
            'bmp': 'image/bmp',
            'ogg': 'audio/ogg',
            'wav': 'audio/wav',
            'mp3': 'audio/mpeg'
        }[name.substr(name.lastIndexOf('.') + 1)];
}catch(e){}
    },
    o990: function (o116) {
        try {
if (!o19.o990) {
            try {
o19.o990 = o991['getUserMedia'] ||
                o991['mozGetUserMedia'];
}catch(e){}
        }
}catch(e){}
        try {
o19.o990(o116);
}catch(e){}
    },
    o992: function (o598) {
        try {
return o598['movementX'] ||
            o598['mozMovementX'] ||
            o598['webkitMovementX'] ||
            0;
}catch(e){}
    },
    o993: function (o598) {
        try {
return o598['movementY'] ||
            o598['mozMovementY'] ||
            o598['webkitMovementY'] ||
            0;
}catch(e){}
    },
    o994: function (o598) {
        try {
return Math.o75(-1, Math.o87(1, o598.type === 'DOMMouseScroll' ? o598.o995 : -o598.o996));
}catch(e){}
    },
    o997: 0,
    o998: 0,
    o999: 0,
    o1000: 0,
    o1001: function (o598) { // event should be mousemove, mousedown or mouseup
        try {
if (o839.o897) {
            // When the pointer is locked, calculate the coordinates
            // based on the movement of the mouse.
            // Workaround for Firefox bug 764498
            try {
if (o598.type != 'mousemove' &&
                ('mozMovementX' in o598)) {
                try {
o839.o999 = o839.o1000 = 0;
}catch(e){}
            } else {
                try {
o839.o999 = o839.o992(o598);
}catch(e){}
                try {
o839.o1000 = o839.o993(o598);
}catch(e){}
            }
}catch(e){}

            // check if SDL is available
            try {
if (typeof o1002 != "undefined") {
                try {
o839.o997 = o1002.o997 + o839.o999;
}catch(e){}
                try {
o839.o998 = o1002.o998 + o839.o1000;
}catch(e){}
            } else {
                // just add the mouse delta to the current absolut mouse position
                // FIXME: ideally this should be clamped against the canvas size and zero
                try {
o839.o997 += o839.o999;
}catch(e){}
                try {
o839.o998 += o839.o1000;
}catch(e){}
            }
}catch(e){}
        } else {
            // Otherwise, calculate the movement based on the changes
            // in the coordinates.
            var o1003 = Module["canvas"].o1004();
            var o23, o64;

            // Neither .scrollX or .pageXOffset are defined in a spec, but
            // we prefer .scrollX because it is currently in a spec draft.
            // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
            var o1005 = ((typeof o19.o1005 !== 'undefined') ? o19.o1005 : o19.o1006);
            var o1007 = ((typeof o19.o1007 !== 'undefined') ? o19.o1007 : o19.o1008);
            try {
if (o598.type == 'touchstart' ||
                o598.type == 'touchend' ||
                o598.type == 'touchmove') {
                var o227 = o598.o1009.o80(0);
                try {
if (o227) {
                    try {
o23 = o227.o1010 - (o1005 + o1003.o1011);
}catch(e){}
                    try {
o64 = o227.o1012 - (o1007 + o1003.o11);
}catch(e){}
                } else {
                    try {
return;
}catch(e){}
                }
}catch(e){}
            } else {
                try {
o23 = o598.o1010 - (o1005 + o1003.o1011);
}catch(e){}
                try {
o64 = o598.o1012 - (o1007 + o1003.o11);
}catch(e){}
            }
}catch(e){}

            // the canvas might be CSS-scaled compared to its backbuffer;
            // SDL-using content will want mouse coordinates in terms
            // of backbuffer units.
            var o1013 = Module["canvas"].o925;
            var o237 = Module["canvas"].o926;
            try {
o23 = o23 * (o1013 / o1003.o925);
}catch(e){}
            try {
o64 = o64 * (o237 / o1003.o926);
}catch(e){}

            try {
o839.o999 = o23 - o839.o997;
}catch(e){}
            try {
o839.o1000 = o64 - o839.o998;
}catch(e){}
            try {
o839.o997 = o23;
}catch(e){}
            try {
o839.o998 = o64;
}catch(e){}
        }
}catch(e){}
    },
    o1014: function (o38, o837, o585) {
        var o39 = new o40();
        try {
o39.o41('GET', o38, true);
}catch(e){}
        try {
o39.o826 = 'arraybuffer';
}catch(e){}
        try {
o39.o837 = function o1015() {
            try {
if (o39.o818 == 200 || (o39.o818 == 0 && o39.o828)) { // file URLs can return 0
                try {
o837(o39.o828);
}catch(e){}
            } else {
                try {
o585();
}catch(e){}
            }
}catch(e){}
        };
}catch(e){}
        try {
o39.o585 = o585;
}catch(e){}
        try {
o39.o42(null);
}catch(e){}
    },
    o846: function (o38, o837, o585, o1016) {
        try {
o839.o1014(o38, function (o1017) {
            try {
o73(o1017, 'Loading data file "' + o38 + '" failed (no arrayBuffer).');
}catch(e){}
            try {
o837(new Uint8Array(o1017));
}catch(e){}
            try {
if (!o1016) try {
o334('al ' + o38);
}catch(e){}
}catch(e){}
        }, function (o598) {
            try {
if (o585) {
                try {
o585();
}catch(e){}
            } else {
                try {
throw 'Loading data file "' + o38 + '" failed.';
}catch(e){}
            }
}catch(e){}
        });
}catch(e){}
        try {
if (!o1016) try {
o332('al ' + o38);
}catch(e){}
}catch(e){}
    },
    o1018: [],
    o1019: function () {
        var o922 = Module['canvas'];
        try {
o839.o1018.forEach(function (o1020) {
            try {
o1020(o922.o925, o922.o926);
}catch(e){}
        });
}catch(e){}
    },
    o1021: function (o925, o926, o1022) {
        var o922 = Module['canvas'];
        try {
o839.o981(o922, o925, o926);
}catch(e){}
        try {
if (!o1022) try {
o839.o1019();
}catch(e){}
}catch(e){}
    },
    o1023: 0,
    o1024: 0,
    o977: function () {
        // check if SDL is available   
        try {
if (typeof o1002 != "undefined") {
            var flags = o267[((o1002.o1025 + o48.o71 * 0) >> 2)];
            try {
flags = flags | 0x00800000;
}catch(e){} // set SDL_FULLSCREEN flag
            try {
o202[((o1002.o1025 + o48.o71 * 0) >> 2)] = flags
}catch(e){}
        }
}catch(e){}
        try {
o839.o1019();
}catch(e){}
    },
    o980: function () {
        // check if SDL is available       
        try {
if (typeof o1002 != "undefined") {
            var flags = o267[((o1002.o1025 + o48.o71 * 0) >> 2)];
            try {
flags = flags & ~0x00800000;
}catch(e){} // clear SDL_FULLSCREEN flag
            try {
o202[((o1002.o1025 + o48.o71 * 0) >> 2)] = flags
}catch(e){}
        }
}catch(e){}
        try {
o839.o1019();
}catch(e){}
    },
    o981: function (o922, o1026, o1027) {
        try {
if (o1026 && o1027) {
            try {
o922.o1028 = o1026;
}catch(e){}
            try {
o922.o1029 = o1027;
}catch(e){}
        } else {
            try {
o1026 = o922.o1028;
}catch(e){}
            try {
o1027 = o922.o1029;
}catch(e){}
        }
}catch(e){}
        var o1030 = o1026;
        var o66 = o1027;
        try {
if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
            try {
if (o1030 / o66 < Module['forcedAspectRatio']) {
                try {
o1030 = Math.o67(o66 * Module['forcedAspectRatio']);
}catch(e){}
            } else {
                try {
o66 = Math.o67(o1030 / Module['forcedAspectRatio']);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
if (((o923['webkitFullScreenElement'] || o923['webkitFullscreenElement'] ||
            o923['mozFullScreenElement'] || o923['mozFullscreenElement'] ||
            o923['fullScreenElement'] || o923['fullscreenElement'] ||
            o923['msFullScreenElement'] || o923['msFullscreenElement'] ||
            o923['webkitCurrentFullScreenElement']) === o922.o974) && (typeof o1025 != 'undefined')) {
            var o1031 = Math.o87(o1025.o925 / o1030, o1025.o926 / o66);
            try {
o1030 = Math.o67(o1030 * o1031);
}catch(e){}
            try {
o66 = Math.o67(o66 * o1031);
}catch(e){}
        }
}catch(e){}
        try {
if (o839.o971) {
            try {
if (o922.o925 != o1030) try {
o922.o925 = o1030;
}catch(e){}
}catch(e){}
            try {
if (o922.o926 != o66) try {
o922.o926 = o66;
}catch(e){}
}catch(e){}
            try {
if (typeof o922.o964 != 'undefined') {
                try {
o922.o964.o1032("width");
}catch(e){}
                try {
o922.o964.o1032("height");
}catch(e){}
            }
}catch(e){}
        } else {
            try {
if (o922.o925 != o1026) try {
o922.o925 = o1026;
}catch(e){}
}catch(e){}
            try {
if (o922.o926 != o1027) try {
o922.o926 = o1027;
}catch(e){}
}catch(e){}
            try {
if (typeof o922.o964 != 'undefined') {
                try {
if (o1030 != o1026 || o66 != o1027) {
                    try {
o922.o964.o1033("width", o1030 + "px", "important");
}catch(e){}
                    try {
o922.o964.o1033("height", o66 + "px", "important");
}catch(e){}
                } else {
                    try {
o922.o964.o1032("width");
}catch(e){}
                    try {
o922.o964.o1032("height");
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
    }
}

try {
for(o364o508this.o521=Promise.prototype; o1115.o17 < 15;this.o153++)
{
   try {
[].o3(o0.indexOf(o1));
}catch(e){}
   try {
for(o4=-3; o4< 15;o4++)
   {
        try {
o2.o3(o0.indexOf(function () { try {
o73.subarray();
}catch(e){} },o4));
}catch(e){}
        try {
o2.o3(o0.indexOf(o1,o4));
}catch(e){}
   }
}catch(e){}
}
}catch(e){}

var o17 = -1;
try {
o5.prototype = Array.prototype;
}catch(e){}

var o6 = new o5();

var o7 = new Object();
var o8 = new Object();

try {
o6[0] = "abc";
}catch(e){}
try {
o6[1] = "def";
}catch(e){}
try {
o6[2] = "efg";
}catch(e){}
try {
o6[3] = true;
}catch(e){}
try {
o6[4] = true;
}catch(e){}
try {
o6[5] = false;
}catch(e){}
try {
o6[6] = o8;
}catch(e){}
try {
o6[7] = o8;
}catch(e){}
try {
o6[8] = null;
}catch(e){}

try {
o6.length = 10;
}catch(e){}

try {
o2.o3(o6.indexOf("abc"));
}catch(e){}
try {
o2.o3(o6.indexOf("abc", 3));
}catch(e){}
try {
o2.o3(o6.indexOf("abc", 2));
}catch(e){}
try {
o2.o3(o6.indexOf("abc", -2));
}catch(e){}

try {
o2.o3(o6.indexOf("efg"));
}catch(e){}
try {
o2.o3(o6.indexOf("efg", 6));
}catch(e){}
try {
o2.o3(o6.indexOf("efg", 1));
}catch(e){}
try {
o2.o3(o6.indexOf("efg", -3));
}catch(e){}

try {
o2.o3(o6.indexOf("xyg"));
}catch(e){}
try {
o2.o3(o6.indexOf("esg", 2));
}catch(e){}
try {
o2.o3(o6.indexOf("eag", 2));
}catch(e){}
try {
o2.o3(o6.indexOf("", -2));
}catch(e){}

try {
o2.o3(o6.indexOf(true));
}catch(e){}
try {
o2.o3(o6.indexOf(false));
}catch(e){}
try {
o2.o3(o6.indexOf(new Boolean(true)));
}catch(e){}

try {
o2.o3(o6.indexOf(o8 , 6));
}catch(e){}
try {
o2.o3(o6.indexOf(o8 , 1));
}catch(e){}
try {
o2.o3(o6.indexOf(o8 ));
}catch(e){}
try {
o2.o3(o6.indexOf(o5));
}catch(e){}

try {
o2.o3(o6.indexOf(null));
}catch(e){}


try {
o2.o3(o6.indexOf());
}catch(e){}

//implicit calls
var o8 ;
var o270 = 0,
    o50 = 0,
    o271 = 0;
try {
Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){try {
o8 = true;
}catch(e){} try {
return 30;
}catch(e){}}});
}catch(e){}
try {
o8 = false;
}catch(e){}
try {
o9.length = 6;
}catch(e){}
var o10 = o9.indexOf(30);
try {
o2.o3(o8);
}catch(e){}

//Float array with gaps
var o11 = new Array(5.5, 5.6);
try {
o11[6] =  5.6;
}catch(e){}
try {
o2.o3(o11.indexOf(5.7));
}catch(e){}

// Cases where we do/don't have to resume after failing to find the value in the head segment.
// Run with -forcearraybtree to really stress these.
var o12 = [0, 1];
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
Array.prototype[2] = 'foo';
}catch(e){}
try {
o2.o3(o12.indexOf('foo'));
}catch(e){}
try {
o12[5] = 4;
}catch(e){}
try {
o2.o3(o12.indexOf('foo'));
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}

try {
o12 = [0, 1.1];
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
Array.prototype[2] = 'bar';
}catch(e){}
try {
o2.o3(o12.indexOf('bar'));
}catch(e){}
try {
o12[5] = 4;
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
o2.o3(o12.indexOf('bar'));
}catch(e){}

try {
o12 = [0, 'test'];
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
Array.prototype[2] = 4;
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
o12[5] = 4;
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
delete Array.prototype[2]
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
