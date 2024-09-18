let turma = prompt("informe de qual turma voce pertence");
let time1 = prompt("Escolha um nome para o time:");
let mascote = prompt("Escolha um mascote para sua turma:");
let cor = prompt("Escolha uma cor para o seu time:");
console.log(Bem-vindo, ${time1} da ${turma}!);
let TodosEsportes = ['futebol', 'basquete', 'volei', 'fifa', 'xadrez']




let grito = prompt("Escolha um grito de guerra para o seu time")
let mai = grito.toUpperCase()
let minu = grito.toLowerCase()


console.log(${grito})
console.log(${mai})
console.log(${minu})



alert("atletas do time")
let atletas = [' Francisco', ' Athos', 'Leonardo', ' Henrique', ' João Vitor']
alert(${atletas})
console.log(${atletas})
let novoAtleta = prompt("adicione um atleta um novo atleta:")

atletas.push(novoAtleta)

for (let i = 0; i < atletas.length; i++) {
    console.log(Os atletas do time são: ${i + 1} ${atletas[i]})
}



let esporteEsco = prompt("escolha um esporte:")
switch (esporteEsco) {
    case 'futebol':
        console.log("Você escolheu futebol, boa sorte")
        break;

    case 'volei':
        console.log("Você escolheu volei, boa sorte")
        break;

    case 'basquete':
        console.log("Você escolheu basquete, boa sorte")
        break;
    case 'xadrez':
        console.log("Você escolheu xadrez, boa sorte")

        break;
    case 'FIFA':
        console.log
        break;
        console.log("Você escolheu FIFA, boa sorte")
        break;
    default:
        console.log("Esporte não encontrado")
        break;
}

function listarAtletas(atletas) {

    console.log(atletas)
}


function adicionarAtleta() {
    let novoAtleta2 = prompt("Adicione mais um atleta")
    atletas.push(novoAtleta2)
    console.log(atletas)

}




let time = {
    time: time1,
    turma: turma,
    cor: cor,
    mascote: mascote,
    atletas: atletas,
    esporteEsco: esporteEsco,
    esporte: []
}

function adicionarEsporte(objeto) {
    console.table(objeto)
    let esporteAdicionado1 = prompt("Adicione um esporte para armazena-lo")
        objeto.esporte.push(esporteAdicionado1)
    let esporteAdicionado2 = prompt("adicone mais um esporte")
        objeto.esporte.push(esporteAdicionado2)
}

listarAtletas();
adicionarAtleta()
adicionarEsporte(time)
console.log(time.esporte)




function mostrarPerfilTime() {
    
console.log(time)
if(atletas == 6){

console.log("Sua equipe possui mais de 5 atletas")

}

}
mostrarPerfilTime()


function Newmascote() {
    

let Novomascote = prompt("Escolha um novo mascote")
let novoMascote = {
    ...time,
    mascote: Novomascote,
}
console.log(`o novo mascote do time é ${Novomascote}`)
}

Newmascote()


function pontuacao() {

let pontos = Nuber(prompt("quantos pontos seu time fez?"))
    
}