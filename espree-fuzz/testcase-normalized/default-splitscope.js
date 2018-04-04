//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  { 
    name: "Split parameter scope in function definition", 
    o4: function () { 
        function o5(o6 = 10, o7 = function () { return o6; }) { 
            o8.o9(10, o6, "Initial value of parameter in the body scope should be the same as the one in param scope"); 
            var o6 = 20; 
            o8.o9(20, o6, "New assignment in the body scope updates the variable's value in body scope"); 
            return o7; 
        } 
        o8.o9(10, o5()(), "Function defined in the param scope captures the formals from the param scope not body scope"); 

        function o10(o6 = 10, o7 = function () { return o6; }, o11 = o7() + o6) { 
            o8.o9(10, o6, "Initial value of parameter in the body scope should be the same as the one in param scope"); 
            o8.o9(20, o11, "Initial value of the third parameter in the body scope should be twice the value of the first parameter"); 
            var o6 = 20; 
            o8.o9(20, o6, "New assignment in the body scope updates the variable's value in body scope"); 
            return o7; 
        } 
        o8.o9(10, o10()(), "Function defined in the param scope captures the formals from the param scope not body scope"); 

        function o12(o6 = 10, o7 = function () { return o6; }) { 
            o8.o9(1, o6, "Initial value of parameter in the body scope should be the same as the one passed in"); 
            var o6 = 20; 
            o8.o9(20, o6, "Assignment in the body scope updates the variable's value in body scope"); 
            return o7; 
        } 
        o8.o9(o12(1)(), 1, "Function defined in the param scope captures the formals from the param scope even when the default expression is not applied for that param"); 

        (function (o6 = 10, o7 = o6 += 10, o11 = function () { return o6 + o7; }) { 
            o8.o9(20, o6, "Initial value of parameter in the body scope should be same as the corresponding symbol's final value in the param scope"); 
            var o13 = 40; 
            (function () { o8.o9(40, o13, "Symbols defined in the body scope should be unaffected by the duplicate formal symbols"); })(); 
            o8.o9(40, o11(), "Function defined in param scope uses the formals from param scope even when executed inside the body"); 
        })(); 

        (function (o6 = 10, o7 = function () { o8.o9(10, o6, "Function defined in the param scope captures the formals from the param scope when executed from the param scope"); }, o11 = o7()) { 
        })(); 

        function o14(o6 = 10, o7 = function () { return o6; }) { 
            o6 = 20; 
            return o7; 
        } 
        o8.o9(10, o14()(), "Even if the formals are not redeclared in the function body the symbol in the param scope and body scope are different"); 

        function o15(o6 = 10, o7 = function () { return function () { return o6; }; }) { 
            var o6 = 20; 
            return o7; 
        } 
        o8.o9(10, o15()()(), "Parameter scope works fine with nested functions"); 

        var o16 = 10; 
        function o17(o6, o7 = function () { o6; return o16; }) { 
            o8.o9(undefined, o16, "Inside the function body the assignment hasn't happened yet"); 
            var o16 = 20; 
            o8.o9(20, o16, "Assignment to the symbol inside the function changes the value"); 
            return o7; 
        } 
        o8.o9(10, o17()(), "Function in the param scope correctly binds to the outer variable"); 
         
        function o19(o6 = 10, o7 = { o20 () { return o6; } }) { 
            o6 = 20; 
            return o7; 
        } 
        o8.o9(10, o19().o20(), "Function definition inside the object literal should capture the formal from the param scope");
        
        var o21 = function (o6, o7 = ((function() { o8.o9('string1', o6, "First arguemnt receives the right value"); })(), 1), o11) {
            var o22 = 'string3';
            (function () { o8.o9('string3', o22, "Var declaration in the body is initialized properly"); })();
            return o11;
        };

        o8.o9('string2', o21('string1', undefined, 'string2'), "Function returns the third argument properly");
        
        function o23() {
            var o24 = function (o6 = function () { o11; }, o7, o11) {
                o8.o9(1, o11, "Third argument is properly populated");
                arguments;
                function o26() {};
            };
            o24(undefined, undefined, 1);
        }
        o23();
        o23();
        
        function o27() {
            var o28 = ((o6 = (o29 = o6 => o6 * o6) => o29) => o6)()()(10); 
            
            o8.o9(100, o28, "The inner lambda function properly maps to the right symbol for a");
        };
        o27();
    } 
 }, 
 { 
    name: "Split parameter scope and function expressions with name", 
    o4: function () { 
        function o5(o6 = 10, o7 = function o11() { return o6; }) { 
            o8.o9(10, o6, "Initial value of parameter in the body scope of the method should be the same as the one in param scope"); 
            var o6 = 20; 
            o8.o9(20, o6, "New assignment in the body scope of the method updates the variable's value in body scope"); 
            return o7; 
        } 
        o8.o9(10, o5()(), "Function expression defined in the param scope captures the formals from the param scope not body scope"); 
         
        function o10(o6 = 10, o7 = function o11(o30 = true) { return o30 ? o11(false) : o6; }) { 
            return o7; 
        } 
        o8.o9(10, o10()(), "Recursive function expression defined in the param scope captures the formals from the param scope not body scope");
        
        o8.o9(10, o10()(), "Recursive function expression defined in the param scope captures the formals from the param scope not body scope");

        var o12 = function o14 (o6 = function ( ) { o7; return o14(20); }, o7) {
            if (o6 == 20) {
                return 10;
            }
            return o6;
        }
        o8.o9(10, o12()(), "Recursive call to the function from the param scope returns the right value");

        var o15 = function o17 (o6 = function ( ) { o7; return o17; }, o7) {
            if (o6 == 20) {
                return 10;
            }
            return o6;
        }
        o8.o9(10, o15()()(20), "Recursive call to the function from the param scope returns the right value");
        
        var o19 = function o21 (o6 = function ( ) { o7; }, o7) {
            if (o6 == 20) {
                return 10;
            }
            var o6 = function () { return o21(20); };
            return o6;
        }
        o8.o9(10, o19()(), "Recursive call to the function from the body scope returns the right value");
        
        var o23 = function o24 (o6 = function ( ) { o7; return o24(20); }, o7) {
            eval("");
            if (o6 == 20) {
                return 10;
            }
            return o6;
        }
        o8.o9(10, o23()(), "Recursive call to the function from the param scope returns the right value when eval is there in the body");
        
        var o26 = function o27 (o6 = function ( ) { o7; }, o7) {
            eval("");
            if (o6 == 20) {
                return 10;
            }
            var o6 = function () { return o27(20); };
            return o6;
        }
        o8.o9(10, o26()(), "Recursive call to the function from the body scope returns the right value when eval is there in the body");
    } 
 }, 
 { 
    name: "Split parameter scope in member functions", 
    o4: function () { 
       var o32 = { 
           o33(o6 = 10, o7 = function () { return o6; }) { 
               o8.o9(10, o6, "Initial value of parameter in the body scope of the method should be the same as the one in param scope"); 
               var o6 = 20; 
               o8.o9(20, o6, "New assignment in the body scope of the method updates the variable's value in body scope"); 
                return o7; 
            } 
        } 
        o8.o9(o32.o33()(), 10, "Function defined in the param scope of the object method captures the formals from the param scope not body scope"); 
         
        var o34 = { 
            o5(o6 = 10, o7 = function () { return { o10 () { return o6; } } }) { 
                var o6 = 20; 
                o11 = function () { return { o10 () { return o6; } } }; 
                return [o7, o11]; 
            } 
        } 
        var o28 = o34.o5(); 
        o8.o9(10, o28[0]().o10(), "Short hand method defined in the param scope of the object method captures the formals from the param scope not body scope"); 
        o8.o9(20, o28[1]().o10(), "Short hand method defined in the param scope of the object method captures the formals from the param scope not body scope"); 
    } 
  },
  { 
    name: "Arrow functions in split param scope", 
    o4: function () { 
        function o5(o6 = 10, o7 = () => { return o6; }) { 
            o8.o9(10, o6, "Initial value of parameter in the body scope should be the same as the one in param scope"); 
            var o6 = 20; 
            o8.o9(20, o6, "New assignment in the body scope updates the variable's value in body scope"); 
            return o7; 
        } 
        o8.o9(10, o5()(), "Arrow functions defined in the param scope captures the formals from the param scope not body scope"); 

        function o10(o6 = 10, o7 = () => { return o6; }) { 
            o8.o9(1, o6, "Initial value of parameter in the body scope should be the same as the one in param scope"); 
            var o6 = 20; 
            o8.o9(20, o6, "New assignment in the body scope updates the variable's value in body scope"); 
            return o7; 
        } 
        o8.o9(1, o10(1)(), "Arrow functions defined in the param scope captures the formals from the param scope not body scope even when value is passed"); 

        function o12(o6 = 10, o7 = () => o6) { 
            o8.o9(10, o6, "Initial value of parameter in the body scope should be the same as the one in param scope"); 
            var o6 = 20; 
            o8.o9(20, o6, "New assignment in the body scope updates the variable's value in body scope"); 
            return o7; 
        } 
        o8.o9(10, o12()(), "Arrow functions with concise body defined in the param scope captures the formals from the param scope not body scope"); 

        ((o6 = 10, o7 = o6 += 10, o11 = () => { o8.o9(20, o6, "Value of the first formal inside the lambda should be same as the default value"); return o6 + o7; }, o22 = o11() * 10) => { 
            o8.o9(o22, 400, "Initial value of the formal parameter inside the body should be the same as final value from the param scope"); 
        })(); 

        function o14(o6 = 10, o7 = () => { return () => o6; }) { 
            o6 = 20; 
            return o7; 
        } 
        o8.o9(10, o14()()(), "Nested lambda should capture the formal param value from the param scope"); 

        o8.o35(function o14(o6 = () => o36) { var o36 = 1; o6(); }, o37, "Lambdas in param scope shouldn't be able to access the variables from body", "'x' is undefined"); 
        o8.o35(function o15() { (function (o6 = () => o36) { var o36 = 1; return o6; })()(); }, o37, "Lambdas in param scope shouldn't be able to access the variables from body", "'x' is undefined"); 
        o8.o35((o6 = () => 10, o7 = o6() + o11, o11 = 10) => {}, o37, "Formals defined to the right shouldn't be usable in lambdas", "Use before declaration"); 
    } 
  },
  { 
    name: "Split parameter scope with Rest", 
    o4: function () { 
        var o38 = [2, 3, 4]; 
        function o5(o6 = 10, o7 = function () { return o6; }, ...o11) { 
            o8.o9(o38.length, o11.length, "Rest parameter should contain the same number of elements as the spread arg"); 
            for (o40 = 0; o40 < o38.length; o40++) { 
                o8.o9(o38[o40], o11[o40], "Elements in the rest and the spread should be in the same order"); 
            } 
            return o7; 
        } 
        o8.o9(o5(undefined, undefined, ...o38)(), 10, "Presence of rest parameter shouldn't affect the binding"); 

        ((o6 = 10, o7 = () => o6, ...o11) => { 
            o8.o9(o38.length, o11.length, "Rest parameter should contain the same number of elements as the spread arg"); 
            for (o40 = 0; o40 < o38.length; o40++) { 
                o8.o9(o38[o40], o11[o40], "Elements in the rest and the spread should be in the same order"); 
            } 
            return o7; 
        })(undefined, undefined, ...o38); 
    } 
  },
  { 
    name: "Split parameter scope with this", 
    o4: function () { 
        function o5(o6 = this.o36, o7 = function() { o8.o9(100, this.o36, "this object for the function in param scope is passed from the final call site"); return o6; }) { 
            o8.o9(10, this.o36, "this objects property retains the value from param scope"); 
            o6 = 20; 
            return o7; 
        } 
        o8.o9(10, o5.call({o36 : 10}).call({o36 : 100}), "Arrow functions defined in the param scope captures the formals from the param scope not body scope"); 
         
        (function (o6 = this.o36, o7 = function() {this.o36 = 20; return o6;}) { 
            o8.o9(10, this.o36, "this objects property retains the value in param scope before the inner function call"); 
            o7.call(this); 
            o8.o9(20, this.o36, "Update to a this's property from the param scope is reflected in the body scope"); 
        }).call({o36 : 10}); 
         
        this.o36 = 10; 
        ((o6 = this.o36, o7 = function() { o6; this.o36 = 20; }) => { 
            o8.o9(10, this.o36, "this objects property retains the value in param scope before the inner function call in lambda"); 
            o7.call(this); 
            o8.o9(20, this.o36, "Update to a this's property from the param scope of lambda function is reflected in the body scope"); 
        })(); 
         
        function o10(o6 = function() { return this.o36; }, o7 = this.o42, o11 = o6.call({o36 : 20}) + o7) { 
            o8.o9(undefined, this.o36, "this object remains unaffected"); 
            return o11; 
        } 
        o8.o9(30, o10.call({o42 : 10}), "Properties are accessed from the right this object"); 

        var o43 = {o36 : 1, o42 : 20 };
        function o12(o6, o7 = () => { o6; this.o36 = 10; return this.o42; }) {
            o8.o9(1, this.o36, "Assignment from the param scope has not happened yet");
            o8.o9(20, this.o42, "y property of the this object is not affected");
            return o7; 
        } 
        o8.o9(20, o12.call(o43)(), "Lambda defined in the param scope returns the right property value from thisObj"); 
        o8.o9(10, o43.o36, "Assignment from the param scope method updates thisObj's property"); 

        function o14(o6, o7 = () => { o6; return this; }) {
            return o7;
        }
        o8.o9(o43, o14.call(o43)(), "Lambda defined in the param scope returns the right this object"); 
        
        var o43 = { o36 : 1 };
        function o15() {
            return (o6 = this, o7 = function() { return o6; }) => o7;
        }
        o8.o9(o43, o15.call(o43)()(), "This object is returned properly from the inner lambda method's child function");

        function o17(o6, o7 = function () { return o6; }) {
            return (o6 = this, o7 = function() { return o6; }) => o7;
        }
        o8.o9(o43, o17.call(o43)()(), "This object is returned properly from the inner lambda defnied inside a split scoped function");

        function o19(o6, o7 = function () { return o6; }) {
            function o21() {
                return (o6 = this, o7 = function() { return o6; }) => o7;
            }
            return o21.call(this);
        }
        o8.o9(o43, o19.call(o43)()(), "This object is returned properly from the inner lambda defnied inside a nested split scoped function");

        function o23(o6, o7 = function () { return o6; }) {
            function o24(o11, o22 = function () { o11; }) {
                return (o6 = this, o7 = function() { return o6; }) => o7;
            }
            return o24.call(this);
        }
        o8.o9(o43, o23.call(o43)()(), "This object is returned properly from the inner lambda defnied inside a double nested split scoped function");
        
        function o26(o6 = this.o36 * 10, o7 = () => { o6; return this; }) {
            o8.o9(10, o6, "this should be accessible in the parameter scope");
            o8.o9(o43, this, "Body scope should get the right value for this object");
            o8.o44(eval("thisObj == this"), "Eval should be able to access the this object properly");
            return o7;
        }
        o8.o9(o43, o26.call(o43)(), "Lambda defined in the param scope returns the right this object"); 

        function o27(o6 = this.o36 * 10, o7 = () => { o6; return this; }) {
            var o11 = 100;
            o8.o9(10, o6, "this should be accessible in the parameter scope");
            o8.o9(o43, this, "Body scope should get the right value for this object");
            o8.o44(eval("thisObj == this"), "Eval should be able to access the this object properly");
            o8.o9(o43, (() => this)(), "Lambda should capture the this object from body properly");
            o8.o9(100, o11, "Body variable should be unaffected by the slot allocation of this object");
            return o7;
        }
        o8.o9(o43, o27.call(o43)(), "Lambda defined in the param scope returns the right this object");

        function o45(o6 = 10, o7 = () => { o6; return this; }) {
            var o11 = 100;
            o8.o9(o43, this, "Body scope should get the right value for this object");
            var o22 = () => this;
            this.o36 = 5;
            o8.o44(eval("this.x == 5"), "Eval should be able to access the this object properly after the field is updated");
            o8.o44(eval("d().x == 5"), "Lambda should capture the this symbol from the body properly");
            o8.o44(eval("a == 10"), "Eval should be able to access the first parameter properly");
            o8.o44(eval("b().x == 5"), "Lambda from the param scope should capture the this symbol properly");
            o8.o44(eval("d().x == 5"), "Lambda should capture the this symbol from the body properly");
            return o7;
        }
        o8.o9(5, o45.call(o43)().o36, "Lambda defined in the param scope returns the same this object as the one in body"); 
    } 
  },
  { 
    name: "Split parameter scope and class", 
    o4: function () { 
        class o11 { 
            o33(o6 = 10, o22, o7 = function () { return o6; }, o11) { 
                o8.o9(10, o6, "Initial value of parameter in the body scope in class method should be the same as the one in param scope"); 
                var o6 = 20; 
                o8.o9(20, o6, "Assignment in the class method body updates the value of the variable"); 
                return o7; 
            } 
        } 
        o8.o9(10, (new o11()).o33()(), "Method defined in the param scope of the class should capture the formal from the param scope itself"); 

        function o5(o6 = 10, o22, o7 = class { o46() { return o6; } }, o11) { 
            var o6 = 20; 
            o8.o9(10, (new o7()).o46(), "Class method defined within the param scope should capture the formal from the param scope"); 
            return o7; 
        } 
        var o28 = o5(); 
        o8.o9(10, (new o28()).o46(), "Methods defined in a class defined in param scope should capture the formals form that param scope itself"); 

        class o47 { 
            o5(o6 = 10, o22, o7 = function () { o6 = this.o10(); return o6; }, o11) { 
                o8.o9(30, this.o10(), "this object in the body points to the right this object"); 
                return o7; 
            }; 
            o10() { 
                return 30; 
            } 
        } 
        var o48 = new o47(); 
        o8.o9(100, o48.o5().call({o10() { return 100; }}), "Method defined in the param uses its own this object while updating the formal"); 

        function o10(o6 = 10, o22, o7 = class { o46() { return class { o49() { return o6; }} } }, o11) { 
            o6 = 20; 
            return o7; 
        } 
        var o50 = o10(); 
        var o51 = (new o50()).o46(); 
        o8.o9(10, (new o51()).o49(), "Nested class definition in the param scope should capture the formals from the param scope"); 

        var o52 = [2, 3, 4]; 
        class o53 { 
            o33(o6 = 10, o7 = () => { return o11; }, ...o11) { 
                o8.o9(o52.length, o11.length, "Rest param and the actual array should have the same length"); 
                for (var o40 = 0; o40 < o11.length; o40++) { 
                    o8.o9(o52[o40], o11[o40], "Rest parameter should have the same value as the actual array"); 
                } 
                o11 = []; 
                return o7; 
            } 
        } 
        o28 = (new o53()).o33(undefined, undefined, ...[2, 3, 4])(); 
        o8.o9(o52.length, o28.length, "The result and the actual array should have the same length"); 
        for (var o40 = 0; o40 < o28.length; o40++) { 
            o8.o9(o52[o40], o28[o40], "The result array should have the same value as the actual array"); 
        } 

        class o54 { 
            o33({o36:o36 = 10, o42:o42 = () => { return o36; }}) { 
                o8.o9(10, o36, "Initial value of destructure parameter in the body scope in class method should be the same as the one in param scope"); 
                o36 = 20; 
                o8.o9(20, o36, "Assignment in the class method body updates the value of the variable"); 
                return o42; 
            } 
        } 
        o8.o9(10, (new o54()).o33({})(), "The method defined as the default destructured value of the parameter should capture the formal from the param scope");
        
        function o12(o6 = 10, o22, o7 = (function () { return o6; }, class { o46() { return o6; } }), o11) { 
            var o6 = 20; 
            o8.o9(10, (new o7()).o46(), "Class method defined within the param scope should capture the formal from the param scope"); 
            return o7; 
        } 
        o28 = o12(); 
        o8.o9(10, (new o28()).o46(), "Methods defined in a class defined, after another function definition, in the param scope should capture the formals form that param scope itself"); 
        
        function o14(o6 = 10, o22, o7 = (function () { return o6; }, class {}, class { o46() { return o6; } }), o11) { 
            var o6 = 20; 
            return o7; 
        } 
        o28 = o14(); 
        o8.o9(10, (new o28()).o46(), "Methods defined in a class defined, after another class definition, in the param scope should capture the formals form that param scope itself");
         
        function o15(o6 = 10, o22, o7 = (function () { return o6; }, class {}, function () {}, class { o46() { return o6; } }), o11) { 
            var o6 = 20; 
            return o7; 
        } 
        o28 = o15(); 
        o8.o9(10, (new o28()).o46(), "Methods defined in a class defined, after a function and class, in the param scope should capture the formals form that param scope itself");
        
        function o17(o6 = 10, o22, o7 = (function () { return o6; }, class {}, function (o6, o7 = () => o6) {}, class { o46() { return o6; } }), o11) { 
            var o6 = 20; 
            return o7; 
        } 
        o28 = o17(); 
        o8.o9(10, (new o28()).o46(), "Methods defined in a class defined, after a split scope function, in the param scope should capture the formals form that param scope itself");
        
        function o19(o6 = 10, o22, o7 = (function () { return o6; }, class o55 { o46() { return o6; } }), o11) { 
            var o6 = 20; 
            o8.o9(10, (new o7()).o46(), "Class method defined within the param scope should capture the formal from the param scope"); 
            return o7; 
        } 
        o28 = o19(); 
        o8.o9(10, (new o28()).o46(), "Methods defined in a class with name defined, after another function definition, in the param scope should capture the formals form that param scope itself");
        
        function o21(o6 = 10, o22, o7 = class o55 { o46() { return o6; } }, o11 = (function () { return o6; }, class o47 extends o7 { o49() { return o6 * o6; } })) { 
            var o6 = 20; 
            o8.o9(10, (new o7()).o46(), "Class method defined within the param scope should capture the formal from the param scope"); 
            return o11; 
        } 
        o28 = o21(); 
        o8.o9(10, (new o28()).o46(), "Methods defined in a class extending another class defined, after another function definition, in the param scope should capture the formals form that param scope itself");
        o8.o9(100, (new o28()).o49(), "Method in the derived class returns the right value");
    } 
  },
  { 
    name: "Split parameter scope in generator methods", 
    o4: function () { 
        function *o5(o6 = 10, o22, o7 = function () { return o6; }, o11) { 
            yield o6; 
            var o6 = 20; 
            yield o6; 
            yield o7; 
        } 
        var o56 = o5(); 
        o8.o9(10, o56.next().value, "Initial value of the parameter in the body scope should be the same as the final value of the parameter in param scope"); 
        o8.o9(20, o56.next().value, "Assignment in the body scope updates the variable's value"); 
        o8.o9(10, o56.next().value(), "Function defined in the param scope captures the formal from the param scope itself"); 

        function *o10(o6 = 10, o22, o7 = function () { return o6; }, o11) { 
            yield o6; 
            o6 = 20; 
            yield o6; 
            yield o7; 
        } 
        var o48 = o10(); 
        o8.o9(10, o48.next().value, "Initial value of the parameter in the body scope should be the same as the final value of the parameter in param scope"); 
        o8.o9(20, o48.next().value, "Assignment in the body scope updates the variable's value"); 
        o8.o9(10, o48.next().value(), "Function defined in the param scope captures the formal from the param scope itself even if it is not redeclared in the body"); 

        function *o12(o6 = 10, o22, o7 = function *() { yield o6 + o11; }, o11 = 100) { 
            o6 = 20; 
            yield o6; 
            yield o7; 
        } 
        var o59 = o12(); 
        o8.o9(20, o59.next().value, "Assignment in the body scope updates the variable's value"); 
        o8.o9(110, o59.next().value().next().value, "Function defined in the param scope captures the formals from the param scope"); 

        function *o14(o6 = 10, o22, o7 = function *() { yield o6; }, o11) { 
            var o6 = 20; 
            yield function *() { yield o6; }; 
            yield o7; 
        } 
        var o60 = o14(); 
        o8.o9(20, o60.next().value().next().value, "Generator defined inside the body captures the symbol from the body scope"); 
        o8.o9(10, o60.next().value().next().value, "Function defined in the param scope captures the formal from param scope even if it is captured in the body scope"); 
    } 
  },
  { 
    name: "Split parameter scope with destructuring", 
    o4: function () { 
        function o5( {o6:o16, o7:o61}, o11 = function() { return o16 + o61; } ) { 
            o8.o9(10, o16, "Initial value of the first destructuring parameter in the body scope should be the same as the one in param scope"); 
            o8.o9(20, o61, "Initial value of the second destructuring parameter in the body scope should be the same as the one in param scope"); 
            o16 = 1; 
            o61 = 2; 
            o8.o9(1, o16, "New assignment in the body scope updates the first formal's value in body scope"); 
            o8.o9(2, o61, "New assignment in the body scope updates the second formal's value in body scope"); 
            o8.o9(30, o11(), "The param scope method should return the sum of the destructured formals from the param scope"); 
            return o11; 
        } 
        o8.o9(30, o5({ o6 : 10, o7 : 20 })(), "Returned method should return the sum of the destructured formals from the param scope"); 

        function o10({o36:o36 = 10, o42:o42 = function () { return o36; }}) { 
            o8.o9(10, o36, "Initial value of the first destructuring parameter in the body scope should be the same as the one in param scope"); 
            o36 = 20; 
            o8.o9(20, o36, "Assignment in the body updates the formal's value"); 
            return o42; 
        } 
        o8.o9(10, o10({ })(), "Returned method should return the value of the destructured formal from the param scope"); 
         
        function o12({o42:o42 = function () { return o36; }, o36:o36 = 10}) { 
            o8.o9(10, o36, "Initial value of the first destructuring parameter in the body scope should be the same as the one in param scope"); 
            o36 = 20; 
            o8.o9(20, o36, "Assignment in the body updates the formal's value"); 
            return o42; 
        } 
        o8.o9(10, o12({ })(), "Returned method should return the value of the destructured formal from the param scope even if declared after"); 
         
        (({o36:o36 = 10, o42:o42 = function () { return o36; }}) => { 
            o8.o9(10, o36, "Initial value of the first destructuring parameter in the body scope should be the same as the one in param scope"); 
            o36 = 20; 
            o8.o9(10, o42(), "Assignment in the body does not affect the formal captured from the param scope"); 
        })({}); 
    } 
  },
  { 
    name: "Nested split scopes", 
    o4: function () { 
          function o5(o6 = 10, o7 = function () { return o6; }, o11) { 
              function o20(o22 = 100, o62 = 200, o63 = function () { return o22 + o62; }) { 
                  o22 = 1000; 
                  o62 = 2000; 
                  o64 = function () { return o22 + o62; }; 
                  return [o63, o64]; 
              } 
              return [o7].concat(o20()); 
          } 
          var o28 = o5(); 
          o8.o9(10, o28[0](), "Function defined in the param scope of the outer function should capture the symbols from its own param scope"); 
          o8.o9(300, o28[1](), "Function defined in the param scope of the inner function should capture the symbols from its own param scope"); 
          o8.o9(3000, o28[2](), "Function defined in the body scope of the inner function should capture the symbols from its body scope"); 

          function o10(o6 = 10, o7 = function () { return o6; }, o11) { 
              o6 = 1000; 
              o11 = 2000; 
              function o20(o6 = 100, o7 = function () { return o6 + o11; }, o11 = 200) { 
                  o6 = 1000; 
                  o11 = 2000; 
                  return o7; 
              } 
              return [o7, o20()]; 
          } 
          o28 = o10(); 
          o8.o9(10, o28[0](), "Function defined in the param scope of the outer function should capture the symbols from its own param scope even if formals are with the same name in inner function"); 
          o8.o9(300, o28[1](), "Function defined in the param scope of the inner function should capture the symbols from its own param scope  if formals are with the same name in the outer function"); 

          function o12(o6 = 10, o7 = function () { return o6; }, o11) { 
              o6 = 1000; 
              o11 = 2000; 
              function o20(o6 = 100, o7 = function () { return o6 + o11; }, o11 = 200) { 
                  o6 = 1000; 
                  o11 = 2000; 
                  return o7; 
              } 
              return [o7, o20]; 
          } 
          o8.o9(300, o12()[1]()(), "Function defined in the param scope of the inner function should capture the right formals even if the inner function is executed outside"); 

          function o14(o6 = 10, o7 = function () { return o6; }, o11) { 
              o6 = 1000; 
              function o20(o6 = 100, o7 = function () { return o6 + o11; }, o11 = 200) { 
                  o6 = 1000; 
                  o11 = 2000; 
                  return o7; 
              } 
              return [o7, o20(undefined, o7, o11)]; 
          } 
          o28 = o14(1, undefined, 3); 
          o8.o9(1, o28[0](), "Function defined in the param scope of the outer function correctly captures the passed in value for the formal"); 
          o8.o9(1, o28[1](), "Function defined in the param scope of the inner function is replaced by the function definition from the param scope of the outer function"); 

          function o15(o6 = 10, o7 = function () { return o6; }, o11) { 
              function o20(o6 = 100, o7 = function () { return o6 + o11; }, o11 = 200) { 
                  o6 = 1000; 
                  o11 = 2000; 
                  return o7; 
              } 
              return [o7, o20(o6, undefined, o11)]; 
          } 
          o28 = o15(1, undefined, 3); 
          o8.o9(1, o28[0](), "Function defined in the param scope of the outer function correctly captures the passed in value for the formal"); 
          o8.o9(4, o28[1](), "Function defined in the param scope of the inner function captures the passed values for the formals"); 

          function o17(o6 , o7, o11) { 
              function o20(o6 = 1, o7 = function () { return o6 + o11; }, o11 = 2) { 
                  o6 = 10; 
                  o11 = 20; 
                  return o7; 
              } 
              return o20; 
          } 
          o8.o9(3, o17()()(), "Function defined in the param scope captures the formals when defined inside another method without split scope"); 

          function o19(o6 = 10 , o7 = 20, o11 = function () { return o6 + o7; }) { 
              return (function () { 
                  function o20(o6 = 100, o7 = function () { return o6 + o11; }, o11 = 200) { 
                      o6 = 1000; 
                      o11 = 2000; 
                      return o7; 
                  } 
                  return [o11, o20]; 
              })(); 
          } 
          o28 = o19(); 
          o8.o9(30, o28[0](), "Function defined in the param scope of the outer function should capture the symbols from its own param scope even in nested case"); 
          o8.o9(300, o28[1]()(), "Function defined in the param scope of the inner function should capture the symbols from its own param scope even when nested inside a normal method and a split scope"); 

          function o21(o6 = 1, o7 = function (o22 = 10, o62 = function () { return o6 + o22; }) { o8.o9(o22, 10, "Split scope function defined in param scope should capture the right formal value"); o22 = 20; return o62; }, o11) { 
              o6 = 2; 
              return o7; 
          } 
          o8.o9(11, o21()()(), "Split scope function defined within the param scope should capture the formals from the corresponding param scopes"); 

          function o23(o6 = 1, o7 = function () { return function (o22 = 10, o62 = function () { return o6 + o22; }) { o22 = 20; return o62; } }, o11) { 
              o6 = 2; 
              return o7; 
          } 
          o8.o9(11, o23()()()(), "Split scope function defined within the param scope should capture the formals from the corresponding param scope in nested scope"); 
    }   
  }, 
  {
    name: "Split scope with symbol shadowing",
    o4: function () {
          function o5(o6 = 10, o7 = function () { return o6; }) {
              o8.o9(100, o6(), "Function definition inside the body is hoisted");
              function o6 () {
                  return 100;
              }
              return o7;
        }
        o8.o9(10, o5()(), "Function definition in the param scope captures the symbol from the param scope");

        function o10(o6 = 10, o7 = function () { return o6; }, o11 = o7) {
            o6 = 20;
            o8.o9(20, o7(), "Function definition in the body scope captures the body symbol");
            function o7() {
                return o6;
            }
            return [o11, o7];
        }
        var o28 = o10();
        o8.o9(10, o28[0](), "Function definition in the param scope captures the param scope symbol");
        o8.o9(20, o28[1](), "Function definition in the body captures the body symbol");
        
        var o66 = 1;
        function o12(o6 = 10, o7 = function () { o6; return o66;}) {
            o8.o9(10, o66(), "Function definition inside the body is unaffected by the outer variable");
            function o66() {
                return 10;
            }
            return o7;
        }
        o8.o9(1, o12()(), "Function definition in the param scope captures the outer scoped var");
        
        function o14(o6 = o67, o7 = function o66() {
            o6;
            return function o68() {
                o8.o9(10, o67, "x1 is captured from the outer scope");
            };
        }) {
            var o67 = 100;
            o7()();
        };
        var o67 = 10;
        o14();
        
        var o69 = 1;
        function o15(o6 = o69, o7 = function() { o6; return o69; }) {
            {
                function o69() {
                }
            }
            var o69 = 2;
            return o7;
        }
        o8.o9(1, o15()(), "Symbol capture at the param scope is unaffected by the inner definitions");
        
        var o70 = 1;
        function o17(o6 = o70, o7 = function(o71) { o6; return o70; }) {
            var o70 = 2;
            return o7;
        }
        o8.o9(1, o17()(), "Symbol capture at the param scope is unaffected by other references in the body and param");
    }
  },
  {
    name : "Split scope and arguments symbol",
    o4 : function () {
        o8.o35(function () { eval("function f(a = arguments, b = () => a) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list with split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f1() { function f2(a = arguments, b = () => a) { } }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list with split scope inside another function", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f(a = arguments, b = () => a, c = eval('')) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list with eval", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f(a = arguments = [1, 2], b = () => a) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list with split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f(a = 10, b = () => a, c = arguments) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list with split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f(a = 10, b = () => a, c = a = arguments) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list with split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f(a, b = () => { a; arguments}) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list when captured in lambda method", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f(a = 10, b = (c = arguments) => a) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list when captured in a lambda in split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f(a, b = () => a, c = () => { return arguments; }) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list in split scope when captured by a lambda method", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f(a = 10, b = () => a, c = () => () => arguments) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list in split scope when captured by nested lambda", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f3(a, arguments = function () { return a; } ) { }"); }, o72, "Use of arguments as a parameter name is not allowed in non-simple parameter list in split scope when captured by nested lambda", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f3({a, arguments = function () { return a; }}) { }"); }, o72, "Use of arguments as a parameter name is not allowed in destructuring parameter list in split scope when captured by nested lambda", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f3({a = arguments}, b = function () { return a; } ) { }"); }, o72, "Use of arguments is not allowed in destructuring parameter list in split scope when captured by nested lambda", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        
        function o5(o6, o7 = () => o6) {
            eval("");
            o7 = () => { return arguments; };
            o8.o9(1, arguments[0], "Arguments object receives the first parameter properly");
            o8.o9(1, o7()[0], "First argument receives the right value passed in");
            o8.o9(undefined, o7()[1], "Second argument receives the right value passed in");
            o8.o9(2, arguments.length, "Arguments should have only two elements in it");
        }
        o5(1, undefined);
        
        function o10(o6, o7 = () => { return o6; }) {
            o6 = 10;
            o8.o9(1, arguments[0], "First argument is properly received");
            o8.o9(2, arguments[2], "Third argument is properly received");
            o8.o9(3, arguments.length, "Only three arguments are passed in");
            (() => { arguments = [3, 4]; o6; })();
            o8.o9(3, arguments[0], "Arguments symbol is updated with the new value when the lambda is executed");
            o8.o9(4, arguments[1], "New array is properly assigned to arguments symbol");
            o8.o9(2, arguments.length, "New array has only elements");
            
            return o7;
        }
        o8.o9(1, o10(1, undefined, 2)(), "Param scope method properly captures the first parameter");
        
        function o12(o6, o7 = () => { return o6; }) {
            eval("");
            o6 = 10;
            o8.o9(1, arguments[0], "First argument is properly received");
            o8.o9(2, arguments[2], "Third argument is properly received");
            o8.o9(3, arguments.length, "Only three arguments are passed in");
            (() => { arguments = [3, 4]; o6; })();
            o8.o9(3, arguments[0], "Arguments symbol is updated with the new value when the lambda is executed");
            o8.o9(4, arguments[1], "New array is properly assigned to arguments symbol");
            o8.o9(2, arguments.length, "New array has only elements");
            
            return o7;
        }
        o8.o9(1, o12(1, undefined, 2)(), "Param scope method properly captures the first parameter, with eval in the body");
        
        function o14(o6, o7 = function () { o6; } ) {
            var o11 = 10;
            o8.o9(1, arguments[0], "Arguments symbol properly receives the passed in values");
            eval("");
        }
        o14(1);
        
        function o15(o6, o7 = function () { o6; } ) {
            var o11 = 10;
            o8.o9(1, arguments[0], "Arguments symbol properly receives the passed in values");
            arguments = 100;
            o8.o9(100, arguments, "Arguments is updated after the assignment");
            eval("");
        }
        o15(1);
        
        function o17(o6, o7 = function () { o6; } ) {
            o8.o9(1, arguments[0], "Arguments symbol properly receives the passed in values");
            arguments = 100;
            o8.o9(100, arguments, "Arguments is updated after the assignment");
        }
        o17(1);
        
        function o19(o6, o7 = function () { o6; } ) {
            o8.o9(5, arguments(), "Function definition is hoisted");
            function arguments() { return 5; }
        }
        o19(1);
        
        function o21(o6, o7 = function () { o6; } ) {
            o8.o9(5, arguments(), "Function definition is hoisted");
            function arguments() { return 5; }
            eval("");
        }
        o21(1);
        
        function o23(o6, o7 = function () { o6; } ) {
            o8.o9(1, eval("a"), "Eval should be able to access the first argument properly");
            o8.o9(1, eval("arguments[0]"), "Eval should be able to access the first argument properly from arguments object");
            o8.o9(1, arguments[0], "Arguments symbol properly receives the passed in values");
            arguments = 100;
            o8.o9(100, arguments, "Arguments is updated after the assignment");
            o8.o9(100, eval("arguments"), "Updated value of arguments is visible in eval");
            o8.o9(1, eval("a"), "First argument remains unchanged after the arguments are updated");
        }
        o23(1);
        
        function o24(o6, o7 = function () { o6; } ) {
            o8.o9(1, arguments[0], "Arguments symbol properly receives the passed in values");
            var arguments = 100;
            o8.o9(100, arguments, "Arguments is updated after the assignment");
        }
        o24(1);
        
        function o26(o6, o7 = function () { o6; } ) {
            o8.o9(1, arguments[0], "Arguments symbol properly receives the passed in values");
            var arguments = 100;
            o8.o9(100, arguments, "Arguments is updated after the assignment");
            eval("");
        }
        o26(1);
        
        function o27(o6, o7 = function () { o6; } ) {
            o8.o9(1, arguments[0], "Arguments symbol properly receives the passed in values");
            o7 = () => arguments;
            o8.o9(1, o7()[0], "Lambda captures the right arguments symbol");
            var arguments = 100;
            o8.o9(100, arguments, "Arguments is updated after the assignment");
            o8.o9(100, o7(), "Lambda now gives the updated value");
            eval("");
        }
        o27(1);
        
        function o45(o6, o7 = () => { return o6; }) {
            o6 = 10;
            o8.o9(1, arguments[0], "First argument is properly received");
            o8.o9(2, arguments[2], "Third argument is properly received");
            o8.o9(3, arguments.length, "Only three arguments are passed in");
            ((o11 = arguments = [3, 4]) => { o6; })();
            o8.o9(3, arguments[0], "Arguments symbol is updated with the new value when the lambda is executed");
            o8.o9(4, arguments[1], "New array is properly assigned to arguments symbol");
            o8.o9(2, arguments.length, "New array has only elements");
            
            return o7;
        }
        o8.o9(1, o45(1, undefined, 2)(), "Param scope method properly captures the first parameter");
        
        function o73(o6, o7 = () => { return o6; }) {
            eval("");
            o6 = 10;
            o8.o9(1, arguments[0], "First argument is properly received");
            o8.o9(2, arguments[2], "Third argument is properly received");
            o8.o9(3, arguments.length, "Only three arguments are passed in");
            ((o11 = arguments = [3, 4]) => { o6; })();
            o8.o9(3, arguments[0], "Arguments symbol is updated with the new value when the lambda is executed");
            o8.o9(4, arguments[1], "New array is properly assigned to arguments symbol");
            o8.o9(2, arguments.length, "New array has only elements");
            
            return o7;
        }
        o8.o9(1, o73(1, undefined, 2)(), "Param scope method properly captures the first parameter, with eval in the body");
        
        function o74(o6, o7 = function () { o6; }, ...o11) {
            o8.o9(1, arguments[0], "Checking first argument");
            o8.o9(undefined, arguments[1], "Checking second argument");
            o8.o9(2, arguments[2], "Checking third argument");
            o8.o9(3, arguments[3], "Checking fourth argument");
            o8.o9([2, 3], o11, "Rest argument should get the trailing parameters properly");
            var arguments = 100;
            o8.o9(100, arguments, "Arguments is updated after the assignment");
            o8.o9([2, 3], o11, "Rest should remain unaffected when arguments is updated");
            eval("");
        }
        o74(1, undefined, 2, 3);
        
        var o75 = function o76(o6, o7 = function () { o6; }, ...o11) {
            if (o6 === 1) {
                o8.o9(1, arguments[0], "Checking first argument");
                o8.o9(undefined, arguments[1], "Checking second argument");
                o8.o9(2, arguments[2], "Checking third argument");
                o8.o9(3, arguments[3], "Checking fourth argument");
                o8.o9([2, 3], o11, "Rest argument should get the trailing parameters properly");
                return o76(undefined, undefined, ...o11);
            } else {
                o8.o9(undefined, arguments[0], "Checking first argument on the recursive call");
                o8.o9(undefined, arguments[1], "Checking second argument on the recursive call");
                o8.o9(2, arguments[2], "Checking third argument on the recursive call");
                o8.o9(3, arguments[3], "Checking fourth argument on the recursive call");
                o8.o9([2, 3], o11, "Rest argument should get the trailing parameters properly");
                var arguments = 100;
                o8.o9(100, arguments, "Arguments is updated after the assignment");
                o8.o9([2, 3], o11, "Rest should remain unaffected when arguments is updated");
                return eval("c");
            }
        }
        o8.o9([2, 3], o75(1, undefined, 2, 3), "Rest should remain unaffected when arguments is updated");
    }  
  },
  {
    name: "Split scope and super call",
    o4: function () {
        class o55 {
            constructor() {
                return { o36 : 1 };
            }
        };

        class o47 extends o55 {
            constructor(o6 = 1, o7 = () => { o8.o9(1, super().o36, "Super is accessible in the param scope"); return o6; }) {
                var o11 = 10;
                o6 = 20;
                (() => o8.o9(10, o11, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o8.o9(1, o7(), "Function defined in the param scope should capture the formal");
                return {};
            }
        }
        new o47();

        class o53 extends o55 {
            constructor(o6 = 1, o7 = () => { return o6; }) {
                (() => o8.o9(1, super().o36, "Lambda should be able to access the super method properly in the body"))();
                o6 = 10;
                o8.o9(1, o7(), "Function defined in the param scope should capture the formal");
            }
        }
        new o53();

        class o54 extends o55 {
            constructor(o6 = 1, o7 = () => { return o6; }) {
                var o11 = 10;
                (() => o8.o9(10, o11, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o8.o9(1, o7(), "Function defined in the param scope should capture the formal");
                o8.o9(1, eval("super().x"), "Eval should be able to access the super property properly");
            }
        }
        new o54();

        class o78 extends o55 {
            constructor(o6 = super().o36, o7 = () => { return o6; }) {
                o8.o9(1, o6, "First formal calls the super from the param scope");
                var o11 = 10;
                (() => o8.o9(10, o11, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o8.o9(1, o7(), "Function defined in the param scope should capture the formal");
            }
        }
        new o78();
    }
  },
  {
    name: "Split scope and super property",
    o4: function () {
        class o55 {
            o79 () {
                return 1;
            }
        };

        class o47 extends o55 {
            o79(o6 = 1, o7 = () => { o8.o9(1, super.o79(), "Super property access works fine from a lambda defined in the param scope"); return o6; }) {
                o6 = 20;
                var o11 = 10;
                (() => o8.o9(10, o11, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o8.o9(1, o7(), "Function defined in the param scope should capture the formal");
            }
        }
        (new o47()).o79();

        class o53 extends o55 {
            o79(o6 = 1, o7 = () => { return o6; }) {
                var o11 = 10;
                o6 = 20;
                (() => o8.o9(1, super.o79(), "Super property access works fine from a lambda defined in the body scope"))();
                o8.o9(1, o7(), "Function defined in the param scope should capture the formal");
            }
        }
        (new o53()).o79();

        class o54 extends o55 {
            o79(o6 = 1, o7 = () => { return o6; }) {
                var o11 = 10;
                o6 = 20;
                (() => o8.o9(10, o11, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o8.o9(1, o7(), "Function defined in the param scope should capture the formal");
                o8.o9(1, eval("super.foo()"), "Eval should be able to access the super property properly from the body scope");
            }
        }
        (new o54()).o79();

        class o78 extends o55 {
            o79(o6 = super.o79(), o7 = () => { return o6; }) {
                o8.o9(1, o6, "First formal uses the super property from the param scope");
                var o11 = 10;
                (() => o8.o9(10, o11, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o6 = 20;
                o8.o9(1, o7(), "Function defined in the param scope should capture the formal");
            }
        }
        (new o78()).o79();
    }
  },
  {
    name: "Split scope and new.target",
    o4: function () {
        class o55 {
            constructor(o80) {
                o8.o44(o80 == new.target, "Base class should receive the right value for new.target"); 
            }
        };

        class o47 extends o55 {
            constructor(o6 = 1, o7 = () => { o8.o44(new.target == o47, "new.target should have the derived class value in the param scope"); return o6; }) {
                super(o47);
                var o11 = 10;
                o6 = 20;
                (() => o8.o9(10, o11, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o8.o9(1, o7(), "Function defined in the param scope should capture the formal");
            }
        }
        new o47();

        class o53 extends o55 {
            constructor(o6 = 1, o7 = () => { return o6; }) {
                super(o53);
                var o11 = 10;
                (() => o8.o44(new.target == o53, "new.target should be the derived class in the body scope when captured by lambda"))();
                o8.o44(new.target == o53, "new.target should be the derived class in the body scope");
            }
        }
        new o53();

        class o54 extends o55 {
            constructor(o6 = 1, o7 = () => { return o6; }) {
                super(o54);
                o8.o44(eval("new.target == c4"), "new.target should be the derived class inside eval");
                o8.o44(new.target == o54, "new.target should be the derived class in the body scope");
            }
        }
        new o54();

        class o78 extends o55 {
            constructor(o6 = new.target, o7 = () => { return o6; }) {
                super(o78);
                o8.o44(o6 == o78, "new.target accessed from the param scope should work fine");
            }
        }
        new o78();
    }
  },
  { 
    name: "Split parameter scope and eval", 
    o4: function () { 
        function o66() { 
            return 3 * 3; 
        } 

        function o5(o68 = () => eval("g()")) {
            o8.o9(6, o66(), "Right method is called in the body scope");
            function o66() { 
                return 2 * 3; 
            }
            return o68();
        }
        o8.o9(9, o5(), "Paramater scope remains split");

        function o10(o68 = () => eval("g()")) {
            o8.o9(6, eval("g()"), "Right method is called in the body scope");
            function o66() { 
                return 2 * 3; 
            }
            return o68();
        }
        o8.o9(9, o10(), "Paramater scope remains split");
    }
  },
  {  
    name: "Split parameter scope with eval in body",  
    o4: function () {  
        function o5(o6 = 10, o7 = function () { return o6; }) {   
            o8.o9(10, o6, "Initial value of parameter in the body scope should be the same as the one in param scope");  
            o8.o9(10, eval('a'), "Initial value of parameter in the body scope in eval should be the same as the one in param scope");  
            var o6 = 20;   
            o8.o9(20, o6, "New assignment in the body scope updates the variable's value in body scope");  
            o8.o9(20, eval('a'), "New assignment in the body scope updates the variable's value when evaluated through eval in body scope");  
            return o7;   
        }   
        o8.o9(10, o5()(), "Function defined in the param scope captures the formals from the param scope not body scope with eval");  
          
        function o10(o6 = 10, o7 = function () { return o6; }) {   
            o8.o9(10, eval('b()'), "Eval of the function from param scope should return the right value for the formal");  
            var o6 = 20;   
            o8.o9(10, eval('b()'), "Eval of the function from param scope should return the right value for the formal even after assignment to the corresponding body symbol");  
            return o7;   
        }   
        o8.o9(10, o10()(), "Function defined in the param scope captures the formals from the param scope not body scope with eval");  
          
        function o12(o6 = 10, o7 = function () { return o6; }) {   
            o8.o9(100, eval('b()'), "Eval of the function from body scope should return the right value for the formal");  
            var o6 = 20;   
            function o7 () { return o6 * o6; }  
            o8.o9(400, eval('b()'), "Eval of the function from body scope should return the right value after assignment to the corresponding body symbol");  
            return o7;   
        }   
        o8.o9(400, o12()(), "Function defined in the body scope captures the symbol from the body scope with eval");
        
        function o14 (o6, o7, o11 = function () { o7; }, o22 = 1) {
            var o62 = 10;
            o8.o9(2, arguments[0], "Unmapped arguments value has the expected value in the body");
            (function () {
                eval('');
            }());
        };
        o14.call(1, 2);
    }  
  },
  {
    name: "Split scope and with",
    o4: function () {
          function o5(o6, o7, o11 = function () { o6; }) {
            with ({}) {
                var o22 = function () {
                    return 10;
                };
                o8.o9(10, o22(), "With inside a split scope function should work fine");
            }
          }
          o5();
          
          function o10(o6, o7, o11 = function () { o6; }) {
            var o22 = function () {
                return 10;
            };
            with ({}) {
                o8.o9(10, o22(), "With inside a split scope function should be able to access the function definition from the body");
            }
          }
          o10();
          
          function o12(o6, o7 = function () { return 10; }, o11 = function () { o6; }) {
            with ({}) {
                o8.o9(10, o7(), "With inside a split scope function should be able to access the function definition from the param scope");
            }
          }
          o12();

          function o14(o6, o7 = function () { return 10; }, o11 = function () { o6; }) {
            var o22 = {
                o62 : function () { return 10; }
            };
            o62 = function () { return 100; };
            with (o22) {
                o8.o9(10, o62(), "With should use the function definition inside the object not the one from body");
            }
          }
          o14();

          function o15(o6, o7 = { o22 : function () { return 10; } }, o11 = function () { o6; }) {
            var o22 = { };
            with (o7) {
                o8.o9(10, o22(), "With should use the function definition inside the object from the param scope not the one from body");
            }
          }
          o15();
          
          var o83 = 100
          function o17(o6, o7, o11 = function () { o6; }, o62 = function () { with({}) { o8.o9(100, o83, "With inside param scope should be able to access var from outside"); } }, o33 = o62()) {
            var o83 = { };
          }
          o17();

          function o19(o6, o7, o11 = function () { o6; }) {
            with ({}) {
                o8.o9(100, o83, "With inside body scope should be able to access var from outside");
            }
          }
          o19();
          
          function o21() {
            function o23() {
                return 1;
            }
            var o84 = 10;
            function o24(o6 = 10, o7 = function o26() {
                o6;
                o8.o9(10, o84, "Function in the param scope should be able to access the outside variable");
                with ({}) {
                    o8.o9(1, o23(), "With construct inside a param scoped function should be able to execute functions from outside");
                }
            }) {
                o7();
            };
            o24();
          }
          o21();
          o21();
          
          function o27() {
            function o45() {
                return 1;
            }
            var o85 = 100;
            function o73(o6 = 10, o7 = function () {
                o8.o9(10, o6, "Function in the param scope should be able to access the formal from parent");
                return function () {
                    o8.o9(10, o6, "Function nested in the param scope should be able to access the formal from the split scoped function");
                    o8.o9(100, o85, "Function in the param scope should be able to access the outside variable");
                    with ({}) {
                        o8.o9(1, o45(), "With construct inside a param scoped function should be able to execute functions from outside");
                    }
                };
            }) {
                o7()();
            };
            o73();
          }
          o27();
          o27();
    }  
  },
  { 
    name: "Basic eval in parameter scope", 
    o4: function () { 
        o8.o9(1, 
                        function (o6 = eval("1")) { return o6; }(), 
                        "Eval with static constant works in parameter scope"); 

        { 
            let o7 = 2; 
            o8.o9(2, 
                            function (o6 = eval("b")) { return o6; }(), 
                            "Eval with parent var reference works in parameter scope"); 
        } 

        o8.o9(1, 
                        function (o6, o7 = eval("arguments[0]")) { return o7; }(1), 
                        "Eval with arguments reference works in parameter scope"); 

        function o86(o6 = eval("testSelf(1)")) { 
            return o6; 
        } 
        o8.o9(1, o86(1), "Eval with reference to the current function works in parameter scope"); 

        var o87 = function (o6 = eval("testSelfExpr(1)")) { 
            return o6; 
        } 
        o8.o9(1, o87(), "Eval with reference to the current function expression works in parameter scope"); 

        { 
            let o6 = 1, o7 = 2, o11 = 3; 
            function o88(o6 = eval("a"), o7 = eval("b"), o11 = eval("c")) { 
                return [o6, o7, o11]; 
            } 
            o8.o35(function () { o88(); }, 
                        o37, 
                        "Eval with reference to the current formal throws", 
                        "Use before declaration"); 

            function o89(o36 = eval("a"), o42 = eval("b"), o90 = eval("c")) { 
                return [o36, o42, o90]; 
            } 
            o8.o9([1, 2, 3], o89(), "Eval with references works in parameter scope"); 
        }

        function o5(o6 = 10, o7 = () => eval("a")) {
            o8.o9(10, eval("a"), "In the body initial value of the symbol should be same as the final value from param scope");
            o6 = 20;
            o8.o9(20, eval("a"), "In the body after assignment the symbol value is updated");
            o8.o9(10, o7(), "Eval in the param scope captures the symbol from the param scope");
        }
        o5();

        function o10(o6 = 10, o7 = () => eval("a")) {
            o6 = 20;
            o8.o9(10, o7(), "Eval in the param scope captures the symbol from the param scope even when there is no eval in the body");
        }
        o10();

        function o12(o6 = 10, o7 = function () { return eval("a"); }) {
            o6 = 20;
            o8.o9(10, o7(), "Eval in the param scope captures the symbol from the param scope even when there is no eval in the body");
        }
        o12();

        function o14(o6 = 10, o7 = () => eval("a"), o11 = o6 = 30) {
            o8.o9(30, eval("a"), "In the body initial value of the symbol should be same as the final value from param scope");
            o6 = 20;
            o8.o9(20, eval("a"), "In the body after assignment the symbol value is updated");
            o8.o9(30, o7(), "Eval in the param scope captures the symbol from the param scope");
        }
        o14();

        function o15(o6 = 10, o7 = () => eval("a")) {
            o8.o9(30, eval("a"), "In the body initial value of the symbol should be same as the final value from param scope");
            var o6 = 20;
            o8.o9(20, eval("a"), "In the body after assignment the symbol value is updated");
            o8.o9(30, o7(), "Eval in the param scope captures the symbol from the param scope");
        }
        o15(30);
    } 
  }, 
  { 
    name: "Eval declarations in parameter scope", 
    o4: function() { 
        // Redeclarations of formals - var 
        o8.o35(function () { return function (o6 = eval("var a = 2"), o7 = o6) { return [o6, o7]; }() }, 
                        o37, 
                        "Redeclaring the current formal using var inside an eval throws", 
                        "Let/Const redeclaration"); 
        o8.o91(function () { "use strict"; return function (o6 = eval("var a = 2"), o7 = o6) { return [o6, o7]; }() }, 
                            "Redeclaring the current formal using var inside a strict mode eval does not throw"); 
        o8.o91(function () { "use strict"; return function (o6 = eval("var a = 2"), o7 = o6) { return [o6, o7]; }() }, 
                            "Redeclaring the current formal using var inside a strict mode function eval does not throw"); 

        o8.o35(function () { function o79(o6 = eval("var b"), o7, o11 = o7) { return [o6, o7, o11]; } o79(); }, 
                        o37, 
                        "Redeclaring a future formal using var inside an eval throws", 
                        "Let/Const redeclaration"); 

        o8.o35(function () { function o79(o6, o7 = eval("var a"), o11 = o6) { return [o6, o7, o11]; } o79(); }, 
                        o37, 
                        "Redeclaring a previous formal using var inside an eval throws", 
                        "Let/Const redeclaration"); 

        // Let and const do not leak outside of an eval, so the test cases below should never throw. 
        // Redeclarations of formals - let 
        o8.o91(function (o6 = eval("let a")) { return o6; }, 
                            "Attempting to redeclare the current formal using let inside an eval does not leak"); 

        o8.o91(function (o6 = eval("let b"), o7) { return [o6, o7]; }, 
                            "Attempting to redeclare a future formal using let inside an eval does not leak"); 

        o8.o91(function (o6, o7 = eval("let a")) { return [o6, o7]; }, 
                            "Attempting to redeclare a previous formal using let inside an eval does not leak"); 

        // Redeclarations of formals - const 
        o8.o91(function (o6 = eval("const a = 1")) { return o6; }, 
                            "Attempting to redeclare the current formal using const inside an eval does not leak"); 

        o8.o91(function (o6 = eval("const b = 1"), o7) { return [o6, o7]; }, 
                            "Attempting to redeclare a future formal using const inside an eval does not leak"); 

        o8.o91(function (o6, o7 = eval("const a = 1")) { return [o6, o7]; }, 
                            "Attempting to redeclare a previous formal using const inside an eval does not leak"); 

        // Conditional declarations 
        function test(o36 = eval("var a1 = 1; let b1 = 2; const c1 = 3;")) { 
            // none should be visible 
            o8.o35(function () { o16 }, o37, "Ignoring the default value does not result in an eval declaration leaking", "'a1' is undefined"); 
            o8.o35(function () { o61 }, o37, "Let declarations do not leak out of eval to parameter scope",   "'b1' is undefined"); 
            o8.o35(function () { o55 }, o37, "Const declarations do not leak out of eval to parameter scope when x is ", "'c1' is undefined"); 
        } 
        test(); 

        // Redefining locals 
        function o79(o6 = eval("var x = 1; assert.areEqual(1, x, 'Variable declared inside eval is accessible within eval');")) { 
            o8.o9(undefined, o36, "Var declaration from eval is not visible in the body"); 
            var o36 = 10; 
            o8.o9(10, o36, "Var declaration from eval uses its new value in the body declaration"); 
        } 
        o8.o91(function() { o79(); }, "Redefining a local var with an eval var does not throw"); 

        // Function bodies defined in eval
        function o93(o6 = eval("() => 1"), o7 = o6) { function o6() { return 10; }; return [o6(), o7()]; }
        o8.o9([10,1], o93(), "Defining an arrow function body inside an eval works at default parameter scope");

        function o94(o6 = eval("(function foo() { return 1; })"), o7 = o6()) { return [o6(), o7]; }
        o8.o9([1, 1], o94(), "Defining a function inside an eval works at default parameter scope");

        function o94(o6 = eval("function foo() { return 1; }; foo"), o7 = o6()) { return [o6(), o7]; }
        o8.o9([1, 1], o94(), "Defining a function inside an eval works at default parameter scope");

        function o95(o6 = eval("(function *foo() { yield 1; return 2; })"), o7 = o6(), o11 = o7.next()) { return [o11, o7.next()]; }
        o8.o9([{value : 1, done : false}, {value : 2, done : true}], o95(), "Declaring a generator function inside an eval works at default parameter scope");

        function o97(o6 = eval("f = function foo() { return 1; }"), o7 = o33()) { return [o6(), o7, o33()]; }
        o8.o9([1, 1, 1], o97(), "Declaring a function inside an eval works at default parameter scope");

        o8.o35(function () { eval("function foo(a = eval('b'), b) {}; foo();"); }, o37, "Future default references using eval are not allowed", "Use before declaration");
    } 
  }, 
]; 


o98.o99(o2, { o100: o0.o101[0] != "summary" }); 
