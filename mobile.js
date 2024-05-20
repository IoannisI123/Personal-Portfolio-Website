

const barsBtn = document.querySelector('.header__bars');

let mobileMenu = document.querySelector('#mobile-nav');
barsBtn.addEventListener('click',toggleMenu )

function toggleMenu(){
if (mobileMenu.classList.contains('mobile-nav__hidden')){
    mobileMenu.classList.remove('mobile-nav__hidden');
    mobileMenu.classList.add('mobile-nav');

}else if(mobileMenu.classList.contains('mobile-nav')) {
    mobileMenu.classList.remove('mobile-nav');
    mobileMenu.classList.add('mobile-nav__hidden');
}
}