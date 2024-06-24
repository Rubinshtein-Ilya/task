import fetchData from "../services/http-service"

const messages = {
    loading: 'Загрузка...',
    failure: 'Что-то пошло не так...'
}



const container = document.querySelector('.user-box')
const statusMessage = document.createElement('span')

const getUsers = (url) => {
    container.innerHTML = ''
    statusMessage.classList.add('status-message')
    container.appendChild(statusMessage)
    statusMessage.innerText = messages.loading


    fetchData(url)
    .then(users => {
        container.removeChild(statusMessage)
        users.map(item => {
            const user = document.createElement('div')
            user.classList.add('user')

            user.innerHTML = `
                    <span class="user__link">${item.username} &rarr;</span> 
            `
            user.addEventListener('click', () => getSingleUser(url, item.id))
            container.appendChild(user)
          
        })
    }).catch(() => {
        statusMessage.innerText = messages.failure
        }
    )
}

const getSingleUser = (url,id) => {
    container.innerHTML = ''
    statusMessage.classList.add('status-message')
    container.appendChild(statusMessage)
    statusMessage.innerText = messages.loading

    fetchData(`${url}/${id}`)
    .then(user => {
        container.removeChild(statusMessage)
        const singleUser = document.createElement('div')
        const backBtn = document.createElement('button')
        singleUser.classList.add('single-user')
        backBtn.classList.add('back-btn')
        backBtn.innerHTML = `&larr; К списку пользователей`

        singleUser.innerHTML = `
            <ul>
                <li>Логин: ${user.username}</li>
                <li>Почта: ${user.email} </li>
                <li>Имя: ${user.name.firstname}</li>
                <li>Фамилия: ${user.name.lastname}</li>
                <li>Город: ${user.address.city}</li>
                <li>Телефон: ${user.phone}</li>
            </ul>
            `

        container.appendChild(singleUser)
        container.appendChild(backBtn)
        backBtn.addEventListener('click', () => getUsers(url))

    }).catch(() => {
        statusMessage.innerText = messages.failure
    })
}



export default getUsers