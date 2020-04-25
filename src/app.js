import express from 'express';

import httpStatus from './config/httpStatus';
import UserRoutes from './routes/api/v1/users';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(httpStatus.OK).json({
    data: 'OK',
  });
});

app.use('/api/v1/users', UserRoutes);

export default app;
