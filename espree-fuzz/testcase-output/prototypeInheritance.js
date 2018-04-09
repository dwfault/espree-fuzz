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

function o5()
{
  return {
     o6  : {},
     o7  : { o8 : 1 },
     o9     : { o10: 1, o11:2, o12:3, o13:4, o14:5, o15:6, o16:7, o17:8, o18:9, o19:10, o20:11, o21:12, o22:13, o23:14, o24:15, o25:16, o26:17 }, // SimpleDictionaryTypeHandler
     o27  : { o8 : 1, 0 : 0},
     o28   : Object.create(null),
    "arr          " : [],
    "func         " : function(o29, o30) {},
    "regex        " : /abc/g,
    "date         " : new Date()
  }
}

var o31 = {
  "doNothing  " : function(o32) { },
  "addOneProp " : function(o32) { o32.o33 = 0 },
  "addTwoProps" : function(o32) { o32.o33 = 0; o32.o34 = 0; },
  "addIndex   " : function(o32) { o32[2] = 0; }
};

var o35 = {
  "numeric   " : 2,
  "nonNumeric" : "foo"
};

function o36(o37, o38)
{
  Object.defineProperty(o37, o38, {
    get: function() { o1("get"); return "getValue";},
    set: function(o2) { o1("set");  }
  });
}

function o39(o37, o38)
{
  Object.defineProperty(o37, o38, {
    writable : false,
    value : "protoValue"
  });
}

function o40(o37, o38)
{
  o37[o38] = "protoValue";
  Object.freeze(o37);
}

function o41(o37, o38)
{
  o37[o38] = "origProtoValue";
  Object.seal(o37);
  Object.defineProperty(o37, o38, {
    writable : false,
    value : "protoValue"
  });
}

var o42 = {
  "setter     " : o36,
  "nonWritable" : o39,
  "freezer    " : o40,
  "sealer     " : o41
};

var o43 = {
  "newProp     " : function(o32, o38) {},
  "existingProp" : function(o32, o38) { o32[o38] = "toBeOverwritten"; }
}

var o44 = 1;

for (var o45 in o42)
{
  for (var o46 in o31)
  {
    for (var o47 in o35)
    {
      for (var o48 = 0; o48 <= 1; o48++)
      {
        for (var o49 in o43)
        {
          var o50 = o5();
          for (var o51 in o50)
          {
            var o52 = (o48 === 0);
            
            var o53 = "Test " + o44++ + ": " + o45 + ", " + o51 + ", " +  o46 + ", " + o47 + ", " + o49 +
              ", shadow=" + o52;

            o54.o55(o53);

            o0 = [];

            var o56 = o42[o45];
            var o57 = o50[o51];
            var o38 = o35[o47];
            var o58 = o31[o46];
            var o59 = o43[o49];

            o58(o57);
            var o60 = Object.create(o57);
            var o61 = Object.create(o60);

            if (o52)
            {
              o60[o38] = "shadowValue";
            }

            o59(o57, o38);
            o56(o57, o38);        

            o61[o38] = "baseValue";
            var o2 = o61[o38];
            o1(o2);

            var o62 = (o45.indexOf("setter") >= 0);

            var o63 = [];
            if (o62 && !o52)
            {
               o3(o63, "set");
               o3(o63, "get");
            }

            if (o52)
            {
              o3(o63, "baseValue");
            }
            else if (o62)
            {
              o3(o63, "getValue");
            }
            else
            {
              o3(o63, "protoValue");
            }

            var o64 = false;

            if (o0.length != o63.length)
            {
              o64 = true;
            }
            else
            {
              for (var o65 = 0; o65 < o0.length; o65++)
              {
                if (o0[o65] !== o63[o65])
                {
                  o64 = true;
                  break;
                }
              }
            }

            if (o64)
            {
              o54.o55("FAILED: " + o53);
              o54.o55("Expected: " + o66(o63));
              o54.o55("Actual: " + o66(o0));
            }
            else
            {
              o54.o55("PASS");
            }
          }
        }
      }
    } 
  }
}

function o66(o4)
{
  var o67 = "";
  while (o4.length > 0)
  {
    o67 += o4.shift();
  }

  return o67;
}