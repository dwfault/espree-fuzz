//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = 0;
var o3 = 0;
var o4 = 1;
var o5 = false;
var o6 = {};
var o7 = false;
var o8 = false;
o6[Symbol.iterator] = function () {
    return {
        next: function() {
            o2++;
            if (o7) { throw new Error('Exception from next function'); }
            return {value : o4, done:o5};
        },
        return: function (value) {
            o3++;
            if (o8) { throw new Error('Exception from return function'); }
            return {done:true};
        }
    };
};

var o16 = {
  set o17(o18) {
    throw new Error('From setter');
  }
};

var o19 = [
    {
                name : "Destructuring - no .return function defined is a valid scenario",
                o21 : function () {
                        var o6 = {};
                        o6[Symbol.iterator] = function () {
                                return {
                                        next : function () {
                                                return {
                                                        value : 10,
                                                        done : false
                                                };
                                        }
                                };
                        };

                        var [o22] = o6;
                        o23.o24(o22, 10, "Destructuring declaration calls next on iterator and should get 10");
            var o25;
            [o25] = o6;
                        o23.o24(o25, 10, "Destructuring expression calls next on iterator and should get 10");
                }
        },
    {
                name : "Destructuring - validating that the iterable has .return field but not as a function",
                o21 : function () {
            var o26 = undefined;
            var o6 = {};
            o6[Symbol.iterator] = function() {
              return {
                next: function() {
                    return {value:10, done:false};
                },
                return: o26
              };
            };
            
            var o22;
            o23.o28(function() {
                [o22] = o6;
            }, "iterator has return field which returns 'undefined' and that should not throw");
            
            o23.o28(function() {
                o26 = null;
                [o22] = o6;
            }, "iterator has return field which returns 'null' and that should not throw");
            
            o23.o29(function () { o26 = {}; [o22] = o6; }, o30, 
                    "return field is not a function and returns other than 'undefined'/'null' should throw Type Error");
                }
        },
    {
                name : "Destructuring - basic validation with .return function when the pattern is empty or has one element",
                o21 : function () {
            o2 = 0;
            o3 = 0;
            [] = o6;
            o23.o24(o2, 0, "Empty LHS pattern should not call the next function");
            o23.o24(o3, 1, "Evaluation of empty LHS pattern will call return function");

            o2 = 0;
            o3 = 0;
            var [] = o6;
            o23.o24(o2, 0, "Empty LHS declaration pattern should not call the next function");
            o23.o24(o3, 1, "Evaluation of empty LHS declaration pattern call return function");
            
            o2 = 0;
            o3 = 0;
            [,] = o6;
            o23.o24(o2, 1, "Comma operator causes the next to be called");
            o23.o24(o3, 1, "Exhausting the LHS pattern (after comma) will call the call return function");

            var o22;
            o2 = 0;
            o3 = 0;
            [o22] = o6;
            o23.o24(o2, 1, "Evaluating destructuring element will call next function");
            o23.o24(o3, 1, "Exhausting the LHS pattern (after comma) will call the call return function");
            
                }
        },
    {
                name : "Destructuring - validation with .return function with nesting pattern",
                o21 : function () {
            o2 = 0;
            o3 = 0;
            [[o22]] = [o6];
            o23.o24(o2, 1, "Nested array pattern will call next function when 'a' is evauluated");
            o23.o24(o3, 1, "When nested array pattern exhausts the return function will be called");
            
            o2 = 0;
            o3 = 0;
            o4 = o6;
            [o22, [o22]] = o6;
            
            o23.o24(o2, 3, "Recursive iterators on RHS - next function will be called 3 times in order to exhaust elements");
            o23.o24(o3, 2, "Recursive iterators on RHS - return function for two nested iterators will be called");
            o4 = 1; // Reset it back

            o2 = 0;
            o3 = 0;
            o4 = o6;
            var [o22, [o22]] = o6;
            
            o23.o24(o2, 3, "Array declaration - Recursive iterators on RHS - next function will be called 3 times in order to exhaust elements");
            o23.o24(o3, 2, "Array declaration - Recursive iterators on RHS - return function for two nested iterators will be called");
            o4 = 1; // Reset it back
                }
        },    
    {
                name : "Destructuring - change .done to true will not call .return function",
                o21 : function () {
            o2 = 0;
            o3 = 0;
            o5 = true;
            var [o22] = o6;
            
            o23.o24(o2, 1, "next function is called to evaluate the element on the LHS");
            o23.o24(o3, 0, "'done' is set true on next function call - which will ensure that return function is not called");
            o5 = false;
                }
        },    
    {
                name : "Destructuring - validating that exception will call the .return function",
                o21 : function () {
            o2 = 0;
            o3 = 0;
            o23.o29(function () { [o16.o17] = o6; }, Error, "Pattern throws error while assigning .value", "From setter");
            o23.o24(o3, 1, "Abrupt completion due to exception will call the return function");

            o2 = 0;
            o3 = 0;
            o4 = o6;
            o23.o29(function () { [o31, [o16.o17]] = o6; }, Error, "Nested pattern throws error while assigning .value", "From setter");
            o23.o24(o3, 2, "Nested recursive iterators - abrupt completion due to exception will call the return function");
            o4 = 1;

            o2 = 0;
            o3 = 0;
            o4 = o6;
            o23.o29(function () { [[[[o16.o17]]]] = o6; }, Error, "Nested pattern throws error while assigning .value", "From setter");
            o23.o24(o2, 4, "Nested recursing iterators - 4 times next function called due to 4 level depth of array pattern");
            o23.o24(o3, 4, "Nested recursing iterators - 4 times return function called due to abrupt comletion");
            o4 = 1;
            
            o5 = true;
            o2 = 0;
            o3 = 0;
            o23.o29(function () { [o16.o17] = o6; }, Error, "Pattern throws error while assigning .value", "From setter");
            o23.o24(o3, 0, "Ensuring that return function is not called when 'done' is set to true during abrupt completion");
            o5 = false; // Reset it back.
                }
        },    
    {
                name : "Destructuring - chained iterators will have their .return function called correctly",
                o21 : function () {
            var o32 = 0;
            var o33 = 0;
            var o34 = 0;
            var o35 = 0;
            
            var o6 = {};
            o6[Symbol.iterator] = function() {
              return {
                next: function() {
                    o32++;
                  return { value: o36, done: false };
                },
                return: function() {
                    o34++;
                    return {done:true};
                },
              };
            };

            var o36 = {};
            o36[Symbol.iterator] = function() {
              return {
                next: function() {
                    o33++;
                  return { value: [0], done: false };
                },
                return: function() {
                    o35++;
                    return {done:true};
                }
              };
            };

             o32 = 0;
             o33 = 0;
             o34 = 0;
             o35 = 0;
             o23.o29(function () {[[o16.o17]] = o6; }, Error, "Pattern throws error while assigning .value", "From setter");
             o23.o24(o32, 1, "next function for the first iterator is called");
             o23.o24(o33, 1, "next function for the second iterator is called");
             o23.o24(o34, 1, "return function for the second iterator is called" );
             o23.o24(o35, 1, "return function for the first iterator is called");
                }
        },    
    {
                name : "Destructuring - .return function should not be called when .next function throws",
                o21 : function () {
            o7 = true;
            o3 = 0;
            o23.o29(function () { var [o22] = o6; }, Error, "Array declaration - Calling .next throws", "Exception from next function");
            o23.o24(o3, 0, "Ensuring that return function is not called in array declaration pattern");
             
            o23.o29(function () { [o22] = o6; }, Error, "Array expression - Calling .next throws", "Exception from next function");
            o23.o24(o3, 0, "Ensuring that return function is not called in array expression pattern");
             
            o23.o29(function () { var [...o22] = o6; }, Error, "Array declaration with rest - Calling .next throws", "Exception from next function");
            o23.o24(o3, 0, "Ensuring that return function is not called when evalauting rest in array declaration pattern");
             
            o23.o29(function () { [...o22] = o6; }, Error, "Array expression with rest - Calling .next throws", "Exception from next function");
            o23.o24(o3, 0, "Ensuring that return function is not called when evaluating rest in array expression pattern");
             
            o7 = false;
                }
        },    
    {
                name : "Destructuring - .return function should not be called when fetching .value throws",
                o21 : function () {
            var o36 = {};
            o36[Symbol.iterator] = function() {
              return {
                next: function() {
                    return {get value () { throw new Error('Exception while getting value'); }, done:false};
                },
                return: function() {
                    o23.o37('return should not be called');
                    return {};
                },
              };
            };

            o23.o29(function () { [o22] = o36; }, Error, "Fetch .value throws", "Exception while getting value");
                }
        },    
    {
                name : "Destructuring - .return function can also throw",
                o21 : function () {
            o8 = true;
            o23.o29(function () { [o22] = o6; }, Error, "Calling .return throws", "Exception from return function");
            o8 = false;
                }
        },    
    {
                name : "Destructuring - caller and .return function both throw and caller's exception wins",
                o21 : function () {
            o8 = true;
            o3 = 0;
            o23.o29(function () { [o16.o17] = o6; }, Error, "Setting value will throw", "From setter");
            o23.o24(o3, 1, "Ensuring that return function is called");
            o8 = false;
                }
        },    
    {
                name : "Destructuring - with generator",
                o21 : function () {
            var o38 = 0;
            function *o39() {
                try {
                    yield 1;
                    o23.o37('should not reach after yield');
                }
                finally {
                    o38++;
                }
                o23.o37('should not reach after finally');;
            }
            
            [o22] = o39();
            o23.o24(o38, 1, "Exhausting pattern will call return function on generator, which will execute finally block");
            
            o38 = 0;
            o23.o29(function () { [o16.o17] = o39(); }, Error, "Assigning value to destructuring element can throw", "From setter");
            o23.o24(o38, 1, "Exception causes to call return function on generator, which will execute finally block");
            
            function* o40() {
                yield 1;
                o23.o37('should not reach after yield');
            }
            var o3 = 0;
            o40.prototype.return = function() {
                o3++;
                return {};
            };
            [o22] = o40();
            o23.o24(o3, 1, "Exhausting pattern will call return function on generator");
            
            o40.prototype.return = function() {
                o3++;
                throw new Error('Exception from return function');
            };
            o23.o29(function () { [o22] = o40(); }, Error, "Return function throws", "Exception from return function");
            o3 = 0;
            o23.o29(function () { [o16.o17] = o40(); }, Error, "Exception at destructuring element wins", "From setter");
            o23.o24(o3, 1, "Exception causes to call return function on generator");
                }
        },    
    {
                name : "Destructuring - at function parameter",
                o21 : function () {
            o2 = 0;
            o3 = 0;
            (function([o22, o25]) {})(o6);
            o23.o24(o2, 2, "next function will be called 2 times to evaluate 2 elements in the pattern");
            o23.o24(o3, 1, "return function will be called once the pattern exhausts");
            
            o8 = true;
            o23.o29(function () { (function([o22, o25]) {})(o6) }, Error, "Calling return function while at param throws", "Exception from return function");
            o8 = false;
                }
        },
    {
                name : "Destructuring - assigning to rest parameter can throw but should not call .return function",
                o21 : function () {
            function* o39() {
                yield 1;
                yield 2;
            }
            o39.prototype.return = function() {
                o23.o37('return function should not be called');
            };
            
            o23.o29(function () { [...o16.o17] = o39(); }, Error, "Assigning to rest head can throw", "From setter");
                }
        },    
    {
                name : "Destructuring - .next throws during rest assignment but it should not call the .return function",
                o21 : function () {
            o3 = 0;
            o7 = true;
            o23.o29(function () { var [...o22] = o6; }, Error, "next function throws in the array declaration evaluation", "Exception from next function");
            o23.o29(function () { [...o22] = o6; }, Error, "next function throws in the array expression evaluation", "Exception from next function");
            o7 = false;
            o23.o24(o3, 0, "return function should be called even when the next function throws");
                }
        },    
    {
                name : "Destructuring - has yield as initializer",
                o21 : function () {
            var o42 = 0;
            function *o43 () { yield undefined; yield 21; }

            o43.prototype.return = function () {
                o42++;
                return {};
            };
            
            var o44;

            var o45 = (function * () {
                ([o44 = yield] = o43());
            }());

            o45.next();
            var o46 = o45.next(10);
            o23.o24(o44, 10, "calling next with value 10 will assign 'x' to 10");
            o23.o47(o46.done, "iterator is completed as there is nothing more to yield");
            o23.o24(o42, 1, "Destructuring elements exhaust and that should call return function");
                }
        },    
    {
                name : "Destructuring - yield in the pattern and inner return throws",
                o21 : function () {
            function *o43 () { yield undefined; }

            o43.prototype.return = function () {
                throw new Error('Exception from return function');
            };
            
            var o44;

            var o45 = (function * () {
                ([o44 = yield] = o43());
                o23.o37('Unreachable code');
            }());

            o45.next();
            o23.o29(function () {
                o45.return();
            }, Error, "calling return on the outer generator will call return on inner generator", 'Exception from return function');
                }
        },
    {
                name : "Destructuring - yield in the pattern and both caller and inner return throws",
                o21 : function () {
            function *o43 () { yield undefined;}

            var o42 = 0;
            o43.prototype.return = function () {
                o42++;
                throw new Error('Exception from return function');
            };
            
            var o44;

            var o45 = (function * () {
                ([o44 = yield] = o43());
                o23.o37('Unreachable code');
            }());

            o45.next();
            o23.o29(function () {
                o45.throw(new Error('Exception from outer throw'));
            }, Error, "calling throw on the outer generator will call return on inner generator but outer exxception wins", 'Exception from outer throw');

            o23.o24(o42, 1, "ensuring that return function is called");
                }
        },
    {
                name : "Destructuring - .return will be called even before .next function is called if yield as return",
                o21 : function () {
            function *o43 () { o23.o37('innerGen body is not executed');}

            var o42 = 0;
            o43.prototype.return = function () {
                o42++;
                return {};
            };
            
            var o44;

            var o45 = (function * () {
                ([{}[yield]] = o43());
                o23.o37('Unreachable code');
            }());

            o45.next();
            o45.return();
            o23.o24(o42, 1, "ensuring that return function is called");
                }
        },
    {
                name : "Destructuring - with rest - .return will be called even before .next function is called if yield as return",
                o21 : function () {
            function *o43 () { o23.o37('innerGen body is not executed');}

            var o42 = 0;
            o43.prototype.return = function () {
                o42++;
                return {};
            };
            
            var o44;

            var o45 = (function * () {
                ([...{}[yield]] = o43());
                o23.o37('Unreachable code');
            }());

            o45.next();
            o45.return();
            o23.o24(o42, 1, "ensuring that return function is called");
                }
        },
    {
                name : "For..of - validation of calling .return function on abrupt loop break",
                o21 : function () {
            o3 = 0;
            for (o49 of o6) {
                break;
            }
            o23.o24(o3, 1, "return function is called as the loop is abruptly completed due to 'break'");

            o3 = 0;
            (function () {
                for (o49 of o6) {
                    return;
                }
            })();
            o23.o24(o3, 1, "return function is called as the loop is abruptly completed due to 'return'");

            o3 = 0;
            (function () {
                var o50 = true;
                outer2 : while (o50) {
                    o50 = false;
                    for (o49 of o6) {
                        continue o51outer2 : while (loop) {
                    loop = false;
                    for (i of iterable) {
                        continue outer2o51 : while (loop) {
                    loop = false;
                    for (i of iterable) {
                        continue outer2;
                    }
                }
            })();
            o23.o24(o3, 1, "return function is called as the loop is abruptly completed due to 'continue'");

            o3 = 0;
            (function () {
                var o50 = true;
                outer3 : while (o50) {
                    o50 = false;
                    for (o49 of o6) {
                        break o52outer3 : while (loop) {
                    loop = false;
                    for (i of iterable) {
                        break outer3o52 : while (loop) {
                    loop = false;
                    for (i of iterable) {
                        break outer3;
                    }
                }
            })();
            o23.o24(o3, 1, "return function is called as the loop is abruptly completed due to 'break label'");

            o2 = 0;
            o3 = 0;
            o23.o29(function () {
                for (o49 of o6) {
                    (function () {
                        throw new Error('break loop by causing an exception');
                    })();
                }
            }, Error);
            o23.o24(o2, 1, "next function is called once as the loop iterates only once");
            o23.o24(o3, 1, "return function is called as the loop is abruptly completed due to an exception");
            
                }
        },
    {
                name : "For..of - validation of .return function with nesting pattern",
                o21 : function () {
            
            o2 = 0;
            o3 = 0;
            // Creating recursing iterator. the value is another iterator.
            o4 = o6;
            (function() {
            for (var o45 of o6) {
                for (var o53 of o45) {
                    return;
                }
            }
            })();
            
            o23.o24(o2, 2, "Nested iterators - next function is called 2 times, once for each loop");
            o23.o24(o3, 2, "Nested iterators - return function is called 2 times as two loops are abruptly completed due to 'return'");
            
            o2 = 0;
            o3 = 0;
            o23.o29(function() {
                for (var o45 of o6) {
                    for (var o53 of o45) {
                        throw new Error('error');
                    }
                }
            }, Error);
            
            o23.o24(o2, 2, "Nested iterators - next function is called 2 times, once for each loop");
            o23.o24(o3, 2, "Nested iterators - return function is called 2 times as two loops are abruptly completed due to exception");
                }
        },    
    {
                name : "For..of - change .done to true will not call .return function",
                o21 : function () {
            o3 = 0;
            o5 = true;
            for (var o49 of o6) {
                o23.o37('This will not reach as the .done is marked to true');
            }
            
            o23.o24(o3, 0, "Loop is completed as .done is set to true, this ensures that return function should not be called");
            o5 = false;
                }
        },    
    {
                name : "For..of - validating that causing an exception on assigning value to for..of head  will call .return function",
                o21 : function () {
            o3 = 0;
            o23.o29(function () {for (o16.o17 of o6) {
                o23.o37('Should not reach here as assigning to obj.prop throws');
            }}, Error, "Assigning to loop head can throw", "From setter");
            
            o23.o24(o3, 1, "Abrupt loop break due to exception in assigning value to head should call return function");
            
            o3 = 0;
            o4 = o6;
            o23.o29(function () {
                for (var o54 of o6) {
                    for (o16.o17 of o54) {
                        o23.o37('Should not reach here as assigning to obj.prop throws');
                    }
                }
            }, Error, "Assigning to loop head can throw", "From setter");
            
            o23.o24(o3, 2, "Exception caused in inner loop when assigning value to head should call the return function");
            o4 = 1;
                }
        },    
    {
                name : "For..of - .return function should not be called when .next function throws",
                o21 : function () {
            o3 = 0;
            o7 = true;
            o23.o29(function () { for (var o49 of o6) { } }, Error, "Calling .next throws", "Exception from next function");
            o7 = false;
            o23.o24(o3, 0, "Ensuring that exception in next function should not call the return function");
                }
        },    
    {
                name : "For..of - .return function should not be called when fetching .value throws",
                o21 : function () {
            var o36 = {};
            o36[Symbol.iterator] = function() {
              return {
                next: function() {
                    return {get value () { throw new Error('Exception while getting value'); }, done:false};
                },
                return: function() {
                    o23.o37('return should not be called');
                },
              };
            };

            o23.o29(function () { for (var o49 of o36) { } }, Error,
                ".value causes an exception but that should not call the return function",
                "Exception while getting value");
                }
        },    
    {
                name : "For..of - .return function can also throw",
                o21 : function () {
            o8 = true;
            o23.o29(function () { for (var o49 of o6) { break; } }, Error, ".return function throws", "Exception from return function");
            o8 = false;
                }
        },    
    {
                name : "For..of - caller and .return function both throw and caller's exception wins",
                o21 : function () {
            o8 = true;
            o3 = 0;
            o23.o29(function () { for (o16.o17 of o6) { break; } }, Error, "Setting value will throw", "From setter");
            o23.o24(o3, 1, "Ensuring that abrupt loop completion due to exception will call return function");
            o8 = false;
                }
        },    
    {
                name : "For..of - with generator",
                o21 : function () {
            var o38 = 0;
            function *o39() {
                try {
                    yield 1;
                    o23.o37('Should not reach here after yield');
                }
                finally {
                    o38++;
                }
                o23.o37('Should not reach here after finally');;
            }
            
            for (var o49 of o39()) {
                break;
            }

            o23.o24(o38, 1, "'break' causes the return function called which should execute the finally block");
            
            o38 = 0;
            o23.o29(function () { for (o16.o17 of o39()) { } }, Error, "Setting value will throw", "From setter");
            o23.o24(o38, 1, "Exception causes the return function called which should execute the finally block");
            
            function* o40() {
                yield 1;
                o23.o37('Should not reach here after yield');
            }
            var o3 = 0;
            o40.prototype.return = function() {
                o3++;
                return {};
            };
            
            for (var o49 of o40()) {
                break;
            }

            o23.o24(o3, 1, "Loop break due to 'break' should call the return function on the generator");
            
            o40.prototype.return = function() {
                o3++;
                throw new Error('Exception from return function');
            };
            o23.o29(function () { for (o49 of o40()) { break; } }, Error, "return function throws", "Exception from return function");
            o3 = 0;
            o23.o29(function () { for (o16.o17 of o40()) { } }, Error, "Exception at destructuring element wins", "From setter");
            o23.o24(o3, 1, "Exception in loop should call the return function");
            
                }
        },    
    {
                name : "Iterator close with yield *",
                o21 : function () {
            var o42 = 0;
            let o43 = function*() { yield 1; yield 2 };
            o43.prototype.return = function () {
                o42++;
                return {};
            };
            
            function* o39() { yield* o43() }

            for (var o49 of o39()) {
                break;
            }

            o23.o24(o42, 1, "Loop break due to 'break' should call the return function, yield * should propagate that to inner generator");
            
            o42 = 0;
            (function() {
                for (var o49 of o39()) {
                    return;
                }
            })();
            o23.o24(o42, 1, "Loop break due to 'return' should call the return function, yield * should propagate that to inner generator");
            
            o42 = 0;
            o23.o29(function () { for (var o49 of o39()) { throw new Error(''); } }, Error);
            o23.o24(o42, 1, "Loop break due to 'throw' should call the return function, yield * should propagate that to inner generator");

            o42 = 0;
            var [o55] = o39();
            o23.o24(o42, 1, "Exhausting destructuring element will call the return function");
                }
        },    
    {
                name : "Array.from - Iterator closing when mapping function throws",
                o21 : function () {
            var o56 = function() {
                throw new Error('');
            };
            
            o3 = 0;
            o23.o29(function () { 
                Array.from(o6, o56);
            }, Error);
    
            o23.o24(o3, 1, "Exception in mapping function in Array.from should call the return function");
                }
        },    
    {
                name : "Array.from - .return function should not be called when .next function throws",
                o21 : function () {
            o7 = true;
            o3 = 0;
            o23.o29(function () { 
                Array.from(o6);
            }, Error);
            o23.o24(o3, 0, "next function causes exception which should not call the return function");
            o7 = false;
                }
        },    
    {
                name : "Array.from - both mapping function and .return throw but the outer exception wins",
                o21 : function () {
            var o56 = function() {
                throw new Error('Exception from map function');
            };
            
            o3 = 0;
            o8 = true;
            o23.o29(function () { 
                Array.from(o6, o56);
            }, Error, 'Validate that the exception from return function is skipped', 'Exception from map function');
    
            o8 = false;
            o23.o24(o3, 1, "return function is called when mapping function throws");
                }
        },    
    {
                name : "Map - calling .return function in the event of exception",
                o21 : function () {
            o3 = 0;
            o23.o29(function () { 
                new Map(o6);
            }, o30);
            o23.o24(o3, 1, "return function is called when iterator does not return object");
            
            Map.prototype.set = function() {
                throw new Error('');
            };
            
            o4 = [];
            o3 = 0;
            o23.o29(function () { 
                new Map(o6);
            }, Error);
    
            o23.o24(o3, 1, "return function is called when .set function throws");
            o4 = 1;
                }
        },    
    {
                name : "Map - .return function should not be called when .next function throws",
                o21 : function () {
            o3 = 0;
            o7 = true;
            o23.o29(function () { 
                new Map(o6);
            }, Error);
    
            o23.o24(o3, 0, "next function causes exception which should not call the return function");
            o7 = false;
                }
        },    
    {
                name : "Map - both .set function and .return throw but the outer exception wins",
                o21 : function () {
            Map.prototype.set = function() {
                throw new Error('Exception from set function');
            };
            
            o4 = [];
            o3 = 0;
            o8 = true;
            o23.o29(function () { 
                new Map(o6);
            }, Error, 'Validate that the exception from return function is skipped', 'Exception from set function');
    
            o8 = true;
            o4 = 1;
            o23.o24(o3, 1, "return function is called as the set function throws");
                }
        },    
    {
                name : "WeakMap - calling .return function in the event of exception",
                o21 : function () {
            o3 = 0;
            o23.o29(function () { 
                new WeakMap(o6);
            }, o30);
            o23.o24(o3, 1, "return function is called when iterator does not return object");
            
            WeakMap.prototype.set = function() {
                throw new Error('');
            };
            
            o4 = [];
            o3 = 0;
            o23.o29(function () { 
                new WeakMap(o6);
            }, Error);
    
            o23.o24(o3, 1, "return function is called as the set function throws");
            o4 = 1;
                }
        },    
    {
                name : "WeakMap - .return function should not be called when .next function throws",
                o21 : function () {
            o3 = 0;
            o7 = true;
            o23.o29(function () { 
                new WeakMap(o6);
            }, Error);
    
            o23.o24(o3, 0, "next function causes exception which should not call the return function");
            o7 = false;
                }
        },    
    {
                name : "WeakMap - both .set function and .return throw but the outer exception wins",
                o21 : function () {
            WeakMap.prototype.set = function() {
                throw new Error('Exception from set function');
            };
            
            o4 = [];
            o3 = 0;
            o8 = true;
            o23.o29(function () { 
                new WeakMap(o6);
            }, Error, 'Validate that the exception from return function is skipped', 'Exception from set function');
    
            o8 = true;
            o4 = 1;
            o23.o24(o3, 1, "return function is called as the set function throws");
                }
        },    
    {
                name : "Set - calling .return function when .add function throws",
                o21 : function () {
            Set.prototype.add = function() {
                throw new Error('');
            };
            
            o3 = 0;
            o23.o29(function () { 
                new Set(o6);
            }, Error);
    
            o23.o24(o3, 1, "return function is called as the add function throws");
                }
        },
    {
                name : "Set - .return function should not be called when .next function throws",
                o21 : function () {
            o3 = 0;
            o7 = true;
            o23.o29(function () { 
                new Set(o6);
            }, Error);
    
            o23.o24(o3, 0, "next function causes exception which should not call the return function");
            o7 = false;
                }
        },
    {
                name : "Set - both .add function and .return throw but the outer exception wins",
                o21 : function () {
            Set.prototype.add = function() {
                throw new Error('Exception from add function');
            };
            
            o3 = 0;
            o8 = true;
            o23.o29(function () { 
                new Set(o6);
            }, Error, 'Validate that the exception from return function is skipped', 'Exception from add function');
    
            o8 = false;
            o23.o24(o3, 1, "return function is called as the add function throws");
                }
        },
    {
                name : "WeakSet - calling .return function when .add function throws",
                o21 : function () {
            WeakSet.prototype.add = function() {
                throw new Error('');
            };
            
            o3 = 0;
            o23.o29(function () { 
                new WeakSet(o6);
            }, Error);
    
            o23.o24(o3, 1, "return function is called as the add function throws");
                }
        },
    {
                name : "WeakSet - .return function should not be called when .next function throws",
                o21 : function () {
            o3 = 0;
            o7 = true;
            o23.o29(function () { 
                new WeakSet(o6);
            }, Error);
    
            o23.o24(o3, 0, "next function causes exception which should not call the return function");
            o7 = false;
                }
        },
    {
                name : "WeakSet - both .add function and .return throw but the outer exception wins",
                o21 : function () {
            WeakSet.prototype.add = function() {
                throw new Error('Exception from add function');
            };
            
            o3 = 0;
            o8 = true;
            o23.o29(function () { 
                new WeakSet(o6);
            }, Error, 'Validate that the exception from return function is skipped', 'Exception from add function');
    
            o8 = false;
            o23.o24(o3, 1, "return function is called as the add function throws");
                }
        },
    {
                name : "Promise.all - call .return function when .resolve function throws",
                o21 : function () {
            Promise.resolve = function () {
                throw new Error('');
            }
            o3 = 0;
            Promise.all(o6);
            o23.o24(o3, 1, "return function is called as the resolve function throws");
                }
        },    
    {
                name : "Promise.all - .return function should not be called when .next function throws",
                o21 : function () {
            o3 = 0;
            o7 = true;
            Promise.all(o6);
            o7 = false;
            o23.o24(o3, 0, "next function causes exception which should not call the return function");
                }
        },    
    {
                name : "Promise.all - both .resolve and .return function thrown and outer exception wins",
                o21 : function () {
            Promise.resolve = function () {
                throw new Error('Exception from resolve function');
            }
            o3 = 0;
            o8 = true;
            var o68 = Promise.all(o6);
            o8 = false;
            o23.o24(o3, 1, "return function is called as the resolve function throws");
            o68.catch( function (o70) {
                o23.o24(o70.o71, 'Exception from resolve function');
            });
                }
        },    
    {
                name : "Promise.race - call .return function when .resolve function throws",
                o21 : function () {
            Promise.resolve = function () {
                throw new Error('');
            }
            o3 = 0;
            Promise.race(o6);
            o23.o24(o3, 1, "return function is called as the resolve function throws");
                }
        },    
    {
                name : "Promise.race - .return function should not be called when .next function throws",
                o21 : function () {
            o3 = 0;
            o7 = true;
            Promise.race(o6);
            o7 = false;
            o23.o24(o3, 0, "next function causes exception which should not call the return function");
                }
        },    
    {
                name : "Promise.race - both .resolve and .return function thrown and outer exception wins",
                o21 : function () {
            Promise.resolve = function () {
                throw new Error('Exception from resolve function');
            }
            o3 = 0;
            o8 = true;
            var o68 = Promise.race(o6);
            o8 = false;
            o23.o24(o3, 1, "return function is called as the resolve function throws");
            o68.catch( function (o70) {
                o23.o24(o70.o71, 'Exception from resolve function');
            });
                }
        },    
];

o73.o74(o19, {
        o75 : o0.o76[0] != "summary"
});
