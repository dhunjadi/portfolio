// Adding 'active' class to the href of the current section 
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

// Adding shadow to header when scrolled down 
window.addEventListener('scroll', () => {
    const header = document.getElementById('header')
    if (this.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header')
    }
})

// Opening project images in modal 
const modal = document.querySelector(".modal")
const imgs = document.querySelectorAll(".project-img")
const modalImg = document.querySelector(".modal-img")

imgs.forEach(img => {
    img.addEventListener('click', () => {
       modal.classList.add("open")
       modalImg.classList.add("open")
       // Show clicked image
       const imgSrc = img.getAttribute("src")
       modalImg.src = `${imgSrc}`
    })
})

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open")
        modalImg.classList.remove("open")
    }
})

// Fading animations
const skillIcons = document.querySelectorAll(".skills-icon")
const  projectContainers = document.querySelectorAll(".project-container")
const projectImgs = document.querySelectorAll(".project-container .img-container")
const projectTxts = document.querySelectorAll(".project-container .project-text-container")

window.addEventListener("scroll", () => {
    skillIcons.forEach(icon => {
        let iconPosition = icon.getBoundingClientRect().top
        if(iconPosition < 750){
            icon.classList.remove("fade-in")
        }
    })

    projectContainers.forEach(container => {
        let containerPosition = container.getBoundingClientRect().top
        if(containerPosition < 750) {
            container.children[0].classList.remove("fade-in-right")
            container.children[1].classList.remove("fade-in-left")
        }
    })
    
})
