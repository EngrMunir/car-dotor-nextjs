import { connectDB } from "@/lib/connectDB"

export const GET = async ()=>{
    const db = await connectDB()
    const servicesCollection = db.collection('services')
    try {
        await servicesCollection.deleteMany();
        const resp = await servicesCollection.insertMany(services);
        return Response.json({message:"Seeded Successfully"})
    } catch (error) {
        console.log(error)
    }
}