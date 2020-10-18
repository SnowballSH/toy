// Generated automatically by nearley, version 2.19.7
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

  var lexer = require('./lexer.ts');


  var lexer = require('./lexer.ts');
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "funcAccess$ebnf$1$subexpression$1", "symbols": ["argBlock", "_"]},
    {"name": "funcAccess$ebnf$1", "symbols": ["funcAccess$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "funcAccess$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "funcAccess", "symbols": [(lexer.has("iden") ? {type: "iden"} : iden), "_", (lexer.has("lparen") ? {type: "lparen"} : lparen), "_", "funcAccess$ebnf$1", (lexer.has("rparen") ? {type: "rparen"} : rparen)], "postprocess": 
        ([a,,,,b,]) => {
          return {
            type: "funcAccess",
            args: b ? b[0] : [],
            name: a.value,
            value: a.value,
          }
        }
          },
    {"name": "varAccess", "symbols": [(lexer.has("iden") ? {type: "iden"} : iden)], "postprocess": 
        ([a]) => {
          return {
            type: "varAccess",
            name: a.value,
            value: a.value,
          }
        }
          },
    {"name": "idenBlock", "symbols": [(lexer.has("iden") ? {type: "iden"} : iden)]},
    {"name": "idenBlock", "symbols": ["idenBlock", "_", (lexer.has("comma") ? {type: "comma"} : comma), "_", (lexer.has("iden") ? {type: "iden"} : iden)], "postprocess": 
        ([a,,,,b]) => {
          return [...a,b]
        }
          },
    {"name": "argBlock", "symbols": ["expr"]},
    {"name": "argBlock", "symbols": ["argBlock", "_", (lexer.has("comma") ? {type: "comma"} : comma), "_", "expr"], "postprocess": 
        ([a,,,,b]) => {
          return [...a,b]
        }
          },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "_$ebnf$1$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "_$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": id},
    {"name": "init$ebnf$1", "symbols": []},
    {"name": "init$ebnf$1", "symbols": ["init$ebnf$1", "multi"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "init", "symbols": ["init$ebnf$1"], "postprocess": id},
    {"name": "multi", "symbols": ["_", "stmt", "_"], "postprocess": ([,s,]) => s},
    {"name": "stmt", "symbols": ["funcAssign"], "postprocess": id},
    {"name": "stmt", "symbols": ["varAssign"], "postprocess": id},
    {"name": "stmt", "symbols": ["expr"], "postprocess": id},
    {"name": "stmt", "symbols": ["comment"], "postprocess": id},
    {"name": "arrowFuncAssign$ebnf$1$subexpression$1", "symbols": ["idenBlock", "_"]},
    {"name": "arrowFuncAssign$ebnf$1", "symbols": ["arrowFuncAssign$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "arrowFuncAssign$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "arrowFuncAssign", "symbols": [(lexer.has("iden") ? {type: "iden"} : iden), "_", (lexer.has("lparen") ? {type: "lparen"} : lparen), "_", "arrowFuncAssign$ebnf$1", (lexer.has("rparen") ? {type: "rparen"} : rparen), "_", (lexer.has("eq") ? {type: "eq"} : eq), "_", "expr"], "postprocess": 
        (k) => {
          a = k[0]
          b = k[9]
          j = k[4]
          return {
            type: "arrowFuncAssign",
            args: j ? j[0] : [],
            name: a,
            value: [b],
          }
        }
          },
    {"name": "funcAssign$ebnf$1$subexpression$1", "symbols": ["idenBlock", "_"]},
    {"name": "funcAssign$ebnf$1", "symbols": ["funcAssign$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "funcAssign$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "funcAssign$ebnf$2", "symbols": []},
    {"name": "funcAssign$ebnf$2", "symbols": ["funcAssign$ebnf$2", "multi"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "funcAssign", "symbols": [(lexer.has("func") ? {type: "func"} : func), "_", (lexer.has("iden") ? {type: "iden"} : iden), "_", (lexer.has("lparen") ? {type: "lparen"} : lparen), "_", "funcAssign$ebnf$1", (lexer.has("rparen") ? {type: "rparen"} : rparen), "_", (lexer.has("lbrace") ? {type: "lbrace"} : lbrace), "_", "funcAssign$ebnf$2", "_", (lexer.has("rbrace") ? {type: "rbrace"} : rbrace)], "postprocess": 
        (k) => {
          a = k[2]
          b = k[11]
          j = k[6]
          return {
            type: "funcAssign",
            args: j ? j[0] : [],
            name: a,
            value: b,
          }
        }
          },
    {"name": "varAssign", "symbols": [(lexer.has("iden") ? {type: "iden"} : iden), "_", (lexer.has("eq") ? {type: "eq"} : eq), "_", "expr"], "postprocess": 
        ([b,,,,c]) => {
          return {
            type: "varAssign",
            name: b,
            value: c,
          }
        }
          },
    {"name": "expr", "symbols": [(lexer.has("integer") ? {type: "integer"} : integer)], "postprocess": id},
    {"name": "expr", "symbols": [(lexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "expr", "symbols": ["funcAccess"], "postprocess": id},
    {"name": "expr", "symbols": ["varAccess"], "postprocess": id},
    {"name": "expr", "symbols": ["arrowFuncAssign"], "postprocess": id},
    {"name": "comment", "symbols": [(lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": 
        ([c]) => {
          return {
            type: "comment",
            value: c,
          }
        }
          }
]
  , ParserStart: "init"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
