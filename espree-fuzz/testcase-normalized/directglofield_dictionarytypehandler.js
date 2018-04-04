//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test() {
    Object.prototype['create'] = function () {};
    Object.prototype['yoyo'] = function () {};
    Object.prototype['splice'] = function () {};
    Object.prototype['watch'] = function () {};
    Object.prototype['setInt8'] = function () {};
    Object.prototype['unwatch'] = function () {};
    Object.prototype['eval'] = function () {};

    (function () {
        function o3() {
            Object.defineProperty(this, "b", ({
                    set : isNaN,
                    configurable : true
                }));
            Object.defineProperty(this, "w", ({
                    configurable : true
                }));
        }
        try {
            o3();
        } catch (o8) {
            o9.o10(1);
        }
    })();
    for (var o11 in[true, true, true, true, true, true, true, true, true, true, true, true, true, true, new Boolean(false), true,  true]) {
        o13;
    }
    function o14() {
        Object.defineProperty(this, "a", ({
                configurable : false
            }));
        delete this.o13;
        this.o13 = false;
        Object.preventExtensions(this);
    };
    o14();
};

//Interpreter call
test();

//JIT call
test();
test();





