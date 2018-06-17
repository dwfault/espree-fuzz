//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o35 = function (index) {
            var o22 = Promise.resolve;
            try {
Promise.resolve = function() { try {
return {};
}catch(e){} };
}catch(e){}
            
            var o8 = Promise.race([Promise.reject(42)]);
            try {
o8.catch(
                function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
            
            try {
Promise.resolve = o22;
}catch(e){}
        }

try {
write("Test case 1");
}catch(Infinity){}

try {
for(var o3 =0;o3<e;o133++)
{
  try {
e.prototype[o585] = o48.o143+o3;
}catch(e){}
}
}catch(e){}

var o421=new Array(10);
var o5=o4.splice(0,5,"d1","d2","d3","d4")

try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}
try {
e(o5);
}catch(e){}
try {
write(o5.length);
}catch(e){}

try {
for(var o3 =0;o3<10;o3++)
{
  try {
delete Array.prototype[o3];
}catch(e){}
}
}catch(e){}

try {
write("");
}catch(e){}
try {
write("Test case 2");
}catch(e){}

try {
for(var o3 =0;o3<10;o3++)
{
  try {
Array.prototype[o3] = "p"+o3;
}catch(e){}
}
}catch(e){}

var o4=new Array(10);
var o5=o4.splice(0,5,"d1","d2","d3","d4","d5","d6","d7")
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}
try {
write(o5);
}catch(e){}
try {
write(o5.length);
}catch(e){}

try {
for(var o3 =0;o3<10;o3++)
{
  try {
delete Array.prototype[o3];
}catch(e){}
}
}catch(e){}

try {
write("");
}catch(e){}
try {
write("Test case 3");
}catch(e){}

try {
for(var o3 =0;o3<10;o3++)
{
  try {
o3++;
}catch(e){}
  try {
Array.prototype[o3] = "p"+o3;
}catch(e){}
}
}catch(e){}

var o4=new Array(10);
var o28 = new String("abc")
try {
write(o4);
}catch(e){}
try { {} } catch(e) {}try { if ((o1067 | 0) == 0) {
                    try {
o1065 = o602;
}catch(e){}
                    try {
o227 = o1064;
}catch(e){}
                    try {
break
}catch(e){}
                } } catch(e) {}
try {
write(o5);
}catch(e){}
try {
write(o5.length);
}catch(e){}

try {
for(var o3 =0;o3<10;o3++)
{
  try {
delete Array.prototype[o3];
}catch(e){}
}
}catch(e){}

try {
write("");
}catch(e){}
try {
write("Test case 4");
}catch(e){}
try {
for(var o6=0;o6<10;o6++)
{
    try {
Array.prototype[o6]="P"+o6;
}catch(e){}
}
}catch(e){}
var o4=new Array(10);
var o5=o4.splice(3,5,"d1","d2","d3")
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}
try {
write(o5);
}catch(e){}
try {
write(o5.length);
}catch(e){}
try {
for(var o6=0;o6<10;o6++)
{
    try {
delete Array.prototype[o6];
}catch(e){}
}
}catch(e){}

try {
write("");
}catch(e){}
try {
write("Test case 5");
}catch(e){}
try {
for(var o6=0;o6<10;o6++)
{
    try {
Array.prototype[o6]="P"+o6;
}catch(e){}
}
}catch(e){}
var o4=new Array(10);
var o5=o4.splice(3,5,"d1","d2","d3")
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}
try {
write(o5);
}catch(e){}
try {
write(o5.length);
}catch(e){}

try {
for(var o6=0;o6<10;o6++)
{
    try {
delete Array.prototype[o6];
}catch(e){}
}
}catch(e){}

try {
write("");
}catch(e){}
try {
write("Test case 6");
}catch(e){}
try {
for(var o6=0;o6<10;o6++)
{
    try {
Array.prototype[o6]="P"+o6;
}catch(e){}
}
}catch(e){}
var o4=new Array(10);
var o5=o4.splice(3,1,"d1","d2","d3")

try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}
try {
write(o5);
}catch(e){}
try {
write(o5.length);
}catch(e){}

try {
for(var o6=0;o6<10;o6++)
{
    try {
delete Array.prototype[o6];
}catch(e){}
}
}catch(e){}

try {
write("");
}catch(e){}
try {
write("Test case 7");
}catch(e){}

try {
Object.prototype.shift=Array.prototype.shift;
}catch(e){}
var o7 =new Object();
try {
o7.length=10;
}catch(e){}
try {
o7[0]=101;
}catch(e){}
try {
o7[1]="string";
}catch(e){}
try {
o7[9]="lastelement";
}catch(e){}

var o8=o7.shift()

try {
for(var o3 in o7)
    try {
write("expando:" + o3 +"=" +o7[o3]);
}catch(e){}
}catch(e){}

try {
delete Object.prototype.shift;
}catch(e){}

try {
write("");
}catch(e){}
try {
write("Test case 8");
}catch(e){}

try {
Object.prototype[0]="hello world";
}catch(e){}
try {
Array.prototype[9]="p9";
}catch(e){}
var o4 =new Array(10);
try {
o4[1]=123;
}catch(e){}

var o8=o4.shift();
try {
write(o8);
}catch(e){}
try {
write(o8.length);
}catch(e){}
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}

try {
delete Object.prototype[0];
}catch(e){}
try {
delete Array.prototype[9];
}catch(e){}

try {
write("");
}catch(e){}
try {
write("Test case 9");
}catch(e){}
var o9 = new Array(2147483649);
try {
o9[2147483647]=100;
}catch(e){}
var o5=o9.slice(2147483640,2147483648);
try {
write(o5);
}catch(e){}
try {
write(o5.length);
}catch(e){}
try {
write(o9.length);
}catch(e){}

try {
write("");
}catch(e){}
try {
write("Test case 10");
}catch(e){}
try {
for(var o3 = 0; o3< 20; o3 = o3+3)
{
  try {
Object.prototype[o3] = "O"+o3;
}catch(e){}
}
}catch(e){}

try {
for(var o3 = 1; o3< 20; o3 = o3+3)
{
  try {
Array.prototype[o3] = "a"+o3;
}catch(e){}
}
}catch(e){}

var o4 = [];
try {
for(var o3 = 1; o3< 20; o3 = o3+3)
{
  try {
o4[o3] = o3;
}catch(e){}
}
}catch(e){}

try {
o4.shift();
}catch(e){}
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}
try {
o4.unshift(10);
}catch(e){}
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}
var o5 = o4.splice(5,2,"a","b");
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}
try {
write(o5);
}catch(e){}
try {
write(o5.length);
}catch(e){}
try {
o5 = o4.splice(7,6,"a","b");
}catch(e){}
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}
try {
write(o5);
}catch(e){}
try {
write(o5.length);
}catch(e){}
try {
o5 = o4.splice(10,2,"a","b","c","e","f");
}catch(e){}
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}
try {
write(o5);
}catch(e){}
try {
write(o5.length);
}catch(e){}

try {
write("");
}catch(e){}
try {
write("Test case 11");
}catch(e){}
try {
Object.prototype[2] = 10;
}catch(e){}
var o4 = new Array(5);
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}
try {
o4.shift();
}catch(e){}
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}
try {
o4.unshift("10","20");
}catch(e){}
try {
o4.shift();
}catch(e){}
try {
write(o4);
}catch(e){}
try {
o4.shift();
}catch(e){}
try {
write(o4);
}catch(e){}
try {
o4.unshift(10,40);
}catch(e){}
try {
write(o4);
}catch(e){}
try {
o4.unshift(50);
}catch(e){}
try {
write(o4);
}catch(e){}
try {
o4.shift(50);
}catch(e){}
try {
write(o4);
}catch(e){}

var o4 = new Array(5);
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}
try {
o4.reverse();
}catch(e){}
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}

var o4 = new Array(5);
try {
o4[2] = 2;
}catch(e){}
try {
o4[3] = 3;
}catch(e){}
try {
o4[4] = 4;
}catch(e){}
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}
try {
o4.reverse();
}catch(e){}
try {
write(o4);
}catch(e){}
try {
write(o4.length);
}catch(e){}

var o10 = [1, 2, 3];
var o11 = [];
try {
o11.length = 3;
}catch(e){}
try {
write(o10.concat(o11));
}catch(e){}
