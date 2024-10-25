"use client"
import { useEffect, useState } from "react";
import Artwork from "./artwork";

export default function SingleArt(){

    const [singleArt, setSingleArt] = useState({});

    async function getSingleArtwork(){
        try {
            const response = await fetch(
                "https://collectionapi.metmuseum.org/public/collection/v1/objects/45734"
            );
            if( !response.ok ) console.log(response.statusText)
            // console.dir(response);
            const data = await response.json();
            // console.dir(data);
            setSingleArt(data);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect( () => {
        getSingleArtwork();
    } , [] );

    return(
        <section>
            <Artwork artObj={singleArt} />
        </section>
    );
}