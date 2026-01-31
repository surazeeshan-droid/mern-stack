import express from 'express';
import { test } from '../controllers/user.Controller.js';

const router = express.Router();

router.get('/test',test); 
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
   


export default router;
