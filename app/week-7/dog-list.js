import { useState } from "react";
import DogCard from "./dog-card";

export default function DogList({ listOfDogsArray, removeDogFunc }) {

    const [sortBy, setSortBy] = useState("id");

    listOfDogsArray.sort( (a, b) => {
        if (isNaN(parseInt(a[sortBy]))) {
            // sorting alphabetically
            let nameA = a[sortBy].toUpperCase();
            let nameB = b[sortBy].toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        } else {
            return a.id - b.id;
        }
    });

    const handleChangeSort = (event) => setSortBy(event.target.value);


    return (
        <section className="p-5">
            <h1 className="text-4xl text-center mb-3">Dogs for Adoption</h1>
            <div>
                <select onChange={handleChangeSort}>
                    <option value="id">ID</option>
                    <option value="name">Name</option>
                </select>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {
                    listOfDogsArray.map(
                        (dog) => (
                            <DogCard
                                dogObj={dog}
                                key={dog.id}
                                removeDogFunc={removeDogFunc}
                            />
                        )
                    )
                }
            </div>
        </section>
    );
}