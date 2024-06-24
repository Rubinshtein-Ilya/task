const todo = () => {
    const input = document.querySelector('.todo-form__input')
    const addBtn = document.querySelector('.todo-form__btn')
    const err = document.querySelector('.validation-errors__error')
    const list = document.querySelector('.todo-list')

    const addTask = (value) => {
        const task = document.createElement('div')
        task.classList.add('todo-list__item') 

        task.innerHTML = `
            <p class="todo-list__descr">${value}</p>
            <div class="todo-list__btns-box">
                <button class="todo-list__done-btn">Готово</button>
                <button class="todo-list__delete-btn">Удалить</button>
            </div>
        `
        list.appendChild(task)
    }

    addBtn.addEventListener('click', () => {

        if(input.value === '') {
            err.textContent = 'Поле не должно быть пустым'
            return
        } else {
            addTask(input.value)
            err.textContent = ''
            input.value = ''
        }  
    })

    list.addEventListener('click', (event) => {
        if (event.target.classList.contains('todo-list__delete-btn')) {
            const task = event.target.closest('.todo-list__item')
            if (task) {
                task.remove()
            }
        } else if (event.target.classList.contains('todo-list__done-btn')) {
            const task = event.target.closest('.todo-list__item')
            if (task) {
                const descr = task.querySelector('.todo-list__descr')
                if (descr) {
                    descr.classList.toggle('done')
                }
            }
        }
    })
}

export default todo
