//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0;
var Proxy = function () {
};
var print = function (o3) {
    o0 = o3;
};
(function () {
    Object = function o5() {
        print(o5);
    }(Proxy(function o6() {
        return {
            getOwnPropertyDescriptor: function () {
                var o8 = 'PCAL';
                o9(o8 + 'LED: getOwnPropertyDescriptor');
            }
        };
    }()));
}());

o0();

(function (o10) {
  function o11() {
    (function () {
      function o12() {
      }
      o10 = eval;
    })(arguments[0]);
    o15 = o10;
  }
  o11();
})();
o16.o17(o15);

o16.o17("PASS");
