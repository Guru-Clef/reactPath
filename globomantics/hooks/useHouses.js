// Hooks siempre usan el "use" prefix en su nombre
// Solo es una function, que tiene que ser exportada como un módulo
// Esto no retorna JSX

import { useEffect, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";

const useHouses = () => {
    // Todo esto estaba en HouseList Component
    // HOOK!
    // Array destructuring
    // el primer valor representa el current state
    // el segundo valor es usado para cambiar el state, es como un setter.
    const [houses, setHouses] = useState([]); 
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    useEffect(() => {

        // fetch retorna un promise, por eso tienes que tener un await adelante
        // al ser una operación async, debes colocar async en la function padre. 
        // como no puedes colocar eso en el HOOK, envuelves todo en una function async
        // luego la llamas más adelante. 
        const fetchHouses = async () => {
            setLoadingState(loadingStatus.isLoading);
            try {
                const response = await fetch("/api/houses");
                const houses = await response.json();
                setHouses(houses);
                setLoadingState(loadingStatus.loaded);
            } catch {
                setLoadingState(loadingStatus.hasErrored);
            }
            
        };
        fetchHouses();

    }, []); // Empty dependency array

    return { houses, setHouses, loadingState }; // exportas 3 cosas 
};    

export default useHouses;