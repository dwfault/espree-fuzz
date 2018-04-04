//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4(o5, o6, o7) {

    arguments[0] = "arguments[0]";
    write("foo a: " + o5);
    o6 = "b";
    write("args[1] : " + arguments[1]);
    write("args[3] : " + arguments[3]);

    var o9 = function(o10) {

        write("g args[1] : " + arguments[1]);
        delete o10[1];
        o10[2] = "x[2]";
        o5 = "g.a";

    };

    o9(arguments, "g[1]");
    write("after call to g a : " + o5 + " b: "+ o6 + " c: " + o7);
    
    var o11 = "eval.c";
    eval("c = str");
    write("after eval args[2]: " + arguments[2]);
    
    var arguments = [];
    arguments[0] = "new[0]";
    write("after variable a : " + o5);
};

o4("foo.a", "foo.b", "foo.c", "foo.d");
o4("foo2.a", "foo2.b");

(function()
{
    eval("write(arguments[0])");
})("goodbye");


function o13() {
    write(arguments.length);
    arguments.length--;
    write(arguments.length);
}

o13(10,20,30);


function o15(o5){
  o5 = 2;
  delete arguments[0];
  
  if (arguments[0] === 2) {
    write("if0 :" + arguments[0]);    
  }
  
  if (arguments[0] !== undefined) {
    write("if1 :" + arguments[0]);    
  }
  
  arguments[0] = "A";
  if (arguments[0] !== "A") {
    write("if2 :" + arguments[0]);
  }
  eval('delete a;');
  return o5;
}

write("Value returned : " + o15(1));

function o17() {
    for (var o18 = 0; o18 < arguments.length; o18++) {
        write(arguments[o18]);
        this.o17.arguments[o18] = o18;
        write(arguments[o18]);
    }
}
o17('life', 'is', 'good');

(function()
{
    var arguments = ["a"];
    (function()
    {
        o2.o3(arguments.length);
        eval("");
    })()
})();

(function()
{
    var arguments;
    (function()
    {
        eval("");
    })()
})();

// Dead loop body containing load of arguments property
// interacted badly with stack args optimization.
(function(){
    for (var o18 = 0; o18 < 0; ++o18) 
    {
        var o7 = arguments.o19;
    }
})();

