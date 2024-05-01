

const white = document.querySelector('.w')
const blue = document.querySelector('.b')
const green = document.querySelector('.g')
const red = document.querySelector('.r')
const beige = document.querySelector('.be')
const input = document.querySelector('#colorInput')
console.log(input)
const setButton = document.querySelector('#setBtn')
console.log(setButton)
// const inputValue = input.value

white.addEventListener('click',function(){
    document.body.style.backgroundColor='#fff'
})

red.addEventListener('click',function(){
    document.body.style.backgroundColor='red'
})

green.addEventListener('click',function(){
    document.body.style.backgroundColor='green'
})
beige.addEventListener('click',function(){
    document.body.style.backgroundColor='beige'
})

blue.addEventListener('click',function(){
    document.body.style.backgroundColor='blue'
})


setButton.addEventListener('click', function(){
    if(input.value==='red'){
        document.body.style.backgroundColor='red'
    }else if(input.value==='white'){
        document.body.style.backgroundColor='white'
    }
    else if(input.value==='green'){
        document.body.style.backgroundColor='green'
    }
    else if(input.value==='beige'){
        document.body.style.backgroundColor='beige'
    }
    else if(input.value==='blue'){
        document.body.style.backgroundColor='blue'
    }
})





