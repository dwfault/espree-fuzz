//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    function o568(o30, o353) {
   var o90 = o30.length;
   var o196 = new o543();
   var o51 = 0, o348 = 1;

   while( o51 < o90 ) {
      var o569 = o30.indexOf("~", o51);

      if (o569 == -1) {
          o196.o549( o30.substring( o51, o90 ) );
          return o196.o456();
      } else {
         if (o569 > o51) {
            if (o569 == (o90 - 1)) {
                o196.o549(o30.substring(o51, o90));
                return o196.o456();
            } else {
               o196.o549(o30.substring(o51, o569));
               o51 = o569;
            }
         }

         switch(o30.charCodeAt(o569 + 1)) {
            case 65:
            case 97:
               // a
               o557(arguments[o348], o196);
               o51 += 2; o348++;
               break;

            case 83:
            case 115:
               // s
               o555(arguments[o348], o196);
               o51 += 2; o348++;
               break;

            case 86:
            case 118:
               // v
               o557(arguments[o348], o196);
               o196.o549("\n");
               o51 += 2; o348++;
               break;

            case 67:
            case 99:
               // c
               o196.o549(String.fromCharCode(arguments[o348]));
               o51 += 2; o348++;
               break;

            case 88:
            case 120:
               // x
               o196.o549(arguments[o348].toString(6));
               o51 += 2; o348++;
               break;

            case 79:
            case 111:
               // o
               o196.o549(arguments[o348].toString(8));
               o51 += 2; o348++;
               break;

            case 66:
            case 98:
               // b
               o196.o549(arguments[o348].toString(2));
               o51 += 2; o348++;
               break;

            case 37:
            case 110:
               // %, n
               o196.o549("\n");
               o51 += 2; break;

            case 114:
               // r
               o196.o549("\r");
               o51 += 2; break;

            case 126:
               // ~
               o196.o549("~");
               o51 += 2; break;

            default:
               o94( "format: illegal ~"
                         + String.fromCharCode(o30.charCodeAt(o569 + 1))
                         + " sequence" );
               return "";
         }
      }
   }

   return o196.o456();
}; 
    o1();
} 
o0();