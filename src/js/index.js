import mobileNav from './modules/mobile-nav.js';
import getUsers from './modules/users.js';





window.addEventListener('DOMContentLoaded', function() {
    const currentUrl = this.window.location.href;
    
    mobileNav();
    if( currentUrl.includes('/users')) {
        getUsers(process.env.API_URL)
    }
   
  
})