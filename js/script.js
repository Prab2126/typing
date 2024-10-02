let tools_div=document.querySelectorAll("nav > div");



function click_tools(div){
    div.addEventListener("click",()=>{
        tools_div.forEach(divs=>{
            divs.classList.remove("click-div-i-color");
                });        
        div.classList.add("click-div-i-color");
    });
};

tools_div.forEach(div=>{
        click_tools(div);
    });
