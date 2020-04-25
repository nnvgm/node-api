import express from 'express';

import httpStatus from './config/httpStatus';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(httpStatus.OK).json({
    data: 'OK',
  });
});

export default app;
