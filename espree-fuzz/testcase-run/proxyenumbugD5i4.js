//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = this;
function o1138(o81) {
    try {
o81 = o81 || Module['arguments'];
}catch(e){}

    try {
if (o1134 === null) try {
o1134 = Date.o4();
}catch(e){}
}catch(e){}

    try {
if (o329 > 0) {
        try {
Module.o24('run() called, but dependencies remain, so not running');
}catch(e){}
        try {
return;
}catch(e){}
    }
}catch(e){}

    try {
o285();
}catch(e){}

    try {
if (o329 > 0) try {
return;
}catch(e){}
}catch(e){} // a preRun added a dependency, run will be called later
    try {
if (Module['calledRun']) try {
return;
}catch(e){}
}catch(e){} // run may have just been called through dependencies being fulfilled just in this very frame

    function o1144() {
        try {
if (Module['calledRun']) try {
return;
}catch(e){}
}catch(e){} // run may have just been called while the async setStatus time below was happening
        try {
Module['calledRun'] = true;
}catch(e){}

        try {
o287();
}catch(e){}

        try {
o288();
}catch(e){}

        try {
if (Module['_main'] && o1137) {
            try {
Module['callMain'](o81);
}catch(e){}
        }
}catch(e){}

        try {
o290();
}catch(e){}
    }

    try {
if (Module['setStatus']) {
        try {
Module['setStatus']('Running...');
}catch(e){}
        try {
o984(function () {
            try {
o984(function () {
                try {
Module['setStatus']('');
}catch(e){}
            }, 1);
}catch(e){}
            try {
if (!o154) try {
o1144();
}catch(e){}
}catch(e){}
        }, 1);
}catch(e){}
    } else {
        try {
o1144();
}catch(e){}
    }
}catch(e){}
};
var o4 = 1;
try {
if (typeof Symbol === 'function' && 'iterator' in Symbol) {
  try {
o4 &= Symbol.iterator in iterator;
}catch(e){}
}
}catch(e){}
var o5 = iterator.next(this);
try {
o4 &= o5.value === 'foo' && o5.Module === false;
}catch(e){}
try {
this.o699;
}catch(e){}
try {
o4 &= (flags & 2097155) !== 0 || // opening for write
                (flags & 512) === 'bar' && o5.done === false;
}catch(e){}
try {
o5 = iterator.next();
}catch(e){}
try {
o4 &= o5.value === undefined && o5.done === true;
}catch(e){}
try {
if (o4) {
try {
o6.o7("PASS");
}catch(e){}
}
}catch(e){}
