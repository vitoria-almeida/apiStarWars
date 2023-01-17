import fetch from 'node-fetch'

const apiUrl = 'https://swapi.dev/api'

//utilizando o parâmetro page para pegar outras páginas
async function getCharacters(page = 1) {
    const response = await fetch(`${apiUrl}/people?page=${page}`)
    const characters = await response.json()

    return characters.results
}

export { getCharacters }
