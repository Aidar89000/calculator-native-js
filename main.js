const calculatorDisplay = document.querySelector('.calculator__display')
const calculatorBtnsContainer = document.querySelector('.calculator__buttons-container')

const calculatorBtns =[
    {text: '7'},{text: '8'},{text: '9' },{text: '+'},
    {text: '4'},{text: '5'},{text: '6' },{text: '-'},
    {text: '1'},{text: '2'},{text: '3' },{text: '*'},
    {text: '0'},{text: '.'},{text: '('},{text: '/'},
    {text: 'clr'},{text: 'del'},{text: 'sqrt'},{text: '='},,{text: ')'},
]

function renderCalculatorBtns(array){

    array.forEach(btn=>{

        const $btn = document.createElement('div')

        $btn.className='calculator__btn'
        $btn.innerText = btn.text
        calculatorBtnsContainer.append($btn)

        $btn.addEventListener('mousedown',()=>{
            if ($btn.innerText!=='=')
                calculatorDisplay.value+=`${$btn.innerText}`
            if ($btn.innerText==='=')
                calculatorDisplay.value=eval(String(calculatorDisplay.value))   
            if ($btn.innerText==='clr')
                calculatorDisplay.value=''        
            if ($btn.innerText==='del')
                calculatorDisplay.value=calculatorDisplay.value.slice(0,-4)       
            if ($btn.innerText==='sqrt')
                calculatorDisplay.value = Math.sqrt(parseInt(calculatorDisplay.value,10))
        })
    })
}

renderCalculatorBtns(calculatorBtns)