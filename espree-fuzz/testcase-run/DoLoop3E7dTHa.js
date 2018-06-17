//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o474 = {
    o590: null,
    o662: [],
    o663: [null],
    o664: [],
    o665: 1,
    o666: null,
    o667: "/",
    o668: false,
    o669: true,
    o481: null,
    o540: {},
    o670: function (o189) {
        try {
if (!(o189 instanceof o474.o481)) try {
throw o189 + ' : ' + o262();
}catch(e){}
}catch(e){}
        try {
return o465(o189.o671);
}catch(e){}
    },
    o603: function (o31, o626) {
        try {
o31 = o591.resolve(o474.o672(), o31);
}catch(e){}
        try {
o626 = o626 || {};
}catch(e){}

        var o673 = {
            o674: true,
            o675: 0
        };
        try {
for (var key in o673) {
            try {
if (o626[key] === undefined) {
                try {
o626[key] = o673[key];
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}

        try {
if (o626.o675 > 8) { // max recursive lookup of 8
            try {
throw new o474.o481(o341.o423);
}catch(e){}
        }
}catch(e){}

        // split the path
        var o249 = o591.o676(o31.split('/').filter(function (o588) {
            try {
return !!o588;
}catch(e){}
        }), false);

        // start at the root
        var o677 = o474.o590;
        var o678 = '/';

        try {
for (var o82 = 0; o82 < o249.length; o82++) {
            var o679 = (o82 === o249.length - 1);
            try {
if (o679 && o626.o502) {
                // stop resolving
                try {
break;
}catch(e){}
            }
}catch(e){}

            try {
o677 = o474.o545(o677, o249[o82]);
}catch(e){}
            try {
o678 = o591.o592(o678, o249[o82]);
}catch(e){}

            // jump to the mount's root node if this is a mountpoint
            try {
if (o474.o680(o677)) {
                try {
if (!o679 || (o679 && o626.o674)) {
                    try {
o677 = o677.o681.o590;
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}

            // by default, lookupPath will not follow a symlink if it is the final path component.
            // setting opts.follow = true will override this behavior.
            try {
if (!o679 || o626.o682) {
                var o683 = 0;
                try {
while (o474.o527(o677.o503)) {
                    var link = o474.o520(o678);
                    try {
o678 = o591.resolve(o591.o684(o678), link);
}catch(e){}

                    var o510 = o474.o603(o678, {
                        o675: o626.o675
                    });
                    try {
o677 = o510.o479;
}catch(e){}

                    try {
if (o683++ > 40) { // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                        try {
throw new o474.o481(o341.o423);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}

        try {
return {
            o31: o678,
            o479: o677
        };
}catch(e){}
    },
    o685: function (o479) {
        var o31;
        try {
while (true) {
            try {
if (o474.o686(o479)) {
                var o500 = o479.o500.o594;
                try {
if (!o31) try {
return o500;
}catch(e){}
}catch(e){}
                try {
return o500[o500.length - 1] !== '/' ? o500 + '/' + o31 : o500 + o31;
}catch(e){}
            }
}catch(e){}
            try {
o31 = o31 ? o479.name + '/' + o31 : o479.name;
}catch(e){}
            try {
o479 = o479.o502;
}catch(e){}
        }
}catch(e){}
    },
    o687: function (o688, name) {
        var o689 = 0;


        try {
for (var o82 = 0; o82 < name.length; o82++) {
            try {
o689 = ((o689 << 5) - o689 + name.charCodeAt(o82)) | 0;
}catch(e){}
        }
}catch(e){}
        try {
return ((o688 + o689) >>> 0) % o474.o666.length;
}catch(e){}
    },
    o690: function (o479) {
        var o689 = o474.o687(o479.o502.o333, o479.name);
        try {
o479.o691 = o474.o666[o689];
}catch(e){}
        try {
o474.o666[o689] = o479;
}catch(e){}
    },
    o692: function (o479) {
        var o689 = o474.o687(o479.o502.o333, o479.name);
        try {
if (o474.o666[o689] === o479) {
            try {
o474.o666[o689] = o479.o691;
}catch(e){}
        } else {
            var o677 = o474.o666[o689];
            try {
while (o677) {
                try {
if (o677.o691 === o479) {
                    try {
o677.o691 = o479.o691;
}catch(e){}
                    try {
break;
}catch(e){}
                }
}catch(e){}
                try {
o677 = o677.o691;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
    },
    o545: function (o502, name) {
        var o565 = o474.o693(o502);
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        var o689 = o474.o687(o502.o333, name);
        try {
for (var o479 = o474.o666[o689]; o479; o479 = o479.o691) {
            var o694 = o479.name;
            try {
if (o479.o502.o333 === o502.o333 && o694 === name) {
                try {
return o479;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        // if we failed to find it in the cache, call into the VFS
        try {
return o474.o510(o502, name);
}catch(e){}
    },
    o501: function (o502, name, o503, o480) {
        try {
if (!o474.o695) {
            try {
o474.o695 = function (o502, name, o503, o480) {
                try {
if (!o502) {
                    try {
o502 = this;
}catch(e){} // root node sets parent to itself
                }
}catch(e){}
                try {
this.o502 = o502;
}catch(e){}
                try {
this.o500 = o502.o500;
}catch(e){}
                try {
this.o681 = null;
}catch(e){}
                try {
this.o333 = o474.o665++;
}catch(e){}
                try {
this.name = name;
}catch(e){}
                try {
this.o503 = o503;
}catch(e){}
                try {
this.o508 = {};
}catch(e){}
                try {
this.o476 = {};
}catch(e){}
                try {
this.o480 = o480;
}catch(e){}
            };
}catch(e){}

            try {
o474.o695.prototype = {};
}catch(e){}

            // compatibility
            var o696 = 292 | 73;
            var o697 = 146;

            // NOTE we must use Object.defineProperties instead of individual calls to
            // Object.defineProperty in order to make closure compiler happy
            try {
Object.defineProperties(o474.o695.prototype, {
                o27: {
                    get: function () {
                        try {
return (this.o503 & o696) === o696;
}catch(e){}
                    },
                    set: function (o493) {
                        try {
o493 ? this.o503 |= o696 : this.o503 &= ~o696;
}catch(e){}
                    }
                },
                write: {
                    get: function () {
                        try {
return (this.o503 & o697) === o697;
}catch(e){}
                    },
                    set: function (o493) {
                        try {
o493 ? this.o503 |= o697 : this.o503 &= ~o697;
}catch(e){}
                    }
                },
                o698: {
                    get: function () {
                        try {
return o474.o523(this.o503);
}catch(e){}
                    },
                },
                o699: {
                    get: function () {
                        try {
return o474.o528(this.o503);
}catch(e){}
                    },
                },
            });
}catch(e){}
        }
}catch(e){}

        var o479 = new o474.o695(o502, name, o503, o480);

        try {
o474.o690(o479);
}catch(e){}

        try {
return o479;
}catch(e){}
    },
    o700: function (o479) {
        try {
o474.o692(o479);
}catch(e){}
    },
    o686: function (o479) {
        try {
return o479 === o479.o502;
}catch(e){}
    },
    o680: function (o479) {
        try {
return !!o479.o681;
}catch(e){}
    },
    o525: function (o503) {
        try {
return (o503 & 61440) === 32768;
}catch(e){}
    },
    o523: function (o503) {
        try {
return (o503 & 61440) === 16384;
}catch(e){}
    },
    o527: function (o503) {
        try {
return (o503 & 61440) === 40960;
}catch(e){}
    },
    o528: function (o503) {
        try {
return (o503 & 61440) === 8192;
}catch(e){}
    },
    o504: function (o503) {
        try {
return (o503 & 61440) === 24576;
}catch(e){}
    },
    o505: function (o503) {
        try {
return (o503 & 61440) === 4096;
}catch(e){}
    },
    o701: function (o503) {
        try {
return (o503 & 49152) === 49152;
}catch(e){}
    },
    o702: {
        "r": 0,
        "rs": 1052672,
        "r+": 2,
        "w": 577,
        "wx": 705,
        "xw": 705,
        "w+": 578,
        "wx+": 706,
        "xw+": 706,
        "a": 1089,
        "ax": 1217,
        "xa": 1217,
        "a+": 1090,
        "ax+": 1218,
        "xa+": 1218
    },
    o703: function (o231) {
        var flags = o474.o702[o231];
        try {
if (typeof flags === 'undefined') {
            try {
throw new Error('Unknown file open mode: ' + o231);
}catch(e){}
        }
}catch(e){}
        try {
return flags;
}catch(e){}
    },
    o631: function (o704) {
        var o705 = o704 & 2097155;
        var o706 = ['r', 'w', 'rw'][o705];
        try {
if ((o704 & 512)) {
            try {
o706 += 'w';
}catch(e){}
        }
}catch(e){}
        try {
return o706;
}catch(e){}
    },
    o707: function (o479, o706) {
        try {
if (o474.o669) {
            try {
return 0;
}catch(e){}
        }
}catch(e){}
        // return 0 if any user, group or owner bits are set.
        try {
if (o706.indexOf('r') !== -1 && !(o479.o503 & 292)) {
            try {
return o341.o355;
}catch(e){}
        } else try {
if (o706.indexOf('w') !== -1 && !(o479.o503 & 146)) {
            try {
return o341.o355;
}catch(e){}
        } else try {
if (o706.indexOf('x') !== -1 && !(o479.o503 & 73)) {
            try {
return o341.o355;
}catch(e){}
        }
}catch(e){}
}catch(e){}
}catch(e){}
        try {
return 0;
}catch(e){}
    },
    o693: function (o506) {
        try {
return o474.o707(o506, 'x');
}catch(e){}
    },
    o708: function (o506, name) {
        try {
try {
            var o479 = o474.o545(o506, name);
            try {
return o341.o359;
}catch(e){}
        } catch (o189) {}
}catch(e){}
        try {
return o474.o707(o506, 'wx');
}catch(e){}
    },
    o709: function (o506, name, o710) {
        var o479;
        try {
try {
            try {
o479 = o474.o545(o506, name);
}catch(e){}
        } catch (o189) {
            try {
return o189.o671;
}catch(e){}
        }
}catch(e){}
        var o565 = o474.o707(o506, 'wx');
        try {
if (o565) {
            try {
return o565;
}catch(e){}
        }
}catch(e){}
        try {
if (o710) {
            try {
if (!o474.o523(o479.o503)) {
                try {
return o341.o362;
}catch(e){}
            }
}catch(e){}
            try {
if (o474.o686(o479) || o474.o685(o479) === o474.o672()) {
                try {
return o341.o358;
}catch(e){}
            }
}catch(e){}
        } else {
            try {
if (o474.o523(o479.o503)) {
                try {
return o341.o363;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
return 0;
}catch(e){}
    },
    o711: function (o479, flags) {
        try {
if (!o479) {
            try {
return o341.o343;
}catch(e){}
        }
}catch(e){}
        try {
if (o474.o527(o479.o503)) {
            try {
return o341.o423;
}catch(e){}
        } else try {
if (o474.o523(o479.o503)) {
            try {
if ((flags & 2097155) !== 0 || // opening for write
                (flags & 512)) {
                try {
return o341.o363;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
return o474.o707(o479, o474.o631(flags));
}catch(e){}
    },
    o712: 4096,
    o713: function (o714, o715) {
        try {
o714 = o714 || 0;
}catch(e){}
        try {
o715 = o715 || o474.o712;
}catch(e){}
        try {
for (var o716 = o714; o716 <= o715; o716++) {
            try {
if (!o474.o664[o716]) {
                try {
return o716;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
throw new o474.o481(o341.o366);
}catch(e){}
    },
    o717: function (o716) {
        try {
return o474.o664[o716];
}catch(e){}
    },
    o718: function (o477, o714, o715) {
        try {
if (!o474.o719) {
            try {
o474.o719 = function () {};
}catch(e){}
            try {
o474.o719.prototype = {};
}catch(e){}
            // compatibility
            try {
Object.defineProperties(o474.o719.prototype, {
                o720: {
                    get: function () {
                        try {
return this.o479;
}catch(e){}
                    },
                    set: function (o493) {
                        try {
this.o479 = o493;
}catch(e){}
                    }
                },
                o721: {
                    get: function () {
                        try {
return (this.flags & 2097155) !== 1;
}catch(e){}
                    }
                },
                o722: {
                    get: function () {
                        try {
return (this.flags & 2097155) !== 0;
}catch(e){}
                    }
                },
                o723: {
                    get: function () {
                        try {
return (this.flags & 1024);
}catch(e){}
                    }
                }
            });
}catch(e){}
        }
}catch(e){}
        try {
if (o477.__proto__) {
            // reuse the object
            try {
o477.__proto__ = o474.o719.prototype;
}catch(e){}
        } else {
            var o724 = new o474.o719();
            try {
for (var o588 in o477) {
                try {
o724[o588] = o477[o588];
}catch(e){}
            }
}catch(e){}
            try {
o477 = o724;
}catch(e){}
        }
}catch(e){}
        var o716 = o474.o713(o714, o715);
        try {
o477.o716 = o716;
}catch(e){}
        try {
o474.o664[o716] = o477;
}catch(e){}
        try {
return o477;
}catch(e){}
    },
    o725: function (o716) {
        try {
o474.o664[o716] = null;
}catch(e){}
    },
    o726: function (o114) {
        try {
return o474.o664[o114 - 1];
}catch(e){}
    },
    o727: function (o477) {
        try {
return o477 ? o477.o716 + 1 : 0;
}catch(e){}
    },
    o522: {
        o41: function (o477) {
            var o728 = o474.o729(o477.o479.o480);
            // override node's stream ops with the device's
            try {
o477.o476 = o728.o476;
}catch(e){}
            // forward the open call
            try {
if (o477.o476.o41) {
                try {
o477.o476.o41(o477);
}catch(e){}
            }
}catch(e){}
        },
        o517: function () {
            try {
throw new o474.o481(o341.o371);
}catch(e){}
        }
    },
    o730: function (o471) {
        try {
return ((o471) >> 8);
}catch(e){}
    },
    o731: function (o471) {
        try {
return ((o471) & 0xff);
}catch(e){}
    },
    o732: function (o733, o734) {
        try {
return ((o733) << 8 | (o734));
}catch(e){}
    },
    o475: function (o471, o472) {
        try {
o474.o663[o471] = {
            o476: o472
        };
}catch(e){}
    },
    o729: function (o471) {
        try {
return o474.o663[o471];
}catch(e){}
    },
    o735: function (o500) {
        var o662 = [];
        var o593 = [o500];

        try {
while (o593.length) {
            var o736 = o593.pop();

            try {
o662.push(o736);
}catch(e){}

            try {
o593.push.apply(o593, o736.o662);
}catch(e){}
        }
}catch(e){}

        try {
return o662;
}catch(e){}
    },
    o562: function (o563, o278) {
        try {
if (typeof (o563) === 'function') {
            try {
o278 = o563;
}catch(e){}
            try {
o563 = false;
}catch(e){}
        }
}catch(e){}

        var o662 = o474.o735(o474.o590.o500);
        var o620 = 0;

        function done(o565) {
            try {
if (o565) {
                try {
if (!done.o619) {
                    try {
done.o619 = true;
}catch(e){}
                    try {
return o278(o565);
}catch(e){}
                }
}catch(e){}
                try {
return;
}catch(e){}
            }
}catch(e){}
            try {
if (++o620 >= o662.length) {
                try {
o278(null);
}catch(e){}
            }
}catch(e){}
        }try {
;
}catch(e){}

        // sync all mounts
        try {
o662.forEach(function (o500) {
            try {
if (!o500.type.o562) {
                try {
return done(null);
}catch(e){}
            }
}catch(e){}
            try {
o500.type.o562(o500, o563, done);
}catch(e){}
        });
}catch(e){}
    },
    o500: function (type, o626, o594) {
        var o590 = o594 === '/';
        var o737 = !o594;
        var o479;

        try {
if (o590 && o474.o590) {
            try {
throw new o474.o481(o341.o358);
}catch(e){}
        } else try {
if (!o590 && !o737) {
            var o510 = o474.o603(o594, {
                o674: false
            });

            try {
o594 = o510.o31;
}catch(e){} // use the absolute path
            try {
o479 = o510.o479;
}catch(e){}

            try {
if (o474.o680(o479)) {
                try {
throw new o474.o481(o341.o358);
}catch(e){}
            }
}catch(e){}

            try {
if (!o474.o523(o479.o503)) {
                try {
throw new o474.o481(o341.o362);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
}catch(e){}

        var o500 = {
            type: type,
            o626: o626,
            o594: o594,
            o662: []
        };

        // create a root node for the fs
        var o738 = type.o500(o500);
        try {
o738.o500 = o500;
}catch(e){}
        try {
o500.o590 = o738;
}catch(e){}

        try {
if (o590) {
            try {
o474.o590 = o738;
}catch(e){}
        } else try {
if (o479) {
            // set as a mountpoint
            try {
o479.o681 = o500;
}catch(e){}

            // add the new mount to the current mount's children
            try {
if (o479.o500) {
                try {
o479.o500.o662.push(o500);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
}catch(e){}

        try {
return o738;
}catch(e){}
    },
    o739: function (o594) {
        var o510 = o474.o603(o594, {
            o674: false
        });

        try {
if (!o474.o680(o510.o479)) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}

        // destroy the nodes for this mount, and all its child mounts
        var o479 = o510.o479;
        var o500 = o479.o681;
        var o662 = o474.o735(o500);

        try {
Object.keys(o474.o666).forEach(function (o689) {
            var o677 = o474.o666[o689];

            try {
while (o677) {
                var next = o677.o691;

                try {
if (o662.indexOf(o677.o500) !== -1) {
                    try {
o474.o700(o677);
}catch(e){}
                }
}catch(e){}

                try {
o677 = next;
}catch(e){}
            }
}catch(e){}
        });
}catch(e){}

        // no longer a mountpoint
        try {
o479.o681 = null;
}catch(e){}

        // remove this mount from the child mounts
        var o740 = o479.o500.o662.indexOf(o500);
        try {
o73(o740 !== -1);
}catch(e){}
        try {
o479.o500.o662.splice(o740, 1);
}catch(e){}
    },
    o510: function (o502, name) {
        try {
return o502.o508.o510(o502, name);
}catch(e){}
    },
    o511: function (o31, o503, o471) {
        var o510 = o474.o603(o31, {
            o502: true
        });
        var o502 = o510.o479;
        var name = o591.o741(o31);
        var o565 = o474.o708(o502, name);
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        try {
if (!o502.o508.o511) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
return o502.o508.o511(o502, name, o503, o471);
}catch(e){}
    },
    create: function (o31, o503) {
        try {
o503 = o503 !== undefined ? o503 : 438 /* 0666 */ ;
}catch(e){}
        try {
o503 &= 4095;
}catch(e){}
        try {
o503 |= 32768;
}catch(e){}
        try {
return o474.o511(o31, o503, 0);
}catch(e){}
    },
    o606: function (o31, o503) {
        try {
o503 = o503 !== undefined ? o503 : 511 /* 0777 */ ;
}catch(e){}
        try {
o503 &= 511 | 512;
}catch(e){}
        try {
o503 |= 16384;
}catch(e){}
        try {
return o474.o511(o31, o503, 0);
}catch(e){}
    },
    o742: function (o31, o503, o471) {
        try {
if (typeof (o471) === 'undefined') {
            try {
o471 = o503;
}catch(e){}
            try {
o503 = 438 /* 0666 */ ;
}catch(e){}
        }
}catch(e){}
        try {
o503 |= 8192;
}catch(e){}
        try {
return o474.o511(o31, o503, o471);
}catch(e){}
    },
    o516: function (o547, o743) {
        var o510 = o474.o603(o743, {
            o502: true
        });
        var o502 = o510.o479;
        var o546 = o591.o741(o743);
        var o565 = o474.o708(o502, o546);
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        try {
if (!o502.o508.o516) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
return o502.o508.o516(o502, o546, o547);
}catch(e){}
    },
    o512: function (o744, o745) {
        var o746 = o591.o684(o744);
        var o747 = o591.o684(o745);
        var o748 = o591.o741(o744);
        var o543 = o591.o741(o745);
        // parents must exist
        var o510, o749, o542;
        try {
try {
            try {
o510 = o474.o603(o744, {
                o502: true
            });
}catch(e){}
            try {
o749 = o510.o479;
}catch(e){}
            try {
o510 = o474.o603(o745, {
                o502: true
            });
}catch(e){}
            try {
o542 = o510.o479;
}catch(e){}
        } catch (o189) {
            try {
throw new o474.o481(o341.o358);
}catch(e){}
        }
}catch(e){}
        // need to be part of the same mount
        try {
if (o749.o500 !== o542.o500) {
            try {
throw new o474.o481(o341.o360);
}catch(e){}
        }
}catch(e){}
        // source must exist
        var o541 = o474.o545(o749, o748);
        // old path should not be an ancestor of the new path
        var o750 = o591.o750(o744, o747);
        try {
if (o750.charAt(0) !== '.') {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        // new path should not be an ancestor of the old path
        try {
o750 = o591.o750(o745, o746);
}catch(e){}
        try {
if (o750.charAt(0) !== '.') {
            try {
throw new o474.o481(o341.o421);
}catch(e){}
        }
}catch(e){}
        // see if the new path already exists
        var o544;
        try {
try {
            try {
o544 = o474.o545(o542, o543);
}catch(e){}
        } catch (o189) {
            // not fatal
        }
}catch(e){}
        // early out if nothing needs to change
        try {
if (o541 === o544) {
            try {
return;
}catch(e){}
        }
}catch(e){}
        // we'll need to delete the old entry
        var o710 = o474.o523(o541.o503);
        var o565 = o474.o709(o749, o748, o710);
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        try {
o565 = o544 ?
            o474.o709(o542, o543, o710) :
            o474.o708(o542, o543);
}catch(e){}
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        try {
if (!o749.o508.o512) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
if (o474.o680(o541) || (o544 && o474.o680(o544))) {
            try {
throw new o474.o481(o341.o358);
}catch(e){}
        }
}catch(e){}
        // if we are going to change the parent, check write permissions
        try {
if (o542 !== o749) {
            try {
o565 = o474.o707(o749, 'w');
}catch(e){}
            try {
if (o565) {
                try {
throw new o474.o481(o565);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        // remove the node from the lookup hash
        try {
o474.o692(o541);
}catch(e){}
        // do the underlying fs rename
        try {
try {
            try {
o749.o508.o512(o541, o542, o543);
}catch(e){}
        } catch (o189) {
            try {
throw o189;
}catch(e){}
        } finally {
            // add the node back to the hash (in case node_ops.rename
            // changed its name)
            try {
o474.o690(o541);
}catch(e){}
        }
}catch(e){}
    },
    o514: function (o31) {
        var o510 = o474.o603(o31, {
            o502: true
        });
        var o502 = o510.o479;
        var name = o591.o741(o31);
        var o479 = o474.o545(o502, name);
        var o565 = o474.o709(o502, name, true);
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        try {
if (!o502.o508.o514) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
if (o474.o680(o479)) {
            try {
throw new o474.o481(o341.o358);
}catch(e){}
        }
}catch(e){}
        try {
o502.o508.o514(o502, name);
}catch(e){}
        try {
o474.o700(o479);
}catch(e){}
    },
    o515: function (o31) {
        var o510 = o474.o603(o31, {
            o682: true
        });
        var o479 = o510.o479;
        try {
if (!o479.o508.o515) {
            try {
throw new o474.o481(o341.o362);
}catch(e){}
        }
}catch(e){}
        try {
return o479.o508.o515(o479);
}catch(e){}
    },
    o513: function (o31) {
        var o510 = o474.o603(o31, {
            o502: true
        });
        var o502 = o510.o479;
        var name = o591.o741(o31);
        var o479 = o474.o545(o502, name);
        var o565 = o474.o709(o502, name, false);
        try {
if (o565) {
            // POSIX says unlink should set EPERM, not EISDIR
            try {
if (o565 === o341.o363) try {
o565 = o341.o342;
}catch(e){}
}catch(e){}
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        try {
if (!o502.o508.o513) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
if (o474.o680(o479)) {
            try {
throw new o474.o481(o341.o358);
}catch(e){}
        }
}catch(e){}
        try {
o502.o508.o513(o502, name);
}catch(e){}
        try {
o474.o700(o479);
}catch(e){}
    },
    o520: function (o31) {
        var o510 = o474.o603(o31);
        var link = o510.o479;
        try {
if (!link.o508.o520) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        try {
return link.o508.o520(link);
}catch(e){}
    },
    o595: function (o31, o751) {
        var o510 = o474.o603(o31, {
            o682: !o751
        });
        var o479 = o510.o479;
        try {
if (!o479.o508.o507) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
return o479.o508.o507(o479);
}catch(e){}
    },
    o752: function (o31) {
        try {
return o474.o595(o31, true);
}catch(e){}
    },
    o753: function (o31, o503, o751) {
        var o479;
        try {
if (typeof o31 === 'string') {
            var o510 = o474.o603(o31, {
                o682: !o751
            });
            try {
o479 = o510.o479;
}catch(e){}
        } else {
            try {
o479 = o31;
}catch(e){}
        }
}catch(e){}
        try {
if (!o479.o508.o509) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
o479.o508.o509(o479, {
            o503: (o503 & 4095) | (o479.o503 & ~4095),
            o489: Date.o4()
        });
}catch(e){}
    },
    o754: function (o31, o503) {
        try {
o474.o753(o31, o503, true);
}catch(e){}
    },
    o755: function (o716, o503) {
        var o477 = o474.o717(o716);
        try {
if (!o477) {
            try {
throw new o474.o481(o341.o350);
}catch(e){}
        }
}catch(e){}
        try {
o474.o753(o477.o479, o503);
}catch(e){}
    },
    o756: function (o31, o533, o534, o751) {
        var o479;
        try {
if (typeof o31 === 'string') {
            var o510 = o474.o603(o31, {
                o682: !o751
            });
            try {
o479 = o510.o479;
}catch(e){}
        } else {
            try {
o479 = o31;
}catch(e){}
        }
}catch(e){}
        try {
if (!o479.o508.o509) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
o479.o508.o509(o479, {
            o489: Date.o4()
            // we ignore the uid / gid for now
        });
}catch(e){}
    },
    o757: function (o31, o533, o534) {
        try {
o474.o756(o31, o533, o534, true);
}catch(e){}
    },
    o758: function (o716, o533, o534) {
        var o477 = o474.o717(o716);
        try {
if (!o477) {
            try {
throw new o474.o481(o341.o350);
}catch(e){}
        }
}catch(e){}
        try {
o474.o756(o477.o479, o533, o534);
}catch(e){}
    },
    o759: function (o31, o760) {
        try {
if (o760 < 0) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        var o479;
        try {
if (typeof o31 === 'string') {
            var o510 = o474.o603(o31, {
                o682: true
            });
            try {
o479 = o510.o479;
}catch(e){}
        } else {
            try {
o479 = o31;
}catch(e){}
        }
}catch(e){}
        try {
if (!o479.o508.o509) {
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
if (o474.o523(o479.o503)) {
            try {
throw new o474.o481(o341.o363);
}catch(e){}
        }
}catch(e){}
        try {
if (!o474.o525(o479.o503)) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        var o565 = o474.o707(o479, 'w');
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        try {
o479.o508.o509(o479, {
            o85: o760,
            o489: Date.o4()
        });
}catch(e){}
    },
    o761: function (o716, o760) {
        var o477 = o474.o717(o716);
        try {
if (!o477) {
            try {
throw new o474.o481(o341.o350);
}catch(e){}
        }
}catch(e){}
        try {
if ((o477.flags & 2097155) === 0) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        try {
o474.o759(o477.o479, o760);
}catch(e){}
    },
    o609: function (o31, o535, o536) {
        var o510 = o474.o603(o31, {
            o682: true
        });
        var o479 = o510.o479;
        try {
o479.o508.o509(o479, {
            o489: Math.o75(o535, o536)
        });
}catch(e){}
    },
    o41: function (o31, flags, o503, o714, o715) {
        try {
flags = typeof flags === 'string' ? o474.o703(flags) : flags;
}catch(e){}
        try {
o503 = typeof o503 === 'undefined' ? 438 /* 0666 */ : o503;
}catch(e){}
        try {
if ((flags & 64)) {
            try {
o503 = (o503 & 4095) | 32768;
}catch(e){}
        } else {
            try {
o503 = 0;
}catch(e){}
        }
}catch(e){}
        var o479;
        try {
if (typeof o31 === 'object') {
            try {
o479 = o31;
}catch(e){}
        } else {
            try {
o31 = o591.normalize(o31);
}catch(e){}
            try {
try {
                var o510 = o474.o603(o31, {
                    o682: !(flags & 131072)
                });
                try {
o479 = o510.o479;
}catch(e){}
            } catch (o189) {
                // ignore
            }
}catch(e){}
        }
}catch(e){}
        // perhaps we need to create the node
        try {
if ((flags & 64)) {
            try {
if (o479) {
                // if O_CREAT and O_EXCL are set, error out if the node already exists
                try {
if ((flags & 128)) {
                    try {
throw new o474.o481(o341.o359);
}catch(e){}
                }
}catch(e){}
            } else {
                // node doesn't exist, try to create it
                try {
o479 = o474.o511(o31, o503, 0);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
if (!o479) {
            try {
throw new o474.o481(o341.o343);
}catch(e){}
        }
}catch(e){}
        // can't truncate a device
        try {
if (o474.o528(o479.o503)) {
            try {
flags &= ~512;
}catch(e){}
        }
}catch(e){}
        // check permissions
        var o565 = o474.o711(o479, flags);
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        // do truncation if necessary
        try {
if ((flags & 512)) {
            try {
o474.o759(o479, 0);
}catch(e){}
        }
}catch(e){}
        // we've already handled these, don't pass down to the underlying vfs
        try {
flags &= ~(128 | 512);
}catch(e){}

        // register the stream with the filesystem
        var o477 = o474.o718({
            o479: o479,
            o31: o474.o685(o479), // we want the absolute path to the node
            flags: flags,
            o482: true,
            o548: 0,
            o476: o479.o476,
            // used by the file family libc calls (fopen, fwrite, ferror, etc.)
            o551: [],
            o586: false
        }, o714, o715);
        // call the new stream's open function
        try {
if (o477.o476.o41) {
            try {
o477.o476.o41(o477);
}catch(e){}
        }
}catch(e){}
        try {
if (Module['logReadFiles'] && !(flags & 1)) {
            try {
if (!o474.o762) try {
o474.o762 = {};
}catch(e){}
}catch(e){}
            try {
if (!(o31 in o474.o762)) {
                try {
o474.o762[o31] = 1;
}catch(e){}
                try {
Module['printErr']('read file: ' + o31);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
return o477;
}catch(e){}
    },
    o483: function (o477) {
        try {
try {
            try {
if (o477.o476.o483) {
                try {
o477.o476.o483(o477);
}catch(e){}
            }
}catch(e){}
        } catch (o189) {
            try {
throw o189;
}catch(e){}
        } finally {
            try {
o474.o725(o477.o716);
}catch(e){}
        }
}catch(e){}
    },
    o517: function (o477, o107, o550) {
        try {
if (!o477.o482 || !o477.o476.o517) {
            try {
throw new o474.o481(o341.o371);
}catch(e){}
        }
}catch(e){}
        try {
return o477.o476.o517(o477, o107, o550);
}catch(e){}
    },
    o27: function (o477, buffer, o107, length, o548) {
        try {
if (length < 0 || o548 < 0) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        try {
if ((o477.flags & 2097155) === 1) {
            try {
throw new o474.o481(o341.o350);
}catch(e){}
        }
}catch(e){}
        try {
if (o474.o523(o477.o479.o503)) {
            try {
throw new o474.o481(o341.o363);
}catch(e){}
        }
}catch(e){}
        try {
if (!o477.o476.o27) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        var o763 = true;
        try {
if (typeof o548 === 'undefined') {
            try {
o548 = o477.o548;
}catch(e){}
            try {
o763 = false;
}catch(e){}
        } else try {
if (!o477.o482) {
            try {
throw new o474.o481(o341.o371);
}catch(e){}
        }
}catch(e){}
}catch(e){}
        var o487 = o477.o476.o27(o477, buffer, o107, length, o548);
        try {
if (!o763) try {
o477.o548 += o487;
}catch(e){}
}catch(e){}
        try {
return o487;
}catch(e){}
    },
    write: function (o477, buffer, o107, length, o548, o549) {
        try {
if (length < 0 || o548 < 0) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        try {
if ((o477.flags & 2097155) === 0) {
            try {
throw new o474.o481(o341.o350);
}catch(e){}
        }
}catch(e){}
        try {
if (o474.o523(o477.o479.o503)) {
            try {
throw new o474.o481(o341.o363);
}catch(e){}
        }
}catch(e){}
        try {
if (!o477.o476.write) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        var o763 = true;
        try {
if (typeof o548 === 'undefined') {
            try {
o548 = o477.o548;
}catch(e){}
            try {
o763 = false;
}catch(e){}
        } else try {
if (!o477.o482) {
            try {
throw new o474.o481(o341.o371);
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
if (o477.flags & 1024) {
            // seek to the end before writing in append mode
            try {
o474.o517(o477, 0, 2);
}catch(e){}
        }
}catch(e){}
        var o764 = o477.o476.write(o477, buffer, o107, length, o548, o549);
        try {
if (!o763) try {
o477.o548 += o764;
}catch(e){}
}catch(e){}
        try {
return o764;
}catch(e){}
    },
    o215: function (o477, o107, length) {
        try {
if (o107 < 0 || length <= 0) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        try {
if ((o477.flags & 2097155) === 0) {
            try {
throw new o474.o481(o341.o350);
}catch(e){}
        }
}catch(e){}
        try {
if (!o474.o525(o477.o479.o503) && !o474.o523(o479.o503)) {
            try {
throw new o474.o481(o341.o361);
}catch(e){}
        }
}catch(e){}
        try {
if (!o477.o476.o215) {
            try {
throw new o474.o481(o341.o424);
}catch(e){}
        }
}catch(e){}
        try {
o477.o476.o215(o477, o107, length);
}catch(e){}
    },
    o519: function (o477, buffer, o107, length, o548, o552, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        try {
if ((o477.flags & 2097155) === 1) {
            try {
throw new o474.o481(o341.o355);
}catch(e){}
        }
}catch(e){}
        try {
if (!o477.o476.o519) {
            try {
throw new o474.o481(o341.o361);
}catch(e){}
        }
}catch(e){}
        try {
return o477.o476.o519(o477, buffer, o107, length, o548, o552, flags);
}catch(e){}
    },
    o765: function (o477, o766, o196) {
        try {
if (!o477.o476.o765) {
            try {
throw new o474.o481(o341.o367);
}catch(e){}
        }
}catch(e){}
        try {
return o477.o476.o765(o477, o766, o196);
}catch(e){}
    },
    o767: function (o31, o626) {
        try {
o626 = o626 || {};
}catch(e){}
        try {
o626.flags = o626.flags || 'r';
}catch(e){}
        try {
o626.o608 = o626.o608 || 'binary';
}catch(e){}
        try {
if (o626.o608 !== 'utf8' && o626.o608 !== 'binary') {
            try {
throw new Error('Invalid encoding type "' + o626.o608 + '"');
}catch(e){}
        }
}catch(e){}
        var o30;
        var o477 = o474.o41(o31, o626.flags);
        var o595 = o474.o595(o31);
        var length = o595.o85;
        var o768 = new Uint8Array(length);
        try {
o474.o27(o477, o768, 0, length, 0);
}catch(e){}
        try {
if (o626.o608 === 'utf8') {
            try {
o30 = '';
}catch(e){}
            var o229 = new o48.o129();
            try {
for (var o82 = 0; o82 < length; o82++) {
                try {
o30 += o229.o131(o768[o82]);
}catch(e){}
            }
}catch(e){}
        } else try {
if (o626.o608 === 'binary') {
            try {
o30 = o768;
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
o474.o483(o477);
}catch(e){}
        try {
return o30;
}catch(e){}
    },
    o607: function (o31, o769, o626) {
        try {
o626 = o626 || {};
}catch(e){}
        try {
o626.flags = o626.flags || 'w';
}catch(e){}
        try {
o626.o608 = o626.o608 || 'utf8';
}catch(e){}
        try {
if (o626.o608 !== 'utf8' && o626.o608 !== 'binary') {
            try {
throw new Error('Invalid encoding type "' + o626.o608 + '"');
}catch(e){}
        }
}catch(e){}
        var o477 = o474.o41(o31, o626.flags, o626.o503);
        try {
if (o626.o608 === 'utf8') {
            var o229 = new o48.o129();
            var o768 = new Uint8Array(o229.o137(o769));
            try {
o474.write(o477, o768, 0, o768.length, 0, o626.o549);
}catch(e){}
        } else try {
if (o626.o608 === 'binary') {
            try {
o474.write(o477, o769, 0, o769.length, 0, o626.o549);
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
o474.o483(o477);
}catch(e){}
    },
    o672: function () {
        try {
return o474.o667;
}catch(e){}
    },
    o770: function (o31) {
        var o510 = o474.o603(o31, {
            o682: true
        });
        try {
if (!o474.o523(o510.o479.o503)) {
            try {
throw new o474.o481(o341.o362);
}catch(e){}
        }
}catch(e){}
        var o565 = o474.o707(o510.o479, 'x');
        try {
if (o565) {
            try {
throw new o474.o481(o565);
}catch(e){}
        }
}catch(e){}
        try {
o474.o667 = o510.o31;
}catch(e){}
    },
    o771: function () {
        try {
o474.o606('/tmp');
}catch(e){}
    },
    o772: function () {
        // create /dev
        try {
o474.o606('/dev');
}catch(e){}
        // setup /dev/null
        try {
o474.o475(o474.o732(1, 3), {
            o27: function () {
                try {
return 0;
}catch(e){}
            },
            write: function () {
                try {
return 0;
}catch(e){}
            }
        });
}catch(e){}
        try {
o474.o742('/dev/null', o474.o732(1, 3));
}catch(e){}
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        try {
o466.o470(o474.o732(5, 0), o466.o490);
}catch(e){}
        try {
o466.o470(o474.o732(6, 0), o466.o494);
}catch(e){}
        try {
o474.o742('/dev/tty', o474.o732(5, 0));
}catch(e){}
        try {
o474.o742('/dev/tty1', o474.o732(6, 0));
}catch(e){}
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        try {
o474.o606('/dev/shm');
}catch(e){}
        try {
o474.o606('/dev/shm/tmp');
}catch(e){}
    },
    o773: function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops

        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        try {
if (Module['stdin']) {
            try {
o474.o774('/dev', 'stdin', Module['stdin']);
}catch(e){}
        } else {
            try {
o474.o516('/dev/tty', '/dev/stdin');
}catch(e){}
        }
}catch(e){}
        try {
if (Module['stdout']) {
            try {
o474.o774('/dev', 'stdout', null, Module['stdout']);
}catch(e){}
        } else {
            try {
o474.o516('/dev/tty', '/dev/stdout');
}catch(e){}
        }
}catch(e){}
        try {
if (Module['stderr']) {
            try {
o474.o774('/dev', 'stderr', null, Module['stderr']);
}catch(e){}
        } else {
            try {
o474.o516('/dev/tty1', '/dev/stderr');
}catch(e){}
        }
}catch(e){}

        // open default streams for the stdin, stdout and stderr devices
        var o775 = o474.o41('/dev/stdin', 'r');
        try {
o202[((o658) >> 2)] = o474.o727(o775);
}catch(e){}
        try {
o73(o775.o716 === 0, 'invalid handle for stdin (' + o775.o716 + ')');
}catch(e){}

        var o776 = o474.o41('/dev/stdout', 'w');
        try {
o202[((o659) >> 2)] = o474.o727(o776);
}catch(e){}
        try {
o73(o776.o716 === 1, 'invalid handle for stdout (' + o776.o716 + ')');
}catch(e){}

        var o777 = o474.o41('/dev/stderr', 'w');
        try {
o202[((o660) >> 2)] = o474.o727(o777);
}catch(e){}
        try {
o73(o777.o716 === 2, 'invalid handle for stderr (' + o777.o716 + ')');
}catch(e){}
    },
    o778: function () {
        try {
if (o474.o481) try {
return;
}catch(e){}
}catch(e){}
        try {
o474.o481 = function o481(o671) {
            try {
this.o671 = o671;
}catch(e){}
            try {
for (var key in o341) {
                try {
if (o341[key] === o671) {
                    try {
this.o119 = key;
}catch(e){}
                    try {
break;
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
this.o779 = o463[o671];
}catch(e){}
        };
}catch(e){}
        try {
o474.o481.prototype = new Error();
}catch(e){}
        try {
o474.o481.prototype.constructor = o474.o481;
}catch(e){}
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        try {
[o341.o343].forEach(function (o119) {
            try {
o474.o540[o119] = new o474.o481(o119);
}catch(e){}
            try {
o474.o540[o119].o190 = '<generic error, no stack>';
}catch(e){}
        });
}catch(e){}
    },
    o623: function () {
        try {
o474.o778();
}catch(e){}

        try {
o474.o666 = new Array(4096);
}catch(e){}

        try {
o474.o500(o495, {}, '/');
}catch(e){}

        try {
o474.o771();
}catch(e){}
        try {
o474.o772();
}catch(e){}
    },
    o468: function (input, o473, o586) {
        try {
o73(!o474.o468.o668, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
}catch(e){}
        try {
o474.o468.o668 = true;
}catch(e){}

        try {
o474.o778();
}catch(e){}

        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        try {
Module['stdin'] = input || Module['stdin'];
}catch(e){}
        try {
Module['stdout'] = o473 || Module['stdout'];
}catch(e){}
        try {
Module['stderr'] = o586 || Module['stderr'];
}catch(e){}

        try {
o474.o773();
}catch(e){}
    },
    o780: function () {
        try {
o474.o468.o668 = false;
}catch(e){}
        try {
for (var o82 = 0; o82 < o474.o664.length; o82++) {
            var o477 = o474.o664[o82];
            try {
if (!o477) {
                try {
continue;
}catch(e){}
            }
}catch(e){}
            try {
o474.o483(o477);
}catch(e){}
        }
}catch(e){}
    },
    o625: function (o781, o782) {
        var o503 = 0;
        try {
if (o781) try {
o503 |= 292 | 73;
}catch(e){}
}catch(e){}
        try {
if (o782) try {
o503 |= 146;
}catch(e){}
}catch(e){}
        try {
return o503;
}catch(e){}
    },
    o783: function (o249, o784) {
        var o31 = o591.join.apply(null, o249);
        try {
if (o784 && o31[0] == '/') try {
o31 = o31.substr(1);
}catch(e){}
}catch(e){}
        try {
return o31;
}catch(e){}
    },
    o785: function (o750, o786) {
        try {
return o591.resolve(o786, o750);
}catch(e){}
    },
    o787: function (o31) {
        try {
return o591.normalize(o31);
}catch(e){}
    },
    o788: function (o31, o789) {
        var o30 = o474.o790(o31, o789);
        try {
if (o30.o791) {
            try {
return o30.o720;
}catch(e){}
        } else {
            try {
o465(o30.o586);
}catch(e){}
            try {
return null;
}catch(e){}
        }
}catch(e){}
    },
    o790: function (o31, o789) {
        // operate from within the context of the symlink's target
        try {
try {
            var o510 = o474.o603(o31, {
                o682: !o789
            });
            try {
o31 = o510.o31;
}catch(e){}
        } catch (o189) {}
}catch(e){}
        var o30 = {
            o686: false,
            o791: false,
            o586: 0,
            name: null,
            o31: null,
            o720: null,
            o792: false,
            o793: null,
            o794: null
        };
        try {
try {
            var o510 = o474.o603(o31, {
                o502: true
            });
            try {
o30.o792 = true;
}catch(e){}
            try {
o30.o793 = o510.o31;
}catch(e){}
            try {
o30.o794 = o510.o479;
}catch(e){}
            try {
o30.name = o591.o741(o31);
}catch(e){}
            try {
o510 = o474.o603(o31, {
                o682: !o789
            });
}catch(e){}
            try {
o30.o791 = true;
}catch(e){}
            try {
o30.o31 = o510.o31;
}catch(e){}
            try {
o30.o720 = o510.o479;
}catch(e){}
            try {
o30.name = o510.o479.name;
}catch(e){}
            try {
o30.o686 = o510.o31 === '/';
}catch(e){}
        } catch (o189) {
            try {
o30.o586 = o189.o671;
}catch(e){}
        }try {

}catch(e){};
}catch(e){}
        try {
return o30;
}catch(e){}
    },
    o795: function (o502, name, o781, o782) {
        var o31 = o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name);
        var o503 = o474.o625(o781, o782);
        try {
return o474.o606(o31, o503);
}catch(e){}
    },
    o796: function (o502, o31, o781, o782) {
        try {
o502 = typeof o502 === 'string' ? o502 : o474.o685(o502);
}catch(e){}
        var o249 = o31.split('/').reverse();
        try {
while (o249.length) {
            var o797 = o249.pop();
            try {
if (!o797) try {
continue;
}catch(e){}
}catch(e){}
            var o677 = o591.o592(o502, o797);
            try {
try {
                try {
o474.o606(o677);
}catch(e){}
            } catch (o189) {
                // ignore EEXIST
            }
}catch(e){}
            try {
o502 = o677;
}catch(e){}
        }
}catch(e){}
        try {
return o677;
}catch(e){}
    },
    o798: function (o502, name, o799, o781, o782) {
        var o31 = o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name);
        var o503 = o474.o625(o781, o782);
        try {
return o474.create(o31, o503);
}catch(e){}
    },
    o800: function (o502, name, o769, o781, o782, o549) {
        var o31 = name ? o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name) : o502;
        var o503 = o474.o625(o781, o782);
        var o479 = o474.create(o31, o503);
        try {
if (o769) {
            try {
if (typeof o769 === 'string') {
                var o801 = new Array(o769.length);
                try {
for (var o82 = 0, o760 = o769.length; o82 < o760; ++o82) try {
o801[o82] = o769.charCodeAt(o82);
}catch(e){}
}catch(e){}
                try {
o769 = o801;
}catch(e){}
            }
}catch(e){}
            // make sure we can write to the file
            try {
o474.o753(o479, o503 | 146);
}catch(e){}
            var o477 = o474.o41(o479, 'w');
            try {
o474.write(o477, o769, 0, o769.length, 0, o549);
}catch(e){}
            try {
o474.o483(o477);
}catch(e){}
            try {
o474.o753(o479, o503);
}catch(e){}
        }
}catch(e){}
        try {
return o479;
}catch(e){}
    },
    o774: function (o502, name, input, o473) {
        var o31 = o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name);
        var o503 = o474.o625(!!input, !!o473);
        try {
if (!o474.o774.o730) try {
o474.o774.o730 = 64;
}catch(e){}
}catch(e){}
        var o471 = o474.o732(o474.o774.o730++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        try {
o474.o475(o471, {
            o41: function (o477) {
                try {
o477.o482 = false;
}catch(e){}
            },
            o483: function (o477) {
                // flush any pending line data
                try {
if (o473 && o473.buffer && o473.buffer.length) {
                    try {
o473(10);
}catch(e){}
                }
}catch(e){}
            },
            o27: function (o477, buffer, o107, length, o485 /* ignored */ ) {
                var o487 = 0;
                try {
for (var o82 = 0; o82 < length; o82++) {
                    var o488;
                    try {
try {
                        try {
o488 = input();
}catch(e){}
                    } catch (o189) {
                        try {
throw new o474.o481(o341.o346);
}catch(e){}
                    }
}catch(e){}
                    try {
if (o488 === undefined && o487 === 0) {
                        try {
throw new o474.o481(o341.o352);
}catch(e){}
                    }
}catch(e){}
                    try {
if (o488 === null || o488 === undefined) try {
break;
}catch(e){}
}catch(e){}
                    try {
o487++;
}catch(e){}
                    try {
buffer[o107 + o82] = o488;
}catch(e){}
                }
}catch(e){}
                try {
if (o487) {
                    try {
o477.o479.o489 = Date.o4();
}catch(e){}
                }
}catch(e){}
                try {
return o487;
}catch(e){}
            },
            write: function (o477, buffer, o107, length, o485) {
                try {
for (var o82 = 0; o82 < length; o82++) {
                    try {
try {
                        try {
o473(buffer[o107 + o82]);
}catch(e){}
                    } catch (o189) {
                        try {
throw new o474.o481(o341.o346);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
                try {
if (length) {
                    try {
o477.o479.o489 = Date.o4();
}catch(e){}
                }
}catch(e){}
                try {
return o82;
}catch(e){}
            }
        });
}catch(e){}
        try {
return o474.o742(o31, o503, o471);
}catch(e){}
    },
    o802: function (o502, name, target, o781, o782) {
        var o31 = o591.o592(typeof o502 === 'string' ? o502 : o474.o685(o502), name);
        try {
return o474.o516(target, o31);
}catch(e){}
    },
    o803: function (o804) {
        try {
if (o804.o699 || o804.o698 || o804.link || o804.o524) try {
return true;
}catch(e){}
}catch(e){}
        var o805 = true;
        try {
if (typeof o40 !== 'undefined') {
            try {
throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
}catch(e){}
        } else try {
if (Module['read']) {
            // Command-line.
            try {
try {
                // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
                //          read() will try to parse UTF8.
                try {
o804.o524 = o192(Module['read'](o804.o38), true);
}catch(e){}
            } catch (o189) {
                try {
o805 = false;
}catch(e){}
            }
}catch(e){}
        } else {
            try {
throw new Error('Cannot load without read() or XMLHttpRequest.');
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
if (!o805) try {
o465(o341.o346);
}catch(e){}
}catch(e){}
        try {
return o805;
}catch(e){}
    },
    o806: function (o502, name, o38, o781, o782) {
        try {
if (typeof o40 !== 'undefined') {
            try {
if (!o20) try {
throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
}catch(e){}
}catch(e){}
            // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
            function o807() {
                try {
this.o808 = false;
}catch(e){}
                try {
this.o809 = [];
}catch(e){} // Loaded chunks. Index is the chunk number
            }
            try {
o807.prototype.get = function o810(o740) {
                try {
if (o740 > this.length - 1 || o740 < 0) {
                    try {
return undefined;
}catch(e){}
                }
}catch(e){}
                var o811 = o740 % this.o812;
                var o813 = Math.floor(o740 / this.o812);
                try {
return this.getter(o813)[o811];
}catch(e){}
            }
}catch(e){}
            try {
o807.prototype.o814 = function o815(getter) {
                try {
this.getter = getter;
}catch(e){}
            }
}catch(e){}
            try {
o807.prototype.o816 = function o817() {
                // Find length
                var o39 = new o40();
                try {
o39.o41('HEAD', o38, false);
}catch(e){}
                try {
o39.o42(null);
}catch(e){}
                try {
if (!(o39.o818 >= 200 && o39.o818 < 300 || o39.o818 === 304)) try {
throw new Error("Couldn't load " + o38 + ". Status: " + o39.o818);
}catch(e){}
}catch(e){}
                var o819 = Number(o39.o820("Content-length"));
                var o821;
                var o822 = (o821 = o39.o820("Accept-Ranges")) && o821 === "bytes";
                var o812 = 1024 * 1024; // Chunk size in bytes

                try {
if (!o822) try {
o812 = o819;
}catch(e){}
}catch(e){}

                // Function to get a range from the remote URL.
                var o823 = (function (from, o824) {
                    try {
if (from > o824) try {
throw new Error("invalid range (" + from + ", " + o824 + ") or no bytes requested!");
}catch(e){}
}catch(e){}
                    try {
if (o824 > o819 - 1) try {
throw new Error("only " + o819 + " bytes available! programmer error!");
}catch(e){}
}catch(e){}

                    // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                    var o39 = new o40();
                    try {
o39.o41('GET', o38, false);
}catch(e){}
                    try {
if (o819 !== o812) try {
o39.o825("Range", "bytes=" + from + "-" + o824);
}catch(e){}
}catch(e){}

                    // Some hints to the browser that we want binary data.
                    try {
if (typeof Uint8Array != 'undefined') try {
o39.o826 = 'arraybuffer';
}catch(e){}
}catch(e){}
                    try {
if (o39.o827) {
                        try {
o39.o827('text/plain; charset=x-user-defined');
}catch(e){}
                    }
}catch(e){}

                    try {
o39.o42(null);
}catch(e){}
                    try {
if (!(o39.o818 >= 200 && o39.o818 < 300 || o39.o818 === 304)) try {
throw new Error("Couldn't load " + o38 + ". Status: " + o39.o818);
}catch(e){}
}catch(e){}
                    try {
if (o39.o828 !== undefined) {
                        try {
return new Uint8Array(o39.o828 || []);
}catch(e){}
                    } else {
                        try {
return o192(o39.o43 || '', true);
}catch(e){}
                    }
}catch(e){}
                });
                var o829 = this;
                try {
o829.o814(function (o813) {
                    var o830 = o813 * o812;
                    var o260 = (o813 + 1) * o812 - 1; // including this byte
                    try {
o260 = Math.o87(o260, o819 - 1);
}catch(e){} // if datalength-1 is selected, this is the last block
                    try {
if (typeof (o829.o809[o813]) === "undefined") {
                        try {
o829.o809[o813] = o823(o830, o260);
}catch(e){}
                    }
}catch(e){}
                    try {
if (typeof (o829.o809[o813]) === "undefined") try {
throw new Error("doXHR failed!");
}catch(e){}
}catch(e){}
                    try {
return o829.o809[o813];
}catch(e){}
                });
}catch(e){}

                try {
this.o831 = o819;
}catch(e){}
                try {
this.o832 = o812;
}catch(e){}
                try {
this.o808 = true;
}catch(e){}
            }
}catch(e){}

            var o829 = new o807();
            try {
Object.defineProperty(o829, "length", {
                get: function () {
                    try {
if (!this.o808) {
                        try {
this.o816();
}catch(e){}
                    }
}catch(e){}
                    try {
return this.o831;
}catch(e){}
                }
            });
}catch(e){}
            try {
Object.defineProperty(o829, "chunkSize", {
                get: function () {
                    try {
if (!this.o808) {
                        try {
this.o816();
}catch(e){}
                    }
}catch(e){}
                    try {
return this.o832;
}catch(e){}
                }
            });
}catch(e){}

            var o799 = {
                o699: false,
                o524: o829
            };
        } else {
            var o799 = {
                o699: false,
                o38: o38
            };
        }
}catch(e){}

        var o479 = o474.o798(o502, name, o799, o781, o782);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        try {
if (o799.o524) {
            try {
o479.o524 = o799.o524;
}catch(e){}
        } else try {
if (o799.o38) {
            try {
o479.o524 = null;
}catch(e){}
            try {
o479.o38 = o799.o38;
}catch(e){}
        }
}catch(e){}
}catch(e){}
        // override each stream op with one that tries to force load the lazy file first
        var o476 = {};
        var keys = Object.keys(o479.o476);
        try {
keys.forEach(function (key) {
            var o833 = o479.o476[key];
            try {
o476[key] = function o834() {
                try {
if (!o474.o803(o479)) {
                    try {
throw new o474.o481(o341.o346);
}catch(e){}
                }
}catch(e){}
                try {
return o833.apply(null, arguments);
}catch(e){}
            };
}catch(e){}
        });
}catch(e){}
        // use a custom read function
        try {
o476.o27 = function o835(o477, buffer, o107, length, o548) {
            try {
if (!o474.o803(o479)) {
                try {
throw new o474.o481(o341.o346);
}catch(e){}
            }
}catch(e){}
            var o524 = o477.o479.o524;
            try {
if (o548 >= o524.length)
                try {
return 0;
}catch(e){}
}catch(e){}
            var o85 = Math.o87(o524.length - o548, length);
            try {
o73(o85 >= 0);
}catch(e){}
            try {
if (o524.slice) { // normal array
                try {
for (var o82 = 0; o82 < o85; o82++) {
                    try {
buffer[o107 + o82] = o524[o548 + o82];
}catch(e){}
                }
}catch(e){}
            } else {
                try {
for (var o82 = 0; o82 < o85; o82++) { // LazyUint8Array from sync binary XHR
                    try {
buffer[o107 + o82] = o524.get(o548 + o82);
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
return o85;
}catch(e){}
        };
}catch(e){}
        try {
o479.o476 = o476;
}catch(e){}
        try {
return o479;
}catch(e){}
    },
    o836: function (o502, name, o38, o781, o782, o837, o585, o838, o549) {
        try {
o839.o468();
}catch(e){}
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var o840 = name ? o591.resolve(o591.o592(o502, name)) : o502;

        function o841(o842) {
            function o843(o842) {
                try {
if (!o838) {
                    try {
o474.o800(o502, name, o842, o781, o782, o549);
}catch(e){}
                }
}catch(e){}
                try {
if (o837) try {
o837();
}catch(e){}
}catch(e){}
                try {
o334('cp ' + o840);
}catch(e){}
            }
            var o844 = false;
            try {
Module['preloadPlugins'].forEach(function (o845) {
                try {
if (o844) try {
return;
}catch(e){}
}catch(e){}
                try {
if (o845['canHandle'](o840)) {
                    try {
o845['handle'](o842, o840, o843, function () {
                        try {
if (o585) try {
o585();
}catch(e){}
}catch(e){}
                        try {
o334('cp ' + o840);
}catch(e){}
                    });
}catch(e){}
                    try {
o844 = true;
}catch(e){}
                }
}catch(e){}
            });
}catch(e){}
            try {
if (!o844) try {
o843(o842);
}catch(e){}
}catch(e){}
        }
        try {
o332('cp ' + o840);
}catch(e){}
        try {
if (typeof o38 == 'string') {
            try {
o839.o846(o38, function (o842) {
                try {
o841(o842);
}catch(e){}
            }, o585);
}catch(e){}
        } else {
            try {
o841(o38);
}catch(e){}
        }
}catch(e){}
    },
    o556: function () {
        try {
return o19.o556 || o19.o557 || o19.o558 || o19.o559;
}catch(e){}
    },
    o847: function () {
        try {
return 'EM_FS_' + o19.o848.o849;
}catch(e){}
    },
    o560: 20,
    o561: "FILE_DATA",
    o850: function (o851, o837, o585) {
        try {
o837 = o837 || function () {};
}catch(e){}
        try {
o585 = o585 || function () {};
}catch(e){}
        var o556 = o474.o556();
        try {
try {
            var o852 = o556.o41(o474.o847(), o474.o560);
        } catch (o189) {
            try {
return o585(o189);
}catch(e){}
        }
}catch(e){}
        try {
o852.o575 = function o853() {
            try {
o44.o45('creating db');
}catch(e){}
            var o573 = o852.o488;
            try {
o573.o581(o474.o561);
}catch(e){}
        };
}catch(e){}
        try {
o852.o584 = function o854() {
            var o573 = o852.o488;
            var o576 = o573.o576([o474.o561], 'readwrite');
            var o855 = o576.o580(o474.o561);
            var o856 = 0,
                o857 = 0,
                o616 = o851.length;

            function o843() {
                try {
if (o857 == 0) try {
o837();
}catch(e){}
                else try {
o585();
}catch(e){}
}catch(e){}
            }
            try {
o851.forEach(function (o31) {
                var o858 = o855.o613(o474.o790(o31).o720.o524, o31);
                try {
o858.o584 = function o859() {
                    try {
o856++;
}catch(e){}
                    try {
if (o856 + o857 == o616) try {
o843()
}catch(e){}
}catch(e){}
                };
}catch(e){}
                try {
o858.o585 = function o860() {
                    try {
o857++;
}catch(e){}
                    try {
if (o856 + o857 == o616) try {
o843()
}catch(e){}
}catch(e){}
                };
}catch(e){}
            });
}catch(e){}
            try {
o576.o585 = o585;
}catch(e){}
        };
}catch(e){}
        try {
o852.o585 = o585;
}catch(e){}
    },
    o861: function (o851, o837, o585) {
        try {
o837 = o837 || function () {};
}catch(e){}
        try {
o585 = o585 || function () {};
}catch(e){}
        var o556 = o474.o556();
        try {
try {
            var o852 = o556.o41(o474.o847(), o474.o560);
        } catch (o189) {
            try {
return o585(o189);
}catch(e){}
        }
}catch(e){}
        try {
o852.o575 = o585;
}catch(e){} // no database to load from
        try {
o852.o584 = function o854() {
            var o573 = o852.o488;
            try {
try {
                var o576 = o573.o576([o474.o561], 'readonly');
            } catch (o189) {
                try {
o585(o189);
}catch(e){}
                try {
return;
}catch(e){}
            }
}catch(e){}
            var o855 = o576.o580(o474.o561);
            var o856 = 0,
                o857 = 0,
                o616 = o851.length;

            function o843() {
                try {
if (o857 == 0) try {
o837();
}catch(e){}
                else try {
o585();
}catch(e){}
}catch(e){}
            }
            try {
o851.forEach(function (o31) {
                var o862 = o855.get(o31);
                try {
o862.o584 = function o863() {
                    try {
if (o474.o790(o31).o791) {
                        try {
o474.o513(o31);
}catch(e){}
                    }
}catch(e){}
                    try {
o474.o800(o591.o684(o31), o591.o741(o31), o862.o488, true, true, true);
}catch(e){}
                    try {
o856++;
}catch(e){}
                    try {
if (o856 + o857 == o616) try {
o843();
}catch(e){}
}catch(e){}
                };
}catch(e){}
                try {
o862.o585 = function o864() {
                    try {
o857++;
}catch(e){}
                    try {
if (o856 + o857 == o616) try {
o843()
}catch(e){}
}catch(e){}
                };
}catch(e){}
            });
}catch(e){}
            try {
o576.o585 = o585;
}catch(e){}
        };
}catch(e){}
        try {
o852.o585 = o585;
}catch(e){}
    }
};
function o1()
{
    try {
o2.o3("condition, i = " + o0);
}catch(e){}
    try {
return o0 < 10;
}catch(e){}
}

try {
o2.o3("--- test 1 ---");
}catch(e){}
try {
do
{
    try {
++o0;
}catch(e){}
    try {
if(o0 > 5)
        try {
continue;
}catch(e){}
}catch(e){}
    try {
o2.o3("after continue: " + o0++);
}catch(e){}
} while(o1());
}catch(e){}

try {
o360.prototype;
}catch(e){}

try {
o2.o3("--- test 2 ---");
}catch(o63){}
try {
do
{
    try {
switch(o0++)
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            try {
continue;
}catch(e){}
        default:
            try {
Module['stdout']("default");
}catch(e){}

        case 9:
            try {
break;
}catch(e){}
    }
}catch(e){}
} while(o1());
}catch(e){}
try {
o2.o3("done");
}catch(e){}
