//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try { try {
o421.o670 = function(o22) {
                try {
o4.o5(this instanceof o21, "The 'this' argument is an instance of the ctor function");
}catch(e){}
                try {
o4.o6(2, o22.length, "Executor function should have length 2");
}catch(e){}
                try {
o4.o6('function', typeof o22, "Executor function is a function type");
}catch(e){}
                try {
o20 = true;
}catch(e){}
                try {
o22(function(){}, function(){});
}catch(e){}
            };
}catch(e){} } catch(e) {}try { {
e[4294967294/2] = 2;
} } catch(e) {}

var o2 = [
  {
    name: "OS4497597: ScopeInfo::FromScope() should increment scope symbol count to accomodate 'new.target'",
    o3: function () {
        try {
(function (){
            function o4() {}
            try {
eval("");
}catch(e){}
            try {
() =>new.target;
}catch(e){}
        })(o165 = getFloat32(o168));
}catch(e){}
        // Repro:
        // ASSERTION : (jscript\core\lib\Runtime\ByteCode\ScopeInfo.h, line 68)
        // Failure: (i >= 0 && i < symbolCount)
    }
  },
  o678 = o591.resolve(o591.o684(o678), link),
];

try {
o5.o6(o2, { o7: o0.o8[0] != "summary" });
}catch(e){}
