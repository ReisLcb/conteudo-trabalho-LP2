import express from "express"; // {} servem para puxar algo específico da biblioteca, sem {} é puxada a biblioteca inteira
import readline from "readline"
import axios from "axios"

const app = express() // app recebe as funcionalidades da biblioteca express
const porta = 3000 // Declaramos a porta que o servidor irá rodar

let id = 0

interface Pessoa{ 
    readonly id:number
    nome:string
    sexo:string
    quantidade:number
}

let pessoas:Pessoa[] = []

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

app.get("/", (request, response) => { // método get é declarado na raíz da API
    response.send("Servidor iniciado") // Ao entrar no servidor, o servidor envia uma resposta ao usuário: "Servidor iniciado"
}) // Servidor Criado

// Função do menu, permitindo que o usuario escolha varias opcoes
// Fica em loop até que seja finalizada selecionando a opção de sair
// readline (rl) captura as informações passadas pelo usuário
function showMenu(){
    console.log("====MENU===");
    console.log("1- adicionar pessoa")
    console.log("2- listar pessoas")
    console.log("3- remover pessoa")
    console.log("4 - Sair")

    rl.question("Escolha uma opção: ", async (opcao) => { //usamos async pois precisamos esperar uma resposta da api antes de selecionar uma nova opcao
        switch(opcao){
            case "1":
                rl.question("Digite o nome da pessoa: ", async (nomeBusca) => { 
                    const {data} = await axios.get(`https://api.genderize.io?name=${nomeBusca}&country_id=BR`) // as respostas GET contem um padrao com varios atributos, {data} é a parte da resposta que nos interessa
                    if(data != null){
                        pessoas.push({id: id, nome: data.name, sexo: data.gender, quantidade: Math.floor(data.count * data.probability)})
                        id++
                    }
                    else console.log("Não existem pessoas com este nome")
                    console.log(`${nomeBusca} foi adicionado com sucesso`);
                    showMenu()
                })
                break;

            case "2":
                if(pessoas.length > 0) console.log(pessoas)
                else console.log("A lista está vazia");
                showMenu()
                break;

            case "3":
                let achou = false
                let posicao = 0

                rl.question("Digite o id da pessoa a ser removida: ", (id) =>{
                    pessoas.forEach((item) => {
                        if(item.id == parseInt(id)) achou = true
                        posicao = pessoas.indexOf(item)
                    })
                    
                    if(achou){
                        console.log(`${pessoas[posicao].nome} removido`)
                        pessoas.splice(posicao, 1)
                    } else console.log("Pessoa não encontrada")
                    showMenu()

                    /*for (const pessoa of pessoas) {
                        if(pessoa.id == parseInt(id)){
                            achou = true
                            pessoas.splice(pessoas.indexOf(pessoa), 1)
                            console.log(`${pessoa.nome} removido`)
                            showMenu()
                        }
                    }*/
                })
                break;

            case "4":
                console.log("Saindo...")
                rl.close()
                process.exit()

            default:
                console.error("Opção inválida\n");
                showMenu()
                break;
        }
    })
}

app.listen(porta, () => { // "Ouve" a porta a porta do servidor
    console.log(`Servidor iniciado em http://localhost:${porta}`); // Exibe o link de acesso ao servidor
    showMenu() // Executa a interfaçe ao início do servidor
})
