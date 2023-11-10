import { GifItem } from "./GifItem";

// Custom hook.
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {
    const {images, isLoading} = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>

            {
                // Condición de solo si es true.
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {                
                    images.map( (image) => (
                        <GifItem
                            key={image.id}
                            
                            // Con el "spread" (...) hacemos que el componente hijo reciba todas las propiedades de dicho objeto en forma de "props".
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    );
};
