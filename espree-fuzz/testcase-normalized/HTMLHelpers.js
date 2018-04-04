//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("foo".anchor());
o0.o1("foo".o3());
o0.o1("foo".o4());
o0.o1("foo".o5());
o0.o1("foo".o6());
o0.o1("foo".o7("#FF00FF"));
o0.o1("foo".o8(12));
o0.o1("foo".o9());
o0.o1("foo".o10());
o0.o1("foo".strike());
o0.o1("foo".sub());
o0.o1("foo".o13());

o0.o1("foo".anchor('"')); // Should be escaped to &quot;
o0.o1("foo".anchor('<')); // Should not be escaped.

o0.o1("foo".anchor('aaa"bbbccc')); // Test memcpy shortcut.

o0.o14("..\\UnitTestFramework\\UnitTestFramework.js", "self");
var o15 = ["anchor", "big", "blink", "bold", "fixed", "fontcolor",  
                "fontsize", "italics", "small", "strike", "sub", "sup"];
var o16 = {
  o17: {
    name: "Check that String.prototype.x.call throws a TypeError on null or undefined ",
    o19: function () {
      for (var o20 in o15) {
        o21.writeln("trying: ", o15[o20], ": String.prototype." + o15[o20] + ".call");
        o23.o24(function () { eval("String.prototype." + o15[o20] + ".call(null);") }, o26);
        o23.o24(function () { eval("String.prototype." + o15[o20] + ".call(undefined);") }, o26);
      }
    }
  }
}

o27.o28(o16);
