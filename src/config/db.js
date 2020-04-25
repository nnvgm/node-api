import mongoose from 'mongoose';

async function ConnectDB(mongoURI) {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected');
  } catch (error) {
    console.log(`Mongo ERROR: ${error}, MongoURI: ${mongoURI}`);
  }
}

export { ConnectDB };
