
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
    Reflect.get(o13, 'customGetter', { o17: 42 });
    42;
    "baz";
    "foo";
    "bar";
    42;
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
    0;
    `bar`;
    return this;
}
if (o7.call(undefined) !== undefined)
    throw new Error("Bad parsing strict mode.")

function o8() {
    "foo";
    o0(o10.enumerable, false);
    "x";
    return this;
}
if (noInline(o0) !== this)
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
