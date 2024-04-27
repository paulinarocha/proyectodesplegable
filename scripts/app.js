const projects =[
    {
        idproject:1,
        imgproject:''
        titleproject:''
        linkproject:
    },
    {
        idproject:2,
        imgproject:''
        titleproject:''
        linkproject:
    },

]


function scrollToSection(event) {
    event.preventDefault(); // Para evitar el comportamiento predeterminado del enlace

    const targetId = event.target.getAttribute('href'); // Obtener el id de la sección a la que se desplazará
    const targetSection = document.querySelector(targetId); // Seleccionar la sección

    // Hacer scroll suavemente hacia la sección
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
}


















document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click',function (event){
        event.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            window.scrollTo({
                top: target.offsetTop,
                behavior:'smooth' //animacion de desplazamiento suave
            });
        }
    });
});
