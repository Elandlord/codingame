const X = parseInt(readline());
const N = parseInt(readline());

let categories = [...Array(N)].map(_ => {
    var inputs = readline().split(' ');
    const F = parseInt(inputs[0]);
    const T = parseInt(inputs[1]);
    const category = inputs[2];
    return {
        'min': F,
        'max': T,
        'category': category,
    }
});

console.log(categories.filter(category => category.min <= X && category.max >= X)[0].category);