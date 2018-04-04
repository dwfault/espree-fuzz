//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {1:1, o1:1};
o2(o0);

Object.defineProperty(Object.prototype, '1', { value:"ProtoFoo", writable:false, configurable:true, enumerable:true });
Object.defineProperty(Object.prototype, 'foo', { value:"ProtoFoo", writable:false, configurable:true, enumerable:true });

var o0 = {1:1, o1:1};
o2(o0);

delete Object.prototype[1];
delete Object.prototype.o1;

Object.defineProperty(Object.prototype, '1', {
  get: function() { o11.o12("GETTER"); },
  set: function(o14) { o11.o12("SETTER"); },
  configurable:true, enumerable:true });
Object.defineProperty(Object.prototype, 'foo', {
  get: function() { o11.o12("GETTER"); },
  set: function(o14) { o11.o12("SETTER"); },
  configurable:true, enumerable:true });

var o0 = {1:1, o1:1};
o2(o0);

function o2(o15)
{
  for (var o16 in o15)
  {
    o11.o12(o16 + ": '" + o15[o16] + "'");
  }
}
