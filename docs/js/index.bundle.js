!function(){"use strict";var e=e=>{document.querySelectorAll(".nav__link").forEach((t=>{t.href.includes(e)?t.classList.add("active"):t.classList.remove("active")}))},t=async e=>{let t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch data, status ${t.status}`);return t.json()};const n="Загрузка...",s="Что-то пошло не так...",o=document.querySelector(".user-box"),i=document.createElement("span"),l=e=>{o.innerHTML="",i.classList.add("status-message"),o.appendChild(i),i.innerText=n,t(e).then((t=>{o.removeChild(i),t.map((t=>{const n=document.createElement("div");n.classList.add("user"),n.innerHTML=`\n                    <span class="user__link">${t.username} &rarr;</span> \n            `,n.addEventListener("click",(()=>c(e,t.id))),o.appendChild(n)}))})).catch((()=>{i.innerText=s}))},c=(e,c)=>{o.innerHTML="",i.classList.add("status-message"),o.appendChild(i),i.innerText=n,t(`${e}/${c}`).then((t=>{o.removeChild(i);const n=document.createElement("div"),s=document.createElement("button");n.classList.add("single-user"),s.classList.add("back-btn"),s.innerHTML="&larr; К списку пользователей",n.innerHTML=`\n            <ul>\n                <li>Логин: ${t.username}</li>\n                <li>Почта: ${t.email} </li>\n                <li>Имя: ${t.name.firstname}</li>\n                <li>Фамилия: ${t.name.lastname}</li>\n                <li>Город: ${t.address.city}</li>\n                <li>Телефон: ${t.phone}</li>\n            </ul>\n            `,o.appendChild(n),o.appendChild(s),s.addEventListener("click",(()=>l(e)))})).catch((()=>{i.innerText=s}))};var a=l;window.addEventListener("DOMContentLoaded",(function(){const t=this.window.location.href;(function(){const e=document.querySelector(".burger-btn"),t=document.querySelector(".nav"),n=document.querySelector(".nav__list");e.onclick=function(){e.classList.toggle("open"),t.classList.toggle("nav-open"),n.classList.toggle("nav-open"),e.classList.contains("open")?document.body.style.overflowY="hidden":document.body.style.overflowY="scroll"}})(),t.includes("/users")?(e("/users"),a("https://fakestoreapi.com/users")):t.includes("/todo")&&(e("/todo"),(()=>{const e=document.querySelector(".todo-form__input"),t=document.querySelector(".todo-form__btn"),n=document.querySelector(".validation-errors__error"),s=document.querySelector(".todo-list");t.addEventListener("click",(()=>{""!==e.value?((e=>{const t=document.createElement("div");t.classList.add("todo-list__item"),t.innerHTML=`\n            <p class="todo-list__descr">${e}</p>\n            <div class="todo-list__btns-box">\n                <button class="todo-list__done-btn">Готово</button>\n                <button class="todo-list__delete-btn">Удалить</button>\n            </div>\n        `,s.appendChild(t)})(e.value),n.textContent="",e.value=""):n.textContent="Поле не должно быть пустым"})),s.addEventListener("click",(e=>{if(e.target.classList.contains("todo-list__delete-btn")){const t=e.target.closest(".todo-list__item");t&&t.remove()}else if(e.target.classList.contains("todo-list__done-btn")){const t=e.target.closest(".todo-list__item");if(t){const e=t.querySelector(".todo-list__descr");e&&e.classList.toggle("done")}}}))})())}))}();