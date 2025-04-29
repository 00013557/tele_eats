import express from 'express';
import { addAddress, getUserAddresses, updateAddress, deleteAddress} from '../controllers/addressController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// Route to add a new address
router.post('/add',authMiddleware, addAddress);

// Route to get all addresses of a user
router.post('/', authMiddleware, getUserAddresses);

// Route to update an address
router.put('/:id', authMiddleware, updateAddress);  

// Route to delete an address
router.delete('/:id', authMiddleware, deleteAddress);  

export default router;
