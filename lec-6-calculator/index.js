let inp= document.querySelector("input")
let buttons= document.querySelectorAll(".btn")
for(let btn of buttons){
    btn.addEventListener("click",()=>{
        let btnText = btn.innerText
        console.log(btnText);
    if(btnText=="AC"){
        inp.value=""
    }else if(btnText=='='){
        inp.value= eval(inp.value)
    }else{
        inp.value+=btnText
    }
        
    })
}