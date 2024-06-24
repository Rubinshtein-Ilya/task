import mobileNav from './modules/mobile-nav.js';
import activeRoute from './modules/nav-active.js';
import todo from './modules/todo.js';
import getUsers from './modules/users.js';





window.addEventListener('DOMContentLoaded', function() {
    const currentUrl = this.window.location.href;
    
    mobileNav();
    if( currentUrl.includes('/users')) {
        activeRoute('/users')
        getUsers(process.env.API_URL)
    } else if ( currentUrl.includes('/todo')) {
        activeRoute('/todo')
        todo()
    }
})