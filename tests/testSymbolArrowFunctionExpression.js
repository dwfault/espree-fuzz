class MyArray extends Array{
    static get [Symbol.species](){return Array;}
}
/*MethodDefinition:static get [Symbol.species](){return Array;}
Node {
    type: 'MethodDefinition',
    start: 33,
    end: 77,
    kind: 'get',
    static: true,
    computed: true,
    key: 
     Node {
       type: 'MemberExpression',            -> Symbol.species
       start: 45,
       end: 59,
       object: Node { type: 'Identifier', start: 45, end: 51, name: 'Symbol' },
       property: Node { type: 'Identifier', start: 52, end: 59, name: 'species' },
       computed: false },
    value: 
     Node {
       type: 'FunctionExpression',          -> (){return Array;}
       start: 60,
       end: 77,
       id: null,
       generator: false,
       expression: false,
       async: false,
       params: [],
       body: Node { type: 'BlockStatement', start: 62, end: 77, body: [Array] } } }
*/

var a = new MyArray(1,2,3);

var mapped = a.map(x => y*z);
//CallExpression:a.map(x => y*z)
//ArrowFunctionExpression:x => y*z
/*
Node {
  type: 'ArrowFunctionExpression',
  start: 939,
  end: 947,
  id: null,
  generator: false,
  expression: true,
  async: false,
  params: 
   [ Node { type: 'Identifier', start: 939, end: 940, name: 'x' } ],
  body: 
   Node {
     type: 'BinaryExpression',
     start: 944,
     end: 947,
     left: Node { type: 'Identifier', start: 944, end: 945, name: 'y' },
     operator: '*',
     right: Node { type: 'Identifier', start: 946, end: 947, name: 'z' } } }
*/

mapped instanceof MyArray;
mapped instanceof Array;
/*
Node {
       type: 'BinaryExpression',
       start: 141,
       end: 166,
       left: [Node],
       operator: 'instanceof',
       right: [Node] } },
*/