let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let e1 = document.getElementsByTagName('li');

// function to add list when button clicked

btn.addEventListener('click',()=>{
    let txt = input.value;
    if(txt===''){
        alert('write somethig')
    }else{
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li , list.childNodes[0]);
        input.value='';
    }
});


// to check list

list.addEventListener('click', e =>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle('checked');
    }
})