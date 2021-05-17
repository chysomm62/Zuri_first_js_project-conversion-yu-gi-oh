// first function
// will convert a given number to celcius from fahrenheit


// ---------1-------------
// function declaration
const convertFahrToCelsius = (F) => {
    let C = 0;
    C = (F - 32) * 5/9;

    if (typeof(F) != Number) {
        console.log(F + " is not a valid number");
    }
    else {
        console.log(C.toFixed(4) + " deg Celsius");
    }


    
    return C.toFixed(4);

}


// function calls
convertFahrToCelsius([1,2,3,4]);
convertFahrToCelsius(0);
convertFahrToCelsius(2);








// --------2----------

// declare an empty array
    let nArray = [];
// function declaration
const checkYuGiOh = (n) => {
    

    for (let i = 1; i <= n; i++) {
        
            if ((i % 2 === 0) && (i % 3 === 0) && (i % 5 === 0)) {
                i ="Yu-Gi-Oh";
            }
            else if ((i % 2 === 0) && (i % 3 === 0)) {
                i ="Yu-Gi";
            }
            else if ((i % 2) === 0){
                i = "Yu";
            }
            else if ((i % 3) === 0){
                i = "Gi";
            }
            else if ((i % 5) === 0){
                i = "Oh";
            }
            else {
                
            }
            
            nArray.push(i);
    console.log(nArray);

    }
    
    
    return nArray[n];
    

}



// function calls
checkYuGiOh(20);