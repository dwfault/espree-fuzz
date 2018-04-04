//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print(o1) { o2.o3(o1+''); }

function o4(o5) {
    print(o5.caller);
    if (o5.arguments)
    {
        print(o5.arguments[0]);
        print(o5.arguments.caller);
    }
    if (o5.caller) {
        if (o5.arguments.caller) {
            print(o5.arguments.caller[0]);
        } else {
            print("func.arguments.caller undefined");
        }
    }
    print("");
}


function o8() {
    o4(o8);
    try {
        try {
            throw null;
        }
        finally {
            o4(o9);
        }
    }
    catch (o10) {
        o4(o8);
    }
}

function o9() {
    o8("f from g");
}

o8("f from global");
o9("g from global");

function o11() {
        o12(null);
}
function o12(o1) {
        print(o12.caller);
}

function o13() {
        eval("AB(null)");
}
function o15(o1) {
        print(o15.caller);
}

o11();
o13();

(function() {
    print(arguments.caller);
    print(delete arguments.caller);
    print(arguments.caller);
    arguments.caller = 0;
    print(arguments.caller);
    function o8() {
        print(arguments.caller);
        print(delete arguments.caller);
        print(arguments.caller);
        arguments.caller = 0;
        print(arguments.caller);
    }
    o8();
})();

function o16(){
  var o17 = function(){
    var o18 = 0;
    while(((o19 <<= (arguments.caller && arguments.caller[1]) ? 3 : 1)) && o18 < 3) {
      o18++;
    }
  }
  var o20 = function(){
    o17(); 
  }
  var o19 = 1;
  function o21 () {
      o20();
  }
  o21(1, 1, 1); 
  o2.o3("b = " + (o19|0));
};

// generate profile
o16(); 
o16(); 
