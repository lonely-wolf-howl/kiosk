import express from 'express';

import testRouter from './test';
import itemRouter from './item';

const router = express.Router();

// http://localhost:3000/api
router.use('/', testRouter);
// http://localhost:3000/api/
router.use('/', itemRouter);

export default router;
