"use client"

import { useState } from "react";
import dogData from "./dogs.json";
import DogList from "./dog-list";

export default function AdoptionPage(){

    let dogArray = dogData.map( (dog) => ( {...dog} )  );
    const [listOfDogs, setListOfDogs] = useState(dogArray);

    return(
        <main>
            <DogList listOfDogsArray={listOfDogs} />
        </main>
    );
}