import { Router } from 'express';
import logger from '../logger/log.js';

const router = Router();

router.get('/success', function (req, res, next) {
  const profiler = logger.startTimer()

  // Fake Delay
  for (let i = 0; i < 1000000000; i++) { }

  res.status(200);
  res.json({
    message: "A successful request"
  })

  profiler.done({ message: "[ProductService] Request to /success processed." })
});


router.get('/failure', function (req, res, next) {

  // Fake Delay
  for (let i = 0; i < 1000000000; i++) { }

  res.status(500);
  res.json({
    message: "A failure request"
  })

  logger.error("[ProductService] Request to /failure failed.")
});


export default router;
