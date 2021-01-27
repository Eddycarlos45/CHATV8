import mongoose from 'mongoose'
import { UserSchema } from '../entities/usersSchema'

export default mongoose.model('users', UserSchema)