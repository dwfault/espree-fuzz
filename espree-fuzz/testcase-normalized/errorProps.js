//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2)
{
    var value = o2[o1];
    if (o1 === "stack") {
        value = value && value.replace(/\(.+\\test.Error./ig, "(");
    }
    o5.o6("    " + o1 + "\t  isOwn = " + o2.hasOwnProperty(o1) + "\t value = " + value);
}

function test(o2)
{
    o5.o6("  ToString = "+o2);
    o5.o6("  Properties = ");
    o0("name", o2);
    o0("message", o2);
    o0("stack", o2); // Explicitly adding the known non-enumerable members
    o0("number", o2);
    o0("description", o2);
    for (o1 in o2)
    {
        o0(o1, o2);
    }
}

function o9(o10) {
    var o11 = [];
    for (var o12 = 1; o12 < arguments.length; ++o12)
        o11.push(arguments[o12]);
    try {
        return o10.apply(this, o11);
    } catch (o17) {
        o5.o6(o17.name + ": " + o17.o19);
    }
}

o5.o6("Error.prototype");
test(Error.prototype);

o5.o6("RangeError.prototype");
test(o22.prototype);

o9(function () {
    o5.o6("ConversionError.prototype");
    test(o23.prototype);
});

o5.o6("\nError");
test(Error) ;

o24 = new Error();
o5.o6("\nnew Error()");
test(o24);

o24 = new Error(undefined);
o5.o6("\nnew Error(undefined)");
test(o24);

o24 = new Error(null);
o5.o6("\nnew Error(null)");
test(o24);

o24 = new Error("Hello");
o5.o6("\nnew Error(\"Hello\")");
test(o24);

o24 = new Error(100, "With a number");
o5.o6("\nnew Error(100, \"With a number\")");
test(o24) ;

o24 = new Error("Hello");
o24.name = undefined;
o5.o6("\nnew Error(\"Hello\"); name=undefined");
test(o24);

o24 = new o26("I'm a reference error");
o5.o6("\nnew ReferenceError(\"I'm a reference error\")");
test(o24);

o9(function () {
    o24 = new o27(22, "This is a RegExp error");
    o5.o6("\nnew RegExpError(22, \"This is a RegExp error\")");
    test(o24);
});

o24 = new o28();
o5.o6("\nnew TypeError()");
test(o24);

o24 = new o28(undefined);
o5.o6("\nnew TypeError(undefined)");
test(o24);

o24 = new o28(null);
o5.o6("\nnew TypeError(null)");
test(o24);

var o29;
o24 = new o28("With a undef name");
o24.name = o29;
o5.o6("\nnew TypeError(\"With a undef name\")");
test(o24);

o5.o6("\nRuntime TypeError()");
try
{
    o30 = o31;
} catch(o24)
{
    test(o24);
}
