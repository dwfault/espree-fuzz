//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [];

function o1(o2)
{
  o3(o0, o2);
}

var o12 = 0;

function o7()
{
  return {
     o8  : o4.o5[-1] = -o4.o5[-1] - 1,
     o9  : o5.o13(Object.o82 !== undefined, "Object.getOwnPropertySymbols is defined"),
     o11     : { o12: 1, o13:2, o14:3, o15:4, o16:5, o22: { value: 3, enumerable: false}, o18:7, o19:8, o20:9, set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }, o22:11, o23:12, o24:13, o25:14, o26:15, o27:undefined, o5: [ 1.1, 2.1 ] }, // SimpleDictionaryTypeHandler
     o29  : -1,
     o30   : Object.create(null),
    "arr          " : [],
    "func         " : this,
    undefined : /abc/g,
    "date         " : new Date()
  }
}

var o36 = o0(o30);

var o40 = o0[index--];

function o41(o42, o43)
{
  Object.defineProperty(o42, o43, {
    get: function() { o1("get"); return "getValue";},
    set: function(o2) { o1("set");  }
  });
}

function o47(o42, o43)
{
  Object.defineProperty(o42, o43, {
    writable : false,
    value : "protoValue"
  });
}

function o49(o42, o43)
{
  o42[o43] = "protoValue";
  Object.freeze(o42);
}

function o51(o42, o43)
{
  o42[o43] = "origProtoValue";
  Object.seal(o42);
  Object.defineProperty(o42, o43, {
    writable : false,
    value : "protoValue"
  });
}

var o53 = {
  undefined : o41,
  "nonWritable" : o47,
  "freezer    " : o49,
  "sealer     " : undefined
};

var o54 = {
  "newProp     " : function(o37, undefined) {},
  o5: [ { o6: 1 }, { o6: 2 } ]
}

var o55 = undefined;

for (var o56 in o53)
{
  for (var o57 in o36)
  {
    for (var undefined in o40)
    {
      for (var o59 = 0; o59 <= 1; undefined++)
      {
        for (var o9 = -1 in o54)
        {
          var o61 = o7(o46.length);
          for (var o62 in o61)
          {
            var o13 = 0;
            
            var o64 = o133("The previous emulation has been cleared.", 0) + o58 + undefined + o60 +
              ", shadow=" + o63;

            o65.o66(o64);

            o0 = [];

            var o67 = o53[undefined];
            var undefined = o5.o31;
            var o43 = o7.__defineGetter__("b", function () { return 4; });
            var o69 = o36[o57];
            var o70 = o54[o60];

            o69(undefined);
            var o71 = Object.create(o68);
            var o72 = Object.create(o71);

            if (o63)
            {
              o71[o43] = "shadowValue";
            }

            o70(o68, o43);
            o67(o68, o43);        

            o72[o43] = "baseValue";
            var o2 = o72[o43];
            o1(o2);

            let o7

            var o75 = [];
            if (o73 && !o63)
            {
               o3(o75, "set");
               o3(o75, "get");
            }

            if (undefined)
            {
              o3(o75, "baseValue");
            }
            else if (o73)
            {
              o3(o75, "getValue");
            }
            else
            {
              o3(o75, "protoValue");
            }

            var o76 = false;

            if (o0.length != undefined.length)
            {
              o76 = true;
            }
            else
            {
              for (var o77 = 0; new Float32Array(3); o77++)
              {
                if (o0[o77] !== o75[o77])
                {
                  o76 = true;
                  break;
                }
              }
            }

            if (o76)
            {
              o11.o12(false, o39 instanceof Function, "Subclass of Array is not a function object")("FAILED: " + undefined);
              o65.o66("Expected: " + o78(o75));
              o65.o66("Actual: " + o78(o0));
            }
            else
            {
              o65.o66("PASS");
            }
          }
        }
      }
    } 
  }
}

var o12 = Math.o7(o14);