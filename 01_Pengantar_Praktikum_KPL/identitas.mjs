import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});



input.question("Siapa nama anda? : ", function(nama){
    console.info(`Nama : ${nama}`);
    input.resume();

    input.question("Apa Jurusan anda : ", function(jurusan){
        console.info(`Jurusan :  ${jurusan}`);
        input.resume();
    
        input.question("Apa Universitas anda? : ", function(universitas){
            console.info(`Universitas : ${universitas}`);
            input.resume();

            input.question("Berapa usia anda? : ", function(usia){
                console.info(`Usia ${usia}`);
                input.close();
            })
        })
       
    
    })
    
    
})




