var inputs = readline().split(' ');
const crops = parseInt(inputs[0]);
const tomatoes = parseInt(inputs[1]);
const delay = parseInt(inputs[2]);
const garden = readline();

let readyTomatoes = garden.split('').filter((tomato, index) => {
    return parseInt(tomato) <= delay;
});

readyTomatoes.length >= tomatoes ?
    console.log(`YOU_CAN_MAKE_A_SOUP_IN_${delay}_DAYS`) :
    console.log(`YOU_CANNOT_MAKE_A_SOUP_IN_${delay}_DAYS`)


