var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function (){
    var xhr = new XMLDocument();

    xhr.open("GET", "http://raw.githubusercontent.com/matthewrpereira/pacientes-api/refs/heads/main/pacientes.json");

    xhr.addEventListener("load", function (){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(paciente => {
            adicionarPacienteNaTabela(paciente);
        });
    });
    xhr.send();
});