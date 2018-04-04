//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Note: see function  ArraySpliceHelper of JavascriptArray.cpp

if (this.o0 && this.o0.o1) { // Check for running in ch
    this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}

var o2 = [
    {
        name: "Calling Array.prototype.slice()",
        o4: function ()
        {
            var o5=[1,2,3,4,5];
            var o6=Array.prototype.slice.call(o5,1,3);
            o11.o12([2,3], o6, "Incorrect result from Array.prototype.slice()");
        }
    },
    {
        name: "Calling Array.prototype.push()",
        o4: function ()
        {
            var o5=[1,2];
            Array.prototype.push.call(o5,1);
            o11.o12([1,2,1], o5, "Incorrect result from Array.prototype.push()");
        }
    },
    {
        name: "Calling Array.isArray()",
        o4: function ()
        {
            var o5=[1,2,3,4,5,6,7];
            o11.o12(true, Array.isArray(o5), "Incorrect result from Array.isArray()");
        }
    },
    {
        name: "Calling Array.prototype.unshift()",
        o4: function ()
        {
            var o5=[2,1,3,4];
            Array.prototype.unshift.call(o5,0);
            o11.o12([0,2,1,3,4], o5, "Incorrect result from Array.prototype.unshift()");
        }
    },
    {
        name: "Calling Array.prototype.shift()",
        o4: function ()
        {
            var o5=[1,2,3,4];
            var o16=Array.prototype.shift.call(o5);
            o11.o12([2,3,4], o5, "Incorrect result from Array.prototype.shift()");
            o11.o12(1, o16, "Incorrect result from Array.prototype.shift()");
        }
    },
    {
        name: "Calling Array.prototype.entries()",
        o4: function ()
        {
            var o5=[1,2,3,4];
            var o16=Array.prototype.entries.call(o5);
            for (var o19 of o16)
            {
                print(o19);
            }
        }
    },
    {
        name: "Calling Array.prototype.keys()",
        o4: function ()
        {
            var o5=[1,2,3,4];
            var o16=Array.prototype.keys.call(o5);
            for (var o19 of o16)
            {
                print(o19);
            }
        }
    },
    {
        name: "Calling Array.prototype.reverse()",
        o4: function ()
        {
            var o5=[1,2,3,4];
            Array.prototype.reverse.call(o5);
            o11.o12([4,3,2,1], o5, "Incorrect result from Array.prototype.reverse()");
        }
    },
    {
        name: "Calling Object.prototype.toString()",
        o4: function ()
        {
            var o5=[1,2,3,4,5,6];
            var o16=Object.prototype.toString.call(o5);
            o11.o12("[object Array]", o16, "Incorrect result from Object.prototype.toString()");
        }
    },
    {
        name: "Calling Object.prototype.hasOwnProperty()",
        o4: function ()
        {
            var o5=[1,2,3,4,5,6];
            var o16=Object.prototype.hasOwnProperty.call(o5, 1);
            o11.o12(o16, true);
        }
    },
    {
        name: "OS3713376: Accessing COA through proxy",
        o4: function ()
        {
            var o26 = new Proxy([0,0,0,0,0], {});
            o26.length = 1;
            o11.o12('0', o26.toString(), 'Setting length of an array through Proxy');

            var o29 = new Proxy([0,0,0,0,0], {});
            o29[0] = 1;
            o11.o12('1,0,0,0,0', o29.toString(), 'Setting array element through Proxy');
        }
    },
];
o30.o31(o2, { o32: o0.o33[0] != "summary" });
