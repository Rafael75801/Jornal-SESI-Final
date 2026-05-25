document.addEventListener('DOMContentLoaded', function () {
    formatarHero()
})


/* ─── JavaScript Main ───────────────────────────────────────────────────── */
function formatarHero(){
    const tituloHero = document.querySelector('.hero-content .titulo')
    tituloHero.textContent = 'Jornal do 3ºB fica com o Frontend pronto!'

    const subtituloHero = document.querySelector('.hero-content .subtitulo')
    subtituloHero.textContent = 'Em um trabalho conjunto da professora de português, os alunos do 3ºB terminam a parte visual do jornal!'

    const data = new Date()
    
    const opcoesData = {
        day: 'numeric',
        month: 'long'
    }

    const diaMes = data.toLocaleDateString('pt-BR', opcoesData)
    const anoAtual = data.getFullYear()
    const dataPublicacao = document.querySelector('#ano-hero');
    dataPublicacao.innerHTML = `${diaMes}, ${anoAtual}`

    const alunoHero = document.querySelector('#aluno-hero')
    alunoHero.textContent = 'Equipe de Desenvolvimento do 3ºB'
}