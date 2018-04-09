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
        o2(o3 = Proxy.create((function o4(o0) {
            return {
                o5 : function () {
                    return [];
                },
            };
    })(/x/g), "uC5EA"));
        function o2() {
            for (let o6 in[function () {}, [(void 0)], [(void 0)], NaN]) {
                o7();
            }
        }; ;
    })();
    var o8;
};
o1();
o9.o10("Passed");
