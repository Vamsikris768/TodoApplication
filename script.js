const inpValue=document.getElementById("input-box");
const listContainer=document.getElementById('list-container');
const btn=document.querySelector('button')
btn.addEventListener('click',()=>{
    if(inpValue.value===''){
        alert('You must write something')
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=inpValue.value;
        listContainer.appendChild(li)
        let span=document.createElement('span')
        let editBtn = document.createElement('span');
        editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        editBtn.classList.add('edit-btn');
        span.innerHTML='\u00d7'
        li.appendChild(span).appendChild(editBtn)
    }
    inpValue.value=''; 
    saveData()
})
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem('data')
}
 
showTask()

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked')
        saveData()


    }
    else if(e.target.tagName==='SPAN'){
        console.log(e.target.parentElement)
        e.target.parentElement.remove()
        saveData()

    }
    else if (e.target.closest('.edit-btn')) {
        let li = e.target.closest('li');
        let text = li.childNodes[0].nodeValue.trim();
        inpValue.value = text;
        li.remove();
    }
},false)

let date=document.querySelector('.date')
let currentDate=new Date().toLocaleDateString()
date.innerHTML=currentDate;

// localStorage.removeItem('data')
