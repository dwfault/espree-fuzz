//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Promise async tests -- verifies functionality of promise async operations 

var o8 = o7.call(Array, o10)

function e(o5, o6, o7) {
    try {
o7 = o7 || false;
}catch(e){}
    var o8 = new Promise(
        function(resolve,reject) {
            try {
if (o7) {
                try {
o2.o9(function() { try {
reject(o6)
}catch(e){} }, 0);
}catch(e){}
            } else {
                try {
o2.o9(function() { try {
resolve(o6)
}catch(e){} }, 0);
}catch(e){}
            }
}catch(e){}
        }
    );
    
    try {
o8.then(
        function(o10) {
            try {
o0(o5 + o6 + ' success: ' + o10);
}catch(e){}
        },
        function(o11) {
            try {
o0(o5 + o6 + ' failure: ' + o11);
}catch(e){}
        }
    );
}catch(e){}
    
    try {
return o8;
}catch(e){}
}

function o12(o5, o6) {
    try {
return o4(o5, o6, false);
}catch(e){}
}

function o13(o5, o6) {
    try {
return o4(o5, o6, true);
}catch(e){}
}

// Copy promise and attempt to call resolve handler twice.
// Since we can only call the Promise.all resolve handlers once, we can tamper with the result value for this promise.
var next = ((o421.o155[0xFF6A] + 1) & 0x3F)

var o18 = [
    {
        name: "Promise basic behavior",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
o0('Test #' + index + ' - Executor function called synchronously');
}catch(e){}
                    try {
resolve('basic:success');
}catch(e){}
                }
            );
            
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise basic error behavior",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
o0('Test #' + index + ' - Executor function called synchronously');
}catch(e){}
                    try {
reject('basic:error');
}catch(e){}
                }
            );
            
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise with multiple then handlers",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
resolve('multithen:success');
}catch(e){}
                }
            );
            
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
            
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
            
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #3 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #3 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise with chained then handlers",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
resolve('chain:success1');
}catch(e){}
                }
            );
            
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                    
                    try {
return new Promise(
                        function(resolve,reject) {
                            try {
resolve('chain:success2');
}catch(e){}
                        }
                    );
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            ).then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise with a throwing executor function",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
throw 'basic:throw';
}catch(e){}
                }
            );
            
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise with a potential thenable that throws when getting the 'then' property",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
resolve('thenable.get:unused');
}catch(e){}
                }
            );
           
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                    try {
return { get then() { try {
throw 'thenable.get:error!';
}catch(e){} } };
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            ).then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise with a potential thenable that throws when calling the 'then' function",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
resolve('thenable.call:unused');
}catch(e){}
                }
            );
           
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                    try {
return { then: function() { try {
throw 'thenable.call:error!';
}catch(e){} } };
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            ).then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise with a success handler that throws when called",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
resolve('success.throw:unused');
}catch(e){}
                }
            );
           
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                    try {
throw 'success.throw:error';
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            ).then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise with an error handler that throws when called",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
reject('error.throw:unused');
}catch(e){}
                }
            );
           
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                    try {
throw 'error.throw:error';
}catch(e){}
                }
            ).then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise with an executor function that creates a self-resolution error",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
o2.o9(
                        function() {
                            try {
resolve(promise);
}catch(e){}
                        },
                        0
                    );
}catch(e){}
                }
            );
           
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise basic catch behavior",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
reject('error');
}catch(e){}
                }
            );
            
            try {
promise.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise chained catch behavior",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
reject('error1');
}catch(e){}
                }
            );
            
            try {
promise.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                    try {
throw 'error2';
}catch(e){}
                }
            ).catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #2 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise then and catch interleaved",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
reject('error1');
}catch(e){}
                }
            );
            
            try {
promise.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                    try {
return 'ok';
}catch(e){}
                }
            ).then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                    try {
throw 'error2';
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            ).catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #2 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise identity function is used when no success handler is provided",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
resolve('success');
}catch(e){}
                }
            );
            
            try {
promise.then(
                undefined,
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            ).then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise thrower function is used when no error handler is provided",
        o19: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
reject('failure');
}catch(e){}
                }
            );
            
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                undefined
            ).then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
}catch(e){}
                },
                undefined
            ).catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise.resolve creates a fulfilled resolved promise",
        o19: function (index) {
            var promise = Promise.resolve('resolved promise result');
            
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise.resolve called with a promise returns the same promise",
        o19: function (index) {
            var promise = Promise.resolve(42);
            var o20 = Promise.resolve(promise);
            
            try {
if (promise !== o20) {
                try {
o0('Test #' + index + ' - Promise.resolve returns a new promise object!');
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "Promise.reject creates a fulfilled rejected promise",
        o19: function (index) {
            var promise = Promise.reject('rejected promise result');
            
            try {
promise.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise.reject called with a promise returns a promise for that promise",
        o19: function (index) {
            var promise = Promise.reject(42);
            var o20 = Promise.reject(promise);
            
            try {
if (promise === o20) {
                try {
o0('Test #' + index + ' - Promise.reject does not return a new promise object!');
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "Promise.race with an object containing a non-function iterator property",
        o19: function (index) {
            var o21 = {
                [Symbol.iterator]: 123
            };
            
            var o8 = Promise.race(o21);
            try {
o8.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise.race with this argument missing the resolve function",
        o19: function (index) {
            var o22 = Promise.resolve;
            try {
Promise.resolve = undefined;
}catch(e){}
            
            var o8 = Promise.race([Promise.reject(42)]);
            try {
o8.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
            
            try {
Promise.resolve = o22;
}catch(e){}
        }
    },
    {
        name: "Promise.race with this argument resolve function returning a non-object",
        o19: function (index) {
            var o22 = Promise.resolve;
            try {
Promise.resolve = function() { try {
return undefined;
}catch(e){} };
}catch(e){}
            
            var o8 = Promise.race([Promise.reject(42)]);
            try {
o8.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
            
            try {
Promise.resolve = o22;
}catch(e){}
        }
    },
    {
        name: "Promise.race with this argument resolve function returning an object with no then function",
        o19: function (index) {
            var o22 = Promise.resolve;
            try {
Promise.resolve = function() { try {
return {};
}catch(e){} };
}catch(e){}
            
            var o8 = Promise.race([Promise.reject(42)]);
            try {
o8.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
            
            try {
Promise.resolve = o22;
}catch(e){}
        }
    },
    {
        name: "Promise.race with an object containing an iterator that throws",
        o19: function (index) {
            var o23 = {
                [Symbol.iterator]: function() {
                    try {
return {
                        next: function () { 
                            try {
throw new o24('failure inside iterator');
}catch(e){}
                        }
                    };
}catch(e){}
                }
            };
            
            var o8 = Promise.race(o23);
            try {
o8.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise.race still returns a rejected promise if anything throws while iterating, even if resolved promises are encountered",
        o19: function (index) {
            var o23 = {
                [Symbol.iterator]: function() {
                    try {
return {
                        o25: 0,
                        next: function () { 
                            try {
if (this.o25 > 2)
                            {
                                try {
throw new o24('failure inside iterator');
}catch(e){}
                            }
}catch(e){}
                            
                            try {
this.o25++;
}catch(e){}
                            
                            try {
return {
                                done: this.o25 == 5,
                                value: Promise.resolve('resolved promise completion #' + this.o25)
                            };
}catch(e){}
                        }
                    };
}catch(e){}
                }
            };
            
            var o8 = Promise.race(o23);
            try {
o8.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
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
            try {
o8.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
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
            try {
o8.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
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
            try {
o8.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
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
            try {
o8.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise.all with an object containing a non-function iterator property",
        o19: function (index) {
            var o21 = {
                [Symbol.iterator]: 123
            };
            
            var o8 = Promise.all(o21);
            try {
o8.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise.all with this argument missing the resolve function",
        o19: function (index) {
            var o22 = Promise.resolve;
            try {
Promise.resolve = undefined;
}catch(e){}
            
            var o8 = Promise.all([Promise.reject(42)]);
            try {
o8.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
            
            try {
Promise.resolve = o22;
}catch(e){}
        }
    },
    {
        name: "Promise.all with this argument resolve function returning a non-object",
        o19: function (index) {
            var o22 = Promise.resolve;
            try {
Promise.resolve = function() { try {
return undefined;
}catch(e){} };
}catch(e){}
            
            var o8 = Promise.all([Promise.reject(42)]);
            try {
o8.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
            
            try {
Promise.resolve = o22;
}catch(e){}
        }
    },
    {
        name: "Promise.all with this argument resolve function returning an object with no then function",
        o19: function (index) {
            var o22 = Promise.resolve;
            try {
Promise.resolve = function() { try {
return {};
}catch(e){} };
}catch(e){}
            
            var o8 = Promise.all([Promise.reject(42)]);
            try {
o8.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
            
            try {
Promise.resolve = o22;
}catch(e){}
        }
    },
    {
        name: "Promise.all with an object containing an iterator that throws",
        o19: function (index) {
            var o23 = {
                [Symbol.iterator]: function() {
                    try {
return {
                        next: function () { 
                            try {
throw new o24('failure inside iterator');
}catch(e){}
                        }
                    };
}catch(e){}
                }
            };
            
            var o8 = Promise.all(o23);
            try {
o8.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise.all still returns a rejected promise if anything throws while iterating, even if resolved promises are encountered",
        o19: function (index) {
            var o23 = {
                [Symbol.iterator]: function() {
                    try {
return {
                        o25: 0,
                        next: function () { 
                            try {
if (this.o25 > 2)
                            {
                                try {
throw new o24('failure inside iterator');
}catch(e){}
                            }
}catch(e){}
                            
                            try {
this.o25++;
}catch(e){}
                            
                            try {
return {
                                done: this.o25 == 5,
                                value: Promise.resolve('resolved promise completion #' + this.o25)
                            };
}catch(e){}
                        }
                    };
}catch(e){}
                }
            };
            
            var o8 = Promise.all(o23);
            try {
o8.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
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
            try {
o8.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
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
            try {
o8.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
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
            try {
o8.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
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
            try {
o8.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    },
    {
        name: "Promise.resolve called with a thenable calls then on the thenable",
        o19: function (index) {
            var o27 = {
                then: function(resolve, reject) {
                    try {
o0('Test #' + index + ' - Promise.resolve calls thenable.then');
}catch(e){}
                    
                    try {
Promise.resolve('nested Promise.resolve call').then(
                        function(o10) {
                            try {
o0('Test #' + index + ' - Promise.resolve call nested within thenable.then = ' + o10);
}catch(e){}
                        }
                    );
}catch(e){}
                }
            };
            
            var promise = Promise.resolve(o27);
        }
    },
    {
        name: "Calling promise resolve function with thenable should call thenable.then",
        o19: function (index) {
            var o8 = new Promise(function(o28) {
                try {
o28({ then: function(resolve, reject) {
                    try {
o0('Test #' + index + ' - thenable.then resolve = ' + (typeof resolve) + ' reject = ' + (typeof reject));
}catch(e){}
                }});
}catch(e){}
            });
        }
    },
    {
        name: "Promise.all doesn't call then for rejected promises",
        o19: function(index) {
              try {
Promise.all([Promise.reject('expected1')]).then(
                    o10 => o0(`Test #${index} - Success handler #1 called with result = ${o10}`)
                ).catch(
                    o11 => o0(`Test #${index} - Catch handler #1 called with err = ${o11}`)
                );
}catch(e){}
              try {
Promise.all([Promise.reject('expected2'), Promise.resolve('unexpected1')]).then(
                    o10 => o0(`Test #${index} - Success handler #2 called with result = ${o10}`)
                ).catch(
                    o11 => o0(`Test #${index} - Catch handler #2 called with err = ${o11}`)
                );
}catch(e){}
              try {
Promise.all([Promise.resolve('unexpected2'), Promise.reject('expected3')]).then(
                    o10 => o0(`Test #${index} - Success handler #3 called with result = ${o10}`)
                ).catch(
                    o11 => o0(`Test #${index} - Catch handler #3 called with err = ${o11}`)
                );
}catch(e){}
        }
    },
    {
        name: "Promise.all with iterator that returns no items",
        o19: function(index) {
            var o26 = [];
            
            var o8 = Promise.all(o26);
            try {
o8.then(o6 => {
                try {
o0(`Test #${index} - Success handler #1 called with result = '${o6}' (length = ${o6.length}) (isArray = ${Array.isArray(o6)})`);
}catch(e){}
            }).catch(o11 => {
                try {
o0(`Test #${index} - Catch handler called with err = ${o11}`);
}catch(e){}
            });
}catch(e){}
        }
    },
    {
        name: "Simple tampering of Promise.all promise changes resolved result value",
        o19: function(index) {
            var o26 = [o14(Promise.resolve('success'), 'tampered', true)];
            
            try {
Promise.all(o26).then(o10 => { 
                try {
o0(`Test #${index} - Success handler called with result = '${o10}' (length = ${o10.length}) (isArray = ${Array.isArray(o10)})`);
}catch(e){}
            }).catch(o11 => {
                try {
o0(`Test #${index} - Catch handler called with err = ${o11}`);
}catch(e){}
            });
}catch(e){}
        }
    },
    {
        name: "Promise.all - can't prevent remaining elements counter from reaching zero",
        o19: function (index) {
            var o26 = [o14(Promise.resolve('success'))];

            try {
Promise.all(o26).then(o10 => { 
                try {
o0(`Test #${index} - Success handler called with result = '${o10}' (length = ${o10.length}) (isArray = ${Array.isArray(o10)})`);
}catch(e){}
            }).catch(o11 => {
                try {
o0(`Test #${index} - Catch handler called with err = ${o11}`);
}catch(e){}
            });
}catch(e){}
        }
    },
    {
        name: "Promise from Promise.all never resolved before arguments",
        o19: function (index) {
            var o26 = [
                Promise.resolve(0),
                o14(Promise.resolve(1)),
                Promise.resolve(2).then(o10 => { 
                    try {
o0(`Test #${index} - Success handler #1a called with result = '${o10}' (isArray = ${Array.isArray(o10)}) (fulfillCalled = ${o29})`);
}catch(e){}
                    try {
return 3;
}catch(e){}
                }).then(o10 => { 
                    try {
o0(`Test #${index} - Success handler #1b called with result = '${o10}' (isArray = ${Array.isArray(o10)}) (fulfillCalled = ${o29})`);
}catch(e){}
                    try {
return 4;
}catch(e){}
                }).catch(o11 => {
                    try {
o0(`Test #${index} - Catch handler #1 called with err = ${o11}`);
}catch(e){}
                })
            ];

            let o29 = false;
            
            try {
Promise.all(o26).then(o10 => {
                try {
o29 = true;
}catch(e){}
                try {
o0(`Test #${index} - Success handler #2 called with result = '${o10}' (length = ${o10.length}) (isArray = ${Array.isArray(o10)}) (fulfillCalled = ${o29})`);
}catch(e){}
            }).catch((o11) => {
                try {
o0(`Test #${index} - Catch handler #2 called with err = ${o11}`);
}catch(e){}
            });
}catch(e){}
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

            try {
Promise.all(o26).then(o10 => {
                try {
o0(`Test #${index} - Success handler #1 called with result = '${o10}' (length = ${o10.length}) (isArray = ${Array.isArray(o10)})`);
}catch(e){}
            }, o11 => {
                try {
o0(`Test #${index} - Error handler #1 called with err = ${o11}`);
}catch(e){}
            }).catch(o11 => {
                try {
o0(`Test #${index} - Catch handler #1 called with err = ${o11}`);
}catch(e){}
            });
}catch(e){}
        }
    },
    {
        name: "Promise executor resolves with the first call resolve function",
        o19: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                try {
resolve('success');
}catch(e){}
                try {
resolve('failure');
}catch(e){}
            });
            try {
o8.then(
                (o28) => { try {
o0(`Test #${index} - Success handler #1 called with res = '${o28}'`);
}catch(e){} },
                (o11) => { try {
o0(`Test #${index} - Error handler #1 called with err = '${o11}'`);
}catch(e){} }
            );
}catch(e){}
        }
    },
    {
        name: "Promise executor rejects with the first call reject function",
        o19: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                try {
reject('success');
}catch(e){}
                try {
reject('failure');
}catch(e){}
            });
            try {
o8.then(
                (o28) => { try {
o0(`Test #${index} - Success handler #1 called with res = '${o28}'`);
}catch(e){} },
                (o11) => { try {
o0(`Test #${index} - Error handler #1 called with err = '${o11}'`);
}catch(e){} }
            );
}catch(e){}
        }
    },
    {
        name: "Promise executor resolves/rejects with the first call to either function",
        o19: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                try {
resolve('success');
}catch(e){}
                try {
reject('failure');
}catch(e){}
            });
            try {
o8.then(
                (o28) => { try {
o0(`Test #${index} - Success handler #1 called with res = '${o28}'`);
}catch(e){} },
                (o11) => { try {
o0(`Test #${index} - Error handler #1 called with err = '${o11}'`);
}catch(e){} }
            );
}catch(e){}
        }
    },
    {
        name: "Promise executor rejects/resolves with the first call to either function",
        o19: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                try {
reject('success');
}catch(e){}
                try {
resolve('failure');
}catch(e){}
            });
            try {
o8.then(
                (o28) => { try {
o0(`Test #${index} - Success handler #1 called with res = '${o28}'`);
}catch(e){} },
                (o11) => { try {
o0(`Test #${index} - Error handler #1 called with err = '${o11}'`);
}catch(e){} }
            );
}catch(e){}
        }
    },
    {
        name: "Promise executor rejects/resolves/rejects with the first call to either function",
        o19: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                try {
reject('success');
}catch(e){}
                try {
resolve('failure');
}catch(e){}
                try {
reject('failure');
}catch(e){}
            });
            try {
o8.then(
                (o28) => { try {
o0(`Test #${index} - Success handler #1 called with res = '${o28}'`);
}catch(e){} },
                (o11) => { try {
o0(`Test #${index} - Error handler #1 called with err = '${o11}'`);
}catch(e){} }
            );
}catch(e){}
        }
    },
    {
        name: "Promise executor resolves/rejects/resolves with the first call to either function",
        o19: function (index) {
            var o8 = new Promise(function(resolve,reject) {
                try {
resolve('success');
}catch(e){}
                try {
reject('failure');
}catch(e){}
                try {
resolve('failure');
}catch(e){}
            });
            try {
o8.then(
                (o28) => { try {
o0(`Test #${index} - Success handler #1 called with res = '${o28}'`);
}catch(e){} },
                (o11) => { try {
o0(`Test #${index} - Error handler #1 called with err = '${o11}'`);
}catch(e){} }
            );
}catch(e){}
        }
    },
];

var index = 1;

function o30(test) {
    try {
o0('Executing test #' + index + ' - ' + test.name);
}catch(e){}
    
    try {
try {
        try {
test.o19(index);
}catch(e){}
    } catch(o31) {
        try {
o0('Caught exception: ' + o31);
}catch(e){}
    }
}catch(e){}
    
    try {
index++;
}catch(e){}
}

try {
o18.forEach(o30);
}catch(e){}
    
try {
o0('\r\nCompletion Results:');
}catch(e){}
