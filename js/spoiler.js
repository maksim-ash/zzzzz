
$(document).ready(function() {
    $('.spoiler__title').click(function(event) {

        if($('.termins_box').hasClass('one')){
            $('.spoiler__title').not($(this)).removeClass('active');
            $('.spoiler__text').not($(this).next()).slideUp(300);
        }/* Что бы всегда был активный 1 айтем */

        $(this).toggleClass('active').next().slideToggle(300);
    });
});


/*
const hb = document.querySelector ('.spoiler');
const menu = document.querySelector ('.spoiler__title');
const nex = document.querySelector ('.next');


hb.addEventListener('click', function(){
    menu.classList.toggle('active'),next();
    nex.classList.toggle('active'),next();
})
*/
