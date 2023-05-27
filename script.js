let string = "";
let buttons = document.querySelectorAll("button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        //Muestra el resultado cuando el usuario clickea "="
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("textarea").innerText = string;
        }
        //Borra todo lo de la calculadora
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector("textarea").innerText = string;
        }
        //Borra los ultimos elementos usando el metodo slice
        else if(e.target.innerHTML == "←"){
            string = string.slice(0, -1)
            document.querySelector("textarea").innerText = string;
        }
        //Hace el calculo
        else{
            string = string + e.target.innerHTML;
            document.querySelector("textarea").innerText = string;
        }
    })


})