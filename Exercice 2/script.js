let nombre1 = Number(prompt("Donnez un premier nombre :"))
let nombre2 = Number(prompt("Donnez un second nombre :"))

let resultat = nombre1 * nombre2

while (resultat < 240) {
    console.log(resultat);
    resultat += resultat * resultat
}