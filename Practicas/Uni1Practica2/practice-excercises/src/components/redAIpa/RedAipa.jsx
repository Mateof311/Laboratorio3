//Crear otro componente donde internamente haga un conteo y nos muestre por
//pantalla la cantidad de cervezas de estilo Red e IPA que tenemos en la lista.

const CountRedAndIpa = ({list}) => {
    const countByStyle = (style) => list.filter(beer => beer.beerStyle === style).length;

    const redCount = countByStyle('Red');
    const ipaCount = countByStyle('IPA');

    return (
        <div>
            <p>Cantidad de cervezas roja: {redCount}</p>
            <p>Cantidad de cervezas IPA: {ipaCount}</p>
        </div>
    );
}
export default CountRedAndIpa;