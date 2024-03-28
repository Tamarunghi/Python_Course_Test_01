/*TOOLTIPS BOTÓN ENVIAR CON BOOTSTRAP */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*HOVER EN H1 */
const h1Titles = document.getElementsByTagName('h1');

for (let i = 0; i < h1Titles.length; i++) {
    h1Titles[i].addEventListener('mouseenter', function() {
        this.style.color = '#0dcaf0';
    });

    h1Titles[i].addEventListener('mouseleave', function() {
        this.style.color = '';
    });
}

/*HOVER BOTÓN ENVIAR CON JQUERY*/
$(document).ready(function(){
    $(".btn").hover(function(){
        $(this).css("background-color", "#0d7ef0");
    }, function(){
        $(this).css("background-color", "#0dcaf0");
    });
});