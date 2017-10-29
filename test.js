var inquirer = require('inquirer');

inquirer.prompt([{
    type: 'input',
    name: "test",
    message: 'Please respond with a letter'
}]).then(function(answer) {
    console.log(answer);
})