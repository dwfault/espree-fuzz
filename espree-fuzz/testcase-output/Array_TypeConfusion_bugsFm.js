//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Note: see function  ArraySpliceHelper of JavascriptArray.cpp

if (this.o0 && o5 = o7.o1) { // Check for running in ch
    this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}

var o2 = [
    {
         name: "OS7342663:OOB writes using type confusion in InternalCopyArrayElements",
         o3: function ()
         {
             function test() {
                 var o4 = [0xdead, 0xbabe, 0xdead, 0xbabe];

                 class o5 extends Uint32Array { }
                 Object.defineProperty(o5, Symbol.species, { value: function() { return o4; } });

                 var o6 = 0xdaddeadbabe * 4.9406564584124654E-324;
                 var test = [o6, o6, o6, o6];
                 test.length = 0x1000;
                 test.__proto__ = new o5(0);

                 var o7 = Array.prototype.slice.apply(test, []);  // OOB write
                 o8.o9(0x1000, o7.length, "res.length == 0x1000");
                 o8.o9(o6, o7[0], "res[0] == float_val");
                 o8.o9(o6, o7[1], "res[1] == float_val");
                 o8.o9(o6, o7[2], "res[2] == float_val");
                 o8.o9(o6, o7[3], "res[3] == float_val");
                 o8.o9(undefined, o7[4], "res[4] == float_val");
                 o8.o9(undefined, o7[0xfff], "res[0xfff] == undefined");
             }
             test();
             test();
             test();
         }
     },
     {
         name: "OS7342689:OOB writes using type confusion in InternalFillFromPrototypes",
         o3: function ()
         {
             function test() {
                 var o4 = [0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead,
                 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe,
                 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead,
                 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe];

                 class o5 extends Uint32Array { }
                 Object.defineProperty(o5, Symbol.species, { value: function() { return o4; } });

                 var o6 = 0xdaddeadbabe * 4.9406564584124654E-324;
                 var test = [{}];
                 delete test[0];
                 test.length = 0x1000;
                 var o10 = [o6, o6, o6, o6, o6, o6, o6, o6,
                 o6, o6, o6, o6, o6, o6, o6, o6, o6, o6,
                 o6, o6, o6, o6, o6, o6, o6, o6, o6, o6,
                 o6, o6, o6, o6, o6, o6, o6, o6, o6, o6,
                 o6, o6, o6, o6, o6, o6, o6, o6, o6, o6, o6];
                 test.__proto__ = o10;
                 test.__proto__.__proto__ = new o5(0);

                //this will write 0xfffc0daddeadbabe to [arr1] + 0x1D8
                 var o7 = Array.prototype.slice.apply(test, [])
                 o8.o9(0x1000, o7.length, "res.length == 0x1000");
                 o8.o9(o6, o7[0], "res[0] == float_val");
                 o8.o9(o6, o7[1], "res[1] == float_val");
                 o8.o9(o6, o7[2], "res[2] == float_val");
                 o8.o9(o6, o7[o10.length-1], "res[src.length-1] == float_val");
                 o8.o9(undefined, o7[o10.length], "res[src] == undefined");
                 o8.o9(undefined, o7[0xfff], "res[0xfff] == undefined");
             }
             test();
             test();
             test();
         }
     },
     {
         name: "OS7307908:type confusion in Array.prototype.slice",
         o3: function ()
         {
             function test() {
                 var o11 = [1, 2]

                //Our species function will get called during chakra!Js::JavascriptArray::SliceHelper<unsigned int>
                 Object.defineProperty(
                     o11.constructor,
                     Symbol.species,
                     {
                         value : function()
                         {
                            //change 'arr' from TypeIds_NativeIntArray to TypeIds_Array
                             o11[0] = o0;

                            //return a TypeIds_NativeIntArray so we can read back out the 64 bit pointer as two 32bit ints.
                             return [];
                         }
                     }
                 );

                //trigger the bug and retrieve a TypeIds_NativeIntArray array containing a pointer.
                 var o12 = o11.slice();

                 o8.o9(2, o12.length, "brr.length == 2");
                 o8.o9(o0, o12[0], "brr[0] == WScript");
                 o8.o9(2, o12[1], "brr[0] == WScript");
             }
             test();
             test();
             test();
         }
     },
     {
         name: "OS7342791:type confusion in Array.from",
         o3: function ()
         {
             function test() {
                 var o4 = [0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe];

                 var o6 = 0xdaddeadbabe * 4.9406564584124654E-324;
                 var test = [o6, o6, o6, o6];
                 delete test[0];
                 delete test[1];
                 delete test[2];

                 var o7 = Array.from.apply(function(){return o4}, [test]);
                 o8.o9(4, o7.length, "res.length == 4");
                 o8.o9(undefined, o7[0], "res[0] == undefined");
                 o8.o9(undefined, o7[1], "res[1] == undefined");
                 o8.o9(undefined, o7[2], "res[2] == undefined");
                 o8.o9(o6, o7[3], "res[3] == float_val");

                 o8.o9(['1','2','3'], Array.from.apply(()=>new Array(), ["123"]), "Array.from on iterable");
                 o8.o9([1,2,3], Array.from.apply(()=>new Array(), [{"0":1, "1":2, "2":3, "length":3}]), "Array.from on non-iterable");
             }
             test();
             test();
             test();
         }
     },
     {
         name: "OS7342844:type confusion in Array.of",
         o3: function ()
         {
             function test() {
                 var o12 = Array.of.call(()=>[ 1, 2, 3, 4 ],
                     o0, // supply 2 copies of target so the brr array will have a length of 2 and we can read the 64bit pointer.
                     o0
                 );

                 o8.o9(2, o12.length, "brr.length == 2");
                 o8.o9(o0, o12[0], "res[0] == WScript");
                 o8.o9(o0, o12[1], "res[1] == WScript");
                 o8.o9(undefined, o12[2], "res[2] == undefined");
                 o8.o9(undefined, o12[3], "res[3] == undefined");
             }
             test();
             test();
             test();
         }
     },
     {
         name: "OS7342907:type confusion in Array.prototype.map",
         o3: function ()
         {
             function test() {
                 var o11 = [ 1, 2 ];

                 Object.defineProperty(
                     o11.constructor,
                     Symbol.species,
                     {
                         value : function()
                         {
                             return [];
                         }
                     }
                 );

                //The value returned from our callback is directly set into the array whose type we create via the species.
                 var o12 = o11.map( function( o13 )
                     {
                         if( o13 == 1 )
                             return o0;
                     }
                 );

                 o8.o9(2, o12.length, "brr.length == 2");
                 o8.o9(o0, o12[0], "brr[0] == WScript");
                 o8.o9(undefined, o12[1], "brr[1] == undefined");
             }
             test();
             test();
             test();
         }
     },
     {
         name: "OS7342965:type confusion in Array.prototype.splice",
         o3: function ()
         {
             function test() {
                //create a TypeIds_Array holding two 64 bit values (The same amount of space for four 32 bit values).
                 var o11 = [ o0, o0 ];

                //Our species function will get called during chakra!Js::JavascriptArray::EntrySplice
                 Object.defineProperty(
                     o11.constructor,
                     Symbol.species,
                     {
                         value : function()
                         {
                            //return a TypeIds_NativeIntArray so we can read back out a 64 bit pointer as two 32bit ints.
                             return [ 1, 2, 3, 4 ];
                         }
                     }
                 );

                //trigger the bug and retrieve a TypeIds_NativeIntArray array containing a pointer. The helper
                //method ArraySegmentSpliceHelper<Var> will directly copy over the TypeIds_Array segment data
                //into the TypeIds_NativeIntArray segment.
                 var o12 = o11.splice( 0, 2 );

                 o8.o9(2, o12.length, "brr.length == 2");
                 o8.o9(o0, o12[0], "brr[0] == WScript");
                 o8.o9(o0, o12[1], "brr[1] == WScript");
                 o8.o9(undefined, o12[2], "brr[2] == undefined");
                 o8.o9(undefined, o12[3], "brr[3] == undefined");
             }
             test();
             test();
             test();
         }
     },
];
o14.o15(o2, { o16: o0.o17[0] != "summary" });
