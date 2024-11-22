export async function GET(request, {params} ){
    const {id} = await params;
    const idNum = Number(id);
    // retrieve the list of dogs from the database
    // SELECT * FROM dogs
    const dogs = [
        { id: 1, name: "Luna", age: 2 },
        { id: 2, name: "Max", age: 4 },
        { id: 3, name: "Rover", age: 3 }
    ];

    let thisDog = dogs.find( (dog) => dog.id === idNum );
    if (!thisDog) {
        return new Response("This dog does not exist", {status:404});
    }
    return new Response( JSON.stringify(thisDog), {status:200} );
}

export async function PUT(request, {params}){
    const {id} = await params;
    const idNum = Number(id);
    let dog = await request.json();
    // validation & error handling on dog object
    // update dog number idNum in the database
    return new Response(null, {status:204});
}

export async function PATCH(request, {params}){
    const {id} = await params;
    const idNum = Number(id);
    let dog = await request.json();
    if (dog.name) {
        // update the dog name in the database for dog number [idNum]
    }
    if (dog.age) {
        // update the dog age in the database for dog number [idNum]
    }
    return new Response(null, {status:204});
}

export async function DELETE(request, {params}){
    const {id} = await params;
    const idNum = Number(id);
    // check for authenticated user
    // delete dog number [idNum] from database
    return new Response(null, {status:204});
}