document.addEventListener('DOMContentLoaded', () => {
    const title = document.createElement('h1');
    title.textContent = 'Список пользователей';

    const list = document.createElement('ul');
    const users = ['Анна', 'Борис', 'Виктор'];

    users.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        list.appendChild(li);
    });

    const button = document.createElement('button');
    button.textContent = 'Добавить пользователя';

    button.addEventListener('click', () => {
        const newUser = document.createElement('li');
        newUser.textContent = 'Новый пользователь';
        list.appendChild(newUser);
    });

    document.body.appendChild(title);
    document.body.appendChild(list);
    document.body.appendChild(button);
});
