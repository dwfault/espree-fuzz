//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Async Await tests -- verifies functionality of async/await

function o0(o1) {
    o2.o3(o1);
}

var o4 = [
    {
        name: "Async keyword with a lambda expressions",
        o6: function (index) {
            var o8 = 12;
            var o9 = 14;
            var o10 = async() => o8 < o9;
            var o11 = async(o12, o13, o14) => o12 + o13 + o14;

            o10().then(o16 => {
                o0(`Test #${index} - Success lambda expression with no argument called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error lambda expression with no argument called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch lambda expression with no argument called with err = ${o17}`);
            });

            o11(10, 20, 30).then(o16 => {
                o0(`Test #${index} - Success lambda expression with several arguments called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error lambda expression with several arguments called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch lambda expression with several arguments called with err = ${o17}`);
            });
        }
    },
    {
        name: "Async keyword with a lambda expressions and local variable captured and shadowed",
        o6: function (index) {
            var o8 = 12;
            var o19 = async o8 => o8;
            var o20 = async(o8) => o8;

            o19(o8).then(o16 => {
                o0(`Test #${index} - Success lambda expression with single argument and no paren called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error lambda expression with single argument and no paren called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch lambda expression with single argument and no paren called with err = ${o17}`);
            });

            o20(o8).then(o16 => {
                o0(`Test #${index} - Success lambda expression with a single argument a called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error lambda expression with a single argument called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch lambda expression with a single argument called with err = ${o17}`);
            });
        }
    },
    {
        name: "Async function in a statement",
        o6: function (index) {
            {
                var o21 = function o22(o8, o9) { return o8 + o9; }
                var o23 = async function (o8, o9) { return o8 + o9; }
                async function o22(o8, o9) { return o8 - o9; }

                var o16 = o21(10, 20);
                o0(`Test #${index} - Success function #1 called with result = '${o16}'`);

                o23(10, 20).then(o16 => {
                    o0(`Test #${index} - Success function #2 called with result = '${o16}'`);
                }, o17 => {
                    o0(`Test #${index} - Error function #2 called with err = ${o17}`);
                }).catch(o17 => {
                    o0(`Test #${index} - Catch function #2 called with err = ${o17}`);
                });

                o22(10, 20).then(o16 => {
                    o0(`Test #${index} - Success function #3 called with result = '${o16}'`);
                }, o17 => {
                    o0(`Test #${index} - Error function #3 called with err = ${o17}`);
                }).catch(o17 => {
                    o0(`Test #${index} - Catch function #3 called with err = ${o17}`);
                });
            }
            {
                async function o22() { return 12; }

                o22().then(o16 => {
                   o0(`Test #${index} - Success function #4 called with result = '${o16}'`);
                }, o17 => {
                    o0(`Test #${index} - Error function #4 called with err = ${o17}`);
                }).catch(o17 => {
                    o0(`Test #${index} - Catch function #4 called with err = ${o17}`);
                });
            }
            {
                function o22() { return 12; }

                var o16 = o21(10, 20);
                o0(`Test #${index} - Success function #5 called with result = '${o16}'`);
            }
        }
    },
    {
        name: "Async function in an object",
        o6: function (index) {
            var o24 = {
                async o22() { return 12; }
            };

            var o25 = {
                o22() { return 12; }
            };

            var o26 = {
                async "a"() { return 12; },
                async 0() { return 12; },
                async 3.14() { return 12; },
                async o27() { return 12; },
            };

            o24.o22().then(o16 => {
                o0(`Test #${index} - Success function in a object #1 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error function in a object #1 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch function in a object #1 called with err = ${o17}`);
            });

            var o16 = o25.o22();
            o0(`Test #${index} - Success function in a object #2 called with result = '${o16}'`);

            o26.o12().then(o16 => {
                o0(`Test #${index} - Success function in a object #3 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error function in a object #3 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch function in a object #3 called with err = ${o17}`);
            });

            o26['0']().then(o16 => {
                o0(`Test #${index} - Success function in a object #4 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error function in a object #4 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch function in a object #4 called with err = ${o17}`);
            });

            o26['3.14']().then(o16 => {
                o0(`Test #${index} - Success function in a object #5 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error function in a object #5 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch function in a object #5 called with err = ${o17}`);
            });

            o26.o27().then(o16 => {
                o0(`Test #${index} - Success function in a object #6 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error function in a object #6 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch function in a object #6 called with err = ${o17}`);
            });
        }
    },
    {
        name: "Async classes",
        o6: function (index) {
            class o28 {
                async o29(o12) { return o12; }
                async o22(o12) { return o12; }
                async "a"() { return 12; }
                async 0() { return 12; }
                async 3.14() { return 12; }
                async o27() { return 12; }
                static async o30(o12) { return o12; }
            }

            class o31 {
                o22(o12) { return o12; }
            }

            class o32 {
                static o22(o12) { return o12; }
            }

            var o8 = "foo";
            class o33 {
                async [o8](o12) { return o12; }
            }

            var o34 = new o28();
            var o35 = new o31();
            var o36 = new o33();

            o34.o29(10).then(o16 => {
                o0(`Test #${index} - Success async in a class #1 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error async in a class #1 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch async in a class #1 called with err = ${o17}`);
            });

            o34.o22(10).then(o16 => {
                o0(`Test #${index} - Success async in a class #2 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error async in a class #2 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch async in a class #2 called with err = ${o17}`);
            });

            o34.o12().then(o16 => {
                o0(`Test #${index} - Success async in a class #3 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error async in a class #3 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch async in a class #3 called with err = ${o17}`);
            });

            o34['0']().then(o16 => {
                o0(`Test #${index} - Success async in a class #4 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error async in a class #4 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch async in a class #4 called with err = ${o17}`);
            });

            o34['3.14']().then(o16 => {
                o0(`Test #${index} - Success async in a class #5 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error async in a class #5 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch async in a class #5 called with err = ${o17}`);
            });

            o34.o27().then(o16 => {
                o0(`Test #${index} - Success async in a class #6 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error async in a class #6 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch async in a class #6 called with err = ${o17}`);
            });

            o28.o30(10).then(o16 => {
                o0(`Test #${index} - Success async in a class #7 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error async in a class #7 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch async in a class #7 called with err = ${o17}`);
            });

            var o16 = o35.o22(10);
            o0(`Test #${index} - Success async in a class #8 called with result = '${o16}'`);

            var o16 = o32.o22(10);
            o0(`Test #${index} - Success async in a class #9 called with result = '${o16}'`);

            o36.o37(10).then(o16 => {
                o0(`Test #${index} - Success async in a class #10 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error async in a class #10 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch async in a class #10 called with err = ${o17}`);
            });
        }
    },
    {
        name: "Await in an async function",
        o6: function (index) {
            async function o29(o38, o39) {
                o38 = o38 * o39;
                if (o38 > 0)
                     o38 = await o29(o38, -1);
                return o38;
            }

            function o40(o8) {
                return o8;
            }

            async function o41(o8) {
                return await(o8);
            }

            function o42() {
                return new Promise(function (resolve, reject) {
                    reject(Error('My Error'));
                });
            }

            async function o47() {
                return await o42();
            }

            async function o48() {
                throw 32;
            }

            async function o49() {
                return await o48();
            }

            o29(2, 2).then(o16 => {
                o0(`Test #${index} - Success await in an async function #1 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error await in an async function #1 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch await in an async function #1 called with err = ${o17}`);
            });

            o41(2).then(o16 => {
                o0(`Test #${index} - Success await in an async function #2 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error await in an async function #2 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch await in an async function #2 called with err = ${o17}`);
            });

            o47(2).then(o16 => {
                o0(`Test #${index} - Failed await in an async function doesn't catch a rejected Promise. Result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Success await in an async function catch a rejected Promise in 'err'. Error = '${o17}'`);
            }).catch(o17 => {
                o0(`Test #${index} - Success await in an async function catch a rejected Promise in 'catch'. Error = '${o17}'`);
            });

            o49(2).then(o16 => {
                o0(`Test #${index} - Failed await in an async function doesn't catch an error. Result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Success await in an async function catch an error in 'err'. Error = '${o17}'`);
            }).catch(o17 => {
                o0(`Test #${index} - Success await in an async function catch an error in 'catch'. Error = '${o17}'`);
            });
        }
    },
    {
        name: "Await keyword with a lambda expressions",
        o6: function (index) {
            {
                async function o29(o8, o9, o50) {
                    var o51 = async(o12, o13, o14) => o12 * o13 * o14; 
                    var o52 = await o51(o8, o9, o50);
                    return o52;
                }

                o29(5, 5, 5).then(o16 => {
                    o0(`Test #${index} - Success await keyword with a lambda expressions #1 called with result = '${o16}'`);
                }, o17 => {
                    o0(`Test #${index} - Error await keyword with a lambda expressions #1 called with err = ${o17}`);
                }).catch(o17 => {
                    o0(`Test #${index} - Catch await keyword with a lambda expressions #1 called with err = ${o17}`);
                });
            };
            {
                async function o40(o53, o8, o9, o50) {
                    return await o53(o8, o9, o50);
                }

                o40(async(o12, o13, o14) => o12 + o13 + o14, 10, 20, 30).then(o16 => {
                    o0(`Test #${index} - Success await keyword with a lambda expressions #1 called with result = '${o16}'`);
                }, o17 => {
                    o0(`Test #${index} - Error await keyword with a lambda expressions #1 called with err = ${o17}`);
                }).catch(o17 => {
                    o0(`Test #${index} - Catch await keyword with a lambda expressions #1 called with err = ${o17}`);
                });
            };
        }
    },
    {
        name: "Async function with default arguments's value",
        o6: function (index) {
            {
                function o54() {
                    throw "expected error"
                }

                async function o29(o55 = o54()) {
                    return true;
                }

                async function o41(o55 = false) {
                    return true;
                }

                o29(true).then(o16 => {
                    o0(`Test #${index} - Success async function with default arguments's value overwritten #1 called with result = '${o16}'`);
                }, o17 => {
                    o0(`Test #${index} - Error async function with default arguments's value overwritten #1 called with err = ${o17}`);
                }).catch(o17 => {
                    o0(`Test #${index} - Catch async function with default arguments's value overwritten #1 called with err = ${o17}`);
                });

                o29().then(o16 => {
                    o0(`Test #${index} - Failed async function with default arguments's value has not been rejected as expected #2 called with result = '${o16}'`);
                }, o17 => {
                    o0(`Test #${index} - Success async function with default arguments's value has been rejected as expected by 'err' #2 called with err = '${o17}'`);
                }).catch(o17 => {
                    o0(`Test #${index} - Success async function with default arguments's value has been rejected as expected by 'catch' #2 called with err = '${o17}'`);
                });

                o41().then(o16 => {
                    o0(`Test #${index} - Success async function with default arguments's value #3 called with result = '${o16}'`);
                }, o17 => {
                    o0(`Test #${index} - Error async function with default arguments's value #3 called with err = ${o17}`);
                }).catch(o17 => {
                    o0(`Test #${index} - Catch async function with default arguments's value #3 called with err = ${o17}`);
                });
            };
        }
    },
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
                    let o57 = new Promise(function (resolve, reject) {
                        resolve("resolved");
                    });

                    return await o57;
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
            var o60 = Object.getPrototypeOf(async function () { }).constructor;

            var o64 = new o60('return await Promise.resolve(0);');

            o64().then(o16 => {
                o0(`Test #${index} - Success %AsyncFunction% created async function #1 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error %AsyncFunction% created async function #1 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch %AsyncFunction% created async function #1 called with err = ${o17}`);
            });

            o64 = new o60('a', 'b', 'c', 'a = await a; b = await b; c = await c; return a + b + c;');

            o64(Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)).then(o16 => {
                o0(`Test #${index} - Success %AsyncFunction% created async function #2 called with result = '${o16}'`);
            }, o17 => {
                o0(`Test #${index} - Error %AsyncFunction% created async function #2 called with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch %AsyncFunction% created async function #2 called with err = ${o17}`);
            });
        }
    },
    {
        name: "local variables with same names as formal parameters have proper redeclaration semantics (non-error cases, var and function)",
        o6: function (index) {
            async function o65(o8) { var o9 = o8; var o8 = 'b'; return o9 + o8; }

            o65('a').then(o16 => {
                if (o16 === 'ab') {
                    o0(`Test #${index} - Success inner var x overwrote formal parameter x only after the declaration statement`);
                } else {
                    o0(`Test #${index} - Failure x appears to have an unexpected value x = '${o16}'`);
                }
            }, o17 => {
                o0(`Test #${index} - Error var redeclaration with err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch var redeclaration with err = ${o17}`);
            });

            async function o66(o8) { var o67 = o8(); function o8() { return 'afx'; } return o67; }

            o66(function () { return ''; }).then(o16 => {
                if (o16 === 'afx') {
                    o0(`Test #${index} - Success inner function x() overwrote formal parameter x`);
                } else {
                    o0(`Test #${index} - Failure x appears not assigned with inner function x(), x = '${o16}'`);
                }
            }, o17 => {
                o0(`Test #${index} - Error err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch err = ${o17}`);
            });
        }
    },
    {
        name: "this value in async functions behaves like it does in normal functions",
        o6: function (index) {
            async function o64() {
                return this;
            }

            o64.call(5).then(o16 => {
                if (o16 == 5) {
                    o0(`Test #${index} - Success this value set to 5`);
                } else {
                    o0(`Test #${index} - Failure this value is not 5, this = '${o16}'`);
                }
            }, o17 => {
                o0(`Test #${index} - Error err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch err = ${o17}`);
            });

            var o69 = {
                o64: o64,
                o13: "abc"
            };

            o69.o64().then(o16 => {
                if (o16.o64 === o64 && o16.o13 === "abc") {
                    o0(`Test #${index} - Success this value set to { af: af, b: "abc" }`);
                } else {
                    o0(`Test #${index} - Failure this value set to something else, this = '${o16}'`);
                }
            }, o17 => {
                o0(`Test #${index} - Error err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch err = ${o17}`);
            });
        }
    },
    {
        name: "arguments value in async functions behaves like it does in normal functions",
        o6: function (index) {
            async function o64() {
                return arguments[0] + arguments[1];
            }

            o64('a', 'b').then(o16 => {
                if (o16 === 'ab') {
                    o0(`Test #${index} - Success result is 'ab' from arguments 'a' + 'b'`);
                } else {
                    o0(`Test #${index} - Failure result is not 'ab', result = '${o16}'`);
                }
            }, o17 => {
                o0(`Test #${index} - Error err = ${o17}`);
            }).catch(o17 => {
                o0(`Test #${index} - Catch err = ${o17}`);
            });
        }
    },
    {
        name: "super value in async methods behaves like it does in normal methods",
        o6: function (index) {
            class o71 {
                o64() {
                    return "base";
                }
            }

            class o72 extends o71 {
                async o64() {
                    return super.o64() + " derived";
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
    {
        name:"Async function with formal captured in a lambda",
        o6: function (index) {
            async function o64(o73 = 1) {
                return () => o73;
            }

            o64().then(o16 => {
                if (o16() === 1) {
                    print(`Test #${index} - Success lambda returns 1 when no arguments passed`);
                } else {
                    print(`Test #${index} - Failure result is not 1, result = '${o16()}'`);
                }
            }, o17 => {
                print(`Test #${index} - Error err = ${o17}`);
            }).catch(o17 => {
                print(`Test #${index} - Catch err = ${o17}`);
            });  
        }
    },
    {
        name:"Async function with formal captured in a nested function",
        o6: function (index) {
            async function o64(o73 = 1) {
                return function () { return o73; };
            }

            o64().then(o16 => {
                if (o16() === 1) {
                    print(`Test #${index} - Success nested function returns 1 when no arguments passed`);
                } else {
                    print(`Test #${index} - Failure result is not 1, result = '${o16()}'`);
                }
            }, o17 => {
                print(`Test #${index} - Error err = ${o17}`);
            }).catch(o17 => {
                print(`Test #${index} - Catch err = ${o17}`);
            });  
        }
    },
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

function o76(test) {
    o0('Executing test #' + index + ' - ' + test.name);

    try {
        test.o6(index);
    } catch(o78) {
        o0('Caught exception: ' + o78);
    }

    index++;
}

o4.forEach(o76);

o0('\nCompletion Results:');
