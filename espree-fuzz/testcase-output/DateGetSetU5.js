//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o467 = new Date();

// Set some Random dates. 
o0.o1(12345678)
o0.o2(456789);

o3.o4("toDateString : " + o0.toDateString())
o3.o4("getTime : " + o0.o5())
o3.o4("getFullYear : " + o0.getFullYear())
o3.o4("getYear : " + o0.o6())
o3.o4("getUTCFullYear : " + o0.o7())
o3.o4("getMonth : " + o0.o8())
o3.o4("getUTCMonth : " + o0.o9())
o3.o4("getDate : " + o0.o10())
o3.o4("getUTCDate : " + o0.o11())
o3.o4("getDay : " + o0.o12())
o3.o4("getUTCDay : " + o0.o13())
o3.o4("getHours : " + o0.o14())
o3.o4("getUTCHours : " + o0.o15())
o3.o4("getMinutes : " + o0.o16())
o3.o4("getUTCMinutes : " + o0.o17())
o3.o4("getSeconds : " + o0.o18())
o3.o4("getUTCSeconds : " + o0.o19())
o3.o4("getMilliseconds : " + o0.getMilliseconds())
o3.o4("getUTCMilliseconds : " + o0.o20())
o3.o4("getTimezoneOffset : " + o0.getTimezoneOffset())

// setTime(time)
o0.o2(100);
o3.o4("getTime : " + o0.o5());

// setMilliseconds(ms)
o0.o21(10);
o3.o4("getMilliseconds : " + o0.getMilliseconds());

// setUTCMilliseconds(ms)
o0.o22(11);
o3.o4("getUTCMilliseconds : " + o0.o20());

// setSeconds(sec [, ms])
o0.o23(12);
o3.o4("getSeconds : " + o0.o18())

o0.o23(13,14);
o3.o4("getSeconds : " + o0.o18())
o3.o4("getMilliseconds : " + o0.getMilliseconds());

// setUTCSeconds(sec [, ms])
o0.o24(15)
o3.o4("getUTCSeconds : " + o0.o19())

o0.o24(16, 17)
o3.o4("getUTCSeconds : " + o0.o19())
o3.o4("getUTCMilliseconds : " + o0.o20())

// setMinutes(min [, sec [, ms ] ])
o0.o25(18)
o3.o4("getMinutes : " + o0.o16())

o0.o25(19, 20)
o3.o4("getMinutes : " + o0.o16())
o3.o4("getSeconds : " + o0.o18())

o0.o25(21, 22, 23)
o3.o4("getMinutes : " + o0.o16())
o3.o4("getSeconds : " + o0.o18())
o3.o4("getMilliseconds : " + o0.getMilliseconds());

// setUTCMinutes(min [, sec [, ms ] ])
o0.o26(24)
o3.o4("getUTCMinutes : " + o0.o17())

o0.o26(25,26)
o3.o4("getUTCMinutes : " + o0.o17())
o3.o4("getUTCSeconds : " + o0.o19())

o0.o26(27,28,29)
o3.o4("getUTCMinutes : " + o0.o17())
o3.o4("getUTCSeconds : " + o0.o19())
o3.o4("getUTCMilliseconds : " + o0.o20())

// setHours(hour [, min [, sec [, ms ] ] ])
o0.o27(2)
o3.o4("getHours : " + o0.o14())

o0.o27(3, 1)
o3.o4("getHours : " + o0.o14())
o3.o4("getMinutes : " + o0.o16())

o0.o27(4, 2, 3)
o3.o4("getHours : " + o0.o14())
o3.o4("getMinutes : " + o0.o16())
o3.o4("getSeconds : " + o0.o18())

o0.o27(5, 6, 7, 8)
o3.o4("getHours : " + o0.o14())
o3.o4("getMinutes : " + o0.o16())
o3.o4("getSeconds : " + o0.o18())
o3.o4("getMilliseconds : " + o0.getMilliseconds());

// setUTCHours(hour [, min [, sec [, ms ] ] ])
o0.setUTCHours(2)
o3.o4("getUTCHours : " + o0.o15())

o0.setUTCHours(3, 1)
o3.o4("getUTCHours : " + o0.o15())
o3.o4("getUTCMinutes : " + o0.o17())

o0.setUTCHours(4, 2, 3)
o3.o4("getUTCHours : " + o0.o15())
o3.o4("getUTCMinutes : " + o0.o17())
o3.o4("getUTCSeconds : " + o0.o19())

o0.setUTCHours(5, 6, 7, 8)
o3.o4("getUTCHours : " + o0.o15())
o3.o4("getUTCMinutes : " + o0.o17())
o3.o4("getUTCSeconds : " + o0.o19())
o3.o4("getUTCMilliseconds : " + o0.o20());

// setDate(date)
o0.o1(1000);
o3.o4("getDate : " + o0.o10())

// setUTCDate(date)
o0.o28(2000)
o3.o4("getUTCDate : " + o0.o11())

// setMonth(month [, date ])
o0.o29(7)
o3.o4("getMonth : " + o0.o8())

o0.o29(8, 3000)
o3.o4("getMonth : " + o0.o8())
o3.o4("getDate : " + o0.o10())

// setUTCMonth(month [, date])
o0.o30(7)
o3.o4("getUTCMonth : " + o0.o9())

o0.o30(8, 3000)
o3.o4("getUTCMonth : " + o0.o9())
o3.o4("getUTCDate : " + o0.o11())

// setFullYear(year [, month [, date ] ])
o0.o31(2009)
o3.o4("getFullYear : " + o0.getFullYear())

// setYear(year [, month [, date ] ])
o0.o32(2009)
o3.o4("getYear : " + o0.o6())

o0.o31(2010, 10)
o3.o4("getFullYear : " + o0.getFullYear())
o6(Uint8ClampedArray, "length", "number", false);

o0.o31(2011, 11, 1234)
o3.o4("getFullYear : " + o0.getFullYear())
o3.o4("getMonth : " + o0.o8())
o3.o4("getDate : " + o0.o10())

// setUTCFullYear(year [, month [, date ] ])
o0.setUTCFullYear(2009)
o3.o4("getUTCFullYear : " + o0.o7())

o0.setUTCFullYear(2010, 10)
o3.o4("getUTCFullYear : " + o0.o7())
o3.o4("getUTCMonth : " + o0.o9())

o0.setUTCFullYear(2011, 11, 1234)
o3.o4("getUTCFullYear : " + o0.o7())
o3.o4("getUTCMonth : " + o0.o9())
o3.o4("getUTCDate : " + o0.o11())

o0.o1(12345678);
o3.o4("toUTCString : " + o0.toUTCString())
o3.o4("valueOf : " + o0.valueOf())

o3.o4("toISOString method : " + typeof o0.toISOString);
o3.o4("toJSON method : " + typeof o0.toJSON);

// Set fullYear/fullYear+month/year on the Date prototype
Date.prototype.o32(5);                  // Year
o3.o4(Date.prototype.getFullYear());
Date.prototype.o32(4, 4);               // Year, month -- month should be ignored
o3.o4(Date.prototype.getFullYear());
o3.o4(Date.prototype.o8());
Date.prototype.o31(1999);           // Only full year
o3.o4(Date.prototype.getFullYear());
Date.prototype.o31(1998, 5);        // Full year and month
o3.o4(Date.prototype.getFullYear());
o3.o4(Date.prototype.o8());
