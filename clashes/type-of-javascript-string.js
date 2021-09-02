const s = readline();

console.log(!isNaN(s) ? s.indexOf('.') > -1 ? 'float' : 'integer' : typeof s);
