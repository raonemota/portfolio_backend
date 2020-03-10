const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const cursos = document.querySelectorAll('.curso');

//Listar os cards das aulas Youtube (page: Classes) e adiciona os eventos de click
for (let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    });
}


//Evento de fechar o modal
document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector("iframe").src = "";
});

//Listar os cards dos cursos (page: contents) e adiciona os eventos de click
for (let curso of cursos){
    curso.addEventListener("click", function(){
        const cursoId = curso.getAttribute("id");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cursoId}`
    });
}


