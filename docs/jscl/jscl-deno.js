(function(jscl){
'use strict';
(function(values, internals){
var l1=internals.make_lisp_string('loading repl-deno/repl.lisp!');
console.log(internals.xstring(l1));
var l2=internals.intern('START-REPL');
var l3=internals.intern('WELCOME-MESSAGE');
var l4=internals.intern('NIL','COMMON-LISP');
var l5=internals.make_lisp_string('~a>');
var l6=internals.intern('*PACKAGE*','COMMON-LISP');
var l7=internals.intern('PACKAGE-NAME','COMMON-LISP');
var l8=internals.intern('FORMAT','COMMON-LISP');
var l9=internals.intern('*ROOT*');
var l10=internals.make_lisp_string('prompt');
var l11=internals.make_lisp_string('message');
var l12=internals.intern('T','COMMON-LISP');
var l13=internals.make_lisp_string('ERROR[!]: ~a~%');
var l14=internals.intern('*HANDLER-BINDINGS*');
var l15=internals.intern('ERROR','COMMON-LISP');
var l16=internals.make_lisp_string('message');
var l17=internals.intern('%%ERROR');
var l18=internals.intern('LIST','COMMON-LISP');
var l19=internals.intern('READ-FROM-STRING','COMMON-LISP');
var l20=internals.intern('EVAL-INTERACTIVE');
var l21=internals.intern('PRINT','COMMON-LISP');
var l22=internals.make_lisp_string('ERROR: ');
var l23=internals.intern('!CONDITION-ARGS');
var l24=internals.intern('TERPRI','COMMON-LISP');
var l25=internals.make_lisp_string('~a>');
l2.fvalue=(function(){var FUNC=(function JSCL_USER_STARTREPL(values){internals.checkArgsAtMost(arguments.length-1,0);
var v1=this;
return (function(){l3.fvalue(internals.pv);
return (function(v3){return (function(){return (function(){var v5=1;
var v6=[];
TBLOOP:while (true){try{switch(v5){case 1:(function(v7){(function(){try{return (function(){try{var v11=[];
return (function(v12){return (function(){var v13=1;
var v14=[];
TBLOOP:while (true){try{switch(v13){case 1:(function(v15){return internals.bindSpecialBindings([l14],[v15],(function(){(function(){var v17=new internals.Cons(l15,(function JSCL_USER_NIL(values,v18){internals.checkArgs(arguments.length-1,1);
var v19=this;
v12=v18;
return (function(){throw new internals.TagNLX(v14,2);
})();
}));
var v20=new internals.Cons(v17,internals.symbolValue(l14));
return l14.value=v20;
})();
return (function(){try{return (function(){throw new internals.BlockNLX(v11,(function(v23){return (function(){return (function(v25,v26){(function(){while (v25!==l4.value){v26=internals.car(v25);
l21.fvalue(internals.pv,v26);
l4.value;
v25=internals.cdr(v25);
}return l4.value;
})();
return l4.value;
})(v23,l4.value);
})();
})((function(){var FUNC=internals.symbolFunction(l18);
var ARGS=[internals.pv];
return (function(){var values=internals.mv;
var VS;
VS=l20.fvalue(values,l19.fvalue(internals.pv,v7));
if (typeof VS==='object'&&VS&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})()),'G107');
})();
}catch (v21){v21=internals.js_to_lisp(v21);
return (internals.isNLX(v21)?l12.value:l4.value)!==l4.value?(function(){throw v21;
})():l17.fvalue(internals.pv,(function(v22){return v22!==l4.value?v22:v21;
})(internals.js_to_lisp((function(){var TMP=v21[internals.xstring(l16)];
return TMP===undefined?l4.value:TMP;
})())));
}})();
}));
})(internals.symbolValue(l14));
case 2:(function(){throw new internals.BlockNLX(v11,(function(v27){l8.fvalue(internals.pv,l12.value,l22);
(function(){var F=internals.symbolFunction(l8);
var ARGS=[internals.pv,l12.value];
var TAIL=l23.fvalue(internals.pv,v27);
while (TAIL!=l4.value){ARGS.push(TAIL.car);
TAIL=TAIL.cdr;
}return (typeof F==='function'?F:F.fvalue).apply(this,ARGS);
})();
return l24.fvalue(internals.pv);
})(v12),'G107');
})();
default:break TBLOOP;
}}catch (JUMP){if (JUMP instanceof internals.TagNLX&&JUMP.id==v14) v13=JUMP.label;
 else throw JUMP;
}}return l4.value;
})();
})(l4.value);
}catch (CF){if (CF instanceof internals.BlockNLX&&CF.id==v11) return CF.values;
 else throw CF;
}})();
}catch (v8){v8=internals.js_to_lisp(v8);
return (function(v10){return l8.fvalue(internals.pv,l12.value,l13,v10);
})((function(v9){return v9!==l4.value?v9:v8;
})(internals.js_to_lisp((function(){var TMP=v8[internals.xstring(l11)];
return TMP===undefined?l4.value:TMP;
})())));
}})();
return (function(){return (function(){var FUNC=(function JSCL_USER_NIL(values,v30){switch(arguments.length-1){case 0:v30=l4.value;
;
default:break;
}var v29=l4.value;
var I;
for (I=arguments.length-1-1;I>=1;I--)v29=new internals.Cons(arguments[I+1],v29);
var v31=this;
return v3=v30;
});
var ARGS=[internals.pv];
return (function(){var values=internals.mv;
var VS;
VS=l8.fvalue(values,l4.value,l25,l7.fvalue(internals.pv,internals.symbolValue(l6)));
if (typeof VS==='object'&&VS&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
})();
})(internals.js_to_lisp(internals.symbolValue(l9)[internals.xstring(l10)](internals.lisp_to_js(v3))));
(function(){throw new internals.TagNLX(v6,1);
})();
case 2:default:break TBLOOP;
}}catch (JUMP){if (JUMP instanceof internals.TagNLX&&JUMP.id==v6) v5=JUMP.label;
 else throw JUMP;
}}return l4.value;
})();
})();
})(l8.fvalue(internals.pv,l4.value,l5,l7.fvalue(internals.pv,internals.symbolValue(l6))));
})();
});
FUNC.fname='START-REPL';
return FUNC;
})();
l2;
var l26=internals.intern('DENO-INIT');
var l27=internals.make_lisp_string('TextEncoder');
var l28=internals.intern('MAKE-NEW');
var l29=internals.intern('*STANDARD-OUTPUT*','COMMON-LISP');
var l30=internals.intern('WRITE-FN','KEYWORD');
l30.value=l30;
var l31=internals.make_lisp_string('Deno');
var l32=internals.make_lisp_string('stdout');
var l33=internals.make_lisp_string('encode');
var l34=internals.make_lisp_string('Deno');
var l35=internals.make_lisp_string('writeAllSync');
var l36=internals.intern('MAKE-STREAM');
l26.fvalue=(function(){var FUNC=(function JSCL_USER_DENOINIT(values){internals.checkArgsAtMost(arguments.length-1,0);
var v32=this;
return (function(){(function(v34){return l29.value=l36.fvalue(internals.pv,l30.value,(function JSCL_USER_NIL(values,v35){internals.checkArgs(arguments.length-1,1);
var v36=this;
return internals.js_to_lisp(internals.symbolValue(l9)[internals.xstring(l34)][internals.xstring(l35)](internals.lisp_to_js(internals.js_to_lisp((function(){var TMP=internals.symbolValue(l9)[internals.xstring(l31)];
if (TMP===undefined) return l4.value;
TMP=TMP[internals.xstring(l32)];
return TMP===undefined?l4.value:TMP;
})())),internals.lisp_to_js(internals.js_to_lisp(v34[internals.xstring(l33)](internals.lisp_to_js(v35))))));
}));
})(l28.fvalue(internals.pv,internals.js_to_lisp((function(){var TMP=internals.symbolValue(l9)[internals.xstring(l27)];
return TMP===undefined?l4.value:TMP;
})())));
return l2.fvalue(values);
})();
});
FUNC.fname='DENO-INIT';
return FUNC;
})();
l26;
l26.fvalue(internals.pv);
})(jscl.internals.pv, jscl.internals);
})( typeof require !== 'undefined'? require('./jscl'): window.jscl )
