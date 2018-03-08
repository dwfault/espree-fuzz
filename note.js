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

