let XP = [900, 1200, 2010, 10600, 7300];
let level = "Ferro";
const nome = ["Pedro", "Rafael", "Leticia", "Natan", "Esther"]

for (var i = 0; i < nome.length; i++){
    if (XP[i] < 1000){
        level = "Ferro"
    }
    else if (XP[i] >= 1001 && XP[i] <= 2000){
        level = "Bronze"
    }
    else if (XP[i] >= 2001 && XP[i] <= 5000){
        level = "Prata"
    }
    else if (XP[i] >= 5.001 && XP[i] <= 7.000){
        level = "Ouro"
    }
    else if (XP[i] >= 7001 && XP[i] <= 8000){
        level = "Platina"
    }
    else if (XP[i] >= 8001 && XP[i] <= 9000){
        level = "Ascendente"
    }
    else if (XP[i] >= 9001 && XP[i] <= 10000){
        level = "Imortal"
    }
    else {
        level = "Radiante"
    }

    console.log("O Herói de nome " + nome[i] + " está no nível de " + level);
}