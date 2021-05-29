console.log("page was loaded");

var banner = document.getElementById('page-banner');
console.log(banner);


var form = document.getElementById('add-book');

form.addEventListener('submit',(event)=>{
    console.log('submit event failed');
    event.preventDefault();
    let book_list = document.querySelector('#book-list ul');
    let new_book_element = document.querySelector('#new-book-name');
    let new_book_name = new_book_element.value;



    //create elements
    const li = document.createElement('li');
    const name_span = document.createElement('span');
    const del_span = document.createElement('span');

    //add text content
    name_span.textContent = new_book_name;
    del_span.textContent = 'delete';

    //add class name
    name_span.className= 'name';
    del_span.className = 'delete';

    // append it to dom
    li.appendChild(name_span);
    li.appendChild(del_span);
    book_list.appendChild(li);

    new_book_element.value= '';
    console.log('book add to list')
});

//delet book

const list = document.querySelector('#book-list ul');

list.addEventListener('click', (event)=>{
    if(event.target.className == 'delete'){
        const li = event.target.parentElement;
        list.removeChild(li);
    }
})

// hide books

const hidebox = document.getElementById('hide')

hidebox.addEventListener('change',(event)=>{
    if(hidebox.checked){
        list.style.display = "none"
    }else{
        list.style.display ='initial'
    }
});


//seaching the books
const search_input = document.querySelector('#search-books input');

search_input.addEventListener('keyup',(event)=>{
    console.log('input was changed');
    const search_term = search_input.value.toLowerCase();
    const books = document.querySelectorAll('#book-list ul li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent.toLowerCase();
        if(title.includes(search_term)){
            book.classList.remove('hidden');
        }else{
            book.classList.add('hidden')
        }
    })
})