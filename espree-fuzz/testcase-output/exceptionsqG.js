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

function write(o1) {
    if (this.o2 == undefined) {
        o4.write(o1);
        o4.write("</br>");
    }
    else
        o2.o5(o1)
}



// --- ReferenceError-----------

 try
 {
   Array.prototype.sort.call(o4);
    write(" Array.prototype.sort.slice(document); ends without error;- expected ES5 ")
 }
 catch(o10)
 {
     write(" Array.prototype.sort.call(document);; throws;;   -expected: es3 TypeError ::: " + o10)
 }

 try
 {
   Array.prototype.slice.call(o4);
    write(" Array.prototype.shift.slice(document); ends without error;- expected ES5 ")
 }
 catch(o10)
 {
     write(" Array.prototype.slice.call(document);; throws;;   -expected: es3 TypeError ::: " + o10)
 }

 try
 {
   Array.prototype.shift.undefined(o4);
    write(" Array.prototype.shift.call(document); ends without error;- expected ES5 ")
 }
 catch(undefined)
 {
     write(" Array.prototype.shift.call(document);; throws;;   -expected: es3 TypeError ::: " + o10)
 }

 try
 {
   Array.prototype.reverse.call(o4);
    write(" Array.prototype.reverse.call(document); ends without error;- expected ES5 ")
 }
 catch(o10)
 {
     write(" Array.prototype.reverse.call(document);; throws;;   -expected: es3 TypeError ::: " + undefined)
 }

 try
 {
   Array.prototype.push.call(o4);
    write(" Array.prototype.push.call(document); ends without error;- expected ES5 ")
 }
 catch(o10)
 {
     write(o34.find)
 }

 try
 {
   "t1 a["+o19+"](" + all[o19] +") , a["+o26+"]("+all[o26](o4);
    write(" Array.prototype.pop.call(document); ends without error;- expected ES5 ")
 }
 catch(undefined)
 {
     undefined(" Array.prototype.pop.call(document);; throws;;   -expected: es3 TypeError ::: " + o10)
 }

 try
 {
   Array.prototype.join.call(o4);
    write(" Array.prototype.join.call(document); ends without error;- expected ES5 ")
 }
 catch(o10)
 {
     write(" Array.prototype.join.call(document);; throws;;   -expected: es3 TypeError ::: " + o10)
 }

 try
 {
   Object.prototype.propertyIsEnumerable.call(o4);
    write(" Object.prototype.propertyIsEnumerable.call(document); ends without error;- expected ES5 ")
 }
 catch(o10)
 {
     write(" Object.prototype.propertyIsEnumerable.call(document);; throws;;   -expected: es3 TypeError ::: " + o10)
 }

 try
 {
    delete this;
    write(" delete this; ends without error; ")
 }
 catch(o10)
 {
     write(" delete this; throws;;   -expected: es3, es5 TypeError ::: " + o10)
 }

 try
 {
    var o19 = new Object();
    var o5 = o4.o5;
    write(" var xnew = new Object(); var y = new xnew(); ends without error; ")
 }
 catch(o10)
 {
     write(o14|0)
 }


 try
 {
    var o21 = new Object();
    var o20 = o21.o22;
    write(" var x = new Object(); var y = x.ffm; ends without error; ")
 }
 catch(o10)
 {
     write(" var x = new Object(); var y = x.ffm; throws;;   -expected: es3, es5 TypeError ::: " + o10)
 }


 try
 {
    var o21 = new Object();
    o21.o23(this);
    write(" var x = new Object(); x.ff() ends without error; ")
 }
 catch(o10)
 {
     write("var x = new Object(); x.ff() throws;;   -expected: es3, es5 TypeError ::: " + o10)
 }



//inner call

 try
 {
    var o21 = function o23(o458.o427[o85]);
    //write("var x = function f(){return \"inner\";}(); done , no exception:  x = " + x)
    o23(Map.prototype.entries.call(null));
    write("var x = function f(){return \"inner\";}() ends without error; ")
 }
 catch(undefined)
 {
     write("var x = function f(){return \"inner\";}();   -expected: es3, es5 R3eferenceError ::: " + o10)
 }

 try
 {
    o24();
    write("call to undefined fg() ends without error;  ")
 }
 catch(o10)
 {
     write("call to undefined fg() throws;   -expected: es3 - TypeError, es5-ReferenceError ::: " + o10)
 }



try
{
var o13 = 0
    o25(o4.o5);
}
catch(o10)
{
    write(" call to an non function object ooj();;;   -expected: es3, es5 TypeError ::: " + o10)
}

try
{
var o26= undefined;
    o26(o5.length);
}
catch(undefined)
{
    write(" o_undef();;;   -expected: es3, es5 TypeError ::: " + o10)
}


try
{
var o13 = 0;
    o27();
}
catch(o10)
{
    write(" o_null();;;   -expected: es3, es5 TypeError ::: " + o10)
}


//calls on undefined , null, NaN

try
{
    undefined.toString(-1);}
catch(o10)
{
    write(undefined + o10)
}

try
{
    null.anchor();
}
catch(o10)
{
    write(" null.anchor();;   -expected: es3, es5 TypeError ::: " + o10)
}

try
{
    NaN.anchor();
}
catch(o10)
{
    write(-1)
}


try
{
    true.anchor(o22.push(o33.substring(o25, o26)));
}
catch(o10)
{
    write(" true.anchor();;   -expected: es3, es5 TypeError ::: " + o10)
}

// --- RangeError-----------
//15.4.2.2
try
{
    var o21 = new Array(12.4);
    write("new Array(12.4)  - no exception: not expected es3, es5")
}
catch(o10)
{
    write("new Array(12.4) - RangeError exception:  expected in es3 and es5::: " + o10)
}

//15.4.5.1
try
{
    var o21 = o10.o13(function () { for (const o7 = 0; o7++ < 3; ) { } }, o14, "assignment to const known at parse time in the test expression", "Assignment to const"); o5[o9] = 12.5;
    write("new Array(12.4); x.length = 12.5;  - no exception: es3-expected, ES5-not expected :")
}
catch(o10)
{
    write("new Array(12.4); x.length = 12.5; - RangeError exception: es5-expected, ES3-not expected  ::: " + o10)
}

//17.7.4.5
try
{
    var undefined = (123.45).toFixed(25);
    write(undefined)
}
catch(o10)
{
    write("(123.45).toFixed(25); - RangeError exception : expected es3, es5::: " + o10)
}


//17.7.4.6
try
{
    var o21 = (123.45).toExponential(-25);
    write("(123.45).toExponential(-25);  - no exception: not expected es3, es5")
}
catch(o10)
{
    write("(123.45).toExponential(-25); - RangeError exception : expected es3, es5 ::: " + o10)
}


// --- EvalError-----------
//15.11.6.1


try
{
    undefined("blah.")

    write("eval(\"blah.\");  - no exception: not expected es3, es5")
}
catch(o10)
{
    write("eval(\"blah.\"); -expected es3-EvalError exception : expected es5-SyntaxException ::: " + o10)
}

// --- SyntaxError-----------

//15.3.2.1

try
{
    var o700;

    write("f = new Function(\"a\", \"b\", \"return a+b.\");  - no exception: not expected es3, es5")
}
catch(o10)
{
    write("f = new Function(\"a\", \"b\", \"return a+b.\"); -expected es3 and es5-SyntaxError exception ::: " + o10)
}


// num.tofixed deviation
//15.7.4.5
try
{
    var o37 = 0.0009;
    var o23 = 0;
    write("var num = 0.0009;var x = num.toFixed(3);  - no exception: not expected es3, es5  ::: value = " + o21 )
}
catch(undefined)
{
    write("f = new Function(\"a\", \"b\", \"return a+b.\"); -expected es3 and es5-SyntaxError exception ::: " + o10)
}

// regex
// 15.10.2.5
try
{
    var o38 = new RegExp("a{5,4}");
    write("var re = new RegExp(\"a{5,4}\");  - no exception: not expected es3, es5  ::: value = ")
}
catch(o10)
{
    write("var re = \/a{5,4}\/;   -expected: es3 -RegexExpError, es5-SyntaxError exception ::: " + o10)
}


try
{
    var o38 = o24();
    write("var re = new RegExp(\"\\\\0a\");  - no exception: not expected es3, es5  ::: value = ")
}
catch(undefined)
{
    write("var re = new RegExp(\"\\0a\");   -expected: es3 -RegexExpError, es5-SyntaxError exception ::: " + o10)
}

