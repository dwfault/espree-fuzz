//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = eval("1+1");
eval("a");
eval.o2 = "Expando_In_Eval_Ok";
o3.o4(eval.o2);

var o5 = isNaN(Number.NaN);
o3.o4("test: isNaN(Number.NaN) : " + o5);

o5 = isNaN(123);
o3.o4("test: isNaN(123) : " + o5);
isNaN.o2 = "Expando_In_IsNaN_Ok";
o3.o4(isNaN.o2);

o5 = isFinite(Number.o10);
o3.o4("test: isFinite(Number.POSITIVE_INFINITY) : " + o5);

o5 = isFinite(123);
o3.o4("test: isFinite(123) : " + o5);
isFinite.o2 = "Expando_In_IsFinite_Ok";
o3.o4(isNaN.o2);

function o11(o12) {
    var o13 = [];
    o12.split("").forEach(function(o16,o17,o0) {
      o13.push(o0[o17].charCodeAt(0));
    });

    return o13.join();
}

o3.o4("*** Test URI  functions ***");
var o21 = "\u00a9";
o3.o4("Test print wchar: \"\\u00a9\" ");
o3.o4(o11(o21) == "169");

var o0 = encodeURI("\u00a9");
o3.o4("Test encode : encodeURI(\"\\u00a9\");");
var o0 = encodeURI("\u00a9");
o3.o4(o0);

o3.o4("Test decode back: ")
var o23 = decodeURI(encodeURI("\u00a9"));
o3.o4(o11(o23) == "169");

o3.o4("Test encode :  encodeURI(\"http:\/\/www.isp.com\/app.cgi?arg1=1&arg2=hello world\");");
o0 = encodeURI("http://www.isp.com/app.cgi?arg1=1&arg2=hello world");
o3.o4(o0);
o3.o4("Test decode back: ")
o23 = decodeURI(encodeURI("http://www.isp.com/app.cgi?arg1=1&arg2=hello world"));
o3.o4(o23);


o3.o4("Test encode component : encodeURIComponent(\"http\");");
o0 = encodeURIComponent("http");
o3.o4(o0);
o3.o4("Test decode component back: ")
o23 = decodeURIComponent(encodeURIComponent("http"));
o3.o4(o23);

o3.o4("Test encode component : encodeURIComponent(\"\/\/www.isp.com\/app.cgi\");");
o0 = encodeURIComponent("//www.isp.com/app.cgi");
o3.o4(o0);
o3.o4("Test decode component back: ")
o23 = decodeURIComponent(encodeURIComponent("//www.isp.com/app.cgi"));
o3.o4(o23);

o3.o4("Test encode component : encodeURIComponent(\"arg1=1&arg2=hello world\");");
o0 = encodeURIComponent("arg1=1&arg2=hello world");
o3.o4(o0);
o3.o4("Test decode component back: ")
o23 = decodeURIComponent(encodeURIComponent("arg1=1&arg2=hello world"));
o3.o4(o23);

o3.o4("Test global constants: ");
o3.o4(Infinity);
o3.o4(undefined);

o3.o4("Escape Unescape ");
o3.o4(escape("Hello World"));
o3.o4(unescape("Hello%20World"));
o3.o4(unescape(escape("foo bar")));
o3.o4(unescape("It%27s%20a%20test%21"));
