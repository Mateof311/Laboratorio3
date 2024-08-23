//Escribir un componente Table.js que arme una tabla de HTML
//donde las columnas sean el nombre de la marca y el ingreso neto.
//Escribir una etiqueta p que muestre el promedio de ingreso neto entre todas las marcas.
//Utilizar obligatoriamente la función reduce para calcular el promedio.

const Table =({netIncomes}) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Ingreso Neto</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map((company, index) => (
                        <tr key={index}>
                            <td>{company.brand}</td>
                            <td>{company.income}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table;