//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// This test file verifies conversion from local to UTC, and UTC to local, including DST adjustments, for old and new years.

// NOTE: As other date test files, these test cases use times that are relevant to the Pacific time zone (PST/PDT). Since the
// test is zone-specific, in other zones, the test will most likely fail. The result is only valid in the Pacific time zone.

// NOTE: If DST rules change again in the PST time zone, these test cases will need to be changed to use different boundary date
// values as appropriate for the new DST rules compared with the old DST rules.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

o0("--- Standard Time (ST) conversions ---");
o0("");

o0("January 31, 2006 - UTC to local - ST");
var o1 = new Date(Date.UTC(2006, 0, 31, 18, 0));
o0(o1.toUTCString());
o0(o1.toLocaleString());
o0("");

o0("January 31, 2006 - local to UTC - ST");
var o1 = new Date(Date.parse("January 31, 2006 11:00 AM"));
o0(o1.toLocaleString());
o0(o1.toUTCString());
o0("");

o0("January 31, 2007 - UTC to local - ST");
var o1 = new Date(Date.UTC(2007, 0, 31, 18, 0));
o0(o1.toUTCString());
o0(o1.toLocaleString());
o0("");

o0("January 31, 2007 - local to UTC - ST");
var o1 = new Date(Date.parse("January 31, 2007 11:00 AM"));
o0(o1.toLocaleString());
o0(o1.toUTCString());
o0("");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

o0("--- Daylight Time (DT) conversions ---");
o0("");

o0("July 15, 2006 - UTC to local - DT");
var o1 = new Date(Date.UTC(2006, 6, 31, 18, 0));
o0(o1.toUTCString());
o0(o1.toLocaleString());
o0("");

o0("July 15, 2006 - local to UTC - DT");
var o1 = new Date(Date.parse("July 15, 2006 11:00 AM"));
o0(o1.toLocaleString());
o0(o1.toUTCString());
o0("");

o0("July 15, 2007 - UTC to local - DT");
var o1 = new Date(Date.UTC(2007, 6, 31, 18, 0));
o0(o1.toUTCString());
o0(o1.toLocaleString());
o0("");

o0("July 15, 2007 - local to UTC - DT");
var o1 = new Date(Date.parse("July 15, 2007 11:00 AM"));
o0(o1.toLocaleString());
o0(o1.toUTCString());
o0("");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

o0("--- Boundary conversions between old and new rules ---");
o0("");

// In 2007, the DST rules in the Pacific time zone changed. Instead of transitioning into DST in April, the transition
// happens in March, and instead of transitioning into Standard Time in October, the transition happens in November.
// So, we test using March 31, 2006/2007 and October 31, 2006/2007. These dates fall in between the transition times in 2006
// and 2007. The expected behavior is that we always use the current year's DST rules when applying the DST adjustment. So
// even for the dates in 2006, we should use the current rules for conversion.

o0("March 31, 2006 - UTC to local - ST in 2006 rules");
var o1 = new Date(Date.UTC(2006, 2, 31, 18, 0));
o0(o1.toUTCString());
o0(o1.toLocaleString());
o0("");

o0("March 31, 2006 - local to UTC - ST in 2006 rules");
var o1 = new Date(Date.parse("March 31, 2006 11:00 AM"));
o0(o1.toLocaleString());
o0(o1.toUTCString());
o0("");

o0("March 31, 2007 - UTC to local - DT in 2007 rules");
var o1 = new Date(Date.UTC(2007, 2, 31, 18, 0));
o0(o1.toUTCString());
o0(o1.toLocaleString());
o0("");

o0("March 31, 2007 - local to UTC - DT in 2007 rules");
var o1 = new Date(Date.parse("March 31, 2007 11:00 AM"));
o0(o1.toLocaleString());
o0(o1.toUTCString());
o0("");

o0("October 31, 2006 - UTC to local - ST in 2006 rules");
var o1 = new Date(Date.UTC(2006, 9, 31, 18, 0));
o0(o1.toUTCString());
o0(o1.toLocaleString());
o0("");

o0("October 31, 2006 - local to UTC - ST in 2006 rules");
var o1 = new Date(Date.parse("October 31, 2006 11:00 AM"));
o0(o1.toLocaleString());
o0(o1.toUTCString());
o0("");

o0("October 31, 2007 - UTC to local - DT in 2007 rules");
var o1 = new Date(Date.UTC(2007, 9, 31, 18, 0));
o0(o1.toUTCString());
o0(o1.toLocaleString());
o0("");

o0("October 31, 2007 - local to UTC - DT in 2007 rules");
var o1 = new Date(Date.parse("October 31, 2007 11:00 AM"));
o0(o1.toLocaleString());
o0(o1.toUTCString());
o0("");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

o0("--- Boundary conversions when transitioning into DT ---");
o0("");

o0("March 11, 2007 2:00 AM transition - UTC to local");
var o1 = new Date(Date.UTC(2007, 2, 11, 9, 30));
o0(o1.toUTCString());
o0(o1.toLocaleString());
var o1 = new Date(Date.UTC(2007, 2, 11, 10, 30));
o0(o1.toUTCString());
o0(o1.toLocaleString());
var o1 = new Date(Date.UTC(2007, 2, 11, 11, 30));
o0(o1.toUTCString());
o0(o1.toLocaleString());
o0("");

o0("March 11, 2007 2:00 AM transition - local to UTC");
var o1 = new Date(Date.parse("March 11, 2007 1:30 AM"));
o0(o1.toLocaleString());
o0(o1.toUTCString());
var o1 = new Date(Date.parse("March 11, 2007 2:30 AM"));
o0(o1.toLocaleString());
o0(o1.toUTCString());
var o1 = new Date(Date.parse("March 11, 2007 3:30 AM"));
o0(o1.toLocaleString());
o0(o1.toUTCString());
o0("");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

o0("--- Boundary conversions when transitioning into ST ---");
o0("");

o0("November 4, 2007 2:00 AM transition - UTC to local");
var o1 = new Date(Date.UTC(2007, 10, 4, 8, 30));
o0(o1.toUTCString());
o0(o1.toLocaleString());
var o1 = new Date(Date.UTC(2007, 10, 4, 9, 30));
o0(o1.toUTCString());
o0(o1.toLocaleString());
var o1 = new Date(Date.UTC(2007, 10, 4, 10, 30));
o0(o1.toUTCString());
o0(o1.toLocaleString());
o0("");

o0("November 4, 2007 2:00 AM transition - local to UTC");
var o1 = new Date(Date.parse("November 4, 2007 12:30 AM"));
o0(o1.toLocaleString());
o0(o1.toUTCString());
var o1 = new Date(Date.parse("November 4, 2007 1:30 AM"));
o0(o1.toLocaleString());
o0(o1.toUTCString());
var o1 = new Date(Date.parse("November 4, 2007 2:30 AM"));
o0(o1.toLocaleString());
o0(o1.toUTCString());
o0("");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Helpers

function o0(o7)
{
    o8.o9("" + o7);
}
