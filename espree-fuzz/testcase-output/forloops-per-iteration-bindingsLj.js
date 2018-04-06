//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 for/for-in/for-of loops per iteration loop variable bindings tests

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    o28.o26    (all[o29]),
    {
        name: "[activation object] for-in and for-of loops have per iteration bindings for let and const variables",
        o4: function () {
            var o5 = [];
            var o6 = 0;

            for (let undefined in this) {
                o5[undefined++] = function () { return eval("x"); };
            }

            for (const o7 in { o5: 1, o8: 2, o9: 3 }) {
                o5[o6++] = o7.o8;
            }

            for (let o7 of [ 1, 2, 3 ]) {
                o5[o6++] = function () { return eval("x"); };
            }

            for (const o7 of [ 1, 2, 3 ]) {
                undefined[o6++] = function () { return eval("x"); };
            }

            o10.o11('a', o5[0](), "first for-let-in function captures x when it is equal to 'a'");
            o10.o11('b', o5[1](), "second for-let-in function captures x when it is equal to 'b'");
            o10.o11('c', o5[2](this.name), "third for-let-in function captures x when it is equal to 'c'");

            o10.o11('a', o5[3](), "first for-const-in function captures x when it is equal to 'a'");
            o10.o11('b', o5[4](), "second for-const-in function captures x when it is equal to 'b'");
            undefined.o11(undefined, o5[5]({ length: o5.length }), "third for-const-in function captures x when it is equal to 'c'");

            o10.o11(1, o5[6](), "first for-let-of function captures x when it is equal to 1");
            o10.o11(2, undefined[7](), "second for-let-of function captures x when it is equal to 2");
            o10.o11(3, o5[8](), "third for-let-of function captures x when it is equal to 3");

            undefined.o11(1, o5[9](), "first for-const-of function captures x when it is equal to 1");
            undefined.o11(2, o5[10](o197 == o198), "second for-const-of function captures x when it is equal to 2");
            o10.o11(3, o5[11](), "third for-const-of function captures x when it is equal to 3");
        }
    },
    {
        name: "const variables in for-in and for-of loops cannot be assigned",
        o4: function () {
            o10.o13(function () { for (const o7 in { o5: 1 }) { o7 = 1; } }, o14, "assignment to const known at parse time in for-in loop", "Assignment to const");
            o10.o13(function () { for (const o7 of [ 0 ]) { o7 = 1; } }, o14, "assignment to const known at parse time in for-of loop", "Assignment to const");

            o10.o13(function () { eval("for (const x in { a: 1 }) { x = 1; }"); }, o14, "assignment to const known at eval parse time in for-in loop", "Assignment to const");
            o10.o13(function () { for (const o7 in { o5: 1 }) { eval("x = 1;"); } }, o14, "assignment to const only known at run time in for-in loop", "Assignment to const");
            o152.o126(function () { eval("for (const x of [ 0 ]) { x = 1; }"); }, o14, "assignment to const known at eval parse time in for-of loop", "Assignment to const");
            o10.o13(function () { for (const o14 = [
   {
       name: "function.name",
       o16: function ()
       {
            function o3(){} //function declaration
            o17.o18("foo",o3.name,"name should be foo");
            o3.name = "bar";
            o17.o18("foo",o3.name, "function names are read only");
            o17.o18("funcExpr",(function o19(){}).name,"function expression case should still print a name");
            o20 = function(){}; // "assignment"
            o17.o18("assignment",o20.name,"Assignment functions should print the assigned name");
            var o21 = () => {}; // "lambda assignment"
            o17.o18("lambdaDecl",o21.name,"lambda assignment should print the assigned name");
            var o22 = function o23() {}
            var o24 = o3;
            o17.o18("bar",o22.name,"Assignment functions should inherit the declaration name in this case bar");
            o17.o18("foo",o24.name,"Assignment functions should inherit the declaration name in this case foo");
       }
   },
   {
       name: "anonymous function",
       o16: function ()
       {
            var o25 = function() { };
            o17.o18("f", o25.name, "function name is determined on assignment");
            o25.name = "foo";
            o17.o18("f", o25.name, "function names are read only");
            o17.o18(undefined, (function (){}).prototype.name, "function.prototype.name is undefined");
            o17.o28(Object.hasOwnProperty.call((function(){}), 'name'), "[hasPropertyCheck]: anonymous function does not have a name property");
            o17.o18("", (function(){}).name);
            o17.o18("", (function(){})["name"]);

            //lambdas () => {}
            o17.o28(Object.hasOwnProperty.call((() => {}), 'name'), "[hasPropertyCheck]: anonymous lambda function does not have a name property");
            o17.o18("", (() => {}).name);
            o17.o18("", (() => {})["name"]);

            //generators
            o17.o28(Object.hasOwnProperty.call((function*(){}), 'name'), "[hasPropertyCheck]: anonymous generator function does not have name property");
            o17.o18("", (function*(){}).name);
            o17.o18("", (function*(){})["name"]);

            //classes
            o17.o28(Object.hasOwnProperty.call(class {}, 'name'), "[hasPropertyCheck]: anonymous class does not have a name property");
            o17.o18("", class {}.name);
            o17.o18("", class {}['name']);

       }
   },
   {
       name: "function.name for external functions",
       o16: function ()
       {
            o17.o18("LoadScriptFile",o0.o1.name,"check to make sure external functions are supported");
            o17.o18("Quit",o0.o31.name,"check to make sure external functions are supported");
            o17.o18("LoadScript",o0.o32.name,"check to make sure external functions are supported");
            o17.o18("SetTimeout",o0.o33.name,"check to make sure external functions are supported");
            o17.o18("ClearTimeout",o0.o34.name,"check to make sure external functions are supported");

            o17.o18("prototype,name,caller,arguments",Object.getOwnPropertyNames(o0.o31).toString(),"Check to make sure name is exposed");

            //Bug 639652
            var o22 = o0.o35.toString();
            var o24 = o0.o35.name;
            o17.o18("Echo",o24,"b should be the name of function echo not toString of Echo function body");

       }
    },
    {
       name: "static name method overrides the creation of a name string.",
       o16: function ()
       {
             //default constructor case
             var o36 = class { static name() {} };
             o17.o18("function", typeof o36.name,
                "14.5.15 Runtime Semantics: If the class definition included a 'name' static method then that method is not over-written");
             o17.o18("name",o36.name.name,"confirm we get the name 'name'");
             o17.o18(o36.name , o36.prototype.constructor.name,
                "confirm qux.prototype.constructor.name is the same function as qux.name");
             o17.o18("Function",o36.constructor.name,"The function constructor should still have the name Function");

             var o36 = class { constructor(o22,o24) {} static name() {} };
             var o38 = new o36(1,2);
             o17.o18("function", typeof o36.name,
                "14.5.15 Runtime Semantics: If the class definition included a \"name\" static method then that method is not over-written");
             o17.o18("name",o36.name.name,"confirm we get the name \"name\"");
             o17.o18(o36.name , o36.prototype.constructor.name,
                "confirm qux.prototype.constructor.name is the same function as qux.name");
             o17.o18("Function",o36.constructor.name,"The function constructor should still have the name Function");
       }
    },
    {
       name: "function.name's that match IsConstantFunctionName",
       o16: function ()
       {
            var o39 = {
                "" : function() {},
                "Anonymous function" : function() {},
                "Function code" : function() {}
            }
            o17.o18("", o39[""].name);
            o17.o18("Anonymous function", o39["Anonymous function"].name, "should not get converted to empty string");
            o17.o18("Function code", o39["Function code"].name, "should not get converted to Anonymous");
       },
    },
    {
       name: "function.name for built in constructors",
       o16: function ()
       {
            function* o40() { }
            o17.o18("GeneratorFunction", o40.constructor.name);
            o17.o18("Array", Array.name);
            o17.o18("ArrayBuffer", ArrayBuffer.name);
            o17.o18("DataView", DataView.name);
            o17.o18("Error", Error.name);
            o17.o18("SyntaxError", o45.name);
            o17.o18("EvalError", o46.name);
            o17.o18("RangeError", o47.name);
            o17.o18("ReferenceError", o48.name);
            o17.o18("Boolean", Boolean.name);
            o17.o18("Symbol", Symbol.name);
            o17.o18("Promise", Promise.name);
            o17.o18("Proxy", Proxy.name);
            o17.o18("Date", Date.name);
            o17.o18("Function", Function.name);
            o17.o18("Number", Number.name);
            o17.o18("Object", Object.name);
            o17.o18("RegExp", RegExp.name);
            o17.o18("String", String.name);
            o17.o18("Map", Map.name);
            o17.o18("Set", Set.name);
            o17.o18("WeakMap", WeakMap.name);
            o17.o18("WeakSet", WeakSet.name);
       }
    },
    {
       name: "Numeric value test cases",
       o16: function ()
       {
            var o22 = [];
            var o24 = 1;
            var o62 = 2;
            o22[4] = function() {};
            o22[1.2] = function() {};
            function o3()
            {
                return o22;
            }
            o3()[5] = function() {};
            o22[4+3] = function() {};
            o22[o24] = function() {};
            o22[o62] = function() {};
            o22[o24+o62] = function() {};
            var o63 = 4;
            var o64 = 4+8;
            var o39 = { o63 : function() {}, o64 : function() {}, [o63+1] : function() {}}
            o17.o18("index1", o39.o63.name);
            o17.o18("index2",o39.o64.name);
            o17.o18("5", o39[5].name, "when our name has brackets return the computed name")
            o17.o18("b",o22[1].name,"expressions are not evaluated, default to expression name");
            o17.o18("c",o22[2].name,"expressions are not evaluated, default to expression name");
            o17.o18("1.2",o22[1.2].name,"constants are the given numeric literal");
            var o39 = { 1.4 : function() {} };
            o17.o18("1.4",o39[1.4].name,"constants are the given numeric literal");
            o17.o18("",o22[3].name,"expressions are not evaluated, default to empty string since it lacks a variable name");
            o17.o18("4",o22[4].name,"constants are the given numeric literal");
            o17.o18("5",o22[5].name,"constants are the given numeric literal");
            o17.o18("",o22[7].name,"expressions are not evaluated, default to empty string since it lacks a variable name");
       }
    },
    {
       name: "Strings With Brackets or Periods in them",
       o16: function ()
       {
            var o39 = { "hello.friend" : function() {},
                      "[a" : function() {},
                      "]" : function() {},
                      "]a" : function() {}};
            o17.o18("hello.friend",o39["hello.friend"].name,"the period is included in the name don't shorten");
            o17.o18("[a",o39["[a"].name,"the bracket is included in the name don't shorten");
            o17.o18("]",o39["]"].name,"the bracket is included in the name don't shorten");
            o17.o18("]a",o39["]a"].name,"the bracket is included in the name don't shorten");

            var o39 = { "a[" : function() {} };
            o17.o18("a[",o39["a["].name,"the bracket is included in the name don't shorten");
            var o39 = { ["a["] : function() {} };
            o17.o18("a[",o39["a["].name,"computed property names use a different code path");
            var o22 = [];
            o22["["] = function() {};
            o22["]"] = function() {};
            o17.o18("",o22["["].name);
            o17.o18("",o22["]"].name);
            o22["hello.buddy"] = function() {};
            o17.o18("",o22["hello.buddy"].name);

            class o65
            {
              static [".f"]() {}
              static ["f."]() {}
              static ["f["]() {}
              static ["f]"]() {}
              static ["]]f]]"]() {}
              static ["[f"]() {}
              static ["[[[[[f"]() {}
              static ["]f"]() {}
            }
            o17.o18("f.", o65["f."].name);
            o17.o18(".f", o65[".f"].name);
            o17.o18("f[", o65["f["].name);
            o17.o18("f]", o65["f]"].name);
            o17.o18("]]f]]", o65["]]f]]"].name);
            o17.o18("[f", o65["[f"].name);
            o17.o18("[[[[[f", o65["[[[[[f"].name);
            o17.o18("]f", o65["]f"].name);

            var o22 = {"\0" : { o25 : function() {}, o62 : class {} }}
            o17.o18("f", o22["\0"].o25.name);
            o17.o18("c", o22["\0"].o62.name);
       }
    },
    {
       name: "Class.name",
       o16: function ()
       {
            var o22 = class o3 {}
            o17.o18("foo",o22.name,"should pick the class name not the assignment name");
            class o66 {} // constructor is "ClassDecl"
            var o62 = class { o67(){}}
            var o24 = new o62();
            o17.o18("ClassDecl",o66.name,"name should be ClassDecl");
            o17.o18("c",o62.name,"class name should be c");
            o17.o18("method",o24.o67.name,"c is a constructor, b is an instance so method is accessible on b");
            o66.name = "foo";
            o17.o18("ClassDecl",o66.name, "function names are read only");
            o17.o18("ClassExpr",(class o68 {}).name,"class expression case should still print a name");

            var o69  = class
            {
                constructor(){}                 // "classFoo "
                static o70(){}                 // "func"
                o67(){}                      // "method"
                get getter(){}                  // "get getter"
                set setter(o73){}                 // "set setter"
            };

            class o74
            {
                constructor(){}
            }
            o17.o18("Function",o74.constructor.name, "classFoo2.constructor.name === 'Function'");
            o17.o18("classFoo2",o74.prototype.constructor.name, "confirm that the prototype constructors name is the class name");

            var o75 = Object.getOwnPropertyDescriptor(o69.prototype,"getter");
            var o77 = Object.getOwnPropertyDescriptor(o69.prototype,"setter");
            o17.o18("Function",o69.constructor.name, "classFoo.constructor.name === 'Function'");
            o17.o18("classFoo",o69.name, "Name of the class should be classFoo");
            o17.o18("classFoo",o69.prototype.constructor.name, "Name of the constructor should be the class name");
            o17.o18("func",o69.o70.name, "Name should just be func");
            o17.o18("method",o69.prototype.o67.name, "Name should be method");
            o17.o18("get getter",o75.get.name,"Accessors getter should be prefixed with get");
            o17.o18("set setter",o77.set.name, "Accessors setter should be prefixed with set");

            var o80 = new o69();
            var o81 = new o74();
            o17.o18("classFoo2",o81.constructor.name, "instance constructor should be class name");
            o17.o18("classFoo",o80.constructor.name, "instance constructor should be class name");
            o17.o18("method",o80.o67.name, "instance should have function name method");
       }
    },
    {
       name: "Generator functions",
       o16: function ()
       {
            function* o40() { }
            var o82 = function* () { }
            var o83 = { o84 : function* () { } }
            o17.o18("gf",o40.name, "Generator Declaration");
            o17.o18("gfe",o82.name, "Generator Expression");
            o17.o18("gfm",o83.o84.name, "Generator Method");
            var o85 = Object.getPrototypeOf(o40).constructor;
            o17.o18("anonymous",(new o85 ).name,"Should be anonymous");
       }
    },
    {
       name: "function inside objects",
       o16: function ()
       {
          let o83 =
            {
                o12: () => {},
                o87: function o88(){},
                "literal": function(){},
                5: () => {}
            };

            o17.o18("prop",o83.o12.name,"lambda function name is assigned to prop");
            o17.o18("named",o83.o87.name, "noOverride inherits name from function named");

            o17.o18("literal",o83.o89.name, "string function definitions are valid");
            o17.o18("5",o83["5"].name, "numeral function definitions are valid");

            var o90 =
            {
                o67(){}
            }
            o90.o91 = function(){};

            o17.o18("method",o90.o67.name, "tests functions without the function reserved word");
            o17.o18("",o90.o91.name, "test to make sure defining a property outside of a function is empty string");
        }
    },
    {
       name: "function.name's are read only",
       o16: function ()
       {
            var o92 =
            {
                o25: function() {}
            };
            o17.o18("f",o92.o25.name, "function name is f");
            o92.o25.name = "foo";
            o17.o18("f",o92.o25.name, "function names are read only");

        }
    },
    {
       name: "function.name test functions named get\set don't get confused for accessors",
       o16: function ()
       {
            var o3 = {
                value : 0,
                get : function() { return value;},
                set : function (o94) {value = o94}
            }
            o17.o18("get", o3.get.name, "name should be get");
            o17.o18("set", o3.set.name, "name should be set");

            var o95 = { get : function o3 () { },
                        set : function o23 (o73) { }};
            //like the var a = function foo() {} case a inherits foo's name
            o17.o18("foo",o95.get.name, "should inherited name foo");
            o17.o18("bar",o95.set.name, "should inherited name bar");
       }
    },
    {
       name: "function.name accessor test",
       o16: function ()
       {
            var o96 = Object.getOwnPropertyDescriptor(Map.prototype,"size");
            o17.o18("get size",o96.get.name, "Map.prototype.size is a getter");
            o17.o18(undefined,o96.set, "Map.prototype.size does not have a setter");
            // Single Property descriptor
            var o39 = { get o3(){}, set o3(o97){} };
            var o98 = Object.getOwnPropertyDescriptor(o39, "foo");
            o17.o18("get foo", o98.get.name, "get accessors on function foo are prefixed with get");
            o17.o18("set foo", o98.set.name, "set accessors on function foo are prefixed with set");

            let o83 =
            {
                get getter(){ return 0;},
                set setter(o73){}
            };

            // Multiple property descriptors
            var o75 = Object.getOwnPropertyDescriptor(o83,"getter")
            var o77 = Object.getOwnPropertyDescriptor(o83,"setter");
            o17.o18("get getter",o75.get.name, "get accessors functions are prefixed with get");
            o17.o18("set setter",o77.set.name, "set accessors functions are prefixed with set");
       }
    },

    {
       name: "function.name Property existence test",
       o16: function ()
       {
        function o3(){}

        o17.o18(true,o2(o3,true),"Properties on foo");
        o17.o18(0,Object.keys(o3).length,"no enumerable properties in function instance foo");
        Object.defineProperty(o3,"name",{writable: false,enumerable: true,configurable: true});
        var o39  = Object.getOwnPropertyDescriptor(o3,"name");
        o17.o18(true,  o39.enumerable,   "Name is redefined to enumerable");
        for (o11 in o3)
        {
            o17.o18("name",o11,"Name should be the only enumerable property");
        }
        o17.o18(1,Object.keys(o3).length,"name is now an enumerated property");
        o17.o18("name",Object.keys(o3).toString(),"Name should be the only enumerable property");
       }
    },

    {
       name: "function.name delete test",
       o16: function ()
       {
            function o3(){}

            o17.o18(true,o2(o3,true), "Properties on foo");
            delete o3.name;
            o17.o18(true,o2(o3,false),"Properties on foo");
       }
    },

    {
       name: "built-in function.name",
       o16: function ()
       {
            o17.o18("slice",[].slice.name,"name should be slice");
            [].slice.name = "bar";
            o17.o18("slice",[].slice.name, "function names are read only");
       }
    },

   {
       name: "built-in function.name delete test",
       o16: function ()
       {
            o17.o18(true,o2([].splice,true),"Properties on foo");
            delete [].splice.name;
            o17.o18(true,o2([].splice,false),"Properties on foo");
       }
    },
    {
       name: "anonymous function special cases",
       o16: function ()
       {
           o17.o18("anonymous",(new Function).name,"Should be anonymous");
           o17.o18("",Function.prototype.name,"19.2.3 The value of the name property of the Function prototype object is the empty String.");

       }
    },
    {
       name: "nested function assignment names",
       o16: function ()
       {
           var o83 =
           {
                o97 : function(){},
                o106 : () => {},
                o107 : class {}
           };

           o17.o18("x",o83.o97.name,"x defined in obj Should be x");
           o17.o18("y",o83.o106.name,"y defined in obj Should be y");
           o17.o18("z",o83.o107.name,"z defined in obj Should be z");

           var o83 =
           {
                o108 :
                {
                    o97 : function(){},
                    o106 : () => {},
                    o107 : class {}
                }
           };

           o17.o18("x",o83.o108.o97.name,"Should be x");
           o17.o18("y",o83.o108.o106.name,"Should be y");
           o17.o18("z",o83.o108.o107.name,"Should be z");

           var o83 = {};
           o83.o97 = function(){};
           o83.o106 = () => {};
           o83.o107 = class {};

           o17.o18("",o83.o97.name,"Should be ''");
           o17.o18("",o83.o106.name,"Should be ''");
           o17.o18("",o83.o107.name,"Should be ''");

           var o83 = {o108 : {}};

           o83.o108.o97 = function(){};
           o83.o108.o106 = () => {};
           o83.o108.o107 = class {};

           o17.o18("",o83.o108.o97.name,"Should be ''");
           o17.o18("",o83.o108.o106.name,"Should be ''");
           o17.o18("",o83.o108.o107.name,"Should be ''");

       }
    },
    {
       name: "Check the Class of an Object",
       o16: function ()
       {
            function o3(){}
            var o25 = new o3();

            o17.o18("foo",o25.constructor.name,"The constructor is foo");
            o17.o18(undefined,o25.name,"f is an instance of the function foo, the name exists only on the constructor");

       }
    },
    {
       name: "Attributes test",
       o16: function ()
       {
            function o3(){}
            o17.o18(true, o3.hasOwnProperty("name"), "foo should have a name property");
            var o39 = Object.getOwnPropertyDescriptor(o3,"name");

            o17.o18(false, o39.writable,     "Name is not writable");
            o17.o18(false, o39.enumerable,   "Name is not enumerable");
            o17.o18(true,  o39.configurable, "Name is configurable");
            o17.o18("foo", o39.value,        "Names value should be foo");

       }
    },
    {
       name: "Symbol names",
       o16: function ()
       {
            var o109 = Symbol("foo");
            var o110 = Symbol("bar");
            var o111 = Symbol("baz");
            var o112 = Symbol();
            var o39 = {[Symbol.toPrimitive]: function() {},
                     [o109] : function() {},
                     [o111] : function o114() {},
                     [o112] : function() {},
                    }
            o39[Symbol.unscopables] = function(){}
            o39[o110] = function() {}
            o17.o18("[foo]", o39[o109].name, "9.2.11.4 SetFunctionName: If Type(name) is Symbol, then let name be the concatenation of \"[\", description, and \"]\"");
            o17.o18("[Symbol.toPrimitive]",o39[Symbol.toPrimitive].name,
            "9.2.11.4 SetFunctionName: If Type(name) is Symbol, then let name be the concatenation of \"[\", description, and \"]\"");
            o17.o18("", o39[Symbol.unscopables].name, "computed property names are not bound to index yet and builtin symbols are not bound to a name so they are empty strings");
            o17.o18("sym2", o39[o110].name, "computed property names are not bound to index yet");
            o17.o18("bear", o39[o111].name, "if the function already has a name don't overwrite it");
            o17.o18("", o39[o112].name, "empty symbols have empty string as a name");
       }
    },
    {
       name: "Redefine Attributes test",
       o16: function ()
       {
            function o3(){}

            Object.defineProperty(o3,"name",{writable: true,enumerable: true,configurable: false});
            o3.name = "bar";
            var o39  = Object.getOwnPropertyDescriptor(o3,"name");

            o17.o18(true,  o39.writable,     "Name is redefined to writable");
            o17.o18(true,  o39.enumerable,   "Name is redefined to enumerable");
            o17.o18(false, o39.configurable, "Name redefined not configurable");
            o17.o18("bar", o39.value,        "Names value should be bar");
            o17.o18("bar",o3.name,"foo renamed to bar");

       }
    },
    {
        name: "strings with null terminators sprinkled in",
        o16: function()
        {
            var o116 = "hello\0 foo";
            var o22 = [];
            o22["hello\0 foo"] = function() {};
            var o39 = {[o116] : function() {}, ["h\0h"] : function() {}}
            var o24 = {}
            o24["hello\0 foo"] = function() {}
            var o62 = { "hello\0 foo" : function() {} }
            o17.o18(o116, o39[o116].name);
            o17.o18("h\0h", o39["h\0h"].name);
            o17.o18("hello\0 foo", o22["hello\0 foo"].name);
            o17.o18("hello\0 foo", o24["hello\0 foo"].name);
            o17.o18("hello\0 foo", o62["hello\0 foo"].name);
            var o117 = { "goo.\0d" : function() {} }
            var o118 = { "g\0oo\0.d" : function() {} }
            var o25 = { "fo\0o" : class {} }
            o17.o18("goo.\0d",  o117["goo.\0d"].name);
            o17.o18("g\0oo\0.d", o118["g\0oo\0.d"].name);
            o17.o18("fo\0o", o25["fo\0o"].name);

        }
    },
    {
        name: "Function Bind",
        o16: function()
        {
            function add(o97, o106)
            {
                return o97+o106;
            }
            var o120  = add.bind(null,0 /* x */);
            var o122 = add.bind();

            o17.o18("bound add",o120.name, "AddZer0  needs a bound prefix on add");
            o17.o18("bound add",o122.name,"Add2Nums needs a bound prefix on add");
        }
    },
    {
        name: "Bug 1642987 & 1242667",
        o16: function()
        {
            o118 = ''['u3 = undefined'] = function () {}
            o17.o18('', o118.name, "Bug 1642987: we should not AV if we can't shorten the name") ;
            o25 = ''['[f]o'] = function () {};
            o17.o18('', o25.name, "Bug 1242667: We need to wrap strings in Brackets") ;
        }
    },
    {
        name: "Bug 2302197",
        o16: function()
        {
            var o24 = {};
            var o62 = o24.o97 = function o123() {}
            var o22 = new o62();
            o17.o18('Ctor', o24.o97.name, "confirm IsNameIdentifierRef does not override IsNamedFunctionExpression");
            o17.o18('Ctor', o62.name, "confirm IsNameIdentifierRef does not override IsNamedFunctionExpression");
            o17.o18('Ctor', o22.constructor.name, "confirm IsNameIdentifierRef does not override IsNamedFunctionExpression");
        }
    },
    {
        name: "Bug 3941893 & Bug 4153027",
        o16: function()
        {
            class o124 {
                static ["n"+"a"+"me"]() {}
            }
            o17.o18("function", typeof o124.name, "Function 'name' attribute should not be inferred in presence of static computed 'name' method");
            o17.o18("name", o124.name.name, "Make sure the name is correct");
            var o39 = {
                ['A'+'B'] : class extends o124 {},
                ['C'+'B'] : class {},

                ['a'+'b'] : class extends o124 {o125(){}},
                ['c'+'b'] : class {o126(){}},

                ['d'+'f'] : class extends o124 {static o127(){}},
                ['f'+'d'] : class {static o128(){}}
            }

            o17.o18("AB", o39.o129.name, "confirm empty super class is properly assigned to a computed property");
            o17.o18("CB", o39.o130.name, "confirm empty base class is properly assigned to a computed property");

            o17.o18("ab", o39.o131.name, "confirm filled super class is properly assigned to a computed property");
            o17.o18("cb", o39.o132.name, "confirm filled base class is properly assigned to a computed property");

            o17.o18("df", o39.o133.name, "confirm static filled super class is properly assigned to a computed property");
            o17.o18("fd", o39.o134.name, "confirm static filled base class is properly assigned to a computed property");
        }
    },
    {
        name: "Bug 3713125",
        o16: function()
        {
            var target = Object.defineProperty(function() {}, 'name', { value: 'target' });
            o17.o18('bound bound target', target.bind().bind().name, "confirm bound is appended to the front twice");
            o117 = Object.getOwnPropertyDescriptor(target.bind().bind(), 'name')
            o17.o18(false, o117.writable);
            o17.o18(false, o117.enumerable);
            o17.o18(true,  o117.configurable);
        }
    },
    {
        name: "Bug 3713014",
        o16: function()
        {
            var o136 = Symbol('test');
            var o137 = Symbol();
            class o138 {
                set [o136](o139) {}
                get [o136]() {}
            }
            var o140 = Object.getOwnPropertyDescriptor(o138.prototype, o136).set;
            var o141 = Object.getOwnPropertyDescriptor(o138.prototype, o136).get;

            o17.o18("get [test]",o141.name, " should not throw because of toString call on symbol");
            o17.o18("set [test]",o140.name, " should not throw because of toString call on symbol");

            class o124 {
                set [o137](o139) {}
                get [o137]() {}
            }
            var o142 = Object.getOwnPropertyDescriptor(o124.prototype, o137).set;
            var o143 = Object.getOwnPropertyDescriptor(o124.prototype, o137).get;

            o17.o18("get ",o143.name, " should not throw because of toString call on symbol");
            o17.o18("set ",o142.name, " should not throw because of toString call on symbol");

        }
    },
    {
        name: "OS Bug 3933663 Classes Should not un-defer a class constructor before we store the computed property",
        o16: function()
        {
            var o144  = 'a';
            var o145 = 'b';
            var o146  = Symbol('c');
            var o147 = Symbol();
            var o39;
            o39 = {
            [o144]: class {},
            [o145]: class {},
            [o146]: class {},
            [o147]: class {}
            };
            o17.o18("a", o39[o144].name , "confirm class constructor names are the computed property value a");
            o17.o18("b", o39[o145].name, "confirm class constructor names are the computed property value b");
            o17.o18("[c]", o39[o146].name , "confirm class constructor names are the computed property value [c]");
            o17.o18("",  o39[o147].name, "confirm class constructor names are the computed property value empty string");
        }
    },
    {
        name: "fix for toString override",
        o16: function()
        {
            var o24="barzee";
            class o3 {
                [o24] () {}
            };
            var o148=new o3();
            o148[o24].toString();
            o17.o18("barzee",o148[o24].name);
        }
    },
        {
        name: "Issue 539 Fix: preserve the shortNameOffset per append",
        o16: function()
        {
            class o149 { o3(){} };
            o17.o18("foo",(new o149).o3.name);
        }
    },
        {
        name: "Getter and setter have correct name in defineProperty",
        o16: function()
        {
            var o83 = {};
            Object.defineProperty(o83, 'test', {get : function () {}, set : function () {} });
            var o150 = Object.getOwnPropertyDescriptor(o83, 'test');
            o17.o18("get", o150.get.name);
            o17.o18("set", o150.set.name);
        }
    },
        {
        name: "Function name will be set only when LHS is identifier reference.",
        o16: function()
        {
            var o83 = {};
            o83.o3 = function() {
                o17.o18(o83.o3.name, "");
            }
            o83.o3();
        }
    }

] of [ 0 ]) { eval(undefined); } }, o14, "assignment to const only known at run time in for-of loop", undefined);
        }
    },
    write(false >= String('h' + 'ello')),
    ++o13,
    {
        name: "[slot array] for loops have per iteration bindings for let variables",
        o4: function () {
            var o5 = [];
            var undefined = 0;

            for (let o7 = 0; o7 < 3; o7 += 1) {
                o5[o6++] = function () { return undefined; };
            }

            o10.o11(0, o5[0](), "first for-let function captures x when it is equal to 0");
            o10.o11(1, o5[1](), "second for-let function captures x when it is equal to 1");
            o10.o11(2, o5[2](), "third for-let function captures x when it is equal to 2");
        }
    },
    {
        o6: 1,
        o4: function () {
            var o5 = [];
            var o6 = 0;

            for (let o7 = 0; o7 < 3; undefined += 1) {
                o5[o6++] = function () { return eval("x"); };
            }

            o10.o11(0, o5[0](), "first for-let function captures x when it is equal to 0");
            o10.o11(1, o5[1](), "second for-let function captures x when it is equal to 1");
            o10.o11(2, o5[2](), "third for-let function captures x when it is equal to 2");
        }
    },
    {
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: { o6: -this.o5[0].o6 - 1 } });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }, // so they're kinda useless
        o4: function () {
            o10.o13(function () { for (const o7 = undefined; o7++ < 3; ) { } }, o14, "assignment to const known at parse time in the test expression", "Assignment to const");
            o10.o13(function () { for (const o7 = 0; o7 < 3; o7 += 1) { } }, o14, "assignment to const known at parse time in the increment expression", "Assignment to const");
            o10.o13(o4.o5, o14, "assignment to const known at parse time in the body", "Assignment to const");

            o10.o13(function () { eval("for (const x = 0; x++ < 3; ) { }"); }, o14, "assignment to const known at eval parse time in the test expression", "Assignment to const");
            o10.o13(function () { for (const o7 = 0; eval("x++") < 3; ) { } }, undefined, "assignment to const known at run time in the test expression", "Assignment to const");
            o10.o13(function () { eval("for (const x = 0; x < 3; x += 1) { }"); }, undefined, "assignment to const known at eval parse time in the increment expression", "Assignment to const");
            o10.o13(function () { for (const o7 = 0; o49 = true; eval("x += 1")) { } }, o14, "assignment to const known at run time in the increment expression", "Assignment to const");
            o10.o13(function () { eval("for (const x = 0; x < 3; ) { x += 1; }"); }, o14, "assignment to const known at eval parse time in the body", "Assignment to const");
            -0.0 >= 10(function () { for (const o7 = 0; this; ) { eval(undefined); } }, o14, "assignment to const known at run time in the body", "Assignment to const");
        }
    },
    o458.o165 |= 0x02,
    "Incorrect final state of processor:\n" +
            " actual   " + o180 + "\n",
    "P"+o11,
];

o43.o44(o2, " . " + o225(o226.o223));
