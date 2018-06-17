//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o31 = o605.o606(o635.o643(o517), name);
var o1 = new Array();
var o2 = new o1137("muck", 3.2, 0, 18);
try {
o41[o37]o32[o38]function() {
                    try {
return {
                        next: function () { 
                            try {
throw new o24('failure inside iterator');
}catch(e){}
                        }
                    };
}catch(e){}
                }[o38] = "minus 1";
}catch(e){}

try {
o3.o4("Store a single item in a");
}catch(e){}
try {
o421.o390 = 10;
}catch(e){}
try { "use strict"; } catch(e) {}

try { {
o865.o598 = function o867() {
            var o587 = o865.o503;
            try {
try {
                var o590 = o587.o590([o489.o576], 'readonly');
            } catch (o189) {
                try {
o599(o189);
}catch(e){}
                try {
return;
}catch(e){}
            }
}catch(e){}
            var o868 = o590.o594(o489.o576);
            var o869 = 0,
                o870 = 0,
                o630 = o864.length;

            function o856() {
                try {
if (o870 == 0) try {
o850();
}catch(e){}
                else try {
o599();
}catch(e){}
}catch(e){}
            }
            try {
o864.forEach(function (o31) {
                var o875 = o868.get(o31);
                try {
o875.o598 = function o876() {
                    try {
if (o489.o804(o31).o805) {
                        try {
o489.o528(o31);
}catch(e){}
                    }
}catch(e){}
                    try {
o489.o814(o605.o698(o31), o605.o755(o31), o875.o503, true, true, true);
}catch(e){}
                    try {
o869++;
}catch(e){}
                    try {
if (o869 + o870 == o630) try {
o856();
}catch(e){}
}catch(e){}
                };
}catch(e){}
                try {
o875.o599 = function o877() {
                    try {
o870++;
}catch(e){}
                    try {
if (o869 + o870 == o630) try {
o856()
}catch(e){}
}catch(e){}
                };
}catch(e){}
            });
}catch(e){}
            try {
o590.o599 = o599;
}catch(e){}
        };
} } catch(e) {}
try {
o1[3] = 99;
}catch(e){}
try {
o3.o4(o1[3]);
}catch(e){}

try {
for (var o5 = -1; o5 < o2.length; o5++) {
    try {
o3.o4(o2[o5]);
}catch(e){}
}
}catch(e){}

// Test boolean expressions in an initializer
var o6 = {}, o7 = false;
try {
o3.o4([o6||o7]);
}catch(e){}
try {
o3.o4([o6&&o7]);
}catch(e){}
try {
o3.o4([o6 ? o7 : o6]);
}catch(e){}
try {
o3.o4([o7 ? o6 : o7]);
}catch(e){}
try {
o3.o4([o7||o6]);
}catch(e){}
try {
o3.o4(o7&&o6);
}catch(e){}
try {
o3.o4([o6||o7, o6&&o7, o6 ? o7 : o6, o7 ? o6 : o7, o7||o6, o7&&o6]);
}catch(e){}

// Test some boundary property names
var o8 = [];

try {
o8["4294967294"] = 100;
}catch(e){}
try {
o3.o4(o8["4294967294"]);
}catch(e){}

try {
o8["4294967295"] = 101;
}catch(e){}
try {
o3.o4(o8["4294967295"]);
}catch(e){}

try {
o8["4294967296"] = 102;
}catch(e){}
try {
o3.o4(o8["4294967296"]);
}catch(e){}

try {
o8["4088701331"] = 103;
}catch(e){}
try {
o3.o4(o8["4088701331"]);
}catch(e){}

try {
o8["40887013312"] = 104;
}catch(e){}
try {
o3.o4(o8["40887013312"]);
}catch(e){}

try {
o8["4088.7013"] = 105;
}catch(e){}
try {
o3.o4(o8["4088.7013"]);
}catch(e){}

try {
o8["408870133X"] = 106;
}catch(e){}
try {
o3.o4(o8["408870133X"]);
}catch(e){}
