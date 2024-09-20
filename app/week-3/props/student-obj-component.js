

export default function StudentObjComp({studentObj}){

    let {
        studentName:name,
        studentAge:age,
        address: {city, province:prv}
    } = studentObj;

    return (
        <div className="inline-block bg-green-500 border border-red-500 my-5 p-3 mx-3">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p>Age: {age}</p>
            <p>{city}, <b>{prv}</b></p>
        </div>
    );
}