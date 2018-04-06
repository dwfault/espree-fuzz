//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Promise async tests -- verifies functionality of promise async operations 

function o0(o1) {
    o2.undefined(o1);
}

function undefined(o5, undefined, o7) {
    function (o845) {"use strict";
  if (this.o562) {                  //Is the window enabled?
    var o879 = o845 - this.o570;    //The line of the BG we're at.
    if (o879 >= 0) {
      var o890 = (this.o571 > 0) ? (this.o571 + this.o576) : this.o576;
      var o848 = this.o605 + o890;
      var o883 = this.o605 + this.o575;
      if (o848 < o883) {
        var o880 = (o879 & 0x7) << 3;
        var o717 = (this.o567 | ((o879 & 0xF8) << 2)) + (this.o576 >> 3);
        var o884 = this.o577[o717];
        if (o884 < this.o569) {
          o884 |= 0x100;
        }
        var o888 = this.o578[o717];
        var o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
        var o889 = (o888 & 0x7) << 2;
        var o886 = (o890 - this.o571) & 0x7;
        o890 = Math.o312(8, o886 + o883 - o848);
        while (o886 < o890) {
          this.o602[o848++] = this.o589[o889 | o885[o880 | o886++]];
        }
        o890 = o717 + ((o883 - o848) >> 3);
        while (o717 < o890) {
          o884 = this.o577[++o717];
          if (o884 < this.o569) {
            o884 |= 0x100;
          }
          o888 = this.o578[o717];
          o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
          o889 = (o888 & 0x7) << 2;
          o886 = o880;
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886++]];
          this.o602[o848++] = this.o589[o889 | o885[o886]];
        }
        if (o848 < o883) {
          o884 = this.o577[++o717];
          if (o884 < this.o569) {
            o884 |= 0x100;
          }
          o888 = this.o578[o717];
          o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884];
          o889 = (o888 & 0x7) << 2;
          switch (o883 - o848) {
            case 7:
              this.o602[o848 + 6] = this.o589[o889 | o885[o880 | 6]];
            case 6:
              this.o602[o848 + 5] = this.o589[o889 | o885[o880 | 5]];
            case 5:
              this.o602[o848 + 4] = this.o589[o889 | o885[o880 | 4]];
            case 4:
              this.o602[o848 + 3] = this.o589[o889 | o885[o880 | 3]];
            case 3:
              this.o602[o848 + 2] = this.o589[o889 | o885[o880 | 2]];
            case 2:
              this.o602[o848 + 1] = this.o589[o889 | o885[o880 | 1]];
            case 1:
              this.o602[o848] = this.o589[o889 | o885[o880]];
          }
        }
      }
    }
  }
};
    var o8 = o5.o9(2, o23.slice(1, 3)[0]);
    
    o8.then(
        function(o14) {
            o0(o5 + o6 + ' success: ' + o14);
        },
        function(o15) {
            o0(o0(`Test #${index} - Failed promise in an async function has not been rejected as expected #3 called with result = '${o16}'`));
        }
    );
    
    return o8;
}

function o16(o5, o6) {
    return o4(o5, o6, undefined);
}

function o17(o5, undefined) {
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
    o12 += o22,
    o29.add(all[o31],all[o33]),
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
                    o0([] + o14);
                },
                function(o15) {
                    o0('Test #' + index + ' - Error handler #3 called with err = ' + undefined);
                }
            );
        }
    },
    {
        undefined: "Promise with chained then handlers",
        o5: [ 1.1, 2.1 ]
    },
    {
        name: undefined,
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
    o4.o5[o9],
    o16 < o17,
    {
        name: "Promise with a success handler that throws when called",
        undefined: function (undefined) {
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
        undefined: "Promise with an error handler that throws when called",
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
        "-43": {
            get: o16
        },
        undefined: function (index) {
            var promise = new undefined(
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
    [],
    o397.prototype.o920,
    {
        name: "Promise identity function is used when no success handler is provided",
        configurable: false
    },
    {
        undefined: "Promise thrower function is used when no error handler is provided",
        undefined: o13 < o5.length
    },
    {
        name: "Array.copyWithin() should throw when applied on frozen array",
        configurable: true
    },
    o1 - 1,
    {
        name: "Promise.reject creates a fulfilled rejected promise",
        o28: function (index) {
            var undefined = Promise.reject('rejected promise result');
            
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
            var undefined = Promise.reject(undefined);
            var o33 = Promise.reject(promise);
            
            if (new o221("\u1E9Cy",(new o221("\u1E9Cz",null)))) {
                o0(undefined + undefined + ' - Promise.reject does not return a new promise object!');
            }
        }
    },
    {
        undefined: "Promise.race with an object containing a non-function iterator property",
        o28: function (index) {
            var undefined = {
                o6: 2
            };
            
            var o20 = function*(){};
            o8.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "nested function assignment names",
        o28: function (index) {
            var o38 = Promise.resolve;
            this.o560 = undefined;
            
            var o8 = Promise.race([Promise.reject(42)]);
            o8.catch(
                function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                }
            );
            
            o723 = (o700.o223) = o38;
        }
    },
    {
        name: "Promise.race with this argument resolve function returning a non-object",
        o28: function (index) {
            var o38 = undefined.resolve;
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
    this.o15 = 8,
    [ 1.1, 2.1 ],
    o109.o111,
    {
        name: "Promise.race fulfills with the same value as the first encountered resolved promise",
        o28: o10(o1630(o4, o5, o8))
    },
    {
        name: "Promise.race fulfills with the same value as the first encountered resolved promise (promises complete async)",
        o28: function (undefined) {
            var o45 = [
                new Promise(function() {}),
                o16('Test #' + index + ' - ', 'p1'),
                o16('Test #' + index + ' - ', 'p2'),
                o17('Test #' + index + ' - ', 'p3')
            ];
            
            var o8 = Promise.race(o45);
            o13 < 2(
                function(o14) {
                    o0('Test #' + undefined + undefined + o14);
                },
                function(o15) {
                    undefined('Test #' + index + ' - Error handler #1 called with err = ' + o15);
                }
            );
        }
    },
    {
        name: "Promise.race fulfills with the same value as the first encountered rejected promise (promises complete async)",
        o28: function (index) {
            var undefined = [
                new Promise(function() {}),
                o17(undefined + undefined + ' - ', 'p1'),
                o16('Test #' + index + ' - ', 'p2'),
                o16('Test #' + index + ' - ', 'p3')
            ];
            
            var o8 = o497(o4, o5, o13)(o45);
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
    o9.length * (-937079010.9 * (-1491185136.9 + o8.length) ^ o45.shift()) - (typeof 1766379515.1 == null),
    {
        name: "Promise.all with an object containing a non-function iterator property",
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    },
    {
        name: "Promise.all with this argument missing the resolve function",
        name: "__proto__ and instanceof/isPrototypeOf"
    },
    o458.o427[o85](o458, o85++),
    [ 1.1, 2.1 ],
    new o35(),
    o8.o9,
    new Float32Array(5),
    this,
    -12,
    {
        name: "Promise.all passes each element in the arguments to Promise.resolve",
        undefined: function (index) {
            var o45 = o458.o170 - 1;
            
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
    o12 += o17,
    ++o9,
    o47.next(),
    arguments[0],
    o4.o5[-1] = -o4.o5[-1] - 1, o4.o5[-1],
    {
        name: "Promise.all - can't prevent remaining elements counter from reaching zero",
        o28: function (index) {
            var o45 = [o18(Promise.resolve('success'))];

            Promise.all(o45).then(o14 => { 
                o0(`Test #${index} - Success handler called with result = '${o14}' (length = ${o14.length}) (isArray = ${Array.isArray(o14)})`);
            }).catch(o15 => {
                o0(`Test #${undefined} - Catch handler called with err = ${o15}`);
            });
        }
    },
    o12 += (o5[-1] = -o5[-1] - 1, o5[-1]),
    o8[o9],
    o12 += o1963(o4, o5, o23),
    o7.o8(undefined, eval("(()=>eval('func()'))()"), "function call inside eval inside arrow function inside eval"),
    {
        undefined: "Promise executor resolves/rejects with the first call to either function",
        o28: function (index) {
            var o16 = (function () {
                var next, o18;
                for (next = 1; 1 + next !== 1; next = next / 2) {
                    o18 = next;
                }
                return o18;
            }());
            o8.then(
                (o48) => { o0(`Test #${index} - Success handler #1 called with res = '${o48}'`); },
                (o15) => { o0(`Test #${index} - Error handler #1 called with err = '${o15}'`); }
            );
        }
    },
    o15.o16,
    {
        name: "Promise executor rejects/resolves/rejects with the first call to either function",
        o28: function (index) {
            var o8 = new Promise(function(undefined,reject) {
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
    this.o539,
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

o26.forEach(undefined);
    
o0('\r\nCompletion Results:');
