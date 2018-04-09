//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Testing invalidation due to overwrite:");

var o2 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o3: 0,
    add: function () {
        return (this.o4 + this.o5) + " (original)";
    },
    o6: function () {
        return (this.o4 - this.o5) + " (original)";
    }
}

var o7 = Object.create(o2);
o7.o4 = 0;
o7.o5 = 1;

var o8 = function (o9) {
    o0.o1("x + y = " + o9.add());
    o0.o1("x - y = " + o9.o6());
}

o8(o7);

o8(o7);

o2.o6 = function () {
    return (this.o4 - this.o5) + " (overwritten)";
}

o8(o7);

o2.add = function () {
    return (this.o4 + this.o5) + " (overwritten)";
}

o8(o7);

var o2 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o10: 0,
    add: function () {
        return (this.o4 + this.o5) + " (original)";
    },
    o6: function () {
        return (this.o4 - this.o5) + " (original)";
    }
}

var o7 = Object.create(o2);
o7.o4 = 0;
o7.o5 = 1;

var o11 = function () {
    return (this.o4 - this.o5) + " (overwritten)";
}

var o8 = function (o9, o12) {
    o0.o1("x + y = " + o9.add());
    if (o12) {
        o2.o6 = o11;
    }
    o0.o1("x - y = " + o9.o6());
}

o8(o7, false);

o8(o7, false);

o8(o7, true);

o0.o1();


o0.o1("Testing invalidation due to delete:");

var o13 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o14: 0,
    add: function () {
        return (this.o4 + this.o5) + " (from proto2)";
    },
    o6: function () {
        return (this.o4 - this.o5) + " (from proto2)";
    }
}

var o2 = Object.create(o13, {
    // Make sure we branch to a unique type path to avoid false sharing
    o15: { value: 0 },
    add: {
        value: function () {
            return (this.o4 + this.o5) + " (from proto1)";
        },
        writable: true, configurable: true
    },
    o6: {
        value: function () {
            return (this.o4 - this.o5) + " (from proto1)";
        },
        writable: true, configurable: true
    }
});

var o7 = Object.create(o2);
o7.o4 = 0;
o7.o5 = 1;

function o16(o9) {
    o0.o1("x + y = " + o9.add());
    o0.o1("x - y = " + o9.o6());
}

o16(o7);

o16(o7);

delete o2.o6;

o16(o7);

delete o2.add;

o16(o7);

o0.o1();


o0.o1("Testing invalidation due to shadowing:");

var o13 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o17: 0,
    add: function () {
        return (this.o4 + this.o5) + " (from proto2)";
    },
    o6: function () {
        return (this.o4 - this.o5) + " (from proto2)";
    }
}

var o2 = Object.create(o13, {
    // Make sure we branch to a unique type path to avoid false sharing
    o18: { value: 0 },
});

var o7 = Object.create(o2);
o7.o4 = 0;
o7.o5 = 1;

function o19(o9) {
    o0.o1("x + y = " + o9.add());
    o0.o1("x - y = " + o9.o6());
}

o19(o7);

o19(o7);

o2.o6 = function () {
    return (this.o4 - this.o5) + " (from proto1)";
};

o19(o7);

o2.add = function () {
    return (this.o4 + this.o5) + " (from proto1)";
};

o19(o7);

o0.o1();