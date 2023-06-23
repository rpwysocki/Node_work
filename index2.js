// const dayjs = require('dayjs');

// const date = dayjs();

// console.log(date.format('MM/DD/YYYY'));


const inquirer = require('inquirer');

inquirer.prompt([
    {
    name: 'name',
    message: 'Please enter your name.'
},
{
    name: 'age',
    type: 'number',
    message: 'Please enter you age.'
},
{
    name: 'favorite hobby',
    type: 'list',
    choices: ['Fishing', 'Boating', 'Fitness'],
    message: 'Please select your favorite hobby'
},
{
    name: 'pass',
    type: 'password',
    message: 'Please enter your password.'
},
{
    name: 'foods',
    type: 'checkbox',
    choices: ['Korean', 'Chinese', 'Japanese', 'Mexican'],
    message: 'Please select your favorite foods.'
}
]).then((answerobj) => {
    console.log(answerobj);
})

