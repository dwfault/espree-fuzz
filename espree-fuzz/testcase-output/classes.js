//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(o3, name, o4, o5, o6, o7) {
    let o8 = Object.getOwnPropertyDescriptor(o3, name);
    let o9 = `obj[${name}](${o5},${o6},${o7})`;
    let o10;

    if (o5) {
        o10 = o8.get;

        o11.o12('function', typeof o10, `${o9}: Get method has 'get' property set in descriptor`);
        o11.o12(o4, o3[name], `${o9}: Invoking class get method returns correct value`);
        o11.o12(o4, o10(), `${o9}: Calling class get method function directly returns correct value`);

        o11.o13('prototype' in o10, `${o9}: Class method get does not have 'prototype' property`);
    } else if (o6) {
        o10 = o8.set;

        o11.o12('function', typeof o10, `${o9}: Set method has 'set' property set in descriptor`);
        o11.o12(undefined, o3[name], `${o9}: Invoking class set method returns undefined`);
        o11.o12(o4, o10(), `${o9}: Calling class set method function directly returns correct value`);

        o11.o13('prototype' in o10, `${o9}: Class method set does not have 'prototype' property`);


    } else if (o7) {
        o10 = o3[name];

        o11.o12('function', typeof o10, `${o9}: Class method generator function has correct type`);

        let o14;
        for (o14 of o10()) {}
        o11.o12(o4, o14, `${o9}: Calling class method generator returns correct value`);

        o11.o15(o8.writable, `${o9}: Class method generator functions are writable`);

        o11.o15('prototype' in o10, `${o9}: Class method generator does have 'prototype' property`);
    } else {
        o10 = o3[name]

        o11.o12('function', typeof o10, `${o9}: Class method has correct type`);
        o11.o12(o4, o10(), `${o9}: Calling class method returns correct value`);

        // get/set property descriptors do not have writable properties
        o11.o15(o8.writable, `${o9}: Class method functions are writable`);

        o11.o13('prototype' in o10, `${o9}: Class method does not have 'prototype' property`);
    }

    o11.o13(o8.enumerable, `${o9}: Class methods are not enumerable`);
    o11.o15(o8.configurable, `${o9}: Class methods are configurable`);

    o11.o13(o10.hasOwnProperty('arguments'), `${o9}: Class methods do not have an 'arguments' property`);
    o11.o13(o10.hasOwnProperty('caller'), `${o9}: Class methods do not have an 'caller' property`);
}

var o16 = [
  {
    name: "Class requires an extends expression if the extends keyword is used",
    o17: function () {
      o11.o18(function () { eval("class E extends { }") }, o19);
    }
  },
  {
    name: "Class declarations require a name",
    o17: function () {
      o11.o18(function () { eval("class { }") }, o19);
    }
  },
  {
    name: "Class methods may not have an octal name",
    o17: function () {
      o11.o18(function () { eval("class E0 { 0123() {} }") }, o19, "0123");
      o11.o18(function () { eval("class E1 { 0123.1() {} }") }, o19, "0123.1");
    }
  },
  {
    name: "Class prototypes must be non-writable",
    o17: function () {
      var o20 = Object.getOwnPropertyDescriptor(class { }, "prototype");
      o11.o13(o20.writable);
    }
  },
  {
    name: "Class static methods may not be named 'prototype'",
    o17: function () {
      o11.o18(function () { eval("class E0 { static prototype() {} }") }, o19, "static prototype");
      o11.o18(function () { eval("class E1 { static get prototype() {} }") }, o19, "static get prototype");
      o11.o18(function () { eval("class E2 { static set prototype(x) {} }") }, o19, "static set prototype");
    }
  },
  {
    name: "Class constructor method can only be a normal method - not getter, setter, or generator",
    o17: function () {
      o11.o18(function () { eval("class E { * constructor() {} }") }, o19, "Class constructor may not be a generator");
      o11.o18(function () { eval("class E0 { get constructor() {} }") }, o19, "get constructor");
      o11.o18(function () { eval("class E1 { set constructor(x) {} }") }, o19, "set constructor");
    }
  },
  {
    name: "Class method names can be duplicated; last one lexically always win",
    o17: function () {
      o11.o18(function () { eval("class E0 { constructor() {} constructor() {} }") }, o19, "Duplicated constructor");

      // Valid
      class o21 { o22() {} o22() {} }
      class o23 { get o22() {} get o22() {} }
      class o24 { set o22(o25) {} set o22(o25) {} }
      class o26 { get o22() {} set o22(o25) {} }
      class o27 { static o22() {} static o22() {} }
      class o28 { static get o22() {} static get o22() {} }
      class o29 { static set o22(o25) {} static set o22(o25) {} }
      class o30 { static get o22() {} static set o22(o25) {} }
      class o31 { o22() {} get o22() {} set o22(o25) {}}
      class o32 { static get o22() {} static set o22(o25) {} get o22() {} set o22(o25) {} }
      class o33 { static o22() {} static get o22() {} static set o22(o25) {}}

      class o34 { static o22() {} o22() {} }
      class o35 { static o22() {} get o22() {} set o22(o25) {}}
      class o36 { o22() {} static get o22() {} static set o22(o25) {}}
    }
  },
  {
    name: "Class extends expressions must be (null || an object that is a constructor with a prototype that is (null || an object))",
    o17: function () {
      class o37 {}
      o11.o15(Object.getPrototypeOf(o37.prototype) === Object.prototype, "Object.getPrototypeOf(BaseClass.prototype) === Object.prototype")
      o11.o15(Object.getPrototypeOf(o37.prototype.constructor) === Function.prototype, "Object.getPrototypeOf(BaseClass.prototype.constructor) === Function.prototype")

      class o38 extends null { }
      o11.o15(Object.getPrototypeOf(o38.prototype) === null, "Object.getPrototypeOf(ExtendsNull.prototype) === null")
      o11.o15(Object.getPrototypeOf(o38.prototype.constructor) === Function.prototype, "Object.getPrototypeOf(ExtendsNull.prototype.constructor) === Function.prototype")

      function o39 () {}
      o39.prototype = null;
      class o40 extends o39 {}
      o11.o15(Object.getPrototypeOf(o40.prototype) === null, "Object.getPrototypeOf(ExtendsNullPrototype.prototype) === null")
      o11.o15(Object.getPrototypeOf(o40.prototype.constructor) === o39, "Object.getPrototypeOf(ExtendsNullPrototype.prototype.constructor) === NullPrototype")

      class o41 extends Object {}
      o11.o15(Object.getPrototypeOf(o41.prototype) === Object.prototype, "Object.getPrototypeOf(ExtendsObject.prototype) === Object.prototype")
      o11.o15(Object.getPrototypeOf(o41.prototype.constructor) === Object, "Object.getPrototypeOf(ExtendsObject.prototype.constructor) === Object")

      function o42 () {}
      class o43 extends o42 {}
      o11.o15(Object.getPrototypeOf(o43.prototype) === o42.prototype, "Object.getPrototypeOf(ExtendsFunc.prototype) === Func.prototype")
      o11.o15(Object.getPrototypeOf(o43.prototype.constructor) === o42, "Object.getPrototypeOf(ExtendsFunc.prototype.constructor) === Func")


      o11.o18(function () { class o21 extends 0       { } }, o44, "Integer extends");
      o11.o18(function () { class o21 extends "test"  { } }, o44, "String extends");
      o11.o18(function () { class o21 extends {}      { } }, o44, "Object literal extends");
      o11.o18(function () { class o21 extends undefined { } }, o44, "Undefined extends");
      o11.o18(
          function () {
            function o45() {}
            o45.prototype = 0;
            class o21 extends o45 { }
          }, o44, "Integer prototype");
      o11.o18(
          function () {
            function o45() {}
            o45.prototype = "test";
            class o21 extends o45 { }
          }, o44, "String prototype");
      o11.o18(
          function () {
            function o45() {}
            o45.prototype = undefined;
            class o21 extends o45 { }
          }, o44, "Undefined prototype");

      o11.o46(function () { eval("class Foo extends new Proxy(class Bar {},{}){}"); });
    }
  },
  {
    name: "Class basic sanity tests",
    o17: function () {
      var o47;
      function o8(o25) {
        o47 = o25;
      }

      class o48 { }
      class o49 { ; }
      class o50 { constructor() { o8('ctor') } }
      class o51 { o52() { o8('method') } }
      class o53 { static o52() { o8('smethod') } }
      class o54 { get getter() { o8('getter') } }
      class o55 { static get getter() { o8('sgetter') } }
      class o56 { set setter(o25) { o8('setter ' + o25) } }
      class o57 { static set setter(o25) { o8('ssetter ' + o25) } }

      let o58 = new o48();
      let o59 = new o49();

      let o60 = new o50();
      o11.o12('ctor', o47, "constructing OnlyCtor class calls the constructor method");

      let o61 = new o51();
      let o62 = new o53();
      let o63 = new o54();
      let o64 = new o55();
      let o65 = new o56();
      let o66 = new o57();

      o61.o52();
      o11.o12('method', o47, "method calls function correctly");

      o53.o52();
      o11.o12('smethod', o47, "static method calls function correctly");

      o63.getter;
      o11.o12('getter', o47, "getter calls function correctly");

      o55.getter;
      o11.o12('sgetter', o47, "static getter calls function correctly");

      o65.setter = null;
      o11.o12('setter null', o47, "setter calls function correctly");

      o57.setter = null;
      o11.o12('ssetter null', o47, "static setter calls function correctly");


      class o67 extends o51 { o68() { o8('sub method') } }
      class o69 extends o51 { o52() { o8('override method') } }

      let o70 = new o67();
      let o71 = new o69();

      o70.o52();
      o11.o12('method', o47, "derived class inherits base class method");

      o70.o68();
      o11.o12('sub method', o47, "derived class adds new method correctly");

      o71.o52();
      o11.o12('override method', o47, "derived class overrides method correctly");


      let o72 = class o72 { o52() { o8('class expr method') } }
      let o73 = class { o52() { o8('class expr no name method') } }

      let o74 = new o72();
      let o75 = new o73();

      o74.o52();
      o11.o12('class expr method', o47, "method call on class expression works correctly");

      o75.o52();
      o11.o12('class expr no name method', o47, "method call on class expression with no name works correctly");


      class o76 { static o52() { o8(o76.o52.toString()) } }
      let o77 = class o78 { static o52() { o8(o78.o52.toString()) } }

      o76.o52();
      o11.o12('method() { p(InternalNameUse.method.toString()) }', o47, "Use of class declaration's name inside method works correctly");

      o77.o52();
      o11.o12('method() { p(InternalNameUseExpr.method.toString()) }', o47, "Use of class expression's name inside method works correctly");
    }
  },
  {
    name: "Class basic sanity tests in closures",
    o17: function () {
      var o47;
      function o8(o25) {
        o47 = o25;
      }

      function o79() {
        class o48 { }
        class o49 { ; }
        class o50 { constructor() { o8('ctor') } }
        class o51 { o52() { o8('method') } }
        class o53 { static o52() { o8('smethod') } }
        class o54 { get getter() { o8('getter') } }
        class o55 { static get getter() { o8('sgetter') } }
        class o56 { set setter(o25) { o8('setter ' + o25) } }
        class o57 { static set setter(o25) { o8('ssetter ' + o25) } }
        class o80 { ["cmethod"]() { o8('cmethod') } }
        class o81 { static ["cmethod"]() { o8('scmethod') } }
        class o82 { get ["cgetter"]() { o8('cgetter') } }
        class o83 { static get ["cgetter"]() { o8('scgetter') } }
        class o84 { set ["csetter"](o25) { o8('csetter ' + o25) } }
        class o85 { static set ["csetter"](o25) { o8('scsetter ' + o25) } }

        function o86() {
          let o58 = new o48();
          let o59 = new o49();

          let o60 = new o50();
          o11.o12('ctor', o47, "constructing OnlyCtor class calls the constructor method");

          let o61 = new o51();
          let o62 = new o53();
          let o63 = new o54();
          let o64 = new o55();
          let o65 = new o56();
          let o66 = new o57();
          let o87 = new o80();
          let o88 = new o82();
          let o89 = new o84();

          o61.o52();
          o11.o12('method', o47, "method calls function correctly");

          o53.o52();
          o11.o12('smethod', o47, "static method calls function correctly");

          o63.getter;
          o11.o12('getter', o47, "getter calls function correctly");

          o55.getter;
          o11.o12('sgetter', o47, "static getter calls function correctly");

          o65.setter = null;
          o11.o12('setter null', o47, "setter calls function correctly");

          o57.setter = null;
          o11.o12('ssetter null', o47, "static setter calls function correctly");

          o87.o90()
          o11.o12('cmethod', o47, "computed name method calls function correctly");

          o81.o90()
          o11.o12('scmethod', o47, "static computed name method calls function correctly");

          o88.o91;
          o11.o12('cgetter', o47, "computed name getter calls function correctly");

          o83.o91;
          o11.o12('scgetter', o47, "static computed name getter calls function correctly");

          o89.o92 = null;
          o11.o12('csetter null', o47, "computed name setter calls function correctly");

          o85.o92 = null;
          o11.o12('scsetter null', o47, "static computed name setter calls function correctly");
        }

        o86();
      }
      o79();

      function o93() {
        class o51 { o52() { o8('method') } }
        class o67 extends o51 { o68() { o8('sub method') } }
        class o69 extends o51 { o52() { o8('override method') } }

        function o94() {
          let o70 = new o67()
          let o71 = new o69()

          o70.o52();
          o11.o12('method', o47, "derived class inherits base class method");

          o70.o68();
          o11.o12('sub method', o47, "derived class adds new method correctly");

          o71.o52();
          o11.o12('override method', o47, "derived class overrides method correctly");
        }

        o94();
      }
      o93();

      function o95() {
        let o72 = class o72 { o52() { o8('class expr method') } }
        let o73 = class { o52() { o8('class expr no name method') } }

        function o96() {
          let o74 = new o72();
          let o75 = new o73();

          o74.o52();
          o11.o12('class expr method', o47, "method call on class expression works correctly");

          o75.o52();
          o11.o12('class expr no name method', o47, "method call on class expression with no name works correctly");
        }

        o96()
      }
      o95()

      function o97() {
        class o76 { static o52() { o8(o76.o52.toString()) } }
        let o77 = class o78 { static o52() { o8(o78.o52.toString()) } }

        function o98() {
          o76.o52();
          o11.o12('method() { p(InternalNameUse.method.toString()) }', o47, "Use of class declaration's name inside method works correctly");

          o77.o52();
          o11.o12('method() { p(InternalNameUseExpr.method.toString()) }', o47, "Use of class expression's name inside method works correctly");
        }

        o98()
      }
      o97()
    }
  },
  {
    name: "Invalid uses of super",
    o17: function () {
      class o21 {
        constructor() { o8('constructor A'); }
        o52()      { o8('method A'); }
      }

      // Test valid postfix operators in the wrong context
      o11.o18(function () { eval("super();") },        o99, "Invalid use of super");
      o11.o18(function () { eval("super[1];") },       o99, "Invalid use of super");
      o11.o18(function () { eval("super.method();") }, o99, "Invalid use of super");

      // Syntax Error for base class constructor with direct super call
      o11.o18(function () { eval("class A { constructor() { super(); } }") }, o19, "Base class constructor cannot call super");
    }
  },
  {
    name: "Basic uses of super",
    o17: function () {
      var o100 = [];

      class o21 {
        constructor() { this.o101 = true; o100.push('A'); }
        o52()      { return 'method A'; }
        set o102(o103) { this.o101 = o103; }
        get o102() { return this.o101; }
      }

      class o23 extends o21 {
        constructor() {
          o100.push('B pre-super');
          super();
          o100.push('B post-super');
        }
        o104()      { return super.o52() }
        o105() { return super['method'](); }
        o106()         { return super.o102; }
        o107(value)    { super.o102 = value; }
        o108()        { return super['initialized']; }
        o109(value)   { super['initialized'] = value; }
        o110() {
          var o111 = o25 => super[o25]();
          return o111('method');
        }
      }

      let o112 = new o21();
      o11.o12(1, o100.length, "new A calls A's constructor once");
      o11.o12('A', o100[0], "new A calls A's constructor");
      o100 = [];

      let o113 = new o23();
      o11.o12(3, o100.length, "new B calls B and A constructors once each");
      o11.o12('B pre-super', o100[0], "new B calls B's constructor first");
      o11.o12('A', o100[1], "super within B's constructor calls A's constructor");
      o11.o12('B post-super', o100[2], "A's constructor returns to B's constructor after super call");


      // Sanity checks
      o11.o15(o112.o52() === 'method A', "classA.method() === 'method A'");
      o11.o15(o112.o102 === true, "classA.initialized === true");

      // Super checks
      o11.o15(o113.o102 === true, "classB.initialized === true");
      o11.o15(o113.o104() === 'method A', "classB.superMethod() === 'method A'");
      o11.o15(o113.o102 === true, "classB.initialized === true");
      o113.o107(123);
      o11.o15(o113.o106() === 123, "classB.getAprop() === 123");
      o11.o15(o113.o108() === 123, "classB.getAIndex() === 123");
      o113.o109(456);
      o11.o15(o113.o106() === 456, "classB.getAprop() === 456");
      o11.o15(o113.o108() === 456, "classB.getAIndex() === 456");

      o11.o15(o113.o110() === 'method A', "classB.lambdaIndex() === 'method A'");
    }
  },
  {
    name: "Super used outside the class declaration function",
    o17: function () {
      class o114
      {
        o52() { return 3; }
      };

      class o115
      {
        o52() { return 2; }
      }

      function o116(o117)
      {
        class o23 extends (o117)
        {
          o52() { return 4; }
          o118() { return super.o52(); }
        };
        return o23;
      }

      let o119 = o116(o114);
      let o120 = o116(o115);
      let o121 = new o119();
      let o122 = new o120();

      o11.o15(o121.o52() === 4, "b1.method() === 4)");
      o11.o15(o121.o118() === 3, "b1.supermethod() === 3");

      o11.o15(o122.o52() === 4, "b2.method() === 4");
      o11.o15(o122.o118() === 2, "b2.supermethod() === 2");
    }
  },
  {
    name: "Super adapts to __proto__ changes",
    o17: function () {
      class o114 {
        o52() { return "A1"; }
        static o123() { return "static A1"; }
      }
      class o115 {
        o52() { return "A2"; }
        static o123() { return "static A2"; }
      }
      class o124 {
        o52() { return "A3"; }
        static o123() { return "static A3"; }
      }

      class o23 extends o114 {
        o52() { return super.o52(); }
        static o123() { return super.o123(); }
      }

      o11.o12(o23.__proto__, o114);
      o11.o12(o23.prototype.__proto__, o114.prototype);

      let o125 = new o23();
      let o126 = new o23();
      o11.o12("A1",                o125.o52());
      o11.o12("static A1",         o23.o123());
      o11.o12(o125.o52(), o126.o52());

      // Change the 'static' part of B
      o23.__proto__ = o115;

      o11.o12(o23.__proto__,           o115);
      o11.o12(o23.prototype.__proto__, o114.prototype);
      o11.o12("A1",                  o125.o52(), "Instance methods should not be affected by B.__proto__ change");
      o11.o12("static A2",           o23.o123(),    "Static method should have changed after B.__proto__ change");
      o11.o12(o125.o52(),   o126.o52(), "All instances should not have been affected by B.__proto__ change");

      // Change the 'dynamic' part of B
      o23.prototype.__proto__ = o124.prototype;

      o11.o12(o23.__proto__,           o115);
      o11.o12(o23.prototype.__proto__, o124.prototype);
      o11.o12("A3",                  o125.o52(), "Instance methods should be affected after B.prototype.__proto__ change");
      o11.o12("static A2",           o23.o123(),    "Static methods should be unaffected after B.prototype.__proto__ change");
      o11.o12(o125.o52(),   o126.o52(), "All instances should have been changed by B.prototype.__proto__ change");
    }
  },
  {
    name: "super reference in base class constructor",
    o17: function () {
        class o21 {
            constructor() { super.toString(); }
            o127() { super.o128 = 1; }
        }
        class o23 {
            constructor() {
                this.o129 = super.toString();
                this.o130 = super.toString.call(this);
                this.o131 = (()=>super.toString())() ;
                this.o132 = (()=>(()=>super.toString())())() ;
                this.o133 = eval("super.toString()");
                this.o134 = eval("eval(\"super.toString()\")");
                this.o135 = eval("(()=>super.toString())()");
                this.o136 = eval("(()=>eval(\"super.toString()\"))()");
                this.o137 = eval("eval(\"(()=>super.toString())()\")");
                this.o138 = (()=>eval("super.toString()"))() ;
                this.o139 = (()=>(()=>eval("super.toString()"))())() ;

                this.o140 = super.toString;
                this.o141 = (()=>super.toString)() ;
                this.o142 = (()=>(()=>super.toString)())() ;
                this.o143 = eval("super.toString");
                this.o144 = eval("eval(\"super.toString\")");
                this.o145 = eval("(()=>super.toString)()");
                this.o146 = eval("(()=>eval(\"super.toString\"))()");
                this.o147 = eval("eval(\"(()=>super.toString)()\")");
                this.o148 = (()=>eval("super.toString"))() ;
                this.o149 = (()=>(()=>eval("super.toString"))())() ;
            }
        }

        o11.o12("function", typeof o21);

        var o150 = new o21();
        var o151 = new o23();

        o150.o127();
        o11.o12(1, o150.o128);

        o11.o12("[object Object]", o151.o129);
        o11.o12("[object Object]", o151.o130);
        o11.o12("[object Object]", o151.o131);
        o11.o12("[object Object]", o151.o132);
        o11.o12("[object Object]", o151.o133);
        o11.o12("[object Object]", o151.o134);
        o11.o12("[object Object]", o151.o135);
        o11.o12("[object Object]", o151.o136);
        o11.o12("[object Object]", o151.o137);
        o11.o12("[object Object]", o151.o138);
        o11.o12("[object Object]", o151.o139);

        o11.o12(Object.prototype.toString, o151.o140);
        o11.o12(Object.prototype.toString, o151.o141);
        o11.o12(Object.prototype.toString, o151.o142);
        o11.o12(Object.prototype.toString, o151.o143);
        o11.o12(Object.prototype.toString, o151.o144);
        o11.o12(Object.prototype.toString, o151.o145);
        o11.o12(Object.prototype.toString, o151.o146);
        o11.o12(Object.prototype.toString, o151.o147);
        o11.o12(Object.prototype.toString, o151.o148);
        o11.o12(Object.prototype.toString, o151.o149);
    }
  },
  {
    name: "Default constructors",
    o17: function () {
      class o150 { };
      class o151 extends o150 { };

      o11.o12("class a { }", o150.prototype.constructor.toString());
      o11.o12("class b extends a { }", o151.prototype.constructor.toString());

      var o152 = [];
      var test = [];
      class o153 { constructor() { o152 = [...arguments]; } };
      class o20 extends o153 { };
      new o20();
      o11.o12(o152, [], "Default extends ctor with no args");

      test = [1, 2, 3];
      new o20(...test);
      o11.o12(o152, test, "Default extends ctor with some args");

      test = [-5, 4.53, "test", null, undefined, 9348579];
      new o20(...test);
      o11.o12(o152, test, "Default extends ctor with different arg types");
    }
  },
  {
    name: "Evals and lambdas",
    o17: function () {
      class o150 { o52() { return "hello world"; } };
      class o151 extends o150 {
        o154() { return eval("super.method()"); }
        o68() { return eval("super['method']()"); }
        o155() { return eval("eval('super.method();')"); }
        o156() { return eval("x => super.method()")(); }
        o157() { return (o25 => eval("super.method()"))(); }
        o158() { return (o25 => o25 => o25 => super.o52())()()(); }
        o159() { return (o25 => eval("x => eval('super.method')"))()()(); }
        o160() { eval(); return (o25 => super.o52())(); }
        o161() { eval(); return (o25 => function () { return eval("x => super()")(); }())();}
        o162(){ var o25 = () => { eval(""); return super.o52(); }; return o25(); }
      }

      let o163 = new o151();

      o11.o12("hello world", o163.o154(), "Basic eval use");
      o11.o12("hello world", o163.o68(), "Basic eval use 2");
      o11.o12("hello world", o163.o155(), "Nested eval use");
      o11.o12("hello world", o163.o156(), "Mixed lambda and eval use, no nesting");
      o11.o12("hello world", o163.o157(), "Mixed lambda and eval use, no nesting 2");
      o11.o12("hello world", o163.o158(), "Nested lambdas and eval");
      o11.o12("hello world", o163.o159(), "Nested lambdas and nested evals");
      o11.o12("hello world", o163.o160(), "Lambda with an eval in the parent");
      o11.o18(function() { o163.o161(); }, o99);
      o11.o18(function() { (o25 => eval('super()'))(); }, o99);
      o11.o12("hello world", o163.o162(), "Lambda with an eval in the lambda");
    }
  },
  {
    name: "Immutable binding within class body, declarations also have normal let binding in enclosing context",
    o17: function() {
      var o153 = class o164 {
          o165() { eval('k = 0; WScript.Echo(k);'); }
      };

      // Class name is immutable within class body.
      var o166 = new o153();
      o11.o18(function() { o166.o165() }, o44);

      // Class name is also immutable within body of class declaration statement
      class o167 extends o153 {
          o165() { eval('Q = 0;'); }
      };

      var o168 = new o167();
      o11.o18(function() { o168.o165() }, o44);
      // Class name binding in enclosing context is mutable
      o167 = 0;
      o11.o12(o167, 0, "Mutable class declaration binding");
    }
  },
  {
    name: "Ensure the super scope slot is emitted at the right time",
    o17: function () {
      // Previously caused an assert in ByteCodeGen.
      class o150 { o52 () { return "hello" } };
      class o151 extends o150 { o52 () { let o150; let o151; return (o25 => super.o52()); } }
    }
  },
  {
    name: "'super' reference in eval() and lambda",
    o17: function () {
        class o150 {
            o52() {return "foo"}
        }

        class o151 extends o150 {
            o154() { return eval("super.method()") }
            o68() { var o52= () => super.o52(); return o52(); }
            o155() { return eval("var method= () => super.method(); method();") }
            o156() { return eval("var method=function () { return super.method()}; method();") }
            o157() { return eval("class a{method(){return 'bar'}}; class b extends a{method(){return super.method()}};(new b()).method()") }
        }

        let o163 = new o151();

        o11.o12("foo",o163.o154(),"'super' in eval()");
        o11.o12("foo",o163.o68(),"'super' in lambda");
        o11.o12("foo",o163.o155(),"'super' in lambda in eval");
        // TODO: Re-enable the following when our behavior is correct
        //assert.throws(function () { instance.method4()}, ReferenceError, "'super' in function body in eval");
        o11.o12("bar",o163.o157(),"'super' in class method in eval");
     }
  },
  {
        name: "Class method can be a generator",
        o17: function() {
            class o169 {
                *o170() {
                    for (let o171 of [1,2,3]) {
                        yield o171;
                    }
                }
            };

            let o150 = [];
            for (let o171 of new o169().o170()) {
                o150.push(o171);
            }

            o11.o12([1,2,3], o150, "");
        }
    },
    {
        name: "Class method with computed name can be a generator",
        o17: function() {
            class o169 {
                *[Symbol.iterator]() {
                    for (let o171 of [1,2,3]) {
                        yield o171;
                    }
                }
            };

            let o150 = [];
            for (let o171 of new o169()) {
                o150.push(o171);
            }

            o11.o12([1,2,3], o150, "");
        }
    },
    {
        name: "Class static method descriptor values",
        o17: function() {
            class o23 {
                static o52() {
                    return 'abc';
                }
                static ['method2']() {
                    return 'def';
                }
                static get o155() {
                    return 'ghi';
                }
                static get ['method4']() {
                    return 'jkl';
                }
                static set o157(o25) {
                    return 'mno';
                }
                static set ['method6'](o25) {
                    return 'pqr';
                }
                static *o159() {
                    yield 'stu';
                }
                static *['method8']() {
                    yield 'vwx';
                }
            }

            o2(o23, 'method', 'abc');
            o2(o23, 'method2', 'def');
            o2(o23, 'method3', 'ghi', true);
            o2(o23, 'method4', 'jkl', true);
            o2(o23, 'method5', 'mno', false, true);
            o2(o23, 'method6', 'pqr', false, true);
            o2(o23, 'method7', 'stu', false, false, true);
            o2(o23, 'method8', 'vwx', false, false, true);
        }
    },
    {
        name: "Class method descriptor values",
        o17: function() {
            class o23 {
                o52() {
                    return 'abc';
                }
                ['method2']() {
                    return 'def';
                }
                get o155() {
                    return 'ghi';
                }
                get ['method4']() {
                    return 'jkl';
                }
                set o157(o25) {
                    return 'mno';
                }
                set ['method6'](o25) {
                    return 'pqr';
                }
                *o159() {
                    yield 'stu';
                }
                *['method8']() {
                    yield 'vwx';
                }
            }

            o2(o23.prototype, 'method', 'abc');
            o2(o23.prototype, 'method2', 'def');
            o2(o23.prototype, 'method3', 'ghi', true);
            o2(o23.prototype, 'method4', 'jkl', true);
            o2(o23.prototype, 'method5', 'mno', false, true);
            o2(o23.prototype, 'method6', 'pqr', false, true);
            o2(o23.prototype, 'method7', 'stu', false, false, true);
            o2(o23.prototype, 'method8', 'vwx', false, false, true);
        }
    },
    {
        name: "Class constructor cannot be called without new keyword",
        o17: function () {
            class o21 {}

            o11.o18(function() { o21(); }, o44, "Base class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            o11.o18(function() { o21.call(); }, o44, "Base class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            o11.o18(function() { o21.apply(); }, o44, "Base class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");

            class o23 extends o21 {}

            o11.o18(function() { o23(); }, o44, "Derived class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            o11.o18(function() { o23.call(); }, o44, "Derived class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            o11.o18(function() { o23.apply(); }, o44, "Derived class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");

            class o172 extends Array { };

            o11.o18(function() { o172(); }, o44, "Class derived from built-in does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            o11.o18(function() { o172.call(); }, o44, "Class derived from built-in does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            o11.o18(function() { o172.apply(); }, o44, "Class derived from built-in does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
        }
    },
    {
        name: "Class methods cannot be called as constructors",
        o17: function() {
            class o23 {
                o52() {
                    return { o22: 'a' };
                }
                static o68() {
                    return { o22: 'b' };
                }
            }

            o11.o18(function() { new o23.prototype.o52(); }, o44, "Base class prototype method cannot be new'd", "Function is not a constructor");
            o11.o18(function() { new o23.o68(); }, o44, "Base class static method cannot be new'd", "Function is not a constructor");

            class o24 extends o23 {
                o155() {
                    return { o22: 'c' };
                }
                static o156() {
                    return { o22: 'd' };
                }
            }

            o11.o18(function() { new o24.prototype.o52(); }, o44, "Base class prototype method cannot be new'd", "Function is not a constructor");
            o11.o18(function() { new o24.o68(); }, o44, "Base class static method cannot be new'd", "Function is not a constructor");
            o11.o18(function() { new o24.prototype.o155(); }, o44, "Derived class prototype method cannot be new'd", "Function is not a constructor");
            o11.o18(function() { new o24.o156(); }, o44, "Derived class static method cannot be new'd", "Function is not a constructor");

            class o26 extends Array {
                o157() {
                    return { o22: 'e' };
                }
                static o158() {
                    return { o22: 'f' };
                }
            }

            o11.o18(function() { new o26.prototype.o157(); }, o44, "Derived class prototype method cannot be new'd", "Function is not a constructor");
            o11.o18(function() { new o26.o158(); }, o44, "Derived class static method cannot be new'd", "Function is not a constructor");
        }
    },
    {
        name: "Class static member cannot have computed name 'prototype'",
        o17: function() {
            o11.o18(function() { eval(`class A { static ['prototype']() {} };`); }, o44, "Ordinary static member cannot have computed name 'prototype'", "Class static member cannot be named 'prototype'");
            o11.o18(function() { eval(`class A { static get ['prototype']() {} };`); }, o44, "Static get member cannot have computed name 'prototype'", "Class static member cannot be named 'prototype'");
            o11.o18(function() { eval(`class A { static set ['prototype'](x) {} };`); }, o44, "Static set member cannot have computed name 'prototype'", "Class static member cannot be named 'prototype'");
            o11.o18(function() { eval(`class A { static *['prototype']() {} };`); }, o44, "Static generator member cannot have computed name 'prototype'", "Class static member cannot be named 'prototype'");

            o11.o46(function() { eval(`class A { ['prototype']() {} };`); }, "Class member with computed name 'prototype' is fine");
            o11.o46(function() { eval(`class A { get ['prototype']() {} };`); }, "Class get member with computed name 'prototype' is fine");
            o11.o46(function() { eval(`class A { set ['prototype'](x) {} };`); }, "Class set member with computed name 'prototype' is fine");
            o11.o46(function() { eval(`class A { *['prototype']() {} };`); }, "Class generator member with computed name 'prototype' is fine");
        }
    },
    {
        name: "Extends expression of a class declaration or expression is strict mode",
        o17: function() {
            var o173 = class extends function() { arguments.caller; } {};
            o11.o18(function() { Object.getPrototypeOf(o173).arguments; }, o44, "The extends expression of a class expression should be parsed in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            o11.o18(function() { new o173(); }, o44, "New'ing a class with a parent constructor that throws in strict mode, should throw", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

            o11.o18(function() { eval('class WorseClass extends (function foo() { with ({}); return foo; }()) {};'); }, o19, "The extends expression of a class decl should be parsed in strict mode", "'with' statements are not allowed in strict mode");
        }
    },
    {
        name: "Class identifier is evaluated in strict mode",
        o17: function() {
            o11.o18(function() { eval('class arguments {};'); }, o19, "A class may not be named arguments because assigning to arguments in strict mode is not allowed", "Invalid usage of 'arguments' in strict mode");
            o11.o18(function() { eval('var x = class arguments {};'); }, o19, "A class may not be named arguments because assigning to arguments in strict mode is not allowed", "Invalid usage of 'arguments' in strict mode");

            o11.o18(function() { eval('class eval {};'); }, o19, "A class may not be named eval because assigning to arguments in strict mode is not allowed", "Invalid usage of 'eval' in strict mode");
            o11.o18(function() { eval('var x = class eval {};'); }, o19, "A class may not be named eval because assigning to arguments in strict mode is not allowed", "Invalid usage of 'eval' in strict mode");
        }
    },
    {
        name: "Classes with caller/arguments methods",
        o17: function() {
            class o174 {
                static arguments() { return 'abc'; }
                static caller() { return 'def'; }

                arguments() { return '123'; }
                caller() { return '456'; }
            }

            o11.o12('abc', o174.arguments(), "ClassWithArgumentsAndCallerMethods.arguments() === 'abc'");
            o11.o12('def', o174.caller(), "ClassWithArgumentsAndCallerMethods.caller() === 'def'");
            o11.o12('123', new o174().arguments(), "new ClassWithArgumentsAndCallerMethods().arguments() === '123'");
            o11.o12('456', new o174().caller(), "new ClassWithArgumentsAndCallerMethods().caller() === '456'");

            let o175 = '';
            let o176 = '';
            class o177 {
                static get arguments() { return 'abc'; }
                static set arguments(o103) { o175 = o103; }
                static get caller() { return 'def'; }
                static set caller(o103) { o176 = o103; }

                get arguments() { return '123'; }
                set arguments(o103) { o175 = o103; }
                get caller() { return '456'; }
                set caller(o103) { o176 = o103; }
            }

            o11.o12('abc', o177.arguments, "ClassWithArgumentsAndCallerAccessors.arguments === 'abc'");
            o11.o12('def', o177.caller, "ClassWithArgumentsAndCallerAccessors.caller === 'def'");
            o11.o12('123', new o177().arguments, "new ClassWithArgumentsAndCallerAccessors().arguments === '123'");
            o11.o12('456', new o177().caller, "new ClassWithArgumentsAndCallerAccessors().caller === '456'");
            o177.arguments = 123
            o11.o12(123, o175, "ClassWithArgumentsAndCallerAccessors.arguments = 123 (calls setter)");
            new o177().arguments = 456
            o11.o12(456, o175, "new ClassWithArgumentsAndCallerAccessors().arguments = 456 (calls setter)");
            o177.caller = 123
            o11.o12(123, o176, "ClassWithArgumentsAndCallerAccessors.caller = 123 (calls setter)");
            new o177().caller = 456
            o11.o12(456, o176, "new ClassWithArgumentsAndCallerAccessors().caller = 456 (calls setter)");

            class o178 {
                static *arguments() { yield 'abc'; }
                static *caller() { yield 'def'; }

                *arguments() { yield '123'; }
                *caller() { yield '456'; }
            }

            let o14;
            for (o14 of o178.arguments()) {}
            o11.o12('abc', o14, "s of ClassWithArgumentsAndCallerGeneratorMethods.arguments() === 'abc'");
            o14;
            for (o14 of o178.caller()) {}
            o11.o12('def', o14, "s of ClassWithArgumentsAndCallerGeneratorMethods.caller() === 'def'");
            o14;
            for (o14 of new o178().arguments()) {}
            o11.o12('123', o14, "s of new ClassWithArgumentsAndCallerGeneratorMethods().arguments() === '123'");
            o14;
            for (o14 of new o178().caller()) {}
            o11.o12('456', o14, "s of new ClassWithArgumentsAndCallerGeneratorMethods().caller() === '456'");

            class o179 {
                static ['arguments']() { return 'abc'; }
                static ['caller']() { return 'def'; }

                ['arguments']() { return '123'; }
                ['caller']() { return '456'; }
            }

            o11.o12('abc', o179.arguments(), "ClassWithArgumentsAndCallerComputedNameMethods.arguments() === 'abc'");
            o11.o12('def', o179.caller(), "ClassWithArgumentsAndCallerComputedNameMethods.caller() === 'def'");
            o11.o12('123', new o179().arguments(), "new ClassWithArgumentsAndCallerComputedNameMethods().arguments() === '123'");
            o11.o12('456', new o179().caller(), "new ClassWithArgumentsAndCallerComputedNameMethods().caller() === '456'");

            class o180 {
                static get ['arguments']() { return 'abc'; }
                static set ['arguments'](o103) { o175 = o103; }
                static get ['caller']() { return 'def'; }
                static set ['caller'](o103) { o176 = o103; }

                get ['arguments']() { return '123'; }
                set ['arguments'](o103) { o175 = o103; }
                get ['caller']() { return '456'; }
                set ['caller'](o103) { o176 = o103; }
            }

            o11.o12('abc', o177.arguments, "ClassWithArgumentsAndCallerAccessors.arguments === 'abc'");
            o11.o12('def', o177.caller, "ClassWithArgumentsAndCallerAccessors.caller === 'def'");
            o11.o12('123', new o177().arguments, "new ClassWithArgumentsAndCallerAccessors().arguments === '123'");
            o11.o12('456', new o177().caller, "new ClassWithArgumentsAndCallerAccessors().caller === '456'");
            o177.arguments = 123
            o11.o12(123, o175, "ClassWithArgumentsAndCallerAccessors.arguments = 123 (calls setter)");
            new o177().arguments = 456
            o11.o12(456, o175, "new ClassWithArgumentsAndCallerAccessors().arguments = 456 (calls setter)");
            o177.caller = 123
            o11.o12(123, o176, "ClassWithArgumentsAndCallerAccessors.caller = 123 (calls setter)");
            new o177().caller = 456
            o11.o12(456, o176, "new ClassWithArgumentsAndCallerAccessors().caller = 456 (calls setter)");

            class o181 {
                static *['arguments']() { yield 'abc'; }
                static *['caller']() { yield 'def'; }

                *['arguments']() { yield '123'; }
                *['caller']() { yield '456'; }
            }

            o14;
            for (o14 of o181.arguments()) {}
            o11.o12('abc', o14, "s of ClassWithArgumentsAndCallerComputedNameGeneratorMethods.arguments() === 'abc'");
            o14;
            for (o14 of o181.caller()) {}
            o11.o12('def', o14, "s of ClassWithArgumentsAndCallerComputedNameGeneratorMethods.caller() === 'def'");
            o14;
            for (o14 of new o181().arguments()) {}
            o11.o12('123', o14, "s of new ClassWithArgumentsAndCallerComputedNameGeneratorMethods().arguments() === '123'");
            o14;
            for (o14 of new o181().caller()) {}
            o11.o12('456', o14, "s of new ClassWithArgumentsAndCallerComputedNameGeneratorMethods().caller() === '456'");
        }
    },
    {
        name: "toString on constructor should return class declaration or expression",
        o17: function () {
            var o23 = class { };
            var o21 = class o21 extends o23 { constructor (...o182) { super(...o182); }  set o25(o150) { this.o183 = o150; } set o184(o150) { this.o185 = o150; } };
            class o24 {
                set o25(o150) { this.o183 = o150; }
                set o184(o150) { this.o185 = o150; }
            };
            class o26 { constructor() {}  get o25() { return 0; } };
            var o27 = o26;

            o11.o12("class A extends B { constructor (...args) { super(...args); }  set x(a) { this._x = a; } set y(a) { this._y = a; } }", o21.prototype.constructor.toString());
            o11.o12("class { }", o23.prototype.constructor.toString());
            o11.o12("class C {\r\n                set x(a) { this._x = a; }\r\n                set y(a) { this._y = a; }\r\n            }", o24.prototype.constructor.toString());
            o11.o12("class D { constructor() {}  get x() { return 0; } }", o26.prototype.constructor.toString());
            o11.o12("class D { constructor() {}  get x() { return 0; } }", o27.prototype.constructor.toString());
        }
    },
    {
        name: "class getters and setters must take exactly zero and one parameters respectively",
        o17: function () {
            o11.o46(function () { eval("class C { get foo() { } }"); }, "Class getter with zero parameters is valid syntax", "asdf");
            o11.o18(function () { eval("class C { get foo(x) { } }"); }, o19, "Class getter with one parameter is invalid syntax", "Getter functions must have no parameters");
            o11.o18(function () { eval("class C { get foo(x, y, z) { } }"); }, o19, "Class getter with more than one parameter is invalid syntax", "Getter functions must have no parameters");

            o11.o46(function () { eval("class C { set foo(x) { } }"); }, "Class setter with exactly one parameter is valid syntax", "asdf");
            o11.o18(function () { eval("class C { set foo() { } }"); }, o19, "Class setter with zero parameters is invalid syntax", "Setter functions must have exactly one parameter");
            o11.o18(function () { eval("class C { set foo(x, y, z) { } }"); }, o19, "Class setter with more than one parameter is invalid syntax", "Setter functions must have exactly one parameter");
        }
    },
    {
        name: "class identifier is const binding inside class body",
        o17: function () {
            o11.o18(function () { class o21 { constructor() { o21 = 0; } }; new o21(); }, o44, "Assignment to class identifier in constructor");
            o11.o18(function() { new (class o21 { constructor() { o21 = 0; }}); }, o44, "Assignment to class identifier in constructor");
            o11.o18(function() { class o21 { o47() { o21 = 0; } }; new o21().o47(); }, o44, "Assignment to class identifier in method");
            o11.o18(function() { new (class o21 { o47() { o21 = 0; } }).o47(); }, o44, "Assignment to class identifier in method" );
            o11.o18(function() { class o21 { get o25() { o21 = 0; } }; new o21().o25; }, o44, "Assignment to class identifier in getter");
            o11.o18(function() { (new (class o21 { get o25() { o21 = 0; } })).o25; }, o44, "Assignment to class identifier in getter");
            o11.o18(function() { class o21 { set o25(o186) { o21 = 0; } }; new o21().o25 = 15; }, o44, "Assignment to class identifier in setter");
            o11.o18(function() { (new (class o21 { set o25(o186) { o21 = 0; } })).o25 = 15; }, o44, "Assignment to class identifier in setter");
        }
    },
    {
        name: "`class x extends y` where `y` is an expression containing identifier `x` should be a ReferenceError",
        o17: function() {
            var o187 = "Use before declaration";

            function o188(o189) {
                o11.o18(function () { eval(o189) }, o99, `\n    ${o189}`, o187);
            }

            function o190(o189) {
                // Test a given class declaration (where class is named x) by itself and then with `var x =` and `let x =` prepended.
                o188(o189);
                o188(`var x = ${o189}`);
                o188(`let x = ${o189}`);
                // Run the same tests, where the class declaration is a wrapped in parens to form a class expression.
                // In the Test262 test case, the RHS is a class expression.
                // See: test262/test/language/statements/class/name-binding/in-extends-expression-assigned.js
                o188(`(${o189})`);
                o188(`var x = (${o189})`);
                o188(`let x = (${o189})`);
            }

            function o191(o25) { return o25; };
            function o192(o25) { return function() { return o25 }; }

            // Using expressions containing the `x` identifier for the extends clause
            o190("class x extends x {}");
            o190("class x extends (x) {}");
            o190("class x extends id(x) {}");
            o190("class x extends fun(x) {}");

            // Assigning the result to a different identifier
            o188("var y = class x extends x {}");
            o188("let y = class x extends x {}");

            // Defining `y` after the class to use default initialization (var y) or temporary deadzone (let y)
            o11.o18(function() {
                class o25 extends o184 {}; // y == undefined
                var o184 = function() {};
            }, o44, "y is undefined", "Function is not a constructor");
            o188(`
                class x extends y {}; // y is not defined (temporary deadzone)
                let y = function() {};
            `);

            // Using eval where the result of eval is the 'x' identifier or a value that captures the 'x' identifier
            o190("class x extends eval('x') {}");
            o190("class x extends eval('(x)') {}");
            o190("class x extends eval('id(x)') {}");
            o190("class x extends eval('fun(x)') {}");
        }
    },
];

o193.o194(o16, { o195: o0.o196[0] != "summary" });

// Bug 516429 at global scope
class o150 {};
o150 = null; // No error

// Bug 257621 at global scope
o11.o46(function () { eval('new (class {})();'); }, "Parenthesized class expressions can be new'd");
