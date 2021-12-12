let carrouselIndexImg = [
    './images/departamento-1.jpg',
    './images/departamento-2.jpg',
    './images/departamento-4.jpg'
];

var carrouselFn = () => {

    //Obtenemos la seccion de los departamentos//
    var departmentsSection = document.getElementsByClassName('departments-carousel-section')[0];

    //Obtenemos la seccion de la fila de los departamentos//
    var rowDepartmentSection = departmentsSection.childNodes[1];

    //Col-deparments
    var colDepartment = rowDepartmentSection.childNodes[1];

    //departaments-carousel-controls
    var departmentsCarouselControls = colDepartment.childNodes[1];

    //Carousel
    var carrouselImgs = departmentsCarouselControls.childNodes[1];

    let counterCarousel = 0;

    carrouselIndexImg.map((index) => {

        var headerCarousel = '', bodyCarousel = '', footerCarousel = '';

        bodyCarousel = "<img src=\"" + index +"\" class=\"d-block w-100\" alt=\"...\">";
        footerCarousel = "</div>";

        //Si es la primera vuelta del ciclo el valor sera un carousel activo y los posteriores no
        counterCarousel == 0 ? headerCarousel = "<div class=\"carousel-item active\">": headerCarousel = "<div class=\"carousel-item\">";
        
        //Generamos el cuerpo de nuestras imagenes en codigo JS.
        carrouselImgs.innerHTML = carrouselImgs.innerHTML + (headerCarousel + bodyCarousel + footerCarousel);

        counterCarousel++;
    });
}

(function() {
    menuBar(1);
    carrouselFn();
})();
