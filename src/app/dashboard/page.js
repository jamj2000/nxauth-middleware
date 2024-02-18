import { auth } from "@/auth"

async function page() {
    const sesion = await auth()

    return (
        <>
            <h1> 🔑  Dashboard</h1 >
            <p> {sesion?.user.name}</p>
            <p> {sesion?.user.email} </p>
            <p> {sesion?.user.role} </p>
            <img src={sesion?.user.image}></img>
        </>)
}

export default page