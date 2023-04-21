import express from 'express';
const router = express.Router();
import {createPirate, deletePirate, getPirate, getPirates,  updatePirate } from '../controllers/pirates.js';
import auth from '../middleware/auth.js';


router.get('/pirates', auth, getPirates);
router.post('/pirate/new', auth, createPirate);
router.get('/pirate/:id', auth, getPirate);
router.patch('/pirate/:id', auth, updatePirate);
router.delete('/pirate/:id', auth, deletePirate);

export default router;