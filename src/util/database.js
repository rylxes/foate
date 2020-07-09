import mongoose from 'mongoose';

const connection = {};

//MongoDB connection func
const dbConnect = async () => {
  //Check for existing connection
  if(connection.isConnected){
    return;
  }

  //Make new connection
  const db = await mongoose.connect(process.env.MONGOURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
  });
  connection.isConnected = db.connections[0].readyState;
  console.log("Database connection:", connection.isConnected ? 'true': 'false')
}

export default dbConnect;



