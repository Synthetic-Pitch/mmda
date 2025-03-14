import MongoDbConnect from "../../../../lib/mongoDbConnection";


export async function GET(){
    await MongoDbConnect()
    return new Response("Hello");
}