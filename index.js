const prompt = require('prompt-sync')();

let command = '';
let foodType = '';
let food = [];
let petType = '';
let pet = [];

while (command.toUpperCase() != 'QUIT'){

    command = prompt('Do you want a pet? :');
    if (command.toUpperCase() == 'YES'){
        petType = prompt('What pet do you want? :');
        pet.push(petType);
        console.log('Welcome animal lover!');
        console.log(pet);
        if (command.toUpperCase()== 'YES'){
            foodType = prompt('What food does your pet like? :')
            food.push(foodType);
            console.log(food);
        }

    }
    else if (command.toUpperCase() == 'NO'){
        console.log('Are you sure? pets are GREAT!');
    };
    console.log(prompt('To exit write quit. If not press enter.'))
};