
// function consultarEndereco() {
//     let cep = document.querySelector("#cep").value;
//         if(cep.length !== 8){
//             alert("CEP Inválido!")
//             return;
//         }

//     let URL = `https://viacep.com.br/ws/${cep}/json/`;

//         fetch(URL).then(async function(response){
//            const data = await response.json();
//             console.log(data);
//         })

//     } 

// function mostrarEndereco(data) {
//     let resultado = document.querySelector("#resultado")

//     resultado.innerHTML = `<p>Endereço: ${data.logradouro}</p>
//                            <p>Complemento: ${data.complemento}</p>
//                            <p>Bairro: ${data.bairro}</p>
//                            <p>Cidade: ${data.localidade}-${data.uf}</p>`
                           
                           
                         
                           
//    }
//    mostrarEndereco()
function consultarEndereco() {
    let cep = document.querySelector("#cep").value;

    // Verificar se o CEP tem exatamente 8 caracteres
    if (cep.length !== 8) {
        alert("CEP inválido! O CEP deve ter 8 dígitos.");
        return;
    }

    // URL da API ViaCEP
    let URL = `https://viacep.com.br/ws/${cep}/json/`;

    // Fazer a requisição usando fetch
    fetch(URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Verificar se o CEP não foi encontrado
            if (data.erro) {
                alert("CEP não encontrado.");
                return;
            }
            // Chamar a função para mostrar o endereço
            mostrarEndereco(data);
        })
        .catch(function(error) {
            console.error("Erro ao buscar o CEP:", error);
            alert("Ocorreu um erro ao buscar o CEP. Tente novamente.");
        });
}

function mostrarEndereco(data) {
    let resultado = document.querySelector("#resultado");

    // Exibir os dados do endereço
    resultado.innerHTML = `<p>Endereço: ${data.logradouro}</p>
                           <p>Complemento: ${data.complemento}</p>
                           <p>Bairro: ${data.bairro}</p>
                           <p>Cidade: ${data.localidade}-${data.uf}</p>`;
}
                    
               