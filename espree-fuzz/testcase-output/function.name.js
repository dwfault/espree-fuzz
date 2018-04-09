//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(o3,o4)
{
    var o5 = Object.getOwnPropertyNames(o3);
    var o6 = o5.length;
    var o7 = 0;
    for(var o8 = 0; o8 < o6; o8++)
    {
        var o9 = o5[o8].toString();
        if(o9 == "prototype" || (o4 && o9 == "name") ||
        o9 == "arguments" || o9 == "caller" || o9 == "length")
        {
            o7++;
        }
        if (!o4 && o9 == "name")
        {
            return false;
        }
    }
    return o7 == o6;
}

var o10 = [
   {
       name: "function.name",
       o11: function ()
       {
            function o3(){} //function declaration
            o12.o13("foo",o3.name,"name should be foo");
            o3.name = "bar";
            o12.o13("foo",o3.name, "function names are read only");
            o12.o13("funcExpr",(function o14(){}).name,"function expression case should still print a name");
            o15 = function(){}; // "assignment"
            o12.o13("assignment",o15.name,"Assignment functions should print the assigned name");
            var o16 = () => {}; // "lambda assignment"
            o12.o13("lambdaDecl",o16.name,"lambda assignment should print the assigned name");
            var o17 = function o18() {}
            var o19 = o3;
            o12.o13("bar",o17.name,"Assignment functions should inherit the declaration name in this case bar");
            o12.o13("foo",o19.name,"Assignment functions should inherit the declaration name in this case foo");
       }
   },
   {
       name: "anonymous function",
       o11: function ()
       {
            var o20 = function() { };
            o12.o13("f", o20.name, "function name is determined on assignment");
            o20.name = "foo";
            o12.o13("f", o20.name, "function names are read only");
            o12.o13(undefined, (function (){}).prototype.name, "function.prototype.name is undefined");
            o12.o21(Object.hasOwnProperty.call((function(){}), 'name'), "[hasPropertyCheck]: anonymous function does not have a name property");
            o12.o13("", (function(){}).name);
            o12.o13("", (function(){})["name"]);

            //lambdas () => {}
            o12.o21(Object.hasOwnProperty.call((() => {}), 'name'), "[hasPropertyCheck]: anonymous lambda function does not have a name property");
            o12.o13("", (() => {}).name);
            o12.o13("", (() => {})["name"]);

            //generators
            o12.o21(Object.hasOwnProperty.call((function*(){}), 'name'), "[hasPropertyCheck]: anonymous generator function does not have name property");
            o12.o13("", (function*(){}).name);
            o12.o13("", (function*(){})["name"]);

            //classes
            o12.o21(Object.hasOwnProperty.call(class {}, 'name'), "[hasPropertyCheck]: anonymous class does not have a name property");
            o12.o13("", class {}.name);
            o12.o13("", class {}['name']);

       }
   },
   {
       name: "function.name for external functions",
       o11: function ()
       {
            o12.o13("LoadScriptFile",o0.o1.name,"check to make sure external functions are supported");
            o12.o13("Quit",o0.o22.name,"check to make sure external functions are supported");
            o12.o13("LoadScript",o0.o23.name,"check to make sure external functions are supported");
            o12.o13("SetTimeout",o0.o24.name,"check to make sure external functions are supported");
            o12.o13("ClearTimeout",o0.o25.name,"check to make sure external functions are supported");

            o12.o13("prototype,name,caller,arguments",Object.getOwnPropertyNames(o0.o22).toString(),"Check to make sure name is exposed");

            //Bug 639652
            var o17 = o0.o26.toString();
            var o19 = o0.o26.name;
            o12.o13("Echo",o19,"b should be the name of function echo not toString of Echo function body");

       }
    },
    {
       name: "static name method overrides the creation of a name string.",
       o11: function ()
       {
             //default constructor case
             var o27 = class { static name() {} };
             o12.o13("function", typeof o27.name,
                "14.5.15 Runtime Semantics: If the class definition included a 'name' static method then that method is not over-written");
             o12.o13("name",o27.name.name,"confirm we get the name 'name'");
             o12.o13(o27.name , o27.prototype.constructor.name,
                "confirm qux.prototype.constructor.name is the same function as qux.name");
             o12.o13("Function",o27.constructor.name,"The function constructor should still have the name Function");

             var o27 = class { constructor(o17,o19) {} static name() {} };
             var o28 = new o27(1,2);
             o12.o13("function", typeof o27.name,
                "14.5.15 Runtime Semantics: If the class definition included a \"name\" static method then that method is not over-written");
             o12.o13("name",o27.name.name,"confirm we get the name \"name\"");
             o12.o13(o27.name , o27.prototype.constructor.name,
                "confirm qux.prototype.constructor.name is the same function as qux.name");
             o12.o13("Function",o27.constructor.name,"The function constructor should still have the name Function");
       }
    },
    {
       name: "function.name's that match IsConstantFunctionName",
       o11: function ()
       {
            var o29 = {
                "" : function() {},
                "Anonymous function" : function() {},
                "Function code" : function() {}
            }
            o12.o13("", o29[""].name);
            o12.o13("Anonymous function", o29["Anonymous function"].name, "should not get converted to empty string");
            o12.o13("Function code", o29["Function code"].name, "should not get converted to Anonymous");
       },
    },
    {
       name: "function.name for built in constructors",
       o11: function ()
       {
            function* o30() { }
            o12.o13("GeneratorFunction", o30.constructor.name);
            o12.o13("Array", Array.name);
            o12.o13("ArrayBuffer", ArrayBuffer.name);
            o12.o13("DataView", DataView.name);
            o12.o13("Error", Error.name);
            o12.o13("SyntaxError", o31.name);
            o12.o13("EvalError", o32.name);
            o12.o13("RangeError", o33.name);
            o12.o13("ReferenceError", o34.name);
            o12.o13("Boolean", Boolean.name);
            o12.o13("Symbol", Symbol.name);
            o12.o13("Promise", Promise.name);
            o12.o13("Proxy", Proxy.name);
            o12.o13("Date", Date.name);
            o12.o13("Function", Function.name);
            o12.o13("Number", Number.name);
            o12.o13("Object", Object.name);
            o12.o13("RegExp", RegExp.name);
            o12.o13("String", String.name);
            o12.o13("Map", Map.name);
            o12.o13("Set", Set.name);
            o12.o13("WeakMap", WeakMap.name);
            o12.o13("WeakSet", WeakSet.name);
       }
    },
    {
       name: "Numeric value test cases",
       o11: function ()
       {
            var o17 = [];
            var o19 = 1;
            var o35 = 2;
            o17[4] = function() {};
            o17[1.2] = function() {};
            function o3()
            {
                return o17;
            }
            o3()[5] = function() {};
            o17[4+3] = function() {};
            o17[o19] = function() {};
            o17[o35] = function() {};
            o17[o19+o35] = function() {};
            var o36 = 4;
            var o37 = 4+8;
            var o29 = { o36 : function() {}, o37 : function() {}, [o36+1] : function() {}}
            o12.o13("index1", o29.o36.name);
            o12.o13("index2",o29.o37.name);
            o12.o13("5", o29[5].name, "when our name has brackets return the computed name")
            o12.o13("b",o17[1].name,"expressions are not evaluated, default to expression name");
            o12.o13("c",o17[2].name,"expressions are not evaluated, default to expression name");
            o12.o13("1.2",o17[1.2].name,"constants are the given numeric literal");
            var o29 = { 1.4 : function() {} };
            o12.o13("1.4",o29[1.4].name,"constants are the given numeric literal");
            o12.o13("",o17[3].name,"expressions are not evaluated, default to empty string since it lacks a variable name");
            o12.o13("4",o17[4].name,"constants are the given numeric literal");
            o12.o13("5",o17[5].name,"constants are the given numeric literal");
            o12.o13("",o17[7].name,"expressions are not evaluated, default to empty string since it lacks a variable name");
       }
    },
    {
       name: "Strings With Brackets or Periods in them",
       o11: function ()
       {
            var o29 = { "hello.friend" : function() {},
                      "[a" : function() {},
                      "]" : function() {},
                      "]a" : function() {}};
            o12.o13("hello.friend",o29["hello.friend"].name,"the period is included in the name don't shorten");
            o12.o13("[a",o29["[a"].name,"the bracket is included in the name don't shorten");
            o12.o13("]",o29["]"].name,"the bracket is included in the name don't shorten");
            o12.o13("]a",o29["]a"].name,"the bracket is included in the name don't shorten");

            var o29 = { "a[" : function() {} };
            o12.o13("a[",o29["a["].name,"the bracket is included in the name don't shorten");
            var o29 = { ["a["] : function() {} };
            o12.o13("a[",o29["a["].name,"computed property names use a different code path");
            var o17 = [];
            o17["["] = function() {};
            o17["]"] = function() {};
            o12.o13("",o17["["].name);
            o12.o13("",o17["]"].name);
            o17["hello.buddy"] = function() {};
            o12.o13("",o17["hello.buddy"].name);

            class o38
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
            o12.o13("f.", o38["f."].name);
            o12.o13(".f", o38[".f"].name);
            o12.o13("f[", o38["f["].name);
            o12.o13("f]", o38["f]"].name);
            o12.o13("]]f]]", o38["]]f]]"].name);
            o12.o13("[f", o38["[f"].name);
            o12.o13("[[[[[f", o38["[[[[[f"].name);
            o12.o13("]f", o38["]f"].name);

            var o17 = {"\0" : { o20 : function() {}, o35 : class {} }}
            o12.o13("f", o17["\0"].o20.name);
            o12.o13("c", o17["\0"].o35.name);
       }
    },
    {
       name: "Class.name",
       o11: function ()
       {
            var o17 = class o3 {}
            o12.o13("foo",o17.name,"should pick the class name not the assignment name");
            class o39 {} // constructor is "ClassDecl"
            var o35 = class { o40(){}}
            var o19 = new o35();
            o12.o13("ClassDecl",o39.name,"name should be ClassDecl");
            o12.o13("c",o35.name,"class name should be c");
            o12.o13("method",o19.o40.name,"c is a constructor, b is an instance so method is accessible on b");
            o39.name = "foo";
            o12.o13("ClassDecl",o39.name, "function names are read only");
            o12.o13("ClassExpr",(class o41 {}).name,"class expression case should still print a name");

            var o42  = class
            {
                constructor(){}                 // "classFoo "
                static o43(){}                 // "func"
                o40(){}                      // "method"
                get getter(){}                  // "get getter"
                set setter(o44){}                 // "set setter"
            };

            class o45
            {
                constructor(){}
            }
            o12.o13("Function",o45.constructor.name, "classFoo2.constructor.name === 'Function'");
            o12.o13("classFoo2",o45.prototype.constructor.name, "confirm that the prototype constructors name is the class name");

            var o46 = Object.getOwnPropertyDescriptor(o42.prototype,"getter");
            var o47 = Object.getOwnPropertyDescriptor(o42.prototype,"setter");
            o12.o13("Function",o42.constructor.name, "classFoo.constructor.name === 'Function'");
            o12.o13("classFoo",o42.name, "Name of the class should be classFoo");
            o12.o13("classFoo",o42.prototype.constructor.name, "Name of the constructor should be the class name");
            o12.o13("func",o42.o43.name, "Name should just be func");
            o12.o13("method",o42.prototype.o40.name, "Name should be method");
            o12.o13("get getter",o46.get.name,"Accessors getter should be prefixed with get");
            o12.o13("set setter",o47.set.name, "Accessors setter should be prefixed with set");

            var o48 = new o42();
            var o49 = new o45();
            o12.o13("classFoo2",o49.constructor.name, "instance constructor should be class name");
            o12.o13("classFoo",o48.constructor.name, "instance constructor should be class name");
            o12.o13("method",o48.o40.name, "instance should have function name method");
       }
    },
    {
       name: "Generator functions",
       o11: function ()
       {
            function* o30() { }
            var o50 = function* () { }
            var o51 = { o52 : function* () { } }
            o12.o13("gf",o30.name, "Generator Declaration");
            o12.o13("gfe",o50.name, "Generator Expression");
            o12.o13("gfm",o51.o52.name, "Generator Method");
            var o53 = Object.getPrototypeOf(o30).constructor;
            o12.o13("anonymous",(new o53 ).name,"Should be anonymous");
       }
    },
    {
       name: "function inside objects",
       o11: function ()
       {
          let o51 =
            {
                o9: () => {},
                o54: function o55(){},
                "literal": function(){},
                5: () => {}
            };

            o12.o13("prop",o51.o9.name,"lambda function name is assigned to prop");
            o12.o13("named",o51.o54.name, "noOverride inherits name from function named");

            o12.o13("literal",o51.o56.name, "string function definitions are valid");
            o12.o13("5",o51["5"].name, "numeral function definitions are valid");

            var o57 =
            {
                o40(){}
            }
            o57.o58 = function(){};

            o12.o13("method",o57.o40.name, "tests functions without the function reserved word");
            o12.o13("",o57.o58.name, "test to make sure defining a property outside of a function is empty string");
        }
    },
    {
       name: "function.name's are read only",
       o11: function ()
       {
            var o59 =
            {
                o20: function() {}
            };
            o12.o13("f",o59.o20.name, "function name is f");
            o59.o20.name = "foo";
            o12.o13("f",o59.o20.name, "function names are read only");

        }
    },
    {
       name: "function.name test functions named get\set don't get confused for accessors",
       o11: function ()
       {
            var o3 = {
                value : 0,
                get : function() { return value;},
                set : function (o60) {value = o60}
            }
            o12.o13("get", o3.get.name, "name should be get");
            o12.o13("set", o3.set.name, "name should be set");

            var o61 = { get : function o3 () { },
                        set : function o18 (o44) { }};
            //like the var a = function foo() {} case a inherits foo's name
            o12.o13("foo",o61.get.name, "should inherited name foo");
            o12.o13("bar",o61.set.name, "should inherited name bar");
       }
    },
    {
       name: "function.name accessor test",
       o11: function ()
       {
            var o62 = Object.getOwnPropertyDescriptor(Map.prototype,"size");
            o12.o13("get size",o62.get.name, "Map.prototype.size is a getter");
            o12.o13(undefined,o62.set, "Map.prototype.size does not have a setter");
            // Single Property descriptor
            var o29 = { get o3(){}, set o3(o63){} };
            var o64 = Object.getOwnPropertyDescriptor(o29, "foo");
            o12.o13("get foo", o64.get.name, "get accessors on function foo are prefixed with get");
            o12.o13("set foo", o64.set.name, "set accessors on function foo are prefixed with set");

            let o51 =
            {
                get getter(){ return 0;},
                set setter(o44){}
            };

            // Multiple property descriptors
            var o46 = Object.getOwnPropertyDescriptor(o51,"getter")
            var o47 = Object.getOwnPropertyDescriptor(o51,"setter");
            o12.o13("get getter",o46.get.name, "get accessors functions are prefixed with get");
            o12.o13("set setter",o47.set.name, "set accessors functions are prefixed with set");
       }
    },

    {
       name: "function.name Property existence test",
       o11: function ()
       {
        function o3(){}

        o12.o13(true,o2(o3,true),"Properties on foo");
        o12.o13(0,Object.keys(o3).length,"no enumerable properties in function instance foo");
        Object.defineProperty(o3,"name",{writable: false,enumerable: true,configurable: true});
        var o29  = Object.getOwnPropertyDescriptor(o3,"name");
        o12.o13(true,  o29.enumerable,   "Name is redefined to enumerable");
        for (o8 in o3)
        {
            o12.o13("name",o8,"Name should be the only enumerable property");
        }
        o12.o13(1,Object.keys(o3).length,"name is now an enumerated property");
        o12.o13("name",Object.keys(o3).toString(),"Name should be the only enumerable property");
       }
    },

    {
       name: "function.name delete test",
       o11: function ()
       {
            function o3(){}

            o12.o13(true,o2(o3,true), "Properties on foo");
            delete o3.name;
            o12.o13(true,o2(o3,false),"Properties on foo");
       }
    },

    {
       name: "built-in function.name",
       o11: function ()
       {
            o12.o13("slice",[].slice.name,"name should be slice");
            [].slice.name = "bar";
            o12.o13("slice",[].slice.name, "function names are read only");
       }
    },

   {
       name: "built-in function.name delete test",
       o11: function ()
       {
            o12.o13(true,o2([].splice,true),"Properties on foo");
            delete [].splice.name;
            o12.o13(true,o2([].splice,false),"Properties on foo");
       }
    },
    {
       name: "anonymous function special cases",
       o11: function ()
       {
           o12.o13("anonymous",(new Function).name,"Should be anonymous");
           o12.o13("",Function.prototype.name,"19.2.3 The value of the name property of the Function prototype object is the empty String.");

       }
    },
    {
       name: "nested function assignment names",
       o11: function ()
       {
           var o51 =
           {
                o63 : function(){},
                o65 : () => {},
                o66 : class {}
           };

           o12.o13("x",o51.o63.name,"x defined in obj Should be x");
           o12.o13("y",o51.o65.name,"y defined in obj Should be y");
           o12.o13("z",o51.o66.name,"z defined in obj Should be z");

           var o51 =
           {
                o67 :
                {
                    o63 : function(){},
                    o65 : () => {},
                    o66 : class {}
                }
           };

           o12.o13("x",o51.o67.o63.name,"Should be x");
           o12.o13("y",o51.o67.o65.name,"Should be y");
           o12.o13("z",o51.o67.o66.name,"Should be z");

           var o51 = {};
           o51.o63 = function(){};
           o51.o65 = () => {};
           o51.o66 = class {};

           o12.o13("",o51.o63.name,"Should be ''");
           o12.o13("",o51.o65.name,"Should be ''");
           o12.o13("",o51.o66.name,"Should be ''");

           var o51 = {o67 : {}};

           o51.o67.o63 = function(){};
           o51.o67.o65 = () => {};
           o51.o67.o66 = class {};

           o12.o13("",o51.o67.o63.name,"Should be ''");
           o12.o13("",o51.o67.o65.name,"Should be ''");
           o12.o13("",o51.o67.o66.name,"Should be ''");

       }
    },
    {
       name: "Check the Class of an Object",
       o11: function ()
       {
            function o3(){}
            var o20 = new o3();

            o12.o13("foo",o20.constructor.name,"The constructor is foo");
            o12.o13(undefined,o20.name,"f is an instance of the function foo, the name exists only on the constructor");

       }
    },
    {
       name: "Attributes test",
       o11: function ()
       {
            function o3(){}
            o12.o13(true, o3.hasOwnProperty("name"), "foo should have a name property");
            var o29 = Object.getOwnPropertyDescriptor(o3,"name");

            o12.o13(false, o29.writable,     "Name is not writable");
            o12.o13(false, o29.enumerable,   "Name is not enumerable");
            o12.o13(true,  o29.configurable, "Name is configurable");
            o12.o13("foo", o29.value,        "Names value should be foo");

       }
    },
    {
       name: "Symbol names",
       o11: function ()
       {
            var o68 = Symbol("foo");
            var o69 = Symbol("bar");
            var o70 = Symbol("baz");
            var o71 = Symbol();
            var o29 = {[Symbol.toPrimitive]: function() {},
                     [o68] : function() {},
                     [o70] : function o72() {},
                     [o71] : function() {},
                    }
            o29[Symbol.unscopables] = function(){}
            o29[o69] = function() {}
            o12.o13("[foo]", o29[o68].name, "9.2.11.4 SetFunctionName: If Type(name) is Symbol, then let name be the concatenation of \"[\", description, and \"]\"");
            o12.o13("[Symbol.toPrimitive]",o29[Symbol.toPrimitive].name,
            "9.2.11.4 SetFunctionName: If Type(name) is Symbol, then let name be the concatenation of \"[\", description, and \"]\"");
            o12.o13("", o29[Symbol.unscopables].name, "computed property names are not bound to index yet and builtin symbols are not bound to a name so they are empty strings");
            o12.o13("sym2", o29[o69].name, "computed property names are not bound to index yet");
            o12.o13("bear", o29[o70].name, "if the function already has a name don't overwrite it");
            o12.o13("", o29[o71].name, "empty symbols have empty string as a name");
       }
    },
    {
       name: "Redefine Attributes test",
       o11: function ()
       {
            function o3(){}

            Object.defineProperty(o3,"name",{writable: true,enumerable: true,configurable: false});
            o3.name = "bar";
            var o29  = Object.getOwnPropertyDescriptor(o3,"name");

            o12.o13(true,  o29.writable,     "Name is redefined to writable");
            o12.o13(true,  o29.enumerable,   "Name is redefined to enumerable");
            o12.o13(false, o29.configurable, "Name redefined not configurable");
            o12.o13("bar", o29.value,        "Names value should be bar");
            o12.o13("bar",o3.name,"foo renamed to bar");

       }
    },
    {
        name: "strings with null terminators sprinkled in",
        o11: function()
        {
            var o73 = "hello\0 foo";
            var o17 = [];
            o17["hello\0 foo"] = function() {};
            var o29 = {[o73] : function() {}, ["h\0h"] : function() {}}
            var o19 = {}
            o19["hello\0 foo"] = function() {}
            var o35 = { "hello\0 foo" : function() {} }
            o12.o13(o73, o29[o73].name);
            o12.o13("h\0h", o29["h\0h"].name);
            o12.o13("hello\0 foo", o17["hello\0 foo"].name);
            o12.o13("hello\0 foo", o19["hello\0 foo"].name);
            o12.o13("hello\0 foo", o35["hello\0 foo"].name);
            var o74 = { "goo.\0d" : function() {} }
            var o75 = { "g\0oo\0.d" : function() {} }
            var o20 = { "fo\0o" : class {} }
            o12.o13("goo.\0d",  o74["goo.\0d"].name);
            o12.o13("g\0oo\0.d", o75["g\0oo\0.d"].name);
            o12.o13("fo\0o", o20["fo\0o"].name);

        }
    },
    {
        name: "Function Bind",
        o11: function()
        {
            function add(o63, o65)
            {
                return o63+o65;
            }
            var o76  = add.bind(null,0 /* x */);
            var o77 = add.bind();

            o12.o13("bound add",o76.name, "AddZer0  needs a bound prefix on add");
            o12.o13("bound add",o77.name,"Add2Nums needs a bound prefix on add");
        }
    },
    {
        name: "Bug 1642987 & 1242667",
        o11: function()
        {
            o75 = ''['u3 = undefined'] = function () {}
            o12.o13('', o75.name, "Bug 1642987: we should not AV if we can't shorten the name") ;
            o20 = ''['[f]o'] = function () {};
            o12.o13('', o20.name, "Bug 1242667: We need to wrap strings in Brackets") ;
        }
    },
    {
        name: "Bug 2302197",
        o11: function()
        {
            var o19 = {};
            var o35 = o19.o63 = function o78() {}
            var o17 = new o35();
            o12.o13('Ctor', o19.o63.name, "confirm IsNameIdentifierRef does not override IsNamedFunctionExpression");
            o12.o13('Ctor', o35.name, "confirm IsNameIdentifierRef does not override IsNamedFunctionExpression");
            o12.o13('Ctor', o17.constructor.name, "confirm IsNameIdentifierRef does not override IsNamedFunctionExpression");
        }
    },
    {
        name: "Bug 3941893 & Bug 4153027",
        o11: function()
        {
            class o79 {
                static ["n"+"a"+"me"]() {}
            }
            o12.o13("function", typeof o79.name, "Function 'name' attribute should not be inferred in presence of static computed 'name' method");
            o12.o13("name", o79.name.name, "Make sure the name is correct");
            var o29 = {
                ['A'+'B'] : class extends o79 {},
                ['C'+'B'] : class {},

                ['a'+'b'] : class extends o79 {o80(){}},
                ['c'+'b'] : class {o81(){}},

                ['d'+'f'] : class extends o79 {static o82(){}},
                ['f'+'d'] : class {static o83(){}}
            }

            o12.o13("AB", o29.o84.name, "confirm empty super class is properly assigned to a computed property");
            o12.o13("CB", o29.o85.name, "confirm empty base class is properly assigned to a computed property");

            o12.o13("ab", o29.o86.name, "confirm filled super class is properly assigned to a computed property");
            o12.o13("cb", o29.o87.name, "confirm filled base class is properly assigned to a computed property");

            o12.o13("df", o29.o88.name, "confirm static filled super class is properly assigned to a computed property");
            o12.o13("fd", o29.o89.name, "confirm static filled base class is properly assigned to a computed property");
        }
    },
    {
        name: "Bug 3713125",
        o11: function()
        {
            var target = Object.defineProperty(function() {}, 'name', { value: 'target' });
            o12.o13('bound bound target', target.bind().bind().name, "confirm bound is appended to the front twice");
            o74 = Object.getOwnPropertyDescriptor(target.bind().bind(), 'name')
            o12.o13(false, o74.writable);
            o12.o13(false, o74.enumerable);
            o12.o13(true,  o74.configurable);
        }
    },
    {
        name: "Bug 3713014",
        o11: function()
        {
            var o90 = Symbol('test');
            var o91 = Symbol();
            class o92 {
                set [o90](o93) {}
                get [o90]() {}
            }
            var o94 = Object.getOwnPropertyDescriptor(o92.prototype, o90).set;
            var o95 = Object.getOwnPropertyDescriptor(o92.prototype, o90).get;

            o12.o13("get [test]",o95.name, " should not throw because of toString call on symbol");
            o12.o13("set [test]",o94.name, " should not throw because of toString call on symbol");

            class o79 {
                set [o91](o93) {}
                get [o91]() {}
            }
            var o96 = Object.getOwnPropertyDescriptor(o79.prototype, o91).set;
            var o97 = Object.getOwnPropertyDescriptor(o79.prototype, o91).get;

            o12.o13("get ",o97.name, " should not throw because of toString call on symbol");
            o12.o13("set ",o96.name, " should not throw because of toString call on symbol");

        }
    },
    {
        name: "OS Bug 3933663 Classes Should not un-defer a class constructor before we store the computed property",
        o11: function()
        {
            var o98  = 'a';
            var o99 = 'b';
            var o100  = Symbol('c');
            var o101 = Symbol();
            var o29;
            o29 = {
            [o98]: class {},
            [o99]: class {},
            [o100]: class {},
            [o101]: class {}
            };
            o12.o13("a", o29[o98].name , "confirm class constructor names are the computed property value a");
            o12.o13("b", o29[o99].name, "confirm class constructor names are the computed property value b");
            o12.o13("[c]", o29[o100].name , "confirm class constructor names are the computed property value [c]");
            o12.o13("",  o29[o101].name, "confirm class constructor names are the computed property value empty string");
        }
    },
    {
        name: "fix for toString override",
        o11: function()
        {
            var o19="barzee";
            class o3 {
                [o19] () {}
            };
            var o102=new o3();
            o102[o19].toString();
            o12.o13("barzee",o102[o19].name);
        }
    },
        {
        name: "Issue 539 Fix: preserve the shortNameOffset per append",
        o11: function()
        {
            class o103 { o3(){} };
            o12.o13("foo",(new o103).o3.name);
        }
    },
        {
        name: "Getter and setter have correct name in defineProperty",
        o11: function()
        {
            var o51 = {};
            Object.defineProperty(o51, 'test', {get : function () {}, set : function () {} });
            var o104 = Object.getOwnPropertyDescriptor(o51, 'test');
            o12.o13("get", o104.get.name);
            o12.o13("set", o104.set.name);
        }
    },
        {
        name: "Function name will be set only when LHS is identifier reference.",
        o11: function()
        {
            var o51 = {};
            o51.o3 = function() {
                o12.o13(o51.o3.name, "");
            }
            o51.o3();
        }
    }

];

o105.o106(o10, { o107: o0.o108[0] != "summary" });
