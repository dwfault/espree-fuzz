//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Date();

// Set some Random dates. 
o0.o2(12345678)
o0.o3(456789);

o4.o5("toDateString : " + o0.toDateString())
o4.o5("getTime : " + o0.o7())
o4.o5("getFullYear : " + o0.getFullYear())
o4.o5("getYear : " + o0.o9())
o4.o5("getUTCFullYear : " + o0.o10())
o4.o5("getMonth : " + o0.o11())
o4.o5("getUTCMonth : " + o0.o12())
o4.o5("getDate : " + o0.o13())
o4.o5("getUTCDate : " + o0.o14())
o4.o5("getDay : " + o0.o15())
o4.o5("getUTCDay : " + o0.o16())
o4.o5("getHours : " + o0.o17())
o4.o5("getUTCHours : " + o0.o18())
o4.o5("getMinutes : " + o0.o19())
o4.o5("getUTCMinutes : " + o0.o20())
o4.o5("getSeconds : " + o0.o21())
o4.o5("getUTCSeconds : " + o0.o22())
o4.o5("getMilliseconds : " + o0.getMilliseconds())
o4.o5("getUTCMilliseconds : " + o0.o24())
o4.o5("getTimezoneOffset : " + o0.getTimezoneOffset())

// setTime(time)
o0.o3(100);
o4.o5("getTime : " + o0.o7());

// setMilliseconds(ms)
o0.o26(10);
o4.o5("getMilliseconds : " + o0.getMilliseconds());

// setUTCMilliseconds(ms)
o0.o27(11);
o4.o5("getUTCMilliseconds : " + o0.o24());

// setSeconds(sec [, ms])
o0.o28(12);
o4.o5("getSeconds : " + o0.o21())

o0.o28(13,14);
o4.o5("getSeconds : " + o0.o21())
o4.o5("getMilliseconds : " + o0.getMilliseconds());

// setUTCSeconds(sec [, ms])
o0.o29(15)
o4.o5("getUTCSeconds : " + o0.o22())

o0.o29(16, 17)
o4.o5("getUTCSeconds : " + o0.o22())
o4.o5("getUTCMilliseconds : " + o0.o24())

// setMinutes(min [, sec [, ms ] ])
o0.o30(18)
o4.o5("getMinutes : " + o0.o19())

o0.o30(19, 20)
o4.o5("getMinutes : " + o0.o19())
o4.o5("getSeconds : " + o0.o21())

o0.o30(21, 22, 23)
o4.o5("getMinutes : " + o0.o19())
o4.o5("getSeconds : " + o0.o21())
o4.o5("getMilliseconds : " + o0.getMilliseconds());

// setUTCMinutes(min [, sec [, ms ] ])
o0.o31(24)
o4.o5("getUTCMinutes : " + o0.o20())

o0.o31(25,26)
o4.o5("getUTCMinutes : " + o0.o20())
o4.o5("getUTCSeconds : " + o0.o22())

o0.o31(27,28,29)
o4.o5("getUTCMinutes : " + o0.o20())
o4.o5("getUTCSeconds : " + o0.o22())
o4.o5("getUTCMilliseconds : " + o0.o24())

// setHours(hour [, min [, sec [, ms ] ] ])
o0.o32(2)
o4.o5("getHours : " + o0.o17())

o0.o32(3, 1)
o4.o5("getHours : " + o0.o17())
o4.o5("getMinutes : " + o0.o19())

o0.o32(4, 2, 3)
o4.o5("getHours : " + o0.o17())
o4.o5("getMinutes : " + o0.o19())
o4.o5("getSeconds : " + o0.o21())

o0.o32(5, 6, 7, 8)
o4.o5("getHours : " + o0.o17())
o4.o5("getMinutes : " + o0.o19())
o4.o5("getSeconds : " + o0.o21())
o4.o5("getMilliseconds : " + o0.getMilliseconds());

// setUTCHours(hour [, min [, sec [, ms ] ] ])
o0.setUTCHours(2)
o4.o5("getUTCHours : " + o0.o18())

o0.setUTCHours(3, 1)
o4.o5("getUTCHours : " + o0.o18())
o4.o5("getUTCMinutes : " + o0.o20())

o0.setUTCHours(4, 2, 3)
o4.o5("getUTCHours : " + o0.o18())
o4.o5("getUTCMinutes : " + o0.o20())
o4.o5("getUTCSeconds : " + o0.o22())

o0.setUTCHours(5, 6, 7, 8)
o4.o5("getUTCHours : " + o0.o18())
o4.o5("getUTCMinutes : " + o0.o20())
o4.o5("getUTCSeconds : " + o0.o22())
o4.o5("getUTCMilliseconds : " + o0.o24());

// setDate(date)
o0.o2(1000);
o4.o5("getDate : " + o0.o13())

// setUTCDate(date)
o0.o34(2000)
o4.o5("getUTCDate : " + o0.o14())

// setMonth(month [, date ])
o0.o35(7)
o4.o5("getMonth : " + o0.o11())

o0.o35(8, 3000)
o4.o5("getMonth : " + o0.o11())
o4.o5("getDate : " + o0.o13())

// setUTCMonth(month [, date])
o0.o36(7)
o4.o5("getUTCMonth : " + o0.o12())

o0.o36(8, 3000)
o4.o5("getUTCMonth : " + o0.o12())
o4.o5("getUTCDate : " + o0.o14())

// setFullYear(year [, month [, date ] ])
o0.o37(2009)
o4.o5("getFullYear : " + o0.getFullYear())

// setYear(year [, month [, date ] ])
o0.o38(2009)
o4.o5("getYear : " + o0.o9())

o0.o37(2010, 10)
o4.o5("getFullYear : " + o0.getFullYear())
o4.o5("getMonth : " + o0.o11())

o0.o37(2011, 11, 1234)
o4.o5("getFullYear : " + o0.getFullYear())
o4.o5("getMonth : " + o0.o11())
o4.o5("getDate : " + o0.o13())

// setUTCFullYear(year [, month [, date ] ])
o0.setUTCFullYear(2009)
o4.o5("getUTCFullYear : " + o0.o10())

o0.setUTCFullYear(2010, 10)
o4.o5("getUTCFullYear : " + o0.o10())
o4.o5("getUTCMonth : " + o0.o12())

o0.setUTCFullYear(2011, 11, 1234)
o4.o5("getUTCFullYear : " + o0.o10())
o4.o5("getUTCMonth : " + o0.o12())
o4.o5("getUTCDate : " + o0.o14())

o0.o2(12345678);
o4.o5("toUTCString : " + o0.toUTCString())
o4.o5("valueOf : " + o0.valueOf())

o4.o5("toISOString method : " + typeof o0.toISOString);
o4.o5("toJSON method : " + typeof o0.toJSON);

// Set fullYear/fullYear+month/year on the Date prototype
Date.prototype.o38(5);                  // Year
o4.o5(Date.prototype.getFullYear());
Date.prototype.o38(4, 4);               // Year, month -- month should be ignored
o4.o5(Date.prototype.getFullYear());
o4.o5(Date.prototype.o11());
Date.prototype.o37(1999);           // Only full year
o4.o5(Date.prototype.getFullYear());
Date.prototype.o37(1998, 5);        // Full year and month
o4.o5(Date.prototype.getFullYear());
o4.o5(Date.prototype.o11());
