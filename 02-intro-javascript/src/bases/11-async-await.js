
// const getImagenPromesa = () => new Promise( resolve => resolve('https://ssdsddfdfdffd.com'))
// getImagenPromesa().then( console.log );

//Retornar una promesa
const getImagen = async() => {
    
    try {
        const apiKey = 'rPw95VWQlAx2Npe45NJCoNzQzuq2QWM3';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();
    
        const {url} = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        //manejo del error
        console.error(error)
    }

}

getImagen();


