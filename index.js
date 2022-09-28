fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then((resposta) => resposta.json())
    .then((regioes) =>{
        regioes.forEach((cada_regiao) => {
            regiao.innerHTML +=
            `
                <option value="${cada_regiao.id}">${cada_regiao.nome}</option>
            `;
        });
    });

    function escolher_estado(){
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao.value}/estados`)
            .then((resposta) => resposta.json())
            .then((ufs) => {
                ufs.forEach((cada_uf) => {
                    uf.innerHTML +=
                    `
                    <option value="${cada_uf.id}">${cada_uf.nome}</option>
                    `;
                });
            });
    }

    function escolher_cidade(){
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.value}/distritos`)
            .then((resposta) => resposta.json())
            .then((cidades) =>{
                cidades.forEach((cada_cidade) =>{
                    cidade.innerHTML +=
                    `
                    <option>${cada_cidade.nome}</option>
                    `;
                });
            });
    }