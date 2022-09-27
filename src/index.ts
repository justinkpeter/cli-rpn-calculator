import { question } from 'readline-sync'

function main(): void {

    // get user input
    let input: string = question();
    if(input == 'q'){
        console.log("\n\n")
        return
    }

    if(input == "" || input == " " || input == null){
        console.log("***Error, please input a valid number\n")
        main()
    }

    // store numbers and operator in array
    let values = input.split(" ");

    for(let value of values){
        // check if current iteration is an operator
        let isOperator: boolean = checkIsOperator(value)

        if(!isOperator){
            // if the value is a number(NOT an operator), add to the stack
            stack.push(parseInt(value))
        }
        else{3
            // if the value is + - * /, perform calculations
            let operator: string = value

            let val2: number = stack.pop();
            let val1: number = stack.pop();

            switch (operator) {
                case "+":
                    stack.push(eval("val1 + val2"));
                    break;
                case "*":
                    stack.push(eval("val1 * val2"));
                    break;
                case "-":
                    stack.push(eval("val1 - val2"));
                    break;
                case "/":
                    stack.push(eval("val1 / val2"));
                    break;
            }

        }

    }
    //
    console.log(">>>", stack.at(-1))
    main()
}

function checkIsOperator(value: string): boolean{
    if( value != "+" && value != "-" && value != "*" && value != "/"){
        return false
    }
    else{
        return true
    }
}

console.log('***REVERSE POLISH CALCULATOR***\n\n')
let stack = new Array();
main();