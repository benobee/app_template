import { userRouter } from './resources/user'

export const router = express.Router()

router.use('/user', userRouter)
router.use(apiErrorHandler)