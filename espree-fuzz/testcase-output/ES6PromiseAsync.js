//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Promise async tests -- verifies functionality of promise async operations 

function o0(o1) {
    o2.o3(o1);
}

function o4(o5, o6, o7) {
    o7 = o7 || false;
    var o8 = new Promise(
        function(resolve,reject) {
            if (o7) {
                o2.o9(function() { reject(o6) }, 0);
            } else {
                o2.o9(function() { resolve(o6) }, 0);
            }
        }
    );
    
    o8.then(
        function(o10) {
            o0(o5 + o6 + ' success: ' + o10);
        },
        function(o11) {
            o0(o5 + o6 + ' failure: ' + o11);
        }
    );
    
    return o8;
}

function o12(o5, o6) {
    return o4(o5, o6, false);
}

function o13(o5, o6) {
    return o4(o5, o6, true);
}

// Copy promise and attempt to call resolve handler twice.
// Since we can only call the Promise.all resolve handlers once, we can tamper with the result value for this promise.
function o14(o8, o10, o15) {
    return Object.assign(o8, {
        then(o16, o17) {
            if (o15) {
                o16(o10);
            } else {
                o16();
            }
            return Promise.prototype.then.call(this, o16, o17);
        }
    });
}

var o18 = [
    {
        name: "Promise basic behavior",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    o0('Test #' + index + ' - Executor function called synchronously');
                    resolve('basic:success');
                }
            );
            
            promise.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise basic error behavior",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    o0('Test #' + index + ' - Executor function called synchronously');
                    reject('basic:error');
                }
            );
            
            promise.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise with multiple then handlers",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('multithen:success');
                }
            );
            
            promise.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            );
            
            promise.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
                }
            );
            
            promise.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #3 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #3 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise with chained then handlers",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('chain:success1');
                }
            );
            
            promise.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                    
                    return new Promise(
                        function(resolve,reject) {
                            resolve('chain:success2');
                        }
                    );
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            ).then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise with a throwing executor function",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    throw 'basic:throw';
                }
            );
            
            promise.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise with a potential thenable that throws when getting the 'then' property",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('thenable.get:unused');
                }
            );
           
            promise.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                    return { get then() { throw 'thenable.get:error!'; } };
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            ).then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise with a potential thenable that throws when calling the 'then' function",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('thenable.call:unused');
                }
            );
           
            promise.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                    return { then: function() { throw 'thenable.call:error!'; } };
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            ).then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise with a success handler that throws when called",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('success.throw:unused');
                }
            );
           
            promise.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                    throw 'success.throw:error';
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            ).then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise with an error handler that throws when called",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('error.throw:unused');
                }
            );
           
            promise.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                    throw 'error.throw:error';
                }
            ).then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise with an executor function that creates a self-resolution error",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    o2.o9(
                        function() {
                            resolve(promise);
                        },
                        0
                    );
                }
            );
           
            promise.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise basic catch behavior",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('error');
                }
            );
            
            promise.catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise chained catch behavior",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('error1');
                }
            );
            
            promise.catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
                    throw 'error2';
                }
            ).catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #2 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise then and catch interleaved",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('error1');
                }
            );
            
            promise.catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
                    return 'ok';
                }
            ).then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                    throw 'error2';
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            ).catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #2 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise identity function is used when no success handler is provided",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('success');
                }
            );
            
            promise.then(
                undefined,
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            ).then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise thrower function is used when no error handler is provided",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('failure');
                }
            );
            
            promise.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                },
                undefined
            ).then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
                },
                undefined
            ).catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.resolve creates a fulfilled resolved promise",
        o19: function (index) {
            var promise = Promise.resolve('resolved promise result');
            
            promise.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                }
            );
        }
    },
    {
        name: "Promise.resolve called with a promise returns the same promise",
        o19: function (index) {
            var promise = Promise.resolve(42);
            var o20 = Promise.resolve(promise);
            
            if (promise !== o20) {
                o0('Test #' + index + ' - Promise.resolve returns a new promise object!');
            }
        }
    },
    {
        name: "Promise.reject creates a fulfilled rejected promise",
        o19: function (index) {
            var promise = Promise.reject('rejected promise result');
            
            promise.catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.reject called with a promise returns a promise for that promise",
        o19: function (index) {
            var promise = Promise.reject(42);
            var o20 = Promise.reject(promise);
            
            if (promise === o20) {
                o0('Test #' + index + ' - Promise.reject does not return a new promise object!');
            }
        }
    },
    {
        name: "Promise.race with an object containing a non-function iterator property",
        o19: function (index) {
            var o21 = {
                [Symbol.iterator]: 123
            };
            
            var o8 = Promise.race(o21);
            o8.catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.race with this argument missing the resolve function",
        o19: function (index) {
            var o22 = Promise.resolve;
            Promise.resolve = undefined;
            
            var o8 = Promise.race([Promise.reject(42)]);
            o8.catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
                }
            );
            
            Promise.resolve = o22;
        }
    },
    {
        name: "Promise.race with this argument resolve function returning a non-object",
        o19: function (index) {
            var o22 = Promise.resolve;
            Promise.resolve = function() { return undefined; };
            
            var o8 = Promise.race([Promise.reject(42)]);
            o8.catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
                }
            );
            
            Promise.resolve = o22;
        }
    },
    {
        name: "Promise.race with this argument resolve function returning an object with no then function",
        o19: function (index) {
            var o22 = Promise.resolve;
            Promise.resolve = function() { return {}; };
            
            var o8 = Promise.race([Promise.reject(42)]);
            o8.catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
                }
            );
            
            Promise.resolve = o22;
        }
    },
    {
        name: "Promise.race with an object containing an iterator that throws",
        o19: function (index) {
            var o23 = {
                [Symbol.iterator]: function() {
                    return {
                        next: function () { 
                            throw new o24('failure inside iterator');
                        }
                    };
                }
            };
            
            var o8 = Promise.race(o23);
            o8.catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.race still returns a rejected promise if anything throws while iterating, even if resolved promises are encountered",
        o19: function (index) {
            var o23 = {
                [Symbol.iterator]: function() {
                    return {
                        o25: 0,
                        next: function () { 
                            if (this.o25 > 2)
                            {
                                throw new o24('failure inside iterator');
                            }
                            
                            this.o25++;
                            
                            return {
                                done: this.o25 == 5,
                                value: Promise.resolve('resolved promise completion #' + this.o25)
                            };
                        }
                    };
                }
            };
            
            var o8 = Promise.race(o23);
            o8.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.race fulfills with the same value as the first encountered resolved promise",
        o19: function (index) {
            var o26 = [
                new Promise(function() {}),
                Promise.resolve('first promise'),
                Promise.resolve('second promise'),
                Promise.reject('third promise')
            ];
            
            var o8 = Promise.race(o26);
            o8.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.race fulfills with the same value as the first encountered resolved promise (promises complete async)",
        o19: function (index) {
            var o26 = [
                new Promise(function() {}),
                o12('Test #' + index + ' - ', 'p1'),
                o12('Test #' + index + ' - ', 'p2'),
                o13('Test #' + index + ' - ', 'p3')
            ];
            
            var o8 = Promise.race(o26);
            o8.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.race fulfills with the same value as the first encountered rejected promise (promises complete async)",
        o19: function (index) {
            var o26 = [
                new Promise(function() {}),
                o13('Test #' + index + ' - ', 'p1'),
                o12('Test #' + index + ' - ', 'p2'),
                o12('Test #' + index + ' - ', 'p3')
            ];
            
            var o8 = Promise.race(o26);
            o8.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.race passes each element in it's argument to Promise.resolve",
        o19: function (index) {
            var o26 = [
                'first promise value',
                42,
                new o24('some error')
            ];
            
            var o8 = Promise.race(o26);
            o8.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.all with an object containing a non-function iterator property",
        o19: function (index) {
            var o21 = {
                [Symbol.iterator]: 123
            };
            
            var o8 = Promise.all(o21);
            o8.catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.all with this argument missing the resolve function",
        o19: function (index) {
            var o22 = Promise.resolve;
            Promise.resolve = undefined;
            
            var o8 = Promise.all([Promise.reject(42)]);
            o8.catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
                }
            );
            
            Promise.resolve = o22;
        }
    },
    {
        name: "Promise.all with this argument resolve function returning a non-object",
        o19: function (index) {
            var o22 = Promise.resolve;
            Promise.resolve = function() { return undefined; };
            
            var o8 = Promise.all([Promise.reject(42)]);
            o8.catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
                }
            );
            
            Promise.resolve = o22;
        }
    },
    {
        name: "Promise.all with this argument resolve function returning an object with no then function",
        o19: function (index) {
            var o22 = Promise.resolve;
            Promise.resolve = function() { return {}; };
            
            var o8 = Promise.all([Promise.reject(42)]);
            o8.catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
                }
            );
            
            Promise.resolve = o22;
        }
    },
    {
        name: "Promise.all with an object containing an iterator that throws",
        o19: function (index) {
            var o23 = {
                [Symbol.iterator]: function() {
                    return {
                        next: function () { 
                            throw new o24('failure inside iterator');
                        }
                    };
                }
            };
            
            var o8 = Promise.all(o23);
            o8.catch(
                function(o11) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.all still returns a rejected promise if anything throws while iterating, even if resolved promises are encountered",
        o19: function (index) {
            var o23 = {
                [Symbol.iterator]: function() {
                    return {
                        o25: 0,
                        next: function () { 
                            if (this.o25 > 2)
                            {
                                throw new o24('failure inside iterator');
                            }
                            
                            this.o25++;
                            
                            return {
                                done: this.o25 == 5,
                                value: Promise.resolve('resolved promise completion #' + this.o25)
                            };
                        }
                    };
                }
            };
            
            var o8 = Promise.all(o23);
            o8.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.all fulfills with the same value as the first encountered rejected promise",
        o19: function (index) {
            var o26 = [
                new Promise(function() {}),
                Promise.resolve('first promise'),
                Promise.resolve('second promise'),
                Promise.reject('third promise')
            ];
            
            var o8 = Promise.all(o26);
            o8.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.all fulfills with the same value as the first encountered rejected promise (async promises)",
        o19: function (index) {
            var o26 = [
                new Promise(function() {}),
                o12('Test #' + index + ' - ', 'p1'),
                o12('Test #' + index + ' - ', 'p2'),
                o13('Test #' + index + ' - ', 'p3')
            ];
            
            var o8 = Promise.all(o26);
            o8.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.all fulfills when all promises in iterable fulfill",
        o19: function (index) {
            var o26 = [
                o12('Test #' + index + ' - ', 'p1'),
                o12('Test #' + index + ' - ', 'p2'),
                o12('Test #' + index + ' - ', 'p3')
            ];
            
            var o8 = Promise.all(o26);
            o8.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.all passes each element in the arguments to Promise.resolve",
        o19: function (index) {
            var o26 = [
                'success value 1',
                42,
                new o24('an error')
            ];
            
            var o8 = Promise.all(o26);
            o8.then(
                function(o10) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
                },
                function(o11) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
                }
            );
        }
    },
    {
        name: "Promise.resolve called with a thenable calls then on the thenable",
        o19: function (index) {
            var o27 = {
                then: function(resolve, reject) {
                    o0('Test #' + index + ' - Promise.resolve calls thenable.then');
                    
                    Promise.resolve('nested Promise.resolve call').then(
                        function(o10) {
                            o0('Test #' + index + ' - Promise.resolve call nested within thenable.then = ' + o10);
                        }
                    );
                }
            };
            
            var promise = Promise.resolve(o27);
        }
    },
    {
        name: "Calling promise resolve function with thenable should call thenable.then",
        o19: function (index) {
            var o8 = new Promise(function(o28) {
                o28({ then: function(resolve, reject) {
                    o0('Test #' + index + ' - thenable.then resolve = ' + (typeof resolve) + ' reject = ' + (typeof reject));
                }});
            });
        }
    },
    {
        name: "Promise.all doesn't call then for rejected promises",
        o19: function(index) {
              Promise.all([Promise.reject('expected1')]).then(
                    o10 => o0(`Test #${index} - Success handler #1 called with result = ${o10}`)
                ).catch(
                    o11 => o0(`Test #${index} - Catch handler #1 called with err = ${o11}`)
                );
              Promise.all([Promise.reject('expected2'), Promise.resolve('unexpected1')]).then(
                    o10 => o0(`Test #${index} - Success handler #2 called with result = ${o10}`)
                ).catch(
                    o11 => o0(`Test #${index} - Catch handler #2 called with err = ${o11}`)
                );
              Promise.all([Promise.resolve('unexpected2'), Promise.reject('expected3')]).then(
                    o10 => o0(`Test #${index} - Success handler #3 called with result = ${o10}`)
                ).catch(
                    o11 => o0(`Test #${index} - Catch handler #3 called with err = ${o11}`)
                );
        }
    },
    {
        name: "Promise.all with iterator that returns no items",
        o19: function(index) {
            var o26 = [];
            
            var o8 = Promise.all(o26);
            o8.then(o6 => {
                o0(`Test #${index} - Success handler #1 called with result = '${o6}' (length = ${o6.length}) (isArray = ${Array.isArray(o6)})`);
            }).catch(o11 => {
                o0(`Test #${index} - Catch handler called with err = ${o11}`);
            });
        }
    },
    {
        name: "Simple tampering of Promise.all promise changes resolved result value",
        o19: function(index) {
            var o26 = [o14(Promise.resolve('success'), 'tampered', true)];
            
            Promise.all(o26).then(o10 => { 
                o0(`Test #${index} - Success handler called with result = '${o10}' (length = ${o10.length}) (isArray = ${Array.isArray(o10)})`);
            }).catch(o11 => {
                o0(`Test #${index} - Catch handler called with err = ${o11}`);
            });
        }
    },
    {
        name: "Promise.all - can't prevent remaining elements counter from reaching zero",
        o19: function (index) {
            var o26 = [o14(Promise.resolve('success'))];

            Promise.all(o26).then(o10 => { 
                o0(`Test #${index} - Success handler called with result = '${o10}' (length = ${o10.length}) (isArray = ${Array.isArray(o10)})`);
            }).catch(o11 => {
                o0(`Test #${index} - Catch handler called with err = ${o11}`);
            });
        }
    },
    {
        name: "Promise from Promise.all never resolved before arguments",
        o19: function (index) {
            var o26 = [
                Promise.resolve(0),
                o14(Promise.resolve(1)),
                Promise.resolve(2).then(o10 => { 
                    o0(`Test #${index} - Success handler #1a called with result = '${o10}' (isArray = ${Array.isArray(o10)}) (fulfillCalled = ${o29})`);
                    return 3;
                }).then(o10 => { 
                    o0(`Test #${index} - Success handler #1b called with result = '${o10}' (isArray = ${Array.isArray(o10)}) (fulfillCalled = ${o29})`);
                    return 4;
                }).catch(o11 => {
                    o0(`Test #${index} - Catch handler #1 called with err = ${o11}`);
                })
            ];

            let o29 = false;
            
            Promise.all(o26).then(o10 => {
                o29 = true;
                o0(`Test #${index} - Success handler #2 called with result = '${o10}' (length = ${o10.length}) (isArray = ${Array.isArray(o10)}) (fulfillCalled = ${o29})`);
            }).catch((o11) => {
                o0(`Test #${index} - Catch handler #2 called with err = ${o11}`);
            });
        }
    },
    {
        name: "Promise from Promise.all never resolved if rejected promise in arguments",
        o19: function (index) {
            var o26 = [
                Promise.resolve(0),
                o14(Promise.resolve(1)),
                Promise.reject(2)
            ];

            Promise.all(o26).then(o10 => {
                o0(`Test #${index} - Success handler #1 called with result = '${o10}' (length = ${o10.length}) (isArray = ${Array.isArray(o10)})`);
            }, o11 => {
                o0(`Test #${index} - Error handler #1 called with err = ${o11}`);
            }).catch(o11 => {
                o0(`Test #${index} - Catch handler #1 called with err = ${o11}`);
            });
        }
    },
    {
        name: "Promise executor resolves with the first call resolve function",
        o19: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                resolve('success');
                resolve('failure');
            });
            o8.then(
                (o28) => { o0(`Test #${index} - Success handler #1 called with res = '${o28}'`); },
                (o11) => { o0(`Test #${index} - Error handler #1 called with err = '${o11}'`); }
            );
        }
    },
    {
        name: "Promise executor rejects with the first call reject function",
        o19: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                reject('success');
                reject('failure');
            });
            o8.then(
                (o28) => { o0(`Test #${index} - Success handler #1 called with res = '${o28}'`); },
                (o11) => { o0(`Test #${index} - Error handler #1 called with err = '${o11}'`); }
            );
        }
    },
    {
        name: "Promise executor resolves/rejects with the first call to either function",
        o19: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                resolve('success');
                reject('failure');
            });
            o8.then(
                (o28) => { o0(`Test #${index} - Success handler #1 called with res = '${o28}'`); },
                (o11) => { o0(`Test #${index} - Error handler #1 called with err = '${o11}'`); }
            );
        }
    },
    {
        name: "Promise executor rejects/resolves with the first call to either function",
        o19: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                reject('success');
                resolve('failure');
            });
            o8.then(
                (o28) => { o0(`Test #${index} - Success handler #1 called with res = '${o28}'`); },
                (o11) => { o0(`Test #${index} - Error handler #1 called with err = '${o11}'`); }
            );
        }
    },
    {
        name: "Promise executor rejects/resolves/rejects with the first call to either function",
        o19: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                reject('success');
                resolve('failure');
                reject('failure');
            });
            o8.then(
                (o28) => { o0(`Test #${index} - Success handler #1 called with res = '${o28}'`); },
                (o11) => { o0(`Test #${index} - Error handler #1 called with err = '${o11}'`); }
            );
        }
    },
    {
        name: "Promise executor resolves/rejects/resolves with the first call to either function",
        o19: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                resolve('success');
                reject('failure');
                resolve('failure');
            });
            o8.then(
                (o28) => { o0(`Test #${index} - Success handler #1 called with res = '${o28}'`); },
                (o11) => { o0(`Test #${index} - Error handler #1 called with err = '${o11}'`); }
            );
        }
    },
];

var index = 1;

function o30(test) {
    o0('Executing test #' + index + ' - ' + test.name);
    
    try {
        test.o19(index);
    } catch(o31) {
        o0('Caught exception: ' + o31);
    }
    
    index++;
}

o18.forEach(o30);
    
o0('\r\nCompletion Results:');
