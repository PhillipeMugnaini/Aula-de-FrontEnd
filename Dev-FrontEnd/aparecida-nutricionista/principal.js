var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    
    var TdPeso = paciente.querySelector(".info-peso");
    var peso = TdPeso.textContent;
    
    var TdAltura = paciente.querySelector(".info-altura");
    var altura = TdAltura.textContent;
    
    var pesoEhvalido = validaPeso(peso);
    var alturaEhvalida = validaAltura(altura)

    var tdimc = paciente.querySelector(".info=imc")

    if (peso <= 0 || peso > 595) {
        TdPeso.textContent = ("Peso inválido")
        paciente.classList.add("paciente-invalido")
    };
    
    
    if (altura <= 0 || altura > 2.72) {
        TdAltura.textContent = ("altura inválida")
        paciente.classList.add("paciente-invalido");
    };
    
    var Tdimc = paciente.querySelector(".info-imc");
    
    if (pesoEhvalido && alturaEhvalida) {
        var imc = peso / Math.pow(altura,2);
        console.log("Peso inválido")
        Tdimc.textContent = imc.toFixed(2)
    }
    else{
        Tdimc.textContent = "-"
    }
    ;
    
    
    // Tdimc.textContent = imc.toFixed(2);
};

function calculateIMC(peso, altura) {
    var imc = 0;
    imc = peso / Math.pow(altura, 2);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if(peso > 0 && peso <= 595){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura> 0 && altura)
}