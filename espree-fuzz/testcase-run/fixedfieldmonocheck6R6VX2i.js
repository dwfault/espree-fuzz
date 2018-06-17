//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1;
function o1() {
}
var done = {
    o878: function (o28) {
        var o879 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        try {
return o879.exec(o28).slice(1);
}catch(e){}
    },
    o690: function (o249, o880) {
        // if the path tries to go above the root, `up` ends up > 0
        var o881 = 0;
        try {
for (var o82 = o249.length - 1; o82 >= 0; o82--) {
            var o882 = o249[o82];
            try {
if (o882 === '.') {
                try {
o249.splice(o82, 1);
}catch(e){}
            } else try {
if (o882 === '..') {
                try {
o249.splice(o82, 1);
}catch(e){}
                try {
o881++;
}catch(e){}
            } else try {
if (o881) {
                try {
o249.splice(o82, 1);
}catch(e){}
                try {
o881--;
}catch(e){}
            }
}catch(e){}
}catch(e){}
}catch(e){}
        }
}catch(e){}
        // if the path is allowed to go above the root, restore leading ..s
        try {
if (o880) {
            try {
for (; o881--; o881) {
                try {
o249.unshift('..');
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
return o249;
}catch(e){}
    },
    normalize: function (o31) {
        var o883 = o31.charAt(0) === '/',
            o884 = o31.substr(-1) === '/';
        // Normalize the path
        try {
o31 = o605.o690(o31.split('/').filter(function (o602) {
            try {
return !!o602;
}catch(e){}
        }), !o883).join('/');
}catch(e){}
        try {
if (!o31 && !o883) {
            try {
o31 = '.';
}catch(e){}
        }
}catch(e){}
        try {
if (o31 && o884) {
            try {
o31 += '/';
}catch(e){}
        }
}catch(e){}
        try {
return (o883 ? '/' : '') + o31;
}catch(e){}
    },
    o698: function (o31) {
        var o503 = o605.o878(o31),
            o604 = o503[0],
            o521 = o503[1];
        try {
if (!o604 && !o521) {
            // No dirname whatsoever
            try {
return '.';
}catch(e){}
        }
}catch(e){}
        try {
if (o521) {
            // It has a dirname, strip trailing slash
            try {
o521 = o521.substr(0, o521.length - 1);
}catch(e){}
        }
}catch(e){}
        try {
return o604 + o521;
}catch(e){}
    },
    o755: function (o31) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        try {
if (o31 === '/') try {
return '/';
}catch(e){}
}catch(e){}
        var o885 = o31.lastIndexOf('/');
        try {
if (o885 === -1) try {
return o31;
}catch(e){}
}catch(e){}
        try {
return o31.substr(o885 + 1);
}catch(e){}
    },
    o886: function (o31) {
        try {
return o605.o878(o31)[3];
}catch(e){}
    },
    join: function () {
        var o864 = Array.prototype.slice.call(arguments, 0);
        try {
return o605.normalize(o864.join('/'));
}catch(e){}
    },
    o606: function (o65, o887) {
        try {
return o605.normalize(o65 + '/' + o887);
}catch(e){}
    },
    resolve: function () {
        var o888 = '',
            o889 = false;
        try {
for (var o82 = arguments.length - 1; o82 >= -1 && !o889; o82--) {
            var o31 = (o82 >= 0) ? arguments[o82] : o489.o686();
            // Skip empty and invalid entries
            try {
if (typeof o31 !== 'string') {
                try {
throw new o890('Arguments to path.resolve must be strings');
}catch(e){}
            } else try {
if (!o31) {
                try {
continue;
}catch(e){}
            }
}catch(e){}
}catch(e){}
            try {
o888 = o31 + '/' + o888;
}catch(e){}
            try {
o889 = o31.charAt(0) === '/';
}catch(e){}
        }
}catch(e){}
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        try {
o888 = o605.o690(o888.split('/').filter(function (o602) {
            try {
return !!o602;
}catch(e){}
        }), !o889).join('/');
}catch(e){}
        try {
return ((o889 ? '/' : '') + o888) || '.';
}catch(e){}
    },
    o764: function (from, o838) {
        try {
from = o605.resolve(from).substr(1);
}catch(e){}
        try {
o838 = o605.resolve(o838).substr(1);
}catch(e){}

        function o891(o815) {
            var o476 = 0;
            try {
for (; o476 < o815.length; o476++) {
                try {
if (o815[o476] !== '') try {
break;
}catch(e){}
}catch(e){}
            }
}catch(e){}
            var o260 = o815.length - 1;
            try {
for (; o260 >= 0; o260--) {
                try {
if (o815[o260] !== '') try {
break;
}catch(e){}
}catch(e){}
            }
}catch(e){}
            try {
if (o476 > o260) try {
return [];
}catch(e){}
}catch(e){}
            try {
return o815.slice(o476, o260 - o476 + 1);
}catch(e){}
        }
        var o892 = o891(from.split('/'));
        var o893 = o891(o838.split('/'));
        var length = Math.o87(o892.length, o893.length);
        var o894 = length;
        try {
for (var o82 = 0; o82 < length; o82++) {
            try {
if (o892[o82] !== o893[o82]) {
                try {
o894 = o82;
}catch(e){}
                try {
break;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        var o895 = [];
        try {
for (var o82 = o894; o82 < o892.length; o82++) {
            try {
o895.push('..');
}catch(e){}
        }
}catch(e){}
        try {
o895 = o895.concat(o893.slice(o894));
}catch(e){}
        try {
return o895.join('/');
}catch(e){}
    }
};
var o4=0;
var o51 = 44;
var o5 = function () {
};
var { value: 1 } = function () {
};
var o7 = function () {
};
try {
o6.o14 = o5;
}catch(e){}
try {
o231o2.o9o119.o9 = o6;
}catch(e){}
try {
o3.o8 = o2;
}catch(e){}
try {
o3.o9 = o5;
}catch(e){}
var o10 = Array();
var o11 = new Int32Array(256);
var o11 = function (o4, o10, o8, o12, o6) {
    try {
o2.o3(o4, o10(o8, o12), o6);
}catch(e){}
};
var o13 = -2;
try {
o14 = Object.create(o2);
}catch(e){}
try {
Object.create(o3);
}catch(e){}
try {
o4.o15 = o13 * (o10.unshift() + o3.o9.call());
}catch(e){}
try {
for (var o16 of o11) {
    try {
o16 >>>= false ? o7() : o7(+o3.o9.call(o14));
}catch(e){}
    try {
o12[function () {
    } instanceof (typeof o2.o9 ? o2.o9 : Object)];
}catch(e){}
    try {
o3.length = o1((o0 ? o2.o8 = o2.o9 : 1, o2.o8()));
}catch(e){}
}
}catch(e){}

try {
o17.o18('pass');
}catch(e){}