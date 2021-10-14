/* Adding 'active' class to the href of the current section */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',  () => {
    const scrollY = window.pageYOffset

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight,
            sectionTop = section.offsetTop - 50,
            sectionId = section.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
})

/* Adding shadow to header when scrolled down */
window.addEventListener('scroll', () => {
    const header = document.getElementById('header')
    if (this.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header')
    }
})
