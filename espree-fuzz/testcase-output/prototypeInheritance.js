//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [];

function o1(o2)
{
  o3(o0, o2);
}

function o3(o4, value)
{
  o4[o4.length] = value;
}

function o7()
{
  return {
     o8  : {},
     o9  : { o10 : 1 },
     o11     : { o12: 1, o13:2, o14:3, o15:4, o16:5, o17:6, o18:7, o19:8, o20:9, o21:10, o22:11, o23:12, o24:13, o25:14, o26:15, o27:16, o28:17 }, // SimpleDictionaryTypeHandler
     o29  : { o10 : 1, 0 : 0},
     o30   : Object.create(null),
    "arr          " : [],
    "func         " : function(o33, o34) {},
    "regex        " : /abc/g,
    "date         " : new Date()
  }
}

var o36 = {
  "doNothing  " : function(o37) { },
  "addOneProp " : function(o37) { o37.o38 = 0 },
  "addTwoProps" : function(o37) { o37.o38 = 0; o37.o39 = 0; },
  "addIndex   " : function(o37) { o37[2] = 0; }
};

var o40 = {
  "numeric   " : 2,
  "nonNumeric" : "foo"
};

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
  "setter     " : o41,
  "nonWritable" : o47,
  "freezer    " : o49,
  "sealer     " : o51
};

var o54 = {
  "newProp     " : function(o37, o43) {},
  "existingProp" : function(o37, o43) { o37[o43] = "toBeOverwritten"; }
}

var o55 = 1;

for (var o56 in o53)
{
  for (var o57 in o36)
  {
    for (var o58 in o40)
    {
      for (var o59 = 0; o59 <= 1; o59++)
      {
        for (var o60 in o54)
        {
          var o61 = o7();
          for (var o62 in o61)
          {
            var o63 = (o59 === 0);
            
            var o64 = "Test " + o55++ + ": " + o56 + ", " + o62 + ", " +  o57 + ", " + o58 + ", " + o60 +
              ", shadow=" + o63;

            o65.o66(o64);

            o0 = [];

            var o67 = o53[o56];
            var o68 = o61[o62];
            var o43 = o40[o58];
            var o69 = o36[o57];
            var o70 = o54[o60];

            o69(o68);
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

            var o73 = (o56.indexOf("setter") >= 0);

            var o75 = [];
            if (o73 && !o63)
            {
               o3(o75, "set");
               o3(o75, "get");
            }

            if (o63)
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

            if (o0.length != o75.length)
            {
              o76 = true;
            }
            else
            {
              for (var o77 = 0; o77 < o0.length; o77++)
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
              o65.o66("FAILED: " + o64);
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

function o78(o4)
{
  var o79 = "";
  while (o4.length > 0)
  {
    o79 += o4.shift();
  }

  return o79;
}