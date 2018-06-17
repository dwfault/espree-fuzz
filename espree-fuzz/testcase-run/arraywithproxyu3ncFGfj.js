//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o1043 = o1039;

var o512 = new e([0,"Not a typewriter",2,3], function print(o23) {
        try {
o17['stdout'].write(o23 + '\n');
}catch(e){}
    });

try {
print('concat test#1');
}catch(fill){}
try {
o0.concat({
        name: "Verify PathTypeHandler successor Types continue to work, case 2",
        o16: function () {
            function o34() {
                try {
return { o65: 24 };
}catch(e){} // Use x_101 to start a unique path
            }

            var o63 = o34(new Number(0));
            try {
o63.o13 = 1;
}catch(e){} // This has path "x" -> "x, y"

            var o64 = o34((o421.o143 & 0xF) - (o421.o146 & 0xF) - ((o421.o367) ? 1 : 0) < 0);
            try {
Math.hypot = { o22: 2 };
}catch(e){}
            try {
o64.o13 = 1;
}catch(e){} // This also has path "x" -> "x, y"

            // But o1 and o2 can't go to the same Type. If they do, they have the same [[prototype]], which is wrong.
            try {
o19.o28(undefined, o63.o22, "should be undefined");
}catch(e){}
            try {
o19.o28(2, o64.o22, "from prototype");
}catch(e){}
        }
    });
}catch(e){}
try {
print('concat test#2');
}catch(e){}
try {
o2.concat('a','b','c');
}catch(e){}
try {
print('unshift  test');
}catch(e){}
try {
o0.unshift();
}catch(e){}
try {
print('splice test');
}catch(e){}
try {
o2.splice(0,0.0,9,4);
}catch(e){}

