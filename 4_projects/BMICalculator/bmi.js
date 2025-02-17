const form=document.querySelector('form')
//taking values here is wrong(empty values)
form.addEventListener('submit',function(e){
    e.preventDefault()              //to stop submitting value to server
    const height=parseInt(document.querySelector('#height').value)     //for input value(in String)
    const weight=parseInt(document.querySelector('#weight').value)     
    const results=document.querySelector('#results')    
    if(height===''||height<0||isNaN(height)){
        results.innerHTML= "Please give a valid height"
    }
    else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML= "Please give a valid weight"
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span`
    }
})