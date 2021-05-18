// first function
// will convert a given number to celcius from fahrenheit


// ---------1-------------
// function declaration
const convertFahrToCelsius = (F) => {
    
    const dataType = typeof(F);
    // console.log(dataType);

     let C = 0;
        C = (F - 32) * 5/9;

    if (dataType != 'number') {
        console.log(`${F} is not a valid number but a/an ${dataType}`);
    }
    else {

        console.log(`${C.toFixed(4)} deg Celsius`);
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







// --------2----------


// function declaration
const checkYuGiOh = (n) => {

    const dataType = isNaN(n);

    if(dataType) {
        console.log(`invalid parameter: ${n}`);
    }
    else{

        // declare an empty array
        let nArray = [];
        
        // iteration
        for (let i = 1; i <= n; i++) {

            let numHolder = "";
            
                if ((i % 2 === 0) && (i % 3 === 0) && (i % 5 === 0)) {
                    numHolder += "Yu-Gi-Oh";
                }
                else if ((i % 2 === 0) && (i % 3 === 0)) {
                    numHolder += "Yu-Gi";
                }
                else if ((i % 2 === 0) && (i % 5 === 0)) {
                    numHolder += "Yu-Oh";
                }else if ((i % 3 === 0) && (i % 5 === 0)) {
                    numHolder += "Gi-Oh";
                }
                else if ((i % 2) === 0){
                    numHolder += "Yu";
                }
                else if ((i % 3) === 0){
                    numHolder += "Gi";
                }
                else if ((i % 5) === 0){
                    numHolder += "Oh";
                }
                else{
                    
                }
                    if (numHolder){
                        nArray.push(numHolder)
                    }
                    else {
                        nArray.push(i);
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
checkYuGiOh("fizzbuzz is meh")