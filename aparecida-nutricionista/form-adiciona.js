var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("form-adcionar");
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = document.createElement("tr");

    var erros = validarPaciente(paciente);

    if(erros.length > 0){
        console.log(erros);
        var ul = document.querySelector("#msg-erro");
        ul.innerHTML = "";
        erros

        return;
    }

    var tabela = document.querySelector("#tabela-paciente");

    tabela.appendChild(pacienteTr);

    form.reset();
    // pacienteTr.classList.add("paciente");

    // var nomeTd = document.createElement("td");
    // var pesoTd = document.createElement("td");
    // var alturaTd = document.createElement("td");
    // var gorduraTd = document.createElement("td");
    // var imcTd = document.createElement("td");

    // nomeTd.textContent = paciente.nome;
    // pesoTd.textContent = paciente.peso;
    // alturaTd.textContent = paciente.altura;
    // gorduraTd.textContent = paciente.gordura;
    // imcTd.textContent = paciente.imc;

    // pacienteTr.appendChild(mountaTd(paciente.nome, "info-nome"));
    // pacienteTr.appendChild(mountaTd(paciente.peso, "info-peso"));
    // pacienteTr.appendChild(mountaTd(paciente.altura, "info-altura"));
    // pacienteTr.appendChild(mountaTd(paciente.gordura, "info-gordura"));
    // pacienteTr.appendChild(mountaTd(paciente.imc, "info-imc"));

    // return pacienteTr
})

function mountaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function validarPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome do paciente é obrigatório");
    }
    if (paciente.peso.length == 0){
        erros.push("O peso do paciente é obrigatório");
    }
    if (paciente.altura.length == 0){
        erros.push("O altura do paciente é obrigatório");
    }
    if (paciente.gordura.length == 0){
        erros.push("O gordura do paciente é obrigatório");
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso inválido");
    }
    if(!validaAltura(paciente.altura)) {
        erros.push("altura inválido");
    }
}