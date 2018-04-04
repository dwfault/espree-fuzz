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
                o2.o12(function() { reject(o6) }, 0);
            } else {
                o2.o12(function() { resolve(o6) }, 0);
            }
        }
    );
    
    o8.then(
        function(o14) {
            o0(o5 + o6 + ' success: ' + o14);
        },
        function(o15) {
            o0(o5 + o6 + ' failure: ' + o15);
        }
    );
    
    return o8;
}

function o16(o5, o6) {
    return o4(o5, o6, false);
}

function o17(o5, o6) {
    return o4(o5, o6, true);
}

// Copy promise and attempt to call resolve handler twice.
// Since we can only call the Promise.all resolve handlers once, we can tamper with the result value for this promise.
function o18(o8, o14, o19) {
    return Object.assign(o8, {
        then(o22, o23) {
            if (o19) {
                o22(o14);
            } else {
                o22();
            }
            return Promise.prototype.then.call(this, o22, o23);
        }
    });
}

var o26 = [
    {
        name: "Promise basic behavior",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    o0('Test #' + index + ' - Executor function called synchronously');
                    resolve('basic:success');
                }
            );
            
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise basic error behavior",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    o0('Test #' + index + ' - Executor function called synchronously');
                    reject('basic:error');
                }
            );
            
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise with multiple then handlers",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('multithen:success');
                }
            );
            
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            );
            
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #2 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #2 called with err = ' + o15);
                }
            );
            
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #3 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #3 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise with chained then handlers",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('chain:success1');
                }
            );
            
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                    
                    return new Promise(
                        function(resolve,reject) {
                            resolve('chain:success2');
                        }
                    );
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            ).then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #2 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #2 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise with a throwing executor function",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    throw 'basic:throw';
                }
            );
            
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise with a potential thenable that throws when getting the 'then' property",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('thenable.get:unused');
                }
            );
           
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                    return { get then() { throw 'thenable.get:error!'; } };
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            ).then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #2 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #2 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise with a potential thenable that throws when calling the 'then' function",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('thenable.call:unused');
                }
            );
           
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                    return { then: function() { throw 'thenable.call:error!'; } };
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            ).then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #2 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #2 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise with a success handler that throws when called",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('success.throw:unused');
                }
            );
           
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                    throw 'success.throw:error';
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            ).then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #2 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #2 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise with an error handler that throws when called",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('error.throw:unused');
                }
            );
           
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                    throw 'error.throw:error';
                }
            ).then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #2 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #2 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise with an executor function that creates a self-resolution error",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    o2.o12(
                        function() {
                            resolve(promise);
                        },
                        0
                    );
                }
            );
           
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise basic catch behavior",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('error');
                }
            );
            
            promise.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise chained catch behavior",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('error1');
                }
            );
            
            promise.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                    throw 'error2';
                }
            ).catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #2 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise then and catch interleaved",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('error1');
                }
            );
            
            promise.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                    return 'ok';
                }
            ).then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                    throw 'error2';
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            ).catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #2 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise identity function is used when no success handler is provided",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('success');
                }
            );
            
            promise.then(
                undefined,
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            ).then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #2 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise thrower function is used when no error handler is provided",
        o28: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('failure');
                }
            );
            
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                undefined
            ).then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #2 called with result = ' + o14);
                },
                undefined
            ).catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.resolve creates a fulfilled resolved promise",
        o28: function (index) {
            var promise = Promise.resolve('resolved promise result');
            
            promise.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                }
            );
        }
    },
    {
        name: "Promise.resolve called with a promise returns the same promise",
        o28: function (index) {
            var promise = Promise.resolve(42);
            var o33 = Promise.resolve(promise);
            
            if (promise !== o33) {
                o0('Test #' + index + ' - Promise.resolve returns a new promise object!');
            }
        }
    },
    {
        name: "Promise.reject creates a fulfilled rejected promise",
        o28: function (index) {
            var promise = Promise.reject('rejected promise result');
            
            promise.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.reject called with a promise returns a promise for that promise",
        o28: function (index) {
            var promise = Promise.reject(42);
            var o33 = Promise.reject(promise);
            
            if (promise === o33) {
                o0('Test #' + index + ' - Promise.reject does not return a new promise object!');
            }
        }
    },
    {
        name: "Promise.race with an object containing a non-function iterator property",
        o28: function (index) {
            var o34 = {
                [Symbol.iterator]: 123
            };
            
            var o8 = Promise.race(o34);
            o8.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.race with this argument missing the resolve function",
        o28: function (index) {
            var o38 = Promise.resolve;
            Promise.resolve = undefined;
            
            var o8 = Promise.race([Promise.reject(42)]);
            o8.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                }
            );
            
            Promise.resolve = o38;
        }
    },
    {
        name: "Promise.race with this argument resolve function returning a non-object",
        o28: function (index) {
            var o38 = Promise.resolve;
            Promise.resolve = function() { return undefined; };
            
            var o8 = Promise.race([Promise.reject(42)]);
            o8.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                }
            );
            
            Promise.resolve = o38;
        }
    },
    {
        name: "Promise.race with this argument resolve function returning an object with no then function",
        o28: function (index) {
            var o38 = Promise.resolve;
            Promise.resolve = function() { return {}; };
            
            var o8 = Promise.race([Promise.reject(42)]);
            o8.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                }
            );
            
            Promise.resolve = o38;
        }
    },
    {
        name: "Promise.race with an object containing an iterator that throws",
        o28: function (index) {
            var o39 = {
                [Symbol.iterator]: function() {
                    return {
                        next: function () { 
                            throw new o41('failure inside iterator');
                        }
                    };
                }
            };
            
            var o8 = Promise.race(o39);
            o8.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.race still returns a rejected promise if anything throws while iterating, even if resolved promises are encountered",
        o28: function (index) {
            var o39 = {
                [Symbol.iterator]: function() {
                    return {
                        o42: 0,
                        next: function () { 
                            if (this.o42 > 2)
                            {
                                throw new o41('failure inside iterator');
                            }
                            
                            this.o42++;
                            
                            return {
                                done: this.o42 == 5,
                                value: Promise.resolve('resolved promise completion #' + this.o42)
                            };
                        }
                    };
                }
            };
            
            var o8 = Promise.race(o39);
            o8.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.race fulfills with the same value as the first encountered resolved promise",
        o28: function (index) {
            var o45 = [
                new Promise(function() {}),
                Promise.resolve('first promise'),
                Promise.resolve('second promise'),
                Promise.reject('third promise')
            ];
            
            var o8 = Promise.race(o45);
            o8.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.race fulfills with the same value as the first encountered resolved promise (promises complete async)",
        o28: function (index) {
            var o45 = [
                new Promise(function() {}),
                o16('Test #' + index + ' - ', 'p1'),
                o16('Test #' + index + ' - ', 'p2'),
                o17('Test #' + index + ' - ', 'p3')
            ];
            
            var o8 = Promise.race(o45);
            o8.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.race fulfills with the same value as the first encountered rejected promise (promises complete async)",
        o28: function (index) {
            var o45 = [
                new Promise(function() {}),
                o17('Test #' + index + ' - ', 'p1'),
                o16('Test #' + index + ' - ', 'p2'),
                o16('Test #' + index + ' - ', 'p3')
            ];
            
            var o8 = Promise.race(o45);
            o8.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.race passes each element in it's argument to Promise.resolve",
        o28: function (index) {
            var o45 = [
                'first promise value',
                42,
                new o41('some error')
            ];
            
            var o8 = Promise.race(o45);
            o8.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.all with an object containing a non-function iterator property",
        o28: function (index) {
            var o34 = {
                [Symbol.iterator]: 123
            };
            
            var o8 = Promise.all(o34);
            o8.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.all with this argument missing the resolve function",
        o28: function (index) {
            var o38 = Promise.resolve;
            Promise.resolve = undefined;
            
            var o8 = Promise.all([Promise.reject(42)]);
            o8.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                }
            );
            
            Promise.resolve = o38;
        }
    },
    {
        name: "Promise.all with this argument resolve function returning a non-object",
        o28: function (index) {
            var o38 = Promise.resolve;
            Promise.resolve = function() { return undefined; };
            
            var o8 = Promise.all([Promise.reject(42)]);
            o8.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                }
            );
            
            Promise.resolve = o38;
        }
    },
    {
        name: "Promise.all with this argument resolve function returning an object with no then function",
        o28: function (index) {
            var o38 = Promise.resolve;
            Promise.resolve = function() { return {}; };
            
            var o8 = Promise.all([Promise.reject(42)]);
            o8.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                }
            );
            
            Promise.resolve = o38;
        }
    },
    {
        name: "Promise.all with an object containing an iterator that throws",
        o28: function (index) {
            var o39 = {
                [Symbol.iterator]: function() {
                    return {
                        next: function () { 
                            throw new o41('failure inside iterator');
                        }
                    };
                }
            };
            
            var o8 = Promise.all(o39);
            o8.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.all still returns a rejected promise if anything throws while iterating, even if resolved promises are encountered",
        o28: function (index) {
            var o39 = {
                [Symbol.iterator]: function() {
                    return {
                        o42: 0,
                        next: function () { 
                            if (this.o42 > 2)
                            {
                                throw new o41('failure inside iterator');
                            }
                            
                            this.o42++;
                            
                            return {
                                done: this.o42 == 5,
                                value: Promise.resolve('resolved promise completion #' + this.o42)
                            };
                        }
                    };
                }
            };
            
            var o8 = Promise.all(o39);
            o8.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.all fulfills with the same value as the first encountered rejected promise",
        o28: function (index) {
            var o45 = [
                new Promise(function() {}),
                Promise.resolve('first promise'),
                Promise.resolve('second promise'),
                Promise.reject('third promise')
            ];
            
            var o8 = Promise.all(o45);
            o8.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.all fulfills with the same value as the first encountered rejected promise (async promises)",
        o28: function (index) {
            var o45 = [
                new Promise(function() {}),
                o16('Test #' + index + ' - ', 'p1'),
                o16('Test #' + index + ' - ', 'p2'),
                o17('Test #' + index + ' - ', 'p3')
            ];
            
            var o8 = Promise.all(o45);
            o8.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.all fulfills when all promises in iterable fulfill",
        o28: function (index) {
            var o45 = [
                o16('Test #' + index + ' - ', 'p1'),
                o16('Test #' + index + ' - ', 'p2'),
                o16('Test #' + index + ' - ', 'p3')
            ];
            
            var o8 = Promise.all(o45);
            o8.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.all passes each element in the arguments to Promise.resolve",
        o28: function (index) {
            var o45 = [
                'success value 1',
                42,
                new o41('an error')
            ];
            
            var o8 = Promise.all(o45);
            o8.then(
                function(o14) {
                    o0('Test #' + index + ' - Success handler #1 called with result = ' + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.resolve called with a thenable calls then on the thenable",
        o28: function (index) {
            var o47 = {
                then: function(resolve, reject) {
                    o0('Test #' + index + ' - Promise.resolve calls thenable.then');
                    
                    Promise.resolve('nested Promise.resolve call').then(
                        function(o14) {
                            o0('Test #' + index + ' - Promise.resolve call nested within thenable.then = ' + o14);
                        }
                    );
                }
            };
            
            var promise = Promise.resolve(o47);
        }
    },
    {
        name: "Calling promise resolve function with thenable should call thenable.then",
        o28: function (index) {
            var o8 = new Promise(function(o48) {
                o48({ then: function(resolve, reject) {
                    o0('Test #' + index + ' - thenable.then resolve = ' + (typeof resolve) + ' reject = ' + (typeof reject));
                }});
            });
        }
    },
    {
        name: "Promise.all doesn't call then for rejected promises",
        o28: function(index) {
              Promise.all([Promise.reject('expected1')]).then(
                    o14 => o0(`Test #${index} - Success handler #1 called with result = ${o14}`)
                ).catch(
                    o15 => o0(`Test #${index} - Catch handler #1 called with err = ${o15}`)
                );
              Promise.all([Promise.reject('expected2'), Promise.resolve('unexpected1')]).then(
                    o14 => o0(`Test #${index} - Success handler #2 called with result = ${o14}`)
                ).catch(
                    o15 => o0(`Test #${index} - Catch handler #2 called with err = ${o15}`)
                );
              Promise.all([Promise.resolve('unexpected2'), Promise.reject('expected3')]).then(
                    o14 => o0(`Test #${index} - Success handler #3 called with result = ${o14}`)
                ).catch(
                    o15 => o0(`Test #${index} - Catch handler #3 called with err = ${o15}`)
                );
        }
    },
    {
        name: "Promise.all with iterator that returns no items",
        o28: function(index) {
            var o45 = [];
            
            var o8 = Promise.all(o45);
            o8.then(o6 => {
                o0(`Test #${index} - Success handler #1 called with result = '${o6}' (length = ${o6.length}) (isArray = ${Array.isArray(o6)})`);
            }).catch(o15 => {
                o0(`Test #${index} - Catch handler called with err = ${o15}`);
            });
        }
    },
    {
        name: "Simple tampering of Promise.all promise changes resolved result value",
        o28: function(index) {
            var o45 = [o18(Promise.resolve('success'), 'tampered', true)];
            
            Promise.all(o45).then(o14 => { 
                o0(`Test #${index} - Success handler called with result = '${o14}' (length = ${o14.length}) (isArray = ${Array.isArray(o14)})`);
            }).catch(o15 => {
                o0(`Test #${index} - Catch handler called with err = ${o15}`);
            });
        }
    },
    {
        name: "Promise.all - can't prevent remaining elements counter from reaching zero",
        o28: function (index) {
            var o45 = [o18(Promise.resolve('success'))];

            Promise.all(o45).then(o14 => { 
                o0(`Test #${index} - Success handler called with result = '${o14}' (length = ${o14.length}) (isArray = ${Array.isArray(o14)})`);
            }).catch(o15 => {
                o0(`Test #${index} - Catch handler called with err = ${o15}`);
            });
        }
    },
    {
        name: "Promise from Promise.all never resolved before arguments",
        o28: function (index) {
            var o45 = [
                Promise.resolve(0),
                o18(Promise.resolve(1)),
                Promise.resolve(2).then(o14 => { 
                    o0(`Test #${index} - Success handler #1a called with result = '${o14}' (isArray = ${Array.isArray(o14)}) (fulfillCalled = ${o52})`);
                    return 3;
                }).then(o14 => { 
                    o0(`Test #${index} - Success handler #1b called with result = '${o14}' (isArray = ${Array.isArray(o14)}) (fulfillCalled = ${o52})`);
                    return 4;
                }).catch(o15 => {
                    o0(`Test #${index} - Catch handler #1 called with err = ${o15}`);
                })
            ];

            let o52 = false;
            
            Promise.all(o45).then(o14 => {
                o52 = true;
                o0(`Test #${index} - Success handler #2 called with result = '${o14}' (length = ${o14.length}) (isArray = ${Array.isArray(o14)}) (fulfillCalled = ${o52})`);
            }).catch((o15) => {
                o0(`Test #${index} - Catch handler #2 called with err = ${o15}`);
            });
        }
    },
    {
        name: "Promise from Promise.all never resolved if rejected promise in arguments",
        o28: function (index) {
            var o45 = [
                Promise.resolve(0),
                o18(Promise.resolve(1)),
                Promise.reject(2)
            ];

            Promise.all(o45).then(o14 => {
                o0(`Test #${index} - Success handler #1 called with result = '${o14}' (length = ${o14.length}) (isArray = ${Array.isArray(o14)})`);
            }, o15 => {
                o0(`Test #${index} - Error handler #1 called with err = ${o15}`);
            }).catch(o15 => {
                o0(`Test #${index} - Catch handler #1 called with err = ${o15}`);
            });
        }
    },
    {
        name: "Promise executor resolves with the first call resolve function",
        o28: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                resolve('success');
                resolve('failure');
            });
            o8.then(
                (o48) => { o0(`Test #${index} - Success handler #1 called with res = '${o48}'`); },
                (o15) => { o0(`Test #${index} - Error handler #1 called with err = '${o15}'`); }
            );
        }
    },
    {
        name: "Promise executor rejects with the first call reject function",
        o28: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                reject('success');
                reject('failure');
            });
            o8.then(
                (o48) => { o0(`Test #${index} - Success handler #1 called with res = '${o48}'`); },
                (o15) => { o0(`Test #${index} - Error handler #1 called with err = '${o15}'`); }
            );
        }
    },
    {
        name: "Promise executor resolves/rejects with the first call to either function",
        o28: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                resolve('success');
                reject('failure');
            });
            o8.then(
                (o48) => { o0(`Test #${index} - Success handler #1 called with res = '${o48}'`); },
                (o15) => { o0(`Test #${index} - Error handler #1 called with err = '${o15}'`); }
            );
        }
    },
    {
        name: "Promise executor rejects/resolves with the first call to either function",
        o28: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                reject('success');
                resolve('failure');
            });
            o8.then(
                (o48) => { o0(`Test #${index} - Success handler #1 called with res = '${o48}'`); },
                (o15) => { o0(`Test #${index} - Error handler #1 called with err = '${o15}'`); }
            );
        }
    },
    {
        name: "Promise executor rejects/resolves/rejects with the first call to either function",
        o28: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                reject('success');
                resolve('failure');
                reject('failure');
            });
            o8.then(
                (o48) => { o0(`Test #${index} - Success handler #1 called with res = '${o48}'`); },
                (o15) => { o0(`Test #${index} - Error handler #1 called with err = '${o15}'`); }
            );
        }
    },
    {
        name: "Promise executor resolves/rejects/resolves with the first call to either function",
        o28: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                resolve('success');
                reject('failure');
                resolve('failure');
            });
            o8.then(
                (o48) => { o0(`Test #${index} - Success handler #1 called with res = '${o48}'`); },
                (o15) => { o0(`Test #${index} - Error handler #1 called with err = '${o15}'`); }
            );
        }
    },
];

var index = 1;

function o53(test) {
    o0('Executing test #' + index + ' - ' + test.name);
    
    try {
        test.o28(index);
    } catch(o55) {
        o0('Caught exception: ' + o55);
    }
    
    index++;
}

o26.forEach(o53);
    
o0('\r\nCompletion Results:');
