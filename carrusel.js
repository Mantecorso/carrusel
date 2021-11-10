//window.addEventListener('load', function() {
    let indice = 0;
    let atras, alante;
    atras = this.document.getElementById('prev');
    alante = this.document.getElementById('next');

    show_image(indice);

    function show_image(i) {
        indice += i;

        let images = document.getElementsByClassName('image');
        let dots = document.getElementsByClassName('dot');
        
        for (i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        if (indice > images.length - 1) {
            indice = 0;
        }

        if (indice < 0) {
            indice = images.length - 1;
        }

        images[indice].style.display = "block";
        dots[indice].className += " active";
    }

/*     atras.addEventListener('click', function() {

        indice += i;

        let images = document.getElementsByClassName('image');
        let dots = document.getElementsByClassName('dot');
        
        for (i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        if (indice > images.length - 1) {
            index = 0;
        }

        if (indice < 0) {
            indice = images.length - 1;
        }

        images[indice].style.display = "block";
        dots[indice].className += " active";
    }) */
//})