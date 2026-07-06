let NameHero = "flash";
CalcularRank(50, 20);
function CalcularRank(vitroias, derrotas) {
    let Saldo = vitroias - derrotas;
    let Rank;
    if (Saldo < 10) {
        Rank = "Ferro";
    } else if (Saldo >= 10 && Saldo <= 20) {
        Rank = "Bronze";
    } else if (Saldo > 20 && Saldo <= 50) {
        Rank = "Prata";
    } else if (Saldo > 50 && Saldo <= 100) {
        Rank = "Ouro";
    } else {
        Rank = "Diamante";
    }
    return "O Herói " + NameHero + " tem um saldo de " + Saldo + " está no nível de " + Rank;
}
let resultado = CalcularRank(50, 20);
console.log(resultado);
