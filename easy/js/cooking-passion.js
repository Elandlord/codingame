var inputs = readline().split(' ');
const numRecipe = parseInt(inputs[0]);
const numIngredients = parseInt(inputs[1]);

class Ingredient {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity.replace(/\D/g, "");
        this.size = quantity.match(/[a-zA-Z]+/g)[0];
    }
}

let recipe = [...Array(numRecipe)].map(_ => readline())
    .filter(sentence => sentence.charAt(0) === '-')
    .map(sentence => sentence.replace('- ', ''))
    .map(ingredient => new Ingredient(...ingredient.split(' ').reverse()));

let ingredients = [...Array(numIngredients)].map(_ => readline())
    .map(ingredient => new Ingredient(...ingredient.split(' ')));

recipe.map((recipeIngredient, index) => {
    recipeIngredient.fits = ingredients[index].quantity / recipeIngredient.quantity;
    return recipeIngredient;
});

let maxFits = Math.min(...recipe.map(ingredient => ingredient.fits));

recipe.map((recipeIngredient, index) => {
    recipeIngredient.left = ingredients[index].quantity - (recipeIngredient.quantity * maxFits);
    return recipeIngredient;
});

recipe.sort((ingredient, prevIngredient) => ingredient.fits - prevIngredient.fits);

let limitedIngredient = recipe.shift();

recipe.sort((ingredient, prevIngredient) => ingredient.left - prevIngredient.left);

console.log(limitedIngredient.name);
console.log(limitedIngredient.fits);

recipe.forEach((ingredient) => {
    console.log(`${ingredient.name} ${ingredient.left}${ingredient.size}`);
});
