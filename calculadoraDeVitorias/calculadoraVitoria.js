function vitoriasNivel(v) {

    let level = "Ferro";

    if (v < 10){
        level = "Ferro"
    }
    else if (v >= 11 && v <= 20){
        level = "Bronze"
    }
    else if (v >= 21 && v <= 50){
        level = "Prata"
    }
    else if (v >= 51 && v <= 80){
        level = "Ouro"
    }
    else if (v >= 81 && v <= 90){
        level = "Diamante"
    }
    else if (v >= 91 && v <= 100){
        level = "Lendário"
    }
    else {
        level = "Imortal"
    }

    console.log("O Herói tem de saldo de " + v + " está no nível de " + level);
}


function calcularVitoria(){
    let XP = [9, 12, 21, 100, 73];

    for (var i = 0; i < XP.length; i++){
        vitoriasNivel(XP[i]);
    }
}

calcularVitoria();