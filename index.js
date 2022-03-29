const menuEl = document.getElementById('menu')
const lateralMenuEl = document.getElementById('lateral-menu')
console.log(lateralMenuEl)
menuEl.addEventListener('click', handleMenu)

function handleMenu() {
    
    const lateralMenuClassList = Array.from(lateralMenuEl.classList)
    const isActive = lateralMenuClassList.find( el => el === 'active')

    if(isActive) {
        lateralMenuEl.classList.remove('active')
        return
    }

    lateralMenuEl.classList.add('active')
}
