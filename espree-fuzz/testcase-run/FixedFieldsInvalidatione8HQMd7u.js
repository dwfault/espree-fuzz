//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("Testing invalidation due to overwrite:");
}catch(o189){}

var o63

var o524 = o477.o479.o524;
try {
try { try {
write(Boolean(false) >= undefined);
}catch(e){} } catch(e) {}
}catch(e){}
try {
o7.o5 = o146;
}catch(e){}

var o16 = function(o10) try { {
            var o563 = o107;
            try {
if (o565 === 1) { // SEEK_CUR.
                try {
o563 += o492.o563;
}catch(e){}
            } else try {
if (o565 === 2) { // SEEK_END.
                try {
if (o489.o540(o492.o494.o518)) {
                    try {
try {
                        var o609 = o641.o671(o492.o663);
                        try {
o563 += o609.o85;
}catch(e){}
                    } catch (o189) {
                        try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
}catch(e){}

            try {
if (o563 < 0) {
                try {
throw new o489.o496(o352.o375);
}catch(e){}
            }
}catch(e){}

            try {
o492.o563 = o563;
}catch(e){}
            try {
return o563;
}catch(e){}
        } } catch(e) {}

try {
o8(o7);
}catch(e){}

try {
o8(o7);
}catch(e){}

try {
o2.o6 = function () {
    try {
return (this.o4 - this.o5) + " (overwritten)";
}catch(e){}
}
}catch(e){}

try {
o8(o7);
}catch(e){}

try {
o2.add = function () {
    try {
return (this.o4 + this.o5) + " (overwritten)";
}catch(e){}
}
}catch(e){}

try {
o8(o7);
}catch(e){}

var o2 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o10: 0,
    add: function () {
        try {
return (this.o4 + this.o5) + " (original)";
}catch(e){}
    },
    o6: function () {
        try {
return (this.o4 - this.o5) + " (original)";
}catch(e){}
    }
}

var o7 = Object.create(o2);
try {
o7.o4 = 0;
}catch(e){}
try {
o7.o5 = 1;
}catch(e){}

var o11 = function () {
    try {
return (this.o4 - this.o5) + " (overwritten)";
}catch(e){}
}

var o8 = function (o9, o12) {
    try {
o0.o1("x + y = " + o9.add());
}catch(e){}
    try {
if (o12) {
        try {
o2.o6 = o11;
}catch(e){}
    }
}catch(e){}
    try {
o0.o1("x - y = " + o9.o6());
}catch(e){}
}

try {
o8(o7, false);
}catch(e){}

try {
o8(o7, false);
}catch(e){}

try {
o8(o7, true);
}catch(e){}

try {
o0.o1();
}catch(e){}


try {
o0.o1("Testing invalidation due to delete:");
}catch(e){}

var length = o194.length

var o2 = Object.create(o13, {
    // Make sure we branch to a unique type path to avoid false sharing
    o15: { value: 0 },
    add: {
        value: function () {
            try {
return (this.o4 + this.o5) + " (from proto1)";
}catch(e){}
        },
        writable: true, configurable: true
    },
    o6: {
        value: function () {
            try {
return (this.o4 - this.o5) + " (from proto1)";
}catch(e){}
        },
        writable: true, configurable: true
    }
});

var o7 = Object.create(o2);
try {
o7.o4 = 0;
}catch(e){}
try {
o7.o5 = 1;
}catch(e){}

function o16(o9) {
    try {
o0.o1("x + y = " + o9.add());
}catch(e){}
    try {
o0.o1("x - y = " + o9.o6());
}catch(e){}
}

try {
o16(o7);
}catch(e){}

try {
o16(o7);
}catch(e){}

try {
delete o2.o6;
}catch(e){}

try {
o16(o7);
}catch(e){}

try {
delete o2.add;
}catch(e){}

try {
o16(o7);
}catch(e){}

try {
o0.o1();
}catch(e){}


try {
o0.o1("Testing invalidation due to shadowing:");
}catch(e){}

var o13 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o17: 0,
    add: function () {
        try {
return (this.o4 + this.o5) + " (from proto2)";
}catch(e){}
    },
    o6: function () {
        try {
return (this.o4 - this.o5) + " (from proto2)";
}catch(e){}
    }
}

var o2 = Object.create(o13, {
    // Make sure we branch to a unique type path to avoid false sharing
    o18: { value: 0 },
});

var o1073 = 0;
try {
o7.o4 = 0;
}catch(e){}
try {
o7.o5 = 1;
}catch(e){}

function o19(o9) {
    try {
o0.o1("x + y = " + o9.add());
}catch(e){}
    try {
o0.o1("x - y = " + o9.o6());
}catch(e){}
}

try {
o19(o7);
}catch(e){}

try {
o19(o7);
}catch(e){}

try {
o2.o6 = function () {
    try {
return (this.o4 - this.o5) + " (from proto1)";
}catch(e){}
};
}catch(e){}

try {
o19(o7);
}catch(e){}

try {
o2.add = function () {
    try {
return (this.o4 + this.o5) + " (from proto1)";
}catch(e){}
};
}catch(e){}

try {
o19(o7);
}catch(e){}

try {
o0.o1();
}catch(e){}