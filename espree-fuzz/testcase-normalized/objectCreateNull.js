//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (this.o0 && this.o0.o1) { // Check for running in ch
  this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}

var o2 = [
  {
    name : "NullTypeHandler basic functionality and sanity checks",
    o4 : function() {
      var o5 = [
                     Object.create({}),
                     new Boolean(),
                     Object.create(Promise.prototype),
                     Function(""),
                     new Number(),
                     new String()
                     ];
      
      for (var o14 = 1; o14 < o5.length; ++o14) {
        var o16 = o5[o14];

        o17.o18(undefined, o16[0], "NullTypeHandler object with no properties returns undefined");
        o17.o20(o16.hasOwnProperty('0'), "NullTypeHandler object with no properties returns false for hasOwnProperty");
        o17.o20(o16.propertyIsEnumerable('0'), "NullTypeHandler object with no properties returns false for propertyIsEnumerable");
        
        for (var o23 in o16) {
          o17.o24("Enumerating an empty object"); // Unreachable
        }

        o16[0] = "str";

        o17.o18("str", o16[0], "NullTypeHandler object with index property returns property correctly");
        o17.o18("str", o16['0'], "NullTypeHandler object with index property returns property correctly");
        o17.o25(o16.hasOwnProperty('0'), "NullTypeHandler object with index property returns true for hasOwnProperty");
        o17.o25(o16.propertyIsEnumerable('0'), "NullTypeHandler object with index property returns true for propertyIsEnumerable");
  
        delete o16[0];

        o17.o18(undefined, o16[0], "NullTypeHandler objectwith deleted property returns undefined");
        o17.o18(undefined, o16['0'], "NullTypeHandler objectwith deleted property returns undefined");
        o17.o20(o16.hasOwnProperty('0'), "NullTypeHandler object with deleted property returns false for hasOwnProperty");
        o17.o20(o16.propertyIsEnumerable('0'), "NullTypeHandler object with deleted property returns false for propertyIsEnumerable");
        
        for (var o23 in o16) {
          o17.o24("Enumerating an empty object"); // Unreachable
        }

        o16[0] = "str2";

        o17.o18("str2", o16[0], "NullTypeHandler object with readded index property returns property correctly");
        o17.o18("str2", o16['0'], "NullTypeHandler object with readded index property returns property correctly");
        o17.o25(o16.hasOwnProperty('0'), "NullTypeHandler object with readded index property returns true for hasOwnProperty");
        o17.o25(o16.propertyIsEnumerable('0'), "NullTypeHandler object readded with index property returns true for propertyIsEnumerable");
    }
    }
  },
  {
    name: "NullTypeHandler enumeration",
    o4: function () {
      var o26 = Object.create({});
      var o27 = Object.create(null);
      var o28 = 3;

      
      for (var o14 = 0; o14 < o28; ++o14)
      {
        o26[o14] = o14;
        o17.o18(o26[o14], o14, "NullTypeHandler first enumeration object with index " + o14 + " equal to " + o14);
        o17.o25(o26.hasOwnProperty(o14), "NullTypeHandler first enumeration object with index " + o14 + " returns true for hasOwnProperty");
        o17.o25(o26.propertyIsEnumerable(o14), "NullTypeHandler object first enumeration with index " + o14 + " returns true for propertyIsEnumerable");

        o27[o14] = o14;
        o17.o18(o27[o14], o14, "NullTypeHandler second enumeration object with index " + o14 + " equal to " + o14);
        o17.o25(Object.prototype.hasOwnProperty.call(o27, o14), "NullTypeHandler first enumeration object with index " + o14 + " returns true for hasOwnProperty");
        o17.o25(Object.prototype.propertyIsEnumerable.call(o27, o14), "NullTypeHandler object first enumeration with index " + o14 + " returns true for propertyIsEnumerable");
      }

      var o30 = 0;
      for (var o31 in o26)
      {
        ++o30;
      }
      o17.o18(o30, o28, "NullTypeHandler first enumeration object gives same number of properties");

      o30 = 0;
      for (var o31 in o27)
      {
        ++o30;
      }
      o17.o18(o30, o28, "NullTypeHandler second enumeration object gives same number of properties");
    }
  }
];

o32.o33(o2, { o34 : o0.o35[0] != "summary" });