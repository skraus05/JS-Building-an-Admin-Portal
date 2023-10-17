
// Your Code Here

async function main(){
    let response = await fetch('http://localhost:3001/listBooks');
    let books = await response.json();
    books.forEach(renderBook);
}

function renderBook(book) {
    let root = document.querySelector('#root');
    let booksLi = document.createElement('li');
    booksLi.textContent = book.title;
    
    let quantityBook = document.createElement('input');
    quantityBook.value = book.quantity;

    let saveButton = document.createElement('button');
    saveButton.textContent = 'Save';

    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityBook.value
            })
        })
    })
    booksLi.append(quantityBook, saveButton);
    root.append(booksLi);
}
main();
