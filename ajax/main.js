// document.addEventListener("DOMContentLoaded", function () { 
//     document.getElementById('btn-buscar-cep').addEventListener('click', function(){
//         const xhttp = new XMLHttpRequest()
//         const cep = document.getElementById('cep').value
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`

//         xhttp.open('GET', endpoint)
//         xhttp.send()
//     })
// })

$(document).ready(function () {
    $("#cep").mask('00000-000')

    $("form").on('submit', function(e){
        e.preventDefault()
    })

    $("#btn-buscar-cep").click(function () {
        const cep = $('#cep').val()
        const endpoint = `https://viacep.com.br/ws/${cep}/json`
        const botao = $(this)
        $(botao).find('i').addClass('d-none')
        $(botao).find('span').removeClass('d-none')

        $.ajax(endpoint).done(function(res){
            const logradouro = res.logradouro || "Rua"
            const bairro = res.bairro || 'Centro'
            const cidade = res.localidade
            const estado = res.uf
            const endereco = `${logradouro}, ${bairro} - ${cidade}/${estado}`
            $("#endereco").val(endereco)

            setTimeout(function () {
                $(botao).find('i').removeClass('d-none')
                $(botao).find('span').addClass('d-none')
            }, 200)

        })
    })
})