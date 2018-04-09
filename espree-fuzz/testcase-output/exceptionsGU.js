//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


//Note: some of the tests make use of host objects which are not available in jc mode.
// Keeping the tests for easy pick and verify on IE

// VB code to create a VB array
//Dim cache
//cache = 0
//Function CreateVBArray()
//   Dim i, j, k
//   Dim a(2, 2)
//   k = 1
//   For i = 0 To 2
//      For j = 0 To 2
//         a(j, i) = k
//         k = k + 1
//      Next
//   Next
//   CreateVBArray = a
//End Function

function o5(o0) {
    if (this.o1 == undefined) {
        o2.write(o0);
        o2.write("</br>");
    }
    else
        o1.o3(o0)
}



// --- ReferenceError-----------

 try
 {
   Array.prototype.sort.call(o2);
    write(" Array.prototype.sort.slice(document); ends without error;- expected ES5 ")
 }
 catch(o4)
 {
     write(" Array.prototype.sort.call(document);; throws;;   -expected: es3 TypeError ::: " + o4)
 }

 try
 {
   Array.prototype.slice.call(o2);
    write(" Array.prototype.shift.slice(document); ends without error;- expected ES5 ")
 }
 catch(o4)
 {
     write(" Array.prototype.slice.call(document);; throws;;   -expected: es3 TypeError ::: " + o4)
 }

 try
 {
   Array.prototype.shift.call(o2);
    write(" Array.prototype.shift.call(document); ends without error;- expected ES5 ")
 }
 catch(o4)
 {
     write(" Array.prototype.shift.call(document);; throws;;   -expected: es3 TypeError ::: " + o4)
 }

 try
 {
   Array.prototype.reverse.call(o2);
    write(" Array.prototype.reverse.call(document); ends without error;- expected ES5 ")
 }
 catch(o4)
 {
     write(" Array.prototype.reverse.call(document);; throws;;   -expected: es3 TypeError ::: " + o4)
 }

 try
 {
   Array.prototype.push.call(o2);
    write(" Array.prototype.push.call(document); ends without error;- expected ES5 ")
 }
 catch(o4)
 {
     write(" Array.prototype.push.call(document);; throws;;   -expected: es3 TypeError ::: " + o4)
 }

 try
 {
   Array.prototype.pop.call(o2);
    write(" Array.prototype.pop.call(document); ends without error;- expected ES5 ")
 }
 catch(o4)
 {
     write(" Array.prototype.pop.call(document);; throws;;   -expected: es3 TypeError ::: " + o4)
 }

 try
 {
   Array.prototype.join.call(o2);
    write(" Array.prototype.join.call(document); ends without error;- expected ES5 ")
 }
 catch(o4)
 {
     write(" Array.prototype.join.call(document);; throws;;   -expected: es3 TypeError ::: " + o4)
 }

 try
 {
   Object.prototype.propertyIsEnumerable.call(o2);
    write(" Object.prototype.propertyIsEnumerable.call(document); ends without error;- expected ES5 ")
 }
 catch(o4)
 {
     write(" Object.prototype.propertyIsEnumerable.call(document);; throws;;   -expected: es3 TypeError ::: " + o4)
 }

 try
 {
    delete this;
    write(" delete this; ends without error; ")
 }
 catch(o4)
 {
     write(" delete this; throws;;   -expected: es3, es5 TypeError ::: " + o4)
 }

 try
 {
    var o5 = new Object();
    var o6 = new o5();
    write(" var xnew = new Object(); var y = new xnew(); ends without error; ")
 }
 catch(o4)
 {
     write(" var xnew = new Object(); var y = new xnew(); throws;;   -expected: es3, es5 TypeError ::: " + o4)
 }


 try
 {
    var o7 = new Object();
    var o6 = o7.o8;
    write(" var x = new Object(); var y = x.ffm; ends without error; ")
 }
 catch(o4)
 {
     write(" var x = new Object(); var y = x.ffm; throws;;   -expected: es3, es5 TypeError ::: " + o4)
 }


 try
 {
    var o7 = new Object();
    o7.o9();
    write(" var x = new Object(); x.ff() ends without error; ")
 }
 catch(o4)
 {
     write("var x = new Object(); x.ff() throws;;   -expected: es3, es5 TypeError ::: " + o4)
 }



//inner call

 try
 {
    var o7 = function o9(){return "inner";}();
    //write("var x = function f(){return \"inner\";}(); done , no exception:  x = " + x)
    o9();
    write("var x = function f(){return \"inner\";}() ends without error; ")
 }
 catch(o4)
 {
     write("var x = function f(){return \"inner\";}();   -expected: es3, es5 R3eferenceError ::: " + o4)
 }

 try
 {
    o10();
    write("call to undefined fg() ends without error;  ")
 }
 catch(o4)
 {
     write("call to undefined fg() throws;   -expected: es3 - TypeError, es5-ReferenceError ::: " + o4)
 }



try
{
var o11= new Object();
    o11();
}
catch(o4)
{
    write(" call to an non function object ooj();;;   -expected: es3, es5 TypeError ::: " + o4)
}

try
{
var o12= undefined;
    o12();
}
catch(o4)
{
    write(" o_undef();;;   -expected: es3, es5 TypeError ::: " + o4)
}


try
{
var o13= null;
    o13();
}
catch(o4)
{
    write(" o_null();;;   -expected: es3, es5 TypeError ::: " + o4)
}


//calls on undefined , null, NaN

try
{
    undefined.toString();}
catch(o4)
{
    write("undefined.toString();   -expected: es3, es5 TypeError ::: " + o4)
}

try
{
    null.anchor();
}
catch(o4)
{
    write(" null.anchor();;   -expected: es3, es5 TypeError ::: " + o4)
}

try
{
    NaN.anchor();
}
catch(o4)
{
    write(" NaN.anchor();;   -expected: es3, es5 TypeError ::: " + o4)
}


try
{
    true.anchor();
}
catch(o4)
{
    write(" true.anchor();;   -expected: es3, es5 TypeError ::: " + o4)
}

// --- RangeError-----------
//15.4.2.2
try
{
    var o7 = new Array(12.4);
    write("new Array(12.4)  - no exception: not expected es3, es5")
}
catch(o4)
{
    write("new Array(12.4) - RangeError exception:  expected in es3 and es5::: " + o4)
}

//15.4.5.1
try
{
    var o7 = new Array(); o7.length = 12.5;
    write("new Array(12.4); x.length = 12.5;  - no exception: es3-expected, ES5-not expected :")
}
catch(o4)
{
    write("new Array(12.4); x.length = 12.5; - RangeError exception: es5-expected, ES3-not expected  ::: " + o4)
}

//17.7.4.5
try
{
    var o7 = (123.45).toFixed(25);
    write("(123.45).toFixed(25);  - no exception: not expected es3, es5")
}
catch(o4)
{
    write("(123.45).toFixed(25); - RangeError exception : expected es3, es5::: " + o4)
}


//17.7.4.6
try
{
    var o7 = (123.45).toExponential(-25);
    write("(123.45).toExponential(-25);  - no exception: not expected es3, es5")
}
catch(o4)
{
    write("(123.45).toExponential(-25); - RangeError exception : expected es3, es5 ::: " + o4)
}


// --- EvalError-----------
//15.11.6.1


try
{
    eval("blah.")

    write("eval(\"blah.\");  - no exception: not expected es3, es5")
}
catch(o4)
{
    write("eval(\"blah.\"); -expected es3-EvalError exception : expected es5-SyntaxException ::: " + o4)
}

// --- SyntaxError-----------

//15.3.2.1

try
{
    var o14 = new Function("a", "b", "return a+b.");

    write("f = new Function(\"a\", \"b\", \"return a+b.\");  - no exception: not expected es3, es5")
}
catch(o4)
{
    write("f = new Function(\"a\", \"b\", \"return a+b.\"); -expected es3 and es5-SyntaxError exception ::: " + o4)
}


// num.tofixed deviation
//15.7.4.5
try
{
    var o15 = 0.0009;
    var o7 = o15.toFixed(3);
    write("var num = 0.0009;var x = num.toFixed(3);  - no exception: not expected es3, es5  ::: value = " + o7 )
}
catch(o4)
{
    write("f = new Function(\"a\", \"b\", \"return a+b.\"); -expected es3 and es5-SyntaxError exception ::: " + o4)
}

// regex
// 15.10.2.5
try
{
    var o16 = new RegExp("a{5,4}");
    write("var re = new RegExp(\"a{5,4}\");  - no exception: not expected es3, es5  ::: value = ")
}
catch(o4)
{
    write("var re = \/a{5,4}\/;   -expected: es3 -RegexExpError, es5-SyntaxError exception ::: " + o4)
}


try
{
    var o16 = new RegExp("[^\\0a]");
    write("var re = new RegExp(\"\\\\0a\");  - no exception: not expected es3, es5  ::: value = ")
}
catch(o4)
{
    write("var re = new RegExp(\"\\0a\");   -expected: es3 -RegexExpError, es5-SyntaxError exception ::: " + o4)
}

