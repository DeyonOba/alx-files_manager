import express from 'express';
import AppController from '../controllers/AppController';
import UserController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

const router = express.Router();

// GET /status => AppController.getStatus
router.get('/status', AppController.getStatus);

// GET /stats => AppController.getStats
router.get('/stats', AppController.getStats);

// POST /users => AppController.postNew
router.post('/users', AppController.postNew);

// POST /user => UsersController.postNew
router.get('/users/me', UserController.getMe);

// router.get('/connect', AuthController.getConnect);
// router.get('/disconnect', AuthController.getDisconnect);
// router.post('/files', FilesController.postUpload);
// router.get('/files/:id', FilesController.getShow);
// router.get('/files', FilesController.getIndex);
// router.put('/files/:id/publish', FilesController.putPublish);
// router.put('/files/:id/unpublish', FilesController.putUnpublish);
// router.get('/files/:id/data', FilesController.getFile);

export default router;
