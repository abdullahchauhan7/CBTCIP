let inputbox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function todoList(){
    if(inputbox.value === ''){
        alert("TYPE SOMETHING");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    
    inputbox.value = '';
    saveData()
}


listContainer.addEventListener('click', function (e) {
    if(e.target.tagName=== 'LI'){
         e.target.classList.toggle("checked")
         saveData()
    }
    else{
        e.target.tagName === 'span';
        e.target.parentElement.remove();
        saveData()

    }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function getData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
getData()