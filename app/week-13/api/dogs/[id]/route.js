import { neon } from "@neondatabase/serverless";

const dbUrl = process.env.DATABASE_URL || "";
const sql = neon(dbUrl);

export async function GET(request, {params} ){
    const {id} = await params;
    const idNum = Number(id);
    // retrieve the list of dogs from the database
    const response = await sql`SELECT * FROM dogs`;

    let thisDog = response.find( (dog) => dog.id === idNum );
    if (!thisDog) {
        return new Response("This dog does not exist", {status:404});
    }
    return new Response( JSON.stringify(thisDog), {status:200} );
}

export async function PUT(request, {params}){
    const {id} = await params;
    const idNum = Number(id);
    let dog = await request.json();
    // TODO: validation & error handling on dog object
    // update dog number idNum in the database
    const response = await sql`
    UPDATE dogs SET name = ${dog.name}, age = ${dog.age} WHERE id = ${idNum}
    RETURNING *`;
    return new Response( JSON.stringify(response) , {status:200});
}

export async function PATCH(request, {params}){
    const {id} = await params;
    const idNum = Number(id);
    let dog = await request.json();
    try {
        if (dog.name) {
            // update the dog name in the database for dog number [idNum]
            await sql`UPDATE dogs SET name = ${dog.name} WHERE id = ${idNum};`;
        }
        if (dog.age) {
            // update the dog age in the database for dog number [idNum]
            await sql`UPDATE dogs SET age = ${dog.age} WHERE id = ${idNum};`;
        }
    } catch (error) {
        return new Response("Database Error", {status:503})
    }
    return new Response(null, {status:204});
}

export async function DELETE(request, {params}){
    const {id} = await params;
    const idNum = Number(id);
    // check for authenticated user
    // delete dog number [idNum] from database
    await sql`DELETE FROM dogs WHERE id = ${idNum}`;
    return new Response(null, {status:204});
}