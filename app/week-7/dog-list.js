import DogCard from "./dog-card";

export default function DogList({listOfDogsArray}){

    return(
        <section className="p-5">
            <h1 className="text-4xl text-center mb-3">Dogs for Adoption</h1>
            <div className="grid grid-cols-2 gap-5">
                {
                    listOfDogsArray.map(
                        (dog) => ( <DogCard dogObj={dog} /> )
                    )
                }
            </div>
        </section>
    );
}