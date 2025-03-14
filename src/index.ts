import express from "express"; // {} servem para puxar algo específico da biblioteca, sem {} é puxada a biblioteca inteira
import readline from "readline"
import axios from "axios"

const app = express()
const porta = 3000

interface Pessoa{
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

function showMenu(){
    console.log("====MENU===");
    console.log("1- adicionar pessoa")
    console.log("2- opção 2")
    console.log("3- opção 3")
    console.log("4- opção 4")

    rl.question("Escolha uma opção: ", async (opcao) => {
        switch(opcao){
            case "1":
                rl.question("Digite o nome da pessoa: ", async (nomeBusca) => {
                    const {data} = await axios.get(`https://api.genderize.io?name=${nomeBusca}&country_id=BR`)
                    if(data != null) pessoas.push({nome: data.name, sexo: data.gender, quantidade: Math.floor(data.count * data.probability)})
                    console.log(pessoas);
                    
                })
                showMenu()
                break;

            case "2":
                console.log("Selecionou 2\n");
                showMenu()
                break;

            case "3":
                console.log("Selecionou 3\n");
                showMenu()
                break;

            case "4":
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
    showMenu()
})
