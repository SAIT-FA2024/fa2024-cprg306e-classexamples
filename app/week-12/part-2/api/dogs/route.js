import {z} from "zod";

export async function GET(){
    // retrieve all dogs from database
    // database functionality goes here
    const dogs = [
        { id: 1, name: "Luna", age: 2 },
        { id: 2, name: "Max", age: 4 },
        { id: 3, name: "Rover", age: 3 }
    ];

    return new Response( JSON.stringify(dogs), {status: 200} );
}

export async function POST(request){
    const newDog = await request.json();
    // validate the incoming data
    // if ( typeof newDog.name != 'string' || !newDog.name instanceof String) {
    //     // throw error if name is not a string
    // }
    const newDogSchema = z.object( {
        name: z.string(),
        age: z.number().min(1).max(30)
    } );

    try {
        newDogSchema.parse(newDog);
    } catch (error) {
        return new Response(null, {status: 406});
    }

    // add newDog to the database
    newDog.id = 4;
    // INSERT INTO dogs (id, name, age) VALUES (...)

    return new Response( JSON.stringify(newDog), {status: 201} );

}