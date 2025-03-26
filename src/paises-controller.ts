export function quantidadeFusoHorario(quantidade:number, paises:any){
    let totalPaisesEncontrados:number = 0

    for (const pais of paises) {
        if(pais.timezones.length == quantidade) totalPaisesEncontrados++
    }

    return totalPaisesEncontrados
}