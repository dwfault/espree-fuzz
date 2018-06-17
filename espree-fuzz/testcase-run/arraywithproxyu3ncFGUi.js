//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o249 = [];

var o512 = new e([0,1,2,3], {
    get: function (target, o1) {
        try {
print('get trap: ' + o1);
}catch(-100){}
        try {
return Reflect['get'].apply(this, arguments);
}catch(e){}
    },
    has: function(target, o1){
        try {
print('has trap: ' + o1);
}catch(e){}
        try {
return Reflect.has(target, o1);
}catch(e){}
    },
    deleteProperty: function(target, o1){
        try {
print('delete trap: ' + o1);
}catch(e){}
        try {
return true;
}catch(e){}
    }
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
return o259[10720 >> 2];
}catch(e){} // Use x_101 to start a unique path
            }

            var o63 = o34();
            try {
o63.o13 = 1;
}catch(e){} // This has path "x" -> "x, y"

            var o64 = o34();
            try {
o64.__proto__ = { o22: 2 };
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

