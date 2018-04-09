//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0;
var Proxy = function () {
};
var print = function (o1) {
    o0 = o1;
};
(function () {
    Object = function o2() {
        print(o2);
    }(Proxy(function o3() {
        return {
            getOwnPropertyDescriptor: function () {
                var o4 = 'PCAL';
                o5(o4 + 'LED: getOwnPropertyDescriptor');
            }
        };
    }()));
}());

o0();

(function (o6) {
  function o7() {
    (function () {
      function o8() {
      }
      o6 = eval;
    })(arguments[0]);
    o9 = o6;
  }
  o7();
})();
o10.o11(o9);

o10.o11("PASS");
