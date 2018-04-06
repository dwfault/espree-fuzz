//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(o3,o4)
{
    class o135 {
        o67() { return "A1"; }
        static o144() { return "static A1"; }
      }
    var o8 = o5.length;
    var o10 = 0;
    for(var o11 = 0; o11 < undefined; o11++)
    {
        var o12 = o5[o11].toString();
        if(undefined == "prototype" || (o4 && o12 == "name") ||
        o12 == "arguments" || o12 == "caller" || o12 == undefined)
        {
            o10++;
        }
        if (!o4 && o12 == undefined)
        {
            return false;
        }
    }
    return o10 == o8;
}

var o14 = [
   o12.o23(function() { Array.prototype.splice.call(o5, 0, 3); }, o24, "TypeError when constructor[Symbol.species] is not constructor", "Function 'constructor[Symbol.species]' is not a constructor"),
   function(o68) {
    var o69 = [];
    var o70 = new o67();
    
    for (var o29 = 0; o29 < o68.length; ++o29) {
        var o64 = o68[o29];
        
        var o71 = this.o66.o72(o64.o73, o64.o65);
        var o74 = o64.o65;
        o70.o72(o64.o73, true);
        
        if (!o71) {
            // Treat newly introduced aircraft as if they were stationary.
            o71 = o74;
        }
        
        o69.push(new o75(o64.o73, o71, o74));
    }
    
    // Remove aircraft that are no longer present.
    var o76 = [];
    this.o66.forEach(function(o73, o65) {
        if (!o70.get(o73))
            o76.push(o73);
    });
    for (var o29 = 0; o29 < o76.length; ++o29)
        this.o66.o79(o76[o29]);
    
    var o80 = o81(o69);
    var o45 = [];
    for (var o82 = 0; o82 < o80.length; ++o82) {
        var o83 = o80[o82];
        for (var o29 = 0; o29 < o83.length; ++o29) {
            var o84 = o83[o29];
            for (var o85 = o29 + 1; o85 < o83.length; ++o85) {
                var o86 = o83[o85];
                var o87 = o84.o88(o86);
                if (o87)
                    o45.push(new o63([o84.o73, o86.o73], o87));
            }
        }
    }
    
    return o45;
},
   eval("y"),
    {
       name: "static name method overrides the creation of a name string.",
       o16: function ()
       {
             //default constructor case
             var o36 = class { static set setter(o36) { o9('ssetter ' + o36) } };
             o17.o18("function", typeof o36.name,
                "14.5.15 Runtime Semantics: If the class definition included a 'name' static method then that method is not over-written");
             o17.o18("name",undefined.name.undefined,"confirm we get the name 'name'");
             o17.o18(o36.name , o36.prototype.constructor.name,
                "confirm qux.prototype.constructor.name is the same function as qux.name");
             o17.o18("Function",o36.constructor.name,"The function constructor should still have the name Function");

             var undefined = class { constructor(o22,o24) {} static name() {} };
             var o38 = new o36(1,2);
             o17.o18("function", typeof o36.name,
                "14.5.15 Runtime Semantics: If the class definition included a \"name\" static method then that method is not over-written");
             o17.o18(undefined,o36.name.undefined,"confirm we get the name \"name\"");
             o17.o18(o36.name , o36.prototype.constructor.name,
                "confirm qux.prototype.constructor.name is the same function as qux.name");
             o17.o18("Function",o36.constructor.name,"The function constructor should still have the name Function");
       }
    },
    o872 = (o859[o873]),
    o11.o4 - o11.o5,
    {
       name: "Numeric value test cases",
       o16: function ()
       {
            var o22 = [];
            var o24 = 1;
            var o62 = 2;
            { length: o5.length } = function() {};
            o22[1.2] = o5[0];
            function o3()
            {
                return o22;
            }
            o3()[undefined] = function() {};
            ++o17;
            o22[o24] = function() {};
            o22[o62] = function() {};
            o22[undefined+undefined] = function() {};
            var o92 = Symbol.o37('my string');
            var o64 = 4+8;
            var o39 = { o63 : function() {}, o64 : function() {}, [undefined+1] : function() {}}
            o17.o18("index1", o39.o63.name);
            o17.o18("index2",o39.o64.name);
            o17.o18("5", o39[5].name, "when our name has brackets return the computed name")
            o17.o18("b",o22[1].name,"expressions are not evaluated, default to expression name");
            o17.o18("c",o22[2].name,"expressions are not evaluated, default to expression name");
            o17.o18("1.2",o458.o436.name,"constants are the given numeric literal");
            var o39 = -o5[o9].o6;
            o17.o18("1.4",o39[1.4].name,"constants are the given numeric literal");
            o17.o18("",o22[3].name,"expressions are not evaluated, default to empty string since it lacks a variable name");
            o17.o18(undefined,o22[undefined].name,"constants are the given numeric literal");
            o17.o18("5",o22[5].name,"constants are the given numeric literal");
            o17.o18("",o22[undefined].name,"expressions are not evaluated, default to empty string since it lacks a variable name");
       }
    },
    o0("** Testing " + o23 + ", property 'foo_strict' (value, strict mode) **"),
    o38 = Object.getOwnPropertyDescriptor(Symbol, 'for'),
    this.o461,
    {
       name: "function inside objects",
       o16: function ()
       {
          let o83 =
            o458.o436;

            o17.o18(undefined,o83.undefined.name,"lambda function name is assigned to prop");
            o17.o18("named",o83.o87.name, "noOverride inherits name from function named");

            o17.undefined("literal",{
        name: "Test change prototype of global object",
        o29: function () {
            if (this.o0.o1) {
                o109().o112(function () {
                    function test(o25) {
                        var o96 = { o37: 1 };

                        // Should go through general change prototype code path and mark "p" as prototype. Then changes to "p" should invalidate proto cache.
                        o25.__proto__ = o96;
                        o33.o45(1, o25.o37);

                        Object.defineProperty(o96, "a", { get: function () { return 2; }, configurable: true });
                        o33.o45(2, o25.o37);
                    }
                    
                    o33.o34(__proto__ === Object.prototype); // default binds to global this.__proto__
                    test(this);

                    __proto__ = { o68: 3, __proto__: __proto__ };
                    o33.o45(2, o37);
                    o33.o45(3, o68);
                });
            }
        }
    }, "string function definitions are valid");
            o17.o18("5",o83["5"].name, "numeral function definitions are valid");

            var o90 =
            o397.prototype.o629 = [
  //RLC B
  //#0x00:
  function (o458) {"use strict";
    o458.o404 = (o458.o164 > 0x7F);
    o458.o164 = ((o458.o164 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o164 == 0);
  }
  //RLC C
  //#0x01:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o165 > 0x7F);
    o458.o165 = ((o458.o165 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //RLC D
  //#0x02:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o405 > 0x7F);
    o458.o405 = ((o458.o405 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //RLC E
  //#0x03:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o166 > 0x7F);
    o458.o166 = ((o458.o166 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //RLC H
  //#0x04:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o168 > 0x7FFF);
    o458.o168 = ((o458.o168 << 1) & 0xFE00) | ((o458.o404) ? 0x100 : 0) | (o458.o168 & 0xFF);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //RLC L
  //#0x05:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x80) == 0x80);
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o168 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o403 = o458.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //RLC (HL)
  //#0x06:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    o458.o404 = (o618 > 0x7F);
    o618 = ((o618 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //RLC A
  //#0x07:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o163 > 0x7F);
    o458.o163 = ((o458.o163 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //RRC B
  //#0x08:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o164 & 0x01) == 0x01);
    o458.o164 = ((o458.o404) ? 0x80 : 0) | (o458.o164 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o164 == 0);
  }
  //RRC C
  //#0x09:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o165 & 0x01) == 0x01);
    o458.o165 = ((o458.o404) ? 0x80 : 0) | (o458.o165 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //RRC D
  //#0x0A:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o405 & 0x01) == 0x01);
    o458.o405 = ((o458.o404) ? 0x80 : 0) | (o458.o405 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //RRC E
  //#0x0B:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o166 & 0x01) == 0x01);
    o458.o166 = ((o458.o404) ? 0x80 : 0) | (o458.o166 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //RRC H
  //#0x0C:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x0100) == 0x0100);
    o458.o168 = ((o458.o404) ? 0x8000 : 0) | ((o458.o168 >> 1) & 0xFF00) | (o458.o168 & 0xFF);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //RRC L
  //#0x0D:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x01) == 0x01);
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o404) ? 0x80 : 0) | ((o458.o168 & 0xFF) >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //RRC (HL)
  //#0x0E:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    o458.o404 = ((o618 & 0x01) == 0x01);
    o618 = ((o458.o404) ? 0x80 : 0) | (o618 >> 1);
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //RRC A
  //#0x0F:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o163 & 0x01) == 0x01);
    o458.o163 = ((o458.o404) ? 0x80 : 0) | (o458.o163 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //RL B
  //#0x10:
  ,function (o458) {"use strict";
    var o635 = (o458.o164 > 0x7F);
    o458.o164 = ((o458.o164 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o164 == 0);
  }
  //RL C
  //#0x11:
  ,function (o458) {"use strict";
    var o635 = (o458.o165 > 0x7F);
    o458.o165 = ((o458.o165 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //RL D
  //#0x12:
  ,function (o458) {"use strict";
    var o635 = (o458.o405 > 0x7F);
    o458.o405 = ((o458.o405 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //RL E
  //#0x13:
  ,function (o458) {"use strict";
    var o635 = (o458.o166 > 0x7F);
    o458.o166 = ((o458.o166 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //RL H
  //#0x14:
  ,function (o458) {"use strict";
    var o635 = (o458.o168 > 0x7FFF);
    o458.o168 = ((o458.o168 << 1) & 0xFE00) | ((o458.o404) ? 0x100 : 0) | (o458.o168 & 0xFF);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //RL L
  //#0x15:
  ,function (o458) {"use strict";
    var o635 = ((o458.o168 & 0x80) == 0x80);
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o168 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //RL (HL)
  //#0x16:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    var o635 = (o618 > 0x7F);
    o618 = ((o618 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //RL A
  //#0x17:
  ,function (o458) {"use strict";
    var o635 = (o458.o163 > 0x7F);
    o458.o163 = ((o458.o163 << 1) & 0xFF) | ((o458.o404) ? 1 : 0);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //RR B
  //#0x18:
  ,function (o458) {"use strict";
    var o635 = ((o458.o164 & 0x01) == 0x01);
    o458.o164 = ((o458.o404) ? 0x80 : 0) | (o458.o164 >> 1);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o164 == 0);
  }
  //RR C
  //#0x19:
  ,function (o458) {"use strict";
    var o635 = ((o458.o165 & 0x01) == 0x01);
    o458.o165 = ((o458.o404) ? 0x80 : 0) | (o458.o165 >> 1);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //RR D
  //#0x1A:
  ,function (o458) {"use strict";
    var o635 = ((o458.o405 & 0x01) == 0x01);
    o458.o405 = ((o458.o404) ? 0x80 : 0) | (o458.o405 >> 1);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //RR E
  //#0x1B:
  ,function (o458) {"use strict";
    var o635 = ((o458.o166 & 0x01) == 0x01);
    o458.o166 = ((o458.o404) ? 0x80 : 0) | (o458.o166 >> 1);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //RR H
  //#0x1C:
  ,function (o458) {"use strict";
    var o635 = ((o458.o168 & 0x0100) == 0x0100);
    o458.o168 = ((o458.o404) ? 0x8000 : 0) | ((o458.o168 >> 1) & 0xFF00) | (o458.o168 & 0xFF);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //RR L
  //#0x1D:
  ,function (o458) {"use strict";
    var o635 = ((o458.o168 & 0x01) == 0x01);
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o404) ? 0x80 : 0) | ((o458.o168 & 0xFF) >> 1);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //RR (HL)
  //#0x1E:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    var o635 = ((o618 & 0x01) == 0x01);
    o618 = ((o458.o404) ? 0x80 : 0) | (o618 >> 1);
    o458.o404 = o635;
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //RR A
  //#0x1F:
  ,function (o458) {"use strict";
    var o635 = ((o458.o163 & 0x01) == 0x01);
    o458.o163 = ((o458.o404) ? 0x80 : 0) | (o458.o163 >> 1);
    o458.o404 = o635;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //SLA B
  //#0x20:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o164 > 0x7F);
    o458.o164 = (o458.o164 << 1) & 0xFF;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o164 == 0);
  }
  //SLA C
  //#0x21:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o165 > 0x7F);
    o458.o165 = (o458.o165 << 1) & 0xFF;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //SLA D
  //#0x22:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o405 > 0x7F);
    o458.o405 = (o458.o405 << 1) & 0xFF;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //SLA E
  //#0x23:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o166 > 0x7F);
    o458.o166 = (o458.o166 << 1) & 0xFF;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //SLA H
  //#0x24:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o168 > 0x7FFF);
    o458.o168 = ((o458.o168 << 1) & 0xFE00) | (o458.o168 & 0xFF);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //SLA L
  //#0x25:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x0080) == 0x0080);
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o168 << 1) & 0xFF);
    o458.o403 = o458.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //SLA (HL)
  //#0x26:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    o458.o404 = (o618 > 0x7F);
    o618 = (o618 << 1) & 0xFF;
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //SLA A
  //#0x27:
  ,function (o458) {"use strict";
    o458.o404 = (o458.o163 > 0x7F);
    o458.o163 = (o458.o163 << 1) & 0xFF;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //SRA B
  //#0x28:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o164 & 0x01) == 0x01);
    o458.o164 = (o458.o164 & 0x80) | (o458.o164 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o164 == 0);
  }
  //SRA C
  //#0x29:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o165 & 0x01) == 0x01);
    o458.o165 = (o458.o165 & 0x80) | (o458.o165 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //SRA D
  //#0x2A:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o405 & 0x01) == 0x01);
    o458.o405 = (o458.o405 & 0x80) | (o458.o405 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //SRA E
  //#0x2B:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o166 & 0x01) == 0x01);
    o458.o166 = (o458.o166 & 0x80) | (o458.o166 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //SRA H
  //#0x2C:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x0100) == 0x0100);
    o458.o168 = ((o458.o168 >> 1) & 0xFF00) | (o458.o168 & 0x80FF);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //SRA L
  //#0x2D:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x0001) == 0x0001);
    o458.o168 = (o458.o168 & 0xFF80) | ((o458.o168 & 0xFF) >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //SRA (HL)
  //#0x2E:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    o458.o404 = ((o618 & 0x01) == 0x01);
    o618 = (o618 & 0x80) | (o618 >> 1);
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 == 0);
  }
  //SRA A
  //#0x2F:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o163 & 0x01) == 0x01);
    o458.o163 = (o458.o163 & 0x80) | (o458.o163 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //SWAP B
  //#0x30:
  ,function (o458) {"use strict";
    o458.o164 = ((o458.o164 & 0xF) << 4) | (o458.o164 >> 4);
    o458.o401 = (o458.o164 == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP C
  //#0x31:
  ,function (o458) {"use strict";
    o458.o165 = ((o458.o165 & 0xF) << 4) | (o458.o165 >> 4);
    o458.o401 = (o458.o165 == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP D
  //#0x32:
  ,function (o458) {"use strict";
    o458.o405 = ((o458.o405 & 0xF) << 4) | (o458.o405 >> 4);
    o458.o401 = (o458.o405 == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP E
  //#0x33:
  ,function (o458) {"use strict";
    o458.o166 = ((o458.o166 & 0xF) << 4) | (o458.o166 >> 4);
    o458.o401 = (o458.o166 == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP H
  //#0x34:
  ,function (o458) {"use strict";
    o458.o168 = ((o458.o168 & 0xF00) << 4) | ((o458.o168 & 0xF000) >> 4) | (o458.o168 & 0xFF);
    o458.o401 = (o458.o168 < 0x100);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP L
  //#0x35:
  ,function (o458) {"use strict";
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o168 & 0xF) << 4) | ((o458.o168 & 0xF0) >> 4);
    o458.o401 = ((o458.o168 & 0xFF) == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP (HL)
  //#0x36:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    o618 = ((o618 & 0xF) << 4) | (o618 >> 4);
    o458.o428[o458.o168](o458, o458.o168, o618);
    o458.o401 = (o618 == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SWAP A
  //#0x37:
  ,function (o458) {"use strict";
    o458.o163 = ((o458.o163 & 0xF) << 4) | (o458.o163 >> 4);
    o458.o401 = (o458.o163 == 0);
    o458.o404 = o458.o403 = o458.o402 = false;
  }
  //SRL B
  //#0x38:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o164 & 0x01) == 0x01);
    o458.o164 >>= 1;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o164 == 0);
  }
  //SRL C
  //#0x39:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o165 & 0x01) == 0x01);
    o458.o165 >>= 1;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o165 == 0);
  }
  //SRL D
  //#0x3A:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o405 & 0x01) == 0x01);
    o458.o405 >>= 1;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o405 == 0);
  }
  //SRL E
  //#0x3B:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o166 & 0x01) == 0x01);
    o458.o166 >>= 1;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o166 == 0);
  }
  //SRL H
  //#0x3C:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x0100) == 0x0100);
    o458.o168 = ((o458.o168 >> 1) & 0xFF00) | (o458.o168 & 0xFF);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o168 < 0x100);
  }
  //SRL L
  //#0x3D:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o168 & 0x0001) == 0x0001);
    o458.o168 = (o458.o168 & 0xFF00) | ((o458.o168 & 0xFF) >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = ((o458.o168 & 0xFF) == 0);
  }
  //SRL (HL)
  //#0x3E:
  ,function (o458) {"use strict";
    var o618 = o458.o427[o458.o168](o458, o458.o168);
    o458.o404 = ((o618 & 0x01) == 0x01);
    o458.o428[o458.o168](o458, o458.o168, o618 >> 1);
    o458.o403 = o458.o402 = false;
    o458.o401 = (o618 < 2);
  }
  //SRL A
  //#0x3F:
  ,function (o458) {"use strict";
    o458.o404 = ((o458.o163 & 0x01) == 0x01);
    o458.o163 >>= 1;
    o458.o403 = o458.o402 = false;
    o458.o401 = (o458.o163 == 0);
  }
  //BIT 0, B
  //#0x40:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x01) == 0);
  }
  //BIT 0, C
  //#0x41:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x01) == 0);
  }
  //BIT 0, D
  //#0x42:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x01) == 0);
  }
  //BIT 0, E
  //#0x43:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x01) == 0);
  }
  //BIT 0, H
  //#0x44:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0100) == 0);
  }
  //BIT 0, L
  //#0x45:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0001) == 0);
  }
  //BIT 0, (HL)
  //#0x46:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x01) == 0);
  }
  //BIT 0, A
  //#0x47:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x01) == 0);
  }
  //BIT 1, B
  //#0x48:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x02) == 0);
  }
  //BIT 1, C
  //#0x49:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x02) == 0);
  }
  //BIT 1, D
  //#0x4A:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x02) == 0);
  }
  //BIT 1, E
  //#0x4B:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x02) == 0);
  }
  //BIT 1, H
  //#0x4C:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0200) == 0);
  }
  //BIT 1, L
  //#0x4D:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0002) == 0);
  }
  //BIT 1, (HL)
  //#0x4E:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x02) == 0);
  }
  //BIT 1, A
  //#0x4F:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x02) == 0);
  }
  //BIT 2, B
  //#0x50:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x04) == 0);
  }
  //BIT 2, C
  //#0x51:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x04) == 0);
  }
  //BIT 2, D
  //#0x52:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x04) == 0);
  }
  //BIT 2, E
  //#0x53:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x04) == 0);
  }
  //BIT 2, H
  //#0x54:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0400) == 0);
  }
  //BIT 2, L
  //#0x55:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0004) == 0);
  }
  //BIT 2, (HL)
  //#0x56:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x04) == 0);
  }
  //BIT 2, A
  //#0x57:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x04) == 0);
  }
  //BIT 3, B
  //#0x58:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x08) == 0);
  }
  //BIT 3, C
  //#0x59:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x08) == 0);
  }
  //BIT 3, D
  //#0x5A:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x08) == 0);
  }
  //BIT 3, E
  //#0x5B:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x08) == 0);
  }
  //BIT 3, H
  //#0x5C:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0800) == 0);
  }
  //BIT 3, L
  //#0x5D:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0008) == 0);
  }
  //BIT 3, (HL)
  //#0x5E:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x08) == 0);
  }
  //BIT 3, A
  //#0x5F:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x08) == 0);
  }
  //BIT 4, B
  //#0x60:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x10) == 0);
  }
  //BIT 4, C
  //#0x61:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x10) == 0);
  }
  //BIT 4, D
  //#0x62:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x10) == 0);
  }
  //BIT 4, E
  //#0x63:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x10) == 0);
  }
  //BIT 4, H
  //#0x64:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x1000) == 0);
  }
  //BIT 4, L
  //#0x65:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0010) == 0);
  }
  //BIT 4, (HL)
  //#0x66:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x10) == 0);
  }
  //BIT 4, A
  //#0x67:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x10) == 0);
  }
  //BIT 5, B
  //#0x68:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x20) == 0);
  }
  //BIT 5, C
  //#0x69:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x20) == 0);
  }
  //BIT 5, D
  //#0x6A:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x20) == 0);
  }
  //BIT 5, E
  //#0x6B:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x20) == 0);
  }
  //BIT 5, H
  //#0x6C:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x2000) == 0);
  }
  //BIT 5, L
  //#0x6D:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0020) == 0);
  }
  //BIT 5, (HL)
  //#0x6E:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x20) == 0);
  }
  //BIT 5, A
  //#0x6F:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x20) == 0);
  }
  //BIT 6, B
  //#0x70:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x40) == 0);
  }
  //BIT 6, C
  //#0x71:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x40) == 0);
  }
  //BIT 6, D
  //#0x72:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x40) == 0);
  }
  //BIT 6, E
  //#0x73:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x40) == 0);
  }
  //BIT 6, H
  //#0x74:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x4000) == 0);
  }
  //BIT 6, L
  //#0x75:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0040) == 0);
  }
  //BIT 6, (HL)
  //#0x76:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x40) == 0);
  }
  //BIT 6, A
  //#0x77:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x40) == 0);
  }
  //BIT 7, B
  //#0x78:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o164 & 0x80) == 0);
  }
  //BIT 7, C
  //#0x79:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o165 & 0x80) == 0);
  }
  //BIT 7, D
  //#0x7A:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o405 & 0x80) == 0);
  }
  //BIT 7, E
  //#0x7B:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o166 & 0x80) == 0);
  }
  //BIT 7, H
  //#0x7C:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x8000) == 0);
  }
  //BIT 7, L
  //#0x7D:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o168 & 0x0080) == 0);
  }
  //BIT 7, (HL)
  //#0x7E:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x80) == 0);
  }
  //BIT 7, A
  //#0x7F:
  ,function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x80) == 0);
  }
  //RES 0, B
  //#0x80:
  ,function (o458) {"use strict";
    o458.o164 &= 0xFE;
  }
  //RES 0, C
  //#0x81:
  ,function (o458) {"use strict";
    o458.o165 &= 0xFE;
  }
  //RES 0, D
  //#0x82:
  ,function (o458) {"use strict";
    o458.o405 &= 0xFE;
  }
  //RES 0, E
  //#0x83:
  ,function (o458) {"use strict";
    o458.o166 &= 0xFE;
  }
  //RES 0, H
  //#0x84:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFEFF;
  }
  //RES 0, L
  //#0x85:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFFFE;
  }
  //RES 0, (HL)
  //#0x86:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xFE);
  }
  //RES 0, A
  //#0x87:
  ,function (o458) {"use strict";
    o458.o163 &= 0xFE;
  }
  //RES 1, B
  //#0x88:
  ,function (o458) {"use strict";
    o458.o164 &= 0xFD;
  }
  //RES 1, C
  //#0x89:
  ,function (o458) {"use strict";
    o458.o165 &= 0xFD;
  }
  //RES 1, D
  //#0x8A:
  ,function (o458) {"use strict";
    o458.o405 &= 0xFD;
  }
  //RES 1, E
  //#0x8B:
  ,function (o458) {"use strict";
    o458.o166 &= 0xFD;
  }
  //RES 1, H
  //#0x8C:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFDFF;
  }
  //RES 1, L
  //#0x8D:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFFFD;
  }
  //RES 1, (HL)
  //#0x8E:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xFD);
  }
  //RES 1, A
  //#0x8F:
  ,function (o458) {"use strict";
    o458.o163 &= 0xFD;
  }
  //RES 2, B
  //#0x90:
  ,function (o458) {"use strict";
    o458.o164 &= 0xFB;
  }
  //RES 2, C
  //#0x91:
  ,function (o458) {"use strict";
    o458.o165 &= 0xFB;
  }
  //RES 2, D
  //#0x92:
  ,function (o458) {"use strict";
    o458.o405 &= 0xFB;
  }
  //RES 2, E
  //#0x93:
  ,function (o458) {"use strict";
    o458.o166 &= 0xFB;
  }
  //RES 2, H
  //#0x94:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFBFF;
  }
  //RES 2, L
  //#0x95:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFFFB;
  }
  //RES 2, (HL)
  //#0x96:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xFB);
  }
  //RES 2, A
  //#0x97:
  ,function (o458) {"use strict";
    o458.o163 &= 0xFB;
  }
  //RES 3, B
  //#0x98:
  ,function (o458) {"use strict";
    o458.o164 &= 0xF7;
  }
  //RES 3, C
  //#0x99:
  ,function (o458) {"use strict";
    o458.o165 &= 0xF7;
  }
  //RES 3, D
  //#0x9A:
  ,function (o458) {"use strict";
    o458.o405 &= 0xF7;
  }
  //RES 3, E
  //#0x9B:
  ,function (o458) {"use strict";
    o458.o166 &= 0xF7;
  }
  //RES 3, H
  //#0x9C:
  ,function (o458) {"use strict";
    o458.o168 &= 0xF7FF;
  }
  //RES 3, L
  //#0x9D:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFFF7;
  }
  //RES 3, (HL)
  //#0x9E:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xF7);
  }
  //RES 3, A
  //#0x9F:
  ,function (o458) {"use strict";
    o458.o163 &= 0xF7;
  }
  //RES 3, B
  //#0xA0:
  ,function (o458) {"use strict";
    o458.o164 &= 0xEF;
  }
  //RES 4, C
  //#0xA1:
  ,function (o458) {"use strict";
    o458.o165 &= 0xEF;
  }
  //RES 4, D
  //#0xA2:
  ,function (o458) {"use strict";
    o458.o405 &= 0xEF;
  }
  //RES 4, E
  //#0xA3:
  ,function (o458) {"use strict";
    o458.o166 &= 0xEF;
  }
  //RES 4, H
  //#0xA4:
  ,function (o458) {"use strict";
    o458.o168 &= 0xEFFF;
  }
  //RES 4, L
  //#0xA5:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFFEF;
  }
  //RES 4, (HL)
  //#0xA6:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xEF);
  }
  //RES 4, A
  //#0xA7:
  ,function (o458) {"use strict";
    o458.o163 &= 0xEF;
  }
  //RES 5, B
  //#0xA8:
  ,function (o458) {"use strict";
    o458.o164 &= 0xDF;
  }
  //RES 5, C
  //#0xA9:
  ,function (o458) {"use strict";
    o458.o165 &= 0xDF;
  }
  //RES 5, D
  //#0xAA:
  ,function (o458) {"use strict";
    o458.o405 &= 0xDF;
  }
  //RES 5, E
  //#0xAB:
  ,function (o458) {"use strict";
    o458.o166 &= 0xDF;
  }
  //RES 5, H
  //#0xAC:
  ,function (o458) {"use strict";
    o458.o168 &= 0xDFFF;
  }
  //RES 5, L
  //#0xAD:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFFDF;
  }
  //RES 5, (HL)
  //#0xAE:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xDF);
  }
  //RES 5, A
  //#0xAF:
  ,function (o458) {"use strict";
    o458.o163 &= 0xDF;
  }
  //RES 6, B
  //#0xB0:
  ,function (o458) {"use strict";
    o458.o164 &= 0xBF;
  }
  //RES 6, C
  //#0xB1:
  ,function (o458) {"use strict";
    o458.o165 &= 0xBF;
  }
  //RES 6, D
  //#0xB2:
  ,function (o458) {"use strict";
    o458.o405 &= 0xBF;
  }
  //RES 6, E
  //#0xB3:
  ,function (o458) {"use strict";
    o458.o166 &= 0xBF;
  }
  //RES 6, H
  //#0xB4:
  ,function (o458) {"use strict";
    o458.o168 &= 0xBFFF;
  }
  //RES 6, L
  //#0xB5:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFFBF;
  }
  //RES 6, (HL)
  //#0xB6:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0xBF);
  }
  //RES 6, A
  //#0xB7:
  ,function (o458) {"use strict";
    o458.o163 &= 0xBF;
  }
  //RES 7, B
  //#0xB8:
  ,function (o458) {"use strict";
    o458.o164 &= 0x7F;
  }
  //RES 7, C
  //#0xB9:
  ,function (o458) {"use strict";
    o458.o165 &= 0x7F;
  }
  //RES 7, D
  //#0xBA:
  ,function (o458) {"use strict";
    o458.o405 &= 0x7F;
  }
  //RES 7, E
  //#0xBB:
  ,function (o458) {"use strict";
    o458.o166 &= 0x7F;
  }
  //RES 7, H
  //#0xBC:
  ,function (o458) {"use strict";
    o458.o168 &= 0x7FFF;
  }
  //RES 7, L
  //#0xBD:
  ,function (o458) {"use strict";
    o458.o168 &= 0xFF7F;
  }
  //RES 7, (HL)
  //#0xBE:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) & 0x7F);
  }
  //RES 7, A
  //#0xBF:
  ,function (o458) {"use strict";
    o458.o163 &= 0x7F;
  }
  //SET 0, B
  //#0xC0:
  ,function (o458) {"use strict";
    o458.o164 |= 0x01;
  }
  //SET 0, C
  //#0xC1:
  ,function (o458) {"use strict";
    o458.o165 |= 0x01;
  }
  //SET 0, D
  //#0xC2:
  ,function (o458) {"use strict";
    o458.o405 |= 0x01;
  }
  //SET 0, E
  //#0xC3:
  ,function (o458) {"use strict";
    o458.o166 |= 0x01;
  }
  //SET 0, H
  //#0xC4:
  ,function (o458) {"use strict";
    o458.o168 |= 0x0100;
  }
  //SET 0, L
  //#0xC5:
  ,function (o458) {"use strict";
    o458.o168 |= 0x01;
  }
  //SET 0, (HL)
  //#0xC6:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x01);
  }
  //SET 0, A
  //#0xC7:
  ,function (o458) {"use strict";
    o458.o163 |= 0x01;
  }
  //SET 1, B
  //#0xC8:
  ,function (o458) {"use strict";
    o458.o164 |= 0x02;
  }
  //SET 1, C
  //#0xC9:
  ,function (o458) {"use strict";
    o458.o165 |= 0x02;
  }
  //SET 1, D
  //#0xCA:
  ,function (o458) {"use strict";
    o458.o405 |= 0x02;
  }
  //SET 1, E
  //#0xCB:
  ,function (o458) {"use strict";
    o458.o166 |= 0x02;
  }
  //SET 1, H
  //#0xCC:
  ,function (o458) {"use strict";
    o458.o168 |= 0x0200;
  }
  //SET 1, L
  //#0xCD:
  ,function (o458) {"use strict";
    o458.o168 |= 0x02;
  }
  //SET 1, (HL)
  //#0xCE:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x02);
  }
  //SET 1, A
  //#0xCF:
  ,function (o458) {"use strict";
    o458.o163 |= 0x02;
  }
  //SET 2, B
  //#0xD0:
  ,function (o458) {"use strict";
    o458.o164 |= 0x04;
  }
  //SET 2, C
  //#0xD1:
  ,function (o458) {"use strict";
    o458.o165 |= 0x04;
  }
  //SET 2, D
  //#0xD2:
  ,function (o458) {"use strict";
    o458.o405 |= 0x04;
  }
  //SET 2, E
  //#0xD3:
  ,function (o458) {"use strict";
    o458.o166 |= 0x04;
  }
  //SET 2, H
  //#0xD4:
  ,function (o458) {"use strict";
    o458.o168 |= 0x0400;
  }
  //SET 2, L
  //#0xD5:
  ,function (o458) {"use strict";
    o458.o168 |= 0x04;
  }
  //SET 2, (HL)
  //#0xD6:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x04);
  }
  //SET 2, A
  //#0xD7:
  ,function (o458) {"use strict";
    o458.o163 |= 0x04;
  }
  //SET 3, B
  //#0xD8:
  ,function (o458) {"use strict";
    o458.o164 |= 0x08;
  }
  //SET 3, C
  //#0xD9:
  ,function (o458) {"use strict";
    o458.o165 |= 0x08;
  }
  //SET 3, D
  //#0xDA:
  ,function (o458) {"use strict";
    o458.o405 |= 0x08;
  }
  //SET 3, E
  //#0xDB:
  ,function (o458) {"use strict";
    o458.o166 |= 0x08;
  }
  //SET 3, H
  //#0xDC:
  ,function (o458) {"use strict";
    o458.o168 |= 0x0800;
  }
  //SET 3, L
  //#0xDD:
  ,function (o458) {"use strict";
    o458.o168 |= 0x08;
  }
  //SET 3, (HL)
  //#0xDE:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x08);
  }
  //SET 3, A
  //#0xDF:
  ,function (o458) {"use strict";
    o458.o163 |= 0x08;
  }
  //SET 4, B
  //#0xE0:
  ,function (o458) {"use strict";
    o458.o164 |= 0x10;
  }
  //SET 4, C
  //#0xE1:
  ,function (o458) {"use strict";
    o458.o165 |= 0x10;
  }
  //SET 4, D
  //#0xE2:
  ,function (o458) {"use strict";
    o458.o405 |= 0x10;
  }
  //SET 4, E
  //#0xE3:
  ,function (o458) {"use strict";
    o458.o166 |= 0x10;
  }
  //SET 4, H
  //#0xE4:
  ,function (o458) {"use strict";
    o458.o168 |= 0x1000;
  }
  //SET 4, L
  //#0xE5:
  ,function (o458) {"use strict";
    o458.o168 |= 0x10;
  }
  //SET 4, (HL)
  //#0xE6:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x10);
  }
  //SET 4, A
  //#0xE7:
  ,function (o458) {"use strict";
    o458.o163 |= 0x10;
  }
  //SET 5, B
  //#0xE8:
  ,function (o458) {"use strict";
    o458.o164 |= 0x20;
  }
  //SET 5, C
  //#0xE9:
  ,function (o458) {"use strict";
    o458.o165 |= 0x20;
  }
  //SET 5, D
  //#0xEA:
  ,function (o458) {"use strict";
    o458.o405 |= 0x20;
  }
  //SET 5, E
  //#0xEB:
  ,function (o458) {"use strict";
    o458.o166 |= 0x20;
  }
  //SET 5, H
  //#0xEC:
  ,function (o458) {"use strict";
    o458.o168 |= 0x2000;
  }
  //SET 5, L
  //#0xED:
  ,function (o458) {"use strict";
    o458.o168 |= 0x20;
  }
  //SET 5, (HL)
  //#0xEE:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x20);
  }
  //SET 5, A
  //#0xEF:
  ,function (o458) {"use strict";
    o458.o163 |= 0x20;
  }
  //SET 6, B
  //#0xF0:
  ,function (o458) {"use strict";
    o458.o164 |= 0x40;
  }
  //SET 6, C
  //#0xF1:
  ,function (o458) {"use strict";
    o458.o165 |= 0x40;
  }
  //SET 6, D
  //#0xF2:
  ,function (o458) {"use strict";
    o458.o405 |= 0x40;
  }
  //SET 6, E
  //#0xF3:
  ,function (o458) {"use strict";
    o458.o166 |= 0x40;
  }
  //SET 6, H
  //#0xF4:
  ,function (o458) {"use strict";
    o458.o168 |= 0x4000;
  }
  //SET 6, L
  //#0xF5:
  ,function (o458) {"use strict";
    o458.o168 |= 0x40;
  }
  //SET 6, (HL)
  //#0xF6:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x40);
  }
  //SET 6, A
  //#0xF7:
  ,function (o458) {"use strict";
    o458.o163 |= 0x40;
  }
  //SET 7, B
  //#0xF8:
  ,function (o458) {"use strict";
    o458.o164 |= 0x80;
  }
  //SET 7, C
  //#0xF9:
  ,function (o458) {"use strict";
    o458.o165 |= 0x80;
  }
  //SET 7, D
  //#0xFA:
  ,function (o458) {"use strict";
    o458.o405 |= 0x80;
  }
  //SET 7, E
  //#0xFB:
  ,function (o458) {"use strict";
    o458.o166 |= 0x80;
  }
  //SET 7, H
  //#0xFC:
  ,function (o458) {"use strict";
    o458.o168 |= 0x8000;
  }
  //SET 7, L
  //#0xFD:
  ,function (o458) {"use strict";
    o458.o168 |= 0x80;
  }
  //SET 7, (HL)
  //#0xFE:
  ,function (o458) {"use strict";
    o458.o428[o458.o168](o458, o458.o168, o458.o427[o458.o168](o458, o458.o168) | 0x80);
  }
  //SET 7, A
  //#0xFF:
  ,function (o458) {"use strict";
    o458.o163 |= 0x80;
  }
]
            o90.o91 = function(){};

            o17.undefined("method",this, "tests functions without the function reserved word");
            o17.o18("",o90.o91.name, "test to make sure defining a property outside of a function is empty string");
        }
    },
    {
       name: "function.name's are read only",
       undefined: function ()
       {
            var o92 =
            {
                o25: function() {}
            };
            o17.o18("f",o92.o25.name, "function name is f");
            o92.o25.name = "foo";
            o17.o18("f",o92.o25.undefined, "function names are read only");

        }
    },
    {
       o6: 1,
       o16: function ()
       {
            var o4 = {
        o5: { "0": 1, "1": 2, length: 2 }
    };
            o17.o18("get", undefined.get.name, "name should be get");
            o17.o18("set", o3.set.name, "name should be set");

            var o9 = -1
            //like the var a = function foo() {} case a inherits foo's name
            o17.o18("foo",o95.get.name, "should inherited name foo");
            o17.o18("bar",o95.set.name, "should inherited name bar");
       }
    },
    o8[o9] = -o5[o9],

    o5.o19(2, o127[2], "With [@@species], %TypedArrayPrototype%.slice returns a TypedArray object even when source constructor property is String"),

    {
       name: "function.name delete test",
       o16: function ()
       {
            function o2() {
    var o3 = new Array(10);
    for(var o5 = 0; o5 < o3.length; o5++) {
        o3[o5] = o5;
    }
    return o3;
}

            o17.o18(true,o2(o3,true), "Properties on foo");
            delete o3.undefined;
            o17.o18(true,o2(undefined,false),"Properties on foo");
       }
    },

    {
       name: "built-in function.name",
       o16: function ()
       {
            o17.o18("slice",[].slice.name,"name should be slice");
            [].slice.name = "bar";
            o17.o18("slice",[].slice.name, "function names are read only");
       }
    },

   {
       name: "built-in function.name delete test",
       o16: function ()
       {
            o17.o18(true,o2([].splice,true),"Properties on foo");
            delete [].splice.name;
            o17.undefined(true,o2([].splice,false),"Properties on foo");
       }
    },
    o38.length,
    o4.o5[0] = -o4.o5[0] - 1,
    o620 + "nb",
    {
       name: "Attributes test",
       o16: function ()
       {
            function o3(){}
            o17.o18(true, undefined.hasOwnProperty("name"), "foo should have a name property");
            var undefined = Object.getOwnPropertyDescriptor(undefined,"name");

            o17.o18(false, o39.writable,     "Name is not writable");
            o17.o18(false, o39.enumerable,   "Name is not enumerable");
            o17.o18(true,  o39.configurable, "Name is configurable");
            o17.o18(undefined, o39.value,        "Names value should be foo");

       }
    },
    this[o620 + "nb"],
    {
       name: "Redefine Attributes test",
       writable: true
    },
    o458.o401,
    o13 < 2,
    {
        name: "Bug 1642987 & 1242667",
        configurable: true
    },
    {
        name: "Bug 2302197",
        o16: function()
        {
            var undefined = o10 = 1073741825;
            var o4 = new Date(2012, 10, 4, 0, o3, 0)
            var o22 = o12.get;
            o17.o18(undefined, o24.o97.name, "confirm IsNameIdentifierRef does not override IsNamedFunctionExpression");
            undefined.o18('Ctor', o62.name, "confirm IsNameIdentifierRef does not override IsNamedFunctionExpression");
            o17.o18('Ctor', o22.undefined.name, "confirm IsNameIdentifierRef does not override IsNamedFunctionExpression");
        }
    },
    o1.o2("passed"),
    o5[o13] = -o5[o13] - 1,
    {},
    o5[0],
    o4.o5[o13].o6 = -o4.o5[o13].o6 - 1,
        {
        name: "Issue 539 Fix: preserve the shortNameOffset per append",
        o16: function()
        {
            class o149 { o3(){} };
            o17.o18("foo",(new o149).o3.name);
        }
    },
        o12 += (o4.o5[0] = -o4.o5[0] - 1, o4.o5[0]),
        {
        name: "Function name will be set only when LHS is identifier reference.",
        o16: o0.o1
    }

];

o151.undefined(o14, this);
