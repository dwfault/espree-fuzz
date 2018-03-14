//@ runDefault
// This test should not crash.

Error.prototype.name = 0
o4.o9();
Error("1").toString();
Error(0).toString();

Error.prototype.name = ""
o16({o15 : {}}, 'object', 'function');
o5(() => o17, "ReferenceError: Can't find variable: g");
Error(0).toString();
