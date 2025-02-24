// named function
function perkalian(a,b){
    let result = a * b;
   return result;
}

//expresif function // Arrow Function

//anonymous function
const pertambahan = (a,b) => {
    let result = a * b;
    return result;
}


// named arrow function
const pembagian = function bagi (a,b){
    let result = a / b;
    return result;
}

console.log(perkalian(2,3));
console.log(pertambahan(5,5));
console.log(pembagian(5,5));