import { errors } from 'celebrate';
import express from 'express';
import { sendFrame } from './controller';

const router = express.Router({});

router.get('/_send', sendFrame);
router.use(errors());
export default router;
