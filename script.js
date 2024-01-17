
function consultarEndereco() {
    let cep = document.querySelector("#cep").value;
        if(cep.length !== 8){
            alert("CEP Inválido!")
            return;
        }

    let URL = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(URL).then(function(response){
            response.json().then(function(data){
                console.log(data);
            })
        });

    } 

function mostrarEdereco(dados) {
    let resultado = document.querySelector("#resultado")

    resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                           <p>Complemento: ${dados.complemento}</p>
                           <p>Bairro: ${dados.bairro}</p>
                           <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`
                           
                           
                         
                          

                    }
                          
               