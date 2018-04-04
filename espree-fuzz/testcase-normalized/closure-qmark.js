//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Try variants of a pattern known to cause exploitable trashing of the Null
// object's vtable: access a local var/function only within the non-evaluated
// branch of a ?: operator, then do instanceof null to force virtual call using
// the Null object's vtable.

function write(o1) { o2.o3(o1 + ''); }

(function () {
    (function () {
        return true ? true : o1;
    })();
    function o1() { }; 
})();
try {
    var o4 = Object instanceof null;
}
catch (o6) {
    write(o6.o7);
}

(function () {
    (function () {
        return true ? true : o1;
    })();
    var o1;
})();
try {
    var o4 = Object instanceof null;
}
catch (o6) {
    write(o6.o7);
}

(function () {
    (function () {
        return false ? o1 : false;
    })();
    function o1() { }; 
})();
try {
    var o4 = Object instanceof null;
}
catch (o6) {
    write(o6.o7);
}

(function () {
    (function () {
        return false ? o1 : false;
    })();
    var o1;
})();
try {
    var o4 = Object instanceof null;
}
catch (o6) {
    write(o6.o7);
}
