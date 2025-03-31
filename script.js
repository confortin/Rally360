document.addEventListener("DOMContentLoaded", function () {
let index = 0;
const images = document.querySelectorAll('.carousel img');
const styles = ["style1", "style2", "style3"];
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


function changeImage(direction) {
    images[index].classList.remove('active');
    
    // Remove a classe de estilo anterior do body
    document.body.classList.remove(styles[index]);

    index = (index + direction + images.length) % images.length;
    
    images[index].classList.add('active');

    // Adiciona a nova classe ao body
    document.body.classList.add(styles[index]);

}

prevBtn.addEventListener("click", function () {
    changeImage(-1);
});

nextBtn.addEventListener("click", function () {
    changeImage(1);
});

});