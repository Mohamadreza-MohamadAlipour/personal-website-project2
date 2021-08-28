const tabMenu = document.querySelector('.tab-menu-list').children
const galleryItem = document.querySelector('.portfolio-gallery').children

for (let i = 0; i < tabMenu.length; i++) {
  tabMenu[i].addEventListener('click', () => {
    for (let j = 0; j < tabMenu.length; j++) {
      tabMenu[j].classList.remove('active')
    }
    tabMenu[i].classList.add('active')
    let target = tabMenu[i].getAttribute('data-target')

    for (let k = 0; k < galleryItem.length; k++) {
      galleryItem[k].style.display = 'none'
      if (target == galleryItem[k].getAttribute('data-id')) {
        galleryItem[k].style.display = 'block'
      }
      if (target == 'all') {
        galleryItem[k].style.display = 'block'
      }
    }
  })
}

// lightbox

const lightBox = document.querySelector('#lightbox')
const closeLightBox = document.querySelector('#close-lightbox')
const viewBtn = document.querySelectorAll('.view-btn')
const galleryImg = document.querySelectorAll('.gallery-img')
const galleryLightBox = document.querySelector('#gallery-lightbox')

closeLightBox.addEventListener('click', () => {
  lightBox.classList.remove('show')
  lightBox.classList.add('hide')
})

for (let i = 0; i < galleryItem.length; i++) {
  let viewBtn = galleryItem[i].querySelector('.view-btn')
  viewBtn.addEventListener('click', () => {
    lightBox.classList.remove('hide')
    lightBox.classList.add('show')

    let galleryImg = galleryItem[i].querySelector('img')
    galleryLightBox.src = galleryImg.getAttribute('src')
  })
}

// slide

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
let slideItem = document.querySelectorAll('.slide-Item')
let index = 0

prev.onclick = () => {
  nextSlide('prev')
}

next.onclick = () => {
  nextSlide('next')
}

function nextSlide (direction) {
  if (direction == 'next') {
    if (index === slideItem.length - 1) {
      index = 0
    } else {
      index++
      console.log(index)
    }
  } else if (direction == 'prev') {
    if (index === 0) {
      index = slideItem.length - 1
    } else {
      index--
      console.log(index)
    }
  }

  for (let i = 0; i < slideItem.length; i++) {
    slideItem[i].classList.remove('active')
  }

  slideItem[index].classList.add('active')
}

//header scroll

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
  if (window.scrollY > 0 && window.innerWidth > 768) {
    header.classList.add('fixed')
  } else {
    header.classList.remove('fixed')
  }
})

// Active movement in navbar

const navbarItem = document.querySelectorAll('nav ul li')
console.log(navbarItem)

for (let i = 0; i < navbarItem.length; i++) {
  navbarItem[i].addEventListener('click', () => {
    for (let j = 0; j < navbarItem.length; j++) {
      navbarItem[j].classList.remove('active')
    }
    navbarItem[i].classList.add('active')
  })
}

// hamburger menu

const hamburgerMenu = document.querySelector('.hamburger-menu')
const menu = document.querySelector('header nav ul')

hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active')
  hamburgerMenu.classList.toggle('active')
})
