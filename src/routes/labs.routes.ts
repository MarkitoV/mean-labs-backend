import { Router } from 'express';

import * as labsCtrl from '../controllers/labs.controller';

const router = Router();

router.post('/', labsCtrl.createLab);

router.get('/', labsCtrl.getLabs);

router.get('/:labId', labsCtrl.getLabById);

router.put('/:labId', labsCtrl.updateLabById);

router.delete('/:labId', labsCtrl.deleteLabById);

export default router;