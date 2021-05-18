// first function
// will convert a given number to celcius from fahrenheit
// the function will take a single parameter [fahrenheit digit] and converts it to celsius


// ---------1-------------
// function declaration
const convertFahrToCelsius = (F) => {
    
    // conversion
    let C = 0;
        C = (F - 32) * 5/9;

    // get data types of F
    const dataType = typeof F;

    // dataType === 'boolean' || dataType === 'object' || dataType === 'undefined' || dataType === 'function' || Array.isArray(n) || dataType === 'string'

    // checks if F is a valid number or a string that can be converted to a valid number

    // if not
    if (isNaN(F)) {
        var F_content = JSON.stringify(F);
        console.log(`${F_content} is not a valid number but a/an ${dataType}`);
    }
    // if it is a valid number
    else {
        C = C.toFixed(4);
        console.log(`${C} deg C`);
    }
    
    return C;
}


// function calls
convertFahrToCelsius([1,2,3,4]);
convertFahrToCelsius(0);
convertFahrToCelsius(2);
convertFahrToCelsius({temp:24});
convertFahrToCelsius(500);
convertFahrToCelsius("50");
convertFahrToCelsius("big");





// --------2----------


// function declaration
const checkYuGiOh = (n) => {

    // checks is parameter is a number or can be converted to a number
    // if not
    if(isNaN(n)) {
        let n_content = JSON.stringify(n);

        console.log(`invalid parameter: ${n_content}`);
    }
    // if its a number or a string that can be converted to a number
    else{

        // declare an empty array
        let nArray = [];
        
        // iteration
        for (let i = 1; i <= n; i++) {

            // push numbers from 1 to n into the array
            nArray.push(i);
            
                // replacing numbers in the array with strings depending on their multiples
                
                // 1. multiples of 2, 3 and 5
                if ((i % 2 === 0) && (i % 3 === 0) && (i % 5 === 0)) {
                    let index = nArray.indexOf(i);
                        if(index !== -1){
                            nArray[index] ="Yu-Gi-Oh";
                        }
                }
                // 2. multiples of 2 and 3
                else if ((i % 2 === 0) && (i % 3 === 0)) {
                    let index = nArray.indexOf(i);
                        if(index !== -1){
                            nArray[index] ="Yu-Gi";
                        }
                }
                // 3. multiples of 2 and 5
                else if ((i % 2 === 0) && (i % 5 === 0)) {
                    let index = nArray.indexOf(i);
                        if(index !== -1){
                            nArray[index] = "Yu-Oh";
                        }
                }
                // 4. multiples of 3 and 5
                else if ((i % 3 === 0) && (i % 5 === 0)) {
                    let index = nArray.indexOf(i);
                        if(index !== -1){
                            nArray[index] ="Gi-Oh";
                        }
                }
                // 5. multiples of 2 only
                else if ((i % 2) === 0){
                    let index = nArray.indexOf(i);
                        if(index !== -1){
                            nArray[index] ="Yu";
                        }
                }
                // 6. multiples of 3 only
                else if ((i % 3) === 0){
                    let index = nArray.indexOf(i);
                        if(index !== -1){
                            nArray[index] ="Gi";
                        }
                }
                // 7. multiples of 5 only
                else if ((i % 5) === 0){
                    let index = nArray.indexOf(i);
                        if(index !== -1){
                            nArray[index] ="Oh";
                        }
                }
                else{
                    // let index = nArray.indexOf(i);
                    //     if(index !== -1){
                    //         nArray[index] = i;
                    //     }
                }
                
        }
        console.log(nArray);
        
        return nArray;
    }

}



// function calls
checkYuGiOh(20);
checkYuGiOh("hes");
checkYuGiOh([1,2,3,4,5,6]);
checkYuGiOh(50);
checkYuGiOh("50");
checkYuGiOh("fizzbuzz is meh");