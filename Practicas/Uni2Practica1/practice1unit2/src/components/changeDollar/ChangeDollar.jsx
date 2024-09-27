//actualizar el dólar y automáticamente se 
//actualice el precio de cada cerveza en el listado de las mismas.

const BeerList = ({ beers, dolarValue }) => {
    const beersMapped = beers.map( beer =>
                <div>
                    <h3>{beer.beerName}</h3>
                    <p>Tipo: {beer.beerStyle}</p>
                    <p>Precio: ${beer.price * dolarValue} ARS</p>
                    <hr />
                </div>
            )
    return (
        <>
            {beersMapped}
        </>
    );
}

export default BeerList;