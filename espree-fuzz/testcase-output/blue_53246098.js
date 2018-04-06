//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = function () {
    return this
};

function o1() {
    Object.prototype['create'] = function () {
        return this
    };
    var Proxy = function () {
        return this
    };
    (function () {
        o5(o6 = Proxy.create((function o8(o0) {
            return {
                o9 : function () {
                    return [];
                },
            };
    })(/x/g), "uC5EA"));
        function o5() {
            for (let undefined in[function () {}, [(Object.getOwnPropertyNames)], [(void 0)], undefined]) {
                o12();
            }
        }; ;
    })();
    var o13;
};
o1();
o14.o15("Passed");
