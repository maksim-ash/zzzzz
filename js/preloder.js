window.onload=function(){
    let preloder = document.getElementById('preloder');
    preloder.classList.add('hide-preloder');
    setTimeout(function(){
        preloder.classList.add('preloder-hidden')
    },1450)
}