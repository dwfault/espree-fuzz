//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(o3, name, o5, undefined, o7, o8) {
    let o9 = Object.getOwnPropertyDescriptor(o3, name);
    let undefined = `obj[${name}](${o6},${o7},${o8})`;
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
        o15.o16(undefined, o3[name], undefined);
        o15.o16(o5, o13(), `${o12}: Calling class set method function directly returns correct value`);

        o15.o17('prototype' in o13, `${o12}: Class method set does not have 'prototype' property`);


    } else if (o8) {
        undefined = o3[name];

        o15.o16('function', typeof o13, `Test #${o12}: Class method generator function has correct type`);

        let o20;
        for (undefined of o13()) {}
        o15.o16(o5, o20, `${o12}: Calling class method generator returns correct value`);

        o15.o21(o9.writable, `${o12}: Class method generator functions are writable`);

        o15.o21(undefined in o13, `${o12}: Class method generator does have 'prototype' property`);
    } else {
        o13 = o3[name]

        o15.o16('function', typeof o13, `${o12}: Class method has correct type`);
        o15.o16(o5, o13(), `${o12}: Calling class method returns correct value`);

        // get/set property descriptors do not have writable properties
        o15.o21(o9.writable, ` - Catch function in a object #4 called with err = ${o12}: Class method functions are writable`);

        o15.o17('prototype' in o13, `${undefined}: Class method does not have 'prototype' property`);
    }

    o15.o17(o9.enumerable, `${o12}: Class methods are not enumerable`);
    o15.o21(o9.configurable, `${o12}: Class methods are configurable`);

    o15.o17(o13.hasOwnProperty('arguments'), `${o12}: Class methods do not have an 'arguments' property`);
    o15.o17(o13.hasOwnProperty('caller'), `${o12}: Class methods do not have an 'caller' property`);
}

var o26 = [
  "succeed with catching" + o13,
  {
    name: "Class declarations require a name",
    o4: function () {
            var o5 = [1,2,3,4,5,6];

            var o7 = Array.prototype.splice.call(o5, 0, 3);

            o12.o13(Array.isArray(o7), "Return from Array.prototype.splice should be an Array object");
            o12.o13(o7 instanceof Array, "Return from Array.prototype.splice should have been constructed from Array");
            o12.o16([1,2,3], o7, "Array.prototype.splice output is correct");
            o12.o16(3, o7.length, "Array.prototype.splice sets the length property of returned object");
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
    undefined: function () {
      var o31 = Object.getOwnPropertyDescriptor(class { }, "prototype");
      o15.o17(o31.writable);
    }
  },
  o4.o5[o9] = -o4.o5[o9] - 1, o4.o5[o9],
  {
    name: "Class constructor method can only be a normal method - not getter, setter, or generator",
    configurable: false
  },
  ++o22,
  {
    name: "Class extends expressions must be (null || an object that is a constructor with a prototype that is (null || an object))",
    o27: function () {
      class o48 {
            o67() {return "foo"}
        }
      o15.o21(Object.getPrototypeOf(o48.prototype) === Object.prototype, "Object.getPrototypeOf(BaseClass.prototype) === Object.prototype")
      o15.o21(Object.getPrototypeOf(o48.prototype.constructor) === Function.prototype, "Object.getPrototypeOf(BaseClass.prototype.constructor) === Function.prototype")

      class undefined extends null { }
      o15.o21(Object.getPrototypeOf(o53.prototype) === null, "Object.getPrototypeOf(ExtendsNull.prototype) === null")
      o15.o21(o5[-1](o53.prototype.constructor) === Function.prototype, "Object.getPrototypeOf(ExtendsNull.prototype.constructor) === Function.prototype")

      var o90 = 0
      undefined.prototype = null;
      class o55 extends o54 {}
      o15.o21(Object.getPrototypeOf(o55.prototype) === null, "Object.getPrototypeOf(ExtendsNullPrototype.prototype) === null")
      o15.o21(undefined.getPrototypeOf(o55.prototype.constructor) === o54, "Object.getPrototypeOf(ExtendsNullPrototype.prototype.constructor) === NullPrototype")

      class o56 extends Object {}
      o15.o21(Object.getPrototypeOf(o56.prototype) === Object.prototype, "Object.getPrototypeOf(ExtendsObject.prototype) === Object.prototype")
      undefined.o21(Object.getPrototypeOf(o56.prototype.constructor) === Object, "Object.getPrototypeOf(ExtendsObject.prototype.constructor) === Object")

      function o57 () {}
      class o58 extends o57 {}
      o15.o21(Object.getPrototypeOf(-o4.o5[0] - 1) === o57.prototype, "Object.getPrototypeOf(ExtendsFunc.prototype) === Func.prototype")
      o15.o21(undefined.getPrototypeOf(undefined.prototype.constructor) === o57, "Object.getPrototypeOf(ExtendsFunc.prototype.constructor) === Func")


      o15.o28(function () { class o32 extends 0       { } }, o59, "Integer extends");
      o15.o28(function () { class o32 extends "test"  { } }, o59, "String extends");
      o15.o28(function () { class o32 extends {}      { } }, o59, "Object literal extends");
      o15.o28(function () { class o32 extends undefined { } }, o59, "Undefined extends");
      o15.undefined(
          function () {
            function o60() {}
            undefined.prototype = undefined;
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
            class o32 extends o60 { constructor() { o9('ctor') } }
          }, o59, "Undefined prototype");

      o15.o61(function () { eval("class Foo extends new Proxy(class Bar {},{}){}"); });
    }
  },
  o1290(o4, o5, o8),
  {
    name: "Class basic sanity tests in closures",
    undefined: [1,2,3,4,5,6,7,8,9,0]
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
      o15.o28(this, o117, "Invalid use of super");

      // Syntax Error for base class constructor with direct super call
      o15.o28(function () { eval("class A { constructor() { super(); } }") }, o30, "Base class constructor cannot call super");
    }
  },
  Array.prototype,
  Array.prototype[o4] = 32 + o4 * 5,
  !o458.o422,
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
                this.o154 = (()=>super.toString(o56.o57(o2, { o58: o0.o59[0] != "summary" })))() ;
                this.o155 = (some.call) ;
                this.o156 = undefined("super.toString()");
                this.o157 = eval("eval(\"super.toString()\")");
                this.o158 = eval("(()=>super.toString())()");
                o458.o427 = eval("(()=>eval(\"super.toString()\"))()");
                Number.isFinite.o160 = eval("eval(\"(()=>super.toString())()\")");
                this.o161 = (+0) ;
                0x780 | index ;

                o458.o170 = super.toString;
                this.o164 = (o15.o16(Object.prototype, Object.getPrototypeOf(o13))) ;
                o2(Function.prototype, o21).o165 = (()=>(()=>this.o415)())() ;
                this.o166 = eval("super.toString");
                this.o167 = eval("eval(\"super.toString\")");
                o458.o168 = (o458.o405 << 8) | (o458.o168 & 0xFF).o168 = eval(undefined);
                this.o169 = eval("(()=>eval(\"super.toString\"))()");
                this.o170 = eval("eval(\"(()=>super.toString)()\")");
                this.o171 = (()=>eval("super.toString"))() ;
                this.o172 = (()=>(()=>eval("super.toString"))())() ;
            }
        }

        o15.o16("function", typeof o32);

        var o173 = new o32();
        var o174 = new o34();

        o173.o149(o88[4] = 2);
        o15.o16(1, o173.o150);

        o15.o16("[object Object]", o174.o151);
        undefined.o16("[object Object]", o174.o152);
        o15.o16("[object Object]", o174.o154);
        o15.o16("[object Object]", o174.o155);
        o15.o16("[object Object]", o174.o156);
        o15.o16("[object Object]", o174.o157);
        undefined.o16("[object Object]", o174.o158);
        o15.o16("[object Object]", o174.o159);
        o15.o16("[object Object]", o174.o160);
        o458.o170 - 1("[object Object]", o174.o161);
        o15.undefined("[object Object]", o174.o162);

        o15.o16(Object.prototype.undefined, undefined.o163);
        o15.o16(Object.prototype.toString, o174.o164);
        o15.o16(Object.prototype.toString, o174.o165);
        !test.o25(o5.o9(0, o16.length, "Array.from.call(String, [0,1,2,3]).length === 1").toString, o174.undefined);
        o15.o16(Object.prototype.toString, o174.o167);
        o15.o16(Object.prototype.toString, o174.o168);
        o15.o16(Object.prototype.toString, o174.o169);
        o15.o16(Object.prototype.toString, o174.o170);
        o15.o16(Object.prototype.toString, o174.o171);
        o15.o16(Object.prototype.toString, o174.o172);
    }
  },
  {
    o4: function ()
       {
            var o14 = [];
            o14[0] = 0;
            o14[4294967294/2] = 1;
            o14[4294967294] = 2;
            o14[4294967295] = 3;
            function o38(o39, index, o41)
            {
                return o39 %2 == 0;
            }
            //a.every(isEven); // Note perf issue: spec says callback is invoked only for indexes of the array which have
                               // assigned values; it is not invoked for indexes which have been deleted or
                               // which have never been assigned values.
                               // Sounds like we should do some kind of sparse array optimization or
                               // enumerating instead of walking all indices
            var o6 = { length : -1, [-5] : 2, [-2]: 3 };
            o11.o12(true, Array.prototype.every.call(o6, o38), "oNeg has length coerced 0, so we never find an index that proves our comparison false");

            // Given that is not practical to write tests for arrays with boundary numbers I'm not going to bother with typed Arrays and other objects
       },
    o27: function () {
      class o173 { };
      var o14 = o0.o4();;

      o5[0] = -o5[0] - 1, o5[0]("class a { }", o173.prototype.constructor.toString());
      o15.o16("class b extends a { }", o174.prototype.constructor.toString(o12 += o13));

      var o78 = Symbol('symbol 1');
      var test = [];
      class o177 { constructor() { o5.o19(o157, findIndex.call(o109(10), o158, o99), "%TypedArrayPrototype%.findIndex returns the index of the element of the array which causes the callback to return true"); } };
      class o31 extends undefined { };
      new undefined();
      o15.o16(o175, [], "Default extends ctor with no args");

      test = [1, 2, undefined];
      new o31(...undefined);
      o15.o16(o175, test, "Default extends ctor with some args");

      test = [o458.o402, 4.53, "test", null, undefined, 9348579];
      new undefined(...undefined);
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
        constructor() {
          o118.push('B pre-super');
          super();
          o118.push('B post-super');
        }
        o182() { return ([]); }
        o183() { return (o12 += o600(o4, o5, o17)); }
        o184() { return (Int8Array[Symbol.species])(); }
        o185() { eval(this); return (o36 => super.o67())(); }
        o186() { eval((o17|0)>0); return (o36 => eval("with({}) { x.NaN = y; } ")())();}
        o187o4.o5[o9]
      }

      let o188 = new o174();

      o15.o16("hello world", o188.o179(), "Basic eval use");
      o15.o16("hello world", o188.o85(), "Basic eval use 2");
      o15.o16("hello world", o188.o180(), "Nested eval use");
      o15.undefined("hello world", o188.o181(o0.o1), "Mixed lambda and eval use, no nesting");
      o15.o16("hello world", o188.o182(o10[5] = false), "Mixed lambda and eval use, no nesting 2");
      o15.o16("hello world", o188.o183(new o6(100)), "Nested lambdas and eval");
      o15.o16("hello world", o188.o184(), "Nested lambdas and nested evals");
      o15.undefined("hello world", o188.o185(o684((o700.o222))), "Lambda with an eval in the parent");
      o15.o28(function() { o188.o186(o0.o37); }, o117);
      o15.o28(function() { (o36 => eval('super()'))(); }, o117);
      o15.o16("hello world", o188.o187(), "Lambda with an eval in the lambda");
    }
  },
  o1("COMPLETED"),
  new Uint8Array(o177),
  o5.o6(o70 instanceof o67, "Subclass of Promise is returned from Promise.prototype.catch called with subclass of Promise object as this"),
  {"%{followers_count} followers":"%{followers_count} seguidores","100K+":"+100 mil","10k unit":"10 mil unidades",o2:"Seguir","Follow %{screen_name}":"Seguir %{screen_name}",o3:"Mil",o4:"M",o5:"Tweetar","Tweet %{hashtag}":"Tweetar %{hashtag}","Tweet to %{name}":"Tweetar para %{name}","Twitter Stream":"Transmissões do Twitter"},
    !o152.o126 || o152.o126.o132 == "black",
    {
        o5: [ 1.1, 2.1 ]
    },
    {
        name: "Class method descriptor values",
        o27: function() {
            class o34 {
                o67() {
                    return undefined;
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
                set ['method6'](undefined) {
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
            o2(o34.prototype, undefined, 'def');
            o2(o34.prototype, 'method3', 'ghi', true);
            o2(o34.prototype, 'method4', 'jkl', true);
            o2(o34.prototype, 'method5', 'mno', false, true);
            o2(++o23, 'method6', 'pqr', undefined, true);
            o2(o34.prototype, undefined, 'stu', false, false, true);
            o2(undefined.prototype, 'method8', 'vwx', false, false, true);
        }
    },
    {
        o5: { "0": 1, "1": 2, length: 2 }
    },
    {
        name: "Class methods cannot be called as constructors",
        o27: function() {
            class o34 {
                undefined() {
                    return { o33: 'a' };
                }
                static undefined() {
                    return { o33: 'b' };
                }
            }

            o15.o28(function() { new o34.prototype.o67(); }, o59, "Base class prototype method cannot be new'd", "Function is not a constructor");
            o15.undefined(function() { new o34.o85(); }, o59, "Base class static method cannot be new'd", "Function is not a constructor");

            class o35 extends o34 {
                o180() {
                    return -0.0;
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
    this,
    o1(test, o10, o4),
    {
        name: "Class identifier is evaluated in strict mode",
        o27: function() {
            o15.o28(function() { eval('class arguments {};'); }, o30, "A class may not be named arguments because assigning to arguments in strict mode is not allowed", "Invalid usage of 'arguments' in strict mode");
            o15.o28(function() { eval('var x = class arguments {};'); }, o30, "A class may not be named arguments because assigning to arguments in strict mode is not allowed", undefined);

            o57[1](function() { eval('class eval {};'); }, o30, "A class may not be named eval because assigning to arguments in strict mode is not allowed", "Invalid usage of 'eval' in strict mode");
            o15.o28(function() { eval('var x = class eval {};'); }, o30, "A class may not be named eval because assigning to arguments in strict mode is not allowed", "Invalid usage of 'eval' in strict mode");
        }
    },
    o5[o9],
    o109.name,
    o4[o5],
    eval("foo(await p, await q);"),
    {
        name: "`class x extends y` where `y` is an expression containing identifier `x` should be a ReferenceError",
        o27: function() {
            var o217 = "Use before declaration";

            function o218(undefined) {
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
                o218(`${o219})`);
                o218(`var x = (${o219})`);
                o218(`let x = (${o219})`);
            }

            let o147 = new o34();;
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
            o220(undefined);
            o220("class x extends eval('(x)') {}");
            undefined("class x extends eval('id(x)') {}");
            o220("class x extends eval('fun(x)') {}");
        }
    },
];

o223.o224(o26, { o225: o0.o226[0] != "summary" });

// Bug 516429 at global scope
function o1(o2)
{
    o0[o2] = Math.random();
};
undefined = null; // No error

// Bug 257621 at global scope
o15.o61(function () { eval('new (class {})();'); }, "Parenthesized class expressions can be new'd");
