fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then((resposta) => resposta.json())
    .then((regioes) =>{
        regioes.forEach((cada_regiao) => {
            regiao.innerHTML +=
            `
                <option>${cada_regiao.nome}</option>
            `
        })
    })
        