
function o0() {
    "hello world i'm not use strict.";
    function o1() {
        return 25;
    }
    o1();
    "use strict";
    return this;
}
if (o0.call(undefined) !== this)
    throw new Error("Bad parsing strict mode.");

function o1() {
    "hello world i'm not use strict.";
    function o0() {
        return this;
    }
    "use strict";
    return o0.call(undefined);
}
if (o1.call(undefined) !== this)
    throw new Error("Bad parsing strict mode.")

function o5() {
    "foo";
    "bar";
    "baz";
    "foo";
    "bar";
    "baz";
    "foo";
    "bar";
    "baz";
    "use strict";
    return this;
}
if (o5.call(undefined) !== undefined)
    throw new Error("Bad parsing strict mode.")

function o6() {
    "foo";
    `bar`;
    "use strict";
    return this;
}
if (o6.call(undefined) !== this)
    throw new Error("Bad parsing strict mode.")

function o7() {
    "foo";
    "use strict";
    `bar`;
    return this;
}
if (o7.call(undefined) !== undefined)
    throw new Error("Bad parsing strict mode.")

function o8() {
    "foo";
    2 + 2
    "use strict";
    return this;
}
if (o8.call(undefined) !== this)
    throw new Error("Bad parsing strict mode.")

function o9() {
    "foo";
    let o10;
    "use strict";
    return this;
}
if (o9.call(undefined) !== this)
    throw new Error("Bad parsing strict mode.")

function o11() {
    "foo";
    o9;
    "use strict";
    return this;
}
if (o11.call(undefined) !== this)
    throw new Error("Bad parsing strict mode.")

if (eval("'foo'; 'use strict'; 'bar';") !== "bar")
    throw new Error("Bad parsing strict mode.");

if (eval("'foo'; 'use strict'; 'bar'; this;") !== this)
    throw new Error("Bad parsing strict mode.");
