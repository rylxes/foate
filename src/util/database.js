import mongoose from 'mongoose';

const connection = {};

const dbConnect = async () => {
  if(connection.isConnected){
    return;
  }

  const db = await mongoose.connect(process.env.MONGOURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true
      useFindAndModify: false,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log("Database connection:", connection.isConnected ? 'true': 'false')
}

export default dbConnect;



