const botoes= document.querySelectorAll('.pokemon')
const cardAtivo= document.querySelectorAll('.cartao-pokemon')

botoes.forEach((botao, indicie)=>{
    botao.addEventListener('click', ()=>{
        removerSelecaoDoCard()

        removerSelecaoDoBotao()


        adicionarSelecaoNoBotao(botao)

        adicionarSelecaoNoCard(indicie)

    })
})

function adicionarSelecaoNoCard(indicie) {
    cardAtivo[indicie].classList.add('aberto')
}

function adicionarSelecaoNoBotao(botao) {
    botao.classList.add('ativo')
}

function removerSelecaoDoBotao() {
    const botaoSelecionado = document.querySelector('.pokemon.ativo')
    botaoSelecionado.classList.remove('ativo')
}

function removerSelecaoDoCard() {
    const personagemSelecionado = document.querySelector('.cartao-pokemon.aberto')
    personagemSelecionado.classList.remove('aberto')
}
