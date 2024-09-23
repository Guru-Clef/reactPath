"use client";

import HouseRow from './houseRow';
import useHouses from '../hooks/useHouses';
import loadingStatus from "../helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";




// como vamos a llamar ahora desde una API ya no necesitamos tener esto como constante
// const houseArray = [
//     {
//       id: 1,
//       address: "12 Valley of Kings, Geneva",
//       country: "Switzerland",
//       price: 900000,
//     },
//     {
//       id: 2,
//       address: "89 Road of Forks, Bern",
//       country: "Switzerland",
//       price: 500000,
//     },
//   ];



const HouseList = () => {

    const { houses, setHouses, loadingState } = useHouses();

    if(loadingState !== loadingStatus.loaded)
        return <LoadingIndicator loadingState={loadingState} />
    
    const addHouse = () => {
        setHouses([
            ...houses, // spread operator. 
            {
                id: 3,
                address: "89 Road of Forks, Bern",
                country: "Switzerland",
                price: 500000,
            },
        ]);
    };
   

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>

            <table className="table table-hover">
            <thead>
            <tr>
                <th>Address</th>
                <th>Country</th>
                <th>Asking Price</th>
            </tr>
            </thead>
            <tbody>
                {houses.map(h => <HouseRow key={h.id} house={h}/> )}
            </tbody>            
            <button className='btn btn-primary' onClick={addHouse}>Add</button>
        </table>
        </>
    );

}

export default HouseList;