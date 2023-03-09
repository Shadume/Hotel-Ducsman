document.querySelector('#open-menu').addEventListener('click', () => {
    const aside = document.querySelector('aside')
    const toggle = aside.classList.toggle('active')
    const openMenu = document.querySelector('#open-menu')
    console.log(toggle)
    if (toggle) {
      openMenu.src = 'images/icon/close.png'
    } else {
      openMenu.src = 'images/icon/menu-burger.png'
    }
  })