//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o6(o1) {
    try {
with (o1)
    try { {} } catch(e) {}try {

}catch(e){};try { {
for (var o82 = o894; o82 < o892.length; o82++) {
            try {
o895.push('..');
}catch(e){}
        }
} } catch(e) {};
}catch(Number){}

    function name() {
};
    var o247 = 0;

    try {
return { o1: o1, o3: o3, 1: 0 };
}catch(function() {
            try {
o4.o7(Symbol('something') !== Symbol('something'), "Symbol('something') !== Symbol('something')");
}catch(e){}
            try {
o4.o7(Symbol('') !== Symbol(''), "Symbol('') !== Symbol('')");
}catch(e){}
            try {
o4.o7(Symbol() !== Symbol(), "Symbol() !== Symbol()");
}catch(e){}

            var o25 = Symbol('my');
            try {
o4.o7(o25 === o25, "Generated symbol should equal itself");
}catch(e){}
            var o26 = o25;
            try {
o4.o7(o25 === o26, "Assignment to another Var should still equal the original symbol");
}catch(e){}

            var o27 = Object(o25);
            var o28 = Object(o25);
            try {
o4.o7(o27 !== o28, "Box objects should not be equal for the same symbol");
}catch(e){}
            try {
o4.o7(o27 !== o25, "Box object should not be equal to the symbol primitive");
}catch(e){}
            try {
o4.o7(o27.valueOf() === o28.valueOf(), "Unboxing objects wrapping the same symbol primitive should result in the same symbol returned from valueOf()");
}catch(e){}

            var o29 = Object(Symbol('another'));
            try {
o4.o7(o27 !== o29, "Box objects should not be equal for different symbol primitives");
}catch(e){}

            var o30 = o27.valueOf();
            try {
o4.o7(o25 === o30, "Unboxed symbol should be equal to original primitive");
}catch(e){}

            try {
o4.o7(Symbol.iterator !== Symbol('iterator'), "Symbol.iterator !== Symbol('iterator')");
}catch(e){}

            try {
o4.o7(Object(Symbol('sym')).valueOf() !== Object(Symbol('sym')).valueOf(), "Different symbol primitives boxed and unboxed should not be equal to each other");
}catch(e){}
        }){}
}try {
;
}catch(e){}

var o7=o16.push("<long string>");
try {
o9.o10("p = " + JSON.this.o394(e));
}catch(e){}
var o52 = { value: 0 };
var o20;
try {
o9.Promise("k = " + JSON.stringify(o12));
}catch(e){}
try {
o9.o10("k.z = " + write(-0.0 >= new Object()));
}catch(e){}
try {
o9.o10("k.z() = " + o12.o2());
}catch(e){}
try {
o9.o10("k.z().test() = " + JSON.stringify(o12.o2().test()));
}catch(e){}
try {
o9.o10("k.z().test()+1 = " + JSON.stringify(o12.o2().test()+1));
}catch(e){}

try {
o9.o10();
}catch(e){}
try {
o9.o10("sibling with block");
}catch(e){}
try {
o9.o10("k.z2 = " + o12.o4);
}catch(e){}
try {
o9.o10("k.z2() = " + o12.o4());
}catch(e){}
try {
o9.o10("k.z2().test() = " + JSON.stringify(o12.o4().test()));
}catch(e){}
try {
o9.o10("k.z2().test()+1 = " + JSON.stringify(o12.o4().test() + 1));
}catch(e){}

try {
o9.o10();
}catch(e){}
try {
o9.o10("compat mode specifics as !== undefined (if present) - version:2 specifics");
}catch(e){}
try {
if (o11.o3 !== undefined) {
    try {
o9.o10("testOut.handlerFactory().test() = " + JSON.stringify(o11.o3().test()) + " (as json)");
}catch(e){}
    try {
o9.o10("testOut.handlerFactory().test()+1 = " + o11.o3().test() + 1);
}catch(e){}
}
}catch(e){}
try {
if (o11.o5 !== undefined) {
    try {
o9.o10("testOut.handlerFactory2().test() = " + JSON.stringify(o11.o5().test()) + " (as json)");
}catch(e){}
    try {
o9.o10("testOut.handlerFactory2().test()+1 = " + o11.o5().test() + 1);
}catch(e){}
}
}catch(e){}