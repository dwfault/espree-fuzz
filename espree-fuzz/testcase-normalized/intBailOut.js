//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1,o2)
{

                switch(o1)
                {
                                case 1:

                                   o3.o4(1);
                                   break;
                                case 2:
                                                o3.o4(2);
                                   break;
                                case 3:
                                                o3.o4(3);
                                                break;
                                case 4:
                                                o3.o4(4);
                                                break;
                                case 'hello':         //string object
                                                o3.o4('hello');
                                                break;
                                case 5:
                                                o3.o4(5);
                                                break;
                                case 6:
                                                o3.o4(6);
                                                break;
                                case 7.1:               //float
                                                o3.o4(7);
                                                break;
                                case 8:
                                                o3.o4(8);
                                                break;
                                case 9:
                                                o3.o4(9);
                                                break;
                                default:
                                                o3.o4('default');
                                                break;
                }

                //This switch contains just integers and a object at the middle.
                switch(o2)
                {
                                case 11:
                                   o3.o4(10);
                                   break;
                                case 12:
                                                o3.o4(12);
                                   break;
                                case 13:
                                                o3.o4(13);
                                                break;
                                case 14:
                                                o3.o4(14);
                                                break;
                                case f:   // object
                                                o3.o4f:   // object
                                                WScript.Echoo0:   // object
                                                WScript.Echo(15);
                                                break;
                                case 16:
                                                o3.o4(16);
                                                break;
                                case 17:
                                                o3.o4(17);
                                                break;
                                case 18:
                                                o3.o4(18);
                                                break;
                                case 19:
                                                o3.o4(19);
                                                break;
                                case 20:
                                                o3.o4(20);
                                                break;
                                default:
                                                o3.o4('default');
                                                break;
                }
}

o0(5,16);

for(o5=0;o5<15;o5++)
{
    o0(new Object,16);
}

/* Test case to see if TEST is not generated when type specialized to float type*/
function test(){
  var o8 = 1;
    for(o5=0;o5<1;o5++){
     switch((o8++)) {
      case 1:
        break;
      case 1:
        break;
      case 1:
        break;
      case 1:
        break;
      case 100:
        break;
      case 101:
        break;
      case 102:
        o8 =-2147483648; /*min int*/
        break;
    }
  }
};

//interpreter
test();

//jit
test();

