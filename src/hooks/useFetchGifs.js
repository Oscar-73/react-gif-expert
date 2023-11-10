import { useEffect, useState } from "react";

// Para que el hook quede lo más simple y legible posible, movemos toda esta lógica a un archivo ".js".
import { getGifs } from "../helpers/getGif";

// Un hook no es más que una función que devuelve algo.
export const useFetchGifs = (category) => {

     // Hook con el que almacenaremos todas las imágenes para devolverlas debajo.
    const [images, setImages] = useState([]);

    // Hook con el que le indicaremos al usuario que está cargando los gifs.
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);

        // Como lo ha cargado todo, dejamos de mostrar el "Cargando..."
        setIsLoading(false);
    }

    // El "useEffect" es un hook de React que sirve para disparar efectos secundarios, es decir, ejecutar un proceso cuando sucede algo.
    // En primer lugar, debe colocarse el elemento a disparar (effect).
    // En segundo, las dependencias (deps). Si se dejan vacías, el hook solo se ejecutará la primera vez que se cree y construya el componente.
    useEffect(() => {
        // Llamamos a la lógica (función) del "getGif.js" y le pasamos la categoría que hemos recibido del padre.
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
