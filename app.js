let inp = document.querySelector("Input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let dltBtn = document.createElement("button");
    dltBtn.innerText= "Delete";
    dltBtn.classList.add("Delete");
    console.log(inp.value);

    item.appendChild(dltBtn);
    ul.appendChild(item);
    inp.value ="";
});

ul.addEventListener("click", function(event){

    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }

});





