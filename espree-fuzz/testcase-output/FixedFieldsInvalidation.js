//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Testing invalidation due to overwrite:");

var o2 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o3: 0,
    add: function () {
        return (this.o5 + this.o6) + " (original)";
    },
    o7: function () {
        return (this.o5 - this.o6) + " (original)";
    }
}

var o8 = Object.create(o2);
o8.o5 = 0;
o8.o6 = 1;

var o11 = function (o12) {
    o0.o1("x + y = " + o12.add());
    o0.o1("x - y = " + o12.o7());
}

o11(o8);

o11(o8);

o2.o7 = function () {
    return (this.o5 - this.o6) + " (overwritten)";
}

o11(o8);

o2.add = function () {
    return (this.o5 + this.o6) + " (overwritten)";
}

o11(o8);

var o2 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o13: 0,
    add: function () {
        return (this.o5 + this.o6) + " (original)";
    },
    o7: function () {
        return (this.o5 - this.o6) + " (original)";
    }
}

var o8 = Object.create(o2);
o8.o5 = 0;
o8.o6 = 1;

var o14 = function () {
    return (this.o5 - this.o6) + " (overwritten)";
}

var o11 = function (o12, o15) {
    o0.o1("x + y = " + o12.add());
    if (o15) {
        o2.o7 = o14;
    }
    o0.o1("x - y = " + o12.o7());
}

o11(o8, false);

o11(o8, false);

o11(o8, true);

o0.o1();


o0.o1("Testing invalidation due to delete:");

var o16 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o17: 0,
    add: function () {
        return (this.o5 + this.o6) + " (from proto2)";
    },
    o7: function () {
        return (this.o5 - this.o6) + " (from proto2)";
    }
}

var o2 = Object.create(o16, {
    // Make sure we branch to a unique type path to avoid false sharing
    o18: { value: 0 },
    add: {
        value: function () {
            return (this.o5 + this.o6) + " (from proto1)";
        },
        writable: true, configurable: true
    },
    o7: {
        value: function () {
            return (this.o5 - this.o6) + " (from proto1)";
        },
        writable: true, configurable: true
    }
});

var o8 = Object.create(o2);
o8.o5 = 0;
o8.o6 = 1;

function o22(o12) {
    o0.o1("x + y = " + o12.add());
    o0.o1("x - y = " + o12.o7());
}

o22(o8);

o22(o8);

delete o2.o7;

o22(o8);

delete o2.add;

o22(o8);

o0.o1();


o0.o1("Testing invalidation due to shadowing:");

var o16 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o23: 0,
    add: function () {
        return (this.o5 + this.o6) + " (from proto2)";
    },
    o7: function () {
        return (this.o5 - this.o6) + " (from proto2)";
    }
}

var o2 = Object.create(o16, {
    // Make sure we branch to a unique type path to avoid false sharing
    o24: { value: 0 },
});

var o8 = Object.create(o2);
o8.o5 = 0;
o8.o6 = 1;

function o25(o12) {
    o0.o1("x + y = " + o12.add());
    o0.o1("x - y = " + o12.o7());
}

o25(o8);

o25(o8);

o2.o7 = function () {
    return (this.o5 - this.o6) + " (from proto1)";
};

o25(o8);

o2.add = function () {
    return (this.o5 + this.o6) + " (from proto1)";
};

o25(o8);

o0.o1();