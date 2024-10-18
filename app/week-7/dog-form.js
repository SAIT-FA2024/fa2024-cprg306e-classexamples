"use client"

import { useState } from "react";

export default function DogForm() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    return(
        <div>
            <form>
                <h2>Add new dog for adoption</h2>
                <div>
                    <label>ID:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Breed:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Photo URL:</label>
                    <input type="text" />
                </div>
                <div>
                    <button type="submit">Add new dog</button>
                    <button type="button">Not Submit Button</button>
                </div>
            </form>
        </div>
    );
}