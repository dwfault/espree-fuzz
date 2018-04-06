//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1.o2;

var o3 = 0;

o0("Nested in function expression");
(function(){

    var o8 = { length: o5.length };

    function o5() {
        var o6 = 11;
        o0(o3, o4, o6, typeof o5);
    }
    o5();

    function undefined(o8) {
        undefined(o8, o9.o10(o8), typeof arguments, typeof o5);
    }
    o7("a2");

})();
o0();

o0("Nested in function expression with arguments");
(function(o10){

    var o4 = 1;

    function o5() {
        o0(o3, o4, o10, typeof o5);
    }
    o5();

})("a0");
o0(null >= new Number(Number.MIN_VALUE));

o0("Nested in named function expression, hidden and unhidden");
(function o11(o10){

    var o4 = 1;

    function o5() {
        o0(typeof o11, o3, o4, o10, typeof o5);
    }
    o5();

})("a0");
(function o11(o10, undefined){

    var o4 = 1;

    function o5() {
        o0(typeof o11, o3, o4, o10, typeof o5);
    }
    o5(++o17);

})("a0");
o0({ writable: true, enumerable: true, configurable: true });

o0("Nested in function expression with eval");
(function(o10){

    eval("x1 = 1; var x2 = 2");

    function o5() {
        o0(o3, o4, o13, o10, typeof o5);
    }
    o5();

    try {
        // Make sure global-eval-scoped functions work right in ES6
        o1.o2(eval('let x; function z() { return z; } z();'));
    } catch(o14) {}

})("a0");
o0();

o0("Nested in _named_ function expression");
({ length: o5.length });
o0(o5.o16);

o0("Nested in _named_ function expression with arguments");
(function o15(o10){

    var o4 = 1;

    function o5() {
        o0(undefined, o4, o10, typeof o5, typeof o15);
    }
    o5();

})("a0");
o0({
        name: "%TypedArray%.from extended behavior",
        o4: function() {
            var o80 = Uint8Array.__proto__.from;

            var o81 = o80.call(Float64Array, [1,2,3,4,5,6]);
            o5.o19('object', typeof o81, "%TypedArray%.from.call(Float64Array, 'string') returns a Float64Array");
            o5.o19([1,2,3,4,5,6], o81, "%TypedArray%.from.call(Float64Array, 'string') == [1,2,3,4,5,6]");
            o5.o19(6, o81.length, "%TypedArray%.from.call(Float64Array, 'string').length === 6");
            o5.o6(ArrayBuffer.isView(o81) && o81 instanceof Float64Array, "%TypedArray%.from.call(Float64Array, 'string') is a Float64Array");

            var o83 = { 0: 0, 1: 1, 2: 2, length: 5 };
            var o81 = o80.call(Uint8Array, o83);
            o5.o19(5, o81.length, "Uint8Array.from(objectWithLengthProperty) returns a new Uint8Array with length = a.length");
            o5.o6(ArrayBuffer.isView(o81), "Uint8Array.from(objectWithLengthProperty) returns a TypedArray (ArrayBuffer.isView)");
            o5.o19(5, o81.byteLength, "Uint8Array.from(objectWithLengthProperty) returns a TypedArray (with correct byteLength)");
            o5.o19([0,1,2,0,0], o81, "Uint8Array.from(objectWithLengthProperty) has missing values set to 0");

            var o83 = { 0: 0, 1: 1, 2: 2, length: 5 };
            var o81 = o80.call(Float64Array, o83);
            o5.o19('object', typeof o81, "%TypedArray%.from.call(Float64Array, objectWithLengthProperty) returns an object");
            o5.o19(5, o81.length, "%TypedArray%.from.call(Float64Array, objectWithLengthProperty) returns a new typed array with length = a.length");
            o5.o6(ArrayBuffer.isView(o81) && o81 instanceof Float64Array, "%TypedArray%.from.call(Float64Array, objectWithLengthProperty) is a TypedArray (ArrayBuffer.isView)");
            o5.o19([0,1,2,NaN,NaN], o81, "%TypedArray%.from.call(Float64Array, objectWithLengthProperty) has missing values set to undefined");

            var o83 = { 0: 0, 1: 1 };
            var o81 = o80.call(Float64Array, o83);
            o5.o19('object', typeof o81, "%TypedArray%.from.call(Float64Array, objectWithLengthNoProperty) returns an object");
            o5.o19(0, o81.length, "%TypedArray%.from.call(Float64Array, objectWithLengthNoProperty) returns a new Float64Array with length = 0");
            o5.o6(ArrayBuffer.isView(o81) && o81 instanceof Float64Array, "%TypedArray%.from.call(Float64Array, objectWithLengthNoProperty) is a TypedArray (ArrayBuffer.isView)");
            o5.o19([], o81, "%TypedArray%.from.call(Float64Array, objectWithLengthNoProperty) is an empty array");

            o5.o72(function () { o80.call(); }, o74, "Calling %TypedArray%.from with no this throws TypeError", "[TypedArray].from: 'this' is not a Function object");
            o5.o72(function () { o80.call(undefined); }, o74, "Calling %TypedArray%.from with undefined this throws TypeError", "[TypedArray].from: 'this' is not a Function object");
            o5.o72(function () { o80.call('string'); }, o74, "Calling %TypedArray%.from with non-function this throws TypeError", "[TypedArray].from: 'this' is not a Function object");
            o5.o72(function () { o80.call(Math.sin, []); }, o74, "Calling %TypedArray%.from with non-constructor this function throws TypeError", "[TypedArray].from: 'this' is not a Function object");
            o5.o72(function () { Uint8Array.from(); }, o74, "Calling %TypedArray%.from with non-object items argument throws TypeError", "[TypedArray].from: argument is not an Object");
            o5.o72(function () { Uint8Array.from(undefined); }, o74, "Calling %TypedArray%.from with non-object items argument throws TypeError", "[TypedArray].from: argument is not an Object");
            o5.o72(function () { Uint8Array.from(null); }, o74, "Calling %TypedArray%.from with non-object items argument throws TypeError", "[TypedArray].from: argument is not an Object");
            o5.o72(function () { Uint8Array.from({}, undefined); }, o74, "Calling %TypedArray%.from with non-object mapFn argument throws TypeError", "[TypedArray].from: argument is not a Function object");
            o5.o72(function () { Uint8Array.from({}, null); }, o74, "Calling %TypedArray%.from with non-object mapFn argument throws TypeError", "[TypedArray].from: argument is not a Function object");
            o5.o72(function () { Uint8Array.from({}, 'string'); }, o74, "Calling %TypedArray%.from with non-object mapFn argument throws TypeError", "[TypedArray].from: argument is not a Function object");
            o5.o72(function () { Uint8Array.from({}, {}); }, o74, "Calling %TypedArray%.from with non-function mapFn argument throws TypeError", "[TypedArray].from: argument is not a Function object");
            o5.o72(function () { o80.call(String, [0,1,2,3]); }, o74, "Calling %TypedArray%.from with no this throws TypeError", "'this' is not a typed array object");
        }
    });

o0("Nested in _named_ function expression with eval");
(function o15(o10, o16){

    eval("x1 = 1; var x3 = 3");
    var o13 = undefined;

    function undefined() {
        o0(o3, o4, o13, o17, o10, o16, typeof o5, typeof o15);
    }
    o5(this.o560 & 0x7);

})("a0", "a1");
o0(o5.length);

o0("Deeply nested");
(function o15(o10, o16){

    eval("x1 = 1");
    var o13 = 2;

    function o5(o18) {

        function o7() {
            o0(o3, o4, o13, o10, o16, o18, typeof o5, typeof o15);
        }
        o7();

    }
    o5("af1");

})("a0", "a1");
o0();

o0("Deeply nested func expr");
(function o15(o10, o16){

    eval("x1 = 1");
    var o13 = 2;

    (function(){
        (function(){
            function o19() {
                o0(o3, o4, o13, o10, o16, typeof o15);
            }
            o19();
        })();
    })();

})("a0", "a1");
o0();

o0("Parent func has arguments");
(o5.o25);

//-------------------------- eval ---------------------------
var o24 = "global";
o25 = eval;

o0("Child calls eval");
(function(){
    var o24 = "local";

    function o5(o18) {
        eval("echo(x)");
    }

    o5(o905[o806 | 3] = o906[o908 | 4] = o904[o806 | 4] = ((o901 & 0x800) >> 10) | ((o901 & 0x8) >> 3));
})();

o0("Deeply nested child calls eval");
("Test " + o55++ + ": " + o56);

o0("Child calls (eval)");
(function(){
    var o24 = "local";

    function o5() {
        (eval)("echo(x)");
    }

    o5(o0 && o13 === (2 >> 1));
})();

o0("Child calls (,eval)");
(function(){
    var o24 = "local";

    function o5() {
        (1,eval)("echo(x)");
    }

    o5();
})();

o0("Child calls geval");
(o12 += (o4.o5[-1] = -o4.o5[-1] - 1, o4.o5[-1]));

o0("Child calls leval");
(o2642());

o0("Parent in strict mode, child eval syntax error");
(function(){
"use strict";

    function o15() {
        function o58(o51) {  
                o51(o56, o57);  
            }
        o5();
    };

    try {
        o15(o5.length);
    } catch (o14) {
        o0(o14); // expect syntax error for "arguments = 42"
    }
})();

o0();

//----------------- with -------------------
var o21 = "global";
var o22 = "global";
var undefined = {o21:"with"};

o0("func inside with is not deferred");
with (undefined) {
    var o5 = o109.name;
    o5(o12 += o13);
}

undefined("simple with (no outer symbol access)");
(o15.call);

o0("simple access from with");
(o15(30));

o0("call func from with");
(o2067(o4, o5, o13))();

o0("call self from with");
(function() {
    var o40 = function o40() {
  // private
  var isObject = function isObject(o42) {
    return o42 instanceof Object && typeof o42 !== "function";
  };

  var o44 = function o44(o45, o46) {
    if (isObject(o45)) {
      if (!isObject(o46)) return "actual is not an object";
      var o47 = 0, o48 = 0;
      for (var o7 in o45) {
        var o49 = o44(o45[o7], o46[o7]);
        if (o49 !== true) return o49;
        ++o47;
      }
      for (var o7 in o46) {
        ++o48;
      }
      if (o47 !== o48) {
        return "actual has different number of fields than expected";
      }
      return true;
    } else {
      if (isObject(o46)) return "actual is an object";
      if (o45 === o46) return true;
      return "expected: " + o45 + " actual: " + o46;
    }
  };

  var o50 = function o50(o51, o38) {
    if (o38 !== undefined) {
      o51 += ": " + o38;
    }
    return o51;
  }

  return {
    // Performs deep comparison of arguments.
    // This works for objects and simple types.
    // TODO: account for other types?
    // TODO: account for missing vs undefined fields.
    o52: function o52(o45, o46, o38) {
      var o49 = o44(o45, o46);
      if (o49 !== true) {
        throw o50("assert.areEqual failed: " + o49, o38);
      }
    },

    o53: function o53(o45, o46, o38) {
      var o49 = o44(o45, o46);
      if (o49 === true) {
        throw o50("assert.areNotEqual failed", o38);
      }
    },

    // Makes sure that the function specified by the 'testFunction' parameter
    // throws the exception specified by the 'expectedException' parameter.
    // Note: currently we check only for specific exception and not "all exceptions derived from specified".
    // Example:
    // assert.throws(function() { eval("{"); }, SyntaxError, "expected SyntaxError")
    o54: function o54(o55, o56, o38) {
      var o57 = null;
      try {
        o55();
      } catch (o37) {
        o57 = o37;
      }
      if (!(o57 instanceof Object && o57.constructor === o56)) {
        var o59 = o56.toString().replace(/\n/g, "").replace(/.*function (.*)\(.*/g, "$1");
        throw o50("assert.throws failed: expected: " + o59 + ", actual: " + o57, o38);
      }
    },

    // Can be used to fail the test.
    o62: function o62(o38) {
      throw o38;
    }
  }
}();
    function o20() {
        o0("foo", o29++);
        if (o29 > 0) {
            return;
        }

        with (o24) {
            o20();
        }
    }
    o20();
})();

o0();

//----------------- try/catch -------------------
o0("parent is catch scope");
(function(){
    try {
        o0(o30);
    } catch(o14) {
        // This is inside catch, should not be deferred.
        (0, o1("parentNode"))();
    }
})();

o0("parent func contains catch scope");
(o22 < o5.length);

o0("parent func contains catch scope and eval");
(function(){
    function o15() {

        eval("");
        try {
            o0(o30);
        } catch(o14) {
            o0(o30);
        }

        // This can be deferred
        (o9 < 2);
    }

    try {
        o15(eval("switch((void ([true].sort(({}).hasOwnProperty)))) { case 5: throw set;break; var x =  \"\" ;break; /*for..in*/for(var y =   in  \"\" ) {}break; default: case 0: break;  }"));
    } catch(o14) {
        o0(o14);
    }
})();

o0();
undefined("Win8 540999: arguments identifier used as parameter");
(new o221("\u1E9Cbase",null));

o0();
o0("Win8 649401: Same named parameters + eval");
(function () {
    function o20(undefined, o24, o24, o24, undefined, undefined) {
        function o23() { };
        eval('echo("x:", x)'); // eval
    }
    o20(0);
    o20(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
})();

o0();
o0("Win8 649401: Same named parameters + arguments");
(function () {
    function o20(undefined, o24, o24, o24, o24, o24) {
        function o23() { };
        o0("x:", o24);

        for (var o29 = 0; o29 < arguments.length; o29++) {
            o0(arguments[o29]);
        }
    }
    o20(0);
    o20(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
})();
