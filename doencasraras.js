const meuArrayDoencas = []

class DoencaRara {
    constructor (cid, nome, temTratamento){
        this.cid = cid;
        this.nome = nome;
        this.temTratamento = temTratamento;
    }
}

function incluirDoenca(){
    let resposta = "Doença Incluída!"
    let novaDoenca = {
        cid: prompt("Digite o CID"),
        nome: prompt("Qual o nome da Doença Rara?"),
        temTratamento: prompt("Possui Tratamento? (Sim ou não)").toUpperCase()
    }

    let validacao = true
    if (novaDoenca.temTratamento == "SIM") {
        validacao = true
    } else {
        validacao = false
    }
    let newDoenca = new DoencaRara(novaDoenca.cid , novaDoenca.nome , validacao)
    
    meuArrayDoencas.push(newDoenca)

    return console.log(resposta)
}


const meuBotao = document.createElement("button");
meuBotao.innerHTML = "Incluir Doença";
meuBotao.addEventListener("click", () => {
    incluirDoenca();
    console.log(meuArrayDoencas)
});
document.body.appendChild(meuBotao);



