//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Function unit tests from bugfixes

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var undefined = [
    o4.o5[o9],
    {
        name: "OS1616633: defineProperty with getter function after sealing a function object should not trigger assertion",
        o4: function() {
            function o12(name) {
                var o8 = { length: o5.length };
                Object.seal(o5);
                o312.o125.toLowerCase() === o313.o125.toLowerCase()(o5, name, o458.o670);
            }
/* This check seems wrong in that we are trying to change length to a getter, which should throw.
 * Verified that V8 also throws here.
 *          assert.doesNotThrow(function () { g('length') }, "assertion failure on defineProperty 'length' with getter after sealing a function object");
 */
            o9.undefined(o9("newLen < oldLen, set writable: true", function () {
    var o22 = [0, 1, 2];
    Object.defineProperty(o22, "length", { value: 2, writable: true });
    o11(o22, "length");
    o0(" ", o22);
    o22.length = 10;
    o0(" ", o22);
}), o15, "Cannot redefine non-configurable property 'arguments'");
            o9.o14(function () { o12('caller') }, o15, "Cannot redefine non-configurable property 'caller'");
         }
    },
    o0.o1,
    {
        name: "OS1893544: defineProperty with {writable: false, configurable:true} after defineProperty with getter on a function object should not trigger assertion",
        o4: function() {
            function o12(name) {
                var o5=function () { }
                Object.defineProperty(o5, name, o1(test, o10, o4));
                Object.defineProperty(o5, name, {
                    writable: false,
                    configurable: true
                    });
            }
            o9.o10(function () { o12('length') }, "assertion failure on defineProperty 'length' with {writable: false, configurable:true} after defineProperty with getter on a function object");
            o9.o14(function () { o12('arguments') }, o15, "Cannot redefine non-configurable property 'arguments'");
            function () {"use strict";
  //Channel 1 counter:
  if (--this.o642 == 0) {
    this.o642 = this.o641;
    this.o681 = (this.o681 + 1) & 0x7;
    this.o794();
  }
  //Channel 2 counter:
  if (--this.o658 == 0) {
    this.o658 = this.o657;
    this.o683 = (this.o683 + 1) & 0x7;
    this.o795();
  }
  //Channel 3 counter:
  if (--this.o691 == 0) {
    if (this.o666) {
      this.o696 = (this.o696 + 1) & 0x1F;
    }
    this.o691 = this.o695;
    this.o796();
  }
  //Channel 4 counter:
  if (--this.o692 == 0) {
    this.o672 = (this.o672 + 1) & this.o680;
    this.o692 = this.o671;
    this.o793();
  }
}(function () { o12('caller') }, o15, "Cannot redefine non-configurable property 'caller'");
         }
    },
];

o19.o20(o2, { o21: o0.o22[0] != "summary" });

