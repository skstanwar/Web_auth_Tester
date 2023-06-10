import express from 'express';
const router = express.Router();
import {register } from '../userControl/userController.js'

router.post('/register', register);
// router.post('/login', login);

export default router;