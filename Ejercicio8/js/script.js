window.addEventListener("load", () => {
    const noticias = [
        {
            titulo: "Turismo de vacunas: 2.000 personas por día reciben su dosis en el aeropuerto de Miami",
            imgUrl: "https://static.dw.com/image/56579510_303.jpg",
            descripcion: "Fácil y rápido son los dos adjetivos que más repiten las personas que describen cómo es el proceso de vacunación en el aeropuerto internacional de Miami. En su mayoría son turistas internacionales quienes se inoculan al día en la clínica instalada en la terminal aérea",
            fecha: "07/06/21",
            tipoNacional: true
        },
        {
            titulo: "El gran gesto por amor de Jennifer Lopez hacia Ben Affleck",
            imgUrl: "https://imagenes.20minutos.es/files/image_656_370/files/fp/uploads/imagenes/2021/01/15/jennifer-lopez-y-ben-affleck.r_d.1175-294-3089.jpeg",
            descripcion: "La cantante fue vista averiguando sobre escuelas en Los Ángeles, lo que hace suponer que podría mudarse con sus hijos allí para estar cerca del actor",
            fecha: "02/06/21",
            tipoNacional: false
        },
        {
            titulo: "Cómo evitar que se empañen los anteojos al usar barbijo",
            imgUrl: "https://images.ctfassets.net/u4vv676b8z52/2YmjIfLmMrJnSk5mMQPlHp/200a223fdbcf3bf5528a965dc88107e0/foggy-eyeglasses-hero-compressor.jpg?fm=jpg&q=80",
            descripcion: "Para quienes utilizan anteojos, la combinación del uso obligatorio de tapabocas desde el año pasado se volvió una complicación. Paso a paso para evitar que se empañen",
            fecha: "01/06/21",
            tipoNacional: true
        },
        {
            titulo: "La UE aprobó el fondo de USD 21.000 millones para apoyar a las regiones más afectadas por la transición verde",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawvWf5Jy4G4J0L_4NjiGF5pSgwTfqC2rhLg&usqp=CAU",
            descripcion: "El objetivo es ayudar a los países a emprender la transición ecológica en su camino hacia una economía libre de emisiones de gases de efecto invernadero a mitad de siglo",
            fecha: "04/06/21",
            tipoNacional: false
        },
        {
            titulo: "Maradona: cómo es la muestra fotográfica argentina que deslumbra a todos en Serbia",
            imgUrl: "https://cnnespanol.cnn.com/wp-content/uploads/2020/11/maradona-1986-GettyImages-494862753-e1606329095603.jpg?quality=100&strip=info",
            descripcion: "La exposición, que cuenta con postales icónicas de “El Diez” que capturaron los fotógrafos de la agencia de noticias Télam, es uno de los hitos del festival Mes de la Fotografía de Belgrado",
            fecha: "07/06/21",
            tipoNacional: true
        },
    ];

    function addNews(obj) {
        const container = document.querySelector('#mean-news');
        if(obj.tipoNacional===true){
        template = `
        <div class="news-container">
            <div class="cont-img" style="background-image: url(${obj.imgUrl}); filter: opacity(50%)">
                <button class="national">nacional<button>
            </div>
            <h3 class="title">${obj.titulo}</h3>
            
            <div class="cont-news">
                <p class="date">
                    ${obj.fecha}
                <p>
                <p>${obj.descripcion}</p>
            </div>
        </div>
        `;
        }else{
            template = `
            <div class="news-container">
                <div class="cont-img" style="background-image: url(${obj.imgUrl}); filter: opacity(50%)">
                    <button class="international">internacional<button>
                </div>
                <h3 class="title">${obj.titulo}</h3>
                <div class="cont-news">
                    <p class="date">
                        ${obj.fecha}
                    <p>
                    <p>${obj.descripcion}</p>
                </div>
            </div>
            `;
        }
        container.innerHTML += template;
    }
    noticias.forEach(noticia=> {
        addNews(noticia);
    })
    const mode = document.querySelector(".color-mode")
    mode.addEventListener("click", ()=>{
        const change = document.querySelector("body");
        change.classList.toggle("dark");
    });

    const national = document.querySelector("#NA");
    const international = document.querySelector("#IN");
    national.addEventListener("click", ()=>{
        
    })
    national.addEventListener("click", ()=>{
        const container = document.querySelector('#mean-news');
        container.innerHTML = "";
        noticias.forEach(noticia=> {
            if (noticia.tipoNacional===true){
                addNews(noticia);
            }
        });
    });

    international.addEventListener("click", ()=>{
        const container = document.querySelector('#mean-news');
        container.innerHTML = "";
        noticias.forEach(noticia => {
            if (noticia.tipoNacional===false){
                addNews(noticia);
            }
        });
    });    
    const home = document.querySelector("#logo");
    home.addEventListener("click", ()=>{
        const container = document.querySelector('#mean-news');
        container.innerHTML = "";
        noticias.forEach(noticia => {
            addNews(noticia);
        });

    });
});