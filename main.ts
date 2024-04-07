#! /usr/bin/env node

import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";



// 1st we create todos array

let todos : string[] = ["Sana", "Inshara", "Haniya"]

// 2nd we create function
// and then we use operations

async function createTodo (array:string[]) {

    console.log(chalk.green(`************************************************************************************************************************************************`))
    console.log("\n\t\t\t\t\t\t\twelcome to Todo list\t\t\t\n");
console.log(chalk.green(`***********************************************************************************************************************************************`))

    do{
      
        let answer = await inquirer.prompt({
            type : "list",
            message : "\n select an operation",
            name : "select",
            prefix : "", 
            choices : ["Add","Update","View","Delete","Exit"]
        })
        if (answer.select == "Add"){
            let add = await inquirer.prompt({
                type : "input",
                prefix:"",
                message : " > Add item in todo ",
                name : "todo",
            });
        
            array.push(add.todo)

            console.log(`\nyour ${add.todo}is successfully Add in your todo list`)

            console.log(array);
            
        }
        if (answer.select == "Update"){
            let Update = await inquirer.prompt({
                type : "list",
                message : ">  select item for update ",
                prefix:"",
                name : "todo",
                choices : todos.map(item => item),
            })
            let addTodo = await inquirer.prompt({
                type : "input",
                prefix:"",
                message : " >  Add more item in todo ",
                name : "todo",
            });
        
            let newTodo = todos.filter(val => val !== Update.todo)
            todos = [... newTodo,addTodo.todo]
            console.log(todos);
            
        }
        
        if (answer.select == "View"){
        
            console.log(todos);
            
        }
        if (answer.select == "Delete"){

            let Delete = await inquirer.prompt({

                type : "list",
                message : "\n select item for update ",
                name : "todo",
                prefix:"",
                choices : todos.map(item => item),
            })
            let newTodo = todos.filter(val => val !== Delete.todo)
            todos = [...newTodo]
            console.log(todos);
            
        }
        if(answer.select === "Exit"){
            console.log(chalk.green(`******************************************************************************************************************************************************`))
            console.log("\n\t\t\t\t\tThank you\t\t\t\n");
console.log(chalk.green(`******************************************************************************************************************************************************`))
process.exit();
        }

      }while(true)
}
createTodo(todos)

