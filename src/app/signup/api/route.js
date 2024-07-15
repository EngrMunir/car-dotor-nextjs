import { connectDB } from "@/lib/connectDB";

export const POST = async(request)=>{
    const newUser = await request.json();
    console.log('post page: ',newUser);

    try {
        const db = await connectDB();
        const userCollection = db.collection('users');
        const exist = await userCollection.findOne({email: newUser.email});
        if(exist){
            return Response.json({message: "User created"},{status: 200});
        }
        const resp = await userCollection.insertOne(newUser)
        return Response.json({message : "User Created"}, {status : 300})
        
    }
     
    catch (error) {
        return Response.json({message : "Something went wrong", error}, 
            {status: 500}
        );
    }
}