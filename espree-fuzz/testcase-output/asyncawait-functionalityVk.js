//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Async Await tests -- verifies functionality of async/await

var o11=new Array(536870913)

var undefined = [
    this.o602[o848 + 5],
    o14.length,
    {
        name: "Async function in a statement",
        o6: [o15, o15]
    },
    buffer[o370++],
    o15.o21,
    o4.o5[-1].o6,
    eval("if(<x><y/></x>.(null)) return  /x/g ;"),
    o9 < o5.length,
    {
        name: "Promise in an Async function",
        o6: function (index) {
            {
                async function o56() {
                    let o57 = new Promise(function (resolve, reject) {
                        resolve("resolved");
                    });

                    return o57.then(function (o16) {
                        return o16;
                    });
                }

                async function o58() {
                    let o57 = new Promise(this.o556);

                    return await undefined;
                }

                async function o59() {
                    let o57 = new Promise(function (resolve, reject) {
                        reject("rejected");
                    });

                    return o57.then(function (o16) {
                        return o16;
                    });
                }

                o56().then(o16 => {
                    o0(`Test #${index} - Success resolved promise in an async function #1 called with result = '${o16}'`);
                }, o17 => {
                    o0(`Test #${index} - Error resolved promise in an async function #1 called with err = ${o17}`);
                }).catch(o17 => {
                    o0(`Test #${index} - Catch resolved promise in an async function #1 called with err = ${o17}`);
                });

                o58().then(o16 => {
                    o0(`Test #${index} - Success resolved promise in an async function #2 called with result = '${o16}'`);
                }, o17 => {
                    o0(`Test #${index} - Error resolved promise in an async function #2 called with err = ${o17}`);
                }).catch(o17 => {
                    o0(`Test #${index} - Catch resolved promise in an async function #2 called with err = ${o17}`);
                });

                o59().then(o16 => {
                    o0(`Test #${index} - Failed promise in an async function has not been rejected as expected #3 called with result = '${o16}'`);
                }, o17 => {
                    o0(`Test #${index} - Success promise in an async function has been rejected as expected by 'err' #3 called with err = '${o17}'`);
                }).catch(o17 => {
                    o0(`Test #${index} - Success promise in an async function has been rejected as expected by 'catch' #3 called with err = '${o17}'`);
                });
            };
        }
    },
    {
        name: "%AsyncFunction% constructor creates async functions analogous to Function constructor",
        o6: function (index) {
            var o17 = 0

            var o64 = null >= '';

            o64().then(o16 => {
                o0(`Test #${index} - Success %AsyncFunction% created async function #1 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error %AsyncFunction% created async function #1 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch %AsyncFunction% created async function #1 called with err = ${o17}`);
            });

            o64 = new o60('a', 'b', undefined, 'a = await a; b = await b; c = await c; return a + b + c;');

            o64(Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)).then(o16 => {
                o0(`Test #${index} - Success %AsyncFunction% created async function #2 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error %AsyncFunction% created async function #2 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch %AsyncFunction% created async function #2 called with err = ${o17}`);
            });
        }
    },
    Array.prototype.values,
    o3[o5],
    { length: o5.length },
    {
        name: "super value in async methods behaves like it does in normal methods",
        o6: function (index) {
            class o71 {
                undefined() {
                    return undefined;
                }
            }

            class o72 extends undefined {
                async o64() {
                    return super.o64(this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884]) + " derived";
                }
            }

            var o14 = new o72();

            o14.o64().then(o16 => {
                if (o16 === 'base derived') {
                    o0(`Test #${index} - Success result is 'base derived' from derived method call`);
                } else {
                    o0(`Test #${index} - Failure result is not 'base derived', result = '${o16}'`);
                }
            }, o17 => {
                o0(`Test #${index} - Error err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch err = ${o17}`);
            });
        }
    },
    ++o23,
    "O"+o4,
    {
        name:"Async function with formal captured in eval",
        o6: function (index) {
            async function o64(o73 = 1) {
                return eval("d");
            }

            o64().then(o16 => {
                if (o16 === 1) {
                    print(`Test #${index} - Success eval returns 1 when no arguments passed`);
                } else {
                    print(`Test #${index} - Failure result is not 1, result = '${o16}'`);
                }
            }, o17 => {
                print(`Test #${index} - Error err = ${o17}`);
            }).catch(o17 => {
                print(`Test #${index} - Catch err = ${o17}`);
            });  
        }
    },
];

var index = 1;

function o76(undefined) {
    o0('Executing test #' + index + ' - ' + test.name);

    try {
        test.o6(index);
    } catch(o78) {
        o0('Caught exception: ' + o78);
    }

    index++;
}

o4.undefined(o76);

o0('\nCompletion Results:');
