[...Array(+(readline()))]
    .map(_=>readline())
    .sort((a,b)=>a.length-b.length)
    .forEach(w=>print(w));