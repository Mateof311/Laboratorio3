import PersonItem from "../personItem/PersonItem";

const Persons = ({names}) => {
    const personsFiltered = names.filter(name =>name.charAt(0) === "P");
    return (
        <div>
            {personsFiltered.map((name, index) => (
                <PersonItem key={index} name={name} />
            ))}
        </div>
    );
};

export default Persons;