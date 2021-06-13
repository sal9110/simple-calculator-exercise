
    const  body = document.querySelector("body")
    const myButton = document.createElement("button")
    body.appendChild(myButton).innerHTML = 'calculate'

    const myDiv= document.createElement('div')
    
    let result = "-"
    let resultMessage = ()=>{body.appendChild(myDiv).innerHTML= `The total is ${result}`}
 
    myButton.addEventListener('click', function(event){
       const firstNum = parseInt(document.querySelector('#firstNum').value)
       const secondNum = parseInt(document.querySelector('#secondNum').value)
       const operator = document.querySelector('#operator').value
        if (operator === "+"){
        result=firstNum + secondNum
        resultMessage()
    } else if(operator === "-") {
        result=firstNum - secondNum
        resultMessage()
    } else if ( operator === "*"){
        result=firstNum * secondNum
        resultMessage()
    } else if (secondNum === 0 && operator ==="/"){
            body.appendChild(myDiv).innerHTML= `Second number cannot be zero`
            
    }  else {
            result = firstNum / secondNum
            resultMessage()
        }
   
    })
    

   