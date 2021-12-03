let popupbg = document.querySelector('.popup_bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.input');
let closePopupButtons = document.querySelector('.close-popup')

openPopupButtons.forEach((button) =>{
    button.addEventListener('click', (e)=> {
        e.preventDefault();
        popupbg.classList.add('active');
        popup.classList.add('active')
    })
});

closePopupButtons.addEventListener('click', () => {
    popupbg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) =>{
    if(e.target === popupbg) {
        popupbg.classList.remove('active');
        popup.classList.remove('active');
    }
});