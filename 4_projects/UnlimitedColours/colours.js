//generate a random color
const randomColor=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalId
const startChangingColor=function(){
    if(!intervalId){
        intervalId= setInterval(changeBgCOlor,1000) //check if not null
    }
    function changeBgCOlor(){
        document.body.style.backgroundColor=randomColor() //this only changes colour on click.Use setinterval
    }
}
const stopChangingColor=function(){
    clearInterval(intervalId)
    intervalId=null //clear the value
}
document.querySelector('#start').
addEventListener('click',startChangingColor)

document.querySelector('#stop').
addEventListener('click',stopChangingColor)


