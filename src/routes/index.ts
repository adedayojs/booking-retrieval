import { Router } from 'express';
// import sampleController from '../controllers/booking';

const router = Router();

router.get('/', function(_req, res, _next) {
  const message = { message: 'Hello World' };

  res.status(200).json({ message });
});

export default router;
