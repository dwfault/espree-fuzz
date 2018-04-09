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
        o5: function (index) {
            var o6 = 12;
            var o7 = 14;
            var o8 = async() => o6 < o7;
            var o9 = async(o10, o11, o12) => o10 + o11 + o12;

            o8().then(o13 => {
                o0(`Test #${index} - Success lambda expression with no argument called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error lambda expression with no argument called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch lambda expression with no argument called with err = ${o14}`);
            });

            o9(10, 20, 30).then(o13 => {
                o0(`Test #${index} - Success lambda expression with several arguments called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error lambda expression with several arguments called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch lambda expression with several arguments called with err = ${o14}`);
            });
        }
    },
    {
        name: "Async keyword with a lambda expressions and local variable captured and shadowed",
        o5: function (index) {
            var o6 = 12;
            var o15 = async o6 => o6;
            var o16 = async(o6) => o6;

            o15(o6).then(o13 => {
                o0(`Test #${index} - Success lambda expression with single argument and no paren called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error lambda expression with single argument and no paren called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch lambda expression with single argument and no paren called with err = ${o14}`);
            });

            o16(o6).then(o13 => {
                o0(`Test #${index} - Success lambda expression with a single argument a called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error lambda expression with a single argument called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch lambda expression with a single argument called with err = ${o14}`);
            });
        }
    },
    {
        name: "Async function in a statement",
        o5: function (index) {
            {
                var o17 = function o18(o6, o7) { return o6 + o7; }
                var o19 = async function (o6, o7) { return o6 + o7; }
                async function o18(o6, o7) { return o6 - o7; }

                var o13 = o17(10, 20);
                o0(`Test #${index} - Success function #1 called with result = '${o13}'`);

                o19(10, 20).then(o13 => {
                    o0(`Test #${index} - Success function #2 called with result = '${o13}'`);
                }, o14 => {
                    o0(`Test #${index} - Error function #2 called with err = ${o14}`);
                }).catch(o14 => {
                    o0(`Test #${index} - Catch function #2 called with err = ${o14}`);
                });

                o18(10, 20).then(o13 => {
                    o0(`Test #${index} - Success function #3 called with result = '${o13}'`);
                }, o14 => {
                    o0(`Test #${index} - Error function #3 called with err = ${o14}`);
                }).catch(o14 => {
                    o0(`Test #${index} - Catch function #3 called with err = ${o14}`);
                });
            }
            {
                async function o18() { return 12; }

                o18().then(o13 => {
                   o0(`Test #${index} - Success function #4 called with result = '${o13}'`);
                }, o14 => {
                    o0(`Test #${index} - Error function #4 called with err = ${o14}`);
                }).catch(o14 => {
                    o0(`Test #${index} - Catch function #4 called with err = ${o14}`);
                });
            }
            {
                function o18() { return 12; }

                var o13 = o17(10, 20);
                o0(`Test #${index} - Success function #5 called with result = '${o13}'`);
            }
        }
    },
    {
        name: "Async function in an object",
        o5: function (index) {
            var o20 = {
                async o18() { return 12; }
            };

            var o21 = {
                o18() { return 12; }
            };

            var o22 = {
                async "a"() { return 12; },
                async 0() { return 12; },
                async 3.14() { return 12; },
                async o23() { return 12; },
            };

            o20.o18().then(o13 => {
                o0(`Test #${index} - Success function in a object #1 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error function in a object #1 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch function in a object #1 called with err = ${o14}`);
            });

            var o13 = o21.o18();
            o0(`Test #${index} - Success function in a object #2 called with result = '${o13}'`);

            o22.o10().then(o13 => {
                o0(`Test #${index} - Success function in a object #3 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error function in a object #3 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch function in a object #3 called with err = ${o14}`);
            });

            o22['0']().then(o13 => {
                o0(`Test #${index} - Success function in a object #4 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error function in a object #4 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch function in a object #4 called with err = ${o14}`);
            });

            o22['3.14']().then(o13 => {
                o0(`Test #${index} - Success function in a object #5 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error function in a object #5 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch function in a object #5 called with err = ${o14}`);
            });

            o22.o23().then(o13 => {
                o0(`Test #${index} - Success function in a object #6 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error function in a object #6 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch function in a object #6 called with err = ${o14}`);
            });
        }
    },
    {
        name: "Async classes",
        o5: function (index) {
            class o24 {
                async o25(o10) { return o10; }
                async o18(o10) { return o10; }
                async "a"() { return 12; }
                async 0() { return 12; }
                async 3.14() { return 12; }
                async o23() { return 12; }
                static async o26(o10) { return o10; }
            }

            class o27 {
                o18(o10) { return o10; }
            }

            class o28 {
                static o18(o10) { return o10; }
            }

            var o6 = "foo";
            class o29 {
                async [o6](o10) { return o10; }
            }

            var o30 = new o24();
            var o31 = new o27();
            var o32 = new o29();

            o30.o25(10).then(o13 => {
                o0(`Test #${index} - Success async in a class #1 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error async in a class #1 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch async in a class #1 called with err = ${o14}`);
            });

            o30.o18(10).then(o13 => {
                o0(`Test #${index} - Success async in a class #2 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error async in a class #2 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch async in a class #2 called with err = ${o14}`);
            });

            o30.o10().then(o13 => {
                o0(`Test #${index} - Success async in a class #3 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error async in a class #3 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch async in a class #3 called with err = ${o14}`);
            });

            o30['0']().then(o13 => {
                o0(`Test #${index} - Success async in a class #4 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error async in a class #4 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch async in a class #4 called with err = ${o14}`);
            });

            o30['3.14']().then(o13 => {
                o0(`Test #${index} - Success async in a class #5 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error async in a class #5 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch async in a class #5 called with err = ${o14}`);
            });

            o30.o23().then(o13 => {
                o0(`Test #${index} - Success async in a class #6 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error async in a class #6 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch async in a class #6 called with err = ${o14}`);
            });

            o24.o26(10).then(o13 => {
                o0(`Test #${index} - Success async in a class #7 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error async in a class #7 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch async in a class #7 called with err = ${o14}`);
            });

            var o13 = o31.o18(10);
            o0(`Test #${index} - Success async in a class #8 called with result = '${o13}'`);

            var o13 = o28.o18(10);
            o0(`Test #${index} - Success async in a class #9 called with result = '${o13}'`);

            o32.o33(10).then(o13 => {
                o0(`Test #${index} - Success async in a class #10 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error async in a class #10 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch async in a class #10 called with err = ${o14}`);
            });
        }
    },
    {
        name: "Await in an async function",
        o5: function (index) {
            async function o25(o34, o35) {
                o34 = o34 * o35;
                if (o34 > 0)
                     o34 = await o25(o34, -1);
                return o34;
            }

            function o36(o6) {
                return o6;
            }

            async function o37(o6) {
                return await(o6);
            }

            function o38() {
                return new Promise(function (resolve, reject) {
                    reject(Error('My Error'));
                });
            }

            async function o39() {
                return await o38();
            }

            async function o40() {
                throw 32;
            }

            async function o41() {
                return await o40();
            }

            o25(2, 2).then(o13 => {
                o0(`Test #${index} - Success await in an async function #1 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error await in an async function #1 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch await in an async function #1 called with err = ${o14}`);
            });

            o37(2).then(o13 => {
                o0(`Test #${index} - Success await in an async function #2 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error await in an async function #2 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch await in an async function #2 called with err = ${o14}`);
            });

            o39(2).then(o13 => {
                o0(`Test #${index} - Failed await in an async function doesn't catch a rejected Promise. Result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Success await in an async function catch a rejected Promise in 'err'. Error = '${o14}'`);
            }).catch(o14 => {
                o0(`Test #${index} - Success await in an async function catch a rejected Promise in 'catch'. Error = '${o14}'`);
            });

            o41(2).then(o13 => {
                o0(`Test #${index} - Failed await in an async function doesn't catch an error. Result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Success await in an async function catch an error in 'err'. Error = '${o14}'`);
            }).catch(o14 => {
                o0(`Test #${index} - Success await in an async function catch an error in 'catch'. Error = '${o14}'`);
            });
        }
    },
    {
        name: "Await keyword with a lambda expressions",
        o5: function (index) {
            {
                async function o25(o6, o7, o42) {
                    var o43 = async(o10, o11, o12) => o10 * o11 * o12; 
                    var o44 = await o43(o6, o7, o42);
                    return o44;
                }

                o25(5, 5, 5).then(o13 => {
                    o0(`Test #${index} - Success await keyword with a lambda expressions #1 called with result = '${o13}'`);
                }, o14 => {
                    o0(`Test #${index} - Error await keyword with a lambda expressions #1 called with err = ${o14}`);
                }).catch(o14 => {
                    o0(`Test #${index} - Catch await keyword with a lambda expressions #1 called with err = ${o14}`);
                });
            };
            {
                async function o36(o45, o6, o7, o42) {
                    return await o45(o6, o7, o42);
                }

                o36(async(o10, o11, o12) => o10 + o11 + o12, 10, 20, 30).then(o13 => {
                    o0(`Test #${index} - Success await keyword with a lambda expressions #1 called with result = '${o13}'`);
                }, o14 => {
                    o0(`Test #${index} - Error await keyword with a lambda expressions #1 called with err = ${o14}`);
                }).catch(o14 => {
                    o0(`Test #${index} - Catch await keyword with a lambda expressions #1 called with err = ${o14}`);
                });
            };
        }
    },
    {
        name: "Async function with default arguments's value",
        o5: function (index) {
            {
                function o46() {
                    throw "expected error"
                }

                async function o25(o47 = o46()) {
                    return true;
                }

                async function o37(o47 = false) {
                    return true;
                }

                o25(true).then(o13 => {
                    o0(`Test #${index} - Success async function with default arguments's value overwritten #1 called with result = '${o13}'`);
                }, o14 => {
                    o0(`Test #${index} - Error async function with default arguments's value overwritten #1 called with err = ${o14}`);
                }).catch(o14 => {
                    o0(`Test #${index} - Catch async function with default arguments's value overwritten #1 called with err = ${o14}`);
                });

                o25().then(o13 => {
                    o0(`Test #${index} - Failed async function with default arguments's value has not been rejected as expected #2 called with result = '${o13}'`);
                }, o14 => {
                    o0(`Test #${index} - Success async function with default arguments's value has been rejected as expected by 'err' #2 called with err = '${o14}'`);
                }).catch(o14 => {
                    o0(`Test #${index} - Success async function with default arguments's value has been rejected as expected by 'catch' #2 called with err = '${o14}'`);
                });

                o37().then(o13 => {
                    o0(`Test #${index} - Success async function with default arguments's value #3 called with result = '${o13}'`);
                }, o14 => {
                    o0(`Test #${index} - Error async function with default arguments's value #3 called with err = ${o14}`);
                }).catch(o14 => {
                    o0(`Test #${index} - Catch async function with default arguments's value #3 called with err = ${o14}`);
                });
            };
        }
    },
    {
        name: "Promise in an Async function",
        o5: function (index) {
            {
                async function o48() {
                    let o49 = new Promise(function (resolve, reject) {
                        resolve("resolved");
                    });

                    return o49.then(function (o13) {
                        return o13;
                    });
                }

                async function o50() {
                    let o49 = new Promise(function (resolve, reject) {
                        resolve("resolved");
                    });

                    return await o49;
                }

                async function o51() {
                    let o49 = new Promise(function (resolve, reject) {
                        reject("rejected");
                    });

                    return o49.then(function (o13) {
                        return o13;
                    });
                }

                o48().then(o13 => {
                    o0(`Test #${index} - Success resolved promise in an async function #1 called with result = '${o13}'`);
                }, o14 => {
                    o0(`Test #${index} - Error resolved promise in an async function #1 called with err = ${o14}`);
                }).catch(o14 => {
                    o0(`Test #${index} - Catch resolved promise in an async function #1 called with err = ${o14}`);
                });

                o50().then(o13 => {
                    o0(`Test #${index} - Success resolved promise in an async function #2 called with result = '${o13}'`);
                }, o14 => {
                    o0(`Test #${index} - Error resolved promise in an async function #2 called with err = ${o14}`);
                }).catch(o14 => {
                    o0(`Test #${index} - Catch resolved promise in an async function #2 called with err = ${o14}`);
                });

                o51().then(o13 => {
                    o0(`Test #${index} - Failed promise in an async function has not been rejected as expected #3 called with result = '${o13}'`);
                }, o14 => {
                    o0(`Test #${index} - Success promise in an async function has been rejected as expected by 'err' #3 called with err = '${o14}'`);
                }).catch(o14 => {
                    o0(`Test #${index} - Success promise in an async function has been rejected as expected by 'catch' #3 called with err = '${o14}'`);
                });
            };
        }
    },
    {
        name: "%AsyncFunction% constructor creates async functions analogous to Function constructor",
        o5: function (index) {
            var o52 = Object.getPrototypeOf(async function () { }).constructor;

            var o53 = new o52('return await Promise.resolve(0);');

            o53().then(o13 => {
                o0(`Test #${index} - Success %AsyncFunction% created async function #1 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error %AsyncFunction% created async function #1 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch %AsyncFunction% created async function #1 called with err = ${o14}`);
            });

            o53 = new o52('a', 'b', 'c', 'a = await a; b = await b; c = await c; return a + b + c;');

            o53(Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)).then(o13 => {
                o0(`Test #${index} - Success %AsyncFunction% created async function #2 called with result = '${o13}'`);
            }, o14 => {
                o0(`Test #${index} - Error %AsyncFunction% created async function #2 called with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch %AsyncFunction% created async function #2 called with err = ${o14}`);
            });
        }
    },
    {
        name: "local variables with same names as formal parameters have proper redeclaration semantics (non-error cases, var and function)",
        o5: function (index) {
            async function o54(o6) { var o7 = o6; var o6 = 'b'; return o7 + o6; }

            o54('a').then(o13 => {
                if (o13 === 'ab') {
                    o0(`Test #${index} - Success inner var x overwrote formal parameter x only after the declaration statement`);
                } else {
                    o0(`Test #${index} - Failure x appears to have an unexpected value x = '${o13}'`);
                }
            }, o14 => {
                o0(`Test #${index} - Error var redeclaration with err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch var redeclaration with err = ${o14}`);
            });

            async function o55(o6) { var o56 = o6(); function o6() { return 'afx'; } return o56; }

            o55(function () { return ''; }).then(o13 => {
                if (o13 === 'afx') {
                    o0(`Test #${index} - Success inner function x() overwrote formal parameter x`);
                } else {
                    o0(`Test #${index} - Failure x appears not assigned with inner function x(), x = '${o13}'`);
                }
            }, o14 => {
                o0(`Test #${index} - Error err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch err = ${o14}`);
            });
        }
    },
    {
        name: "this value in async functions behaves like it does in normal functions",
        o5: function (index) {
            async function o53() {
                return this;
            }

            o53.call(5).then(o13 => {
                if (o13 == 5) {
                    o0(`Test #${index} - Success this value set to 5`);
                } else {
                    o0(`Test #${index} - Failure this value is not 5, this = '${o13}'`);
                }
            }, o14 => {
                o0(`Test #${index} - Error err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch err = ${o14}`);
            });

            var o57 = {
                o53: o53,
                o11: "abc"
            };

            o57.o53().then(o13 => {
                if (o13.o53 === o53 && o13.o11 === "abc") {
                    o0(`Test #${index} - Success this value set to { af: af, b: "abc" }`);
                } else {
                    o0(`Test #${index} - Failure this value set to something else, this = '${o13}'`);
                }
            }, o14 => {
                o0(`Test #${index} - Error err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch err = ${o14}`);
            });
        }
    },
    {
        name: "arguments value in async functions behaves like it does in normal functions",
        o5: function (index) {
            async function o53() {
                return arguments[0] + arguments[1];
            }

            o53('a', 'b').then(o13 => {
                if (o13 === 'ab') {
                    o0(`Test #${index} - Success result is 'ab' from arguments 'a' + 'b'`);
                } else {
                    o0(`Test #${index} - Failure result is not 'ab', result = '${o13}'`);
                }
            }, o14 => {
                o0(`Test #${index} - Error err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch err = ${o14}`);
            });
        }
    },
    {
        name: "super value in async methods behaves like it does in normal methods",
        o5: function (index) {
            class o58 {
                o53() {
                    return "base";
                }
            }

            class o59 extends o58 {
                async o53() {
                    return super.o53() + " derived";
                }
            }

            var o12 = new o59();

            o12.o53().then(o13 => {
                if (o13 === 'base derived') {
                    o0(`Test #${index} - Success result is 'base derived' from derived method call`);
                } else {
                    o0(`Test #${index} - Failure result is not 'base derived', result = '${o13}'`);
                }
            }, o14 => {
                o0(`Test #${index} - Error err = ${o14}`);
            }).catch(o14 => {
                o0(`Test #${index} - Catch err = ${o14}`);
            });
        }
    },
    {
        name:"Async function with formal captured in a lambda",
        o5: function (index) {
            async function o53(o60 = 1) {
                return () => o60;
            }

            o53().then(o13 => {
                if (o13() === 1) {
                    print(`Test #${index} - Success lambda returns 1 when no arguments passed`);
                } else {
                    print(`Test #${index} - Failure result is not 1, result = '${o13()}'`);
                }
            }, o14 => {
                print(`Test #${index} - Error err = ${o14}`);
            }).catch(o14 => {
                print(`Test #${index} - Catch err = ${o14}`);
            });  
        }
    },
    {
        name:"Async function with formal captured in a nested function",
        o5: function (index) {
            async function o53(o60 = 1) {
                return function () { return o60; };
            }

            o53().then(o13 => {
                if (o13() === 1) {
                    print(`Test #${index} - Success nested function returns 1 when no arguments passed`);
                } else {
                    print(`Test #${index} - Failure result is not 1, result = '${o13()}'`);
                }
            }, o14 => {
                print(`Test #${index} - Error err = ${o14}`);
            }).catch(o14 => {
                print(`Test #${index} - Catch err = ${o14}`);
            });  
        }
    },
    {
        name:"Async function with formal captured in eval",
        o5: function (index) {
            async function o53(o60 = 1) {
                return eval("d");
            }

            o53().then(o13 => {
                if (o13 === 1) {
                    print(`Test #${index} - Success eval returns 1 when no arguments passed`);
                } else {
                    print(`Test #${index} - Failure result is not 1, result = '${o13}'`);
                }
            }, o14 => {
                print(`Test #${index} - Error err = ${o14}`);
            }).catch(o14 => {
                print(`Test #${index} - Catch err = ${o14}`);
            });  
        }
    },
];

var index = 1;

function o61(test) {
    o0('Executing test #' + index + ' - ' + test.name);

    try {
        test.o5(index);
    } catch(o62) {
        o0('Caught exception: ' + o62);
    }

    index++;
}

o4.forEach(o61);

o0('\nCompletion Results:');
