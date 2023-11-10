import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    // Función que recoge el valor "target" del objeto "event" que se genera cada vez que pulsamos una tecla en el input.
    // Básicamente se encarga de actualizar el valor del hook cada vez que pulsamos una tecla.
    const onInputChange = ({target}) => setInputValue(target.value);

    const onSubmit = (event) => {
        // De esta forma evitamos que se reinicie la página cuando pulsemos intro.
        event.preventDefault();

        // Así evitamos que solo introduzcan un caracter o ninguno.
        if(inputValue.trim().length <= 1) return;

        // Añadimos el valor del input al inicio del array de categorías sin olvidar los valores anteriores (que los pasamos mediante el padre).
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());

        // Limpiamos el input para terminar.
        setInputValue(['']);
    };

    return (
        // En este caso, el "<form>" hace lo mismo que un Fragment ( <> </> ). Cuando se pulsa intro sobre uno, se hace un refresco completo de la web.
        // Al pulsar intro, enviaremos el valor al componente padre (GifExpertApp).
        <form onSubmit={ onSubmit }>
            {/* // Debe usarse un "onChange" con una función porque si no pondría "One Punch" en el input y no podría modificarse. */}
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}