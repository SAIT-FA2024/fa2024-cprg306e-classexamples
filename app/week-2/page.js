import Link from "next/link";
import MyFirstComponent from "../_components/my-first-component";


export default function Page(){
    return (
        <main>
            <h1>Second Page</h1>
            <p>This is the second page of my React app!</p>
            <MyFirstComponent />
            <Link href="/">Home</Link>
            <Link href="../">Back</Link>
        </main>
    );
}