import currencyFormatter from "../helpers/currencyFormatter";

const HouseRow = ({house}) => {

    // Esto es para el conditional Rendering 
    // recuerda que también puedes usar literals como en la linea 23


    // let priceTd;
    // if(house.price < 500000) {
    //     priceTd = <td>{currencyFormatter.format(house.price)}</td>
    // } else {
    //     priceTd = <td className="text-primary">{currencyFormatter.format(house.price)}</td>
    // } 

    return(
        // <tr key={house.id}> ya no necesitas el ID acá
        <tr key={house.id} onClick={() => selectHouse(house)}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {/* <td>{currencyFormatter.format(house.price)}</td> */}            
            {/*priceTd*/}

            {/* EL TD solo se renderiza cuando house.price IS THRUTHLY */}
            {house.price && (
            <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
                {currencyFormatter.format(house.price)}
            </td>
            )}

        </tr>
    );
};

export default HouseRow;