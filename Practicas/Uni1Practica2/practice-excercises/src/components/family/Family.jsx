import FamilyMember from "../familyMember/FamilyMember";

const Family = ({persons}) => {
    return (
        <div>
            {persons.map((person,index) => (
                <FamilyMember key={index} person={person}/>
            ))}
        </div>
    )
};

export default Family;