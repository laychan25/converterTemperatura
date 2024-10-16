
function converterTemp(){
    let texto = document.querySelector('.localInfo');
    
   
    let botao = document.getElementById('botaoConverter');

    botao.addEventListener('click',()=>{
        let temp = document.getElementById('temp').value
        let input = parseFloat(document.querySelector('.input').value)
        if(temp.toLowerCase() == 'fahrenheit'){
           novoValor = (input * 1.8) + 32 
           texto.textContent = `${input}C° para fahrenheit é ${novoValor.toFixed()}F°` 
   
        }else if(temp.toLowerCase()=='celsius'){
            novoValor = (input - 32) / 1.8
            texto.textContent = `${input}F° para celsius é ${novoValor.toFixed()}C°`
        }
      
      
    })
    
}

converterTemp()