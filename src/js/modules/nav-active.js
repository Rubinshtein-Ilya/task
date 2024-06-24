const activeRoute = (url) => {
    const routerLinks = document.querySelectorAll('.nav__link')
   
    routerLinks.forEach(link => {
        !link.href.includes(url) ? link.classList.remove('active'): link.classList.add('active');
    })
}

export default activeRoute