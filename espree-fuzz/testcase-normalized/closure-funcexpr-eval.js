//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

(function o4(o1) {
    write(o4);
    write(o1);
    (function () {
        write(o4);
        write(o1);
        eval('f = "inner f";');
        eval('x = "inner x";');
        write(o4);
        write(o1);
        eval('var f = "inner f 2";');
        eval('var x = "inner x 2";');
        write(o4);
        write(o1);
    })();
    write(o4);
    write(o1);
})('outer x');

var o6;
var o7 = 0;
var value = (function o6(o9) {
    eval('');
    if (o9) return 1;
    o7 = 1;
    o6 = function(o9) {
        return 2;
    }; // this line does nothing as 'functest' is ReadOnly here
    return o6(true); // this is therefore tail recursion and returns 1
})(false);
o2.o3('vartest = ' + o7);
o2.o3('value = ' + value);

(function (){
    try {
        throw 'hello';
    }
    catch(o10) {
        var o4 = function(){ eval('WScript.Echo(e)') };
    }
    o4();
})();

var o11 = function o11() {
    this.o12 = function() {
        o11.o1 = 'whatever';
    }
    this.o12();
    write(o11.o1);
}

o11();
