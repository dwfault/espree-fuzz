//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(o3, name, o5, o6, o7, o8) {
    let o9 = Object.getOwnPropertyDescriptor(o3, name);
    let o12 = `obj[${name}](${o6},${o7},${o8})`;
    let o13;

    if (o6) {
        o13 = o9.get;

        o15.o16('function', typeof o13, `${o12}: Get method has 'get' property set in descriptor`);
        o15.o16(o5, o3[name], `${o12}: Invoking class get method returns correct value`);
        o15.o16(o5, o13(), `${o12}: Calling class get method function directly returns correct value`);

        o15.o17('prototype' in o13, `${o12}: Class method get does not have 'prototype' property`);
    } else if (o7) {
        o13 = o9.set;

        o15.o16('function', typeof o13, `${o12}: Set method has 'set' property set in descriptor`);
        o15.o16(undefined, o3[name], `${o12}: Invoking class set method returns undefined`);
        o15.o16(o5, o13(), `${o12}: Calling class set method function directly returns correct value`);

        o15.o17('prototype' in o13, `${o12}: Class method set does not have 'prototype' property`);


    } else if (o8) {
        o13 = o3[name];

        o15.o16('function', typeof o13, `${o12}: Class method generator function has correct type`);

        let o20;
        for (o20 of o13()) {}
        o15.o16(o5, o20, `${o12}: Calling class method generator returns correct value`);

        o15.o21(o9.writable, `${o12}: Class method generator functions are writable`);

        o15.o21('prototype' in o13, `${o12}: Class method generator does have 'prototype' property`);
    } else {
        o13 = o3[name]

        o15.o16('function', typeof o13, `${o12}: Class method has correct type`);
        o15.o16(o5, o13(), `${o12}: Calling class method returns correct value`);

        // get/set property descriptors do not have writable properties
        o15.o21(o9.writable, `${o12}: Class method functions are writable`);

        o15.o17('prototype' in o13, `${o12}: Class method does not have 'prototype' property`);
    }

    o15.o17(o9.enumerable, `${o12}: Class methods are not enumerable`);
    o15.o21(o9.configurable, `${o12}: Class methods are configurable`);

    o15.o17(o13.hasOwnProperty('arguments'), `${o12}: Class methods do not have an 'arguments' property`);
    o15.o17(o13.hasOwnProperty('caller'), `${o12}: Class methods do not have an 'caller' property`);
}

var o26 = [
  {
    name: "Class requires an extends expression if the extends keyword is used",
    o27: function () {
      o15.o28(function () { eval("class E extends { }") }, o30);
    }
  },
  {
    name: "Class declarations require a name",
    o27: function () {
      o15.o28(function () { eval("class { }") }, o30);
    }
  },
  {
    name: "Class methods may not have an octal name",
    o27: function () {
      o15.o28(function () { eval("class E0 { 0123() {} }") }, o30, "0123");
      o15.o28(function () { eval("class E1 { 0123.1() {} }") }, o30, "0123.1");
    }
  },
  {
    name: "Class prototypes must be non-writable",
    o27: function () {
      var o31 = Object.getOwnPropertyDescriptor(class { }, "prototype");
      o15.o17(o31.writable);
    }
  },
  {
    name: "Class static methods may not be named 'prototype'",
    o27: function () {
      o15.o28(function () { eval("class E0 { static prototype() {} }") }, o30, "static prototype");
      o15.o28(function () { eval("class E1 { static get prototype() {} }") }, o30, "static get prototype");
      o15.o28(function () { eval("class E2 { static set prototype(x) {} }") }, o30, "static set prototype");
    }
  },
  {
    name: "Class constructor method can only be a normal method - not getter, setter, or generator",
    o27: function () {
      o15.o28(function () { eval("class E { * constructor() {} }") }, o30, "Class constructor may not be a generator");
      o15.o28(function () { eval("class E0 { get constructor() {} }") }, o30, "get constructor");
      o15.o28(function () { eval("class E1 { set constructor(x) {} }") }, o30, "set constructor");
    }
  },
  {
    name: "Class method names can be duplicated; last one lexically always win",
    o27: function () {
      o15.o28(function () { eval("class E0 { constructor() {} constructor() {} }") }, o30, "Duplicated constructor");

      // Valid
      class o32 { o33() {} o33() {} }
      class o34 { get o33() {} get o33() {} }
      class o35 { set o33(o36) {} set o33(o36) {} }
      class o37 { get o33() {} set o33(o36) {} }
      class o38 { static o33() {} static o33() {} }
      class o39 { static get o33() {} static get o33() {} }
      class o40 { static set o33(o36) {} static set o33(o36) {} }
      class o41 { static get o33() {} static set o33(o36) {} }
      class o42 { o33() {} get o33() {} set o33(o36) {}}
      class o43 { static get o33() {} static set o33(o36) {} get o33() {} set o33(o36) {} }
      class o44 { static o33() {} static get o33() {} static set o33(o36) {}}

      class o45 { static o33() {} o33() {} }
      class o46 { static o33() {} get o33() {} set o33(o36) {}}
      class o47 { o33() {} static get o33() {} static set o33(o36) {}}
    }
  },
  {
    name: "Class extends expressions must be (null || an object that is a constructor with a prototype that is (null || an object))",
    o27: function () {
      class o48 {}
      o15.o21(Object.getPrototypeOf(o48.prototype) === Object.prototype, "Object.getPrototypeOf(BaseClass.prototype) === Object.prototype")
      o15.o21(Object.getPrototypeOf(o48.prototype.constructor) === Function.prototype, "Object.getPrototypeOf(BaseClass.prototype.constructor) === Function.prototype")

      class o53 extends null { }
      o15.o21(Object.getPrototypeOf(o53.prototype) === null, "Object.getPrototypeOf(ExtendsNull.prototype) === null")
      o15.o21(Object.getPrototypeOf(o53.prototype.constructor) === Function.prototype, "Object.getPrototypeOf(ExtendsNull.prototype.constructor) === Function.prototype")

      function o54 () {}
      o54.prototype = null;
      class o55 extends o54 {}
      o15.o21(Object.getPrototypeOf(o55.prototype) === null, "Object.getPrototypeOf(ExtendsNullPrototype.prototype) === null")
      o15.o21(Object.getPrototypeOf(o55.prototype.constructor) === o54, "Object.getPrototypeOf(ExtendsNullPrototype.prototype.constructor) === NullPrototype")

      class o56 extends Object {}
      o15.o21(Object.getPrototypeOf(o56.prototype) === Object.prototype, "Object.getPrototypeOf(ExtendsObject.prototype) === Object.prototype")
      o15.o21(Object.getPrototypeOf(o56.prototype.constructor) === Object, "Object.getPrototypeOf(ExtendsObject.prototype.constructor) === Object")

      function o57 () {}
      class o58 extends o57 {}
      o15.o21(Object.getPrototypeOf(o58.prototype) === o57.prototype, "Object.getPrototypeOf(ExtendsFunc.prototype) === Func.prototype")
      o15.o21(Object.getPrototypeOf(o58.prototype.constructor) === o57, "Object.getPrototypeOf(ExtendsFunc.prototype.constructor) === Func")


      o15.o28(function () { class o32 extends 0       { } }, o59, "Integer extends");
      o15.o28(function () { class o32 extends "test"  { } }, o59, "String extends");
      o15.o28(function () { class o32 extends {}      { } }, o59, "Object literal extends");
      o15.o28(function () { class o32 extends undefined { } }, o59, "Undefined extends");
      o15.o28(
          function () {
            function o60() {}
            o60.prototype = 0;
            class o32 extends o60 { }
          }, o59, "Integer prototype");
      o15.o28(
          function () {
            function o60() {}
            o60.prototype = "test";
            class o32 extends o60 { }
          }, o59, "String prototype");
      o15.o28(
          function () {
            function o60() {}
            o60.prototype = undefined;
            class o32 extends o60 { }
          }, o59, "Undefined prototype");

      o15.o61(function () { eval("class Foo extends new Proxy(class Bar {},{}){}"); });
    }
  },
  {
    name: "Class basic sanity tests",
    o27: function () {
      var o62;
      function o9(o36) {
        o62 = o36;
      }

      class o63 { }
      class o64 { ; }
      class o65 { constructor() { o9('ctor') } }
      class o66 { o67() { o9('method') } }
      class o68 { static o67() { o9('smethod') } }
      class o69 { get getter() { o9('getter') } }
      class o71 { static get getter() { o9('sgetter') } }
      class o72 { set setter(o36) { o9('setter ' + o36) } }
      class o74 { static set setter(o36) { o9('ssetter ' + o36) } }

      let o75 = new o63();
      let o76 = new o64();

      let o77 = new o65();
      o15.o16('ctor', o62, "constructing OnlyCtor class calls the constructor method");

      let o78 = new o66();
      let o79 = new o68();
      let o80 = new o69();
      let o81 = new o71();
      let o82 = new o72();
      let o83 = new o74();

      o78.o67();
      o15.o16('method', o62, "method calls function correctly");

      o68.o67();
      o15.o16('smethod', o62, "static method calls function correctly");

      o80.getter;
      o15.o16('getter', o62, "getter calls function correctly");

      o71.getter;
      o15.o16('sgetter', o62, "static getter calls function correctly");

      o82.setter = null;
      o15.o16('setter null', o62, "setter calls function correctly");

      o74.setter = null;
      o15.o16('ssetter null', o62, "static setter calls function correctly");


      class o84 extends o66 { o85() { o9('sub method') } }
      class o86 extends o66 { o67() { o9('override method') } }

      let o87 = new o84();
      let o88 = new o86();

      o87.o67();
      o15.o16('method', o62, "derived class inherits base class method");

      o87.o85();
      o15.o16('sub method', o62, "derived class adds new method correctly");

      o88.o67();
      o15.o16('override method', o62, "derived class overrides method correctly");


      let o89 = class o89 { o67() { o9('class expr method') } }
      let o90 = class { o67() { o9('class expr no name method') } }

      let o91 = new o89();
      let o92 = new o90();

      o91.o67();
      o15.o16('class expr method', o62, "method call on class expression works correctly");

      o92.o67();
      o15.o16('class expr no name method', o62, "method call on class expression with no name works correctly");


      class o93 { static o67() { o9(o93.o67.toString()) } }
      let o95 = class o96 { static o67() { o9(o96.o67.toString()) } }

      o93.o67();
      o15.o16('method() { p(InternalNameUse.method.toString()) }', o62, "Use of class declaration's name inside method works correctly");

      o95.o67();
      o15.o16('method() { p(InternalNameUseExpr.method.toString()) }', o62, "Use of class expression's name inside method works correctly");
    }
  },
  {
    name: "Class basic sanity tests in closures",
    o27: function () {
      var o62;
      function o9(o36) {
        o62 = o36;
      }

      function o97() {
        class o63 { }
        class o64 { ; }
        class o65 { constructor() { o9('ctor') } }
        class o66 { o67() { o9('method') } }
        class o68 { static o67() { o9('smethod') } }
        class o69 { get getter() { o9('getter') } }
        class o71 { static get getter() { o9('sgetter') } }
        class o72 { set setter(o36) { o9('setter ' + o36) } }
        class o74 { static set setter(o36) { o9('ssetter ' + o36) } }
        class o98 { ["cmethod"]() { o9('cmethod') } }
        class o99 { static ["cmethod"]() { o9('scmethod') } }
        class o100 { get ["cgetter"]() { o9('cgetter') } }
        class o101 { static get ["cgetter"]() { o9('scgetter') } }
        class o102 { set ["csetter"](o36) { o9('csetter ' + o36) } }
        class o103 { static set ["csetter"](o36) { o9('scsetter ' + o36) } }

        function o104() {
          let o75 = new o63();
          let o76 = new o64();

          let o77 = new o65();
          o15.o16('ctor', o62, "constructing OnlyCtor class calls the constructor method");

          let o78 = new o66();
          let o79 = new o68();
          let o80 = new o69();
          let o81 = new o71();
          let o82 = new o72();
          let o83 = new o74();
          let o105 = new o98();
          let o106 = new o100();
          let o107 = new o102();

          o78.o67();
          o15.o16('method', o62, "method calls function correctly");

          o68.o67();
          o15.o16('smethod', o62, "static method calls function correctly");

          o80.getter;
          o15.o16('getter', o62, "getter calls function correctly");

          o71.getter;
          o15.o16('sgetter', o62, "static getter calls function correctly");

          o82.setter = null;
          o15.o16('setter null', o62, "setter calls function correctly");

          o74.setter = null;
          o15.o16('ssetter null', o62, "static setter calls function correctly");

          o105.o108()
          o15.o16('cmethod', o62, "computed name method calls function correctly");

          o99.o108()
          o15.o16('scmethod', o62, "static computed name method calls function correctly");

          o106.o109;
          o15.o16('cgetter', o62, "computed name getter calls function correctly");

          o101.o109;
          o15.o16('scgetter', o62, "static computed name getter calls function correctly");

          o107.o110 = null;
          o15.o16('csetter null', o62, "computed name setter calls function correctly");

          o103.o110 = null;
          o15.o16('scsetter null', o62, "static computed name setter calls function correctly");
        }

        o104();
      }
      o97();

      function o111() {
        class o66 { o67() { o9('method') } }
        class o84 extends o66 { o85() { o9('sub method') } }
        class o86 extends o66 { o67() { o9('override method') } }

        function o112() {
          let o87 = new o84()
          let o88 = new o86()

          o87.o67();
          o15.o16('method', o62, "derived class inherits base class method");

          o87.o85();
          o15.o16('sub method', o62, "derived class adds new method correctly");

          o88.o67();
          o15.o16('override method', o62, "derived class overrides method correctly");
        }

        o112();
      }
      o111();

      function o113() {
        let o89 = class o89 { o67() { o9('class expr method') } }
        let o90 = class { o67() { o9('class expr no name method') } }

        function o114() {
          let o91 = new o89();
          let o92 = new o90();

          o91.o67();
          o15.o16('class expr method', o62, "method call on class expression works correctly");

          o92.o67();
          o15.o16('class expr no name method', o62, "method call on class expression with no name works correctly");
        }

        o114()
      }
      o113()

      function o115() {
        class o93 { static o67() { o9(o93.o67.toString()) } }
        let o95 = class o96 { static o67() { o9(o96.o67.toString()) } }

        function o116() {
          o93.o67();
          o15.o16('method() { p(InternalNameUse.method.toString()) }', o62, "Use of class declaration's name inside method works correctly");

          o95.o67();
          o15.o16('method() { p(InternalNameUseExpr.method.toString()) }', o62, "Use of class expression's name inside method works correctly");
        }

        o116()
      }
      o115()
    }
  },
  {
    name: "Invalid uses of super",
    o27: function () {
      class o32 {
        constructor() { o9('constructor A'); }
        o67()      { o9('method A'); }
      }

      // Test valid postfix operators in the wrong context
      o15.o28(function () { eval("super();") },        o117, "Invalid use of super");
      o15.o28(function () { eval("super[1];") },       o117, "Invalid use of super");
      o15.o28(function () { eval("super.method();") }, o117, "Invalid use of super");

      // Syntax Error for base class constructor with direct super call
      o15.o28(function () { eval("class A { constructor() { super(); } }") }, o30, "Base class constructor cannot call super");
    }
  },
  {
    name: "Basic uses of super",
    o27: function () {
      var o118 = [];

      class o32 {
        constructor() { this.o119 = true; o118.push('A'); }
        o67()      { return 'method A'; }
        set o121(o122) { this.o119 = o122; }
        get o121() { return this.o119; }
      }

      class o34 extends o32 {
        constructor() {
          o118.push('B pre-super');
          super();
          o118.push('B post-super');
        }
        o123()      { return super.o67() }
        o124() { return super['method'](); }
        o125()         { return super.o121; }
        o126(value)    { super.o121 = value; }
        o128()        { return super['initialized']; }
        o129(value)   { super['initialized'] = value; }
        o130() {
          var o131 = o36 => super[o36]();
          return o131('method');
        }
      }

      let o132 = new o32();
      o15.o16(1, o118.length, "new A calls A's constructor once");
      o15.o16('A', o118[0], "new A calls A's constructor");
      o118 = [];

      let o134 = new o34();
      o15.o16(3, o118.length, "new B calls B and A constructors once each");
      o15.o16('B pre-super', o118[0], "new B calls B's constructor first");
      o15.o16('A', o118[1], "super within B's constructor calls A's constructor");
      o15.o16('B post-super', o118[2], "A's constructor returns to B's constructor after super call");


      // Sanity checks
      o15.o21(o132.o67() === 'method A', "classA.method() === 'method A'");
      o15.o21(o132.o121 === true, "classA.initialized === true");

      // Super checks
      o15.o21(o134.o121 === true, "classB.initialized === true");
      o15.o21(o134.o123() === 'method A', "classB.superMethod() === 'method A'");
      o15.o21(o134.o121 === true, "classB.initialized === true");
      o134.o126(123);
      o15.o21(o134.o125() === 123, "classB.getAprop() === 123");
      o15.o21(o134.o128() === 123, "classB.getAIndex() === 123");
      o134.o129(456);
      o15.o21(o134.o125() === 456, "classB.getAprop() === 456");
      o15.o21(o134.o128() === 456, "classB.getAIndex() === 456");

      o15.o21(o134.o130() === 'method A', "classB.lambdaIndex() === 'method A'");
    }
  },
  {
    name: "Super used outside the class declaration function",
    o27: function () {
      class o135
      {
        o67() { return 3; }
      };

      class o136
      {
        o67() { return 2; }
      }

      function o137(o138)
      {
        class o34 extends (o138)
        {
          o67() { return 4; }
          o139() { return super.o67(); }
        };
        return o34;
      }

      let o140 = o137(o135);
      let o141 = o137(o136);
      let o142 = new o140();
      let o143 = new o141();

      o15.o21(o142.o67() === 4, "b1.method() === 4)");
      o15.o21(o142.o139() === 3, "b1.supermethod() === 3");

      o15.o21(o143.o67() === 4, "b2.method() === 4");
      o15.o21(o143.o139() === 2, "b2.supermethod() === 2");
    }
  },
  {
    name: "Super adapts to __proto__ changes",
    o27: function () {
      class o135 {
        o67() { return "A1"; }
        static o144() { return "static A1"; }
      }
      class o136 {
        o67() { return "A2"; }
        static o144() { return "static A2"; }
      }
      class o145 {
        o67() { return "A3"; }
        static o144() { return "static A3"; }
      }

      class o34 extends o135 {
        o67() { return super.o67(); }
        static o144() { return super.o144(); }
      }

      o15.o16(o34.__proto__, o135);
      o15.o16(o34.prototype.__proto__, o135.prototype);

      let o147 = new o34();
      let o148 = new o34();
      o15.o16("A1",                o147.o67());
      o15.o16("static A1",         o34.o144());
      o15.o16(o147.o67(), o148.o67());

      // Change the 'static' part of B
      o34.__proto__ = o136;

      o15.o16(o34.__proto__,           o136);
      o15.o16(o34.prototype.__proto__, o135.prototype);
      o15.o16("A1",                  o147.o67(), "Instance methods should not be affected by B.__proto__ change");
      o15.o16("static A2",           o34.o144(),    "Static method should have changed after B.__proto__ change");
      o15.o16(o147.o67(),   o148.o67(), "All instances should not have been affected by B.__proto__ change");

      // Change the 'dynamic' part of B
      o34.prototype.__proto__ = o145.prototype;

      o15.o16(o34.__proto__,           o136);
      o15.o16(o34.prototype.__proto__, o145.prototype);
      o15.o16("A3",                  o147.o67(), "Instance methods should be affected after B.prototype.__proto__ change");
      o15.o16("static A2",           o34.o144(),    "Static methods should be unaffected after B.prototype.__proto__ change");
      o15.o16(o147.o67(),   o148.o67(), "All instances should have been changed by B.prototype.__proto__ change");
    }
  },
  {
    name: "super reference in base class constructor",
    o27: function () {
        class o32 {
            constructor() { super.toString(); }
            o149() { super.o150 = 1; }
        }
        class o34 {
            constructor() {
                this.o151 = super.toString();
                this.o152 = super.toString.call(this);
                this.o154 = (()=>super.toString())() ;
                this.o155 = (()=>(()=>super.toString())())() ;
                this.o156 = eval("super.toString()");
                this.o157 = eval("eval(\"super.toString()\")");
                this.o158 = eval("(()=>super.toString())()");
                this.o159 = eval("(()=>eval(\"super.toString()\"))()");
                this.o160 = eval("eval(\"(()=>super.toString())()\")");
                this.o161 = (()=>eval("super.toString()"))() ;
                this.o162 = (()=>(()=>eval("super.toString()"))())() ;

                this.o163 = super.toString;
                this.o164 = (()=>super.toString)() ;
                this.o165 = (()=>(()=>super.toString)())() ;
                this.o166 = eval("super.toString");
                this.o167 = eval("eval(\"super.toString\")");
                this.o168 = eval("(()=>super.toString)()");
                this.o169 = eval("(()=>eval(\"super.toString\"))()");
                this.o170 = eval("eval(\"(()=>super.toString)()\")");
                this.o171 = (()=>eval("super.toString"))() ;
                this.o172 = (()=>(()=>eval("super.toString"))())() ;
            }
        }

        o15.o16("function", typeof o32);

        var o173 = new o32();
        var o174 = new o34();

        o173.o149();
        o15.o16(1, o173.o150);

        o15.o16("[object Object]", o174.o151);
        o15.o16("[object Object]", o174.o152);
        o15.o16("[object Object]", o174.o154);
        o15.o16("[object Object]", o174.o155);
        o15.o16("[object Object]", o174.o156);
        o15.o16("[object Object]", o174.o157);
        o15.o16("[object Object]", o174.o158);
        o15.o16("[object Object]", o174.o159);
        o15.o16("[object Object]", o174.o160);
        o15.o16("[object Object]", o174.o161);
        o15.o16("[object Object]", o174.o162);

        o15.o16(Object.prototype.toString, o174.o163);
        o15.o16(Object.prototype.toString, o174.o164);
        o15.o16(Object.prototype.toString, o174.o165);
        o15.o16(Object.prototype.toString, o174.o166);
        o15.o16(Object.prototype.toString, o174.o167);
        o15.o16(Object.prototype.toString, o174.o168);
        o15.o16(Object.prototype.toString, o174.o169);
        o15.o16(Object.prototype.toString, o174.o170);
        o15.o16(Object.prototype.toString, o174.o171);
        o15.o16(Object.prototype.toString, o174.o172);
    }
  },
  {
    name: "Default constructors",
    o27: function () {
      class o173 { };
      class o174 extends o173 { };

      o15.o16("class a { }", o173.prototype.constructor.toString());
      o15.o16("class b extends a { }", o174.prototype.constructor.toString());

      var o175 = [];
      var test = [];
      class o177 { constructor() { o175 = [...arguments]; } };
      class o31 extends o177 { };
      new o31();
      o15.o16(o175, [], "Default extends ctor with no args");

      test = [1, 2, 3];
      new o31(...test);
      o15.o16(o175, test, "Default extends ctor with some args");

      test = [-5, 4.53, "test", null, undefined, 9348579];
      new o31(...test);
      o15.o16(o175, test, "Default extends ctor with different arg types");
    }
  },
  {
    name: "Evals and lambdas",
    o27: function () {
      class o173 { o67() { return "hello world"; } };
      class o174 extends o173 {
        o179() { return eval("super.method()"); }
        o85() { return eval("super['method']()"); }
        o180() { return eval("eval('super.method();')"); }
        o181() { return eval("x => super.method()")(); }
        o182() { return (o36 => eval("super.method()"))(); }
        o183() { return (o36 => o36 => o36 => super.o67())()()(); }
        o184() { return (o36 => eval("x => eval('super.method')"))()()(); }
        o185() { eval(); return (o36 => super.o67())(); }
        o186() { eval(); return (o36 => function () { return eval("x => super()")(); }())();}
        o187(){ var o36 = () => { eval(""); return super.o67(); }; return o36(); }
      }

      let o188 = new o174();

      o15.o16("hello world", o188.o179(), "Basic eval use");
      o15.o16("hello world", o188.o85(), "Basic eval use 2");
      o15.o16("hello world", o188.o180(), "Nested eval use");
      o15.o16("hello world", o188.o181(), "Mixed lambda and eval use, no nesting");
      o15.o16("hello world", o188.o182(), "Mixed lambda and eval use, no nesting 2");
      o15.o16("hello world", o188.o183(), "Nested lambdas and eval");
      o15.o16("hello world", o188.o184(), "Nested lambdas and nested evals");
      o15.o16("hello world", o188.o185(), "Lambda with an eval in the parent");
      o15.o28(function() { o188.o186(); }, o117);
      o15.o28(function() { (o36 => eval('super()'))(); }, o117);
      o15.o16("hello world", o188.o187(), "Lambda with an eval in the lambda");
    }
  },
  {
    name: "Immutable binding within class body, declarations also have normal let binding in enclosing context",
    o27: function() {
      var o177 = class o189 {
          o190() { eval('k = 0; WScript.Echo(k);'); }
      };

      // Class name is immutable within class body.
      var o191 = new o177();
      o15.o28(function() { o191.o190() }, o59);

      // Class name is also immutable within body of class declaration statement
      class o192 extends o177 {
          o190() { eval('Q = 0;'); }
      };

      var o193 = new o192();
      o15.o28(function() { o193.o190() }, o59);
      // Class name binding in enclosing context is mutable
      o192 = 0;
      o15.o16(o192, 0, "Mutable class declaration binding");
    }
  },
  {
    name: "Ensure the super scope slot is emitted at the right time",
    o27: function () {
      // Previously caused an assert in ByteCodeGen.
      class o173 { o67 () { return "hello" } };
      class o174 extends o173 { o67 () { let o173; let o174; return (o36 => super.o67()); } }
    }
  },
  {
    name: "'super' reference in eval() and lambda",
    o27: function () {
        class o173 {
            o67() {return "foo"}
        }

        class o174 extends o173 {
            o179() { return eval("super.method()") }
            o85() { var o67= () => super.o67(); return o67(); }
            o180() { return eval("var method= () => super.method(); method();") }
            o181() { return eval("var method=function () { return super.method()}; method();") }
            o182() { return eval("class a{method(){return 'bar'}}; class b extends a{method(){return super.method()}};(new b()).method()") }
        }

        let o188 = new o174();

        o15.o16("foo",o188.o179(),"'super' in eval()");
        o15.o16("foo",o188.o85(),"'super' in lambda");
        o15.o16("foo",o188.o180(),"'super' in lambda in eval");
        // TODO: Re-enable the following when our behavior is correct
        //assert.throws(function () { instance.method4()}, ReferenceError, "'super' in function body in eval");
        o15.o16("bar",o188.o182(),"'super' in class method in eval");
     }
  },
  {
        name: "Class method can be a generator",
        o27: function() {
            class o194 {
                *o195() {
                    for (let o196 of [1,2,3]) {
                        yield o196;
                    }
                }
            };

            let o173 = [];
            for (let o196 of new o194().o195()) {
                o173.push(o196);
            }

            o15.o16([1,2,3], o173, "");
        }
    },
    {
        name: "Class method with computed name can be a generator",
        o27: function() {
            class o194 {
                *[Symbol.iterator]() {
                    for (let o196 of [1,2,3]) {
                        yield o196;
                    }
                }
            };

            let o173 = [];
            for (let o196 of new o194()) {
                o173.push(o196);
            }

            o15.o16([1,2,3], o173, "");
        }
    },
    {
        name: "Class static method descriptor values",
        o27: function() {
            class o34 {
                static o67() {
                    return 'abc';
                }
                static ['method2']() {
                    return 'def';
                }
                static get o180() {
                    return 'ghi';
                }
                static get ['method4']() {
                    return 'jkl';
                }
                static set o182(o36) {
                    return 'mno';
                }
                static set ['method6'](o36) {
                    return 'pqr';
                }
                static *o184() {
                    yield 'stu';
                }
                static *['method8']() {
                    yield 'vwx';
                }
            }

            o2(o34, 'method', 'abc');
            o2(o34, 'method2', 'def');
            o2(o34, 'method3', 'ghi', true);
            o2(o34, 'method4', 'jkl', true);
            o2(o34, 'method5', 'mno', false, true);
            o2(o34, 'method6', 'pqr', false, true);
            o2(o34, 'method7', 'stu', false, false, true);
            o2(o34, 'method8', 'vwx', false, false, true);
        }
    },
    {
        name: "Class method descriptor values",
        o27: function() {
            class o34 {
                o67() {
                    return 'abc';
                }
                ['method2']() {
                    return 'def';
                }
                get o180() {
                    return 'ghi';
                }
                get ['method4']() {
                    return 'jkl';
                }
                set o182(o36) {
                    return 'mno';
                }
                set ['method6'](o36) {
                    return 'pqr';
                }
                *o184() {
                    yield 'stu';
                }
                *['method8']() {
                    yield 'vwx';
                }
            }

            o2(o34.prototype, 'method', 'abc');
            o2(o34.prototype, 'method2', 'def');
            o2(o34.prototype, 'method3', 'ghi', true);
            o2(o34.prototype, 'method4', 'jkl', true);
            o2(o34.prototype, 'method5', 'mno', false, true);
            o2(o34.prototype, 'method6', 'pqr', false, true);
            o2(o34.prototype, 'method7', 'stu', false, false, true);
            o2(o34.prototype, 'method8', 'vwx', false, false, true);
        }
    },
    {
        name: "Class constructor cannot be called without new keyword",
        o27: function () {
            class o32 {}

            o15.o28(function() { o32(); }, o59, "Base class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            o15.o28(function() { o32.call(); }, o59, "Base class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            o15.o28(function() { o32.apply(); }, o59, "Base class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");

            class o34 extends o32 {}

            o15.o28(function() { o34(); }, o59, "Derived class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            o15.o28(function() { o34.call(); }, o59, "Derived class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            o15.o28(function() { o34.apply(); }, o59, "Derived class constructor does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");

            class o200 extends Array { };

            o15.o28(function() { o200(); }, o59, "Class derived from built-in does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            o15.o28(function() { o200.call(); }, o59, "Class derived from built-in does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
            o15.o28(function() { o200.apply(); }, o59, "Class derived from built-in does not have a [[call]] slot", "Class constructor cannot be called without the new keyword");
        }
    },
    {
        name: "Class methods cannot be called as constructors",
        o27: function() {
            class o34 {
                o67() {
                    return { o33: 'a' };
                }
                static o85() {
                    return { o33: 'b' };
                }
            }

            o15.o28(function() { new o34.prototype.o67(); }, o59, "Base class prototype method cannot be new'd", "Function is not a constructor");
            o15.o28(function() { new o34.o85(); }, o59, "Base class static method cannot be new'd", "Function is not a constructor");

            class o35 extends o34 {
                o180() {
                    return { o33: 'c' };
                }
                static o181() {
                    return { o33: 'd' };
                }
            }

            o15.o28(function() { new o35.prototype.o67(); }, o59, "Base class prototype method cannot be new'd", "Function is not a constructor");
            o15.o28(function() { new o35.o85(); }, o59, "Base class static method cannot be new'd", "Function is not a constructor");
            o15.o28(function() { new o35.prototype.o180(); }, o59, "Derived class prototype method cannot be new'd", "Function is not a constructor");
            o15.o28(function() { new o35.o181(); }, o59, "Derived class static method cannot be new'd", "Function is not a constructor");

            class o37 extends Array {
                o182() {
                    return { o33: 'e' };
                }
                static o183() {
                    return { o33: 'f' };
                }
            }

            o15.o28(function() { new o37.prototype.o182(); }, o59, "Derived class prototype method cannot be new'd", "Function is not a constructor");
            o15.o28(function() { new o37.o183(); }, o59, "Derived class static method cannot be new'd", "Function is not a constructor");
        }
    },
    {
        name: "Class static member cannot have computed name 'prototype'",
        o27: function() {
            o15.o28(function() { eval(`class A { static ['prototype']() {} };`); }, o59, "Ordinary static member cannot have computed name 'prototype'", "Class static member cannot be named 'prototype'");
            o15.o28(function() { eval(`class A { static get ['prototype']() {} };`); }, o59, "Static get member cannot have computed name 'prototype'", "Class static member cannot be named 'prototype'");
            o15.o28(function() { eval(`class A { static set ['prototype'](x) {} };`); }, o59, "Static set member cannot have computed name 'prototype'", "Class static member cannot be named 'prototype'");
            o15.o28(function() { eval(`class A { static *['prototype']() {} };`); }, o59, "Static generator member cannot have computed name 'prototype'", "Class static member cannot be named 'prototype'");

            o15.o61(function() { eval(`class A { ['prototype']() {} };`); }, "Class member with computed name 'prototype' is fine");
            o15.o61(function() { eval(`class A { get ['prototype']() {} };`); }, "Class get member with computed name 'prototype' is fine");
            o15.o61(function() { eval(`class A { set ['prototype'](x) {} };`); }, "Class set member with computed name 'prototype' is fine");
            o15.o61(function() { eval(`class A { *['prototype']() {} };`); }, "Class generator member with computed name 'prototype' is fine");
        }
    },
    {
        name: "Extends expression of a class declaration or expression is strict mode",
        o27: function() {
            var o202 = class extends function() { arguments.caller; } {};
            o15.o28(function() { Object.getPrototypeOf(o202).arguments; }, o59, "The extends expression of a class expression should be parsed in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            o15.o28(function() { new o202(); }, o59, "New'ing a class with a parent constructor that throws in strict mode, should throw", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

            o15.o28(function() { eval('class WorseClass extends (function foo() { with ({}); return foo; }()) {};'); }, o30, "The extends expression of a class decl should be parsed in strict mode", "'with' statements are not allowed in strict mode");
        }
    },
    {
        name: "Class identifier is evaluated in strict mode",
        o27: function() {
            o15.o28(function() { eval('class arguments {};'); }, o30, "A class may not be named arguments because assigning to arguments in strict mode is not allowed", "Invalid usage of 'arguments' in strict mode");
            o15.o28(function() { eval('var x = class arguments {};'); }, o30, "A class may not be named arguments because assigning to arguments in strict mode is not allowed", "Invalid usage of 'arguments' in strict mode");

            o15.o28(function() { eval('class eval {};'); }, o30, "A class may not be named eval because assigning to arguments in strict mode is not allowed", "Invalid usage of 'eval' in strict mode");
            o15.o28(function() { eval('var x = class eval {};'); }, o30, "A class may not be named eval because assigning to arguments in strict mode is not allowed", "Invalid usage of 'eval' in strict mode");
        }
    },
    {
        name: "Classes with caller/arguments methods",
        o27: function() {
            class o204 {
                static arguments() { return 'abc'; }
                static caller() { return 'def'; }

                arguments() { return '123'; }
                caller() { return '456'; }
            }

            o15.o16('abc', o204.arguments(), "ClassWithArgumentsAndCallerMethods.arguments() === 'abc'");
            o15.o16('def', o204.caller(), "ClassWithArgumentsAndCallerMethods.caller() === 'def'");
            o15.o16('123', new o204().arguments(), "new ClassWithArgumentsAndCallerMethods().arguments() === '123'");
            o15.o16('456', new o204().caller(), "new ClassWithArgumentsAndCallerMethods().caller() === '456'");

            let o205 = '';
            let o206 = '';
            class o207 {
                static get arguments() { return 'abc'; }
                static set arguments(o122) { o205 = o122; }
                static get caller() { return 'def'; }
                static set caller(o122) { o206 = o122; }

                get arguments() { return '123'; }
                set arguments(o122) { o205 = o122; }
                get caller() { return '456'; }
                set caller(o122) { o206 = o122; }
            }

            o15.o16('abc', o207.arguments, "ClassWithArgumentsAndCallerAccessors.arguments === 'abc'");
            o15.o16('def', o207.caller, "ClassWithArgumentsAndCallerAccessors.caller === 'def'");
            o15.o16('123', new o207().arguments, "new ClassWithArgumentsAndCallerAccessors().arguments === '123'");
            o15.o16('456', new o207().caller, "new ClassWithArgumentsAndCallerAccessors().caller === '456'");
            o207.arguments = 123
            o15.o16(123, o205, "ClassWithArgumentsAndCallerAccessors.arguments = 123 (calls setter)");
            new o207().arguments = 456
            o15.o16(456, o205, "new ClassWithArgumentsAndCallerAccessors().arguments = 456 (calls setter)");
            o207.caller = 123
            o15.o16(123, o206, "ClassWithArgumentsAndCallerAccessors.caller = 123 (calls setter)");
            new o207().caller = 456
            o15.o16(456, o206, "new ClassWithArgumentsAndCallerAccessors().caller = 456 (calls setter)");

            class o208 {
                static *arguments() { yield 'abc'; }
                static *caller() { yield 'def'; }

                *arguments() { yield '123'; }
                *caller() { yield '456'; }
            }

            let o20;
            for (o20 of o208.arguments()) {}
            o15.o16('abc', o20, "s of ClassWithArgumentsAndCallerGeneratorMethods.arguments() === 'abc'");
            o20;
            for (o20 of o208.caller()) {}
            o15.o16('def', o20, "s of ClassWithArgumentsAndCallerGeneratorMethods.caller() === 'def'");
            o20;
            for (o20 of new o208().arguments()) {}
            o15.o16('123', o20, "s of new ClassWithArgumentsAndCallerGeneratorMethods().arguments() === '123'");
            o20;
            for (o20 of new o208().caller()) {}
            o15.o16('456', o20, "s of new ClassWithArgumentsAndCallerGeneratorMethods().caller() === '456'");

            class o209 {
                static ['arguments']() { return 'abc'; }
                static ['caller']() { return 'def'; }

                ['arguments']() { return '123'; }
                ['caller']() { return '456'; }
            }

            o15.o16('abc', o209.arguments(), "ClassWithArgumentsAndCallerComputedNameMethods.arguments() === 'abc'");
            o15.o16('def', o209.caller(), "ClassWithArgumentsAndCallerComputedNameMethods.caller() === 'def'");
            o15.o16('123', new o209().arguments(), "new ClassWithArgumentsAndCallerComputedNameMethods().arguments() === '123'");
            o15.o16('456', new o209().caller(), "new ClassWithArgumentsAndCallerComputedNameMethods().caller() === '456'");

            class o210 {
                static get ['arguments']() { return 'abc'; }
                static set ['arguments'](o122) { o205 = o122; }
                static get ['caller']() { return 'def'; }
                static set ['caller'](o122) { o206 = o122; }

                get ['arguments']() { return '123'; }
                set ['arguments'](o122) { o205 = o122; }
                get ['caller']() { return '456'; }
                set ['caller'](o122) { o206 = o122; }
            }

            o15.o16('abc', o207.arguments, "ClassWithArgumentsAndCallerAccessors.arguments === 'abc'");
            o15.o16('def', o207.caller, "ClassWithArgumentsAndCallerAccessors.caller === 'def'");
            o15.o16('123', new o207().arguments, "new ClassWithArgumentsAndCallerAccessors().arguments === '123'");
            o15.o16('456', new o207().caller, "new ClassWithArgumentsAndCallerAccessors().caller === '456'");
            o207.arguments = 123
            o15.o16(123, o205, "ClassWithArgumentsAndCallerAccessors.arguments = 123 (calls setter)");
            new o207().arguments = 456
            o15.o16(456, o205, "new ClassWithArgumentsAndCallerAccessors().arguments = 456 (calls setter)");
            o207.caller = 123
            o15.o16(123, o206, "ClassWithArgumentsAndCallerAccessors.caller = 123 (calls setter)");
            new o207().caller = 456
            o15.o16(456, o206, "new ClassWithArgumentsAndCallerAccessors().caller = 456 (calls setter)");

            class o211 {
                static *['arguments']() { yield 'abc'; }
                static *['caller']() { yield 'def'; }

                *['arguments']() { yield '123'; }
                *['caller']() { yield '456'; }
            }

            o20;
            for (o20 of o211.arguments()) {}
            o15.o16('abc', o20, "s of ClassWithArgumentsAndCallerComputedNameGeneratorMethods.arguments() === 'abc'");
            o20;
            for (o20 of o211.caller()) {}
            o15.o16('def', o20, "s of ClassWithArgumentsAndCallerComputedNameGeneratorMethods.caller() === 'def'");
            o20;
            for (o20 of new o211().arguments()) {}
            o15.o16('123', o20, "s of new ClassWithArgumentsAndCallerComputedNameGeneratorMethods().arguments() === '123'");
            o20;
            for (o20 of new o211().caller()) {}
            o15.o16('456', o20, "s of new ClassWithArgumentsAndCallerComputedNameGeneratorMethods().caller() === '456'");
        }
    },
    {
        name: "toString on constructor should return class declaration or expression",
        o27: function () {
            var o34 = class { };
            var o32 = class o32 extends o34 { constructor (...o212) { super(...o212); }  set o36(o173) { this.o213 = o173; } set o214(o173) { this.o215 = o173; } };
            class o35 {
                set o36(o173) { this.o213 = o173; }
                set o214(o173) { this.o215 = o173; }
            };
            class o37 { constructor() {}  get o36() { return 0; } };
            var o38 = o37;

            o15.o16("class A extends B { constructor (...args) { super(...args); }  set x(a) { this._x = a; } set y(a) { this._y = a; } }", o32.prototype.constructor.toString());
            o15.o16("class { }", o34.prototype.constructor.toString());
            o15.o16("class C {\r\n                set x(a) { this._x = a; }\r\n                set y(a) { this._y = a; }\r\n            }", o35.prototype.constructor.toString());
            o15.o16("class D { constructor() {}  get x() { return 0; } }", o37.prototype.constructor.toString());
            o15.o16("class D { constructor() {}  get x() { return 0; } }", o38.prototype.constructor.toString());
        }
    },
    {
        name: "class getters and setters must take exactly zero and one parameters respectively",
        o27: function () {
            o15.o61(function () { eval("class C { get foo() { } }"); }, "Class getter with zero parameters is valid syntax", "asdf");
            o15.o28(function () { eval("class C { get foo(x) { } }"); }, o30, "Class getter with one parameter is invalid syntax", "Getter functions must have no parameters");
            o15.o28(function () { eval("class C { get foo(x, y, z) { } }"); }, o30, "Class getter with more than one parameter is invalid syntax", "Getter functions must have no parameters");

            o15.o61(function () { eval("class C { set foo(x) { } }"); }, "Class setter with exactly one parameter is valid syntax", "asdf");
            o15.o28(function () { eval("class C { set foo() { } }"); }, o30, "Class setter with zero parameters is invalid syntax", "Setter functions must have exactly one parameter");
            o15.o28(function () { eval("class C { set foo(x, y, z) { } }"); }, o30, "Class setter with more than one parameter is invalid syntax", "Setter functions must have exactly one parameter");
        }
    },
    {
        name: "class identifier is const binding inside class body",
        o27: function () {
            o15.o28(function () { class o32 { constructor() { o32 = 0; } }; new o32(); }, o59, "Assignment to class identifier in constructor");
            o15.o28(function() { new (class o32 { constructor() { o32 = 0; }}); }, o59, "Assignment to class identifier in constructor");
            o15.o28(function() { class o32 { o62() { o32 = 0; } }; new o32().o62(); }, o59, "Assignment to class identifier in method");
            o15.o28(function() { new (class o32 { o62() { o32 = 0; } }).o62(); }, o59, "Assignment to class identifier in method" );
            o15.o28(function() { class o32 { get o36() { o32 = 0; } }; new o32().o36; }, o59, "Assignment to class identifier in getter");
            o15.o28(function() { (new (class o32 { get o36() { o32 = 0; } })).o36; }, o59, "Assignment to class identifier in getter");
            o15.o28(function() { class o32 { set o36(o216) { o32 = 0; } }; new o32().o36 = 15; }, o59, "Assignment to class identifier in setter");
            o15.o28(function() { (new (class o32 { set o36(o216) { o32 = 0; } })).o36 = 15; }, o59, "Assignment to class identifier in setter");
        }
    },
    {
        name: "`class x extends y` where `y` is an expression containing identifier `x` should be a ReferenceError",
        o27: function() {
            var o217 = "Use before declaration";

            function o218(o219) {
                o15.o28(function () { eval(o219) }, o117, `\n    ${o219}`, o217);
            }

            function o220(o219) {
                // Test a given class declaration (where class is named x) by itself and then with `var x =` and `let x =` prepended.
                o218(o219);
                o218(`var x = ${o219}`);
                o218(`let x = ${o219}`);
                // Run the same tests, where the class declaration is a wrapped in parens to form a class expression.
                // In the Test262 test case, the RHS is a class expression.
                // See: test262/test/language/statements/class/name-binding/in-extends-expression-assigned.js
                o218(`(${o219})`);
                o218(`var x = (${o219})`);
                o218(`let x = (${o219})`);
            }

            function o221(o36) { return o36; };
            function o222(o36) { return function() { return o36 }; }

            // Using expressions containing the `x` identifier for the extends clause
            o220("class x extends x {}");
            o220("class x extends (x) {}");
            o220("class x extends id(x) {}");
            o220("class x extends fun(x) {}");

            // Assigning the result to a different identifier
            o218("var y = class x extends x {}");
            o218("let y = class x extends x {}");

            // Defining `y` after the class to use default initialization (var y) or temporary deadzone (let y)
            o15.o28(function() {
                class o36 extends o214 {}; // y == undefined
                var o214 = function() {};
            }, o59, "y is undefined", "Function is not a constructor");
            o218(`
                class x extends y {}; // y is not defined (temporary deadzone)
                let y = function() {};
            `);

            // Using eval where the result of eval is the 'x' identifier or a value that captures the 'x' identifier
            o220("class x extends eval('x') {}");
            o220("class x extends eval('(x)') {}");
            o220("class x extends eval('id(x)') {}");
            o220("class x extends eval('fun(x)') {}");
        }
    },
];

o223.o224(o26, { o225: o0.o226[0] != "summary" });

// Bug 516429 at global scope
class o173 {};
o173 = null; // No error

// Bug 257621 at global scope
o15.o61(function () { eval('new (class {})();'); }, "Parenthesized class expressions can be new'd");
