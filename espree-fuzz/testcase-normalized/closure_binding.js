//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Scenario: Multiple closures, with variables that are modified in the parent function");

function write(o3) { o0.o1(o3 + ""); }

function o4()
{
        var o5 = "before modification";

        var o6 = function()
        {
                o0.o1("1st function");
                o0.o1(o5);
        }

        o5 = "after modification";

        var o7 = function()
        {
                o0.o1("2nd function");
                o0.o1(o5);
        }

        return [o6,o7];
}

(function() {
    function o4() {
        write('In f');
    }
    function o8() {
        write('In g');
    }

    var o9 = o4;
    o4(o4 = o8);
    o4 = o9;
    
    function o10() {
        write(typeof o4);
        write(typeof o8);
    }
})();

function o8(o11)
{
        o11[1]();
        o11[0]();
}

var o12 = o4();
o8(o12);
o8(o12);

// Side-effect through a closure without eval.
(function(){
    var o4 = function() { o13 = 2; return 1; }
    var o13 = 1;
    o0.o1(o13 + (o4() + o13));
})();

// Side-effect through a closure with eval.
(function(){
    var o4 = function() { o13 = 2; return 1; }
    var o13 = 1;
    o0.o1(o13 + (o4() + o13));
    eval("");
})();

// Side-effect through a closure inside eval.
(function(){
    var o4 = function() { o13 = 2; return 1; }
    var o13 = 1;
    eval('WScript.Echo(a + (f() + a));');
})();

// No side-effect in nested function.
(function(){
    var o4 = function() { return 1; }
    var o13 = 1;
    o0.o1(o13 + (o4() + o13));
})();
