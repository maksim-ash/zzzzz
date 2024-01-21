let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector ('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition()>lastScroll && !containHide() && scrollPosition()>defaultOffset){
        header.classList.add('hide');
        console.log('down');
    }
    else if(scrollPosition()<lastScroll && containHide()){
        console.log('up');
        header.classList.remove('hide');
    }

    lastScroll=scrollPosition();
})