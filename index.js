import { getCharacters } from './StarWarsService.js'

async function main() {
    const starSwarsCharacters = await getCharacters(2) //paginação

    //FOR OF
    // for (let i = 0; i < starSwarsCharacters.length; i++) {
    //     console.log(starSwarsCharacters[i].name)
    // }


    //FOR IN
    //acessar propriedades
    // for (let character in starSwarsCharacters[0]){
    //     console.log(character)
    // }
    // //acessar valores
    // for (let character in starSwarsCharacters[0]){
    //     console.log(starSwarsCharacters[0][character])
    // }

    //FOR OF
    for (let character of starSwarsCharacters) {
        console.log(character.name)
    }
}

main()