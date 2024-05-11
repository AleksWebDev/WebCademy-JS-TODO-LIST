//Adding new task
const form = document.querySelector('#addForm');
const itemsList = document.querySelector('#items');
const filter = document.querySelector('#filter');

form.addEventListener('submit', function(e){
    //cancel standrt form action
    e.preventDefault();

    //getting input value for designing new task
    const input = document.querySelector('#newItemText');    
    const inputValue = input.value;
    //creating new DOM element
    const element = document.createElement('li');
    element.className = 'list-group-item';

    //adding node text to element 
    element.innerText = inputValue;

    //Button delite task
    const deleteBtn = document.createElement('button');
    //adding class to element 
    deleteBtn.className = 'btn btn-light btn-sm float-right';
    //adding data attribute to element 
    deleteBtn.dataset.action = 'delete';
    //adding node text to element 
    deleteBtn.innerText = 'Удалить';
    element.appendChild(deleteBtn);


    //adding new task to the tasks list

    itemsList.prepend(element);

    input.value = ' ';
})

// deleting task from tasks list
itemsList.addEventListener('click', function(e){
    let target = e.target;

    if(target.hasAttribute('data-action') && 
        target.getAttribute('data-action') === 'delete'){
            {
                if(confirm('Вы уверены ?')){
                    target.parentNode.remove();
                }
            }
    }
})

// filtering task in tasks list
filter.addEventListener('keyup', function(e){
    const searchedText = e.target.value.toLowerCase();

    let items = itemsList.querySelectorAll('li');
    
    items.forEach(function(item){
        let itemText = item.firstChild.textContent.toLowerCase();
        if(itemText.indexOf(searchedText) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
})