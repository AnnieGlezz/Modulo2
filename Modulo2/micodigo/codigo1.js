function miFuncion(num1, num2) {

    if (num1 > num2) {
        console.log('num1 debe ser menor que num2')
    } else {
        for (let ciclo = num1; ciclo <= num2; ciclo++) {
            if (ciclo % 3 === 0 && ciclo % 5 === 0) {
                console.log('BIZZ BUZZ');
            }
            else if (ciclo % 3 === 0) {
                console.log('BUZZ');
            }
            else if (ciclo % 5 === 0) {
                console.log('BIZZ');
            }
            else {
                console.log(ciclo);
            }
        }
    }
}

miFuncion(2,4)

//1
//2







