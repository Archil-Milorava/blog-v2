import express from 'express'

import { authCheck, createUser, logIn, logOut } from './user.controller.js'
import { protectedRoute } from '../../middleware/protectedRoute.js'

const userRouter = express.Router()


userRouter.post('/createUser', createUser)
userRouter.get('/login', logIn)
userRouter.get('/logOut', logOut)
userRouter.get('/currentUser', protectedRoute, authCheck)



export default userRouter