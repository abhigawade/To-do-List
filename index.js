const inputbox = document.getElementById('input-box');
const listCon = document.getElementById('list-container');

function addTask(){
    if(inputbox.value === ''){
        alert('You Must add some Task');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listCon.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputbox.value = '';
    savedata();
}

listCon.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);


function savedata(){
    localStorage.setItem("data",listCon.innerHTML);
}

function showdata(){
    listCon.innerHTML = localStorage.getItem("data")
}

showdata();