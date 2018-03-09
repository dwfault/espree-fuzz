/* 
Array
ArrayBuffer
Atomics
Boolean
Collator
Date
Error
EPSILON
Float32Array
Float64Array
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
POSTIVE_INFINITY
String
Symbol
Uint16Array
Uint32Array
Uint8Array
Uint8ClampedArray
WebAssembly
abs
acos
acosh
add
all
and
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
hasOwnProperty
hypot
includes
indexOf
instanceOf                                  ///////////
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
makeBoundFunction                                       /////////
map
mapIteratorNext
match
moduleEvaluation
name
newArrayWithSize
newPromiseCapability
newPromiseReaction
newRegistryEntry
newTargetLocal
next
null
observe
of
or
ownEnumerablePropertyKeys
ownKeys
padEnd
padStart
parse
parseInt
parseFloat
parseDouble
parseString
performIteration
predictFinalLengthFromArgumunts
print
promise
propertyIsEnumerable
prototype
provide
push
putByValDirect
race
random
raw
reduce
reduceRight
regExpBuiltinExec
regExpCreate
regExpExec
regExpMatchFast
regExpProtoFlagsGetter
regExpProtoGlobalGetter
regExpProtoIgnoreCaseGetter
regExpProtoMultilineGetter
regExpProtoSourceGetter
regExpProtoStickyGetter
regExpProtoUnicodeGetter
regExpPrototypeSymbolReplace
regExpReplaceFast
regExpSearchFast
regExpSplitFast
regExpTestFast
reject
rejectPromise
rejectionHandler
repeat
repeatCharacter
repeatCharactersSlowPath
repeatSlowPath
replace
replaceUsingRegExp
replaceUsingStringSearch
requestFetch
requestInstantiate
requestInstantiateAll
requestLink
requestReady
requestSatisfy
requestTranslate
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
setIteratorNext
SetPrototypeOf
setStateToMax
setter
shift
sin
sinh
some
sort
speciesConstructor
speciesGetter
splice
split
sqrt
starDefault
store
stringIncludesInternal
stringIteratorNextIndex
stringSplitFast
stringSubstrInternal
sub
subarray
symbolHasInstance
symbolIteratorGetter
tan
tanh
tailCallForwardArguments
test
then
thisNumberValue
thisTimeValue
throw
throwOutOfMemoryError
throwRangeError
throwTypeError
toDateString
toExponential
toFixed
toInteger
toISOString
toJSON
toLength
toLocaleDateString
toLocaleString
toLocaleTimeString
toNumber
toPrecision
toString
toTimeString
triggerPromiseReactions
trunc
tryGetById
type
typedArrayClampArgumentToStartOrEnd
typedArrayGetOriginalConstructor
typedArrayLength
typedArraySort
typedArraySpeciesConstructor
typedArraySubarrayCreate
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
*/

ASTnotDealtIdentifiers=[
    "all","apply",
    "Object","toString","Promise","Array","prototype","slice","call","arguments","apply","length","Error","value","indexOf","lastIndexOf","firstIndexOf","String","__proto__","undefined","null","Symbol","Number","Date","Boolean","Math","getOwnPropertyDescriptor","getPrototypeOf","setPrototypeOf","enumerable","configurable","get","set","getter","setter","type","constructor","name","Reflect","MAX_VALUE","MIN_VALUE","MAX_SAFE_INTEGER","MAX_SAFE_INFINITY","NaN","EPSILON","POSITIVE_INFINITY","NEGATIVE_INFINITY","forEach","key","value","has","callee","caller","eval","charCodeAt","fromCharCode","Uint8Array","Uint16Array","Uint32Array","Int8Array","Int16Array","Int32Array","map","unshift","isNAN","push","pop","parseString","parseFloat","parseInt","parseDouble","JSON","parse","writable","deleteProperty","defineProperty","join","defineProperties","global","Float32Array","Float64Array","Atomics","add","and","compareExchange","exchange","load","or","store","sub","wait","wake","xor","Map","ArrayBuffer","__lookupGetter__","__lookupSetter__","sin","cos","atan2","tan","tanh","sinh","sign","print","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""
    
];

ASToprators=[
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

Identifier:random["a","b","c","d","e","f","g","h","i","j","__proto__","Object","Array","Error","apply","length"];

