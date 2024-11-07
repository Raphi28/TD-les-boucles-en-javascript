let estPremier = true;

for (let i = 1; i < 101; i++){
    // console.log(i);
    if (i%2){
        console.log(`${i} est pair`);
    }
    else{
        console.log(`${i} est impair`);
    }
    if (i <= 1){
        estPremier = false;
    }
    else{
        for (let i = 2; i <= Math.sqrt(i); i++) {
            if (i%i === 0){
                estPremier = false;
                console.log(`${i} est un nombre premier`);
            }
        }
    }
}