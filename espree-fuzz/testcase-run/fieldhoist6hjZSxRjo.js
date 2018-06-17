//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -force:fieldhoist -prejit
try {
(function(){
  var o0 = o12.indexOf('bar');
  try {
o1:
  try {
o2:
  try try { {
for(var o7=0;o7<o8.length;o7++)
{
   try {
o3("Math." + o8[o7] + " = overwrite");
}catch(e){}
   try {
o3("Math." + o8[o7]);
}catch(e){}
}
} } catch(e) {}try { o1("msRegionOverflow"); } catch(e) {}catch(e){}
}catch(e){}
}catch(e){}
})(o360.prototype);
}catch(o1101)try { o1("styles"); } catch(e) {}
