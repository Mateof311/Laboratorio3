//Escribir un componente Table.js que arme una tabla de HTML
//donde las columnas sean el nombre de la marca y el ingreso neto.
//Escribir una etiqueta p que muestre el promedio de ingreso neto entre todas las marcas.
//Utilizar obligatoriamente la función reduce para calcular el promedio.

const Table =({array}) => {
    const incomes = array.map(company => company.income);
    const average= incomes.reduce((acc, curr) => acc + curr, 0);
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre de la Marca</th>
                        <th>Ingreso Neto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Marca A</td>
                        <td>$1,000,000</td>
                    </tr>
                    <tr>
                        <td>Marca B</td>
                        <td>$2,500,000</td>
                    </tr>
                </tbody>
            </table>
            <p>Promedio de ingreso neto entre todas las companias: {average}</p>
        </div>
    )
}
export default Table;