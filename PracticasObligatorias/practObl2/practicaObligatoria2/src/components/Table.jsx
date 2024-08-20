//Escribir un componente Table.js que arme una tabla de HTML
//donde las columnas sean el nombre de la marca y el ingreso neto.
//Escribir una etiqueta p que muestre el promedio de ingreso neto entre todas las marcas.
//Utilizar obligatoriamente la función reduce para calcular el promedio.

const Table =({array}) => {
    const incomes= array.map(company => company.income);
    const incomeSum= incomes.reduce((acc, company) => acc + company, 0);
    const average = (incomeSum / incomes.length).toFixed(3);
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
                    {array.map((company, index) => (
                        <tr key={index}>
                            <td>{company.brand}</td>
                            <td>{company.income}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Promedio de ingreso neto entre todas las companias: ${average}</p>
        </div>
    )
}
export default Table;