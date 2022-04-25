const toggle = document.querySelector('.toggle')
const hero = document.querySelector('.hero')

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')

    if(html.classList.contains('light')) {
        html.classList.remove('light')
        e.target.innerHTML = 'Light mode'
        hero.setAttribute('style', 'background-image: url(../assets/Background-img.jpg);')
    } else {
        html.classList.add('light')
        e.target.innerHTML = 'Dark mode'
        hero.setAttribute('style', 'background-image: url(../assets/Background-img-light.jpg);')
    }
})
