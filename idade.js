var imagem = document.getElementById('imagem1')
var inpute = document.getElementById('input1')
var radios = document.getElementsByName('sex')
var but = document.getElementById('but1')
var dive = document.getElementById('diva')

but.addEventListener('click', clicou)


var anuidade = new Date()
var ano = anuidade.getFullYear()
    


function clicou() {

    if (inpute.value.length == 0 || inpute.value > ano) {
        window.alert('not')
    }else{
        
        var idade = ano - inpute.value
        var genero = ""
        if (radios[0].checked) {
            genero = "Homem"
            if (idade > 0 && idade < 12) {
                dive.innerHTML = `Criança, gênero ${genero} idade ${idade} anos`
                imagem.src = './homemadulto.svg'
            }else if (idade > 12 && idade <20) {
                dive.innerHTML = `Adolescente gênero ${genero} idade ${idade} anos`
                imagem.src = './homemadulto.svg'
            }else if (idade >= 20) {
                dive.innerHTML = `Adulto, gênero ${genero} idade ${idade} anos`
                imagem.src = './homemadulto.svg'
            }else if (idade <60 && idade>=60) {
                dive.innerHTML=`Adulto idoso, gênero ${genero} idade ${idade} anos`
                imagem.src = './homemadulto.svg'
            }
        }
        if (radios[1].checked) {
            genero = "Mulher"
            if (idade > 0 && idade < 12) {
                dive.innerHTML = `Criança, gênero ${genero} idade ${idade} anos`
                imagem.src = './mulheradulta.svg'
            }else if (idade > 12 && idade < 20 ) {
                dive.innerHTML = `Adolescente gênero ${genero} idade ${idade} anos`
                imagem.src = './mulheradulta.svg'
            }else if (idade >= 20) {
                dive.innerHTML = `Adulto, gênero ${genero} idade ${idade} anos`
                imagem.src = './mulheradulta.svg'
            }else if (idade <60 && idade >=60) {
                dive.innerHTML=`Adulto idoso, gênero ${genero} idade ${idade} anos`
                imagem.src = './mulheradulta.svg'
            }
        }
    }
}