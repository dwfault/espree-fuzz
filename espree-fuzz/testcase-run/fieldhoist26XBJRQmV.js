//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o3 = 0;
    try {
(o421.o368 + 1) & 0xFF;
}catch(e){}
    var o3 = 0;

    try {
for (var o2 = 4; o2 < 10; o1.o3++)
    {
        try {
if (typeof o116 === 'number' == o113("Illegal op code 0xE3 called, pausing emulation.", 2))
        {
            var o554 = {
    o555: {},
    o556: function () {
        try {
return function (o421) {try {
"use strict";
}catch(e){}
    var o581 = o421.o390[o421.o148](o421, o421.o148);
    var o598 = ((o581 & 0x01) == 0x01);
    try {
o581 = ((o421.o367) ? 0x80 : 0) | (o581 >> 1);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o391[o421.o148](o421, o421.o148, o581);
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o581 == 0);
}catch(e){}
  };
}catch(e){}
    },
    o560: 21,
    o4: "FILE_DATA",
    o500: function (o500) try { try {
write(+0 >= null);
}catch(e){} } catch(e) {},
    o562: function (o500, o563, o278) {
        try {
o554.o564(o500, function (o565, o566) {
            try {
if (o565) try {
return o278(o565);
}catch(e){}
}catch(e){}

            try {
o554.o567(o500, function (o565, o568) {
                try {
if (o565) try {
return o278(o565);
}catch(e){}
}catch(e){}

                var o569 = o563 ? o568 : o566;
                var o570 = o563 ? o566 : o568;

                try {
o554.o571(o569, o570, o278);
}catch(e){}
            });
}catch(e){}
        });
}catch(e){}
    },
    o572: function (name, o278) {
        // check the cache first
        var o573 = o554.o555[name];
        try {
if (o573) {
            try {
return o278(null, o573);
}catch(e){}
        }
}catch(e){}

        var o574;
        try {
try {
            try {
o574 = o554.o556().o41(name, o554.o560);
}catch(e){}
        } catch (o189) {
            try {
return o278(o189);
}catch(e){}
        }
}catch(e){}
        try {
o574.o575 = function (o189) {
            var o573 = o189.target.o488;
            var o576 = o189.target.o576;

            var o577;

            try {
if (o573.o578.o579(o554.o561)) {
                try {
o577 = o576.o580(o554.o561);
}catch(e){}
            } else {
                try {
o577 = o573.o581(o554.o561);
}catch(e){}
            }
}catch(e){}

            try {
o577.o582('timestamp', 'timestamp', {
                o583: false
            });
}catch(e){}
        };
}catch(e){}
        try {
o574.o584 = function () {
            try {
o573 = o574.o488;
}catch(e){}

            // add to the cache
            try {
o554.o555[name] = o573;
}catch(e){}
            try {
o278(null, o573);
}catch(e){}
        };
}catch(e){}
        try {
o574.o585 = function () {
            try {
o278(this.o586);
}catch(e){}
        };
}catch(e){}
    },
    o564: function (o500, o278) {
        var entries = {};

        function o587(o588) {
            try {
return o588 !== '.' && o588 !== '..';
}catch(e){}
        }try {
;
}catch(e){}

        function o589(o590) {
            try {
return function (o588) {
                try {
return o591.o592(o590, o588);
}catch(e){}
            }
}catch(e){}
        }try {
;
}catch(e){}

        var o593 = o474.o515(o500.o594).filter(o587).map(o589(o500.o594));

        try {
while (o593.length) {
            var o31 = o593.pop();
            var o595;

            try {
try {
                try {
o595 = o474.o595(o31);
}catch(e){}
            } catch (o189) {
                try {
return o278(o189);
}catch(e){}
            }
}catch(e){}

            try {
if (o474.o523(o595.o503)) {
                try {
o593.push.apply(o593, o474.o515(o31).filter(o587).map(o589(o31)));
}catch(e){}
            }
}catch(e){}

            try {
entries[o31] = {
                o489: o595.o536
            };
}catch(e){}
        }
}catch(e){}

        try {
return o278(null, {
            type: 'local',
            entries: entries
        });
}catch(e){}
    },
    o567: function (o500, o278) {
        var entries = {};

        try {
o554.o572(o500.o594, function (o565, o573) {
            try {
if (o565) try {
return o278(o565);
}catch(e){}
}catch(e){}

            var o576 = o573.o576([o554.o561], 'readonly');
            try {
o576.o585 = function () {
                try {
o278(this.o586);
}catch(e){}
            };
}catch(e){}

            var o596 = o576.o580(o554.o561);
            var index = o596.index('timestamp');

            try {
index.o597().o584 = function (o598) {
                var o599 = o598.target.o488;

                try {
if (!o599) {
                    try {
return o278(null, {
                        type: 'remote',
                        o573: o573,
                        entries: entries
                    });
}catch(e){}
                }
}catch(e){}

                try {
entries[o599.o600] = {
                    o489: o599.key
                };
}catch(e){}

                try {
o599.o601();
}catch(e){}
            };
}catch(e){}
        });
}catch(e){}
    },
    o602: function (o31, o278) {
        var o595, o479;

        try {
try {
            var o510 = o474.o603(o31);
            try {
o479 = o510.o479;
}catch(e){}
            try {
o595 = o474.o595(o31);
}catch(e){}
        } catch (o189) {
            try {
return o278(o189);
}catch(e){}
        }
}catch(e){}

        try {
if (o474.o523(o595.o503)) {
            try {
return o278(null, {
                o489: o595.o536,
                o503: o595.o503
            });
}catch(e){}
        } else try {
if (o474.o525(o595.o503)) {
            try {
return o278(null, {
                o489: o595.o536,
                o503: o595.o503,
                o524: o479.o524
            });
}catch(e){}
        } else {
            try {
return o278(new Error('node type not supported'));
}catch(e){}
        }
}catch(e){}
}catch(e){}
    },
    o604: function (o31, o605, o278) {
        try {
try {
            try {
if (o474.o523(o605.o503)) {
                try {
o474.o606(o31, o605.o503);
}catch(e){}
            } else try {
if (o474.o525(o605.o503)) {
                try {
o474.o607(o31, o605.o524, {
                    o608: 'binary',
                    o549: true
                });
}catch(e){}
            } else {
                try {
return o278(new Error('node type not supported'));
}catch(e){}
            }
}catch(e){}
}catch(e){}

            try {
o474.o609(o31, o605.o489, o605.o489);
}catch(e){}
        } catch (o189) {
            try {
return o278(o189);
}catch(e){}
        }
}catch(e){}

        try {
o278(null);
}catch(e){}
    },
    o610: function (o31, o278) {
        try {
try {
            var o510 = o474.o603(o31);
            var o595 = o474.o595(o31);

            try {
if (o474.o523(o595.o503)) {
                try {
o474.o514(o31);
}catch(e){}
            } else try {
if (o474.o525(o595.o503)) {
                try {
o474.o513(o31);
}catch(e){}
            }
}catch(e){}
}catch(e){}
        } catch (o189) {
            try {
return o278(o189);
}catch(e){}
        }
}catch(e){}

        try {
o278(null);
}catch(e){}
    },
    o611: function (o596, o31, o278) {
        var o574 = o596.get(o31);
        try {
o574.o584 = function (o598) {
            try {
o278(null, o598.target.o488);
}catch(e){}
        };
}catch(e){}
        try {
o574.o585 = function () {
            try {
o278(this.o586);
}catch(e){}
        };
}catch(e){}
    },
    o612: function (o596, o31, o605, o278) {
        var o574 = o596.o613(o605, o31);
        try {
o574.o584 = function () {
            try {
o278(null);
}catch(e){}
        };
}catch(e){}
        try {
o574.o585 = function () {
            try {
o278(this.o586);
}catch(e){}
        };
}catch(e){}
    },
    o614: function (o596, o31, o278) {
        var o574 = o596.o615(o31);
        try {
o574.o584 = function () {
            try {
o278(null);
}catch(e){}
        };
}catch(e){}
        try {
o574.o585 = function () {
            try {
o278(this.o586);
}catch(e){}
        };
}catch(e){}
    },
    1: "b"
};
            try {
o421.o365 = o2;
}catch(e){}
            var o121 = this.o348;
            try {
this.o555;
}catch(e){}
        }
        else
        {
            try {
o208Module.aborto1("DOM_KEY_LOCATION_NUMPAD").abort = o3;
}catch(o1){}
        }
}catch(e){}
    }
}catch(e){}
    try {
return o3;
}catch(e){}
}
var o510 = o474.o603(o594, {
                o674: false
            });
try {
if (o1("resizeWindow"))
{
    try {
o7.o8("PASS");
}catch(e){}
}
else
{
    try {
o7.o8("FAIL: got " + o6);
}catch(e){}
}
}catch(e){}
