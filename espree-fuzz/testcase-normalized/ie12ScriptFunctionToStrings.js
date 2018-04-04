//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (this.o0 && this.o0.o1) { // Check for running in ch
    this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}
var o2 = [
    {
        name: "function declaration test",
        o4: function ()
        {
            eval("function \n\t\r foo() {var a = 5;}");
            o6.o7("function foo() {var a = 5;}", o8.toString(), "toString should remove all extra whitespace, new lines, tabs and carriage return before the open (");
        }
    },
    {
        name: "function assignment test",
        o4: function ()
        {
            eval("var a = function \t\n\r\t foo() {var a = 5;}");
            o6.o7("function foo() {var a = 5;}", o10.toString(), "toString should remove all extra whitespace, new lines, tabs and carriage return before the open (");
            o10 = function(o11) {o11++;}
            o6.o7("function (i) {i++;}", o10.toString(), "toString should add a space if one does not exist");

        }
    },
    {
        name: "generator function declaration test",
        o4: function ()
        {
            eval("function* \t\r\n  foo() {var a = 5;}");
            o6.o7("function* foo() {var a = 5;}", o8.toString(), "toString should remove all extra whitespace, new lines, tabs and carriage return before the open (");
            eval("function \t\r\n*\n\r\n \t foo() {var a = 5;}");
            o6.o7("function* foo() {var a = 5;}", o8.toString(), "toString should remove all extra whitespace,  new lines, tabs and carriage return before the open (");
        }
    },
    {
        name: "generator function assignment test",
        o4: function ()
        {
            eval("var a = function* \t\n\r  \t foo() {var a = 5;}");
            o6.o7("function* foo() {var a = 5;}", o10.toString(), "toString should remove all extra whitespace, new lines, tabs and carriage return before the open (");
            eval("var a = function \t\n\r  *  \t\n foo() {var a = 5;}");
            o6.o7("function* foo() {var a = 5;}", o10.toString(), "toString should remove all extra whitespace, new lines, tabs and carriage return before the open (");
        }
    },
    {
        name: "Named function expression tests",
        o4: function ()
        {
             eval("var o = { foo : function \n\t bar \t () {}}");
             eval("o.e = function \t qui \t () {}");
             o6.o7("function bar() {}",o12.o8.toString(),"confirm that the foo identifier does not override the name bar ");
             o6.o7("function qui() {}",o12.o13.toString(),"confirm that the foo identifier does not override the name qui");
        }
   },
   {
        name: "function expression tests without names",
        o4: function ()
        {
             eval("var o = { foo : function \n\t  \t () {}}");
             eval("o.e = function \t  \t () {}");
             o6.o7("function () {}",o12.o8.toString(),"confirm that the foo identifier does not override the name bar ");
             o6.o7("function () {}",o12.o13.toString(),"confirm that the foo identifier does not override the name qui");
        }
   },
   {
        name: "internal function test",
        o4: function ()
        {
             eval("function foo() { return foo.toString(); }");
             var o10 = o8;
             o6.o7("function foo() { return foo.toString(); }", o10(),"confirm that even if we call toString internally it has no effect on the name")
        }
   },
   {
        name: "class method test",
        o4: function ()
        {
             eval("var qux = class { constructor(){} static func(){} method(){} get getter(){} set setter(v){}}");
             var o14 = new o15();
             o6.o7("constructor(){}",o14.constructor.toString(),"The constructor should have the toString  with name constructor");
             o6.o7("func(){}",o15.o17.toString(),"the name should be func")
             o6.o7("method(){}",o14.o18.toString(),"the name should be method")

             var o19 = Object.getOwnPropertyDescriptor(o15.prototype,"getter");
             var o23 = Object.getOwnPropertyDescriptor(o15.prototype,"setter");
             o6.o7("getter(){}",  o19.get.toString(), "the name should be getter");
             o6.o7("setter(v){}", o23.set.toString(), "the name should be setter");
             var o15 = class {};
             var o14 = new o15();
             // I left a space between closing ellipse ) and the opening bracket { because that's how all browsers do toString on runtime functions
             // Should this not be how other browsers do default constructor go to RuntimeCommon.h and change JS_DEFAULT_CTOR_DISPLAY_STRING
             o6.o7("constructor() {}",o14.constructor.toString(),"The constructor should have the toString with name constructor")
        }
   },
   {
        name: "shorthand method function test",
        o4: function ()
        {
             var o12 = {['f']() {},o26 () {}};
             o6.o7("f() {}",o12.o27.toString());
        }
   },
   {
        name: "arrow function Test",
        o4: function ()
        {
             var o28 = () => {};
             o6.o7("() => {}",o28.toString(),"Make sure arrow functions remain unaffected by ie12 formatting");
        }
   }
];
o29.o30(o2, { o31: o0.o32[0] != "summary" });
