import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  // Cuando quiere almacenarse información y dicha información tiene que cambiar el HTML, normalmente se usa un hook "useState()".
  // Ahora tenemos un espacio en memoria que nos va a servir para controlar las categorías.
  // Además de almacenarlas, las inicializaremos como un array que contiene un valor inicial.
  const [categories, setCategories] = useState(['One Punch']);

  // Función que añade el valor introducido en el componente "AddCategory" al array de valores del hook (categories).
  const onAddCategory = (newCategory) => {

    // Así evitamos que vuelvan a añadir el mismo elemento.
    if(categories.includes(newCategory)) return;
    
    // Añadimos el nuevo valor al array.
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* Listado de gifs */}
      {
        // .map() es una función de los arrays en JavaScript que nos permite mostrar todos sus elementos mediante iteración.
        categories.map((category) => (
          // La "key" es necesaria para darle independencia a cada elemento. Para separarlos y que no se repitan.
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  );
}