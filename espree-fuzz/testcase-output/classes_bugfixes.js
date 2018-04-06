//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  {
    name: "GitHub ChakraCore #1465 - call syntax is allowed after class expression",
    o4: function () {
      var o5 = class { }.toString();
      var o7 = class o8 { }.toString();
      var o9 = class o8 { }.toString(1, 2, 3); // arguments should not affect valid parse

      o10.o11("class { }", o5, "Calling toString after a class expression with no name parses and behaves correctly");
      o10.o11("class x { }", o7, "Calling toString after a class expression with a name parses and behaves correctly");
      o10.o11("class x { }", o9, "Calling toString with arguments after a class expression with a name parses and behaves correctly");
    }
  },
  {
    name: "BLUE 540289: AV on deferred parse of first class method",
    o4: function () {
      o10.o12(function() { eval("function f() { var o = { \"a\": class { \"b\""); }, o14);
    }
  },
  {
    name: "BLUE 558906: [ES6][Class] get and set should be valid method names",
    o4: function () {
      class o15 {
        set(key) { } // No error
        get() { }    // No error
      }
    }
  },
  {
    name: "BLUE 573391: Classes extending null with a non-default constructor crash",
    o4: function () {
      class o19 { constructor() { } };
      var o21 = class { constructor(o22) { } };
      var o23 = class extends null { constructor(o22) { } };
      var o24 = class extends o19 { constructor(o22) { } };
      var o25 = class extends o19 { constructor(o22) { super(o22) } };
    }
  },
  {
    name: "BLUE 603997: Method formals redeclaration error",
    o4: function() {
      o10.o12(function() { eval("class { method(a) { var a; }; }"); },           o14, "Method formal parameters cannot be redeclared.");
      o10.o12(function() { eval("class { method(a) { let a; }; }"); },           o14, "Method formal parameters cannot be redeclared.");
      o10.o12(function() { eval("class { method(a) { const a; }; }"); },         o14, "Method formal parameters cannot be redeclared.");

      o10.o12(function() { eval("class { method(a,b,c) { var b; }; }"); },       o14, "Method formal parameters cannot be redeclared.");
      o10.o12(function() { eval("class { method(a,b,c) { let b; }; }"); },       o14, "Method formal parameters cannot be redeclared.");
      o10.o12(function() { eval("class { method(a,b,c) { const b; }; }"); },     o14, "Method formal parameters cannot be redeclared.");

      o10.o12(function() { eval("class { set method(a) { var a; }; }"); },       o14, "Method formal parameters cannot be redeclared.");
      o10.o12(function() { eval("class { set method(a) { let a; }; }"); },       o14, "Method formal parameters cannot be redeclared.");
      o10.o12(function() { eval("class { set method(a) { const a; }; }"); },     o14, "Method formal parameters cannot be redeclared.");

      o10.o12(function() { eval("class { set method(a,b,c) { var b; }; }"); },   o14, "Method formal parameters cannot be redeclared.");
      o10.o12(function() { eval("class { set method(a,b,c) { let b; }; }"); },   o14, "Method formal parameters cannot be redeclared.");
      o10.o12(function() { eval("class { set method(a,b,c) { const b; }; }"); }, o14, "Method formal parameters cannot be redeclared.");

      o10.o12(function() { eval("class { method(a,a,c) { }; }"); },              o14, "Method formal parameters cannot be redeclared.");
      o10.o12(function() { eval("class { set method(a,a,c) { }; }"); },          o14, "Method formal parameters cannot be redeclared.");
    }
  },
  {
    name: "BLUE 629214: Class methods with a prefix crash in deferred parse",
    o4: function () {
      function o21() { class o26 { static "a"() { } } }
      function o23() { class o26 { static get "a"() { } } }
      function o24() { class o26 { static set "a"(o8) { } } }
      function o25() { class o26 { get "a"() { } } }
      function o27() { class o26 { set "a"(o8) { } } }
      function o28() { class o26 { *"a"(o8) { } } }
      function o29() { class o26 { o30() {} "a"() {} } }
      function o31() { class o26 { o30() {} static "a"() { } } }
      function o32() { class o26 { o30() {} static get "a"() { } } }
      function o33() { class o26 { o30() {} static set "a"(o8) { } } }
      function o34() { class o26 { o30() {} get "a"() { } } }
      function o35() { class o26 { o30() {} set "a"(o8) { } } }
      function o36() { class o26 { o30() {} *"a"(o8) { } } }
    }
  },
  {
    name: "OS 102456: Assert when deleting a non-method property from a class",
    o4: function () {
      o37 = function() {};
      class o38 extends o37 {};
      o38.o39 = "str";
      delete o38.o8;
      delete o38.o39;
    }
  },
  {
    name: "OS 112921: Nested evals attempt to load super into a scope slot",
    o4: function () {
      class o40{o41(){((eval("")))((this))}};
      eval("class z{window(){((eval(\"\")))((this))}};");
    }
  },
  {
    name: "OS 101184: Class methods without separators inside an array break deferred parsing heuristics",
    o4: function () {
      Function("[class z{\u3056(){}functional(){}}]");
    }
  },
  {
    name: "OS 182090: Class method after a semicolon terminated method does not force PID",
    o4: function () {
      o40 = (class {
              o43 (o44) { /*bLoop*/ };
              "" (o8) {}
              })
    }
  },
  {
    name: "OS 257621: Class expressions should not have trailing call parens",
    o4: function () {
      o10.o12(function () { eval('class{}();'); }, o14, "Class expressions cannot be called without parens", "Expected identifier");
      o10.o45(function () { eval('new (class {})();'); }, "Parenthesized class expressions can be called");
    }
  },
  {
    name: "OS 1114090: Getters in superclass should use instance of subclass as actual 'this' object",
    o4: function () {

        class o46 {
            o47() {
                return this.o48 + " " + this.o49;
            }
            get o50() {
                return this.o48 + " " + this.o49;
            }
        }

        class o51 extends o46 { } // to show it works through inheritance chain

        class o52 extends o51 {
            constructor(o48,o49) {
                super();
                this.o48 = o48;
                this.o49 = o49;
            }
            o53() { return "Dr. " + super.o47(); }
            o54() { return "Dr. " + super.o50; }
            o55() { return "Dr. " + eval('super.getFullName()'); }
            o56() { return "Dr. " + eval('super.fullName'); }
            o57() { return "Dr. " + (()=>super.o47()) (); }
            o58() { return "Dr. " + (()=>super.o50) (); }
        }

        let o8 = new o52("John","Smith");
        o10.o11("Dr. John Smith", o8.o53(), "explicit super call should use instance of subclass as actual 'this' object");
        o10.o11("Dr. John Smith", o8.o54(), "property accessor in superclass should use instance of subclass as actual 'this' object");
        o10.o11("Dr. John Smith", o8.o55(), "super called from within eval should have same behavior as outside of eval");
        o10.o11("Dr. John Smith", o8.o56(), "super object property access from within eval should have same behavior as outside of eval");
        o10.o11("Dr. John Smith", o8.o57(), "super called from within lambda should have same behavior as outside of lambda");
        o10.o11("Dr. John Smith", o8.o58(), "super object property access from within lambda should have same behavior as outside of lambda");
    }
  },
  {
    name: "OS 4586602: Setters in superclass should use instance of subclass as actual 'this' object",
    o4: function () {

        // test case from OS4586602

        class o59 {
            set  o8(o60) {  return this.o61 = o60;  }
        };

        class o62 extends o59 {
            set o8(o60) { super.o8 = o60;  }
        };

        var o63 = new o62();
        o63.o8=1;
        o10.o11(1, o63.o61, "setters in superclass should use instance of subclass as actual 'this' object");

        // behavior according to ECMA2015 when superclass accessors are not present

        class o19 { }

        class o64 extends o19 {
            o65() { return super.o66; }
            o67(o60) { super.o66 = o60; }
        }

        let o68 = new o64();
        o68.o67(15);

        o10.o11(true, o68.hasOwnProperty('i'), "Property 'i' should exist in actualThis object(b)");
        o10.o11(15, o68.o66, "Property 'i' should match assigned value in actualThis object(b)");
        o10.o11(false, o19.prototype.hasOwnProperty('i'), "Property 'i' should not exist in base object(A.prototype)");
        o10.o11(undefined, o68.o65(), "Property 'i' should be undefined in base object(A.prototype)");

        // other cases similar to getter tests above

        class o72 {
            o73(o60) { this.o74 = o60; }
            set name(o60) { this.o74 = o60; }
        }

        class o75 extends o72 { } // to show it works through inheritance chain

        class o76 extends o75 {
            o77(name) { super.o73(name); }
            o78(name) { super.name=name; }
            o79(name) { eval('super.setName(name)'); }
            o80(name) { eval('super.name=name'); }
            o81(name) { (()=>super.o73(name)) (); }
            o82(name) { (()=>super.name=name) (); }
        }

        let o8 = new o76();
        o8.o77("explicit");
        o10.o11("explicit", o8.o74, "explicit super call should use instance of subclass as actual 'this' object");
        o8.o78("property");
        o10.o11("property", o8.o74, "property accessor in superclass should use instance of subclass as actual 'this' object");
        o8.o79("evalCall");
        o10.o11("evalCall", o8.o74, "super called from within eval should have same behavior as outside of eval");
        o8.o80("evalProperty");
        o10.o11("evalProperty", o8.o74, "super object property access from within eval should have same behavior as outside of eval");
        o8.o81("lambdaCall");
        o10.o11("lambdaCall", o8.o74, "super called from within lambda should have same behavior as outside of lambda");
        o8.o82("lambdaProperty");
        o10.o11("lambdaProperty", o8.o74, "super object property access from within lambda should have same behavior as outside of lambda");
    }
  },
  {
    name: "OS 1001915: Function built-in properties \'length\', \'caller\', \'arguments\' should not shadow class members",
    o4: function () {
        class o19 {
            static length() { }
            static caller() { }
            static arguments() { }
        };
        o10.o11("length() { }", o19.length.toString(), "Accessing static method \'length\'");
        o10.o11("caller() { }", o19.caller.toString(), "Accessing static method \'caller\'");
        o10.o11("arguments() { }", o19.arguments.toString(), "Accessing static method \'arguments\'");
        for (var o86 in o19) {
            o10.o11(o86+"() { }", o19[o86].toString(), "PropertyString for \'"+o86+"\' should have a matching cached value");
        }

        class o64 {
            set length(o26) { this.o87=o26; }
            get length() { return this.o87; }
            set caller(o26) { this.o88=o26; }
            get caller() { return this.o88; }
            set arguments(o26) { this.o89=o26; }
            get arguments() { return this.o89; }
        };
        var o68=new o64();
        o68.length=100;
        o68.caller="Caller";
        o68.arguments=function() { };
        o10.o11(100, o68.length, "Get/set accessor \'length\'");
        o10.o11("Caller", o68.caller, "Get/set accessor \'caller\'");
        o10.o11("function () { }", o68.arguments.toString(), "Get/set accessor \'arguments\'");
    }
  },
  {
    name: "OS4497562,OS4497908: InitClassMember overriding existing accessor property",
    o4: function () {
        class o19 {
            set o40(o60) {}
            o40() {} // bug repro: ASSERT(jscript\core\lib\Runtime\Types\DictionaryTypeHandler.cpp, line 1737) Expect to only come down this path for ...
        };

        class o64 {
            static set o40(o60) {}
            static o40() {} // bug repro: ASSERT(jscript\core\lib\Runtime\Types\DictionaryTypeHandler.cpp, line 1737) Expect to only come down this path for ...
        };

        class o90 {
            set o40(o60) {}
            *o40() {} // bug repro: ASSERT(jscript\core\lib\Runtime\Types\DictionaryTypeHandler.cpp, line 1737) Expect to only come down this path for ...
        };

        class o91 {
            set o40(o60) {}
            ["z"]() {} // bug repro: ASSERT(jscript\core\lib\Runtime\Types\DictionaryTypeHandler.cpp, line 1737) Expect to only come down this path for ...
        };
    }
  },
  {
    name: "OS4352944: ES6 class super.<method> calls in an eval inside constructor",
    o4: function () {
        var o92 = 0;
        class o19 {
            constructor() { o92++; }
            o93()   { o92++; }
            o94()   { o92--; }
            o95()    { return o92; }
        }

        class o64 extends o19 {
            constructor() {
                eval(" \
                    super(); \
                    assert.areEqual(1,super.getCount()); \
                    super.increment(); \
                    assert.areEqual(2, super.getCount()); \
                    super.decrement(); \
                    assert.areEqual(1, super.getCount()); \
                ");
            }
        }
        var o96 = new o64();
    }
  },
  {
    name: "OS6135311: Incorrect base register assignment in inlined LdNewTarget",
    o4: function () {
        function o97 () {
            o10.o11(o98, new.target, "new.target should return subclass constructor for super constructor call");
            function o101() {};
        }
        class o98 extends o97 {  }

        new o98();
        new o98(-1);
        new o98([2,3], NaN);
        new o98("cat", 100, {});
    }
  },
];

o103.o104(o2, { o105: o0.o106[0] != "summary" });

// Bug 516429 at global scope
class o26 {};
o26 = null; // No error

// Bug 257621 at global scope
o10.o45(function () { eval('new (class {})();'); }, "Parenthesized class expressions can be new'd");
