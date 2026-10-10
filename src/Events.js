export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => {
        button.remove();
    });
    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;
        li.addEventListener('mouseover', () => {
            li.setAttribute('title', li.textContent);
        });
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

export function createLink() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://tensor.ru/');
    link.textContent = 'tensor';

    let isFirstClick = true;
    link.addEventListener('click', (event) => {
        if (isFirstClick) {
            event.preventDefault();
            link.textContent += ' ' + link.getAttribute('href');
            isFirstClick = false;
        }
        // при следующих кликах действие по умолчанию не отменяем
    });

    document.body.appendChild(link);
}

export function createList() {
    const ul = document.createElement('ul');
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    function addItem() {
        const li = document.createElement('li');
        li.textContent = 'Пункт';
        li.addEventListener('click', () => {
            li.textContent += '!';
        });
        ul.appendChild(li);
    }

    button.addEventListener('click', addItem);

    addItem();

    document.body.appendChild(ul);
    document.body.appendChild(button);
}