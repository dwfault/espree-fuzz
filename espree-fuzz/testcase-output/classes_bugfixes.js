//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  {
    name: "GitHub ChakraCore #1465 - call syntax is allowed after class expression",
    o3: function () {
      var o4 = class { }.toString();
      var o5 = class o6 { }.toString();
      var o7 = class o6 { }.toString(1, 2, 3); // arguments should not affect valid parse

      o8.o9("class { }", o4, "Calling toString after a class expression with no name parses and behaves correctly");
      o8.o9("class x { }", o5, "Calling toString after a class expression with a name parses and behaves correctly");
      o8.o9("class x { }", o7, "Calling toString with arguments after a class expression with a name parses and behaves correctly");
    }
  },
  {
    name: "BLUE 540289: AV on deferred parse of first class method",
    o3: function () {
      o8.o10(function() { eval("function f() { var o = { \"a\": class { \"b\""); }, o11);
    }
  },
  {
    name: "BLUE 558906: [ES6][Class] get and set should be valid method names",
    o3: function () {
      class o12 {
        set(key) { } // No error
        get() { }    // No error
      }
    }
  },
  {
    name: "BLUE 573391: Classes extending null with a non-default constructor crash",
    o3: function () {
      class o13 { constructor() { } };
      var o14 = class { constructor(o15) { } };
      var o16 = class extends null { constructor(o15) { } };
      var o17 = class extends o13 { constructor(o15) { } };
      var o18 = class extends o13 { constructor(o15) { super(o15) } };
    }
  },
  {
    name: "BLUE 603997: Method formals redeclaration error",
    o3: function() {
      o8.o10(function() { eval("class { method(a) { var a; }; }"); },           o11, "Method formal parameters cannot be redeclared.");
      o8.o10(function() { eval("class { method(a) { let a; }; }"); },           o11, "Method formal parameters cannot be redeclared.");
      o8.o10(function() { eval("class { method(a) { const a; }; }"); },         o11, "Method formal parameters cannot be redeclared.");

      o8.o10(function() { eval("class { method(a,b,c) { var b; }; }"); },       o11, "Method formal parameters cannot be redeclared.");
      o8.o10(function() { eval("class { method(a,b,c) { let b; }; }"); },       o11, "Method formal parameters cannot be redeclared.");
      o8.o10(function() { eval("class { method(a,b,c) { const b; }; }"); },     o11, "Method formal parameters cannot be redeclared.");

      o8.o10(function() { eval("class { set method(a) { var a; }; }"); },       o11, "Method formal parameters cannot be redeclared.");
      o8.o10(function() { eval("class { set method(a) { let a; }; }"); },       o11, "Method formal parameters cannot be redeclared.");
      o8.o10(function() { eval("class { set method(a) { const a; }; }"); },     o11, "Method formal parameters cannot be redeclared.");

      o8.o10(function() { eval("class { set method(a,b,c) { var b; }; }"); },   o11, "Method formal parameters cannot be redeclared.");
      o8.o10(function() { eval("class { set method(a,b,c) { let b; }; }"); },   o11, "Method formal parameters cannot be redeclared.");
      o8.o10(function() { eval("class { set method(a,b,c) { const b; }; }"); }, o11, "Method formal parameters cannot be redeclared.");

      o8.o10(function() { eval("class { method(a,a,c) { }; }"); },              o11, "Method formal parameters cannot be redeclared.");
      o8.o10(function() { eval("class { set method(a,a,c) { }; }"); },          o11, "Method formal parameters cannot be redeclared.");
    }
  },
  {
    name: "BLUE 629214: Class methods with a prefix crash in deferred parse",
    o3: function () {
      function o14() { class o19 { static "a"() { } } }
      function o16() { class o19 { static get "a"() { } } }
      function o17() { class o19 { static set "a"(o6) { } } }
      function o18() { class o19 { get "a"() { } } }
      function o20() { class o19 { set "a"(o6) { } } }
      function o21() { class o19 { *"a"(o6) { } } }
      function o22() { class o19 { o23() {} "a"() {} } }
      function o24() { class o19 { o23() {} static "a"() { } } }
      function o25() { class o19 { o23() {} static get "a"() { } } }
      function o26() { class o19 { o23() {} static set "a"(o6) { } } }
      function o27() { class o19 { o23() {} get "a"() { } } }
      function o28() { class o19 { o23() {} set "a"(o6) { } } }
      function o29() { class o19 { o23() {} *"a"(o6) { } } }
    }
  },
  {
    name: "OS 102456: Assert when deleting a non-method property from a class",
    o3: function () {
      o30 = function() {};
      class o31 extends o30 {};
      o31.o32 = "str";
      delete o31.o6;
      delete o31.o32;
    }
  },
  {
    name: "OS 112921: Nested evals attempt to load super into a scope slot",
    o3: function () {
      class o33{o34(){((eval("")))((this))}};
      eval("class z{window(){((eval(\"\")))((this))}};");
    }
  },
  {
    name: "OS 101184: Class methods without separators inside an array break deferred parsing heuristics",
    o3: function () {
      Function("[class z{\u3056(){}functional(){}}]");
    }
  },
  {
    name: "OS 182090: Class method after a semicolon terminated method does not force PID",
    o3: function () {
      o33 = (class {
              o35 (o36) { /*bLoop*/ };
              "" (o6) {}
              })
    }
  },
  {
    name: "OS 257621: Class expressions should not have trailing call parens",
    o3: function () {
      o8.o10(function () { eval('class{}();'); }, o11, "Class expressions cannot be called without parens", "Expected identifier");
      o8.o37(function () { eval('new (class {})();'); }, "Parenthesized class expressions can be called");
    }
  },
  {
    name: "OS 1114090: Getters in superclass should use instance of subclass as actual 'this' object",
    o3: function () {

        class o38 {
            o39() {
                return this.o40 + " " + this.o41;
            }
            get o42() {
                return this.o40 + " " + this.o41;
            }
        }

        class o43 extends o38 { } // to show it works through inheritance chain

        class o44 extends o43 {
            constructor(o40,o41) {
                super();
                this.o40 = o40;
                this.o41 = o41;
            }
            o45() { return "Dr. " + super.o39(); }
            o46() { return "Dr. " + super.o42; }
            o47() { return "Dr. " + eval('super.getFullName()'); }
            o48() { return "Dr. " + eval('super.fullName'); }
            o49() { return "Dr. " + (()=>super.o39()) (); }
            o50() { return "Dr. " + (()=>super.o42) (); }
        }

        let o6 = new o44("John","Smith");
        o8.o9("Dr. John Smith", o6.o45(), "explicit super call should use instance of subclass as actual 'this' object");
        o8.o9("Dr. John Smith", o6.o46(), "property accessor in superclass should use instance of subclass as actual 'this' object");
        o8.o9("Dr. John Smith", o6.o47(), "super called from within eval should have same behavior as outside of eval");
        o8.o9("Dr. John Smith", o6.o48(), "super object property access from within eval should have same behavior as outside of eval");
        o8.o9("Dr. John Smith", o6.o49(), "super called from within lambda should have same behavior as outside of lambda");
        o8.o9("Dr. John Smith", o6.o50(), "super object property access from within lambda should have same behavior as outside of lambda");
    }
  },
  {
    name: "OS 4586602: Setters in superclass should use instance of subclass as actual 'this' object",
    o3: function () {

        // test case from OS4586602

        class o51 {
            set  o6(o52) {  return this.o53 = o52;  }
        };

        class o54 extends o51 {
            set o6(o52) { super.o6 = o52;  }
        };

        var o55 = new o54();
        o55.o6=1;
        o8.o9(1, o55.o53, "setters in superclass should use instance of subclass as actual 'this' object");

        // behavior according to ECMA2015 when superclass accessors are not present

        class o13 { }

        class o56 extends o13 {
            o57() { return super.o58; }
            o59(o52) { super.o58 = o52; }
        }

        let o60 = new o56();
        o60.o59(15);

        o8.o9(true, o60.hasOwnProperty('i'), "Property 'i' should exist in actualThis object(b)");
        o8.o9(15, o60.o58, "Property 'i' should match assigned value in actualThis object(b)");
        o8.o9(false, o13.prototype.hasOwnProperty('i'), "Property 'i' should not exist in base object(A.prototype)");
        o8.o9(undefined, o60.o57(), "Property 'i' should be undefined in base object(A.prototype)");

        // other cases similar to getter tests above

        class o61 {
            o62(o52) { this.o63 = o52; }
            set name(o52) { this.o63 = o52; }
        }

        class o64 extends o61 { } // to show it works through inheritance chain

        class o65 extends o64 {
            o66(name) { super.o62(name); }
            o67(name) { super.name=name; }
            o68(name) { eval('super.setName(name)'); }
            o69(name) { eval('super.name=name'); }
            o70(name) { (()=>super.o62(name)) (); }
            o71(name) { (()=>super.name=name) (); }
        }

        let o6 = new o65();
        o6.o66("explicit");
        o8.o9("explicit", o6.o63, "explicit super call should use instance of subclass as actual 'this' object");
        o6.o67("property");
        o8.o9("property", o6.o63, "property accessor in superclass should use instance of subclass as actual 'this' object");
        o6.o68("evalCall");
        o8.o9("evalCall", o6.o63, "super called from within eval should have same behavior as outside of eval");
        o6.o69("evalProperty");
        o8.o9("evalProperty", o6.o63, "super object property access from within eval should have same behavior as outside of eval");
        o6.o70("lambdaCall");
        o8.o9("lambdaCall", o6.o63, "super called from within lambda should have same behavior as outside of lambda");
        o6.o71("lambdaProperty");
        o8.o9("lambdaProperty", o6.o63, "super object property access from within lambda should have same behavior as outside of lambda");
    }
  },
  {
    name: "OS 1001915: Function built-in properties \'length\', \'caller\', \'arguments\' should not shadow class members",
    o3: function () {
        class o13 {
            static length() { }
            static caller() { }
            static arguments() { }
        };
        o8.o9("length() { }", o13.length.toString(), "Accessing static method \'length\'");
        o8.o9("caller() { }", o13.caller.toString(), "Accessing static method \'caller\'");
        o8.o9("arguments() { }", o13.arguments.toString(), "Accessing static method \'arguments\'");
        for (var o72 in o13) {
            o8.o9(o72+"() { }", o13[o72].toString(), "PropertyString for \'"+o72+"\' should have a matching cached value");
        }

        class o56 {
            set length(o19) { this.o73=o19; }
            get length() { return this.o73; }
            set caller(o19) { this.o74=o19; }
            get caller() { return this.o74; }
            set arguments(o19) { this.o75=o19; }
            get arguments() { return this.o75; }
        };
        var o60=new o56();
        o60.length=100;
        o60.caller="Caller";
        o60.arguments=function() { };
        o8.o9(100, o60.length, "Get/set accessor \'length\'");
        o8.o9("Caller", o60.caller, "Get/set accessor \'caller\'");
        o8.o9("function () { }", o60.arguments.toString(), "Get/set accessor \'arguments\'");
    }
  },
  {
    name: "OS4497562,OS4497908: InitClassMember overriding existing accessor property",
    o3: function () {
        class o13 {
            set o33(o52) {}
            o33() {} // bug repro: ASSERT(jscript\core\lib\Runtime\Types\DictionaryTypeHandler.cpp, line 1737) Expect to only come down this path for ...
        };

        class o56 {
            static set o33(o52) {}
            static o33() {} // bug repro: ASSERT(jscript\core\lib\Runtime\Types\DictionaryTypeHandler.cpp, line 1737) Expect to only come down this path for ...
        };

        class o76 {
            set o33(o52) {}
            *o33() {} // bug repro: ASSERT(jscript\core\lib\Runtime\Types\DictionaryTypeHandler.cpp, line 1737) Expect to only come down this path for ...
        };

        class o77 {
            set o33(o52) {}
            ["z"]() {} // bug repro: ASSERT(jscript\core\lib\Runtime\Types\DictionaryTypeHandler.cpp, line 1737) Expect to only come down this path for ...
        };
    }
  },
  {
    name: "OS4352944: ES6 class super.<method> calls in an eval inside constructor",
    o3: function () {
        var o78 = 0;
        class o13 {
            constructor() { o78++; }
            o79()   { o78++; }
            o80()   { o78--; }
            o81()    { return o78; }
        }

        class o56 extends o13 {
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
        var o82 = new o56();
    }
  },
  {
    name: "OS6135311: Incorrect base register assignment in inlined LdNewTarget",
    o3: function () {
        function o83 () {
            o8.o9(o84, new.target, "new.target should return subclass constructor for super constructor call");
            function o85() {};
        }
        class o84 extends o83 {  }

        new o84();
        new o84(-1);
        new o84([2,3], NaN);
        new o84("cat", 100, {});
    }
  },
];

o86.o87(o2, { o88: o0.o89[0] != "summary" });

// Bug 516429 at global scope
class o19 {};
o19 = null; // No error

// Bug 257621 at global scope
o8.o37(function () { eval('new (class {})();'); }, "Parenthesized class expressions can be new'd");
