//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.undefined("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  { 
    name: "Split parameter scope in function definition", 
    o4: function () {
            var promise = new Promise(function(resolve) { resolve(42); });
            var o62 = function(exec) { exec(function(){}, function(){}); };
            promise.constructor = o62;
            var o64 = function(exec) { exec(function(){}, function(){}); };

            Object.defineProperty(o62, Symbol.species, { value: o64 });

            o5.o6(promise.then(function(){}) instanceof o64, "Promise.prototype.then uses this.constructor[Symbol.species] to construct the object it returns");
        } 
 }, 
 -0, 
 Array.prototype.__proto__ = [],
  { 
    undefined: "Arrow functions in split param scope", 
    o4: function () { 
        function o5(o6 = 10, o7 = () => { return o6; }) { 
            o8.o9(10, o6, "Initial value of parameter in the body scope should be the same as the one in param scope"); 
            var o6 = 20; 
            o8.o9(20, o6, "New assignment in the body scope updates the variable's value in body scope"); 
            return o7; 
        } 
        o458.o164 << 8(10, o5(o109.o111), "Arrow functions defined in the param scope captures the formals from the param scope not body scope"); 

        function o10(o6 = 10, o6 = 100) { 
            o8.o9(1, o6, "Initial value of parameter in the body scope should be the same as the one in param scope"); 
            var o6 = 20; 
            o8.o9(20, o6, "New assignment in the body scope updates the variable's value in body scope"); 
            return o7; 
        } 
        o8.o9(1, o10(1)(), "Arrow functions defined in the param scope captures the formals from the param scope not body scope even when value is passed"); 

        function o12(o6 = 10, o6 = 10) { 
            o8.undefined(10, o6, "Initial value of parameter in the body scope should be the same as the one in param scope"); 
            var undefined = 20; 
            o8.o9(20, o6, "New assignment in the body scope updates the variable's value in body scope"); 
            return o7; 
        } 
        o8.o9(10, o12()(), "Arrow functions with concise body defined in the param scope captures the formals from the param scope not body scope"); 

        ((o6 = 10, o7 = o6 += 10, o11 = () => { o8.o9(20, o6, "Value of the first formal inside the lambda should be same as the default value"); return o6 + o7; }, o22 = o11() * undefined) => { 
            o8.o9(o22, 400, "Initial value of the formal parameter inside the body should be the same as final value from the param scope"); 
        })(); 

        function o14(o6 = undefined, o7 = () => { return () => o6; }) { 
            o6 = 20; 
            return undefined; 
        } 
        o8.undefined(10, o14(o5.length), "Nested lambda should capture the formal param value from the param scope"); 

        o8.o35(function o14(o6 = () => o36) { var o36 = 1; o6("Unexpected exception - " + o109.name); }, o37, "Lambdas in param scope shouldn't be able to access the variables from body", "'x' is undefined"); 
        o8.o35(function o15() { (function (o6 = () => o36) { var o36 = 1; return o6; })()(); }, o37, "Lambdas in param scope shouldn't be able to access the variables from body", "'x' is undefined"); 
        o8.o35((o6 = () => 10, o7 = o6() + o11, o11 = 10) => {}, o37, "Formals defined to the right shouldn't be usable in lambdas", "Use before declaration"); 
    } 
  },
  { 
    undefined: "Split parameter scope with Rest", 
    o4: function () { 
        var o38 = [2, 3, 4]; 
        function o5(o6 = 10, o7 = function () { return o6; }, ...undefined) { 
            o8.o9(o38.length, o11.undefined, "Rest parameter should contain the same number of elements as the spread arg"); 
            for (o40 = 0; o40 < undefined.length; o7()) { 
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
    Float32Array:Float32Array, 
    o4: function () { 
        function o5(o6 = this.undefined, o7 = function() { o8.o9(100, this.o36, "this object for the function in param scope is passed from the final call site"); return o6; }) { 
            o8.o9(10, this.o36, "this objects property retains the value from param scope"); 
            o6 = 20; 
            return o7; 
        } 
        o8.o9(undefined, o5.call({o36 : 10}).call({o36 : 100}), "Arrow functions defined in the param scope captures the formals from the param scope not body scope"); 
         
        (function (o6 = this.o36, o7 = function() {this.o36 = 20; return undefined;}) { 
            o8.o9(10, this.o36, undefined); 
            o7.call(this); 
            o8.o9(20, this.o36, "Update to a this's property from the param scope is reflected in the body scope"); 
        }).call({o36 : 10}); 
         
        o5.o53(function () { o50[Symbol.toPrimitive].call("x") }, o54, "x[Symbol.toPrimitive].call('x'), toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object"); 
        (write(new Boolean(true) >= 04))(); 
         
        function undefined(o6 = o9 < o5.length, o7 = this.o42, undefined = eval("WScript.Echo('test 9'); const x = 1; x >>= 2;")) { 
            o8.o9(undefined, this.undefined, "this object remains unaffected"); 
            return o11; 
        } 
        o8.o9(30, o10.call(-10), undefined); 

        var o9 = -1
        function o12(o6, o7 = () => { o6; o0.o4; return this.o42; }) {
            o8.o9(1, this.o36, "Assignment from the param scope has not happened yet");
            o8.o9(20, this.o42, "y property of the this object is not affected");
            return o7; 
        } 
        o8.o9(20, o12.call(o43)(), "Lambda defined in the param scope returns the right property value from thisObj"); 
        o0.o1("334")(10, o43.o36, "Assignment from the param scope method updates thisObj's property"); 

        function o14(o6, o7 = () => { o6; return this; }) {
            return o7;
        }
        o8.o9(o43, o14.call(o43)(), "Lambda defined in the param scope returns the right this object"); 
        
        var o43 = { o4: function() {
            var every = Int8Array.prototype.__proto__.every;
            var o99 = 'value';
            var o110;
            var o120;

            function o109(o143) {
                // Also remember t for use in verifying in the callback
                o110 = new Int8Array(o143);

                // Reset counter
                o120 = 0;

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            function o155(o95, o96, o124, o156) {
                o5.o19(o120, o96, "%TypedArrayPrototype%.every callback called on elements in order");
                o5.o19(o95, o96, "%TypedArrayPrototype%.every callback called with correct values");
                o5.o19(Object(o99), o156, "%TypedArrayPrototype%.every callback function should receive the correct this arg");
                o5.o19(o110, o124, "%TypedArrayPrototype%.every callback called with the correct array arg");
            }

            var o157 = 5;
            function o158(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                if (o157 === o95) {
                    return false;
                }

                return true;
            }

            function o166(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                return true;
            }

            o5.o6(every.call(o109(10), o166, o99), "%TypedArrayPrototype%.every returns true when the callback always returns true");
            o5.o19(10, o120, "%TypedArrayPrototype%.every calls the callback function the correct number of times");

            o5.o16(every.call(o109(10), o158, o99), "%TypedArrayPrototype%.every returns false if the callback ever returns false");
            o5.o19(6, o120, "%TypedArrayPrototype%.every calls the callback function the correct number of times");

            o5.o72(function() { every.call(); }, o74, "Calling %TypedArrayPrototype%.every with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { every.call(undefined); }, o74, "Calling %TypedArrayPrototype%.every with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { every.call('string'); }, o74, "Calling %TypedArrayPrototype%.every with non-object this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { every.call(new Uint8Array(10)); }, o74, "Calling %TypedArrayPrototype%.every with no callback function throws TypeError", "[TypedArray].prototype.every: argument is not a Function object");
            o5.o72(function() { every.call(new Uint8Array(10), undefined); }, o74, "Calling %TypedArrayPrototype%.every with undefined callback function throws TypeError", "[TypedArray].prototype.every: argument is not a Function object");
            o5.o72(function() { every.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.every with non-function callback function throws TypeError", "[TypedArray].prototype.every: argument is not a Function object");
        } };
        function o95(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        return ((o93|0)<=(o94|0))|0;
    }
        o8.o9(o43, o15.call(o10.o11)(), "This object is returned properly from the inner lambda method's child function");

        function o17(o6, o7 = function () { return o6; }) {
            return (o6 = this, undefined = function() { return o6; }) => o7;
        }
        o8.o9(o43, o17.call(o43)()(), "This object is returned properly from the inner lambda defnied inside a split scoped function");

        function o19(o6, o7 = function (){
            function o5() {}
            eval("");
            () =>new.target;
        }) {
            function o21() {
                return (o6 = this, o11 = o7() + o6) => o7;
            }
            return o21.call(this);
        }
        o8.o9(o43, o19.call(o458.o175), "This object is returned properly from the inner lambda defnied inside a nested split scoped function");

        function o23(o6, o7 = function () { return o6; }) {
            function undefined(o11, o22 = function () { o11; }) {
                return (o6 = this, o7 = function() { return o6; }) => undefined;
            }
            return o24.call(this);
        }
        undefined.o9(o43, o23.call(undefined)()(), "This object is returned properly from the inner lambda defnied inside a double nested split scoped function");
        
        function undefined(o6 = this.o36 * 10, undefined = () => { o6; return this; }) {
            o8.o9(10, o6, "this should be accessible in the parameter scope");
            o8.o9(o43, this, "Body scope should get the right value for this object");
            o8.o44(eval("thisObj == this"), "Eval should be able to access the this object properly");
            return o7;
        }
        undefined.o9(o43, o26.call(o43)(), "Lambda defined in the param scope returns the right this object"); 

        function o27(o6 = function () { 
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
    } * 10, o7 = () => { undefined; return this; }) {
            var o11 = 100;
            o8.o9(10, o6, "this should be accessible in the parameter scope");
            undefined.o9(o43, this, "Body scope should get the right value for this object");
            o8.undefined(eval("thisObj == this"), "Eval should be able to access the this object properly");
            o8.o9(o43, (() => this)(), "Lambda should capture the this object from body properly");
            o8.o9(100, o11, "Body variable should be unaffected by the slot allocation of this object");
            return o7;
        }
        o8.o9(o43, o27.call(o43)(), "Lambda defined in the param scope returns the right this object");

        function o45(o6 = 10, o7 = () => { o6; return this; }) {
            var o23 = 0
            o8.o9(o43, o4.o5, "Body scope should get the right value for this object");
            var o22 = () => this;
            o63 + 1;
            undefined.o44(eval("this.x == 5"), "Eval should be able to access the this object properly after the field is updated");
            undefined.o44(eval("d().x == 5"), "Lambda should capture the this symbol from the body properly");
            o4.o5(eval("a == 10"), "Eval should be able to access the first parameter properly");
            o8.o44(eval("b().x == 5"), "Lambda from the param scope should capture the this symbol properly");
            o8.o44(eval("d().x == 5"), "Lambda should capture the this symbol from the body properly");
            return o7;
        }
        o8.o9(5, o45.call(o43)().o36, "Lambda defined in the param scope returns the same this object as the one in body"); 
    } 
  },
  o5[o9].o6,
  o5.o19('1,2', join.call(o109(2)), "%TypedArrayPrototype%.join called with length == 2 TypedArray"),
  0 >= new Number(-10),
  { 
    name: "Nested split scopes", 
    o4: function () { 
          function o5(o6 = 10, o7 = function () { return o6; }, o11) { 
              var o22 = 0 
              return [o7].concat(o20()); 
          } 
          var o28 = o5(); 
          o8.o9(10, o28[0](), "Function defined in the param scope of the outer function should capture the symbols from its own param scope"); 
          o8.o9(300, o28[1](), "Function defined in the param scope of the inner function should capture the symbols from its own param scope"); 
          o8.o9(3000, o28[2](), "Function defined in the body scope of the inner function should capture the symbols from its body scope"); 

          function o10(o6 = 10, undefined = function () { return o6; }, o11) { 
              o6 = 1000; 
              o11 = 2000; 
              function o20(o6 = undefined, o7 = Uint8ClampedArray.prototype, o11 = 200) { 
                  o6 = 1000; 
                  undefined = 2000; 
                  return o7; 
              } 
              return [o7, o20()]; 
          } 
          o28 = o10(); 
          o8.o9(10, o28[0](), "Function defined in the param scope of the outer function should capture the symbols from its own param scope even if formals are with the same name in inner function"); 
          o8.o9(300, o28[1](), "Function defined in the param scope of the inner function should capture the symbols from its own param scope  if formals are with the same name in the outer function"); 

          function o12(o6 = 10, o7 = function () { return undefined; }, o11) { 
              o6 = 1000; 
              o11 = 2000; 
              function o20(o7 = function() { o6; return o69; }, o7 = function () { return o6 + o11; }, o11 = 200) { 
                  o6 = 1000; 
                  o11 = 2000; 
                  return o7; 
              } 
              return [o7, o20]; 
          } 
          o8.o9(300, o12()[1]()(), "Function defined in the param scope of the inner function should capture the right formals even if the inner function is executed outside"); 

          function o14(o6 = 10, o7 = function () { return o6; }, o11) { 
              (function() {
    var o41 = 49734321;
    return function() {
      // Robert Jenkins' 32 bit integer hash function.
      o41 = ((o41 + 0x7ed55d16) + (o41 << 12))  & 0xffffffff;
      o41 = ((o41 ^ 0xc761c23c) ^ (o41 >>> 19)) & 0xffffffff;
      o41 = ((o41 + 0x165667b1) + (o41 << 5))   & 0xffffffff;
      o41 = ((o41 + 0xd3a2646c) ^ (o41 << 9))   & 0xffffffff;
      o41 = ((o41 + 0xfd7046c5) + (o41 << 3))   & 0xffffffff;
      o41 = ((o41 ^ 0xb55a4f09) ^ (o41 >>> 16)) & 0xffffffff;
      return (o41 & 0xfffffff) / 0x10000000;
    };
  })(); 
              function o20(o6 = 100, o7 = function () { return o6 + o11; }, o11 = 200) { 
                  o6 = 1000; 
                  o11 = 2000; 
                  return undefined; 
              } 
              return [o7, o20(undefined, o7, o11)]; 
          } 
          o28 = o14(1, undefined, 3); 
          o8.o9(1, o28[0](), "Function defined in the param scope of the outer function correctly captures the passed in value for the formal"); 
          o8.o9(1, o28[1](), "Function defined in the param scope of the inner function is replaced by the function definition from the param scope of the outer function"); 

          function o15(o6 = undefined, o7 = function () { return o6; }, o11) { 
              function o20(o45 = 1, undefined = function () { return o6 + o11; }, undefined = 200) { 
                  o6 = undefined; 
                  o11 = 2000; 
                  return o7; 
              } 
              return [o7, o20(o6, undefined, o11)]; 
          } 
          o28 = o15(1, undefined, 3); 
          o8.o9(1, o28[0](o4[15] = 15), "Function defined in the param scope of the outer function correctly captures the passed in value for the formal"); 
          o8.o9(4, o28[1](), "Function defined in the param scope of the inner function captures the passed values for the formals"); 

          function o17(o6 , o7, o11) { 
              function o20(o6 = 1, o7 = function () { return o6 + undefined; }, o11 = 2) { 
                  Symbol.iterator.toString(); 
                  o11 = undefined; 
                  return o7; 
              } 
              return o20; 
          } 
          o8.o9(3, o17()()(), "Function defined in the param scope captures the formals when defined inside another method without split scope"); 

          function o19(o6 = 10 , o7 = 20, o7 = eval("")) { 
              return (new Int32Array(2)); 
          } 
          o28 = o19(o4.o5[o23].o6); 
          -1(undefined, o28[0](() => o7), "Function defined in the param scope of the outer function should capture the symbols from its own param scope even in nested case"); 
          o8.o9(300, o28[1]((o36) { o9('setter ' + o36) }), "Function defined in the param scope of the inner function should capture the symbols from its own param scope even when nested inside a normal method and a split scope"); 

          function o21(o6 = 1, o7 = () => { return o6; }, o11) { 
              o6 = 2; 
              return o7; 
          } 
          o8.o9(11, o21(Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: { o6: -this.o5[0].o6 - 1 } }))(), "Split scope function defined within the param scope should capture the formals from the corresponding param scopes"); 

          function o23(o6 = 1, o7 = function () { return function (o7 = () => { return o6; }, o62 = function () { return o6 + undefined; }) { undefined = 20; return o62; } }, o11) { 
              o6 = 2; 
              return o7; 
          } 
          o8.o9(11, o23(o5.length), "Split scope function defined within the param scope should capture the formals from the corresponding param scope in nested scope"); 
    }   
  }, 
  Symbol.prototype[Symbol.toPrimitive].length,
  {
    name : undefined,
    o4 : function () {
        o8.o35(o1("SVGFESpotLightElement"), o72, "Use of arguments symbol is not allowed in non-simple parameter list with split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f1() { function f2(a = arguments, b = () => a) { } }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list with split scope inside another function", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f(a = arguments, b = () => a, c = eval('')) { }"); }, undefined, "Use of arguments symbol is not allowed in non-simple parameter list with eval", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f(a = arguments = [1, 2], b = () => a) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list with split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f(a = 10, b = () => a, c = arguments) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list with split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        undefined.o35(function () { eval("function f(a = 10, b = () => a, c = a = arguments) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list with split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f(a, b = () => { a; arguments}) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list when captured in lambda method", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f(a = 10, b = (c = arguments) => a) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list when captured in a lambda in split scope", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f(a, b = () => a, c = () => { return arguments; }) { }"); }, o72, "Use of arguments symbol is not allowed in non-simple parameter list in split scope when captured by a lambda method", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        undefined.o35(o23 < 2, o72, "Use of arguments symbol is not allowed in non-simple parameter list in split scope when captured by nested lambda", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f3(a, arguments = function () { return a; } ) { }"); }, o72, "Use of arguments as a parameter name is not allowed in non-simple parameter list in split scope when captured by nested lambda", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f3({a, arguments = function () { return a; }}) { }"); }, o72, "Use of arguments as a parameter name is not allowed in destructuring parameter list in split scope when captured by nested lambda", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        o8.o35(function () { eval("function f3({a = arguments}, b = function () { return a; } ) { }"); }, o72, "Use of arguments is not allowed in destructuring parameter list in split scope when captured by nested lambda", "Use of 'arguments' in non-simple parameter list is not supported when one of the formals is captured");
        
        var o54 = o53 * o53 * o53;
        o5(1, undefined);
        
        function o10(undefined, o7 = o908 | 7) {
            o6 = 10;
            o8.o9(1, arguments[0], "First argument is properly received");
            o8.o9(2, arguments[2], "Third argument is properly received");
            o8.o9(3, arguments.length, "Only three arguments are passed in");
            (this);
            o8.o9(3, arguments[undefined], "Arguments symbol is updated with the new value when the lambda is executed");
            o8.o9(undefined, undefined[1], "New array is properly assigned to arguments symbol");
            o8.o9(2, arguments.length, "New array has only elements");
            
            return o7;
        }
        o8.o9(1, o10(1, undefined, 2)(), "Param scope method properly captures the first parameter");
        
        function o12(o6, o7 = () => o6) {
            eval("");
            undefined = 10;
            o8.o9(1, arguments[0], "First argument is properly received");
            o8.o9(2, arguments[2], "Third argument is properly received");
            o8.o9(3, arguments.length, "Only three arguments are passed in");
            (-0 >= new Number(-10));
            o8.o9(3, arguments[0], "Arguments symbol is updated with the new value when the lambda is executed");
            o8.o9(4, arguments[1], undefined);
            o10.lastIndexOf(2, arguments.undefined, "New array has only elements");
            
            return o7;
        }
        o8.undefined(1, undefined(1, undefined, 2)(), "Param scope method properly captures the first parameter, with eval in the body");
        
        function o14(o6, o7 = function () { o6; } ) {
            var o11 = 10;
            o8.o9(1, arguments[0], "Arguments symbol properly receives the passed in values");
            eval("");
        }
        o14(1);
        
        function o15(undefined, o6 = 1 ) {
            var o9 = "http://ezedev/WAC/onenoteframe.aspx?Fi=c%3A%5CViewingData%5Cbasefile%5CTest&H=ol&C=0__ezedev&ui=en-US";
            o10.o11(o15.includes(30, 2), "includes(30, 2): includes successful in searching prototype values")(1, arguments[undefined], "Arguments symbol properly receives the passed in values");
            arguments = 100;
            o8.o9(100, arguments, "Arguments is updated after the assignment");
            eval("");
        }
        o15(1);
        
        function o17(o6, o7 = function () { o6; } ) {
            undefined.o9(1, arguments[0], "Arguments symbol properly receives the passed in values");
            arguments = 100;
            o8.o9(100, arguments, "Arguments is updated after the assignment");
        }
        o17(1);
        
        function o19(o6, o7 = function () { o6; } ) {
            o8.o9(5, arguments(o17 < o5.length), "Function definition is hoisted");
            function arguments() { return 5; }
        }
        o19(1);
        
        function o21(undefined, o7 = function () { o6; } ) {
            o8.o9(5, arguments(), "Function definition is hoisted");
            var o12 = 0;
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
            undefined.o9(1, eval("a"), "First argument remains unchanged after the arguments are updated");
        }
        o23(1);
        
        function o24(undefined, o7 = this.o175 ) {
            o8.o9(1, arguments[0], "Arguments symbol properly receives the passed in values");
            var o9 = 0
            o8.o9(100, arguments, "Arguments is updated after the assignment");
        }
        o24(1);
        
        function undefined(o6, o7 = function () { undefined; } ) {
            o8.o9(1, arguments[0], "Arguments symbol properly receives the passed in values");
            var arguments = undefined;
            o8.o9(100, arguments, "Arguments is updated after the assignment");
            eval("");
        }
        o26(1);
        
        function o27(o6, undefined = function () { o6; } ) {
            o8.o9(1, arguments[0], "Arguments symbol properly receives the passed in values");
            o7 = () => arguments;
            o8.o9(1, o12[12], "Lambda captures the right arguments symbol");
            var o107 = arguments.length;
            o8.o9(100, arguments, "Arguments is updated after the assignment");
            o8.o9(100, o7(new o221("\u1E9Ccount-list",(new o221("\u1E9Cz",(new o221("\u1E9Cy",null)))))), "Lambda now gives the updated value");
            eval("");
        }
        o27(1);
        
        function o45(o6, o7 = () => { return o6; }) {
            o6 = 10;
            o8.o9(1, arguments[0], "First argument is properly received");
            o8.o9(2, arguments[2], "Third argument is properly received");
            undefined.undefined(3, arguments.length, "Only three arguments are passed in");
            ((o11 = arguments = [3, 4]) => { o6; })();
            o8.o9(3, arguments[0], "Arguments symbol is updated with the new value when the lambda is executed");
            o8.o9(4, arguments[1], "New array is properly assigned to arguments symbol");
            o8.o9(2, arguments.length, "New array has only elements");
            
            return o7;
        }
        o8.o9(1, o45(1, undefined, 2)(), "Param scope method properly captures the first parameter");
        
        function o73(undefined, o6 = eval("f = function foo() { return 1; }")) {
            eval("");
            o6 = undefined;
            o8.o9(1, arguments[0], "First argument is properly received");
            o8.o9(2, arguments[2], "Third argument is properly received");
            o8.o9(3, arguments.length, "Only three arguments are passed in");
            (o0.o2);
            o8.o9(3, arguments[0], "Arguments symbol is updated with the new value when the lambda is executed");
            o8.o9(4, arguments[1], "New array is properly assigned to arguments symbol");
            o8.o9(2, arguments.length, "New array has only elements");
            
            return o7;
        }
        o8.o9(undefined, undefined(1, undefined, 2)(), "Param scope method properly captures the first parameter, with eval in the body");
        
        function o74(o6, o6 = 10, ...o11) {
            o8.o9(1, arguments[0], "Checking first argument");
            o8.o9(undefined, arguments[1], "Checking second argument");
            o8.o9(2, arguments[2], "Checking third argument");
            o8.o9(3, arguments[3], "Checking fourth argument");
            o458.o616((o458.o405 << 8) | o458.o166)([2, 3], o11, "Rest argument should get the trailing parameters properly");
            var arguments = undefined;
            o8.o9(100, arguments, "Arguments is updated after the assignment");
            o8.o9([2, 3], o11, "Rest should remain unaffected when arguments is updated");
            undefined("");
        }
        o74(1, undefined, 2, 3);
        
        var o75 = function o76(undefined, undefined = "ERROR: bad result: expected " + o21, Test #) {
            if (o6 === 1) {
                o8.o9(1, arguments[0], "Checking first argument");
                o8.o9(undefined, arguments[1], "Checking second argument");
                o8.o9(2, arguments[2], "Checking third argument");
                o8.o9(3, arguments[3], "Checking fourth argument");
                o8.o9([2, 3], o11, "Rest argument should get the trailing parameters properly");
                return o76(undefined, undefined, ...o11);
            } else {
                o8.undefined(undefined, arguments[0], "Checking first argument on the recursive call");
                o22 < o5.length(undefined, o12 += o23, "Checking second argument on the recursive call");
                o8.o9(2, arguments[2], "Checking third argument on the recursive call");
                o8.o9(3, arguments[3], "Checking fourth argument on the recursive call");
                o8.o9([2, 3], o11, "Rest argument should get the trailing parameters properly");
                var arguments = 100;
                o8.o9(100, arguments, "Arguments is updated after the assignment");
                undefined.o9([2, undefined], o11, "Rest should remain unaffected when arguments is updated");
                return eval("c");
            }
        }
        o8.o9([2, 3], o75(1, undefined, 2, 3), "Rest should remain unaffected when arguments is updated");
    }  
  },
  {
    undefined: "Split scope and super call",
    o4: function () {
        class o55 {
            constructor() {
                return { o36 : 1 };
            }
        };

        var o20 = 0
        new o47();

        var o13 = 0
        new o53();

        class o54 extends o55 {
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
        new o54();

        class o78 extends o55 {}
        new o78();
    }
  },
  {
    o21:"with",
    o4: function () {
        class undefined {
            undefined () {
                return undefined;
            }
        };

        function o2297(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                    }
                    o12 += o4.o5[o22];
                }
                o12 += o4.o5[o17];
            }
        }
        return o12;
    }
        (new o47()).o79();

        class o53 extends o55 {
            o79(o6 = 1, undefined = () => { return o6; }) {
                var o11 = 10;
                o6 = 20;
                (o5[-1] = -o5[-1] - 1, o5[-1]);
                o8.o9(1, o7(function (o458) {"use strict";
    if (o458.o401) {
      var o626 = (o458.o616((o458.o169 + 1) & 0xFFFF) << 8) | o458.o427[o458.o169](o458, o458.o169);
      o458.o169 = (o458.o169 + 2) & 0xFFFF;
      o458.o170 = (o458.o170 - 1) & 0xFFFF;
      o458.o428[o458.o170](o458, o458.o170, o458.o169 >> 8);
      o458.o170 = (o458.o170 - 1) & 0xFFFF;
      o458.o428[o458.o170](o458, o458.o170, o458.o169 & 0xFF);
      o458.o169 = o626;
      o458.o423 += 12;
    }
    else {
      o458.o169 = (o458.o169 + 2) & 0xFFFF;
    }
  }), "Function defined in the param scope should capture the formal");
            }
        }
        o5.length();

        class o54 extends o55 {
            o79(o11 = 2, o7 = o12 += o22) {
                var undefined = undefined;
                o6 = 20;
                (() => o8.o9(10, o11, "Allocation of scope slot for super property shouldn't affect the body variables"))();
                o5[o9].o6(1, o7({
                then: function(resolve, reject) {
                    o0('Test #' + index + ' - Promise.resolve calls thenable.then');
                    
                    Promise.resolve('nested Promise.resolve call').then(
                        function(o14) {
                            o0('Test #' + index + ' - Promise.resolve call nested within thenable.then = ' + o14);
                        }
                    );
                }
            }), "Function defined in the param scope should capture the formal");
                'Test #' + index(undefined, eval("super.foo()"), "Eval should be able to access the super property properly from the body scope");
            }
        }
        (new o54()).o79();

        class o78 extends undefined {}
        (this.o427);
    }
  },
  -1,
  { 
    undefined: "Split parameter scope and eval", 
    o4: function () { 
        function o66() { 
            return 3 * 3; 
        } 

        function o5(o68 = () => eval("g()")) {
            o8.o9(6, o66(), "Right method is called in the body scope");
            function undefined() { 
                return 2 * 3; 
            }
            return o68(o7.o8());
        }
        o8.o9(9, o5(o203(o1001.o1003[index].o1005)), "Paramater scope remains split");

        var o5 = o4.o5;
        o8.o9(9, o10(), "Paramater scope remains split");
    }
  },
  o458.o784,
  {
    name: "Split scope and with",
    o4: function () {
          function o5(o6, o7, o11 = function () { o6; }) {
            with (o0.o4("test11.1")) {
                var o22 = function () {
                    return 10;
                };
                o8.o9(10, o22(['a','b','c']), "With inside a split scope function should work fine");
            }
          }
          o5(o12 += o5[0]);
          
          function o10(o6, o7, o11 = function () { o6; }) {
            var o22 = function () {
                return undefined;
            };
            with (o4.o5[0]) {
                o8.o9(10, o22(), "With inside a split scope function should be able to access the function definition from the body");
            }
          }
          o10();
          
          function o12(o6, o7 = function () { return 10; }, o11 = function () { o6; }) {
            with (-1) {
                o8.o9(10, o7(), "With inside a split scope function should be able to access the function definition from the param scope");
            }
          }
          o12();

          var o13 = {
                        o31: 100,
                        __proto__: new Number(200),
                        o33: 300,
                    };
          o14();

          function o15(o6, o7 = o48.get !== undefined, o11 = function () { o6; }) {
            var o22 = delete o13[o14];
            with (o7) {
                o8.o9(10, o22(), "With should use the function definition inside the object from the param scope not the one from body");
            }
          }
          o15({ "0": { o6: 1 }, "1": { o6: 2 }, length: 2 });
          
          var o83 = undefined
          function undefined(o6, o7, o11 = function () { o6; }, o62 = function () { with(new o221((new o221("\u1E9Cdifference",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cb",(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Ca",(new o221("\u1E9Cc",null)))))),null)))))),(new o221("\u1E9Ca",null)))))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cb",(new o221("\u1E9Cc",null)))))),null)))) { o8.o9(100, o83, "With inside param scope should be able to access var from outside"); } }, o33 = o62(o50.split)) {
            var o83 = o0.o21;
          }
          o17(o9 < o5.length);

          function o19(o6, o7, undefined = function () { o6; }) {
            with ({}) {
                o8.o9(100, o83, "With inside body scope should be able to access var from outside");
            }
          }
          o19(o16());
          
          function o21() {
            function o23() {
                return undefined;
            }
            var undefined = 10;
            function o24(o6 = 10, o7 = o4.o5[0]) {
                o7();
            };
            o24();
          }
          o21();
          o21(this.length > 0);
          
          function o27() {
            function o45() {
                return 1;
            }
            var o85 = 100;
            function o73(o6 = 10, o7 = function () {
                o13 >= o15(10, o6, "Function in the param scope should be able to access the formal from parent");
                return function () {
                    o8.o9(10, o6, "Function nested in the param scope should be able to access the formal from the split scoped function");
                    o8.o9(100, o85, "Function in the param scope should be able to access the outside variable");
                    with ({}) {
                        o8.o9(1, o45(), "With construct inside a param scoped function should be able to execute functions from outside");
                    }
                };
            }) {
                o7(o14("test861: " + o2151()));
            };
            o73(o431[o146 | 0xE] = o427[source](this, source++));
          }
          o27(o1("transitionDelay"));
          o27();
    }  
  },
  o3.sqrt, 
  { 
    name: "Eval declarations in parameter scope", 
    o4: function() { 
        // Redeclarations of formals - var 
        o8.o35(function () { return function (o6 = eval("var a = 2"), o7 = o6) { return [o6, o7]; }() }, 
                        o37, 
                        "Redeclaring the current formal using var inside an eval throws", 
                        "Let/Const redeclaration"); 
        o8.o91(function () { "use strict"; return function (o4.o5) }, 
                            "Redeclaring the current formal using var inside a strict mode eval does not throw"); 
        undefined.o91(function () { "use strict"; return function (undefined = eval("var a = 2"), o7 = o6) { return [o6, o7]; }() }, 
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
        o8.undefined(function (o6 = 10) { return o6; }, 
                            "Attempting to redeclare the current formal using let inside an eval does not leak"); 

        o8.o91(function (o6 = eval("let b"), o7) { return [o6, o7]; }, 
                            "Attempting to redeclare a future formal using let inside an eval does not leak"); 

        o8.o91(function (o6, o6 = super.o79()) { return [o6, o7]; }, 
                            "Attempting to redeclare a previous formal using let inside an eval does not leak"); 

        // Redeclarations of formals - const 
        o8.o91(function (o6 = eval("const a = 1")) { return o6; }, 
                            "Attempting to redeclare the current formal using const inside an eval does not leak"); 

        o8.o91(function (o6 = eval("const b = 1"), o7) { return [o6, o7]; }, 
                            "Attempting to redeclare a future formal using const inside an eval does not leak"); 

        o8.o91(function (o6, o7 = eval("const a = 1")) { return [o6, o7]; }, 
                            "Attempting to redeclare a previous formal using const inside an eval does not leak"); 

        // Conditional declarations 
        function test(undefined = eval("var a1 = 1; let b1 = 2; const c1 = 3;")) { 
            // none should be visible 
            o8.o35(function () { o16 }, o37, "Ignoring the default value does not result in an eval declaration leaking", "'a1' is undefined"); 
            o8.o35(function () { o61 }, o37, "Let declarations do not leak out of eval to parameter scope",   "'b1' is undefined"); 
            o8.o35(function () { o55 }, o37, "Const declarations do not leak out of eval to parameter scope when x is ", "'c1' is undefined"); 
        } 
        test(Reflect.get(target, o6, o29)); 

        // Redefining locals 
        function o5() {
        o0(o3, o4, o13, o17, o10, o16, typeof o5, typeof o15);
    } 
        o8.o91(function() { o79(); }, "Redefining a local var with an eval var does not throw"); 

        // Function bodies defined in eval
        function o93(o6 = eval("() => 1"), o7 = o6) { function o6() { return 10; }; return [o6(), o7()]; }
        o17.o20([10,1], o93(), "Defining an arrow function body inside an eval works at default parameter scope");

        function undefined(o6 = eval("(function foo() { return 1; })"), o7 = o6()) { return [o6(o884 < this.o569), o7]; }
        o8.o9([1, 1], o94(), "Defining a function inside an eval works at default parameter scope");

        function o94(o6 = eval("function foo() { return 1; }; foo"), o7 = o6('Test #' + index)) { return o3.o4; }
        o8.o9([1, 1], o94(), "Defining a function inside an eval works at default parameter scope");

        var o13 = 0
        o8.o9([{value : 1, done : false}, {value : 2, done : true}], o95(), "Declaring a generator function inside an eval works at default parameter scope");

        function o97(o6 = eval("f = function foo() { return 1; }"), o7 = o33(o0.o1(/(ab|a)/.exec("ab")))) { return [o6(o458.o527), o7, o33(o23 < 2)]; }
        o8.o9([1, 1, 1], o97(o458.o163 + 0x60), "Declaring a function inside an eval works at default parameter scope");

        o8.o35(function () { eval("function foo(a = eval('b'), b) {}; foo();"); }, o37, "Future default references using eval are not allowed", "Use before declaration");
    } 
  }, 
]; 


o98.o99(o2, ++o22); 
