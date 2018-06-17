//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable async tests -- verifies subclass async behaviors

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(this.o155[o685] = this.o576[o685 - 0x100]){}

var o4 = o421.o149;

try {
for(var o20=0; this.o517; o4++ )
{
    var test=function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops

        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        try {
if (Module['stdin']) {
            try {
o489.o788('/dev', 'stdin', Module['stdin']);
}catch(e){}
        } else {
            try {
o489.o531('/dev/tty', '/dev/stdin');
}catch(e){}
        }
}catch(e){}
        try {
if (Module['stdout']) {
            try {
o489.o788('/dev', 'stdout', null, Module['stdout']);
}catch(e){}
        } else {
            try {
o489.o531('/dev/tty', '/dev/stdout');
}catch(e){}
        }
}catch(e){}
        try {
if (Module['stderr']) {
            try {
o489.o788('/dev', 'stderr', null, Module['stderr']);
}catch(e){}
        } else {
            try {
o489.o531('/dev/tty1', '/dev/stderr');
}catch(e){}
        }
}catch(e){}

        // open default streams for the stdin, stdout and stderr devices
        var o789 = o489.o41('/dev/stdin', 'r');
        try {
o202[((o672) >> 2)] = o489.o741(o789);
}catch(e){}
        try {
o73(o789.o730 === 0, 'invalid handle for stdin (' + o789.o730 + ')');
}catch(e){}

        var o790 = o489.o41('/dev/stdout', 'w');
        try {
o202[((o673) >> 2)] = o489.o741(o790);
}catch(e){}
        try {
o73(o790.o730 === 1, 'invalid handle for stdout (' + o790.o730 + ')');
}catch(e){}

        var o791 = o489.o41('/dev/stderr', 'w');
        try {
o202[((o674) >> 2)] = o489.o741(o791);
}catch(e){}
        try {
o73(o791.o730 === 2, 'invalid handle for stderr (' + o791.o730 + ')');
}catch(e){}
    };
    try {
print("Executing test #" + (o20+1) + " " + test.name);
}catch(e){}
    try {
test.o3(o20+1, test.name);
}catch(e){}
}
}catch(e){}
