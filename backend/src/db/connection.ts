import { connect, disconnect } from "mongoose"

async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL)
    } catch(error) {
        console.log("error in db connection: ", error)
        throw new Error("Cannot connect to MongoDb")
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log("Error in Disconnection from db: ", error)
        throw new Error("Could NOT disconnect from db")        
    }
}

export {connectToDatabase, disconnectFromDatabase}
