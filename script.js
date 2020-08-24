let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let values = [
    '😂','😋','😍','😃','🤣','😇','🙃'
]
let dvalues = document.getElementsByClassName('value')
let speed = document.documentElement.style.getPropertyValue('--speed')
let applicationId;
let applicationId1;

function getRandomValue(){
   return values[parseInt(Math.random() * 7)]
}


start.addEventListener('click', function(){
    document.documentElement.style.setProperty('--speed',10)
    dvalues[0].classList.add('animate')
    dvalues[1].classList.add('animate')
    dvalues[2].classList.add('animate')
    if(applicationId) clearInterval(applicationId)
    if(applicationId1) clearInterval(applicationId1)
    applicationId = setInterval(() =>{
        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
    },1000/speed)
    
})

stop.addEventListener('click', function(){
    document.documentElement.style.setProperty('--speed',1.2)
    if(applicationId) clearInterval(applicationId)
    if(applicationId1) clearInterval(applicationId1)
    applicationId1 =  setInterval(() =>{
        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
    },833.34)

    setTimeout(()=>{
        dvalues[0].classList.remove('animate')
        dvalues[1].classList.remove('animate')
        dvalues[2].classList.remove('animate')
        clearInterval(applicationId1)
    },5350)
    setTimeout(()=>{
        if(value1.innerText === value2.innerText && value2.innerText === value3.innerText){
            alert("Congratulations, You Won")
        }
        else{
            alert("Sorry:(, Try Again")
        }
    },6500)
})

//inpSpeed.onchange = function(event){
//    document.documentElement.style.setProperty('--speed',event.target.value)
//    updateAnimation(event.target.value)
//}