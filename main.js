document.addEventListener('DOMContentLoaded', async () => {
    let listItems = document.querySelectorAll('li:has(article.shopping-item)');
    const formElement = document.querySelector('form');
    const inputElement = document.querySelector('input');
    const shoppingListElement = document.querySelector('ol');

    console.log(listItems);

    formElement.addEventListener('submit', async (event) => {
        event.preventDefault();
        const inputValue = inputElement.value;
        const newItem = createListItem(inputValue, listItems.length + 1);
        shoppingListElement.appendChild(newItem);
        listItems = document.querySelectorAll('li:has(article.shopping-item)');
        inputElement.value = '';

    });

    function createListItem(title, id) {
        //  The functions below are used to create the following HTML structure
        //         <li data-id={id}>
        //             <article class="shopping-item">
        //                 <p>{title}</p>
        //                 <button class="button destructive" type="button">remove</button>
        //             </article>
        //         </li>

        // 
        const liElement = document.createElement('li');
        liElement.setAttribute('data-id', id);
        const articleElement = document.createElement('article');
        articleElement.classList.add('shopping-item');
        const pElement = document.createElement('p');
        pElement.textContent = title;
        const buttonElement = document.createElement('button');
        buttonElement.classList.add('button');
        buttonElement.classList.add('destructive');
        buttonElement.setAttribute('type', 'button');
        buttonElement.textContent = 'remove';
        buttonElement.addEventListener('click', () => {
            removeListItem(id);
        });
        articleElement.appendChild(pElement);
        articleElement.appendChild(buttonElement);
        liElement.appendChild(articleElement);
        return liElement;

    }


    function removeListItem(id) {
        //  The functions below are used to remove the following HTML structure
        //         <li data-id={id}>
        //             <article class="shopping-item">
        //                 <p>{title}</p>
        //                 <button class="button destructive" type="button">remove</button>
        //             </article>
        //         </li>

        const liElement = document.querySelector(`li[data-id="${id}"]`);

        shoppingListElement.removeChild(liElement);
        listItems = document.querySelectorAll('li:has(article.shopping-item)');

    }
})