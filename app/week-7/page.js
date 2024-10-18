"use client"

import { useState } from "react";
import dogData from "./dogs.json";
import DogList from "./dog-list";
import DogForm from "./dog-form";

export default function AdoptionPage(){

    let dogArray = dogData.map( (dog) => ( {...dog} )  );
    const [listOfDogs, setListOfDogs] = useState(dogArray);

    const addNewDog = (newDogObj) => {
        setListOfDogs( [...listOfDogs, newDogObj] );
    }

    const removeDog = (event) => {
        let thisDogList = listOfDogs.filter(
            (dog) => dog.id != event.target.getAttribute("data-dog-id")
        );
        setListOfDogs(thisDogList);
    }

    const [formOpen, setFormOpen] = useState(false);
    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);

    return(
        <main>
            { formOpen && <DogForm addNewDogFunc={addNewDog} closeFormFunc={closeForm} />}
            <div className="w-8 h-8 rounded-full overflow-hidden absolute right-10 top-6">
                <button
                    type="button"
                    onClick={openForm}
                    className="bg-blue-700 text-white text-3xl w-full h-full leading-none relative"
                >+</button>
            </div>
            <DogList listOfDogsArray={listOfDogs} removeDogFunc={removeDog} />
            
        </main>
    );
}