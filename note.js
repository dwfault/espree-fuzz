/* 
Array
Array.prototype.reverse.call
Array.prototype.splice.call
Array.prototype.toLocaleString.call
Array.prototype.toString.call
Array.prototype.unshift.call
Array.prototype.concat.call
Array.prototype.join.call
Array.prototype.sort.call
Array.prototype.pop.call
Array.prototype.push.call
Array.prototype.shift.call
Array.prototype.slice.call
ArrayBuffer
Atomics
Boolean
Boolean.prototype.toString.call
Boolean.prototype.toJSON.call
Boolean.prototype.valueOf.call
Collator
DataView
Date
Date.UTC
Date.parse
Date.prototype.valueOf.call
Date.prototype.toJSON.call
Date.prototype.toLocaleTimeString.call
Date.prototype.toLocaleString.call
Date.prototype.toUTCString.call
Date.prototype.setUTCHours.call
Date.prototype.setUTCFullYear.call
Date.prototype.getTimezoneOffset.call
Date.prototype.getFullYear.call
Date.prototype.getMilliseconds.call
Debug
Debug.write
Debug.writeln
Enumerator
Enumerator.prototype.atEnd.call
Enumerator.prototype.moveNext.call
Enumerator.prototype.moveFirst.call
Error
EPSILON
Float32Array
Float64Array
Function
Function.prototype.toString.call
Function.prototype.call.call
Function.prototype.apply.call
Infinity
Int16Array
Int32Array
Int8Array
JSON
MAX_SAFE_INTEGER
MAX_SAFE_INFINITY
MAX_STRING_LENGTH
MIN_VALUE
Map
Math
Memory
NaN
NEGATIVE_INFINITY
Number
Object
Promise
Proxy
Reflect
RegExp.leftContext
RegExp.rightContext
RegExp.lastMatch
RegExp.lastParent
RegExp.index
RegExp.lastMatch
RegExp.input
RegExp.prototype.compile.call
RegExp.prototype.test.call
RegExp.prototype.exec.call
POSTIVE_INFINITY
SharedArrayBuffer
String
String.FromCharCode
String.prototype.substr.call
String.prototype.substring.call
String.prototype.search.call
String.prototype.strike.call
String.prototype.concat.call
String.prototype.concat.call
String.prototype.split.call
String.prototype.split.call
String.prototype.anchor.call
String.prototype.charAt.call
String.prototype.slice.call
String.prototype.slice.call
String.prototype.match.call
String.prototype.indexOf.call
String.prototype.indexOf.call
String.prototype.lastIndexOf.call
String.prototype.lastIndexOf.call
String.prototype.replace.call
String.prototype.replace.call
String.prototype.toUpperCase.call
String.prototype.toLowerCase.call
String.prototype.toLocaleLowerCase.call
String.prototype.toLocaleUpperCase.call
String.prototype.localeCompare.call
Symbol
Uint16Array
Uint32Array
Uint8Array
Uint8ClampedArray
VBArray
VBArray.prototype.dimensions.call
VBArray.prototype.getItem.call
VBArray.prototype.getItem.call
VBArray.prototype.toArray.call
VBArray.prototype.lbound.call
VBArray.prototype.ubound.call
WebAssembly
abs
acos
acosh
add
all
and
anchor
apply
arguments
assign
asinh
atanh
atan2
bind
call
callee
caller
cbrt
ceil
charAt
charCodeAt
compile
compareExchange
concat
configurable
constructor
copyWithin
cos
cosh
create
decodeURI
decodeURIComponent
deferred
defineProperty
defineProperties
deleteProperty
dimensions
encodeURI
encodeURIComponent
entries
enumerable
eval
every
exec
exchange
escape
fill
filter
find
findIndex
firstIndexOf
floor
forEach
from
fromCharCode
fround
get
getter
getItem
getInt8
getUint8
getInt16
getUint16
getInt32
getUint32
getFloat32
getFloat64
getOwnPropertyDescriptor
getOwnPropertyNames
getPrototypeOf
getter
global
has
hasInstance
hasOwnProperty
hypot
includes
indexOf
input
instanceOf                                  //  ?
iterator
isArray
isFinite
isNaN
isObject
isPrototypeOf
join
key
keys
lastIndexOf
length
link                                        
localeCompare
log10
log1p
log2
map
match
name
null
of                                  //  ?
or
ownKeys
padEnd
padStart
parse
parseInt
parseFloat
parseDouble
parseString
postMessage
print
promise
propertyIsEnumerable
prototype
push
race
random
raw
reduce
reduceRight
reject
repeat
replace
resolve
reverse
search
set
setter
setInt8
setUint8
setInt16
setUint16
setInt32
setUint32
setFloat32
setFloat64
setPrototypeOf
setter
shift
sin
sinh
some
sort
source
species
splice
split
sqrt
strike
sub
subarray
tan
tanh
test
then
toDateString
toExponential
toFixed
toInteger
toISOString
toJSON
toLowerCase
toLocaleLowerCase
toLocaleUpperCase
toLocaleDateString
toLocaleString
toLocaleTimeString
toNumber
toPrecision
toSource
toString
toTimeString
toUpperCase
trunc
type
unescape
undefined
unshift
value
valueOf
wait
wake
writeable
xor
__propto__
__lookupGetter__
__lookupSetter__
__defineGetter__
__defineSetter__
*/

ASToprators = [
    "instanceof",
    "&&",
    "<",
    "!=",
    "+",
    "!=="
];


ASTtypes = {
    /*
        o.b = Object.toString(o)    test3.js
    */
    AssignmentExpression: "AssignmentExpression",
    /*
        o.b = Object.toString(o);    test3.js
    
    AssignmentStatement: "AssignmentStatement",
    */
    /*
        o.b = Object.toString(o);    test3.js
    ExpressionStatement:"ExpressionStatement".
    */
    AssignmentPattern: "AssignmentPattern",
    /*
        []       test3.js
    */
    ArrayExpression: "ArrayExpression",
    ArrayPattern: "ArrayPattern",
    ArrowFunctionExpression: "ArrowFunctionExpression",
    AwaitExpression: "AwaitExpression",
    /* 
        {

            return { __proto__ : [] } instanceof Array
            && !({ __proto__ : null } instanceof Object);
      
        }                       test1.js
    */
    BlockStatement: "BlockStatement",
    /* 
        { __proto__ : [] } instanceof Array
                                test1.js
    */
    BinaryExpression: "BinaryExpression",
    BreakStatement: "BreakStatement",
    /*
        Object.toString(o)      test3.js
    */
    CallExpression: "CallExpression",
    /**
     * catch (e) {
        return {outcome: "exception", values: [f, pf, x, result]};
        }                        test2.js
     */
    CatchClause: "CatchClause",
    ClassBody: "ClassBody",
    ClassDeclaration: "ClassDeclaration",
    ClassExpression: "ClassExpression",
    ConditionalExpression: "ConditionalExpression",
    ContinueStatement: "ContinueStatement",
    DoWhileStatement: "DoWhileStatement",
    DebuggerStatement: "DebuggerStatement",
    EmptyStatement: "EmptyStatement",
    ExperimentalRestProperty: "ExperimentalRestProperty",
    ExperimentalSpreadProperty: "ExperimentalSpreadProperty",
    /**
     *  x = 102;        test2.js
     */
    ExpressionStatement: "ExpressionStatement",
    /**
     * for(...){
     * }                test2.js
     */
    ForStatement: "ForStatement",
    ForInStatement: "ForInStatement",
    ForOfStatement: "ForOfStatement",
    /* 
        function test() {

            return { __proto__ : [] } instanceof Array
            && !({ __proto__ : null } instanceof Object);
      
        }           test1.js
    */
    FunctionDeclaration: "FunctionDeclaration",
    FunctionExpression: "FunctionExpression",
    Identifier: "Identifier",
    /*
    if (!test())
        throw new Error("Test failed");     test1.js
    */
    IfStatement: "IfStatement",
    /*
        null            test1.js
        "Test failed"   test1.js
        102             test2.js
    */
    Literal: "Literal",
    LabeledStatement: "LabeledStatement",
    /*
        { __proto__ : [] } instanceof Array
        && !({ __proto__ : null } instanceof Object)    test1.js
    */
    LogicalExpression: "LogicalExpression",
    /*
        Object.toString     test3.js
    */
    MemberExpression: "MemberExpression",
    MetaProperty: "MetaProperty",
    MethodDefinition: "MethodDefinition",
    /* 
        new Error("Test failed")        test1.js
    */
    NewExpression: "NewExpression",
    /*
        {}      test3.js
    */
    ObjectExpression: "ObjectExpression",
    ObjectPattern: "ObjectPattern",
    Program: "Program",
    /*
        a: {}   test3.js
    */
    Property: "Property",
    RestElement: "RestElement",
    /* 
        return { __proto__ : [] } instanceof Array
        && !({ __proto__ : null } instanceof Object);   test1.js
    */
    ReturnStatement: "ReturnStatement",
    SequenceExpression: "SequenceExpression",
    SpreadElement: "SpreadElement",
    Super: "Super",
    SwitchCase: "SwitchCase",
    SwitchStatement: "SwitchStatement",
    TaggedTemplateExpression: "TaggedTemplateExpression",
    TemplateElement: "TemplateElement",
    TemplateLiteral: "TemplateLiteral",
    /**
     *  this                                test2.js
     */
    ThisExpression: "ThisExpression",
    /* 
        throw new Error("Test failed");     test1.js
    */
    ThrowStatement: "ThrowStatement",
    /*
        try {
            x = 102;
            pf++;
            result = f.apply(this, args);
            f = 104;
            pf++;
            x = 106;
        } catch (e) {
            return {outcome: "exception", values: [f, pf, x, result]};
        }                                   test2.js
    */
    TryStatement: "TryStatement",
    /*
        !test()            test1.js
    */
    UnaryExpression: "UnaryExpression",
    /**
     *  pdf++               test2.js
     */
    UpdateExpression: "UpdateExpression",
    /*
        var o = {
            a: {},
            b: {ba:[]}
        };                  test3.js
    */
    VariableDeclaration: "VariableDeclaration",
    /*
            o = {
            a: {},
            b: {ba:[]}
        }                  test3.js
    */
    VariableDeclarator: "VariableDeclarator",
    WhileStatement: "WhileStatement",
    WithStatement: "WithStatement",
    YieldExpression: "YieldExpression",
    JSXIdentifier: "JSXIdentifier",
    JSXNamespacedName: "JSXNamespacedName",
    JSXMemberExpression: "JSXMemberExpression",
    JSXEmptyExpression: "JSXEmptyExpression",
    JSXExpressionContainer: "JSXExpressionContainer",
    JSXElement: "JSXElement",
    JSXClosingElement: "JSXClosingElement",
    JSXOpeningElement: "JSXOpeningElement",
    JSXAttribute: "JSXAttribute",
    JSXSpreadAttribute: "JSXSpreadAttribute",
    JSXText: "JSXText",
    ExportDefaultDeclaration: "ExportDefaultDeclaration",
    ExportNamedDeclaration: "ExportNamedDeclaration",
    ExportAllDeclaration: "ExportAllDeclaration",
    ExportSpecifier: "ExportSpecifier",
    ImportDeclaration: "ImportDeclaration",
    ImportSpecifier: "ImportSpecifier",
    ImportDefaultSpecifier: "ImportDefaultSpecifier",
    ImportNamespaceSpecifier: "ImportNamespaceSpecifier"
};


Property: kind["init", ""];

VariableDeclaration: kind["var", "let", "const"];

Identifier: random["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "__proto__", "Object", "Array", "Error", "apply", "length"];

