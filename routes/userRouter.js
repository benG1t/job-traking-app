import { Router } from 'express'
const router = Router()
import { login, logout, register } from '../controllers/authController.js'
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from '../controllers/userController.js'
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js'
import {
  authorizePermissions,
  checkForTestUser,
} from '../middleware/authMiddleware.js'
import upload from '../middleware/multerMiddleware.js'

router.get('/current-user', getCurrentUser)
router.get('/admin/app-stats', [
  authorizePermissions('admin'),
  getApplicationStats,
])
router.patch(
  '/update-user',
  checkForTestUser,
  upload.single('avatar'),
  validateUpdateUserInput,
  updateUser
)

export default router
