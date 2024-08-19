//Crear un componente que muestre por pantalla solamente los estilos de cerveza
//que hay en esta lista de cervezas.

const BeerStyle =({list}) =>{
    const styles= list.map(beer => beer.beerStyle);
    const uniqueStyles = [...new Set(styles)];
    return(
        <div>
            <h3>Estilos de cerveza: </h3>
            {uniqueStyles.map(style => <p>{style}<br></br></p>)}</div>
    )
}
export default BeerStyle;