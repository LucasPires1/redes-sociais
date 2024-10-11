const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = documento.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_mundo} estãoconectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`

    const container = documrnto.getElementybyId('grafics-container')
    container.appendChild(paragrafos)
}

vizualizarinformacoesGlobais()
