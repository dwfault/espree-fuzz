//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.false("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  { 
    name: "Split parameter scope in function definition", 
    o3: function () { 
        function o4(o5 = 10, o6 = function () { return o5; }) { 
            o7.o8(10, o5, "Initial value of parameter in the body scope should be the same as the one in param scope"); 
            var o5 = 20; 
            o7.o8(20, o5, "New assignment in the body scope updates the variable's value in body scope"); 
            return o6; 
        } 
        o7.o8(10, o4()(), "Function defined in the param scope captures the formals from the param scope not body scope"); 

        function o9(o5 = 10, o6 = function () { return o5; }, o10 = o6() + o5) { 
            o7.o8(10, o5, "Initial value of parameter in the body scope should be the same as the one in param scope"); 
            o7.o8(20, o10, "Initial value of the third parameter in the body scope should be twice the value of the first parameter"); 
            var o5 = 20; 
            o7.o8(20, o5, "New assignment in the body scope updates the variable's value in body scope"); 
            return o6; 
        } 
        o7.o8(10, o9()(), "Function defined in the param scope captures the formals from the param scope not body scope"); 

        function o11(o5 = 10, o6 = function () { return o5; }) { 
            o7.o8(1, o5, "Initial value of parameter in the body scope should be the same as the one passed in"); 
            var o5 = 20; 
            o7.o8(20, o5, "Assignment in the body scope updates the variable's value in body scope"); 
            return o6; 
        } 
        o7.o8(o11(1)(), 1, "Function defined in the param scope captures the formals from the param scope even when the default expression is not applied for that param"); 

        (function (o5 = 10, o6 = o5 += 10, o10 = function () { return o5 + o6; }) { 
            o7.o8(20, o5, "Initial value of parameter in the body scope should be same as the corresponding symbol's final value in the param scope"); 
            var o12 = 40; 
            (function () { o7.o8(40, o12, "Symbols defined in the body scope should be unaffected by the duplicate formal symbols"); })(); 
            o7.o8(40, o10(), "Function defined in param scope uses the formals from param scope even when executed inside the body"); 
        })(); 

        (function (o5 = 10, o6 = function () { o7.o8(10, o5, "Function defined in the param scope captures the formals from the param scope when executed from the param scope"); }, o10 = o6()) { 
        })(); 

        function o13(o5 = 10, o6 = function () { return o5; }) { 
            o5 = 20; 
            return o6; 
        } 
        o7.o8(10, o13()(), "Even if the formals are not redeclared in the function body the symbol in the param scope and body scope are different"); 

        function o14(o5 = 10, o6 = function () { return function () { return o5; }; }) { 
            var o5 = 20; 
            return o6; 
        } 
        o7.o8(10, o14()()(), "Parameter scope works fine with nested functions"); 

        var o15 = 10; 
        function o16(o5, o6 = function () { o5; return o15; }) { 
            o7.o8(undefined, o15, "Inside the function body the assignment hasn't happened yet"); 
            var o15 = 20; 
            o7.o8(20, o15, "Assignment to the symbol inside the function changes the value"); 
            return o6; 
        } 
        o7.o8(10, o16()(), "Function in the param scope correctly binds to the outer variable"); 
         
        function o17(o5 = 10, o6 = { o18 () { return o5; } }) { 
            o5 = 20; 
            return o6; 
        } 
        o7.o8(10, o17().o18(), "Function definition inside the object literal should capture the formal from the param scope");
        
        var o19 = function (o5, o6 = ((function() { o7.o8('string1', o5, "First arguemnt receives the right value"); })(), 1), o10) {
            var o20 = 'string3';
            (function () { o7.o8('string3', o20, "Var declaration in the body is initialized properly"); })();
            return o10;
        };

        o7.o8('string2', o19('string1', undefined, 'string2'), "Function returns the third argument properly");
        
        function o21() {
            var o22 = function (o5 = function () { o10; }, o6, o10) {
                o7.o8(1, o10, "Third argument is properly populated");
                arguments;
                function o23() {};
            };
            o22(undefined, undefined, 1);
        }
        o21();
        o21();
        
        function o24() {
            var o25 = ((o5 = (o26 = o5 => o5 * o5) => o26) => o5)()()(10); 
            
            o7.o8(100, o25, "The inner lambda function properly maps to the right symbol for a");
        };
        o24();
    } 
 }, 
 { 
    name: "Split parameter scope and function expressions with name", 
    o3: function () { 
        function o4(o5 = 10, o6 = function o10() { return o5; }) { 
            o7.o8(10, o5, "Initial value of parameter in the body scope of the method should be the same as the one in param scope"); 
            var o5 = 20; 
            o7.o8(20, o5, "New assignment in the body scope of the method updates the variable's value in body scope"); 
            return o6; 
        } 
        o7.o8(10, o4()(), "Function expression defined in the param scope captures the formals from the param scope not body scope"); 
         
        function o9(o5 = 10, o6 = function o10(o27 = true) { return o27 ? o10(false) : o5; }) { 
            return o6; 
        } 
        o7.o8(10, o9()(), "Recursive function expression defined in the param scope captures the formals from the param scope not body scope");
        
        o7.o8(10, o9()(), "Recursive function expression defined in the param scope captures the formals from the param scope not body scope");

        var o11 = function o13 (o5 = function ( ) { o6; return o13(20); }, o6) {
            if (o5 == 20) {
                return 10;
            }
            return o5;
        }
        o7.o8(10, o11()(), "Recursive call to the function from the param scope returns the right value");

        var o14 = function o16 (o5 = function ( ) { o6; return o16; }, o6) {
            if (o5 == 20) {
                return 10;
            }
            return o5;
        }
        o7.o8(10, o14()()(20), "Recursive call to the function from the param scope returns the right value");
        
        var o17 = function o19 (o5 = function ( ) { o6; }, o6) {
            if (o5 == 20) {
                return 10;
            }
            var o5 = function () { return o19(20); };
            return o5;
        }
        o7.o8(10, o17()(), "Recursive call to the function from the body scope returns the right value");
        
        var o21 = function o22 (o5 = function ( ) { o6; return o22(20); }, o6) {
            eval("");
            if (o5 == 20) {
                return 10;
            }
            return o5;
        }
        o7.o8(10, o21()(), "Recursive call to the function from the param scope returns the right value when eval is there in the body");
        
        var o23 = function o24 (o5 = function ( ) { o6; }, o6) {
            eval("");
            if (o5 == 20) {
                return 10;
            }
            var o5 = function () { return o24(20); };
            return o5;
        }
        o7.o8(10, o23()(), "Recursive call to the function from the body scope returns the right value when eval is there in the body");
    } 
 }, 
 { 
    name: "Split parameter scope in member functions", 
    o3: function () { 
       var o28 = { 
           o29(o5 = 10, o6 = function () { return o5; }) { 
               o7.o8(10, o5, "Initial value of parameter in the body scope of the method should be the same as the one in param scope"); 
               var o5 = 20; 
               o7.o8(20, o5, "New assignment in the body scope of the method updates the variable's value in body scope"); 
                return o6; 
            } 
        } 
        o7.o8(o28.o29()(), 10, "Function defined in the param scope of the object method captures the formals from the param scope not body scope"); 
         
        var o30 = { 
            o4(o5 = 10, o6 = function () { return { o9 () { return o5; } } }) { 
                var o5 = 20; 
                o10 = function () { return { o9 () { return o5; } } }; 
                return [o6, o10]; 
            } 
        } 
        var o25 = o30.o4(); 
        o7.o8(10, o25[0]().o9(), "Short hand method defined in the param scope of the object method captures the formals from the param scope not body scope"); 
        o7.o8(20, o25[1]().o9(), "Short hand method defined in the param scope of the object method captures the formals from the param scope not body scope"); 
    } 
  },
  { 
    name: "Arrow functions in split param scope", 
    o3: function () { 
        function o4(o5 = 10, o6 = () => { return o5; }) { 
            o7.o8(10, o5, "Initial value of parameter in the body scope should be the same as the one in param scope"); 
            var o5 = 20; 
            o7.o8(20, o5, "New assignment in the body scope updates the variable's value in body scope"); 
            return o6; 
        } 
        o7.o8(10, o4()(), "Arrow functions defined in the param scope captures the formals from the param scope not body scope"); 

        function o9(o5 = 10, o6 = () => { return o5; }) { 
            o7.o8(1, o5, "Initial value of parameter in the body scope should be the same as the one in param scope"); 
            var o5 = 20; 
            o7.o8(20, o5, "New assignment in the body scope updates the variable's value in body scope"); 
            return o6; 
        } 
        o7.o8(1, o9(1)(), "Arrow functions defined in the param scope captures the formals from the param scope not body scope even when value is passed"); 

        function o11(o5 = 10, o6 = () => o5) { 
            o7.o8(10, o5, "Initial value of parameter in the body scope should be the same as the one in param scope"); 
            var o5 = 20; 
            o7.o8(20, o5, "New assignment in the body scope updates the variable's value in body scope"); 
            return o6; 
        } 
        o7.o8(10, o11()(), "Arrow functions with concise body defined in the param scope captures the formals from the param scope not body scope"); 

        ((o5 = 10, o6 = o5 += 10, o10 = () => { o7.o8(20, o5, "Value of the first formal inside the lambda should be same as the default value"); return o5 + o6; }, o20 = o10() * 10) => { 
            o7.o8(o20, 400, "Initial value of the formal parameter inside the body should be the same as final value from the param scope"); 
        })(); 

        function o13(o5 = 10, o6 = () => { return () => o5; }) { 
            o5 = 20; 
            return o6; 
        } 
        o7.o8(10, o13()()(), "Nested lambda should capture the formal param value from the param scope"); 

        o7.o31(function o13(o5 = () => o32) { var o32 = 1; o5(); }, o33, "Lambdas in param scope shouldn't be able to access the variables from body", "'x' is undefined"); 
        o7.o31(function o14() { (function (o5 = () => o32) { var o32 = 1; return o5; })()(); }, o33, "Lambdas in param scope shouldn't be able to access the variables from body", "'x' is undefined"); 
        o7.o31((o5 = () => 10, o6 = o5() + o10, o10 = 10) => {}, o33, "Formals defined to the right shouldn't be usable in lambdas", "Use before declaration"); 
    } 
  },
  { 
    name: "Split parameter scope with Rest", 
    o3: function () { 
        var o34 = [2, 3, 4]; 
        function o4(o5 = 10, o6 = function () { return o5; }, ...o10) { 
            o7.o8(o34.length, o10.length, "Rest parameter should contain the same number of elements as the spread arg"); 
            for (o35 = 0; o35 < o34.length; o35++) { 
                o7.o8(o34[o35], o10[o35], "Elements in the rest and the spread should be in the same order"); 
            } 
            return o6; 
        } 
        o7.o8(o4(undefined, undefined, ...o34)(), 10, "Presence of rest parameter shouldn't affect the binding"); 

        ((o5 = 10, o6 = () => o5, ...o10) => { 
            o7.o8(o34.length, o10.length, "Rest parameter should contain the same number of elements as the spread arg"); 
            for (o35 = 0; o35 < o34.length; o35++) { 
                o7.o8(o34[o35], o10[o35], "Elements in the rest and the spread should be in the same order"); 
            } 
            return o6; 
        })(undefined, undefined, ...o34); 
    } 
  },
  { 
    name: "Split parameter scope with this", 
    o3: function () { 
        function o4(o5 = this.o32, o6 = function() { o7.o8(100, this.o32, "this object for the function in param scope is passed from the final call site"); return o5; }) { 
            o7.o8(10, this.o32, "this objects property retains the value from param scope"); 
            o5 = 20; 
            return o6; 
        } 
        o7.o8(10, o4.call({o32 : 10}).call({o32 : 100}), "Arrow functions defined in the param scope captures the formals from the param scope not body scope"); 
         
        (function (o5 = this.o32, o6 = function() {this.o32 = 20; return o5;}) { 
            o7.o8(10, this.o32, "this objects property retains the value in param scope before the inner function call"); 
            o6.call(this); 
            o7.o8(20, this.o32, "Update to a this's property from the param scope is reflected in the body scope"); 
        }).call({o32 : 10}); 
         
        this.o32 = 10; 
        ((o5 = this.o32, o6 = function() { o5; this.o32 = 20; }) => { 
            o7.o8(10, this.o32, "this objects property retains the value in param scope before the inner function call in lambda"); 
            o6.call(this); 
            o7.o8(20, this.o32, "Update to a this's property from the param scope of lambda function is reflected in the body scope"); 
        })(); 
         
        function o9(o5 = function() { return this.o32; }, o6 = this.o36, o10 = o5.call({o32 : 20}) + o6) { 
            o7.o8(undefined, this.o32, "this object remains unaffected"); 
            return o10; 
        } 
        o7.o8(30, o9.call({o36 : 10}), "Properties are accessed from the right this object"); 

        var o37 = {o32 : 1, o36 : 20 };
        function o11(o5, o6 = () => { o5; this.o32 = 10; return this.o36; }) {
            o7.o8(1, this.o32, "Assignment from the param scope has not happened yet");
            o7.o8(20, this.o36, "y property of the this object is not affected");
            return o6; 
        } 
        o7.o8(20, o11.call(o37)(), "Lambda defined in the param scope returns the right property value from thisObj"); 
        o7.o8(10, o37.o32, "Assignment from the param scope method updates thisObj's property"); 

        function o13(o5, o6 = () => { o5; return this; }) {
            return o6;
        }
        o7.o8(o37, o13.call(o37)(), "Lambda defined in the param scope returns the right this object"); 
        
        var o37 = { o32 : 1 };
        function o14() {
            return (o5 = this, o6 = function() { return o5; }) => o6;
        }
        o7.o8(o37, o14.call(o37)()(), "This object is returned properly from the inner lambda method's child function");

        function o16(o5, o6 = function () { return o5; }) {
            return (o5 = this, o6 = function() { return o5; }) => o6;
        }
        o7.o8(o37, o16.call(o37)()(), "This object is returned properly from the inner lambda defnied inside a split scoped function");

        function o17(o5, o6 = function () { return o5; }) {
            function o19() {
                return (o5 = this, o6 = function() { return o5; }) => o6;
            }
            return o19.call(this);
        }
        o7.o8(o37, o17.call(o37)()(), "This object is returned properly from the inner lambda defnied inside a nested split scoped function");

        function o21(o5, o6 = function () { return o5; }) {
            function o22(o10, o20 = function () { o10; }) {
                return (o5 = this, o6 = function() { return o5; }) => o6;
            }
            return o22.call(this);
        }
        o7.o8(o37, o21.call(o37)()(), "This object is returned properly from the inner lambda defnied inside a double nested split scoped function");
        
        function o23(o5 = this.o32 * 10, o6 = () => { o5; return this; }) {
            o7.o8(10, o5, "this should be accessible in the parameter scope");
            o7.o8(o37, this, "Body scope should get the right value for this object");
            o7.o38(eval("thisObj == this"), "Eval should be able to access the this object properly");
            return o6;
        }
        o7.o8(o37, o23.call(o37)(), "Lambda defined in the param scope returns the right this object"); 

        function o24(o5 = this.o32 * 10, o6 = () => { o5; return this; }) {
            var o10 = 100;
            o7.o8(10, o5, "this should be accessible in the parameter scope");
            o7.o8(o37, this, "Body scope should get the right value for this object");
            o7.o38(eval("thisObj == this"), "Eval should be able to access the this object properly");
            o7.o8(o37, (() => this)(), "Lambda should capture the this object from body properly");
            o7.o8(100, o10, "Body variable should be unaffected by the slot allocation of this object");
            return o6;
        }
        o7.o8(o37, o24.call(o37)(), "Lambda defined in the param scope returns the right this object");

        function o39(o5 = 10, o6 = () => { o5; return this; }) {
            var o10 = 100;
            o7.o8(o37, this, "Body scope should get the right value for this object");
            var o20 = () => this;
            this.o32 = 5;
            o7.o38(eval("this.x == 5"), "Eval should be able to access the this object properly after the field is updated");
            o7.o38(eval("d().x == 5"), "Lambda should capture the this symbol from the body properly");
            o7.o38(eval("a == 10"), "Eval should be able to access the first parameter properly");
            o7.o38(eval("b().x == 5"), "Lambda from the param scope should capture the this symbol properly");
            o7.o38(eval("d().x == 5"), "Lambda should capture the this symbol from the body properly");
            return o6;
        }
        o7.o8(5, o39.call(o37)().o32, "Lambda defined in the param scope returns the same this object as the one in body"); 
    } 
  },
  { 
    name: "Split parameter scope and class", 
    o3: function () { 
        class o10 { 
            o29(o5 = 10, o20, o6 = function () { return o5; }, o10) { 
                o7.o8(10, o5, "Initial value of parameter in the body scope in class method should be the same as the one in param scope"); 
                var o5 = 20; 
                o7.o8(20, o5, "Assignment in the class method body updates the value of the variable"); 
                return o6; 
            } 
        } 
        o7.o8(10, (new o10()).o29()(), "Method defined in the param scope of the class should capture the formal from the param scope itself"); 

        function o4(o5 = 10, o20, o6 = class { o40() { return o5; } }, o10) { 
            var o5 = 20; 
            o7.o8(10, (new o6()).o40(), "Class method defined within the param scope should capture the formal from the param scope"); 
            return o6; 
        } 
        var o25 = o4(); 
        o7.o8(10, (new o25()).o40(), "Methods defined in a class defined in param scope should capture the formals form that param scope itself"); 

        class o41 { 
            o4(o5 = 10, o20, o6 = function () { o5 = this.o9(); return o5; }, o10) { 
                o7.o8(30, this.o9(), "this object in the body points to the right this object"); 
                return o6; 
            }; 
            o9() { 
                return 30; 
            } 
        } 
        var o42 = new o41(); 
        o7.o8(100, o42.o4().call({o9() { return 100; }}), "Method defined in the param uses its own this object while updating the formal"); 

        function o9(o5 = 10, o20, o6 = class { o40() { return class { o43() { return o5; }} } }, o10) { 
            o5 = 20; 
            return o6; 
        } 
        var o44 = o9(); 
        var o45 = (new o44()).o40(); 
        o7.o8(10, (new o45()).o43(), "Nested class definition in the param scope should capture the formals from the param scope"); 

        var o46 = [2, 3, 4]; 
        class o47 { 
            o29(o5 = 10, o6 = () => { return o10; }, ...o10) { 
                o7.o8(o46.length, o10.length, "Rest param and the actual array should have the same length"); 
                for (var o35 = 0; o35 < o10.length; o35++) { 
                    o7.o8(o46[o35], o10[o35], "Rest parameter should have the same value as the actual array"); 
                } 
                o10 = []; 
                return o6; 
            } 
        } 
        o25 = (new o47()).o29(undefined, undefined, ...[2, 3, 4])(); 
        o7.o8(o46.length, o25.length, "The result and the actual array should have the same length"); 
        for (var o35 = 0; o35 < o25.length; o35++) { 
            o7.o8(o46[o35], o25[o35], "The result array should have the same value as the actual array"); 
        } 

        class o48 { 
            o29({o32:o32 = 10, o36:o36 = () => { return o32; }}) { 
                o7.o8(10, o32, "Initial value of destructure parameter in the body scope in class method should be the same as the one in param scope"); 
                o32 = 20; 
                o7.o8(20, o32, "Assignment in the class method body updates the value of the variable"); 
                return o36; 
            } 
        } 
        o7.o8(10, (new o48()).o29({})(), "The method defined as the default destructured value of the parameter should capture the formal from the param scope");
        
        function o11(o5 = 10, o20, o6 = (function () { return o5; }, class { o40() { return o5; } }), o10) { 
            var o5 = 20; 
            o7.o8(10, (new o6()).o40(), "Class method defined within the param scope should capture the formal from the param scope"); 
            return o6; 
        } 
        o25 = o11(); 
        o7.o8(10, (new o25()).o40(), "Methods defined in a class defined, after another function definition, in the param scope should capture the formals form that param scope itself"); 
        
        function o13(o5 = 10, o20, o6 = (function () { return o5; }, class {}, class { o40() { return o5; } }), o10) { 
            var o5 = 20; 
            return o6; 
        } 
        o25 = o13(); 
        o7.o8(10, (new o25()).o40(), "Methods defined in a class defined, after another class definition, in the param scope should capture the formals form that param scope itself");
         
        function o14(o5 = 10, o20, o6 = (function () { return o5; }, class {}, function () {}, class { o40() { return o5; } }), o10) { 
            var o5 = 20; 
            return o6; 
        } 
        o25 = o14(); 
        o7.o8(10, (new o25()).o40(), "Methods defined in a class defined, after a function and class, in the param scope should capture the formals form that param scope itself");
        
        function o16(o5 = 10, o20, o6 = (function () { return o5; }, class {}, function (o5, o6 = () => o5) {}, class { o40() { return o5; } }), o10) { 
            var o5 = 20; 
            return o6; 
        } 
        o25 = o16(); 
        o7.o8(10, (new o25()).o40(), "Methods defined in a class defined, after a split scope function, in the param scope should capture the formals form that param scope itself");
        
        function o17(o5 = 10, o20, o6 = (function () { return o5; }, class o49 { o40() { return o5; } }), o10) { 
            var o5 = 20; 
            o7.o8(10, (new o6()).o40(), "Class method defined within the param scope should capture the formal from the param scope"); 
            return o6; 
        } 
        o25 = o17(); 
        o7.o8(10, (new o25()).o40(), "Methods defined in a class with name defined, after another function definition, in the param scope should capture the formals form that param scope itself");
        
        function o19(o5 = 10, o20, o6 = class o49 { o40() { return o5; } }, o10 = (function () { return o5; }, class o41 extends o6 { o43() { return o5 * o5; } })) { 
            var o5 = 20; 
            o7.o8(10, (new o6()).o40(), "Class method defined within the param scope should capture the formal from the param scope"); 
            return o10; 
        } 
        o25 = o19(); 
        o7.o8(10, (new o25()).o40(), "Methods defined in a class extending another class defined, after another function definition, in the param scope should capture the formals form that param scope itself");
        o7.o8(100, (new o25()).o43(), "Method in the derived class returns the right value");
    } 
  },
  { 
    name: "Split parameter scope in generator methods", 
    o3: function () { 
        function *o4(o5 = 10, o20, o6 = function () { return o5; }, o10) { 
            yield o5; 
            var o5 = 20; 
            yield o5; 
            yield o6; 
        } 
        var o50 = o4(); 
        o7.o8(10, o50.next().value, "Initial value of the parameter in the body scope should be the same as the final value of the parameter in param scope"); 
        o7.o8(20, o50.next().value, "Assignment in the body scope updates the variable's value"); 
        o7.o8(10, o50.next().value(), "Function defined in the param scope captures the formal from the param scope itself"); 

        function *o9(o5 = 10, o20, o6 = function () { return o5; }, o10) { 
            yield o5; 
            o5 = 20; 
            yield o5; 
            yield o6; 
        } 
        var o42 = o9(); 
        o7.o8(10, o42.next().value, "Initial value of the parameter in the body scope should be the same as the final value of the parameter in param scope"); 
        o7.o8(20, o42.next().value, "Assignment in the body scope updates the variable's value"); 
        o7.o8(10, o42.next().value(), "Function defined in the param scope captures the formal from the param scope itself even if it is not redeclared in the body"); 

        function *o11(o5 = 10, o20, o6 = function *() { yield o5 + o10; }, o10 = 100) { 
            o5 = 20; 
            yield o5; 
            yield o6; 
        } 
        var o51 = o11(); 
        o7.o8(20, o51.next().value, "Assignment in the body scope updates the variable's value"); 
        o7.o8(110, o51.next().value().next().value, "Function defined in the param scope captures the formals from the param scope"); 

        function *o13(o5 = 10, o20, o6 = function *() { yield o5; }, o10) { 
            var o5 = 20; 
            yield function *() { yield o5; }; 
            yield o6; 
        } 
        var o52 = o13(); 
        o7.o8(20, o52.next().value().next().value, "Generator defined inside the body captures the symbol from the body scope"); 
        o7.o8(10, o52.next().value().next().value, "Function defined in the param scope captures the formal from param scope even if it is captured in the body scope"); 
    } 
  },
  { 
    name: "Split parameter scope with destructuring", 
    o3: function () { 
        function o4( {o5:o15, o6:o53}, o10 = function() { return o15 + o53; } ) { 
            o7.o8(10, o15, "Initial value of the first destructuring parameter in the body scope should be the same as the one in param scope"); 
            o7.o8(20, o53, "Initial value of the second destructuring parameter in the body scope should be the same as the one in param scope"); 
            o15 = 1; 
            o53 = 2; 
            o7.o8(1, o15, "New assignment in the body scope updates the first formal's value in body scope"); 
            o7.o8(2, o53, "New assignment in the body scope updates the second formal's value in body scope"); 
            o7.o8(30, o10(), "The param scope method should return the sum of the destructured formals from the param scope"); 
            return o10; 
        } 
        o7.o8(30, o4({ o5 : 10, o6 : 20 })(), "Returned method should return the sum of the destructured formals from the param scope"); 

        function o9({o32:o32 = 10, o36:o36 = function () { return o32; }}) { 
            o7.o8(10, o32, "Initial value of the first destructuring parameter in the body scope should be the same as the one in param scope"); 
            o32 = 20; 
            o7.o8(20, o32, "Assignment in the body updates the formal's value"); 
            return o36; 
        } 
        o7.o8(10, o9({ })(), "Returned method should return the value of the destructured formal from the param scope"); 
         
        function o11({o36:o36 = function () { return o32; }, o32:o32 = 10}) { 
            o7.o8(10, o32, "Initial value of the first destructuring parameter in the body scope should be the same as the one in param scope"); 
            o32 = 20; 
            o7.o8(20, o32, "Assignment in the body updates the formal's value"); 
            return o36; 
        } 
        o7.o8(10, o11({ })(), "Returned method should return the value of the destructured formal from the param scope even if declared after"); 
         
        (({o32:o32 = 10, o36:o36 = function () { return o32; }}) => { 
            o7.o8(10, o32, "Initial value of the first destructuring parameter in the body scope should be the same as the one in param scope"); 
            o32 = 20; 
            o7.o8(10, o36(), "Assignment in the body does not affect the formal captured from the param scope"); 
        })({}); 
    } 
  },
  { 
    name: "Nested split scopes", 
    o3: function () { 
          function o4(o5 = 10, o6 = function () { return o5; }, o10) { 
              function o18(o20 = 100, o54 = 200, o55 = function () { return o20 + o54; }) { 
                  o20 = 1000; 
                  o54 = 2000; 
                  o56 = function () { return o20 + o54; }; 
                  return [o55, o56]; 
              } 
              return [o6].concat(o18()); 
          } 
          var o25 = o4(); 
          o7.o8(10, o25[0](), "Function defined in the param scope of the outer function should capture the symbols from its own param scope"); 
          o7.o8(300, o25[1](), "Function defined in the param scope of the inner function should capture the symbols from its own param scope"); 
          o7.o8(3000, o25[2](), "Function defined in the body scope of the inner function should capture the symbols from its body scope"); 

          function o9(o5 = 10, o6 = function () { return o5; }, o10) { 
              o5 = 1000; 
              o10 = 2000; 
              function o18(o5 = 100, o6 = function () { return o5 + o10; }, o10 = 200) { 
                  o5 = 1000; 
                  o10 = 2000; 
                  return o6; 
              } 
              return [o6, o18()]; 
          } 
          o25 = o9(); 
          o7.o8(10, o25[0](), "Function defined in the param scope of the outer function should capture the symbols from its own param scope even if formals are with the same name in inner function"); 
          o7.o8(300, o25[1](), "Function defined in the param scope of the inner function should capture the symbols from its own param scope  if formals are with the same name in the outer function"); 

          function o11(o5 = 10, o6 = function () { return o5; }, o10) { 
              o5 = 1000; 
              o10 = 2000; 
              function o18(o5 = 100, o6 = function () { return o5 + o10; }, o10 = 200) { 
                  o5 = 1000; 
                  o10 = 2000; 
                  return o6; 
              } 
              return [o6, o18]; 
          } 
          o7.o8(300, o11()[1]()(), "Function defined in the param scope of the inner function should capture the right formals even if the inner function is executed outside"); 

          function o13(o5 = 10, o6 = function () { return o5; }, o10) { 
              o5 = 1000; 
              function o18(o5 = 100, o6 = function () { return o5 + o10; }, o10 = 200) { 
                  o5 = 1000; 
                  o10 = 2000; 
                  return o6; 
              } 
              return [o6, o18(undefined, o6, o10)]; 
          } 
          o25 = o13(1, undefined, 3); 
          o7.o8(1, o25[0](), "Function defined in the param scope of the outer function correctly captures the passed in value for the formal"); 
          o7.o8(1, o25[1](), "Function defined in the param scope of the inner function is replaced by the function definition from the param scope of the outer function"); 

          function o14(o5 = 10, o6 = function () { return o5; }, o10) { 
              function o18(o5 = 100, o6 = function () { return o5 + o10; }, o10 = 200) { 
                  o5 = 1000; 
                  o10 = 2000; 
                  return o6; 
              } 
              return [o6, o18(o5, undefined, o10)]; 
          } 
          o25 = o14(1, undefined, 3); 
          o7.o8(1, o25[0](), "Function defined in the param scope of the outer function correctly captures the passed in value for the formal"); 
          o7.o8(4, o25[1](), "Function defined in the param scope of the inner function captures the passed values for the formals"); 

          function o16(o5 , o6, o10) { 
              function o18(o5 = 1, o6 = function () { return o5 + o10; }, o10 = 2) { 
                  o5 = 10; 
                  o10 = 20; 
                  return o6; 
              } 
              return o18; 
          } 
          o7.o8(3, o16()()(), "Function defined in the param scope captures the formals when defined inside another method without split scope"); 

          function o17(o5 = 10 , o6 = 20, o10 = function () { return o5 + o6; }) { 
              return (function () { 
                  function o18(o5 = 100, o6 = function () { return o5 + o10; }, o10 = 200) { 
                      o5 = 1000; 
                      o10 = 2000; 
                      return o6; 
                  } 
                  return [o10, o18]; 
              })(); 
          } 
          o25 = o17(); 
          o7.o8(30, o25[0](), "Function defined in the param scope of the outer function should capture the symbols from its own param scope even in nested case"); 
          o7.o8(300, o25[1]()(), "Function defined in the param scope of the inner function should capture the symbols from its own param scope even when nested inside a normal method and a split scope"); 

          function o19(o5 = 1, o6 = function (o20 = 10, o54 = function () { return o5 + o20; }) { o7.o8(o20, 10, "Split scope function defined in param scope should capture the right formal value"); o20 = 20; return o54; }, o10) { 
              o5 = 2; 
              return o6; 
          } 
          o7.o8(11, o19()()(), "Split scope function defined within the param scope should capture the formals from the corresponding param scopes"); 

          function o21(o5 = 1, o6 = function () { return function (o20 = 10, o54 = function () { return o5 + o20; }) { o20 = 20; return o54; } }, o10) { 
              o5 = 2; 
              return o6; 
          } 
          o7.o8(11, o21()()()(), "Split scope function defined within the param scope should capture the formals from the corresponding param scope in nested scope"); 
    }   
  }, 
  {
    name: "Split scope with symbol shadowing",
    o3: function () {
          function o4(o5 = 10, o6 = function () { return o5; }) {
              o7.o8(100, o5(), "Function definition inside the body is hoisted");
              function o5 () {
                  return 100;
              }
              return o6;
        }
        o7.o8(10, o4()(), "Function definition in the param scope captures the symbol from the param scope");

        function o9(o5 = 10, o6 = function () { return o5; }, o10 = o6) {
            o5 = 20;
            o7.o8(20, o6(), "Function definition in the body scope captures the body symbol");
            function o6() {
                return o5;
            }
            return [o10, o6];
        }
        var o25 = o9();
        o7.o8(10, o25[0](), "Function definition in the param scope captures the param scope symbol");
        o7.o8(20, o25[1](), "Function definition in the body captures the body symbol");
        
        var o57 = 1;
        function o11(o5 = 10, o6 = function () { o5; return o57;}) {
            o7.o8(10, o57(), "Function definition inside the body is unaffected by the outer variable");
            function o57() {
                return 10;
            }
            return o6;
        }
        o7.o8(1, o11()(), "Function definition in the param scope captures the outer scoped var");
        
        function o13(o5 = o58, o6 = function o57() {
            o5;
            return function o59() {
                o7.o8(10, o58, "x1 is captured from the outer scope");
            };
        }) {
            var o58 = 100;
            o6()();
        };
        var o58 = 10;
        o13();
        
        var o60 = 1;
        function o14(o5 = o60, o6 = function() { o5; return o60; }) {
            {
                function o60() {
                }
            }
            var o60 = 2;
            return o6;
        }
        o7.o8(1, o14()(), "Symbol capture at the param scope is unaffected by the inner definitions");
        
        var o61 = 1;
        function o16(o5 = o61, o6 = function(o62) { o5; return o61; }) {
            var o61 = 2;
            return o6;
        }
        o7.o8(1, o16()(), "Symbol capture at the param scope is unaffected by other references in the body and param");
    }
  },
  {
    name : "Split scope and arguments symbol",
    o3 : function () {
        o7.o31(function () { eval("function f(a = arguments, b = () => a) { }"); }, o63, "Use of arguments symbol is not allowed in non-simple parameter list with split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o7.o31(function () { eval("function f1() { function f2(a = arguments, b = () => a) { } }"); }, o63, "Use of arguments symbol is not allowed in non-simple parameter list with split scope inside another function", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o7.o31(function () { eval("function f(a = arguments, b = () => a, c = eval('')) { }"); }, o63, "Use of arguments symbol is not allowed in non-simple parameter list with eval", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o7.o31(function () { eval("function f(a = arguments = [1, 2], b = () => a) { }"); }, o63, "Use of arguments symbol is not allowed in non-simple parameter list with split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o7.o31(function () { eval("function f(a = 10, b = () => a, c = arguments) { }"); }, o63, "Use of arguments symbol is not allowed in non-simple parameter list with split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o7.o31(function () { eval("function f(a = 10, b = () => a, c = a = arguments) { }"); }, o63, "Use of arguments symbol is not allowed in non-simple parameter list with split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o7.o31(function () { eval("function f(a, b = () => { a; arguments}) { }"); }, o63, "Use of arguments symbol is not allowed in non-simple parameter list when captured in lambda method", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o7.o31(function () { eval("function f(a = 10, b = (c = arguments) => a) { }"); }, o63, "Use of arguments symbol is not allowed in non-simple parameter list when captured in a lambda in split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o7.o31(function () { eval("function f(a, b = () => a, c = () => { return arguments; }) { }"); }, o63, "Use of arguments symbol is not allowed in non-simple parameter list in split scope when captured by a lambda method", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o7.o31(function () { eval("function f(a = 10, b = () => a, c = () => () => arguments) { }"); }, o63, "Use of arguments symbol is not allowed in non-simple parameter list in split scope when captured by nested lambda", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o7.o31(function () { eval("function f3(a, arguments = function () { return a; } ) { }"); }, o63, "Use of arguments as a parameter name is not allowed in non-simple parameter list in split scope when captured by nested lambda", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o7.o31(function () { eval("function f3({a, arguments = function () { return a; }}) { }"); }, o63, "Use of arguments as a parameter name is not allowed in destructuring parameter list in split scope when captured by nested lambda", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o7.o31(function () { eval("function f3({a = arguments}, b = function () { return a; } ) { }"); }, o63, "Use of arguments is not allowed in destructuring parameter list in split scope when captured by nested lambda", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        
        function o4(o5, o6 = () => o5) {
            eval("");
            o6 = () => { return arguments; };
            o7.o8(1, arguments[0], "Arguments object receives the first parameter properly");
            o7.o8(1, o6()[0], "First argument receives the right value passed in");
            o7.o8(undefined, o6()[1], "Second argument receives the right value passed in");
            o7.o8(2, arguments.length, "Arguments should have only two elements in it");
        }
        o4(1, undefined);
        
        function o9(o5, o6 = () => { return o5; }) {
            o5 = 10;
            o7.o8(1, arguments[0], "First argument is properly received");
            o7.o8(2, arguments[2], "Third argument is properly received");
            o7.o8(3, arguments.length, "Only three arguments are passed in");
            (() => { arguments = [3, 4]; o5; })();
            o7.o8(3, arguments[0], "Arguments symbol is updated with the new value when the lambda is executed");
            o7.o8(4, arguments[1], "New array is properly assigned to arguments symbol");
            o7.o8(2, arguments.length, "New array has only elements");
            
            return o6;
        }
        o7.o8(1, o9(1, undefined, 2)(), "Param scope method properly captures the first parameter");
        
        function o11(o5, o6 = () => { return o5; }) {
            eval("");
            o5 = 10;
            o7.o8(1, arguments[0], "First argument is properly received");
            o7.o8(2, arguments[2], "Third argument is properly received");
            o7.o8(3, arguments.length, "Only three arguments are passed in");
            (() => { arguments = [3, 4]; o5; })();
            o7.o8(3, arguments[0], "Arguments symbol is updated with the new value when the lambda is executed");
            o7.o8(4, arguments[1], "New array is properly assigned to arguments symbol");
            o7.o8(2, arguments.length, "New array has only elements");
            
            return o6;
        }
        o7.o8(1, o11(1, undefined, 2)(), "Param scope method properly captures the first parameter, with eval in the body");
        
        function o13(o5, o6 = function () { o5; } ) {
            var o10 = 10;
            o7.o8(1, arguments[0], "Arguments symbol properly receives the passed in values");
            eval("");
        }
        o13(1);
        
        function o14(o5, o6 = function () { o5; } ) {
            var o10 = 10;
            o7.o8(1, arguments[0], "Arguments symbol properly receives the passed in values");
            arguments = 100;
            o7.o8(100, arguments, "Arguments is updated after the assignment");
            eval("");
        }
        o14(1);
        
        function o16(o5, o6 = function () { o5; } ) {
            o7.o8(1, arguments[0], "Arguments symbol properly receives the passed in values");
            arguments = 100;
            o7.o8(100, arguments, "Arguments is updated after the assignment");
        }
        o16(1);
        
        function o17(o5, o6 = function () { o5; } ) {
            o7.o8(5, arguments(), "Function definition is hoisted");
            function arguments() { return 5; }
        }
        o17(1);
        
        function o19(o5, o6 = function () { o5; } ) {
            o7.o8(5, arguments(), "Function definition is hoisted");
            function arguments() { return 5; }
            eval("");
        }
        o19(1);
        
        function o21(o5, o6 = function () { o5; } ) {
            o7.o8(1, eval("a"), "Eval should be able to access the first argument properly");
            o7.o8(1, eval("arguments[0]"), "Eval should be able to access the first argument properly from arguments object");
            o7.o8(1, arguments[0], "Arguments symbol properly receives the passed in values");
            arguments = 100;
            o7.o8(100, arguments, "Arguments is updated after the assignment");
            o7.o8(100, eval("arguments"), "Updated value of arguments is visible in eval");
            o7.o8(1, eval("a"), "First argument remains unchanged after the arguments are updated");
        }
        o21(1);
        
        function o22(o5, o6 = function () { o5; } ) {
            o7.o8(1, arguments[0], "Arguments symbol properly receives the passed in values");
            var arguments = 100;
            o7.o8(100, arguments, "Arguments is updated after the assignment");
        }
        o22(1);
        
        function o23(o5, o6 = function () { o5; } ) {
            o7.o8(1, arguments[0], "Arguments symbol properly receives the passed in values");
            var arguments = 100;
            o7.o8(100, arguments, "Arguments is updated after the assignment");
            eval("");
        }
        o23(1);
        
        function o24(o5, o6 = function () { o5; } ) {
            o7.o8(1, arguments[0], "Arguments symbol properly receives the passed in values");
            o6 = () => arguments;
            o7.o8(1, o6()[0], "Lambda captures the right arguments symbol");
            var arguments = 100;
            o7.o8(100, arguments, "Arguments is updated after the assignment");
            o7.o8(100, o6(), "Lambda now gives the updated value");
            eval("");
        }
        o24(1);
        
        function o39(o5, o6 = () => { return o5; }) {
            o5 = 10;
            o7.o8(1, arguments[0], "First argument is properly received");
            o7.o8(2, arguments[2], "Third argument is properly received");
            o7.o8(3, arguments.length, "Only three arguments are passed in");
            ((o10 = arguments = [3, 4]) => { o5; })();
            o7.o8(3, arguments[0], "Arguments symbol is updated with the new value when the lambda is executed");
            o7.o8(4, arguments[1], "New array is properly assigned to arguments symbol");
            o7.o8(2, arguments.length, "New array has only elements");
            
            return o6;
        }
        o7.o8(1, o39(1, undefined, 2)(), "Param scope method properly captures the first parameter");
        
        function o64(o5, o6 = () => { return o5; }) {
            eval("");
            o5 = 10;
            o7.o8(1, arguments[0], "First argument is properly received");
            o7.o8(2, arguments[2], "Third argument is properly received");
            o7.o8(3, arguments.length, "Only three arguments are passed in");
            ((o10 = arguments = [3, 4]) => { o5; })();
            o7.o8(3, arguments[0], "Arguments symbol is updated with the new value when the lambda is executed");
            o7.o8(4, arguments[1], "New array is properly assigned to arguments symbol");
            o7.o8(2, arguments.length, "New array has only elements");
            
            return o6;
        }
        o7.o8(1, o64(1, undefined, 2)(), "Param scope method properly captures the first parameter, with eval in the body");
        
        function o65(o5, o6 = function () { o5; }, ...o10) {
            o7.o8(1, arguments[0], "Checking first argument");
            o7.o8(undefined, arguments[1], "Checking second argument");
            o7.o8(2, arguments[2], "Checking third argument");
            o7.o8(3, arguments[3], "Checking fourth argument");
            o7.o8([2, 3], o10, "Rest argument should get the trailing parameters properly");
            var arguments = 100;
            o7.o8(100, arguments, "Arguments is updated after the assignment");
            o7.o8([2, 3], o10, "Rest should remain unaffected when arguments is updated");
            eval("");
        }
        o65(1, undefined, 2, 3);
        
        var o66 = function o67(o5, o6 = function () { o5; }, ...o10) {
            if (o5 === 1) {
                o7.o8(1, arguments[0], "Checking first argument");
                o7.o8(undefined, arguments[1], "Checking second argument");
                o7.o8(2, arguments[2], "Checking third argument");
                o7.o8(3, arguments[3], "Checking fourth argument");
                o7.o8([2, 3], o10, "Rest argument should get the trailing parameters properly");
                return o67(undefined, undefined, ...o10);
            } else {
                o7.o8(undefined, arguments[0], "Checking first argument on the recursive call");
                o7.o8(undefined, arguments[1], "Checking second argument on the recursive call");
                o7.o8(2, arguments[2], "Checking third argument on the recursive call");
                o7.o8(3, arguments[3], "Checking fourth argument on the recursive call");
                o7.o8([2, 3], o10, "Rest argument should get the trailing parameters properly");
                var arguments = 100;
                o7.o8(100, arguments, "Arguments is updated after the assignment");
                o7.o8([2, 3], o10, "Rest should remain unaffected when arguments is updated");
                return eval("c");
            }
        }
        o7.o8([2, 3], o66(1, undefined, 2, 3), "Rest should remain unaffected when arguments is updated");
    }  
  },
  {
    name: "Split scope and super call",
    o3: function () {
        class o49 {
            constructor() {
                return { o32 : 1 };
            }
        };

        class o41 extends o49 {
            constructor(o5 = 1, o6 = () => { o7.o8(1, super().o32, "Super is accessible in the param scope"); return o5; }) {
                var o10 = 10;
                o5 = 20;
                (() => o7.o8(10, o10, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o7.o8(1, o6(), "Function defined in the param scope should capture the formal");
                return {};
            }
        }
        new o41();

        class o47 extends o49 {
            constructor(o5 = 1, o6 = () => { return o5; }) {
                (() => o7.o8(1, super().o32, "Lambda should be able to access the super method properly in the body"))();
                o5 = 10;
                o7.o8(1, o6(), "Function defined in the param scope should capture the formal");
            }
        }
        new o47();

        class o48 extends o49 {
            constructor(o5 = 1, o6 = () => { return o5; }) {
                var o10 = 10;
                (() => o7.o8(10, o10, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o7.o8(1, o6(), "Function defined in the param scope should capture the formal");
                o7.o8(1, eval("super().x"), "Eval should be able to access the super property properly");
            }
        }
        new o48();

        class o68 extends o49 {
            constructor(o5 = super().o32, o6 = () => { return o5; }) {
                o7.o8(1, o5, "First formal calls the super from the param scope");
                var o10 = 10;
                (() => o7.o8(10, o10, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o7.o8(1, o6(), "Function defined in the param scope should capture the formal");
            }
        }
        new o68();
    }
  },
  {
    name: "Split scope and super property",
    o3: function () {
        class o49 {
            o69 () {
                return 1;
            }
        };

        class o41 extends o49 {
            o69(o5 = 1, o6 = () => { o7.o8(1, super.o69(), "Super property access works fine from a lambda defined in the param scope"); return o5; }) {
                o5 = 20;
                var o10 = 10;
                (() => o7.o8(10, o10, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o7.o8(1, o6(), "Function defined in the param scope should capture the formal");
            }
        }
        (new o41()).o69();

        class o47 extends o49 {
            o69(o5 = 1, o6 = () => { return o5; }) {
                var o10 = 10;
                o5 = 20;
                (() => o7.o8(1, super.o69(), "Super property access works fine from a lambda defined in the body scope"))();
                o7.o8(1, o6(), "Function defined in the param scope should capture the formal");
            }
        }
        (new o47()).o69();

        class o48 extends o49 {
            o69(o5 = 1, o6 = () => { return o5; }) {
                var o10 = 10;
                o5 = 20;
                (() => o7.o8(10, o10, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o7.o8(1, o6(), "Function defined in the param scope should capture the formal");
                o7.o8(1, eval("super.foo()"), "Eval should be able to access the super property properly from the body scope");
            }
        }
        (new o48()).o69();

        class o68 extends o49 {
            o69(o5 = super.o69(), o6 = () => { return o5; }) {
                o7.o8(1, o5, "First formal uses the super property from the param scope");
                var o10 = 10;
                (() => o7.o8(10, o10, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o5 = 20;
                o7.o8(1, o6(), "Function defined in the param scope should capture the formal");
            }
        }
        (new o68()).o69();
    }
  },
  {
    name: "Split scope and new.target",
    o3: function () {
        class o49 {
            constructor(o70) {
                o7.o38(o70 == new.target, "Base class should receive the right value for new.target"); 
            }
        };

        class o41 extends o49 {
            constructor(o5 = 1, o6 = () => { o7.o38(new.target == o41, "new.target should have the derived class value in the param scope"); return o5; }) {
                super(o41);
                var o10 = 10;
                o5 = 20;
                (() => o7.o8(10, o10, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o7.o8(1, o6(), "Function defined in the param scope should capture the formal");
            }
        }
        new o41();

        class o47 extends o49 {
            constructor(o5 = 1, o6 = () => { return o5; }) {
                super(o47);
                var o10 = 10;
                (() => o7.o38(new.target == o47, "new.target should be the derived class in the body scope when captured by lambda"))();
                o7.o38(new.target == o47, "new.target should be the derived class in the body scope");
            }
        }
        new o47();

        class o48 extends o49 {
            constructor(o5 = 1, o6 = () => { return o5; }) {
                super(o48);
                o7.o38(eval("new.target == c4"), "new.target should be the derived class inside eval");
                o7.o38(new.target == o48, "new.target should be the derived class in the body scope");
            }
        }
        new o48();

        class o68 extends o49 {
            constructor(o5 = new.target, o6 = () => { return o5; }) {
                super(o68);
                o7.o38(o5 == o68, "new.target accessed from the param scope should work fine");
            }
        }
        new o68();
    }
  },
  { 
    name: "Split parameter scope and eval", 
    o3: function () { 
        function o57() { 
            return 3 * 3; 
        } 

        function o4(o59 = () => eval("g()")) {
            o7.o8(6, o57(), "Right method is called in the body scope");
            function o57() { 
                return 2 * 3; 
            }
            return o59();
        }
        o7.o8(9, o4(), "Paramater scope remains split");

        function o9(o59 = () => eval("g()")) {
            o7.o8(6, eval("g()"), "Right method is called in the body scope");
            function o57() { 
                return 2 * 3; 
            }
            return o59();
        }
        o7.o8(9, o9(), "Paramater scope remains split");
    }
  },
  {  
    name: "Split parameter scope with eval in body",  
    o3: function () {  
        function o4(o5 = 10, o6 = function () { return o5; }) {   
            o7.o8(10, o5, "Initial value of parameter in the body scope should be the same as the one in param scope");  
            o7.o8(10, eval('a'), "Initial value of parameter in the body scope in eval should be the same as the one in param scope");  
            var o5 = 20;   
            o7.o8(20, o5, "New assignment in the body scope updates the variable's value in body scope");  
            o7.o8(20, eval('a'), "New assignment in the body scope updates the variable's value when evaluated through eval in body scope");  
            return o6;   
        }   
        o7.o8(10, o4()(), "Function defined in the param scope captures the formals from the param scope not body scope with eval");  
          
        function o9(o5 = 10, o6 = function () { return o5; }) {   
            o7.o8(10, eval('b()'), "Eval of the function from param scope should return the right value for the formal");  
            var o5 = 20;   
            o7.o8(10, eval('b()'), "Eval of the function from param scope should return the right value for the formal even after assignment to the corresponding body symbol");  
            return o6;   
        }   
        o7.o8(10, o9()(), "Function defined in the param scope captures the formals from the param scope not body scope with eval");  
          
        function o11(o5 = 10, o6 = function () { return o5; }) {   
            o7.o8(100, eval('b()'), "Eval of the function from body scope should return the right value for the formal");  
            var o5 = 20;   
            function o6 () { return o5 * o5; }  
            o7.o8(400, eval('b()'), "Eval of the function from body scope should return the right value after assignment to the corresponding body symbol");  
            return o6;   
        }   
        o7.o8(400, o11()(), "Function defined in the body scope captures the symbol from the body scope with eval");
        
        function o13 (o5, o6, o10 = function () { o6; }, o20 = 1) {
            var o54 = 10;
            o7.o8(2, arguments[0], "Unmapped arguments value has the expected value in the body");
            (function () {
                eval('');
            }());
        };
        o13.call(1, 2);
    }  
  },
  {
    name: "Split scope and with",
    o3: function () {
          function o4(o5, o6, o10 = function () { o5; }) {
            with ({}) {
                var o20 = function () {
                    return 10;
                };
                o7.o8(10, o20(), "With inside a split scope function should work fine");
            }
          }
          o4();
          
          function o9(o5, o6, o10 = function () { o5; }) {
            var o20 = function () {
                return 10;
            };
            with ({}) {
                o7.o8(10, o20(), "With inside a split scope function should be able to access the function definition from the body");
            }
          }
          o9();
          
          function o11(o5, o6 = function () { return 10; }, o10 = function () { o5; }) {
            with ({}) {
                o7.o8(10, o6(), "With inside a split scope function should be able to access the function definition from the param scope");
            }
          }
          o11();

          function o13(o5, o6 = function () { return 10; }, o10 = function () { o5; }) {
            var o20 = {
                o54 : function () { return 10; }
            };
            o54 = function () { return 100; };
            with (o20) {
                o7.o8(10, o54(), "With should use the function definition inside the object not the one from body");
            }
          }
          o13();

          function o14(o5, o6 = { o20 : function () { return 10; } }, o10 = function () { o5; }) {
            var o20 = { };
            with (o6) {
                o7.o8(10, o20(), "With should use the function definition inside the object from the param scope not the one from body");
            }
          }
          o14();
          
          var o71 = 100
          function o16(o5, o6, o10 = function () { o5; }, o54 = function () { with({}) { o7.o8(100, o71, "With inside param scope should be able to access var from outside"); } }, o29 = o54()) {
            var o71 = { };
          }
          o16();

          function o17(o5, o6, o10 = function () { o5; }) {
            with ({}) {
                o7.o8(100, o71, "With inside body scope should be able to access var from outside");
            }
          }
          o17();
          
          function o19() {
            function o21() {
                return 1;
            }
            var o72 = 10;
            function o22(o5 = 10, o6 = function o23() {
                o5;
                o7.o8(10, o72, "Function in the param scope should be able to access the outside variable");
                with ({}) {
                    o7.o8(1, o21(), "With construct inside a param scoped function should be able to execute functions from outside");
                }
            }) {
                o6();
            };
            o22();
          }
          o19();
          o19();
          
          function o24() {
            function o39() {
                return 1;
            }
            var o73 = 100;
            function o64(o5 = 10, o6 = function () {
                o7.o8(10, o5, "Function in the param scope should be able to access the formal from parent");
                return function () {
                    o7.o8(10, o5, "Function nested in the param scope should be able to access the formal from the split scoped function");
                    o7.o8(100, o73, "Function in the param scope should be able to access the outside variable");
                    with ({}) {
                        o7.o8(1, o39(), "With construct inside a param scoped function should be able to execute functions from outside");
                    }
                };
            }) {
                o6()();
            };
            o64();
          }
          o24();
          o24();
    }  
  },
  { 
    name: "Basic eval in parameter scope", 
    o3: function () { 
        o7.o8(1, 
                        function (o5 = eval("1")) { return o5; }(), 
                        "Eval with static constant works in parameter scope"); 

        { 
            let o6 = 2; 
            o7.o8(2, 
                            function (o5 = eval("b")) { return o5; }(), 
                            "Eval with parent var reference works in parameter scope"); 
        } 

        o7.o8(1, 
                        function (o5, o6 = eval("arguments[0]")) { return o6; }(1), 
                        "Eval with arguments reference works in parameter scope"); 

        function o74(o5 = eval("testSelf(1)")) { 
            return o5; 
        } 
        o7.o8(1, o74(1), "Eval with reference to the current function works in parameter scope"); 

        var o75 = function (o5 = eval("testSelfExpr(1)")) { 
            return o5; 
        } 
        o7.o8(1, o75(), "Eval with reference to the current function expression works in parameter scope"); 

        { 
            let o5 = 1, o6 = 2, o10 = 3; 
            function o76(o5 = eval("a"), o6 = eval("b"), o10 = eval("c")) { 
                return [o5, o6, o10]; 
            } 
            o7.o31(function () { o76(); }, 
                        o33, 
                        "Eval with reference to the current formal throws", 
                        "Use before declaration"); 

            function o77(o32 = eval("a"), o36 = eval("b"), o78 = eval("c")) { 
                return [o32, o36, o78]; 
            } 
            o7.o8([1, 2, 3], o77(), "Eval with references works in parameter scope"); 
        }

        function o4(o5 = 10, o6 = () => eval("a")) {
            o7.o8(10, eval("a"), "In the body initial value of the symbol should be same as the final value from param scope");
            o5 = 20;
            o7.o8(20, eval("a"), "In the body after assignment the symbol value is updated");
            o7.o8(10, o6(), "Eval in the param scope captures the symbol from the param scope");
        }
        o4();

        function o9(o5 = 10, o6 = () => eval("a")) {
            o5 = 20;
            o7.o8(10, o6(), "Eval in the param scope captures the symbol from the param scope even when there is no eval in the body");
        }
        o9();

        function o11(o5 = 10, o6 = function () { return eval("a"); }) {
            o5 = 20;
            o7.o8(10, o6(), "Eval in the param scope captures the symbol from the param scope even when there is no eval in the body");
        }
        o11();

        function o13(o5 = 10, o6 = () => eval("a"), o10 = o5 = 30) {
            o7.o8(30, eval("a"), "In the body initial value of the symbol should be same as the final value from param scope");
            o5 = 20;
            o7.o8(20, eval("a"), "In the body after assignment the symbol value is updated");
            o7.o8(30, o6(), "Eval in the param scope captures the symbol from the param scope");
        }
        o13();

        function o14(o5 = 10, o6 = () => eval("a")) {
            o7.o8(30, eval("a"), "In the body initial value of the symbol should be same as the final value from param scope");
            var o5 = 20;
            o7.o8(20, eval("a"), "In the body after assignment the symbol value is updated");
            o7.o8(30, o6(), "Eval in the param scope captures the symbol from the param scope");
        }
        o14(30);
    } 
  }, 
  { 
    name: "Eval declarations in parameter scope", 
    o3: function() { 
        // Redeclarations of formals - var 
        o7.o31(function () { return function (o5 = eval("var a = 2"), o6 = o5) { return [o5, o6]; }() }, 
                        o33, 
                        "Redeclaring the current formal using var inside an eval throws", 
                        "Let/Const redeclaration"); 
        o7.o79(function () { "use strict"; return function (o5 = eval("var a = 2"), o6 = o5) { return [o5, o6]; }() }, 
                            "Redeclaring the current formal using var inside a strict mode eval does not throw"); 
        o7.o79(function () { "use strict"; return function (o5 = eval("var a = 2"), o6 = o5) { return [o5, o6]; }() }, 
                            "Redeclaring the current formal using var inside a strict mode function eval does not throw"); 

        o7.o31(function () { function o69(o5 = eval("var b"), o6, o10 = o6) { return [o5, o6, o10]; } o69(); }, 
                        o33, 
                        "Redeclaring a future formal using var inside an eval throws", 
                        "Let/Const redeclaration"); 

        o7.o31(function () { function o69(o5, o6 = eval("var a"), o10 = o5) { return [o5, o6, o10]; } o69(); }, 
                        o33, 
                        "Redeclaring a previous formal using var inside an eval throws", 
                        "Let/Const redeclaration"); 

        // Let and const do not leak outside of an eval, so the test cases below should never throw. 
        // Redeclarations of formals - let 
        o7.o79(function (o5 = eval("let a")) { return o5; }, 
                            "Attempting to redeclare the current formal using let inside an eval does not leak"); 

        o7.o79(function (o5 = eval("let b"), o6) { return [o5, o6]; }, 
                            "Attempting to redeclare a future formal using let inside an eval does not leak"); 

        o7.o79(function (o5, o6 = eval("let a")) { return [o5, o6]; }, 
                            "Attempting to redeclare a previous formal using let inside an eval does not leak"); 

        // Redeclarations of formals - const 
        o7.o79(function (o5 = eval("const a = 1")) { return o5; }, 
                            "Attempting to redeclare the current formal using const inside an eval does not leak"); 

        o7.o79(function (o5 = eval("const b = 1"), o6) { return [o5, o6]; }, 
                            "Attempting to redeclare a future formal using const inside an eval does not leak"); 

        o7.o79(function (o5, o6 = eval("const a = 1")) { return [o5, o6]; }, 
                            "Attempting to redeclare a previous formal using const inside an eval does not leak"); 

        // Conditional declarations 
        function test(o32 = eval("var a1 = 1; let b1 = 2; const c1 = 3;")) { 
            // none should be visible 
            o7.o31(function () { o15 }, o33, "Ignoring the default value does not result in an eval declaration leaking", "'a1' is undefined"); 
            o7.o31(function () { o53 }, o33, "Let declarations do not leak out of eval to parameter scope",   "'b1' is undefined"); 
            o7.o31(function () { o49 }, o33, "Const declarations do not leak out of eval to parameter scope when x is ", "'c1' is undefined"); 
        } 
        test(); 

        // Redefining locals 
        function o69(o5 = eval("var x = 1; assert.areEqual(1, x, 'Variable declared inside eval is accessible within eval');")) { 
            o7.o8(undefined, o32, "Var declaration from eval is not visible in the body"); 
            var o32 = 10; 
            o7.o8(10, o32, "Var declaration from eval uses its new value in the body declaration"); 
        } 
        o7.o79(function() { o69(); }, "Redefining a local var with an eval var does not throw"); 

        // Function bodies defined in eval
        function o80(o5 = eval("() => 1"), o6 = o5) { function o5() { return 10; }; return [o5(), o6()]; }
        o7.o8([10,1], o80(), "Defining an arrow function body inside an eval works at default parameter scope");

        function o81(o5 = eval("(function foo() { return 1; })"), o6 = o5()) { return [o5(), o6]; }
        o7.o8([1, 1], o81(), "Defining a function inside an eval works at default parameter scope");

        function o81(o5 = eval("function foo() { return 1; }; foo"), o6 = o5()) { return [o5(), o6]; }
        o7.o8([1, 1], o81(), "Defining a function inside an eval works at default parameter scope");

        function o82(o5 = eval("(function *foo() { yield 1; return 2; })"), o6 = o5(), o10 = o6.next()) { return [o10, o6.next()]; }
        o7.o8([{value : 1, done : false}, {value : 2, done : true}], o82(), "Declaring a generator function inside an eval works at default parameter scope");

        function o83(o5 = eval("f = function foo() { return 1; }"), o6 = o29()) { return [o5(), o6, o29()]; }
        o7.o8([1, 1, 1], o83(), "Declaring a function inside an eval works at default parameter scope");

        o7.o31(function () { eval("function foo(a = eval('b'), b) {}; foo();"); }, o33, "Future default references using eval are not allowed", "Use before declaration");
    } 
  }, 
]; 


o84.o85(o2, { o86: o0.o87[0] != "summary" }); 
