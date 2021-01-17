const validator = require('validator')
const chalk =require('chalk')

const email= process.argv[2]
const password= process.argv[3]
const name =process.argv[4]


if(validator.isEmail(email)){
    console.log(chalk.green.inverse(" VALID EMAIL"))}
else{
    console.log(chalk.red.inverse("INVALID EMAIL"))
}

if(validator.isStrongPassword('passsword')){
    console.log(chalk.green.inverse("VALID PASSWORD"))
}else{
    console.log(chalk.red.inverse("INVALID PASSWORD"))
}

if(validator.isLowercase('name')){
    console.log(chalk.green.inverse("VALID NAME"))
}else{
    console.log(chalk.red.inverse("INVALID NAME"))
}