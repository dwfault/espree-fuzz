/*
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE below for additional
 *  information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/******* NOTICE *********

Apache Harmony
Copyright 2006, 2010 The Apache Software Foundation.

This product includes software developed at
The Apache Software Foundation (http://www.apache.org/).

Portions of Apache Harmony were originally developed by
Intel Corporation and are licensed to the Apache Software
Foundation under the "Software Grant and Corporate Contribution
License Agreement" and for which the following copyright notices
apply
         (C) Copyright 2005 Intel Corporation
         (C) Copyright 2005-2006 Intel Corporation
         (C) Copyright 2006 Intel Corporation


The following copyright notice(s) were affixed to portions of the code
with which this file is now or was at one time distributed
and are placed here unaltered.

(C) Copyright 1997,2004 International Business Machines Corporation.
All rights reserved.

(C) Copyright IBM Corp. 2003. 


This software contains code derived from UNIX V7, Copyright(C)
Caldera International Inc.

************************/

var o0 = 565;

if (typeof (o1) === "undefined") {
    var o1 = {
        o2: print
    }
}
var print = function () {};

var o4 = o4 || {};
o4.o5 = (function() {
  return o4.o5       ||
         o4.o6    ||
         o4.o7     ||
         o4.o8      ||
         o4.o9 ||
         Date.o5;
})();


function o11(o12) {
    o1.o2("### SCORE: " + (100 * o0 / o12));
}

var o13 = {};
o13.o14 = {
    o15: o4.o5,
    o11: o11
};

var o16 = o13.o14.o15();

////////////////////////////////////////////////////////////////////////////////
// Test
////////////////////////////////////////////////////////////////////////////////

//@ runDefault

// This code is a manual translation of Apache Harmony's HashMap class to
// JavaScript.

var o17 = (function() {
    var o18 = 16;
    
    function o19(o20)
    {
        if (o20 >= 1 << 30)
            return 1 << 30;
        if (o20 == 0)
            return 16;
        o20 = o20 - 1;
        o20 |= o20 >> 1;
        o20 |= o20 >> 2;
        o20 |= o20 >> 4;
        o20 |= o20 >> 8;
        o20 |= o20 >> 16;
        return o20 + 1;
    }
    
    function o21(key)
    {
        switch (typeof key) {
        case "undefined":
            return 0;
        case "object":
            if (!key)
                return 0;
        case "function":
            return key.o23();
        case "boolean":
            return key | 0;
        case "number":
            if ((key | 0) == key)
                return key;
            key = "" + key; // Compute string hash of the double. It's the best we can do.
        case "string":
            // source: http://en.wikipedia.org/wiki/Java_hashCode()#Sample_implementations_of_the_java.lang.String_algorithm
            var o24 = 0;
            var o25 = key.length;
            for (var index = 0; index < o25; index++) {
                o24 = (((31 * o24) | 0) + key.charCodeAt(index)) | 0;
            }
            return o24;
        default:
            throw new Error("Internal error: Bad JavaScript value type");
        }
    }
    
    function o30(o31, o32)
    {
        if (typeof o31 != typeof o32)
            return false;
        switch (typeof o31) {
        case "object":
            if (!o31)
                return !o32;
        case "function":
            switch (typeof o32) {
            case "object":
            case "function":
                return o31.o30(o32);
            default:
                return false;
            }
        default:
            return o31 == o32;
        }
    }
    
    function o33(key, o34, value)
    {
        this.o36 = key;
        this.o37 = value;
        this.o38 = o34;
        this.o39 = null;
    }

    o33.prototype = {
        o41: function()
        {
            var o42 = new o33(this.o36, this.o43, this.o37);
            if (this.o39)
                o42.o39 = this.o39.o41();
            return o42;
        },
        
        toString: function()
        {
            return this.o36 + "=" + this.o37;
        },
        
        get key()
        {
            return this.o36;
        },
        
        get value()
        {
            return this.o37;
        }
    };
    
    function o45(map)
    {
        this.o47 = map;
        this.o48 = map.o49;
        this.o50 = null;
        this.o51 = null;
        this.o52 = null;
        this.o53 = 0;
    }
    
    o45.prototype = {
        o54: function()
        {
            if (this.o50)
                return true;
            while (this.o53 < this.o47.o55.length) {
                if (!this.o47.o55[this.o53])
                    this.o53++;
                else
                    return true;
            }
            return false;
        },
        
        o56: function()
        {
            if (this.o48 != this.o47.o49)
                throw new Error("Concurrent HashMap modification detected");
        },
        
        o57: function()
        {
            this.o56();
            if (!this.o54())
                throw new Error("No such element");
            if (!this.o50) {
                this.o51 = this.o47.o55[this.o53++];
                this.o50 = this.o51.o39;
                this.o52 = null;
                return;
            }
            if (this.o51)
                this.o52 = this.o51;
            this.o51 = this.o50;
            this.o50 = this.o50.o39;
        },
        
        o58: function()
        {
            this.o56();
            if (!this.o51)
                throw new Error("Illegal state");
            if (!this.o52) {
                var index = this.o51.o38 & (this.o47.o55.length - 1);
                this.o47.o55[index] = this.o47.o55[index].o39;
            } else
                this.o52.o39 = this.o51.o39;
            this.o51 = null;
            this.o48++;
            this.o47.o49++;
            this.o47.o59--;
        }
    };
    
    function o60(map)
    {
        o45.call(this, map);
    }
    
    o60.prototype = {
        next: function()
        {
            this.o57();
            return this.o51;
        }
    };
    o60.prototype.__proto__ = o45.prototype;
    
    function o64(map)
    {
        o45.call(this, map);
    }
    
    o64.prototype = {
        next: function()
        {
            this.o65();
            return this.o51.o36;
        }
    };
    o64.prototype.__proto__ = o45.prototype;
    
    function o66(map)
    {
        o45.call(this, map);
    }
    
    o66.prototype = {
        next: function()
        {
            this.o65();
            return this.o51.o37;
        }
    };
    o66.prototype.__proto__ = o45.prototype;
    
    function o67(map)
    {
        this.o47 = map;
    }
    
    o67.prototype = {
        o68: function()
        {
            return this.o47.o59;
        },
        
        o69: function()
        {
            this.o47.o69();
        },
        
        o58: function(o70)
        {
            var o71 = this.o47.o72(o70.key);
            if (!o71)
                return false;
            if (!o30(o71.o37, o70.value))
                return false;
            this.o47.o73(o71);
            return true;
        },
        
        o74: function(o70)
        {
            var o71 = this.o47.o72(o70.key);
            if (!o71)
                return false;
            return o30(o71.o37, o70.value);
        },
        
        iterator: function()
        {
            return new o60(this.o47);
        }
    };
    
    function o76(map)
    {
        this.o47 = map;
    }
    
    o76.prototype = {
        o74: function(o70)
        {
            return this.o47.o74(o70);
        },
        
        o68: function()
        {
            return this.o47.o59;
        },
        
        o69: function()
        {
            this.o47.o69();
        },
        
        o58: function(key)
        {
            return !!this.o47.o58(key);
        },
        
        iterator: function()
        {
            return new o64(this.o47);
        }
    };
    
    function o77(map)
    {
        this.o47 = map;
    }
    
    o77.prototype = {
        o74: function(o70)
        {
            return this.o47.o78(o70);
        },
        
        o68: function()
        {
            return this.o47.o59;
        },
        
        o69: function()
        {
            this.o47.o69();
        },
        
        iterator: function()
        {
            return new o66(this.o47);
        }
    };
    
    function o17(o79, o80)
    {
        if (o79 == null)
            o79 = o18;
        if (o80 == null)
            o80 = 0.75;
        
        if (o79 < 0)
            throw new Error("Invalid argument to HashMap constructor: capacity is negative");
        if (o80 <= 0)
            throw new Error("Invalid argument to HashMap constructor: loadFactor is not positive");
        
        this.o81 = o19(o79);
        this.o59 = 0;
        this.o55 = new Array(this.o79);
        this.o83 = o80;
        this.o49 = 0;
        this.o84();
    }
    
    o17.prototype = {
        o84: function()
        {
            this.o85 = (this.o55.length * this.o83) | 0;
        },
        
        o69: function()
        {
            if (!this.o59)
                return;
            
            this.o59 = 0;
            for (var o86 = this.o55.length; o86--;)
                this.o55[o86] = null;
            this.o49++;
        },
        
        o41: function()
        {
            var o42 = new o17(this.o55.length, this.o83);
            o42.o87(this);
            return o42;
        },
        
        o88: function(key)
        {
            return !!this.o72(key);
        },
        
        o78: function(value)
        {
            for (var o86 = this.o55.length; o86--;) {
                for (var o71 = this.o55[o86]; o71; o71 = o71.o39) {
                    if (o30(value, o71.o37))
                        return true;
                }
            }
            return false;
        },
        
        o89: function()
        {
            return new o67(this);
        },
        
        get: function(key)
        {
            var o71 = this.o72(key);
            if (o71)
                return o71.o37;
            return null;
        },
        
        o72: function(key)
        {
            var o34 = o21(key);
            var index = o34 & (this.o55.length - 1);
            return this.o91(key, index, o34);
        },
        
        o91: function(key, index, o92)
        {
            var o71 = this.o55[index];
            while (o71 && (o71.o38 != o92 || !o30(key, o71.o36)))
                o71 = o71.o39;
            return o71;
        },
        
        o93: function()
        {
            return !this.o59;
        },
        
        o94: function()
        {
            return new o76(this);
        },
        
        o95: function(key, value)
        {
            var o34 = o21(key);
            var index = o34 & (this.o55.length - 1);
            var o71 = this.o91(key, index, o34);
            if (!o71) {
                this.o49++;
                o71 = this.o96(key, index, o34);
                if (++this.o59 > this.o85)
                    this.o97();
            }
            
            var o42 = o71.o37;
            o71.o37 = value;
            return o42;
        },
        
        o96: function(key, index, o34)
        {
            var o71 = new o33(key, o34, null);
            o71.o39 = this.o55[index];
            this.o55[index] = o71;
            return o71;
        },
        
        o87: function(map)
        {
            if (map.o93())
                return;
            for (var o98 = map.o89().iterator(); o98.o54();) {
                var o71 = o98.next();
                o95(o71.key, o71.value);
            }
        },
        
        o97: function(o79)
        {
            if (o79 == null)
                o79 = this.o55.length;
            
            var length = o19(!o79 ? 1 : o79 << 1);
            var o99 = new Array(length);
            for (var o86 = 0; o86 < this.o55.length; ++o86) {
                var o71 = this.o55[o86];
                this.o55[o86] = null;
                while (o71) {
                    var index = o71.o38 & (length - 1);
                    var next = o71.o39;
                    o71.o39 = o99[index];
                    o99[index] = o71;
                    o71 = next;
                }
            }
            this.o55 = o99;
            this.o84();
        },
        
        o58: function(key)
        {
            var o71 = this.o100(key);
            if (!o71)
                return null;
            return o71.o37;
        },
        
        o73: function(o71)
        {
            var index = o71.o38 & (this.o55.length - 1);
            var o101 = this.o55[index];
            if (o101 == o71)
                this.o55[index] = o71.o39;
            else {
                while (o101.o39 != o71)
                    o101 = o101.o39;
                o101.o39 = o71.o39;
            }
            this.o49++;
            this.o59--;
        },
        
        o100: function(key)
        {
            var o34 = o21(key);
            var index = o34 & (this.o55.length - 1);
            var o71 = this.o55[index];
            var o102 = null;
            while (o71 != null && !(o71.o38 == o34 && o30(key, o71.o36))) {
                o102 = o71;
                o71 = o71.o39;
            }
            if (!o71)
                return null;
            if (!o102)
                this.o55[index] = o71.o39;
            else
                o102.o39 = o71.o39;
            this.o49++;
            this.o59--;
            return o71;
        },
        
        o68: function()
        {
            return this.o59;
        },
        
        values: function()
        {
            return new o77(this);
        }
    };
    
    return o17;
})();

var map = new o17();
var o104 = 500000;

for (var o86 = 0; o86 < o104; ++o86)
    map.o95(o86, 42);

var o42 = 0;
for (var o105 = 0; o105 < 5; ++o105) {
    for (var o86 = 0; o86 < o104; ++o86)
        o42 += map.get(o86);
}

var o106 = 0;
var o107 = 0;
for (var iterator = map.o89().iterator(); iterator.o54();) {
    var o71 = iterator.next();
    o106 += o71.key;
    o107 += o71.value;
}

if (o42 != 105000000)
    throw "Error: result = " + o42;
if (o106 != 124999750000)
    throw "Error: keySum = " + o106;
if (o107 != 21000000)
    throw "Error: valueSum = " + o107;

////////////////////////////////////////////////////////////////////////////////
// Runner
////////////////////////////////////////////////////////////////////////////////
var o108 = o13.o14.o15();
o13.o14.o11(o108 - o16);
