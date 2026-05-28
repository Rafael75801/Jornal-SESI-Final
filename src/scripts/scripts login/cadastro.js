document.addEventListener('DOMContentLoaded', function () {
    mascararCPF('#cpf')
    mascararTelefone('#tel')
    cadastroEfetuado()
})

function cadastroEfetuado(){
    const cards = document.querySelectorAll('.card')
    const btnRegistro = document.querySelector('.btn-registro')

    btnRegistro.addEventListener('click', (event) =>{
        event.preventDefault()

        cards.forEach(card => {
            card.classList.toggle('hidden')
        })

        if (cards.length < 2){
            setTimeout(() =>{
                window.location.href = 'index.html'
            }, 1500)
        }

        setTimeout(() =>{
            window.location.href = 'index.html'
        }, 1500)
    })

}

function mascararCPF(seletor) {
    const input = document.querySelector(seletor)

    input.addEventListener('input', () => {
        let valor = input.value.replace(/\D/g, '').slice(0, 11)

        if (valor.length > 9) {
            valor = valor.replace(
                /(\d{3})(\d{3})(\d{3})(\d{1,2})/,
                '$1.$2.$3-$4'
            )
        } else if (valor.length > 6) {
            valor = valor.replace(
                /(\d{3})(\d{3})(\d{1,3})/,
                '$1.$2.$3'
            )
        } else if (valor.length > 3) {
            valor = valor.replace(
                /(\d{3})(\d{1,3})/,
                '$1.$2'
            )
        }

        input.value = valor
    })
}

function mascararTelefone(seletor) {
    const input = document.querySelector(seletor)

    input.addEventListener('input', () => {
        let valor = input.value.replace(/\D/g, '').slice(0, 11)

        if (valor.length > 10) {
            valor = valor.replace(
                /(\d{2})(\d{5})(\d{4})/,
                '($1) $2-$3'
            )
        } else if (valor.length > 6) {
            valor = valor.replace(
                /(\d{2})(\d{4,5})(\d{0,4})/,
                '($1) $2-$3'
            )
        } else if (valor.length > 2) {
            valor = valor.replace(
                /(\d{2})(\d+)/,
                '($1) $2'
            )
        }
        input.value = valor
    })
}