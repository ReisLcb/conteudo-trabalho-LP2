import express from 'express'
import axios from 'axios'
import readline from 'readline'

const app = express()
const porta = 3000

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

app.get("/", (request, response) =>{
    response.send("Servidor iniciado")
})

function showMenu(){
    console.log("=====MENU=====");
    console.log("Opções:")
    console.log("1- Exibir países não independentes");
    console.log("2- Exibir países que iniciam a semana no domingo");
    console.log("3- Exibir países da África, América do Norte e do Sul, Ásia, Europa e Oceania");
    console.log("4- Questão 4");
    console.log("5- Questão 5");
    console.log("6- Questão 6");
    console.log("7- Sair")

    rl.question("Escolha uma opção: ", async (opcao) =>{
        const {data} = await axios.get(`https://restcountries.com/v3.1/all`)

        switch(opcao){
            case "1":
                if(data != null){
                    let paisesNaoIndependentes:string[] = []

                    for (const pais of data) {
                        if(!pais.independent) paisesNaoIndependentes.push(pais.name.common)
                    }
                console.log(paisesNaoIndependentes);
                }
                showMenu()
                break;

            case "2":
                if(data != null){
                    let paisesEncontrados:string[] = []

                    for(const pais of data){
                        if(pais.startOfWeek == "sunday") paisesEncontrados.push(pais.name.common)
                    }
                    
                    console.log(paisesEncontrados);
                }
                showMenu()
                break;
            
            case "3":
                if(data != null){
                    let paisesAfrica:string[] = []
                    let paisesAmericaNorte:string[] = []
                    let paisesAmericaSul:string[] = []
                    let paisesAsia:string[] = []
                    let paisesEuropa:string[] = []
                    let paisesOceania:string[] = []

                    for (const pais of data) {
                        if(pais.region.toLowerCase() == "asia") paisesAsia.push(pais.name.common)
                        if(pais.region.toLowerCase() == "europe") paisesEuropa.push(pais.name.common)
                        if(pais.region.toLowerCase() == "africa") paisesAfrica.push(pais.name.common)
                        if(pais.region.toLowerCase() == "oceania") paisesOceania.push(pais.name.common) 
                        if(pais.region.toLowerCase() == "americas"){
                            for (const continente of pais.continents) {
                                if(continente.toLowerCase() == "north america") paisesAmericaNorte.push(pais.name.common)
                                if(continente.toLowerCase() == "south america") paisesAmericaSul.push(pais.name.common)
                            }
                        }
                    }
                console.log(
                    `Países da África: `, paisesAfrica, 
                    `\nPaíses da América do Norte:`, paisesAmericaNorte, 
                    `\nPaíses da América do Sul:`, paisesAmericaSul, 
                    `\nPaíses da Ásia:`, paisesAsia, 
                    `\nPaíses da Europa:`, paisesEuropa, 
                    `\nPaíses da Oceania:`, paisesOceania
                );
                }
                showMenu()
                break;

            case "7":
                console.log("Saindo...")
                rl.close()
                process.exit()
                break;

            default:
                console.log("\nEntrada inválida\n");
                showMenu()
                break;
        }
    })
}

app.listen(porta, () => {
    console.log(`Servidor iniciado em http://localhost:${porta}\n`);
    showMenu()
})