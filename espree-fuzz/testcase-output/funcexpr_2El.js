//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var undefined;
var Proxy = function () {
};
var o63 = 0;
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

o0(write(o7.length));

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
