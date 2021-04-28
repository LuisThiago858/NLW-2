//Procurar o botão
document.querySelector('#add-time')
//Quando clicar no botão
.addEventListener('click', cloneField)//evento que sera desparado com a função cloneField que não existe

//Executar uma ação
function cloneField(){
    //Duplicar os campos, mas que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//cloneNode pega a div html, e se receber 'true' ele pega tambem todo o conteudo do schedule-item

    //limpar os campos, que campos? pega todos os campos
    const fields = newFieldContainer.querySelectorAll('input')
    
    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    //Colocar na página: mas onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)//para não ter que adionar tudo que foi escrito acima nos criamos uma variavel "fields"
}