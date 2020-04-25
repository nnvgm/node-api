import app from './app';
import config from './config/main';
import { ConnectDB } from './config/db';

const { port, mongoURI } = config;

ConnectDB(mongoURI);

app.listen(port, () => console.log(`Server is running on port ${port}`));
